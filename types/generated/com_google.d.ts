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
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'com.google.common.base' {
import { Object as java_lang_Object } from 'java.lang';
import { Function as java_util_function_Function } from 'java.util.function';

  export class Function<F extends java_lang_Object, T extends java_lang_Object> implements java_util_function_Function<F, T> {

equals(arg0: java_lang_Object): boolean;
apply(arg0: F): T;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;

  }
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object } from 'java.lang';

  export class ForwardingObject extends java_lang_Object {

toString(): string;

  }
}//@ts-nocheck

declare module 'com.google.common.collect.ImmutableList' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable, Class as java_lang_Class } from 'java.lang';
import { Builder as com_google_common_collect_ImmutableCollection_Builder, ArrayBasedBuilder as com_google_common_collect_ImmutableCollection_ArrayBasedBuilder } from 'com.google.common.collect.ImmutableCollection';
import { Builder as com_google_common_collect_ImmutableList_Builder } from 'com.google.common.collect.ImmutableList';
import { Iterator as java_util_Iterator } from 'java.util';
import { ImmutableList as com_google_common_collect_ImmutableList, ImmutableCollection as com_google_common_collect_ImmutableCollection } from 'com.google.common.collect';

  export class Builder<E extends java_lang_Object> extends com_google_common_collect_ImmutableCollection_ArrayBasedBuilder<E> {
class: java_lang_Class<java_lang_Object>;
add(arg0: java_lang_Object[]): com_google_common_collect_ImmutableCollection_Builder;
add(...arg0: E[]): com_google_common_collect_ImmutableList_Builder<E>;
add(arg0: java_lang_Object): com_google_common_collect_ImmutableCollection_Builder;
add(arg0: java_lang_Object): com_google_common_collect_ImmutableCollection_ArrayBasedBuilder;
add(arg0: E): com_google_common_collect_ImmutableList_Builder<E>;
addAll(arg0: java_lang_Iterable<E>): com_google_common_collect_ImmutableList_Builder<E>;
addAll(arg0: java_lang_Iterable): com_google_common_collect_ImmutableCollection_Builder;
addAll(arg0: java_util_Iterator): com_google_common_collect_ImmutableCollection_Builder;
addAll(arg0: java_util_Iterator<E>): com_google_common_collect_ImmutableList_Builder<E>;
build(): com_google_common_collect_ImmutableList<E>;
build(): com_google_common_collect_ImmutableCollection;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
  }
}//@ts-nocheck

declare module 'com.google.common.collect.ImmutableCollection' {
import { Builder as com_google_common_collect_ImmutableCollection_Builder } from 'com.google.common.collect.ImmutableCollection';
import { Iterator as java_util_Iterator } from 'java.util';
import { Iterable as java_lang_Iterable, Object as java_lang_Object } from 'java.lang';
import { ImmutableCollection as com_google_common_collect_ImmutableCollection } from 'com.google.common.collect';

