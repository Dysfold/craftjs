//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
/** Provides an ability to time sections of code within the Minecraft Server */

  export class Timing implements java_lang_AutoCloseable {
timingHandler: co_aikar_timings_TimingHandler | null;
abort(): void;
close(): void;
/** Starts timing the execution until stopTiming() is called.

 But only if we are on the primary thread. */
startTimingIfSync(): co_aikar_timings_Timing;
/** Stops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources

 But only if we are on the primary thread. */
stopTimingIfSync(): void;
/** Used internally to get the actual backing Handler in the case of delegated Handlers */
getTimingHandler(): co_aikar_timings_TimingHandler | null;
/** Starts timing the execution until stopTiming() is called. */
startTiming(): co_aikar_timings_Timing;
/** Stops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources */
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
abort(): void;
isEnabled(): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
close(): void;
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
count: number | null;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
getCount(key: T | null): number | null;
decrement(key: T | null): number | null;
decrement(key: T | null, amount: number): number | null;
increment(key: T | null): number | null;
increment(key: T | null, amount: number): number | null;
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
isEnabled(): boolean;
equals(o: java_lang_Object): boolean;
hashCode(): number;
/** This is simply for the Closeable interface so it can be used with try-with-resources () */
close(): void;
/** Description copied from interface: TimingStarts timing the execution until Timing.stopTiming() is called.

 But only if we are on the primary thread. */
startTimingIfSync(): co_aikar_timings_Timing;
/** Description copied from interface: TimingStops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources

 But only if we are on the primary thread. */
stopTimingIfSync(): void;
/** Description copied from interface: TimingUsed internally to get the actual backing Handler in the case of delegated Handlers */
getTimingHandler(): co_aikar_timings_TimingHandler;
isSpecial(): boolean;
/** Description copied from interface: TimingStarts timing the execution until Timing.stopTiming() is called. */
startTiming(): co_aikar_timings_Timing;
/** Description copied from interface: TimingStops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources */
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
import { JSONPair as co_aikar_util_JSONUtil_JSONPair } from 'co.aikar.util.JSONUtil';
import { Map as java_util_Map, List as java_util_List } from 'java.util';
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';
import { Function as com_google_common_base_Function } from 'com.google.common.base';
/** Provides Utility methods that assist with generating JSON Objects */

  export class JSONUtil extends java_lang_Object {

/** Creates a new JSON object from multiple JSONPair key/value pairs */
static createObject(...data: co_aikar_util_JSONUtil_JSONPair[]): java_util_Map<string, java_lang_Object>;
/** This builds a JSON array from a set of data */
static toArray(...data: java_lang_Object[]): java_util_List;
/** This appends multiple key/value Obj pairs into a JSON Object */
static appendObjectData(parent: java_util_Map, ...data: co_aikar_util_JSONUtil_JSONPair[]): java_util_Map<string, java_lang_Object>;
/** These help build a single JSON Object from a collection, using a mapper function */
static toObjectMapper<E extends java_lang_Object>(collection: E[], mapper: com_google_common_base_Function<E, co_aikar_util_JSONUtil_JSONPair>): java_util_Map;
static toObjectMapper<E extends java_lang_Object>(collection: java_lang_Iterable<E>, mapper: com_google_common_base_Function<E, co_aikar_util_JSONUtil_JSONPair>): java_util_Map;
static toArrayMapper<E extends java_lang_Object>(collection: java_lang_Iterable<E>, mapper: com_google_common_base_Function<E, java_lang_Object>): java_util_List;
/** These help build a single JSON array using a mapper function */
static toArrayMapper<E extends java_lang_Object>(collection: E[], mapper: com_google_common_base_Function<E, java_lang_Object>): java_util_List;
/** Creates a key/value "JSONPair" object */
static pair(key: string, obj: java_lang_Object | null): co_aikar_util_JSONUtil_JSONPair | null;
static pair(key: number, obj: java_lang_Object | null): co_aikar_util_JSONUtil_JSONPair | null;

  }
}//@ts-nocheck

