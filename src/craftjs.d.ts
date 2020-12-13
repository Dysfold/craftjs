import { Path } from 'java.nio.file';
import { Map } from 'java.util';

declare global {
  /**
   * CraftJS Java API.
   */
  const __craftjs: {
    /**
     * CraftJS version string.
     */
    readonly version: string;

    /**
     * Paths to roots of JS plugins. They MAY refer to foreign file systems
     * (e.g. zip file system of CraftJS jar).
     */
    readonly pluginRoots: Map<string, Path>;

    /**
     * Gets plugin root based on an absolute path.
     * Note that e.g. paths used in imports are usually relative, so this
     * can't be used to simplify require() implementation.
     * @param absolute Absolute path.
     */
    getPluginRoot(absolute: Path);

    /**
     * Evaluates JavaScript code.
     * @param code JavaScript in string.
     * @returns What the code evaluates to.
     */
    eval(code: string): any;

    /**
     * Reloads a CraftJS plugin.
     * @param name Plugin name.
     */
    reloadPlugin(name: string);
  };

  /**
   * Converts Java byte array to string using UTF-8 charset.
   * @param bytes Byte array.
   */
  function bytesToString(bytes: number[]): string;
}
