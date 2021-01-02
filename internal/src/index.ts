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
  };
}

require('./admin');
