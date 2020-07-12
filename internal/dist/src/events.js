"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const org_bukkit_event_1 = require("org.bukkit.event");
const org_bukkit_plugin_1 = require("org.bukkit.plugin");
const __registerEvent = (eventClass, callback, priority = org_bukkit_event_1.EventPriority.HIGHEST) => {
    const L = Java.extend(org_bukkit_event_1.Listener, {});
    const Ex = Java.extend(org_bukkit_plugin_1.EventExecutor, {
        execute(listener, event) {
            callback(event);
        },
    });
    server.pluginManager.registerEvent(eventClass, new L(), priority, new Ex(), __plugin);
    const unregister = () => org_bukkit_event_1.HandlerList.unregisterAll(L);
    return unregister;
};
global.registerEvent = __registerEvent;
