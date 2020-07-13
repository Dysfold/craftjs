"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zora_1 = require("zora");
const java_util_1 = require("java.util");
zora_1.test('Basic variables', (t) => {
    t.ok(java.lang.System, 'java.lang.System exists');
    t.ok(__ctx, '__ctx exists');
    t.ok(__plugin, '__plugin exists');
    t.eq(server, org.bukkit.Bukkit, 'server is org.bukkit.Bukkit');
    t.eq(global, globalThis, 'global is globalThis');
    t.ok(typeof require === 'function', 'require is a function');
    t.ok(typeof setTimeout === 'function', 'setTimeout is a function');
    t.ok(typeof setInterval === 'function', 'setInterval is a function');
});
zora_1.test('Java interop', (t) => {
    const arrayList = new java_util_1.ArrayList();
    arrayList.add(5);
    t.eq(arrayList[0], 5, 'Indexing arraylists should work with list[i]');
    t.eq(arrayList.length, 1, 'ArrayList.length should work');
    for (const entry of arrayList) {
        t.eq(entry, 5, 'Iterating arraylists with for ... of should work');
    }
});
