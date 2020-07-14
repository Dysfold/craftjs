//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
/** Provides an ability to time sections of code within the Minecraft Server */

  export class Timing implements java_lang_AutoCloseable {
timingHandler: co_aikar_timings_TimingHandler | null;
/** Starts timing the execution until stopTiming() is called.

 But only if we are on the primary thread. */
startTimingIfSync(): co_aikar_timings_Timing;
/** Starts timing the execution until stopTiming() is called. */
startTiming(): co_aikar_timings_Timing;
/** Stops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources

 But only if we are on the primary thread. */
stopTimingIfSync(): void;
/** Stops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources */
stopTiming(): void;
/** Used internally to get the actual backing Handler in the case of delegated Handlers */
getTimingHandler(): co_aikar_timings_TimingHandler | null;
abort(): void;
close(): void;

  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { Object as java_lang_Object } from 'java.lang';
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';

  export class TimingHandler extends java_lang_Object implements co_aikar_timings_Timing {
timingHandler: co_aikar_timings_TimingHandler;
abort(): void;
close(): void;
equals(arg0: java_lang_Object): boolean;
getTimingHandler(): co_aikar_timings_TimingHandler;
hashCode(): number;
isEnabled(): boolean;
isSpecial(): boolean;
startTiming(): co_aikar_timings_Timing;
startTimingIfSync(): co_aikar_timings_Timing;
stopTiming(): void;
stopTimingIfSync(): void;

  }
}
//@ts-nocheck

