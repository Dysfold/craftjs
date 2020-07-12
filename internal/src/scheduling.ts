import { Class, Object as JObject, Runnable } from 'java.lang';
import { BukkitScheduler, BukkitTask } from 'org.bukkit.scheduler';
import { Plugin } from 'org.bukkit.plugin';

function getSpigotMethod(name: 'runTaskTimer' | 'runTaskLater') {
  const long = java.lang.Long.class.getField('TYPE').get(null);
  const c = (server.getScheduler() as any).class as Class<
    BukkitScheduler & JObject
  >;
  const params = [(Plugin as any).class, (Runnable as any).class, long].concat(
    name === 'runTaskTimer' ? [long] : [],
  );
  console.log(params);
  const method = c.getMethod(name, ...params) as any;
  return (...args: any[]) => method.invoke(server.getScheduler(), ...args);
}

function getRunnable(callback: () => void) {
  const Task = Java.extend(Runnable, {
    run() {
      callback();
    },
  });
  return new Task();
}

function setInterval(handler: () => void, delay: number) {
  const runnable = getRunnable(handler);
  const runTaskLater = getSpigotMethod('runTaskTimer');
  const task = runTaskLater(
    __plugin,
    runnable,
    delay / 50,
    delay / 50,
  ) as BukkitTask;
  return task.getTaskId();
}

function setTimeout(handler: () => void, delay: number) {
  const runnable = getRunnable(handler);
  const runTaskLater = getSpigotMethod('runTaskLater');
  const task = runTaskLater(__plugin, runnable, delay / 50) as BukkitTask;
  return task.getTaskId();
}

setInterval(() => console.log('hiiohoi'), 1000);
