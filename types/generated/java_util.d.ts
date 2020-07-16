//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Collection as java_util_Collection, Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Map<K extends java_lang_Object, V extends java_lang_Object> {
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
getOrDefault(arg0: java_lang_Object, arg1: V): V;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
put(arg0: K, arg1: V): V;
putAll(arg0: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
static copyOf<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Map<K, V>): java_util_Map<K, V>;
static entry<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V): java_util_Map_Entry<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): java_util_Map<K, V>;
static ofEntries<K extends java_lang_Object, V extends java_lang_Object>(...arg0: JArray<java_util_Map_Entry<K, V>>): java_util_Map<K, V>;
values(): java_util_Collection<V>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Collection<E extends java_lang_Object> implements java_lang_Iterable<E> {

add(arg0: E): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
clear(): void;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
hashCode(): number;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: java_lang_Object): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
size(): number;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class IntFunction<R extends java_lang_Object> {

apply(arg0: number): R;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Iterator<E extends java_lang_Object> {

forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
hasNext(): boolean;
next(): E;
remove(): void;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
/** Represents an operation that accepts a single input argument and returns no
 result. */

  export class Consumer<T extends java_lang_Object> {

/** Performs this operation on the given argument. */
accept(t: T): void;
andThen(arg0: java_util_function_Consumer<java_lang_Object>): java_util_function_Consumer<T>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';

  export class Spliterator<T extends java_lang_Object> {
comparator: java_util_Comparator<java_lang_Object>;
exactSizeIfKnown: number;
static CONCURRENT: number;
static DISTINCT: number;
static IMMUTABLE: number;
static NONNULL: number;
static ORDERED: number;
static SIZED: number;
static SORTED: number;
static SUBSIZED: number;
characteristics(): number;
estimateSize(): number;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
getComparator(): java_util_Comparator<java_lang_Object>;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
trySplit(): java_util_Spliterator<T>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Comparator as java_util_Comparator } from 'java.util';
import { Function as java_util_function_Function, ToIntFunction as java_util_function_ToIntFunction, ToLongFunction as java_util_function_ToLongFunction, ToDoubleFunction as java_util_function_ToDoubleFunction } from 'java.util.function';
/** Represents a captured state of an on / off comparator. */

  export class Comparator<T extends java_lang_Object> {

compare(arg0: T, arg1: T): number;
equals(arg0: java_lang_Object): boolean;
reversed(): java_util_Comparator<T>;
static comparing<T extends java_lang_Object, U extends java_lang_Comparable<java_lang_Object>>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_Comparator<T>;
static comparing<T extends java_lang_Object, U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
static comparingDouble<T extends java_lang_Object>(arg0: java_util_function_ToDoubleFunction<java_lang_Object>): java_util_Comparator<T>;
static comparingInt<T extends java_lang_Object>(arg0: java_util_function_ToIntFunction<java_lang_Object>): java_util_Comparator<T>;
static comparingLong<T extends java_lang_Object>(arg0: java_util_function_ToLongFunction<java_lang_Object>): java_util_Comparator<T>;
static naturalOrder<T extends java_lang_Comparable<java_lang_Object>>(): java_util_Comparator<T>;
static nullsFirst<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
static nullsLast<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
static reverseOrder<T extends java_lang_Comparable<java_lang_Object>>(): java_util_Comparator<T>;
thenComparing(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
thenComparing<U extends java_lang_Comparable<java_lang_Object>>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_Comparator<T>;
thenComparing<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
thenComparingDouble(arg0: java_util_function_ToDoubleFunction<java_lang_Object>): java_util_Comparator<T>;
thenComparingInt(arg0: java_util_function_ToIntFunction<java_lang_Object>): java_util_Comparator<T>;
thenComparingLong(arg0: java_util_function_ToLongFunction<java_lang_Object>): java_util_Comparator<T>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Function as java_util_function_Function } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Function<T extends java_lang_Object, R extends java_lang_Object> {

andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
apply(arg0: T): R;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
static identity<T extends java_lang_Object>(): java_util_function_Function<T, T>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToIntFunction<T extends java_lang_Object> {

applyAsInt(arg0: T): number;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToLongFunction<T extends java_lang_Object> {

applyAsLong(arg0: T): number;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToDoubleFunction<T extends java_lang_Object> {

applyAsDouble(arg0: T): number;

  }
}
//@ts-nocheck

declare module 'java.util.stream' {
import { Comparator as java_util_Comparator, Optional as java_util_Optional, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';
import { Builder as java_util_stream_Stream_Builder } from 'java.util.stream.Stream';
import { Stream as java_util_stream_Stream, Collector as java_util_stream_Collector, IntStream as java_util_stream_IntStream, LongStream as java_util_stream_LongStream, DoubleStream as java_util_stream_DoubleStream, BaseStream as java_util_stream_BaseStream } from 'java.util.stream';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Supplier as java_util_function_Supplier, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function, Consumer as java_util_function_Consumer, BinaryOperator as java_util_function_BinaryOperator, BiFunction as java_util_function_BiFunction, UnaryOperator as java_util_function_UnaryOperator, ToIntFunction as java_util_function_ToIntFunction, ToLongFunction as java_util_function_ToLongFunction, ToDoubleFunction as java_util_function_ToDoubleFunction } from 'java.util.function';

  export class Stream<T extends java_lang_Object> implements java_util_stream_BaseStream<T, java_util_stream_Stream<T>> {

allMatch(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
anyMatch(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
close(): void;
collect<R extends java_lang_Object, A extends java_lang_Object>(arg0: java_util_stream_Collector<java_lang_Object, A, R>): R;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_BiConsumer<R, java_lang_Object>, arg2: java_util_function_BiConsumer<R, R>): R;
count(): number;
distinct(): java_util_stream_Stream<T>;
dropWhile(arg0: java_util_function_Predicate<java_lang_Object>): java_util_stream_Stream<T>;
filter(arg0: java_util_function_Predicate<java_lang_Object>): java_util_stream_Stream<T>;
findAny(): java_util_Optional<T>;
findFirst(): java_util_Optional<T>;
flatMap<R extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_stream_Stream<R>>): java_util_stream_Stream<R>;
flatMapToDouble(arg0: java_util_function_Function<java_lang_Object, java_util_stream_DoubleStream>): java_util_stream_DoubleStream;
flatMapToInt(arg0: java_util_function_Function<java_lang_Object, java_util_stream_IntStream>): java_util_stream_IntStream;
flatMapToLong(arg0: java_util_function_Function<java_lang_Object, java_util_stream_LongStream>): java_util_stream_LongStream;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachOrdered(arg0: java_util_function_Consumer<java_lang_Object>): void;
isParallel(): boolean;
iterator(): java_util_Iterator<T>;
limit(arg0: number): java_util_stream_Stream<T>;
map<R extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, R>): java_util_stream_Stream<R>;
mapToDouble(arg0: java_util_function_ToDoubleFunction<java_lang_Object>): java_util_stream_DoubleStream;
mapToInt(arg0: java_util_function_ToIntFunction<java_lang_Object>): java_util_stream_IntStream;
mapToLong(arg0: java_util_function_ToLongFunction<java_lang_Object>): java_util_stream_LongStream;
max(arg0: java_util_Comparator<java_lang_Object>): java_util_Optional<T>;
min(arg0: java_util_Comparator<java_lang_Object>): java_util_Optional<T>;
noneMatch(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
onClose(arg0: java_lang_Runnable): S;
parallel(): S;
peek(arg0: java_util_function_Consumer<java_lang_Object>): java_util_stream_Stream<T>;
reduce(arg0: T, arg1: java_util_function_BinaryOperator<T>): T;
reduce(arg0: java_util_function_BinaryOperator<T>): java_util_Optional<T>;
reduce<U extends java_lang_Object>(arg0: U, arg1: java_util_function_BiFunction<U, java_lang_Object, U>, arg2: java_util_function_BinaryOperator<U>): U;
sequential(): S;
skip(arg0: number): java_util_stream_Stream<T>;
sorted(): java_util_stream_Stream<T>;
sorted(arg0: java_util_Comparator<java_lang_Object>): java_util_stream_Stream<T>;
spliterator(): java_util_Spliterator<T>;
static builder<T extends java_lang_Object>(): java_util_stream_Stream_Builder<T>;
static concat<T extends java_lang_Object>(arg0: java_util_stream_Stream<T>, arg1: java_util_stream_Stream<T>): java_util_stream_Stream<T>;
static empty<T extends java_lang_Object>(): java_util_stream_Stream<T>;
static generate<T extends java_lang_Object>(arg0: java_util_function_Supplier<T>): java_util_stream_Stream<T>;
static iterate<T extends java_lang_Object>(arg0: T, arg1: java_util_function_Predicate<java_lang_Object>, arg2: java_util_function_UnaryOperator<T>): java_util_stream_Stream<T>;
static iterate<T extends java_lang_Object>(arg0: T, arg1: java_util_function_UnaryOperator<T>): java_util_stream_Stream<T>;
static of<T extends java_lang_Object>(...arg0: JArray<T>): java_util_stream_Stream<T>;
static of<T extends java_lang_Object>(arg0: T): java_util_stream_Stream<T>;
static ofNullable<T extends java_lang_Object>(arg0: T): java_util_stream_Stream<T>;
takeWhile(arg0: java_util_function_Predicate<java_lang_Object>): java_util_stream_Stream<T>;
toArray(): JArray<java_lang_Object>;
toArray<A extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<A>>): JArray<A>;
unordered(): S;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Runnable as java_lang_Runnable } from 'java.lang';
import { Optional as java_util_Optional } from 'java.util';
import { Predicate as java_util_function_Predicate, Function as java_util_function_Function, Supplier as java_util_function_Supplier, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Optional<T extends java_lang_Object> extends java_lang_Object {

equals(arg0: java_lang_Object): boolean;
filter(arg0: java_util_function_Predicate<java_lang_Object>): java_util_Optional<T>;
flatMap<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_Optional<U>>): java_util_Optional<U>;
get(): T;
hashCode(): number;
ifPresent(arg0: java_util_function_Consumer<java_lang_Object>): void;
ifPresentOrElse(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_lang_Runnable): void;
isEmpty(): boolean;
isPresent(): boolean;
map<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_Optional<U>;
or(arg0: java_util_function_Supplier<java_util_Optional<T>>): java_util_Optional<T>;
orElse(arg0: T): T;
orElseGet(arg0: java_util_function_Supplier<T>): T;
orElseThrow(): T;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): T;
static empty<T extends java_lang_Object>(): java_util_Optional<T>;
static of<T extends java_lang_Object>(arg0: T): java_util_Optional<T>;
static ofNullable<T extends java_lang_Object>(arg0: T): java_util_Optional<T>;
stream(): java_util_stream_Stream<T>;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Predicate<T extends java_lang_Object> {

and(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
negate(): java_util_function_Predicate<T>;
or(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
static isEqual<T extends java_lang_Object>(arg0: java_lang_Object): java_util_function_Predicate<T>;
static not<T extends java_lang_Object>(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
test(arg0: T): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class Supplier<T extends java_lang_Object> {

get(): T;

  }
}
//@ts-nocheck

declare module 'java.util.stream' {
import { OptionalInt as java_util_OptionalInt, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, OptionalDouble as java_util_OptionalDouble, IntSummaryStatistics as java_util_IntSummaryStatistics } from 'java.util';
import { Builder as java_util_stream_IntStream_Builder } from 'java.util.stream.IntStream';
import { IntStream as java_util_stream_IntStream, BaseStream as java_util_stream_BaseStream, LongStream as java_util_stream_LongStream, DoubleStream as java_util_stream_DoubleStream, Stream as java_util_stream_Stream } from 'java.util.stream';
import { OfInt as java_util_PrimitiveIterator_OfInt } from 'java.util.PrimitiveIterator';
import { OfInt as java_util_Spliterator_OfInt } from 'java.util.Spliterator';
import { IntPredicate as java_util_function_IntPredicate, Supplier as java_util_function_Supplier, ObjIntConsumer as java_util_function_ObjIntConsumer, BiConsumer as java_util_function_BiConsumer, IntUnaryOperator as java_util_function_IntUnaryOperator, IntFunction as java_util_function_IntFunction, IntConsumer as java_util_function_IntConsumer, IntBinaryOperator as java_util_function_IntBinaryOperator, IntSupplier as java_util_function_IntSupplier, IntToLongFunction as java_util_function_IntToLongFunction, IntToDoubleFunction as java_util_function_IntToDoubleFunction } from 'java.util.function';
import { Object as java_lang_Object, Integer as java_lang_Integer, Runnable as java_lang_Runnable } from 'java.lang';

  export class IntStream implements java_util_stream_BaseStream<java_lang_Integer, java_util_stream_IntStream> {

allMatch(arg0: java_util_function_IntPredicate): boolean;
anyMatch(arg0: java_util_function_IntPredicate): boolean;
asDoubleStream(): java_util_stream_DoubleStream;
asLongStream(): java_util_stream_LongStream;
average(): java_util_OptionalDouble;
boxed(): java_util_stream_Stream<java_lang_Integer>;
close(): void;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_ObjIntConsumer<R>, arg2: java_util_function_BiConsumer<R, R>): R;
count(): number;
distinct(): java_util_stream_IntStream;
dropWhile(arg0: java_util_function_IntPredicate): java_util_stream_IntStream;
filter(arg0: java_util_function_IntPredicate): java_util_stream_IntStream;
findAny(): java_util_OptionalInt;
findFirst(): java_util_OptionalInt;
flatMap(arg0: java_util_function_IntFunction<java_util_stream_IntStream>): java_util_stream_IntStream;
forEach(arg0: java_util_function_IntConsumer): void;
forEachOrdered(arg0: java_util_function_IntConsumer): void;
isParallel(): boolean;
iterator(): java_util_Iterator;
iterator(): java_util_PrimitiveIterator_OfInt;
limit(arg0: number): java_util_stream_IntStream;
map(arg0: java_util_function_IntUnaryOperator): java_util_stream_IntStream;
mapToDouble(arg0: java_util_function_IntToDoubleFunction): java_util_stream_DoubleStream;
mapToLong(arg0: java_util_function_IntToLongFunction): java_util_stream_LongStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_IntFunction<U>): java_util_stream_Stream<U>;
max(): java_util_OptionalInt;
min(): java_util_OptionalInt;
noneMatch(arg0: java_util_function_IntPredicate): boolean;
onClose(arg0: java_lang_Runnable): S;
parallel(): java_util_stream_BaseStream;
parallel(): java_util_stream_IntStream;
peek(arg0: java_util_function_IntConsumer): java_util_stream_IntStream;
reduce(arg0: java_util_function_IntBinaryOperator): java_util_OptionalInt;
reduce(arg0: number, arg1: java_util_function_IntBinaryOperator): number;
sequential(): java_util_stream_BaseStream;
sequential(): java_util_stream_IntStream;
skip(arg0: number): java_util_stream_IntStream;
sorted(): java_util_stream_IntStream;
spliterator(): java_util_Spliterator;
spliterator(): java_util_Spliterator_OfInt;
static builder(): java_util_stream_IntStream_Builder;
static concat(arg0: java_util_stream_IntStream, arg1: java_util_stream_IntStream): java_util_stream_IntStream;
static empty(): java_util_stream_IntStream;
static generate(arg0: java_util_function_IntSupplier): java_util_stream_IntStream;
static iterate(arg0: number, arg1: java_util_function_IntPredicate, arg2: java_util_function_IntUnaryOperator): java_util_stream_IntStream;
static iterate(arg0: number, arg1: java_util_function_IntUnaryOperator): java_util_stream_IntStream;
static of(...arg0: JArray<number>): java_util_stream_IntStream;
static of(arg0: number): java_util_stream_IntStream;
static range(arg0: number, arg1: number): java_util_stream_IntStream;
static rangeClosed(arg0: number, arg1: number): java_util_stream_IntStream;
sum(): number;
summaryStatistics(): java_util_IntSummaryStatistics;
takeWhile(arg0: java_util_function_IntPredicate): java_util_stream_IntStream;
toArray(): JArray<number>;
unordered(): S;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Runnable as java_lang_Runnable } from 'java.lang';
import { OptionalInt as java_util_OptionalInt } from 'java.util';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';
import { Supplier as java_util_function_Supplier, IntConsumer as java_util_function_IntConsumer, IntSupplier as java_util_function_IntSupplier } from 'java.util.function';

  export class OptionalInt extends java_lang_Object {
asInt: number;
equals(arg0: java_lang_Object): boolean;
getAsInt(): number;
hashCode(): number;
ifPresent(arg0: java_util_function_IntConsumer): void;
ifPresentOrElse(arg0: java_util_function_IntConsumer, arg1: java_lang_Runnable): void;
isEmpty(): boolean;
isPresent(): boolean;
orElse(arg0: number): number;
orElseGet(arg0: java_util_function_IntSupplier): number;
orElseThrow(): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
static empty(): java_util_OptionalInt;
static of(arg0: number): java_util_OptionalInt;
stream(): java_util_stream_IntStream;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { IntConsumer as java_util_function_IntConsumer } from 'java.util.function';

  export class IntConsumer {

accept(arg0: number): void;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class IntSupplier {
asInt: number;
getAsInt(): number;

  }
}
//@ts-nocheck

declare module 'java.util.stream.IntStream' {
import { Builder as java_util_stream_IntStream_Builder } from 'java.util.stream.IntStream';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';
import { IntConsumer as java_util_function_IntConsumer } from 'java.util.function';

  export class Builder implements java_util_function_IntConsumer {

accept(arg0: number): void;
add(arg0: number): java_util_stream_IntStream_Builder;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;
build(): java_util_stream_IntStream;

  }
}
//@ts-nocheck

declare module 'java.util.PrimitiveIterator' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { IntConsumer as java_util_function_IntConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { PrimitiveIterator as java_util_PrimitiveIterator } from 'java.util';

  export class OfInt implements java_util_PrimitiveIterator<java_lang_Integer, java_util_function_IntConsumer> {

forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_util_function_IntConsumer): void;
hasNext(): boolean;
next(): java_lang_Integer;
next(): java_lang_Object;
nextInt(): number;
remove(): void;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Iterator as java_util_Iterator } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class Enumeration<E extends java_lang_Object> {

asIterator(): java_util_Iterator<E>;
hasMoreElements(): boolean;
nextElement(): E;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Collection as java_util_Collection, List as java_util_List, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Comparator as java_util_Comparator, ListIterator as java_util_ListIterator } from 'java.util';
import { UnaryOperator as java_util_function_UnaryOperator, IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class List<E extends java_lang_Object> implements java_util_Collection<E> {

add(arg0: E): boolean;
add(arg0: number, arg1: E): void;
addAll(arg0: java_util_Collection<E>): boolean;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
clear(): void;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
get(arg0: number): E;
hashCode(): number;
indexOf(arg0: java_lang_Object): number;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
lastIndexOf(arg0: java_lang_Object): number;
listIterator(): java_util_ListIterator<E>;
listIterator(arg0: number): java_util_ListIterator<E>;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: java_lang_Object): boolean;
remove(arg0: number): E;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
set(arg0: number, arg1: E): E;
size(): number;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
spliterator(): java_util_Spliterator<E>;
static copyOf<E extends java_lang_Object>(arg0: java_util_Collection<E>): java_util_List<E>;
static of<E extends java_lang_Object>(): java_util_List<E>;
static of<E extends java_lang_Object>(...arg0: JArray<E>): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): java_util_List<E>;
stream(): java_util_stream_Stream<E>;
subList(arg0: number, arg1: number): java_util_List<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { UnaryOperator as java_util_function_UnaryOperator, Function as java_util_function_Function } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class UnaryOperator<T extends java_lang_Object> implements java_util_function_Function<T, T> {

andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
apply(arg0: T): R;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
static identity<T extends java_lang_Object>(): java_util_function_UnaryOperator<T>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator } from 'java.util';

  export class ListIterator<E extends java_lang_Object> implements java_util_Iterator<E> {

add(arg0: E): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
hasNext(): boolean;
hasPrevious(): boolean;
next(): E;
nextIndex(): number;
previous(): E;
previousIndex(): number;
remove(): void;
set(arg0: E): void;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Set<E extends java_lang_Object> implements java_util_Collection<E> {

add(arg0: E): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
clear(): void;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
hashCode(): number;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: java_lang_Object): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
size(): number;
spliterator(): java_util_Spliterator<E>;
static copyOf<E extends java_lang_Object>(arg0: java_util_Collection<E>): java_util_Set<E>;
static of<E extends java_lang_Object>(): java_util_Set<E>;
static of<E extends java_lang_Object>(...arg0: JArray<E>): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): java_util_Set<E>;
stream(): java_util_stream_Stream<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { ChronoUnit as java_time_temporal_ChronoUnit } from 'java.time.temporal';
import { Duration as java_time_Duration } from 'java.time';
import { Object as java_lang_Object, Thread as java_lang_Thread, Class as java_lang_Class, Enum as java_lang_Enum } from 'java.lang';

  export class TimeUnit extends java_lang_Enum<java_util_concurrent_TimeUnit> {
class: java_lang_Class<java_lang_Object>;
static DAYS: java_util_concurrent_TimeUnit;
static HOURS: java_util_concurrent_TimeUnit;
static MICROSECONDS: java_util_concurrent_TimeUnit;
static MILLISECONDS: java_util_concurrent_TimeUnit;
static MINUTES: java_util_concurrent_TimeUnit;
static NANOSECONDS: java_util_concurrent_TimeUnit;
static SECONDS: java_util_concurrent_TimeUnit;
convert(arg0: java_time_Duration): number;
convert(arg0: number, arg1: java_util_concurrent_TimeUnit): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
sleep(arg0: number): void;
static of(arg0: java_time_temporal_ChronoUnit): java_util_concurrent_TimeUnit;
static valueOf(arg0: string): java_util_concurrent_TimeUnit;
static values(): JArray<java_util_concurrent_TimeUnit>;
timedJoin(arg0: java_lang_Thread, arg1: number): void;
timedWait(arg0: java_lang_Object, arg1: number): void;
toChronoUnit(): java_time_temporal_ChronoUnit;
toDays(arg0: number): number;
toHours(arg0: number): number;
toMicros(arg0: number): number;
toMillis(arg0: number): number;
toMinutes(arg0: number): number;
toNanos(arg0: number): number;
toSeconds(arg0: number): number;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Character as java_lang_Character, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Category as java_util_Locale_Category, LanguageRange as java_util_Locale_LanguageRange, FilteringMode as java_util_Locale_FilteringMode, IsoCountryCode as java_util_Locale_IsoCountryCode } from 'java.util.Locale';
import { Locale as java_util_Locale, List as java_util_List, Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Locale extends java_lang_Object implements java_lang_Cloneable, java_io_Serializable {
country: string;
displayCountry: string;
displayCountry: string;
displayLanguage: string;
displayLanguage: string;
displayName: string;
displayName: string;
displayScript: string;
displayScript: string;
displayVariant: string;
displayVariant: string;
extension: string;
extensionKeys: java_util_Set<java_lang_Character>;
iSO3Country: string;
iSO3Language: string;
language: string;
script: string;
static CANADA: java_util_Locale;
static CANADA_FRENCH: java_util_Locale;
static CHINA: java_util_Locale;
static CHINESE: java_util_Locale;
static ENGLISH: java_util_Locale;
static FRANCE: java_util_Locale;
static FRENCH: java_util_Locale;
static GERMAN: java_util_Locale;
static GERMANY: java_util_Locale;
static ITALIAN: java_util_Locale;
static ITALY: java_util_Locale;
static JAPAN: java_util_Locale;
static JAPANESE: java_util_Locale;
static KOREA: java_util_Locale;
static KOREAN: java_util_Locale;
static PRC: java_util_Locale;
static PRIVATE_USE_EXTENSION: string;
static ROOT: java_util_Locale;
static SIMPLIFIED_CHINESE: java_util_Locale;
static TAIWAN: java_util_Locale;
static TRADITIONAL_CHINESE: java_util_Locale;
static UK: java_util_Locale;
static UNICODE_LOCALE_EXTENSION: string;
static US: java_util_Locale;
static availableLocales: JArray<java_util_Locale>;
static default: java_util_Locale;
static default: java_util_Locale;
static iSOCountries: JArray<string>;
static iSOCountries: java_util_Set<string>;
static iSOLanguages: JArray<string>;
unicodeLocaleAttributes: java_util_Set<string>;
unicodeLocaleKeys: java_util_Set<string>;
unicodeLocaleType: string;
variant: string;
clone(): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
getCountry(): string;
getDisplayCountry(): string;
getDisplayCountry(arg0: java_util_Locale): string;
getDisplayLanguage(): string;
getDisplayLanguage(arg0: java_util_Locale): string;
getDisplayName(): string;
getDisplayName(arg0: java_util_Locale): string;
getDisplayScript(): string;
getDisplayScript(arg0: java_util_Locale): string;
getDisplayVariant(): string;
getDisplayVariant(arg0: java_util_Locale): string;
getExtension(arg0: string): string;
getExtensionKeys(): java_util_Set<java_lang_Character>;
getISO3Country(): string;
getISO3Language(): string;
getLanguage(): string;
getScript(): string;
getUnicodeLocaleAttributes(): java_util_Set<string>;
getUnicodeLocaleKeys(): java_util_Set<string>;
getUnicodeLocaleType(arg0: string): string;
getVariant(): string;
hasExtensions(): boolean;
hashCode(): number;
static filter(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>): java_util_List<java_util_Locale>;
static filter(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>, arg2: java_util_Locale_FilteringMode): java_util_List<java_util_Locale>;
static filterTags(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>): java_util_List<string>;
static filterTags(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>, arg2: java_util_Locale_FilteringMode): java_util_List<string>;
static forLanguageTag(arg0: string): java_util_Locale;
static getAvailableLocales(): JArray<java_util_Locale>;
static getDefault(): java_util_Locale;
static getDefault(arg0: java_util_Locale_Category): java_util_Locale;
static getISOCountries(): JArray<string>;
static getISOCountries(arg0: java_util_Locale_IsoCountryCode): java_util_Set<string>;
static getISOLanguages(): JArray<string>;
static lookup(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>): java_util_Locale;
static lookupTag(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>): string;
static setDefault(arg0: java_util_Locale): void;
static setDefault(arg0: java_util_Locale_Category, arg1: java_util_Locale): void;
stripExtensions(): java_util_Locale;
toLanguageTag(): string;
toString(): string;
constructor(arg0: string);
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: string, arg2: string);
  }
}
//@ts-nocheck

declare module 'java.util.Locale' {
import { Category as java_util_Locale_Category } from 'java.util.Locale';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Category extends java_lang_Enum<java_util_Locale_Category> {
class: java_lang_Class<java_lang_Object>;
static DISPLAY: java_util_Locale_Category;
static FORMAT: java_util_Locale_Category;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_util_Locale_Category;
static values(): JArray<java_util_Locale_Category>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util.Locale' {
import { Object as java_lang_Object } from 'java.lang';
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { LanguageRange as java_util_Locale_LanguageRange } from 'java.util.Locale';

  export class LanguageRange extends java_lang_Object {
range: string;
static MAX_WEIGHT: number;
static MIN_WEIGHT: number;
weight: number;
equals(arg0: java_lang_Object): boolean;
getRange(): string;
getWeight(): number;
hashCode(): number;
static mapEquivalents(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Map<string, java_util_List<string>>): java_util_List<java_util_Locale_LanguageRange>;
static parse(arg0: string): java_util_List<java_util_Locale_LanguageRange>;
static parse(arg0: string, arg1: java_util_Map<string, java_util_List<string>>): java_util_List<java_util_Locale_LanguageRange>;
toString(): string;
constructor(arg0: string);
constructor(arg0: string, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.util.Locale' {
import { FilteringMode as java_util_Locale_FilteringMode } from 'java.util.Locale';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FilteringMode extends java_lang_Enum<java_util_Locale_FilteringMode> {
class: java_lang_Class<java_lang_Object>;
static AUTOSELECT_FILTERING: java_util_Locale_FilteringMode;
static EXTENDED_FILTERING: java_util_Locale_FilteringMode;
static IGNORE_EXTENDED_RANGES: java_util_Locale_FilteringMode;
static MAP_EXTENDED_RANGES: java_util_Locale_FilteringMode;
static REJECT_EXTENDED_RANGES: java_util_Locale_FilteringMode;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_util_Locale_FilteringMode;
static values(): JArray<java_util_Locale_FilteringMode>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util.Locale' {
import { IsoCountryCode as java_util_Locale_IsoCountryCode } from 'java.util.Locale';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class IsoCountryCode extends java_lang_Enum<java_util_Locale_IsoCountryCode> {
class: java_lang_Class<java_lang_Object>;
static PART1_ALPHA2: java_util_Locale_IsoCountryCode;
static PART1_ALPHA3: java_util_Locale_IsoCountryCode;
static PART3: java_util_Locale_IsoCountryCode;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_util_Locale_IsoCountryCode;
static values(): JArray<java_util_Locale_IsoCountryCode>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { Runnable as java_lang_Runnable, Object as java_lang_Object } from 'java.lang';
import { Future as java_util_concurrent_Future, Callable as java_util_concurrent_Callable, TimeUnit as java_util_concurrent_TimeUnit, Executor as java_util_concurrent_Executor } from 'java.util.concurrent';
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';

  export class ExecutorService implements java_util_concurrent_Executor {

awaitTermination(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
execute(arg0: java_lang_Runnable): void;
invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): java_util_List<java_util_concurrent_Future<T>>;
invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>, arg1: number, arg2: java_util_concurrent_TimeUnit): java_util_List<java_util_concurrent_Future<T>>;
invokeAny<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): T;
invokeAny<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>, arg1: number, arg2: java_util_concurrent_TimeUnit): T;
isShutdown(): boolean;
isTerminated(): boolean;
shutdown(): void;
shutdownNow(): java_util_List<java_lang_Runnable>;
submit(arg0: java_lang_Runnable): java_util_concurrent_Future<java_lang_Object>;
submit<T extends java_lang_Object>(arg0: java_lang_Runnable, arg1: T): java_util_concurrent_Future<T>;
submit<T extends java_lang_Object>(arg0: java_util_concurrent_Callable<T>): java_util_concurrent_Future<T>;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Object as java_lang_Object } from 'java.lang';

  export class Future<V extends java_lang_Object> {

cancel(arg0: boolean): boolean;
get(): V;
get(arg0: number, arg1: java_util_concurrent_TimeUnit): V;
isCancelled(): boolean;
isDone(): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { Object as java_lang_Object } from 'java.lang';

  export class Callable<V extends java_lang_Object> {

call(): V;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { Runnable as java_lang_Runnable } from 'java.lang';

  export class Executor {

execute(arg0: java_lang_Runnable): void;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Function as java_util_function_Function, BiFunction as java_util_function_BiFunction } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class BiFunction<T extends java_lang_Object, U extends java_lang_Object, R extends java_lang_Object> {

andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_BiFunction<T, U, V>;
apply(arg0: T, arg1: U): R;

  }
}
//@ts-nocheck

declare module 'java.util.Map' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Comparator as java_util_Comparator } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Entry<K extends java_lang_Object, V extends java_lang_Object> {
key: K;
value: V;
equals(arg0: java_lang_Object): boolean;
getKey(): K;
getValue(): V;
hashCode(): number;
setValue(arg0: V): V;
static comparingByKey<K extends java_lang_Comparable<java_lang_Object>, V extends java_lang_Object>(): java_util_Comparator<java_util_Map_Entry<K, V>>;
static comparingByKey<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<java_util_Map_Entry<K, V>>;
static comparingByValue<K extends java_lang_Object, V extends java_lang_Comparable<java_lang_Object>>(): java_util_Comparator<java_util_Map_Entry<K, V>>;
static comparingByValue<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<java_util_Map_Entry<K, V>>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class BiConsumer<T extends java_lang_Object, U extends java_lang_Object> {

accept(arg0: T, arg1: U): void;
andThen(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_function_BiConsumer<T, U>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Enumeration as java_util_Enumeration, Set as java_util_Set, Map as java_util_Map, Properties as java_util_Properties, Hashtable as java_util_Hashtable } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { PrintStream as java_io_PrintStream, PrintWriter as java_io_PrintWriter, Reader as java_io_Reader, InputStream as java_io_InputStream, OutputStream as java_io_OutputStream, Writer as java_io_Writer } from 'java.io';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';

  export class Properties extends java_util_Hashtable<java_lang_Object, java_lang_Object> {
class: java_lang_Class<java_lang_Object>;
orDefault: java_lang_Object;
property: string;
property: string;
clear(): void;
clone(): java_lang_Object;
compute(arg0: java_lang_Object, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
computeIfAbsent(arg0: java_lang_Object, arg1: java_util_function_Function<java_lang_Object, java_lang_Object>): java_lang_Object;
computeIfPresent(arg0: java_lang_Object, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
contains(arg0: java_lang_Object): boolean;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
elements(): java_util_Enumeration<java_lang_Object>;
entrySet(): java_util_Set<java_util_Map_Entry<java_lang_Object, java_lang_Object>>;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: java_lang_Object): java_lang_Object;
getClass(): java_lang_Class<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
getProperty(arg0: string): string;
getProperty(arg0: string, arg1: string): string;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<java_lang_Object>;
keys(): java_util_Enumeration<java_lang_Object>;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintWriter): void;
load(arg0: java_io_InputStream): void;
load(arg0: java_io_Reader): void;
loadFromXML(arg0: java_io_InputStream): void;
merge(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
notify(): void;
notifyAll(): void;
propertyNames(): java_util_Enumeration<java_lang_Object>;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
putAll(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
putIfAbsent(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
remove(arg0: java_lang_Object): java_lang_Object;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): void;
save(arg0: java_io_OutputStream, arg1: string): void;
setProperty(arg0: string, arg1: string): java_lang_Object;
size(): number;
store(arg0: java_io_OutputStream, arg1: string): void;
store(arg0: java_io_Writer, arg1: string): void;
storeToXML(arg0: java_io_OutputStream, arg1: string): void;
storeToXML(arg0: java_io_OutputStream, arg1: string, arg2: java_nio_charset_Charset): void;
storeToXML(arg0: java_io_OutputStream, arg1: string, arg2: string): void;
stringPropertyNames(): java_util_Set<string>;
toString(): string;
values(): java_util_Collection<java_lang_Object>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_util_Properties);
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Collection as java_util_Collection, Set as java_util_Set, Comparator as java_util_Comparator, SortedMap as java_util_SortedMap, Map as java_util_Map } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Object as java_lang_Object } from 'java.lang';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';

  export class SortedMap<K extends java_lang_Object, V extends java_lang_Object> implements java_util_Map<K, V> {
orDefault: V;
clear(): void;
comparator(): java_util_Comparator<java_lang_Object>;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
equals(arg0: java_lang_Object): boolean;
firstKey(): K;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: java_lang_Object): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
hashCode(): number;
headMap(arg0: K): java_util_SortedMap<K, V>;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
lastKey(): K;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
put(arg0: K, arg1: V): V;
putAll(arg0: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
subMap(arg0: K, arg1: K): java_util_SortedMap<K, V>;
tailMap(arg0: K): java_util_SortedMap<K, V>;
values(): java_util_Collection<V>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Collection as java_util_Collection, Enumeration as java_util_Enumeration, Set as java_util_Set, Map as java_util_Map, Dictionary as java_util_Dictionary } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Hashtable<K extends java_lang_Object, V extends java_lang_Object> extends java_util_Dictionary<K, V> implements java_util_Map<K, V>, java_lang_Cloneable, java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
orDefault: V;
clear(): void;
clone(): java_lang_Object;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
contains(arg0: java_lang_Object): boolean;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
elements(): java_util_Enumeration<V>;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: java_lang_Object): V;
getClass(): java_lang_Class<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
keys(): java_util_Enumeration<K>;
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
toString(): string;
values(): java_util_Collection<V>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_util_Map<K, V>);
constructor(arg0: number);
constructor(arg0: number, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Enumeration as java_util_Enumeration } from 'java.util';

  export class Dictionary<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_Object {

elements(): java_util_Enumeration<V>;
get(arg0: java_lang_Object): V;
isEmpty(): boolean;
keys(): java_util_Enumeration<K>;
put(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object): V;
size(): number;
constructor();
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable, Comparable as java_lang_Comparable } from 'java.lang';
import { Date as java_util_Date } from 'java.util';
import { Instant as java_time_Instant } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Date extends java_lang_Object implements java_io_Serializable, java_lang_Cloneable, java_lang_Comparable<java_util_Date> {
date: number;
day: number;
hours: number;
minutes: number;
month: number;
seconds: number;
time: number;
timezoneOffset: number;
year: number;
after(arg0: java_util_Date): boolean;
before(arg0: java_util_Date): boolean;
clone(): java_lang_Object;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_util_Date): number;
equals(arg0: java_lang_Object): boolean;
getDate(): number;
getDay(): number;
getHours(): number;
getMinutes(): number;
getMonth(): number;
getSeconds(): number;
getTime(): number;
getTimezoneOffset(): number;
getYear(): number;
hashCode(): number;
setDate(arg0: number): void;
setHours(arg0: number): void;
setMinutes(arg0: number): void;
setMonth(arg0: number): void;
setSeconds(arg0: number): void;
setTime(arg0: number): void;
setYear(arg0: number): void;
static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
static from(arg0: java_time_Instant): java_util_Date;
static parse(arg0: string): number;
toGMTString(): string;
toInstant(): java_time_Instant;
toLocaleString(): string;
toString(): string;
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator } from 'java.util';

  export class PrimitiveIterator<T extends java_lang_Object, T_CONS extends java_lang_Object> implements java_util_Iterator<T> {

forEachRemaining(arg0: T_CONS): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
hasNext(): boolean;
next(): E;
remove(): void;

  }
}
//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { IntConsumer as java_util_function_IntConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfInt as java_util_Spliterator_OfInt } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';

  export class OfInt implements java_util_Spliterator_OfPrimitive<java_lang_Integer, java_util_function_IntConsumer, java_util_Spliterator_OfInt> {
comparator: java_util_Comparator<java_lang_Object>;
exactSizeIfKnown: number;
characteristics(): number;
estimateSize(): number;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_util_function_IntConsumer): void;
getComparator(): java_util_Comparator<java_lang_Object>;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
tryAdvance(arg0: java_lang_Object): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_util_function_IntConsumer): boolean;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfInt;
trySplit(): java_util_Spliterator_OfPrimitive;

  }
}
//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { OfPrimitive as java_util_Spliterator_OfPrimitive } from 'java.util.Spliterator';

  export class OfPrimitive<T extends java_lang_Object, T_CONS extends java_lang_Object, T_SPLITR extends java_util_Spliterator_OfPrimitive<T, T_CONS, T_SPLITR>> implements java_util_Spliterator<T> {
comparator: java_util_Comparator<java_lang_Object>;
exactSizeIfKnown: number;
characteristics(): number;
estimateSize(): number;
forEachRemaining(arg0: T_CONS): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
getComparator(): java_util_Comparator<java_lang_Object>;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
tryAdvance(arg0: T_CONS): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
trySplit(): T_SPLITR;
trySplit(): java_util_Spliterator;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { IntPredicate as java_util_function_IntPredicate } from 'java.util.function';

  export class IntPredicate {

and(arg0: java_util_function_IntPredicate): java_util_function_IntPredicate;
negate(): java_util_function_IntPredicate;
or(arg0: java_util_function_IntPredicate): java_util_function_IntPredicate;
test(arg0: number): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ObjIntConsumer<T extends java_lang_Object> {

accept(arg0: T, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { IntUnaryOperator as java_util_function_IntUnaryOperator } from 'java.util.function';

  export class IntUnaryOperator {

andThen(arg0: java_util_function_IntUnaryOperator): java_util_function_IntUnaryOperator;
applyAsInt(arg0: number): number;
compose(arg0: java_util_function_IntUnaryOperator): java_util_function_IntUnaryOperator;
static identity(): java_util_function_IntUnaryOperator;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class IntBinaryOperator {

applyAsInt(arg0: number, arg1: number): number;

  }
}
//@ts-nocheck

declare module 'java.util.stream' {
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Runnable as java_lang_Runnable, AutoCloseable as java_lang_AutoCloseable, Object as java_lang_Object } from 'java.lang';
import { BaseStream as java_util_stream_BaseStream } from 'java.util.stream';

  export class BaseStream<T extends java_lang_Object, S extends java_util_stream_BaseStream<T, S>> implements java_lang_AutoCloseable {

close(): void;
isParallel(): boolean;
iterator(): java_util_Iterator<T>;
onClose(arg0: java_lang_Runnable): S;
parallel(): S;
sequential(): S;
spliterator(): java_util_Spliterator<T>;
unordered(): S;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class IntToLongFunction {

applyAsLong(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.util.stream' {
import { OptionalLong as java_util_OptionalLong, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, OptionalDouble as java_util_OptionalDouble, LongSummaryStatistics as java_util_LongSummaryStatistics } from 'java.util';
import { Builder as java_util_stream_LongStream_Builder } from 'java.util.stream.LongStream';
import { LongStream as java_util_stream_LongStream, BaseStream as java_util_stream_BaseStream, IntStream as java_util_stream_IntStream, DoubleStream as java_util_stream_DoubleStream, Stream as java_util_stream_Stream } from 'java.util.stream';
import { OfLong as java_util_PrimitiveIterator_OfLong } from 'java.util.PrimitiveIterator';
import { OfLong as java_util_Spliterator_OfLong } from 'java.util.Spliterator';
import { LongPredicate as java_util_function_LongPredicate, Supplier as java_util_function_Supplier, ObjLongConsumer as java_util_function_ObjLongConsumer, BiConsumer as java_util_function_BiConsumer, LongUnaryOperator as java_util_function_LongUnaryOperator, LongFunction as java_util_function_LongFunction, LongConsumer as java_util_function_LongConsumer, LongBinaryOperator as java_util_function_LongBinaryOperator, LongSupplier as java_util_function_LongSupplier, LongToIntFunction as java_util_function_LongToIntFunction, LongToDoubleFunction as java_util_function_LongToDoubleFunction } from 'java.util.function';
import { Object as java_lang_Object, Long as java_lang_Long, Runnable as java_lang_Runnable } from 'java.lang';

  export class LongStream implements java_util_stream_BaseStream<java_lang_Long, java_util_stream_LongStream> {

allMatch(arg0: java_util_function_LongPredicate): boolean;
anyMatch(arg0: java_util_function_LongPredicate): boolean;
asDoubleStream(): java_util_stream_DoubleStream;
average(): java_util_OptionalDouble;
boxed(): java_util_stream_Stream<java_lang_Long>;
close(): void;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_ObjLongConsumer<R>, arg2: java_util_function_BiConsumer<R, R>): R;
count(): number;
distinct(): java_util_stream_LongStream;
dropWhile(arg0: java_util_function_LongPredicate): java_util_stream_LongStream;
filter(arg0: java_util_function_LongPredicate): java_util_stream_LongStream;
findAny(): java_util_OptionalLong;
findFirst(): java_util_OptionalLong;
flatMap(arg0: java_util_function_LongFunction<java_util_stream_LongStream>): java_util_stream_LongStream;
forEach(arg0: java_util_function_LongConsumer): void;
forEachOrdered(arg0: java_util_function_LongConsumer): void;
isParallel(): boolean;
iterator(): java_util_Iterator;
iterator(): java_util_PrimitiveIterator_OfLong;
limit(arg0: number): java_util_stream_LongStream;
map(arg0: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
mapToDouble(arg0: java_util_function_LongToDoubleFunction): java_util_stream_DoubleStream;
mapToInt(arg0: java_util_function_LongToIntFunction): java_util_stream_IntStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_LongFunction<U>): java_util_stream_Stream<U>;
max(): java_util_OptionalLong;
min(): java_util_OptionalLong;
noneMatch(arg0: java_util_function_LongPredicate): boolean;
onClose(arg0: java_lang_Runnable): S;
parallel(): java_util_stream_BaseStream;
parallel(): java_util_stream_LongStream;
peek(arg0: java_util_function_LongConsumer): java_util_stream_LongStream;
reduce(arg0: java_util_function_LongBinaryOperator): java_util_OptionalLong;
reduce(arg0: number, arg1: java_util_function_LongBinaryOperator): number;
sequential(): java_util_stream_BaseStream;
sequential(): java_util_stream_LongStream;
skip(arg0: number): java_util_stream_LongStream;
sorted(): java_util_stream_LongStream;
spliterator(): java_util_Spliterator;
spliterator(): java_util_Spliterator_OfLong;
static builder(): java_util_stream_LongStream_Builder;
static concat(arg0: java_util_stream_LongStream, arg1: java_util_stream_LongStream): java_util_stream_LongStream;
static empty(): java_util_stream_LongStream;
static generate(arg0: java_util_function_LongSupplier): java_util_stream_LongStream;
static iterate(arg0: number, arg1: java_util_function_LongPredicate, arg2: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
static iterate(arg0: number, arg1: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
static of(...arg0: JArray<number>): java_util_stream_LongStream;
static of(arg0: number): java_util_stream_LongStream;
static range(arg0: number, arg1: number): java_util_stream_LongStream;
static rangeClosed(arg0: number, arg1: number): java_util_stream_LongStream;
sum(): number;
summaryStatistics(): java_util_LongSummaryStatistics;
takeWhile(arg0: java_util_function_LongPredicate): java_util_stream_LongStream;
toArray(): JArray<number>;
unordered(): S;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Runnable as java_lang_Runnable } from 'java.lang';
import { OptionalLong as java_util_OptionalLong } from 'java.util';
import { LongStream as java_util_stream_LongStream } from 'java.util.stream';
import { Supplier as java_util_function_Supplier, LongConsumer as java_util_function_LongConsumer, LongSupplier as java_util_function_LongSupplier } from 'java.util.function';

  export class OptionalLong extends java_lang_Object {
asLong: number;
equals(arg0: java_lang_Object): boolean;
getAsLong(): number;
hashCode(): number;
ifPresent(arg0: java_util_function_LongConsumer): void;
ifPresentOrElse(arg0: java_util_function_LongConsumer, arg1: java_lang_Runnable): void;
isEmpty(): boolean;
isPresent(): boolean;
orElse(arg0: number): number;
orElseGet(arg0: java_util_function_LongSupplier): number;
orElseThrow(): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
static empty(): java_util_OptionalLong;
static of(arg0: number): java_util_OptionalLong;
stream(): java_util_stream_LongStream;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { LongConsumer as java_util_function_LongConsumer } from 'java.util.function';

  export class LongConsumer {

accept(arg0: number): void;
andThen(arg0: java_util_function_LongConsumer): java_util_function_LongConsumer;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class LongSupplier {
asLong: number;
getAsLong(): number;

  }
}
//@ts-nocheck

declare module 'java.util.stream.LongStream' {
import { Builder as java_util_stream_LongStream_Builder } from 'java.util.stream.LongStream';
import { LongStream as java_util_stream_LongStream } from 'java.util.stream';
import { LongConsumer as java_util_function_LongConsumer } from 'java.util.function';

  export class Builder implements java_util_function_LongConsumer {

accept(arg0: number): void;
add(arg0: number): java_util_stream_LongStream_Builder;
andThen(arg0: java_util_function_LongConsumer): java_util_function_LongConsumer;
build(): java_util_stream_LongStream;

  }
}
//@ts-nocheck

declare module 'java.util.PrimitiveIterator' {
import { Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { LongConsumer as java_util_function_LongConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { PrimitiveIterator as java_util_PrimitiveIterator } from 'java.util';

  export class OfLong implements java_util_PrimitiveIterator<java_lang_Long, java_util_function_LongConsumer> {

forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_util_function_LongConsumer): void;
hasNext(): boolean;
next(): java_lang_Long;
next(): java_lang_Object;
nextLong(): number;
remove(): void;

  }
}
//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { LongConsumer as java_util_function_LongConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfLong as java_util_Spliterator_OfLong } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';

  export class OfLong implements java_util_Spliterator_OfPrimitive<java_lang_Long, java_util_function_LongConsumer, java_util_Spliterator_OfLong> {
comparator: java_util_Comparator<java_lang_Object>;
exactSizeIfKnown: number;
characteristics(): number;
estimateSize(): number;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_util_function_LongConsumer): void;
getComparator(): java_util_Comparator<java_lang_Object>;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
tryAdvance(arg0: java_lang_Object): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_util_function_LongConsumer): boolean;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfLong;
trySplit(): java_util_Spliterator_OfPrimitive;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { LongPredicate as java_util_function_LongPredicate } from 'java.util.function';

  export class LongPredicate {

and(arg0: java_util_function_LongPredicate): java_util_function_LongPredicate;
negate(): java_util_function_LongPredicate;
or(arg0: java_util_function_LongPredicate): java_util_function_LongPredicate;
test(arg0: number): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ObjLongConsumer<T extends java_lang_Object> {

accept(arg0: T, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { LongUnaryOperator as java_util_function_LongUnaryOperator } from 'java.util.function';

  export class LongUnaryOperator {

andThen(arg0: java_util_function_LongUnaryOperator): java_util_function_LongUnaryOperator;
applyAsLong(arg0: number): number;
compose(arg0: java_util_function_LongUnaryOperator): java_util_function_LongUnaryOperator;
static identity(): java_util_function_LongUnaryOperator;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class LongFunction<R extends java_lang_Object> {

apply(arg0: number): R;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class LongBinaryOperator {

applyAsLong(arg0: number, arg1: number): number;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class LongToIntFunction {

applyAsInt(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class LongToDoubleFunction {

applyAsDouble(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.util.stream' {
import { OptionalDouble as java_util_OptionalDouble, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, DoubleSummaryStatistics as java_util_DoubleSummaryStatistics } from 'java.util';
import { Builder as java_util_stream_DoubleStream_Builder } from 'java.util.stream.DoubleStream';
import { DoubleStream as java_util_stream_DoubleStream, BaseStream as java_util_stream_BaseStream, IntStream as java_util_stream_IntStream, LongStream as java_util_stream_LongStream, Stream as java_util_stream_Stream } from 'java.util.stream';
import { OfDouble as java_util_PrimitiveIterator_OfDouble } from 'java.util.PrimitiveIterator';
import { OfDouble as java_util_Spliterator_OfDouble } from 'java.util.Spliterator';
import { DoublePredicate as java_util_function_DoublePredicate, Supplier as java_util_function_Supplier, ObjDoubleConsumer as java_util_function_ObjDoubleConsumer, BiConsumer as java_util_function_BiConsumer, DoubleUnaryOperator as java_util_function_DoubleUnaryOperator, DoubleFunction as java_util_function_DoubleFunction, DoubleConsumer as java_util_function_DoubleConsumer, DoubleBinaryOperator as java_util_function_DoubleBinaryOperator, DoubleSupplier as java_util_function_DoubleSupplier, DoubleToIntFunction as java_util_function_DoubleToIntFunction, DoubleToLongFunction as java_util_function_DoubleToLongFunction } from 'java.util.function';
import { Object as java_lang_Object, Double as java_lang_Double, Runnable as java_lang_Runnable } from 'java.lang';

  export class DoubleStream implements java_util_stream_BaseStream<java_lang_Double, java_util_stream_DoubleStream> {

allMatch(arg0: java_util_function_DoublePredicate): boolean;
anyMatch(arg0: java_util_function_DoublePredicate): boolean;
average(): java_util_OptionalDouble;
boxed(): java_util_stream_Stream<java_lang_Double>;
close(): void;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_ObjDoubleConsumer<R>, arg2: java_util_function_BiConsumer<R, R>): R;
count(): number;
distinct(): java_util_stream_DoubleStream;
dropWhile(arg0: java_util_function_DoublePredicate): java_util_stream_DoubleStream;
filter(arg0: java_util_function_DoublePredicate): java_util_stream_DoubleStream;
findAny(): java_util_OptionalDouble;
findFirst(): java_util_OptionalDouble;
flatMap(arg0: java_util_function_DoubleFunction<java_util_stream_DoubleStream>): java_util_stream_DoubleStream;
forEach(arg0: java_util_function_DoubleConsumer): void;
forEachOrdered(arg0: java_util_function_DoubleConsumer): void;
isParallel(): boolean;
iterator(): java_util_Iterator;
iterator(): java_util_PrimitiveIterator_OfDouble;
limit(arg0: number): java_util_stream_DoubleStream;
map(arg0: java_util_function_DoubleUnaryOperator): java_util_stream_DoubleStream;
mapToInt(arg0: java_util_function_DoubleToIntFunction): java_util_stream_IntStream;
mapToLong(arg0: java_util_function_DoubleToLongFunction): java_util_stream_LongStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_DoubleFunction<U>): java_util_stream_Stream<U>;
max(): java_util_OptionalDouble;
min(): java_util_OptionalDouble;
noneMatch(arg0: java_util_function_DoublePredicate): boolean;
onClose(arg0: java_lang_Runnable): S;
parallel(): java_util_stream_BaseStream;
parallel(): java_util_stream_DoubleStream;
peek(arg0: java_util_function_DoubleConsumer): java_util_stream_DoubleStream;
reduce(arg0: java_util_function_DoubleBinaryOperator): java_util_OptionalDouble;
reduce(arg0: number, arg1: java_util_function_DoubleBinaryOperator): number;
sequential(): java_util_stream_BaseStream;
sequential(): java_util_stream_DoubleStream;
skip(arg0: number): java_util_stream_DoubleStream;
sorted(): java_util_stream_DoubleStream;
spliterator(): java_util_Spliterator;
spliterator(): java_util_Spliterator_OfDouble;
static builder(): java_util_stream_DoubleStream_Builder;
static concat(arg0: java_util_stream_DoubleStream, arg1: java_util_stream_DoubleStream): java_util_stream_DoubleStream;
static empty(): java_util_stream_DoubleStream;
static generate(arg0: java_util_function_DoubleSupplier): java_util_stream_DoubleStream;
static iterate(arg0: number, arg1: java_util_function_DoublePredicate, arg2: java_util_function_DoubleUnaryOperator): java_util_stream_DoubleStream;
static iterate(arg0: number, arg1: java_util_function_DoubleUnaryOperator): java_util_stream_DoubleStream;
static of(...arg0: JArray<number>): java_util_stream_DoubleStream;
static of(arg0: number): java_util_stream_DoubleStream;
sum(): number;
summaryStatistics(): java_util_DoubleSummaryStatistics;
takeWhile(arg0: java_util_function_DoublePredicate): java_util_stream_DoubleStream;
toArray(): JArray<number>;
unordered(): S;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Runnable as java_lang_Runnable } from 'java.lang';
import { OptionalDouble as java_util_OptionalDouble } from 'java.util';
import { DoubleStream as java_util_stream_DoubleStream } from 'java.util.stream';
import { Supplier as java_util_function_Supplier, DoubleConsumer as java_util_function_DoubleConsumer, DoubleSupplier as java_util_function_DoubleSupplier } from 'java.util.function';

  export class OptionalDouble extends java_lang_Object {
asDouble: number;
equals(arg0: java_lang_Object): boolean;
getAsDouble(): number;
hashCode(): number;
ifPresent(arg0: java_util_function_DoubleConsumer): void;
ifPresentOrElse(arg0: java_util_function_DoubleConsumer, arg1: java_lang_Runnable): void;
isEmpty(): boolean;
isPresent(): boolean;
orElse(arg0: number): number;
orElseGet(arg0: java_util_function_DoubleSupplier): number;
orElseThrow(): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
static empty(): java_util_OptionalDouble;
static of(arg0: number): java_util_OptionalDouble;
stream(): java_util_stream_DoubleStream;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { DoubleConsumer as java_util_function_DoubleConsumer } from 'java.util.function';

  export class DoubleConsumer {

accept(arg0: number): void;
andThen(arg0: java_util_function_DoubleConsumer): java_util_function_DoubleConsumer;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class DoubleSupplier {
asDouble: number;
getAsDouble(): number;

  }
}
//@ts-nocheck

declare module 'java.util.stream.DoubleStream' {
import { Builder as java_util_stream_DoubleStream_Builder } from 'java.util.stream.DoubleStream';
import { DoubleStream as java_util_stream_DoubleStream } from 'java.util.stream';
import { DoubleConsumer as java_util_function_DoubleConsumer } from 'java.util.function';

  export class Builder implements java_util_function_DoubleConsumer {

accept(arg0: number): void;
add(arg0: number): java_util_stream_DoubleStream_Builder;
andThen(arg0: java_util_function_DoubleConsumer): java_util_function_DoubleConsumer;
build(): java_util_stream_DoubleStream;

  }
}
//@ts-nocheck

declare module 'java.util.PrimitiveIterator' {
import { Object as java_lang_Object, Double as java_lang_Double } from 'java.lang';
import { DoubleConsumer as java_util_function_DoubleConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { PrimitiveIterator as java_util_PrimitiveIterator } from 'java.util';

  export class OfDouble implements java_util_PrimitiveIterator<java_lang_Double, java_util_function_DoubleConsumer> {

forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_util_function_DoubleConsumer): void;
hasNext(): boolean;
next(): java_lang_Double;
next(): java_lang_Object;
nextDouble(): number;
remove(): void;

  }
}
//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Object as java_lang_Object, Double as java_lang_Double } from 'java.lang';
import { DoubleConsumer as java_util_function_DoubleConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfDouble as java_util_Spliterator_OfDouble } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';

  export class OfDouble implements java_util_Spliterator_OfPrimitive<java_lang_Double, java_util_function_DoubleConsumer, java_util_Spliterator_OfDouble> {
comparator: java_util_Comparator<java_lang_Object>;
exactSizeIfKnown: number;
characteristics(): number;
estimateSize(): number;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_util_function_DoubleConsumer): void;
getComparator(): java_util_Comparator<java_lang_Object>;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
tryAdvance(arg0: java_lang_Object): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_util_function_DoubleConsumer): boolean;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfDouble;
trySplit(): java_util_Spliterator_OfPrimitive;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { DoublePredicate as java_util_function_DoublePredicate } from 'java.util.function';

  export class DoublePredicate {

and(arg0: java_util_function_DoublePredicate): java_util_function_DoublePredicate;
negate(): java_util_function_DoublePredicate;
or(arg0: java_util_function_DoublePredicate): java_util_function_DoublePredicate;
test(arg0: number): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ObjDoubleConsumer<T extends java_lang_Object> {

accept(arg0: T, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { DoubleUnaryOperator as java_util_function_DoubleUnaryOperator } from 'java.util.function';

  export class DoubleUnaryOperator {

andThen(arg0: java_util_function_DoubleUnaryOperator): java_util_function_DoubleUnaryOperator;
applyAsDouble(arg0: number): number;
compose(arg0: java_util_function_DoubleUnaryOperator): java_util_function_DoubleUnaryOperator;
static identity(): java_util_function_DoubleUnaryOperator;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class DoubleFunction<R extends java_lang_Object> {

apply(arg0: number): R;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class DoubleBinaryOperator {

applyAsDouble(arg0: number, arg1: number): number;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class DoubleToIntFunction {

applyAsInt(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class DoubleToLongFunction {

applyAsLong(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { DoubleSummaryStatistics as java_util_DoubleSummaryStatistics } from 'java.util';
import { DoubleConsumer as java_util_function_DoubleConsumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class DoubleSummaryStatistics extends java_lang_Object implements java_util_function_DoubleConsumer {
average: number;
count: number;
max: number;
min: number;
sum: number;
accept(arg0: number): void;
andThen(arg0: java_util_function_DoubleConsumer): java_util_function_DoubleConsumer;
combine(arg0: java_util_DoubleSummaryStatistics): void;
getAverage(): number;
getCount(): number;
getMax(): number;
getMin(): number;
getSum(): number;
toString(): string;
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { LongSummaryStatistics as java_util_LongSummaryStatistics } from 'java.util';
import { LongConsumer as java_util_function_LongConsumer, IntConsumer as java_util_function_IntConsumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class LongSummaryStatistics extends java_lang_Object implements java_util_function_LongConsumer, java_util_function_IntConsumer {
average: number;
count: number;
max: number;
min: number;
sum: number;
accept(arg0: number): void;
accept(arg0: number): void;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;
andThen(arg0: java_util_function_LongConsumer): java_util_function_LongConsumer;
combine(arg0: java_util_LongSummaryStatistics): void;
getAverage(): number;
getCount(): number;
getMax(): number;
getMin(): number;
getSum(): number;
toString(): string;
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.util.function' {


  export class IntToDoubleFunction {

applyAsDouble(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { IntSummaryStatistics as java_util_IntSummaryStatistics } from 'java.util';
import { IntConsumer as java_util_function_IntConsumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class IntSummaryStatistics extends java_lang_Object implements java_util_function_IntConsumer {
average: number;
count: number;
max: number;
min: number;
sum: number;
accept(arg0: number): void;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;
combine(arg0: java_util_IntSummaryStatistics): void;
getAverage(): number;
getCount(): number;
getMax(): number;
getMin(): number;
getSum(): number;
toString(): string;
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.util.stream.Stream' {
import { Builder as java_util_stream_Stream_Builder } from 'java.util.stream.Stream';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Builder<T extends java_lang_Object> implements java_util_function_Consumer<T> {

/** Performs this operation on the given argument. */
accept(t: T): void;
add(arg0: T): java_util_stream_Stream_Builder<T>;
andThen(arg0: java_util_function_Consumer<java_lang_Object>): java_util_function_Consumer<T>;
build(): java_util_stream_Stream<T>;

  }
}
//@ts-nocheck

declare module 'java.util.stream' {
import { Set as java_util_Set } from 'java.util';
import { Characteristics as java_util_stream_Collector_Characteristics } from 'java.util.stream.Collector';
import { Supplier as java_util_function_Supplier, BiConsumer as java_util_function_BiConsumer, BinaryOperator as java_util_function_BinaryOperator, Function as java_util_function_Function } from 'java.util.function';
import { Collector as java_util_stream_Collector } from 'java.util.stream';
import { Object as java_lang_Object } from 'java.lang';

  export class Collector<T extends java_lang_Object, A extends java_lang_Object, R extends java_lang_Object> {

accumulator(): java_util_function_BiConsumer<A, T>;
characteristics(): java_util_Set<java_util_stream_Collector_Characteristics>;
combiner(): java_util_function_BinaryOperator<A>;
finisher(): java_util_function_Function<A, R>;
static of<T extends java_lang_Object, A extends java_lang_Object, R extends java_lang_Object>(arg0: java_util_function_Supplier<A>, arg1: java_util_function_BiConsumer<A, T>, arg2: java_util_function_BinaryOperator<A>, arg3: java_util_function_Function<A, R>, ...arg4: JArray<java_util_stream_Collector_Characteristics>): java_util_stream_Collector<T, A, R>;
static of<T extends java_lang_Object, R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_BiConsumer<R, T>, arg2: java_util_function_BinaryOperator<R>, ...arg3: JArray<java_util_stream_Collector_Characteristics>): java_util_stream_Collector<T, R, R>;
supplier(): java_util_function_Supplier<A>;

  }
}
//@ts-nocheck

declare module 'java.util.stream.Collector' {
import { Characteristics as java_util_stream_Collector_Characteristics } from 'java.util.stream.Collector';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Characteristics extends java_lang_Enum<java_util_stream_Collector_Characteristics> {
class: java_lang_Class<java_lang_Object>;
static CONCURRENT: java_util_stream_Collector_Characteristics;
static IDENTITY_FINISH: java_util_stream_Collector_Characteristics;
static UNORDERED: java_util_stream_Collector_Characteristics;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_util_stream_Collector_Characteristics;
static values(): JArray<java_util_stream_Collector_Characteristics>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Comparator as java_util_Comparator } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { BinaryOperator as java_util_function_BinaryOperator, Function as java_util_function_Function, BiFunction as java_util_function_BiFunction } from 'java.util.function';

  export class BinaryOperator<T extends java_lang_Object> implements java_util_function_BiFunction<T, T, T> {

andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_BiFunction<T, U, V>;
apply(arg0: T, arg1: U): R;
static maxBy<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_function_BinaryOperator<T>;
static minBy<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_function_BinaryOperator<T>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { UUID as java_util_UUID } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class UUID extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_util_UUID> {
leastSignificantBits: number;
mostSignificantBits: number;
clockSequence(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_util_UUID): number;
equals(arg0: java_lang_Object): boolean;
getLeastSignificantBits(): number;
getMostSignificantBits(): number;
hashCode(): number;
node(): number;
static fromString(arg0: string): java_util_UUID;
static nameUUIDFromBytes(arg0: JArray<number>): java_util_UUID;
static randomUUID(): java_util_UUID;
timestamp(): number;
toString(): string;
variant(): number;
version(): number;
constructor(arg0: number, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { Level as java_util_logging_Level, LogRecord as java_util_logging_LogRecord, Logger as java_util_logging_Logger, Filter as java_util_logging_Filter, Handler as java_util_logging_Handler } from 'java.util.logging';
import { Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';
import { Supplier as java_util_function_Supplier } from 'java.util.function';
import { ResourceBundle as java_util_ResourceBundle } from 'java.util';

  export class Logger extends java_lang_Object {
filter: java_util_logging_Filter;
handlers: JArray<java_util_logging_Handler>;
level: java_util_logging_Level;
name: string;
parent: java_util_logging_Logger;
resourceBundle: java_util_ResourceBundle;
resourceBundleName: string;
static GLOBAL_LOGGER_NAME: string;
static anonymousLogger: java_util_logging_Logger;
static anonymousLogger: java_util_logging_Logger;
static global: java_util_logging_Logger;
static global: java_util_logging_Logger;
static logger: java_util_logging_Logger;
static logger: java_util_logging_Logger;
useParentHandlers: boolean;
addHandler(arg0: java_util_logging_Handler): void;
config(arg0: java_util_function_Supplier<string>): void;
config(arg0: string): void;
entering(arg0: string, arg1: string): void;
entering(arg0: string, arg1: string, arg2: JArray<java_lang_Object>): void;
entering(arg0: string, arg1: string, arg2: java_lang_Object): void;
exiting(arg0: string, arg1: string): void;
exiting(arg0: string, arg1: string, arg2: java_lang_Object): void;
fine(arg0: java_util_function_Supplier<string>): void;
fine(arg0: string): void;
finer(arg0: java_util_function_Supplier<string>): void;
finer(arg0: string): void;
finest(arg0: java_util_function_Supplier<string>): void;
finest(arg0: string): void;
getFilter(): java_util_logging_Filter;
getHandlers(): JArray<java_util_logging_Handler>;
getLevel(): java_util_logging_Level;
getName(): string;
getParent(): java_util_logging_Logger;
getResourceBundle(): java_util_ResourceBundle;
getResourceBundleName(): string;
getUseParentHandlers(): boolean;
info(arg0: java_util_function_Supplier<string>): void;
info(arg0: string): void;
isLoggable(arg0: java_util_logging_Level): boolean;
log(arg0: java_util_logging_Level, arg1: java_lang_Throwable, arg2: java_util_function_Supplier<string>): void;
log(arg0: java_util_logging_Level, arg1: java_util_function_Supplier<string>): void;
log(arg0: java_util_logging_Level, arg1: string): void;
log(arg0: java_util_logging_Level, arg1: string, arg2: JArray<java_lang_Object>): void;
log(arg0: java_util_logging_Level, arg1: string, arg2: java_lang_Object): void;
log(arg0: java_util_logging_Level, arg1: string, arg2: java_lang_Throwable): void;
log(arg0: java_util_logging_LogRecord): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_lang_Throwable, arg4: java_util_function_Supplier<string>): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_function_Supplier<string>): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: JArray<java_lang_Object>): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Object): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Throwable): void;
logrb(arg0: java_util_logging_Level, arg1: java_util_ResourceBundle, arg2: string, ...arg3: JArray<java_lang_Object>): void;
logrb(arg0: java_util_logging_Level, arg1: java_util_ResourceBundle, arg2: string, arg3: java_lang_Throwable): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_ResourceBundle, arg4: string, ...arg5: JArray<java_lang_Object>): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_ResourceBundle, arg4: string, arg5: java_lang_Throwable): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: JArray<java_lang_Object>): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: java_lang_Object): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: java_lang_Throwable): void;
removeHandler(arg0: java_util_logging_Handler): void;
setFilter(arg0: java_util_logging_Filter): void;
setLevel(arg0: java_util_logging_Level): void;
setParent(arg0: java_util_logging_Logger): void;
setResourceBundle(arg0: java_util_ResourceBundle): void;
setUseParentHandlers(arg0: boolean): void;
severe(arg0: java_util_function_Supplier<string>): void;
severe(arg0: string): void;
static getAnonymousLogger(): java_util_logging_Logger;
static getAnonymousLogger(arg0: string): java_util_logging_Logger;
static getGlobal(): java_util_logging_Logger;
static getLogger(arg0: string): java_util_logging_Logger;
static getLogger(arg0: string, arg1: string): java_util_logging_Logger;
throwing(arg0: string, arg1: string, arg2: java_lang_Throwable): void;
warning(arg0: java_util_function_Supplier<string>): void;
warning(arg0: string): void;

  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { Object as java_lang_Object } from 'java.lang';
import { Level as java_util_logging_Level } from 'java.util.logging';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Level extends java_lang_Object implements java_io_Serializable {
localizedName: string;
name: string;
resourceBundleName: string;
static ALL: java_util_logging_Level;
static CONFIG: java_util_logging_Level;
static FINE: java_util_logging_Level;
static FINER: java_util_logging_Level;
static FINEST: java_util_logging_Level;
static INFO: java_util_logging_Level;
static OFF: java_util_logging_Level;
static SEVERE: java_util_logging_Level;
static WARNING: java_util_logging_Level;
equals(arg0: java_lang_Object): boolean;
getLocalizedName(): string;
getName(): string;
getResourceBundleName(): string;
hashCode(): number;
intValue(): number;
static parse(arg0: string): java_util_logging_Level;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { Object as java_lang_Object, Throwable as java_lang_Throwable } from 'java.lang';
import { ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Level as java_util_logging_Level } from 'java.util.logging';
import { Instant as java_time_Instant } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class LogRecord extends java_lang_Object implements java_io_Serializable {
instant: java_time_Instant;
level: java_util_logging_Level;
loggerName: string;
message: string;
millis: number;
parameters: JArray<java_lang_Object>;
resourceBundle: java_util_ResourceBundle;
resourceBundleName: string;
sequenceNumber: number;
sourceClassName: string;
sourceMethodName: string;
threadID: number;
thrown: java_lang_Throwable;
getInstant(): java_time_Instant;
getLevel(): java_util_logging_Level;
getLoggerName(): string;
getMessage(): string;
getMillis(): number;
getParameters(): JArray<java_lang_Object>;
getResourceBundle(): java_util_ResourceBundle;
getResourceBundleName(): string;
getSequenceNumber(): number;
getSourceClassName(): string;
getSourceMethodName(): string;
getThreadID(): number;
getThrown(): java_lang_Throwable;
setInstant(arg0: java_time_Instant): void;
setLevel(arg0: java_util_logging_Level): void;
setLoggerName(arg0: string): void;
setMessage(arg0: string): void;
setMillis(arg0: number): void;
setParameters(arg0: JArray<java_lang_Object>): void;
setResourceBundle(arg0: java_util_ResourceBundle): void;
setResourceBundleName(arg0: string): void;
setSequenceNumber(arg0: number): void;
setSourceClassName(arg0: string): void;
setSourceMethodName(arg0: string): void;
setThreadID(arg0: number): void;
setThrown(arg0: java_lang_Throwable): void;
constructor(arg0: java_util_logging_Level, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, ClassLoader as java_lang_ClassLoader, Module as java_lang_Module } from 'java.lang';
import { Set as java_util_Set, Enumeration as java_util_Enumeration, Locale as java_util_Locale, ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Control as java_util_ResourceBundle_Control } from 'java.util.ResourceBundle';

  export class ResourceBundle extends java_lang_Object {
baseBundleName: string;
keys: java_util_Enumeration<string>;
locale: java_util_Locale;
object: java_lang_Object;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
string: string;
stringArray: JArray<string>;
containsKey(arg0: string): boolean;
getBaseBundleName(): string;
getKeys(): java_util_Enumeration<string>;
getLocale(): java_util_Locale;
getObject(arg0: string): java_lang_Object;
getString(arg0: string): string;
getStringArray(arg0: string): JArray<string>;
keySet(): java_util_Set<string>;
static clearCache(): void;
static clearCache(arg0: java_lang_ClassLoader): void;
static getBundle(arg0: string): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_lang_Module): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_ClassLoader): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_ClassLoader, arg3: java_util_ResourceBundle_Control): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_Module): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_util_ResourceBundle_Control): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_ResourceBundle_Control): java_util_ResourceBundle;
constructor();
  }
}
//@ts-nocheck

declare module 'java.util.ResourceBundle' {
import { List as java_util_List, Locale as java_util_Locale, ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Control as java_util_ResourceBundle_Control } from 'java.util.ResourceBundle';
import { ClassLoader as java_lang_ClassLoader, Object as java_lang_Object } from 'java.lang';

  export class Control extends java_lang_Object {
candidateLocales: java_util_List<java_util_Locale>;
fallbackLocale: java_util_Locale;
formats: java_util_List<string>;
static FORMAT_CLASS: java_util_List<string>;
static FORMAT_DEFAULT: java_util_List<string>;
static FORMAT_PROPERTIES: java_util_List<string>;
static TTL_DONT_CACHE: number;
static TTL_NO_EXPIRATION_CONTROL: number;
static control: java_util_ResourceBundle_Control;
static noFallbackControl: java_util_ResourceBundle_Control;
timeToLive: number;
getCandidateLocales(arg0: string, arg1: java_util_Locale): java_util_List<java_util_Locale>;
getFallbackLocale(arg0: string, arg1: java_util_Locale): java_util_Locale;
getFormats(arg0: string): java_util_List<string>;
getTimeToLive(arg0: string, arg1: java_util_Locale): number;
needsReload(arg0: string, arg1: java_util_Locale, arg2: string, arg3: java_lang_ClassLoader, arg4: java_util_ResourceBundle, arg5: number): boolean;
newBundle(arg0: string, arg1: java_util_Locale, arg2: string, arg3: java_lang_ClassLoader, arg4: boolean): java_util_ResourceBundle;
static getControl(arg0: java_util_List<string>): java_util_ResourceBundle_Control;
static getNoFallbackControl(arg0: java_util_List<string>): java_util_ResourceBundle_Control;
toBundleName(arg0: string, arg1: java_util_Locale): string;
toResourceName(arg0: string, arg1: string): string;

  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { LogRecord as java_util_logging_LogRecord } from 'java.util.logging';

  export class Filter {

isLoggable(arg0: java_util_logging_LogRecord): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { LogRecord as java_util_logging_LogRecord, Filter as java_util_logging_Filter, Level as java_util_logging_Level, Formatter as java_util_logging_Formatter, ErrorManager as java_util_logging_ErrorManager } from 'java.util.logging';
import { Object as java_lang_Object } from 'java.lang';

  export class Handler extends java_lang_Object {
encoding: string;
errorManager: java_util_logging_ErrorManager;
filter: java_util_logging_Filter;
formatter: java_util_logging_Formatter;
level: java_util_logging_Level;
close(): void;
flush(): void;
getEncoding(): string;
getErrorManager(): java_util_logging_ErrorManager;
getFilter(): java_util_logging_Filter;
getFormatter(): java_util_logging_Formatter;
getLevel(): java_util_logging_Level;
isLoggable(arg0: java_util_logging_LogRecord): boolean;
publish(arg0: java_util_logging_LogRecord): void;
setEncoding(arg0: string): void;
setErrorManager(arg0: java_util_logging_ErrorManager): void;
setFilter(arg0: java_util_logging_Filter): void;
setFormatter(arg0: java_util_logging_Formatter): void;
setLevel(arg0: java_util_logging_Level): void;

  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { LogRecord as java_util_logging_LogRecord, Handler as java_util_logging_Handler } from 'java.util.logging';
import { Object as java_lang_Object } from 'java.lang';

  export class Formatter extends java_lang_Object {
head: string;
tail: string;
format(arg0: java_util_logging_LogRecord): string;
formatMessage(arg0: java_util_logging_LogRecord): string;
getHead(arg0: java_util_logging_Handler): string;
getTail(arg0: java_util_logging_Handler): string;

  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { Exception as java_lang_Exception, Object as java_lang_Object } from 'java.lang';

  export class ErrorManager extends java_lang_Object {
static CLOSE_FAILURE: number;
static FLUSH_FAILURE: number;
static FORMAT_FAILURE: number;
static GENERIC_FAILURE: number;
static OPEN_FAILURE: number;
static WRITE_FAILURE: number;
error(arg0: string, arg1: java_lang_Exception, arg2: number): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.util.regex' {
import { CharSequence as java_lang_CharSequence, Object as java_lang_Object } from 'java.lang';
import { Pattern as java_util_regex_Pattern, Matcher as java_util_regex_Matcher } from 'java.util.regex';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Pattern extends java_lang_Object implements java_io_Serializable {
static CANON_EQ: number;
static CASE_INSENSITIVE: number;
static COMMENTS: number;
static DOTALL: number;
static LITERAL: number;
static MULTILINE: number;
static UNICODE_CASE: number;
static UNICODE_CHARACTER_CLASS: number;
static UNIX_LINES: number;
asMatchPredicate(): java_util_function_Predicate<string>;
asPredicate(): java_util_function_Predicate<string>;
flags(): number;
matcher(arg0: java_lang_CharSequence): java_util_regex_Matcher;
pattern(): string;
split(arg0: java_lang_CharSequence): JArray<string>;
split(arg0: java_lang_CharSequence, arg1: number): JArray<string>;
splitAsStream(arg0: java_lang_CharSequence): java_util_stream_Stream<string>;
static compile(arg0: string): java_util_regex_Pattern;
static compile(arg0: string, arg1: number): java_util_regex_Pattern;
static matches(arg0: string, arg1: java_lang_CharSequence): boolean;
static quote(arg0: string): string;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.util.regex' {
import { Function as java_util_function_Function } from 'java.util.function';
import { MatchResult as java_util_regex_MatchResult, Matcher as java_util_regex_Matcher, Pattern as java_util_regex_Pattern } from 'java.util.regex';
import { CharSequence as java_lang_CharSequence, StringBuilder as java_lang_StringBuilder, StringBuffer as java_lang_StringBuffer, Object as java_lang_Object } from 'java.lang';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Matcher extends java_lang_Object implements java_util_regex_MatchResult {

appendReplacement(arg0: java_lang_StringBuffer, arg1: string): java_util_regex_Matcher;
appendReplacement(arg0: java_lang_StringBuilder, arg1: string): java_util_regex_Matcher;
appendTail(arg0: java_lang_StringBuffer): java_lang_StringBuffer;
appendTail(arg0: java_lang_StringBuilder): java_lang_StringBuilder;
end(): number;
end(arg0: number): number;
end(arg0: string): number;
find(): boolean;
find(arg0: number): boolean;
group(): string;
group(arg0: number): string;
group(arg0: string): string;
groupCount(): number;
hasAnchoringBounds(): boolean;
hasTransparentBounds(): boolean;
hitEnd(): boolean;
lookingAt(): boolean;
matches(): boolean;
pattern(): java_util_regex_Pattern;
region(arg0: number, arg1: number): java_util_regex_Matcher;
regionEnd(): number;
regionStart(): number;
replaceAll(arg0: java_util_function_Function<java_util_regex_MatchResult, string>): string;
replaceAll(arg0: string): string;
replaceFirst(arg0: java_util_function_Function<java_util_regex_MatchResult, string>): string;
replaceFirst(arg0: string): string;
requireEnd(): boolean;
reset(): java_util_regex_Matcher;
reset(arg0: java_lang_CharSequence): java_util_regex_Matcher;
results(): java_util_stream_Stream<java_util_regex_MatchResult>;
start(): number;
start(arg0: number): number;
start(arg0: string): number;
static quoteReplacement(arg0: string): string;
toMatchResult(): java_util_regex_MatchResult;
toString(): string;
useAnchoringBounds(arg0: boolean): java_util_regex_Matcher;
usePattern(arg0: java_util_regex_Pattern): java_util_regex_Matcher;
useTransparentBounds(arg0: boolean): java_util_regex_Matcher;

  }
}
//@ts-nocheck

declare module 'java.util.regex' {


  export class MatchResult {

end(): number;
end(arg0: number): number;
group(): string;
group(arg0: number): string;
groupCount(): number;
start(): number;
start(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class EventObject extends java_lang_Object implements java_io_Serializable {
source: java_lang_Object;
getSource(): java_lang_Object;
toString(): string;
constructor(arg0: java_lang_Object);
  }
}
//@ts-nocheck

declare module 'java.util' {


  export class EventListener {



  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { UnaryOperator as java_util_function_UnaryOperator, Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Enumeration as java_util_Enumeration, List as java_util_List, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, Comparator as java_util_Comparator, ListIterator as java_util_ListIterator, AbstractList as java_util_AbstractList, RandomAccess as java_util_RandomAccess } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';
/** Represents a mutable vector. Because the components of Vectors are mutable,
 storing Vectors long term may be dangerous if passing code modifies the
 Vector later. If you want to keep around a Vector, it may be wise to call
 clone() in order to get a copy. */

  export class Vector<E extends java_lang_Object> extends java_util_AbstractList<E> implements java_util_List<E>, java_util_RandomAccess, java_lang_Cloneable, java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
/** Checks to see if two objects are equal.
 
 Only two Vectors can ever return true. This method uses a fuzzy match
 to account for floating point errors. The epsilon can be retrieved
 with epsilon. */
equals(obj: java_lang_Object): boolean;
/** Get a new vector. */
clone(): java_lang_Object;
/** Returns a hash code for this vector */
hashCode(): number;
/** Returns this vector's components as x,y,z. */
toString(): string;
add(arg0: E): boolean;
add(arg0: number, arg1: E): void;
addAll(arg0: java_util_Collection<E>): boolean;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
addElement(arg0: E): void;
capacity(): number;
clear(): void;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
copyInto(arg0: JArray<java_lang_Object>): void;
elementAt(arg0: number): E;
elements(): java_util_Enumeration<E>;
ensureCapacity(arg0: number): void;
firstElement(): E;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
get(arg0: number): E;
getClass(): java_lang_Class<java_lang_Object>;
indexOf(arg0: java_lang_Object): number;
indexOf(arg0: java_lang_Object, arg1: number): number;
insertElementAt(arg0: E, arg1: number): void;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
lastElement(): E;
lastIndexOf(arg0: java_lang_Object): number;
lastIndexOf(arg0: java_lang_Object, arg1: number): number;
listIterator(): java_util_ListIterator<E>;
listIterator(arg0: number): java_util_ListIterator<E>;
notify(): void;
notifyAll(): void;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: java_lang_Object): boolean;
remove(arg0: number): E;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAllElements(): void;
removeElement(arg0: java_lang_Object): boolean;
removeElementAt(arg0: number): void;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
set(arg0: number, arg1: E): E;
setElementAt(arg0: E, arg1: number): void;
setSize(arg0: number): void;
size(): number;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
subList(arg0: number, arg1: number): java_util_List<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;
trimToSize(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
/** Construct the vector with all components as 0. */
constructor();
constructor(arg0: java_util_Collection<E>);
constructor(arg0: number);
constructor(arg0: number, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { List as java_util_List, Iterator as java_util_Iterator, Collection as java_util_Collection, ListIterator as java_util_ListIterator, Spliterator as java_util_Spliterator, Comparator as java_util_Comparator, AbstractCollection as java_util_AbstractCollection } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer, UnaryOperator as java_util_function_UnaryOperator } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class AbstractList<E extends java_lang_Object> extends java_util_AbstractCollection<E> implements java_util_List<E> {
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
add(arg0: number, arg1: E): void;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
clear(): void;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
get(arg0: number): E;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
indexOf(arg0: java_lang_Object): number;
iterator(): java_util_Iterator<E>;
lastIndexOf(arg0: java_lang_Object): number;
listIterator(): java_util_ListIterator<E>;
listIterator(arg0: number): java_util_ListIterator<E>;
notify(): void;
notifyAll(): void;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: number): E;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
set(arg0: number, arg1: E): E;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
subList(arg0: number, arg1: number): java_util_List<E>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator, Collection as java_util_Collection, Spliterator as java_util_Spliterator } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class AbstractCollection<E extends java_lang_Object> extends java_lang_Object implements java_util_Collection<E> {

add(arg0: E): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
clear(): void;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: java_lang_Object): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
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

declare module 'java.util' {


  export class RandomAccess {



  }
}
//@ts-nocheck

declare module 'java.util' {
import { IntStream as java_util_stream_IntStream, LongStream as java_util_stream_LongStream, DoubleStream as java_util_stream_DoubleStream } from 'java.util.stream';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Random extends java_lang_Object implements java_io_Serializable {

doubles(): java_util_stream_DoubleStream;
doubles(arg0: number): java_util_stream_DoubleStream;
doubles(arg0: number, arg1: number): java_util_stream_DoubleStream;
doubles(arg0: number, arg1: number, arg2: number): java_util_stream_DoubleStream;
ints(): java_util_stream_IntStream;
ints(arg0: number): java_util_stream_IntStream;
ints(arg0: number, arg1: number): java_util_stream_IntStream;
ints(arg0: number, arg1: number, arg2: number): java_util_stream_IntStream;
longs(): java_util_stream_LongStream;
longs(arg0: number): java_util_stream_LongStream;
longs(arg0: number, arg1: number): java_util_stream_LongStream;
longs(arg0: number, arg1: number, arg2: number): java_util_stream_LongStream;
nextBoolean(): boolean;
nextBytes(arg0: JArray<number>): void;
nextDouble(): number;
nextFloat(): number;
nextGaussian(): number;
nextInt(): number;
nextInt(arg0: number): number;
nextLong(): number;
setSeed(arg0: number): void;
constructor();
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Serializable as java_io_Serializable } from 'java.io';

  export class HashMap<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> implements java_util_Map<K, V>, java_lang_Cloneable, java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
orDefault: V;
clear(): void;
clone(): java_lang_Object;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: java_lang_Object): V;
getClass(): java_lang_Class<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
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
constructor();
constructor(arg0: java_util_Map<K, V>);
constructor(arg0: number);
constructor(arg0: number, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';

  export class AbstractMap<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_Object implements java_util_Map<K, V> {
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
getOrDefault(arg0: java_lang_Object, arg1: V): V;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
put(arg0: K, arg1: V): V;
putAll(arg0: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
toString(): string;
values(): java_util_Collection<V>;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { Object as java_lang_Object } from 'java.lang';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class ConcurrentMap<K extends java_lang_Object, V extends java_lang_Object> implements java_util_Map<K, V> {
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
getOrDefault(arg0: java_lang_Object, arg1: V): V;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<K>;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
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

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { UnaryOperator as java_util_function_UnaryOperator, Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { List as java_util_List, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, Comparator as java_util_Comparator, ListIterator as java_util_ListIterator, AbstractList as java_util_AbstractList, RandomAccess as java_util_RandomAccess } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ArrayList<E extends java_lang_Object> extends java_util_AbstractList<E> implements java_util_List<E>, java_util_RandomAccess, java_lang_Cloneable, java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
add(arg0: number, arg1: E): void;
addAll(arg0: java_util_Collection<E>): boolean;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
clear(): void;
clone(): java_lang_Object;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
ensureCapacity(arg0: number): void;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
get(arg0: number): E;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
indexOf(arg0: java_lang_Object): number;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
lastIndexOf(arg0: java_lang_Object): number;
listIterator(): java_util_ListIterator<E>;
listIterator(arg0: number): java_util_ListIterator<E>;
notify(): void;
notifyAll(): void;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: java_lang_Object): boolean;
remove(arg0: number): E;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
set(arg0: number, arg1: E): E;
size(): number;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
subList(arg0: number, arg1: number): java_util_List<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;
toString(): string;
trimToSize(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_util_Collection<E>);
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { TimeUnit as java_util_concurrent_TimeUnit, CompletableFuture as java_util_concurrent_CompletableFuture, CompletionStage as java_util_concurrent_CompletionStage, Executor as java_util_concurrent_Executor, Future as java_util_concurrent_Future } from 'java.util.concurrent';
import { BiFunction as java_util_function_BiFunction, Function as java_util_function_Function, Consumer as java_util_function_Consumer, BiConsumer as java_util_function_BiConsumer, Supplier as java_util_function_Supplier } from 'java.util.function';
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Void as java_lang_Void, Runnable as java_lang_Runnable } from 'java.lang';

  export class CompletableFuture<T extends java_lang_Object> extends java_lang_Object implements java_util_concurrent_Future<T>, java_util_concurrent_CompletionStage<T> {
now: T;
numberOfDependents: number;
acceptEither(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer): java_util_concurrent_CompletionStage;
acceptEither(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer): java_util_concurrent_CompletionStage;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
applyToEither(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function): java_util_concurrent_CompletionStage;
applyToEither<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
applyToEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function): java_util_concurrent_CompletionStage;
applyToEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
cancel(arg0: boolean): boolean;
complete(arg0: T): boolean;
completeAsync(arg0: java_util_function_Supplier<T>): java_util_concurrent_CompletableFuture<T>;
completeAsync(arg0: java_util_function_Supplier<T>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<T>;
completeExceptionally(arg0: java_lang_Throwable): boolean;
completeOnTimeout(arg0: T, arg1: number, arg2: java_util_concurrent_TimeUnit): java_util_concurrent_CompletableFuture<T>;
copy(): java_util_concurrent_CompletableFuture<T>;
defaultExecutor(): java_util_concurrent_Executor;
exceptionally(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
exceptionally(arg0: java_util_function_Function<java_lang_Throwable, T>): java_util_concurrent_CompletableFuture<T>;
get(): T;
get(arg0: number, arg1: java_util_concurrent_TimeUnit): T;
getNow(arg0: T): T;
getNumberOfDependents(): number;
handle(arg0: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
handle<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletableFuture<U>;
handleAsync(arg0: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
handleAsync(arg0: java_util_function_BiFunction, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletableFuture<U>;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
isCancelled(): boolean;
isCompletedExceptionally(): boolean;
isDone(): boolean;
join(): T;
minimalCompletionStage(): java_util_concurrent_CompletionStage<T>;
newIncompleteFuture<U extends java_lang_Object>(): java_util_concurrent_CompletableFuture<U>;
obtrudeException(arg0: java_lang_Throwable): void;
obtrudeValue(arg0: T): void;
orTimeout(arg0: number, arg1: java_util_concurrent_TimeUnit): java_util_concurrent_CompletableFuture<T>;
runAfterBoth(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterBoth(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEither(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterEither(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
static allOf(...arg0: JArray<java_util_concurrent_CompletableFuture<java_lang_Object>>): java_util_concurrent_CompletableFuture<java_lang_Void>;
static anyOf(...arg0: JArray<java_util_concurrent_CompletableFuture<java_lang_Object>>): java_util_concurrent_CompletableFuture<java_lang_Object>;
static completedFuture<U extends java_lang_Object>(arg0: U): java_util_concurrent_CompletableFuture<U>;
static completedStage<U extends java_lang_Object>(arg0: U): java_util_concurrent_CompletionStage<U>;
static delayedExecutor(arg0: number, arg1: java_util_concurrent_TimeUnit): java_util_concurrent_Executor;
static delayedExecutor(arg0: number, arg1: java_util_concurrent_TimeUnit, arg2: java_util_concurrent_Executor): java_util_concurrent_Executor;
static failedFuture<U extends java_lang_Object>(arg0: java_lang_Throwable): java_util_concurrent_CompletableFuture<U>;
static failedStage<U extends java_lang_Object>(arg0: java_lang_Throwable): java_util_concurrent_CompletionStage<U>;
static runAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
static runAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
static supplyAsync<U extends java_lang_Object>(arg0: java_util_function_Supplier<U>): java_util_concurrent_CompletableFuture<U>;
static supplyAsync<U extends java_lang_Object>(arg0: java_util_function_Supplier<U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
thenAccept(arg0: java_util_function_Consumer): java_util_concurrent_CompletionStage;
thenAccept(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer): java_util_concurrent_CompletionStage;
thenAcceptAsync(arg0: java_util_function_Consumer, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptBoth(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
thenAcceptBoth<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
thenAcceptBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenApply(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenApply<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
thenApplyAsync(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenApplyAsync(arg0: java_util_function_Function, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
thenCombine(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
thenCombine<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletableFuture<V>;
thenCombineAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
thenCombineAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletableFuture<V>;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<V>;
thenCompose(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenCompose<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletableFuture<U>;
thenComposeAsync(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenComposeAsync(arg0: java_util_function_Function, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletableFuture<U>;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage;
thenRunAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage;
thenRunAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
toCompletableFuture(): java_util_concurrent_CompletableFuture<T>;
toString(): string;
whenComplete(arg0: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
whenComplete(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
whenCompleteAsync(arg0: java_util_function_BiConsumer, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<T>;
constructor();
  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { BiFunction as java_util_function_BiFunction, Function as java_util_function_Function, Consumer as java_util_function_Consumer, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Void as java_lang_Void, Runnable as java_lang_Runnable } from 'java.lang';
import { CompletionStage as java_util_concurrent_CompletionStage, Executor as java_util_concurrent_Executor, CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';

  export class CompletionStage<T extends java_lang_Object> {

acceptEither(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
applyToEither<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
exceptionally(arg0: java_util_function_Function<java_lang_Throwable, T>): java_util_concurrent_CompletionStage<T>;
handle<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletionStage<U>;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletionStage<U>;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
runAfterBoth(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEither(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAccept(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptBoth<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenApply<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
thenCombine<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletionStage<V>;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletionStage<V>;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<V>;
thenCompose<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletionStage<U>;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletionStage<U>;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
toCompletableFuture(): java_util_concurrent_CompletableFuture<T>;
whenComplete(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<T>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { EnumSet as java_util_EnumSet, Collection as java_util_Collection, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, AbstractSet as java_util_AbstractSet } from 'java.util';
import { Object as java_lang_Object, Enum as java_lang_Enum, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class EnumSet<E extends java_lang_Enum<E>> extends java_util_AbstractSet<E> implements java_lang_Cloneable, java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
clear(): void;
clone(): java_lang_Object;
clone(): java_util_EnumSet<E>;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
getClass(): java_lang_Class<java_lang_Object>;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
notify(): void;
notifyAll(): void;
parallelStream(): java_util_stream_Stream<E>;
remove(arg0: java_lang_Object): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
size(): number;
spliterator(): java_util_Spliterator<E>;
static allOf<E extends java_lang_Enum<E>>(arg0: java_lang_Class<E>): java_util_EnumSet<E>;
static complementOf<E extends java_lang_Enum<E>>(arg0: java_util_EnumSet<E>): java_util_EnumSet<E>;
static copyOf<E extends java_lang_Enum<E>>(arg0: java_util_Collection<E>): java_util_EnumSet<E>;
static copyOf<E extends java_lang_Enum<E>>(arg0: java_util_EnumSet<E>): java_util_EnumSet<E>;
static noneOf<E extends java_lang_Enum<E>>(arg0: java_lang_Class<E>): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, ...arg1: JArray<E>): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java_util_EnumSet<E>;
static range<E extends java_lang_Enum<E>>(arg0: E, arg1: E): java_util_EnumSet<E>;
stream(): java_util_stream_Stream<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Spliterator as java_util_Spliterator, AbstractCollection as java_util_AbstractCollection, Set as java_util_Set } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class AbstractSet<E extends java_lang_Object> extends java_util_AbstractCollection<E> implements java_util_Set<E> {
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
parallelStream(): java_util_stream_Stream<E>;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent.atomic' {
import { IntUnaryOperator as java_util_function_IntUnaryOperator, IntBinaryOperator as java_util_function_IntBinaryOperator } from 'java.util.function';
import { Object as java_lang_Object, Class as java_lang_Class, Number as java_lang_Number } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AtomicInteger extends java_lang_Number implements java_io_Serializable {
acquire: number;
andAccumulate: number;
andAdd: number;
andDecrement: number;
andIncrement: number;
andSet: number;
andUpdate: number;
class: java_lang_Class<java_lang_Object>;
opaque: number;
plain: number;
accumulateAndGet(arg0: number, arg1: java_util_function_IntBinaryOperator): number;
addAndGet(arg0: number): number;
compareAndExchange(arg0: number, arg1: number): number;
compareAndExchangeAcquire(arg0: number, arg1: number): number;
compareAndExchangeRelease(arg0: number, arg1: number): number;
compareAndSet(arg0: number, arg1: number): boolean;
decrementAndGet(): number;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
floatValue(): number;
get(): number;
getAcquire(): number;
getAndAccumulate(arg0: number, arg1: java_util_function_IntBinaryOperator): number;
getAndAdd(arg0: number): number;
getAndDecrement(): number;
getAndIncrement(): number;
getAndSet(arg0: number): number;
getAndUpdate(arg0: java_util_function_IntUnaryOperator): number;
getClass(): java_lang_Class<java_lang_Object>;
getOpaque(): number;
getPlain(): number;
hashCode(): number;
incrementAndGet(): number;
intValue(): number;
lazySet(arg0: number): void;
longValue(): number;
notify(): void;
notifyAll(): void;
set(arg0: number): void;
setOpaque(arg0: number): void;
setPlain(arg0: number): void;
setRelease(arg0: number): void;
toString(): string;
updateAndGet(arg0: java_util_function_IntUnaryOperator): number;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
weakCompareAndSet(arg0: number, arg1: number): boolean;
weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
constructor();
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, AbstractQueue as java_util_AbstractQueue, Queue as java_util_Queue } from 'java.util';
import { Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ConcurrentLinkedQueue<E extends java_lang_Object> extends java_util_AbstractQueue<E> implements java_util_Queue<E>, java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
clear(): void;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
notify(): void;
notifyAll(): void;
offer(arg0: E): boolean;
parallelStream(): java_util_stream_Stream<E>;
peek(): E;
poll(): E;
remove(arg0: java_lang_Object): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
size(): number;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_util_Collection<E>);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Collection as java_util_Collection, Spliterator as java_util_Spliterator, AbstractCollection as java_util_AbstractCollection, Queue as java_util_Queue } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class AbstractQueue<E extends java_lang_Object> extends java_util_AbstractCollection<E> implements java_util_Queue<E> {
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
clear(): void;
element(): E;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
offer(arg0: E): boolean;
parallelStream(): java_util_stream_Stream<E>;
peek(): E;
poll(): E;
remove(): E;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Queue<E extends java_lang_Object> implements java_util_Collection<E> {

add(arg0: E): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
clear(): void;
contains(arg0: java_lang_Object): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
element(): E;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
hashCode(): number;
isEmpty(): boolean;
iterator(): java_util_Iterator<E>;
offer(arg0: E): boolean;
parallelStream(): java_util_stream_Stream<E>;
peek(): E;
poll(): E;
remove(): E;
remove(arg0: java_lang_Object): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
size(): number;
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
toArray(): JArray<java_lang_Object>;
toArray<T extends java_lang_Object>(arg0: JArray<T>): JArray<T>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<JArray<T>>): JArray<T>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { TimeZone as java_util_TimeZone, Locale as java_util_Locale, Date as java_util_Date } from 'java.util';
import { ZoneId as java_time_ZoneId } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class TimeZone extends java_lang_Object implements java_io_Serializable, java_lang_Cloneable {
dSTSavings: number;
displayName: string;
displayName: string;
displayName: string;
displayName: string;
iD: string;
offset: number;
offset: number;
rawOffset: number;
static LONG: number;
static SHORT: number;
static availableIDs: JArray<string>;
static availableIDs: JArray<string>;
static default: java_util_TimeZone;
static timeZone: java_util_TimeZone;
static timeZone: java_util_TimeZone;
clone(): java_lang_Object;
getDSTSavings(): number;
getDisplayName(): string;
getDisplayName(arg0: boolean, arg1: number): string;
getDisplayName(arg0: boolean, arg1: number, arg2: java_util_Locale): string;
getDisplayName(arg0: java_util_Locale): string;
getID(): string;
getOffset(arg0: number): number;
getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
getRawOffset(): number;
hasSameRules(arg0: java_util_TimeZone): boolean;
inDaylightTime(arg0: java_util_Date): boolean;
observesDaylightTime(): boolean;
setID(arg0: string): void;
setRawOffset(arg0: number): void;
static getAvailableIDs(): JArray<string>;
static getAvailableIDs(arg0: number): JArray<string>;
static getDefault(): java_util_TimeZone;
static getTimeZone(arg0: java_time_ZoneId): java_util_TimeZone;
static getTimeZone(arg0: string): java_util_TimeZone;
static setDefault(arg0: java_util_TimeZone): void;
toZoneId(): java_time_ZoneId;
useDaylightTime(): boolean;
constructor();
  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { BiPredicate as java_util_function_BiPredicate } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class BiPredicate<T extends java_lang_Object, U extends java_lang_Object> {

and(arg0: java_util_function_BiPredicate<java_lang_Object, java_lang_Object>): java_util_function_BiPredicate<T, U>;
negate(): java_util_function_BiPredicate<T, U>;
or(arg0: java_util_function_BiPredicate<java_lang_Object, java_lang_Object>): java_util_function_BiPredicate<T, U>;
test(arg0: T, arg1: U): boolean;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Integer as java_lang_Integer, Cloneable as java_lang_Cloneable, Comparable as java_lang_Comparable } from 'java.lang';
import { Calendar as java_util_Calendar, TimeZone as java_util_TimeZone, Locale as java_util_Locale, Date as java_util_Date, Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { Instant as java_time_Instant } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Calendar extends java_lang_Object implements java_io_Serializable, java_lang_Cloneable, java_lang_Comparable<java_util_Calendar> {
actualMaximum: number;
actualMinimum: number;
calendarType: string;
displayName: string;
displayNames: java_util_Map<string, java_lang_Integer>;
firstDayOfWeek: number;
greatestMinimum: number;
leastMaximum: number;
maximum: number;
minimalDaysInFirstWeek: number;
minimum: number;
static ALL_STYLES: number;
static AM: number;
static AM_PM: number;
static APRIL: number;
static AUGUST: number;
static DATE: number;
static DAY_OF_MONTH: number;
static DAY_OF_WEEK: number;
static DAY_OF_WEEK_IN_MONTH: number;
static DAY_OF_YEAR: number;
static DECEMBER: number;
static DST_OFFSET: number;
static ERA: number;
static FEBRUARY: number;
static FIELD_COUNT: number;
static FRIDAY: number;
static HOUR: number;
static HOUR_OF_DAY: number;
static JANUARY: number;
static JULY: number;
static JUNE: number;
static LONG: number;
static LONG_FORMAT: number;
static LONG_STANDALONE: number;
static MARCH: number;
static MAY: number;
static MILLISECOND: number;
static MINUTE: number;
static MONDAY: number;
static MONTH: number;
static NARROW_FORMAT: number;
static NARROW_STANDALONE: number;
static NOVEMBER: number;
static OCTOBER: number;
static PM: number;
static SATURDAY: number;
static SECOND: number;
static SEPTEMBER: number;
static SHORT: number;
static SHORT_FORMAT: number;
static SHORT_STANDALONE: number;
static SUNDAY: number;
static THURSDAY: number;
static TUESDAY: number;
static UNDECIMBER: number;
static WEDNESDAY: number;
static WEEK_OF_MONTH: number;
static WEEK_OF_YEAR: number;
static YEAR: number;
static ZONE_OFFSET: number;
static availableCalendarTypes: java_util_Set<string>;
static availableLocales: JArray<java_util_Locale>;
static instance: java_util_Calendar;
static instance: java_util_Calendar;
static instance: java_util_Calendar;
static instance: java_util_Calendar;
time: java_util_Date;
timeInMillis: number;
timeZone: java_util_TimeZone;
weekYear: number;
weeksInWeekYear: number;
add(arg0: number, arg1: number): void;
after(arg0: java_lang_Object): boolean;
before(arg0: java_lang_Object): boolean;
clear(): void;
clear(arg0: number): void;
clone(): java_lang_Object;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_util_Calendar): number;
equals(arg0: java_lang_Object): boolean;
get(arg0: number): number;
getActualMaximum(arg0: number): number;
getActualMinimum(arg0: number): number;
getCalendarType(): string;
getDisplayName(arg0: number, arg1: number, arg2: java_util_Locale): string;
getDisplayNames(arg0: number, arg1: number, arg2: java_util_Locale): java_util_Map<string, java_lang_Integer>;
getFirstDayOfWeek(): number;
getGreatestMinimum(arg0: number): number;
getLeastMaximum(arg0: number): number;
getMaximum(arg0: number): number;
getMinimalDaysInFirstWeek(): number;
getMinimum(arg0: number): number;
getTime(): java_util_Date;
getTimeInMillis(): number;
getTimeZone(): java_util_TimeZone;
getWeekYear(): number;
getWeeksInWeekYear(): number;
hashCode(): number;
isLenient(): boolean;
isSet(arg0: number): boolean;
isWeekDateSupported(): boolean;
roll(arg0: number, arg1: boolean): void;
roll(arg0: number, arg1: number): void;
set(arg0: number, arg1: number): void;
set(arg0: number, arg1: number, arg2: number): void;
set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
setFirstDayOfWeek(arg0: number): void;
setLenient(arg0: boolean): void;
setMinimalDaysInFirstWeek(arg0: number): void;
setTime(arg0: java_util_Date): void;
setTimeInMillis(arg0: number): void;
setTimeZone(arg0: java_util_TimeZone): void;
setWeekDate(arg0: number, arg1: number, arg2: number): void;
static getAvailableCalendarTypes(): java_util_Set<string>;
static getAvailableLocales(): JArray<java_util_Locale>;
static getInstance(): java_util_Calendar;
static getInstance(arg0: java_util_Locale): java_util_Calendar;
static getInstance(arg0: java_util_TimeZone): java_util_Calendar;
static getInstance(arg0: java_util_TimeZone, arg1: java_util_Locale): java_util_Calendar;
toInstant(): java_time_Instant;
toString(): string;

  }
}