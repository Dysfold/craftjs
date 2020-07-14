"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
const java_nio_file_1 = require("java.nio.file");
const org_bukkit_event_server_1 = require("org.bukkit.event.server");
const org_bukkit_event_1 = require("org.bukkit.event");
const unloadHandlers = [];
global.addUnloadHandler = function (callback) {
    unloadHandlers.push(callback);
};
function loadPlugins() {
    const pluginsDir = new java_io_1.File(__jsdir, 'plugins');
    if (!pluginsDir.exists()) {
        pluginsDir.mkdirs();
    }
    const self = java_nio_file_1.Paths.get(__filename).getParent();
    for (const file of pluginsDir.listFiles()) {
        if (!file.isDirectory()) {
            continue;
        }
        const path = java_nio_file_1.Paths.get(file.getPath());
        const relative = self.relativize(path);
        require(relative.toString());
    }
}
require('./sourcemap');
require('./events');
registerEvent(org_bukkit_event_server_1.PluginDisableEvent, (event) => {
    if (event.plugin !== __plugin) {
        return;
    }
    unloadHandlers.forEach((h) => h());
    org_bukkit_event_1.HandlerList.unregisterAll(__plugin);
    server.scheduler.cancelTasks(__plugin);
});
require('./command');
require('./scheduling');
require('./testing');
global.generateTypescriptDefinitions = require('./ts/generation').runTheThing;
function refresh() {
    __plugin.refresh();
}
global.refresh = refresh;
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
            json.split('\n').forEach((row) => sender.sendMessage(row));
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
//# sourceMappingURL=init.js.map