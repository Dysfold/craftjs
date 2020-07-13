//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { AutoCloseable as java_lang_AutoCloseable } from 'java.lang';

  export class Timing implements java_lang_AutoCloseable {
timingHandler: co_aikar_timings_TimingHandler;
close(): void;
abort(): void;
startTimingIfSync(): co_aikar_timings_Timing;
stopTimingIfSync(): void;
getTimingHandler(): co_aikar_timings_TimingHandler;
startTiming(): co_aikar_timings_Timing;
stopTiming(): void;

  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Object as java_lang_Object } from 'java.lang';
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler, TimingIdentifier as co_aikar_timings_TimingIdentifier, TimingData as co_aikar_timings_TimingData } from 'co.aikar.timings';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';
import { Deque as java_util_Deque } from 'java.util';
import { Int2ObjectOpenHashMap as it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap } from 'it.unimi.dsi.fastutil.ints';

  export class TimingHandler extends java_lang_Object implements co_aikar_timings_Timing {
static idPool: java_util_concurrent_atomic_AtomicInteger;
static TIMING_STACK: java_util_Deque<co_aikar_timings_TimingHandler>;
id: number;
identifier: co_aikar_timings_TimingIdentifier;
verbose: boolean;
children: it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap<co_aikar_timings_TimingData>;
record: co_aikar_timings_TimingData;
startParent: co_aikar_timings_TimingHandler;
groupHandler: co_aikar_timings_TimingHandler;
start: number;
timingDepth: number;
added: boolean;
timed: boolean;
enabled: boolean;
timingHandler: co_aikar_timings_TimingHandler;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
close(): void;
abort(): void;
isEnabled(): boolean;
startTimingIfSync(): co_aikar_timings_Timing;
stopTimingIfSync(): void;
getTimingHandler(): co_aikar_timings_TimingHandler;
isSpecial(): boolean;
startTiming(): co_aikar_timings_Timing;
stopTiming(): void;

  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Object as java_lang_Object } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { TimingGroup as co_aikar_timings_TimingIdentifier_TimingGroup } from 'co.aikar.timings.TimingIdentifier';
import { TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';

  export class TimingIdentifier extends java_lang_Object {
static GROUP_MAP: java_util_Map<string, co_aikar_timings_TimingIdentifier_TimingGroup>;
static DEFAULT_GROUP: co_aikar_timings_TimingIdentifier_TimingGroup;
group: string;
name: string;
groupHandler: co_aikar_timings_TimingHandler;
hashCode: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;

  }
}//@ts-nocheck

declare module 'co.aikar.timings.TimingIdentifier' {
import { Object as java_lang_Object } from 'java.lang';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';
import { List as java_util_List } from 'java.util';
import { TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';

  export class TimingGroup extends java_lang_Object {
static idPool: java_util_concurrent_atomic_AtomicInteger;
id: number;
name: string;
handlers: java_util_List<co_aikar_timings_TimingHandler>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;

  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Object as java_lang_Object } from 'java.lang';

  export class TimingData extends java_lang_Object {
id: number;
count: number;
lagCount: number;
totalTime: number;
lagTotalTime: number;
curTickCount: number;
curTickTotal: number;


  }
}//@ts-nocheck

declare module 'co.aikar.util' {
import { Class as java_lang_Class, Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Map as java_util_Map } from 'java.util';
import { ForwardingMap as com_google_common_collect_ForwardingMap } from 'com.google.common.collect';

  export class Counter<T extends java_lang_Object> extends com_google_common_collect_ForwardingMap<T, java_lang_Long> {
counts: java_util_Map<T, java_lang_Long>;
count: number;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
increment(arg0: T, arg1: number): number;
increment(arg0: T): number;
getCount(arg0: T): number;
decrement(arg0: T): number;
decrement(arg0: T, arg1: number): number;
toString(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
constructor();
  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler, TimingIdentifier as co_aikar_timings_TimingIdentifier, TimingData as co_aikar_timings_TimingData } from 'co.aikar.timings';

