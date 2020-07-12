import { Command, CommandSender, PluginCommand } from "org.bukkit.command";
import { BukkitCommand } from "org.bukkit.command.defaults";
import { registerEvent } from "./events";

const commands: Command[] = [];

export function registerCommand(name: string, callback: () => void | boolean) {
  const Cmd = Java.extend(BukkitCommand, {
    execute(sender: CommandSender, label: string, args: string[]) {
      const result = callback();
      return typeof result === 'boolean' ? result : true;
    }
  });
  const cmd = new Cmd(name) as BukkitCommand;
  server.commandMap.register(name, cmd);
  commands.push(cmd);
}

addUnloadHandler(() => {
  commands.forEach(cmd => {
    console.log(`Unregistering ${cmd.name}`);
    const spigotCmd = server.commandMap.knownCommands.get(cmd.name as any);
    server.commandMap.knownCommands.remove(cmd.name as any);
    spigotCmd.unregister(server.commandMap);
  });
});
