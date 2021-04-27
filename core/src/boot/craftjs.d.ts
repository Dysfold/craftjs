import { HttpResponse } from 'java.net.http';
import { Path } from 'java.nio.file';
import { Map } from 'java.util';
import { CommandSender } from 'org.bukkit.command';
import { Event, EventPriority } from 'org.bukkit.event';
import { Plugin } from 'org.bukkit.plugin';
import { JsError } from './errors';

declare interface InternalDb {
  getTable(name: string): Map<any, any>;
}

declare global {
  /**
   * CraftJS Java API.
   */
  const __craftjs: {
    /**
     * Current Bukkit plugin.
     */
    readonly plugin: Plugin;

    /**
     * CraftJS version string.
     */
    readonly version: string;

    /**
     * Root path of current plugin.
     */
    pluginRoot: Path;

    /**
     * Logger, retrieved by logging.ts.
     */
    logger: Logger;

    /**
     * Gets root directory of a plugin.
     * @param name Plugin name.
     */
    getPluginRoot(name: string): Path;

    /**
     * Evaluates JavaScript code.
     * @param code JavaScript in string.
     * @param name Name of the JavaScript source. Usually a relative path of
     * JS file from plugin root.
     * @returns What the code evaluates to.
     */
    eval(code: string, name: string): any;

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

    /**
     * Registers an event handler for current plugin.
     * @param event Event type to handle.
     * @param priority Handler priority.
     * @param handler Handler function.
     * @param ignoreCancelled If the handler should receive cancelled events.
     */
    registerEvent<T extends Event>(
      event: new (...args: any[]) => T,
      priority: EventPriority,
      handler: (_: unknown, event: T) => void,
      ignoreCancelled: boolean,
    );

    /**
     * Registers a new command for current plugin.
     * @param handler Main command handler.
     * @param completer Tab completion handler.
     * @param name Primary command name.
     * @param aliases Alternative command names.
     * @param description Command description.
     */
    registerCommand(
      handler: (
        sender: CommandSender,
        alias: string,
        args: string[],
      ) => boolean,
      completer: (
        sender: CommandSender,
        alias: string,
        args: string[],
      ) => string[],
      name: string,
      aliases: string[],
      description: string,
    );

    /**
     * Opens a database for current plugin.
     * @param name Database name.
     */
    openDatabase(name: string): InternalDb;

    fetch(
      uri: string,
      method: string,
      payload: string | undefined,
      headers: string[],
    ): Promise<HttpResponse<string>>;

    /**
     * Checks if the given Java package exist in currently running JVM.
     * @param name Fully qualified package name.
     */
    packageExists(name: string): boolean;
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

    /**
     * Calls a function and catches errors thrown by it with the given handler.
     * Unlike normal try-catch, the resulting JsError provides stack-walking
     * support which allows e.g. source maps to be used.
     * @param func A function to wrap.
     */
    catchError<A, R>(func: () => void): JsError | null;

    /**
     * Gets a JVM system property.
     * @param name Property name.
     * @returns Property value, or null if it is not set.
     */
    systemProperty(name: string): string | null;

    /**
     * Performs an explicit conversion to double.
     * @param value JS number.
     * @returns JS number explicitly as Java double.
     */
    toDouble(value: number): number;
  };

  /**
   * CraftJS index.ts required. Do not use outside of require() implementation.
   */
  const __craftjscore: any;
}
