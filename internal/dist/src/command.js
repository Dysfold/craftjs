"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const org_bukkit_command_defaults_1 = require("org.bukkit.command.defaults");
const commands = [];
global.registerCommand = __registerCommand;
function __registerCommand(...[name, callback, tabComplete]) {
    const Cmd = Java.extend(org_bukkit_command_defaults_1.BukkitCommand, {
        execute(sender, label, args) {
            const jsArgs = [...args];
            const result = callback(sender, label, jsArgs);
            return typeof result === 'boolean' ? result : true;
        },
        tabComplete(...params) {
            var _a;
            if (tabComplete) {
                const result = (_a = tabComplete(...params)) !== null && _a !== void 0 ? _a : [];
                return result;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkVBQTREO0FBRTVELE1BQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztBQUUvQixNQUFNLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDO0FBRTNDLFNBQVMsaUJBQWlCLENBQ3hCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBcUM7SUFFcEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQ0FBYSxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxNQUFxQixFQUFFLEtBQWEsRUFBRSxJQUFjO1lBQzFELE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckQsQ0FBQztRQUNELFdBQVcsQ0FBQyxHQUFHLE1BQXlDOztZQUN0RCxJQUFJLFdBQVcsRUFBRTtnQkFDZixNQUFNLE1BQU0sU0FBRyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsbUNBQUksRUFBRSxDQUFDO2dCQUM1QyxPQUFPLE1BQU0sQ0FBQzthQUNmO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFrQixDQUFDO0lBQzNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7SUFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBVyxDQUFDLENBQUM7UUFDdkUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFXLENBQUMsQ0FBQztRQUN4RCxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=