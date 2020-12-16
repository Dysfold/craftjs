import { Path } from 'java.nio.file';

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
     * Root path of current plugin.
     */
    readonly pluginRoot: Path;

    /**
     * Resolves a Node (node_modules) module root.
     * @param name Node module name.
     * @returns Root directory of the module.
     */
    resolveNodeModule(name: string): Path;

    /**
     * Evaluates JavaScript code.
     * @param code JavaScript in string.
     * @returns What the code evaluates to.
     */
    eval(code: string): any;

    /**
     * Calls a function after a delay in main server thread.
     * @param handler Function to call.
     * @param delay Delay in ticks.
     * @returns Task id.
     */
    scheduleOnce(handler: () => void, delay: number): number;

    /**
     * Repeatedly calls a function after a delay.
     * @param handler Function to call.
     * @param delay Delay before first call in ticks.
     * @param interval Ticks between calls.
     * @returns Task id.
     */
    scheduleRepeating(
      handler: () => void,
      delay: number,
      interval: number,
    ): number;
  };

  /**
   * Java interoperability provided by CraftJS.
   */
  const __interop: {
    /**
     * Converts Java byte array to string using UTF-8 charset.
     * @param bytes Byte array.
     */
    bytesToString(bytes: number[]): string;
  };

  /**
   * CraftJS index.ts required. Do not use outside of require() implementation.
   */
  const __craftjscore: any;
}
