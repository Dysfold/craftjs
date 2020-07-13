import { Command, CommandSender, PluginCommand } from 'org.bukkit.command';
import { BukkitCommand } from 'org.bukkit.command.defaults';

const commands: Command[] = [];

global.registerCommand = __registerCommand;

function __registerCommand(
  name: string,
  callback: (
    sender: CommandSender,
    label: string,
    args: string[],
  ) => void | boolean,
) {
  const Cmd = Java.extend(BukkitCommand, {
    execute(sender: CommandSender, label: string, args: string[]) {
      const jsArgs = [...args];
      const result = callback(sender, label, jsArgs);
      return typeof result === 'boolean' ? result : true;
    },
  });
  const cmd = new Cmd(name) as BukkitCommand;
  server.commandMap.register(name, cmd);
  commands.push(cmd);
}

addUnloadHandler(() => {
  commands.forEach((cmd) => {
    console.log(`Unregistering ${cmd.name}`);
    const spigotCmd = server.commandMap.knownCommands.get(cmd.name as any);
    server.commandMap.knownCommands.remove(cmd.name as any);
    spigotCmd.unregister(server.commandMap);
  });
});
