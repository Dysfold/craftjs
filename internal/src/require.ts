import { Path } from 'java.nio.file';

const Paths = java.nio.file.Paths;

declare const readFile: any;

const cache: Record<string, any> = {};
const stack: string[] = [];

class ModuleNotFoundError extends Error {
  constructor(module: string, parent: Path) {
    super(`Module '${module}' could not be resolved from ${parent}`);
  }
}

function resolveModule(parent: Path, id: string): Path | null {
  if (id.match(/^[0-9A-Za-z_-]/)) {
    return resolveNodeModule(parent, id);
  }
  return Paths.get(parent.toString(), id);
}

function resolveNodeModule(folder: Path, name: string): Path | null {
  const file = Paths.get(folder.toString(), 'node_modules').toFile();
  const parent = folder.getParent();
  if (!file.exists() && parent) {
    return resolveNodeModule(parent, name);
  } else if (file.exists() && file.isDirectory()) {
    return Paths.get(file.getPath(), name) as Path;
  }
  return null;
}

function jsonParse(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return undefined;
  }
}

function getEntrypoint(directory: Path) {
  const def = directory.resolve('index.js');
  const packageJson = directory.resolve('package.json').toFile();
  if (!packageJson.exists()) {
    return def;
  }
  const contents = jsonParse(readFile(packageJson.getPath()));
  if (!contents) {
    return def;
  }
  const file = contents.main ? directory.resolve(contents.main) : def;
  const jsFile = file
    .getParent()
    ?.resolve(file.getFileName().toString() + '.js') as Path | undefined;
  if (file.toFile().exists()) {
    return file;
  } else if (jsFile?.toFile().exists()) {
    return jsFile;
  }
  return def;
}

function resolveFile(path: Path | null) {
  if (!path) {
    return null;
  }

  const file = path.toFile();
  const name = path.getFileName();
  const parts = name.toString().split('.');
  if (file.exists() && file.isDirectory()) {
    return getEntrypoint(path);
  }
  if (parts.length === 1) {
    return Paths.get(path.getParent()?.toString() ?? '.', `${name}.js`) as Path;
  }
  return path;
}

function getPackage(path: string) {
  const parts = path.split('.');
  let obj = Packages;
  for (const part of parts) {
    obj = obj[part];
  }
  return obj;
}

const overrides: Record<string, string> = {
  path: 'path-browserify',
  tty: 'tty-browserify',
};

function __require(id: string, relative?: string): any {
  const pkg = java.lang.Package.getPackage(id);
  if (pkg) {
    return getPackage(id);
  }

  const override = overrides[id];
  if (override) {
    return require(override);
  }

  const parent = relative
    ? Paths.get(relative)
    : Paths.get(stack.slice(-1)[0] ?? '.', '.');
  const folder = resolveModule(parent, id);
  const resolved = resolveFile(folder)?.normalize();

  if (!resolved || !resolved.toFile().exists()) {
    throw new ModuleNotFoundError(id, parent);
  }

  const cacheId = resolved.toAbsolutePath().toString();

  if (cache[cacheId]) {
    return cache[cacheId].exports;
  }

  stack.push(resolved.getParent()?.toString() ?? '.');
  const exports = {};
  const module = {
    exports,
  };
  const contents = readFile(resolved.toString());
  const closure = `
  (function(module, exports, __filename, __dirname){
${contents}
  })
  `;
  const src = org.graalvm.polyglot.Source.newBuilder('js', resolved.toFile())
    .content(closure)
    .build();
  try {
    const func = __ctx.eval(src);
    func(
      module,
      exports,
      resolved.toString(),
      resolved.getParent()?.toString() ?? '.',
    );
  } catch (e) {
    const pos = [
      'lineNumber' in e ? e.lineNumber : '',
      'columnNumber' in e ? e.columnNumber : '',
    ]
      .filter(Boolean)
      .join(':');
    console.log(`Error while executing ${src.getName()} at ${pos}`);
    console.error(e);
  }
  cache[cacheId] = module;
  stack.pop();
  return module.exports;
}

global.require = __require;
