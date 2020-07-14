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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlbWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NvdXJjZW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5Q0FBMkI7QUFDM0IseUNBQW1DO0FBQ25DLGlEQUE0QztBQXVCNUMsU0FBZ0IsZUFBZSxDQUM3QixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQWEsRUFDaEMsTUFBYztJQUVkLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakUsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7WUFDdkIsVUFBVSxVQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUNBQUksQ0FBQyxDQUFDO1lBQzlCLFVBQVUsVUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLG1DQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDcEIsTUFBTSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU87UUFDTCxJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUN6QixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7QUFDSixDQUFDO0FBdEJELDBDQXNCQztBQUVELFNBQVMsVUFBVSxDQUNqQixJQUFVLEVBQ1YsWUFBb0IsRUFDcEIsS0FBVSxFQUNWLFVBQWtCO0lBRWxCLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ3ZDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDcEMsQ0FBQztJQUNGLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkMsTUFBTSxRQUFRLEdBQUcsaUNBQWlDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDakQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0saUJBQWlCLEdBQUcsUUFBUTtRQUNoQyxDQUFDLENBQUMsa0JBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBRXZDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNoRCxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsZUFBZSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sWUFBWSxHQUFHLHFCQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvRCxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixLQUFLLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN6QyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyJ9