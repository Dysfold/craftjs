//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Object as java_lang_Object, Integer as java_lang_Integer, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { ObjectCollection as it_unimi_dsi_fastutil_objects_ObjectCollection, ObjectSet as it_unimi_dsi_fastutil_objects_ObjectSet } from 'it.unimi.dsi.fastutil.objects';
import { Collection as java_util_Collection, Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { Int2ObjectOpenHashMap as it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap, IntSet as it_unimi_dsi_fastutil_ints_IntSet, Int2ObjectFunction as it_unimi_dsi_fastutil_ints_Int2ObjectFunction, Int2ObjectMap as it_unimi_dsi_fastutil_ints_Int2ObjectMap, AbstractInt2ObjectMap as it_unimi_dsi_fastutil_ints_AbstractInt2ObjectMap } from 'it.unimi.dsi.fastutil.ints';
import { BiFunction as java_util_function_BiFunction, IntFunction as java_util_function_IntFunction, Function as java_util_function_Function, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { FastEntrySet as it_unimi_dsi_fastutil_ints_Int2ObjectMap_FastEntrySet } from 'it.unimi.dsi.fastutil.ints.Int2ObjectMap';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Serializable as java_io_Serializable } from 'java.io';
import { Hash as it_unimi_dsi_fastutil_Hash } from 'it.unimi.dsi.fastutil';

  export class Int2ObjectOpenHashMap<V extends java_lang_Object> extends it_unimi_dsi_fastutil_ints_AbstractInt2ObjectMap<V> implements java_io_Serializable, java_lang_Cloneable, it_unimi_dsi_fastutil_Hash {
static serialVersionUID: number;
static ASSERTS: boolean;
key: number[];
value: V[];
mask: number;
containsNullKey: boolean;
n: number;
maxFill: number;
minN: number;
size: number;
f: number;
entries: it_unimi_dsi_fastutil_ints_Int2ObjectMap_FastEntrySet<V>;
keys: it_unimi_dsi_fastutil_ints_IntSet;
values: it_unimi_dsi_fastutil_objects_ObjectCollection<V>;
orDefault: V;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
remove(arg0: number, arg1: java_lang_Object): boolean;
remove(arg0: number): V;
get(arg0: number): V;
put(arg0: number, arg1: V): V;
values(): it_unimi_dsi_fastutil_objects_ObjectCollection<V>;
values(): java_util_Collection;
hashCode(): number;
clone(): java_lang_Object;
clone(): it_unimi_dsi_fastutil_ints_Int2ObjectOpenHashMap<V>;
clear(): void;
isEmpty(): boolean;
replace(arg0: number, arg1: V, arg2: V): boolean;
replace(arg0: number, arg1: V): V;
trim(): boolean;
trim(arg0: number): boolean;
size(): number;
merge(arg0: number, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
putAll(arg0: java_util_Map<java_lang_Integer, V>): void;
putIfAbsent(arg0: number, arg1: V): V;
compute(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
containsKey(arg0: number): boolean;
computeIfAbsent(arg0: number, arg1: java_util_function_IntFunction<V>): V;
containsValue(arg0: java_lang_Object): boolean;
keySet(): it_unimi_dsi_fastutil_ints_IntSet;
keySet(): java_util_Set;
getOrDefault(arg0: number, arg1: V): V;
computeIfPresent(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
int2ObjectEntrySet(): it_unimi_dsi_fastutil_objects_ObjectSet;
int2ObjectEntrySet(): it_unimi_dsi_fastutil_ints_Int2ObjectMap_FastEntrySet<V>;
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
constructor(arg0: java_util_Map<java_lang_Integer, V>);
constructor(arg0: it_unimi_dsi_fastutil_ints_Int2ObjectMap<V>, arg1: number);
constructor(arg0: it_unimi_dsi_fastutil_ints_Int2ObjectMap<V>);
constructor(arg0: number[], arg1: V[], arg2: number);
constructor(arg0: number[], arg1: V[]);
constructor(arg0: number, arg1: number);
constructor(arg0: number);
constructor();
constructor(arg0: java_util_Map<java_lang_Integer, V>, arg1: number);
  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.objects' {
import { ObjectIterator as it_unimi_dsi_fastutil_objects_ObjectIterator, ObjectIterable as it_unimi_dsi_fastutil_objects_ObjectIterable } from 'it.unimi.dsi.fastutil.objects';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class ObjectCollection<K extends java_lang_Object> implements java_util_Collection<K>, it_unimi_dsi_fastutil_objects_ObjectIterable<K> {

iterator(): it_unimi_dsi_fastutil_objects_ObjectIterator<K>;
iterator(): java_util_Iterator;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
stream(): java_util_stream_Stream<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.objects' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator } from 'java.util';

  export class ObjectIterator<K extends java_lang_Object> implements java_util_Iterator<K> {

skip(arg0: number): number;
remove(): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): E;
hasNext(): boolean;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.objects' {
import { ObjectIterator as it_unimi_dsi_fastutil_objects_ObjectIterator } from 'it.unimi.dsi.fastutil.objects';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';

  export class ObjectIterable<K extends java_lang_Object> implements java_lang_Iterable<K> {

iterator(): it_unimi_dsi_fastutil_objects_ObjectIterator<K>;
iterator(): java_util_Iterator;
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { IntIterator as it_unimi_dsi_fastutil_ints_IntIterator, IntCollection as it_unimi_dsi_fastutil_ints_IntCollection } from 'it.unimi.dsi.fastutil.ints';
import { Predicate as java_util_function_Predicate, IntPredicate as java_util_function_IntPredicate, IntFunction as java_util_function_IntFunction, Consumer as java_util_function_Consumer, IntConsumer as java_util_function_IntConsumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class IntSet implements it_unimi_dsi_fastutil_ints_IntCollection, java_util_Set<java_lang_Integer> {

add(arg0: java_lang_Object): boolean;
add(arg0: java_lang_Integer): boolean;
remove(arg0: number): boolean;
remove(arg0: java_lang_Object): boolean;
contains(arg0: java_lang_Object): boolean;
iterator(): java_util_Iterator;
iterator(): it_unimi_dsi_fastutil_ints_IntIterator;
rem(arg0: number): boolean;
add(arg0: number): boolean;
contains(arg0: number): boolean;
toArray(arg0: number[]): number[];
addAll(arg0: it_unimi_dsi_fastutil_ints_IntCollection): boolean;
containsAll(arg0: it_unimi_dsi_fastutil_ints_IntCollection): boolean;
retainAll(arg0: it_unimi_dsi_fastutil_ints_IntCollection): boolean;
removeAll(arg0: it_unimi_dsi_fastutil_ints_IntCollection): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_IntPredicate): boolean;
toIntArray(): number[];
toIntArray(arg0: number[]): number[];
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
stream(): java_util_stream_Stream<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEach(arg0: java_util_function_IntConsumer): void;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Consumer as java_util_function_Consumer, IntConsumer as java_util_function_IntConsumer } from 'java.util.function';
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { OfInt as java_util_PrimitiveIterator_OfInt } from 'java.util.PrimitiveIterator';

  export class IntIterator implements java_util_PrimitiveIterator_OfInt {

forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): java_lang_Object;
next(): java_lang_Integer;
skip(arg0: number): number;
nextInt(): number;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_IntConsumer): void;
remove(): void;
hasNext(): boolean;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection } from 'java.util';
import { IntIterator as it_unimi_dsi_fastutil_ints_IntIterator, IntCollection as it_unimi_dsi_fastutil_ints_IntCollection, IntIterable as it_unimi_dsi_fastutil_ints_IntIterable } from 'it.unimi.dsi.fastutil.ints';
import { Predicate as java_util_function_Predicate, IntPredicate as java_util_function_IntPredicate, IntFunction as java_util_function_IntFunction, Consumer as java_util_function_Consumer, IntConsumer as java_util_function_IntConsumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class IntCollection implements java_util_Collection<java_lang_Integer>, it_unimi_dsi_fastutil_ints_IntIterable {

add(arg0: java_lang_Object): boolean;
add(arg0: number): boolean;
add(arg0: java_lang_Integer): boolean;
remove(arg0: java_lang_Object): boolean;
contains(arg0: java_lang_Object): boolean;
contains(arg0: number): boolean;
toArray(arg0: number[]): number[];
iterator(): java_util_Iterator;
iterator(): it_unimi_dsi_fastutil_ints_IntIterator;
addAll(arg0: it_unimi_dsi_fastutil_ints_IntCollection): boolean;
rem(arg0: number): boolean;
containsAll(arg0: it_unimi_dsi_fastutil_ints_IntCollection): boolean;
retainAll(arg0: it_unimi_dsi_fastutil_ints_IntCollection): boolean;
removeAll(arg0: it_unimi_dsi_fastutil_ints_IntCollection): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_IntPredicate): boolean;
toIntArray(): number[];
toIntArray(arg0: number[]): number[];
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
stream(): java_util_stream_Stream<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEach(arg0: java_util_function_IntConsumer): void;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { IntIterator as it_unimi_dsi_fastutil_ints_IntIterator } from 'it.unimi.dsi.fastutil.ints';
import { IntConsumer as java_util_function_IntConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object, Iterable as java_lang_Iterable, Integer as java_lang_Integer } from 'java.lang';

  export class IntIterable implements java_lang_Iterable<java_lang_Integer> {

iterator(): java_util_Iterator;
iterator(): it_unimi_dsi_fastutil_ints_IntIterator;
forEach(arg0: java_util_function_IntConsumer): void;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
spliterator(): java_util_Spliterator<T>;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.objects' {
import { ObjectIterator as it_unimi_dsi_fastutil_objects_ObjectIterator, ObjectCollection as it_unimi_dsi_fastutil_objects_ObjectCollection } from 'it.unimi.dsi.fastutil.objects';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class ObjectSet<K extends java_lang_Object> implements it_unimi_dsi_fastutil_objects_ObjectCollection<K>, java_util_Set<K> {

iterator(): it_unimi_dsi_fastutil_objects_ObjectIterator<K>;
iterator(): java_util_Iterator;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
stream(): java_util_stream_Stream<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints.Int2ObjectMap' {
import { Consumer as java_util_function_Consumer, IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { ObjectIterator as it_unimi_dsi_fastutil_objects_ObjectIterator, ObjectSet as it_unimi_dsi_fastutil_objects_ObjectSet } from 'it.unimi.dsi.fastutil.objects';
import { Entry as it_unimi_dsi_fastutil_ints_Int2ObjectMap_Entry } from 'it.unimi.dsi.fastutil.ints.Int2ObjectMap';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class FastEntrySet<V extends java_lang_Object> implements it_unimi_dsi_fastutil_objects_ObjectSet<it_unimi_dsi_fastutil_ints_Int2ObjectMap_Entry<V>> {

fastForEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
fastIterator(): it_unimi_dsi_fastutil_objects_ObjectIterator<it_unimi_dsi_fastutil_ints_Int2ObjectMap_Entry<V>>;
iterator(): it_unimi_dsi_fastutil_objects_ObjectIterator<K>;
iterator(): java_util_Iterator;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
stream(): java_util_stream_Stream<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints.Int2ObjectMap' {
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Entry<V extends java_lang_Object> implements java_util_Map_Entry<java_lang_Integer, V> {
key: java_lang_Integer;
key: java_lang_Object;
intKey: number;
value: V;
getKey(): java_lang_Integer;
getKey(): java_lang_Object;
getIntKey(): number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getValue(): V;
setValue(arg0: V): V;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { Function as java_util_function_Function, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Function as it_unimi_dsi_fastutil_Function } from 'it.unimi.dsi.fastutil';

  export class Int2ObjectFunction<V extends java_lang_Object> implements it_unimi_dsi_fastutil_Function<java_lang_Integer, V>, java_util_function_IntFunction<V> {

remove(arg0: java_lang_Object): V;
remove(arg0: number): V;
get(arg0: java_lang_Object): V;
get(arg0: number): V;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Integer, arg1: V): V;
put(arg0: number, arg1: V): V;
apply(arg0: number): V;
containsKey(arg0: java_lang_Object): boolean;
containsKey(arg0: number): boolean;
defaultReturnValue(arg0: V): void;
defaultReturnValue(): V;
clear(): void;
size(): number;
apply(arg0: K): V;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';

  export class Function<K extends java_lang_Object, V extends java_lang_Object> implements java_util_function_Function<K, V> {

remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
clear(): void;
size(): number;
apply(arg0: K): V;
containsKey(arg0: java_lang_Object): boolean;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { ObjectCollection as it_unimi_dsi_fastutil_objects_ObjectCollection, ObjectSet as it_unimi_dsi_fastutil_objects_ObjectSet } from 'it.unimi.dsi.fastutil.objects';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { BiFunction as java_util_function_BiFunction, Function as java_util_function_Function, IntFunction as java_util_function_IntFunction, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { IntSet as it_unimi_dsi_fastutil_ints_IntSet, Int2ObjectFunction as it_unimi_dsi_fastutil_ints_Int2ObjectFunction } from 'it.unimi.dsi.fastutil.ints';
import { Entry as it_unimi_dsi_fastutil_ints_Int2ObjectMap_Entry } from 'it.unimi.dsi.fastutil.ints.Int2ObjectMap';

  export class Int2ObjectMap<V extends java_lang_Object> implements it_unimi_dsi_fastutil_ints_Int2ObjectFunction<V>, java_util_Map<java_lang_Integer, V> {
orDefault: V;
orDefault: V;
remove(arg0: java_lang_Object): V;
remove(arg0: number, arg1: java_lang_Object): boolean;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
get(arg0: java_lang_Object): V;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Integer, arg1: V): V;
values(): it_unimi_dsi_fastutil_objects_ObjectCollection<V>;
values(): java_util_Collection;
clear(): void;
replace(arg0: number, arg1: V): V;
replace(arg0: number, arg1: V, arg2: V): boolean;
replace(arg0: java_lang_Integer, arg1: V): V;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
replace(arg0: java_lang_Integer, arg1: V, arg2: V): boolean;
size(): number;
merge(arg0: java_lang_Integer, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
merge(arg0: number, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
merge(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_util_function_BiFunction): java_lang_Object;
entrySet(): it_unimi_dsi_fastutil_objects_ObjectSet<java_util_Map_Entry<java_lang_Integer, V>>;
entrySet(): java_util_Set;
putIfAbsent(arg0: java_lang_Integer, arg1: V): V;
putIfAbsent(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
putIfAbsent(arg0: number, arg1: V): V;
compute(arg0: java_lang_Integer, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
compute(arg0: java_lang_Object, arg1: java_util_function_BiFunction): java_lang_Object;
compute(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
containsKey(arg0: number): boolean;
containsKey(arg0: java_lang_Object): boolean;
computeIfAbsent(arg0: java_lang_Object, arg1: java_util_function_Function): java_lang_Object;
computeIfAbsent(arg0: number, arg1: java_util_function_IntFunction<V>): V;
computeIfAbsent(arg0: java_lang_Integer, arg1: java_util_function_Function<java_lang_Object, V>): V;
keySet(): it_unimi_dsi_fastutil_ints_IntSet;
keySet(): java_util_Set;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
getOrDefault(arg0: number, arg1: V): V;
computeIfPresent(arg0: java_lang_Integer, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfPresent(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfPresent(arg0: java_lang_Object, arg1: java_util_function_BiFunction): java_lang_Object;
defaultReturnValue(): V;
defaultReturnValue(arg0: V): void;
computeIfAbsentPartial(arg0: number, arg1: it_unimi_dsi_fastutil_ints_Int2ObjectFunction<V>): V;
int2ObjectEntrySet(): it_unimi_dsi_fastutil_objects_ObjectSet<it_unimi_dsi_fastutil_ints_Int2ObjectMap_Entry<V>>;
remove(arg0: number): V;
get(arg0: number): V;
put(arg0: number, arg1: V): V;
apply(arg0: number): V;
apply(arg0: K): V;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
isEmpty(): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
putAll(arg0: java_util_Map<K, V>): void;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
containsValue(arg0: java_lang_Object): boolean;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Object as java_lang_Object, Integer as java_lang_Integer, Class as java_lang_Class } from 'java.lang';
import { ObjectCollection as it_unimi_dsi_fastutil_objects_ObjectCollection, ObjectSet as it_unimi_dsi_fastutil_objects_ObjectSet } from 'it.unimi.dsi.fastutil.objects';
import { Collection as java_util_Collection, Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { IntSet as it_unimi_dsi_fastutil_ints_IntSet, Int2ObjectFunction as it_unimi_dsi_fastutil_ints_Int2ObjectFunction, AbstractInt2ObjectFunction as it_unimi_dsi_fastutil_ints_AbstractInt2ObjectFunction, Int2ObjectMap as it_unimi_dsi_fastutil_ints_Int2ObjectMap } from 'it.unimi.dsi.fastutil.ints';
import { Function as java_util_function_Function, BiFunction as java_util_function_BiFunction, IntFunction as java_util_function_IntFunction, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Entry as it_unimi_dsi_fastutil_ints_Int2ObjectMap_Entry } from 'it.unimi.dsi.fastutil.ints.Int2ObjectMap';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AbstractInt2ObjectMap<V extends java_lang_Object> extends it_unimi_dsi_fastutil_ints_AbstractInt2ObjectFunction<V> implements it_unimi_dsi_fastutil_ints_Int2ObjectMap<V>, java_io_Serializable {
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
orDefault: V;
equals(arg0: java_lang_Object): boolean;
toString(): string;
values(): it_unimi_dsi_fastutil_objects_ObjectCollection<V>;
values(): java_util_Collection;
hashCode(): number;
isEmpty(): boolean;
putAll(arg0: java_util_Map<java_lang_Integer, V>): void;
containsKey(arg0: number): boolean;
containsValue(arg0: java_lang_Object): boolean;
keySet(): it_unimi_dsi_fastutil_ints_IntSet;
keySet(): java_util_Set;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
remove(arg0: java_lang_Object): V;
remove(arg0: number): V;
get(arg0: java_lang_Object): V;
get(arg0: number): V;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Integer, arg1: V): V;
put(arg0: number, arg1: V): V;
apply(arg0: number): V;
containsKey(arg0: java_lang_Object): boolean;
clear(): void;
size(): number;
apply(arg0: K): V;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
remove(arg0: number, arg1: java_lang_Object): boolean;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: number, arg1: V): V;
replace(arg0: number, arg1: V, arg2: V): boolean;
replace(arg0: java_lang_Integer, arg1: V): V;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
replace(arg0: java_lang_Integer, arg1: V, arg2: V): boolean;
merge(arg0: java_lang_Integer, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
merge(arg0: number, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
merge(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_util_function_BiFunction): java_lang_Object;
entrySet(): it_unimi_dsi_fastutil_objects_ObjectSet<java_util_Map_Entry<java_lang_Integer, V>>;
entrySet(): java_util_Set;
putIfAbsent(arg0: java_lang_Integer, arg1: V): V;
putIfAbsent(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
putIfAbsent(arg0: number, arg1: V): V;
compute(arg0: java_lang_Integer, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
compute(arg0: java_lang_Object, arg1: java_util_function_BiFunction): java_lang_Object;
compute(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: java_lang_Object, arg1: java_util_function_Function): java_lang_Object;
computeIfAbsent(arg0: number, arg1: java_util_function_IntFunction<V>): V;
computeIfAbsent(arg0: java_lang_Integer, arg1: java_util_function_Function<java_lang_Object, V>): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
getOrDefault(arg0: number, arg1: V): V;
computeIfPresent(arg0: java_lang_Integer, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfPresent(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfPresent(arg0: java_lang_Object, arg1: java_util_function_BiFunction): java_lang_Object;
computeIfAbsentPartial(arg0: number, arg1: it_unimi_dsi_fastutil_ints_Int2ObjectFunction<V>): V;
int2ObjectEntrySet(): it_unimi_dsi_fastutil_objects_ObjectSet<it_unimi_dsi_fastutil_ints_Int2ObjectMap_Entry<V>>;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil.ints' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';
import { Int2ObjectFunction as it_unimi_dsi_fastutil_ints_Int2ObjectFunction } from 'it.unimi.dsi.fastutil.ints';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AbstractInt2ObjectFunction<V extends java_lang_Object> extends java_lang_Object implements it_unimi_dsi_fastutil_ints_Int2ObjectFunction<V>, java_io_Serializable {
static serialVersionUID: number;
defRetValue: V;
defaultReturnValue(arg0: V): void;
defaultReturnValue(): V;
remove(arg0: java_lang_Object): V;
remove(arg0: number): V;
get(arg0: java_lang_Object): V;
get(arg0: number): V;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Integer, arg1: V): V;
put(arg0: number, arg1: V): V;
apply(arg0: number): V;
containsKey(arg0: java_lang_Object): boolean;
containsKey(arg0: number): boolean;
clear(): void;
size(): number;
apply(arg0: K): V;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;

  }
}//@ts-nocheck

declare module 'it.unimi.dsi.fastutil' {


  export class Hash {
static DEFAULT_INITIAL_SIZE: number;
static DEFAULT_LOAD_FACTOR: number;
static FAST_LOAD_FACTOR: number;
static VERY_FAST_LOAD_FACTOR: number;
static DEFAULT_GROWTH_FACTOR: number;
static FREE: number;
static OCCUPIED: number;
static REMOVED: number;
static PRIMES: number[];


  }
}