declare module 'co.aikar.util.JSONUtil' {
import { Object as java_lang_Object } from 'java.lang';
/** Simply stores a key and a value, used internally by many methods below. */

  export class JSONPair extends java_lang_Object {
key: string;
val: java_lang_Object;


  }
}//@ts-nocheck

declare module 'co.aikar.util.JSONUtil' {
import { Object as java_lang_Object } from 'java.lang';
/** Simply stores a key and a value, used internally by many methods below. */

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
/** Allows you to pass a Loader function that when a key is accessed that doesn't exist,
 automatically loads the entry into the map by calling the loader Function.

 .get() Will only return null if the Loader can return null.

 You may pass any backing Map to use.

 This class is not thread safe and should be wrapped with Collections.synchronizedMap on the OUTSIDE of the LoadingMap if needed.

 Do not wrap the backing map with Collections.synchronizedMap. */

  export class LoadingIntMap<V extends java_lang_Object> extends it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap<V> {
loader: com_google_common_base_Function<java_lang_Integer, V>;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
get(key: number): V | null;
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
constructor(expectedSize: number, loadFactor: number, loader: com_google_common_base_Function<java_lang_Integer, V>);
constructor(expectedSize: number, loader: com_google_common_base_Function<java_lang_Integer, V>);
constructor(loader: com_google_common_base_Function<java_lang_Integer, V>);
  }
}//@ts-nocheck

declare module 'co.aikar.util.LoadingIntMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';
import { Function as com_google_common_base_Function } from 'com.google.common.base';
/** Due to java stuff, you will need to cast it to (Function) for some cases */

  export class Feeder<T extends java_lang_Object> extends java_lang_Object implements com_google_common_base_Function<T, T> {

apply(input: java_lang_Object | null): T | null;
apply(): T | null;
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
/** Allows you to pass a Loader function that when a key is accessed that doesn't exists,
 automatically loads the entry into the map by calling the loader Function.

 .get() Will only return null if the Loader can return null.

 You may pass any backing Map to use.

 This class is not thread safe and should be wrapped with Collections.synchronizedMap on the OUTSIDE of the LoadingMap if needed.

 Do not wrap the backing map with Collections.synchronizedMap. */

  export class LoadingMap<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> {
backingMap: java_util_Map<K, V>;
loader: java_util_function_Function<K, V>;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
remove(key: java_lang_Object | null): V | null;
get(key: java_lang_Object | null): V | null;
put(key: K | null, value: V | null): V | null;
equals(o: java_lang_Object | null): boolean | null;
values(): java_util_Collection<V>;
hashCode(): number;
clone(): java_lang_Object;
clone(): co_aikar_util_LoadingMap<K, V>;
clear(): void;
isEmpty(): boolean;
size(): number;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(m: java_util_Map<K, V>): void;
/** Creates a new LoadingMap with the specified map and loader */
static of<K extends java_lang_Object, V extends java_lang_Object>(backingMap: java_util_Map<K, V>, loader: java_util_function_Function<K, V>): java_util_Map<K, V>;
containsKey(key: java_lang_Object | null): boolean | null;
containsValue(value: java_lang_Object | null): boolean | null;
keySet(): java_util_Set<K>;
/** Initializes an auto loading map using an Identity HashMap */
static newIdentityHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>): java_util_Map<K, V>;
/** Initializes an auto loading map using an Identity HashMap */
static newIdentityHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>, initialCapacity: number): java_util_Map<K, V>;
/** Creates a LoadingMap with an auto instantiating loader.

 Will auto construct class of of Value when not found

 Since this uses Reflection, It is more effecient to define your own static loader
 than using this helper, but if performance is not critical, this is easier. */
static newAutoMap<K extends java_lang_Object, V extends java_lang_Object>(backingMap: java_util_Map<K, V>, valueClass: java_lang_Class<V>): java_util_Map<K, V>;
/** Creates a LoadingMap with an auto instantiating loader.

 Will auto construct class of of Value when not found

 Since this uses Reflection, It is more effecient to define your own static loader
 than using this helper, but if performance is not critical, this is easier. */
