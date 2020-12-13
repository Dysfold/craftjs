import * as vlq from 'vlq';
import { Files, Path } from 'java.nio.file';
import { Base64 } from 'java.util';

interface SourceMap {
  /**
   * List of source files used for this map.
   */
  sources: string[];

  /**
   * Actual mappings.
   */
  mappings: string;
}

/**
 * Line in a file with source code.
 */
interface SourceLine {
  /**
   * File path (probably relative to plugin directory).
   */
  file: string;

  /**
   * Line number.
   */
  line: number;
}

export function mapLineToSource(
  { mappings, sources }: SourceMap,
  jsLine: number,
): SourceLine {
  // Parse VLQ-formatted line and column positions
  const lines = mappings.split(';').map((line) => line.split(','));
  const decoded = lines.map((line) => line.map((col) => vlq.decode(col)));

  // Advance through both files and lines in source map
  let sourceLine = 0;
  let sourceFile = 0;
  let result = 0;
  decoded.forEach((line, i) => {
    line.forEach((segment) => {
      sourceLine += segment[2] ?? 0;
      sourceFile += segment[1] ?? 0;
    });

    // Return TS file/line number when we reach given JS line number
    if (i + 1 === jsLine) {
      result = sourceLine + 1;
      return {
        file: sources[sourceFile],
        line: result,
      };
    }
  });
  throw new Error(`source map failed for line ${jsLine}`);
}

function patchError(
  file: Path,
  fileContents: string,
  error: any,
  lineNumber: number,
) {
  if (lineNumber == -1) {
    return error; // No real number, nothing to replace
  }
  const lines = fileContents.split('\n');
  const sourceMapUrl = lines.find((line) =>
    /\/\/# sourceMappingURL/.test(line),
  );

  if (!sourceMapUrl) {
    return error; // Source map not specified, we'll have to deal with original
  }

  // Check if source map is inline (data URL) or external (file://)
  const url = sourceMapUrl.split('=')[1];
  const isInline = /^data:application\/json;base64,/.test(url);

  const sourceDir = file.parent;
  let sourceMapJson;
  if (isInline) {
    // Just borrow a decoder from Java side
    sourceMapJson = bytesToString(
      Base64.urlDecoder.decode(url.split('base64,')[1]),
    );
  } else {
    // Assume file URL, we're not making HTTP requests here
    const mapFile = sourceDir.resolve(url);
    if (!Files.exists(mapFile)) {
      console.warn(`Missing source map file ${mapFile}`);
      return error; // Missing source map file, just use original error
    }
    sourceMapJson = Files.readString(mapFile);
  }

  // Find TS file and line number
  const sourceMap = JSON.parse(sourceMapJson);
  const mapped = mapLineToSource(sourceMap, lineNumber);
  const sourcePath = sourceDir.resolve(mapped.file);

  // Patch error with line number and suitable absolute path
  const relativeToJs = __craftjs
    .getPluginRoot(sourceDir)
    .relativize(sourcePath);
  error.lineNumber = mapped.line;
  error.fileName = relativeToJs.toString();
  return error;
}

declare global {
  /**
   * Maps a line number in JavaScript file to a line number in original
   * TypeScript source.
   * @param sourceMap Source map to use.
   * @param jsLine JavaScript line number.
   */
  function mapLineToSource(sourceMap: SourceMap, jsLine: number): void;

  /**
   * Patch an error to refer to TypeScript code.
   * @param file Compiled JavaScript file.
   * @param fileContent JS file content.
   * @param error The error object.
   * @param lineNumber JS line number. This is given separately in case the JS
   * actually executed was patched (e.g. for require module support).
   */
  function patchError(
    file: Path,
    fileContent: string,
    error: Error,
    lineNumber: number,
  ): Error;
}

globalThis.mapLineToSource = mapLineToSource;
globalThis.patchError = patchError;
