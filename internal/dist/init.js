"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
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
registerEvent(org_bukkit_event_server_1.PluginDisableEvent, (event) => {
    if (event.plugin !== __plugin) {
        return;
    }
    unloadHandlers.forEach(h => h());
    org_bukkit_event_1.HandlerList.unregisterAll(__plugin);
});
require('./command');
require('./events');
/**
 * Command for executing javascript from minecraft
 *
 * @example
 * /js console.log('hello world');
 */
registerCommand('js', (sender, label, args) => {
    const str = args.join(' ');
    try {
        const result = __ctx.eval('js', str);
        if (`${result}` === '[object Object]') {
            const json = JSON.stringify(result, null, 2);
            json.split('\n').forEach(row => sender.sendMessage(row));
        }
        else {
            sender.sendMessage(`${result}`);
        }
    }
    catch (e) {
        console.error(e);
    }
});
const startTime = Date.now();
loadPlugins();
console.log(`Loaded all plugins in ${Date.now() - startTime}ms`);