  export class FullServerTickHandler extends co_aikar_timings_TimingHandler {
static IDENTITY: co_aikar_timings_TimingIdentifier;
minuteData: co_aikar_timings_TimingData;
avgFreeMemory: number;
avgUsedMemory: number;
timingHandler: co_aikar_timings_TimingHandler;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
close(): void;
isEnabled(): boolean;
startTimingIfSync(): co_aikar_timings_Timing;
stopTimingIfSync(): void;
getTimingHandler(): co_aikar_timings_TimingHandler;
isSpecial(): boolean;
startTiming(): co_aikar_timings_Timing;
stopTiming(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
toString(): string;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'co.aikar.util' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { JSONPair as co_aikar_util_JSONUtil_JSONPair } from 'co.aikar.util.JSONUtil';
import { Function as com_google_common_base_Function } from 'com.google.common.base';

  export class JSONUtil extends java_lang_Object {

static toArray(...arg0: java_lang_Object[]): java_util_List;
static createObject(...arg0: co_aikar_util_JSONUtil_JSONPair[]): java_util_Map<string, java_lang_Object>;
static appendObjectData(arg0: java_util_Map, ...arg1: co_aikar_util_JSONUtil_JSONPair[]): java_util_Map<string, java_lang_Object>;
static toObjectMapper<E extends java_lang_Object>(arg0: E[], arg1: com_google_common_base_Function<E, co_aikar_util_JSONUtil_JSONPair>): java_util_Map;
static toObjectMapper<E extends java_lang_Object>(arg0: java_lang_Iterable<E>, arg1: com_google_common_base_Function<E, co_aikar_util_JSONUtil_JSONPair>): java_util_Map;
static toArrayMapper<E extends java_lang_Object>(arg0: java_lang_Iterable<E>, arg1: com_google_common_base_Function<E, java_lang_Object>): java_util_List;
static toArrayMapper<E extends java_lang_Object>(arg0: E[], arg1: com_google_common_base_Function<E, java_lang_Object>): java_util_List;
static pair(arg0: string, arg1: java_lang_Object): co_aikar_util_JSONUtil_JSONPair;
static pair(arg0: number, arg1: java_lang_Object): co_aikar_util_JSONUtil_JSONPair;

  }
}//@ts-nocheck

declare module 'co.aikar.util.JSONUtil' {
import { Object as java_lang_Object } from 'java.lang';

  export class JSONPair extends java_lang_Object {
key: string;
val: java_lang_Object;


  }
}//@ts-nocheck

declare module 'co.aikar.util.JSONUtil' {
import { Object as java_lang_Object } from 'java.lang';

  export class JSONPair extends java_lang_Object {
key: string;
val: java_lang_Object;


  }
}//@ts-nocheck

declare module 'co.aikar.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Integer as java_lang_Integer } from 'java.lang';
import { Function as java_util_function_Function, BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { ObjectSet as it_unimi_dsi_fastutil_objects_ObjectSet } from 'it.unimi.dsi.fastutil.objects';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Set as java_util_Set } from 'java.util';
import { Int2ObjectFunction as it_unimi_dsi_fastutil_ints_Int2ObjectFunction, Int2ObjectOpenHashMap as it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap } from 'it.unimi.dsi.fastutil.ints';
import { Function as com_google_common_base_Function } from 'com.google.common.base';

