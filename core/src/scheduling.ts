import { Bukkit } from 'org.bukkit';

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
  const wrapped = catchAndLogError(
    () => handler(args),
    'An error occurred in a (repeating) timer',
  );
  return __craftjs.scheduleRepeating(wrapped, ms, ms);
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
  const wrapped = catchAndLogError(
    () => handler(args),
    'An error occurred in a (one-off) timer',
  );
  return __craftjs.scheduleOnce(
    wrapped,
    !delay ? 1 : Math.floor(delay / MILLIS_PER_TICK),
  );
}

// Override JS standard library timers
globalThis.setInterval = setInterval;
globalThis.setTimeout = setTimeout;
globalThis.clearInterval = clearInterval;
globalThis.clearTimeout = clearInterval;

function wait(delay = 0, unit: TimeUnit = 'ticks'): Promise<void> {
  let ticks: number;
  switch (unit) {
    case 'millis':
      ticks = Math.ceil(delay / MILLIS_PER_TICK);
      break;
    case 'ticks':
      ticks = delay;
      break;
    case 'seconds':
      ticks = delay * 20;
      break;
    case 'minutes':
      ticks = delay * 20 * 60;
      break;
    default:
      throw new Error('unknown time unit');
  }
  // We won't and can't pass arguments, so just use CraftJS Java API directly
  return new Promise((resolve) =>
    __craftjs.scheduleOnce(
      catchAndLogError(resolve, 'An error occurred in timer-backed Promise'),
      ticks,
    ),
  );
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
