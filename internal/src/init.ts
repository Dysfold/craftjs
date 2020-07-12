import { File } from "java.io";
import { registerEvent } from "./events";
import { PluginDisableEvent } from "org.bukkit.event.server";
import { HandlerList } from "org.bukkit.event";

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

const { registerCommand } = require('./command');

registerCommand("js", () => {
  console.log('js called');
});

const startTime = Date.now();
loadPlugins();
console.log(`Loaded all plugins in ${Date.now() - startTime}ms`);