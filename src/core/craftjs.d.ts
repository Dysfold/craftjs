import { Path } from 'java.nio.file';
import { CommandSender } from 'org.bukkit.command';
import { Event, EventPriority } from 'org.bukkit.event';
import { EventExecutor, Plugin } from 'org.bukkit.plugin';

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
      handler: (event: T) => void,
      ignoreCancelled: boolean,
    );

    registerCommand(
      handler: (sender: CommandSender, ...args: string[]) => boolean,
      completer: (
        sender: CommandSender,
        alias: string,
        ...args: string[]
      ) => string[],
      name: string,
      aliases: string[],
      description: string,
    );
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
