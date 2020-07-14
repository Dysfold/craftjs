//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Collection as java_util_Collection, Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Map<K extends java_lang_Object, V extends java_lang_Object> {
orDefault: V;
remove(arg0: java_lang_Object): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
equals(arg0: java_lang_Object): boolean;
values(): java_util_Collection<V>;
hashCode(): number;
static copyOf<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Map<K, V>): java_util_Map<K, V>;
clear(): void;
isEmpty(): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(arg0: java_util_Map<K, V>): void;
static entry<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V): java_util_Map_Entry<K, V>;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V, arg2: K, arg3: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(arg0: K, arg1: V): java_util_Map<K, V>;
static of<K extends java_lang_Object, V extends java_lang_Object>(): java_util_Map<K, V>;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<K>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
static ofEntries<K extends java_lang_Object, V extends java_lang_Object>(...arg0: java_util_Map_Entry<K, V>[]): java_util_Map<K, V>;

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
iterator(): java_util_Iterator<E>;
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

remove(): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): E;
hasNext(): boolean;

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
static ORDERED: number;
static DISTINCT: number;
static SORTED: number;
static SIZED: number;
static NONNULL: number;
static IMMUTABLE: number;
static CONCURRENT: number;
static SUBSIZED: number;
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
characteristics(): number;
estimateSize(): number;
trySplit(): java_util_Spliterator<T>;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Comparator as java_util_Comparator } from 'java.util';
import { Function as java_util_function_Function, ToIntFunction as java_util_function_ToIntFunction, ToLongFunction as java_util_function_ToLongFunction, ToDoubleFunction as java_util_function_ToDoubleFunction } from 'java.util.function';
/** Represents a captured state of an on / off comparator. */

  export class Comparator<T extends java_lang_Object> {

equals(arg0: java_lang_Object): boolean;
compare(arg0: T, arg1: T): number;
reversed(): java_util_Comparator<T>;
thenComparing<U extends java_lang_Comparable<java_lang_Object>>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_Comparator<T>;
thenComparing<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
thenComparing(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
thenComparingInt(arg0: java_util_function_ToIntFunction<java_lang_Object>): java_util_Comparator<T>;
thenComparingLong(arg0: java_util_function_ToLongFunction<java_lang_Object>): java_util_Comparator<T>;
thenComparingDouble(arg0: java_util_function_ToDoubleFunction<java_lang_Object>): java_util_Comparator<T>;
static reverseOrder<T extends java_lang_Comparable<java_lang_Object>>(): java_util_Comparator<T>;
static naturalOrder<T extends java_lang_Comparable<java_lang_Object>>(): java_util_Comparator<T>;
static nullsFirst<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
static nullsLast<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
static comparing<T extends java_lang_Object, U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
static comparing<T extends java_lang_Object, U extends java_lang_Comparable<java_lang_Object>>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_Comparator<T>;
static comparingInt<T extends java_lang_Object>(arg0: java_util_function_ToIntFunction<java_lang_Object>): java_util_Comparator<T>;
static comparingLong<T extends java_lang_Object>(arg0: java_util_function_ToLongFunction<java_lang_Object>): java_util_Comparator<T>;
static comparingDouble<T extends java_lang_Object>(arg0: java_util_function_ToDoubleFunction<java_lang_Object>): java_util_Comparator<T>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Function as java_util_function_Function } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Function<T extends java_lang_Object, R extends java_lang_Object> {

apply(arg0: T): R;
static identity<T extends java_lang_Object>(): java_util_function_Function<T, T>;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;

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

min(arg0: java_util_Comparator<java_lang_Object>): java_util_Optional<T>;
max(arg0: java_util_Comparator<java_lang_Object>): java_util_Optional<T>;
count(): number;
static builder<T extends java_lang_Object>(): java_util_stream_Stream_Builder<T>;
static concat<T extends java_lang_Object>(arg0: java_util_stream_Stream<T>, arg1: java_util_stream_Stream<T>): java_util_stream_Stream<T>;
limit(arg0: number): java_util_stream_Stream<T>;
toArray(): java_lang_Object[];
toArray<A extends java_lang_Object>(arg0: java_util_function_IntFunction<A[]>): A[];
static empty<T extends java_lang_Object>(): java_util_stream_Stream<T>;
filter(arg0: java_util_function_Predicate<java_lang_Object>): java_util_stream_Stream<T>;
collect<R extends java_lang_Object, A extends java_lang_Object>(arg0: java_util_stream_Collector<java_lang_Object, A, R>): R;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_BiConsumer<R, java_lang_Object>, arg2: java_util_function_BiConsumer<R, R>): R;
map<R extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, R>): java_util_stream_Stream<R>;
static of<T extends java_lang_Object>(arg0: T): java_util_stream_Stream<T>;
static of<T extends java_lang_Object>(...arg0: T[]): java_util_stream_Stream<T>;
flatMap<R extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_stream_Stream<R>>): java_util_stream_Stream<R>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
findAny(): java_util_Optional<T>;
skip(arg0: number): java_util_stream_Stream<T>;
peek(arg0: java_util_function_Consumer<java_lang_Object>): java_util_stream_Stream<T>;
reduce(arg0: T, arg1: java_util_function_BinaryOperator<T>): T;
reduce<U extends java_lang_Object>(arg0: U, arg1: java_util_function_BiFunction<U, java_lang_Object, U>, arg2: java_util_function_BinaryOperator<U>): U;
reduce(arg0: java_util_function_BinaryOperator<T>): java_util_Optional<T>;
static iterate<T extends java_lang_Object>(arg0: T, arg1: java_util_function_Predicate<java_lang_Object>, arg2: java_util_function_UnaryOperator<T>): java_util_stream_Stream<T>;
static iterate<T extends java_lang_Object>(arg0: T, arg1: java_util_function_UnaryOperator<T>): java_util_stream_Stream<T>;
static generate<T extends java_lang_Object>(arg0: java_util_function_Supplier<T>): java_util_stream_Stream<T>;
distinct(): java_util_stream_Stream<T>;
static ofNullable<T extends java_lang_Object>(arg0: T): java_util_stream_Stream<T>;
findFirst(): java_util_Optional<T>;
dropWhile(arg0: java_util_function_Predicate<java_lang_Object>): java_util_stream_Stream<T>;
sorted(): java_util_stream_Stream<T>;
sorted(arg0: java_util_Comparator<java_lang_Object>): java_util_stream_Stream<T>;
allMatch(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
anyMatch(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
forEachOrdered(arg0: java_util_function_Consumer<java_lang_Object>): void;
mapToInt(arg0: java_util_function_ToIntFunction<java_lang_Object>): java_util_stream_IntStream;
mapToLong(arg0: java_util_function_ToLongFunction<java_lang_Object>): java_util_stream_LongStream;
mapToDouble(arg0: java_util_function_ToDoubleFunction<java_lang_Object>): java_util_stream_DoubleStream;
flatMapToInt(arg0: java_util_function_Function<java_lang_Object, java_util_stream_IntStream>): java_util_stream_IntStream;
flatMapToDouble(arg0: java_util_function_Function<java_lang_Object, java_util_stream_DoubleStream>): java_util_stream_DoubleStream;
flatMapToLong(arg0: java_util_function_Function<java_lang_Object, java_util_stream_LongStream>): java_util_stream_LongStream;
takeWhile(arg0: java_util_function_Predicate<java_lang_Object>): java_util_stream_Stream<T>;
noneMatch(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
iterator(): java_util_Iterator<T>;
spliterator(): java_util_Spliterator<T>;
close(): void;
parallel(): S;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;
sequential(): S;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Runnable as java_lang_Runnable } from 'java.lang';
import { Optional as java_util_Optional } from 'java.util';
import { Predicate as java_util_function_Predicate, Function as java_util_function_Function, Supplier as java_util_function_Supplier, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Optional<T extends java_lang_Object> extends java_lang_Object {

get(): T;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
isEmpty(): boolean;
static empty<T extends java_lang_Object>(): java_util_Optional<T>;
filter(arg0: java_util_function_Predicate<java_lang_Object>): java_util_Optional<T>;
stream(): java_util_stream_Stream<T>;
map<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_Optional<U>;
static of<T extends java_lang_Object>(arg0: T): java_util_Optional<T>;
flatMap<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_Optional<U>>): java_util_Optional<U>;
isPresent(): boolean;
orElse(arg0: T): T;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): T;
orElseThrow(): T;
static ofNullable<T extends java_lang_Object>(arg0: T): java_util_Optional<T>;
ifPresent(arg0: java_util_function_Consumer<java_lang_Object>): void;
ifPresentOrElse(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_lang_Runnable): void;
or(arg0: java_util_function_Supplier<java_util_Optional<T>>): java_util_Optional<T>;
orElseGet(arg0: java_util_function_Supplier<T>): T;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Predicate<T extends java_lang_Object> {

test(arg0: T): boolean;
or(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
and(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
negate(): java_util_function_Predicate<T>;
static isEqual<T extends java_lang_Object>(arg0: java_lang_Object): java_util_function_Predicate<T>;
static not<T extends java_lang_Object>(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;

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

min(): java_util_OptionalInt;
max(): java_util_OptionalInt;
count(): number;
static builder(): java_util_stream_IntStream_Builder;
static concat(arg0: java_util_stream_IntStream, arg1: java_util_stream_IntStream): java_util_stream_IntStream;
limit(arg0: number): java_util_stream_IntStream;
toArray(): number[];
iterator(): java_util_Iterator;
iterator(): java_util_PrimitiveIterator_OfInt;
spliterator(): java_util_Spliterator;
spliterator(): java_util_Spliterator_OfInt;
static empty(): java_util_stream_IntStream;
filter(arg0: java_util_function_IntPredicate): java_util_stream_IntStream;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_ObjIntConsumer<R>, arg2: java_util_function_BiConsumer<R, R>): R;
map(arg0: java_util_function_IntUnaryOperator): java_util_stream_IntStream;
static of(...arg0: number[]): java_util_stream_IntStream;
static of(arg0: number): java_util_stream_IntStream;
flatMap(arg0: java_util_function_IntFunction<java_util_stream_IntStream>): java_util_stream_IntStream;
forEach(arg0: java_util_function_IntConsumer): void;
findAny(): java_util_OptionalInt;
skip(arg0: number): java_util_stream_IntStream;
peek(arg0: java_util_function_IntConsumer): java_util_stream_IntStream;
sum(): number;
reduce(arg0: number, arg1: java_util_function_IntBinaryOperator): number;
reduce(arg0: java_util_function_IntBinaryOperator): java_util_OptionalInt;
static iterate(arg0: number, arg1: java_util_function_IntPredicate, arg2: java_util_function_IntUnaryOperator): java_util_stream_IntStream;
static iterate(arg0: number, arg1: java_util_function_IntUnaryOperator): java_util_stream_IntStream;
static range(arg0: number, arg1: number): java_util_stream_IntStream;
parallel(): java_util_stream_IntStream;
parallel(): java_util_stream_BaseStream;
static generate(arg0: java_util_function_IntSupplier): java_util_stream_IntStream;
distinct(): java_util_stream_IntStream;
findFirst(): java_util_OptionalInt;
dropWhile(arg0: java_util_function_IntPredicate): java_util_stream_IntStream;
sorted(): java_util_stream_IntStream;
allMatch(arg0: java_util_function_IntPredicate): boolean;
anyMatch(arg0: java_util_function_IntPredicate): boolean;
forEachOrdered(arg0: java_util_function_IntConsumer): void;
mapToLong(arg0: java_util_function_IntToLongFunction): java_util_stream_LongStream;
mapToDouble(arg0: java_util_function_IntToDoubleFunction): java_util_stream_DoubleStream;
takeWhile(arg0: java_util_function_IntPredicate): java_util_stream_IntStream;
noneMatch(arg0: java_util_function_IntPredicate): boolean;
sequential(): java_util_stream_BaseStream;
sequential(): java_util_stream_IntStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_IntFunction<U>): java_util_stream_Stream<U>;
static rangeClosed(arg0: number, arg1: number): java_util_stream_IntStream;
average(): java_util_OptionalDouble;
summaryStatistics(): java_util_IntSummaryStatistics;
asLongStream(): java_util_stream_LongStream;
asDoubleStream(): java_util_stream_DoubleStream;
boxed(): java_util_stream_Stream<java_lang_Integer>;
close(): void;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;

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
toString(): string;
hashCode(): number;
isEmpty(): boolean;
static empty(): java_util_OptionalInt;
stream(): java_util_stream_IntStream;
static of(arg0: number): java_util_OptionalInt;
isPresent(): boolean;
orElse(arg0: number): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
orElseThrow(): number;
ifPresent(arg0: java_util_function_IntConsumer): void;
ifPresentOrElse(arg0: java_util_function_IntConsumer, arg1: java_lang_Runnable): void;
orElseGet(arg0: java_util_function_IntSupplier): number;
getAsInt(): number;

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

add(arg0: number): java_util_stream_IntStream_Builder;
accept(arg0: number): void;
build(): java_util_stream_IntStream;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;

  }
}
//@ts-nocheck

declare module 'java.util.PrimitiveIterator' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { IntConsumer as java_util_function_IntConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { PrimitiveIterator as java_util_PrimitiveIterator } from 'java.util';

  export class OfInt implements java_util_PrimitiveIterator<java_lang_Integer, java_util_function_IntConsumer> {

forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_IntConsumer): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): java_lang_Object;
next(): java_lang_Integer;
nextInt(): number;
remove(): void;
hasNext(): boolean;

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

add(arg0: number, arg1: E): void;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
remove(arg0: number): E;
get(arg0: number): E;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static copyOf<E extends java_lang_Object>(arg0: java_util_Collection<E>): java_util_List<E>;
indexOf(arg0: java_lang_Object): number;
clear(): void;
isEmpty(): boolean;
lastIndexOf(arg0: java_lang_Object): number;
contains(arg0: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
size(): number;
subList(arg0: number, arg1: number): java_util_List<E>;
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
iterator(): java_util_Iterator<E>;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
set(arg0: number, arg1: E): E;
static of<E extends java_lang_Object>(arg0: E, arg1: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): java_util_List<E>;
static of<E extends java_lang_Object>(...arg0: E[]): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): java_util_List<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): java_util_List<E>;
static of<E extends java_lang_Object>(): java_util_List<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
listIterator(): java_util_ListIterator<E>;
listIterator(arg0: number): java_util_ListIterator<E>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { UnaryOperator as java_util_function_UnaryOperator, Function as java_util_function_Function } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class UnaryOperator<T extends java_lang_Object> implements java_util_function_Function<T, T> {

static identity<T extends java_lang_Object>(): java_util_function_UnaryOperator<T>;
apply(arg0: T): R;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator } from 'java.util';

  export class ListIterator<E extends java_lang_Object> implements java_util_Iterator<E> {

add(arg0: E): void;
remove(): void;
next(): E;
hasNext(): boolean;
set(arg0: E): void;
nextIndex(): number;
previous(): E;
previousIndex(): number;
hasPrevious(): boolean;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;

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
remove(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static copyOf<E extends java_lang_Object>(arg0: java_util_Collection<E>): java_util_Set<E>;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
iterator(): java_util_Iterator<E>;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): java_util_Set<E>;
static of<E extends java_lang_Object>(...arg0: E[]): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E): java_util_Set<E>;
static of<E extends java_lang_Object>(): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E): java_util_Set<E>;
static of<E extends java_lang_Object>(arg0: E, arg1: E, arg2: E, arg3: E): java_util_Set<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { ChronoUnit as java_time_temporal_ChronoUnit } from 'java.time.temporal';
import { Duration as java_time_Duration } from 'java.time';
import { Object as java_lang_Object, Thread as java_lang_Thread, Class as java_lang_Class, Enum as java_lang_Enum } from 'java.lang';

  export class TimeUnit extends java_lang_Enum<java_util_concurrent_TimeUnit> {
static NANOSECONDS: java_util_concurrent_TimeUnit;
static MICROSECONDS: java_util_concurrent_TimeUnit;
static MILLISECONDS: java_util_concurrent_TimeUnit;
static SECONDS: java_util_concurrent_TimeUnit;
static MINUTES: java_util_concurrent_TimeUnit;
static HOURS: java_util_concurrent_TimeUnit;
static DAYS: java_util_concurrent_TimeUnit;
class: java_lang_Class<java_lang_Object>;
static values(): java_util_concurrent_TimeUnit[];
static valueOf(arg0: string): java_util_concurrent_TimeUnit;
static of(arg0: java_time_temporal_ChronoUnit): java_util_concurrent_TimeUnit;
sleep(arg0: number): void;
toNanos(arg0: number): number;
convert(arg0: number, arg1: java_util_concurrent_TimeUnit): number;
convert(arg0: java_time_Duration): number;
toMicros(arg0: number): number;
toSeconds(arg0: number): number;
toMinutes(arg0: number): number;
toHours(arg0: number): number;
toDays(arg0: number): number;
timedWait(arg0: java_lang_Object, arg1: number): void;
timedJoin(arg0: java_lang_Thread, arg1: number): void;
toChronoUnit(): java_time_temporal_ChronoUnit;
toMillis(arg0: number): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Character as java_lang_Character, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Category as java_util_Locale_Category, LanguageRange as java_util_Locale_LanguageRange, FilteringMode as java_util_Locale_FilteringMode, IsoCountryCode as java_util_Locale_IsoCountryCode } from 'java.util.Locale';
import { Locale as java_util_Locale, List as java_util_List, Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Locale extends java_lang_Object implements java_lang_Cloneable, java_io_Serializable {
static ENGLISH: java_util_Locale;
static FRENCH: java_util_Locale;
static GERMAN: java_util_Locale;
static ITALIAN: java_util_Locale;
static JAPANESE: java_util_Locale;
static KOREAN: java_util_Locale;
static CHINESE: java_util_Locale;
static SIMPLIFIED_CHINESE: java_util_Locale;
static TRADITIONAL_CHINESE: java_util_Locale;
static FRANCE: java_util_Locale;
static GERMANY: java_util_Locale;
static ITALY: java_util_Locale;
static JAPAN: java_util_Locale;
static KOREA: java_util_Locale;
static CHINA: java_util_Locale;
static PRC: java_util_Locale;
static TAIWAN: java_util_Locale;
static UK: java_util_Locale;
static US: java_util_Locale;
static CANADA: java_util_Locale;
static CANADA_FRENCH: java_util_Locale;
static ROOT: java_util_Locale;
static PRIVATE_USE_EXTENSION: string;
static UNICODE_LOCALE_EXTENSION: string;
static default: java_util_Locale;
static default: java_util_Locale;
language: string;
displayName: string;
displayName: string;
static availableLocales: java_util_Locale[];
static iSOCountries: java_util_Set<string>;
static iSOCountries: string[];
static iSOLanguages: string[];
script: string;
country: string;
variant: string;
extension: string;
extensionKeys: java_util_Set<java_lang_Character>;
unicodeLocaleAttributes: java_util_Set<string>;
unicodeLocaleType: string;
unicodeLocaleKeys: java_util_Set<string>;
iSO3Language: string;
iSO3Country: string;
displayLanguage: string;
displayLanguage: string;
displayScript: string;
displayScript: string;
displayCountry: string;
displayCountry: string;
displayVariant: string;
displayVariant: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
static getDefault(arg0: java_util_Locale_Category): java_util_Locale;
static getDefault(): java_util_Locale;
static filter(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>): java_util_List<java_util_Locale>;
static filter(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>, arg2: java_util_Locale_FilteringMode): java_util_List<java_util_Locale>;
static lookup(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>): java_util_Locale;
getLanguage(): string;
getDisplayName(arg0: java_util_Locale): string;
getDisplayName(): string;
static getAvailableLocales(): java_util_Locale[];
static setDefault(arg0: java_util_Locale): void;
static setDefault(arg0: java_util_Locale_Category, arg1: java_util_Locale): void;
static getISOCountries(arg0: java_util_Locale_IsoCountryCode): java_util_Set<string>;
static getISOCountries(): string[];
static getISOLanguages(): string[];
getScript(): string;
getCountry(): string;
getVariant(): string;
hasExtensions(): boolean;
stripExtensions(): java_util_Locale;
getExtension(arg0: string): string;
getExtensionKeys(): java_util_Set<java_lang_Character>;
getUnicodeLocaleAttributes(): java_util_Set<string>;
getUnicodeLocaleType(arg0: string): string;
getUnicodeLocaleKeys(): java_util_Set<string>;
toLanguageTag(): string;
static forLanguageTag(arg0: string): java_util_Locale;
getISO3Language(): string;
getISO3Country(): string;
getDisplayLanguage(): string;
getDisplayLanguage(arg0: java_util_Locale): string;
getDisplayScript(): string;
getDisplayScript(arg0: java_util_Locale): string;
getDisplayCountry(): string;
getDisplayCountry(arg0: java_util_Locale): string;
getDisplayVariant(arg0: java_util_Locale): string;
getDisplayVariant(): string;
static filterTags(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>, arg2: java_util_Locale_FilteringMode): java_util_List<string>;
static filterTags(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>): java_util_List<string>;
static lookupTag(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>): string;
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
static DISPLAY: java_util_Locale_Category;
static FORMAT: java_util_Locale_Category;
class: java_lang_Class<java_lang_Object>;
static values(): java_util_Locale_Category[];
static valueOf(arg0: string): java_util_Locale_Category;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.util.Locale' {
import { Object as java_lang_Object } from 'java.lang';
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { LanguageRange as java_util_Locale_LanguageRange } from 'java.util.Locale';

  export class LanguageRange extends java_lang_Object {
static MAX_WEIGHT: number;
static MIN_WEIGHT: number;
weight: number;
range: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static parse(arg0: string): java_util_List<java_util_Locale_LanguageRange>;
static parse(arg0: string, arg1: java_util_Map<string, java_util_List<string>>): java_util_List<java_util_Locale_LanguageRange>;
static mapEquivalents(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Map<string, java_util_List<string>>): java_util_List<java_util_Locale_LanguageRange>;
getWeight(): number;
getRange(): string;
constructor(arg0: string);
constructor(arg0: string, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.util.Locale' {
import { FilteringMode as java_util_Locale_FilteringMode } from 'java.util.Locale';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FilteringMode extends java_lang_Enum<java_util_Locale_FilteringMode> {
static AUTOSELECT_FILTERING: java_util_Locale_FilteringMode;
static EXTENDED_FILTERING: java_util_Locale_FilteringMode;
static IGNORE_EXTENDED_RANGES: java_util_Locale_FilteringMode;
static MAP_EXTENDED_RANGES: java_util_Locale_FilteringMode;
static REJECT_EXTENDED_RANGES: java_util_Locale_FilteringMode;
class: java_lang_Class<java_lang_Object>;
static values(): java_util_Locale_FilteringMode[];
static valueOf(arg0: string): java_util_Locale_FilteringMode;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.util.Locale' {
import { IsoCountryCode as java_util_Locale_IsoCountryCode } from 'java.util.Locale';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class IsoCountryCode extends java_lang_Enum<java_util_Locale_IsoCountryCode> {
static PART1_ALPHA2: java_util_Locale_IsoCountryCode;
static PART1_ALPHA3: java_util_Locale_IsoCountryCode;
static PART3: java_util_Locale_IsoCountryCode;
class: java_lang_Class<java_lang_Object>;
static values(): java_util_Locale_IsoCountryCode[];
static valueOf(arg0: string): java_util_Locale_IsoCountryCode;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { Runnable as java_lang_Runnable, Object as java_lang_Object } from 'java.lang';
import { Future as java_util_concurrent_Future, Callable as java_util_concurrent_Callable, TimeUnit as java_util_concurrent_TimeUnit, Executor as java_util_concurrent_Executor } from 'java.util.concurrent';
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';

  export class ExecutorService implements java_util_concurrent_Executor {

shutdown(): void;
isShutdown(): boolean;
submit(arg0: java_lang_Runnable): java_util_concurrent_Future<java_lang_Object>;
submit<T extends java_lang_Object>(arg0: java_lang_Runnable, arg1: T): java_util_concurrent_Future<T>;
submit<T extends java_lang_Object>(arg0: java_util_concurrent_Callable<T>): java_util_concurrent_Future<T>;
invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>, arg1: number, arg2: java_util_concurrent_TimeUnit): java_util_List<java_util_concurrent_Future<T>>;
invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): java_util_List<java_util_concurrent_Future<T>>;
shutdownNow(): java_util_List<java_lang_Runnable>;
isTerminated(): boolean;
awaitTermination(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
invokeAny<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): T;
invokeAny<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>, arg1: number, arg2: java_util_concurrent_TimeUnit): T;
execute(arg0: java_lang_Runnable): void;

  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Object as java_lang_Object } from 'java.lang';

  export class Future<V extends java_lang_Object> {

get(arg0: number, arg1: java_util_concurrent_TimeUnit): V;
get(): V;
isDone(): boolean;
cancel(arg0: boolean): boolean;
isCancelled(): boolean;

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

apply(arg0: T, arg1: U): R;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_BiFunction<T, U, V>;

  }
}
//@ts-nocheck

declare module 'java.util.Map' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Comparator as java_util_Comparator } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Entry<K extends java_lang_Object, V extends java_lang_Object> {
value: V;
key: K;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getValue(): V;
getKey(): K;
setValue(arg0: V): V;
static comparingByKey<K extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<java_util_Map_Entry<K, V>>;
static comparingByKey<K extends java_lang_Comparable<java_lang_Object>, V extends java_lang_Object>(): java_util_Comparator<java_util_Map_Entry<K, V>>;
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
property: string;
property: string;
orDefault: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
remove(arg0: java_lang_Object): java_lang_Object;
get(arg0: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
getProperty(arg0: string): string;
getProperty(arg0: string, arg1: string): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
values(): java_util_Collection<java_lang_Object>;
hashCode(): number;
clone(): java_lang_Object;
clear(): void;
isEmpty(): boolean;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
contains(arg0: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): void;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintWriter): void;
elements(): java_util_Enumeration<java_lang_Object>;
size(): number;
merge(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
entrySet(): java_util_Set<java_util_Map_Entry<java_lang_Object, java_lang_Object>>;
putAll(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
putIfAbsent(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
compute(arg0: java_lang_Object, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
setProperty(arg0: string, arg1: string): java_lang_Object;
load(arg0: java_io_Reader): void;
load(arg0: java_io_InputStream): void;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
computeIfAbsent(arg0: java_lang_Object, arg1: java_util_function_Function<java_lang_Object, java_lang_Object>): java_lang_Object;
save(arg0: java_io_OutputStream, arg1: string): void;
store(arg0: java_io_OutputStream, arg1: string): void;
store(arg0: java_io_Writer, arg1: string): void;
loadFromXML(arg0: java_io_InputStream): void;
storeToXML(arg0: java_io_OutputStream, arg1: string): void;
storeToXML(arg0: java_io_OutputStream, arg1: string, arg2: java_nio_charset_Charset): void;
storeToXML(arg0: java_io_OutputStream, arg1: string, arg2: string): void;
propertyNames(): java_util_Enumeration<java_lang_Object>;
stringPropertyNames(): java_util_Set<string>;
keys(): java_util_Enumeration<java_lang_Object>;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
computeIfPresent(arg0: java_lang_Object, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_util_Properties);
constructor(arg0: number);
constructor();
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
values(): java_util_Collection<V>;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
keySet(): java_util_Set<K>;
comparator(): java_util_Comparator<java_lang_Object>;
firstKey(): K;
lastKey(): K;
subMap(arg0: K, arg1: K): java_util_SortedMap<K, V>;
headMap(arg0: K): java_util_SortedMap<K, V>;
tailMap(arg0: K): java_util_SortedMap<K, V>;
remove(arg0: java_lang_Object): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
putAll(arg0: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
containsValue(arg0: java_lang_Object): boolean;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;

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
orDefault: V;
class: java_lang_Class<java_lang_Object>;
remove(arg0: java_lang_Object): V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
equals(arg0: java_lang_Object): boolean;
toString(): string;
values(): java_util_Collection<V>;
hashCode(): number;
clone(): java_lang_Object;
clear(): void;
isEmpty(): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
contains(arg0: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
elements(): java_util_Enumeration<V>;
size(): number;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(arg0: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
keys(): java_util_Enumeration<K>;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<K>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_util_Map<K, V>);
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Enumeration as java_util_Enumeration } from 'java.util';

  export class Dictionary<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_Object {

remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
isEmpty(): boolean;
elements(): java_util_Enumeration<V>;
size(): number;
keys(): java_util_Enumeration<K>;
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
time: number;
seconds: number;
year: number;
date: number;
day: number;
timezoneOffset: number;
month: number;
hours: number;
minutes: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
compareTo(arg0: java_util_Date): number;
compareTo(arg0: java_lang_Object): number;
static from(arg0: java_time_Instant): java_util_Date;
static parse(arg0: string): number;
before(arg0: java_util_Date): boolean;
after(arg0: java_util_Date): boolean;
getTime(): number;
setTime(arg0: number): void;
getSeconds(): number;
toInstant(): java_time_Instant;
static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
getYear(): number;
getDate(): number;
getDay(): number;
toLocaleString(): string;
toGMTString(): string;
getTimezoneOffset(): number;
setDate(arg0: number): void;
getMonth(): number;
setHours(arg0: number): void;
getHours(): number;
getMinutes(): number;
setMonth(arg0: number): void;
setMinutes(arg0: number): void;
setSeconds(arg0: number): void;
setYear(arg0: number): void;
constructor(arg0: string);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator } from 'java.util';

  export class PrimitiveIterator<T extends java_lang_Object, T_CONS extends java_lang_Object> implements java_util_Iterator<T> {

forEachRemaining(arg0: T_CONS): void;
remove(): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): E;
hasNext(): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { IntConsumer as java_util_function_IntConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfInt as java_util_Spliterator_OfInt } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';

  export class OfInt implements java_util_Spliterator_OfPrimitive<java_lang_Integer, java_util_function_IntConsumer, java_util_Spliterator_OfInt> {
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_IntConsumer): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
trySplit(): java_util_Spliterator_OfPrimitive;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfInt;
tryAdvance(arg0: java_util_function_IntConsumer): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_lang_Object): boolean;
characteristics(): number;
estimateSize(): number;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;

  }
}
//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { OfPrimitive as java_util_Spliterator_OfPrimitive } from 'java.util.Spliterator';

  export class OfPrimitive<T extends java_lang_Object, T_CONS extends java_lang_Object, T_SPLITR extends java_util_Spliterator_OfPrimitive<T, T_CONS, T_SPLITR>> implements java_util_Spliterator<T> {
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
forEachRemaining(arg0: T_CONS): void;
trySplit(): java_util_Spliterator;
trySplit(): T_SPLITR;
tryAdvance(arg0: T_CONS): boolean;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
characteristics(): number;
estimateSize(): number;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { IntPredicate as java_util_function_IntPredicate } from 'java.util.function';

  export class IntPredicate {

test(arg0: number): boolean;
or(arg0: java_util_function_IntPredicate): java_util_function_IntPredicate;
and(arg0: java_util_function_IntPredicate): java_util_function_IntPredicate;
negate(): java_util_function_IntPredicate;

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

static identity(): java_util_function_IntUnaryOperator;
applyAsInt(arg0: number): number;
compose(arg0: java_util_function_IntUnaryOperator): java_util_function_IntUnaryOperator;
andThen(arg0: java_util_function_IntUnaryOperator): java_util_function_IntUnaryOperator;

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

iterator(): java_util_Iterator<T>;
spliterator(): java_util_Spliterator<T>;
close(): void;
parallel(): S;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;
sequential(): S;

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

min(): java_util_OptionalLong;
max(): java_util_OptionalLong;
count(): number;
static builder(): java_util_stream_LongStream_Builder;
static concat(arg0: java_util_stream_LongStream, arg1: java_util_stream_LongStream): java_util_stream_LongStream;
limit(arg0: number): java_util_stream_LongStream;
toArray(): number[];
iterator(): java_util_Iterator;
iterator(): java_util_PrimitiveIterator_OfLong;
spliterator(): java_util_Spliterator;
spliterator(): java_util_Spliterator_OfLong;
static empty(): java_util_stream_LongStream;
filter(arg0: java_util_function_LongPredicate): java_util_stream_LongStream;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_ObjLongConsumer<R>, arg2: java_util_function_BiConsumer<R, R>): R;
map(arg0: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
static of(...arg0: number[]): java_util_stream_LongStream;
static of(arg0: number): java_util_stream_LongStream;
flatMap(arg0: java_util_function_LongFunction<java_util_stream_LongStream>): java_util_stream_LongStream;
forEach(arg0: java_util_function_LongConsumer): void;
findAny(): java_util_OptionalLong;
skip(arg0: number): java_util_stream_LongStream;
peek(arg0: java_util_function_LongConsumer): java_util_stream_LongStream;
sum(): number;
reduce(arg0: number, arg1: java_util_function_LongBinaryOperator): number;
reduce(arg0: java_util_function_LongBinaryOperator): java_util_OptionalLong;
static iterate(arg0: number, arg1: java_util_function_LongPredicate, arg2: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
static iterate(arg0: number, arg1: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
static range(arg0: number, arg1: number): java_util_stream_LongStream;
parallel(): java_util_stream_BaseStream;
parallel(): java_util_stream_LongStream;
static generate(arg0: java_util_function_LongSupplier): java_util_stream_LongStream;
distinct(): java_util_stream_LongStream;
findFirst(): java_util_OptionalLong;
dropWhile(arg0: java_util_function_LongPredicate): java_util_stream_LongStream;
sorted(): java_util_stream_LongStream;
allMatch(arg0: java_util_function_LongPredicate): boolean;
anyMatch(arg0: java_util_function_LongPredicate): boolean;
forEachOrdered(arg0: java_util_function_LongConsumer): void;
mapToInt(arg0: java_util_function_LongToIntFunction): java_util_stream_IntStream;
mapToDouble(arg0: java_util_function_LongToDoubleFunction): java_util_stream_DoubleStream;
takeWhile(arg0: java_util_function_LongPredicate): java_util_stream_LongStream;
noneMatch(arg0: java_util_function_LongPredicate): boolean;
sequential(): java_util_stream_BaseStream;
sequential(): java_util_stream_LongStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_LongFunction<U>): java_util_stream_Stream<U>;
static rangeClosed(arg0: number, arg1: number): java_util_stream_LongStream;
average(): java_util_OptionalDouble;
summaryStatistics(): java_util_LongSummaryStatistics;
asDoubleStream(): java_util_stream_DoubleStream;
boxed(): java_util_stream_Stream<java_lang_Long>;
close(): void;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;

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
toString(): string;
hashCode(): number;
isEmpty(): boolean;
static empty(): java_util_OptionalLong;
stream(): java_util_stream_LongStream;
static of(arg0: number): java_util_OptionalLong;
isPresent(): boolean;
orElse(arg0: number): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
orElseThrow(): number;
ifPresent(arg0: java_util_function_LongConsumer): void;
ifPresentOrElse(arg0: java_util_function_LongConsumer, arg1: java_lang_Runnable): void;
orElseGet(arg0: java_util_function_LongSupplier): number;
getAsLong(): number;

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

add(arg0: number): java_util_stream_LongStream_Builder;
accept(arg0: number): void;
build(): java_util_stream_LongStream;
andThen(arg0: java_util_function_LongConsumer): java_util_function_LongConsumer;

  }
}
//@ts-nocheck

declare module 'java.util.PrimitiveIterator' {
import { Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { LongConsumer as java_util_function_LongConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { PrimitiveIterator as java_util_PrimitiveIterator } from 'java.util';

  export class OfLong implements java_util_PrimitiveIterator<java_lang_Long, java_util_function_LongConsumer> {

forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_LongConsumer): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): java_lang_Object;
next(): java_lang_Long;
nextLong(): number;
remove(): void;
hasNext(): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { LongConsumer as java_util_function_LongConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfLong as java_util_Spliterator_OfLong } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';

  export class OfLong implements java_util_Spliterator_OfPrimitive<java_lang_Long, java_util_function_LongConsumer, java_util_Spliterator_OfLong> {
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_LongConsumer): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
trySplit(): java_util_Spliterator_OfPrimitive;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfLong;
tryAdvance(arg0: java_util_function_LongConsumer): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_lang_Object): boolean;
characteristics(): number;
estimateSize(): number;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { LongPredicate as java_util_function_LongPredicate } from 'java.util.function';

  export class LongPredicate {

test(arg0: number): boolean;
or(arg0: java_util_function_LongPredicate): java_util_function_LongPredicate;
and(arg0: java_util_function_LongPredicate): java_util_function_LongPredicate;
negate(): java_util_function_LongPredicate;

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

static identity(): java_util_function_LongUnaryOperator;
applyAsLong(arg0: number): number;
compose(arg0: java_util_function_LongUnaryOperator): java_util_function_LongUnaryOperator;
andThen(arg0: java_util_function_LongUnaryOperator): java_util_function_LongUnaryOperator;

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

min(): java_util_OptionalDouble;
max(): java_util_OptionalDouble;
count(): number;
static builder(): java_util_stream_DoubleStream_Builder;
static concat(arg0: java_util_stream_DoubleStream, arg1: java_util_stream_DoubleStream): java_util_stream_DoubleStream;
limit(arg0: number): java_util_stream_DoubleStream;
toArray(): number[];
iterator(): java_util_Iterator;
iterator(): java_util_PrimitiveIterator_OfDouble;
spliterator(): java_util_Spliterator;
spliterator(): java_util_Spliterator_OfDouble;
static empty(): java_util_stream_DoubleStream;
filter(arg0: java_util_function_DoublePredicate): java_util_stream_DoubleStream;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_ObjDoubleConsumer<R>, arg2: java_util_function_BiConsumer<R, R>): R;
map(arg0: java_util_function_DoubleUnaryOperator): java_util_stream_DoubleStream;
static of(...arg0: number[]): java_util_stream_DoubleStream;
static of(arg0: number): java_util_stream_DoubleStream;
flatMap(arg0: java_util_function_DoubleFunction<java_util_stream_DoubleStream>): java_util_stream_DoubleStream;
forEach(arg0: java_util_function_DoubleConsumer): void;
findAny(): java_util_OptionalDouble;
skip(arg0: number): java_util_stream_DoubleStream;
peek(arg0: java_util_function_DoubleConsumer): java_util_stream_DoubleStream;
sum(): number;
reduce(arg0: number, arg1: java_util_function_DoubleBinaryOperator): number;
reduce(arg0: java_util_function_DoubleBinaryOperator): java_util_OptionalDouble;
static iterate(arg0: number, arg1: java_util_function_DoublePredicate, arg2: java_util_function_DoubleUnaryOperator): java_util_stream_DoubleStream;
static iterate(arg0: number, arg1: java_util_function_DoubleUnaryOperator): java_util_stream_DoubleStream;
parallel(): java_util_stream_DoubleStream;
parallel(): java_util_stream_BaseStream;
static generate(arg0: java_util_function_DoubleSupplier): java_util_stream_DoubleStream;
distinct(): java_util_stream_DoubleStream;
findFirst(): java_util_OptionalDouble;
dropWhile(arg0: java_util_function_DoublePredicate): java_util_stream_DoubleStream;
sorted(): java_util_stream_DoubleStream;
allMatch(arg0: java_util_function_DoublePredicate): boolean;
anyMatch(arg0: java_util_function_DoublePredicate): boolean;
forEachOrdered(arg0: java_util_function_DoubleConsumer): void;
mapToInt(arg0: java_util_function_DoubleToIntFunction): java_util_stream_IntStream;
mapToLong(arg0: java_util_function_DoubleToLongFunction): java_util_stream_LongStream;
takeWhile(arg0: java_util_function_DoublePredicate): java_util_stream_DoubleStream;
noneMatch(arg0: java_util_function_DoublePredicate): boolean;
sequential(): java_util_stream_BaseStream;
sequential(): java_util_stream_DoubleStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_DoubleFunction<U>): java_util_stream_Stream<U>;
average(): java_util_OptionalDouble;
summaryStatistics(): java_util_DoubleSummaryStatistics;
boxed(): java_util_stream_Stream<java_lang_Double>;
close(): void;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;

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
toString(): string;
hashCode(): number;
isEmpty(): boolean;
static empty(): java_util_OptionalDouble;
stream(): java_util_stream_DoubleStream;
static of(arg0: number): java_util_OptionalDouble;
isPresent(): boolean;
orElse(arg0: number): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
orElseThrow(): number;
ifPresent(arg0: java_util_function_DoubleConsumer): void;
ifPresentOrElse(arg0: java_util_function_DoubleConsumer, arg1: java_lang_Runnable): void;
orElseGet(arg0: java_util_function_DoubleSupplier): number;
getAsDouble(): number;

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

add(arg0: number): java_util_stream_DoubleStream_Builder;
accept(arg0: number): void;
build(): java_util_stream_DoubleStream;
andThen(arg0: java_util_function_DoubleConsumer): java_util_function_DoubleConsumer;

  }
}
//@ts-nocheck

declare module 'java.util.PrimitiveIterator' {
import { Object as java_lang_Object, Double as java_lang_Double } from 'java.lang';
import { DoubleConsumer as java_util_function_DoubleConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { PrimitiveIterator as java_util_PrimitiveIterator } from 'java.util';

  export class OfDouble implements java_util_PrimitiveIterator<java_lang_Double, java_util_function_DoubleConsumer> {

forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_DoubleConsumer): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): java_lang_Object;
next(): java_lang_Double;
nextDouble(): number;
remove(): void;
hasNext(): boolean;

  }
}
//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Object as java_lang_Object, Double as java_lang_Double } from 'java.lang';
import { DoubleConsumer as java_util_function_DoubleConsumer, Consumer as java_util_function_Consumer } from 'java.util.function';
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfDouble as java_util_Spliterator_OfDouble } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';

  export class OfDouble implements java_util_Spliterator_OfPrimitive<java_lang_Double, java_util_function_DoubleConsumer, java_util_Spliterator_OfDouble> {
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_DoubleConsumer): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
trySplit(): java_util_Spliterator_OfPrimitive;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfDouble;
tryAdvance(arg0: java_util_function_DoubleConsumer): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_lang_Object): boolean;
characteristics(): number;
estimateSize(): number;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { DoublePredicate as java_util_function_DoublePredicate } from 'java.util.function';

  export class DoublePredicate {

test(arg0: number): boolean;
or(arg0: java_util_function_DoublePredicate): java_util_function_DoublePredicate;
and(arg0: java_util_function_DoublePredicate): java_util_function_DoublePredicate;
negate(): java_util_function_DoublePredicate;

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

static identity(): java_util_function_DoubleUnaryOperator;
applyAsDouble(arg0: number): number;
compose(arg0: java_util_function_DoubleUnaryOperator): java_util_function_DoubleUnaryOperator;
andThen(arg0: java_util_function_DoubleUnaryOperator): java_util_function_DoubleUnaryOperator;

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
count: number;
sum: number;
max: number;
min: number;
average: number;
toString(): string;
accept(arg0: number): void;
combine(arg0: java_util_DoubleSummaryStatistics): void;
getCount(): number;
getSum(): number;
getMax(): number;
getMin(): number;
getAverage(): number;
andThen(arg0: java_util_function_DoubleConsumer): java_util_function_DoubleConsumer;
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
count: number;
sum: number;
max: number;
min: number;
average: number;
toString(): string;
accept(arg0: number): void;
accept(arg0: number): void;
combine(arg0: java_util_LongSummaryStatistics): void;
getCount(): number;
getSum(): number;
getMax(): number;
getMin(): number;
getAverage(): number;
andThen(arg0: java_util_function_LongConsumer): java_util_function_LongConsumer;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;
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
count: number;
sum: number;
max: number;
min: number;
average: number;
toString(): string;
accept(arg0: number): void;
combine(arg0: java_util_IntSummaryStatistics): void;
getCount(): number;
getSum(): number;
getMax(): number;
getMin(): number;
getAverage(): number;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;
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

add(arg0: T): java_util_stream_Stream_Builder<T>;
/** Performs this operation on the given argument. */
accept(t: T): void;
build(): java_util_stream_Stream<T>;
andThen(arg0: java_util_function_Consumer<java_lang_Object>): java_util_function_Consumer<T>;

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

characteristics(): java_util_Set<java_util_stream_Collector_Characteristics>;
static of<T extends java_lang_Object, A extends java_lang_Object, R extends java_lang_Object>(arg0: java_util_function_Supplier<A>, arg1: java_util_function_BiConsumer<A, T>, arg2: java_util_function_BinaryOperator<A>, arg3: java_util_function_Function<A, R>, ...arg4: java_util_stream_Collector_Characteristics[]): java_util_stream_Collector<T, A, R>;
static of<T extends java_lang_Object, R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_BiConsumer<R, T>, arg2: java_util_function_BinaryOperator<R>, ...arg3: java_util_stream_Collector_Characteristics[]): java_util_stream_Collector<T, R, R>;
combiner(): java_util_function_BinaryOperator<A>;
supplier(): java_util_function_Supplier<A>;
finisher(): java_util_function_Function<A, R>;
accumulator(): java_util_function_BiConsumer<A, T>;

  }
}
//@ts-nocheck