  export class LoadingIntMap<V extends java_lang_Object> extends it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap<V> {
loader: com_google_common_base_Function<java_lang_Integer, V>;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
get(arg0: number): V;
equals(arg0: java_lang_Object): boolean;
toString(): string;
defaultReturnValue(arg0: V): void;
defaultReturnValue(): V;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Integer, arg1: V): V;
apply(arg0: number): V;
containsKey(arg0: java_lang_Object): boolean;
apply(arg0: K): V;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: java_lang_Integer, arg1: V): V;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
replace(arg0: java_lang_Integer, arg1: V, arg2: V): boolean;
merge(arg0: java_lang_Integer, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
merge(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_util_function_BiFunction): java_lang_Object;
entrySet(): it_unimi_dsi_fastutil_objects_ObjectSet<java_util_Map_Entry<java_lang_Integer, V>>;
entrySet(): java_util_Set;
putIfAbsent(arg0: java_lang_Integer, arg1: V): V;
putIfAbsent(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
compute(arg0: java_lang_Integer, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
compute(arg0: java_lang_Object, arg1: java_util_function_BiFunction): java_lang_Object;
computeIfAbsent(arg0: java_lang_Object, arg1: java_util_function_Function): java_lang_Object;
computeIfAbsent(arg0: java_lang_Integer, arg1: java_util_function_Function<java_lang_Object, V>): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: java_lang_Integer, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfPresent(arg0: java_lang_Object, arg1: java_util_function_BiFunction): java_lang_Object;
computeIfAbsentPartial(arg0: number, arg1: it_unimi_dsi_fastutil_ints_Int2ObjectFunction<V>): V;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
constructor(arg0: number, arg1: number, arg2: com_google_common_base_Function<java_lang_Integer, V>);
constructor(arg0: number, arg1: com_google_common_base_Function<java_lang_Integer, V>);
constructor(arg0: com_google_common_base_Function<java_lang_Integer, V>);
  }
}//@ts-nocheck

declare module 'co.aikar.util.LoadingIntMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';
import { Function as com_google_common_base_Function } from 'com.google.common.base';

  export class Feeder<T extends java_lang_Object> extends java_lang_Object implements com_google_common_base_Function<T, T> {

apply(arg0: java_lang_Object): T;
apply(): T;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
constructor();
  }
}//@ts-nocheck

declare module 'co.aikar.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { LoadingMap as co_aikar_util_LoadingMap } from 'co.aikar.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Function as java_util_function_Function, BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';

  export class LoadingMap<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> {
backingMap: java_util_Map<K, V>;
loader: java_util_function_Function<K, V>;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
equals(arg0: java_lang_Object): boolean;
values(): java_util_Collection<V>;
hashCode(): number;
clone(): java_lang_Object;
clone(): co_aikar_util_LoadingMap<K, V>;
clear(): void;
isEmpty(): boolean;
size(): number;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(arg0: java_util_Map<K, V>): void;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Map<K, V>, arg1: java_util_function_Function<K, V>): java_util_Map<K, V>;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<K>;
static newIdentityHashMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_function_Function<K, V>): java_util_Map<K, V>;
static newIdentityHashMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_function_Function<K, V>, arg1: number): java_util_Map<K, V>;
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_function_Function<K, V>): java_util_Map<K, V>;
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_function_Function<K, V>, arg1: number, arg2: number): java_util_Map<K, V>;
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_function_Function<K, V>, arg1: number): java_util_Map<K, V>;
static newAutoMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Map<K, V>, arg1: java_lang_Class<K>, arg2: java_lang_Class<V>): java_util_Map<K, V>;
static newAutoMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Map<K, V>, arg1: java_lang_Class<V>): java_util_Map<K, V>;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_lang_Class<V>): java_util_Map<K, V>;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_lang_Class<K>, arg1: java_lang_Class<V>, arg2: number, arg3: number): java_util_Map<K, V>;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_lang_Class<V>, arg1: number, arg2: number): java_util_Map<K, V>;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_lang_Class<K>, arg1: java_lang_Class<V>): java_util_Map<K, V>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
constructor(arg0: java_util_Map<K, V>, arg1: java_util_function_Function<K, V>);
  }
}//@ts-nocheck

declare module 'co.aikar.util.LoadingMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';

  export class Feeder<T extends java_lang_Object> extends java_lang_Object implements java_util_function_Function<T, T> {

apply(arg0: java_lang_Object): T;
apply(): T;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
constructor();
  }
}//@ts-nocheck

