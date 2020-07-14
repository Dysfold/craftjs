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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkVBQTREO0FBRTVELE1BQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztBQUUvQixNQUFNLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDO0FBRTNDLFNBQVMsaUJBQWlCLENBQ3hCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBcUM7SUFFcEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQ0FBYSxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxNQUFxQixFQUFFLEtBQWEsRUFBRSxJQUFjO1lBQzFELE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckQsQ0FBQztRQUNELFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQW9DOztZQUNyRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJO29CQUNGLE1BQU0sTUFBTSxTQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxtQ0FBSSxFQUFFLENBQUM7b0JBQzNELE9BQU8sTUFBTSxDQUFDO2lCQUNmO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FDRixDQUFDLENBQUM7SUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQWtCLENBQUM7SUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUVELGdCQUFnQixDQUFDLEdBQUcsRUFBRTtJQUNwQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFXLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQVcsQ0FBQyxDQUFDO1FBQ3hELFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==