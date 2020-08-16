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
        try {
            require(relative.toString());
        }
        catch (e) {
            console.error(`Could not load plugin '${file.getName()}'`);
            console.error(e);
        }
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
registerCommand('js', async (sender, label, args) => {
    const str = args.join(' ');
    try {
        global.self = sender;
        const result = await Promise.resolve(__ctx.eval('js', str));
        if (`${result}` === '[object Object]') {
            try {
                const json = JSON.stringify(result, null, 2);
                json.split('\n').forEach((row) => sender.sendMessage(row));
            }
            catch (_a) {
                sender.sendMessage(`< ${result}`);
            }
        }
        else {
            sender.sendMessage(`< ${result}`);
        }
    }
    catch (e) {
        console.error(e.stack);
    }
}, (sender, alias, args) => {
    return tabcomplete_1.tabComplete(sender, alias, args);
});
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["MILLIS"] = 0] = "MILLIS";
    TimeUnit[TimeUnit["TICKS"] = 1] = "TICKS";
    TimeUnit[TimeUnit["SECONDS"] = 2] = "SECONDS";
    TimeUnit[TimeUnit["MINUTES"] = 3] = "MINUTES";
})(TimeUnit || (TimeUnit = {}));
global.TimeUnit = TimeUnit;
const startTime = Date.now();
loadPlugins();
console.log(`Loaded all plugins in ${Date.now() - startTime}ms`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQStCO0FBQy9CLGlEQUFzQztBQUN0QyxxRUFBNkQ7QUFDN0QsdURBQStDO0FBRS9DLCtDQUE0QztBQUU1QyxNQUFNLGNBQWMsR0FBbUIsRUFBRSxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLFFBQVE7SUFDMUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRixTQUFTLFdBQVc7SUFDbEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxjQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDeEIsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3JCO0lBRUQsTUFBTSxJQUFJLEdBQUcscUJBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFL0MsS0FBSyxNQUFNLElBQUksSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN2QixTQUFTO1NBQ1Y7UUFDRCxNQUFNLElBQUksR0FBRyxxQkFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUk7WUFDRixPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDOUI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtLQUNGO0FBQ0gsQ0FBQztBQUVELE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFcEIsYUFBYSxDQUFDLDRDQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDMUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPO0tBQ1I7SUFFRCxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRW5DLDhCQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXBDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsTUFBTSxDQUFDLDZCQUE2QixHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUU5RSxTQUFTLE9BQU87SUFDYixRQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUV6Qjs7Ozs7R0FLRztBQUNILGVBQWUsQ0FDYixJQUFJLEVBQ0osS0FBSyxFQUFFLE1BQXFCLEVBQUUsS0FBYSxFQUFFLElBQWMsRUFBRSxFQUFFO0lBQzdELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsSUFBSTtRQUNGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBYSxDQUFDO1FBQzVCLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksR0FBRyxNQUFNLEVBQUUsS0FBSyxpQkFBaUIsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM1RDtZQUFDLFdBQU07Z0JBQ04sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDbkM7U0FDRjthQUFNO1lBQ0wsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDbkM7S0FDRjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7QUFDSCxDQUFDLEVBQ0QsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3RCLE9BQU8seUJBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FDRixDQUFDO0FBRUYsSUFBSyxRQUtKO0FBTEQsV0FBSyxRQUFRO0lBQ1gsMkNBQU0sQ0FBQTtJQUNOLHlDQUFLLENBQUE7SUFDTCw2Q0FBTyxDQUFBO0lBQ1AsNkNBQU8sQ0FBQTtBQUNULENBQUMsRUFMSSxRQUFRLEtBQVIsUUFBUSxRQUtaO0FBQ0EsTUFBYyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7QUFFbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzdCLFdBQVcsRUFBRSxDQUFDO0FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUMifQ==