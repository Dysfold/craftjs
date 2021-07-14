// Define minimal types for GraalVM polyglot exception API

// Most methods and fields will be missing
export declare class JsError {
  readonly name: string;
  readonly message: string | null;
  readonly stack: FrameInfo[];
}

declare class FrameInfo {
  readonly javaFrame: boolean;
  readonly plugin: string;
  readonly source: string;
  readonly methodName: string;
  readonly fileName: string;
  readonly line: number;
}

const showAllFrames = __interop.systemProperty('craftjs.trace.allFrames');

/**
 * JS sources that should be hidden from stack traces.
 */
const hiddenScripts = new Set([
  'entrypoint', // Special name set by CraftJS Java code
  'dist/boot/errors.js',
  'dist/boot/require.js',
  'dist/boot/sourcemap.js',
]);
const hiddenClasses = new Set([
  'fi.valtakausi.craftjs.api.CraftJsContext',
  'fi.valtakausi.craftjs.api.JavaInterop',
  'org.graalvm.polyglot.Context',
  'com.oracle.truffle.polyglot.FunctionProxyHandler',
]);

/**
 * Checks if the given frame should be emitted in stack trace.
 * @param frame Frame to check
 */
function shouldEmitFrame(frame: FrameInfo): boolean {
  if (showAllFrames) {
    return true;
  }
  if (frame.javaFrame) {
    if (hiddenClasses.has(frame.source)) {
      return false;
    } else if (frame.source.startsWith('jdk.proxy')) {
      return false;
    }
  } else {
    if (hiddenScripts.has(frame.source)) {
      return false;
    }
  }
  return true;
}

function formatError(error: JsError): string {
  // Try to format error name and message
  let text = error.name;
  if (error.message) {
    text += `: ${error.message}\n`;
  } else {
    text += '\n';
  }

  for (const frame of error.stack) {
    // Filter out internal and usually unnecessary frames
    if (!shouldEmitFrame(frame)) {
      continue;
    }

    // Figure out original source file and line
    let line: SourceLine;
    let fileName: string;
    if (frame.javaFrame) {
      line = { file: frame.source, line: frame.line };
      fileName = frame.fileName;
    } else {
      if ('mapLineToSource' in globalThis) {
        line = mapLineToSource(frame.plugin, frame.source, frame.line);
        fileName = line.file.split('/').pop() ?? frame.fileName;
      } else {
        // Error occurred during early startup
        console.warn('Error in early startup, source maps will not work');
        line = { file: frame.source, line: frame.line };
        fileName = frame.fileName;
      }
    }
    text += `        at ${line.file} ${frame.methodName}(${fileName}:${line.line}) [${frame.plugin}]\n`;
  }
  return text;
}

function logError(error: Error, msg: string) {
  // Turn normal Error into introspectable JsError
  const jsError = __interop.catchError(() => {
    throw error;
  });

  // During early startup, logging might not be available yet
  const logger = 'log' in globalThis ? log.error : console.error;
  logger(msg); // Log user-specified message before error and stack trace
  logger(formatError(jsError as JsError)); // TS compiler doesn't know that jsError is never null
}

function catchAndLogError<A extends any[], R>(
  func: (...arg: A) => R | Promise<R>,
  msg: string,
): (...args: A) => R | undefined {
  return (...args) => {
    try {
      const ret = func(...args);
      // async functions need special handling to catch errors
      if (ret && 'catch' in ret) {
        ret.catch((e) => {
          logError(e, msg);
        });
        return undefined; // TODO support async returns
      } else {
        return ret;
      }
    } catch (e) {
      logError(e, msg);
    }
  };
}
globalThis.catchAndLogError = catchAndLogError;

declare global {
  /**
   * Formats error for logging.
   * @param error The error.
   * @returns Error message, including stack trace.
   */
  function formatError(error: JsError): string;

  /**
   * Logs an error to console.
   * @param error The error.
   * @param msg Message to log above the error.
   */
  function logError(error: Error, msg: string): void;

  /**
   * Wraps a function to catch and log errors thrown by it.
   * The function returns undefined when an error has been thrown and caught.
   * @param func Function that might throw an error.
   * @param msg Message to log above the error.
   * @returns A wrapped function.
   */
  function catchAndLogError<A extends any[], R>(
    func: (...args: A) => R | Promise<R>,
    msg: string,
  ): (...args: A) => R | undefined;
}
