import { File } from 'java.io';
import { Paths } from 'java.nio.file';
import { PluginDisableEvent } from 'org.bukkit.event.server';
import { HandlerList } from 'org.bukkit.event';
import { CommandSender } from 'org.bukkit.command';
import { tabComplete } from './tabcomplete';

const unloadHandlers: (() => void)[] = [];

global.addUnloadHandler = function (callback) {
  unloadHandlers.push(callback);
};

function loadPlugins() {
  const pluginsDir = new File(__jsdir, 'plugins');
  if (!pluginsDir.exists()) {
    pluginsDir.mkdirs();
  }

  const self = Paths.get(__filename).getParent();

  for (const file of pluginsDir.listFiles()) {
    if (!file.isDirectory()) {
      continue;
    }
    const path = Paths.get(file.getPath());
    const relative = self.relativize(path);
    require(relative.toString());
  }
}

require('./sourcemap');
require('./events');

registerEvent(PluginDisableEvent, (event) => {
  if (event.plugin !== __plugin) {
    return;
  }

  unloadHandlers.forEach((h) => h());

  HandlerList.unregisterAll(__plugin);

  server.scheduler.cancelTasks(__plugin);
});

require('./command');
require('./scheduling');
require('./testing');

global.generateTypescriptDefinitions = require('./ts/generation').runTheThing;

function refresh() {
  (__plugin as any).refresh();
}

global.refresh = refresh;

/**
 * Command for executing javascript from minecraft
 *
 * @example
 * /js console.log('hello world');
 */
registerCommand(
  'js',
  (sender: CommandSender, label: string, args: string[]) => {
    const str = args.join(' ');
    try {
      const result = __ctx.eval('js', str);
      if (`${result}` === '[object Object]') {
        try {
          const json = JSON.stringify(result, null, 2);
          json.split('\n').forEach((row) => sender.sendMessage(row));
        } catch {
          sender.sendMessage(`${result}`);
        }
      } else {
        sender.sendMessage(`${result}`);
      }
    } catch (e) {
      console.error(e);
    }
  },
  (sender, alias, args) => {
    return tabComplete(sender, alias, args);
  },
);

const startTime = Date.now();
loadPlugins();
console.log(`Loaded all plugins in ${Date.now() - startTime}ms`);
