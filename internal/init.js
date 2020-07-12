//const { define } = require('./amd');

function readFile(path) {
  const Files = java.nio.file.Files;
  const encoded = Files.readAllLines(Paths.get(path));
  return [...encoded].join('\n');
}

var global = globalThis;
var exports = {};
load('./js/internal/dist/require.js');
require('./js/internal/dist/init');
