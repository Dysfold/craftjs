"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Paths = java.nio.file.Paths;
const cache = {};
const stack = [];
global.__requireStack = stack;
class ModuleNotFoundError extends Error {
    constructor(module, parent) {
        super(`Module '${module}' could not be resolved from ${parent}`);
        this.name = 'ModuleNotFoundError';
    }
}
function resolveModule(parent, id) {
    if (id[0] !== '.') {
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
    const ext = parts.slice(-1)[0];
    if (ext !== 'js' && ext !== 'mjs') {
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
let __zoraHarness;
function __require(id, relative) {
    var _a, _b, _c, _d, _e, _f;
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
        : (_b = Paths.get((_a = stack.slice(-1)[0]) !== null && _a !== void 0 ? _a : '.').getParent()) !== null && _b !== void 0 ? _b : Paths.get('.');
    const folder = resolveModule(parent, id);
    const resolved = (_c = resolveFile(folder)) === null || _c === void 0 ? void 0 : _c.normalize();
    // Zora require hook for CI test running purposes
    if (id === 'zora' && !relative) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const zora = require('zora', parent.toString());
        if (!__zoraHarness) {
            __zoraHarness = zora.createHarness();
            global.__zoraHarness = __zoraHarness;
        }
        const { test: testFunc } = __zoraHarness;
        return Object.assign(Object.assign({}, zora), { test(...args) {
                const test = testFunc(...args);
                return test;
            } });
    }
    if (!resolved || !resolved.toFile().exists()) {
        throw new ModuleNotFoundError(id, parent);
    }
    const cacheId = resolved.toAbsolutePath().toString();
    if (cache[cacheId]) {
        return cache[cacheId].exports;
    }
    stack.push(resolved.toString());
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
        func(module, exports, resolved.toString(), (_e = (_d = resolved.getParent()) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : '.');
    }
    catch (e) {
        const line = e.lineNumber ? e.lineNumber - 2 : -1;
        const error = global.patchError
            ? global.patchError(resolved, contents, e, line)
            : e;
        console.log(`Error while executing ${(_f = error.fileName) !== null && _f !== void 0 ? _f : src.getName()} at line ${error.lineNumber}`);
        console.error(e);
    }
    cache[cacheId] = module;
    stack.pop();
    return module.exports;
}
global.require = __require;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXF1aXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBSWxDLE1BQU0sS0FBSyxHQUF3QixFQUFFLENBQUM7QUFDdEMsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0FBTTFCLE1BQWMsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBRXZDLE1BQU0sbUJBQW9CLFNBQVEsS0FBSztJQUNyQyxZQUFZLE1BQWMsRUFBRSxNQUFZO1FBQ3RDLEtBQUssQ0FBQyxXQUFXLE1BQU0sZ0NBQWdDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFFRCxTQUFTLGFBQWEsQ0FBQyxNQUFZLEVBQUUsRUFBVTtJQUM3QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDakIsT0FBTyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLE1BQVksRUFBRSxJQUFZO0lBQ25ELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25FLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLE1BQU0sRUFBRTtRQUM1QixPQUFPLGlCQUFpQixDQUFDLE1B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