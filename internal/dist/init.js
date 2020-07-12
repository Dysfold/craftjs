"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
let Files = java.nio.file.Files;
function loadPlugins() {
    const pluginsDir = new java_io_1.File('js', 'plugins');
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
const startTime = Date.now();
loadPlugins();
console.log(`Loaded all plugins in ${Date.now() - startTime}ms`);
