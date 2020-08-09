"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapLineToSource = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlbWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NvdXJjZW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJCO0FBQzNCLHlDQUFtQztBQUNuQyxpREFBNEM7QUF1QjVDLFNBQWdCLGVBQWUsQ0FDN0IsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFhLEVBQ2hDLE1BQWM7SUFFZCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDbkIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7O1lBQ3ZCLFVBQVUsVUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLG1DQUFJLENBQUMsQ0FBQztZQUM5QixVQUFVLFVBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxtQ0FBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ3BCLE1BQU0sR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPO1FBQ0wsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDekIsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0FBQ0osQ0FBQztBQXRCRCwwQ0FzQkM7QUFFRCxTQUFTLFVBQVUsQ0FDakIsSUFBVSxFQUNWLFlBQW9CLEVBQ3BCLEtBQVUsRUFDVixVQUFrQjtJQUVsQixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUN2Qyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ3BDLENBQUM7SUFDRixJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZDLE1BQU0sUUFBUSxHQUFHLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU3RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEMsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLGlCQUFpQixHQUFHLFFBQVE7UUFDaEMsQ0FBQyxDQUFDLGtCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUV2QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDaEQsSUFBSSxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDckIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLGVBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUUsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxNQUFNLFlBQVksR0FBRyxxQkFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFL0QsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDeEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDekMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMifQ==