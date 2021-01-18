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
  // If name is valid class name, return it
  // This could happen e.g. when inner classes are imported
  try {
    return Java.type(name);
  } catch (_e) {
    // Package or JS file
  }

  // Check if the package actually exists
  // Iterating GraalJS packages produces empty packages when it doesn't
  if (
    !PackageType.getPackage(name) &&
    !name.startsWith('net.md_5.bungee.api')
  ) {
    // FIXME Package.getPackage() works for current ClassLoader only
    // Add Bungeecord chat API as special case until we have a better solution
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
  // Use JS file at given path if it exists
  let fileName = module.fileName.toString();
  if (!fileName.endsWith('.js')) {
    fileName += '.js';
  }
  const jsFile = module.parent.resolve(fileName);
  if (FilesType.isRegularFile(jsFile)) {
    return jsFile;
  }

  // Look at package.json for module main
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
 * Cache of previously required JS modules.
 */
const moduleCache: Map<string, any> = new Map();

/**
 * Map of required Java packages.
 */
const packageCache: Map<string, any> = new Map();

/**
 * Current require stack.
 */
const stack: Path[] = [];

// let __zoraHarness: any;

function __require(id: string, relative?: string | Path): any {
  // Special case for CraftJS core (it is installed to globals by Java code)
  if (id.startsWith('craftjs-plugin')) {
    let module = __craftjscore;
    for (const name of id.split('/').slice(1)) {
      module = module[name];
    }
    return module;
  }

  // For ALL requires, check override table
  id = overrides[id] ?? id;

  // Check cached Java packages, maybe this represents one...
  if (packageCache.has(id)) {
    return packageCache.get(id);
  }

  // Figure out parent directory for require
  let parent: Path; // Parent folder of required thing
  if (relative) {
    // Relative to given path
    parent = relative instanceof PathType ? relative : PathType.of(relative);
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

  // Check cache as early as possible
  const cacheId = parent.resolve(id).normalize().toAbsolutePath().toString();
  if (moduleCache.has(cacheId)) {
    return moduleCache.get(cacheId);
  }

  // Try to 'import' a Java package
  const pkg = resolvePackage(id);
  if (pkg) {
    packageCache.set(cacheId, pkg); // Put to cache!
    return pkg; // Found package, use it as 'module'
  }

  // Resolve module entrypoint and add it to require stack
  const entrypoint = resolveModule(parent, id);
  if (!entrypoint) {
    throw new ModuleNotFoundError(id, parent);
  }
  stack.push(entrypoint);

  const contents = FilesType.readString(entrypoint);
  const relativePath = __craftjs.pluginRoot.relativize(entrypoint).toString();
  if ('cacheSourceMap' in globalThis) {
    // Load and cache source map for this file (except during early startup)
    // NOTE: startOffset should be equal to lines the closure has before contents
    if (!cacheSourceMap(__craftjs.plugin.name, relativePath, contents, 1)) {
      //console.warn(`Missing source map: ${relativePath}`);
      // TODO maybe warn for TS files (but how do we detect those?)
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

  moduleCache.set(cacheId, module.exports); // Cache the module
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
