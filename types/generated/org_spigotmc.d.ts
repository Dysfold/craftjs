//@ts-nocheck

declare module 'org.spigotmc' {
import { Object as java_lang_Object } from 'java.lang';
/** This is here for legacy purposes incase any plugin used it.

 If you use this, migrate ASAP as this will be removed in the future! */

  export class CustomTimingsHandler extends java_lang_Object {

startTiming(): void;
stopTiming(): void;
constructor(name: string);
  }
}
//@ts-nocheck

declare module 'org.spigotmc.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Called when an entity stops riding another entity. */

  export class EntityDismountEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
dismounted: org_bukkit_entity_Entity;
eventName: string;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getDismounted(): org_bukkit_entity_Entity;
getHandlers(): org_bukkit_event_HandlerList;
hashCode(): number;
isCancellable(): boolean;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(what: org_bukkit_entity_Entity, dismounted: org_bukkit_entity_Entity);
constructor(what: org_bukkit_entity_Entity, dismounted: org_bukkit_entity_Entity, isCancellable: boolean);
  }
}
//@ts-nocheck

declare module 'org.spigotmc.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Called when an entity attempts to ride another entity. */

  export class EntityMountEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
mount: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getMount(): org_bukkit_entity_Entity;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(what: org_bukkit_entity_Entity, mount: org_bukkit_entity_Entity);
  }
}
//@ts-nocheck

declare module 'org.spigotmc.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when player is about to spawn in a world after joining the server. */

  export class PlayerSpawnLocationEvent extends org_bukkit_event_player_PlayerEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Gets player's spawn location.
 If the player OfflinePlayer.hasPlayedBefore(), it's going to default to the location inside player.dat file.
 For new players, the default spawn location is spawn of the main Bukkit world. */
getSpawnLocation(): org_bukkit_Location;
/** Sets player's spawn location. */
setSpawnLocation(location: org_bukkit_Location): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(who: org_bukkit_entity_Player, spawnLocation: org_bukkit_Location);
  }
}
//@ts-nocheck

declare module 'org.spigotmc.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when player is about to spawn in a world after joining the server. */

  export class PlayerSpawnLocationEvent extends org_bukkit_event_player_PlayerEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Gets player's spawn location.
 If the player OfflinePlayer.hasPlayedBefore(), it's going to default to the location inside player.dat file.
 For new players, the default spawn location is spawn of the main Bukkit world. */
getSpawnLocation(): org_bukkit_Location;
/** Sets player's spawn location. */
setSpawnLocation(location: org_bukkit_Location): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(who: org_bukkit_entity_Player, spawnLocation: org_bukkit_Location);
  }
}