declare module 'co.aikar.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';

  export class MRUMapCache<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> {
backingMap: java_util_Map<K, V>;
cacheKey: java_lang_Object;
cacheValue: V;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
values(): java_util_Collection<V>;
clear(): void;
isEmpty(): boolean;
size(): number;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(arg0: java_util_Map<K, V>): void;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Map<K, V>): java_util_Map<K, V>;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<K>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
constructor(arg0: java_util_Map<K, V>);
  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { Object as java_lang_Object } from 'java.lang';

  export class NullTimingHandler extends java_lang_Object implements co_aikar_timings_Timing {
static NULL: co_aikar_timings_Timing;
timingHandler: co_aikar_timings_TimingHandler;
close(): void;
abort(): void;
startTimingIfSync(): co_aikar_timings_Timing;
stopTimingIfSync(): void;
getTimingHandler(): co_aikar_timings_TimingHandler;
startTiming(): co_aikar_timings_Timing;
stopTiming(): void;
constructor();
  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { EventExecutor as org_bukkit_plugin_EventExecutor, Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Timing as co_aikar_timings_Timing } from 'co.aikar.timings';

  export class TimedEventExecutor extends java_lang_Object implements org_bukkit_plugin_EventExecutor {
executor: org_bukkit_plugin_EventExecutor;
timings: co_aikar_timings_Timing;
execute(arg0: org_bukkit_event_Listener, arg1: org_bukkit_event_Event): void;
constructor(arg0: org_bukkit_plugin_EventExecutor, arg1: org_bukkit_plugin_Plugin, arg2: java_lang_reflect_Method, arg3: java_lang_Class<org_bukkit_event_Event>);
  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { AutoCloseable as java_lang_AutoCloseable } from 'java.lang';

  export class Timing implements java_lang_AutoCloseable {
timingHandler: co_aikar_timings_TimingHandler;
close(): void;
abort(): void;
startTimingIfSync(): co_aikar_timings_Timing;
stopTimingIfSync(): void;
getTimingHandler(): co_aikar_timings_TimingHandler;
startTiming(): co_aikar_timings_Timing;
stopTiming(): void;

  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { MinuteReport as co_aikar_timings_TimingHistory_MinuteReport } from 'co.aikar.timings.TimingHistory';
import { TimingHistoryEntry as co_aikar_timings_TimingHistoryEntry } from 'co.aikar.timings';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';

  export class TimingHistory extends java_lang_Object {
static lastMinuteTime: number;
static timedTicks: number;
static playerTicks: number;
static entityTicks: number;
static tileEntityTicks: number;
static activatedEntityTicks: number;
static worldIdPool: number;
static worldMap: java_util_Map<string, java_lang_Integer>;
endTime: number;
startTime: number;
totalTicks: number;
totalTime: number;
minuteReports: co_aikar_timings_TimingHistory_MinuteReport[];
entries: co_aikar_timings_TimingHistoryEntry[];
tileEntityTypeSet: java_util_Set<org_bukkit_Material>;
entityTypeSet: java_util_Set<org_bukkit_entity_EntityType>;
worlds: java_util_Map<java_lang_Object, java_lang_Object>;


  }
}//@ts-nocheck

declare module 'co.aikar.timings.TimingHistory' {
import { TicksRecord as co_aikar_timings_TimingHistory_TicksRecord, PingRecord as co_aikar_timings_TimingHistory_PingRecord } from 'co.aikar.timings.TimingHistory';
import { TimingData as co_aikar_timings_TimingData } from 'co.aikar.timings';
import { Object as java_lang_Object } from 'java.lang';

  export class MinuteReport extends java_lang_Object {
time: number;
ticksRecord: co_aikar_timings_TimingHistory_TicksRecord;
pingRecord: co_aikar_timings_TimingHistory_PingRecord;
fst: co_aikar_timings_TimingData;
tps: number;
usedMemory: number;
freeMemory: number;
loadAvg: number;


  }
}//@ts-nocheck

declare module 'co.aikar.timings.TimingHistory' {
import { Object as java_lang_Object } from 'java.lang';

  export class TicksRecord extends java_lang_Object {
timed: number;
player: number;
entity: number;
tileEntity: number;
activatedEntity: number;


  }
}//@ts-nocheck

declare module 'co.aikar.timings.TimingHistory' {
import { Object as java_lang_Object } from 'java.lang';

  export class PingRecord extends java_lang_Object {
avg: number;


  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { TimingData as co_aikar_timings_TimingData } from 'co.aikar.timings';
import { Object as java_lang_Object } from 'java.lang';

  export class TimingHistoryEntry extends java_lang_Object {
data: co_aikar_timings_TimingData;
children: co_aikar_timings_TimingData[];


  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Timing as co_aikar_timings_Timing, TimingsReportListener as co_aikar_timings_TimingsReportListener } from 'co.aikar.timings';
import { CommandSender as org_bukkit_command_CommandSender } from 'org.bukkit.command';
import { List as java_util_List } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class Timings extends java_lang_Object {
static requestingReport: java_util_List<org_bukkit_command_CommandSender>;
static MAX_HISTORY_FRAMES: number;
static NULL_HANDLER: co_aikar_timings_Timing;
static timingsEnabled: boolean;
static verboseEnabled: boolean;
static historyInterval: number;
static historyLength: number;
static historyInterval: number;
static historyLength: number;
static of(arg0: org_bukkit_plugin_Plugin, arg1: string): co_aikar_timings_Timing;
static of(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: co_aikar_timings_Timing): co_aikar_timings_Timing;
static reset(): void;
static setTimingsEnabled(arg0: boolean): void;
static isTimingsEnabled(): boolean;
static setVerboseTimingsEnabled(arg0: boolean): void;
static getHistoryInterval(): number;
static ofStart(arg0: org_bukkit_plugin_Plugin, arg1: string): co_aikar_timings_Timing;
static ofStart(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: co_aikar_timings_Timing): co_aikar_timings_Timing;
static isVerboseTimingsEnabled(): boolean;
static setHistoryInterval(arg0: number): void;
static setHistoryLength(arg0: number): void;
static getHistoryLength(): number;
static generateReport(arg0: org_bukkit_command_CommandSender): void;
static generateReport(arg0: co_aikar_timings_TimingsReportListener): void;

  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Server as org_bukkit_Server } from 'org.bukkit';
import { Spigot as org_bukkit_command_CommandSender_Spigot } from 'org.bukkit.command.CommandSender';
import { Permission as org_bukkit_permissions_Permission, PermissionAttachment as org_bukkit_permissions_PermissionAttachment, PermissionAttachmentInfo as org_bukkit_permissions_PermissionAttachmentInfo } from 'org.bukkit.permissions';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Set as java_util_Set, List as java_util_List } from 'java.util';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { CommandSender as org_bukkit_command_CommandSender, MessageCommandSender as org_bukkit_command_MessageCommandSender } from 'org.bukkit.command';
import { Runnable as java_lang_Runnable, Object as java_lang_Object } from 'java.lang';

  export class TimingsReportListener extends java_lang_Object implements org_bukkit_command_MessageCommandSender {
senders: java_util_List<org_bukkit_command_CommandSender>;
onDone: java_lang_Runnable;
timingsURL: string;
timingsURL: string;
name: string;
server: org_bukkit_Server;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
done(): void;
done(arg0: string): void;
addConsoleIfNeeded(): void;
getTimingsURL(): string;
sendMessage(arg0: string): void;
getName(): string;
getServer(): org_bukkit_Server;
spigot(): org_bukkit_command_CommandSender_Spigot;
isOp(): boolean;
sendMessage(arg0: string[]): void;
hasPermission(arg0: org_bukkit_permissions_Permission): boolean;
hasPermission(arg0: string): boolean;
isPermissionSet(arg0: string): boolean;
isPermissionSet(arg0: org_bukkit_permissions_Permission): boolean;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: boolean, arg3: number): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: boolean): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: number): org_bukkit_permissions_PermissionAttachment;
removeAttachment(arg0: org_bukkit_permissions_PermissionAttachment): void;
recalculatePermissions(): void;
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
setOp(arg0: boolean): void;
sendMessage(arg0: net_md_5_bungee_api_chat_BaseComponent): void;
sendMessage(...arg0: net_md_5_bungee_api_chat_BaseComponent[]): void;
constructor(arg0: java_util_List<org_bukkit_command_CommandSender>, arg1: java_lang_Runnable);
constructor(arg0: java_util_List<org_bukkit_command_CommandSender>);
constructor(arg0: org_bukkit_command_CommandSender, arg1: java_lang_Runnable);
constructor(arg0: org_bukkit_command_CommandSender);
  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { CommandSender as org_bukkit_command_CommandSender, CommandMap as org_bukkit_command_CommandMap, Command as org_bukkit_command_Command } from 'org.bukkit.command';
import { List as java_util_List } from 'java.util';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BukkitCommand as org_bukkit_command_defaults_BukkitCommand } from 'org.bukkit.command.defaults';

  export class TimingsCommand extends org_bukkit_command_defaults_BukkitCommand {
static TIMINGS_SUBCOMMANDS: java_util_List<string>;
lastResetAttempt: number;
name: string;
permission: string;
timingName: string;
label: string;
usage: string;
permissionMessage: string;
aliases: java_util_List<string>;
description: string;
class: java_lang_Class<java_lang_Object>;
execute(arg0: org_bukkit_command_CommandSender, arg1: string, arg2: string[]): boolean;
tabComplete(arg0: org_bukkit_command_CommandSender, arg1: string, arg2: string[]): java_util_List<string>;
getName(): string;
toString(): string;
isRegistered(): boolean;
register(arg0: org_bukkit_command_CommandMap): boolean;
setName(arg0: string): boolean;
setPermission(arg0: string): void;
getPermission(): string;
unregister(arg0: org_bukkit_command_CommandMap): boolean;
setLabel(arg0: string): boolean;
testPermissionSilent(arg0: org_bukkit_command_CommandSender): boolean;
getTimingName(): string;
testPermission(arg0: org_bukkit_command_CommandSender): boolean;
setDescription(arg0: string): org_bukkit_command_Command;
setPermissionMessage(arg0: string): org_bukkit_command_Command;
setUsage(arg0: string): org_bukkit_command_Command;
static broadcastCommandMessage(arg0: org_bukkit_command_CommandSender, arg1: string): void;
static broadcastCommandMessage(arg0: org_bukkit_command_CommandSender, arg1: string, arg2: boolean): void;
getLabel(): string;
getUsage(): string;
setAliases(arg0: java_util_List<string>): org_bukkit_command_Command;
getPermissionMessage(): string;
tabComplete(arg0: org_bukkit_command_CommandSender, arg1: string, arg2: string[], arg3: org_bukkit_Location): java_util_List<string>;
getAliases(): java_util_List<string>;
getDescription(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Command as org_bukkit_command_Command } from 'org.bukkit.command';
import { Timing as co_aikar_timings_Timing, TimingIdentifier as co_aikar_timings_TimingIdentifier, TimingHandler as co_aikar_timings_TimingHandler, FullServerTickHandler as co_aikar_timings_FullServerTickHandler, TimingHistory as co_aikar_timings_TimingHistory } from 'co.aikar.timings';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Map as java_util_Map, List as java_util_List } from 'java.util';
import { MinuteReport as co_aikar_timings_TimingHistory_MinuteReport } from 'co.aikar.timings.TimingHistory';
import { EvictingQueue as com_google_common_collect_EvictingQueue } from 'com.google.common.collect';

  export class TimingsManager extends java_lang_Object {
static TIMING_MAP: java_util_Map<co_aikar_timings_TimingIdentifier, co_aikar_timings_TimingHandler>;
static FULL_SERVER_TICK: co_aikar_timings_FullServerTickHandler;
static TIMINGS_TICK: co_aikar_timings_TimingHandler;
static PLUGIN_GROUP_HANDLER: co_aikar_timings_Timing;
static hiddenConfigs: java_util_List<string>;
static privacy: boolean;
static HANDLERS: java_util_List<co_aikar_timings_TimingHandler>;
static MINUTE_REPORTS: java_util_List<co_aikar_timings_TimingHistory_MinuteReport>;
static HISTORY: com_google_common_collect_EvictingQueue<co_aikar_timings_TimingHistory>;
static timingStart: number;
static historyStart: number;
static needsFullReset: boolean;
static needsRecheckEnabled: boolean;
static commandTiming: co_aikar_timings_Timing;
static pluginByClassloader: org_bukkit_plugin_Plugin;
static getCommandTiming(arg0: string, arg1: org_bukkit_command_Command): co_aikar_timings_Timing;
static getPluginByClassloader(arg0: java_lang_Class<java_lang_Object>): org_bukkit_plugin_Plugin;

  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Server as org_bukkit_Server } from 'org.bukkit';