static newAutoMap<K extends java_lang_Object, V extends java_lang_Object>(backingMap: java_util_Map<K, V>, keyClass: java_lang_Class<K> | null, valueClass: java_lang_Class<V>): java_util_Map<K, V> | null;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(keyClass: java_lang_Class<K> | null, valueClass: java_lang_Class<V>): java_util_Map<K, V> | null;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(valueClass: java_lang_Class<V>, initialCapacity: number, loadFactor: number): java_util_Map<K, V>;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(keyClass: java_lang_Class<K> | null, valueClass: java_lang_Class<V>, initialCapacity: number, loadFactor: number): java_util_Map<K, V> | null;
static newHashAutoMap<K extends java_lang_Object, V extends java_lang_Object>(valueClass: java_lang_Class<V>): java_util_Map<K, V>;
/** Initializes an auto loading map using a HashMap */
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>, initialCapacity: number): java_util_Map<K, V>;
/** Initializes an auto loading map using a HashMap */
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>, initialCapacity: number, loadFactor: number): java_util_Map<K, V>;
/** Initializes an auto loading map using a HashMap */
static newHashMap<K extends java_lang_Object, V extends java_lang_Object>(loader: java_util_function_Function<K, V>): java_util_Map<K, V>;
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
/** Initializes an auto loading map using specified loader and backing map */
constructor(backingMap: java_util_Map<K, V>, loader: java_util_function_Function<K, V>);
  }
}//@ts-nocheck

