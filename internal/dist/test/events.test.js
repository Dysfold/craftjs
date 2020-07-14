"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zora_1 = require("zora");
const org_bukkit_event_server_1 = require("org.bukkit.event.server");
const org_bukkit_event_1 = require("org.bukkit.event");
zora_1.test('Events', async (t) => {
    let unregister;
    const promise = () => new Promise((resolve, reject) => {
        // Timeout after 200ms
        setTimeout(() => resolve(false), 200);
        try {
            unregister = registerEvent(org_bukkit_event_server_1.ServerCommandEvent, () => {
                resolve(true);
            });
        }
        catch (e) {
            reject(e);
        }
    });
    const call = () => server.pluginManager.callEvent(new org_bukkit_event_server_1.ServerCommandEvent(server.consoleSender, 'js'));
    const getHandlerAmount = () => org_bukkit_event_1.HandlerList.getRegisteredListeners(__plugin).toArray().length;
    const oldHandlerAmount = getHandlerAmount();
    const a = promise();
    call();
    t.ok(unregister, 'Unregister is set');
    t.ok(await a, 'Event registration works');
    if (unregister)
        unregister();
    const b = promise();
    t.ok(unregister, 'Unregister is still set');
    if (unregister)
        unregister();
    call();
    t.notOk(await b, 'Event unregistration works');
    t.eq(oldHandlerAmount, getHandlerAmount(), 'Registered listener count stays the same');
});
//# sourceMappingURL=events.test.js.map