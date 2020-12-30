import { Bukkit } from 'org.bukkit';
import { InvalidPluginException } from 'org.bukkit.plugin';

/**
 * Milliseconds per server tick.
 */
const MILLIS_PER_TICK = 50;

/**
 * Repeatedly executes given function.
 * @param handler Function to execute.
 * @param delay Delay and internal between executions (in milliseconds).
 * @returns Task id.
 */
function setInterval(handler: TimerHandler, delay?: number, ...args: any[]) {
  if (typeof handler == 'string') {
    throw new Error('setInterval eval not supported');
  }
  // Default to 1 tick delay and avoid fractional ticks
  const ms = !delay ? 1 : Math.floor(delay / MILLIS_PER_TICK);
  return __craftjs.scheduleRepeating(() => handler(args), ms, ms);
}

function clearInterval(tid?: number) {
  if (!tid) {
    return;
  }
  Bukkit.server.scheduler.cancelTask(tid);
}

/**
 * Executes a function in server thread after a delay.
 * @param handler Function to execute.
 * @param delay Delay in milliseconds.
 * @returns Task id.
 */
function setTimeout(handler: TimerHandler, delay?: number, ...args: any[]) {
  if (typeof handler == 'string') {
    throw new Error('setTimeout eval not supported');
  }
  return __craftjs.scheduleOnce(
    () => handler(args),
    !delay ? 1 : Math.floor(delay / MILLIS_PER_TICK),
  );
}

// Override JS standard library timers
globalThis.setInterval = setInterval;
globalThis.setTimeout = setTimeout;
globalThis.clearInterval = clearInterval;
globalThis.clearTimeout = clearInterval;

function wait(delay = 0, unit: TimeUnit = 'ticks'): Promise<void> {
  let ms: number;
  switch (unit) {
    case 'millis':
      ms = delay;
      break;
    case 'ticks':
      ms = delay * MILLIS_PER_TICK;
      break;
    case 'seconds':
      ms = delay * 1000;
      break;
    case 'minutes':
      ms = delay * 1000 * 60;
      break;
    default:
      throw new Error('unknown time unit');
  }
  // We won't and can't pass arguments, so just use CraftJS Java API directly
  return new Promise((resolve) => __craftjs.scheduleOnce(() => resolve(), ms));
}

declare global {
  type TimeUnit = 'millis' | 'ticks' | 'seconds' | 'minutes';

  /**
   * Returns a promise that is resolved after a delay.
   * @param delay Delay in given time unit. By default, and when delay is zero,
   * executes as soon as possible (probably next tick).
   * @param unit Time unit (defaults to ticks).
   */
  function wait(delay?: number, unit?: TimeUnit): Promise<void>;
}
globalThis.wait = wait;
