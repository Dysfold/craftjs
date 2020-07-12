"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Paths = java.nio.file.Paths;
const cache = {};
const stack = [];
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
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function require(id) {
    var _a, _b, _c;
    const pkg = java.lang.Package.getPackage(id);
    if (pkg) {
        return getPackage(id);
    }
    const override = overrides[id];
    if (override) {
        return require(override);
    }
    const parent = Paths.get((_a = stack.slice(-1)[0]) !== null && _a !== void 0 ? _a : '.', '.');
    const resolved = resolveFile(resolveModule(parent, id)).normalize();
    const cacheId = resolved.toAbsolutePath().toString();
    if (cache[cacheId]) {
        return cache[cacheId].exports;
    }
    stack.push((_c = (_b = resolved.getParent()) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : '.');
    const exports = {};
    const module = {
        exports,
    };
    const contents = readFile(resolved.toString());
    const closure = `
  (function(module, exports, __filename){
${contents}
  })
  `;
    const src = org.graalvm.polyglot.Source.newBuilder('js', resolved.toFile())
        .content(closure)
        .build();
    try {
        const func = __ctx.eval(src);
        func(module, exports, resolved.toString());
    }
    catch (e) {
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