declare module 'co.aikar.util.LoadingMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';
/** Due to java stuff, you will need to cast it to (Function) for some cases */

  export class Feeder<T extends java_lang_Object> extends java_lang_Object implements java_util_function_Function<T, T> {

apply(input: java_lang_Object | null): T | null;
apply(): T | null;
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
/** Implements a Most Recently Used cache in front of a backing map, to quickly access the last accessed result. */

  export class MRUMapCache<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> {
backingMap: java_util_Map<K, V>;
cacheKey: java_lang_Object;
cacheValue: V;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
remove(key: java_lang_Object | null): V | null;
get(key: java_lang_Object | null): V | null;
put(key: K | null, value: V | null): V | null;
values(): java_util_Collection<V>;
clear(): void;
isEmpty(): boolean;
size(): number;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(m: java_util_Map<K, V>): void;
/** Wraps the specified map with a most recently used cache */
static of<K extends java_lang_Object, V extends java_lang_Object>(map: java_util_Map<K, V>): java_util_Map<K, V>;
containsKey(key: java_lang_Object | null): boolean | null;
containsValue(value: java_lang_Object | null): boolean | null;
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
constructor(backingMap: java_util_Map<K, V>);
  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { Object as java_lang_Object } from 'java.lang';

  export class NullTimingHandler extends java_lang_Object implements co_aikar_timings_Timing {
static NULL: co_aikar_timings_Timing;
timingHandler: co_aikar_timings_TimingHandler | null;
abort(): void;
close(): void;
/** Description copied from interface: TimingStarts timing the execution until Timing.stopTiming() is called.

 But only if we are on the primary thread. */
startTimingIfSync(): co_aikar_timings_Timing;
/** Description copied from interface: TimingStops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources

 But only if we are on the primary thread. */
stopTimingIfSync(): void;
/** Description copied from interface: TimingUsed internally to get the actual backing Handler in the case of delegated Handlers */
getTimingHandler(): co_aikar_timings_TimingHandler | null;
/** Description copied from interface: TimingStarts timing the execution until Timing.stopTiming() is called. */
startTiming(): co_aikar_timings_Timing;
/** Description copied from interface: TimingStops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources */
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
execute(listener: org_bukkit_event_Listener, event: org_bukkit_event_Event): void;
/** Wraps an event executor and associates a timing handler to it. */
constructor(executor: org_bukkit_plugin_EventExecutor, plugin: org_bukkit_plugin_Plugin, method: java_lang_reflect_Method | null, eventClass: java_lang_Class<org_bukkit_event_Event>);
  }
}//@ts-nocheck

declare module 'co.aikar.timings' {
import { Timing as co_aikar_timings_Timing, TimingHandler as co_aikar_timings_TimingHandler } from 'co.aikar.timings';
import { AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
/** Provides an ability to time sections of code within the Minecraft Server */

  export class Timing implements java_lang_AutoCloseable {
timingHandler: co_aikar_timings_TimingHandler | null;
abort(): void;
close(): void;
/** Starts timing the execution until stopTiming() is called.

 But only if we are on the primary thread. */
startTimingIfSync(): co_aikar_timings_Timing;
/** Stops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources

 But only if we are on the primary thread. */
stopTimingIfSync(): void;
/** Used internally to get the actual backing Handler in the case of delegated Handlers */
getTimingHandler(): co_aikar_timings_TimingHandler | null;
/** Starts timing the execution until stopTiming() is called. */
startTiming(): co_aikar_timings_Timing;
/** Stops timing and records the data. Propagates the data up to group handlers.

 Will automatically be called when this Timing is used with try-with-resources */
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
import { Object as java_lang_Object } from 'java.lang';

  export class Timings extends java_lang_Object {
static MAX_HISTORY_FRAMES: number;
static NULL_HANDLER: co_aikar_timings_Timing;
static timingsEnabled: boolean;
static verboseEnabled: boolean;
static historyInterval: number;
static historyLength: number;
static historyInterval: number;
static historyLength: number;
/** Returns a Timing for a plugin corresponding to a name. */
static of(plugin: org_bukkit_plugin_Plugin, name: string): co_aikar_timings_Timing;
/** Returns a handler that has a groupHandler timer handler. Parent timers should not have their
 start/stop methods called directly, as the children will call it for you.

 Parent Timers are used to group multiple subsections together and get a summary of them combined
 Parent Handler can not be changed after first call */
static of(plugin: org_bukkit_plugin_Plugin, name: string, groupHandler: co_aikar_timings_Timing | null): co_aikar_timings_Timing | null;
/** Resets all Timing Data */
static reset(): void;
/** Sets whether or not the Spigot Timings system should be enabled

 Calling this will reset timing data. */
static setTimingsEnabled(enabled: boolean): void;
/** Gets whether or not the Spigot Timings system is enabled */
static isTimingsEnabled(): boolean;
/** Sets whether or not the Timings should monitor at Verbose level.

 When Verbose is disabled, high-frequency timings will not be available.
 Calling this will reset timing data. */
static setVerboseTimingsEnabled(enabled: boolean): void;
/** Gets the interval between Timing History report generation.

 Defaults to 5 minutes (6000 ticks) */
static getHistoryInterval(): number;
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
/** Sets whether or not the Timings should monitor at Verbose level.

 When Verbose is disabled, high-frequency timings will not be available. */
static isVerboseTimingsEnabled(): boolean;
/** Sets the interval between Timing History report generations.

 Defaults to 5 minutes (6000 ticks)

 This will recheck your history length, so lowering this value will lower your
 history length if you need more than 60 history windows. */
static setHistoryInterval(interval: number): void;
/** Sets how long Timing History reports are kept for the server.

 Defaults to 1 hours(72000 ticks)

 This value is capped at a maximum of getHistoryInterval() * MAX_HISTORY_FRAMES (12)

 Will not reset Timing Data but may truncate old history if the new length is less than old length. */
static setHistoryLength(length: number): void;
/** Gets how long in ticks Timings history is kept for the server.

 Defaults to 1 hour (72000 ticks) */
static getHistoryLength(): number;
/** Generates a report and sends it to the specified command sender.

 If sender is null, ConsoleCommandSender will be used. */
static generateReport(sender: org_bukkit_command_CommandSender | null): void | null;
/** Generates a report and sends it to the specified listener.
 Use with BufferedCommandSender to get full response when done! */
static generateReport(sender: co_aikar_timings_TimingsReportListener): void;

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
timingsURL: string | null;
name: string;
server: org_bukkit_Server;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
done(): void;
done(url: string | null): void | null;
getTimingsURL(): string | null;
addConsoleIfNeeded(): void;
/** Description copied from interface: CommandSenderSends this sender a message */
sendMessage(message: string): void;
/** Description copied from interface: CommandSenderGets the name of this command sender */
getName(): string;
/** Description copied from interface: CommandSenderSends this sender a message */
sendMessage(message: string[]): void;
/** Description copied from interface: CommandSenderReturns the server instance that this command is running on */
getServer(): org_bukkit_Server;
/** Description copied from interface: ServerOperatorChecks if this object is a server operator */
isOp(): boolean;
spigot(): org_bukkit_command_CommandSender_Spigot;
/** Description copied from interface: PermissibleChecks if this object contains an override for the specified
 permission, by fully qualified name */
isPermissionSet(name: string): boolean;
/** Description copied from interface: PermissibleChecks if this object contains an override for the specified Permission */
isPermissionSet(perm: org_bukkit_permissions_Permission): boolean;
/** Description copied from interface: PermissibleGets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned */
hasPermission(perm: org_bukkit_permissions_Permission): boolean;
/** Description copied from interface: PermissibleGets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned. */
hasPermission(name: string): boolean;
/** Description copied from interface: PermissibleTemporarily adds a new PermissionAttachment with a single
 permission by name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean, ticks: number): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleAdds a new empty PermissionAttachment to this object */
addAttachment(plugin: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleAdds a new PermissionAttachment with a single permission by
 name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleTemporarily adds a new empty PermissionAttachment to this
 object */
addAttachment(plugin: org_bukkit_plugin_Plugin, ticks: number): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleRemoves the given PermissionAttachment from this object */
removeAttachment(attachment: org_bukkit_permissions_PermissionAttachment): void;
/** Description copied from interface: PermissibleRecalculates the permissions for this object, if the attachments have
 changed values.
 
 This should very rarely need to be called from a plugin. */
recalculatePermissions(): void;
/** Description copied from interface: PermissibleGets a set containing all of the permissions currently in effect by
 this object */
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
/** Description copied from interface: ServerOperatorSets the operator status of this object */
setOp(value: boolean): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(component: net_md_5_bungee_api_chat_BaseComponent): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(...component: net_md_5_bungee_api_chat_BaseComponent[]): void;
constructor(senders: java_util_List<org_bukkit_command_CommandSender>, onDone: java_lang_Runnable | null);
constructor(senders: org_bukkit_command_CommandSender);
constructor(sender: org_bukkit_command_CommandSender, onDone: java_lang_Runnable | null);
constructor(senders: java_util_List<org_bukkit_command_CommandSender>);
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
permission: string;
name: string;
usage: string;
label: string;
timingName: string;
permissionMessage: string;
aliases: java_util_List<string>;
description: string;
class: java_lang_Class<java_lang_Object>;
/** Description copied from class: CommandExecutes the command, returning its success */
execute(sender: org_bukkit_command_CommandSender, currentAlias: string, args: string[]): boolean;
/** Description copied from class: CommandExecuted on tab completion for this command, returning a list of
 options the player can tab through. */
tabComplete(sender: org_bukkit_command_CommandSender, alias: string, args: string[]): java_util_List<string>;
setPermission(arg0: string): void;
getPermission(): string;
unregister(arg0: org_bukkit_command_CommandMap): boolean;
toString(): string;
getName(): string;
isRegistered(): boolean;
register(arg0: org_bukkit_command_CommandMap): boolean;
setName(arg0: string): boolean;
getUsage(): string;
getLabel(): string;
setLabel(arg0: string): boolean;
testPermissionSilent(arg0: org_bukkit_command_CommandSender): boolean;
getTimingName(): string;
testPermission(arg0: org_bukkit_command_CommandSender): boolean;
setDescription(arg0: string): org_bukkit_command_Command;
setPermissionMessage(arg0: string): org_bukkit_command_Command;
setUsage(arg0: string): org_bukkit_command_Command;
static broadcastCommandMessage(arg0: org_bukkit_command_CommandSender, arg1: string, arg2: boolean): void;
static broadcastCommandMessage(arg0: org_bukkit_command_CommandSender, arg1: string): void;
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
constructor(name: string);
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
static commandTiming: co_aikar_timings_Timing | null;
static pluginByClassloader: org_bukkit_plugin_Plugin | null;
/** Due to access restrictions, we need a helper method to get a Command TimingHandler with String group

 Plugins should never call this */
static getCommandTiming(pluginName: string | null, command: org_bukkit_command_Command): co_aikar_timings_Timing | null;
/** Looks up the class loader for the specified class, and if it is a PluginClassLoader, return the
 Plugin that created this class. */
static getPluginByClassloader(clazz: java_lang_Class<java_lang_Object> | null): org_bukkit_plugin_Plugin | null;

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
timingsURL: string | null;
name: string;
server: org_bukkit_Server;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
done(): void;
done(url: string | null): void | null;
getTimingsURL(): string | null;
addConsoleIfNeeded(): void;
/** Description copied from interface: CommandSenderSends this sender a message */
sendMessage(message: string): void;
/** Description copied from interface: CommandSenderGets the name of this command sender */
getName(): string;
/** Description copied from interface: CommandSenderSends this sender a message */
sendMessage(message: string[]): void;
/** Description copied from interface: CommandSenderReturns the server instance that this command is running on */
getServer(): org_bukkit_Server;
/** Description copied from interface: ServerOperatorChecks if this object is a server operator */
isOp(): boolean;
spigot(): org_bukkit_command_CommandSender_Spigot;
/** Description copied from interface: PermissibleChecks if this object contains an override for the specified
 permission, by fully qualified name */
isPermissionSet(name: string): boolean;
/** Description copied from interface: PermissibleChecks if this object contains an override for the specified Permission */
isPermissionSet(perm: org_bukkit_permissions_Permission): boolean;
/** Description copied from interface: PermissibleGets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned */
hasPermission(perm: org_bukkit_permissions_Permission): boolean;
/** Description copied from interface: PermissibleGets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned. */
hasPermission(name: string): boolean;
/** Description copied from interface: PermissibleTemporarily adds a new PermissionAttachment with a single
 permission by name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean, ticks: number): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleAdds a new empty PermissionAttachment to this object */
addAttachment(plugin: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleAdds a new PermissionAttachment with a single permission by
 name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleTemporarily adds a new empty PermissionAttachment to this
 object */
addAttachment(plugin: org_bukkit_plugin_Plugin, ticks: number): org_bukkit_permissions_PermissionAttachment;
/** Description copied from interface: PermissibleRemoves the given PermissionAttachment from this object */
removeAttachment(attachment: org_bukkit_permissions_PermissionAttachment): void;
/** Description copied from interface: PermissibleRecalculates the permissions for this object, if the attachments have
 changed values.
 
 This should very rarely need to be called from a plugin. */
recalculatePermissions(): void;
/** Description copied from interface: PermissibleGets a set containing all of the permissions currently in effect by
 this object */
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
/** Description copied from interface: ServerOperatorSets the operator status of this object */
setOp(value: boolean): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(component: net_md_5_bungee_api_chat_BaseComponent): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(...component: net_md_5_bungee_api_chat_BaseComponent[]): void;
constructor(senders: java_util_List<org_bukkit_command_CommandSender>, onDone: java_lang_Runnable | null);
constructor(senders: org_bukkit_command_CommandSender);
constructor(sender: org_bukkit_command_CommandSender, onDone: java_lang_Runnable | null);
constructor(senders: java_util_List<org_bukkit_command_CommandSender>);
  }
}