  export class Builder<E extends java_lang_Object> extends java_lang_Object {
static DEFAULT_INITIAL_CAPACITY: number;
add(arg0: E): com_google_common_collect_ImmutableCollection_Builder<E>;
add(...arg0: E[]): com_google_common_collect_ImmutableCollection_Builder<E>;
addAll(arg0: java_util_Iterator<E>): com_google_common_collect_ImmutableCollection_Builder<E>;
addAll(arg0: java_lang_Iterable<E>): com_google_common_collect_ImmutableCollection_Builder<E>;
build(): com_google_common_collect_ImmutableCollection<E>;

  }
}//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, AbstractCollection as java_util_AbstractCollection } from 'java.util';
import { UnmodifiableIterator as com_google_common_collect_UnmodifiableIterator, ImmutableList as com_google_common_collect_ImmutableList } from 'com.google.common.collect';
import { Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ImmutableCollection<E extends java_lang_Object> extends java_util_AbstractCollection<E> implements java_io_Serializable {
static SPLITERATOR_CHARACTERISTICS: number;
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
clear(): void;
contains(arg0: java_lang_Object): boolean;
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
iterator(): java_util_Iterator;
iterator(): com_google_common_collect_UnmodifiableIterator<E>;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
asList(): com_google_common_collect_ImmutableList<E>;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
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
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'com.google.common.collect' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator } from 'java.util';

  export class UnmodifiableIterator<E extends java_lang_Object> extends java_lang_Object implements java_util_Iterator<E> {

remove(): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): E;
hasNext(): boolean;

  }
}//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable, Comparable as java_lang_Comparable, Class as java_lang_Class } from 'java.lang';
import { ImmutableList as com_google_common_collect_ImmutableList, UnmodifiableIterator as com_google_common_collect_UnmodifiableIterator, UnmodifiableListIterator as com_google_common_collect_UnmodifiableListIterator, ImmutableCollection as com_google_common_collect_ImmutableCollection } from 'com.google.common.collect';
import { Collection as java_util_Collection, Iterator as java_util_Iterator, List as java_util_List, Spliterator as java_util_Spliterator, Comparator as java_util_Comparator, ListIterator as java_util_ListIterator, RandomAccess as java_util_RandomAccess } from 'java.util';
import { Builder as com_google_common_collect_ImmutableList_Builder } from 'com.google.common.collect.ImmutableList';
import { UnaryOperator as java_util_function_UnaryOperator, Consumer as java_util_function_Consumer, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Collector as java_util_stream_Collector, Stream as java_util_stream_Stream } from 'java.util.stream';

  export class ImmutableList<E extends java_lang_Object> extends com_google_common_collect_ImmutableCollection<E> implements java_util_List<E>, java_util_RandomAccess {
class: java_lang_Class<java_lang_Object>;
add(arg0: number, arg1: E): void;
remove(arg0: number): E;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static copyOf<E extends java_lang_Object>(arg0: E[]): com_google_common_collect_ImmutableList<E>;
static copyOf<E extends java_lang_Object>(arg0: java_util_Collection<E>): com_google_common_collect_ImmutableList<E>;
static copyOf<E extends java_lang_Object>(arg0: java_lang_Iterable<E>): com_google_common_collect_ImmutableList<E>;
static copyOf<E extends java_lang_Object>(arg0: java_util_Iterator<E>): com_google_common_collect_ImmutableList<E>;
indexOf(arg0: java_lang_Object): number;
static builder<E extends java_lang_Object>(): com_google_common_collect_ImmutableList_Builder<E>;
lastIndexOf(arg0: java_lang_Object): number;
contains(arg0: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
subList(arg0: number, arg1: number): com_google_common_collect_ImmutableList<E>;
subList(arg0: number, arg1: number): java_util_List;
iterator(): com_google_common_collect_UnmodifiableIterator<E>;
iterator(): java_util_Iterator;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
set(arg0: number, arg1: E): E;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E, arg11: E, ...arg12: E[]): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): com_google_common_collect_ImmutableList<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): com_google_common_collect_ImmutableList<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
asList(): com_google_common_collect_ImmutableList<E>;
reverse(): com_google_common_collect_ImmutableList<E>;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
listIterator(arg0: number): java_util_ListIterator;
listIterator(arg0: number): com_google_common_collect_UnmodifiableListIterator<E>;
listIterator(): java_util_ListIterator;
listIterator(): com_google_common_collect_UnmodifiableListIterator<E>;
static toImmutableList<E extends java_lang_Object>(): java_util_stream_Collector<E, java_lang_Object, com_google_common_collect_ImmutableList<E>>;
static sortedCopyOf<E extends java_lang_Comparable<java_lang_Object>>(arg0: java_lang_Iterable<E>): com_google_common_collect_ImmutableList<E>;
static sortedCopyOf<E extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>, arg1: java_lang_Iterable<E>): com_google_common_collect_ImmutableList<E>;
toString(): string;
isEmpty(): boolean;
size(): number;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
parallelStream(): java_util_stream_Stream<E>;
get(arg0: number): E;

  }
}//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { UnmodifiableIterator as com_google_common_collect_UnmodifiableIterator } from 'com.google.common.collect';
import { ListIterator as java_util_ListIterator } from 'java.util';

  export class UnmodifiableListIterator<E extends java_lang_Object> extends com_google_common_collect_UnmodifiableIterator<E> implements java_util_ListIterator<E> {
class: java_lang_Class<java_lang_Object>;
add(arg0: E): void;
set(arg0: E): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): E;
hasNext(): boolean;
nextIndex(): number;
previous(): E;
previousIndex(): number;
hasPrevious(): boolean;

  }
}//@ts-nocheck

