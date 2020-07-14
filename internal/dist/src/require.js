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
        const error = global.patchError
            ? global.patchError(resolved, contents, e, line)
            : e;
        console.log(`Error while executing ${(_g = error.fileName) !== null && _g !== void 0 ? _g : src.getName()} at line ${error.lineNumber}`);
        console.error(e);
    }
    cache[cacheId] = module;
    stack.pop();
    return module.exports;
}
global.require = __require;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXF1aXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBSWxDLE1BQU0sS0FBSyxHQUF3QixFQUFFLENBQUM7QUFDdEMsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0FBRTNCLE1BQU0sbUJBQW9CLFNBQVEsS0FBSztJQUNyQyxZQUFZLE1BQWMsRUFBRSxNQUFZO1FBQ3RDLEtBQUssQ0FBQyxXQUFXLE1BQU0sZ0NBQWdDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFFRCxTQUFTLGFBQWEsQ0FBQyxNQUFZLEVBQUUsRUFBVTtJQUM3QyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtRQUM5QixPQUFPLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsTUFBWSxFQUFFLElBQVk7SUFDbkQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkUsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksTUFBTSxFQUFFO1FBQzVCLE9BQU8saUJBQWlCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3hDO1NBQU0s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