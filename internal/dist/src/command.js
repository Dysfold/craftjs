"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const org_bukkit_command_defaults_1 = require("org.bukkit.command.defaults");
const commands = [];
/*
The setTimeout is necessary to prevent IllegalStateExceptions (https://github.com/Ap3teus/craftjs-javascript/issues/10)
on player joins. I don't know why that fixes it, but it does ¯\_(ツ)_/¯
*/
global.registerCommand = (...params) => setTimeout(() => __registerCommand(...params), 50);
function __registerCommand(...[name, callback, tabComplete]) {
    const Cmd = Java.extend(org_bukkit_command_defaults_1.BukkitCommand, {
        execute(sender, label, args) {
            const jsArgs = [...args];
            const result = callback(sender, label, jsArgs);
            return typeof result === 'boolean' ? result : true;
        },
        tabComplete(...[sender, alias, args]) {
            var _a;
            if (tabComplete) {
                try {
                    const result = (_a = tabComplete(sender, alias, [...args])) !== null && _a !== void 0 ? _a : [];
                    return result;
                }
                catch (e) {
                    console.error(e);
                }
            }
            return [];
        },
    });
    const cmd = new Cmd(name);
    server.commandMap.register(name, cmd);
    commands.push(cmd);
}
addUnloadHandler(() => {
    commands.forEach((cmd) => {
        console.log(`Unregistering ${cmd.name}`);
        const spigotCmd = server.commandMap.knownCommands.get(cmd.name);
        server.commandMap.knownCommands.remove(cmd.name);
        spigotCmd.unregister(server.commandMap);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkVBQTREO0FBRTVELE1BQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztBQUUvQjs7O0VBR0U7QUFDRixNQUFNLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxDQUNyQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVyRCxTQUFTLGlCQUFpQixDQUN4QixHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQXFDO0lBRXBFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsMkNBQWEsRUFBRTtRQUNyQyxPQUFPLENBQUMsTUFBcUIsRUFBRSxLQUFhLEVBQUUsSUFBYztZQUMxRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDekIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0MsT0FBTyxPQUFPLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JELENBQUM7UUFDRCxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFvQzs7WUFDckUsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSTtvQkFDRixNQUFNLE1BQU0sU0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsbUNBQUksRUFBRSxDQUFDO29CQUMzRCxPQUFPLE1BQU0sQ0FBQztpQkFDZjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsQjthQUNGO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFrQixDQUFDO0lBQzNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7SUFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBVyxDQUFDLENBQUM7UUFDdkUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFXLENBQUMsQ0FBQztRQUN4RCxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=