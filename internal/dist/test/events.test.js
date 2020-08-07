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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2V2ZW50cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTRCO0FBQzVCLHFFQUlpQztBQUNqQyx1REFBK0M7QUFFL0MsV0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDekIsSUFBSSxVQUFvQyxDQUFDO0lBQ3pDLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUNuQixJQUFJLE9BQU8sQ0FBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN2QyxzQkFBc0I7UUFDdEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJO1lBQ0YsVUFBVSxHQUFHLGFBQWEsQ0FBQyw0Q0FBa0IsRUFBRSxHQUFHLEVBQUU7Z0JBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWDtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUwsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQ2hCLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUM1QixJQUFJLDRDQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQ25ELENBQUM7SUFFSixNQUFNLGdCQUFnQixHQUFHLEdBQUcsRUFBRSxDQUM1Qiw4QkFBVyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUVoRSxNQUFNLGdCQUFnQixHQUFHLGdCQUFnQixFQUFFLENBQUM7SUFFNUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFDcEIsSUFBSSxFQUFFLENBQUM7SUFFUCxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUUxQyxJQUFJLFVBQVU7UUFBRSxVQUFVLEVBQUUsQ0FBQztJQUU3QixNQUFNLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVDLElBQUksVUFBVTtRQUFFLFVBQVUsRUFBRSxDQUFDO0lBQzdCLElBQUksRUFBRSxDQUFDO0lBRVAsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0lBRS9DLENBQUMsQ0FBQyxFQUFFLENBQ0YsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUFFLEVBQ2xCLDBDQUEwQyxDQUMzQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==