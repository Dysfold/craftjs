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
     * Evaluates JavaScript code.
     * @param code JavaScript in string.
     * @returns What the code evaluates to.
     */
    eval: (code: string) => any;
  };
}
