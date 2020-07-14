//const { define } = require('./amd');

function readFile(path) {
  const Files = java.nio.file.Files;
  const encoded = Files.readAllLines(Paths.get(path));
  return [...encoded].join('\n');
}

function writeFile(path, data, append = false) {
  const Files = java.nio.file.Files;
  const StdOpenOption = java.nio.file.StandardOpenOption;
  if (append) {
    Files.write(Paths.get(path), new java.lang.String(data).getBytes(), StdOpenOption.APPEND);
    return;
  }
  Files.write(Paths.get(path), new java.lang.String(data).getBytes());
}

var global = globalThis;
__jsdir = __plugin.getConfig().getString('js-directory');
var server = org.bukkit.Bukkit;
var exports = {};
load('./js/internal/dist/src/require.js');
require('./js/internal/dist/src/init');
