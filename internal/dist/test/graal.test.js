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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvZ3JhYWwudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1Qix5Q0FBc0M7QUFFdEMsV0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQztBQUVILFdBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUN6QixNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQVUsQ0FBQztJQUMxQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsOEJBQThCLENBQUMsQ0FBQztJQUUxRCxLQUFLLE1BQU0sS0FBSyxJQUFJLFNBQVMsRUFBRTtRQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsa0RBQWtELENBQUMsQ0FBQztLQUNwRTtBQUNILENBQUMsQ0FBQyxDQUFDIn0=