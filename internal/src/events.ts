import { Listener, EventPriority, Event, HandlerList } from "org.bukkit.event";
import { EventExecutor } from "org.bukkit.plugin";
import { Handler } from "java.util.logging";

declare global {
  function registerEvent<T extends Event>(eventClass: new (...args: any[]) => T, callback: (event: T) => void, priority?: EventPriority): () => void;
}

const __registerEvent: typeof registerEvent = (eventClass, callback, priority = EventPriority.HIGHEST) => {
  const L = Java.extend(Listener, {});
  const Ex = Java.extend(EventExecutor, {
    execute(listener: Listener, event: any) {
      callback(event);
    }
  });
  server.pluginManager.registerEvent(eventClass as any, new L(), priority, new Ex(), __plugin);
  const unregister = () => HandlerList.unregisterAll(L);
  return unregister;
};

global.registerEvent = __registerEvent;