declare module 'java.util.stream.Collector' {
import { Characteristics as java_util_stream_Collector_Characteristics } from 'java.util.stream.Collector';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Characteristics extends java_lang_Enum<java_util_stream_Collector_Characteristics> {
static CONCURRENT: java_util_stream_Collector_Characteristics;
static UNORDERED: java_util_stream_Collector_Characteristics;
static IDENTITY_FINISH: java_util_stream_Collector_Characteristics;
class: java_lang_Class<java_lang_Object>;
static values(): java_util_stream_Collector_Characteristics[];
static valueOf(arg0: string): java_util_stream_Collector_Characteristics;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { Comparator as java_util_Comparator } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { BinaryOperator as java_util_function_BinaryOperator, Function as java_util_function_Function, BiFunction as java_util_function_BiFunction } from 'java.util.function';

  export class BinaryOperator<T extends java_lang_Object> implements java_util_function_BiFunction<T, T, T> {

static maxBy<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_function_BinaryOperator<T>;
static minBy<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_function_BinaryOperator<T>;
apply(arg0: T, arg1: U): R;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_BiFunction<T, U, V>;

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
equals(arg0: java_lang_Object): boolean;
toString(): string;
version(): number;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_util_UUID): number;
timestamp(): number;
node(): number;
variant(): number;
static nameUUIDFromBytes(arg0: number[]): java_util_UUID;
getLeastSignificantBits(): number;
getMostSignificantBits(): number;
clockSequence(): number;
static randomUUID(): java_util_UUID;
static fromString(arg0: string): java_util_UUID;
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
static GLOBAL_LOGGER_NAME: string;
static global: java_util_logging_Logger;
name: string;
parent: java_util_logging_Logger;
static logger: java_util_logging_Logger;
static logger: java_util_logging_Logger;
static global: java_util_logging_Logger;
static anonymousLogger: java_util_logging_Logger;
static anonymousLogger: java_util_logging_Logger;
resourceBundle: java_util_ResourceBundle;
resourceBundleName: string;
filter: java_util_logging_Filter;
level: java_util_logging_Level;
handlers: java_util_logging_Handler[];
useParentHandlers: boolean;
getName(): string;
log(arg0: java_util_logging_Level, arg1: string, arg2: java_lang_Throwable): void;
log(arg0: java_util_logging_LogRecord): void;
log(arg0: java_util_logging_Level, arg1: java_lang_Throwable, arg2: java_util_function_Supplier<string>): void;
log(arg0: java_util_logging_Level, arg1: string, arg2: java_lang_Object[]): void;
log(arg0: java_util_logging_Level, arg1: string, arg2: java_lang_Object): void;
log(arg0: java_util_logging_Level, arg1: java_util_function_Supplier<string>): void;
log(arg0: java_util_logging_Level, arg1: string): void;
info(arg0: java_util_function_Supplier<string>): void;
info(arg0: string): void;
getParent(): java_util_logging_Logger;
static getLogger(arg0: string): java_util_logging_Logger;
static getLogger(arg0: string, arg1: string): java_util_logging_Logger;
setParent(arg0: java_util_logging_Logger): void;
warning(arg0: string): void;
warning(arg0: java_util_function_Supplier<string>): void;
config(arg0: string): void;
config(arg0: java_util_function_Supplier<string>): void;
static getGlobal(): java_util_logging_Logger;
static getAnonymousLogger(): java_util_logging_Logger;
static getAnonymousLogger(arg0: string): java_util_logging_Logger;
getResourceBundle(): java_util_ResourceBundle;
getResourceBundleName(): string;
setFilter(arg0: java_util_logging_Filter): void;
getFilter(): java_util_logging_Filter;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_function_Supplier<string>): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Throwable): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Object[]): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Object): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_lang_Throwable, arg4: java_util_function_Supplier<string>): void;
logrb(arg0: java_util_logging_Level, arg1: java_util_ResourceBundle, arg2: string, arg3: java_lang_Throwable): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: java_lang_Object[]): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_ResourceBundle, arg4: string, arg5: java_lang_Throwable): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: java_lang_Object): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_ResourceBundle, arg4: string, ...arg5: java_lang_Object[]): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: java_lang_Throwable): void;
logrb(arg0: java_util_logging_Level, arg1: java_util_ResourceBundle, arg2: string, ...arg3: java_lang_Object[]): void;
entering(arg0: string, arg1: string, arg2: java_lang_Object[]): void;
entering(arg0: string, arg1: string, arg2: java_lang_Object): void;
entering(arg0: string, arg1: string): void;
exiting(arg0: string, arg1: string, arg2: java_lang_Object): void;
exiting(arg0: string, arg1: string): void;
throwing(arg0: string, arg1: string, arg2: java_lang_Throwable): void;
severe(arg0: string): void;
severe(arg0: java_util_function_Supplier<string>): void;
fine(arg0: java_util_function_Supplier<string>): void;
fine(arg0: string): void;
finer(arg0: string): void;
finer(arg0: java_util_function_Supplier<string>): void;
finest(arg0: string): void;
finest(arg0: java_util_function_Supplier<string>): void;
setLevel(arg0: java_util_logging_Level): void;
getLevel(): java_util_logging_Level;
isLoggable(arg0: java_util_logging_Level): boolean;
addHandler(arg0: java_util_logging_Handler): void;
removeHandler(arg0: java_util_logging_Handler): void;
getHandlers(): java_util_logging_Handler[];
setUseParentHandlers(arg0: boolean): void;
getUseParentHandlers(): boolean;
setResourceBundle(arg0: java_util_ResourceBundle): void;

  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { Object as java_lang_Object } from 'java.lang';
