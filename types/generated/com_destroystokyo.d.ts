//@ts-nocheck

declare module 'com.destroystokyo.paper' {


  export class Namespaced {
key: string;
namespace: string;
getKey(): string;
getNamespace(): string;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { ParticleBuilder as com_destroystokyo_paper_ParticleBuilder } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Location as org_bukkit_Location, World as org_bukkit_World, Particle as org_bukkit_Particle, Color as org_bukkit_Color } from 'org.bukkit';
import { List as java_util_List, Collection as java_util_Collection } from 'java.util';

  export class ParticleBuilder extends java_lang_Object {
particle: org_bukkit_Particle;
receivers: java_util_List<org_bukkit_entity_Player>;
source: org_bukkit_entity_Player;
location: org_bukkit_Location;
count: number;
offsetX: number;
offsetY: number;
offsetZ: number;
extra: number;
data: java_lang_Object;
force: boolean;
offset(arg0: number, arg1: number, arg2: number): com_destroystokyo_paper_ParticleBuilder;
count(): number;
count(arg0: number): com_destroystokyo_paper_ParticleBuilder;
data<T extends java_lang_Object>(): T;
data<T extends java_lang_Object>(arg0: T): com_destroystokyo_paper_ParticleBuilder;
source(): org_bukkit_entity_Player;
source(arg0: org_bukkit_entity_Player): com_destroystokyo_paper_ParticleBuilder;
location(): org_bukkit_Location;
location(arg0: org_bukkit_World, arg1: number, arg2: number, arg3: number): com_destroystokyo_paper_ParticleBuilder;
location(arg0: org_bukkit_Location): com_destroystokyo_paper_ParticleBuilder;
extra(arg0: number): com_destroystokyo_paper_ParticleBuilder;
extra(): number;
force(arg0: boolean): com_destroystokyo_paper_ParticleBuilder;
hasReceivers(): boolean;
allPlayers(): com_destroystokyo_paper_ParticleBuilder;
spawn(): com_destroystokyo_paper_ParticleBuilder;
receivers(): java_util_List<org_bukkit_entity_Player>;
receivers(arg0: number, arg1: number, arg2: boolean): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: number, arg1: boolean): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: number, arg1: number): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: java_util_Collection<org_bukkit_entity_Player>): com_destroystokyo_paper_ParticleBuilder;
receivers(...arg0: org_bukkit_entity_Player[]): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: java_util_List<org_bukkit_entity_Player>): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: number, arg1: number, arg2: number): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: number): com_destroystokyo_paper_ParticleBuilder;
particle(arg0: org_bukkit_Particle): com_destroystokyo_paper_ParticleBuilder;
particle(): org_bukkit_Particle;
offsetX(): number;
offsetY(): number;
offsetZ(): number;
color(arg0: number, arg1: number, arg2: number): com_destroystokyo_paper_ParticleBuilder;
color(arg0: org_bukkit_Color, arg1: number): com_destroystokyo_paper_ParticleBuilder;
color(arg0: org_bukkit_Color): com_destroystokyo_paper_ParticleBuilder;
constructor(arg0: org_bukkit_Particle);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Object as java_lang_Object } from 'java.lang';

  export class Title extends java_lang_Object {
static DEFAULT_FADE_IN: number;
static DEFAULT_STAY: number;
static DEFAULT_FADE_OUT: number;
title: net_md_5_bungee_api_chat_BaseComponent[];
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
fadeIn: number;
stay: number;
fadeOut: number;
fadeIn: number;
stay: number;
fadeOut: number;
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
title: net_md_5_bungee_api_chat_BaseComponent[];
static builder(): com_destroystokyo_paper_Title_Builder;
getFadeIn(): number;
getStay(): number;
getFadeOut(): number;
getSubtitle(): net_md_5_bungee_api_chat_BaseComponent[];
getTitle(): net_md_5_bungee_api_chat_BaseComponent[];
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent[], arg1: net_md_5_bungee_api_chat_BaseComponent[]);
constructor(arg0: string, arg1: string);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent, arg1: net_md_5_bungee_api_chat_BaseComponent, arg2: number, arg3: number, arg4: number);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent[], arg1: net_md_5_bungee_api_chat_BaseComponent[], arg2: number, arg3: number, arg4: number);
constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent[]);
constructor(arg0: string);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent, arg1: net_md_5_bungee_api_chat_BaseComponent);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.Title' {
import { Title as com_destroystokyo_paper_Title } from 'com.destroystokyo.paper';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { Object as java_lang_Object } from 'java.lang';

  export class Builder extends java_lang_Object {
title: net_md_5_bungee_api_chat_BaseComponent[];
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
fadeIn: number;
stay: number;
fadeOut: number;
build(): com_destroystokyo_paper_Title;
title(arg0: net_md_5_bungee_api_chat_BaseComponent): com_destroystokyo_paper_Title_Builder;
title(arg0: string): com_destroystokyo_paper_Title_Builder;
title(arg0: net_md_5_bungee_api_chat_BaseComponent[]): com_destroystokyo_paper_Title_Builder;
subtitle(arg0: string): com_destroystokyo_paper_Title_Builder;
subtitle(arg0: net_md_5_bungee_api_chat_BaseComponent[]): com_destroystokyo_paper_Title_Builder;
subtitle(arg0: net_md_5_bungee_api_chat_BaseComponent): com_destroystokyo_paper_Title_Builder;
fadeIn(arg0: number): com_destroystokyo_paper_Title_Builder;
stay(arg0: number): com_destroystokyo_paper_Title_Builder;
fadeOut(arg0: number): com_destroystokyo_paper_Title_Builder;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Set as java_util_Set, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';

  export class PlayerProfile {
name: string;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
id: java_util_UUID;
getName(): string;
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
setProperties(arg0: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
setProperty(arg0: com_destroystokyo_paper_profile_ProfileProperty): void;
setName(arg0: string): string;
getId(): java_util_UUID;
complete(arg0: boolean): boolean;
complete(arg0: boolean, arg1: boolean): boolean;
complete(): boolean;
isComplete(): boolean;
setId(arg0: java_util_UUID): java_util_UUID;
hasProperty(arg0: string): boolean;
removeProperty(arg0: string): boolean;
removeProperty(arg0: com_destroystokyo_paper_profile_ProfileProperty): boolean;
removeProperties(arg0: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): boolean;
clearProperties(): void;
completeFromCache(arg0: boolean): boolean;
completeFromCache(): boolean;
completeFromCache(arg0: boolean, arg1: boolean): boolean;
hasTextures(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Object as java_lang_Object } from 'java.lang';

  export class ProfileProperty extends java_lang_Object {
name: string;
value: string;
signature: string;
name: string;
value: string;
signature: string;
getName(): string;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getValue(): string;
getSignature(): string;
isSigned(): boolean;
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: string, arg2: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Class as java_lang_Class, Boolean as java_lang_Boolean, Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { ClientOption as com_destroystokyo_paper_ClientOption, SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';

  export class ClientOption<T extends java_lang_Object> extends java_lang_Object {
static SKIN_PARTS: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_SkinParts>;
static CHAT_COLORS_ENABLED: com_destroystokyo_paper_ClientOption<java_lang_Boolean>;
static CHAT_VISIBILITY: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_ClientOption_ChatVisibility>;
static LOCALE: com_destroystokyo_paper_ClientOption<string>;
static MAIN_HAND: com_destroystokyo_paper_ClientOption<org_bukkit_inventory_MainHand>;
static VIEW_DISTANCE: com_destroystokyo_paper_ClientOption<java_lang_Integer>;
type: java_lang_Class<T>;
type: java_lang_Class<T>;
getType(): java_lang_Class<T>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {


  export class SkinParts {
raw: number;
hasLeftSleeveEnabled(): boolean;
hasCapeEnabled(): boolean;
hasJacketEnabled(): boolean;
hasRightSleeveEnabled(): boolean;
hasLeftPantsEnabled(): boolean;
hasRightPantsEnabled(): boolean;
hasHatsEnabled(): boolean;
getRaw(): number;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.ClientOption' {
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChatVisibility extends java_lang_Enum<com_destroystokyo_paper_ClientOption_ChatVisibility> {
static FULL: com_destroystokyo_paper_ClientOption_ChatVisibility;
static SYSTEM: com_destroystokyo_paper_ClientOption_ChatVisibility;
static HIDDEN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static UNKNOWN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static $VALUES: com_destroystokyo_paper_ClientOption_ChatVisibility[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_ClientOption_ChatVisibility[];
static valueOf(arg0: string): com_destroystokyo_paper_ClientOption_ChatVisibility;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Map as java_util_Map } from 'java.util';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';

  export class Reputation extends java_lang_Object {
static REPUTATION_TYPES: com_destroystokyo_paper_entity_villager_ReputationType[];
reputation: number[];
reputation: number;
setReputation(arg0: com_destroystokyo_paper_entity_villager_ReputationType, arg1: number): void;
getReputation(arg0: com_destroystokyo_paper_entity_villager_ReputationType): number;
constructor(arg0: java_util_Map<com_destroystokyo_paper_entity_villager_ReputationType, java_lang_Integer>);
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ReputationType extends java_lang_Enum<com_destroystokyo_paper_entity_villager_ReputationType> {
static MAJOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MAJOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static TRADING: com_destroystokyo_paper_entity_villager_ReputationType;
static $VALUES: com_destroystokyo_paper_entity_villager_ReputationType[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_entity_villager_ReputationType[];
static valueOf(arg0: string): com_destroystokyo_paper_entity_villager_ReputationType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block.TargetBlockInfo' {
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FluidMode extends java_lang_Enum<com_destroystokyo_paper_block_TargetBlockInfo_FluidMode> {
static NEVER: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static SOURCE_ONLY: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static ALWAYS: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static $VALUES: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
static valueOf(arg0: string): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace } from 'org.bukkit.block';
import { Object as java_lang_Object } from 'java.lang';

  export class TargetBlockInfo extends java_lang_Object {
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
relativeBlock: org_bukkit_block_Block;
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
getRelativeBlock(): org_bukkit_block_Block;
getBlock(): org_bukkit_block_Block;
getBlockFace(): org_bukkit_block_BlockFace;
constructor(arg0: org_bukkit_block_Block, arg1: org_bukkit_block_BlockFace);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object } from 'java.lang';

  export class TargetEntityInfo extends java_lang_Object {
entity: org_bukkit_entity_Entity;
hitVec: org_bukkit_util_Vector;
hitVector: org_bukkit_util_Vector;
entity: org_bukkit_entity_Entity;
getHitVector(): org_bukkit_util_Vector;
getEntity(): org_bukkit_entity_Entity;
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_util_Vector);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {


  export class VersionFetcher {
cacheTime: number;
versionMessage: string;
getCacheTime(): number;
getVersionMessage(arg0: string): string;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Goal as com_destroystokyo_paper_entity_ai_Goal, GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Collection as java_util_Collection } from 'java.util';

  export class MobGoals {
goal: com_destroystokyo_paper_entity_ai_Goal<T>;
goals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
addGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: number, arg2: com_destroystokyo_paper_entity_ai_Goal<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalKey<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_Goal<T>): void;
removeAllGoals<T extends org_bukkit_entity_Mob>(arg0: T): void;
removeAllGoals<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): void;
hasGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalKey<T>): boolean;
getGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalKey<T>): com_destroystokyo_paper_entity_ai_Goal<T>;
getGoals<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalKey<T>): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(arg0: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoalsWithout<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(arg0: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoalsWithout<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';

  export class Goal<T extends org_bukkit_entity_Mob> {
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
start(): void;
stop(): void;
tick(): void;
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
shouldActivate(): boolean;
shouldStayActive(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { NamespacedKey as org_bukkit_NamespacedKey } from 'org.bukkit';
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';

  export class GoalKey<T extends org_bukkit_entity_Mob> extends java_lang_Object {
entityClass: java_lang_Class<T>;
namespacedKey: org_bukkit_NamespacedKey;
namespacedKey: org_bukkit_NamespacedKey;
entityClass: java_lang_Class<T>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static of<A extends org_bukkit_entity_Mob>(arg0: java_lang_Class<A>, arg1: org_bukkit_NamespacedKey): com_destroystokyo_paper_entity_ai_GoalKey<A>;
getNamespacedKey(): org_bukkit_NamespacedKey;
getEntityClass(): java_lang_Class<T>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { PathResult as com_destroystokyo_paper_entity_Pathfinder_PathResult } from 'com.destroystokyo.paper.entity.Pathfinder';
import { Location as org_bukkit_Location } from 'org.bukkit';

  export class Pathfinder {
entity: org_bukkit_entity_Mob;
currentPath: com_destroystokyo_paper_entity_Pathfinder_PathResult;
setCanPassDoors(arg0: boolean): void;
setCanFloat(arg0: boolean): void;
hasPath(): boolean;
findPath(arg0: org_bukkit_entity_LivingEntity): com_destroystokyo_paper_entity_Pathfinder_PathResult;
findPath(arg0: org_bukkit_Location): com_destroystokyo_paper_entity_Pathfinder_PathResult;
canOpenDoors(): boolean;
setCanOpenDoors(arg0: boolean): void;
canPassDoors(): boolean;
moveTo(arg0: com_destroystokyo_paper_entity_Pathfinder_PathResult, arg1: number): boolean;
moveTo(arg0: com_destroystokyo_paper_entity_Pathfinder_PathResult): boolean;
moveTo(arg0: org_bukkit_Location): boolean;
moveTo(arg0: org_bukkit_Location, arg1: number): boolean;
moveTo(arg0: org_bukkit_entity_LivingEntity): boolean;
moveTo(arg0: org_bukkit_entity_LivingEntity, arg1: number): boolean;
canFloat(): boolean;
getEntity(): org_bukkit_entity_Mob;
getCurrentPath(): com_destroystokyo_paper_entity_Pathfinder_PathResult;
stopPathfinding(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.Pathfinder' {
import { List as java_util_List } from 'java.util';
import { Location as org_bukkit_Location } from 'org.bukkit';

  export class PathResult {
points: java_util_List<org_bukkit_Location>;
nextPointIndex: number;
nextPoint: org_bukkit_Location;
finalPoint: org_bukkit_Location;
getPoints(): java_util_List<org_bukkit_Location>;
getNextPointIndex(): number;
getNextPoint(): org_bukkit_Location;
getFinalPoint(): org_bukkit_Location;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class GoalType extends java_lang_Enum<com_destroystokyo_paper_entity_ai_GoalType> {
static MOVE: com_destroystokyo_paper_entity_ai_GoalType;
static LOOK: com_destroystokyo_paper_entity_ai_GoalType;
static JUMP: com_destroystokyo_paper_entity_ai_GoalType;
static TARGET: com_destroystokyo_paper_entity_ai_GoalType;
static UNKNOWN_BEHAVIOR: com_destroystokyo_paper_entity_ai_GoalType;
static $VALUES: com_destroystokyo_paper_entity_ai_GoalType[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_entity_ai_GoalType[];
static valueOf(arg0: string): com_destroystokyo_paper_entity_ai_GoalType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';

  export class NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress;
getAddress(): java_net_InetSocketAddress;
getProtocolVersion(): number;
getVirtualHost(): java_net_InetSocketAddress;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { HeightmapType as com_destroystokyo_paper_HeightmapType } from 'com.destroystokyo.paper';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class HeightmapType extends java_lang_Enum<com_destroystokyo_paper_HeightmapType> {
static LIGHT_BLOCKING: com_destroystokyo_paper_HeightmapType;
static ANY: com_destroystokyo_paper_HeightmapType;
static SOLID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID_NO_LEAVES: com_destroystokyo_paper_HeightmapType;
static $VALUES: com_destroystokyo_paper_HeightmapType[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_HeightmapType[];
static valueOf(arg0: string): com_destroystokyo_paper_HeightmapType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Sound as org_bukkit_Sound } from 'org.bukkit';

  export class BlockSoundGroup {
stepSound: org_bukkit_Sound;
breakSound: org_bukkit_Sound;
hitSound: org_bukkit_Sound;
placeSound: org_bukkit_Sound;
fallSound: org_bukkit_Sound;
getStepSound(): org_bukkit_Sound;
getBreakSound(): org_bukkit_Sound;
getHitSound(): org_bukkit_Sound;
getPlaceSound(): org_bukkit_Sound;
getFallSound(): org_bukkit_Sound;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { Inventory as org_bukkit_inventory_Inventory, AnvilInventory as org_bukkit_inventory_AnvilInventory, InventoryView as org_bukkit_inventory_InventoryView } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { InventoryEvent as org_bukkit_event_inventory_InventoryEvent } from 'org.bukkit.event.inventory';

  export class AnvilDamagedEvent extends org_bukkit_event_inventory_InventoryEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancel: boolean;
damageState: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
handlers: org_bukkit_event_HandlerList;
inventory: org_bukkit_inventory_Inventory;
inventory: org_bukkit_inventory_AnvilInventory;
static handlerList: org_bukkit_event_HandlerList;
damageState: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setDamageState(arg0: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState): void;
isBreaking(): boolean;
setBreaking(arg0: boolean): void;
getInventory(): org_bukkit_inventory_Inventory;
getInventory(): org_bukkit_inventory_AnvilInventory;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getDamageState(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
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
constructor(arg0: org_bukkit_inventory_InventoryView, arg1: org_bukkit_block_data_BlockData);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.AnvilDamagedEvent' {
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class DamageState extends java_lang_Enum<com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState> {
static FULL: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static CHIPPED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static DAMAGED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static BROKEN: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
material: org_bukkit_Material;
static $VALUES: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
material: org_bukkit_Material;
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
static valueOf(arg0: string): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static getState(arg0: org_bukkit_Material): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static getState(arg0: org_bukkit_block_data_BlockData): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
getMaterial(): org_bukkit_Material;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.AnvilDamagedEvent' {
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class DamageState extends java_lang_Enum<com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState> {
static FULL: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static CHIPPED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static DAMAGED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static BROKEN: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
material: org_bukkit_Material;
static $VALUES: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
material: org_bukkit_Material;
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
static valueOf(arg0: string): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static getState(arg0: org_bukkit_Material): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static getState(arg0: org_bukkit_block_data_BlockData): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
getMaterial(): org_bukkit_Material;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.inventory.meta' {
import { ItemMeta as org_bukkit_inventory_meta_ItemMeta } from 'org.bukkit.inventory.meta';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { List as java_util_List, Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { Enchantment as org_bukkit_enchantments_Enchantment } from 'org.bukkit.enchantments';
import { Attribute as org_bukkit_attribute_Attribute, AttributeModifier as org_bukkit_attribute_AttributeModifier } from 'org.bukkit.attribute';
import { EquipmentSlot as org_bukkit_inventory_EquipmentSlot, ItemFlag as org_bukkit_inventory_ItemFlag } from 'org.bukkit.inventory';
import { Multimap as com_google_common_collect_Multimap } from 'com.google.common.collect';
import { CustomItemTagContainer as org_bukkit_inventory_meta_tags_CustomItemTagContainer } from 'org.bukkit.inventory.meta.tags';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Namespaced as com_destroystokyo_paper_Namespaced } from 'com.destroystokyo.paper';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';

  export class ArmorStandMeta implements org_bukkit_inventory_meta_ItemMeta {
displayName: string;
localizedName: string;
displayNameComponent: net_md_5_bungee_api_chat_BaseComponent[];
loreComponents: java_util_List<net_md_5_bungee_api_chat_BaseComponent[]>;
customModelData: number;
attributeModifiers: java_util_Collection<org_bukkit_attribute_AttributeModifier>;
attributeModifiers: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>;
attributeModifiers: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>;
customTagContainer: org_bukkit_inventory_meta_tags_CustomItemTagContainer;
canDestroy: java_util_Set<org_bukkit_Material>;
canPlaceOn: java_util_Set<org_bukkit_Material>;
destroyableKeys: java_util_Set<com_destroystokyo_paper_Namespaced>;
placeableKeys: java_util_Set<com_destroystokyo_paper_Namespaced>;
enchantLevel: number;
enchants: java_util_Map<org_bukkit_enchantments_Enchantment, java_lang_Integer>;
lore: java_util_List<string>;
itemFlags: java_util_Set<org_bukkit_inventory_ItemFlag>;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
hasNoBasePlate(): boolean;
shouldShowArms(): boolean;
setNoBasePlate(arg0: boolean): void;
setShowArms(arg0: boolean): void;
setMarker(arg0: boolean): void;
isInvisible(): boolean;
setInvisible(arg0: boolean): void;
isMarker(): boolean;
isSmall(): boolean;
setSmall(arg0: boolean): void;
clone(): org_bukkit_inventory_meta_ItemMeta;
getDisplayName(): string;
getLocalizedName(): string;
hasDisplayName(): boolean;
getDisplayNameComponent(): net_md_5_bungee_api_chat_BaseComponent[];
setDisplayNameComponent(arg0: net_md_5_bungee_api_chat_BaseComponent[]): void;
hasLocalizedName(): boolean;
setLocalizedName(arg0: string): void;
getLoreComponents(): java_util_List<net_md_5_bungee_api_chat_BaseComponent[]>;
setLoreComponents(arg0: java_util_List<net_md_5_bungee_api_chat_BaseComponent[]>): void;
hasCustomModelData(): boolean;
getCustomModelData(): number;
setCustomModelData(arg0: java_lang_Integer): void;
hasEnchants(): boolean;
hasConflictingEnchant(arg0: org_bukkit_enchantments_Enchantment): boolean;
isUnbreakable(): boolean;
setUnbreakable(arg0: boolean): void;
hasAttributeModifiers(): boolean;
getAttributeModifiers(arg0: org_bukkit_attribute_Attribute): java_util_Collection<org_bukkit_attribute_AttributeModifier>;
getAttributeModifiers(arg0: org_bukkit_inventory_EquipmentSlot): com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>;
getAttributeModifiers(): com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>;
addAttributeModifier(arg0: org_bukkit_attribute_Attribute, arg1: org_bukkit_attribute_AttributeModifier): boolean;
setAttributeModifiers(arg0: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>): void;
removeAttributeModifier(arg0: org_bukkit_attribute_Attribute, arg1: org_bukkit_attribute_AttributeModifier): boolean;
removeAttributeModifier(arg0: org_bukkit_inventory_EquipmentSlot): boolean;
removeAttributeModifier(arg0: org_bukkit_attribute_Attribute): boolean;
getCustomTagContainer(): org_bukkit_inventory_meta_tags_CustomItemTagContainer;
getCanDestroy(): java_util_Set<org_bukkit_Material>;
setCanDestroy(arg0: java_util_Set<org_bukkit_Material>): void;
getCanPlaceOn(): java_util_Set<org_bukkit_Material>;
setCanPlaceOn(arg0: java_util_Set<org_bukkit_Material>): void;
getDestroyableKeys(): java_util_Set<com_destroystokyo_paper_Namespaced>;
setDestroyableKeys(arg0: java_util_Collection<com_destroystokyo_paper_Namespaced>): void;
getPlaceableKeys(): java_util_Set<com_destroystokyo_paper_Namespaced>;
setPlaceableKeys(arg0: java_util_Collection<com_destroystokyo_paper_Namespaced>): void;
hasPlaceableKeys(): boolean;
hasDestroyableKeys(): boolean;
setVersion(arg0: number): void;
hasEnchant(arg0: org_bukkit_enchantments_Enchantment): boolean;
getEnchantLevel(arg0: org_bukkit_enchantments_Enchantment): number;
getEnchants(): java_util_Map<org_bukkit_enchantments_Enchantment, java_lang_Integer>;
addEnchant(arg0: org_bukkit_enchantments_Enchantment, arg1: number, arg2: boolean): boolean;
removeEnchant(arg0: org_bukkit_enchantments_Enchantment): boolean;
getLore(): java_util_List<string>;
hasLore(): boolean;
setLore(arg0: java_util_List<string>): void;
addItemFlags(...arg0: org_bukkit_inventory_ItemFlag[]): void;
removeItemFlags(...arg0: org_bukkit_inventory_ItemFlag[]): void;
getItemFlags(): java_util_Set<org_bukkit_inventory_ItemFlag>;
hasItemFlag(arg0: org_bukkit_inventory_ItemFlag): boolean;
setDisplayName(arg0: string): void;
serialize(): java_util_Map<string, java_lang_Object>;
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';
import { Object as java_lang_Object } from 'java.lang';

  export class ASMEventExecutorGenerator extends java_lang_Object {
static NEXT_ID: java_util_concurrent_atomic_AtomicInteger;
static generateEventExecutor(arg0: java_lang_reflect_Method, arg1: string): number[];
static generateName(): string;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { List as java_util_List } from 'java.util';
import { CommandSender as org_bukkit_command_CommandSender } from 'org.bukkit.command';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class AsyncTabCompleteEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
sender: org_bukkit_command_CommandSender;
buffer: string;
isCommand: boolean;
loc: org_bukkit_Location;
completions: java_util_List<string>;
cancelled: boolean;
handled: boolean;
fireSyncHandler: boolean;
static handlers: org_bukkit_event_HandlerList;
location: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
buffer: string;
completions: java_util_List<string>;
static handlerList: org_bukkit_event_HandlerList;
sender: org_bukkit_command_CommandSender;
class: java_lang_Class<java_lang_Object>;
getLocation(): org_bukkit_Location;
getHandlers(): org_bukkit_event_HandlerList;
getBuffer(): string;
isCancelled(): boolean;
isCommand(): boolean;
setCompletions(arg0: java_util_List<string>): void;
getCompletions(): java_util_List<string>;
setHandled(arg0: boolean): void;
isHandled(): boolean;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getSender(): org_bukkit_command_CommandSender;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_command_CommandSender, arg1: java_util_List<string>, arg2: string, arg3: boolean, arg4: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { PotionEffect as org_bukkit_potion_PotionEffect } from 'org.bukkit.potion';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';

  export class BeaconEffectEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
effect: org_bukkit_potion_PotionEffect;
player: org_bukkit_entity_Player;
primary: boolean;
handlers: org_bukkit_event_HandlerList;
effect: org_bukkit_potion_PotionEffect;
player: org_bukkit_entity_Player;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEffect(): org_bukkit_potion_PotionEffect;
getPlayer(): org_bukkit_entity_Player;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
setEffect(arg0: org_bukkit_potion_PotionEffect): void;
isPrimary(): boolean;
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
constructor(arg0: org_bukkit_block_Block, arg1: org_bukkit_potion_PotionEffect, arg2: org_bukkit_entity_Player, arg3: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';

  export class BlockDestroyEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
newState: org_bukkit_block_data_BlockData;
willDrop: boolean;
playEffect: boolean;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
newState: org_bukkit_block_data_BlockData;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
willDrop(): boolean;
setPlayEffect(arg0: boolean): void;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
playEffect(): boolean;
getNewState(): org_bukkit_block_data_BlockData;
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
constructor(arg0: org_bukkit_block_Block, arg1: org_bukkit_block_data_BlockData, arg2: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Sound as org_bukkit_Sound } from 'org.bukkit';

  export class BlockSoundGroup {
stepSound: org_bukkit_Sound;
breakSound: org_bukkit_Sound;
hitSound: org_bukkit_Sound;
placeSound: org_bukkit_Sound;
fallSound: org_bukkit_Sound;
getStepSound(): org_bukkit_Sound;
getBreakSound(): org_bukkit_Sound;
getHitSound(): org_bukkit_Sound;
getPlaceSound(): org_bukkit_Sound;
getFallSound(): org_bukkit_Sound;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { LongAdder as java_util_concurrent_atomic_LongAdder } from 'java.util.concurrent.atomic';
import { ConcurrentLinkedQueue as java_util_concurrent_ConcurrentLinkedQueue } from 'java.util.concurrent';

  export class CachedSizeConcurrentLinkedQueue<E extends java_lang_Object> extends java_util_concurrent_ConcurrentLinkedQueue<E> {
cachedSize: java_util_concurrent_atomic_LongAdder;
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
size(): number;
poll(): E;
remove(): E;
element(): E;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
parallelStream(): java_util_stream_Stream<E>;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';

  export class LootableBlockInventory implements com_destroystokyo_paper_loottable_LootableInventory {
block: org_bukkit_block_Block;
lastFilled: number;
lastLooted: java_lang_Long;
lastLooted: java_lang_Long;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable;
getBlock(): org_bukkit_block_Block;
isRefillEnabled(): boolean;
hasBeenFilled(): boolean;
getLastFilled(): number;
hasPlayerLooted(arg0: java_util_UUID): boolean;
hasPlayerLooted(arg0: org_bukkit_entity_Player): boolean;
getLastLooted(arg0: java_util_UUID): java_lang_Long;
getLastLooted(arg0: org_bukkit_entity_Player): java_lang_Long;
setHasPlayerLooted(arg0: java_util_UUID, arg1: boolean): boolean;
setHasPlayerLooted(arg0: org_bukkit_entity_Player, arg1: boolean): boolean;
hasPendingRefill(): boolean;
getNextRefill(): number;
setNextRefill(arg0: number): number;
setSeed(arg0: number): void;
getSeed(): number;
getLootTable(): org_bukkit_loot_LootTable;
setLootTable(arg0: org_bukkit_loot_LootTable): void;
setLootTable(arg0: org_bukkit_loot_LootTable, arg1: number): void;
hasLootTable(): boolean;
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable, Lootable as org_bukkit_loot_Lootable } from 'org.bukkit.loot';

  export class LootableInventory implements org_bukkit_loot_Lootable {
lastFilled: number;
lastLooted: java_lang_Long;
lastLooted: java_lang_Long;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable;
isRefillEnabled(): boolean;
hasBeenFilled(): boolean;
getLastFilled(): number;
hasPlayerLooted(arg0: java_util_UUID): boolean;
hasPlayerLooted(arg0: org_bukkit_entity_Player): boolean;
getLastLooted(arg0: java_util_UUID): java_lang_Long;
getLastLooted(arg0: org_bukkit_entity_Player): java_lang_Long;
setHasPlayerLooted(arg0: java_util_UUID, arg1: boolean): boolean;
setHasPlayerLooted(arg0: org_bukkit_entity_Player, arg1: boolean): boolean;
hasPendingRefill(): boolean;
getNextRefill(): number;
setNextRefill(arg0: number): number;
setSeed(arg0: number): void;
getSeed(): number;
getLootTable(): org_bukkit_loot_LootTable;
setLootTable(arg0: org_bukkit_loot_LootTable): void;
setLootTable(arg0: org_bukkit_loot_LootTable, arg1: number): void;
hasLootTable(): boolean;
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { ClassDefiner as com_destroystokyo_paper_event_executor_asm_ClassDefiner } from 'com.destroystokyo.paper.event.executor.asm';
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class ClassDefiner {
static instance: com_destroystokyo_paper_event_executor_asm_ClassDefiner;
static getInstance(): com_destroystokyo_paper_event_executor_asm_ClassDefiner;
defineClass(arg0: java_lang_ClassLoader, arg1: string, arg2: number[]): java_lang_Class<java_lang_Object>;
isBypassAccessChecks(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Class as java_lang_Class, Boolean as java_lang_Boolean, Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { ClientOption as com_destroystokyo_paper_ClientOption, SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';

  export class ClientOption<T extends java_lang_Object> extends java_lang_Object {
static SKIN_PARTS: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_SkinParts>;
static CHAT_COLORS_ENABLED: com_destroystokyo_paper_ClientOption<java_lang_Boolean>;
static CHAT_VISIBILITY: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_ClientOption_ChatVisibility>;
static LOCALE: com_destroystokyo_paper_ClientOption<string>;
static MAIN_HAND: com_destroystokyo_paper_ClientOption<org_bukkit_inventory_MainHand>;
static VIEW_DISTANCE: com_destroystokyo_paper_ClientOption<java_lang_Integer>;
type: java_lang_Class<T>;
type: java_lang_Class<T>;
getType(): java_lang_Class<T>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.ClientOption' {
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChatVisibility extends java_lang_Enum<com_destroystokyo_paper_ClientOption_ChatVisibility> {
static FULL: com_destroystokyo_paper_ClientOption_ChatVisibility;
static SYSTEM: com_destroystokyo_paper_ClientOption_ChatVisibility;
static HIDDEN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static UNKNOWN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static $VALUES: com_destroystokyo_paper_ClientOption_ChatVisibility[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_ClientOption_ChatVisibility[];
static valueOf(arg0: string): com_destroystokyo_paper_ClientOption_ChatVisibility;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Creeper as org_bukkit_entity_Creeper } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class CreeperIgniteEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
canceled: boolean;
ignited: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Creeper;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Creeper;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
isIgnited(): boolean;
setIgnited(arg0: boolean): void;
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
constructor(arg0: org_bukkit_entity_Creeper, arg1: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player, EntityType as org_bukkit_entity_EntityType, Pose as org_bukkit_entity_Pose, Projectile as org_bukkit_entity_Projectile, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Pathfinder as com_destroystokyo_paper_entity_Pathfinder, TargetEntityInfo as com_destroystokyo_paper_entity_TargetEntityInfo } from 'com.destroystokyo.paper.entity';
import { MemoryKey as org_bukkit_entity_memory_MemoryKey } from 'org.bukkit.entity.memory';
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class } from 'java.lang';
import { EntityEquipment as org_bukkit_inventory_EntityEquipment, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { RayTraceResult as org_bukkit_util_RayTraceResult, BoundingBox as org_bukkit_util_BoundingBox, Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { FluidCollisionMode as org_bukkit_FluidCollisionMode, Location as org_bukkit_Location, Material as org_bukkit_Material, Server as org_bukkit_Server, World as org_bukkit_World, Chunk as org_bukkit_Chunk, EntityEffect as org_bukkit_EntityEffect } from 'org.bukkit';
import { Set as java_util_Set, List as java_util_List, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace, PistonMoveReaction as org_bukkit_block_PistonMoveReaction } from 'org.bukkit.block';
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { TargetBlockInfo as com_destroystokyo_paper_block_TargetBlockInfo } from 'com.destroystokyo.paper.block';
import { PotionEffect as org_bukkit_potion_PotionEffect, PotionEffectType as org_bukkit_potion_PotionEffectType } from 'org.bukkit.potion';
import { Attribute as org_bukkit_attribute_Attribute, AttributeInstance as org_bukkit_attribute_AttributeInstance } from 'org.bukkit.attribute';
import { Spigot as org_bukkit_command_CommandSender_Spigot } from 'org.bukkit.command.CommandSender';
import { Spigot as org_bukkit_entity_Entity_Spigot } from 'org.bukkit.entity.Entity';
import { TeleportCause as org_bukkit_event_player_PlayerTeleportEvent_TeleportCause } from 'org.bukkit.event.player.PlayerTeleportEvent';
import { CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';
import { EntityDamageEvent as org_bukkit_event_entity_EntityDamageEvent } from 'org.bukkit.event.entity';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { MetadataValue as org_bukkit_metadata_MetadataValue } from 'org.bukkit.metadata';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Permission as org_bukkit_permissions_Permission, PermissionAttachment as org_bukkit_permissions_PermissionAttachment, PermissionAttachmentInfo as org_bukkit_permissions_PermissionAttachmentInfo } from 'org.bukkit.permissions';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';

  export class RangedEntity implements org_bukkit_entity_Mob {
target: org_bukkit_entity_LivingEntity;
pathfinder: com_destroystokyo_paper_entity_Pathfinder;
equipment: org_bukkit_inventory_EntityEquipment;
activeItem: org_bukkit_inventory_ItemStack;
itemUseRemainingTime: number;
handRaisedTime: number;
shieldBlockingDelay: number;
targetEntity: org_bukkit_entity_Entity;
targetEntity: org_bukkit_entity_Entity;
leashHolder: org_bukkit_entity_Entity;
eyeHeight: number;
eyeHeight: number;
eyeLocation: org_bukkit_Location;
lineOfSight: java_util_List<org_bukkit_block_Block>;
targetBlock: org_bukkit_block_Block;
targetBlock: org_bukkit_block_Block;
targetBlock: org_bukkit_block_Block;
targetBlockFace: org_bukkit_block_BlockFace;
targetBlockFace: org_bukkit_block_BlockFace;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo;
lastTwoTargetBlocks: java_util_List<org_bukkit_block_Block>;
targetBlockExact: org_bukkit_block_Block;
targetBlockExact: org_bukkit_block_Block;
remainingAir: number;
maximumAir: number;
maximumNoDamageTicks: number;
lastDamage: number;
noDamageTicks: number;
killer: org_bukkit_entity_Player;
potionEffect: org_bukkit_potion_PotionEffect;
activePotionEffects: java_util_Collection<org_bukkit_potion_PotionEffect>;
removeWhenFarAway: boolean;
canPickupItems: boolean;
collidableExemptions: java_util_Set<java_util_UUID>;
memory: T;
arrowsStuck: number;
attribute: org_bukkit_attribute_AttributeInstance;
health: number;
maxHealth: number;
absorptionAmount: number;
location: org_bukkit_Location;
location: org_bukkit_Location;
type: org_bukkit_entity_EntityType;
origin: org_bukkit_Location;
width: number;
height: number;
server: org_bukkit_Server;
world: org_bukkit_World;
boundingBox: org_bukkit_util_BoundingBox;
uniqueId: java_util_UUID;
chunk: org_bukkit_Chunk;
pistonMoveReaction: org_bukkit_block_PistonMoveReaction;
fireTicks: number;
maxFireTicks: number;
scoreboardTags: java_util_Set<string>;
pose: org_bukkit_entity_Pose;
vehicle: org_bukkit_entity_Entity;
passengers: java_util_List<org_bukkit_entity_Entity>;
facing: org_bukkit_block_BlockFace;
velocity: org_bukkit_util_Vector;
nearbyEntities: java_util_List<org_bukkit_entity_Entity>;
entityId: number;
passenger: org_bukkit_entity_Entity;
fallDistance: number;
lastDamageCause: org_bukkit_event_entity_EntityDamageEvent;
ticksLived: number;
portalCooldown: number;
entitySpawnReason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
metadata: java_util_List<org_bukkit_metadata_MetadataValue>;
name: string;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
customName: string;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
seed: number;
lootTable: org_bukkit_loot_LootTable;
isChargingAttack(): boolean;
rangedAttack(arg0: org_bukkit_entity_LivingEntity, arg1: number): void;
setChargingAttack(arg0: boolean): void;
getTarget(): org_bukkit_entity_LivingEntity;
setTarget(arg0: org_bukkit_entity_LivingEntity): void;
isInDaylight(): boolean;
getPathfinder(): com_destroystokyo_paper_entity_Pathfinder;
setAware(arg0: boolean): void;
isAware(): boolean;
setMemory<T extends java_lang_Object>(arg0: org_bukkit_entity_memory_MemoryKey<T>, arg1: T): void;
getEquipment(): org_bukkit_inventory_EntityEquipment;
attack(arg0: org_bukkit_entity_Entity): void;
isSleeping(): boolean;
isSwimming(): boolean;
setSwimming(arg0: boolean): void;
isCollidable(): boolean;
isGliding(): boolean;
isRiptiding(): boolean;
setJumping(arg0: boolean): void;
hasLineOfSight(arg0: org_bukkit_entity_Entity): boolean;
isHandRaised(): boolean;
getActiveItem(): org_bukkit_inventory_ItemStack;
getItemUseRemainingTime(): number;
getHandRaisedTime(): number;
getShieldBlockingDelay(): number;
getTargetEntity(arg0: number): org_bukkit_entity_Entity;
getTargetEntity(arg0: number, arg1: boolean): org_bukkit_entity_Entity;
setShieldBlockingDelay(arg0: number): void;
rayTraceBlocks(arg0: number): org_bukkit_util_RayTraceResult;
rayTraceBlocks(arg0: number, arg1: org_bukkit_FluidCollisionMode): org_bukkit_util_RayTraceResult;
getLeashHolder(): org_bukkit_entity_Entity;
setLeashHolder(arg0: org_bukkit_entity_Entity): boolean;
isLeashed(): boolean;
getEyeHeight(): number;
getEyeHeight(arg0: boolean): number;
getEyeLocation(): org_bukkit_Location;
getLineOfSight(arg0: java_util_Set<org_bukkit_Material>, arg1: number): java_util_List<org_bukkit_block_Block>;
getTargetBlock(arg0: number): org_bukkit_block_Block;
getTargetBlock(arg0: number, arg1: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_Block;
getTargetBlock(arg0: java_util_Set<org_bukkit_Material>, arg1: number): org_bukkit_block_Block;
getTargetBlockFace(arg0: number, arg1: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_BlockFace;
getTargetBlockFace(arg0: number): org_bukkit_block_BlockFace;
getTargetBlockInfo(arg0: number, arg1: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): com_destroystokyo_paper_block_TargetBlockInfo;
getTargetBlockInfo(arg0: number): com_destroystokyo_paper_block_TargetBlockInfo;
getTargetEntityInfo(arg0: number, arg1: boolean): com_destroystokyo_paper_entity_TargetEntityInfo;
getTargetEntityInfo(arg0: number): com_destroystokyo_paper_entity_TargetEntityInfo;
getLastTwoTargetBlocks(arg0: java_util_Set<org_bukkit_Material>, arg1: number): java_util_List<org_bukkit_block_Block>;
getTargetBlockExact(arg0: number, arg1: org_bukkit_FluidCollisionMode): org_bukkit_block_Block;
getTargetBlockExact(arg0: number): org_bukkit_block_Block;
getRemainingAir(): number;
setRemainingAir(arg0: number): void;
getMaximumAir(): number;
setMaximumAir(arg0: number): void;
getMaximumNoDamageTicks(): number;
setMaximumNoDamageTicks(arg0: number): void;
getLastDamage(): number;
setLastDamage(arg0: number): void;
getNoDamageTicks(): number;
setNoDamageTicks(arg0: number): void;
getKiller(): org_bukkit_entity_Player;
setKiller(arg0: org_bukkit_entity_Player): void;
addPotionEffect(arg0: org_bukkit_potion_PotionEffect): boolean;
addPotionEffect(arg0: org_bukkit_potion_PotionEffect, arg1: boolean): boolean;
addPotionEffects(arg0: java_util_Collection<org_bukkit_potion_PotionEffect>): boolean;
hasPotionEffect(arg0: org_bukkit_potion_PotionEffectType): boolean;
getPotionEffect(arg0: org_bukkit_potion_PotionEffectType): org_bukkit_potion_PotionEffect;
removePotionEffect(arg0: org_bukkit_potion_PotionEffectType): void;
getActivePotionEffects(): java_util_Collection<org_bukkit_potion_PotionEffect>;
getRemoveWhenFarAway(): boolean;
setRemoveWhenFarAway(arg0: boolean): void;
setCanPickupItems(arg0: boolean): void;
getCanPickupItems(): boolean;
setGliding(arg0: boolean): void;
setAI(arg0: boolean): void;
hasAI(): boolean;
swingMainHand(): void;
swingOffHand(): void;
setCollidable(arg0: boolean): void;
getCollidableExemptions(): java_util_Set<java_util_UUID>;
getMemory<T extends java_lang_Object>(arg0: org_bukkit_entity_memory_MemoryKey<T>): T;
getArrowsStuck(): number;
setArrowsStuck(arg0: number): void;
isJumping(): boolean;
getAttribute(arg0: org_bukkit_attribute_Attribute): org_bukkit_attribute_AttributeInstance;
getHealth(): number;
getMaxHealth(): number;
setHealth(arg0: number): void;
damage(arg0: number, arg1: org_bukkit_entity_Entity): void;
damage(arg0: number): void;
getAbsorptionAmount(): number;
setAbsorptionAmount(arg0: number): void;
setMaxHealth(arg0: number): void;
resetMaxHealth(): void;
remove(): void;
isEmpty(): boolean;
getLocation(): org_bukkit_Location;
getLocation(arg0: org_bukkit_Location): org_bukkit_Location;
getType(): org_bukkit_entity_EntityType;
isValid(): boolean;
getOrigin(): org_bukkit_Location;
getWidth(): number;
getHeight(): number;
getServer(): org_bukkit_Server;
getWorld(): org_bukkit_World;
spigot(): org_bukkit_command_CommandSender_Spigot;
spigot(): org_bukkit_entity_Entity_Spigot;
getBoundingBox(): org_bukkit_util_BoundingBox;
getUniqueId(): java_util_UUID;
getChunk(): org_bukkit_Chunk;
getPistonMoveReaction(): org_bukkit_block_PistonMoveReaction;
isInvulnerable(): boolean;
getFireTicks(): number;
setFireTicks(arg0: number): void;
playEffect(arg0: org_bukkit_EntityEffect): void;
getMaxFireTicks(): number;
getScoreboardTags(): java_util_Set<string>;
addScoreboardTag(arg0: string): boolean;
removeScoreboardTag(arg0: string): boolean;
getPose(): org_bukkit_entity_Pose;
getVehicle(): org_bukkit_entity_Entity;
isInWater(): boolean;
setSilent(arg0: boolean): void;
getPassengers(): java_util_List<org_bukkit_entity_Entity>;
isInRain(): boolean;
isInBubbleColumn(): boolean;
isInWaterOrRain(): boolean;
isInWaterOrBubbleColumn(): boolean;
isInLava(): boolean;
setCustomNameVisible(arg0: boolean): void;
addPassenger(arg0: org_bukkit_entity_Entity): boolean;
removePassenger(arg0: org_bukkit_entity_Entity): boolean;
setInvulnerable(arg0: boolean): void;
getFacing(): org_bukkit_block_BlockFace;
isSilent(): boolean;
getVelocity(): org_bukkit_util_Vector;
setVelocity(arg0: org_bukkit_util_Vector): void;
isOnGround(): boolean;
teleport(arg0: org_bukkit_Location): boolean;
teleport(arg0: org_bukkit_entity_Entity): boolean;
teleport(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
teleport(arg0: org_bukkit_Location, arg1: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
getNearbyEntities(arg0: number, arg1: number, arg2: number): java_util_List<org_bukkit_entity_Entity>;
setRotation(arg0: number, arg1: number): void;
teleportAsync(arg0: org_bukkit_Location): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
teleportAsync(arg0: org_bukkit_Location, arg1: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
getEntityId(): number;
isDead(): boolean;
isPersistent(): boolean;
setPersistent(arg0: boolean): void;
getPassenger(): org_bukkit_entity_Entity;
setPassenger(arg0: org_bukkit_entity_Entity): boolean;
eject(): boolean;
getFallDistance(): number;
setFallDistance(arg0: number): void;
setLastDamageCause(arg0: org_bukkit_event_entity_EntityDamageEvent): void;
getLastDamageCause(): org_bukkit_event_entity_EntityDamageEvent;
getTicksLived(): number;
setTicksLived(arg0: number): void;
isInsideVehicle(): boolean;
leaveVehicle(): boolean;
isCustomNameVisible(): boolean;
setGlowing(arg0: boolean): void;
isGlowing(): boolean;
hasGravity(): boolean;
setGravity(arg0: boolean): void;
getPortalCooldown(): number;
setPortalCooldown(arg0: number): void;
fromMobSpawner(): boolean;
getEntitySpawnReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
isInWaterOrRainOrBubbleColumn(): boolean;
setMetadata(arg0: string, arg1: org_bukkit_metadata_MetadataValue): void;
hasMetadata(arg0: string): boolean;
removeMetadata(arg0: string, arg1: org_bukkit_plugin_Plugin): void;
getMetadata(arg0: string): java_util_List<org_bukkit_metadata_MetadataValue>;
getName(): string;
sendMessage(arg0: net_md_5_bungee_api_chat_BaseComponent): void;
sendMessage(...arg0: net_md_5_bungee_api_chat_BaseComponent[]): void;
sendMessage(arg0: string): void;
sendMessage(arg0: string[]): void;
hasPermission(arg0: org_bukkit_permissions_Permission): boolean;
hasPermission(arg0: string): boolean;
isPermissionSet(arg0: string): boolean;
isPermissionSet(arg0: org_bukkit_permissions_Permission): boolean;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: number): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: boolean, arg3: number): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: boolean): org_bukkit_permissions_PermissionAttachment;
removeAttachment(arg0: org_bukkit_permissions_PermissionAttachment): void;
recalculatePermissions(): void;
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
isOp(): boolean;
setOp(arg0: boolean): void;
setCustomName(arg0: string): void;
getCustomName(): string;
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;
launchProjectile<T extends org_bukkit_entity_Projectile>(arg0: java_lang_Class<T>): T;
launchProjectile<T extends org_bukkit_entity_Projectile>(arg0: java_lang_Class<T>, arg1: org_bukkit_util_Vector): T;
setSeed(arg0: number): void;
getSeed(): number;
getLootTable(): org_bukkit_loot_LootTable;
setLootTable(arg0: org_bukkit_loot_LootTable): void;
setLootTable(arg0: org_bukkit_loot_LootTable, arg1: number): void;
hasLootTable(): boolean;
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { AreaEffectCloud as org_bukkit_entity_AreaEffectCloud, LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, DragonFireball as org_bukkit_entity_DragonFireball } from 'org.bukkit.entity';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EnderDragonFireballHitEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
targets: java_util_Collection<org_bukkit_entity_LivingEntity>;
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
targets: java_util_Collection<org_bukkit_entity_LivingEntity>;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_DragonFireball;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getAreaEffectCloud(): org_bukkit_entity_AreaEffectCloud;
getTargets(): java_util_Collection<org_bukkit_entity_LivingEntity>;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_DragonFireball;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_DragonFireball, arg1: java_util_Collection<org_bukkit_entity_LivingEntity>, arg2: org_bukkit_entity_AreaEffectCloud);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { AreaEffectCloud as org_bukkit_entity_AreaEffectCloud, Entity as org_bukkit_entity_Entity, EnderDragon as org_bukkit_entity_EnderDragon } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EnderDragonFlameEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_EnderDragon;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getAreaEffectCloud(): org_bukkit_entity_AreaEffectCloud;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_EnderDragon;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_EnderDragon, arg1: org_bukkit_entity_AreaEffectCloud);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { DragonFireball as org_bukkit_entity_DragonFireball, Entity as org_bukkit_entity_Entity, EnderDragon as org_bukkit_entity_EnderDragon } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EnderDragonShootFireballEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
fireball: org_bukkit_entity_DragonFireball;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
fireball: org_bukkit_entity_DragonFireball;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_EnderDragon;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getFireball(): org_bukkit_entity_DragonFireball;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_EnderDragon;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_EnderDragon, arg1: org_bukkit_entity_DragonFireball);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Enderman as org_bukkit_entity_Enderman, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EndermanAttackPlayerEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
player: org_bukkit_entity_Player;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Enderman;
player: org_bukkit_entity_Player;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Enderman;
getPlayer(): org_bukkit_entity_Player;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Enderman, arg1: org_bukkit_entity_Player);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Enderman as org_bukkit_entity_Enderman } from 'org.bukkit.entity';
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EndermanEscapeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
reason: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Enderman;
static handlerList: org_bukkit_event_HandlerList;
reason: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Enderman;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getReason(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
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
constructor(arg0: org_bukkit_entity_Enderman, arg1: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent' {
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Reason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason> {
static RUNAWAY: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static INDIRECT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static CRITICAL_HIT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static STARE: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static DROWN: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static $VALUES: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
static valueOf(arg0: string): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent' {
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Reason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason> {
static RUNAWAY: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static INDIRECT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static CRITICAL_HIT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static STARE: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static DROWN: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static $VALUES: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
static valueOf(arg0: string): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EntityAddToWorldEvent extends org_bukkit_event_entity_EntityEvent {
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, LivingEntity as org_bukkit_entity_LivingEntity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EntityJumpEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
canceled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_LivingEntity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_LivingEntity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_LivingEntity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, LivingEntity as org_bukkit_entity_LivingEntity } from 'org.bukkit.entity';
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EntityKnockbackByEntityEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
hitBy: org_bukkit_entity_Entity;
knockbackStrength: number;
acceleration: org_bukkit_util_Vector;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
knockbackStrength: number;
hitBy: org_bukkit_entity_Entity;
acceleration: org_bukkit_util_Vector;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_LivingEntity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getKnockbackStrength(): number;
getHitBy(): org_bukkit_entity_Entity;
getAcceleration(): org_bukkit_util_Vector;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_LivingEntity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_LivingEntity, arg1: org_bukkit_entity_Entity, arg2: number, arg3: org_bukkit_util_Vector);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EntityPathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
targetEntity: org_bukkit_entity_Entity;
loc: org_bukkit_Location;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
loc: org_bukkit_Location;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
targetEntity: org_bukkit_entity_Entity;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getLoc(): org_bukkit_Location;
getEntity(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getTargetEntity(): org_bukkit_entity_Entity;
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
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_Location, arg2: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EntityRemoveFromWorldEvent extends org_bukkit_event_entity_EntityEvent {
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EndGateway as org_bukkit_block_EndGateway } from 'org.bukkit.block';
import { Entity as org_bukkit_entity_Entity, EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { EntityTeleportEvent as org_bukkit_event_entity_EntityTeleportEvent } from 'org.bukkit.event.entity';

  export class EntityTeleportEndGatewayEvent extends org_bukkit_event_entity_EntityTeleportEvent {
gateway: org_bukkit_block_EndGateway;
gateway: org_bukkit_block_EndGateway;
entity: org_bukkit_entity_Entity;
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getGateway(): org_bukkit_block_EndGateway;
getEntity(): org_bukkit_entity_Entity;
getEntityType(): org_bukkit_entity_EntityType;
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
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_Location, arg2: org_bukkit_Location, arg3: org_bukkit_block_EndGateway);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EntityTransformedEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
transformed: org_bukkit_entity_Entity;
reason: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
handlers: org_bukkit_event_HandlerList;
transformed: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
reason: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getTransformed(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getReason(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
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
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_entity_Entity, arg2: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EntityTransformedEvent' {
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TransformedReason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason> {
static DROWNED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static CURED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static INFECTED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static SHEARED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static LIGHTNING: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static $VALUES: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
static valueOf(arg0: string): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EntityTransformedEvent' {
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TransformedReason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason> {
static DROWNED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static CURED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static INFECTED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static SHEARED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static LIGHTNING: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static $VALUES: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
static valueOf(arg0: string): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { LightningStrike as org_bukkit_entity_LightningStrike, Entity as org_bukkit_entity_Entity, EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityTransformEvent as org_bukkit_event_entity_EntityTransformEvent } from 'org.bukkit.event.entity';

  export class EntityZapEvent extends org_bukkit_event_entity_EntityTransformEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
bolt: org_bukkit_entity_LightningStrike;
handlers: org_bukkit_event_HandlerList;
bolt: org_bukkit_entity_LightningStrike;
replacementEntity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getBolt(): org_bukkit_entity_LightningStrike;
getReplacementEntity(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getEntity(): org_bukkit_entity_Entity;
getEntityType(): org_bukkit_entity_EntityType;
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
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_entity_LightningStrike, arg2: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ExperienceOrb as org_bukkit_entity_ExperienceOrb } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class ExperienceOrbMergeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
mergeTarget: org_bukkit_entity_ExperienceOrb;
mergeSource: org_bukkit_entity_ExperienceOrb;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
mergeTarget: org_bukkit_entity_ExperienceOrb;
mergeSource: org_bukkit_entity_ExperienceOrb;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getMergeTarget(): org_bukkit_entity_ExperienceOrb;
getMergeSource(): org_bukkit_entity_ExperienceOrb;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_ExperienceOrb, arg1: org_bukkit_entity_ExperienceOrb);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { Set as java_util_Set } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty, PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class FillProfileEvent extends org_bukkit_event_Event {
profile: com_destroystokyo_paper_profile_PlayerProfile;
static handlers: org_bukkit_event_HandlerList;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
class: java_lang_Class<java_lang_Object>;
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: com_destroystokyo_paper_profile_PlayerProfile);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';

  export class Goal<T extends org_bukkit_entity_Mob> {
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
start(): void;
stop(): void;
tick(): void;
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
shouldActivate(): boolean;
shouldStayActive(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { NamespacedKey as org_bukkit_NamespacedKey } from 'org.bukkit';
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';

  export class GoalKey<T extends org_bukkit_entity_Mob> extends java_lang_Object {
entityClass: java_lang_Class<T>;
namespacedKey: org_bukkit_NamespacedKey;
namespacedKey: org_bukkit_NamespacedKey;
entityClass: java_lang_Class<T>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static of<A extends org_bukkit_entity_Mob>(arg0: java_lang_Class<A>, arg1: org_bukkit_NamespacedKey): com_destroystokyo_paper_entity_ai_GoalKey<A>;
getNamespacedKey(): org_bukkit_NamespacedKey;
getEntityClass(): java_lang_Class<T>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class GoalType extends java_lang_Enum<com_destroystokyo_paper_entity_ai_GoalType> {
static MOVE: com_destroystokyo_paper_entity_ai_GoalType;
static LOOK: com_destroystokyo_paper_entity_ai_GoalType;
static JUMP: com_destroystokyo_paper_entity_ai_GoalType;
static TARGET: com_destroystokyo_paper_entity_ai_GoalType;
static UNKNOWN_BEHAVIOR: com_destroystokyo_paper_entity_ai_GoalType;
static $VALUES: com_destroystokyo_paper_entity_ai_GoalType[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_entity_ai_GoalType[];
static valueOf(arg0: string): com_destroystokyo_paper_entity_ai_GoalType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse, QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { InetAddress as java_net_InetAddress } from 'java.net';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class GS4QueryEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
queryType: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
querierAddress: java_net_InetAddress;
response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
handlers: org_bukkit_event_HandlerList;
response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
queryType: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
querierAddress: java_net_InetAddress;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
toString(): string;
getHandlers(): org_bukkit_event_HandlerList;
getResponse(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
getQueryType(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
getQuerierAddress(): java_net_InetAddress;
setResponse(arg0: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse): void;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType, arg1: java_net_InetAddress, arg2: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class QueryResponse extends java_lang_Object {
motd: string;
gameVersion: string;
map: string;
currentPlayers: number;
maxPlayers: number;
hostname: string;
port: number;
players: java_util_Collection<string>;
serverVersion: string;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
port: number;
map: string;
hostname: string;
currentPlayers: number;
serverVersion: string;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
gameVersion: string;
maxPlayers: number;
motd: string;
players: java_util_Collection<string>;
static builder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
getPort(): number;
getMap(): string;
getHostname(): string;
getCurrentPlayers(): number;
getServerVersion(): string;
toBuilder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
getPlugins(): java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
getGameVersion(): string;
getMaxPlayers(): number;
getMotd(): string;
getPlayers(): java_util_Collection<string>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class Builder extends java_lang_Object {
motd: string;
gameVersion: string;
map: string;
hostname: string;
serverVersion: string;
currentPlayers: number;
maxPlayers: number;
port: number;
players: java_util_List<string>;
plugins: java_util_List<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
map(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
port(arg0: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
build(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
hostname(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
serverVersion(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlugins(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
gameVersion(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
currentPlayers(arg0: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlayers(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(arg0: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(...arg0: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(...arg0: string[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(arg0: java_util_Collection<string>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
motd(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
maxPlayers(arg0: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Object as java_lang_Object } from 'java.lang';

  export class PluginInformation extends java_lang_Object {
name: string;
version: string;
name: string;
version: string;
getName(): string;
static of(arg0: string, arg1: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation;
setName(arg0: string): void;
getVersion(): string;
setVersion(arg0: string): void;
constructor(arg0: string, arg1: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class QueryType extends java_lang_Enum<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType> {
static BASIC: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static FULL: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static $VALUES: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
static valueOf(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class QueryResponse extends java_lang_Object {
motd: string;
gameVersion: string;
map: string;
currentPlayers: number;
maxPlayers: number;
hostname: string;
port: number;
players: java_util_Collection<string>;
serverVersion: string;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
port: number;
map: string;
hostname: string;
currentPlayers: number;
serverVersion: string;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
gameVersion: string;
maxPlayers: number;
motd: string;
players: java_util_Collection<string>;
static builder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
getPort(): number;
getMap(): string;
getHostname(): string;
getCurrentPlayers(): number;
getServerVersion(): string;
toBuilder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
getPlugins(): java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
getGameVersion(): string;
getMaxPlayers(): number;
getMotd(): string;
getPlayers(): java_util_Collection<string>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class Builder extends java_lang_Object {
motd: string;
gameVersion: string;
map: string;
hostname: string;
serverVersion: string;
currentPlayers: number;
maxPlayers: number;
port: number;
players: java_util_List<string>;
plugins: java_util_List<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
map(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
port(arg0: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
build(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
hostname(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
serverVersion(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlugins(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
gameVersion(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
currentPlayers(arg0: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlayers(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(arg0: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(...arg0: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(...arg0: string[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(arg0: java_util_Collection<string>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
motd(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
maxPlayers(arg0: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Object as java_lang_Object } from 'java.lang';

  export class PluginInformation extends java_lang_Object {
name: string;
version: string;
name: string;
version: string;
getName(): string;
static of(arg0: string, arg1: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation;
setName(arg0: string): void;
getVersion(): string;
setVersion(arg0: string): void;
constructor(arg0: string, arg1: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class QueryType extends java_lang_Enum<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType> {
static BASIC: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static FULL: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static $VALUES: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
static valueOf(arg0: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { HeightmapType as com_destroystokyo_paper_HeightmapType } from 'com.destroystokyo.paper';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class HeightmapType extends java_lang_Enum<com_destroystokyo_paper_HeightmapType> {
static LIGHT_BLOCKING: com_destroystokyo_paper_HeightmapType;
static ANY: com_destroystokyo_paper_HeightmapType;
static SOLID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID_NO_LEAVES: com_destroystokyo_paper_HeightmapType;
static $VALUES: com_destroystokyo_paper_HeightmapType[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_HeightmapType[];
static valueOf(arg0: string): com_destroystokyo_paper_HeightmapType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { UUID as java_util_UUID } from 'java.util';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';

  export class LootableEntityInventory implements com_destroystokyo_paper_loottable_LootableInventory {
entity: org_bukkit_entity_Entity;
lastFilled: number;
lastLooted: java_lang_Long;
lastLooted: java_lang_Long;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable;
getEntity(): org_bukkit_entity_Entity;
isRefillEnabled(): boolean;
hasBeenFilled(): boolean;
getLastFilled(): number;
hasPlayerLooted(arg0: java_util_UUID): boolean;
hasPlayerLooted(arg0: org_bukkit_entity_Player): boolean;
getLastLooted(arg0: java_util_UUID): java_lang_Long;
getLastLooted(arg0: org_bukkit_entity_Player): java_lang_Long;
setHasPlayerLooted(arg0: java_util_UUID, arg1: boolean): boolean;
setHasPlayerLooted(arg0: org_bukkit_entity_Player, arg1: boolean): boolean;
hasPendingRefill(): boolean;
getNextRefill(): number;
setNextRefill(arg0: number): number;
setSeed(arg0: number): void;
getSeed(): number;
getLootTable(): org_bukkit_loot_LootTable;
setLootTable(arg0: org_bukkit_loot_LootTable): void;
setLootTable(arg0: org_bukkit_loot_LootTable, arg1: number): void;
hasLootTable(): boolean;
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Exception as java_lang_Exception, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class IllegalPacketEvent extends org_bukkit_event_player_PlayerEvent {
type: string;
ex: string;
kickMessage: string;
shouldKick: boolean;
static handlers: org_bukkit_event_HandlerList;
type: string;
handlers: org_bukkit_event_HandlerList;
exceptionMessage: string;
static handlerList: org_bukkit_event_HandlerList;
kickMessage: string;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getType(): string;
getHandlers(): org_bukkit_event_HandlerList;
setKickMessage(arg0: string): void;
isShouldKick(): boolean;
setShouldKick(arg0: boolean): void;
getExceptionMessage(): string;
static getHandlerList(): org_bukkit_event_HandlerList;
getKickMessage(): string;
static process(arg0: org_bukkit_entity_Player, arg1: string, arg2: string, arg3: java_lang_Exception): void;
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
constructor(arg0: org_bukkit_entity_Player, arg1: string, arg2: string, arg3: java_lang_Exception);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.inventory' {
import { RecipeChoice as org_bukkit_inventory_RecipeChoice, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object } from 'java.lang';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { List as java_util_List } from 'java.util';

  export class ItemStackRecipeChoice extends java_lang_Object implements org_bukkit_inventory_RecipeChoice {
choices: java_util_List<org_bukkit_inventory_ItemStack>;
itemStack: org_bukkit_inventory_ItemStack;
clone(): org_bukkit_inventory_RecipeChoice;
clone(): java_lang_Object;
test(arg0: org_bukkit_inventory_ItemStack): boolean;
test(arg0: java_lang_Object): boolean;
getItemStack(): org_bukkit_inventory_ItemStack;
or(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
and(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
negate(): java_util_function_Predicate<T>;
constructor(arg0: org_bukkit_inventory_ItemStack);
constructor(arg0: java_util_List<org_bukkit_inventory_ItemStack>);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class LookupProfileEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
profile: com_destroystokyo_paper_profile_PlayerProfile;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: com_destroystokyo_paper_profile_PlayerProfile);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';

  export class LootableBlockInventory implements com_destroystokyo_paper_loottable_LootableInventory {
block: org_bukkit_block_Block;
lastFilled: number;
lastLooted: java_lang_Long;
lastLooted: java_lang_Long;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable;
getBlock(): org_bukkit_block_Block;
isRefillEnabled(): boolean;
hasBeenFilled(): boolean;
getLastFilled(): number;
hasPlayerLooted(arg0: java_util_UUID): boolean;
hasPlayerLooted(arg0: org_bukkit_entity_Player): boolean;
getLastLooted(arg0: java_util_UUID): java_lang_Long;
getLastLooted(arg0: org_bukkit_entity_Player): java_lang_Long;
setHasPlayerLooted(arg0: java_util_UUID, arg1: boolean): boolean;
setHasPlayerLooted(arg0: org_bukkit_entity_Player, arg1: boolean): boolean;
hasPendingRefill(): boolean;
getNextRefill(): number;
setNextRefill(arg0: number): number;
setSeed(arg0: number): void;
getSeed(): number;
getLootTable(): org_bukkit_loot_LootTable;
setLootTable(arg0: org_bukkit_loot_LootTable): void;
setLootTable(arg0: org_bukkit_loot_LootTable, arg1: number): void;
hasLootTable(): boolean;
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { UUID as java_util_UUID } from 'java.util';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';

  export class LootableEntityInventory implements com_destroystokyo_paper_loottable_LootableInventory {
entity: org_bukkit_entity_Entity;
lastFilled: number;
lastLooted: java_lang_Long;
lastLooted: java_lang_Long;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable;
getEntity(): org_bukkit_entity_Entity;
isRefillEnabled(): boolean;
hasBeenFilled(): boolean;
getLastFilled(): number;
hasPlayerLooted(arg0: java_util_UUID): boolean;
hasPlayerLooted(arg0: org_bukkit_entity_Player): boolean;
getLastLooted(arg0: java_util_UUID): java_lang_Long;
getLastLooted(arg0: org_bukkit_entity_Player): java_lang_Long;
setHasPlayerLooted(arg0: java_util_UUID, arg1: boolean): boolean;
setHasPlayerLooted(arg0: org_bukkit_entity_Player, arg1: boolean): boolean;
hasPendingRefill(): boolean;
getNextRefill(): number;
setNextRefill(arg0: number): number;
setSeed(arg0: number): void;
getSeed(): number;
getLootTable(): org_bukkit_loot_LootTable;
setLootTable(arg0: org_bukkit_loot_LootTable): void;
setLootTable(arg0: org_bukkit_loot_LootTable, arg1: number): void;
hasLootTable(): boolean;
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable, Lootable as org_bukkit_loot_Lootable } from 'org.bukkit.loot';

  export class LootableInventory implements org_bukkit_loot_Lootable {
lastFilled: number;
lastLooted: java_lang_Long;
lastLooted: java_lang_Long;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable;
isRefillEnabled(): boolean;
hasBeenFilled(): boolean;
getLastFilled(): number;
hasPlayerLooted(arg0: java_util_UUID): boolean;
hasPlayerLooted(arg0: org_bukkit_entity_Player): boolean;
getLastLooted(arg0: java_util_UUID): java_lang_Long;
getLastLooted(arg0: org_bukkit_entity_Player): java_lang_Long;
setHasPlayerLooted(arg0: java_util_UUID, arg1: boolean): boolean;
setHasPlayerLooted(arg0: org_bukkit_entity_Player, arg1: boolean): boolean;
hasPendingRefill(): boolean;
getNextRefill(): number;
setNextRefill(arg0: number): number;
setSeed(arg0: number): void;
getSeed(): number;
getLootTable(): org_bukkit_loot_LootTable;
setLootTable(arg0: org_bukkit_loot_LootTable): void;
setLootTable(arg0: org_bukkit_loot_LootTable, arg1: number): void;
hasLootTable(): boolean;
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class LootableInventoryReplenishEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
inventory: com_destroystokyo_paper_loottable_LootableInventory;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
inventory: com_destroystokyo_paper_loottable_LootableInventory;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getInventory(): com_destroystokyo_paper_loottable_LootableInventory;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Player, arg1: com_destroystokyo_paper_loottable_LootableInventory);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Material as org_bukkit_Material, Tag as org_bukkit_Tag, NamespacedKey as org_bukkit_NamespacedKey, Keyed as org_bukkit_Keyed } from 'org.bukkit';
import { MaterialSetTag as com_destroystokyo_paper_MaterialSetTag } from 'com.destroystokyo.paper';
import { Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Block as org_bukkit_block_Block, BlockState as org_bukkit_block_BlockState } from 'org.bukkit.block';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Object as java_lang_Object } from 'java.lang';

  export class MaterialSetTag extends java_lang_Object implements org_bukkit_Tag<org_bukkit_Material> {
key: org_bukkit_NamespacedKey;
materials: java_util_Set<org_bukkit_Material>;
key: org_bukkit_NamespacedKey;
values: java_util_Set<org_bukkit_Material>;
add(...arg0: org_bukkit_Material[]): com_destroystokyo_paper_MaterialSetTag;
add(arg0: java_util_Collection<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
add(arg0: java_util_function_Predicate<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
add(...arg0: com_destroystokyo_paper_MaterialSetTag[]): com_destroystokyo_paper_MaterialSetTag;
add(...arg0: org_bukkit_Tag<org_bukkit_Material>[]): com_destroystokyo_paper_MaterialSetTag;
startsWith(arg0: string): com_destroystokyo_paper_MaterialSetTag;
endsWith(arg0: string): com_destroystokyo_paper_MaterialSetTag;
contains(arg0: string): com_destroystokyo_paper_MaterialSetTag;
getKey(): org_bukkit_NamespacedKey;
not(arg0: java_util_function_Predicate<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
not(arg0: java_util_Collection<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
not(...arg0: org_bukkit_Material[]): com_destroystokyo_paper_MaterialSetTag;
not(arg0: com_destroystokyo_paper_MaterialSetTag): com_destroystokyo_paper_MaterialSetTag;
notEndsWith(arg0: string): com_destroystokyo_paper_MaterialSetTag;
notStartsWith(arg0: string): com_destroystokyo_paper_MaterialSetTag;
ensureSize(arg0: string, arg1: number): com_destroystokyo_paper_MaterialSetTag;
isTagged(arg0: org_bukkit_Keyed): boolean;
isTagged(arg0: org_bukkit_inventory_ItemStack): boolean;
isTagged(arg0: org_bukkit_block_Block): boolean;
isTagged(arg0: org_bukkit_block_BlockState): boolean;
isTagged(arg0: org_bukkit_Material): boolean;
isTagged(arg0: org_bukkit_block_data_BlockData): boolean;
getValues(): java_util_Set<org_bukkit_Material>;
constructor(arg0: org_bukkit_NamespacedKey, arg1: java_util_Collection<org_bukkit_Material>);
constructor(arg0: org_bukkit_NamespacedKey, ...arg1: org_bukkit_Material[]);
constructor(arg0: org_bukkit_NamespacedKey, arg1: java_util_function_Predicate<org_bukkit_Material>);
constructor(arg0: java_util_function_Predicate<org_bukkit_Material>);
constructor(arg0: java_util_Collection<org_bukkit_Material>);
constructor(...arg0: org_bukkit_Material[]);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { MaterialSetTag as com_destroystokyo_paper_MaterialSetTag } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';

  export class MaterialTags extends java_lang_Object {
static ARROWS: com_destroystokyo_paper_MaterialSetTag;
static BEDS: com_destroystokyo_paper_MaterialSetTag;
static BUCKETS: com_destroystokyo_paper_MaterialSetTag;
static COALS: com_destroystokyo_paper_MaterialSetTag;
static COBBLESTONE_WALLS: com_destroystokyo_paper_MaterialSetTag;
static COBBLESTONES: com_destroystokyo_paper_MaterialSetTag;
static CONCRETES: com_destroystokyo_paper_MaterialSetTag;
static CONCRETE_POWDER: com_destroystokyo_paper_MaterialSetTag;
static COOKED_FISH: com_destroystokyo_paper_MaterialSetTag;
static DYES: com_destroystokyo_paper_MaterialSetTag;
static FENCE_GATES: com_destroystokyo_paper_MaterialSetTag;
static FENCES: com_destroystokyo_paper_MaterialSetTag;
static FISH_BUCKETS: com_destroystokyo_paper_MaterialSetTag;
static GLASS: com_destroystokyo_paper_MaterialSetTag;
static GLASS_PANES: com_destroystokyo_paper_MaterialSetTag;
static GLAZED_TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static STAINED_TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static GOLDEN_APPLES: com_destroystokyo_paper_MaterialSetTag;
static HORSE_ARMORS: com_destroystokyo_paper_MaterialSetTag;
static INFESTED_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static MUSHROOM_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static MUSHROOMS: com_destroystokyo_paper_MaterialSetTag;
static MUSIC_DISCS: com_destroystokyo_paper_MaterialSetTag;
static ORES: com_destroystokyo_paper_MaterialSetTag;
static PISTONS: com_destroystokyo_paper_MaterialSetTag;
static POTATOES: com_destroystokyo_paper_MaterialSetTag;
static PRESSURE_PLATES: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE_SLABS: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE_STAIRS: com_destroystokyo_paper_MaterialSetTag;
static PUMPKINS: com_destroystokyo_paper_MaterialSetTag;
static QUARTZ_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static RAW_FISH: com_destroystokyo_paper_MaterialSetTag;
static RED_SANDSTONES: com_destroystokyo_paper_MaterialSetTag;
static SANDSTONES: com_destroystokyo_paper_MaterialSetTag;
static SPONGES: com_destroystokyo_paper_MaterialSetTag;
static SHULKER_BOXES: com_destroystokyo_paper_MaterialSetTag;
static SKULLS: com_destroystokyo_paper_MaterialSetTag;
static SPAWN_EGGS: com_destroystokyo_paper_MaterialSetTag;
static STAINED_GLASS: com_destroystokyo_paper_MaterialSetTag;
static STAINED_GLASS_PANES: com_destroystokyo_paper_MaterialSetTag;
static TRAPDOORS: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_FENCES: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_TRAPDOORS: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_GATES: com_destroystokyo_paper_MaterialSetTag;
static PURPUR: com_destroystokyo_paper_MaterialSetTag;
static SIGNS: com_destroystokyo_paper_MaterialSetTag;
static TORCH: com_destroystokyo_paper_MaterialSetTag;
static REDSTONE_TORCH: com_destroystokyo_paper_MaterialSetTag;
static SOUL_TORCH: com_destroystokyo_paper_MaterialSetTag;
static TORCHES: com_destroystokyo_paper_MaterialSetTag;
static LANTERNS: com_destroystokyo_paper_MaterialSetTag;
static COLORABLE: com_destroystokyo_paper_MaterialSetTag;

constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { EventExecutor as org_bukkit_plugin_EventExecutor } from 'org.bukkit.plugin';

  export class MethodHandleEventExecutor extends java_lang_Object implements org_bukkit_plugin_EventExecutor {
eventClass: java_lang_Class<org_bukkit_event_Event>;
handle: java_lang_invoke_MethodHandle;
execute(arg0: org_bukkit_event_Listener, arg1: org_bukkit_event_Event): void;
constructor(arg0: java_lang_Class<org_bukkit_event_Event>, arg1: java_lang_invoke_MethodHandle);
constructor(arg0: java_lang_Class<org_bukkit_event_Event>, arg1: java_lang_reflect_Method);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Goal as com_destroystokyo_paper_entity_ai_Goal, GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Collection as java_util_Collection } from 'java.util';

  export class MobGoals {
goal: com_destroystokyo_paper_entity_ai_Goal<T>;
goals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
addGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: number, arg2: com_destroystokyo_paper_entity_ai_Goal<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalKey<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_Goal<T>): void;
removeAllGoals<T extends org_bukkit_entity_Mob>(arg0: T): void;
removeAllGoals<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): void;
hasGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalKey<T>): boolean;
getGoal<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalKey<T>): com_destroystokyo_paper_entity_ai_Goal<T>;
getGoals<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalKey<T>): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(arg0: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoalsWithout<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(arg0: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoalsWithout<T extends org_bukkit_entity_Mob>(arg0: T, arg1: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {


  export class Namespaced {
key: string;
namespace: string;
getKey(): string;
getNamespace(): string;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Object as java_lang_Object } from 'java.lang';
import { NamespacedTag as com_destroystokyo_paper_NamespacedTag, Namespaced as com_destroystokyo_paper_Namespaced } from 'com.destroystokyo.paper';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';

  export class NamespacedTag extends java_lang_Object implements com_destroystokyo_paper_Namespaced {
static MINECRAFT: string;
static BUKKIT: string;
static VALID_NAMESPACE: java_util_regex_Pattern;
static VALID_KEY: java_util_regex_Pattern;
namespace: string;
key: string;
key: string;
namespace: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getKey(): string;
getNamespace(): string;
static minecraft(arg0: string): com_destroystokyo_paper_NamespacedTag;
static randomKey(): com_destroystokyo_paper_NamespacedTag;
constructor(arg0: string, arg1: string);
constructor(arg0: org_bukkit_plugin_Plugin, arg1: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';

  export class NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress;
getAddress(): java_net_InetSocketAddress;
getProtocolVersion(): number;
getVirtualHost(): java_net_InetSocketAddress;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { PluginDescriptionFile as org_bukkit_plugin_PluginDescriptionFile } from 'org.bukkit.plugin';
import { Logger as java_util_logging_Logger } from 'java.util.logging';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PaperPluginLogger extends java_util_logging_Logger {
static logger: java_util_logging_Logger;
class: java_lang_Class<java_lang_Object>;
static getLogger(arg0: org_bukkit_plugin_PluginDescriptionFile): java_util_logging_Logger;
setParent(arg0: java_util_logging_Logger): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

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

  export class PaperServerListPingEvent extends org_bukkit_event_server_ServerListPingEvent implements org_bukkit_event_Cancellable {
client: com_destroystokyo_paper_network_StatusClient;
numPlayers: number;
hidePlayers: boolean;
playerSample: java_util_List<com_destroystokyo_paper_profile_PlayerProfile>;
version: string;
protocolVersion: number;
favicon: org_bukkit_util_CachedServerIcon;
cancelled: boolean;
originalPlayerCount: boolean;
players: java_lang_Object[];
version: string;
numPlayers: number;
client: com_destroystokyo_paper_network_StatusClient;
playerSample: java_util_List<com_destroystokyo_paper_profile_PlayerProfile>;
maxPlayers: number;
serverIcon: org_bukkit_util_CachedServerIcon;
protocolVersion: number;
eventName: string;
class: java_lang_Class<java_lang_Object>;
iterator(): java_util_Iterator<org_bukkit_entity_Player>;
getVersion(): string;
isCancelled(): boolean;
getNumPlayers(): number;
setServerIcon(arg0: org_bukkit_util_CachedServerIcon): void;
getClient(): com_destroystokyo_paper_network_StatusClient;
setNumPlayers(arg0: number): void;
shouldHidePlayers(): boolean;
setHidePlayers(arg0: boolean): void;
getPlayerSample(): java_util_List<com_destroystokyo_paper_profile_PlayerProfile>;
setProtocolVersion(arg0: number): void;
setVersion(arg0: string): void;
getMaxPlayers(): number;
getServerIcon(): org_bukkit_util_CachedServerIcon;
getProtocolVersion(): number;
setCancelled(arg0: boolean): void;
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
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
constructor(arg0: com_destroystokyo_paper_network_StatusClient, arg1: string, arg2: number, arg3: number, arg4: string, arg5: number, arg6: org_bukkit_util_CachedServerIcon);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
import { NetworkClient as com_destroystokyo_paper_network_NetworkClient } from 'com.destroystokyo.paper.network';

  export class StatusClient implements com_destroystokyo_paper_network_NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress;
isLegacy(): boolean;
getAddress(): java_net_InetSocketAddress;
getProtocolVersion(): number;
getVirtualHost(): java_net_InetSocketAddress;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { ParticleBuilder as com_destroystokyo_paper_ParticleBuilder } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Location as org_bukkit_Location, World as org_bukkit_World, Particle as org_bukkit_Particle, Color as org_bukkit_Color } from 'org.bukkit';
import { List as java_util_List, Collection as java_util_Collection } from 'java.util';

  export class ParticleBuilder extends java_lang_Object {
particle: org_bukkit_Particle;
receivers: java_util_List<org_bukkit_entity_Player>;
source: org_bukkit_entity_Player;
location: org_bukkit_Location;
count: number;
offsetX: number;
offsetY: number;
offsetZ: number;
extra: number;
data: java_lang_Object;
force: boolean;
offset(arg0: number, arg1: number, arg2: number): com_destroystokyo_paper_ParticleBuilder;
count(): number;
count(arg0: number): com_destroystokyo_paper_ParticleBuilder;
data<T extends java_lang_Object>(): T;
data<T extends java_lang_Object>(arg0: T): com_destroystokyo_paper_ParticleBuilder;
source(): org_bukkit_entity_Player;
source(arg0: org_bukkit_entity_Player): com_destroystokyo_paper_ParticleBuilder;
location(): org_bukkit_Location;
location(arg0: org_bukkit_World, arg1: number, arg2: number, arg3: number): com_destroystokyo_paper_ParticleBuilder;
location(arg0: org_bukkit_Location): com_destroystokyo_paper_ParticleBuilder;
extra(arg0: number): com_destroystokyo_paper_ParticleBuilder;
extra(): number;
force(arg0: boolean): com_destroystokyo_paper_ParticleBuilder;
hasReceivers(): boolean;
allPlayers(): com_destroystokyo_paper_ParticleBuilder;
spawn(): com_destroystokyo_paper_ParticleBuilder;
receivers(): java_util_List<org_bukkit_entity_Player>;
receivers(arg0: number, arg1: number, arg2: boolean): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: number, arg1: boolean): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: number, arg1: number): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: java_util_Collection<org_bukkit_entity_Player>): com_destroystokyo_paper_ParticleBuilder;
receivers(...arg0: org_bukkit_entity_Player[]): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: java_util_List<org_bukkit_entity_Player>): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: number, arg1: number, arg2: number): com_destroystokyo_paper_ParticleBuilder;
receivers(arg0: number): com_destroystokyo_paper_ParticleBuilder;
particle(arg0: org_bukkit_Particle): com_destroystokyo_paper_ParticleBuilder;
particle(): org_bukkit_Particle;
offsetX(): number;
offsetY(): number;
offsetZ(): number;
color(arg0: number, arg1: number, arg2: number): com_destroystokyo_paper_ParticleBuilder;
color(arg0: org_bukkit_Color, arg1: number): com_destroystokyo_paper_ParticleBuilder;
color(arg0: org_bukkit_Color): com_destroystokyo_paper_ParticleBuilder;
constructor(arg0: org_bukkit_Particle);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { PathResult as com_destroystokyo_paper_entity_Pathfinder_PathResult } from 'com.destroystokyo.paper.entity.Pathfinder';
import { Location as org_bukkit_Location } from 'org.bukkit';

  export class Pathfinder {
entity: org_bukkit_entity_Mob;
currentPath: com_destroystokyo_paper_entity_Pathfinder_PathResult;
setCanPassDoors(arg0: boolean): void;
setCanFloat(arg0: boolean): void;
hasPath(): boolean;
findPath(arg0: org_bukkit_entity_LivingEntity): com_destroystokyo_paper_entity_Pathfinder_PathResult;
findPath(arg0: org_bukkit_Location): com_destroystokyo_paper_entity_Pathfinder_PathResult;
canOpenDoors(): boolean;
setCanOpenDoors(arg0: boolean): void;
canPassDoors(): boolean;
moveTo(arg0: com_destroystokyo_paper_entity_Pathfinder_PathResult, arg1: number): boolean;
moveTo(arg0: com_destroystokyo_paper_entity_Pathfinder_PathResult): boolean;
moveTo(arg0: org_bukkit_Location): boolean;
moveTo(arg0: org_bukkit_Location, arg1: number): boolean;
moveTo(arg0: org_bukkit_entity_LivingEntity): boolean;
moveTo(arg0: org_bukkit_entity_LivingEntity, arg1: number): boolean;
canFloat(): boolean;
getEntity(): org_bukkit_entity_Mob;
getCurrentPath(): com_destroystokyo_paper_entity_Pathfinder_PathResult;
stopPathfinding(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.Pathfinder' {
import { List as java_util_List } from 'java.util';
import { Location as org_bukkit_Location } from 'org.bukkit';

  export class PathResult {
points: java_util_List<org_bukkit_Location>;
nextPointIndex: number;
nextPoint: org_bukkit_Location;
finalPoint: org_bukkit_Location;
getPoints(): java_util_List<org_bukkit_Location>;
getNextPointIndex(): number;
getNextPoint(): org_bukkit_Location;
getFinalPoint(): org_bukkit_Location;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { PreCreatureSpawnEvent as com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent } from 'com.destroystokyo.paper.event.entity';

  export class PhantomPreSpawnEvent extends com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent {
entity: org_bukkit_entity_Entity;
spawningEntity: org_bukkit_entity_Entity;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getSpawningEntity(): org_bukkit_entity_Entity;
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
constructor(arg0: org_bukkit_Location, arg1: org_bukkit_entity_Entity, arg2: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PreCreatureSpawnEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
location: org_bukkit_Location;
type: org_bukkit_entity_EntityType;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
shouldAbortSpawn: boolean;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
type: org_bukkit_entity_EntityType;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
class: java_lang_Class<java_lang_Object>;
getType(): org_bukkit_entity_EntityType;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setShouldAbortSpawn(arg0: boolean): void;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getSpawnLocation(): org_bukkit_Location;
shouldAbortSpawn(): boolean;
getReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_Location, arg1: org_bukkit_entity_EntityType, arg2: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Advancement as org_bukkit_advancement_Advancement } from 'org.bukkit.advancement';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerAdvancementCriterionGrantEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
advancement: org_bukkit_advancement_Advancement;
criterion: string;
cancel: boolean;
handlers: org_bukkit_event_HandlerList;
criterion: string;
advancement: org_bukkit_advancement_Advancement;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getCriterion(): string;
getAdvancement(): org_bukkit_advancement_Advancement;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_advancement_Advancement, arg2: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerArmorChangeEvent extends org_bukkit_event_player_PlayerEvent {
static HANDLERS: org_bukkit_event_HandlerList;
slotType: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
oldItem: org_bukkit_inventory_ItemStack;
newItem: org_bukkit_inventory_ItemStack;
handlers: org_bukkit_event_HandlerList;
oldItem: org_bukkit_inventory_ItemStack;
newItem: org_bukkit_inventory_ItemStack;
static handlerList: org_bukkit_event_HandlerList;
slotType: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
toString(): string;
getHandlers(): org_bukkit_event_HandlerList;
getOldItem(): org_bukkit_inventory_ItemStack;
getNewItem(): org_bukkit_inventory_ItemStack;
static getHandlerList(): org_bukkit_event_HandlerList;
getSlotType(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
callEvent(): boolean;
getEventName(): string;
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_entity_Player, arg1: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType, arg2: org_bukkit_inventory_ItemStack, arg3: org_bukkit_inventory_ItemStack);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent' {
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Set as java_util_Set } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class SlotType extends java_lang_Enum<com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType> {
static HEAD: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static CHEST: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static LEGS: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static FEET: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
mutableTypes: java_util_Set<org_bukkit_Material>;
immutableTypes: java_util_Set<org_bukkit_Material>;
static $VALUES: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
static byMaterial: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
types: java_util_Set<org_bukkit_Material>;
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
static valueOf(arg0: string): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static getByMaterial(arg0: org_bukkit_Material): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static isEquipable(arg0: org_bukkit_Material): boolean;
getTypes(): java_util_Set<org_bukkit_Material>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent' {
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Set as java_util_Set } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class SlotType extends java_lang_Enum<com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType> {
static HEAD: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static CHEST: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static LEGS: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static FEET: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
mutableTypes: java_util_Set<org_bukkit_Material>;
immutableTypes: java_util_Set<org_bukkit_Material>;
static $VALUES: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
static byMaterial: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
types: java_util_Set<org_bukkit_Material>;
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
static valueOf(arg0: string): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static getByMaterial(arg0: org_bukkit_Material): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static isEquipable(arg0: org_bukkit_Material): boolean;
getTypes(): java_util_Set<org_bukkit_Material>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerAttackEntityCooldownResetEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
cooledAttackStrength: number;
cancel: boolean;
static handlers: org_bukkit_event_HandlerList;
attackedEntity: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList;
attackedEntity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
cooledAttackStrength: number;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getAttackedEntity(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getCooledAttackStrength(): number;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_entity_Entity, arg2: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerClientOptionsChangeEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
locale: string;
viewDistance: number;
chatVisibility: com_destroystokyo_paper_ClientOption_ChatVisibility;
chatColors: boolean;
skinparts: com_destroystokyo_paper_SkinParts;
mainHand: org_bukkit_inventory_MainHand;
handlers: org_bukkit_event_HandlerList;
locale: string;
viewDistance: number;
static handlerList: org_bukkit_event_HandlerList;
mainHand: org_bukkit_inventory_MainHand;
chatVisibility: com_destroystokyo_paper_ClientOption_ChatVisibility;
skinParts: com_destroystokyo_paper_SkinParts;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getLocale(): string;
hasViewDistanceChanged(): boolean;
hasLocaleChanged(): boolean;
hasChatVisibilityChanged(): boolean;
hasChatColorsEnabledChanged(): boolean;
hasSkinPartsChanged(): boolean;
hasMainHandChanged(): boolean;
getViewDistance(): number;
static getHandlerList(): org_bukkit_event_HandlerList;
hasChatColorsEnabled(): boolean;
getMainHand(): org_bukkit_inventory_MainHand;
getChatVisibility(): com_destroystokyo_paper_ClientOption_ChatVisibility;
getSkinParts(): com_destroystokyo_paper_SkinParts;
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
constructor(arg0: org_bukkit_entity_Player, arg1: string, arg2: number, arg3: com_destroystokyo_paper_ClientOption_ChatVisibility, arg4: boolean, arg5: com_destroystokyo_paper_SkinParts, arg6: org_bukkit_inventory_MainHand);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { UUID as java_util_UUID } from 'java.util';
import { InetAddress as java_net_InetAddress } from 'java.net';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PlayerConnectionCloseEvent extends org_bukkit_event_Event {
static HANDLERS: org_bukkit_event_HandlerList;
playerUniqueId: java_util_UUID;
playerName: string;
ipAddress: java_net_InetAddress;
handlers: org_bukkit_event_HandlerList;
playerUniqueId: java_util_UUID;
static handlerList: org_bukkit_event_HandlerList;
playerName: string;
ipAddress: java_net_InetAddress;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getPlayerUniqueId(): java_util_UUID;
static getHandlerList(): org_bukkit_event_HandlerList;
getPlayerName(): string;
getIpAddress(): java_net_InetAddress;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_util_UUID, arg1: string, arg2: java_net_InetAddress, arg3: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Firework as org_bukkit_entity_Firework, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerElytraBoostEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
itemStack: org_bukkit_inventory_ItemStack;
firework: org_bukkit_entity_Firework;
consume: boolean;
handlers: org_bukkit_event_HandlerList;
firework: org_bukkit_entity_Firework;
itemStack: org_bukkit_inventory_ItemStack;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getFirework(): org_bukkit_entity_Firework;
setShouldConsume(arg0: boolean): void;
getItemStack(): org_bukkit_inventory_ItemStack;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
shouldConsume(): boolean;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_inventory_ItemStack, arg2: org_bukkit_entity_Firework);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { UUID as java_util_UUID } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PlayerHandshakeEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
static HANDLERS: org_bukkit_event_HandlerList;
originalHandshake: string;
cancelled: boolean;
serverHostname: string;
socketAddressHostname: string;
uniqueId: java_util_UUID;
propertiesJson: string;
failed: boolean;
failMessage: string;
handlers: org_bukkit_event_HandlerList;
originalHandshake: string;
serverHostname: string;
socketAddressHostname: string;
propertiesJson: string;
failMessage: string;
uniqueId: java_util_UUID;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getOriginalHandshake(): string;
getServerHostname(): string;
setServerHostname(arg0: string): void;
getSocketAddressHostname(): string;
setSocketAddressHostname(arg0: string): void;
setUniqueId(arg0: java_util_UUID): void;
getPropertiesJson(): string;
isFailed(): boolean;
setFailed(arg0: boolean): void;
setPropertiesJson(arg0: string): void;
getFailMessage(): string;
setFailMessage(arg0: string): void;
getUniqueId(): java_util_UUID;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { PlayerSpawnLocationEvent as org_spigotmc_event_player_PlayerSpawnLocationEvent } from 'org.spigotmc.event.player';

  export class PlayerInitialSpawnEvent extends org_spigotmc_event_player_PlayerSpawnLocationEvent {
player: org_bukkit_entity_Player;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getPlayer(): org_bukkit_entity_Player;
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

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerJumpEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancel: boolean;
from: org_bukkit_Location;
to: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
from: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
to: org_bukkit_Location;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getFrom(): org_bukkit_Location;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getTo(): org_bukkit_Location;
setFrom(arg0: org_bukkit_Location): void;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_Location, arg2: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Projectile as org_bukkit_entity_Projectile, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerLaunchProjectileEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
projectile: org_bukkit_entity_Projectile;
itemStack: org_bukkit_inventory_ItemStack;
consumeItem: boolean;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
itemStack: org_bukkit_inventory_ItemStack;
static handlerList: org_bukkit_event_HandlerList;
projectile: org_bukkit_entity_Projectile;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setShouldConsume(arg0: boolean): void;
getItemStack(): org_bukkit_inventory_ItemStack;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getProjectile(): org_bukkit_entity_Projectile;
shouldConsume(): boolean;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_inventory_ItemStack, arg2: org_bukkit_entity_Projectile);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerLocaleChangeEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
oldLocale: string;
newLocale: string;
handlers: org_bukkit_event_HandlerList;
oldLocale: string;
newLocale: string;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getOldLocale(): string;
getNewLocale(): string;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Player, arg1: string, arg2: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerNaturallySpawnCreaturesEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
radius: number;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
spawnRadius: number;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getSpawnRadius(): number;
setSpawnRadius(arg0: number): void;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Player, arg1: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ExperienceOrb as org_bukkit_entity_ExperienceOrb, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerPickupExperienceEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
experienceOrb: org_bukkit_entity_ExperienceOrb;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
experienceOrb: org_bukkit_entity_ExperienceOrb;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getExperienceOrb(): org_bukkit_entity_ExperienceOrb;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_entity_ExperienceOrb);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerPostRespawnEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
respawnedLocation: org_bukkit_Location;
isBedSpawn: boolean;
handlers: org_bukkit_event_HandlerList;
respawnedLocation: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getRespawnedLocation(): org_bukkit_Location;
static getHandlerList(): org_bukkit_event_HandlerList;
isBedSpawn(): boolean;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_Location, arg2: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Set as java_util_Set, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';

  export class PlayerProfile {
name: string;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
id: java_util_UUID;
getName(): string;
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
setProperties(arg0: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
setProperty(arg0: com_destroystokyo_paper_profile_ProfileProperty): void;
setName(arg0: string): string;
getId(): java_util_UUID;
complete(arg0: boolean): boolean;
complete(arg0: boolean, arg1: boolean): boolean;
complete(): boolean;
isComplete(): boolean;
setId(arg0: java_util_UUID): java_util_UUID;
hasProperty(arg0: string): boolean;
removeProperty(arg0: string): boolean;
removeProperty(arg0: com_destroystokyo_paper_profile_ProfileProperty): boolean;
removeProperties(arg0: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): boolean;
clearProperties(): void;
completeFromCache(arg0: boolean): boolean;
completeFromCache(): boolean;
completeFromCache(arg0: boolean, arg1: boolean): boolean;
hasTextures(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerReadyArrowEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
bow: org_bukkit_inventory_ItemStack;
arrow: org_bukkit_inventory_ItemStack;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
bow: org_bukkit_inventory_ItemStack;
static handlerList: org_bukkit_event_HandlerList;
arrow: org_bukkit_inventory_ItemStack;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getBow(): org_bukkit_inventory_ItemStack;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getArrow(): org_bukkit_inventory_ItemStack;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_inventory_ItemStack, arg2: org_bukkit_inventory_ItemStack);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerStartSpectatingEntityEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
currentSpectatorTarget: org_bukkit_entity_Entity;
newSpectatorTarget: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList;
currentSpectatorTarget: org_bukkit_entity_Entity;
newSpectatorTarget: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getCurrentSpectatorTarget(): org_bukkit_entity_Entity;
getNewSpectatorTarget(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_entity_Entity, arg2: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerStopSpectatingEntityEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
spectatorTarget: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
spectatorTarget: org_bukkit_entity_Entity;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getSpectatorTarget(): org_bukkit_entity_Entity;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { EndGateway as org_bukkit_block_EndGateway } from 'org.bukkit.block';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerTeleportEvent as org_bukkit_event_player_PlayerTeleportEvent } from 'org.bukkit.event.player';

  export class PlayerTeleportEndGatewayEvent extends org_bukkit_event_player_PlayerTeleportEvent {
gateway: org_bukkit_block_EndGateway;
gateway: org_bukkit_block_EndGateway;
from: org_bukkit_Location;
to: org_bukkit_Location;
player: org_bukkit_entity_Player;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getGateway(): org_bukkit_block_EndGateway;
isCancelled(): boolean;
getFrom(): org_bukkit_Location;
setCancelled(arg0: boolean): void;
getTo(): org_bukkit_Location;
setFrom(arg0: org_bukkit_Location): void;
setTo(arg0: org_bukkit_Location): void;
getPlayer(): org_bukkit_entity_Player;
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
constructor(arg0: org_bukkit_entity_Player, arg1: org_bukkit_Location, arg2: org_bukkit_Location, arg3: org_bukkit_block_EndGateway);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { EquipmentSlot as org_bukkit_inventory_EquipmentSlot } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerUseUnknownEntityEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
entityId: number;
attack: boolean;
hand: org_bukkit_inventory_EquipmentSlot;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
entityId: number;
hand: org_bukkit_inventory_EquipmentSlot;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isAttack(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
getEntityId(): number;
getHand(): org_bukkit_inventory_EquipmentSlot;
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
constructor(arg0: org_bukkit_entity_Player, arg1: number, arg2: boolean, arg3: org_bukkit_inventory_EquipmentSlot);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PreCreatureSpawnEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
location: org_bukkit_Location;
type: org_bukkit_entity_EntityType;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
shouldAbortSpawn: boolean;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
type: org_bukkit_entity_EntityType;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
class: java_lang_Class<java_lang_Object>;
getType(): org_bukkit_entity_EntityType;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setShouldAbortSpawn(arg0: boolean): void;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getSpawnLocation(): org_bukkit_Location;
shouldAbortSpawn(): boolean;
getReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_Location, arg1: org_bukkit_entity_EntityType, arg2: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { Collection as java_util_Collection } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty, PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PreFillProfileEvent extends org_bukkit_event_Event {
profile: com_destroystokyo_paper_profile_PlayerProfile;
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
class: java_lang_Class<java_lang_Object>;
setProperties(arg0: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: com_destroystokyo_paper_profile_PlayerProfile);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Set as java_util_Set, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PreLookupProfileEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
name: string;
uuid: java_util_UUID;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
name: string;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
uUID: java_util_UUID;
profileProperties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
class: java_lang_Class<java_lang_Object>;
getName(): string;
getHandlers(): org_bukkit_event_HandlerList;
setProfileProperties(arg0: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>): void;
addProfileProperties(arg0: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>): void;
static getHandlerList(): org_bukkit_event_HandlerList;
setUUID(arg0: java_util_UUID): void;
getUUID(): java_util_UUID;
getProfileProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.inventory' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack, InventoryView as org_bukkit_inventory_InventoryView } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InventoryEvent as org_bukkit_event_inventory_InventoryEvent } from 'org.bukkit.event.inventory';

  export class PrepareResultEvent extends org_bukkit_event_inventory_InventoryEvent {
static handlers: org_bukkit_event_HandlerList;
result: org_bukkit_inventory_ItemStack;
handlers: org_bukkit_event_HandlerList;
result: org_bukkit_inventory_ItemStack;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
setResult(arg0: org_bukkit_inventory_ItemStack): void;
getResult(): org_bukkit_inventory_ItemStack;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_inventory_InventoryView, arg1: org_bukkit_inventory_ItemStack);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { PreCreatureSpawnEvent as com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent } from 'com.destroystokyo.paper.event.entity';

  export class PreSpawnerSpawnEvent extends com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent {
spawnerLocation: org_bukkit_Location;
spawnerLocation: org_bukkit_Location;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getSpawnerLocation(): org_bukkit_Location;
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
constructor(arg0: org_bukkit_Location, arg1: org_bukkit_entity_EntityType, arg2: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Object as java_lang_Object } from 'java.lang';

  export class ProfileProperty extends java_lang_Object {
name: string;
value: string;
signature: string;
name: string;
value: string;
signature: string;
getName(): string;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getValue(): string;
getSignature(): string;
isSigned(): boolean;
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: string, arg2: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ProfileWhitelistVerifyEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
profile: com_destroystokyo_paper_profile_PlayerProfile;
whitelistEnabled: boolean;
whitelisted: boolean;
isOp: boolean;
kickMessage: string;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
kickMessage: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
setKickMessage(arg0: string): void;
isWhitelistEnabled(): boolean;
isOp(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
isWhitelisted(): boolean;
setWhitelisted(arg0: boolean): void;
getKickMessage(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: com_destroystokyo_paper_profile_PlayerProfile, arg1: boolean, arg2: boolean, arg3: boolean, arg4: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Projectile as org_bukkit_entity_Projectile } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class ProjectileCollideEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
collidedWith: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
collidedWith: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Projectile;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getCollidedWith(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Projectile;
getEntity(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Projectile, arg1: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player, EntityType as org_bukkit_entity_EntityType, Pose as org_bukkit_entity_Pose, Projectile as org_bukkit_entity_Projectile, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Pathfinder as com_destroystokyo_paper_entity_Pathfinder, TargetEntityInfo as com_destroystokyo_paper_entity_TargetEntityInfo } from 'com.destroystokyo.paper.entity';
import { MemoryKey as org_bukkit_entity_memory_MemoryKey } from 'org.bukkit.entity.memory';
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class } from 'java.lang';
import { EntityEquipment as org_bukkit_inventory_EntityEquipment, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { RayTraceResult as org_bukkit_util_RayTraceResult, BoundingBox as org_bukkit_util_BoundingBox, Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { FluidCollisionMode as org_bukkit_FluidCollisionMode, Location as org_bukkit_Location, Material as org_bukkit_Material, Server as org_bukkit_Server, World as org_bukkit_World, Chunk as org_bukkit_Chunk, EntityEffect as org_bukkit_EntityEffect } from 'org.bukkit';
import { Set as java_util_Set, List as java_util_List, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace, PistonMoveReaction as org_bukkit_block_PistonMoveReaction } from 'org.bukkit.block';
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { TargetBlockInfo as com_destroystokyo_paper_block_TargetBlockInfo } from 'com.destroystokyo.paper.block';
import { PotionEffect as org_bukkit_potion_PotionEffect, PotionEffectType as org_bukkit_potion_PotionEffectType } from 'org.bukkit.potion';
import { Attribute as org_bukkit_attribute_Attribute, AttributeInstance as org_bukkit_attribute_AttributeInstance } from 'org.bukkit.attribute';
import { Spigot as org_bukkit_command_CommandSender_Spigot } from 'org.bukkit.command.CommandSender';
import { Spigot as org_bukkit_entity_Entity_Spigot } from 'org.bukkit.entity.Entity';
import { TeleportCause as org_bukkit_event_player_PlayerTeleportEvent_TeleportCause } from 'org.bukkit.event.player.PlayerTeleportEvent';
import { CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';
import { EntityDamageEvent as org_bukkit_event_entity_EntityDamageEvent } from 'org.bukkit.event.entity';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { MetadataValue as org_bukkit_metadata_MetadataValue } from 'org.bukkit.metadata';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Permission as org_bukkit_permissions_Permission, PermissionAttachment as org_bukkit_permissions_PermissionAttachment, PermissionAttachmentInfo as org_bukkit_permissions_PermissionAttachmentInfo } from 'org.bukkit.permissions';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';

  export class RangedEntity implements org_bukkit_entity_Mob {
target: org_bukkit_entity_LivingEntity;
pathfinder: com_destroystokyo_paper_entity_Pathfinder;
equipment: org_bukkit_inventory_EntityEquipment;
activeItem: org_bukkit_inventory_ItemStack;
itemUseRemainingTime: number;
handRaisedTime: number;
shieldBlockingDelay: number;
targetEntity: org_bukkit_entity_Entity;
targetEntity: org_bukkit_entity_Entity;
leashHolder: org_bukkit_entity_Entity;
eyeHeight: number;
eyeHeight: number;
eyeLocation: org_bukkit_Location;
lineOfSight: java_util_List<org_bukkit_block_Block>;
targetBlock: org_bukkit_block_Block;
targetBlock: org_bukkit_block_Block;
targetBlock: org_bukkit_block_Block;
targetBlockFace: org_bukkit_block_BlockFace;
targetBlockFace: org_bukkit_block_BlockFace;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo;
lastTwoTargetBlocks: java_util_List<org_bukkit_block_Block>;
targetBlockExact: org_bukkit_block_Block;
targetBlockExact: org_bukkit_block_Block;
remainingAir: number;
maximumAir: number;
maximumNoDamageTicks: number;
lastDamage: number;
noDamageTicks: number;
killer: org_bukkit_entity_Player;
potionEffect: org_bukkit_potion_PotionEffect;
activePotionEffects: java_util_Collection<org_bukkit_potion_PotionEffect>;
removeWhenFarAway: boolean;
canPickupItems: boolean;
collidableExemptions: java_util_Set<java_util_UUID>;
memory: T;
arrowsStuck: number;
attribute: org_bukkit_attribute_AttributeInstance;
health: number;
maxHealth: number;
absorptionAmount: number;
location: org_bukkit_Location;
location: org_bukkit_Location;
type: org_bukkit_entity_EntityType;
origin: org_bukkit_Location;
width: number;
height: number;
server: org_bukkit_Server;
world: org_bukkit_World;
boundingBox: org_bukkit_util_BoundingBox;
uniqueId: java_util_UUID;
chunk: org_bukkit_Chunk;
pistonMoveReaction: org_bukkit_block_PistonMoveReaction;
fireTicks: number;
maxFireTicks: number;
scoreboardTags: java_util_Set<string>;
pose: org_bukkit_entity_Pose;
vehicle: org_bukkit_entity_Entity;
passengers: java_util_List<org_bukkit_entity_Entity>;
facing: org_bukkit_block_BlockFace;
velocity: org_bukkit_util_Vector;
nearbyEntities: java_util_List<org_bukkit_entity_Entity>;
entityId: number;
passenger: org_bukkit_entity_Entity;
fallDistance: number;
lastDamageCause: org_bukkit_event_entity_EntityDamageEvent;
ticksLived: number;
portalCooldown: number;
entitySpawnReason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
metadata: java_util_List<org_bukkit_metadata_MetadataValue>;
name: string;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
customName: string;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
seed: number;
lootTable: org_bukkit_loot_LootTable;
isChargingAttack(): boolean;
rangedAttack(arg0: org_bukkit_entity_LivingEntity, arg1: number): void;
setChargingAttack(arg0: boolean): void;
getTarget(): org_bukkit_entity_LivingEntity;
setTarget(arg0: org_bukkit_entity_LivingEntity): void;
isInDaylight(): boolean;
getPathfinder(): com_destroystokyo_paper_entity_Pathfinder;
setAware(arg0: boolean): void;
isAware(): boolean;
setMemory<T extends java_lang_Object>(arg0: org_bukkit_entity_memory_MemoryKey<T>, arg1: T): void;
getEquipment(): org_bukkit_inventory_EntityEquipment;
attack(arg0: org_bukkit_entity_Entity): void;
isSleeping(): boolean;
isSwimming(): boolean;
setSwimming(arg0: boolean): void;
isCollidable(): boolean;
isGliding(): boolean;
isRiptiding(): boolean;
setJumping(arg0: boolean): void;
hasLineOfSight(arg0: org_bukkit_entity_Entity): boolean;
isHandRaised(): boolean;
getActiveItem(): org_bukkit_inventory_ItemStack;
getItemUseRemainingTime(): number;
getHandRaisedTime(): number;
getShieldBlockingDelay(): number;
getTargetEntity(arg0: number): org_bukkit_entity_Entity;
getTargetEntity(arg0: number, arg1: boolean): org_bukkit_entity_Entity;
setShieldBlockingDelay(arg0: number): void;
rayTraceBlocks(arg0: number): org_bukkit_util_RayTraceResult;
rayTraceBlocks(arg0: number, arg1: org_bukkit_FluidCollisionMode): org_bukkit_util_RayTraceResult;
getLeashHolder(): org_bukkit_entity_Entity;
setLeashHolder(arg0: org_bukkit_entity_Entity): boolean;
isLeashed(): boolean;
getEyeHeight(): number;
getEyeHeight(arg0: boolean): number;
getEyeLocation(): org_bukkit_Location;
getLineOfSight(arg0: java_util_Set<org_bukkit_Material>, arg1: number): java_util_List<org_bukkit_block_Block>;
getTargetBlock(arg0: number): org_bukkit_block_Block;
getTargetBlock(arg0: number, arg1: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_Block;
getTargetBlock(arg0: java_util_Set<org_bukkit_Material>, arg1: number): org_bukkit_block_Block;
getTargetBlockFace(arg0: number, arg1: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_BlockFace;
getTargetBlockFace(arg0: number): org_bukkit_block_BlockFace;
getTargetBlockInfo(arg0: number, arg1: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): com_destroystokyo_paper_block_TargetBlockInfo;
getTargetBlockInfo(arg0: number): com_destroystokyo_paper_block_TargetBlockInfo;
getTargetEntityInfo(arg0: number, arg1: boolean): com_destroystokyo_paper_entity_TargetEntityInfo;
getTargetEntityInfo(arg0: number): com_destroystokyo_paper_entity_TargetEntityInfo;
getLastTwoTargetBlocks(arg0: java_util_Set<org_bukkit_Material>, arg1: number): java_util_List<org_bukkit_block_Block>;
getTargetBlockExact(arg0: number, arg1: org_bukkit_FluidCollisionMode): org_bukkit_block_Block;
getTargetBlockExact(arg0: number): org_bukkit_block_Block;
getRemainingAir(): number;
setRemainingAir(arg0: number): void;
getMaximumAir(): number;
setMaximumAir(arg0: number): void;
getMaximumNoDamageTicks(): number;
setMaximumNoDamageTicks(arg0: number): void;
getLastDamage(): number;
setLastDamage(arg0: number): void;
getNoDamageTicks(): number;
setNoDamageTicks(arg0: number): void;
getKiller(): org_bukkit_entity_Player;
setKiller(arg0: org_bukkit_entity_Player): void;
addPotionEffect(arg0: org_bukkit_potion_PotionEffect): boolean;
addPotionEffect(arg0: org_bukkit_potion_PotionEffect, arg1: boolean): boolean;
addPotionEffects(arg0: java_util_Collection<org_bukkit_potion_PotionEffect>): boolean;
hasPotionEffect(arg0: org_bukkit_potion_PotionEffectType): boolean;
getPotionEffect(arg0: org_bukkit_potion_PotionEffectType): org_bukkit_potion_PotionEffect;
removePotionEffect(arg0: org_bukkit_potion_PotionEffectType): void;
getActivePotionEffects(): java_util_Collection<org_bukkit_potion_PotionEffect>;
getRemoveWhenFarAway(): boolean;
setRemoveWhenFarAway(arg0: boolean): void;
setCanPickupItems(arg0: boolean): void;
getCanPickupItems(): boolean;
setGliding(arg0: boolean): void;
setAI(arg0: boolean): void;
hasAI(): boolean;
swingMainHand(): void;
swingOffHand(): void;
setCollidable(arg0: boolean): void;
getCollidableExemptions(): java_util_Set<java_util_UUID>;
getMemory<T extends java_lang_Object>(arg0: org_bukkit_entity_memory_MemoryKey<T>): T;
getArrowsStuck(): number;
setArrowsStuck(arg0: number): void;
isJumping(): boolean;
getAttribute(arg0: org_bukkit_attribute_Attribute): org_bukkit_attribute_AttributeInstance;
getHealth(): number;
getMaxHealth(): number;
setHealth(arg0: number): void;
damage(arg0: number, arg1: org_bukkit_entity_Entity): void;
damage(arg0: number): void;
getAbsorptionAmount(): number;
setAbsorptionAmount(arg0: number): void;
setMaxHealth(arg0: number): void;
resetMaxHealth(): void;
remove(): void;
isEmpty(): boolean;
getLocation(): org_bukkit_Location;
getLocation(arg0: org_bukkit_Location): org_bukkit_Location;
getType(): org_bukkit_entity_EntityType;
isValid(): boolean;
getOrigin(): org_bukkit_Location;
getWidth(): number;
getHeight(): number;
getServer(): org_bukkit_Server;
getWorld(): org_bukkit_World;
spigot(): org_bukkit_command_CommandSender_Spigot;
spigot(): org_bukkit_entity_Entity_Spigot;
getBoundingBox(): org_bukkit_util_BoundingBox;
getUniqueId(): java_util_UUID;
getChunk(): org_bukkit_Chunk;
getPistonMoveReaction(): org_bukkit_block_PistonMoveReaction;
isInvulnerable(): boolean;
getFireTicks(): number;
setFireTicks(arg0: number): void;
playEffect(arg0: org_bukkit_EntityEffect): void;
getMaxFireTicks(): number;
getScoreboardTags(): java_util_Set<string>;
addScoreboardTag(arg0: string): boolean;
removeScoreboardTag(arg0: string): boolean;
getPose(): org_bukkit_entity_Pose;
getVehicle(): org_bukkit_entity_Entity;
isInWater(): boolean;
setSilent(arg0: boolean): void;
getPassengers(): java_util_List<org_bukkit_entity_Entity>;
isInRain(): boolean;
isInBubbleColumn(): boolean;
isInWaterOrRain(): boolean;
isInWaterOrBubbleColumn(): boolean;
isInLava(): boolean;
setCustomNameVisible(arg0: boolean): void;
addPassenger(arg0: org_bukkit_entity_Entity): boolean;
removePassenger(arg0: org_bukkit_entity_Entity): boolean;
setInvulnerable(arg0: boolean): void;
getFacing(): org_bukkit_block_BlockFace;
isSilent(): boolean;
getVelocity(): org_bukkit_util_Vector;
setVelocity(arg0: org_bukkit_util_Vector): void;
isOnGround(): boolean;
teleport(arg0: org_bukkit_Location): boolean;
teleport(arg0: org_bukkit_entity_Entity): boolean;
teleport(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
teleport(arg0: org_bukkit_Location, arg1: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
getNearbyEntities(arg0: number, arg1: number, arg2: number): java_util_List<org_bukkit_entity_Entity>;
setRotation(arg0: number, arg1: number): void;
teleportAsync(arg0: org_bukkit_Location): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
teleportAsync(arg0: org_bukkit_Location, arg1: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
getEntityId(): number;
isDead(): boolean;
isPersistent(): boolean;
setPersistent(arg0: boolean): void;
getPassenger(): org_bukkit_entity_Entity;
setPassenger(arg0: org_bukkit_entity_Entity): boolean;
eject(): boolean;
getFallDistance(): number;
setFallDistance(arg0: number): void;
setLastDamageCause(arg0: org_bukkit_event_entity_EntityDamageEvent): void;
getLastDamageCause(): org_bukkit_event_entity_EntityDamageEvent;
getTicksLived(): number;
setTicksLived(arg0: number): void;
isInsideVehicle(): boolean;
leaveVehicle(): boolean;
isCustomNameVisible(): boolean;
setGlowing(arg0: boolean): void;
isGlowing(): boolean;
hasGravity(): boolean;
setGravity(arg0: boolean): void;
getPortalCooldown(): number;
setPortalCooldown(arg0: number): void;
fromMobSpawner(): boolean;
getEntitySpawnReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
isInWaterOrRainOrBubbleColumn(): boolean;
setMetadata(arg0: string, arg1: org_bukkit_metadata_MetadataValue): void;
hasMetadata(arg0: string): boolean;
removeMetadata(arg0: string, arg1: org_bukkit_plugin_Plugin): void;
getMetadata(arg0: string): java_util_List<org_bukkit_metadata_MetadataValue>;
getName(): string;
sendMessage(arg0: net_md_5_bungee_api_chat_BaseComponent): void;
sendMessage(...arg0: net_md_5_bungee_api_chat_BaseComponent[]): void;
sendMessage(arg0: string): void;
sendMessage(arg0: string[]): void;
hasPermission(arg0: org_bukkit_permissions_Permission): boolean;
hasPermission(arg0: string): boolean;
isPermissionSet(arg0: string): boolean;
isPermissionSet(arg0: org_bukkit_permissions_Permission): boolean;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: number): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: boolean, arg3: number): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: boolean): org_bukkit_permissions_PermissionAttachment;
removeAttachment(arg0: org_bukkit_permissions_PermissionAttachment): void;
recalculatePermissions(): void;
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
isOp(): boolean;
setOp(arg0: boolean): void;
setCustomName(arg0: string): void;
getCustomName(): string;
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;
launchProjectile<T extends org_bukkit_entity_Projectile>(arg0: java_lang_Class<T>): T;
launchProjectile<T extends org_bukkit_entity_Projectile>(arg0: java_lang_Class<T>, arg1: org_bukkit_util_Vector): T;
setSeed(arg0: number): void;
getSeed(): number;
getLootTable(): org_bukkit_loot_LootTable;
setLootTable(arg0: org_bukkit_loot_LootTable): void;
setLootTable(arg0: org_bukkit_loot_LootTable, arg1: number): void;
hasLootTable(): boolean;
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Map as java_util_Map } from 'java.util';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';

  export class Reputation extends java_lang_Object {
static REPUTATION_TYPES: com_destroystokyo_paper_entity_villager_ReputationType[];
reputation: number[];
reputation: number;
setReputation(arg0: com_destroystokyo_paper_entity_villager_ReputationType, arg1: number): void;
getReputation(arg0: com_destroystokyo_paper_entity_villager_ReputationType): number;
constructor(arg0: java_util_Map<com_destroystokyo_paper_entity_villager_ReputationType, java_lang_Integer>);
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ReputationType extends java_lang_Enum<com_destroystokyo_paper_entity_villager_ReputationType> {
static MAJOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MAJOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static TRADING: com_destroystokyo_paper_entity_villager_ReputationType;
static $VALUES: com_destroystokyo_paper_entity_villager_ReputationType[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_entity_villager_ReputationType[];
static valueOf(arg0: string): com_destroystokyo_paper_entity_villager_ReputationType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { SafeClassDefiner as com_destroystokyo_paper_event_executor_asm_SafeClassDefiner, ClassDefiner as com_destroystokyo_paper_event_executor_asm_ClassDefiner } from 'com.destroystokyo.paper.event.executor.asm';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { GeneratedClassLoader as com_destroystokyo_paper_event_executor_asm_SafeClassDefiner_GeneratedClassLoader } from 'com.destroystokyo.paper.event.executor.asm.SafeClassDefiner';

  export class SafeClassDefiner extends java_lang_Object implements com_destroystokyo_paper_event_executor_asm_ClassDefiner {
static INSTANCE: com_destroystokyo_paper_event_executor_asm_SafeClassDefiner;
loaders: java_util_concurrent_ConcurrentMap<java_lang_ClassLoader, com_destroystokyo_paper_event_executor_asm_SafeClassDefiner_GeneratedClassLoader>;
static $assertionsDisabled: boolean;
defineClass(arg0: java_lang_ClassLoader, arg1: string, arg2: number[]): java_lang_Class<java_lang_Object>;
isBypassAccessChecks(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm.SafeClassDefiner' {
import { Object as java_lang_Object, Class as java_lang_Class, ClassLoader as java_lang_ClassLoader } from 'java.lang';

  export class GeneratedClassLoader extends java_lang_ClassLoader {
static $assertionsDisabled: boolean;
classLoadingLock: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getClassLoadingLock(arg0: string): java_lang_Object;
hasClass(arg0: string): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { CommandSender as org_bukkit_command_CommandSender, Command as org_bukkit_command_Command } from 'org.bukkit.command';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';

  export class ServerCommandException extends com_destroystokyo_paper_exception_ServerException {
command: org_bukkit_command_Command;
commandSender: org_bukkit_command_CommandSender;
arguments: string[];
commandSender: org_bukkit_command_CommandSender;
arguments: string[];
command: org_bukkit_command_Command;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
getCommandSender(): org_bukkit_command_CommandSender;
getArguments(): string[];
getCommand(): org_bukkit_command_Command;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable, arg1: org_bukkit_command_Command, arg2: org_bukkit_command_CommandSender, arg3: string[]);
constructor(arg0: string, arg1: java_lang_Throwable, arg2: org_bukkit_command_Command, arg3: org_bukkit_command_CommandSender, arg4: string[]);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';

  export class ServerException extends java_lang_Exception {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable);
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Event as org_bukkit_event_Event, Listener as org_bukkit_event_Listener } from 'org.bukkit.event';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';

  export class ServerEventException extends com_destroystokyo_paper_exception_ServerPluginException {
listener: org_bukkit_event_Listener;
event: org_bukkit_event_Event;
event: org_bukkit_event_Event;
listener: org_bukkit_event_Listener;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
getEvent(): org_bukkit_event_Event;
getListener(): org_bukkit_event_Listener;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable, arg1: org_bukkit_plugin_Plugin, arg2: org_bukkit_event_Listener, arg3: org_bukkit_event_Event);
constructor(arg0: string, arg1: java_lang_Throwable, arg2: org_bukkit_plugin_Plugin, arg3: org_bukkit_event_Listener, arg4: org_bukkit_event_Event);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';

  export class ServerPluginException extends com_destroystokyo_paper_exception_ServerException {
responsiblePlugin: org_bukkit_plugin_Plugin;
responsiblePlugin: org_bukkit_plugin_Plugin;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
getResponsiblePlugin(): org_bukkit_plugin_Plugin;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable, arg1: org_bukkit_plugin_Plugin);
constructor(arg0: string, arg1: java_lang_Throwable, arg2: org_bukkit_plugin_Plugin);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';

  export class ServerException extends java_lang_Exception {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable);
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ServerExceptionEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
exception: com_destroystokyo_paper_exception_ServerException;
exception: com_destroystokyo_paper_exception_ServerException;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getException(): com_destroystokyo_paper_exception_ServerException;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: com_destroystokyo_paper_exception_ServerException);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';

  export class ServerInternalException extends com_destroystokyo_paper_exception_ServerException {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
static reportInternalException(arg0: java_lang_Throwable): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable);
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';

  export class ServerPluginEnableDisableException extends com_destroystokyo_paper_exception_ServerPluginException {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: java_lang_Throwable, arg2: org_bukkit_plugin_Plugin);
constructor(arg0: java_lang_Throwable, arg1: org_bukkit_plugin_Plugin);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';

  export class ServerPluginException extends com_destroystokyo_paper_exception_ServerException {
responsiblePlugin: org_bukkit_plugin_Plugin;
responsiblePlugin: org_bukkit_plugin_Plugin;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
getResponsiblePlugin(): org_bukkit_plugin_Plugin;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable, arg1: org_bukkit_plugin_Plugin);
constructor(arg0: string, arg1: java_lang_Throwable, arg2: org_bukkit_plugin_Plugin);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';

  export class ServerPluginMessageException extends com_destroystokyo_paper_exception_ServerPluginException {
player: org_bukkit_entity_Player;
channel: string;
data: number[];
channel: string;
data: number[];
player: org_bukkit_entity_Player;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
getChannel(): string;
getData(): number[];
getPlayer(): org_bukkit_entity_Player;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable, arg1: org_bukkit_plugin_Plugin, arg2: org_bukkit_entity_Player, arg3: string, arg4: number[]);
constructor(arg0: string, arg1: java_lang_Throwable, arg2: org_bukkit_plugin_Plugin, arg3: org_bukkit_entity_Player, arg4: string, arg5: number[]);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { BukkitTask as org_bukkit_scheduler_BukkitTask } from 'org.bukkit.scheduler';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';

  export class ServerSchedulerException extends com_destroystokyo_paper_exception_ServerPluginException {
task: org_bukkit_scheduler_BukkitTask;
task: org_bukkit_scheduler_BukkitTask;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
getTask(): org_bukkit_scheduler_BukkitTask;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable, arg1: org_bukkit_scheduler_BukkitTask);
constructor(arg0: string, arg1: java_lang_Throwable, arg2: org_bukkit_scheduler_BukkitTask);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Command as org_bukkit_command_Command, CommandSender as org_bukkit_command_CommandSender } from 'org.bukkit.command';
import { ServerCommandException as com_destroystokyo_paper_exception_ServerCommandException } from 'com.destroystokyo.paper.exception';

  export class ServerTabCompleteException extends com_destroystokyo_paper_exception_ServerCommandException {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: java_lang_Throwable, arg2: org_bukkit_command_Command, arg3: org_bukkit_command_CommandSender, arg4: string[]);
constructor(arg0: java_lang_Throwable, arg1: org_bukkit_command_Command, arg2: org_bukkit_command_CommandSender, arg3: string[]);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ServerTickEndEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
tickNumber: number;
tickDuration: number;
timeEnd: number;
handlers: org_bukkit_event_HandlerList;
tickNumber: number;
tickDuration: number;
timeRemaining: number;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getTickNumber(): number;
getTickDuration(): number;
getTimeRemaining(): number;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: number, arg2: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ServerTickStartEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
tickNumber: number;
handlers: org_bukkit_event_HandlerList;
tickNumber: number;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getTickNumber(): number;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, SkeletonHorse as org_bukkit_entity_SkeletonHorse } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class SkeletonHorseTrapEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_SkeletonHorse;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_SkeletonHorse;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_SkeletonHorse);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {


  export class SkinParts {
raw: number;
hasLeftSleeveEnabled(): boolean;
hasCapeEnabled(): boolean;
hasJacketEnabled(): boolean;
hasRightSleeveEnabled(): boolean;
hasLeftPantsEnabled(): boolean;
hasRightPantsEnabled(): boolean;
hasHatsEnabled(): boolean;
getRaw(): number;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';

  export class SlimeChangeDirectionEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
yaw: number;
newYaw: number;
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
setNewYaw(arg0: number): void;
getNewYaw(): number;
getEntityType(): org_bukkit_entity_EntityType;
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
constructor(arg0: org_bukkit_entity_Slime, arg1: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class SlimePathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Slime;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Slime;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class SlimePathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Slime;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Slime;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Slime as org_bukkit_entity_Slime, EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimeWanderEvent as com_destroystokyo_paper_event_entity_SlimeWanderEvent } from 'com.destroystokyo.paper.event.entity';

  export class SlimeSwimEvent extends com_destroystokyo_paper_event_entity_SlimeWanderEvent implements org_bukkit_event_Cancellable {
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Slime;
static handlerList: org_bukkit_event_HandlerList;
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Slime;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getEntityType(): org_bukkit_entity_EntityType;
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
constructor(arg0: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';

  export class SlimeWanderEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getEntityType(): org_bukkit_entity_EntityType;
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
constructor(arg0: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';

  export class SlimeTargetLivingEntityEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
target: org_bukkit_entity_LivingEntity;
target: org_bukkit_entity_LivingEntity;
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getTarget(): org_bukkit_entity_LivingEntity;
getEntityType(): org_bukkit_entity_EntityType;
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
constructor(arg0: org_bukkit_entity_Slime, arg1: org_bukkit_entity_LivingEntity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';

  export class SlimeWanderEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getEntityType(): org_bukkit_entity_EntityType;
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
constructor(arg0: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {
import { Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';

  export class SneakyThrow extends java_lang_Object {

static sneaky(arg0: java_lang_Throwable): void;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { EventExecutor as org_bukkit_plugin_EventExecutor } from 'org.bukkit.plugin';

  export class StaticMethodHandleEventExecutor extends java_lang_Object implements org_bukkit_plugin_EventExecutor {
eventClass: java_lang_Class<org_bukkit_event_Event>;
handle: java_lang_invoke_MethodHandle;
execute(arg0: org_bukkit_event_Listener, arg1: org_bukkit_event_Event): void;
constructor(arg0: java_lang_Class<org_bukkit_event_Event>, arg1: java_lang_reflect_Method);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
import { NetworkClient as com_destroystokyo_paper_network_NetworkClient } from 'com.destroystokyo.paper.network';

  export class StatusClient implements com_destroystokyo_paper_network_NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress;
isLegacy(): boolean;
getAddress(): java_net_InetSocketAddress;
getProtocolVersion(): number;
getVirtualHost(): java_net_InetSocketAddress;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace } from 'org.bukkit.block';
import { Object as java_lang_Object } from 'java.lang';

  export class TargetBlockInfo extends java_lang_Object {
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
relativeBlock: org_bukkit_block_Block;
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
getRelativeBlock(): org_bukkit_block_Block;
getBlock(): org_bukkit_block_Block;
getBlockFace(): org_bukkit_block_BlockFace;
constructor(arg0: org_bukkit_block_Block, arg1: org_bukkit_block_BlockFace);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block.TargetBlockInfo' {
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FluidMode extends java_lang_Enum<com_destroystokyo_paper_block_TargetBlockInfo_FluidMode> {
static NEVER: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static SOURCE_ONLY: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static ALWAYS: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static $VALUES: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
static valueOf(arg0: string): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object } from 'java.lang';

  export class TargetEntityInfo extends java_lang_Object {
entity: org_bukkit_entity_Entity;
hitVec: org_bukkit_util_Vector;
hitVector: org_bukkit_util_Vector;
entity: org_bukkit_entity_Entity;
getHitVector(): org_bukkit_util_Vector;
getEntity(): org_bukkit_entity_Entity;
constructor(arg0: org_bukkit_entity_Entity, arg1: org_bukkit_util_Vector);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { EntityType as org_bukkit_entity_EntityType, Egg as org_bukkit_entity_Egg } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ThrownEggHatchEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
egg: org_bukkit_entity_Egg;
hatching: boolean;
hatchType: org_bukkit_entity_EntityType;
numHatches: number;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
numHatches: number;
hatchingType: org_bukkit_entity_EntityType;
egg: org_bukkit_entity_Egg;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
getNumHatches(): number;
isHatching(): boolean;
getHatchingType(): org_bukkit_entity_EntityType;
getEgg(): org_bukkit_entity_Egg;
setHatching(arg0: boolean): void;
setHatchingType(arg0: org_bukkit_entity_EntityType): void;
setNumHatches(arg0: number): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: org_bukkit_entity_Egg, arg1: boolean, arg2: number, arg3: org_bukkit_entity_EntityType);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Object as java_lang_Object } from 'java.lang';

  export class Title extends java_lang_Object {
static DEFAULT_FADE_IN: number;
static DEFAULT_STAY: number;
static DEFAULT_FADE_OUT: number;
title: net_md_5_bungee_api_chat_BaseComponent[];
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
fadeIn: number;
stay: number;
fadeOut: number;
fadeIn: number;
stay: number;
fadeOut: number;
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
title: net_md_5_bungee_api_chat_BaseComponent[];
static builder(): com_destroystokyo_paper_Title_Builder;
getFadeIn(): number;
getStay(): number;
getFadeOut(): number;
getSubtitle(): net_md_5_bungee_api_chat_BaseComponent[];
getTitle(): net_md_5_bungee_api_chat_BaseComponent[];
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent[], arg1: net_md_5_bungee_api_chat_BaseComponent[]);
constructor(arg0: string, arg1: string);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent, arg1: net_md_5_bungee_api_chat_BaseComponent, arg2: number, arg3: number, arg4: number);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent[], arg1: net_md_5_bungee_api_chat_BaseComponent[], arg2: number, arg3: number, arg4: number);
constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent[]);
constructor(arg0: string);
constructor(arg0: net_md_5_bungee_api_chat_BaseComponent, arg1: net_md_5_bungee_api_chat_BaseComponent);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.Title' {
import { Title as com_destroystokyo_paper_Title } from 'com.destroystokyo.paper';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { Object as java_lang_Object } from 'java.lang';

  export class Builder extends java_lang_Object {
title: net_md_5_bungee_api_chat_BaseComponent[];
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
fadeIn: number;
stay: number;
fadeOut: number;
build(): com_destroystokyo_paper_Title;
title(arg0: net_md_5_bungee_api_chat_BaseComponent): com_destroystokyo_paper_Title_Builder;
title(arg0: string): com_destroystokyo_paper_Title_Builder;
title(arg0: net_md_5_bungee_api_chat_BaseComponent[]): com_destroystokyo_paper_Title_Builder;
subtitle(arg0: string): com_destroystokyo_paper_Title_Builder;
subtitle(arg0: net_md_5_bungee_api_chat_BaseComponent[]): com_destroystokyo_paper_Title_Builder;
subtitle(arg0: net_md_5_bungee_api_chat_BaseComponent): com_destroystokyo_paper_Title_Builder;
fadeIn(arg0: number): com_destroystokyo_paper_Title_Builder;
stay(arg0: number): com_destroystokyo_paper_Title_Builder;
fadeOut(arg0: number): com_destroystokyo_paper_Title_Builder;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';

  export class TNTPrimeEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
reason: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
primerEntity: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList;
primerEntity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
reason: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getPrimerEntity(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getReason(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
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
constructor(arg0: org_bukkit_block_Block, arg1: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason, arg2: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.TNTPrimeEvent' {
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class PrimeReason extends java_lang_Enum<com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason> {
static EXPLOSION: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static FIRE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static ITEM: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static PROJECTILE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static REDSTONE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static $VALUES: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
static valueOf(arg0: string): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.TNTPrimeEvent' {
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class PrimeReason extends java_lang_Enum<com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason> {
static EXPLOSION: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static FIRE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static ITEM: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static PROJECTILE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static REDSTONE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static $VALUES: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
class: java_lang_Class<java_lang_Object>;
static values(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
static valueOf(arg0: string): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Turtle as org_bukkit_entity_Turtle } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class TurtleGoHomeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Turtle;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Turtle;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Turtle);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Turtle as org_bukkit_entity_Turtle } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class TurtleLayEggEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
location: org_bukkit_Location;
eggCount: number;
location: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Turtle;
static handlerList: org_bukkit_event_HandlerList;
eggCount: number;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getLocation(): org_bukkit_Location;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setEggCount(arg0: number): void;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Turtle;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getEggCount(): number;
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
constructor(arg0: org_bukkit_entity_Turtle, arg1: org_bukkit_Location, arg2: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Turtle as org_bukkit_entity_Turtle, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class TurtleStartDiggingEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
location: org_bukkit_Location;
location: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Turtle;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getLocation(): org_bukkit_Location;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
getEntity(): org_bukkit_entity_Turtle;
getEntity(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
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
constructor(arg0: org_bukkit_entity_Turtle, arg1: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { Unsafe as sun_misc_Unsafe } from 'sun.misc';
import { Object as java_lang_Object } from 'java.lang';

  export class UnsafeUtils extends java_lang_Object {
static UNSAFE: sun_misc_Unsafe;
static unsafe: sun_misc_Unsafe;
static getUnsafe(): sun_misc_Unsafe;
static isUnsafeSupported(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType, Goal as com_destroystokyo_paper_entity_ai_Goal } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Bee as org_bukkit_entity_Bee, Blaze as org_bukkit_entity_Blaze, Cat as org_bukkit_entity_Cat, Dolphin as org_bukkit_entity_Dolphin, Drowned as org_bukkit_entity_Drowned, Creature as org_bukkit_entity_Creature, Enderman as org_bukkit_entity_Enderman, Evoker as org_bukkit_entity_Evoker, Fish as org_bukkit_entity_Fish, Fox as org_bukkit_entity_Fox, Ghast as org_bukkit_entity_Ghast, Guardian as org_bukkit_entity_Guardian, Illager as org_bukkit_entity_Illager, Illusioner as org_bukkit_entity_Illusioner, Spellcaster as org_bukkit_entity_Spellcaster, Llama as org_bukkit_entity_Llama, TraderLlama as org_bukkit_entity_TraderLlama, Monster as org_bukkit_entity_Monster, Ocelot as org_bukkit_entity_Ocelot, Panda as org_bukkit_entity_Panda, Phantom as org_bukkit_entity_Phantom, PigZombie as org_bukkit_entity_PigZombie, PolarBear as org_bukkit_entity_PolarBear, PufferFish as org_bukkit_entity_PufferFish, Rabbit as org_bukkit_entity_Rabbit, Raider as org_bukkit_entity_Raider, Ravager as org_bukkit_entity_Ravager, Shulker as org_bukkit_entity_Shulker, Silverfish as org_bukkit_entity_Silverfish, Skeleton as org_bukkit_entity_Skeleton, Slime as org_bukkit_entity_Slime, Spider as org_bukkit_entity_Spider, Squid as org_bukkit_entity_Squid, Turtle as org_bukkit_entity_Turtle, Vex as org_bukkit_entity_Vex, WanderingTrader as org_bukkit_entity_WanderingTrader, Mob as org_bukkit_entity_Mob, Vindicator as org_bukkit_entity_Vindicator, Wither as org_bukkit_entity_Wither, Wolf as org_bukkit_entity_Wolf, Zombie as org_bukkit_entity_Zombie, Animals as org_bukkit_entity_Animals, IronGolem as org_bukkit_entity_IronGolem, Tameable as org_bukkit_entity_Tameable, SkeletonHorse as org_bukkit_entity_SkeletonHorse, AbstractVillager as org_bukkit_entity_AbstractVillager, Parrot as org_bukkit_entity_Parrot, Creeper as org_bukkit_entity_Creeper, AbstractHorse as org_bukkit_entity_AbstractHorse } from 'org.bukkit.entity';
import { RangedEntity as com_destroystokyo_paper_entity_RangedEntity } from 'com.destroystokyo.paper.entity';

  export class VanillaGoal<T extends org_bukkit_entity_Mob> implements com_destroystokyo_paper_entity_ai_Goal<T> {
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
static BLAZE_FIREBALL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Blaze>;
static TEMPT_CHANCE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CAT_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CAT_RELAX_ON_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static DOLPHIN_SWIM_TO_TREASURE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DOLPHIN_SWIM_WITH_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DOLPHIN_PLAY_WITH_ITEMS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DROWNED_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_GOTO_BEACH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_GOTO_WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static DROWNED_SWIM_UP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_TRIDENT_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<com_destroystokyo_paper_entity_RangedEntity>;
static ENDERMAN_PICKUP_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static ENDERMAN_PLACE_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static PLAYER_WHO_LOOKED_AT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static ENDERMAN_FREEZE_WHEN_LOOKED_AT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static EVOKER_ATTACK_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Evoker>;
static EVOKER_CAST_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Evoker>;
static EVOKER_SUMMON_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Evoker>;
static EVOKER_WOLOLO_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Evoker>;
static FISH_SWIM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fish>;
static FOX_DEFEND_TRUSTED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FACEPLANT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_EAT_BERRIES: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FLOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FOLLOW_PARENT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_LOOK_AT_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_PERCH_AND_SEARCH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_POUNCE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_SEARCH_FOR_ITEMS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_SLEEP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_STROLL_THROUGH_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_SEEK_SHELTER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_STALK_PREY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static GHAST_ATTACK_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GHAST_IDLE_MOVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GHAST_MOVE_TOWARDS_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GUARDIAN_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Guardian>;
static RAIDER_OPEN_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Illager>;
static ILLUSIONER_BLINDNESS_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Illusioner>;
static ILLUSIONER_MIRROR_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Illusioner>;
static SPELLCASTER_CAST_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spellcaster>;
static LLAMA_ATTACK_WOLF: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
static LLAMA_HURT_BY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
static LLAMATRADER_DEFENDED_WANDERING_TRADER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_TraderLlama>;
static LONG_DISTANCE_PATROL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static OCELOT_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ocelot>;
static OCELOT_TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ocelot>;
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
static PHANTOM_ATTACK_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static PHANTOM_ATTACK_STRATEGY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static PHANTOM_CIRCLE_AROUND_ANCHOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static PHANTOM_SWEEP_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static ANGER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PigZombie>;
static ANGER_OTHER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PigZombie>;
static POLARBEAR_ATTACK_PLAYERS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_HURT_BY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_MELEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static PUFFERFISH_PUFF: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PufferFish>;
static EAT_CARROTS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static KILLER_RABBIT_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static RABBIT_AVOID_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static RABBIT_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static RAIDER_HOLD_GROUND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_OBTAIN_BANNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_CELEBRATION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_MOVE_THROUGH_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAVAGER_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ravager>;
static SHULKER_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_DEFENSE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_NEAREST: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_PEEK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SILVERFISH_HIDE_IN_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Silverfish>;
static SILVERFISH_WAKE_OTHERS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Silverfish>;
static SKELETON_MELEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Skeleton>;
static SLIME_IDLE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_NEAREST_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_RANDOM_DIRECTION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_RANDOM_JUMP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SPIDER_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spider>;
static SPIDER_NEAREST_ATTACKABLE_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spider>;
static SQUID: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Squid>;
static SQUID_FLEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Squid>;
static TURTLE_BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_GO_HOME: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_GOTO_WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_LAY_EGG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_RANDOM_STROLL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_TRAVEL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static VEX_CHARGE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VEX_COPY_TARGET_OF_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VEX_RANDOM_MOVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VILLAGERTRADER_WANDER_TO_POSITION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_WanderingTrader>;
static VINDICATOR_BREAK_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static VINDICATOR_JOHNNY_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vindicator>;
static VINDICATOR_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vindicator>;
static WITHER_DO_NOTHING: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wither>;
static WOLF_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wolf>;
static ZOMBIE_ATTACK_TURTLE_EGG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Zombie>;
static ARROW_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<com_destroystokyo_paper_entity_RangedEntity>;
static AVOID_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static BEG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wolf>;
static BOW_SHOOT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static BREAK_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static BREATH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Animals>;
static CAT_SIT_ON_BED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CROSSBOW_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static DEFEND_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_IronGolem>;
static DOOR_OPEN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static EAT_TILE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static FISH_SCHOOL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fish>;
static FLEE_SUN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static FLOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static FOLLOW_BOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static FOLLOW_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static FOLLOW_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static FOLLOW_PARENT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Animals>;
static HORSE_TRAP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_SkeletonHorse>;
static HURT_BY_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static INTERACT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static JUMP_ON_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static LEAP_AT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static LLAMA_FOLLOW: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
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
static OFFER_FLOWER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_IronGolem>;
static OWNER_HURT_BY_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static OWNER_HURT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static PERCH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Parrot>;
static RAID: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RANDOM_FLY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_LOOKAROUND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static RANDOM_STROLL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_STROLL_LAND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_SWIM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_TARGET_NON_TAMED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static REMOVE_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RESTRICT_SUN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static SIT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static STROLL_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static SWELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creeper>;
static TAME: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_AbstractHorse>;
static TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static TRADE_WITH_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_AbstractVillager>;
static USE_ITEM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static WATER_JUMP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static ZOMBIE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Zombie>;
static STROLL_VILLAGE_GOLEM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static UNIVERSAL_ANGER_RESET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
start(): void;
stop(): void;
tick(): void;
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
shouldActivate(): boolean;
shouldStayActive(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {


  export class VersionFetcher {
cacheTime: number;
versionMessage: string;
getCacheTime(): number;
getVersionMessage(arg0: string): string;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.util.VersionFetcher' {
import { Object as java_lang_Object } from 'java.lang';
import { VersionFetcher as com_destroystokyo_paper_util_VersionFetcher } from 'com.destroystokyo.paper.util';

  export class DummyVersionFetcher extends java_lang_Object implements com_destroystokyo_paper_util_VersionFetcher {
cacheTime: number;
versionMessage: string;
getCacheTime(): number;
getVersionMessage(arg0: string): string;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class WhitelistToggleEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
enabled: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isEnabled(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Entity as org_bukkit_entity_Entity, Witch as org_bukkit_entity_Witch } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class WitchConsumePotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
potion: org_bukkit_inventory_ItemStack;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Witch;
static handlerList: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setPotion(arg0: org_bukkit_inventory_ItemStack): void;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Witch;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getPotion(): org_bukkit_inventory_ItemStack;
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
constructor(arg0: org_bukkit_entity_Witch, arg1: org_bukkit_inventory_ItemStack);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Entity as org_bukkit_entity_Entity, Witch as org_bukkit_entity_Witch } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class WitchReadyPotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
potion: org_bukkit_inventory_ItemStack;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Witch;
static handlerList: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setPotion(arg0: org_bukkit_inventory_ItemStack): void;
getEntity(): org_bukkit_entity_Entity;
getEntity(): org_bukkit_entity_Witch;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getPotion(): org_bukkit_inventory_ItemStack;
static process(arg0: org_bukkit_entity_Witch, arg1: org_bukkit_inventory_ItemStack): org_bukkit_inventory_ItemStack;
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
constructor(arg0: org_bukkit_entity_Witch, arg1: org_bukkit_inventory_ItemStack);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Witch as org_bukkit_entity_Witch, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class WitchThrowPotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
target: org_bukkit_entity_LivingEntity;
potion: org_bukkit_inventory_ItemStack;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
target: org_bukkit_entity_LivingEntity;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Witch;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getTarget(): org_bukkit_entity_LivingEntity;
getHandlers(): org_bukkit_event_HandlerList;
isCancelled(): boolean;
setPotion(arg0: org_bukkit_inventory_ItemStack): void;
getEntity(): org_bukkit_entity_Witch;
getEntity(): org_bukkit_entity_Entity;
setCancelled(arg0: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getPotion(): org_bukkit_inventory_ItemStack;
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
constructor(arg0: org_bukkit_entity_Witch, arg1: org_bukkit_entity_LivingEntity, arg2: org_bukkit_inventory_ItemStack);
  }
}