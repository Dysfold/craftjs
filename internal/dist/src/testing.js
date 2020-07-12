"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
function walk(file, callback) {
    if (!file.isDirectory()) {
        callback(file);
        return;
    }
    for (const f of file.listFiles()) {
        walk(f, callback);
    }
}
function runTests() {
    const baseDir = new java_io_1.File('js');
    const testFiles = [];
    walk(baseDir, (f) => {
        if (!f.getName().match(/\.test\.js/g) ||
            f.getPath().match('node_modules') // Exclude tests of node_modules
        ) {
            return;
        }
        testFiles.push(f);
    });
    const ownPath = new java_io_1.File(__filename).toPath().getParent();
    console.log(ownPath);
    testFiles.forEach((f) => {
        const relative = ownPath.relativize(f.toPath());
        console.log(relative);
        require(relative.toString());
    });
}
runTests();