declare module 'co.aikar.util' {
import { Class as java_lang_Class, Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { ForwardingMap as com_google_common_collect_ForwardingMap } from 'com.google.common.collect';

  export class Counter<T extends java_lang_Object> extends com_google_common_collect_ForwardingMap<T, java_lang_Long> {
class: java_lang_Class<java_lang_Object>;
count: number | null;
orDefault: V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
decrement(key: T | null): number | null;
decrement(key: T | null, amount: number): number | null;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
getClass(): java_lang_Class<java_lang_Object>;
getCount(key: T | null): number | null;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
increment(key: T | null): number | null;
increment(key: T | null, amount: number): number | null;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
notify(): void;
notifyAll(): void;
putIfAbsent(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';

  export class FullServerTickHandler extends co_aikar_timings_TimingHandler {
class: java_lang_Class<java_lang_Object>;
timingHandler: co_aikar_timings_TimingHandler;
/** Description copied from interface: TimingStarts timing the execution until Timing.stopTiming() is called.

 But only if we are on the primary thread. */
startTimingIfSync(): co_aikar_timings_Timing;
/** Description copied from interface: TimingStarts timing the execution until Timing.stopTiming() is called. */
startTiming(): co_aikar_timings_Timing;
/** Description copied from interface: TimingStops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources

 But only if we are on the primary thread. */
stopTimingIfSync(): void;
/** Description copied from interface: TimingStops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources */
stopTiming(): void;
/** Description copied from interface: TimingUsed internally to get the actual backing Handler in the case of delegated Handlers */
getTimingHandler(): co_aikar_timings_TimingHandler;
/** This is simply for the Closeable interface so it can be used with try-with-resources () */
close(): void;
equals(o: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
isEnabled(): boolean;
isSpecial(): boolean;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'co.aikar.util' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { JSONPair as co_aikar_util_JSONUtil_JSONPair } from 'co.aikar.util.JSONUtil';
import { Function as com_google_common_base_Function } from 'com.google.common.base';
/** Provides Utility methods that assist with generating JSON Objects */

  export class JSONUtil extends java_lang_Object {

/** Creates a key/value "JSONPair" object */
static pair(key: string, obj: java_lang_Object | null): co_aikar_util_JSONUtil_JSONPair | null;
/** Creates a new JSON object from multiple JSONPair key/value pairs */
static createObject(...data: co_aikar_util_JSONUtil_JSONPair[]): java_util_Map<string, java_lang_Object>;
/** These help build a single JSON Object from a collection, using a mapper function */
static toObjectMapper<E extends java_lang_Object>(collection: E[], mapper: com_google_common_base_Function<E, co_aikar_util_JSONUtil_JSONPair>): java_util_Map;
/** These help build a single JSON array using a mapper function */
static toArrayMapper<E extends java_lang_Object>(collection: E[], mapper: com_google_common_base_Function<E, java_lang_Object>): java_util_List;
/** This appends multiple key/value Obj pairs into a JSON Object */
static appendObjectData(parent: java_util_Map, ...data: co_aikar_util_JSONUtil_JSONPair[]): java_util_Map<string, java_lang_Object>;
/** This builds a JSON array from a set of data */
static toArray(...data: java_lang_Object[]): java_util_List;
static pair(key: number, obj: java_lang_Object | null): co_aikar_util_JSONUtil_JSONPair | null;
static toArrayMapper<E extends java_lang_Object>(collection: java_lang_Iterable<E>, mapper: com_google_common_base_Function<E, java_lang_Object>): java_util_List;
static toObjectMapper<E extends java_lang_Object>(collection: java_lang_Iterable<E>, mapper: com_google_common_base_Function<E, co_aikar_util_JSONUtil_JSONPair>): java_util_Map;

  }
}
//@ts-nocheck

declare module 'co.aikar.util.JSONUtil' {
import { Object as java_lang_Object } from 'java.lang';
/** Simply stores a key and a value, used internally by many methods below. */

  export class JSONPair extends java_lang_Object {



  }
}
//@ts-nocheck

declare module 'co.aikar.util.JSONUtil' {
import { Object as java_lang_Object } from 'java.lang';
/** Simply stores a key and a value, used internally by many methods below. */

  export class JSONPair extends java_lang_Object {



  }
}
//@ts-nocheck

declare module 'co.aikar.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Integer as java_lang_Integer } from 'java.lang';
import { Function as java_util_function_Function, BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { ObjectSet as it_unimi_dsi_fastutil_objects_ObjectSet } from 'it.unimi.dsi.fastutil.objects';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Set as java_util_Set } from 'java.util';
import { Int2ObjectFunction as it_unimi_dsi_fastutil_ints_Int2ObjectFunction, Int2ObjectOpenHashMap as it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap } from 'it.unimi.dsi.fastutil.ints';
import { Function as com_google_common_base_Function } from 'com.google.common.base';
/** Allows you to pass a Loader function that when a key is accessed that doesn't exist,
 automatically loads the entry into the map by calling the loader Function.

 .get() Will only return null if the Loader can return null.

 You may pass any backing Map to use.

 This class is not thread safe and should be wrapped with Collections.synchronizedMap on the OUTSIDE of the LoadingMap if needed.

 Do not wrap the backing map with Collections.synchronizedMap. */

  export class LoadingIntMap<V extends java_lang_Object> extends it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap<V> {
class: java_lang_Class<java_lang_Object>;
orDefault: V;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
apply(arg0: K): V;
apply(arg0: number): V;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
compute(arg0: java_lang_Integer, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
compute(arg0: java_lang_Object, arg1: java_util_function_BiFunction): java_lang_Object;
computeIfAbsent(arg0: java_lang_Integer, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfAbsent(arg0: java_lang_Object, arg1: java_util_function_Function): java_lang_Object;
computeIfAbsentPartial(arg0: number, arg1: it_unimi_dsi_fastutil_ints_Int2ObjectFunction<V>): V;
computeIfPresent(arg0: java_lang_Integer, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfPresent(arg0: java_lang_Object, arg1: java_util_function_BiFunction): java_lang_Object;
containsKey(arg0: java_lang_Object): boolean;
defaultReturnValue(): V;
defaultReturnValue(arg0: V): void;
entrySet(): it_unimi_dsi_fastutil_objects_ObjectSet<java_util_Map_Entry<java_lang_Integer, V>>;
entrySet(): java_util_Set;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: java_lang_Object): V;
get(key: number): V | null;
getClass(): java_lang_Class<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
merge(arg0: java_lang_Integer, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
merge(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_util_function_BiFunction): java_lang_Object;
notify(): void;
notifyAll(): void;
put(arg0: java_lang_Integer, arg1: V): V;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
putIfAbsent(arg0: java_lang_Integer, arg1: V): V;
putIfAbsent(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
remove(arg0: java_lang_Object): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: java_lang_Integer, arg1: V): V;
replace(arg0: java_lang_Integer, arg1: V, arg2: V): boolean;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(expectedSize: number, loadFactor: number, loader: com_google_common_base_Function<java_lang_Integer, V>);
constructor(expectedSize: number, loader: com_google_common_base_Function<java_lang_Integer, V>);
constructor(loader: com_google_common_base_Function<java_lang_Integer, V>);
  }
}
//@ts-nocheck

declare module 'co.aikar.util.LoadingIntMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';
import { Function as com_google_common_base_Function } from 'com.google.common.base';
/** Due to java stuff, you will need to cast it to (Function) for some cases */

  export class Feeder<T extends java_lang_Object> extends java_lang_Object implements com_google_common_base_Function<T, T> {

andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
apply(): T | null;
apply(input: java_lang_Object | null): T | null;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
constructor();
  }
}
//@ts-nocheck

declare module 'co.aikar.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { LoadingMap as co_aikar_util_LoadingMap } from 'co.aikar.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Function as java_util_function_Function, BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
/** Allows you to pass a Loader function that when a key is accessed that doesn't exists,
 automatically loads the entry into the map by calling the loader Function.

 .get() Will only return null if the Loader can return null.

 You may pass any backing Map to use.

 This class is not thread safe and should be wrapped with Collections.synchronizedMap on the OUTSIDE of the LoadingMap if needed.

 Do not wrap the backing map with Collections.synchronizedMap. */

  export class LoadingMap<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> {
class: java_lang_Class<java_lang_Object>;
orDefault: V;
/** Creates a LoadingMap with an auto instantiating loader.

 Will auto construct class of of Value when not found

 Since this uses Reflection, It is more effecient to define your own static loader
 than using this helper, but if performance is not critical, this is easier. */
static newAutoMap<K extends java_lang_Object, V extends java_lang_Object>(backingMap: java_util_Map<K, V>, keyClass: java_lang_Class<K> | null, valueClass: java_lang_Class<V>): java_util_Map<K, V> | null;
/** Creates a LoadingMap with an auto instantiating loader.

 Will auto construct class of of Value when not found

 Since this uses Reflection, It is more effecient to define your own static loader
 than using this helper, but if performance is not critical, this is easier. */
static newAutoMap<K extends java_lang_Object, V extends java_lang_Object>(backingMap: java_util_Map<K, V>, valueClass: java_lang_Class<V>): java_util_Map<K, V>;
/** Creates a new LoadingMap with the specified map and loader */
static of<K extends java_lang_Object, V extends java_lang_Object>(backingMap: java_util_Map<K, V>, loader: java_util_function_Function<K, V>): java_util_Map<K, V>;
/** Initializes an auto loading map using a HashMap */
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>): java_util_Map<K, V>;
/** Initializes an auto loading map using a HashMap */
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>, initialCapacity: number): java_util_Map<K, V>;
/** Initializes an auto loading map using a HashMap */
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>, initialCapacity: number, loadFactor: number): java_util_Map<K, V>;
/** Initializes an auto loading map using an Identity HashMap */
static newIdentityHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>): java_util_Map<K, V>;
/** Initializes an auto loading map using an Identity HashMap */
static newIdentityHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>, initialCapacity: number): java_util_Map<K, V>;
clear(): void;
clone(): co_aikar_util_LoadingMap<K, V>;
clone(): java_lang_Object;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
containsKey(key: java_lang_Object | null): boolean | null;
containsValue(value: java_lang_Object | null): boolean | null;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
equals(o: java_lang_Object | null): boolean | null;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(key: java_lang_Object | null): V | null;
getClass(): java_lang_Class<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
notify(): void;
notifyAll(): void;
put(key: K | null, value: V | null): V | null;
putAll(m: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
remove(key: java_lang_Object | null): V | null;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(keyClass: java_lang_Class<K> | null, valueClass: java_lang_Class<V>): java_util_Map<K, V> | null;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(keyClass: java_lang_Class<K> | null, valueClass: java_lang_Class<V>, initialCapacity: number, loadFactor: number): java_util_Map<K, V> | null;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(valueClass: java_lang_Class<V>): java_util_Map<K, V>;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(valueClass: java_lang_Class<V>, initialCapacity: number, loadFactor: number): java_util_Map<K, V>;
values(): java_util_Collection<V>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
/** Initializes an auto loading map using specified loader and backing map */
constructor(backingMap: java_util_Map<K, V>, loader: java_util_function_Function<K, V>);
  }
}
//@ts-nocheck

declare module 'co.aikar.util.LoadingMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';
/** Due to java stuff, you will need to cast it to (Function) for some cases */

