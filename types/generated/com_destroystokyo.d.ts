//@ts-nocheck

declare module 'com.destroystokyo.paper' {

/** Represents a namespaced resource, see NamespacedKey for single elements
 or NamespacedTag for a collection of elements

 Namespaces may only contain lowercase alphanumeric characters, periods,
 underscores, and hyphens.
 
 Keys may only contain lowercase alphanumeric characters, periods,
 underscores, hyphens, and forward slashes.
 
 You should not be implementing this interface yourself, use NamespacedKey
 or NamespacedTag as needed instead. */

  export class Namespaced {
key: string;
namespace: string;
/** Gets the key corresponding to this resource
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, hyphens, and forward slashes. */
getKey(): string;
/** Gets the namespace this resource is a part of
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, and hyphens. */
getNamespace(): string;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {


  export class VersionFetcher {
cacheTime: number;
versionMessage: string;
/** Amount of time to cache results for in milliseconds
 
 Negative values will never cache. */
getCacheTime(): number;
/** Gets the version message to cache and show to command senders. Multiple messages can be sent using newlines (\n)
 in the string. The string will be split on these newlines and sent as individual messages.
 
 NOTE: This is run in a new thread separate from that of the command processing thread */
getVersionMessage(serverVersion: string): string;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { ParticleBuilder as com_destroystokyo_paper_ParticleBuilder } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Location as org_bukkit_Location, World as org_bukkit_World, Particle as org_bukkit_Particle, Color as org_bukkit_Color } from 'org.bukkit';
import { List as java_util_List, Collection as java_util_Collection } from 'java.util';
/** Helps prepare a particle to be sent to players.

 Usage of the builder is preferred over the super long World.spawnParticle(Particle, Location, int, double, double, double, double, Object) API */

  export class ParticleBuilder extends java_lang_Object {

/** Changes what particle will be sent */
particle(particle: org_bukkit_Particle): com_destroystokyo_paper_ParticleBuilder;
/** Example use:

 builder.receivers(16); if (builder.hasReceivers()) { sendParticleAsync(builder); } */
hasReceivers(): boolean;
/** Gets the Particle extra data. Varies by particle on how this is used */
extra(): number;
/** Gets the particle custom data. Varies by particle on how this is used */
data<T extends java_lang_Object>(): T | null;
/** Particle offset X. Varies by particle on how this is used */
offsetX(): number;
/** Particle offset Y. Varies by particle on how this is used */
offsetY(): number;
/** Particle offset Z. Varies by particle on how this is used */
offsetZ(): number;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. Allows specifying a different Y size than X and Z If you want a more
 cylinder check, see receivers(int, int, boolean) If you want a more spherical check,
 see receivers(int, boolean) */
receivers(xzRadius: number, yRadius: number): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. If you want a more cylinder check, see receivers(int, int,
 boolean) If you want a more spherical check, see receivers(int, boolean) */
receivers(xRadius: number, yRadius: number, zRadius: number): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. If you want a more spherical check, see receivers(int,
 boolean) */
receivers(radius: number): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within the specified radius around the particle location. If byDistance is
 false, behavior uses cuboid selection the same as receivers(int, int) If byDistance is
 true, radius is tested by distance in a spherical shape */
receivers(radius: number, byDistance: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within the specified radius around the particle location. If byDistance is
 false, behavior uses cuboid selection the same as receivers(int, int) If byDistance is
 true, radius is tested by distance on the y plane and on the x/z plane, in a cylinder shape. */
receivers(xzRadius: number, yRadius: number, byDistance: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Sends the particle to all receiving players (or all). This method is safe to use
 Asynchronously */
spawn(): com_destroystokyo_paper_ParticleBuilder;
/** Sends this particle to all players in the world. This is rather silly and you should likely not
 be doing this.

 Just be a logical person and use receivers by radius or collection. */
allPlayers(): com_destroystokyo_paper_ParticleBuilder;
/** Sets the location of where to spawn the particle */
location(location: org_bukkit_Location): com_destroystokyo_paper_ParticleBuilder;
/** Sets the location of where to spawn the particle */
location(world: org_bukkit_World, x: number, y: number, z: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the number of particles to spawn */
count(count: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle Color and size. Only valid for REDSTONE. */
color(color: org_bukkit_Color | null, size: number): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets the particle Color.
 Only valid for REDSTONE. */
color(r: number, g: number, b: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle Color. Only valid for REDSTONE. */
color(color: org_bukkit_Color | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets the particle custom data. Varies by particle on how this is used */
data<T extends java_lang_Object>(data: T | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets the particle extra data. Varies by particle on how this is used */
extra(extra: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle offset. Varies by particle on how this is used */
offset(offsetX: number, offsetY: number, offsetZ: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the source of this particle for visibility concerns (Vanish API) */
source(source: org_bukkit_entity_Player | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets whether the particle is forcefully shown to the player. If forced, the particle will show
 faraway, as far as the player's view distance allows. If false, the particle will show
 according to the client's particle settings. */
force(force: boolean): com_destroystokyo_paper_ParticleBuilder;
count(): number;
location(): org_bukkit_Location | null;
particle(): org_bukkit_Particle;
receivers(): java_util_List<org_bukkit_entity_Player> | null;
receivers(...receivers: org_bukkit_entity_Player[] | null): com_destroystokyo_paper_ParticleBuilder | null;
receivers(receivers: java_util_Collection<org_bukkit_entity_Player> | null): com_destroystokyo_paper_ParticleBuilder | null;
receivers(receivers: java_util_List<org_bukkit_entity_Player> | null): com_destroystokyo_paper_ParticleBuilder | null;
source(): org_bukkit_entity_Player | null;
constructor(particle: org_bukkit_Particle);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a title to may be sent to a Player.

 A title can be sent without subtitle text. */

  export class Title extends java_lang_Object {
fadeIn: number;
fadeOut: number;
static DEFAULT_FADE_IN: number;
static DEFAULT_FADE_OUT: number;
static DEFAULT_STAY: number;
stay: number;
subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null;
title: net_md_5_bungee_api_chat_BaseComponent[];
/** Gets the number of ticks to fade in.

 The returned value is never negative. */
getFadeIn(): number;
/** Gets the number of ticks to fade out.

 The returned value is never negative. */
getFadeOut(): number;
/** Gets the number of ticks to stay.

 The returned value is never negative. */
getStay(): number;
/** Gets the text of this title */
getTitle(): net_md_5_bungee_api_chat_BaseComponent[];
/** Gets the text of this title's subtitle */
getSubtitle(): net_md_5_bungee_api_chat_BaseComponent[] | null;
static builder(): com_destroystokyo_paper_Title_Builder;
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[]);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: string);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent, subtitle: net_md_5_bungee_api_chat_BaseComponent | null);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[], subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: string, subtitle: string | null);
/** Creates a new title.

 It is recommended to the BaseComponent constrctors. */
constructor(title: string, subtitle: string | null, fadeIn: number, stay: number, fadeOut: number);
/** Creates a new title. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent, subtitle: net_md_5_bungee_api_chat_BaseComponent | null, fadeIn: number, stay: number, fadeOut: number);
/** Creates a new title. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[], subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null, fadeIn: number, stay: number, fadeOut: number);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.Title' {
import { Title as com_destroystokyo_paper_Title } from 'com.destroystokyo.paper';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { Object as java_lang_Object } from 'java.lang';
/** A builder for creating titles */

  export class Builder extends java_lang_Object {

/** Create a title based on the values in the builder. */
build(): com_destroystokyo_paper_Title;
/** Sets the number of ticks for the title to fade in */
fadeIn(fadeIn: number): com_destroystokyo_paper_Title_Builder;
/** Sets the number of ticks for the title to fade out. */
fadeOut(fadeOut: number): com_destroystokyo_paper_Title_Builder;
/** Sets the number of ticks for the title to stay. */
stay(stay: number): com_destroystokyo_paper_Title_Builder;
/** Sets the subtitle to the given text.

 It is recommended to the BaseComponent methods. */
subtitle(subtitle: string | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the subtitle to the given text. */
subtitle(subtitle: net_md_5_bungee_api_chat_BaseComponent | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the subtitle to the given text. */
subtitle(subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the title to the given text.

 It is recommended to the BaseComponent methods. */
title(title: string): com_destroystokyo_paper_Title_Builder;
/** Sets the title to the given text. */
title(title: net_md_5_bungee_api_chat_BaseComponent): com_destroystokyo_paper_Title_Builder;
/** Sets the title to the given text. */
title(title: net_md_5_bungee_api_chat_BaseComponent[]): com_destroystokyo_paper_Title_Builder;
constructor();
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Set as java_util_Set, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';
/** Represents a players profile for the game, such as UUID, Name, and textures. */

  export class PlayerProfile {
id: java_util_UUID | null;
name: string | null;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
/** Check if the Profile has the specified property */
hasProperty(property: string | null): boolean | null;
/** Clears all properties on this profile */
clearProperties(): void;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 Optionally will also fill textures.

 Online mode will be automatically determined */
complete(textures: boolean): boolean;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 Optionally will also fill textures. */
complete(textures: boolean, onlineMode: boolean): boolean;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 This will also complete textures. If you do not want to load textures, use {complete(boolean)} */
complete(): boolean;
/** Like complete(boolean) but will try only from cache, and not make network calls
 Does not account for textures. */
completeFromCache(): boolean;
/** Like complete(boolean) but will try only from cache, and not make network calls
 Does not account for textures. */
completeFromCache(lookupUUID: boolean, onlineMode: boolean): boolean;
/** Like complete(boolean) but will try only from cache, and not make network calls
 Does not account for textures. */
completeFromCache(onlineMode: boolean): boolean;
/** Removes a specific property from this profile */
removeProperty(property: com_destroystokyo_paper_profile_ProfileProperty): boolean;
/** Removes a specific property from this profile */
removeProperty(property: string | null): boolean | null;
/** Removes all properties in the collection */
removeProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): boolean;
/** Sets a property. If the property already exists, the previous one will be replaced */
setProperty(property: com_destroystokyo_paper_profile_ProfileProperty): void;
/** Sets multiple properties. If any of the set properties already exist, it will be replaced */
setProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
/** Sets this profiles Name */
setName(name: string | null): string | null;
/** Sets this profiles UUID */
setId(uuid: java_util_UUID | null): java_util_UUID | null;
/** Whether or not this Profile has textures associated to it */
hasTextures(): boolean;
getId(): java_util_UUID | null;
getName(): string | null;
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
isComplete(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Object as java_lang_Object } from 'java.lang';
/** Represents a property on a PlayerProfile */

  export class ProfileProperty extends java_lang_Object {
name: string;
signature: string | null;
value: string;
equals(o: java_lang_Object): boolean;
getName(): string;
getSignature(): string | null;
getValue(): string;
hashCode(): number;
isSigned(): boolean;
constructor(name: string, value: string);
constructor(name: string, value: string, signature: string | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Class as java_lang_Class, Boolean as java_lang_Boolean, Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { ClientOption as com_destroystokyo_paper_ClientOption, SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';

  export class ClientOption<T extends java_lang_Object> extends java_lang_Object {
static CHAT_COLORS_ENABLED: com_destroystokyo_paper_ClientOption<java_lang_Boolean>;
static CHAT_VISIBILITY: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_ClientOption_ChatVisibility>;
static LOCALE: com_destroystokyo_paper_ClientOption<string>;
static MAIN_HAND: com_destroystokyo_paper_ClientOption<org_bukkit_inventory_MainHand>;
static SKIN_PARTS: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_SkinParts>;
static VIEW_DISTANCE: com_destroystokyo_paper_ClientOption<java_lang_Integer>;
type: java_lang_Class<T>;
getType(): java_lang_Class<T>;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {


  export class SkinParts {
raw: number;
getRaw(): number;
hasCapeEnabled(): boolean;
hasHatsEnabled(): boolean;
hasJacketEnabled(): boolean;
hasLeftPantsEnabled(): boolean;
hasLeftSleeveEnabled(): boolean;
hasRightPantsEnabled(): boolean;
hasRightSleeveEnabled(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.ClientOption' {
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChatVisibility extends java_lang_Enum<com_destroystokyo_paper_ClientOption_ChatVisibility> {
class: java_lang_Class<java_lang_Object>;
static FULL: com_destroystokyo_paper_ClientOption_ChatVisibility;
static HIDDEN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static SYSTEM: com_destroystokyo_paper_ClientOption_ChatVisibility;
static UNKNOWN: com_destroystokyo_paper_ClientOption_ChatVisibility;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ClientOption.ChatVisibility c : ClientOption.ChatVisibility.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_ClientOption_ChatVisibility[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_ClientOption_ChatVisibility;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Map as java_util_Map } from 'java.util';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
/** A reputation score for a player on a villager. */

  export class Reputation extends java_lang_Object {
reputation: number;
/** Gets the reputation value for a specific ReputationType. */
getReputation(type: com_destroystokyo_paper_entity_villager_ReputationType): number;
/** Sets the reputation value for a specific ReputationType. */
setReputation(type: com_destroystokyo_paper_entity_villager_ReputationType, value: number): void;
constructor();
constructor(reputation: java_util_Map<com_destroystokyo_paper_entity_villager_ReputationType, java_lang_Integer>);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** A type of reputation gained with a Villager.
 
 All types but MAJOR_POSITIVE are shared to other villagers. */

  export class ReputationType extends java_lang_Enum<com_destroystokyo_paper_entity_villager_ReputationType> {
class: java_lang_Class<java_lang_Object>;
static MAJOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MAJOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static TRADING: com_destroystokyo_paper_entity_villager_ReputationType;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ReputationType c : ReputationType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_entity_villager_ReputationType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_entity_villager_ReputationType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.block.TargetBlockInfo' {
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FluidMode extends java_lang_Enum<com_destroystokyo_paper_block_TargetBlockInfo_FluidMode> {
class: java_lang_Class<java_lang_Object>;
static ALWAYS: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static NEVER: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static SOURCE_ONLY: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (TargetBlockInfo.FluidMode c : TargetBlockInfo.FluidMode.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace } from 'org.bukkit.block';
import { Object as java_lang_Object } from 'java.lang';
/** Represents information about a targeted block */

  export class TargetBlockInfo extends java_lang_Object {
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
relativeBlock: org_bukkit_block_Block;
/** Get the block that is targeted */
getBlock(): org_bukkit_block_Block;
/** Get the relative Block to the targeted block on the side it is targeted at */
getRelativeBlock(): org_bukkit_block_Block;
/** Get the targeted BlockFace */
getBlockFace(): org_bukkit_block_BlockFace;
constructor(block: org_bukkit_block_Block, blockFace: org_bukkit_block_BlockFace);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object } from 'java.lang';
/** Represents information about a targeted entity */

  export class TargetEntityInfo extends java_lang_Object {
entity: org_bukkit_entity_Entity;
hitVector: org_bukkit_util_Vector;
/** Get the entity that is targeted */
getEntity(): org_bukkit_entity_Entity;
/** Get the position the entity is targeted at */
getHitVector(): org_bukkit_util_Vector;
constructor(entity: org_bukkit_entity_Entity, hitVec: org_bukkit_util_Vector);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { PathResult as com_destroystokyo_paper_entity_Pathfinder_PathResult } from 'com.destroystokyo.paper.entity.Pathfinder';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { LivingEntity as org_bukkit_entity_LivingEntity, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Handles pathfinding operations for an Entity */

  export class Pathfinder {
currentPath: com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
entity: org_bukkit_entity_Mob;
/** Allows this pathfinder to pass through closed doors, or not */
setCanOpenDoors(canOpenDoors: boolean): void;
/** Allows this pathfinder to pass through open doors, or not */
setCanPassDoors(canPassDoors: boolean): void;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 and sets it with default speed.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
moveTo(target: org_bukkit_entity_LivingEntity): boolean;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 and sets it with specified speed.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
moveTo(target: org_bukkit_entity_LivingEntity, speed: number): boolean;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 but does not set it as the current target.
 Useful for calculating what would happen before setting it.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
findPath(target: org_bukkit_entity_LivingEntity): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Calculates a destination for the Entity to navigate to, and sets it with default speed
 as the current target. */
moveTo(loc: org_bukkit_Location): boolean;
/** Calculates a destination for the Entity to navigate to, but does not set it
 as the current target. Useful for calculating what would happen before setting it. */
findPath(loc: org_bukkit_Location): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Calculates a destination for the Entity to navigate to, with desired speed
 as the current target. */
moveTo(loc: org_bukkit_Location, speed: number): boolean;
/** Checks if this pathfinder allows passing through closed doors. */
canOpenDoors(): boolean;
/** Checks if this pathfinder allows passing through open doors. */
canPassDoors(): boolean;
/** Checks if this pathfinder assumes that the mob can float */
canFloat(): boolean;
/** If the entity is currently trying to navigate to a destination, this will return true */
hasPath(): boolean;
/** Instructs the Entity to stop trying to navigate to its current desired location */
stopPathfinding(): void;
/** Makes this pathfinder assume that the mob can float, or not */
setCanFloat(canFloat: boolean): void;
/** Takes the result of a previous pathfinding calculation and sets it
 as the active pathfinding with default speed. */
moveTo(path: com_destroystokyo_paper_entity_Pathfinder_PathResult): boolean;
/** Takes the result of a previous pathfinding calculation and sets it
 as the active pathfinding, */
moveTo(path: com_destroystokyo_paper_entity_Pathfinder_PathResult, speed: number): boolean;
getCurrentPath(): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
getEntity(): org_bukkit_entity_Mob;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.Pathfinder' {
import { List as java_util_List } from 'java.util';
import { Location as org_bukkit_Location } from 'org.bukkit';
/** Represents the result of a pathfinding calculation */

  export class PathResult {
finalPoint: org_bukkit_Location | null;
nextPoint: org_bukkit_Location | null;
nextPointIndex: number;
points: java_util_List<org_bukkit_Location>;
/** All currently calculated points to follow along the path to reach the destination location

 Will return points the entity has already moved past, see getNextPointIndex() */
getPoints(): java_util_List<org_bukkit_Location>;
getFinalPoint(): org_bukkit_Location | null;
getNextPoint(): org_bukkit_Location | null;
getNextPointIndex(): number;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
/** Represents a client connected to the server. */

  export class NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress | null;
/** Returns the protocol version of the client. */
getProtocolVersion(): number;
/** Returns the socket address of the client. */
getAddress(): java_net_InetSocketAddress;
/** Returns the virtual host the client is connected to.

 The virtual host refers to the hostname/port the client used to
 connect to the server. */
getVirtualHost(): java_net_InetSocketAddress | null;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Goal as com_destroystokyo_paper_entity_ai_Goal, GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Collection as java_util_Collection } from 'java.util';
/** Represents a part of the "brain" of a mob. It tracks all tasks (running or not), allows adding and removing goals */

  export class MobGoals {
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
goal: com_destroystokyo_paper_entity_ai_Goal<T> | null;
goals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
addGoal<T extends org_bukkit_entity_Mob>(mob: T, priority: number, goal: com_destroystokyo_paper_entity_ai_Goal<T>): void;
getAllGoals<T extends org_bukkit_entity_Mob>(mob: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoalsWithout<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): com_destroystokyo_paper_entity_ai_Goal<T> | null;
getGoals<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(mob: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoalsWithout<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
hasGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): boolean;
removeAllGoals<T extends org_bukkit_entity_Mob>(mob: T): void;
removeAllGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): void;
removeGoal<T extends org_bukkit_entity_Mob>(mob: T, goal: com_destroystokyo_paper_entity_ai_Goal<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Represents an AI goal of an entity */

  export class Goal<T extends org_bukkit_entity_Mob> {
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** A unique key that identifies this type of goal. Plugins should use their own namespace, not the minecraft
 namespace. Additionally, this key also specifies to what mobs this goal can be applied to */
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
/** Called each tick the goal is activated */
tick(): void;
/** Called when this goal gets activated */
start(): void;
/** Called when this goal gets stopped */
stop(): void;
/** Checks if this goal should be activated */
shouldActivate(): boolean;
/** Checks if this goal should stay active, defaults to shouldActivate() */
shouldStayActive(): boolean;
/** Returns a list of all applicable flags for this goal.

 This method is only called on construction. */
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { NamespacedKey as org_bukkit_NamespacedKey } from 'org.bukkit';
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Used to identify a Goal. Consists of a NamespacedKey and the type of mob the goal can be applied to */

  export class GoalKey<T extends org_bukkit_entity_Mob> extends java_lang_Object {
entityClass: java_lang_Class<T>;
namespacedKey: org_bukkit_NamespacedKey;
equals(o: java_lang_Object): boolean;
getEntityClass(): java_lang_Class<T>;
getNamespacedKey(): org_bukkit_NamespacedKey;
hashCode(): number;
static of<A extends org_bukkit_entity_Mob>(entityClass: java_lang_Class<A>, namespacedKey: org_bukkit_NamespacedKey): com_destroystokyo_paper_entity_ai_GoalKey<A>;
toString(): string;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Represents the subtype of a goal. Used by minecraft to disable certain types of goals if needed. */

  export class GoalType extends java_lang_Enum<com_destroystokyo_paper_entity_ai_GoalType> {
class: java_lang_Class<java_lang_Object>;
static JUMP: com_destroystokyo_paper_entity_ai_GoalType;
static LOOK: com_destroystokyo_paper_entity_ai_GoalType;
static MOVE: com_destroystokyo_paper_entity_ai_GoalType;
static TARGET: com_destroystokyo_paper_entity_ai_GoalType;
static UNKNOWN_BEHAVIOR: com_destroystokyo_paper_entity_ai_GoalType;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (GoalType c : GoalType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_entity_ai_GoalType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_entity_ai_GoalType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { HeightmapType as com_destroystokyo_paper_HeightmapType } from 'com.destroystokyo.paper';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Enumeration of different heightmap types maintained by the server. Generally using these maps is much faster
 than using an iterative search for a block in a given x, z coordinate. */

  export class HeightmapType extends java_lang_Enum<com_destroystokyo_paper_HeightmapType> {
class: java_lang_Class<java_lang_Object>;
static ANY: com_destroystokyo_paper_HeightmapType;
static LIGHT_BLOCKING: com_destroystokyo_paper_HeightmapType;
static SOLID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID_NO_LEAVES: com_destroystokyo_paper_HeightmapType;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (HeightmapType c : HeightmapType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_HeightmapType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_HeightmapType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Sound as org_bukkit_Sound } from 'org.bukkit';
/** Represents the sounds that a Block makes in certain situations
 
 The sound group includes break, step, place, hit, and fall sounds. */

  export class BlockSoundGroup {
breakSound: org_bukkit_Sound;
fallSound: org_bukkit_Sound;
hitSound: org_bukkit_Sound;
placeSound: org_bukkit_Sound;
stepSound: org_bukkit_Sound;
/** Gets the sound that plays when breaking this block */
getBreakSound(): org_bukkit_Sound;
/** Gets the sound that plays when hitting this block */
getHitSound(): org_bukkit_Sound;
/** Gets the sound that plays when placing this block */
getPlaceSound(): org_bukkit_Sound;
/** Gets the sound that plays when stepping on this block */
getStepSound(): org_bukkit_Sound;
/** Gets the sound that plays when this block falls */
getFallSound(): org_bukkit_Sound;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { Inventory as org_bukkit_inventory_Inventory, AnvilInventory as org_bukkit_inventory_AnvilInventory, InventoryView as org_bukkit_inventory_InventoryView } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { InventoryEvent as org_bukkit_event_inventory_InventoryEvent } from 'org.bukkit.event.inventory';
/** Called when an anvil is damaged from being used */

  export class AnvilDamagedEvent extends org_bukkit_event_inventory_InventoryEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
damageState: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
eventName: string;
handlers: org_bukkit_event_HandlerList;
inventory: org_bukkit_inventory_AnvilInventory;
inventory: org_bukkit_inventory_Inventory;
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
/** Description copied from class: InventoryEventGets the primary Inventory involved in this transaction */
getInventory(): org_bukkit_inventory_AnvilInventory;
/** Description copied from class: InventoryEventGets the primary Inventory involved in this transaction */
getInventory(): org_bukkit_inventory_Inventory;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Gets if anvil is breaking on this use */
isBreaking(): boolean;
/** Gets the new state of damage on the anvil */
getDamageState(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
/** Sets if anvil is breaking on this use */
setBreaking(breaking: boolean): void;
/** Sets the new state of damage on the anvil */
setDamageState(damageState: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState): void;
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
constructor(inventory: org_bukkit_inventory_InventoryView, blockData: org_bukkit_block_data_BlockData);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.AnvilDamagedEvent' {
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Represents the amount of damage on an anvil block */

  export class DamageState extends java_lang_Enum<com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState> {
class: java_lang_Class<java_lang_Object>;
material: org_bukkit_Material;
static BROKEN: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static CHIPPED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static DAMAGED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static FULL: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Get block material of this state */
getMaterial(): org_bukkit_Material;
/** Get damaged state by block data */
static getState(blockData: org_bukkit_block_data_BlockData | null): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Get damaged state by block material */
static getState(material: org_bukkit_Material | null): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (AnvilDamagedEvent.DamageState c : AnvilDamagedEvent.DamageState.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.AnvilDamagedEvent' {
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Represents the amount of damage on an anvil block */

  export class DamageState extends java_lang_Enum<com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState> {
class: java_lang_Class<java_lang_Object>;
material: org_bukkit_Material;
static BROKEN: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static CHIPPED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static DAMAGED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static FULL: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Get block material of this state */
getMaterial(): org_bukkit_Material;
/** Get damaged state by block data */
static getState(blockData: org_bukkit_block_data_BlockData | null): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Get damaged state by block material */
static getState(material: org_bukkit_Material | null): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (AnvilDamagedEvent.DamageState c : AnvilDamagedEvent.DamageState.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.inventory.meta' {
import { ItemMeta as org_bukkit_inventory_meta_ItemMeta } from 'org.bukkit.inventory.meta';
import { EquipmentSlot as org_bukkit_inventory_EquipmentSlot, ItemFlag as org_bukkit_inventory_ItemFlag } from 'org.bukkit.inventory';
import { Multimap as com_google_common_collect_Multimap } from 'com.google.common.collect';
import { Attribute as org_bukkit_attribute_Attribute, AttributeModifier as org_bukkit_attribute_AttributeModifier } from 'org.bukkit.attribute';
import { Collection as java_util_Collection, Set as java_util_Set, List as java_util_List, Map as java_util_Map } from 'java.util';
import { CustomItemTagContainer as org_bukkit_inventory_meta_tags_CustomItemTagContainer } from 'org.bukkit.inventory.meta.tags';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Namespaced as com_destroystokyo_paper_Namespaced } from 'com.destroystokyo.paper';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { Enchantment as org_bukkit_enchantments_Enchantment } from 'org.bukkit.enchantments';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';

  export class ArmorStandMeta implements org_bukkit_inventory_meta_ItemMeta {
attributeModifiers: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier> | null;
attributeModifiers: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>;
attributeModifiers: java_util_Collection<org_bukkit_attribute_AttributeModifier> | null;
canDestroy: java_util_Set<org_bukkit_Material>;
canPlaceOn: java_util_Set<org_bukkit_Material>;
customModelData: number;
customTagContainer: org_bukkit_inventory_meta_tags_CustomItemTagContainer;
destroyableKeys: java_util_Set<com_destroystokyo_paper_Namespaced>;
displayName: string;
displayNameComponent: net_md_5_bungee_api_chat_BaseComponent[];
enchantLevel: number;
enchants: java_util_Map<org_bukkit_enchantments_Enchantment, java_lang_Integer>;
itemFlags: java_util_Set<org_bukkit_inventory_ItemFlag>;
localizedName: string;
lore: java_util_List<string> | null;
loreComponents: java_util_List<net_md_5_bungee_api_chat_BaseComponent[]>;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
placeableKeys: java_util_Set<com_destroystokyo_paper_Namespaced>;
/** Add an Attribute and it's Modifier.
 AttributeModifiers can now support EquipmentSlots.
 If not set, the AttributeModifier will be active in ALL slots.
 
 Two AttributeModifiers that have the same UUID
 cannot exist on the same Attribute. */
addAttributeModifier(attribute: org_bukkit_attribute_Attribute, modifier: org_bukkit_attribute_AttributeModifier): boolean;
/** Adds the specified enchantment to this item meta. */
addEnchant(ench: org_bukkit_enchantments_Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
/** Check if the specified flag is present on this item. */
hasItemFlag(flag: org_bukkit_inventory_ItemFlag): boolean;
/** Checks for existence of a display name. */
hasDisplayName(): boolean;
/** Checks for existence of a localized name. */
hasLocalizedName(): boolean;
/** Checks for existence of custom model data.
 
 CustomModelData is an integer that may be associated client side with a
 custom item model. */
hasCustomModelData(): boolean;
/** Checks for existence of lore. */
hasLore(): boolean;
/** Checks for existence of the specified enchantment. */
hasEnchant(ench: org_bukkit_enchantments_Enchantment): boolean;
/** Checks for the existence of any AttributeModifiers. */
hasAttributeModifiers(): boolean;
/** Checks for the existence of any enchantments. */
hasEnchants(): boolean;
/** Checks for the existence of any keys that the item can be placed on */
hasPlaceableKeys(): boolean;
/** Checks for the existence of any keys that the item can destroy */
hasDestroyableKeys(): boolean;
/** Checks for the level of the specified enchantment. */
getEnchantLevel(ench: org_bukkit_enchantments_Enchantment): number;
/** Checks if the specified enchantment conflicts with any enchantments in
 this ItemMeta. */
hasConflictingEnchant(ench: org_bukkit_enchantments_Enchantment): boolean;
/** Creates a Map representation of this class.
 
 This class must provide a method to restore this class, as defined in
 the ConfigurationSerializable interface javadocs. */
serialize(): java_util_Map<string, java_lang_Object>;
/** Get current set itemFlags. The collection returned is unmodifiable. */
getItemFlags(): java_util_Set<org_bukkit_inventory_ItemFlag>;
/** Gets set of materials what given item can destroy in GameMode.ADVENTURE */
getCanDestroy(): java_util_Set<org_bukkit_Material>;
/** Gets set of materials where given item can be placed on in GameMode.ADVENTURE */
getCanPlaceOn(): java_util_Set<org_bukkit_Material>;
/** Gets the collection of namespaced keys that the item can be placed on in GameMode.ADVENTURE */
getPlaceableKeys(): java_util_Set<com_destroystokyo_paper_Namespaced>;
/** Gets the collection of namespaced keys that the item can destroy in GameMode.ADVENTURE */
getDestroyableKeys(): java_util_Set<com_destroystokyo_paper_Namespaced>;
/** Gets the custom model data that is set.
 
 CustomModelData is an integer that may be associated client side with a
 custom item model.
 
 Plugins should check that hasCustomModelData() returns true
 before calling this method. */
getCustomModelData(): number;
/** Gets the display name that is set.
 
 Plugins should check that hasDisplayName() returns true
 before calling this method. */
getDisplayName(): string;
/** Gets the localized display name that is set.
 
 Plugins should check that hasLocalizedName() returns true
 before calling this method. */
getLocalizedName(): string;
/** Gets the lore that is set.
 
 Plugins should check if hasLore() returns true before
 calling this method. */
getLore(): java_util_List<string> | null;
/** Gets whether the ArmorStand should be invisible when spawned */
isInvisible(): boolean;
/** Gets whether this ArmorStand should have no base plate when spawned */
hasNoBasePlate(): boolean;
/** Gets whether this ArmorStand should show arms when spawned */
shouldShowArms(): boolean;
/** Gets whether this ArmorStand will be a marker when spawned
 The exact details of this flag are an implementation detail */
isMarker(): boolean;
/** Gets whether this ArmorStand will be small when spawned */
isSmall(): boolean;
/** Internal use only! Do not use under any circumstances! */
setVersion(version: number): void;
/** Remove a specific Attribute and AttributeModifier.
 AttributeModifiers are matched according to their UUID. */
removeAttributeModifier(attribute: org_bukkit_attribute_Attribute, modifier: org_bukkit_attribute_AttributeModifier): boolean;
/** Remove all AttributeModifiers associated with the given
 Attribute.
 This will return false if nothing was removed. */
removeAttributeModifier(attribute: org_bukkit_attribute_Attribute): boolean;
/** Remove all Attributes and AttributeModifiers for a
 given EquipmentSlot.
 If the given EquipmentSlot is null, this will remove all
 AttributeModifiers that do not have an EquipmentSlot set. */
removeAttributeModifier(slot: org_bukkit_inventory_EquipmentSlot): boolean;
/** Remove specific set of itemFlags. This tells the Client it should render it again. This Method does silently ignore double removed itemFlags. */
removeItemFlags(...itemFlags: org_bukkit_inventory_ItemFlag[]): void;
/** Removes the specified enchantment from this item meta. */
removeEnchant(ench: org_bukkit_enchantments_Enchantment): boolean;
/** Return an immutable copy of all AttributeModifiers
 for a given Attribute */
getAttributeModifiers(attribute: org_bukkit_attribute_Attribute): java_util_Collection<org_bukkit_attribute_AttributeModifier> | null;
/** Return an immutable copy of all Attributes and
 their modifiers in this ItemMeta.
 Returns null if none exist. */
getAttributeModifiers(): com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier> | null;
/** Return an immutable copy of all Attributes and their
 AttributeModifiers for a given EquipmentSlot.
 Any AttributeModifier that does have have a given
 EquipmentSlot will be returned. This is because
 AttributeModifiers without a slot are active in any slot.
 If there are no attributes set for the given slot, an empty map
 will be returned. */
getAttributeModifiers(slot: org_bukkit_inventory_EquipmentSlot): com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>;
/** Return if the unbreakable tag is true. An unbreakable item will not lose
 durability. */
isUnbreakable(): boolean;
/** Returns a copy the enchantments in this ItemMeta. 
 Returns an empty map if none. */
getEnchants(): java_util_Map<org_bukkit_enchantments_Enchantment, java_lang_Integer>;
/** Returns a custom tag container capable of storing tags on the object.

 Note that the tags stored on this container are all stored under their
 own custom namespace therefore modifying default tags using this
 PersistentDataHolder is impossible. */
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;
/** Returns a public custom tag container capable of storing tags on the
 item.

 Those tags will be sent to the client with all of their content, so the
 client is capable of reading them. This will result in the player seeing
 a NBT Tag notification on the item.

 These tags can also be modified by the client once in creative mode */
getCustomTagContainer(): org_bukkit_inventory_meta_tags_CustomItemTagContainer;
/** Set all Attributes and their AttributeModifiers.
 To clear all currently set Attributes and AttributeModifiers use
 null or an empty Multimap.
 If not null nor empty, this will filter all entries that are not-null
 and add them to the ItemStack. */
setAttributeModifiers(attributeModifiers: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier> | null): void | null;
/** Set itemflags which should be ignored when rendering a ItemStack in the Client. This Method does silently ignore double set itemFlags. */
addItemFlags(...itemFlags: org_bukkit_inventory_ItemFlag[]): void;
/** Sets set of materials what given item can destroy in GameMode.ADVENTURE */
setCanDestroy(canDestroy: java_util_Set<org_bukkit_Material>): void;
/** Sets set of materials where given item can be placed on in GameMode.ADVENTURE */
setCanPlaceOn(canPlaceOn: java_util_Set<org_bukkit_Material>): void;
/** Sets that this ArmorStand should be a marker when spawned
 The exact details of this flag are an implementation detail */
setMarker(marker: boolean): void;
/** Sets that this ArmorStand should be invisible when spawned */
setInvisible(invisible: boolean): void;
/** Sets that this ArmorStand should be small when spawned */
setSmall(small: boolean): void;
/** Sets that this ArmorStand should have no base plate when spawned */
setNoBasePlate(noBasePlate: boolean): void;
/** Sets that this ArmorStand should show arms when spawned */
setShowArms(showArms: boolean): void;
/** Sets the collection of namespaced keys that the item can destroy in GameMode.ADVENTURE */
setDestroyableKeys(canDestroy: java_util_Collection<com_destroystokyo_paper_Namespaced>): void;
/** Sets the custom model data.
 
 CustomModelData is an integer that may be associated client side with a
 custom item model. */
setCustomModelData(data: java_lang_Integer | null): void | null;
/** Sets the display name. */
setDisplayName(name: string | null): void | null;
/** Sets the localized name. */
setLocalizedName(name: string | null): void | null;
/** Sets the lore for this item.
 Removes lore when given null. */
setLore(lore: java_util_List<string> | null): void | null;
/** Sets the set of namespaced keys that the item can be placed on in GameMode.ADVENTURE */
setPlaceableKeys(canPlaceOn: java_util_Collection<com_destroystokyo_paper_Namespaced>): void;
/** Sets the unbreakable tag. An unbreakable item will not lose durability. */
setUnbreakable(unbreakable: boolean): void;
clone(): org_bukkit_inventory_meta_ItemMeta;
getDisplayNameComponent(): net_md_5_bungee_api_chat_BaseComponent[];
getLoreComponents(): java_util_List<net_md_5_bungee_api_chat_BaseComponent[]>;
setDisplayNameComponent(arg0: net_md_5_bungee_api_chat_BaseComponent[]): void;
setLoreComponents(arg0: java_util_List<net_md_5_bungee_api_chat_BaseComponent[]>): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';
import { Object as java_lang_Object } from 'java.lang';

  export class ASMEventExecutorGenerator extends java_lang_Object {
static NEXT_ID: java_util_concurrent_atomic_AtomicInteger;
static generateEventExecutor(m: java_lang_reflect_Method, name: string): number[];
static generateName(): string;
constructor();
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { List as java_util_List } from 'java.util';
import { CommandSender as org_bukkit_command_CommandSender } from 'org.bukkit.command';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Allows plugins to compute tab completion results asynchronously. If this event provides completions, then the standard synchronous process will not be fired to populate the results. However, the synchronous TabCompleteEvent will fire with the Async results.

 Only 1 process will be allowed to provide completions, the Async Event, or the standard process. */

  export class AsyncTabCompleteEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
buffer: string;
class: java_lang_Class<java_lang_Object>;
completions: java_util_List<string>;
handlers: org_bukkit_event_HandlerList;
location: org_bukkit_Location | null;
sender: org_bukkit_command_CommandSender;
static handlerList: org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Get the sender completing this command. */
getSender(): org_bukkit_command_CommandSender;
/** If true, the standard process of calling Command.tabComplete(CommandSender, String, String[])
 or current player names will not be called. */
isHandled(): boolean;
/** Return the entire buffer which formed the basis of this completion. */
getBuffer(): string;
/** Set the completions offered, overriding any already set.
 If this collection is not empty after the event is fired, then
 the standard process of calling Command.tabComplete(CommandSender, String, String[])
 or current player names will not be called.

 The passed collection will be cloned to a new List. You must call {getCompletions()} to mutate from here */
setCompletions(completions: java_util_List<string>): void;
/** Sets whether or not to consider the completion request handled.
 If true, the standard process of calling Command.tabComplete(CommandSender, String, String[])
 or current player names will not be called. */
setHandled(handled: boolean): void;
/** The list of completions which will be offered to the sender, in order.
 This list is mutable and reflects what will be offered.

 If this collection is not empty after the event is fired, then
 the standard process of calling Command.tabComplete(CommandSender, String, String[])
 or current player names will not be called. */
getCompletions(): java_util_List<string>;
/** Will provide no completions, and will not fire the synchronous process */
setCancelled(cancelled: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getLocation(): org_bukkit_Location | null;
hashCode(): number;
isCommand(): boolean;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(sender: org_bukkit_command_CommandSender, completions: java_util_List<string>, buffer: string, isCommand: boolean, loc: org_bukkit_Location | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { PotionEffect as org_bukkit_potion_PotionEffect } from 'org.bukkit.potion';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';
/** Called when a beacon effect is being applied to a player. */

  export class BeaconEffectEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
effect: org_bukkit_potion_PotionEffect;
eventName: string;
handlers: org_bukkit_event_HandlerList;
player: org_bukkit_entity_Player;
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
setCancelled(cancelled: boolean): void;
/** Gets the player who the potion effect is being applied to. */
getPlayer(): org_bukkit_entity_Player;
/** Gets the potion effect being applied. */
getEffect(): org_bukkit_potion_PotionEffect;
/** Gets whether the effect is a primary beacon effect. */
isPrimary(): boolean;
/** Sets the potion effect that will be applied. */
setEffect(effect: org_bukkit_potion_PotionEffect): void;
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
constructor(block: org_bukkit_block_Block, effect: org_bukkit_potion_PotionEffect, player: org_bukkit_entity_Player, primary: boolean);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';
/** Fired anytime the server intends to 'destroy' a block through some triggering reason.
 This does not fire anytime a block is set to air, but only with more direct triggers such
 as physics updates, pistons, Entities changing blocks, commands set to "Destroy".

 This event is associated with the game playing a sound effect at the block in question, when
 something can be described as "intend to destroy what is there",

 Events such as leaves decaying, pistons retracting (where the block is moving), does NOT fire this event. */

  export class BlockDestroyEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
newState: org_bukkit_block_data_BlockData;
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
/** If the event is cancelled, the block will remain in its previous state. */
setCancelled(cancel: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getNewState(): org_bukkit_block_data_BlockData;
hashCode(): number;
notify(): void;
notifyAll(): void;
playEffect(): boolean;
setPlayEffect(playEffect: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
willDrop(): boolean;
constructor(block: org_bukkit_block_Block, newState: org_bukkit_block_data_BlockData, willDrop: boolean);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Sound as org_bukkit_Sound } from 'org.bukkit';
/** Represents the sounds that a Block makes in certain situations
 
 The sound group includes break, step, place, hit, and fall sounds. */

  export class BlockSoundGroup {
breakSound: org_bukkit_Sound;
fallSound: org_bukkit_Sound;
hitSound: org_bukkit_Sound;
placeSound: org_bukkit_Sound;
stepSound: org_bukkit_Sound;
/** Gets the sound that plays when breaking this block */
getBreakSound(): org_bukkit_Sound;
/** Gets the sound that plays when hitting this block */
getHitSound(): org_bukkit_Sound;
/** Gets the sound that plays when placing this block */
getPlaceSound(): org_bukkit_Sound;
/** Gets the sound that plays when stepping on this block */
getStepSound(): org_bukkit_Sound;
/** Gets the sound that plays when this block falls */
getFallSound(): org_bukkit_Sound;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { ConcurrentLinkedQueue as java_util_concurrent_ConcurrentLinkedQueue } from 'java.util.concurrent';

  export class CachedSizeConcurrentLinkedQueue<E extends java_lang_Object> extends java_util_concurrent_ConcurrentLinkedQueue<E> {
class: java_lang_Class<java_lang_Object>;
add(e: E): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
element(): E;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
parallelStream(): java_util_stream_Stream<E>;
poll(): E | null;
remove(): E;
size(): number;
stream(): java_util_stream_Stream<E>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
/** Represents an Inventory that can generate loot, such as Chests inside of Fortresses and Mineshafts */

  export class LootableBlockInventory implements com_destroystokyo_paper_loottable_LootableInventory {
block: org_bukkit_block_Block;
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
lootTable: org_bukkit_loot_LootTable | null;
nextRefill: number;
seed: number;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Gets the block that is lootable */
getBlock(): org_bukkit_block_Block;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable, Lootable as org_bukkit_loot_Lootable } from 'org.bukkit.loot';
/** Represents an Inventory that contains a Loot Table associated to it that will
 automatically fill on first open.

 A new feature and API is provided to support automatically refreshing the contents
 of the inventory based on that Loot Table after a configurable amount of time has passed.

 The behavior of how the Inventory is filled based on the loot table may vary based
 on Minecraft versions and the Loot Table feature. */

  export class LootableInventory implements org_bukkit_loot_Lootable {
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
lootTable: org_bukkit_loot_LootTable | null;
nextRefill: number;
seed: number;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { ClassDefiner as com_destroystokyo_paper_event_executor_asm_ClassDefiner } from 'com.destroystokyo.paper.event.executor.asm';
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class ClassDefiner {
static instance: com_destroystokyo_paper_event_executor_asm_ClassDefiner;
/** Define a class */
defineClass(parentLoader: java_lang_ClassLoader, name: string, data: number[]): java_lang_Class<java_lang_Object>;
/** Returns if the defined classes can bypass access checks */
isBypassAccessChecks(): boolean;
static getInstance(): com_destroystokyo_paper_event_executor_asm_ClassDefiner;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Class as java_lang_Class, Boolean as java_lang_Boolean, Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { ClientOption as com_destroystokyo_paper_ClientOption, SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';

  export class ClientOption<T extends java_lang_Object> extends java_lang_Object {
static CHAT_COLORS_ENABLED: com_destroystokyo_paper_ClientOption<java_lang_Boolean>;
static CHAT_VISIBILITY: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_ClientOption_ChatVisibility>;
static LOCALE: com_destroystokyo_paper_ClientOption<string>;
static MAIN_HAND: com_destroystokyo_paper_ClientOption<org_bukkit_inventory_MainHand>;
static SKIN_PARTS: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_SkinParts>;
static VIEW_DISTANCE: com_destroystokyo_paper_ClientOption<java_lang_Integer>;
type: java_lang_Class<T>;
getType(): java_lang_Class<T>;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.ClientOption' {
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChatVisibility extends java_lang_Enum<com_destroystokyo_paper_ClientOption_ChatVisibility> {
class: java_lang_Class<java_lang_Object>;
static FULL: com_destroystokyo_paper_ClientOption_ChatVisibility;
static HIDDEN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static SYSTEM: com_destroystokyo_paper_ClientOption_ChatVisibility;
static UNKNOWN: com_destroystokyo_paper_ClientOption_ChatVisibility;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ClientOption.ChatVisibility c : ClientOption.ChatVisibility.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_ClientOption_ChatVisibility[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_ClientOption_ChatVisibility;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Creeper as org_bukkit_entity_Creeper } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Called when a Creeper is ignite flag is changed (armed/disarmed to explode). */

  export class CreeperIgniteEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Creeper;
entity: org_bukkit_entity_Entity;
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
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Creeper;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
hashCode(): number;
isIgnited(): boolean;
notify(): void;
notifyAll(): void;
setIgnited(ignited: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(creeper: org_bukkit_entity_Creeper, ignited: boolean);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player, EntityType as org_bukkit_entity_EntityType, Pose as org_bukkit_entity_Pose, Projectile as org_bukkit_entity_Projectile, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Pathfinder as com_destroystokyo_paper_entity_Pathfinder, TargetEntityInfo as com_destroystokyo_paper_entity_TargetEntityInfo } from 'com.destroystokyo.paper.entity';
import { MemoryKey as org_bukkit_entity_memory_MemoryKey } from 'org.bukkit.entity.memory';
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class } from 'java.lang';
import { EntityEquipment as org_bukkit_inventory_EntityEquipment, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { RayTraceResult as org_bukkit_util_RayTraceResult, BoundingBox as org_bukkit_util_BoundingBox, Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { FluidCollisionMode as org_bukkit_FluidCollisionMode, Location as org_bukkit_Location, Material as org_bukkit_Material, World as org_bukkit_World, Server as org_bukkit_Server, Chunk as org_bukkit_Chunk, EntityEffect as org_bukkit_EntityEffect } from 'org.bukkit';
import { Set as java_util_Set, List as java_util_List, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace, PistonMoveReaction as org_bukkit_block_PistonMoveReaction } from 'org.bukkit.block';
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { TargetBlockInfo as com_destroystokyo_paper_block_TargetBlockInfo } from 'com.destroystokyo.paper.block';
import { PotionEffect as org_bukkit_potion_PotionEffect, PotionEffectType as org_bukkit_potion_PotionEffectType } from 'org.bukkit.potion';
import { Attribute as org_bukkit_attribute_Attribute, AttributeInstance as org_bukkit_attribute_AttributeInstance } from 'org.bukkit.attribute';
import { Spigot as org_bukkit_command_CommandSender_Spigot } from 'org.bukkit.command.CommandSender';
import { Spigot as org_bukkit_entity_Entity_Spigot } from 'org.bukkit.entity.Entity';
import { TeleportCause as org_bukkit_event_player_PlayerTeleportEvent_TeleportCause } from 'org.bukkit.event.player.PlayerTeleportEvent';
import { EntityDamageEvent as org_bukkit_event_entity_EntityDamageEvent } from 'org.bukkit.event.entity';
import { CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { MetadataValue as org_bukkit_metadata_MetadataValue } from 'org.bukkit.metadata';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Permission as org_bukkit_permissions_Permission, PermissionAttachment as org_bukkit_permissions_PermissionAttachment, PermissionAttachmentInfo as org_bukkit_permissions_PermissionAttachmentInfo } from 'org.bukkit.permissions';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';

  export class RangedEntity implements org_bukkit_entity_Mob {
absorptionAmount: number;
activeItem: org_bukkit_inventory_ItemStack | null;
activePotionEffects: java_util_Collection<org_bukkit_potion_PotionEffect>;
arrowsStuck: number;
attribute: org_bukkit_attribute_AttributeInstance | null;
boundingBox: org_bukkit_util_BoundingBox;
canPickupItems: boolean;
chunk: org_bukkit_Chunk;
collidableExemptions: java_util_Set<java_util_UUID>;
customName: string | null;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
entityId: number;
entitySpawnReason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
equipment: org_bukkit_inventory_EntityEquipment | null;
eyeHeight: number;
eyeHeight: number;
eyeLocation: org_bukkit_Location;
facing: org_bukkit_block_BlockFace;
fallDistance: number;
fireTicks: number;
handRaisedTime: number;
health: number;
height: number;
itemUseRemainingTime: number;
killer: org_bukkit_entity_Player | null;
lastDamage: number;
lastDamageCause: org_bukkit_event_entity_EntityDamageEvent | null;
lastTwoTargetBlocks: java_util_List<org_bukkit_block_Block> | null;
leashHolder: org_bukkit_entity_Entity;
lineOfSight: java_util_List<org_bukkit_block_Block> | null;
location: org_bukkit_Location;
location: org_bukkit_Location;
lootTable: org_bukkit_loot_LootTable | null;
maxFireTicks: number;
maxHealth: number;
maximumAir: number;
maximumNoDamageTicks: number;
memory: T | null;
metadata: java_util_List<org_bukkit_metadata_MetadataValue>;
name: string;
nearbyEntities: java_util_List<org_bukkit_entity_Entity>;
noDamageTicks: number;
origin: org_bukkit_Location | null;
passenger: org_bukkit_entity_Entity | null;
passengers: java_util_List<org_bukkit_entity_Entity>;
pathfinder: com_destroystokyo_paper_entity_Pathfinder;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
pistonMoveReaction: org_bukkit_block_PistonMoveReaction;
portalCooldown: number;
pose: org_bukkit_entity_Pose;
potionEffect: org_bukkit_potion_PotionEffect | null;
remainingAir: number;
removeWhenFarAway: boolean;
scoreboardTags: java_util_Set<string>;
seed: number;
server: org_bukkit_Server;
shieldBlockingDelay: number;
target: org_bukkit_entity_LivingEntity | null;
targetBlock: org_bukkit_block_Block | null;
targetBlock: org_bukkit_block_Block | null;
targetBlock: org_bukkit_block_Block | null;
targetBlockExact: org_bukkit_block_Block | null;
targetBlockExact: org_bukkit_block_Block | null;
targetBlockFace: org_bukkit_block_BlockFace | null;
targetBlockFace: org_bukkit_block_BlockFace | null;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo | null;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo | null;
targetEntity: org_bukkit_entity_Entity | null;
targetEntity: org_bukkit_entity_Entity | null;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo | null;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo | null;
ticksLived: number;
type: org_bukkit_entity_EntityType;
uniqueId: java_util_UUID;
vehicle: org_bukkit_entity_Entity | null;
velocity: org_bukkit_util_Vector;
width: number;
world: org_bukkit_World;
/** Add a passenger to the vehicle. */
addPassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Add a tag to this entity.
 
 Entities can have no more than 1024 tags. */
addScoreboardTag(tag: string): boolean;
/** Adds a new PermissionAttachment with a single permission by
 name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean): org_bukkit_permissions_PermissionAttachment;
/** Adds a new empty PermissionAttachment to this object */
addAttachment(plugin: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
/** Adds the given PotionEffect to the living entity.
 
 Only one potion effect can be present for a given PotionEffectType. */
addPotionEffect(effect: org_bukkit_potion_PotionEffect, force: boolean): boolean;
/** Adds the given PotionEffect to the living entity. */
addPotionEffect(effect: org_bukkit_potion_PotionEffect): boolean;
/** Alias to LivingEntity.isHandRaised(), if the entity is charging an attack */
isChargingAttack(): boolean;
/** Attack the specified entity using a ranged attack. */
rangedAttack(target: org_bukkit_entity_LivingEntity, charge: number): void;
/** Attempts to add all of the given PotionEffect to the living
 entity. */
addPotionEffects(effects: java_util_Collection<org_bukkit_potion_PotionEffect>): boolean;
/** Check if a vehicle has passengers. */
isEmpty(): boolean;
/** Check if this mob is exposed to daylight */
isInDaylight(): boolean;
/** Checks if this object contains an override for the specified
 permission, by fully qualified name */
isPermissionSet(name: string): boolean;
/** Checks if this object contains an override for the specified Permission */
isPermissionSet(perm: org_bukkit_permissions_Permission): boolean;
/** Checks if this object is a server operator */
isOp(): boolean;
/** Checks to see if an entity is currently using the Riptide enchantment. */
isRiptiding(): boolean;
/** Checks to see if an entity is gliding, such as using an Elytra. */
isGliding(): boolean;
/** Checks to see if an entity is swimming. */
isSwimming(): boolean;
/** Checks whether an entity has AI.

 The entity will be completely unable to move if it has no AI. */
hasAI(): boolean;
/** Checks whether the living entity has block line of sight to another.
 
 This uses the same algorithm that hostile mobs use to find the closest
 player. */
hasLineOfSight(other: org_bukkit_entity_Entity): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;
/** Deals the given amount of damage to this entity, from a specified
 entity. */
damage(amount: number, source: org_bukkit_entity_Entity | null): void | null;
/** Deals the given amount of damage to this entity. */
damage(amount: number): void;
/** Eject any passenger. */
eject(): boolean;
/** Enables access to control the pathing of an Entity */
getPathfinder(): com_destroystokyo_paper_entity_Pathfinder;
/** Get a Location detailing the current eye position of the living entity. */
getEyeLocation(): org_bukkit_Location;
/** Get entity jump state.
 
 Jump state will be true when the entity has been marked to jump. */
isJumping(): boolean;
/** Get how long the players hands have been raised (Charging Bow attack, using a potion, etc) */
getHandRaisedTime(): number;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Get the closest cardinal BlockFace direction an entity is
 currently facing.
 
 This will not return any non-cardinal directions such as
 BlockFace.UP or BlockFace.DOWN.
 
 Hanging entities will override this call and thus their behavior
 may be different. */
getFacing(): org_bukkit_block_BlockFace;
/** Get the delay (in ticks) before blocking is effective for this entity */
getShieldBlockingDelay(): number;
/** Get the number of arrows stuck in this entity */
getArrowsStuck(): number;
/** Get the type of the entity. */
getType(): org_bukkit_entity_EntityType;
/** Get the vehicle that this player is inside. If there is no vehicle,
 null will be returned. */
getVehicle(): org_bukkit_entity_Entity | null;
/** Get's remaining time a player needs to keep hands raised with an item to finish using it. */
getItemUseRemainingTime(): number;
/** Get's the item being actively "used" or consumed. */
getActiveItem(): org_bukkit_inventory_ItemStack | null;
/** Gets a list of passengers of this vehicle.
 
 The returned list will not be directly linked to the entity's current
 passengers, and no guarantees are made as to its mutability. */
getPassengers(): java_util_List<org_bukkit_entity_Entity>;
/** Gets a set containing all of the permissions currently in effect by
 this object */
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
/** Gets all blocks along the living entity's line of sight.
 
 This list contains all blocks from the living entity's eye position to
 target inclusive. This method considers all blocks as 1x1x1 in size. */
getLineOfSight(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): java_util_List<org_bukkit_block_Block> | null;
/** Gets if the living entity can pick up items. */
getCanPickupItems(): boolean;
/** Gets if this entity is subject to collisions with other entities.
 
 Please note that this method returns only the custom collidable state,
 not whether the entity is non-collidable for other reasons such as being
 dead. */
isCollidable(): boolean;
/** Gets information about the block the living entity has targeted */
getTargetBlockInfo(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): com_destroystokyo_paper_block_TargetBlockInfo | null;
/** Gets information about the block the living entity has targeted, ignoring fluids */
getTargetBlockInfo(maxDistance: number): com_destroystokyo_paper_block_TargetBlockInfo | null;
/** Gets information about the entity being targeted */
getTargetEntity(maxDistance: number): org_bukkit_entity_Entity | null;
/** Gets information about the entity being targeted */
getTargetEntity(maxDistance: number, ignoreBlocks: boolean): org_bukkit_entity_Entity | null;
/** Gets information about the entity being targeted */
getTargetEntityInfo(maxDistance: number): com_destroystokyo_paper_entity_TargetEntityInfo | null;
/** Gets information about the entity being targeted */
getTargetEntityInfo(maxDistance: number, ignoreBlocks: boolean): com_destroystokyo_paper_entity_TargetEntityInfo | null;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Gets the Server that contains this Entity */
getServer(): org_bukkit_Server;
/** Gets the amount of ticks this entity has lived for.
 
 This is the equivalent to "age" in entities. */
getTicksLived(): number;
/** Gets the block that the living entity has targeted */
getTargetBlock(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted, ignoring fluids */
getTargetBlock(maxDistance: number): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted.
 
 This method considers all blocks as 1x1x1 in size. To take exact block
 collision shapes into account, see getTargetBlockExact(int,
 FluidCollisionMode). */
getTargetBlock(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted.
 
 This takes the blocks' precise collision shapes into account.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
getTargetBlockExact(maxDistance: number, fluidCollisionMode: org_bukkit_FluidCollisionMode): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted.
 
 This takes the blocks' precise collision shapes into account. Fluids are
 ignored.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
getTargetBlockExact(maxDistance: number): org_bukkit_block_Block | null;
/** Gets the blockface of that block that the living entity has targeted */
getTargetBlockFace(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_BlockFace | null;
/** Gets the blockface of that block that the living entity has targeted, ignoring fluids */
getTargetBlockFace(maxDistance: number): org_bukkit_block_BlockFace | null;
/** Gets the current target of this Mob */
getTarget(): org_bukkit_entity_LivingEntity | null;
/** Gets the current world this entity resides in */
getWorld(): org_bukkit_World;
/** Gets the custom name on a mob or block. If there is no name this method
 will return null.
 
 This value has no effect on players, they will always use their real
 name. */
getCustomName(): string | null;
/** Gets the entity that is currently leading this entity. */
getLeashHolder(): org_bukkit_entity_Entity;
/** Gets the entity's absorption amount. */
getAbsorptionAmount(): number;
/** Gets the entity's current bounding box.
 
 The returned bounding box reflects the entity's current location and
 size. */
getBoundingBox(): org_bukkit_util_BoundingBox;
/** Gets the entity's current pose.

 Note that the pose is only updated at the end of a tick, so may be
 inconsistent with other methods. eg Player.isSneaking() being
 true does not imply the current pose will be Pose.SNEAKING */
getPose(): org_bukkit_entity_Pose;
/** Gets the entity's health from 0 to getMaxHealth(), where 0 is dead. */
getHealth(): number;
/** Gets the entity's height */
getHeight(): number;
/** Gets the entity's width */
getWidth(): number;
/** Gets the height of the living entity's eyes above its Location. */
getEyeHeight(): number;
/** Gets the height of the living entity's eyes above its Location. */
getEyeHeight(ignorePose: boolean): number;
/** Gets the inventory with the equipment worn by the living entity. */
getEquipment(): org_bukkit_inventory_EntityEquipment | null;
/** Gets the last two blocks along the living entity's line of sight.
 
 The target block will be the last block in the list. This method
 considers all blocks as 1x1x1 in size. */
getLastTwoTargetBlocks(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): java_util_List<org_bukkit_block_Block> | null;
/** Gets the latest chunk an entity is currently or was in. */
getChunk(): org_bukkit_Chunk;
/** Gets the location where this entity originates from.
 
 This value can be null if the entity hasn't yet been added to the world. */
getOrigin(): org_bukkit_Location | null;
/** Gets the maximum health this entity has. */
getMaxHealth(): number;
/** Gets the name of this command sender */
getName(): string;
/** Gets the period of time (in ticks) before this entity can use a portal. */
getPortalCooldown(): number;
/** Gets the player identified as the killer of the living entity.
 
 May be null. */
getKiller(): org_bukkit_entity_Player | null;
/** Gets the primary passenger of a vehicle. For vehicles that could have
 multiple passengers, this will only return the primary passenger. */
getPassenger(): org_bukkit_entity_Entity | null;
/** Gets the specified attribute instance from the object. This instance will
 be backed directly to the object and any changes will be visible at once. */
getAttribute(attribute: org_bukkit_attribute_Attribute): org_bukkit_attribute_AttributeInstance | null;
/** Gets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned */
hasPermission(perm: org_bukkit_permissions_Permission): boolean;
/** Gets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned. */
hasPermission(name: string): boolean;
/** Gets this entity's current velocity */
getVelocity(): org_bukkit_util_Vector;
/** Gets whether or not the mob's custom name is displayed client side.
 
 This value has no effect on players, they will always display their
 name. */
isCustomNameVisible(): boolean;
/** Gets whether the entity is glowing or not.

 nb: this refers to the 'Glowing' entity property, not whether a
 glowing potion effect is applied */
isGlowing(): boolean;
/** Gets whether the entity is invulnerable or not. */
isInvulnerable(): boolean;
/** Gets whether the entity is silent or not. */
isSilent(): boolean;
/** Gets whether this mob is aware of its surroundings.

 Unaware mobs will still move if pushed, attacked, etc. but will not move
 or perform any actions on their own. Unaware mobs may also have other
 unspecified behaviours disabled, such as drowning. */
isAware(): boolean;
/** Instructs this Mob to set the specified LivingEntity as its target.
 
 Hostile creatures may attack their target, and friendly creatures may
 follow their target. */
setTarget(target: org_bukkit_entity_LivingEntity | null): void | null;
/** Launches a Projectile from the ProjectileSource with an
 initial velocity. */
launchProjectile<T extends org_bukkit_entity_Projectile>(projectile: java_lang_Class<T>, velocity: org_bukkit_util_Vector | null): T | null;
/** Launches a Projectile from the ProjectileSource. */
launchProjectile<T extends org_bukkit_entity_Projectile>(projectile: java_lang_Class<T>): T;
/** Leave the current vehicle. If the entity is currently in a vehicle (and
 is removed from it), true will be returned, otherwise false will be
 returned. */
leaveVehicle(): boolean;
/** Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready. */
teleportAsync(loc: org_bukkit_Location): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
/** Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready. */
teleportAsync(loc: org_bukkit_Location, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
/** Makes entity start or stop gliding. This will work even if an Elytra
 is not equipped, but will be reverted by the server immediately after
 unless an event-cancelling mechanism is put in place. */
setGliding(gliding: boolean): void;
/** Makes entity start or stop swimming.

 This may have unexpected results if the entity is not in water. */
setSwimming(swimming: boolean): void;
/** Makes this entity attack the given entity with a melee attack.

 Attack damage is calculated by the server from the attributes and
 equipment of this mob, and knockback is applied to target as
 appropriate. */
attack(target: org_bukkit_entity_Entity): void;
/** Makes this entity swing their main hand.

 This method does nothing if this entity does not have an animation for
 swinging their main hand. */
swingMainHand(): void;
/** Makes this entity swing their off hand.

 This method does nothing if this entity does not have an animation for
 swinging their off hand. */
swingOffHand(): void;
/** Mark the entity's removal. */
remove(): void;
/** Performs a ray trace that provides information on the targeted block.
 
 This takes the blocks' precise collision shapes into account.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
rayTraceBlocks(maxDistance: number, fluidCollisionMode: org_bukkit_FluidCollisionMode): org_bukkit_util_RayTraceResult | null;
/** Performs a ray trace that provides information on the targeted block.
 
 This takes the blocks' precise collision shapes into account. Fluids are
 ignored.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
rayTraceBlocks(maxDistance: number): org_bukkit_util_RayTraceResult | null;
/** Performs the specified EntityEffect for this entity.
 
 This will be viewable to all players near the entity.
 
 If the effect is not applicable to this class of entity, it will not play. */
playEffect(type: org_bukkit_EntityEffect): void;
/** Recalculates the permissions for this object, if the attachments have
 changed values.
 
 This should very rarely need to be called from a plugin. */
recalculatePermissions(): void;
/** Record the last EntityDamageEvent inflicted on this entity */
setLastDamageCause(event: org_bukkit_event_entity_EntityDamageEvent | null): void | null;
/** Remove a passenger from the vehicle. */
removePassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Removes a given tag from this entity. */
removeScoreboardTag(tag: string): boolean;
/** Removes any effects present of the given PotionEffectType. */
removePotionEffect(type: org_bukkit_potion_PotionEffectType): void;
/** Removes the given PermissionAttachment from this object */
removeAttachment(attachment: org_bukkit_permissions_PermissionAttachment): void;
/** Removes the given metadata value from the implementing object's
 metadata store. */
removeMetadata(metadataKey: string, owningPlugin: org_bukkit_plugin_Plugin): void;
/** Resets the max health to the original amount. */
resetMaxHealth(): void;
/** Retrieve the last EntityDamageEvent inflicted on this entity.
 This event may have been cancelled. */
getLastDamageCause(): org_bukkit_event_entity_EntityDamageEvent | null;
/** Returns a custom tag container capable of storing tags on the object.

 Note that the tags stored on this container are all stored under their
 own custom namespace therefore modifying default tags using this
 PersistentDataHolder is impossible. */
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;
/** Returns a list of entities within a bounding box centered around this
 entity */
getNearbyEntities(x: number, y: number, z: number): java_util_List<org_bukkit_entity_Entity>;
/** Returns a list of previously set metadata values from the implementing
 object's metadata store. */
getMetadata(metadataKey: string): java_util_List<org_bukkit_metadata_MetadataValue>;
/** Returns a set of tags for this entity.
 
 Entities can have no more than 1024 tags. */
getScoreboardTags(): java_util_Set<string>;
/** Returns a unique and persistent id for this entity */
getUniqueId(): java_util_UUID;
/** Returns a unique id for this entity */
getEntityId(): number;
/** Returns all currently active PotionEffects on the living
 entity. */
getActivePotionEffects(): java_util_Collection<org_bukkit_potion_PotionEffect>;
/** Returns false if the entity has died or been despawned for some other
 reason. */
isValid(): boolean;
/** Returns if the living entity despawns when away from players or not.
 
 By default, animals are not removed while other mobs are. */
getRemoveWhenFarAway(): boolean;
/** Returns the active PotionEffect of the specified type.
 
 If the effect is not present on the entity then null will be returned. */
getPotionEffect(type: org_bukkit_potion_PotionEffectType): org_bukkit_potion_PotionEffect | null;
/** Returns the amount of air that the living entity has remaining, in
 ticks. */
getRemainingAir(): number;
/** Returns the distance this entity has fallen */
getFallDistance(): number;
/** Returns the entity's current fire ticks (ticks before the entity stops
 being on fire). */
getFireTicks(): number;
/** Returns the entity's maximum fire ticks. */
getMaxFireTicks(): number;
/** Returns the living entity's current maximum no damage ticks.
 
 This is the maximum duration in which the living entity will not take
 damage. */
getMaximumNoDamageTicks(): number;
/** Returns the living entity's current no damage ticks. */
getNoDamageTicks(): number;
/** Returns the living entity's last damage taken in the current no damage
 ticks time.
 
 Only damage higher than this amount will further damage the living
 entity. */
getLastDamage(): number;
/** Returns the maximum amount of air the living entity can have, in ticks. */
getMaximumAir(): number;
/** Returns the reaction of the entity when moved by a piston. */
getPistonMoveReaction(): org_bukkit_block_PistonMoveReaction;
/** Returns the value of the memory specified.
 
 Note that the value is null when the specific entity does not have that
 value by default. */
getMemory<T extends java_lang_Object>(memoryKey: org_bukkit_entity_memory_MemoryKey<T>): T | null;
/** Returns true if the entity gets persisted.
 
 By default all entities are persistent. An entity will also not get
 persisted, if it is riding an entity that is not persistent.
 
 The persistent flag on players controls whether or not to save their
 playerdata file when they quit. If a player is directly or indirectly
 riding a non-persistent entity, the vehicle at the root and all its
 passengers won't get persisted.
 
 This should not be confused with
 LivingEntity.setRemoveWhenFarAway(boolean) which controls
 despawning of living entities.  */
isPersistent(): boolean;
/** Returns true if the entity is supported by a block. This value is a
 state updated by the server and is not recalculated unless the entity
 moves. */
isOnGround(): boolean;
/** Returns true if this entity has been marked for removal. */
isDead(): boolean;
/** Returns whether gravity applies to this entity. */
hasGravity(): boolean;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Returns whether the entity is currently leashed. */
isLeashed(): boolean;
/** Returns whether the living entity already has an existing effect of
 the given PotionEffectType applied to it. */
hasPotionEffect(type: org_bukkit_potion_PotionEffectType): boolean;
/** Returns whether this entity is inside a vehicle. */
isInsideVehicle(): boolean;
/** Returns whether this entity is slumbering. */
isSleeping(): boolean;
/** Returns whether this entity was spawned from a mob spawner. */
fromMobSpawner(): boolean;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(...component: net_md_5_bungee_api_chat_BaseComponent[]): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(component: net_md_5_bungee_api_chat_BaseComponent): void;
/** Sends this sender a message */
sendMessage(message: string): void;
/** Sends this sender a message */
sendMessage(message: string[]): void;
/** Set entity jump state
 
 Setting to true will mark the entity to jump.
 
 Setting to false will unmark the entity to jump but will not stop a jump already in-progress. */
setJumping(jumping: boolean): void;
/** Set if this entity will be subject to collisions other entities.
 
 Note that collisions are bidirectional, so this method would need to be
 set to false on both the collidee and the collidant to ensure no
 collisions take place. */
setCollidable(collidable: boolean): void;
/** Set the delay (in ticks) before blocking is effective for this entity */
setShieldBlockingDelay(delay: number): void;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the number of arrows stuck in this entity */
setArrowsStuck(arrows: number): void;
/** Set the passenger of a vehicle. */
setPassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Sets a custom name on a mob or block. This name will be used in death
 messages and can be sent to the client as a nameplate over the mob.
 
 Setting the name to null or an empty string will clear it.
 
 This value has no effect on players, they will always use their real
 name. */
setCustomName(name: string | null): void | null;
/** Sets a metadata value in the implementing object's metadata store. */
setMetadata(metadataKey: string, newMetadataValue: org_bukkit_metadata_MetadataValue): void;
/** Sets that the Entity is "charging" up an attack, by raising its hands */
setChargingAttack(raiseHands: boolean): void;
/** Sets the amount of air that the living entity has remaining, in ticks. */
setRemainingAir(ticks: number): void;
/** Sets the amount of ticks this entity has lived for.
 
 This is the equivalent to "age" in entities. May not be less than one
 tick. */
setTicksLived(value: number): void;
/** Sets the damage dealt within the current no damage ticks time period. */
setLastDamage(damage: number): void;
/** Sets the entity's absorption amount. */
setAbsorptionAmount(amount: number): void;
/** Sets the entity's current fire ticks (ticks before the entity stops
 being on fire). */
setFireTicks(ticks: number): void;
/** Sets the entity's health from 0 to getMaxHealth(), where 0 is
 dead. */
setHealth(health: number): void;
/** Sets the entity's rotation.
 
 Note that if the entity is affected by AI, it may override this rotation. */
setRotation(yaw: number, pitch: number): void;
/** Sets the fall distance for this entity */
setFallDistance(distance: number): void;
/** Sets the leash on this entity to be held by the supplied entity.
 
 This method has no effect on EnderDragons, Withers, Players, or Bats.
 Non-living entities excluding leashes will not persist as leash
 holders. */
setLeashHolder(holder: org_bukkit_entity_Entity | null): boolean | null;
/** Sets the living entity's current maximum no damage ticks. */
setMaximumNoDamageTicks(ticks: number): void;
/** Sets the living entity's current no damage ticks. */
setNoDamageTicks(ticks: number): void;
/** Sets the maximum amount of air the living entity can have, in ticks. */
setMaximumAir(ticks: number): void;
/** Sets the maximum health this entity can have.
 
 If the health of the entity is above the value provided it will be set
 to that value.
 
 Note: An entity with a health bar (Player, EnderDragon,
 Wither, etc...} will have their bar scaled accordingly. */
setMaxHealth(health: number): void;
/** Sets the operator status of this object */
setOp(value: boolean): void;
/** Sets the period of time (in ticks) before this entity can use a portal. */
setPortalCooldown(cooldown: number): void;
/** Sets the player identified as the killer of the living entity. */
setKiller(killer: org_bukkit_entity_Player | null): void | null;
/** Sets the value of the memory specified.
 
 Note that the value will not be persisted when the specific entity does
 not have that value by default. */
setMemory<T extends java_lang_Object>(memoryKey: org_bukkit_entity_memory_MemoryKey<T>, memoryValue: T | null): void | null;
/** Sets this entity's velocity */
setVelocity(velocity: org_bukkit_util_Vector): void;
/** Sets whether an entity will have AI.

 The entity will be completely unable to move if it has no AI. */
setAI(ai: boolean): void;
/** Sets whether gravity applies to this entity. */
setGravity(gravity: boolean): void;
/** Sets whether or not the entity gets persisted. */
setPersistent(persistent: boolean): void;
/** Sets whether or not the living entity can pick up items. */
setCanPickupItems(pickup: boolean): void;
/** Sets whether or not the living entity despawns when away from players
 or not. */
setRemoveWhenFarAway(remove: boolean): void;
/** Sets whether or not to display the mob's custom name client side. The
 name will be displayed above the mob similarly to a player.
 
 This value has no effect on players, they will always display their
 name. */
setCustomNameVisible(flag: boolean): void;
/** Sets whether the entity has a team colored (default: white) glow.

 nb: this refers to the 'Glowing' entity property, not whether a
 glowing potion effect is applied */
setGlowing(flag: boolean): void;
/** Sets whether the entity is invulnerable or not.
 
 When an entity is invulnerable it can only be damaged by players in
 creative mode. */
setInvulnerable(flag: boolean): void;
/** Sets whether the entity is silent or not.
 
 When an entity is silent it will not produce any sound. */
setSilent(flag: boolean): void;
/** Sets whether this mob is aware of its surroundings.

 Unaware mobs will still move if pushed, attacked, etc. but will not move
 or perform any actions on their own. Unaware mobs may also have other
 unspecified behaviours disabled, such as drowning. */
setAware(aware: boolean): void;
/** Teleports this entity to the given location. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(location: org_bukkit_Location): boolean;
/** Teleports this entity to the given location. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(location: org_bukkit_Location, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
/** Teleports this entity to the target Entity. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(destination: org_bukkit_entity_Entity): boolean;
/** Teleports this entity to the target Entity. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(destination: org_bukkit_entity_Entity, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
/** Temporarily adds a new PermissionAttachment with a single
 permission by name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean, ticks: number): org_bukkit_permissions_PermissionAttachment | null;
/** Temporarily adds a new empty PermissionAttachment to this
 object */
addAttachment(plugin: org_bukkit_plugin_Plugin, ticks: number): org_bukkit_permissions_PermissionAttachment | null;
/** Tests to see whether the implementing object contains the given
 metadata value in its metadata store. */
hasMetadata(metadataKey: string): boolean;
/** Whether or not this entity is using or charging an attack (Bow pulled back, drinking potion, eating food) */
isHandRaised(): boolean;
getCollidableExemptions(): java_util_Set<java_util_UUID>;
getEntitySpawnReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
getLocation(): org_bukkit_Location;
getLocation(arg0: org_bukkit_Location): org_bukkit_Location;
isInBubbleColumn(): boolean;
isInLava(): boolean;
isInRain(): boolean;
isInWater(): boolean;
isInWaterOrBubbleColumn(): boolean;
isInWaterOrRain(): boolean;
isInWaterOrRainOrBubbleColumn(): boolean;
spigot(): org_bukkit_command_CommandSender_Spigot;
spigot(): org_bukkit_entity_Entity_Spigot;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { AreaEffectCloud as org_bukkit_entity_AreaEffectCloud, LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, DragonFireball as org_bukkit_entity_DragonFireball } from 'org.bukkit.entity';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a DragonFireball collides with a block/entity and spawns an AreaEffectCloud */

  export class EnderDragonFireballHitEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_DragonFireball;
entity: org_bukkit_entity_Entity;
eventName: string;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
targets: java_util_Collection<org_bukkit_entity_LivingEntity> | null;
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
/** The fireball involved in this event */
getEntity(): org_bukkit_entity_DragonFireball;
/** The fireball involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** The living entities hit by fireball

 May be null if no entities were hit */
getTargets(): java_util_Collection<org_bukkit_entity_LivingEntity> | null;
equals(arg0: java_lang_Object): boolean;
getAreaEffectCloud(): org_bukkit_entity_AreaEffectCloud;
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
constructor(fireball: org_bukkit_entity_DragonFireball, targets: java_util_Collection<org_bukkit_entity_LivingEntity> | null, areaEffectCloud: org_bukkit_entity_AreaEffectCloud);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { AreaEffectCloud as org_bukkit_entity_AreaEffectCloud, Entity as org_bukkit_entity_Entity, EnderDragon as org_bukkit_entity_EnderDragon } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an EnderDragon spawns an AreaEffectCloud by shooting flames */

  export class EnderDragonFlameEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_EnderDragon;
entity: org_bukkit_entity_Entity;
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
/** The enderdragon involved in this event */
getEntity(): org_bukkit_entity_EnderDragon;
/** The enderdragon involved in this event */
getEntity(): org_bukkit_entity_Entity;
equals(arg0: java_lang_Object): boolean;
getAreaEffectCloud(): org_bukkit_entity_AreaEffectCloud;
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
constructor(enderDragon: org_bukkit_entity_EnderDragon, areaEffectCloud: org_bukkit_entity_AreaEffectCloud);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { DragonFireball as org_bukkit_entity_DragonFireball, Entity as org_bukkit_entity_Entity, EnderDragon as org_bukkit_entity_EnderDragon } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an EnderDragon shoots a fireball */

  export class EnderDragonShootFireballEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_EnderDragon;
entity: org_bukkit_entity_Entity;
eventName: string;
fireball: org_bukkit_entity_DragonFireball;
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
/** The enderdragon shooting the fireball */
getEntity(): org_bukkit_entity_EnderDragon;
/** The enderdragon shooting the fireball */
getEntity(): org_bukkit_entity_Entity;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getFireball(): org_bukkit_entity_DragonFireball;
getHandlers(): org_bukkit_event_HandlerList;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(entity: org_bukkit_entity_EnderDragon, fireball: org_bukkit_entity_DragonFireball);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Enderman as org_bukkit_entity_Enderman, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an Enderman determines if it should attack a player or not.
 Starts off cancelled if the player is wearing a pumpkin head or is not looking
 at the Enderman, according to Vanilla rules. */

  export class EndermanAttackPlayerEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Enderman;
entity: org_bukkit_entity_Entity;
eventName: string;
handlers: org_bukkit_event_HandlerList;
player: org_bukkit_entity_Player;
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
/** Cancels if the Enderman will attack this player */
setCancelled(cancel: boolean): void;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** The enderman considering attacking */
getEntity(): org_bukkit_entity_Enderman;
/** The enderman considering attacking */
getEntity(): org_bukkit_entity_Entity;
/** The player the Enderman is considering attacking */
getPlayer(): org_bukkit_entity_Player;
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
constructor(entity: org_bukkit_entity_Enderman, player: org_bukkit_entity_Player);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Enderman as org_bukkit_entity_Enderman } from 'org.bukkit.entity';
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EndermanEscapeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Enderman;
entity: org_bukkit_entity_Entity;
eventName: string;
handlers: org_bukkit_event_HandlerList;
reason: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
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
/** Cancels the escape.

 If this escape normally would of resulted in damage avoidance such as indirect,
 the enderman will now take damage. */
setCancelled(cancel: boolean): void;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Enderman;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getReason(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(entity: org_bukkit_entity_Enderman, reason: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent' {
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Reason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason> {
class: java_lang_Class<java_lang_Object>;
static CRITICAL_HIT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static DROWN: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static INDIRECT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static RUNAWAY: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static STARE: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (EndermanEscapeEvent.Reason c : EndermanEscapeEvent.Reason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent' {
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Reason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason> {
class: java_lang_Class<java_lang_Object>;
static CRITICAL_HIT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static DROWN: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static INDIRECT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static RUNAWAY: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static STARE: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (EndermanEscapeEvent.Reason c : EndermanEscapeEvent.Reason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired any time an entity is being added to the world for any reason.

 Not to be confused with CreatureSpawnEvent
 This will fire anytime a chunk is reloaded too. */

  export class EntityAddToWorldEvent extends org_bukkit_event_entity_EntityEvent {
class: java_lang_Class<java_lang_Object>;
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
constructor(entity: org_bukkit_entity_Entity);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, LivingEntity as org_bukkit_entity_LivingEntity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Called when an entity jumps
 
 Cancelling the event will stop the entity from jumping */

  export class EntityJumpEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_LivingEntity;
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
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_LivingEntity;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
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
constructor(entity: org_bukkit_entity_LivingEntity);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, LivingEntity as org_bukkit_entity_LivingEntity } from 'org.bukkit.entity';
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an Entity is knocked back by the hit of another Entity. The acceleration
 vector can be modified. If this event is cancelled, the entity is not knocked back. */

  export class EntityKnockbackByEntityEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
acceleration: org_bukkit_util_Vector;
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_LivingEntity;
eventName: string;
handlers: org_bukkit_event_HandlerList;
hitBy: org_bukkit_entity_Entity;
knockbackStrength: number;
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
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_LivingEntity;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
equals(arg0: java_lang_Object): boolean;
getAcceleration(): org_bukkit_util_Vector;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getHitBy(): org_bukkit_entity_Entity;
getKnockbackStrength(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(entity: org_bukkit_entity_LivingEntity, hitBy: org_bukkit_entity_Entity, knockbackStrength: number, acceleration: org_bukkit_util_Vector);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an Entity decides to start moving towards a location.

 This event does not fire for the entities actual movement. Only when it
 is choosing to start moving to a location. */

  export class EntityPathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
eventName: string;
handlers: org_bukkit_event_HandlerList;
loc: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
targetEntity: org_bukkit_entity_Entity | null;
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
/** If the Entity is trying to pathfind to an entity, this is the entity in relation.

 Otherwise this will return null. */
getTargetEntity(): org_bukkit_entity_Entity | null;
/** The Entity that is pathfinding. */
getEntity(): org_bukkit_entity_Entity;
/** The Location of where the entity is about to move to.

 Note that if the target happened to of been an entity */
getLoc(): org_bukkit_Location;
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
constructor(entity: org_bukkit_entity_Entity, loc: org_bukkit_Location, targetEntity: org_bukkit_entity_Entity | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired any time an entity is being removed from a world for any reason */

  export class EntityRemoveFromWorldEvent extends org_bukkit_event_entity_EntityEvent {
class: java_lang_Class<java_lang_Object>;
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
constructor(entity: org_bukkit_entity_Entity);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EndGateway as org_bukkit_block_EndGateway } from 'org.bukkit.block';
import { Entity as org_bukkit_entity_Entity, EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { EntityTeleportEvent as org_bukkit_event_entity_EntityTeleportEvent } from 'org.bukkit.event.entity';
/** Fired any time an entity attempts to teleport in an end gateway */

  export class EntityTeleportEndGatewayEvent extends org_bukkit_event_entity_EntityTeleportEvent {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entityType: org_bukkit_entity_EntityType;
eventName: string;
gateway: org_bukkit_block_EndGateway;
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
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Returns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** The gateway triggering the teleport */
getGateway(): org_bukkit_block_EndGateway;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(what: org_bukkit_entity_Entity, from: org_bukkit_Location, to: org_bukkit_Location, gateway: org_bukkit_block_EndGateway);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an entity transforms into another entity
 
 If the event is cancelled, the entity will not transform */

  export class EntityTransformedEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
reason: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static handlerList: org_bukkit_event_HandlerList;
transformed: org_bukkit_entity_Entity;
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
/** The entity after it has transformed */
getTransformed(): org_bukkit_entity_Entity;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getReason(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(entity: org_bukkit_entity_Entity, transformed: org_bukkit_entity_Entity, reason: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EntityTransformedEvent' {
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TransformedReason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason> {
class: java_lang_Class<java_lang_Object>;
static CURED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static DROWNED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static INFECTED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static LIGHTNING: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static SHEARED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (EntityTransformedEvent.TransformedReason c : EntityTransformedEvent.TransformedReason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EntityTransformedEvent' {
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TransformedReason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason> {
class: java_lang_Class<java_lang_Object>;
static CURED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static DROWNED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static INFECTED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static LIGHTNING: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static SHEARED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (EntityTransformedEvent.TransformedReason c : EntityTransformedEvent.TransformedReason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { LightningStrike as org_bukkit_entity_LightningStrike, Entity as org_bukkit_entity_Entity, EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityTransformEvent as org_bukkit_event_entity_EntityTransformEvent } from 'org.bukkit.event.entity';
/** Fired when lightning strikes an entity */

  export class EntityZapEvent extends org_bukkit_event_entity_EntityTransformEvent implements org_bukkit_event_Cancellable {
bolt: org_bukkit_entity_LightningStrike;
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entityType: org_bukkit_entity_EntityType;
eventName: string;
handlers: org_bukkit_event_HandlerList;
replacementEntity: org_bukkit_entity_Entity;
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
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Gets the entity that will replace the struck entity. */
getReplacementEntity(): org_bukkit_entity_Entity;
/** Gets the lightning bolt that is striking the entity. */
getBolt(): org_bukkit_entity_LightningStrike;
/** Returns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
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
constructor(entity: org_bukkit_entity_Entity, bolt: org_bukkit_entity_LightningStrike, replacementEntity: org_bukkit_entity_Entity);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ExperienceOrb as org_bukkit_entity_ExperienceOrb } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired anytime the server is about to merge 2 experience orbs into one */

  export class ExperienceOrbMergeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
mergeSource: org_bukkit_entity_ExperienceOrb;
mergeTarget: org_bukkit_entity_ExperienceOrb;
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
getMergeSource(): org_bukkit_entity_ExperienceOrb;
getMergeTarget(): org_bukkit_entity_ExperienceOrb;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(mergeTarget: org_bukkit_entity_ExperienceOrb, mergeSource: org_bukkit_entity_ExperienceOrb);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { Set as java_util_Set } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty, PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Fired once a profiles additional properties (such as textures) has been filled */

  export class FillProfileEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
static handlerList: org_bukkit_event_HandlerList;
/** Same as .getPlayerProfile().getProperties() */
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(profile: com_destroystokyo_paper_profile_PlayerProfile);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Represents an AI goal of an entity */

  export class Goal<T extends org_bukkit_entity_Mob> {
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** A unique key that identifies this type of goal. Plugins should use their own namespace, not the minecraft
 namespace. Additionally, this key also specifies to what mobs this goal can be applied to */
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
/** Called each tick the goal is activated */
tick(): void;
/** Called when this goal gets activated */
start(): void;
/** Called when this goal gets stopped */
stop(): void;
/** Checks if this goal should be activated */
shouldActivate(): boolean;
/** Checks if this goal should stay active, defaults to shouldActivate() */
shouldStayActive(): boolean;
/** Returns a list of all applicable flags for this goal.

 This method is only called on construction. */
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { NamespacedKey as org_bukkit_NamespacedKey } from 'org.bukkit';
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Used to identify a Goal. Consists of a NamespacedKey and the type of mob the goal can be applied to */

  export class GoalKey<T extends org_bukkit_entity_Mob> extends java_lang_Object {
entityClass: java_lang_Class<T>;
namespacedKey: org_bukkit_NamespacedKey;
equals(o: java_lang_Object): boolean;
getEntityClass(): java_lang_Class<T>;
getNamespacedKey(): org_bukkit_NamespacedKey;
hashCode(): number;
static of<A extends org_bukkit_entity_Mob>(entityClass: java_lang_Class<A>, namespacedKey: org_bukkit_NamespacedKey): com_destroystokyo_paper_entity_ai_GoalKey<A>;
toString(): string;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Represents the subtype of a goal. Used by minecraft to disable certain types of goals if needed. */

  export class GoalType extends java_lang_Enum<com_destroystokyo_paper_entity_ai_GoalType> {
class: java_lang_Class<java_lang_Object>;
static JUMP: com_destroystokyo_paper_entity_ai_GoalType;
static LOOK: com_destroystokyo_paper_entity_ai_GoalType;
static MOVE: com_destroystokyo_paper_entity_ai_GoalType;
static TARGET: com_destroystokyo_paper_entity_ai_GoalType;
static UNKNOWN_BEHAVIOR: com_destroystokyo_paper_entity_ai_GoalType;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (GoalType c : GoalType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_entity_ai_GoalType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_entity_ai_GoalType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse, QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { InetAddress as java_net_InetAddress } from 'java.net';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** This event is fired if server is getting queried over GS4 Query protocol

 Adapted from Velocity's ProxyQueryEvent */

  export class GS4QueryEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
querierAddress: java_net_InetAddress;
queryType: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
static handlerList: org_bukkit_event_HandlerList;
/** Get querier address */
getQuerierAddress(): java_net_InetAddress;
/** Get query response */
getResponse(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
/** Get query type */
getQueryType(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
/** Set query response */
setResponse(response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse): void;
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
constructor(queryType: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType, querierAddress: java_net_InetAddress, response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class QueryResponse extends java_lang_Object {
currentPlayers: number;
gameVersion: string;
hostname: string;
map: string;
maxPlayers: number;
motd: string;
players: java_util_Collection<string>;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
port: number;
serverVersion: string;
/** Creates a new GS4QueryEvent.QueryResponse.Builder instance */
static builder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Creates a new GS4QueryEvent.QueryResponse.Builder instance from data represented by this response */
toBuilder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Get collection of players which will be used to reply to the query. */
getPlayers(): java_util_Collection<string>;
/** Get current online player count which will be used to reply to the query. */
getCurrentPlayers(): number;
/** Get game version which will be used to reply to the query. By default supported Minecraft versions range is sent. */
getGameVersion(): string;
/** Get list of plugins which will be used to reply to the query. */
getPlugins(): java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
/** Get map name which will be used to reply to the query. By default world is sent. */
getMap(): string;
/** Get max player count which will be used to reply to the query. */
getMaxPlayers(): number;
/** Get motd which will be used to reply to the query. By default it is Server.getMotd(). */
getMotd(): string;
/** Get server (public facing) hostname */
getHostname(): string;
/** Get server (public facing) port */
getPort(): number;
/** Get server software (name and version) which will be used to reply to the query. */
getServerVersion(): string;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
/** A builder for GS4QueryEvent.QueryResponse objects. */

  export class Builder extends java_lang_Object {

/** Builds new GS4QueryEvent.QueryResponse with supplied data */
build(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
clearPlayers(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlugins(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
currentPlayers(currentPlayers: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
gameVersion(gameVersion: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
hostname(hostname: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
map(map: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
maxPlayers(maxPlayers: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
motd(motd: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(...players: string[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(players: java_util_Collection<string>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(...plugins: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
port(port: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
serverVersion(serverVersion: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Object as java_lang_Object } from 'java.lang';
/** Plugin information */

  export class PluginInformation extends java_lang_Object {
name: string;
version: string;
getName(): string;
getVersion(): string;
setName(name: string): void;
setVersion(version: string): void;
static of(name: string, version: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation;
constructor(name: string, version: string);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** The type of query */

  export class QueryType extends java_lang_Enum<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType> {
class: java_lang_Class<java_lang_Object>;
static BASIC: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static FULL: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (GS4QueryEvent.QueryType c : GS4QueryEvent.QueryType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class QueryResponse extends java_lang_Object {
currentPlayers: number;
gameVersion: string;
hostname: string;
map: string;
maxPlayers: number;
motd: string;
players: java_util_Collection<string>;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
port: number;
serverVersion: string;
/** Creates a new GS4QueryEvent.QueryResponse.Builder instance */
static builder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Creates a new GS4QueryEvent.QueryResponse.Builder instance from data represented by this response */
toBuilder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Get collection of players which will be used to reply to the query. */
getPlayers(): java_util_Collection<string>;
/** Get current online player count which will be used to reply to the query. */
getCurrentPlayers(): number;
/** Get game version which will be used to reply to the query. By default supported Minecraft versions range is sent. */
getGameVersion(): string;
/** Get list of plugins which will be used to reply to the query. */
getPlugins(): java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
/** Get map name which will be used to reply to the query. By default world is sent. */
getMap(): string;
/** Get max player count which will be used to reply to the query. */
getMaxPlayers(): number;
/** Get motd which will be used to reply to the query. By default it is Server.getMotd(). */
getMotd(): string;
/** Get server (public facing) hostname */
getHostname(): string;
/** Get server (public facing) port */
getPort(): number;
/** Get server software (name and version) which will be used to reply to the query. */
getServerVersion(): string;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
/** A builder for GS4QueryEvent.QueryResponse objects. */

  export class Builder extends java_lang_Object {

/** Builds new GS4QueryEvent.QueryResponse with supplied data */
build(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
clearPlayers(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlugins(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
currentPlayers(currentPlayers: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
gameVersion(gameVersion: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
hostname(hostname: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
map(map: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
maxPlayers(maxPlayers: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
motd(motd: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(...players: string[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(players: java_util_Collection<string>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(...plugins: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
port(port: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
serverVersion(serverVersion: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Object as java_lang_Object } from 'java.lang';
/** Plugin information */

  export class PluginInformation extends java_lang_Object {
name: string;
version: string;
getName(): string;
getVersion(): string;
setName(name: string): void;
setVersion(version: string): void;
static of(name: string, version: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation;
constructor(name: string, version: string);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** The type of query */

  export class QueryType extends java_lang_Enum<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType> {
class: java_lang_Class<java_lang_Object>;
static BASIC: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static FULL: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (GS4QueryEvent.QueryType c : GS4QueryEvent.QueryType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { HeightmapType as com_destroystokyo_paper_HeightmapType } from 'com.destroystokyo.paper';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Enumeration of different heightmap types maintained by the server. Generally using these maps is much faster
 than using an iterative search for a block in a given x, z coordinate. */

  export class HeightmapType extends java_lang_Enum<com_destroystokyo_paper_HeightmapType> {
class: java_lang_Class<java_lang_Object>;
static ANY: com_destroystokyo_paper_HeightmapType;
static LIGHT_BLOCKING: com_destroystokyo_paper_HeightmapType;
static SOLID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID_NO_LEAVES: com_destroystokyo_paper_HeightmapType;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (HeightmapType c : HeightmapType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_HeightmapType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_HeightmapType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { UUID as java_util_UUID } from 'java.util';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
/** Represents an Inventory that can generate loot, such as Minecarts inside of Mineshafts */

  export class LootableEntityInventory implements com_destroystokyo_paper_loottable_LootableInventory {
entity: org_bukkit_entity_Entity;
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
lootTable: org_bukkit_loot_LootTable | null;
nextRefill: number;
seed: number;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Gets the entity that is lootable */
getEntity(): org_bukkit_entity_Entity;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Exception as java_lang_Exception, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class IllegalPacketEvent extends org_bukkit_event_player_PlayerEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
exceptionMessage: string | null;
handlers: org_bukkit_event_HandlerList;
kickMessage: string | null;
static handlerList: org_bukkit_event_HandlerList;
type: string | null;
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
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getExceptionMessage(): string | null;
getHandlers(): org_bukkit_event_HandlerList;
getKickMessage(): string | null;
getType(): string | null;
hashCode(): number;
isShouldKick(): boolean;
notify(): void;
notifyAll(): void;
setKickMessage(kickMessage: string | null): void | null;
setShouldKick(shouldKick: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
static process(player: org_bukkit_entity_Player, type: string | null, kickMessage: string | null, exception: java_lang_Exception): void | null;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(player: org_bukkit_entity_Player, type: string | null, kickMessage: string | null, e: java_lang_Exception);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.inventory' {
import { RecipeChoice as org_bukkit_inventory_RecipeChoice, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object } from 'java.lang';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { List as java_util_List } from 'java.util';
/** Allows crafting Items that require full matching itemstacks to complete the recipe for custom items */

  export class ItemStackRecipeChoice extends java_lang_Object implements org_bukkit_inventory_RecipeChoice {
itemStack: org_bukkit_inventory_ItemStack;
/** Description copied from interface: RecipeChoiceGets a single item stack representative of this stack choice. */
getItemStack(): org_bukkit_inventory_ItemStack;
and(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
clone(): java_lang_Object;
clone(): org_bukkit_inventory_RecipeChoice;
negate(): java_util_function_Predicate<T>;
or(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
test(arg0: java_lang_Object): boolean;
test(itemStack: org_bukkit_inventory_ItemStack): boolean;
constructor(choices: java_util_List<org_bukkit_inventory_ItemStack>);
constructor(choices: org_bukkit_inventory_ItemStack);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Allows a plugin to be notified anytime AFTER a Profile has been looked up from the Mojang API
 This is an opportunity to view the response and potentially cache things.

 No guarantees are made about thread execution context for this event. If you need to know, check
 event.isAsync() */

  export class LookupProfileEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
static handlerList: org_bukkit_event_HandlerList;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(profile: com_destroystokyo_paper_profile_PlayerProfile);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
/** Represents an Inventory that can generate loot, such as Chests inside of Fortresses and Mineshafts */

  export class LootableBlockInventory implements com_destroystokyo_paper_loottable_LootableInventory {
block: org_bukkit_block_Block;
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
lootTable: org_bukkit_loot_LootTable | null;
nextRefill: number;
seed: number;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Gets the block that is lootable */
getBlock(): org_bukkit_block_Block;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { UUID as java_util_UUID } from 'java.util';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
/** Represents an Inventory that can generate loot, such as Minecarts inside of Mineshafts */

  export class LootableEntityInventory implements com_destroystokyo_paper_loottable_LootableInventory {
entity: org_bukkit_entity_Entity;
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
lootTable: org_bukkit_loot_LootTable | null;
nextRefill: number;
seed: number;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Gets the entity that is lootable */
getEntity(): org_bukkit_entity_Entity;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable, Lootable as org_bukkit_loot_Lootable } from 'org.bukkit.loot';
/** Represents an Inventory that contains a Loot Table associated to it that will
 automatically fill on first open.

 A new feature and API is provided to support automatically refreshing the contents
 of the inventory based on that Loot Table after a configurable amount of time has passed.

 The behavior of how the Inventory is filled based on the loot table may vary based
 on Minecraft versions and the Loot Table feature. */

  export class LootableInventory implements org_bukkit_loot_Lootable {
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
lootTable: org_bukkit_loot_LootTable | null;
nextRefill: number;
seed: number;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class LootableInventoryReplenishEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
inventory: com_destroystokyo_paper_loottable_LootableInventory;
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
getInventory(): com_destroystokyo_paper_loottable_LootableInventory;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(player: org_bukkit_entity_Player, inventory: com_destroystokyo_paper_loottable_LootableInventory);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Material as org_bukkit_Material, Tag as org_bukkit_Tag, NamespacedKey as org_bukkit_NamespacedKey, Keyed as org_bukkit_Keyed } from 'org.bukkit';
import { MaterialSetTag as com_destroystokyo_paper_MaterialSetTag } from 'com.destroystokyo.paper';
import { Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { BlockState as org_bukkit_block_BlockState, Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { Object as java_lang_Object } from 'java.lang';

  export class MaterialSetTag extends java_lang_Object implements org_bukkit_Tag<org_bukkit_Material> {
key: org_bukkit_NamespacedKey;
values: java_util_Set<org_bukkit_Material>;
/** Description copied from interface: KeyedReturn the namespaced identifier for this object. */
getKey(): org_bukkit_NamespacedKey;
/** Description copied from interface: TagGets an immutable set of all tagged items. */
getValues(): java_util_Set<org_bukkit_Material>;
/** Description copied from interface: TagReturns whether or not this tag has an entry for the specified item. */
isTagged(material: org_bukkit_Material): boolean;
add(...tags: com_destroystokyo_paper_MaterialSetTag[]): com_destroystokyo_paper_MaterialSetTag;
add(...tags: org_bukkit_Material[]): com_destroystokyo_paper_MaterialSetTag;
add(...tags: org_bukkit_Tag<org_bukkit_Material>[]): com_destroystokyo_paper_MaterialSetTag;
add(filter: java_util_function_Predicate<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
add(materials: java_util_Collection<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
contains(wit: string): com_destroystokyo_paper_MaterialSetTag;
endsWith(wit: string): com_destroystokyo_paper_MaterialSetTag;
ensureSize(label: string, size: number): com_destroystokyo_paper_MaterialSetTag;
isTagged(arg0: org_bukkit_Keyed): boolean;
isTagged(block: org_bukkit_block_Block): boolean;
isTagged(block: org_bukkit_block_BlockState): boolean;
isTagged(block: org_bukkit_block_data_BlockData): boolean;
isTagged(item: org_bukkit_inventory_ItemStack): boolean;
not(...tags: org_bukkit_Material[]): com_destroystokyo_paper_MaterialSetTag;
not(filter: java_util_function_Predicate<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
not(materials: java_util_Collection<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
not(tags: com_destroystokyo_paper_MaterialSetTag): com_destroystokyo_paper_MaterialSetTag;
notEndsWith(wit: string): com_destroystokyo_paper_MaterialSetTag;
notStartsWith(wit: string): com_destroystokyo_paper_MaterialSetTag;
startsWith(wit: string): com_destroystokyo_paper_MaterialSetTag;
constructor(...filter: org_bukkit_Material[]);
constructor(filter: java_util_function_Predicate<org_bukkit_Material>);
constructor(key: org_bukkit_NamespacedKey | null, ...filter: org_bukkit_Material[]);
constructor(key: org_bukkit_NamespacedKey | null, filter: java_util_function_Predicate<org_bukkit_Material>);
constructor(key: org_bukkit_NamespacedKey | null, materials: java_util_Collection<org_bukkit_Material>);
constructor(materials: java_util_Collection<org_bukkit_Material>);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { MaterialSetTag as com_destroystokyo_paper_MaterialSetTag } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a collection tags to identify materials that share common properties.
 Will map to minecraft for missing tags, as well as custom ones that may be useful. */

  export class MaterialTags extends java_lang_Object {
static ARROWS: com_destroystokyo_paper_MaterialSetTag;
static BEDS: com_destroystokyo_paper_MaterialSetTag;
static BUCKETS: com_destroystokyo_paper_MaterialSetTag;
static COALS: com_destroystokyo_paper_MaterialSetTag;
static COBBLESTONES: com_destroystokyo_paper_MaterialSetTag;
static COBBLESTONE_WALLS: com_destroystokyo_paper_MaterialSetTag;
static COLORABLE: com_destroystokyo_paper_MaterialSetTag;
static CONCRETES: com_destroystokyo_paper_MaterialSetTag;
static CONCRETE_POWDER: com_destroystokyo_paper_MaterialSetTag;
static COOKED_FISH: com_destroystokyo_paper_MaterialSetTag;
static DYES: com_destroystokyo_paper_MaterialSetTag;
static FENCES: com_destroystokyo_paper_MaterialSetTag;
static FENCE_GATES: com_destroystokyo_paper_MaterialSetTag;
static FISH_BUCKETS: com_destroystokyo_paper_MaterialSetTag;
static GLASS: com_destroystokyo_paper_MaterialSetTag;
static GLASS_PANES: com_destroystokyo_paper_MaterialSetTag;
static GLAZED_TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static GOLDEN_APPLES: com_destroystokyo_paper_MaterialSetTag;
static HORSE_ARMORS: com_destroystokyo_paper_MaterialSetTag;
static INFESTED_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static LANTERNS: com_destroystokyo_paper_MaterialSetTag;
static MUSHROOMS: com_destroystokyo_paper_MaterialSetTag;
static MUSHROOM_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static MUSIC_DISCS: com_destroystokyo_paper_MaterialSetTag;
static ORES: com_destroystokyo_paper_MaterialSetTag;
static PISTONS: com_destroystokyo_paper_MaterialSetTag;
static POTATOES: com_destroystokyo_paper_MaterialSetTag;
static PRESSURE_PLATES: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE_SLABS: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE_STAIRS: com_destroystokyo_paper_MaterialSetTag;
static PUMPKINS: com_destroystokyo_paper_MaterialSetTag;
static PURPUR: com_destroystokyo_paper_MaterialSetTag;
static QUARTZ_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static RAW_FISH: com_destroystokyo_paper_MaterialSetTag;
static REDSTONE_TORCH: com_destroystokyo_paper_MaterialSetTag;
static RED_SANDSTONES: com_destroystokyo_paper_MaterialSetTag;
static SANDSTONES: com_destroystokyo_paper_MaterialSetTag;
static SHULKER_BOXES: com_destroystokyo_paper_MaterialSetTag;
static SIGNS: com_destroystokyo_paper_MaterialSetTag;
static SKULLS: com_destroystokyo_paper_MaterialSetTag;
static SOUL_TORCH: com_destroystokyo_paper_MaterialSetTag;
static SPAWN_EGGS: com_destroystokyo_paper_MaterialSetTag;
static SPONGES: com_destroystokyo_paper_MaterialSetTag;
static STAINED_GLASS: com_destroystokyo_paper_MaterialSetTag;
static STAINED_GLASS_PANES: com_destroystokyo_paper_MaterialSetTag;
static STAINED_TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static TORCH: com_destroystokyo_paper_MaterialSetTag;
static TORCHES: com_destroystokyo_paper_MaterialSetTag;
static TRAPDOORS: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_FENCES: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_GATES: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_TRAPDOORS: com_destroystokyo_paper_MaterialSetTag;

constructor();
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { EventExecutor as org_bukkit_plugin_EventExecutor } from 'org.bukkit.plugin';

  export class MethodHandleEventExecutor extends java_lang_Object implements org_bukkit_plugin_EventExecutor {

execute(listener: org_bukkit_event_Listener, event: org_bukkit_event_Event): void;
constructor(eventClass: java_lang_Class<org_bukkit_event_Event>, handle: java_lang_invoke_MethodHandle);
constructor(eventClass: java_lang_Class<org_bukkit_event_Event>, handle: java_lang_reflect_Method);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Goal as com_destroystokyo_paper_entity_ai_Goal, GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Collection as java_util_Collection } from 'java.util';
/** Represents a part of the "brain" of a mob. It tracks all tasks (running or not), allows adding and removing goals */

  export class MobGoals {
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
goal: com_destroystokyo_paper_entity_ai_Goal<T> | null;
goals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
addGoal<T extends org_bukkit_entity_Mob>(mob: T, priority: number, goal: com_destroystokyo_paper_entity_ai_Goal<T>): void;
getAllGoals<T extends org_bukkit_entity_Mob>(mob: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoalsWithout<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): com_destroystokyo_paper_entity_ai_Goal<T> | null;
getGoals<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(mob: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoalsWithout<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
hasGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): boolean;
removeAllGoals<T extends org_bukkit_entity_Mob>(mob: T): void;
removeAllGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): void;
removeGoal<T extends org_bukkit_entity_Mob>(mob: T, goal: com_destroystokyo_paper_entity_ai_Goal<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {

/** Represents a namespaced resource, see NamespacedKey for single elements
 or NamespacedTag for a collection of elements

 Namespaces may only contain lowercase alphanumeric characters, periods,
 underscores, and hyphens.
 
 Keys may only contain lowercase alphanumeric characters, periods,
 underscores, hyphens, and forward slashes.
 
 You should not be implementing this interface yourself, use NamespacedKey
 or NamespacedTag as needed instead. */

  export class Namespaced {
key: string;
namespace: string;
/** Gets the key corresponding to this resource
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, hyphens, and forward slashes. */
getKey(): string;
/** Gets the namespace this resource is a part of
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, and hyphens. */
getNamespace(): string;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Object as java_lang_Object } from 'java.lang';
import { NamespacedTag as com_destroystokyo_paper_NamespacedTag, Namespaced as com_destroystokyo_paper_Namespaced } from 'com.destroystokyo.paper';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
/** Represents a String based key pertaining to a tagged entry. Consists of two components - a namespace
 and a key.
 
 Namespaces may only contain lowercase alphanumeric characters, periods,
 underscores, and hyphens.
 
 Keys may only contain lowercase alphanumeric characters, periods,
 underscores, hyphens, and forward slashes. */

  export class NamespacedTag extends java_lang_Object implements com_destroystokyo_paper_Namespaced {
key: string;
namespace: string;
static BUKKIT: string;
static MINECRAFT: string;
/** Description copied from interface: NamespacedGets the key corresponding to this resource
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, hyphens, and forward slashes. */
getKey(): string;
/** Description copied from interface: NamespacedGets the namespace this resource is a part of
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, and hyphens. */
getNamespace(): string;
/** Get a key in the Minecraft namespace. */
static minecraft(key: string): com_destroystokyo_paper_NamespacedTag;
/** Return a new random key in the BUKKIT namespace. */
static randomKey(): com_destroystokyo_paper_NamespacedTag;
equals(obj: java_lang_Object): boolean;
hashCode(): number;
toString(): string;
/** Create a key in a specific namespace. */
constructor(namespace: string, key: string);
/** Create a key in the plugin's namespace.
 
 Namespaces may only contain lowercase alphanumeric characters, periods,
 underscores, and hyphens.
 
 Keys may only contain lowercase alphanumeric characters, periods,
 underscores, hyphens, and forward slashes. */
constructor(plugin: org_bukkit_plugin_Plugin, key: string);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
/** Represents a client connected to the server. */

  export class NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress | null;
/** Returns the protocol version of the client. */
getProtocolVersion(): number;
/** Returns the socket address of the client. */
getAddress(): java_net_InetSocketAddress;
/** Returns the virtual host the client is connected to.

 The virtual host refers to the hostname/port the client used to
 connect to the server. */
getVirtualHost(): java_net_InetSocketAddress | null;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { PluginDescriptionFile as org_bukkit_plugin_PluginDescriptionFile } from 'org.bukkit.plugin';
import { Logger as java_util_logging_Logger } from 'java.util.logging';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Prevents plugins (e.g. Essentials) from changing the parent of the plugin logger. */

  export class PaperPluginLogger extends java_util_logging_Logger {
class: java_lang_Class<java_lang_Object>;
static logger: java_util_logging_Logger;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
setParent(parent: java_util_logging_Logger): void;
static getLogger(description: org_bukkit_plugin_PluginDescriptionFile): java_util_logging_Logger;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { Iterator as java_util_Iterator, List as java_util_List, Spliterator as java_util_Spliterator } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { CachedServerIcon as org_bukkit_util_CachedServerIcon } from 'org.bukkit.util';
import { StatusClient as com_destroystokyo_paper_network_StatusClient } from 'com.destroystokyo.paper.network';
import { PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { ServerListPingEvent as org_bukkit_event_server_ServerListPingEvent } from 'org.bukkit.event.server';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Extended version of ServerListPingEvent that allows full control
 of the response sent to the client. */

  export class PaperServerListPingEvent extends org_bukkit_event_server_ServerListPingEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
client: com_destroystokyo_paper_network_StatusClient;
eventName: string;
maxPlayers: number;
numPlayers: number;
playerSample: java_util_List<com_destroystokyo_paper_profile_PlayerProfile>;
protocolVersion: number;
serverIcon: org_bukkit_util_CachedServerIcon | null;
version: string;
/** 
 
 Calling the Iterator.remove() method will force that particular
 player to not be displayed on the player list, decrease the size
 returned by ServerListPingEvent.getNumPlayers(), and will not be returned again by
 any new iterator.

 Note: For compatibility reasons, this method will return all
 online players, not just the ones referenced in getPlayerSample().
 Removing a player will:

 
     Decrement the online player count (if and only if) the player
     count wasn't changed by another plugin before.
     Remove all entries from getPlayerSample() that refer to
     the removed player (based on their UUID).
  */
iterator(): java_util_Iterator<org_bukkit_entity_Player>;
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
/** Get the maximum number of players sent.

 Returns -1 if players are hidden using
 shouldHidePlayers(). */
getMaxPlayers(): number;
/** Get the number of players sent.

 Returns -1 if players are hidden using
 shouldHidePlayers(). */
getNumPlayers(): number;
/** Gets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins

 Cancelling this event will cause the connection to be closed immediately,
 without sending a response to the client. */
isCancelled(): boolean;
/** Gets the server icon sent to the client. */
getServerIcon(): org_bukkit_util_CachedServerIcon | null;
/** Returns a mutable list of PlayerProfile that will be displayed
 as online players on the client.

 The Vanilla Minecraft client will display them when hovering the
 player count with the mouse. */
getPlayerSample(): java_util_List<com_destroystokyo_paper_profile_PlayerProfile>;
/** Returns the StatusClient pinging the server. */
getClient(): com_destroystokyo_paper_network_StatusClient;
/** Returns the protocol version that will be sent as the protocol version
 of the server to the client. */
getProtocolVersion(): number;
/** Returns the version that will be sent as server version on the client. */
getVersion(): string;
/** Returns whether all player related information is hidden in the server
 list. This will cause getNumPlayers(), getMaxPlayers()
 and getPlayerSample() to be skipped in the response.

 The Vanilla Minecraft client will display the player count as ???
 when this option is enabled. */
shouldHidePlayers(): boolean;
/** Sets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins.

 Cancelling this event will cause the connection to be closed immediately,
 without sending a response to the client. */
setCancelled(cancel: boolean): void;
/** Sets the number of players displayed in the server list.

 Note that this won't have any effect if shouldHidePlayers()
 is enabled. */
setNumPlayers(numPlayers: number): void;
/** Sets the protocol version that will be sent as the protocol version
 of the server to the client. */
setProtocolVersion(protocolVersion: number): void;
/** Sets the server icon sent to the client. */
setServerIcon(icon: org_bukkit_util_CachedServerIcon | null): void | null;
/** Sets the version that will be sent as server version to the client. */
setVersion(version: string): void;
/** Sets whether all player related information is hidden in the server
 list. This will cause getNumPlayers(), getMaxPlayers()
 and getPlayerSample() to be skipped in the response.

 The Vanilla Minecraft client will display the player count as ???
 when this option is enabled. */
setHidePlayers(hidePlayers: boolean): void;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
spliterator(): java_util_Spliterator<T>;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(client: com_destroystokyo_paper_network_StatusClient, motd: string, numPlayers: number, maxPlayers: number, version: string, protocolVersion: number, favicon: org_bukkit_util_CachedServerIcon | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
import { NetworkClient as com_destroystokyo_paper_network_NetworkClient } from 'com.destroystokyo.paper.network';
/** Represents a client requesting the current status from the server (e.g. from
 the server list). */

  export class StatusClient implements com_destroystokyo_paper_network_NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress | null;
/** Returns the protocol version of the client. */
getProtocolVersion(): number;
/** Returns the socket address of the client. */
getAddress(): java_net_InetSocketAddress;
/** Returns the virtual host the client is connected to.

 The virtual host refers to the hostname/port the client used to
 connect to the server. */
getVirtualHost(): java_net_InetSocketAddress | null;
/** Returns whether the client is using an older version that doesn't
 support all of the features in PaperServerListPingEvent.

 For Vanilla, this returns true for all clients older than 1.7. */
isLegacy(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { ParticleBuilder as com_destroystokyo_paper_ParticleBuilder } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Location as org_bukkit_Location, World as org_bukkit_World, Particle as org_bukkit_Particle, Color as org_bukkit_Color } from 'org.bukkit';
import { List as java_util_List, Collection as java_util_Collection } from 'java.util';
/** Helps prepare a particle to be sent to players.

 Usage of the builder is preferred over the super long World.spawnParticle(Particle, Location, int, double, double, double, double, Object) API */

  export class ParticleBuilder extends java_lang_Object {

/** Changes what particle will be sent */
particle(particle: org_bukkit_Particle): com_destroystokyo_paper_ParticleBuilder;
/** Example use:

 builder.receivers(16); if (builder.hasReceivers()) { sendParticleAsync(builder); } */
hasReceivers(): boolean;
/** Gets the Particle extra data. Varies by particle on how this is used */
extra(): number;
/** Gets the particle custom data. Varies by particle on how this is used */
data<T extends java_lang_Object>(): T | null;
/** Particle offset X. Varies by particle on how this is used */
offsetX(): number;
/** Particle offset Y. Varies by particle on how this is used */
offsetY(): number;
/** Particle offset Z. Varies by particle on how this is used */
offsetZ(): number;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. Allows specifying a different Y size than X and Z If you want a more
 cylinder check, see receivers(int, int, boolean) If you want a more spherical check,
 see receivers(int, boolean) */
receivers(xzRadius: number, yRadius: number): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. If you want a more cylinder check, see receivers(int, int,
 boolean) If you want a more spherical check, see receivers(int, boolean) */
receivers(xRadius: number, yRadius: number, zRadius: number): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. If you want a more spherical check, see receivers(int,
 boolean) */
receivers(radius: number): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within the specified radius around the particle location. If byDistance is
 false, behavior uses cuboid selection the same as receivers(int, int) If byDistance is
 true, radius is tested by distance in a spherical shape */
receivers(radius: number, byDistance: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within the specified radius around the particle location. If byDistance is
 false, behavior uses cuboid selection the same as receivers(int, int) If byDistance is
 true, radius is tested by distance on the y plane and on the x/z plane, in a cylinder shape. */
receivers(xzRadius: number, yRadius: number, byDistance: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Sends the particle to all receiving players (or all). This method is safe to use
 Asynchronously */
spawn(): com_destroystokyo_paper_ParticleBuilder;
/** Sends this particle to all players in the world. This is rather silly and you should likely not
 be doing this.

 Just be a logical person and use receivers by radius or collection. */
allPlayers(): com_destroystokyo_paper_ParticleBuilder;
/** Sets the location of where to spawn the particle */
location(location: org_bukkit_Location): com_destroystokyo_paper_ParticleBuilder;
/** Sets the location of where to spawn the particle */
location(world: org_bukkit_World, x: number, y: number, z: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the number of particles to spawn */
count(count: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle Color and size. Only valid for REDSTONE. */
color(color: org_bukkit_Color | null, size: number): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets the particle Color.
 Only valid for REDSTONE. */
color(r: number, g: number, b: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle Color. Only valid for REDSTONE. */
color(color: org_bukkit_Color | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets the particle custom data. Varies by particle on how this is used */
data<T extends java_lang_Object>(data: T | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets the particle extra data. Varies by particle on how this is used */
extra(extra: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle offset. Varies by particle on how this is used */
offset(offsetX: number, offsetY: number, offsetZ: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the source of this particle for visibility concerns (Vanish API) */
source(source: org_bukkit_entity_Player | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets whether the particle is forcefully shown to the player. If forced, the particle will show
 faraway, as far as the player's view distance allows. If false, the particle will show
 according to the client's particle settings. */
force(force: boolean): com_destroystokyo_paper_ParticleBuilder;
count(): number;
location(): org_bukkit_Location | null;
particle(): org_bukkit_Particle;
receivers(): java_util_List<org_bukkit_entity_Player> | null;
receivers(...receivers: org_bukkit_entity_Player[] | null): com_destroystokyo_paper_ParticleBuilder | null;
receivers(receivers: java_util_Collection<org_bukkit_entity_Player> | null): com_destroystokyo_paper_ParticleBuilder | null;
receivers(receivers: java_util_List<org_bukkit_entity_Player> | null): com_destroystokyo_paper_ParticleBuilder | null;
source(): org_bukkit_entity_Player | null;
constructor(particle: org_bukkit_Particle);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { PathResult as com_destroystokyo_paper_entity_Pathfinder_PathResult } from 'com.destroystokyo.paper.entity.Pathfinder';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { LivingEntity as org_bukkit_entity_LivingEntity, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Handles pathfinding operations for an Entity */

  export class Pathfinder {
currentPath: com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
entity: org_bukkit_entity_Mob;
/** Allows this pathfinder to pass through closed doors, or not */
setCanOpenDoors(canOpenDoors: boolean): void;
/** Allows this pathfinder to pass through open doors, or not */
setCanPassDoors(canPassDoors: boolean): void;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 and sets it with default speed.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
moveTo(target: org_bukkit_entity_LivingEntity): boolean;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 and sets it with specified speed.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
moveTo(target: org_bukkit_entity_LivingEntity, speed: number): boolean;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 but does not set it as the current target.
 Useful for calculating what would happen before setting it.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
findPath(target: org_bukkit_entity_LivingEntity): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Calculates a destination for the Entity to navigate to, and sets it with default speed
 as the current target. */
moveTo(loc: org_bukkit_Location): boolean;
/** Calculates a destination for the Entity to navigate to, but does not set it
 as the current target. Useful for calculating what would happen before setting it. */
findPath(loc: org_bukkit_Location): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Calculates a destination for the Entity to navigate to, with desired speed
 as the current target. */
moveTo(loc: org_bukkit_Location, speed: number): boolean;
/** Checks if this pathfinder allows passing through closed doors. */
canOpenDoors(): boolean;
/** Checks if this pathfinder allows passing through open doors. */
canPassDoors(): boolean;
/** Checks if this pathfinder assumes that the mob can float */
canFloat(): boolean;
/** If the entity is currently trying to navigate to a destination, this will return true */
hasPath(): boolean;
/** Instructs the Entity to stop trying to navigate to its current desired location */
stopPathfinding(): void;
/** Makes this pathfinder assume that the mob can float, or not */
setCanFloat(canFloat: boolean): void;
/** Takes the result of a previous pathfinding calculation and sets it
 as the active pathfinding with default speed. */
moveTo(path: com_destroystokyo_paper_entity_Pathfinder_PathResult): boolean;
/** Takes the result of a previous pathfinding calculation and sets it
 as the active pathfinding, */
moveTo(path: com_destroystokyo_paper_entity_Pathfinder_PathResult, speed: number): boolean;
getCurrentPath(): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
getEntity(): org_bukkit_entity_Mob;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.Pathfinder' {
import { List as java_util_List } from 'java.util';
import { Location as org_bukkit_Location } from 'org.bukkit';
/** Represents the result of a pathfinding calculation */

  export class PathResult {
finalPoint: org_bukkit_Location | null;
nextPoint: org_bukkit_Location | null;
nextPointIndex: number;
points: java_util_List<org_bukkit_Location>;
/** All currently calculated points to follow along the path to reach the destination location

 Will return points the entity has already moved past, see getNextPointIndex() */
getPoints(): java_util_List<org_bukkit_Location>;
getFinalPoint(): org_bukkit_Location | null;
getNextPoint(): org_bukkit_Location | null;
getNextPointIndex(): number;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { PreCreatureSpawnEvent as com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent } from 'com.destroystokyo.paper.event.entity';
/** Called when a phantom is spawned for an exhausted player */

  export class PhantomPreSpawnEvent extends com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
spawningEntity: org_bukkit_entity_Entity | null;
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
/** Get the entity this phantom is spawning for */
getSpawningEntity(): org_bukkit_entity_Entity | null;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(location: org_bukkit_Location, entity: org_bukkit_entity_Entity, reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** WARNING: This event only fires for a limited number of cases, and not for every case that CreatureSpawnEvent does.

 You should still listen to CreatureSpawnEvent as a backup, and only use this event as an "enhancement".
 The intent of this event is to improve server performance, so limited use cases.
 
 Currently: NATURAL and SPAWNER based reasons. Please submit a Pull Request for future additions.
 Also, Plugins that replace Entity Registrations with their own custom entities might not fire this event. */

  export class PreCreatureSpawnEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
spawnLocation: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
type: org_bukkit_entity_EntityType;
/** Cancelling this event is more effecient than cancelling CreatureSpawnEvent */
setCancelled(cancel: boolean): void;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Set this if you are more blanket blocking all types of these spawns, and wish to abort the spawn process from
 trying more attempts after this cancellation. */
setShouldAbortSpawn(shouldAbortSpawn: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
getSpawnLocation(): org_bukkit_Location;
getType(): org_bukkit_entity_EntityType;
hashCode(): number;
notify(): void;
notifyAll(): void;
shouldAbortSpawn(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(location: org_bukkit_Location, type: org_bukkit_entity_EntityType, reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Advancement as org_bukkit_advancement_Advancement } from 'org.bukkit.advancement';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when a player is granted a criteria in an advancement. */

  export class PlayerAdvancementCriterionGrantEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
advancement: org_bukkit_advancement_Advancement;
class: java_lang_Class<java_lang_Object>;
criterion: string;
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
/** Get the advancement which has been affected. */
getAdvancement(): org_bukkit_advancement_Advancement;
/** Get the criterion which has been granted. */
getCriterion(): string;
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
constructor(who: org_bukkit_entity_Player, advancement: org_bukkit_advancement_Advancement, criterion: string);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when the player themselves change their armor items
 
 Not currently called for environmental factors though it MAY BE IN THE FUTURE */

  export class PlayerArmorChangeEvent extends org_bukkit_event_player_PlayerEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
newItem: org_bukkit_inventory_ItemStack | null;
oldItem: org_bukkit_inventory_ItemStack | null;
slotType: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
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
/** Gets the existing item that's being replaced */
getOldItem(): org_bukkit_inventory_ItemStack | null;
/** Gets the new item that's replacing the old */
getNewItem(): org_bukkit_inventory_ItemStack | null;
/** Gets the type of slot being altered. */
getSlotType(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
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
constructor(player: org_bukkit_entity_Player, slotType: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType, oldItem: org_bukkit_inventory_ItemStack | null, newItem: org_bukkit_inventory_ItemStack | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent' {
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Set as java_util_Set } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class SlotType extends java_lang_Enum<com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType> {
class: java_lang_Class<java_lang_Object>;
static CHEST: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static FEET: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static HEAD: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static LEGS: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static byMaterial: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType | null;
types: java_util_Set<org_bukkit_Material>;
/** Gets an immutable set of all allowed material types that can be placed in an
 armor slot. */
getTypes(): java_util_Set<org_bukkit_Material>;
/** Gets the type of slot via the specified material */
static getByMaterial(material: org_bukkit_Material): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType | null;
/** Gets whether or not this material can be equipped to a slot */
static isEquipable(material: org_bukkit_Material): boolean;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (PlayerArmorChangeEvent.SlotType c : PlayerArmorChangeEvent.SlotType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent' {
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Set as java_util_Set } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class SlotType extends java_lang_Enum<com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType> {
class: java_lang_Class<java_lang_Object>;
static CHEST: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static FEET: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static HEAD: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static LEGS: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static byMaterial: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType | null;
types: java_util_Set<org_bukkit_Material>;
/** Gets an immutable set of all allowed material types that can be placed in an
 armor slot. */
getTypes(): java_util_Set<org_bukkit_Material>;
/** Gets the type of slot via the specified material */
static getByMaterial(material: org_bukkit_Material): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType | null;
/** Gets whether or not this material can be equipped to a slot */
static isEquipable(material: org_bukkit_Material): boolean;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (PlayerArmorChangeEvent.SlotType c : PlayerArmorChangeEvent.SlotType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when processing a player's attack on an entity when the player's attack strength cooldown is reset */

  export class PlayerAttackEntityCooldownResetEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
attackedEntity: org_bukkit_entity_Entity;
class: java_lang_Class<java_lang_Object>;
cooledAttackStrength: number;
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
/** Cancelling this event will prevent the target player from having their cooldown reset from attacking this entity */
setCancelled(cancel: boolean): void;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Get the value of the players cooldown attack strength when they initiated the attack */
getCooledAttackStrength(): number;
/** Gets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If an attack cooldown event is cancelled, the players attack strength will remain at the same value instead of being reset. */
isCancelled(): boolean;
/** Returns the entity attacked by the player */
getAttackedEntity(): org_bukkit_entity_Entity;
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
constructor(who: org_bukkit_entity_Player, attackedEntity: org_bukkit_entity_Entity, cooledAttackStrength: number);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when the player changes his client settings */

  export class PlayerClientOptionsChangeEvent extends org_bukkit_event_player_PlayerEvent {
chatVisibility: com_destroystokyo_paper_ClientOption_ChatVisibility;
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
locale: string;
mainHand: org_bukkit_inventory_MainHand;
skinParts: com_destroystokyo_paper_SkinParts;
static handlerList: org_bukkit_event_HandlerList;
viewDistance: number;
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
equals(arg0: java_lang_Object): boolean;
getChatVisibility(): com_destroystokyo_paper_ClientOption_ChatVisibility;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getLocale(): string;
getMainHand(): org_bukkit_inventory_MainHand;
getSkinParts(): com_destroystokyo_paper_SkinParts;
getViewDistance(): number;
hasChatColorsEnabled(): boolean;
hasChatColorsEnabledChanged(): boolean;
hasChatVisibilityChanged(): boolean;
hasLocaleChanged(): boolean;
hasMainHandChanged(): boolean;
hasSkinPartsChanged(): boolean;
hasViewDistanceChanged(): boolean;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(player: org_bukkit_entity_Player, locale: string, viewDistance: number, chatVisibility: com_destroystokyo_paper_ClientOption_ChatVisibility, chatColors: boolean, skinParts: com_destroystokyo_paper_SkinParts, mainHand: org_bukkit_inventory_MainHand);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { UUID as java_util_UUID } from 'java.util';
import { InetAddress as java_net_InetAddress } from 'java.net';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** 
 This event is invoked when a player has disconnected. It is guaranteed that,
 if the server is in online-mode, that the provided uuid and username have been
 validated.
 

 
 The event is invoked for players who have not yet logged into the world, whereas
 PlayerQuitEvent is only invoked on players who have logged into the world.
 

 
 The event is invoked for players who have already logged into the world,
 although whether or not the player exists in the world at the time of
 firing is undefined. (That is, whether the plugin can retrieve a Player object
 using the event parameters is undefined). However, it is guaranteed that this
 event is invoked AFTER PlayerQuitEvent, if the player has already logged into the world.
 

 
 This event is guaranteed to never fire unless AsyncPlayerPreLoginEvent has
 been fired beforehand, and this event may not be called in parallel with
 AsyncPlayerPreLoginEvent for the same connection.
 

 
 Cancelling the AsyncPlayerPreLoginEvent guarantees the corresponding
 PlayerConnectionCloseEvent is never called.
 

 
 The event may be invoked asynchronously or synchronously. Plugins should check
 Event.isAsynchronous() and handle accordingly.
  */

  export class PlayerConnectionCloseEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
ipAddress: java_net_InetAddress;
playerName: string;
playerUniqueId: java_util_UUID;
static handlerList: org_bukkit_event_HandlerList;
/** Returns the UUID of the player disconnecting. */
getPlayerUniqueId(): java_util_UUID;
/** Returns the name of the player disconnecting. */
getPlayerName(): string;
/** Returns the player's IP address. */
getIpAddress(): java_net_InetAddress;
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
constructor(playerUniqueId: java_util_UUID, playerName: string, ipAddress: java_net_InetAddress, async: boolean);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Firework as org_bukkit_entity_Firework, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Fired when a player boosts elytra flight with a firework */

  export class PlayerElytraBoostEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
firework: org_bukkit_entity_Firework;
handlers: org_bukkit_event_HandlerList;
itemStack: org_bukkit_inventory_ItemStack;
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
/** Get the firework entity that was spawned */
getFirework(): org_bukkit_entity_Firework;
/** Get the firework itemstack used */
getItemStack(): org_bukkit_inventory_ItemStack;
/** Get whether to consume the firework or not */
shouldConsume(): boolean;
/** Set whether to consume the firework or not */
setShouldConsume(consume: boolean): void;
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
constructor(player: org_bukkit_entity_Player, itemStack: org_bukkit_inventory_ItemStack, firework: org_bukkit_entity_Firework);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { UUID as java_util_UUID } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** This event is fired during a player handshake.

 If there are no listeners listening to this event, the logic default
 to your server platform will be ran.

 WARNING: TAMPERING WITH THIS EVENT CAN BE DANGEROUS */

  export class PlayerHandshakeEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
failMessage: string;
handlers: org_bukkit_event_HandlerList;
originalHandshake: string;
propertiesJson: string | null;
serverHostname: string | null;
socketAddressHostname: string | null;
static handlerList: org_bukkit_event_HandlerList;
uniqueId: java_util_UUID | null;
/** Determines if authentication failed.

 When true, the client connecting will be disconnected
 with the fail message. */
isFailed(): boolean;
/** Determines if this event is cancelled.

 When this event is cancelled, custom handshake logic will not
 be processed. */
isCancelled(): boolean;
/** Gets the message to display to the client when authentication fails. */
getFailMessage(): string;
/** Gets the original handshake string. */
getOriginalHandshake(): string;
/** Gets the profile properties.

 This should be a valid JSON string. */
getPropertiesJson(): string | null;
/** Gets the server hostname string.

 This should not include the port. */
getServerHostname(): string | null;
/** Gets the socket address hostname string.

 This should not include the port. */
getSocketAddressHostname(): string | null;
/** Gets the unique id. */
getUniqueId(): java_util_UUID | null;
/** Sets if authentication failed and the client should be disconnected.

 When true, the client connecting will be disconnected
 with the fail message. */
setFailed(failed: boolean): void;
/** Sets if this event is cancelled.

 When this event is cancelled, custom handshake logic will not
 be processed. */
setCancelled(cancelled: boolean): void;
/** Sets the message to display to the client when authentication fails. */
setFailMessage(failMessage: string): void;
/** Sets the profile properties.

 This should be a valid JSON string. */
setPropertiesJson(propertiesJson: string): void;
/** Sets the server hostname string.

 This should not include the port. */
setServerHostname(serverHostname: string): void;
/** Sets the socket address hostname string.

 This should not include the port. */
setSocketAddressHostname(socketAddressHostname: string): void;
/** Sets the unique id. */
setUniqueId(uniqueId: java_util_UUID): void;
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
/** Creates a new PlayerHandshakeEvent. */
constructor(originalHandshake: string, cancelled: boolean);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { PlayerSpawnLocationEvent as org_spigotmc_event_player_PlayerSpawnLocationEvent } from 'org.spigotmc.event.player';

  export class PlayerInitialSpawnEvent extends org_spigotmc_event_player_PlayerSpawnLocationEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
player: org_bukkit_entity_Player;
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
/** Returns the player involved in this event */
getPlayer(): org_bukkit_entity_Player;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(who: org_bukkit_entity_Player, spawnLocation: org_bukkit_Location);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when the server detects the player is jumping.
 
 Added to avoid the overhead and special case logic that many plugins use
 when checking for jumps via PlayerMoveEvent, this event is fired whenever
 the server detects that the player is jumping. */

  export class PlayerJumpEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
from: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
to: org_bukkit_Location;
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
/** Gets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If a jump event is cancelled, the player will be moved or
 teleported back to the Location as defined by getFrom(). This will not
 fire an event */
isCancelled(): boolean;
/** Gets the location this player jumped from */
getFrom(): org_bukkit_Location;
/** Gets the location this player jumped to

 This information is based on what the client sends, it typically
 has little relation to the arc of the jump at any given point. */
getTo(): org_bukkit_Location;
/** Sets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If a jump event is cancelled, the player will be moved or
 teleported back to the Location as defined by getFrom(). This will not
 fire an event */
setCancelled(cancel: boolean): void;
/** Sets the location to mark as where the player jumped from */
setFrom(from: org_bukkit_Location): void;
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
constructor(player: org_bukkit_entity_Player, from: org_bukkit_Location, to: org_bukkit_Location);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Projectile as org_bukkit_entity_Projectile, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when a player shoots a projectile */

  export class PlayerLaunchProjectileEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
itemStack: org_bukkit_inventory_ItemStack;
projectile: org_bukkit_entity_Projectile;
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
/** Get the ItemStack used to fire the projectile */
getItemStack(): org_bukkit_inventory_ItemStack;
/** Get whether to consume the ItemStack or not */
shouldConsume(): boolean;
/** Gets the projectile which will be launched by this event */
getProjectile(): org_bukkit_entity_Projectile;
/** Set whether to consume the ItemStack or not */
setShouldConsume(consumeItem: boolean): void;
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
constructor(shooter: org_bukkit_entity_Player, itemStack: org_bukkit_inventory_ItemStack, projectile: org_bukkit_entity_Projectile);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when the locale of the player is changed. */

  export class PlayerLocaleChangeEvent extends org_bukkit_event_player_PlayerEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
newLocale: string;
oldLocale: string;
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
/** Gets the locale the player is changed to. */
getNewLocale(): string;
/** Gets the locale the player switched from. */
getOldLocale(): string;
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
constructor(player: org_bukkit_entity_Player, oldLocale: string, newLocale: string);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Fired when the server is calculating what chunks to try to spawn monsters in every Monster Spawn Tick event */

  export class PlayerNaturallySpawnCreaturesEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
spawnRadius: number;
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
getSpawnRadius(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
setSpawnRadius(radius: number): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(player: org_bukkit_entity_Player, radius: number);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ExperienceOrb as org_bukkit_entity_ExperienceOrb, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Fired when a player is attempting to pick up an experience orb */

  export class PlayerPickupExperienceEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
experienceOrb: org_bukkit_entity_ExperienceOrb;
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
/** If true, Cancels picking up the experience orb, leaving it in the world */
setCancelled(cancel: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getExperienceOrb(): org_bukkit_entity_ExperienceOrb;
getHandlers(): org_bukkit_event_HandlerList;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(player: org_bukkit_entity_Player, experienceOrb: org_bukkit_entity_ExperienceOrb);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Fired after a player has respawned */

  export class PlayerPostRespawnEvent extends org_bukkit_event_player_PlayerEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
respawnedLocation: org_bukkit_Location;
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
/** Checks if the player respawned to their bed */
isBedSpawn(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Returns the location of the respawned player */
getRespawnedLocation(): org_bukkit_Location;
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
constructor(respawnPlayer: org_bukkit_entity_Player, respawnedLocation: org_bukkit_Location, isBedSpawn: boolean);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Set as java_util_Set, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';
/** Represents a players profile for the game, such as UUID, Name, and textures. */

  export class PlayerProfile {
id: java_util_UUID | null;
name: string | null;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
/** Check if the Profile has the specified property */
hasProperty(property: string | null): boolean | null;
/** Clears all properties on this profile */
clearProperties(): void;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 Optionally will also fill textures.

 Online mode will be automatically determined */
complete(textures: boolean): boolean;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 Optionally will also fill textures. */
complete(textures: boolean, onlineMode: boolean): boolean;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 This will also complete textures. If you do not want to load textures, use {complete(boolean)} */
complete(): boolean;
/** Like complete(boolean) but will try only from cache, and not make network calls
 Does not account for textures. */
completeFromCache(): boolean;
/** Like complete(boolean) but will try only from cache, and not make network calls
 Does not account for textures. */
completeFromCache(lookupUUID: boolean, onlineMode: boolean): boolean;
/** Like complete(boolean) but will try only from cache, and not make network calls
 Does not account for textures. */
completeFromCache(onlineMode: boolean): boolean;
/** Removes a specific property from this profile */
removeProperty(property: com_destroystokyo_paper_profile_ProfileProperty): boolean;
/** Removes a specific property from this profile */
removeProperty(property: string | null): boolean | null;
/** Removes all properties in the collection */
removeProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): boolean;
/** Sets a property. If the property already exists, the previous one will be replaced */
setProperty(property: com_destroystokyo_paper_profile_ProfileProperty): void;
/** Sets multiple properties. If any of the set properties already exist, it will be replaced */
setProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
/** Sets this profiles Name */
setName(name: string | null): string | null;
/** Sets this profiles UUID */
setId(uuid: java_util_UUID | null): java_util_UUID | null;
/** Whether or not this Profile has textures associated to it */
hasTextures(): boolean;
getId(): java_util_UUID | null;
getName(): string | null;
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
isComplete(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when a player is firing a bow and the server is choosing an arrow to use. */

  export class PlayerReadyArrowEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
arrow: org_bukkit_inventory_ItemStack;
bow: org_bukkit_inventory_ItemStack;
class: java_lang_Class<java_lang_Object>;
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
/** Cancel use of this arrow. On cancel, the server will try the next arrow available and fire another event. */
setCancelled(cancel: boolean): void;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Whether or not use of this arrow is cancelled. On cancel, the server will try the next arrow available and fire another event. */
isCancelled(): boolean;
equals(arg0: java_lang_Object): boolean;
getArrow(): org_bukkit_inventory_ItemStack;
getBow(): org_bukkit_inventory_ItemStack;
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
constructor(player: org_bukkit_entity_Player, bow: org_bukkit_inventory_ItemStack, arrow: org_bukkit_inventory_ItemStack);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Triggered when a player starts spectating an entity in spectator mode. */

  export class PlayerStartSpectatingEntityEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
currentSpectatorTarget: org_bukkit_entity_Entity;
eventName: string;
handlers: org_bukkit_event_HandlerList;
newSpectatorTarget: org_bukkit_entity_Entity;
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
/** Gets the entity that the player is currently spectating or themselves if they weren't spectating anything */
getCurrentSpectatorTarget(): org_bukkit_entity_Entity;
/** Gets the new entity that the player will now be spectating */
getNewSpectatorTarget(): org_bukkit_entity_Entity;
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
constructor(player: org_bukkit_entity_Player, currentSpectatorTarget: org_bukkit_entity_Entity, newSpectatorTarget: org_bukkit_entity_Entity);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Triggered when a player stops spectating an entity in spectator mode. */

  export class PlayerStopSpectatingEntityEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
spectatorTarget: org_bukkit_entity_Entity;
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
/** Gets the entity that the player is spectating */
getSpectatorTarget(): org_bukkit_entity_Entity;
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
constructor(player: org_bukkit_entity_Player, spectatorTarget: org_bukkit_entity_Entity);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { EndGateway as org_bukkit_block_EndGateway } from 'org.bukkit.block';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerTeleportEvent as org_bukkit_event_player_PlayerTeleportEvent } from 'org.bukkit.event.player';
/** Fired when a teleport is triggered for an End Gateway */

  export class PlayerTeleportEndGatewayEvent extends org_bukkit_event_player_PlayerTeleportEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
from: org_bukkit_Location;
gateway: org_bukkit_block_EndGateway;
player: org_bukkit_entity_Player;
to: org_bukkit_Location;
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
/** Gets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If a move or teleport event is cancelled, the player will be moved or
 teleported back to the Location as defined by getFrom(). This will not
 fire an event */
isCancelled(): boolean;
/** Gets the location this player moved from */
getFrom(): org_bukkit_Location;
/** Gets the location this player moved to */
getTo(): org_bukkit_Location;
/** Returns the player involved in this event */
getPlayer(): org_bukkit_entity_Player;
/** Sets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If a move or teleport event is cancelled, the player will be moved or
 teleported back to the Location as defined by getFrom(). This will not
 fire an event */
setCancelled(cancel: boolean): void;
/** Sets the location that this player will move to */
setTo(to: org_bukkit_Location): void;
/** Sets the location to mark as where the player moved from */
setFrom(from: org_bukkit_Location): void;
/** The gateway triggering the teleport */
getGateway(): org_bukkit_block_EndGateway;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(player: org_bukkit_entity_Player, from: org_bukkit_Location, to: org_bukkit_Location, gateway: org_bukkit_block_EndGateway);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { EquipmentSlot as org_bukkit_inventory_EquipmentSlot } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerUseUnknownEntityEvent extends org_bukkit_event_player_PlayerEvent {
class: java_lang_Class<java_lang_Object>;
entityId: number;
eventName: string;
hand: org_bukkit_inventory_EquipmentSlot;
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
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getEntityId(): number;
getHand(): org_bukkit_inventory_EquipmentSlot;
getHandlers(): org_bukkit_event_HandlerList;
hashCode(): number;
isAttack(): boolean;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(who: org_bukkit_entity_Player, entityId: number, attack: boolean, hand: org_bukkit_inventory_EquipmentSlot);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** WARNING: This event only fires for a limited number of cases, and not for every case that CreatureSpawnEvent does.

 You should still listen to CreatureSpawnEvent as a backup, and only use this event as an "enhancement".
 The intent of this event is to improve server performance, so limited use cases.
 
 Currently: NATURAL and SPAWNER based reasons. Please submit a Pull Request for future additions.
 Also, Plugins that replace Entity Registrations with their own custom entities might not fire this event. */

  export class PreCreatureSpawnEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
spawnLocation: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
type: org_bukkit_entity_EntityType;
/** Cancelling this event is more effecient than cancelling CreatureSpawnEvent */
setCancelled(cancel: boolean): void;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Set this if you are more blanket blocking all types of these spawns, and wish to abort the spawn process from
 trying more attempts after this cancellation. */
setShouldAbortSpawn(shouldAbortSpawn: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
getSpawnLocation(): org_bukkit_Location;
getType(): org_bukkit_entity_EntityType;
hashCode(): number;
notify(): void;
notifyAll(): void;
shouldAbortSpawn(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(location: org_bukkit_Location, type: org_bukkit_entity_EntityType, reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { Collection as java_util_Collection } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty, PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Fired when the server is requesting to fill in properties of an incomplete profile, such as textures.

 Allows plugins to pre populate cached properties and avoid a call to the Mojang API */

  export class PreFillProfileEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
static handlerList: org_bukkit_event_HandlerList;
/** Sets the properties on the profile, avoiding the call to the Mojang API
 Same as .getPlayerProfile().setProperties(properties); */
setProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(profile: com_destroystokyo_paper_profile_PlayerProfile);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Set as java_util_Set, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Allows a plugin to intercept a Profile Lookup for a Profile by name

 At the point of event fire, the UUID and properties are unset.

 If a plugin sets the UUID, and optionally the properties, the API call to look up the profile may be skipped.

 No guarantees are made about thread execution context for this event. If you need to know, check
 event.isAsync() */

  export class PreLookupProfileEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
name: string;
profileProperties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
static handlerList: org_bukkit_event_HandlerList;
uUID: java_util_UUID | null;
/** Adds any properties currently missing to the prepopulated properties set, replacing any that already were set.
 Any property in this Set will be automatically prefilled on this Profile */
addProfileProperties(properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>): void;
/** Clears any existing prepopulated properties and uses the supplied properties
 Any property in this Set will be automatically prefilled on this Profile */
setProfileProperties(properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>): void;
/** If this value is left null by the completion of the event call, then the server will
 trigger a call to the Mojang API to look up the UUID (Network Request), and subsequently, fire a
 LookupProfileEvent */
getUUID(): java_util_UUID | null;
/** Sets the UUID for this player name. This will skip the initial API call to find the players UUID.

 However, if Profile Properties are needed by the server, you must also set them or else an API call might still be made. */
setUUID(uuid: java_util_UUID | null): void | null;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getName(): string;
getProfileProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(name: string);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.inventory' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack, InventoryView as org_bukkit_inventory_InventoryView } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InventoryEvent as org_bukkit_event_inventory_InventoryEvent } from 'org.bukkit.event.inventory';

  export class PrepareResultEvent extends org_bukkit_event_inventory_InventoryEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList;
result: org_bukkit_inventory_ItemStack;
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
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getResult(): org_bukkit_inventory_ItemStack;
hashCode(): number;
notify(): void;
notifyAll(): void;
setResult(arg0: org_bukkit_inventory_ItemStack): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: org_bukkit_inventory_InventoryView, arg1: org_bukkit_inventory_ItemStack);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { PreCreatureSpawnEvent as com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent } from 'com.destroystokyo.paper.event.entity';
/** Called before an entity is spawned into a world by a spawner.

 This only includes the spawner's location and not the full BlockState snapshot for performance reasons.
 If you really need it you have to get the spawner yourself. */

  export class PreSpawnerSpawnEvent extends com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent {
class: java_lang_Class<java_lang_Object>;
eventName: string;
spawnerLocation: org_bukkit_Location;
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
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getSpawnerLocation(): org_bukkit_Location;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(location: org_bukkit_Location, type: org_bukkit_entity_EntityType, spawnerLocation: org_bukkit_Location);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Object as java_lang_Object } from 'java.lang';
/** Represents a property on a PlayerProfile */

  export class ProfileProperty extends java_lang_Object {
name: string;
signature: string | null;
value: string;
equals(o: java_lang_Object): boolean;
getName(): string;
getSignature(): string | null;
getValue(): string;
hashCode(): number;
isSigned(): boolean;
constructor(name: string, value: string);
constructor(name: string, value: string, signature: string | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Fires when the server needs to verify if a player is whitelisted.

 Plugins may override/control the servers whitelist with this event,
 and dynamically change the kick message. */

  export class ProfileWhitelistVerifyEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
kickMessage: string | null;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
static handlerList: org_bukkit_event_HandlerList;
/** Changes the players whitelisted state. false will deny the login */
setWhitelisted(whitelisted: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getKickMessage(): string | null;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
hashCode(): number;
isOp(): boolean;
isWhitelistEnabled(): boolean;
isWhitelisted(): boolean;
notify(): void;
notifyAll(): void;
setKickMessage(kickMessage: string | null): void | null;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(profile: com_destroystokyo_paper_profile_PlayerProfile, whitelistEnabled: boolean, whitelisted: boolean, isOp: boolean, kickMessage: string | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Projectile as org_bukkit_entity_Projectile } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Called when an projectile collides with an entity
 
 This event is called before EntityDamageByEntityEvent, and cancelling it will allow the projectile to continue flying */

  export class ProjectileCollideEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
collidedWith: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Projectile;
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
/** Get the entity the projectile collided with */
getCollidedWith(): org_bukkit_entity_Entity;
/** Get the projectile that collided */
getEntity(): org_bukkit_entity_Entity;
/** Get the projectile that collided */
getEntity(): org_bukkit_entity_Projectile;
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
constructor(what: org_bukkit_entity_Projectile, collidedWith: org_bukkit_entity_Entity);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player, EntityType as org_bukkit_entity_EntityType, Pose as org_bukkit_entity_Pose, Projectile as org_bukkit_entity_Projectile, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Pathfinder as com_destroystokyo_paper_entity_Pathfinder, TargetEntityInfo as com_destroystokyo_paper_entity_TargetEntityInfo } from 'com.destroystokyo.paper.entity';
import { MemoryKey as org_bukkit_entity_memory_MemoryKey } from 'org.bukkit.entity.memory';
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class } from 'java.lang';
import { EntityEquipment as org_bukkit_inventory_EntityEquipment, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { RayTraceResult as org_bukkit_util_RayTraceResult, BoundingBox as org_bukkit_util_BoundingBox, Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { FluidCollisionMode as org_bukkit_FluidCollisionMode, Location as org_bukkit_Location, Material as org_bukkit_Material, World as org_bukkit_World, Server as org_bukkit_Server, Chunk as org_bukkit_Chunk, EntityEffect as org_bukkit_EntityEffect } from 'org.bukkit';
import { Set as java_util_Set, List as java_util_List, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace, PistonMoveReaction as org_bukkit_block_PistonMoveReaction } from 'org.bukkit.block';
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { TargetBlockInfo as com_destroystokyo_paper_block_TargetBlockInfo } from 'com.destroystokyo.paper.block';
import { PotionEffect as org_bukkit_potion_PotionEffect, PotionEffectType as org_bukkit_potion_PotionEffectType } from 'org.bukkit.potion';
import { Attribute as org_bukkit_attribute_Attribute, AttributeInstance as org_bukkit_attribute_AttributeInstance } from 'org.bukkit.attribute';
import { Spigot as org_bukkit_command_CommandSender_Spigot } from 'org.bukkit.command.CommandSender';
import { Spigot as org_bukkit_entity_Entity_Spigot } from 'org.bukkit.entity.Entity';
import { TeleportCause as org_bukkit_event_player_PlayerTeleportEvent_TeleportCause } from 'org.bukkit.event.player.PlayerTeleportEvent';
import { EntityDamageEvent as org_bukkit_event_entity_EntityDamageEvent } from 'org.bukkit.event.entity';
import { CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { MetadataValue as org_bukkit_metadata_MetadataValue } from 'org.bukkit.metadata';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Permission as org_bukkit_permissions_Permission, PermissionAttachment as org_bukkit_permissions_PermissionAttachment, PermissionAttachmentInfo as org_bukkit_permissions_PermissionAttachmentInfo } from 'org.bukkit.permissions';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';

  export class RangedEntity implements org_bukkit_entity_Mob {
absorptionAmount: number;
activeItem: org_bukkit_inventory_ItemStack | null;
activePotionEffects: java_util_Collection<org_bukkit_potion_PotionEffect>;
arrowsStuck: number;
attribute: org_bukkit_attribute_AttributeInstance | null;
boundingBox: org_bukkit_util_BoundingBox;
canPickupItems: boolean;
chunk: org_bukkit_Chunk;
collidableExemptions: java_util_Set<java_util_UUID>;
customName: string | null;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
entityId: number;
entitySpawnReason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
equipment: org_bukkit_inventory_EntityEquipment | null;
eyeHeight: number;
eyeHeight: number;
eyeLocation: org_bukkit_Location;
facing: org_bukkit_block_BlockFace;
fallDistance: number;
fireTicks: number;
handRaisedTime: number;
health: number;
height: number;
itemUseRemainingTime: number;
killer: org_bukkit_entity_Player | null;
lastDamage: number;
lastDamageCause: org_bukkit_event_entity_EntityDamageEvent | null;
lastTwoTargetBlocks: java_util_List<org_bukkit_block_Block> | null;
leashHolder: org_bukkit_entity_Entity;
lineOfSight: java_util_List<org_bukkit_block_Block> | null;
location: org_bukkit_Location;
location: org_bukkit_Location;
lootTable: org_bukkit_loot_LootTable | null;
maxFireTicks: number;
maxHealth: number;
maximumAir: number;
maximumNoDamageTicks: number;
memory: T | null;
metadata: java_util_List<org_bukkit_metadata_MetadataValue>;
name: string;
nearbyEntities: java_util_List<org_bukkit_entity_Entity>;
noDamageTicks: number;
origin: org_bukkit_Location | null;
passenger: org_bukkit_entity_Entity | null;
passengers: java_util_List<org_bukkit_entity_Entity>;
pathfinder: com_destroystokyo_paper_entity_Pathfinder;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
pistonMoveReaction: org_bukkit_block_PistonMoveReaction;
portalCooldown: number;
pose: org_bukkit_entity_Pose;
potionEffect: org_bukkit_potion_PotionEffect | null;
remainingAir: number;
removeWhenFarAway: boolean;
scoreboardTags: java_util_Set<string>;
seed: number;
server: org_bukkit_Server;
shieldBlockingDelay: number;
target: org_bukkit_entity_LivingEntity | null;
targetBlock: org_bukkit_block_Block | null;
targetBlock: org_bukkit_block_Block | null;
targetBlock: org_bukkit_block_Block | null;
targetBlockExact: org_bukkit_block_Block | null;
targetBlockExact: org_bukkit_block_Block | null;
targetBlockFace: org_bukkit_block_BlockFace | null;
targetBlockFace: org_bukkit_block_BlockFace | null;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo | null;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo | null;
targetEntity: org_bukkit_entity_Entity | null;
targetEntity: org_bukkit_entity_Entity | null;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo | null;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo | null;
ticksLived: number;
type: org_bukkit_entity_EntityType;
uniqueId: java_util_UUID;
vehicle: org_bukkit_entity_Entity | null;
velocity: org_bukkit_util_Vector;
width: number;
world: org_bukkit_World;
/** Add a passenger to the vehicle. */
addPassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Add a tag to this entity.
 
 Entities can have no more than 1024 tags. */
addScoreboardTag(tag: string): boolean;
/** Adds a new PermissionAttachment with a single permission by
 name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean): org_bukkit_permissions_PermissionAttachment;
/** Adds a new empty PermissionAttachment to this object */
addAttachment(plugin: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
/** Adds the given PotionEffect to the living entity.
 
 Only one potion effect can be present for a given PotionEffectType. */
addPotionEffect(effect: org_bukkit_potion_PotionEffect, force: boolean): boolean;
/** Adds the given PotionEffect to the living entity. */
addPotionEffect(effect: org_bukkit_potion_PotionEffect): boolean;
/** Alias to LivingEntity.isHandRaised(), if the entity is charging an attack */
isChargingAttack(): boolean;
/** Attack the specified entity using a ranged attack. */
rangedAttack(target: org_bukkit_entity_LivingEntity, charge: number): void;
/** Attempts to add all of the given PotionEffect to the living
 entity. */
addPotionEffects(effects: java_util_Collection<org_bukkit_potion_PotionEffect>): boolean;
/** Check if a vehicle has passengers. */
isEmpty(): boolean;
/** Check if this mob is exposed to daylight */
isInDaylight(): boolean;
/** Checks if this object contains an override for the specified
 permission, by fully qualified name */
isPermissionSet(name: string): boolean;
/** Checks if this object contains an override for the specified Permission */
isPermissionSet(perm: org_bukkit_permissions_Permission): boolean;
/** Checks if this object is a server operator */
isOp(): boolean;
/** Checks to see if an entity is currently using the Riptide enchantment. */
isRiptiding(): boolean;
/** Checks to see if an entity is gliding, such as using an Elytra. */
isGliding(): boolean;
/** Checks to see if an entity is swimming. */
isSwimming(): boolean;
/** Checks whether an entity has AI.

 The entity will be completely unable to move if it has no AI. */
hasAI(): boolean;
/** Checks whether the living entity has block line of sight to another.
 
 This uses the same algorithm that hostile mobs use to find the closest
 player. */
hasLineOfSight(other: org_bukkit_entity_Entity): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;
/** Deals the given amount of damage to this entity, from a specified
 entity. */
damage(amount: number, source: org_bukkit_entity_Entity | null): void | null;
/** Deals the given amount of damage to this entity. */
damage(amount: number): void;
/** Eject any passenger. */
eject(): boolean;
/** Enables access to control the pathing of an Entity */
getPathfinder(): com_destroystokyo_paper_entity_Pathfinder;
/** Get a Location detailing the current eye position of the living entity. */
getEyeLocation(): org_bukkit_Location;
/** Get entity jump state.
 
 Jump state will be true when the entity has been marked to jump. */
isJumping(): boolean;
/** Get how long the players hands have been raised (Charging Bow attack, using a potion, etc) */
getHandRaisedTime(): number;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Get the closest cardinal BlockFace direction an entity is
 currently facing.
 
 This will not return any non-cardinal directions such as
 BlockFace.UP or BlockFace.DOWN.
 
 Hanging entities will override this call and thus their behavior
 may be different. */
getFacing(): org_bukkit_block_BlockFace;
/** Get the delay (in ticks) before blocking is effective for this entity */
getShieldBlockingDelay(): number;
/** Get the number of arrows stuck in this entity */
getArrowsStuck(): number;
/** Get the type of the entity. */
getType(): org_bukkit_entity_EntityType;
/** Get the vehicle that this player is inside. If there is no vehicle,
 null will be returned. */
getVehicle(): org_bukkit_entity_Entity | null;
/** Get's remaining time a player needs to keep hands raised with an item to finish using it. */
getItemUseRemainingTime(): number;
/** Get's the item being actively "used" or consumed. */
getActiveItem(): org_bukkit_inventory_ItemStack | null;
/** Gets a list of passengers of this vehicle.
 
 The returned list will not be directly linked to the entity's current
 passengers, and no guarantees are made as to its mutability. */
getPassengers(): java_util_List<org_bukkit_entity_Entity>;
/** Gets a set containing all of the permissions currently in effect by
 this object */
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
/** Gets all blocks along the living entity's line of sight.
 
 This list contains all blocks from the living entity's eye position to
 target inclusive. This method considers all blocks as 1x1x1 in size. */
getLineOfSight(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): java_util_List<org_bukkit_block_Block> | null;
/** Gets if the living entity can pick up items. */
getCanPickupItems(): boolean;
/** Gets if this entity is subject to collisions with other entities.
 
 Please note that this method returns only the custom collidable state,
 not whether the entity is non-collidable for other reasons such as being
 dead. */
isCollidable(): boolean;
/** Gets information about the block the living entity has targeted */
getTargetBlockInfo(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): com_destroystokyo_paper_block_TargetBlockInfo | null;
/** Gets information about the block the living entity has targeted, ignoring fluids */
getTargetBlockInfo(maxDistance: number): com_destroystokyo_paper_block_TargetBlockInfo | null;
/** Gets information about the entity being targeted */
getTargetEntity(maxDistance: number): org_bukkit_entity_Entity | null;
/** Gets information about the entity being targeted */
getTargetEntity(maxDistance: number, ignoreBlocks: boolean): org_bukkit_entity_Entity | null;
/** Gets information about the entity being targeted */
getTargetEntityInfo(maxDistance: number): com_destroystokyo_paper_entity_TargetEntityInfo | null;
/** Gets information about the entity being targeted */
getTargetEntityInfo(maxDistance: number, ignoreBlocks: boolean): com_destroystokyo_paper_entity_TargetEntityInfo | null;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Gets the Server that contains this Entity */
getServer(): org_bukkit_Server;
/** Gets the amount of ticks this entity has lived for.
 
 This is the equivalent to "age" in entities. */
getTicksLived(): number;
/** Gets the block that the living entity has targeted */
getTargetBlock(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted, ignoring fluids */
getTargetBlock(maxDistance: number): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted.
 
 This method considers all blocks as 1x1x1 in size. To take exact block
 collision shapes into account, see getTargetBlockExact(int,
 FluidCollisionMode). */
getTargetBlock(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted.
 
 This takes the blocks' precise collision shapes into account.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
getTargetBlockExact(maxDistance: number, fluidCollisionMode: org_bukkit_FluidCollisionMode): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted.
 
 This takes the blocks' precise collision shapes into account. Fluids are
 ignored.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
getTargetBlockExact(maxDistance: number): org_bukkit_block_Block | null;
/** Gets the blockface of that block that the living entity has targeted */
getTargetBlockFace(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_BlockFace | null;
/** Gets the blockface of that block that the living entity has targeted, ignoring fluids */
getTargetBlockFace(maxDistance: number): org_bukkit_block_BlockFace | null;
/** Gets the current target of this Mob */
getTarget(): org_bukkit_entity_LivingEntity | null;
/** Gets the current world this entity resides in */
getWorld(): org_bukkit_World;
/** Gets the custom name on a mob or block. If there is no name this method
 will return null.
 
 This value has no effect on players, they will always use their real
 name. */
getCustomName(): string | null;
/** Gets the entity that is currently leading this entity. */
getLeashHolder(): org_bukkit_entity_Entity;
/** Gets the entity's absorption amount. */
getAbsorptionAmount(): number;
/** Gets the entity's current bounding box.
 
 The returned bounding box reflects the entity's current location and
 size. */
getBoundingBox(): org_bukkit_util_BoundingBox;
/** Gets the entity's current pose.

 Note that the pose is only updated at the end of a tick, so may be
 inconsistent with other methods. eg Player.isSneaking() being
 true does not imply the current pose will be Pose.SNEAKING */
getPose(): org_bukkit_entity_Pose;
/** Gets the entity's health from 0 to getMaxHealth(), where 0 is dead. */
getHealth(): number;
/** Gets the entity's height */
getHeight(): number;
/** Gets the entity's width */
getWidth(): number;
/** Gets the height of the living entity's eyes above its Location. */
getEyeHeight(): number;
/** Gets the height of the living entity's eyes above its Location. */
getEyeHeight(ignorePose: boolean): number;
/** Gets the inventory with the equipment worn by the living entity. */
getEquipment(): org_bukkit_inventory_EntityEquipment | null;
/** Gets the last two blocks along the living entity's line of sight.
 
 The target block will be the last block in the list. This method
 considers all blocks as 1x1x1 in size. */
getLastTwoTargetBlocks(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): java_util_List<org_bukkit_block_Block> | null;
/** Gets the latest chunk an entity is currently or was in. */
getChunk(): org_bukkit_Chunk;
/** Gets the location where this entity originates from.
 
 This value can be null if the entity hasn't yet been added to the world. */
getOrigin(): org_bukkit_Location | null;
/** Gets the maximum health this entity has. */
getMaxHealth(): number;
/** Gets the name of this command sender */
getName(): string;
/** Gets the period of time (in ticks) before this entity can use a portal. */
getPortalCooldown(): number;
/** Gets the player identified as the killer of the living entity.
 
 May be null. */
getKiller(): org_bukkit_entity_Player | null;
/** Gets the primary passenger of a vehicle. For vehicles that could have
 multiple passengers, this will only return the primary passenger. */
getPassenger(): org_bukkit_entity_Entity | null;
/** Gets the specified attribute instance from the object. This instance will
 be backed directly to the object and any changes will be visible at once. */
getAttribute(attribute: org_bukkit_attribute_Attribute): org_bukkit_attribute_AttributeInstance | null;
/** Gets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned */
hasPermission(perm: org_bukkit_permissions_Permission): boolean;
/** Gets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned. */
hasPermission(name: string): boolean;
/** Gets this entity's current velocity */
getVelocity(): org_bukkit_util_Vector;
/** Gets whether or not the mob's custom name is displayed client side.
 
 This value has no effect on players, they will always display their
 name. */
isCustomNameVisible(): boolean;
/** Gets whether the entity is glowing or not.

 nb: this refers to the 'Glowing' entity property, not whether a
 glowing potion effect is applied */
isGlowing(): boolean;
/** Gets whether the entity is invulnerable or not. */
isInvulnerable(): boolean;
/** Gets whether the entity is silent or not. */
isSilent(): boolean;
/** Gets whether this mob is aware of its surroundings.

 Unaware mobs will still move if pushed, attacked, etc. but will not move
 or perform any actions on their own. Unaware mobs may also have other
 unspecified behaviours disabled, such as drowning. */
isAware(): boolean;
/** Instructs this Mob to set the specified LivingEntity as its target.
 
 Hostile creatures may attack their target, and friendly creatures may
 follow their target. */
setTarget(target: org_bukkit_entity_LivingEntity | null): void | null;
/** Launches a Projectile from the ProjectileSource with an
 initial velocity. */
launchProjectile<T extends org_bukkit_entity_Projectile>(projectile: java_lang_Class<T>, velocity: org_bukkit_util_Vector | null): T | null;
/** Launches a Projectile from the ProjectileSource. */
launchProjectile<T extends org_bukkit_entity_Projectile>(projectile: java_lang_Class<T>): T;
/** Leave the current vehicle. If the entity is currently in a vehicle (and
 is removed from it), true will be returned, otherwise false will be
 returned. */
leaveVehicle(): boolean;
/** Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready. */
teleportAsync(loc: org_bukkit_Location): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
/** Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready. */
teleportAsync(loc: org_bukkit_Location, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
/** Makes entity start or stop gliding. This will work even if an Elytra
 is not equipped, but will be reverted by the server immediately after
 unless an event-cancelling mechanism is put in place. */
setGliding(gliding: boolean): void;
/** Makes entity start or stop swimming.

 This may have unexpected results if the entity is not in water. */
setSwimming(swimming: boolean): void;
/** Makes this entity attack the given entity with a melee attack.

 Attack damage is calculated by the server from the attributes and
 equipment of this mob, and knockback is applied to target as
 appropriate. */
attack(target: org_bukkit_entity_Entity): void;
/** Makes this entity swing their main hand.

 This method does nothing if this entity does not have an animation for
 swinging their main hand. */
swingMainHand(): void;
/** Makes this entity swing their off hand.

 This method does nothing if this entity does not have an animation for
 swinging their off hand. */
swingOffHand(): void;
/** Mark the entity's removal. */
remove(): void;
/** Performs a ray trace that provides information on the targeted block.
 
 This takes the blocks' precise collision shapes into account.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
rayTraceBlocks(maxDistance: number, fluidCollisionMode: org_bukkit_FluidCollisionMode): org_bukkit_util_RayTraceResult | null;
/** Performs a ray trace that provides information on the targeted block.
 
 This takes the blocks' precise collision shapes into account. Fluids are
 ignored.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
rayTraceBlocks(maxDistance: number): org_bukkit_util_RayTraceResult | null;
/** Performs the specified EntityEffect for this entity.
 
 This will be viewable to all players near the entity.
 
 If the effect is not applicable to this class of entity, it will not play. */
playEffect(type: org_bukkit_EntityEffect): void;
/** Recalculates the permissions for this object, if the attachments have
 changed values.
 
 This should very rarely need to be called from a plugin. */
recalculatePermissions(): void;
/** Record the last EntityDamageEvent inflicted on this entity */
setLastDamageCause(event: org_bukkit_event_entity_EntityDamageEvent | null): void | null;
/** Remove a passenger from the vehicle. */
removePassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Removes a given tag from this entity. */
removeScoreboardTag(tag: string): boolean;
/** Removes any effects present of the given PotionEffectType. */
removePotionEffect(type: org_bukkit_potion_PotionEffectType): void;
/** Removes the given PermissionAttachment from this object */
removeAttachment(attachment: org_bukkit_permissions_PermissionAttachment): void;
/** Removes the given metadata value from the implementing object's
 metadata store. */
removeMetadata(metadataKey: string, owningPlugin: org_bukkit_plugin_Plugin): void;
/** Resets the max health to the original amount. */
resetMaxHealth(): void;
/** Retrieve the last EntityDamageEvent inflicted on this entity.
 This event may have been cancelled. */
getLastDamageCause(): org_bukkit_event_entity_EntityDamageEvent | null;
/** Returns a custom tag container capable of storing tags on the object.

 Note that the tags stored on this container are all stored under their
 own custom namespace therefore modifying default tags using this
 PersistentDataHolder is impossible. */
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;
/** Returns a list of entities within a bounding box centered around this
 entity */
getNearbyEntities(x: number, y: number, z: number): java_util_List<org_bukkit_entity_Entity>;
/** Returns a list of previously set metadata values from the implementing
 object's metadata store. */
getMetadata(metadataKey: string): java_util_List<org_bukkit_metadata_MetadataValue>;
/** Returns a set of tags for this entity.
 
 Entities can have no more than 1024 tags. */
getScoreboardTags(): java_util_Set<string>;
/** Returns a unique and persistent id for this entity */
getUniqueId(): java_util_UUID;
/** Returns a unique id for this entity */
getEntityId(): number;
/** Returns all currently active PotionEffects on the living
 entity. */
getActivePotionEffects(): java_util_Collection<org_bukkit_potion_PotionEffect>;
/** Returns false if the entity has died or been despawned for some other
 reason. */
isValid(): boolean;
/** Returns if the living entity despawns when away from players or not.
 
 By default, animals are not removed while other mobs are. */
getRemoveWhenFarAway(): boolean;
/** Returns the active PotionEffect of the specified type.
 
 If the effect is not present on the entity then null will be returned. */
getPotionEffect(type: org_bukkit_potion_PotionEffectType): org_bukkit_potion_PotionEffect | null;
/** Returns the amount of air that the living entity has remaining, in
 ticks. */
getRemainingAir(): number;
/** Returns the distance this entity has fallen */
getFallDistance(): number;
/** Returns the entity's current fire ticks (ticks before the entity stops
 being on fire). */
getFireTicks(): number;
/** Returns the entity's maximum fire ticks. */
getMaxFireTicks(): number;
/** Returns the living entity's current maximum no damage ticks.
 
 This is the maximum duration in which the living entity will not take
 damage. */
getMaximumNoDamageTicks(): number;
/** Returns the living entity's current no damage ticks. */
getNoDamageTicks(): number;
/** Returns the living entity's last damage taken in the current no damage
 ticks time.
 
 Only damage higher than this amount will further damage the living
 entity. */
getLastDamage(): number;
/** Returns the maximum amount of air the living entity can have, in ticks. */
getMaximumAir(): number;
/** Returns the reaction of the entity when moved by a piston. */
getPistonMoveReaction(): org_bukkit_block_PistonMoveReaction;
/** Returns the value of the memory specified.
 
 Note that the value is null when the specific entity does not have that
 value by default. */
getMemory<T extends java_lang_Object>(memoryKey: org_bukkit_entity_memory_MemoryKey<T>): T | null;
/** Returns true if the entity gets persisted.
 
 By default all entities are persistent. An entity will also not get
 persisted, if it is riding an entity that is not persistent.
 
 The persistent flag on players controls whether or not to save their
 playerdata file when they quit. If a player is directly or indirectly
 riding a non-persistent entity, the vehicle at the root and all its
 passengers won't get persisted.
 
 This should not be confused with
 LivingEntity.setRemoveWhenFarAway(boolean) which controls
 despawning of living entities.  */
isPersistent(): boolean;
/** Returns true if the entity is supported by a block. This value is a
 state updated by the server and is not recalculated unless the entity
 moves. */
isOnGround(): boolean;
/** Returns true if this entity has been marked for removal. */
isDead(): boolean;
/** Returns whether gravity applies to this entity. */
hasGravity(): boolean;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Returns whether the entity is currently leashed. */
isLeashed(): boolean;
/** Returns whether the living entity already has an existing effect of
 the given PotionEffectType applied to it. */
hasPotionEffect(type: org_bukkit_potion_PotionEffectType): boolean;
/** Returns whether this entity is inside a vehicle. */
isInsideVehicle(): boolean;
/** Returns whether this entity is slumbering. */
isSleeping(): boolean;
/** Returns whether this entity was spawned from a mob spawner. */
fromMobSpawner(): boolean;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(...component: net_md_5_bungee_api_chat_BaseComponent[]): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(component: net_md_5_bungee_api_chat_BaseComponent): void;
/** Sends this sender a message */
sendMessage(message: string): void;
/** Sends this sender a message */
sendMessage(message: string[]): void;
/** Set entity jump state
 
 Setting to true will mark the entity to jump.
 
 Setting to false will unmark the entity to jump but will not stop a jump already in-progress. */
setJumping(jumping: boolean): void;
/** Set if this entity will be subject to collisions other entities.
 
 Note that collisions are bidirectional, so this method would need to be
 set to false on both the collidee and the collidant to ensure no
 collisions take place. */
setCollidable(collidable: boolean): void;
/** Set the delay (in ticks) before blocking is effective for this entity */
setShieldBlockingDelay(delay: number): void;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the number of arrows stuck in this entity */
setArrowsStuck(arrows: number): void;
/** Set the passenger of a vehicle. */
setPassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Sets a custom name on a mob or block. This name will be used in death
 messages and can be sent to the client as a nameplate over the mob.
 
 Setting the name to null or an empty string will clear it.
 
 This value has no effect on players, they will always use their real
 name. */
setCustomName(name: string | null): void | null;
/** Sets a metadata value in the implementing object's metadata store. */
setMetadata(metadataKey: string, newMetadataValue: org_bukkit_metadata_MetadataValue): void;
/** Sets that the Entity is "charging" up an attack, by raising its hands */
setChargingAttack(raiseHands: boolean): void;
/** Sets the amount of air that the living entity has remaining, in ticks. */
setRemainingAir(ticks: number): void;
/** Sets the amount of ticks this entity has lived for.
 
 This is the equivalent to "age" in entities. May not be less than one
 tick. */
setTicksLived(value: number): void;
/** Sets the damage dealt within the current no damage ticks time period. */
setLastDamage(damage: number): void;
/** Sets the entity's absorption amount. */
setAbsorptionAmount(amount: number): void;
/** Sets the entity's current fire ticks (ticks before the entity stops
 being on fire). */
setFireTicks(ticks: number): void;
/** Sets the entity's health from 0 to getMaxHealth(), where 0 is
 dead. */
setHealth(health: number): void;
/** Sets the entity's rotation.
 
 Note that if the entity is affected by AI, it may override this rotation. */
setRotation(yaw: number, pitch: number): void;
/** Sets the fall distance for this entity */
setFallDistance(distance: number): void;
/** Sets the leash on this entity to be held by the supplied entity.
 
 This method has no effect on EnderDragons, Withers, Players, or Bats.
 Non-living entities excluding leashes will not persist as leash
 holders. */
setLeashHolder(holder: org_bukkit_entity_Entity | null): boolean | null;
/** Sets the living entity's current maximum no damage ticks. */
setMaximumNoDamageTicks(ticks: number): void;
/** Sets the living entity's current no damage ticks. */
setNoDamageTicks(ticks: number): void;
/** Sets the maximum amount of air the living entity can have, in ticks. */
setMaximumAir(ticks: number): void;
/** Sets the maximum health this entity can have.
 
 If the health of the entity is above the value provided it will be set
 to that value.
 
 Note: An entity with a health bar (Player, EnderDragon,
 Wither, etc...} will have their bar scaled accordingly. */
setMaxHealth(health: number): void;
/** Sets the operator status of this object */
setOp(value: boolean): void;
/** Sets the period of time (in ticks) before this entity can use a portal. */
setPortalCooldown(cooldown: number): void;
/** Sets the player identified as the killer of the living entity. */
setKiller(killer: org_bukkit_entity_Player | null): void | null;
/** Sets the value of the memory specified.
 
 Note that the value will not be persisted when the specific entity does
 not have that value by default. */
setMemory<T extends java_lang_Object>(memoryKey: org_bukkit_entity_memory_MemoryKey<T>, memoryValue: T | null): void | null;
/** Sets this entity's velocity */
setVelocity(velocity: org_bukkit_util_Vector): void;
/** Sets whether an entity will have AI.

 The entity will be completely unable to move if it has no AI. */
setAI(ai: boolean): void;
/** Sets whether gravity applies to this entity. */
setGravity(gravity: boolean): void;
/** Sets whether or not the entity gets persisted. */
setPersistent(persistent: boolean): void;
/** Sets whether or not the living entity can pick up items. */
setCanPickupItems(pickup: boolean): void;
/** Sets whether or not the living entity despawns when away from players
 or not. */
setRemoveWhenFarAway(remove: boolean): void;
/** Sets whether or not to display the mob's custom name client side. The
 name will be displayed above the mob similarly to a player.
 
 This value has no effect on players, they will always display their
 name. */
setCustomNameVisible(flag: boolean): void;
/** Sets whether the entity has a team colored (default: white) glow.

 nb: this refers to the 'Glowing' entity property, not whether a
 glowing potion effect is applied */
setGlowing(flag: boolean): void;
/** Sets whether the entity is invulnerable or not.
 
 When an entity is invulnerable it can only be damaged by players in
 creative mode. */
setInvulnerable(flag: boolean): void;
/** Sets whether the entity is silent or not.
 
 When an entity is silent it will not produce any sound. */
setSilent(flag: boolean): void;
/** Sets whether this mob is aware of its surroundings.

 Unaware mobs will still move if pushed, attacked, etc. but will not move
 or perform any actions on their own. Unaware mobs may also have other
 unspecified behaviours disabled, such as drowning. */
setAware(aware: boolean): void;
/** Teleports this entity to the given location. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(location: org_bukkit_Location): boolean;
/** Teleports this entity to the given location. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(location: org_bukkit_Location, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
/** Teleports this entity to the target Entity. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(destination: org_bukkit_entity_Entity): boolean;
/** Teleports this entity to the target Entity. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(destination: org_bukkit_entity_Entity, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
/** Temporarily adds a new PermissionAttachment with a single
 permission by name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean, ticks: number): org_bukkit_permissions_PermissionAttachment | null;
/** Temporarily adds a new empty PermissionAttachment to this
 object */
addAttachment(plugin: org_bukkit_plugin_Plugin, ticks: number): org_bukkit_permissions_PermissionAttachment | null;
/** Tests to see whether the implementing object contains the given
 metadata value in its metadata store. */
hasMetadata(metadataKey: string): boolean;
/** Whether or not this entity is using or charging an attack (Bow pulled back, drinking potion, eating food) */
isHandRaised(): boolean;
getCollidableExemptions(): java_util_Set<java_util_UUID>;
getEntitySpawnReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
getLocation(): org_bukkit_Location;
getLocation(arg0: org_bukkit_Location): org_bukkit_Location;
isInBubbleColumn(): boolean;
isInLava(): boolean;
isInRain(): boolean;
isInWater(): boolean;
isInWaterOrBubbleColumn(): boolean;
isInWaterOrRain(): boolean;
isInWaterOrRainOrBubbleColumn(): boolean;
spigot(): org_bukkit_command_CommandSender_Spigot;
spigot(): org_bukkit_entity_Entity_Spigot;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Map as java_util_Map } from 'java.util';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
/** A reputation score for a player on a villager. */

  export class Reputation extends java_lang_Object {
reputation: number;
/** Gets the reputation value for a specific ReputationType. */
getReputation(type: com_destroystokyo_paper_entity_villager_ReputationType): number;
/** Sets the reputation value for a specific ReputationType. */
setReputation(type: com_destroystokyo_paper_entity_villager_ReputationType, value: number): void;
constructor();
constructor(reputation: java_util_Map<com_destroystokyo_paper_entity_villager_ReputationType, java_lang_Integer>);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** A type of reputation gained with a Villager.
 
 All types but MAJOR_POSITIVE are shared to other villagers. */

  export class ReputationType extends java_lang_Enum<com_destroystokyo_paper_entity_villager_ReputationType> {
class: java_lang_Class<java_lang_Object>;
static MAJOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MAJOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static TRADING: com_destroystokyo_paper_entity_villager_ReputationType;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ReputationType c : ReputationType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_entity_villager_ReputationType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_entity_villager_ReputationType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { ClassDefiner as com_destroystokyo_paper_event_executor_asm_ClassDefiner } from 'com.destroystokyo.paper.event.executor.asm';

  export class SafeClassDefiner extends java_lang_Object implements com_destroystokyo_paper_event_executor_asm_ClassDefiner {

/** Description copied from interface: ClassDefinerDefine a class */
defineClass(parentLoader: java_lang_ClassLoader, name: string, data: number[]): java_lang_Class<java_lang_Object>;
/** Returns if the defined classes can bypass access checks */
isBypassAccessChecks(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { CommandSender as org_bukkit_command_CommandSender, Command as org_bukkit_command_Command } from 'org.bukkit.command';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
/** Thrown when a command throws an exception */

  export class ServerCommandException extends com_destroystokyo_paper_exception_ServerException {
arguments: string[];
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
command: org_bukkit_command_Command;
commandSender: org_bukkit_command_CommandSender;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
/** Gets the arguments which threw the exception for the command */
getArguments(): string[];
/** Gets the command sender which executed the command request */
getCommandSender(): org_bukkit_command_CommandSender;
/** Gets the command which threw the exception */
getCommand(): org_bukkit_command_Command;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable, command: org_bukkit_command_Command, commandSender: org_bukkit_command_CommandSender, arguments: string[]);
constructor(message: string, cause: java_lang_Throwable, command: org_bukkit_command_Command, commandSender: org_bukkit_command_CommandSender, arguments: string[]);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';
/** Wrapper exception for all exceptions that are thrown by the server. */

  export class ServerException extends java_lang_Exception {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable);
constructor(message: string);
constructor(message: string, cause: java_lang_Throwable);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Event as org_bukkit_event_Event, Listener as org_bukkit_event_Listener } from 'org.bukkit.event';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';
/** Exception thrown when a server event listener throws an exception */

  export class ServerEventException extends com_destroystokyo_paper_exception_ServerPluginException {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
event: org_bukkit_event_Event;
listener: org_bukkit_event_Listener;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
/** Gets the event which caused the exception */
getEvent(): org_bukkit_event_Event;
/** Gets the listener which threw the exception */
getListener(): org_bukkit_event_Listener;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin, listener: org_bukkit_event_Listener, event: org_bukkit_event_Event);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin, listener: org_bukkit_event_Listener, event: org_bukkit_event_Event);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
/** Wrapper exception for all cases to which a plugin can be immediately blamed for */

  export class ServerPluginException extends com_destroystokyo_paper_exception_ServerException {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
responsiblePlugin: org_bukkit_plugin_Plugin;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
/** Gets the plugin which is directly responsible for the exception being thrown */
getResponsiblePlugin(): org_bukkit_plugin_Plugin;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';
/** Wrapper exception for all exceptions that are thrown by the server. */

  export class ServerException extends java_lang_Exception {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable);
constructor(message: string);
constructor(message: string, cause: java_lang_Throwable);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Called whenever an exception is thrown in a recoverable section of the server. */

  export class ServerExceptionEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
exception: com_destroystokyo_paper_exception_ServerException;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
/** Gets the wrapped exception that was thrown. */
getException(): com_destroystokyo_paper_exception_ServerException;
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
constructor(exception: com_destroystokyo_paper_exception_ServerException);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
/** Thrown when the internal server throws a recoverable exception. */

  export class ServerInternalException extends com_destroystokyo_paper_exception_ServerException {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
static reportInternalException(cause: java_lang_Throwable): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable);
constructor(message: string);
constructor(message: string, cause: java_lang_Throwable);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';
/** Thrown whenever there is an exception with any enabling or disabling of plugins. */

  export class ServerPluginEnableDisableException extends com_destroystokyo_paper_exception_ServerPluginException {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
/** Wrapper exception for all cases to which a plugin can be immediately blamed for */

  export class ServerPluginException extends com_destroystokyo_paper_exception_ServerException {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
responsiblePlugin: org_bukkit_plugin_Plugin;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
/** Gets the plugin which is directly responsible for the exception being thrown */
getResponsiblePlugin(): org_bukkit_plugin_Plugin;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';
/** Thrown when an incoming plugin message channel throws an exception */

  export class ServerPluginMessageException extends com_destroystokyo_paper_exception_ServerPluginException {
cause: java_lang_Throwable;
channel: string;
class: java_lang_Class<java_lang_Object>;
data: number[];
localizedMessage: string;
message: string;
player: org_bukkit_entity_Player;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
/** Gets the channel to which the error occurred from recieving data from */
getChannel(): string;
/** Gets the data to which the error occurred from */
getData(): number[];
/** Gets the player which the plugin message causing the exception originated from */
getPlayer(): org_bukkit_entity_Player;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin, player: org_bukkit_entity_Player, channel: string, data: number[]);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin, player: org_bukkit_entity_Player, channel: string, data: number[]);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { BukkitTask as org_bukkit_scheduler_BukkitTask } from 'org.bukkit.scheduler';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';
/** Thrown when a plugin's scheduler fails with an exception */

  export class ServerSchedulerException extends com_destroystokyo_paper_exception_ServerPluginException {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
task: org_bukkit_scheduler_BukkitTask;
/** Gets the task which threw the exception */
getTask(): org_bukkit_scheduler_BukkitTask;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable, task: org_bukkit_scheduler_BukkitTask);
constructor(message: string, cause: java_lang_Throwable, task: org_bukkit_scheduler_BukkitTask);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Command as org_bukkit_command_Command, CommandSender as org_bukkit_command_CommandSender } from 'org.bukkit.command';
import { ServerCommandException as com_destroystokyo_paper_exception_ServerCommandException } from 'com.destroystokyo.paper.exception';
/** Called when a tab-complete request throws an exception */

  export class ServerTabCompleteException extends com_destroystokyo_paper_exception_ServerCommandException {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(cause: java_lang_Throwable, command: org_bukkit_command_Command, commandSender: org_bukkit_command_CommandSender, arguments: string[]);
constructor(message: string, cause: java_lang_Throwable, command: org_bukkit_command_Command, commandSender: org_bukkit_command_CommandSender, arguments: string[]);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Called when the server has finished ticking the main loop */

  export class ServerTickEndEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
tickDuration: number;
tickNumber: number;
timeRemaining: number;
/** Amount of nanoseconds remaining before the next tick should start.

 If this value is negative, then that means the server has exceeded the tick time limit and TPS has been lost.

 Method will continously return the updated time remaining value. (return value is not static) */
getTimeRemaining(): number;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getTickDuration(): number;
getTickNumber(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(tickNumber: number, tickDuration: number, timeRemaining: number);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ServerTickStartEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
tickNumber: number;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getTickNumber(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(tickNumber: number);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, SkeletonHorse as org_bukkit_entity_SkeletonHorse } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Event called when a player gets close to a skeleton horse and triggers the lightning trap */

  export class SkeletonHorseTrapEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_SkeletonHorse;
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
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_SkeletonHorse;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
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
constructor(horse: org_bukkit_entity_SkeletonHorse);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {


  export class SkinParts {
raw: number;
getRaw(): number;
hasCapeEnabled(): boolean;
hasHatsEnabled(): boolean;
hasJacketEnabled(): boolean;
hasLeftPantsEnabled(): boolean;
hasLeftSleeveEnabled(): boolean;
hasRightPantsEnabled(): boolean;
hasRightSleeveEnabled(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Fired when a Slime decides to change it's facing direction.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to change direction. */

  export class SlimeChangeDirectionEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entityType: org_bukkit_entity_EntityType;
eventName: string;
newYaw: number;
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
/** Get the new chosen yaw */
getNewYaw(): number;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Set the new chosen yaw */
setNewYaw(yaw: number): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(slime: org_bukkit_entity_Slime, yaw: number);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Slime decides to start pathfinding.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimePathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Slime;
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
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Entity;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Slime;
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
constructor(slime: org_bukkit_entity_Slime);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Slime decides to start pathfinding.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimePathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Slime;
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
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Entity;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Slime;
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
constructor(slime: org_bukkit_entity_Slime);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Slime as org_bukkit_entity_Slime, EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimeWanderEvent as com_destroystokyo_paper_event_entity_SlimeWanderEvent } from 'com.destroystokyo.paper.event.entity';
/** Fired when a Slime decides to start jumping while swimming in water/lava.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start jumping. */

  export class SlimeSwimEvent extends com_destroystokyo_paper_event_entity_SlimeWanderEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Slime;
entityType: org_bukkit_entity_EntityType;
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
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Entity;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Slime;
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
constructor(slime: org_bukkit_entity_Slime);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Fired when a Slime decides to start wandering.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimeWanderEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entityType: org_bukkit_entity_EntityType;
eventName: string;
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
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(slime: org_bukkit_entity_Slime);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Fired when a Slime decides to change direction to target a LivingEntity.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimeTargetLivingEntityEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entityType: org_bukkit_entity_EntityType;
eventName: string;
target: org_bukkit_entity_LivingEntity;
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
/** Get the targeted entity */
getTarget(): org_bukkit_entity_LivingEntity;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(slime: org_bukkit_entity_Slime, target: org_bukkit_entity_LivingEntity);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Fired when a Slime decides to start wandering.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimeWanderEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entityType: org_bukkit_entity_EntityType;
eventName: string;
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
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(slime: org_bukkit_entity_Slime);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {
import { Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';

  export class SneakyThrow extends java_lang_Object {

static sneaky(exception: java_lang_Throwable): void;
constructor();
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { EventExecutor as org_bukkit_plugin_EventExecutor } from 'org.bukkit.plugin';

  export class StaticMethodHandleEventExecutor extends java_lang_Object implements org_bukkit_plugin_EventExecutor {

execute(listener: org_bukkit_event_Listener, event: org_bukkit_event_Event): void;
constructor(eventClass: java_lang_Class<org_bukkit_event_Event>, m: java_lang_reflect_Method);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
import { NetworkClient as com_destroystokyo_paper_network_NetworkClient } from 'com.destroystokyo.paper.network';
/** Represents a client requesting the current status from the server (e.g. from
 the server list). */

  export class StatusClient implements com_destroystokyo_paper_network_NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress | null;
/** Returns the protocol version of the client. */
getProtocolVersion(): number;
/** Returns the socket address of the client. */
getAddress(): java_net_InetSocketAddress;
/** Returns the virtual host the client is connected to.

 The virtual host refers to the hostname/port the client used to
 connect to the server. */
getVirtualHost(): java_net_InetSocketAddress | null;
/** Returns whether the client is using an older version that doesn't
 support all of the features in PaperServerListPingEvent.

 For Vanilla, this returns true for all clients older than 1.7. */
isLegacy(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace } from 'org.bukkit.block';
import { Object as java_lang_Object } from 'java.lang';
/** Represents information about a targeted block */

  export class TargetBlockInfo extends java_lang_Object {
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
relativeBlock: org_bukkit_block_Block;
/** Get the block that is targeted */
getBlock(): org_bukkit_block_Block;
/** Get the relative Block to the targeted block on the side it is targeted at */
getRelativeBlock(): org_bukkit_block_Block;
/** Get the targeted BlockFace */
getBlockFace(): org_bukkit_block_BlockFace;
constructor(block: org_bukkit_block_Block, blockFace: org_bukkit_block_BlockFace);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.block.TargetBlockInfo' {
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FluidMode extends java_lang_Enum<com_destroystokyo_paper_block_TargetBlockInfo_FluidMode> {
class: java_lang_Class<java_lang_Object>;
static ALWAYS: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static NEVER: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static SOURCE_ONLY: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (TargetBlockInfo.FluidMode c : TargetBlockInfo.FluidMode.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object } from 'java.lang';
/** Represents information about a targeted entity */

  export class TargetEntityInfo extends java_lang_Object {
entity: org_bukkit_entity_Entity;
hitVector: org_bukkit_util_Vector;
/** Get the entity that is targeted */
getEntity(): org_bukkit_entity_Entity;
/** Get the position the entity is targeted at */
getHitVector(): org_bukkit_util_Vector;
constructor(entity: org_bukkit_entity_Entity, hitVec: org_bukkit_util_Vector);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { EntityType as org_bukkit_entity_EntityType, Egg as org_bukkit_entity_Egg } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Called when a thrown egg might hatch.
 
 This event fires for all thrown eggs that may hatch, players, dispensers, etc. */

  export class ThrownEggHatchEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
egg: org_bukkit_entity_Egg;
handlers: org_bukkit_event_HandlerList;
hatchingType: org_bukkit_entity_EntityType;
numHatches: number;
static handlerList: org_bukkit_event_HandlerList;
/** Change the number of mobs coming out of the hatched egg
 
 The boolean hatching will override this number. Ie. If hatching =
 false, this number will not matter */
setNumHatches(numHatches: number): void;
/** Change the type of mob being hatched by the egg */
setHatchingType(hatchType: org_bukkit_entity_EntityType): void;
/** Get the number of mob hatches from the egg. By default the number will
 be the number the server would've done
 
 7/8 chance of being 0
 31/256 ~= 1/8 chance to be 1
 1/256 chance to be 4
  */
getNumHatches(): number;
/** Get the type of the mob being hatched (EntityType.CHICKEN by default) */
getHatchingType(): org_bukkit_entity_EntityType;
/** Gets the egg involved in this event. */
getEgg(): org_bukkit_entity_Egg;
/** Gets whether the egg is hatching or not. Will be what the server
 would've done without interaction. */
isHatching(): boolean;
/** Sets whether the egg will hatch or not. */
setHatching(hatching: boolean): void;
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
constructor(egg: org_bukkit_entity_Egg, hatching: boolean, numHatches: number, hatchingType: org_bukkit_entity_EntityType);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a title to may be sent to a Player.

 A title can be sent without subtitle text. */

  export class Title extends java_lang_Object {
fadeIn: number;
fadeOut: number;
static DEFAULT_FADE_IN: number;
static DEFAULT_FADE_OUT: number;
static DEFAULT_STAY: number;
stay: number;
subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null;
title: net_md_5_bungee_api_chat_BaseComponent[];
/** Gets the number of ticks to fade in.

 The returned value is never negative. */
getFadeIn(): number;
/** Gets the number of ticks to fade out.

 The returned value is never negative. */
getFadeOut(): number;
/** Gets the number of ticks to stay.

 The returned value is never negative. */
getStay(): number;
/** Gets the text of this title */
getTitle(): net_md_5_bungee_api_chat_BaseComponent[];
/** Gets the text of this title's subtitle */
getSubtitle(): net_md_5_bungee_api_chat_BaseComponent[] | null;
static builder(): com_destroystokyo_paper_Title_Builder;
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[]);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: string);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent, subtitle: net_md_5_bungee_api_chat_BaseComponent | null);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[], subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: string, subtitle: string | null);
/** Creates a new title.

 It is recommended to the BaseComponent constrctors. */
constructor(title: string, subtitle: string | null, fadeIn: number, stay: number, fadeOut: number);
/** Creates a new title. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent, subtitle: net_md_5_bungee_api_chat_BaseComponent | null, fadeIn: number, stay: number, fadeOut: number);
/** Creates a new title. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[], subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null, fadeIn: number, stay: number, fadeOut: number);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.Title' {
import { Title as com_destroystokyo_paper_Title } from 'com.destroystokyo.paper';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { Object as java_lang_Object } from 'java.lang';
/** A builder for creating titles */

  export class Builder extends java_lang_Object {

/** Create a title based on the values in the builder. */
build(): com_destroystokyo_paper_Title;
/** Sets the number of ticks for the title to fade in */
fadeIn(fadeIn: number): com_destroystokyo_paper_Title_Builder;
/** Sets the number of ticks for the title to fade out. */
fadeOut(fadeOut: number): com_destroystokyo_paper_Title_Builder;
/** Sets the number of ticks for the title to stay. */
stay(stay: number): com_destroystokyo_paper_Title_Builder;
/** Sets the subtitle to the given text.

 It is recommended to the BaseComponent methods. */
subtitle(subtitle: string | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the subtitle to the given text. */
subtitle(subtitle: net_md_5_bungee_api_chat_BaseComponent | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the subtitle to the given text. */
subtitle(subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the title to the given text.

 It is recommended to the BaseComponent methods. */
title(title: string): com_destroystokyo_paper_Title_Builder;
/** Sets the title to the given text. */
title(title: net_md_5_bungee_api_chat_BaseComponent): com_destroystokyo_paper_Title_Builder;
/** Sets the title to the given text. */
title(title: net_md_5_bungee_api_chat_BaseComponent[]): com_destroystokyo_paper_Title_Builder;
constructor();
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';
/** Called when TNT block is about to turn into TNTPrimed
 
 Cancelling it won't turn TNT into TNTPrimed and leaves
 the TNT block as-is */

  export class TNTPrimeEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eventName: string;
handlers: org_bukkit_event_HandlerList | null;
primerEntity: org_bukkit_entity_Entity | null;
reason: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static handlerList: org_bukkit_event_HandlerList | null;
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
/** Gets the TNT prime reason */
getReason(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
/** Gets the TNT primer Entity.

 It's null if getReason() is TNTPrimeEvent.PrimeReason.REDSTONE or TNTPrimeEvent.PrimeReason.FIRE.
 It's not null if getReason() is TNTPrimeEvent.PrimeReason.ITEM or TNTPrimeEvent.PrimeReason.PROJECTILE
 It might be null if getReason() is TNTPrimeEvent.PrimeReason.EXPLOSION */
getPrimerEntity(): org_bukkit_entity_Entity | null;
/** Gets whether spawning TNTPrimed should be cancelled or not */
isCancelled(): boolean;
/** Sets whether to cancel spawning TNTPrimed or not */
setCancelled(cancel: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList | null;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList | null;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(theBlock: org_bukkit_block_Block, reason: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason, primerEntity: org_bukkit_entity_Entity | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.TNTPrimeEvent' {
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class PrimeReason extends java_lang_Enum<com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason> {
class: java_lang_Class<java_lang_Object>;
static EXPLOSION: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static FIRE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static ITEM: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static PROJECTILE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static REDSTONE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (TNTPrimeEvent.PrimeReason c : TNTPrimeEvent.PrimeReason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.TNTPrimeEvent' {
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class PrimeReason extends java_lang_Enum<com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason> {
class: java_lang_Class<java_lang_Object>;
static EXPLOSION: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static FIRE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static ITEM: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static PROJECTILE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static REDSTONE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (TNTPrimeEvent.PrimeReason c : TNTPrimeEvent.PrimeReason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Turtle as org_bukkit_entity_Turtle } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Turtle decides to go home */

  export class TurtleGoHomeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Turtle;
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
/** The turtle going home */
getEntity(): org_bukkit_entity_Entity;
/** The turtle going home */
getEntity(): org_bukkit_entity_Turtle;
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
constructor(turtle: org_bukkit_entity_Turtle);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Turtle as org_bukkit_entity_Turtle } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Turtle lays eggs */

  export class TurtleLayEggEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
eggCount: number;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Turtle;
eventName: string;
handlers: org_bukkit_event_HandlerList;
location: org_bukkit_Location;
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
/** Get the location where the eggs are being laid */
getLocation(): org_bukkit_Location;
/** Get the number of eggs being laid */
getEggCount(): number;
/** Set the number of eggs being laid */
setEggCount(eggCount: number): void;
/** The turtle laying the eggs */
getEntity(): org_bukkit_entity_Entity;
/** The turtle laying the eggs */
getEntity(): org_bukkit_entity_Turtle;
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
constructor(turtle: org_bukkit_entity_Turtle, location: org_bukkit_Location, eggCount: number);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Turtle as org_bukkit_entity_Turtle, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Turtle starts digging to lay eggs */

  export class TurtleStartDiggingEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Turtle;
eventName: string;
handlers: org_bukkit_event_HandlerList;
location: org_bukkit_Location;
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
/** Get the location where the turtle is digging */
getLocation(): org_bukkit_Location;
/** The turtle digging */
getEntity(): org_bukkit_entity_Entity;
/** The turtle digging */
getEntity(): org_bukkit_entity_Turtle;
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
constructor(turtle: org_bukkit_entity_Turtle, location: org_bukkit_Location);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { Unsafe as sun_misc_Unsafe } from 'sun.misc';
import { Object as java_lang_Object } from 'java.lang';

  export class UnsafeUtils extends java_lang_Object {
static unsafe: sun_misc_Unsafe | null;
static getUnsafe(): sun_misc_Unsafe | null;
static isUnsafeSupported(): boolean;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType, Goal as com_destroystokyo_paper_entity_ai_Goal } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Bee as org_bukkit_entity_Bee, Blaze as org_bukkit_entity_Blaze, Cat as org_bukkit_entity_Cat, Dolphin as org_bukkit_entity_Dolphin, Drowned as org_bukkit_entity_Drowned, Creature as org_bukkit_entity_Creature, Enderman as org_bukkit_entity_Enderman, Evoker as org_bukkit_entity_Evoker, Fish as org_bukkit_entity_Fish, Fox as org_bukkit_entity_Fox, Ghast as org_bukkit_entity_Ghast, Guardian as org_bukkit_entity_Guardian, Illager as org_bukkit_entity_Illager, Illusioner as org_bukkit_entity_Illusioner, Spellcaster as org_bukkit_entity_Spellcaster, Llama as org_bukkit_entity_Llama, TraderLlama as org_bukkit_entity_TraderLlama, Monster as org_bukkit_entity_Monster, Ocelot as org_bukkit_entity_Ocelot, Panda as org_bukkit_entity_Panda, Phantom as org_bukkit_entity_Phantom, PigZombie as org_bukkit_entity_PigZombie, PolarBear as org_bukkit_entity_PolarBear, PufferFish as org_bukkit_entity_PufferFish, Rabbit as org_bukkit_entity_Rabbit, Raider as org_bukkit_entity_Raider, Ravager as org_bukkit_entity_Ravager, Shulker as org_bukkit_entity_Shulker, Silverfish as org_bukkit_entity_Silverfish, Skeleton as org_bukkit_entity_Skeleton, Slime as org_bukkit_entity_Slime, Spider as org_bukkit_entity_Spider, Squid as org_bukkit_entity_Squid, Turtle as org_bukkit_entity_Turtle, Vex as org_bukkit_entity_Vex, WanderingTrader as org_bukkit_entity_WanderingTrader, Mob as org_bukkit_entity_Mob, Vindicator as org_bukkit_entity_Vindicator, Wither as org_bukkit_entity_Wither, Wolf as org_bukkit_entity_Wolf, Zombie as org_bukkit_entity_Zombie, Animals as org_bukkit_entity_Animals, IronGolem as org_bukkit_entity_IronGolem, Tameable as org_bukkit_entity_Tameable, SkeletonHorse as org_bukkit_entity_SkeletonHorse, AbstractVillager as org_bukkit_entity_AbstractVillager, Parrot as org_bukkit_entity_Parrot, Creeper as org_bukkit_entity_Creeper, AbstractHorse as org_bukkit_entity_AbstractHorse } from 'org.bukkit.entity';
import { RangedEntity as com_destroystokyo_paper_entity_RangedEntity } from 'com.destroystokyo.paper.entity';
/** Represents a vanilla goal. Plugins should never implement this.
 Generated by VanillaPathfinderTest in paper-server */

  export class VanillaGoal<T extends org_bukkit_entity_Mob> implements com_destroystokyo_paper_entity_ai_Goal<T> {
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
static ANGER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PigZombie>;
static ANGER_OTHER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PigZombie>;
static ARROW_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<com_destroystokyo_paper_entity_RangedEntity>;
static AVOID_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static BEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_BECOME_ANGRY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_ENTER_HIVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_GO_TO_HIVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_GO_TO_KNOWN_FLOWER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_GROW_CROP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_HURT_BY_OTHER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_LOCATE_HIVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_POLLINATE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_WANDER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wolf>;
static BLAZE_FIREBALL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Blaze>;
static BOW_SHOOT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static BREAK_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static BREATH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Animals>;
static CAT_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CAT_RELAX_ON_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CAT_SIT_ON_BED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CROSSBOW_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static DEFEND_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_IronGolem>;
static DOLPHIN_PLAY_WITH_ITEMS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DOLPHIN_SWIM_TO_TREASURE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DOLPHIN_SWIM_WITH_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DOOR_OPEN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static DROWNED_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_GOTO_BEACH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_GOTO_WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static DROWNED_SWIM_UP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_TRIDENT_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<com_destroystokyo_paper_entity_RangedEntity>;
static EAT_CARROTS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static EAT_TILE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static ENDERMAN_FREEZE_WHEN_LOOKED_AT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static ENDERMAN_PICKUP_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static ENDERMAN_PLACE_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static EVOKER_ATTACK_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Evoker>;
static EVOKER_CAST_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Evoker>;
static EVOKER_SUMMON_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Evoker>;
static EVOKER_WOLOLO_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Evoker>;
static FISH_SCHOOL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fish>;
static FISH_SWIM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fish>;
static FLEE_SUN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static FLOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static FOLLOW_BOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static FOLLOW_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static FOLLOW_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static FOLLOW_PARENT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Animals>;
static FOX_BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_DEFEND_TRUSTED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_EAT_BERRIES: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FACEPLANT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FLOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FOLLOW_PARENT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_LOOK_AT_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_PERCH_AND_SEARCH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_POUNCE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_SEARCH_FOR_ITEMS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_SEEK_SHELTER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_SLEEP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_STALK_PREY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_STROLL_THROUGH_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static GHAST_ATTACK_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GHAST_IDLE_MOVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GHAST_MOVE_TOWARDS_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GUARDIAN_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Guardian>;
static HORSE_TRAP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_SkeletonHorse>;
static HURT_BY_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static ILLUSIONER_BLINDNESS_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Illusioner>;
static ILLUSIONER_MIRROR_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Illusioner>;
static INTERACT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static JUMP_ON_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static KILLER_RABBIT_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static LEAP_AT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static LLAMATRADER_DEFENDED_WANDERING_TRADER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_TraderLlama>;
static LLAMA_ATTACK_WOLF: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
static LLAMA_FOLLOW: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
static LLAMA_HURT_BY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
static LONG_DISTANCE_PATROL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static LOOK_AT_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static LOOK_AT_TRADING_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_AbstractVillager>;
static MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static MOVE_THROUGH_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static MOVE_TOWARDS_RESTRICTION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static MOVE_TOWARDS_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static NEAREST_ATTACKABLE_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static NEAREST_ATTACKABLE_TARGET_WITCH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static NEAREST_HEALABLE_RAIDER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static NEAREST_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static OCELOT_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static OCELOT_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ocelot>;
static OCELOT_TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ocelot>;
static OFFER_FLOWER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_IronGolem>;
static OWNER_HURT_BY_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static OWNER_HURT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static PANDA_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_AVOID: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_HURT_BY_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_LIE_ON_BACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_LOOK_AT_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_ROLL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_SIT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_SNEEZE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static PERCH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Parrot>;
static PHANTOM_ATTACK_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static PHANTOM_ATTACK_STRATEGY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static PHANTOM_CIRCLE_AROUND_ANCHOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static PHANTOM_SWEEP_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static PLAYER_WHO_LOOKED_AT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static POLARBEAR_ATTACK_PLAYERS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_HURT_BY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_MELEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static PUFFERFISH_PUFF: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PufferFish>;
static RABBIT_AVOID_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static RABBIT_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static RAID: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_CELEBRATION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_HOLD_GROUND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_MOVE_THROUGH_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_OBTAIN_BANNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_OPEN_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Illager>;
static RANDOM_FLY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_LOOKAROUND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static RANDOM_STROLL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_STROLL_LAND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_SWIM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_TARGET_NON_TAMED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static RAVAGER_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ravager>;
static REMOVE_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RESTRICT_SUN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static SHULKER_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_DEFENSE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_NEAREST: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_PEEK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SILVERFISH_HIDE_IN_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Silverfish>;
static SILVERFISH_WAKE_OTHERS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Silverfish>;
static SIT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static SKELETON_MELEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Skeleton>;
static SLIME_IDLE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_NEAREST_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_RANDOM_DIRECTION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_RANDOM_JUMP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SPELLCASTER_CAST_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spellcaster>;
static SPIDER_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spider>;
static SPIDER_NEAREST_ATTACKABLE_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spider>;
static SQUID: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Squid>;
static SQUID_FLEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Squid>;
static STROLL_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static STROLL_VILLAGE_GOLEM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static SWELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creeper>;
static TAME: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_AbstractHorse>;
static TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static TEMPT_CHANCE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static TRADE_WITH_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_AbstractVillager>;
static TURTLE_BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_GOTO_WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_GO_HOME: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_LAY_EGG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_RANDOM_STROLL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_TRAVEL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static UNIVERSAL_ANGER_RESET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static USE_ITEM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static VEX_CHARGE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VEX_COPY_TARGET_OF_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VEX_RANDOM_MOVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VILLAGERTRADER_WANDER_TO_POSITION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_WanderingTrader>;
static VINDICATOR_BREAK_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static VINDICATOR_JOHNNY_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vindicator>;
static VINDICATOR_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vindicator>;
static WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static WATER_JUMP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static WITHER_DO_NOTHING: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wither>;
static WOLF_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wolf>;
static ZOMBIE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Zombie>;
static ZOMBIE_ATTACK_TURTLE_EGG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Zombie>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** A unique key that identifies this type of goal. Plugins should use their own namespace, not the minecraft
 namespace. Additionally, this key also specifies to what mobs this goal can be applied to */
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
/** Called each tick the goal is activated */
tick(): void;
/** Called when this goal gets activated */
start(): void;
/** Called when this goal gets stopped */
stop(): void;
/** Checks if this goal should be activated */
shouldActivate(): boolean;
/** Checks if this goal should stay active, defaults to shouldActivate() */
shouldStayActive(): boolean;
/** Returns a list of all applicable flags for this goal.

 This method is only called on construction. */
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {


  export class VersionFetcher {
cacheTime: number;
versionMessage: string;
/** Amount of time to cache results for in milliseconds
 
 Negative values will never cache. */
getCacheTime(): number;
/** Gets the version message to cache and show to command senders. Multiple messages can be sent using newlines (\n)
 in the string. The string will be split on these newlines and sent as individual messages.
 
 NOTE: This is run in a new thread separate from that of the command processing thread */
getVersionMessage(serverVersion: string): string;

  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.util.VersionFetcher' {
import { Object as java_lang_Object } from 'java.lang';
import { VersionFetcher as com_destroystokyo_paper_util_VersionFetcher } from 'com.destroystokyo.paper.util';

  export class DummyVersionFetcher extends java_lang_Object implements com_destroystokyo_paper_util_VersionFetcher {
cacheTime: number;
versionMessage: string;
/** Description copied from interface: VersionFetcherAmount of time to cache results for in milliseconds
 
 Negative values will never cache. */
getCacheTime(): number;
/** Description copied from interface: VersionFetcherGets the version message to cache and show to command senders. Multiple messages can be sent using newlines (\n)
 in the string. The string will be split on these newlines and sent as individual messages.
 
 NOTE: This is run in a new thread separate from that of the command processing thread */
getVersionMessage(serverVersion: string): string;
constructor();
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** This event is fired when whitelist is toggled */

  export class WhitelistToggleEvent extends org_bukkit_event_Event {
class: java_lang_Class<java_lang_Object>;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
/** Gets whether whitelist is going to be enabled or not */
isEnabled(): boolean;
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
constructor(enabled: boolean);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Entity as org_bukkit_entity_Entity, Witch as org_bukkit_entity_Witch } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a witch consumes the potion in their hand to buff themselves. */

  export class WitchConsumePotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Witch;
eventName: string;
handlers: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack | null;
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
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Witch;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Sets the potion to be consumed and applied to the witch. */
setPotion(potion: org_bukkit_inventory_ItemStack | null): void | null;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getPotion(): org_bukkit_inventory_ItemStack | null;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(witch: org_bukkit_entity_Witch, potion: org_bukkit_inventory_ItemStack | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Entity as org_bukkit_entity_Entity, Witch as org_bukkit_entity_Witch } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class WitchReadyPotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Witch;
eventName: string;
handlers: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack | null;
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
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Witch;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Fires thee event, returning the desired potion, or air of cancelled */
static process(witch: org_bukkit_entity_Witch, potion: org_bukkit_inventory_ItemStack | null): org_bukkit_inventory_ItemStack | null;
/** Sets the potion the which is going to hold and use */
setPotion(potion: org_bukkit_inventory_ItemStack | null): void | null;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getPotion(): org_bukkit_inventory_ItemStack | null;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(witch: org_bukkit_entity_Witch, potion: org_bukkit_inventory_ItemStack | null);
  }
}
//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Witch as org_bukkit_entity_Witch, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a witch throws a potion at a player */

  export class WitchThrowPotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
class: java_lang_Class<java_lang_Object>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Witch;
eventName: string;
handlers: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack | null;
static handlerList: org_bukkit_event_HandlerList;
target: org_bukkit_entity_LivingEntity;
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
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Witch;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Sets the potion to be thrown at a player */
setPotion(potion: org_bukkit_inventory_ItemStack | null): void | null;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getPotion(): org_bukkit_inventory_ItemStack | null;
getTarget(): org_bukkit_entity_LivingEntity;
hashCode(): number;
notify(): void;
notifyAll(): void;
static getHandlerList(): org_bukkit_event_HandlerList;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(witch: org_bukkit_entity_Witch, target: org_bukkit_entity_LivingEntity, potion: org_bukkit_inventory_ItemStack | null);
  }
}