import * as vlq from 'vlq';
import { Base64 } from 'js-base64';
import { Path, Paths } from 'java.nio.file';

declare global {
  /**
   * Maps a line from a javascript file to the corresponding line in the original source file
   * @param param0 The source map
   * @param jsLine Line number to transform
   */
  function mapLineToSource(sourceMap: SourceMap, jsLine: number): void;

  function patchError(
    file: Path,
    contents: string,
    error: Error,
    lineNumber: number,
  ): Error;
}

interface SourceMap {
  sources: string[];
  mappings: string;
}

export function mapLineToSource(
  { mappings, sources }: SourceMap,
  jsLine: number,
) {
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

function patchError(
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

  const isInline = /^data:application\/json;base64,/.test(url);

  const folder = file.getParent();
  const sourceMapFile = folder.resolve(url);
  if (!sourceMapFile.toFile().exists() && !isInline) {
    return error;
  }

  const sourceMapContents = isInline
    ? Base64.decode(url.split('base64,')[1])
    : readFile(sourceMapFile.toString());

  const sourceMap = JSON.parse(sourceMapContents);
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
global.patchError = patchError;
