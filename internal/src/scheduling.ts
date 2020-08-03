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
function setInterval(handler: () => void, delay: number) {
  // Scheduler doesn't like fractional ticks
  const ms = Math.floor(delay / MILLIS_PER_TICK);
  return (__plugin as any).scheduleRepeating(handler, ms, ms) as number;
}

function clearInterval(tid?: number) {
  if (!tid) {
    return;
  }
  server.scheduler.cancelTask(tid);
}

/**
 * Executes a function in server thread after a delay.
 * @param handler Function to execute.
 * @param delay Delay in milliseconds.
 * @returns Task id.
 */
function setTimeout(handler: () => void, delay: number) {
  return (__plugin as any).scheduleOnce(handler, Math.floor(delay / MILLIS_PER_TICK)) as number;
}

// Override JS standard library timers
global.setInterval = setInterval as any;
global.setTimeout = setTimeout as any;
global.clearInterval = clearInterval;
global.clearTimeout = clearInterval;


// See global.wait for docs
function wait(delay: number = 0, unit: TimeUnit = TimeUnit.TICKS): Promise<void> {
  let ms: number;
  switch (unit) {
    case TimeUnit.MILLIS:
      ms = delay;
      break;
    case TimeUnit.TICKS:
      ms = delay * MILLIS_PER_TICK;
      break;
    case TimeUnit.SECONDS:
      ms = delay * 1000;
      break;
    case TimeUnit.MINUTES:
      ms = delay * 1000 * 60
      break;
    default:
      throw 'unknown time unit';
  }
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}

global.wait = wait;