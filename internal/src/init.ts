import { File } from "java.io";
import { PluginDisableEvent } from "org.bukkit.event.server";
import { HandlerList } from "org.bukkit.event";
import { CommandSender } from "org.bukkit.command";

declare const Paths: any;

let Files = java.nio.file.Files;

const unloadHandlers: (() => void)[] = [];

declare global {
  function addUnloadHandler(callback: () => void): void;
}

global.addUnloadHandler = function (callback) {
  unloadHandlers.push(callback);
}

function loadPlugins() {
  const pluginsDir = new File('js', 'plugins');
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

registerEvent(PluginDisableEvent, (event) => {
  if (event.plugin !== __plugin) {
    return;
  }

  unloadHandlers.forEach(h => h());

  HandlerList.unregisterAll(__plugin);
});

require('./command');
require('./events');

/**
 * Command for executing javascript from minecraft
 * 
 * @example
 * /js console.log('hello world');
 */
registerCommand('js', (sender: CommandSender, label: string, args: string[]) => {
  const str = args.join(' ');
  try {
    const result = __ctx.eval('js', str);
    if (`${result}` === '[object Object]') {
      const json = JSON.stringify(result, null, 2);
      json.split('\n').forEach(row => sender.sendMessage(row));
    } else {
      sender.sendMessage(`${result}`);
    }
  } catch (e) {
    console.error(e);
  }
});

const startTime = Date.now();
loadPlugins();
console.log(`Loaded all plugins in ${Date.now() - startTime}ms`);