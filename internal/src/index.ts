export {};

declare global {
  /**
   * Internal CraftJS APIs.
   */
  const __internals: {
    /**
     * Reloads a JS plugin.
     * @param name Plugin name
     */
    reloadPlugin(name: string): boolean;

    /**
     * Calls a function in foreign plugin and namespace.
     * @param plugin Plugin name.
     * @param func Function name in global namespace.
     * @param args Arguments to the function. Non-primitive JS values are
     * NOT supported!
     * @returns Return value. Non-primitive JS values are not supported!
     */
    callForeign(plugin: string, func: string, ...args: unknown[]): unknown;
  };
}

require('./admin');
require('./test-runner');
