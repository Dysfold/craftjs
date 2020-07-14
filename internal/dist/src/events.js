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
    const listener = new L();
    server.pluginManager.registerEvent(eventClass, listener, priority, new Ex(), __plugin);
    const unregister = () => org_bukkit_event_1.HandlerList.unregisterAll(listener);
    return unregister;
};
global.registerEvent = __registerEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUErRTtBQUMvRSx5REFBa0Q7QUFHbEQsTUFBTSxlQUFlLEdBQXlCLENBQzVDLFVBQVUsRUFDVixRQUFRLEVBQ1IsUUFBUSxHQUFHLGdDQUFhLENBQUMsT0FBTyxFQUNoQyxFQUFFO0lBQ0YsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWEsRUFBRTtRQUNwQyxPQUFPLENBQUMsUUFBa0IsRUFBRSxLQUFVO1lBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUV6QixNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FDaEMsVUFBaUIsRUFDakIsUUFBUSxFQUNSLFFBQVEsRUFDUixJQUFJLEVBQUUsRUFBRSxFQUNSLFFBQVEsQ0FDVCxDQUFDO0lBQ0YsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsOEJBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMifQ==