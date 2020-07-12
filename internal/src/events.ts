import { Listener, EventPriority, Event } from "org.bukkit.event";
import { EventExecutor } from "org.bukkit.plugin";

export function registerEvent<T extends Event>(eventClass: new (...args: any[]) => T, callback: (event: T) => void, priority: EventPriority = EventPriority.HIGHEST) {
  const L = Java.extend(Listener, {});
  const Ex = Java.extend(EventExecutor, {
    execute(listener: Listener, event: T) {
      callback(event);
    }
  });
  server.pluginManager.registerEvent(eventClass as any, new L(), priority, new Ex(), __plugin);
}