import { Level as java_util_logging_Level } from 'java.util.logging';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Level extends java_lang_Object implements java_io_Serializable {
static OFF: java_util_logging_Level;
static SEVERE: java_util_logging_Level;
static WARNING: java_util_logging_Level;
static INFO: java_util_logging_Level;
static CONFIG: java_util_logging_Level;
static FINE: java_util_logging_Level;
static FINER: java_util_logging_Level;
static FINEST: java_util_logging_Level;
static ALL: java_util_logging_Level;
name: string;
resourceBundleName: string;
localizedName: string;
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
intValue(): number;
static parse(arg0: string): java_util_logging_Level;
getResourceBundleName(): string;
getLocalizedName(): string;

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
message: string;
parameters: java_lang_Object[];
resourceBundle: java_util_ResourceBundle;
resourceBundleName: string;
level: java_util_logging_Level;
loggerName: string;
millis: number;
sequenceNumber: number;
sourceClassName: string;
sourceMethodName: string;
threadID: number;
instant: java_time_Instant;
thrown: java_lang_Throwable;
getMessage(): string;
getParameters(): java_lang_Object[];
getResourceBundle(): java_util_ResourceBundle;
getResourceBundleName(): string;
setLevel(arg0: java_util_logging_Level): void;
getLevel(): java_util_logging_Level;
setResourceBundle(arg0: java_util_ResourceBundle): void;
setLoggerName(arg0: string): void;
setResourceBundleName(arg0: string): void;
setParameters(arg0: java_lang_Object[]): void;
setThrown(arg0: java_lang_Throwable): void;
setSourceClassName(arg0: string): void;
setSourceMethodName(arg0: string): void;
getLoggerName(): string;
setInstant(arg0: java_time_Instant): void;
getMillis(): number;
setMillis(arg0: number): void;
getSequenceNumber(): number;
setSequenceNumber(arg0: number): void;
getSourceClassName(): string;
getSourceMethodName(): string;
setMessage(arg0: string): void;
getThreadID(): number;
setThreadID(arg0: number): void;
getInstant(): java_time_Instant;
getThrown(): java_lang_Throwable;
constructor(arg0: java_util_logging_Level, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, ClassLoader as java_lang_ClassLoader, Module as java_lang_Module } from 'java.lang';
import { Set as java_util_Set, Enumeration as java_util_Enumeration, Locale as java_util_Locale, ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Control as java_util_ResourceBundle_Control } from 'java.util.ResourceBundle';

  export class ResourceBundle extends java_lang_Object {
object: java_lang_Object;
string: string;
keys: java_util_Enumeration<string>;
baseBundleName: string;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
static bundle: java_util_ResourceBundle;
locale: java_util_Locale;
stringArray: string[];
getObject(arg0: string): java_lang_Object;
containsKey(arg0: string): boolean;
keySet(): java_util_Set<string>;
getString(arg0: string): string;
getKeys(): java_util_Enumeration<string>;
getBaseBundleName(): string;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_ClassLoader): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_ClassLoader, arg3: java_util_ResourceBundle_Control): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_ResourceBundle_Control): java_util_ResourceBundle;
static getBundle(arg0: string): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_lang_Module): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_Module): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_util_ResourceBundle_Control): java_util_ResourceBundle;
getLocale(): java_util_Locale;
getStringArray(arg0: string): string[];
static clearCache(): void;
static clearCache(arg0: java_lang_ClassLoader): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.util.ResourceBundle' {
import { List as java_util_List, Locale as java_util_Locale, ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Control as java_util_ResourceBundle_Control } from 'java.util.ResourceBundle';
import { ClassLoader as java_lang_ClassLoader, Object as java_lang_Object } from 'java.lang';

  export class Control extends java_lang_Object {
static FORMAT_DEFAULT: java_util_List<string>;
static FORMAT_CLASS: java_util_List<string>;
static FORMAT_PROPERTIES: java_util_List<string>;
static TTL_DONT_CACHE: number;
static TTL_NO_EXPIRATION_CONTROL: number;
static control: java_util_ResourceBundle_Control;
candidateLocales: java_util_List<java_util_Locale>;
static noFallbackControl: java_util_ResourceBundle_Control;
formats: java_util_List<string>;
fallbackLocale: java_util_Locale;
timeToLive: number;
toResourceName(arg0: string, arg1: string): string;
static getControl(arg0: java_util_List<string>): java_util_ResourceBundle_Control;
getCandidateLocales(arg0: string, arg1: java_util_Locale): java_util_List<java_util_Locale>;
static getNoFallbackControl(arg0: java_util_List<string>): java_util_ResourceBundle_Control;
getFormats(arg0: string): java_util_List<string>;
getFallbackLocale(arg0: string, arg1: java_util_Locale): java_util_Locale;
newBundle(arg0: string, arg1: java_util_Locale, arg2: string, arg3: java_lang_ClassLoader, arg4: boolean): java_util_ResourceBundle;
getTimeToLive(arg0: string, arg1: java_util_Locale): number;
needsReload(arg0: string, arg1: java_util_Locale, arg2: string, arg3: java_lang_ClassLoader, arg4: java_util_ResourceBundle, arg5: number): boolean;
toBundleName(arg0: string, arg1: java_util_Locale): string;

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
filter: java_util_logging_Filter;
level: java_util_logging_Level;
formatter: java_util_logging_Formatter;
errorManager: java_util_logging_ErrorManager;
flush(): void;
close(): void;
getEncoding(): string;
publish(arg0: java_util_logging_LogRecord): void;
setFilter(arg0: java_util_logging_Filter): void;
getFilter(): java_util_logging_Filter;
setLevel(arg0: java_util_logging_Level): void;
getLevel(): java_util_logging_Level;
isLoggable(arg0: java_util_logging_LogRecord): boolean;
setFormatter(arg0: java_util_logging_Formatter): void;
getFormatter(): java_util_logging_Formatter;
setEncoding(arg0: string): void;
setErrorManager(arg0: java_util_logging_ErrorManager): void;
getErrorManager(): java_util_logging_ErrorManager;

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
getHead(arg0: java_util_logging_Handler): string;
getTail(arg0: java_util_logging_Handler): string;
formatMessage(arg0: java_util_logging_LogRecord): string;

  }
}
//@ts-nocheck