import { Spigot as org_bukkit_command_CommandSender_Spigot } from 'org.bukkit.command.CommandSender';
import { Permission as org_bukkit_permissions_Permission, PermissionAttachment as org_bukkit_permissions_PermissionAttachment, PermissionAttachmentInfo as org_bukkit_permissions_PermissionAttachmentInfo } from 'org.bukkit.permissions';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Set as java_util_Set, List as java_util_List } from 'java.util';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { CommandSender as org_bukkit_command_CommandSender, MessageCommandSender as org_bukkit_command_MessageCommandSender } from 'org.bukkit.command';
import { Runnable as java_lang_Runnable, Object as java_lang_Object } from 'java.lang';

  export class TimingsReportListener extends java_lang_Object implements org_bukkit_command_MessageCommandSender {
senders: java_util_List<org_bukkit_command_CommandSender>;
onDone: java_lang_Runnable;
timingsURL: string;
timingsURL: string;
name: string;
server: org_bukkit_Server;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
done(): void;
done(arg0: string): void;
addConsoleIfNeeded(): void;
getTimingsURL(): string;
sendMessage(arg0: string): void;
getName(): string;
getServer(): org_bukkit_Server;
spigot(): org_bukkit_command_CommandSender_Spigot;
isOp(): boolean;
sendMessage(arg0: string[]): void;
hasPermission(arg0: org_bukkit_permissions_Permission): boolean;
hasPermission(arg0: string): boolean;
isPermissionSet(arg0: string): boolean;
isPermissionSet(arg0: org_bukkit_permissions_Permission): boolean;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: boolean, arg3: number): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: string, arg2: boolean): org_bukkit_permissions_PermissionAttachment;
addAttachment(arg0: org_bukkit_plugin_Plugin, arg1: number): org_bukkit_permissions_PermissionAttachment;
removeAttachment(arg0: org_bukkit_permissions_PermissionAttachment): void;
recalculatePermissions(): void;
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
setOp(arg0: boolean): void;
sendMessage(arg0: net_md_5_bungee_api_chat_BaseComponent): void;
sendMessage(...arg0: net_md_5_bungee_api_chat_BaseComponent[]): void;
constructor(arg0: java_util_List<org_bukkit_command_CommandSender>, arg1: java_lang_Runnable);
constructor(arg0: java_util_List<org_bukkit_command_CommandSender>);
constructor(arg0: org_bukkit_command_CommandSender, arg1: java_lang_Runnable);
constructor(arg0: org_bukkit_command_CommandSender);
  }
}