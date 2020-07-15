import { ServerCommandEvent } from "org.bukkit.event.server";
import { PlayerInteractEvent } from "org.bukkit.event.player";

registerEvent(PlayerInteractEvent, e => {
  e.player.sendMessage(`${e.item?.amount}`);
});