declare module 'java.util.logging' {
import { Exception as java_lang_Exception, Object as java_lang_Object } from 'java.lang';

  export class ErrorManager extends java_lang_Object {
static GENERIC_FAILURE: number;
static WRITE_FAILURE: number;
static FLUSH_FAILURE: number;
static CLOSE_FAILURE: number;
static OPEN_FAILURE: number;
static FORMAT_FAILURE: number;
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
static UNIX_LINES: number;
static CASE_INSENSITIVE: number;
static COMMENTS: number;
static MULTILINE: number;
static LITERAL: number;
static DOTALL: number;
static UNICODE_CASE: number;
static CANON_EQ: number;
static UNICODE_CHARACTER_CLASS: number;
toString(): string;
flags(): number;
static matches(arg0: string, arg1: java_lang_CharSequence): boolean;
split(arg0: java_lang_CharSequence, arg1: number): string[];
split(arg0: java_lang_CharSequence): string[];
static compile(arg0: string): java_util_regex_Pattern;
static compile(arg0: string, arg1: number): java_util_regex_Pattern;
matcher(arg0: java_lang_CharSequence): java_util_regex_Matcher;
static quote(arg0: string): string;
pattern(): string;
asPredicate(): java_util_function_Predicate<string>;
asMatchPredicate(): java_util_function_Predicate<string>;
splitAsStream(arg0: java_lang_CharSequence): java_util_stream_Stream<string>;

  }
}
//@ts-nocheck

