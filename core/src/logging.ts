export {};

declare global {
  /**
   * A logger allows printing messages of various levels to console and the
   * server logs.
   */
  class Logger {
    /**
     * Logs a message at ERROR level.
     * @param msg The message.
     */
    error(...msgs: any[]): void;

    /**
     * Logs a message at WARN level.
     * @param msg The message.
     */
    warn(...msgs: any[]): void;

    /**
     * Logs a message at INFO level.
     * @param msg The message.
     */
    info(...msgs: any[]): void;

    /**
     * Logs a message at INFO level if debugging has been enabled for this JS
     * plugin.
     *
     * To enable debugging, set craftjs.debug system property to a
     * comma-separated list of plugins it should be enabled for. This can be done
     * with a JVM argument, e.g. -Dcraftjs.debug=list,of,plugins
     * @param msg The message.
     */
    debug(...msgs: any[]): void;
  }

  /**
   * Logger of this plugin.
   */
  const log: Logger;
}

// This initially logs as craftjs-core
// Java code injects JS plugin logger in place when core has been loaded
(globalThis as any).log = __craftjs.logger;

// TODO in future, consider patching console.log and friends