  export class Feeder<T extends java_lang_Object> extends java_lang_Object implements java_util_function_Function<T, T> {

andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
apply(): T | null;
apply(input: java_lang_Object | null): T | null;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
constructor();
  }
}
//@ts-nocheck

declare module 'co.aikar.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
/** Implements a Most Recently Used cache in front of a backing map, to quickly access the last accessed result. */

  export class MRUMapCache<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> {
class: java_lang_Class<java_lang_Object>;
orDefault: V;
/** Wraps the specified map with a most recently used cache */
static of<K extends java_lang_Object, V extends java_lang_Object>(map: java_util_Map<K, V>): java_util_Map<K, V>;
clear(): void;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
containsKey(key: java_lang_Object | null): boolean | null;
containsValue(value: java_lang_Object | null): boolean | null;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(key: java_lang_Object | null): V | null;
getClass(): java_lang_Class<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
notify(): void;
notifyAll(): void;
put(key: K | null, value: V | null): V | null;
putAll(m: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
remove(key: java_lang_Object | null): V | null;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
values(): java_util_Collection<V>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(backingMap: java_util_Map<K, V>);
  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { Object as java_lang_Object } from 'java.lang';

  export class NullTimingHandler extends java_lang_Object implements co_aikar_timings_Timing {
static NULL: co_aikar_timings_Timing;
timingHandler: co_aikar_timings_TimingHandler | null;
/** Description copied from interface: TimingStarts timing the execution until Timing.stopTiming() is called.

 But only if we are on the primary thread. */
startTimingIfSync(): co_aikar_timings_Timing;
/** Description copied from interface: TimingStarts timing the execution until Timing.stopTiming() is called. */
startTiming(): co_aikar_timings_Timing;
/** Description copied from interface: TimingStops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources

 But only if we are on the primary thread. */
stopTimingIfSync(): void;
/** Description copied from interface: TimingStops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources */
stopTiming(): void;
/** Description copied from interface: TimingUsed internally to get the actual backing Handler in the case of delegated Handlers */
getTimingHandler(): co_aikar_timings_TimingHandler | null;
abort(): void;
close(): void;
constructor();
  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { EventExecutor as org_bukkit_plugin_EventExecutor, Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class TimedEventExecutor extends java_lang_Object implements org_bukkit_plugin_EventExecutor {

execute(listener: org_bukkit_event_Listener, event: org_bukkit_event_Event): void;
/** Wraps an event executor and associates a timing handler to it. */
constructor(executor: org_bukkit_plugin_EventExecutor, plugin: org_bukkit_plugin_Plugin, method: java_lang_reflect_Method | null, eventClass: java_lang_Class<org_bukkit_event_Event>);
  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
/** Provides an ability to time sections of code within the Minecraft Server */

  export class Timing implements java_lang_AutoCloseable {
timingHandler: co_aikar_timings_TimingHandler | null;
/** Starts timing the execution until stopTiming() is called.

 But only if we are on the primary thread. */
startTimingIfSync(): co_aikar_timings_Timing;
/** Starts timing the execution until stopTiming() is called. */
startTiming(): co_aikar_timings_Timing;
/** Stops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources

 But only if we are on the primary thread. */
stopTimingIfSync(): void;
/** Stops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources */
stopTiming(): void;
/** Used internally to get the actual backing Handler in the case of delegated Handlers */
getTimingHandler(): co_aikar_timings_TimingHandler | null;
abort(): void;
close(): void;

  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { Object as java_lang_Object } from 'java.lang';

  export class TimingHistory extends java_lang_Object {
static activatedEntityTicks: number;
static entityTicks: number;
static lastMinuteTime: number;
static playerTicks: number;
static tileEntityTicks: number;
static timedTicks: number;


  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Timing as co_aikar_timings_Timing, TimingsReportListener as co_aikar_timings_TimingsReportListener } from 'co.aikar.timings';
import { CommandSender as org_bukkit_command_CommandSender } from 'org.bukkit.command';
import { Object as java_lang_Object } from 'java.lang';

  export class Timings extends java_lang_Object {
static NULL_HANDLER: co_aikar_timings_Timing;
static historyInterval: number;
static historyLength: number;
/** Generates a report and sends it to the specified command sender.

 If sender is null, ConsoleCommandSender will be used. */
static generateReport(sender: org_bukkit_command_CommandSender | null): void | null;
/** Generates a report and sends it to the specified listener.
 Use with BufferedCommandSender to get full response when done! */
static generateReport(sender: co_aikar_timings_TimingsReportListener): void;
/** Gets how long in ticks Timings history is kept for the server.

 Defaults to 1 hour (72000 ticks) */
static getHistoryLength(): number;
/** Gets the interval between Timing History report generation.

 Defaults to 5 minutes (6000 ticks) */
static getHistoryInterval(): number;
/** Gets whether or not the Spigot Timings system is enabled */
static isTimingsEnabled(): boolean;
/** Resets all Timing Data */
static reset(): void;
/** Returns a Timing for a plugin corresponding to a name. */
static of(plugin: org_bukkit_plugin_Plugin, name: string): co_aikar_timings_Timing;
/** Returns a Timing object after starting it, useful for Java7 try-with-resources.

 try (Timing ignored = Timings.ofStart(plugin, someName)) {
 // timed section
 } */
static ofStart(plugin: org_bukkit_plugin_Plugin, name: string): co_aikar_timings_Timing;
/** Returns a Timing object after starting it, useful for Java7 try-with-resources.

 try (Timing ignored = Timings.ofStart(plugin, someName, groupHandler)) {
 // timed section
 } */
static ofStart(plugin: org_bukkit_plugin_Plugin, name: string, groupHandler: co_aikar_timings_Timing | null): co_aikar_timings_Timing | null;
/** Returns a handler that has a groupHandler timer handler. Parent timers should not have their
 start/stop methods called directly, as the children will call it for you.

 Parent Timers are used to group multiple subsections together and get a summary of them combined
 Parent Handler can not be changed after first call */
static of(plugin: org_bukkit_plugin_Plugin, name: string, groupHandler: co_aikar_timings_Timing | null): co_aikar_timings_Timing | null;
/** Sets how long Timing History reports are kept for the server.

 Defaults to 1 hours(72000 ticks)

 This value is capped at a maximum of getHistoryInterval() * MAX_HISTORY_FRAMES (12)

 Will not reset Timing Data but may truncate old history if the new length is less than old length. */
static setHistoryLength(length: number): void;
/** Sets the interval between Timing History report generations.

 Defaults to 5 minutes (6000 ticks)

 This will recheck your history length, so lowering this value will lower your
 history length if you need more than 60 history windows. */
static setHistoryInterval(interval: number): void;
/** Sets whether or not the Spigot Timings system should be enabled

 Calling this will reset timing data. */
static setTimingsEnabled(enabled: boolean): void;
/** Sets whether or not the Timings should monitor at Verbose level.

 When Verbose is disabled, high-frequency timings will not be available.
 Calling this will reset timing data. */
static setVerboseTimingsEnabled(enabled: boolean): void;
/** Sets whether or not the Timings should monitor at Verbose level.

 When Verbose is disabled, high-frequency timings will not be available. */
static isVerboseTimingsEnabled(): boolean;

  }
}
//@ts-nocheck

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
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
name: string;
server: org_bukkit_Server;
timingsURL: string | null;
/** Description copied from interface: CommandSenderGets the name of this command sender */
getName(): string;
/** Description copied from interface: CommandSenderReturns the server instance that this command is running on */
getServer(): org_bukkit_Server;
/** Description copied from interface: CommandSenderSends this sender a message */
sendMessage(message: string): void;
/** Description copied from interface: CommandSenderSends this sender a message */
sendMessage(message: string[]): void;
/** Description copied from interface: PermissibleAdds a new PermissionAttachment with a single permission by
 name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleAdds a new empty PermissionAttachment to this object */
addAttachment(plugin: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleChecks if this object contains an override for the specified
 permission, by fully qualified name */
isPermissionSet(name: string): boolean;
/** Description copied from interface: PermissibleChecks if this object contains an override for the specified Permission */
isPermissionSet(perm: org_bukkit_permissions_Permission): boolean;
/** Description copied from interface: PermissibleGets a set containing all of the permissions currently in effect by
 this object */
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
/** Description copied from interface: PermissibleGets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned */
hasPermission(perm: org_bukkit_permissions_Permission): boolean;
/** Description copied from interface: PermissibleGets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned. */
hasPermission(name: string): boolean;
/** Description copied from interface: PermissibleRecalculates the permissions for this object, if the attachments have
 changed values.
 
 This should very rarely need to be called from a plugin. */
recalculatePermissions(): void;
/** Description copied from interface: PermissibleRemoves the given PermissionAttachment from this object */
removeAttachment(attachment: org_bukkit_permissions_PermissionAttachment): void;
/** Description copied from interface: PermissibleTemporarily adds a new PermissionAttachment with a single
 permission by name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean, ticks: number): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleTemporarily adds a new empty PermissionAttachment to this
 object */
addAttachment(plugin: org_bukkit_plugin_Plugin, ticks: number): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: ServerOperatorChecks if this object is a server operator */
isOp(): boolean;
/** Description copied from interface: ServerOperatorSets the operator status of this object */
setOp(value: boolean): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(...component: net_md_5_bungee_api_chat_BaseComponent[]): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(component: net_md_5_bungee_api_chat_BaseComponent): void;
addConsoleIfNeeded(): void;
done(): void;
done(url: string | null): void | null;
getTimingsURL(): string | null;
spigot(): org_bukkit_command_CommandSender_Spigot;
constructor(sender: org_bukkit_command_CommandSender, onDone: java_lang_Runnable | null);
constructor(senders: java_util_List<org_bukkit_command_CommandSender>);
constructor(senders: java_util_List<org_bukkit_command_CommandSender>, onDone: java_lang_Runnable | null);
constructor(senders: org_bukkit_command_CommandSender);
  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { CommandSender as org_bukkit_command_CommandSender, CommandMap as org_bukkit_command_CommandMap, Command as org_bukkit_command_Command } from 'org.bukkit.command';
import { List as java_util_List } from 'java.util';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BukkitCommand as org_bukkit_command_defaults_BukkitCommand } from 'org.bukkit.command.defaults';

  export class TimingsCommand extends org_bukkit_command_defaults_BukkitCommand {
aliases: java_util_List<string>;
class: java_lang_Class<java_lang_Object>;
description: string;
label: string;
name: string;
permission: string | null;
permissionMessage: string | null;
timingName: string;
usage: string;
/** Description copied from class: CommandExecuted on tab completion for this command, returning a list of
 options the player can tab through. */
tabComplete(sender: org_bukkit_command_CommandSender, alias: string, args: string[]): java_util_List<string>;
/** Description copied from class: CommandExecutes the command, returning its success */
execute(sender: org_bukkit_command_CommandSender, currentAlias: string, args: string[]): boolean;
/** Executed on tab completion for this command, returning a list of
 options the player can tab through. */
tabComplete(sender: org_bukkit_command_CommandSender, alias: string, args: string[], location: org_bukkit_Location | null): java_util_List<string> | null;
/** Gets a brief description of this command */
getDescription(): string;
/** Gets an example usage of this command */
getUsage(): string;
/** Gets the permission required by users to be able to perform this
 command */
getPermission(): string | null;
/** Registers this command to a CommandMap.
 Once called it only allows changes the registered CommandMap */
register(commandMap: org_bukkit_command_CommandMap): boolean;
/** Returns a list of active aliases of this command */
getAliases(): java_util_List<string>;
/** Returns a message to be displayed on a failed permission check for this
 command */
getPermissionMessage(): string | null;
/** Returns the current registered state of this command */
isRegistered(): boolean;
/** Returns the label for this command */
getLabel(): string;
/** Returns the name of this command */
getName(): string;
/** Sets a brief description of this command. Defining a description in the
 PluginDescriptionFile.getCommands() (under the
 `description' node) is equivalent to this method. */
setDescription(description: string): org_bukkit_command_Command;
/** Sets the example usage of this command */
setUsage(usage: string): org_bukkit_command_Command;
/** Sets the label of this command.
 
 May only be used before registering the command.
 Will return true if the new name is set, and false
 if the command has already been registered. */
setLabel(name: string): boolean;
/** Sets the list of aliases to request on registration for this command.
 This is not effective outside of defining aliases in the PluginDescriptionFile.getCommands() (under the
 `aliases' node) is equivalent to this method. */
setAliases(aliases: java_util_List<string>): org_bukkit_command_Command;
/** Sets the message sent when a permission check fails */
setPermissionMessage(permissionMessage: string | null): org_bukkit_command_Command | null;
/** Sets the name of this command.
 
 May only be used before registering the command.
 Will return true if the new name is set, and false
 if the command has already been registered. */
setName(name: string): boolean;
/** Sets the permission required by users to be able to perform this
 command */
setPermission(permission: string | null): void | null;
/** Tests the given CommandSender to see if they can perform this
 command.
 
 If they do not have permission, they will be informed that they cannot
 do this. */
testPermission(target: org_bukkit_command_CommandSender): boolean;
/** Tests the given CommandSender to see if they can perform this
 command.
 
 No error is sent to the sender. */
testPermissionSilent(target: org_bukkit_command_CommandSender): boolean;
/** Unregisters this command from the passed CommandMap applying any
 outstanding changes */
unregister(commandMap: org_bukkit_command_CommandMap): boolean;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getTimingName(): string;
hashCode(): number;
notify(): void;
notifyAll(): void;
static broadcastCommandMessage(source: org_bukkit_command_CommandSender, message: string): void;
static broadcastCommandMessage(source: org_bukkit_command_CommandSender, message: string, sendToSource: boolean): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(name: string);
  }
}
//@ts-nocheck

declare module 'co.aikar.timings' {
import { Command as org_bukkit_command_Command } from 'org.bukkit.command';
import { Timing as co_aikar_timings_Timing, FullServerTickHandler as co_aikar_timings_FullServerTickHandler, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { List as java_util_List } from 'java.util';

  export class TimingsManager extends java_lang_Object {
static FULL_SERVER_TICK: co_aikar_timings_FullServerTickHandler;
static PLUGIN_GROUP_HANDLER: co_aikar_timings_Timing;
static TIMINGS_TICK: co_aikar_timings_TimingHandler;
static commandTiming: co_aikar_timings_Timing | null;
static hiddenConfigs: java_util_List<string>;
static pluginByClassloader: org_bukkit_plugin_Plugin | null;
static privacy: boolean;
/** Due to access restrictions, we need a helper method to get a Command TimingHandler with String group

 Plugins should never call this */
static getCommandTiming(pluginName: string | null, command: org_bukkit_command_Command): co_aikar_timings_Timing | null;
/** Looks up the class loader for the specified class, and if it is a PluginClassLoader, return the
 Plugin that created this class. */
static getPluginByClassloader(clazz: java_lang_Class<java_lang_Object> | null): org_bukkit_plugin_Plugin | null;

  }
}
//@ts-nocheck

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
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
name: string;
server: org_bukkit_Server;
timingsURL: string | null;
/** Description copied from interface: CommandSenderGets the name of this command sender */
getName(): string;
/** Description copied from interface: CommandSenderReturns the server instance that this command is running on */
getServer(): org_bukkit_Server;
/** Description copied from interface: CommandSenderSends this sender a message */
sendMessage(message: string): void;
/** Description copied from interface: CommandSenderSends this sender a message */
sendMessage(message: string[]): void;
/** Description copied from interface: PermissibleAdds a new PermissionAttachment with a single permission by
 name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleAdds a new empty PermissionAttachment to this object */
addAttachment(plugin: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleChecks if this object contains an override for the specified
 permission, by fully qualified name */
isPermissionSet(name: string): boolean;
/** Description copied from interface: PermissibleChecks if this object contains an override for the specified Permission */
isPermissionSet(perm: org_bukkit_permissions_Permission): boolean;
/** Description copied from interface: PermissibleGets a set containing all of the permissions currently in effect by
 this object */
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
/** Description copied from interface: PermissibleGets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned */
hasPermission(perm: org_bukkit_permissions_Permission): boolean;
/** Description copied from interface: PermissibleGets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned. */
hasPermission(name: string): boolean;
/** Description copied from interface: PermissibleRecalculates the permissions for this object, if the attachments have
 changed values.
 
 This should very rarely need to be called from a plugin. */
recalculatePermissions(): void;
/** Description copied from interface: PermissibleRemoves the given PermissionAttachment from this object */
removeAttachment(attachment: org_bukkit_permissions_PermissionAttachment): void;
/** Description copied from interface: PermissibleTemporarily adds a new PermissionAttachment with a single
 permission by name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean, ticks: number): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleTemporarily adds a new empty PermissionAttachment to this
 object */
addAttachment(plugin: org_bukkit_plugin_Plugin, ticks: number): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: ServerOperatorChecks if this object is a server operator */
isOp(): boolean;
/** Description copied from interface: ServerOperatorSets the operator status of this object */
setOp(value: boolean): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(...component: net_md_5_bungee_api_chat_BaseComponent[]): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(component: net_md_5_bungee_api_chat_BaseComponent): void;
addConsoleIfNeeded(): void;
done(): void;
done(url: string | null): void | null;
getTimingsURL(): string | null;
spigot(): org_bukkit_command_CommandSender_Spigot;
constructor(sender: org_bukkit_command_CommandSender, onDone: java_lang_Runnable | null);
constructor(senders: java_util_List<org_bukkit_command_CommandSender>);
constructor(senders: java_util_List<org_bukkit_command_CommandSender>, onDone: java_lang_Runnable | null);
constructor(senders: org_bukkit_command_CommandSender);
  }
}