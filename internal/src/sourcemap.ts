import * as vlq from 'vlq';
import { Path, Paths } from 'java.nio.file';

declare global {
  /**
   * Maps a line from a javascript file to the corresponding line in the original source file
   * @param param0 The source map
   * @param jsLine Line number to transform
   */
  function mapLineToSource(sourceMap: SourceMap, jsLine: number): void;

  function generateErrorMessage(
    file: Path,
    contents: string,
    error: Error,
    lineNumber: number,
  ): void;
}

interface SourceMap {
  sources: string[];
  mappings: string;
}

function mapLineToSource({ mappings, sources }: SourceMap, jsLine: number) {
  const lines = mappings.split(';').map((line) => line.split(','));
  const decoded = lines.map((line) => line.map((col) => vlq.decode(col)));
  let sourceLine = 0;
  let sourceFile = 0;
  let result = 0;
  decoded.forEach((line, i) => {
    line.forEach((segment) => {
      sourceLine += segment[2] ?? 0;
      sourceFile += segment[1] ?? 0;
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

function generateErrorMessage(
  file: Path,
  fileContents: string,
  error: any,
  lineNumber: number,
) {
  const lines = fileContents.split('\n');
  const sourceMapUrl = lines.find((line) =>
    /\/\/# sourceMappingURL/.test(line),
  );
  if (!sourceMapUrl) {
    return error;
  }
  const url = sourceMapUrl.split('=')[1];
  const folder = file.getParent();
  const sourceMapFile = folder.resolve(url);
  if (!sourceMapFile.toFile().exists()) {
    return error;
  }
  const sourceMap = JSON.parse(readFile(sourceMapFile.toString()));
  if (lineNumber === -1) {
    return error;
  }
  const { file: sourceFile, line } = mapLineToSource(sourceMap, lineNumber);
  const sourcePath = folder.resolve(sourceFile);
  const relativeToJs = Paths.get(__jsdir).relativize(sourcePath);

  error.lineNumber = line;
  error.fileName = relativeToJs.toString();
  return error;
}

global.mapLineToSource = mapLineToSource;
global.generateErrorMessage = generateErrorMessage;
