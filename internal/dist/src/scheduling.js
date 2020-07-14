"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_lang_1 = require("java.lang");
const org_bukkit_plugin_1 = require("org.bukkit.plugin");
function getSpigotMethod(name) {
    const long = java.lang.Long.class.getField('TYPE').get(null);
    const c = server.getScheduler().class;
    const params = [org_bukkit_plugin_1.Plugin.class, java_lang_1.Runnable.class, long].concat(name === 'runTaskTimer' ? [long] : []);
    const method = c.getMethod(name, ...params);
    return (...args) => method.invoke(server.getScheduler(), ...args);
}
function getRunnable(callback) {
    const Task = Java.extend(java_lang_1.Runnable, {
        run() {
            callback();
        },
    });
    return new Task();
}
function setInterval(handler, delay) {
    const runnable = getRunnable(handler);
    const runTaskLater = getSpigotMethod('runTaskTimer');
    const task = runTaskLater(__plugin, runnable, delay / 50, delay / 50);
    return task.getTaskId();
}
function clearInterval(tid) {
    if (!tid) {
        return;
    }
    server.scheduler.cancelTask(tid);
}
function setTimeout(handler, delay) {
    const runnable = getRunnable(handler);
    const runTaskLater = getSpigotMethod('runTaskLater');
    const task = runTaskLater(__plugin, runnable, delay / 50);
    return task.getTaskId();
}
global.setInterval = setInterval;
global.setTimeout = setTimeout;
global.clearInterval = clearInterval;
global.clearTimeout = clearInterval;
//# sourceMappingURL=scheduling.js.map