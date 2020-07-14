"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vlq = __importStar(require("vlq"));
const js_base64_1 = require("js-base64");
const java_nio_file_1 = require("java.nio.file");
function mapLineToSource({ mappings, sources }, jsLine) {
    const lines = mappings.split(';').map((line) => line.split(','));
    const decoded = lines.map((line) => line.map((col) => vlq.decode(col)));
    let sourceLine = 0;
    let sourceFile = 0;
    let result = 0;
    decoded.forEach((line, i) => {
        line.forEach((segment) => {
            var _a, _b;
            sourceLine += (_a = segment[2]) !== null && _a !== void 0 ? _a : 0;
            sourceFile += (_b = segment[1]) !== null && _b !== void 0 ? _b : 0;
        });
        if (i + 1 === jsLine) {
            result = sourceLine + 1;
        }
    });
    return {
        file: sources[sourceFile],
        line: result,
    };
}
exports.mapLineToSource = mapLineToSource;
function patchError(file, fileContents, error, lineNumber) {
    const lines = fileContents.split('\n');
    const sourceMapUrl = lines.find((line) => /\/\/# sourceMappingURL/.test(line));
    if (!sourceMapUrl) {
        return error;
    }
    const url = sourceMapUrl.split('=')[1];
    const isInline = /^data:application\/json;base64,/.test(url);
    const folder = file.getParent();
    const sourceMapFile = folder.resolve(url);
    if (!sourceMapFile.toFile().exists() && !isInline) {
        return error;
    }
    const sourceMapContents = isInline
        ? js_base64_1.Base64.decode(url.split('base64,')[1])
        : readFile(sourceMapFile.toString());
    const sourceMap = JSON.parse(sourceMapContents);
    if (lineNumber === -1) {
        return error;
    }
    const { file: sourceFile, line } = mapLineToSource(sourceMap, lineNumber);
    const sourcePath = folder.resolve(sourceFile);
    const relativeToJs = java_nio_file_1.Paths.get(__jsdir).relativize(sourcePath);
    error.lineNumber = line;
    error.fileName = relativeToJs.toString();
    return error;
}
global.mapLineToSource = mapLineToSource;
global.patchError = patchError;
//# sourceMappingURL=sourcemap.js.map