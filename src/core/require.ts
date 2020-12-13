import { Files, Path } from 'java.nio.file';
import { Package } from 'java.lang';

// BEWARE: require() and friends have not been defined yet
// We CAN import things to use them as types (as shown above)
// We CANNOT call static methods on anything we've imported
// As long as tsc won't emit a require() it is ok
// If needed, use Java.type directly as workaround
const FilesType: typeof Files = Java.type('java.nio.file.Files');
const PathType: typeof Path = Java.type('java.nio.file.Path');
const PackageType: typeof Package = Java.type('java.lang.Package');

// declare global {
//   const __zoraHarness: import('zora').TestHarness;
// }

class ModuleNotFoundError extends Error {
  constructor(module: string, parent: Path) {
    super(`Module '${module}' could not be resolved from ${parent}`);
    this.name = 'ModuleNotFoundError';
  }
}

/**
 * Gets a GraalJS representation of Java package from its name.
 * @see resolveModule
 * @param name Package name.
 * @returns Package or null if no such package exists.
 */
function resolvePackage(name: string): JavaPackage | null {
  const parts = name.split('.');
  let pkg = Packages;
  for (const part of parts) {
    const child = pkg[part];
    if (child instanceof PackageType) {
      pkg = child;
    } else {
      return null; // Reached a class or nonexistent package
    }
  }
  return pkg;
}

/**
 * Resolves a JS/TS module.
 * @see resolvePackage
 * @param parent Path to parent directory of module.
 * @param name Module name.
 * @returns Resolved module, or null if it cannot be found.
 */
function resolveModule(parent: Path, name: string): Path | null {
  if (name[0] !== '.') {
    return resolveNodeModule(name);
  }
  return PathType.of(parent.toString(), name);
}

/**
 * Resolves a Node module of current plugin.
 * @param name Module name.
 */
function resolveNodeModule(name: string): Path | null {
  const pluginRoot = __craftjs.pluginRoots.get(currentPlugin);
  const modules = pluginRoot.resolve('node_modules');
  if (!FilesType.isDirectory(modules)) {
    return null; // Definitely no modules here
  }
  return modules.resolve(name);
}

/**
 * Resolves the entrypoint of a module.
 * @param module Path to module.
 * @returns Path to entry point, or null if no entry point was found.
 */
function getEntrypoint(module: Path): Path | null {
  const packageJson = module.resolve('package.json');
  if (FilesType.exists(packageJson)) {
    // Does package.json tell where entrypoint is?
    const main = JSON.parse(FilesType.readString(packageJson)).main;
    if (main) {
      return module.resolve(main);
    }
  }

  // Fall back to default entrypoint
  const entrypoint = module.resolve('index.js');
  if (FilesType.exists(entrypoint)) {
    return entrypoint;
  } else {
    return null;
  }
}

const overrides: Record<string, string> = {
  path: 'path-browserify',
  tty: 'tty-browserify',
};

/**
 * Cache of previously required modules.
 */
const cache: Map<string, any> = new Map();

/**
 * Id of currently required plugin.
 */
let currentPlugin: string;

/**
 * Current require stack.
 */
const stack: Path[] = [];

// let __zoraHarness: any;

function __require(id: string, relative?: string): any {
  // For ALL requires, check override table
  id = overrides[id] ?? id;

  // Check cache as early as possible
  const cacheId = (relative ?? '/') + id;
  if (cache.has(cacheId)) {
    return cache.get(cacheId);
  }

  // Try to 'import' a Java package
  const pkg = resolvePackage(id);
  if (pkg) {
    cache.set(cacheId, pkg); // Put to cache!
    return pkg; // Found package, use it as 'module'
  }

  // Figure out parent directory for require
  let parent: Path; // Parent folder of required thing
  if (relative) {
    // Relative to given path
    parent = PathType.of(relative);
  } else {
    // Relative to module that called require this time
    // Figure it out by looking at require stack we're keeping
    parent = stack[stack.length - 1].parent ?? Path.of('.');
  }

  // Resolve module
  const folder = resolveModule(parent, id);
  if (!folder) {
    throw new ModuleNotFoundError(id, parent);
  }

  // Get entrypoint, add to stack
  const entrypoint = getEntrypoint(folder);
  if (!entrypoint) {
    // Shouldn't get this far...
    throw new ModuleNotFoundError(id, parent); // TODO better errors
  }
  stack.push(entrypoint);

  // Zora require hook for CI test running purposes
  // if (id === 'zora' && !relative) {
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires
  //   const zora = require('zora', parent.toString());
  //   if (!__zoraHarness) {
  //     __zoraHarness = zora.createHarness();
  //     (global as any).__zoraHarness = __zoraHarness;
  //   }
  //   const { test: testFunc } = __zoraHarness;
  //   return {
  //     ...zora,
  //     test(...args: any[]) {
  //       const test = testFunc(...args);
  //       return test;
  //     },
  //   };
  // }

  // Wrap module as a function (for CommonJS module support)
  const exports = {};
  const module = {
    exports,
  };
  const contents = FilesType.readString(entrypoint);
  const closure = `
  (function(module, exports, __filename, __dirname){
${contents}
  })
  `;

  // Evaluate and execute
  try {
    const func = __craftjs.eval(closure);
    func(
      module,
      exports,
      entrypoint.toString(),
      entrypoint.parent?.toString() ?? '.',
    );
  } catch (error) {
    const line = error.lineNumber ? error.lineNumber - 2 : -1;
    patchError(entrypoint, contents, error, line);

    console.log(
      `Error while executing ${error.fileName ?? error.name} at line ${
        error.lineNumber
      }`,
    );
    console.error(error);
  }

  cache.set(cacheId, module); // Cache the module
  stack.pop(); // Module has been executed
  return module.exports;
}

// Export our require to globals
declare global {
  function require(id: string, relative?: string): any;
}
globalThis.require = __require;
