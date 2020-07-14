"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Paths = java.nio.file.Paths;
const cache = {};
const stack = [];
class ModuleNotFoundError extends Error {
    constructor(module, parent) {
        super(`Module '${module}' could not be resolved from ${parent}`);
        this.name = 'ModuleNotFoundError';
    }
}
function resolveModule(parent, id) {
    if (id.match(/^[0-9A-Za-z_-]/)) {
        return resolveNodeModule(parent, id);
    }
    return Paths.get(parent.toString(), id);
}
function resolveNodeModule(folder, name) {
    const file = Paths.get(folder.toString(), 'node_modules').toFile();
    const parent = folder.getParent();
    if (!file.exists() && parent) {
        return resolveNodeModule(parent, name);
    }
    else if (file.exists() && file.isDirectory()) {
        return Paths.get(file.getPath(), name);
    }
    return null;
}
function jsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (_a) {
        return undefined;
    }
}
function getEntrypoint(directory) {
    var _a;
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
    const jsFile = (_a = file
        .getParent()) === null || _a === void 0 ? void 0 : _a.resolve(file.getFileName().toString() + '.js');
    if (file.toFile().exists()) {
        return file;
    }
    else if (jsFile === null || jsFile === void 0 ? void 0 : jsFile.toFile().exists()) {
        return jsFile;
    }
    return def;
}
function resolveFile(path) {
    var _a, _b;
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
        return Paths.get((_b = (_a = path.getParent()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '.', `${name}.js`);
    }
    return path;
}
function getPackage(path) {
    const parts = path.split('.');
    let obj = Packages;
    for (const part of parts) {
        obj = obj[part];
    }
    return obj;
}
const overrides = {
    path: 'path-browserify',
    tty: 'tty-browserify',
};
function __require(id, relative) {
    var _a, _b, _c, _d, _e, _f, _g;
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
        : Paths.get((_a = stack.slice(-1)[0]) !== null && _a !== void 0 ? _a : '.', '.');
    const folder = resolveModule(parent, id);
    const resolved = (_b = resolveFile(folder)) === null || _b === void 0 ? void 0 : _b.normalize();
    if (!resolved || !resolved.toFile().exists()) {
        throw new ModuleNotFoundError(id, parent);
    }
    const cacheId = resolved.toAbsolutePath().toString();
    if (cache[cacheId]) {
        return cache[cacheId].exports;
    }
    stack.push((_d = (_c = resolved.getParent()) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '.');
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
        func(module, exports, resolved.toString(), (_f = (_e = resolved.getParent()) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '.');
    }
    catch (e) {
        const line = e.lineNumber ? e.lineNumber - 2 : -1;
        console.log(`Error while executing ${(_g = e.fileName) !== null && _g !== void 0 ? _g : src.getName()} at line ${line}`);
        console.error(e);
    }
    cache[cacheId] = module;
    stack.pop();
    return module.exports;
}
global.require = __require;
//# sourceMappingURL=require.js.map