declare module 'com.google.common.collect.ImmutableCollection' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable, Class as java_lang_Class } from 'java.lang';
import { Builder as com_google_common_collect_ImmutableCollection_Builder, ArrayBasedBuilder as com_google_common_collect_ImmutableCollection_ArrayBasedBuilder } from 'com.google.common.collect.ImmutableCollection';

  export class ArrayBasedBuilder<E extends java_lang_Object> extends com_google_common_collect_ImmutableCollection_Builder<E> {
contents: java_lang_Object[];
size: number;
class: java_lang_Class<java_lang_Object>;
add(arg0: java_lang_Object): com_google_common_collect_ImmutableCollection_Builder;
add(arg0: E): com_google_common_collect_ImmutableCollection_ArrayBasedBuilder<E>;
add(...arg0: E[]): com_google_common_collect_ImmutableCollection_Builder<E>;
addAll(arg0: java_lang_Iterable<E>): com_google_common_collect_ImmutableCollection_Builder<E>;
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

declare module 'com.google.common.graph' {
import { Object as java_lang_Object } from 'java.lang';
import { Set as java_util_Set } from 'java.util';
import { EndpointPair as com_google_common_graph_EndpointPair, ElementOrder as com_google_common_graph_ElementOrder, Graph as com_google_common_graph_Graph } from 'com.google.common.graph';

  export class MutableGraph<N extends java_lang_Object> implements com_google_common_graph_Graph<N> {

removeNode(arg0: java_lang_Object): boolean;
putEdge(arg0: N, arg1: N): boolean;
removeEdge(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
addNode(arg0: N): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
successors(arg0: java_lang_Object): java_util_Set<N>;
nodes(): java_util_Set<N>;
edges(): java_util_Set<com_google_common_graph_EndpointPair<N>>;
isDirected(): boolean;
allowsSelfLoops(): boolean;
nodeOrder(): com_google_common_graph_ElementOrder<N>;
adjacentNodes(arg0: java_lang_Object): java_util_Set<N>;
predecessors(arg0: java_lang_Object): java_util_Set<N>;
degree(arg0: java_lang_Object): number;
inDegree(arg0: java_lang_Object): number;
outDegree(arg0: java_lang_Object): number;

  }
}//@ts-nocheck

declare module 'com.google.common.graph' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { UnmodifiableIterator as com_google_common_collect_UnmodifiableIterator } from 'com.google.common.collect';
import { EndpointPair as com_google_common_graph_EndpointPair } from 'com.google.common.graph';
import { Consumer as java_util_function_Consumer } from 'java.util.function';

  export class EndpointPair<N extends java_lang_Object> extends java_lang_Object implements java_lang_Iterable<N> {
nodeU: N;
nodeV: N;
equals(arg0: java_lang_Object): boolean;
target(): N;
hashCode(): number;
iterator(): java_util_Iterator;
iterator(): com_google_common_collect_UnmodifiableIterator<N>;
source(): N;
static unordered<N extends java_lang_Object>(arg0: N, arg1: N): com_google_common_graph_EndpointPair<N>;
isOrdered(): boolean;
nodeU(): N;
nodeV(): N;
adjacentNode(arg0: java_lang_Object): N;
static ordered<N extends java_lang_Object>(arg0: N, arg1: N): com_google_common_graph_EndpointPair<N>;
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'com.google.common.graph' {
import { Type as com_google_common_graph_ElementOrder_Type } from 'com.google.common.graph.ElementOrder';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Comparator as java_util_Comparator } from 'java.util';
import { ElementOrder as com_google_common_graph_ElementOrder } from 'com.google.common.graph';

  export class ElementOrder<T extends java_lang_Object> extends java_lang_Object {
type: com_google_common_graph_ElementOrder_Type;
comparator: java_util_Comparator<T>;
type(): com_google_common_graph_ElementOrder_Type;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
comparator(): java_util_Comparator<T>;
static sorted<S extends java_lang_Object>(arg0: java_util_Comparator<S>): com_google_common_graph_ElementOrder<S>;
static unordered<S extends java_lang_Object>(): com_google_common_graph_ElementOrder<S>;
static insertion<S extends java_lang_Object>(): com_google_common_graph_ElementOrder<S>;
static natural<S extends java_lang_Comparable<java_lang_Object>>(): com_google_common_graph_ElementOrder<S>;

  }
}//@ts-nocheck

declare module 'com.google.common.graph.ElementOrder' {
import { Type as com_google_common_graph_ElementOrder_Type } from 'com.google.common.graph.ElementOrder';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Type extends java_lang_Enum<com_google_common_graph_ElementOrder_Type> {
static UNORDERED: com_google_common_graph_ElementOrder_Type;
static INSERTION: com_google_common_graph_ElementOrder_Type;
static SORTED: com_google_common_graph_ElementOrder_Type;
static $VALUES: com_google_common_graph_ElementOrder_Type[];
class: java_lang_Class<java_lang_Object>;
static values(): com_google_common_graph_ElementOrder_Type[];
static valueOf(arg0: string): com_google_common_graph_ElementOrder_Type;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.google.common.graph' {
import { Object as java_lang_Object } from 'java.lang';
import { Set as java_util_Set } from 'java.util';
import { EndpointPair as com_google_common_graph_EndpointPair, ElementOrder as com_google_common_graph_ElementOrder } from 'com.google.common.graph';

  export class Graph<N extends java_lang_Object> {

equals(arg0: java_lang_Object): boolean;
hashCode(): number;
successors(arg0: java_lang_Object): java_util_Set<N>;
nodes(): java_util_Set<N>;
edges(): java_util_Set<com_google_common_graph_EndpointPair<N>>;
isDirected(): boolean;
allowsSelfLoops(): boolean;
nodeOrder(): com_google_common_graph_ElementOrder<N>;
adjacentNodes(arg0: java_lang_Object): java_util_Set<N>;
predecessors(arg0: java_lang_Object): java_util_Set<N>;
degree(arg0: java_lang_Object): number;
inDegree(arg0: java_lang_Object): number;
outDegree(arg0: java_lang_Object): number;

  }
}//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Queue as java_util_Queue } from 'java.util';
import { EvictingQueue as com_google_common_collect_EvictingQueue, ForwardingQueue as com_google_common_collect_ForwardingQueue } from 'com.google.common.collect';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class EvictingQueue<E extends java_lang_Object> extends com_google_common_collect_ForwardingQueue<E> implements java_io_Serializable {
delegate: java_util_Queue<E>;
maxSize: number;
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
contains(arg0: java_lang_Object): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
static create<E extends java_lang_Object>(arg0: number): com_google_common_collect_EvictingQueue<E>;
offer(arg0: E): boolean;
remainingCapacity(): number;
clear(): void;
isEmpty(): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
iterator(): java_util_Iterator<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
toString(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Spliterator as java_util_Spliterator, Queue as java_util_Queue } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { ForwardingCollection as com_google_common_collect_ForwardingCollection } from 'com.google.common.collect';

  export class ForwardingQueue<E extends java_lang_Object> extends com_google_common_collect_ForwardingCollection<E> implements java_util_Queue<E> {
class: java_lang_Class<java_lang_Object>;
remove(): E;
poll(): E;
peek(): E;
element(): E;
offer(arg0: E): boolean;
toString(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'com.google.common.collect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Iterator as java_util_Iterator, Collection as java_util_Collection, Spliterator as java_util_Spliterator } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { ForwardingObject as com_google_common_collect_ForwardingObject } from 'com.google.common.collect';

  export class ForwardingCollection<E extends java_lang_Object> extends com_google_common_collect_ForwardingObject implements java_util_Collection<E> {
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
iterator(): java_util_Iterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}