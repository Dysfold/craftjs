//@ts-nocheck

declare module 'org.spigotmc' {
import { Timing as co_aikar_timings_Timing } from 'co.aikar.timings';
import { Boolean as java_lang_Boolean, Object as java_lang_Object } from 'java.lang';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';

  export class CustomTimingsHandler extends java_lang_Object {
handler: co_aikar_timings_Timing;
static sunReflectAvailable: java_lang_Boolean;
static getCallerClass: java_lang_reflect_Method;
startTiming(): void;
stopTiming(): void;
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'org.spigotmc.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EntityDismountEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
dismounted: org_bukkit_entity_Entity;
isCancellable: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
dismounted: org_bukkit_entity_Entity;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
isCancellable(): boolean;
getDismounted(): org_bukkit_entity_Entity;
callEvent(): boolean;
getEventName(): string;
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_entity_Entity);
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_entity_Entity, arg2: boolean);
  }
}//@ts-nocheck

declare module 'org.spigotmc.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EntityMountEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
mount: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
mount: org_bukkit_entity_Entity;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getMount(): org_bukkit_entity_Entity;
callEvent(): boolean;
getEventName(): string;
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'org.spigotmc.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerSpawnLocationEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
getSpawnLocation(): org_bukkit_Location;
setSpawnLocation(arg0: org_bukkit_Location): void;
callEvent(): boolean;
getEventName(): string;
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'org.spigotmc.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerSpawnLocationEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
getSpawnLocation(): org_bukkit_Location;
setSpawnLocation(arg0: org_bukkit_Location): void;
callEvent(): boolean;
getEventName(): string;
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_Location);
  }
}