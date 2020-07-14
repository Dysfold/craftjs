//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Multimap as com_google_common_collect_Multimap, Multiset as com_google_common_collect_Multiset } from 'com.google.common.collect';
import { BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Multimap<K extends java_lang_Object, V extends java_lang_Object> {

asMap(): java_util_Map<K, java_util_Collection<V>>;
clear(): void;
containsEntry(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
entries(): java_util_Collection<java_util_Map_Entry<K, V>>;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: K): java_util_Collection<V>;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
keys(): com_google_common_collect_Multiset<K>;
put(arg0: K, arg1: V): boolean;
putAll(arg0: K, arg1: java_lang_Iterable<V>): boolean;
putAll(arg0: com_google_common_collect_Multimap<K, V>): boolean;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
removeAll(arg0: java_lang_Object): java_util_Collection<V>;
replaceValues(arg0: K, arg1: java_lang_Iterable<V>): java_util_Collection<V>;
size(): number;
values(): java_util_Collection<V>;

  }
}
//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Set as java_util_Set, Collection as java_util_Collection } from 'java.util';
import { Entry as com_google_common_collect_Multiset_Entry } from 'com.google.common.collect.Multiset';
import { Consumer as java_util_function_Consumer, ObjIntConsumer as java_util_function_ObjIntConsumer, IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Multiset<E extends java_lang_Object> implements java_util_Collection<E> {

add(arg0: E): boolean;
add(arg0: E, arg1: number): number;
addAll(arg0: java_util_Collection<E>): boolean;
clear(): void;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
count(arg0: java_lang_Object): number;
elementSet(): java_util_Set<E>;
entrySet(): java_util_Set<com_google_common_collect_Multiset_Entry<E>>;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachEntry(arg0: java_util_function_ObjIntConsumer<java_lang_Object>): void;
hashCode(): number;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: java_lang_Object): boolean;
remove(arg0: java_lang_Object, arg1: number): number;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
setCount(arg0: E, arg1: number): number;
setCount(arg0: E, arg1: number, arg2: number): boolean;
size(): number;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;
toString(): string;

  }
}
//@ts-nocheck

declare module 'com.google.common.collect.Multiset' {
import { Object as java_lang_Object } from 'java.lang';

  export class Entry<E extends java_lang_Object> {
count: number;
element: E;
equals(arg0: java_lang_Object): boolean;
getCount(): number;
getElement(): E;
hashCode(): number;
toString(): string;

  }
}
//@ts-nocheck

declare module 'com.google.common.base' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';

  export class Function<F extends java_lang_Object, T extends java_lang_Object> implements java_util_function_Function<F, T> {

andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
apply(arg0: F): T;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
equals(arg0: java_lang_Object): boolean;

  }
}
//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { ForwardingObject as com_google_common_collect_ForwardingObject } from 'com.google.common.collect';

  export class ForwardingMap<K extends java_lang_Object, V extends java_lang_Object> extends com_google_common_collect_ForwardingObject implements java_util_Map<K, V> {
class: java_lang_Class<java_lang_Object>;
orDefault: V;
clear(): void;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: java_lang_Object): V;
getClass(): java_lang_Class<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
notify(): void;
notifyAll(): void;
put(arg0: K, arg1: V): V;
putAll(arg0: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
values(): java_util_Collection<V>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object } from 'java.lang';

  export class ForwardingObject extends java_lang_Object {

toString(): string;

  }
}