declare module 'java.util.regex' {
import { Function as java_util_function_Function } from 'java.util.function';
import { MatchResult as java_util_regex_MatchResult, Matcher as java_util_regex_Matcher, Pattern as java_util_regex_Pattern } from 'java.util.regex';
import { CharSequence as java_lang_CharSequence, StringBuilder as java_lang_StringBuilder, StringBuffer as java_lang_StringBuffer, Object as java_lang_Object } from 'java.lang';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Matcher extends java_lang_Object implements java_util_regex_MatchResult {

group(arg0: number): string;
group(arg0: string): string;
group(): string;
toString(): string;
matches(): boolean;
replaceFirst(arg0: java_util_function_Function<java_util_regex_MatchResult, string>): string;
replaceFirst(arg0: string): string;
replaceAll(arg0: string): string;
replaceAll(arg0: java_util_function_Function<java_util_regex_MatchResult, string>): string;
end(arg0: string): number;
end(arg0: number): number;
end(): number;
start(): number;
start(arg0: string): number;
start(arg0: number): number;
reset(arg0: java_lang_CharSequence): java_util_regex_Matcher;
reset(): java_util_regex_Matcher;
find(): boolean;
find(arg0: number): boolean;
appendReplacement(arg0: java_lang_StringBuilder, arg1: string): java_util_regex_Matcher;
appendReplacement(arg0: java_lang_StringBuffer, arg1: string): java_util_regex_Matcher;
appendTail(arg0: java_lang_StringBuffer): java_lang_StringBuffer;
appendTail(arg0: java_lang_StringBuilder): java_lang_StringBuilder;
region(arg0: number, arg1: number): java_util_regex_Matcher;
pattern(): java_util_regex_Pattern;
results(): java_util_stream_Stream<java_util_regex_MatchResult>;
hitEnd(): boolean;
groupCount(): number;
requireEnd(): boolean;
toMatchResult(): java_util_regex_MatchResult;
usePattern(arg0: java_util_regex_Pattern): java_util_regex_Matcher;
lookingAt(): boolean;
static quoteReplacement(arg0: string): string;
regionStart(): number;
regionEnd(): number;
hasTransparentBounds(): boolean;
useTransparentBounds(arg0: boolean): java_util_regex_Matcher;
hasAnchoringBounds(): boolean;
useAnchoringBounds(arg0: boolean): java_util_regex_Matcher;

  }
}
//@ts-nocheck

declare module 'java.util.regex' {


  export class MatchResult {

group(): string;
group(arg0: number): string;
end(arg0: number): number;
end(): number;
start(): number;
start(arg0: number): number;
groupCount(): number;

  }
}
//@ts-nocheck

declare module 'java.util' {
import { IntStream as java_util_stream_IntStream, LongStream as java_util_stream_LongStream, DoubleStream as java_util_stream_DoubleStream } from 'java.util.stream';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Random extends java_lang_Object implements java_io_Serializable {

nextInt(): number;
nextInt(arg0: number): number;
nextDouble(): number;
setSeed(arg0: number): void;
nextLong(): number;
nextBoolean(): boolean;
nextFloat(): number;
nextGaussian(): number;
ints(arg0: number, arg1: number): java_util_stream_IntStream;
ints(arg0: number, arg1: number, arg2: number): java_util_stream_IntStream;
ints(): java_util_stream_IntStream;
ints(arg0: number): java_util_stream_IntStream;
longs(arg0: number, arg1: number, arg2: number): java_util_stream_LongStream;
longs(arg0: number, arg1: number): java_util_stream_LongStream;
longs(): java_util_stream_LongStream;
longs(arg0: number): java_util_stream_LongStream;
doubles(arg0: number, arg1: number, arg2: number): java_util_stream_DoubleStream;
doubles(arg0: number, arg1: number): java_util_stream_DoubleStream;
doubles(): java_util_stream_DoubleStream;
doubles(arg0: number): java_util_stream_DoubleStream;
nextBytes(arg0: number[]): void;
constructor();
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class EventObject extends java_lang_Object implements java_io_Serializable {
source: java_lang_Object;
toString(): string;
getSource(): java_lang_Object;
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
add(arg0: E): boolean;
add(arg0: number, arg1: E): void;
remove(arg0: number): E;
remove(arg0: java_lang_Object): boolean;
get(arg0: number): E;
/** Checks to see if two objects are equal.
 
 Only two Vectors can ever return true. This method uses a fuzzy match
 to account for floating point errors. The epsilon can be retrieved
 with epsilon. */
equals(obj: java_lang_Object): boolean;
/** Returns this vector's components as x,y,z. */
toString(): string;
/** Returns a hash code for this vector */
hashCode(): number;
/** Get a new vector. */
clone(): java_lang_Object;
indexOf(arg0: java_lang_Object): number;
indexOf(arg0: java_lang_Object, arg1: number): number;
clear(): void;
isEmpty(): boolean;
lastIndexOf(arg0: java_lang_Object): number;
lastIndexOf(arg0: java_lang_Object, arg1: number): number;
contains(arg0: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
elements(): java_util_Enumeration<E>;
size(): number;
subList(arg0: number, arg1: number): java_util_List<E>;
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
iterator(): java_util_Iterator<E>;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
set(arg0: number, arg1: E): E;
addElement(arg0: E): void;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
capacity(): number;
ensureCapacity(arg0: number): void;
trimToSize(): void;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
listIterator(arg0: number): java_util_ListIterator<E>;
listIterator(): java_util_ListIterator<E>;
elementAt(arg0: number): E;
copyInto(arg0: java_lang_Object[]): void;
setSize(arg0: number): void;
firstElement(): E;
lastElement(): E;
setElementAt(arg0: E, arg1: number): void;
removeElementAt(arg0: number): void;
insertElementAt(arg0: E, arg1: number): void;
removeElement(arg0: java_lang_Object): boolean;
removeAllElements(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
parallelStream(): java_util_stream_Stream<E>;
constructor(arg0: java_util_Collection<E>);
/** Construct the vector with all components as 0. */
constructor();
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
add(arg0: number, arg1: E): void;
add(arg0: E): boolean;
remove(arg0: number): E;
get(arg0: number): E;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
indexOf(arg0: java_lang_Object): number;
clear(): void;
lastIndexOf(arg0: java_lang_Object): number;
subList(arg0: number, arg1: number): java_util_List<E>;
iterator(): java_util_Iterator<E>;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
set(arg0: number, arg1: E): E;
listIterator(): java_util_ListIterator<E>;
listIterator(arg0: number): java_util_ListIterator<E>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
sort(arg0: java_util_Comparator<java_lang_Object>): void;

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
remove(arg0: java_lang_Object): boolean;
toString(): string;
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
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}
//@ts-nocheck

declare module 'java.util' {


  export class RandomAccess {



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
orDefault: V;
class: java_lang_Class<java_lang_Object>;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
values(): java_util_Collection<V>;
clone(): java_lang_Object;
clear(): void;
isEmpty(): boolean;
replace(arg0: K, arg1: V, arg2: V): boolean;
replace(arg0: K, arg1: V): V;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(arg0: java_util_Map<K, V>): void;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<K>;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: number);
constructor();
constructor(arg0: java_util_Map<K, V>);
constructor(arg0: number);
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
remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
equals(arg0: java_lang_Object): boolean;
toString(): string;
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

declare module 'java.util.concurrent' {
import { Object as java_lang_Object } from 'java.lang';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class ConcurrentMap<K extends java_lang_Object, V extends java_lang_Object> implements java_util_Map<K, V> {
orDefault: V;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V, arg2: V): boolean;
replace(arg0: K, arg1: V): V;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
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
remove(arg0: java_lang_Object): boolean;
remove(arg0: number): E;
get(arg0: number): E;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clone(): java_lang_Object;
indexOf(arg0: java_lang_Object): number;
clear(): void;
isEmpty(): boolean;
lastIndexOf(arg0: java_lang_Object): number;
contains(arg0: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
size(): number;
subList(arg0: number, arg1: number): java_util_List<E>;
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
iterator(): java_util_Iterator<E>;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
set(arg0: number, arg1: E): E;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
ensureCapacity(arg0: number): void;
trimToSize(): void;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
listIterator(arg0: number): java_util_ListIterator<E>;
listIterator(): java_util_ListIterator<E>;
toString(): string;
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
constructor(arg0: java_util_Collection<E>);
constructor();
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
get(): T;
get(arg0: number, arg1: java_util_concurrent_TimeUnit): T;
toString(): string;
join(): T;
copy(): java_util_concurrent_CompletableFuture<T>;
handle(arg0: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
handle<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletableFuture<U>;
complete(arg0: T): boolean;
isDone(): boolean;
static allOf(...arg0: java_util_concurrent_CompletableFuture<java_lang_Object>[]): java_util_concurrent_CompletableFuture<java_lang_Void>;
cancel(arg0: boolean): boolean;
isCancelled(): boolean;
completeExceptionally(arg0: java_lang_Throwable): boolean;
defaultExecutor(): java_util_concurrent_Executor;
thenApply(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenApply<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
thenApplyAsync(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
thenApplyAsync(arg0: java_util_function_Function, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenAccept(arg0: java_util_function_Consumer): java_util_concurrent_CompletionStage;
thenAccept(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenAcceptAsync(arg0: java_util_function_Consumer): java_util_concurrent_CompletionStage;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenRunAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage;
thenCombine(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
thenCombine<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletableFuture<V>;
thenCombineAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletableFuture<V>;
thenCombineAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<V>;
thenAcceptBoth<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptBoth(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
thenAcceptBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterBoth(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterBoth(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
applyToEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function): java_util_concurrent_CompletionStage;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
applyToEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
acceptEither(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer): java_util_concurrent_CompletionStage;
acceptEither(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer): java_util_concurrent_CompletionStage;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEither(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterEither(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenCompose<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletableFuture<U>;
thenCompose(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenComposeAsync(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletableFuture<U>;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
thenComposeAsync(arg0: java_util_function_Function, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
handleAsync(arg0: java_util_function_BiFunction, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
handleAsync(arg0: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletableFuture<U>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
whenCompleteAsync(arg0: java_util_function_BiConsumer, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<T>;
toCompletableFuture(): java_util_concurrent_CompletableFuture<T>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage;
exceptionally(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
exceptionally(arg0: java_util_function_Function<java_lang_Throwable, T>): java_util_concurrent_CompletableFuture<T>;
applyToEither<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
applyToEither(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function): java_util_concurrent_CompletionStage;
whenComplete(arg0: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
whenComplete(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<T>;
static completedFuture<U extends java_lang_Object>(arg0: U): java_util_concurrent_CompletableFuture<U>;
static supplyAsync<U extends java_lang_Object>(arg0: java_util_function_Supplier<U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
static supplyAsync<U extends java_lang_Object>(arg0: java_util_function_Supplier<U>): java_util_concurrent_CompletableFuture<U>;
getNow(arg0: T): T;
isCompletedExceptionally(): boolean;
obtrudeValue(arg0: T): void;
obtrudeException(arg0: java_lang_Throwable): void;
getNumberOfDependents(): number;
newIncompleteFuture<U extends java_lang_Object>(): java_util_concurrent_CompletableFuture<U>;
minimalCompletionStage(): java_util_concurrent_CompletionStage<T>;
completeAsync(arg0: java_util_function_Supplier<T>): java_util_concurrent_CompletableFuture<T>;
completeAsync(arg0: java_util_function_Supplier<T>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<T>;
orTimeout(arg0: number, arg1: java_util_concurrent_TimeUnit): java_util_concurrent_CompletableFuture<T>;
completeOnTimeout(arg0: T, arg1: number, arg2: java_util_concurrent_TimeUnit): java_util_concurrent_CompletableFuture<T>;
static delayedExecutor(arg0: number, arg1: java_util_concurrent_TimeUnit): java_util_concurrent_Executor;
static delayedExecutor(arg0: number, arg1: java_util_concurrent_TimeUnit, arg2: java_util_concurrent_Executor): java_util_concurrent_Executor;
static completedStage<U extends java_lang_Object>(arg0: U): java_util_concurrent_CompletionStage<U>;
static failedFuture<U extends java_lang_Object>(arg0: java_lang_Throwable): java_util_concurrent_CompletableFuture<U>;
static failedStage<U extends java_lang_Object>(arg0: java_lang_Throwable): java_util_concurrent_CompletionStage<U>;
static runAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
static runAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
static anyOf(...arg0: java_util_concurrent_CompletableFuture<java_lang_Object>[]): java_util_concurrent_CompletableFuture<java_lang_Object>;
constructor();
  }
}
//@ts-nocheck

declare module 'java.util.concurrent' {
import { BiFunction as java_util_function_BiFunction, Function as java_util_function_Function, Consumer as java_util_function_Consumer, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Void as java_lang_Void, Runnable as java_lang_Runnable } from 'java.lang';
import { CompletionStage as java_util_concurrent_CompletionStage, Executor as java_util_concurrent_Executor, CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';

  export class CompletionStage<T extends java_lang_Object> {

handle<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletionStage<U>;
thenApply<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
thenAccept(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
thenCombine<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletionStage<V>;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<V>;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletionStage<V>;
thenAcceptBoth<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterBoth(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
acceptEither(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEither(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenCompose<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletionStage<U>;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletionStage<U>;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletionStage<U>;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<T>;
toCompletableFuture(): java_util_concurrent_CompletableFuture<T>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
exceptionally(arg0: java_util_function_Function<java_lang_Throwable, T>): java_util_concurrent_CompletionStage<T>;
applyToEither<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
whenComplete(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<T>;

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
clone(): java_util_EnumSet<E>;
clone(): java_lang_Object;
static copyOf<E extends java_lang_Enum<E>>(arg0: java_util_Collection<E>): java_util_EnumSet<E>;
static copyOf<E extends java_lang_Enum<E>>(arg0: java_util_EnumSet<E>): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, ...arg1: E[]): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E): java_util_EnumSet<E>;
static noneOf<E extends java_lang_Enum<E>>(arg0: java_lang_Class<E>): java_util_EnumSet<E>;
static range<E extends java_lang_Enum<E>>(arg0: E, arg1: E): java_util_EnumSet<E>;
static allOf<E extends java_lang_Enum<E>>(arg0: java_lang_Class<E>): java_util_EnumSet<E>;
static complementOf<E extends java_lang_Enum<E>>(arg0: java_util_EnumSet<E>): java_util_EnumSet<E>;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
toString(): string;
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
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
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
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Spliterator as java_util_Spliterator, AbstractCollection as java_util_AbstractCollection, Set as java_util_Set } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class AbstractSet<E extends java_lang_Object> extends java_util_AbstractCollection<E> implements java_util_Set<E> {
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
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
//@ts-nocheck

declare module 'java.util.concurrent.atomic' {
import { IntUnaryOperator as java_util_function_IntUnaryOperator, IntBinaryOperator as java_util_function_IntBinaryOperator } from 'java.util.function';
import { Object as java_lang_Object, Class as java_lang_Class, Number as java_lang_Number } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AtomicInteger extends java_lang_Number implements java_io_Serializable {
opaque: number;
acquire: number;
andSet: number;
andAdd: number;
andIncrement: number;
andDecrement: number;
andUpdate: number;
andAccumulate: number;
plain: number;
class: java_lang_Class<java_lang_Object>;
get(): number;
toString(): string;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
set(arg0: number): void;
getOpaque(): number;
setOpaque(arg0: number): void;
getAcquire(): number;
setRelease(arg0: number): void;
compareAndSet(arg0: number, arg1: number): boolean;
compareAndExchange(arg0: number, arg1: number): number;
compareAndExchangeAcquire(arg0: number, arg1: number): number;
compareAndExchangeRelease(arg0: number, arg1: number): number;
weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
weakCompareAndSet(arg0: number, arg1: number): boolean;
weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
getAndSet(arg0: number): number;
getAndAdd(arg0: number): number;
lazySet(arg0: number): void;
getAndIncrement(): number;
getAndDecrement(): number;
incrementAndGet(): number;
decrementAndGet(): number;
addAndGet(arg0: number): number;
getAndUpdate(arg0: java_util_function_IntUnaryOperator): number;
updateAndGet(arg0: java_util_function_IntUnaryOperator): number;
getAndAccumulate(arg0: number, arg1: java_util_function_IntBinaryOperator): number;
accumulateAndGet(arg0: number, arg1: java_util_function_IntBinaryOperator): number;
getPlain(): number;
setPlain(arg0: number): void;
weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number);
constructor();
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
remove(arg0: java_lang_Object): boolean;
toString(): string;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
iterator(): java_util_Iterator<E>;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
poll(): E;
peek(): E;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
offer(arg0: E): boolean;
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
remove(): E;
clear(): void;
addAll(arg0: java_util_Collection<E>): boolean;
element(): E;
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
poll(): E;
peek(): E;
offer(arg0: E): boolean;

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
remove(): E;
poll(): E;
peek(): E;
element(): E;
offer(arg0: E): boolean;
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
iterator(): java_util_Iterator<E>;
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
}
//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { TimeZone as java_util_TimeZone, Locale as java_util_Locale, Date as java_util_Date } from 'java.util';
import { ZoneId as java_time_ZoneId } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class TimeZone extends java_lang_Object implements java_io_Serializable, java_lang_Cloneable {
static SHORT: number;
static LONG: number;
static default: java_util_TimeZone;
offset: number;
offset: number;
displayName: string;
displayName: string;
displayName: string;
displayName: string;
iD: string;
static timeZone: java_util_TimeZone;
static timeZone: java_util_TimeZone;
static availableIDs: string[];
static availableIDs: string[];
dSTSavings: number;
rawOffset: number;
clone(): java_lang_Object;
static getDefault(): java_util_TimeZone;
getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
getOffset(arg0: number): number;
getDisplayName(): string;
getDisplayName(arg0: boolean, arg1: number, arg2: java_util_Locale): string;
getDisplayName(arg0: java_util_Locale): string;
getDisplayName(arg0: boolean, arg1: number): string;
static setDefault(arg0: java_util_TimeZone): void;
getID(): string;
toZoneId(): java_time_ZoneId;
static getTimeZone(arg0: java_time_ZoneId): java_util_TimeZone;
static getTimeZone(arg0: string): java_util_TimeZone;
static getAvailableIDs(arg0: number): string[];
static getAvailableIDs(): string[];
getDSTSavings(): number;
hasSameRules(arg0: java_util_TimeZone): boolean;
getRawOffset(): number;
setRawOffset(arg0: number): void;
setID(arg0: string): void;
useDaylightTime(): boolean;
observesDaylightTime(): boolean;
inDaylightTime(arg0: java_util_Date): boolean;
constructor();
  }
}
//@ts-nocheck

declare module 'java.util.function' {
import { BiPredicate as java_util_function_BiPredicate } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class BiPredicate<T extends java_lang_Object, U extends java_lang_Object> {

test(arg0: T, arg1: U): boolean;
or(arg0: java_util_function_BiPredicate<java_lang_Object, java_lang_Object>): java_util_function_BiPredicate<T, U>;
and(arg0: java_util_function_BiPredicate<java_lang_Object, java_lang_Object>): java_util_function_BiPredicate<T, U>;
negate(): java_util_function_BiPredicate<T, U>;

  }
}