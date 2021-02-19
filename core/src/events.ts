import { EventPriority, Event } from 'org.bukkit.event';

interface EventHandlerOptions {
  /**
   * Event priority. Defaults to NORMAL.
   */
  priority?: EventPriority;

  /**
   * If the handler should receive cancelled events.
   */
  ignoreCancelled?: boolean;
}

function registerEvent<T extends Event>(
  event: new (...args: any[]) => T,
  handler: (event: T) => void,
  options?: EventHandlerOptions,
): void {
  options = options ?? {};
  const priority = options.priority ?? EventPriority.NORMAL;
  const ignoreCancelled = options.ignoreCancelled ?? false;
  handler = catchAndLogError(handler, 'An error occurred in an event handler');
  __craftjs.registerEvent(
    event,
    priority,
    (_, event) => handler(event),
    ignoreCancelled,
  );
}

declare global {
  /**
   * Registers an event handler.
   * @param event Event type to handle.
   * @param handler The handler function.
   * @param options Optional, additional options.
   */
  function registerEvent<T extends Event>(
    event: new (...args: any[]) => T,
    handler: (event: T) => void,
    options?: EventHandlerOptions,
  ): void;
}
globalThis.registerEvent = registerEvent;
