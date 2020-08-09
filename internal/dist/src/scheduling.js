"use strict";
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
function setInterval(handler, delay) {
    // Scheduler doesn't like fractional ticks
    const ms = Math.floor(delay / MILLIS_PER_TICK);
    return __plugin.scheduleRepeating(handler, ms, ms);
}
function clearInterval(tid) {
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
function setTimeout(handler, delay) {
    return __plugin.scheduleOnce(handler, Math.floor(delay / MILLIS_PER_TICK));
}
// Override JS standard library timers
global.setInterval = setInterval;
global.setTimeout = setTimeout;
global.clearInterval = clearInterval;
global.clearTimeout = clearInterval;
// See global.wait for docs
function wait(delay = 0, unit = TimeUnit.TICKS) {
    let ms;
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
            ms = delay * 1000 * 60;
            break;
        default:
            throw new Error('unknown time unit');
    }
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}
global.wait = wait;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlZHVsaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUUzQjs7Ozs7R0FLRztBQUNILFNBQVMsV0FBVyxDQUFDLE9BQW1CLEVBQUUsS0FBYTtJQUNyRCwwQ0FBMEM7SUFDMUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDL0MsT0FBUSxRQUFnQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFXLENBQUM7QUFDeEUsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEdBQVk7SUFDakMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU87S0FDUjtJQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsVUFBVSxDQUFDLE9BQW1CLEVBQUUsS0FBYTtJQUNwRCxPQUFRLFFBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsQ0FBVyxDQUFDO0FBQ2hHLENBQUM7QUFFRCxzQ0FBc0M7QUFDdEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFrQixDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBaUIsQ0FBQztBQUN0QyxNQUFNLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNyQyxNQUFNLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztBQUdwQywyQkFBMkI7QUFDM0IsU0FBUyxJQUFJLENBQUMsUUFBZ0IsQ0FBQyxFQUFFLE9BQWlCLFFBQVEsQ0FBQyxLQUFLO0lBQzlELElBQUksRUFBVSxDQUFDO0lBQ2YsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLFFBQVEsQ0FBQyxNQUFNO1lBQ2xCLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDWCxNQUFNO1FBQ1IsS0FBSyxRQUFRLENBQUMsS0FBSztZQUNqQixFQUFFLEdBQUcsS0FBSyxHQUFHLGVBQWUsQ0FBQztZQUM3QixNQUFNO1FBQ1IsS0FBSyxRQUFRLENBQUMsT0FBTztZQUNuQixFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixNQUFNO1FBQ1IsS0FBSyxRQUFRLENBQUMsT0FBTztZQUNuQixFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7WUFDdEIsTUFBTTtRQUNSO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyJ9