"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
const events_1 = require("./events");
const org_bukkit_event_server_1 = require("org.bukkit.event.server");
const org_bukkit_event_1 = require("org.bukkit.event");
let Files = java.nio.file.Files;
const unloadHandlers = [];
global.addUnloadHandler = function (callback) {
    unloadHandlers.push(callback);
};
function loadPlugins() {
    const pluginsDir = new java_io_1.File('js', 'plugins');
    if (!pluginsDir.exists()) {
        pluginsDir.mkdirs();
    }
    const self = Paths.get(__filename).getParent();
    for (const file of pluginsDir.listFiles()) {
        if (!file.isDirectory()) {
            continue;
        }
        const path = Paths.get(file.getPath());
        const relative = self.relativize(path);
        require(relative.toString());
    }
}
events_1.registerEvent(org_bukkit_event_server_1.PluginDisableEvent, (event) => {
    if (event.plugin !== __plugin) {
        return;
    }
    unloadHandlers.forEach(h => h());
    org_bukkit_event_1.HandlerList.unregisterAll(__plugin);
});
const { registerCommand } = require('./command');
registerCommand("js", () => {
    console.log('js called');
});
const startTime = Date.now();
loadPlugins();
console.log(`Loaded all plugins in ${Date.now() - startTime}ms`);
