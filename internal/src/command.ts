import { Command, CommandSender, PluginCommand } from 'org.bukkit.command';
import { BukkitCommand } from 'org.bukkit.command.defaults';

const commands: Command[] = [];

global.registerCommand = __registerCommand;

function __registerCommand(
  ...[name, callback, tabComplete]: Parameters<typeof registerCommand>
) {
  const Cmd = Java.extend(BukkitCommand, {
    execute(sender: CommandSender, label: string, args: string[]) {
      const jsArgs = [...args];
      const result = callback(sender, label, jsArgs);
      return typeof result === 'boolean' ? result : true;
    },
    tabComplete(...params: [CommandSender, string, string[]]) {
      if (tabComplete) {
        const result = tabComplete(...params) ?? [];
        return result;
      }
      return [];
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
