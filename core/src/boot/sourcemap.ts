import * as vlq from 'vlq';
import { Base64 } from 'java.util';

interface RawSourceMap {
  /**
   * List of source files used for this map.
   */
  sources: string[];

  /**
   * Actual mappings.
   */
  mappings: string;
}

interface SourceMap {
  /**
   * List of source files used for this map.
   */
  sources: string[];

  /**
   * Actual mappings.
   */
  mappings: number[][][];

  /**
   * Source map start offset. Lines before this are generated
   * (e.g. by require()) and are not mapped to anything.
   */
  startOffset: number;
}

function createCachedMap(raw: RawSourceMap): SourceMap {
  // Parse VLQ-formatted line and column positions
  const lines = raw.mappings.split(';').map((line) => line.split(','));
  const decoded = lines.map((line) => line.map((col) => vlq.decode(col)));
  return { sources: raw.sources, mappings: decoded, startOffset: 0 };
}

function loadSourceMap(fileContents: string): SourceMap | undefined {
  const lines = fileContents.split('\n');
  const sourceMapUrl = lines.find((line) =>
    /\/\/# sourceMappingURL/.test(line),
  );

  if (!sourceMapUrl) {
    return undefined; // Source map not specified
  }

  // Check if source map is inline (data URL) or external (file://)
  const url = sourceMapUrl.split('=')[1];
  const isInline = /^data:application\/json;base64,/.test(url);

  let sourceMapJson;
  if (isInline) {
    // Just borrow a decoder from Java side
    sourceMapJson = __interop.bytesToString(
      Base64.urlDecoder.decode(url.split('base64,')[1]),
    );
  } else {
    throw new Error('non-inline sourcemaps are currently not supported');
  }

  // Deserialize VLQs now
  const sourceMap = JSON.parse(sourceMapJson);
  return createCachedMap(sourceMap);
}

/**
 * Cached source maps.
 */
const cachedMaps: Map<string, SourceMap> = new Map();

function cacheSourceMap(
  plugin: string,
  file: string,
  content: string,
  startOffset: number,
): boolean {
  const map = loadSourceMap(content);
  if (map) {
    map.startOffset = startOffset;
    cachedMaps.set(`${plugin}:${file}`, map);
    return true;
  }
  return false;
}

function mapLineInternal(
  { mappings, sources }: SourceMap,
  jsLine: number,
): SourceLine {
  // Advance through both files and lines in source map
  let sourceLine = 0;
  let sourceFile = 0;
  let result = 0;
  for (let i = 0; i < mappings.length; i++) {
    const line = mappings[i];
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
  }
  throw new Error(`source map failed for line ${jsLine}`);
}

function mapLineToSource(
  plugin: string,
  file: string,
  line: number,
): SourceLine {
  const map = cachedMaps.get(`${plugin}:${file}`);
  if (map) {
    line -= map.startOffset; // Apply start offset
    if (line <= 0) {
      return { file: file, line: line }; // Not mapped line
    }

    const result = mapLineInternal(map, line);
    // line.file is relative path to JS file under dist
    // Normalize and relativize it against plugin root
    const pluginRoot = __craftjs.getPluginRoot(plugin);
    const distDir = pluginRoot.resolve('dist');
    result.file = pluginRoot
      .relativize(distDir.resolve(result.file).normalize())
      .toString();

    // If we somehow didn't get rid of ../ at beginning, strip it out
    if (result.file.startsWith('../')) {
      result.file = result.file.substring(3);
    }
    return result;
  } else {
    // Mapping not found, return original JS file and line
    return { file: file, line: line };
  }
}

declare global {
  /**
   * Line in a file with source code.
   */
  interface SourceLine {
    /**
     * File path, relative to directory where compiled JS file is.
     */
    file: string;

    /**
     * Line number.
     */
    line: number;
  }

  /**
   * Tries to load and cache a source map for given file.
   * @param plugin JS plugin name.
   * @param file JS file name.
   * @param content File content.
   * @param startOffset Source map start offset.
   * @returns If a source map was found.
   */
  function cacheSourceMap(
    plugin: string,
    file: string,
    content: string,
    startOffset: number,
  ): boolean;

  /**
   * Tries to map a JS line to its TS source.
   * @param plugin JS plugin name.
   * @param file JS file name.
   * @param line JS line.
   * @returns TS source, or given file and line if source map is not available.
   */
  function mapLineToSource(
    plugin: string,
    file: string,
    line: number,
  ): SourceLine;
}

globalThis.cacheSourceMap = cacheSourceMap;
globalThis.mapLineToSource = mapLineToSource;
