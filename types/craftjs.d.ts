import { EventPriority, Event } from "org.bukkit.event";
import { CommandSender } from "org.bukkit.command";

declare global {
  /**
   * Register Spigot event handler
   * @param eventClass Class of the event, e.g. `org.bukkit.event.player.PlayerInteractEvent`
   * @param callback The callback to be called when the event is triggered
   * @param priority Priority of the event, defaults to `HIGHEST`
   */
  function registerEvent<T extends Event>(
    eventClass: new (...args: any[]) => T,
    callback: (event: T) => void,
    priority?: EventPriority,
  ): () => void;


  function registerCommand(
    name: string,
    callback: (sender: CommandSender, label: string, args: string[]) => void,
    tabComplete?: (sender: CommandSender, alias: string, args: string[]) => string[] | void
  ): void;

  function require(module: string, parent?: string): any;

  const __requireStack: string[];
  const __zoraTests: Promise<unknown>[];


  /**
   * Register a function to be called when the plugin is disabled
   * @param callback Function to call
   */
  function addUnloadHandler(callback: () => void): void;
  function generateTypescriptDefinitions(): void;
  /**
   * Reloads the plugin
   */
  function refresh(): void;

  type TimeUnit = 'millis' | 'ticks' | 'seconds' | 'minutes';

  /**
   * Returns a promise that is resolved after a delay.
   * @param delay Delay in given time unit. By default, and when delay is zero,
   * executes as soon as possible (probably next tick).
   * @param unit Time unit (defaults to ticks).
   */
  function wait(delay?: number, unit?: TimeUnit): Promise<void>;
}

export { };