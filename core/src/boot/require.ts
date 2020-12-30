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
  // Check if the package actually exists
  // Iterating GraalJS packages produces empty packages when it doesn't
  if (!PackageType.getPackage(name)) {
    // FIXME: this checks current ClassLoader only, breaks importing from other loaders
    return null;
  }

  const parts = name.split('.');
  let pkg = Packages;
  for (const part of parts) {
    pkg = pkg[part];
  }
  return pkg;
}

/**
 * Resolves a JS/TS module.
 * @see resolvePackage
 * @param parent Path to parent directory of module.
 * @param name Module name.
 * @returns Entrypoint of the resolved module, or null if resolution failed.
 */
function resolveModule(parent: Path, name: string): Path | null {
  // Special case for Node (npm) modules
  if (name[0] !== '.') {
    return resolveNodeModule(name);
  }

  // Relative path module resolution
  if (!name.endsWith('.js')) {
    name = name + '.js';
  }
  const module = parent.resolve(name);
  if (FilesType.exists(module)) {
    return module;
  } else {
    return null; // Module doesn't seem to exist
  }
}

/**
 * Resolves a Node module of current plugin.
 * @param name Module name.
 * @returns Entrypoint of the module, or null.
 */
function resolveNodeModule(name: string): Path | null {
  const modules = __craftjs.pluginRoot.resolve('node_modules');
  if (!FilesType.isDirectory(modules)) {
    return null; // Definitely no modules here
  }
  return getEntrypoint(modules.resolve(name));
}

/**
 * Resolves the entrypoint of a Node module.
 * @param module Path to module directory.
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
    return null; // Entrypoint not found, oops?
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
 * Current require stack.
 */
const stack: Path[] = [];

// let __zoraHarness: any;

function __require(id: string, relative?: string): any {
  // Special case for CraftJS core (it is installed to globals by Java code)
  if (id == 'craftjs') {
    return __craftjscore;
  }

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
    if (stack.length == 0) {
      // First call to require, start at JS dist directory
      parent = __craftjs.pluginRoot.resolve('dist');
    } else {
      // Directory of entrypoint file that was last required
      parent = stack[stack.length - 1].parent;
    }
  }

  // Resolve module entrypoint and add it to require stack
  const entrypoint = resolveModule(parent, id);
  if (!entrypoint) {
    throw new ModuleNotFoundError(id, parent);
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

  const contents = FilesType.readString(entrypoint);
  const relativePath = __craftjs.pluginRoot.relativize(entrypoint).toString();
  if ('cacheSourceMap' in globalThis) {
    // Load and cache source map for this file (except during early startup)
    // NOTE: startOffset should be equal to lines the closure has before contents
    if (!cacheSourceMap(__craftjs.plugin.name, relativePath, contents, 1)) {
      console.warn(`Missing source map: ${relativePath}`);
    }
  }

  // Wrap module as a function (for CommonJS module support)
  const exports = {};
  const module = {
    exports,
  };
  const closure = `(function(module, exports, __filename, __dirname){
${contents}
  })
  `;

  // Evaluate and execute
  const func = __craftjs.eval(closure, relativePath);
  func(
    module,
    exports,
    entrypoint.toString(),
    entrypoint.parent?.toString() ?? '.',
  );

  cache.set(cacheId, module); // Cache the module
  stack.pop(); // Module has been executed
  return module.exports;
}

// Export our require to globals
declare global {
  function require(id: string, relative?: string): any;
}
globalThis.require = __require;

/**
 * CraftJS core entrypoint for Java code.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function __coreEntrypoint(): boolean {
  return handleError(
    () => ((globalThis as any).__craftjscore = require('./index')),
    'Critical: Failed to load craftjs core',
  );
}

/**
 * Plugin entrypoint called by Java code.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function __pluginEntrypoint(entrypoint: string): boolean {
  // Wrap require() to catch errors that might occur when loading plugin
  return handleError(
    () => require(entrypoint),
    `Failed to load entrypoint ${entrypoint}`,
  );
}