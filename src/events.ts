import { Listener, EventPriority, Event, HandlerList } from 'org.bukkit.event';
import { EventExecutor } from 'org.bukkit.plugin';

const __registerEvent: typeof registerEvent = (
  eventClass,
  callback,
  priority = EventPriority.HIGHEST,
) => {
  const L = Java.extend(Listener, {});
  const Ex = Java.extend(EventExecutor, {
    execute(listener: Listener, event: any) {
      callback(event);
    },
  });
  const listener = new L();

  server.pluginManager.registerEvent(
    eventClass as any,
    listener,
    priority,
    new Ex(),
    __plugin,
  );
  const unregister = () => HandlerList.unregisterAll(listener);
  return unregister;
};

global.registerEvent = __registerEvent;
