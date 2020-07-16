"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
const java_nio_file_1 = require("java.nio.file");
const org_bukkit_event_server_1 = require("org.bukkit.event.server");
const org_bukkit_event_1 = require("org.bukkit.event");
const tabcomplete_1 = require("./tabcomplete");
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
            try {
                const json = JSON.stringify(result, null, 2);
                json.split('\n').forEach((row) => sender.sendMessage(row));
            }
            catch (_a) {
                sender.sendMessage(`${result}`);
            }
        }
        else {
            sender.sendMessage(`${result}`);
        }
    }
    catch (e) {
        console.error(e);
    }
}, (sender, alias, args) => {
    return tabcomplete_1.tabComplete(sender, alias, args);
});
const startTime = Date.now();
loadPlugins();
console.log(`Loaded all plugins in ${Date.now() - startTime}ms`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQStCO0FBQy9CLGlEQUFzQztBQUN0QyxxRUFBNkQ7QUFDN0QsdURBQStDO0FBRS9DLCtDQUE0QztBQUU1QyxNQUFNLGNBQWMsR0FBbUIsRUFBRSxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLFFBQVE7SUFDMUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRixTQUFTLFdBQVc7SUFDbEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxjQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDeEIsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3JCO0lBRUQsTUFBTSxJQUFJLEdBQUcscUJBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFL0MsS0FBSyxNQUFNLElBQUksSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN2QixTQUFTO1NBQ1Y7UUFDRCxNQUFNLElBQUksR0FBRyxxQkFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUM5QjtBQUNILENBQUM7QUFFRCxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXBCLGFBQWEsQ0FBQyw0Q0FBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDN0IsT0FBTztLQUNSO0lBRUQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVuQyw4QkFBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVwQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJCLE1BQU0sQ0FBQyw2QkFBNkIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFFOUUsU0FBUyxPQUFPO0lBQ2IsUUFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFFekI7Ozs7O0dBS0c7QUFDSCxlQUFlLENBQ2IsSUFBSSxFQUNKLENBQUMsTUFBcUIsRUFBRSxLQUFhLEVBQUUsSUFBYyxFQUFFLEVBQUU7SUFDdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxHQUFHLE1BQU0sRUFBRSxLQUFLLGlCQUFpQixFQUFFO1lBQ3JDLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzVEO1lBQUMsV0FBTTtnQkFDTixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNqQztTQUNGO2FBQU07WUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNqQztLQUNGO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQyxFQUNELENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUN0QixPQUFPLHlCQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQ0YsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM3QixXQUFXLEVBQUUsQ0FBQztBQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDIn0=