"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const org_bukkit_command_defaults_1 = require("org.bukkit.command.defaults");
const commands = [];
function registerCommand(name, callback) {
    const Cmd = Java.extend(org_bukkit_command_defaults_1.BukkitCommand, {
        execute(sender, label, args) {
            const result = callback();
            return typeof result === 'boolean' ? result : true;
        }
    });
    const cmd = new Cmd(name);
    server.commandMap.register(name, cmd);
    commands.push(cmd);
}
exports.registerCommand = registerCommand;
addUnloadHandler(() => {
    commands.forEach(cmd => {
        console.log(`Unregistering ${cmd.name}`);
        const spigotCmd = server.commandMap.knownCommands.get(cmd.name);
        server.commandMap.knownCommands.remove(cmd.name);
        spigotCmd.unregister(server.commandMap);
    });
});
