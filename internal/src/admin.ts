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
      }
    } else if (action == 'test') {
      const plugin = args[1];
      if (!plugin) {
        return false; // Missing plugin name
      }
      sender.sendMessage(`Running tests for '${plugin}...`);
      __internals.callForeign(plugin, '__runTests', sender);
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
