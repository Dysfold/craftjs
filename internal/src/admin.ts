import { Bukkit } from 'org.bukkit';
import { runTests } from './test-runner';

registerCommand(
  ['craftjs', 'js'],
  (sender, _alias, args) => {
    const action = args[0];
    if (action == 'reload') {
      const plugin = args[1];
      if (!plugin) {
        return false; // Missing plugin name
      }
      sender.sendMessage(`Reloading plugin '${plugin}...'`);
      if (!__internals.reloadPlugin(plugin)) {
        sender.sendMessage(`... failed! See console for more details.`);
      } else {
        sender.sendMessage('... done!');
        try {
          (Bukkit.server as any).syncCommands();
        } catch {
          // Ignore, syncCommands is unsupported CraftBukkit API
        }
      }
    } else if (action == 'test') {
      const plugin = args[1];
      if (!plugin) {
        return false; // Missing plugin name
      }
      sender.sendMessage(`Running tests for '${plugin}...`);
      runTests(plugin, sender);
    } else {
      return false;
    }
  },
  {
    usage: `Usage: /craftjs ...
  reload <plugin> - Reload a JS plugin
  test <plugin> - Run tests of a JS plugin
`,
  },
);
