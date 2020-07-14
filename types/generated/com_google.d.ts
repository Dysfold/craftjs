//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Multimap as com_google_common_collect_Multimap, Multiset as com_google_common_collect_Multiset } from 'com.google.common.collect';
import { BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Multimap<K extends java_lang_Object, V extends java_lang_Object> {

remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
get(arg0: K): java_util_Collection<V>;
put(arg0: K, arg1: V): boolean;
equals(arg0: java_lang_Object): boolean;
values(): java_util_Collection<V>;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
size(): number;
putAll(arg0: com_google_common_collect_Multimap<K, V>): boolean;
putAll(arg0: K, arg1: java_lang_Iterable<V>): boolean;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
keys(): com_google_common_collect_Multiset<K>;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<K>;
entries(): java_util_Collection<java_util_Map_Entry<K, V>>;
removeAll(arg0: java_lang_Object): java_util_Collection<V>;
asMap(): java_util_Map<K, java_util_Collection<V>>;
containsEntry(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replaceValues(arg0: K, arg1: java_lang_Iterable<V>): java_util_Collection<V>;

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

add(arg0: E, arg1: number): number;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
remove(arg0: java_lang_Object, arg1: number): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
count(arg0: java_lang_Object): number;
contains(arg0: java_lang_Object): boolean;
size(): number;
iterator(): java_util_Iterator<E>;
spliterator(): java_util_Spliterator<E>;
entrySet(): java_util_Set<com_google_common_collect_Multiset_Entry<E>>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
forEachEntry(arg0: java_util_function_ObjIntConsumer<java_lang_Object>): void;
setCount(arg0: E, arg1: number): number;
setCount(arg0: E, arg1: number, arg2: number): boolean;
elementSet(): java_util_Set<E>;
clear(): void;
isEmpty(): boolean;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
addAll(arg0: java_util_Collection<E>): boolean;
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;

  }
}
//@ts-nocheck

declare module 'com.google.common.collect.Multiset' {
import { Object as java_lang_Object } from 'java.lang';

  export class Entry<E extends java_lang_Object> {
count: number;
element: E;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getCount(): number;
getElement(): E;

  }
}
//@ts-nocheck

declare module 'com.google.common.base' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';

  export class Function<F extends java_lang_Object, T extends java_lang_Object> implements java_util_function_Function<F, T> {

equals(arg0: java_lang_Object): boolean;
apply(arg0: F): T;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;

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
remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
equals(arg0: java_lang_Object): boolean;
values(): java_util_Collection<V>;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
size(): number;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(arg0: java_util_Map<K, V>): void;
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

  }
}
//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object } from 'java.lang';

  export class ForwardingObject extends java_lang_Object {

toString(): string;

  }
}