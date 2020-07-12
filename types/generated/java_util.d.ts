//@ts-nocheck

declare module 'java.util.stream' {
import { Supplier as java_util_function_Supplier, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer, ToIntFunction as java_util_function_ToIntFunction, ToLongFunction as java_util_function_ToLongFunction, ToDoubleFunction as java_util_function_ToDoubleFunction, Function as java_util_function_Function, IntFunction as java_util_function_IntFunction, BiConsumer as java_util_function_BiConsumer, BiFunction as java_util_function_BiFunction, BinaryOperator as java_util_function_BinaryOperator, UnaryOperator as java_util_function_UnaryOperator } from 'java.util.function';
import { Stream as java_util_stream_Stream, IntStream as java_util_stream_IntStream, LongStream as java_util_stream_LongStream, DoubleStream as java_util_stream_DoubleStream, Collector as java_util_stream_Collector, BaseStream as java_util_stream_BaseStream } from 'java.util.stream';
import { Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';
import { Optional as java_util_Optional, Comparator as java_util_Comparator, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Builder as java_util_stream_Stream_Builder } from 'java.util.stream.Stream';

  export class Stream<T extends java_lang_Object> implements java_util_stream_BaseStream<T, java_util_stream_Stream<T>> {

static generate<T extends java_lang_Object>(arg0: java_util_function_Supplier<T>): java_util_stream_Stream<T>;
distinct(): java_util_stream_Stream<T>;
static ofNullable<T extends java_lang_Object>(arg0: T): java_util_stream_Stream<T>;
findFirst(): java_util_Optional<T>;
dropWhile(arg0: java_util_function_Predicate<java_lang_Object>): java_util_stream_Stream<T>;
sorted(arg0: java_util_Comparator<java_lang_Object>): java_util_stream_Stream<T>;
sorted(): java_util_stream_Stream<T>;
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
reduce<U extends java_lang_Object>(arg0: U, arg1: java_util_function_BiFunction<U, java_lang_Object, U>, arg2: java_util_function_BinaryOperator<U>): U;
reduce(arg0: T, arg1: java_util_function_BinaryOperator<T>): T;
reduce(arg0: java_util_function_BinaryOperator<T>): java_util_Optional<T>;
static iterate<T extends java_lang_Object>(arg0: T, arg1: java_util_function_UnaryOperator<T>): java_util_stream_Stream<T>;
static iterate<T extends java_lang_Object>(arg0: T, arg1: java_util_function_Predicate<java_lang_Object>, arg2: java_util_function_UnaryOperator<T>): java_util_stream_Stream<T>;
parallel(): S;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;
sequential(): S;
iterator(): java_util_Iterator<T>;
spliterator(): java_util_Spliterator<T>;
close(): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class Supplier<T extends java_lang_Object> {

get(): T;

  }
}//@ts-nocheck

declare module 'java.util' {
import { Optional as java_util_Optional } from 'java.util';
import { Object as java_lang_Object, Runnable as java_lang_Runnable, Throwable as java_lang_Throwable } from 'java.lang';
import { Consumer as java_util_function_Consumer, Supplier as java_util_function_Supplier, Predicate as java_util_function_Predicate, Function as java_util_function_Function } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Optional<T extends java_lang_Object> extends java_lang_Object {
static EMPTY: java_util_Optional<java_lang_Object>;
value: T;
static ofNullable<T extends java_lang_Object>(arg0: T): java_util_Optional<T>;
ifPresent(arg0: java_util_function_Consumer<java_lang_Object>): void;
ifPresentOrElse(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_lang_Runnable): void;
or(arg0: java_util_function_Supplier<java_util_Optional<T>>): java_util_Optional<T>;
orElseGet(arg0: java_util_function_Supplier<T>): T;
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
orElseThrow(): T;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): T;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
/** Represents an operation that accepts a single input argument and returns no
 result. */

  export class Consumer<T extends java_lang_Object> {

andThen(arg0: java_util_function_Consumer<java_lang_Object>): java_util_function_Consumer<T>;
/** Performs this operation on the given argument. */
accept(t: T): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Predicate<T extends java_lang_Object> {

or(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
and(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
negate(): java_util_function_Predicate<T>;
static isEqual<T extends java_lang_Object>(arg0: java_lang_Object): java_util_function_Predicate<T>;
static not<T extends java_lang_Object>(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
test(arg0: T): boolean;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Function as java_util_function_Function } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Function<T extends java_lang_Object, R extends java_lang_Object> {

compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
apply(arg0: T): R;
static identity<T extends java_lang_Object>(): java_util_function_Function<T, T>;

  }
}//@ts-nocheck

declare module 'java.util.stream' {
import { IntStream as java_util_stream_IntStream, BaseStream as java_util_stream_BaseStream, LongStream as java_util_stream_LongStream, DoubleStream as java_util_stream_DoubleStream, Stream as java_util_stream_Stream } from 'java.util.stream';
import { IntSupplier as java_util_function_IntSupplier, IntPredicate as java_util_function_IntPredicate, IntConsumer as java_util_function_IntConsumer, IntToLongFunction as java_util_function_IntToLongFunction, IntToDoubleFunction as java_util_function_IntToDoubleFunction, IntFunction as java_util_function_IntFunction, Supplier as java_util_function_Supplier, ObjIntConsumer as java_util_function_ObjIntConsumer, BiConsumer as java_util_function_BiConsumer, IntUnaryOperator as java_util_function_IntUnaryOperator, IntBinaryOperator as java_util_function_IntBinaryOperator } from 'java.util.function';
import { OptionalInt as java_util_OptionalInt, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, OptionalDouble as java_util_OptionalDouble, IntSummaryStatistics as java_util_IntSummaryStatistics } from 'java.util';
import { Object as java_lang_Object, Integer as java_lang_Integer, Runnable as java_lang_Runnable } from 'java.lang';
import { Builder as java_util_stream_IntStream_Builder } from 'java.util.stream.IntStream';
import { OfInt as java_util_PrimitiveIterator_OfInt } from 'java.util.PrimitiveIterator';
import { OfInt as java_util_Spliterator_OfInt } from 'java.util.Spliterator';

  export class IntStream implements java_util_stream_BaseStream<java_lang_Integer, java_util_stream_IntStream> {

static range(arg0: number, arg1: number): java_util_stream_IntStream;
parallel(): java_util_stream_BaseStream;
parallel(): java_util_stream_IntStream;
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
sequential(): java_util_stream_IntStream;
sequential(): java_util_stream_BaseStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_IntFunction<U>): java_util_stream_Stream<U>;
static rangeClosed(arg0: number, arg1: number): java_util_stream_IntStream;
min(): java_util_OptionalInt;
max(): java_util_OptionalInt;
count(): number;
static builder(): java_util_stream_IntStream_Builder;
static concat(arg0: java_util_stream_IntStream, arg1: java_util_stream_IntStream): java_util_stream_IntStream;
limit(arg0: number): java_util_stream_IntStream;
toArray(): number[];
iterator(): java_util_PrimitiveIterator_OfInt;
iterator(): java_util_Iterator;
spliterator(): java_util_Spliterator_OfInt;
spliterator(): java_util_Spliterator;
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
reduce(arg0: java_util_function_IntBinaryOperator): java_util_OptionalInt;
reduce(arg0: number, arg1: java_util_function_IntBinaryOperator): number;
static iterate(arg0: number, arg1: java_util_function_IntPredicate, arg2: java_util_function_IntUnaryOperator): java_util_stream_IntStream;
static iterate(arg0: number, arg1: java_util_function_IntUnaryOperator): java_util_stream_IntStream;
average(): java_util_OptionalDouble;
summaryStatistics(): java_util_IntSummaryStatistics;
asLongStream(): java_util_stream_LongStream;
asDoubleStream(): java_util_stream_DoubleStream;
boxed(): java_util_stream_Stream<java_lang_Integer>;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;
close(): void;

  }
}//@ts-nocheck

declare module 'java.util.stream' {
import { Runnable as java_lang_Runnable, AutoCloseable as java_lang_AutoCloseable, Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { BaseStream as java_util_stream_BaseStream } from 'java.util.stream';

  export class BaseStream<T extends java_lang_Object, S extends java_util_stream_BaseStream<T, S>> implements java_lang_AutoCloseable {

parallel(): S;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;
sequential(): S;
iterator(): java_util_Iterator<T>;
spliterator(): java_util_Spliterator<T>;
close(): void;

  }
}//@ts-nocheck

declare module 'java.util' {
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Iterator<E extends java_lang_Object> {

remove(): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
next(): E;
hasNext(): boolean;

  }
}//@ts-nocheck

declare module 'java.util' {
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

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
estimateSize(): number;
trySplit(): java_util_Spliterator<T>;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
characteristics(): number;

  }
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToIntFunction<T extends java_lang_Object> {

applyAsInt(arg0: T): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToLongFunction<T extends java_lang_Object> {

applyAsLong(arg0: T): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToDoubleFunction<T extends java_lang_Object> {

applyAsDouble(arg0: T): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class IntSupplier {
asInt: number;
getAsInt(): number;

  }
}//@ts-nocheck

declare module 'java.util' {
import { IntConsumer as java_util_function_IntConsumer, IntSupplier as java_util_function_IntSupplier, Supplier as java_util_function_Supplier } from 'java.util.function';
import { Runnable as java_lang_Runnable, Object as java_lang_Object, Throwable as java_lang_Throwable } from 'java.lang';
import { OptionalInt as java_util_OptionalInt } from 'java.util';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';

  export class OptionalInt extends java_lang_Object {
static EMPTY: java_util_OptionalInt;
isPresent: boolean;
value: number;
asInt: number;
ifPresent(arg0: java_util_function_IntConsumer): void;
ifPresentOrElse(arg0: java_util_function_IntConsumer, arg1: java_lang_Runnable): void;
orElseGet(arg0: java_util_function_IntSupplier): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
isEmpty(): boolean;
static empty(): java_util_OptionalInt;
stream(): java_util_stream_IntStream;
static of(arg0: number): java_util_OptionalInt;
isPresent(): boolean;
orElse(arg0: number): number;
orElseThrow(): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
getAsInt(): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { IntConsumer as java_util_function_IntConsumer } from 'java.util.function';

  export class IntConsumer {

andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;
accept(arg0: number): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { IntPredicate as java_util_function_IntPredicate } from 'java.util.function';

  export class IntPredicate {

or(arg0: java_util_function_IntPredicate): java_util_function_IntPredicate;
and(arg0: java_util_function_IntPredicate): java_util_function_IntPredicate;
negate(): java_util_function_IntPredicate;
test(arg0: number): boolean;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class IntToLongFunction {

applyAsLong(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.stream' {
import { LongStream as java_util_stream_LongStream, BaseStream as java_util_stream_BaseStream, IntStream as java_util_stream_IntStream, DoubleStream as java_util_stream_DoubleStream, Stream as java_util_stream_Stream } from 'java.util.stream';
import { LongSupplier as java_util_function_LongSupplier, LongPredicate as java_util_function_LongPredicate, LongConsumer as java_util_function_LongConsumer, LongToIntFunction as java_util_function_LongToIntFunction, LongToDoubleFunction as java_util_function_LongToDoubleFunction, LongFunction as java_util_function_LongFunction, Supplier as java_util_function_Supplier, ObjLongConsumer as java_util_function_ObjLongConsumer, BiConsumer as java_util_function_BiConsumer, LongUnaryOperator as java_util_function_LongUnaryOperator, LongBinaryOperator as java_util_function_LongBinaryOperator } from 'java.util.function';
import { OptionalLong as java_util_OptionalLong, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, OptionalDouble as java_util_OptionalDouble, LongSummaryStatistics as java_util_LongSummaryStatistics } from 'java.util';
import { Object as java_lang_Object, Long as java_lang_Long, Runnable as java_lang_Runnable } from 'java.lang';
import { Builder as java_util_stream_LongStream_Builder } from 'java.util.stream.LongStream';
import { OfLong as java_util_PrimitiveIterator_OfLong } from 'java.util.PrimitiveIterator';
import { OfLong as java_util_Spliterator_OfLong } from 'java.util.Spliterator';

  export class LongStream implements java_util_stream_BaseStream<java_lang_Long, java_util_stream_LongStream> {

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
sequential(): java_util_stream_LongStream;
sequential(): java_util_stream_BaseStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_LongFunction<U>): java_util_stream_Stream<U>;
static rangeClosed(arg0: number, arg1: number): java_util_stream_LongStream;
min(): java_util_OptionalLong;
max(): java_util_OptionalLong;
count(): number;
static builder(): java_util_stream_LongStream_Builder;
static concat(arg0: java_util_stream_LongStream, arg1: java_util_stream_LongStream): java_util_stream_LongStream;
limit(arg0: number): java_util_stream_LongStream;
toArray(): number[];
iterator(): java_util_PrimitiveIterator_OfLong;
iterator(): java_util_Iterator;
spliterator(): java_util_Spliterator_OfLong;
spliterator(): java_util_Spliterator;
static empty(): java_util_stream_LongStream;
filter(arg0: java_util_function_LongPredicate): java_util_stream_LongStream;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_ObjLongConsumer<R>, arg2: java_util_function_BiConsumer<R, R>): R;
map(arg0: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
static of(arg0: number): java_util_stream_LongStream;
static of(...arg0: number[]): java_util_stream_LongStream;
flatMap(arg0: java_util_function_LongFunction<java_util_stream_LongStream>): java_util_stream_LongStream;
forEach(arg0: java_util_function_LongConsumer): void;
findAny(): java_util_OptionalLong;
skip(arg0: number): java_util_stream_LongStream;
peek(arg0: java_util_function_LongConsumer): java_util_stream_LongStream;
sum(): number;
reduce(arg0: java_util_function_LongBinaryOperator): java_util_OptionalLong;
reduce(arg0: number, arg1: java_util_function_LongBinaryOperator): number;
static iterate(arg0: number, arg1: java_util_function_LongPredicate, arg2: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
static iterate(arg0: number, arg1: java_util_function_LongUnaryOperator): java_util_stream_LongStream;
average(): java_util_OptionalDouble;
summaryStatistics(): java_util_LongSummaryStatistics;
asDoubleStream(): java_util_stream_DoubleStream;
boxed(): java_util_stream_Stream<java_lang_Long>;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;
close(): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class LongSupplier {
asLong: number;
getAsLong(): number;

  }
}//@ts-nocheck

declare module 'java.util' {
import { LongConsumer as java_util_function_LongConsumer, LongSupplier as java_util_function_LongSupplier, Supplier as java_util_function_Supplier } from 'java.util.function';
import { Runnable as java_lang_Runnable, Object as java_lang_Object, Throwable as java_lang_Throwable } from 'java.lang';
import { OptionalLong as java_util_OptionalLong } from 'java.util';
import { LongStream as java_util_stream_LongStream } from 'java.util.stream';

  export class OptionalLong extends java_lang_Object {
static EMPTY: java_util_OptionalLong;
isPresent: boolean;
value: number;
asLong: number;
ifPresent(arg0: java_util_function_LongConsumer): void;
ifPresentOrElse(arg0: java_util_function_LongConsumer, arg1: java_lang_Runnable): void;
orElseGet(arg0: java_util_function_LongSupplier): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
isEmpty(): boolean;
static empty(): java_util_OptionalLong;
stream(): java_util_stream_LongStream;
static of(arg0: number): java_util_OptionalLong;
isPresent(): boolean;
orElse(arg0: number): number;
orElseThrow(): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
getAsLong(): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { LongConsumer as java_util_function_LongConsumer } from 'java.util.function';

  export class LongConsumer {

andThen(arg0: java_util_function_LongConsumer): java_util_function_LongConsumer;
accept(arg0: number): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { LongPredicate as java_util_function_LongPredicate } from 'java.util.function';

  export class LongPredicate {

or(arg0: java_util_function_LongPredicate): java_util_function_LongPredicate;
and(arg0: java_util_function_LongPredicate): java_util_function_LongPredicate;
negate(): java_util_function_LongPredicate;
test(arg0: number): boolean;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class LongToIntFunction {

applyAsInt(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class LongToDoubleFunction {

applyAsDouble(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.stream' {
import { BaseStream as java_util_stream_BaseStream, DoubleStream as java_util_stream_DoubleStream, IntStream as java_util_stream_IntStream, LongStream as java_util_stream_LongStream, Stream as java_util_stream_Stream } from 'java.util.stream';
import { DoubleSupplier as java_util_function_DoubleSupplier, DoublePredicate as java_util_function_DoublePredicate, DoubleConsumer as java_util_function_DoubleConsumer, DoubleToIntFunction as java_util_function_DoubleToIntFunction, DoubleToLongFunction as java_util_function_DoubleToLongFunction, DoubleFunction as java_util_function_DoubleFunction, Supplier as java_util_function_Supplier, ObjDoubleConsumer as java_util_function_ObjDoubleConsumer, BiConsumer as java_util_function_BiConsumer, DoubleUnaryOperator as java_util_function_DoubleUnaryOperator, DoubleBinaryOperator as java_util_function_DoubleBinaryOperator } from 'java.util.function';
import { OptionalDouble as java_util_OptionalDouble, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, DoubleSummaryStatistics as java_util_DoubleSummaryStatistics } from 'java.util';
import { Object as java_lang_Object, Double as java_lang_Double, Runnable as java_lang_Runnable } from 'java.lang';
import { Builder as java_util_stream_DoubleStream_Builder } from 'java.util.stream.DoubleStream';
import { OfDouble as java_util_PrimitiveIterator_OfDouble } from 'java.util.PrimitiveIterator';
import { OfDouble as java_util_Spliterator_OfDouble } from 'java.util.Spliterator';

  export class DoubleStream implements java_util_stream_BaseStream<java_lang_Double, java_util_stream_DoubleStream> {

parallel(): java_util_stream_BaseStream;
parallel(): java_util_stream_DoubleStream;
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
sequential(): java_util_stream_DoubleStream;
sequential(): java_util_stream_BaseStream;
mapToObj<U extends java_lang_Object>(arg0: java_util_function_DoubleFunction<U>): java_util_stream_Stream<U>;
min(): java_util_OptionalDouble;
max(): java_util_OptionalDouble;
count(): number;
static builder(): java_util_stream_DoubleStream_Builder;
static concat(arg0: java_util_stream_DoubleStream, arg1: java_util_stream_DoubleStream): java_util_stream_DoubleStream;
limit(arg0: number): java_util_stream_DoubleStream;
toArray(): number[];
iterator(): java_util_Iterator;
iterator(): java_util_PrimitiveIterator_OfDouble;
spliterator(): java_util_Spliterator_OfDouble;
spliterator(): java_util_Spliterator;
static empty(): java_util_stream_DoubleStream;
filter(arg0: java_util_function_DoublePredicate): java_util_stream_DoubleStream;
collect<R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_ObjDoubleConsumer<R>, arg2: java_util_function_BiConsumer<R, R>): R;
map(arg0: java_util_function_DoubleUnaryOperator): java_util_stream_DoubleStream;
static of(arg0: number): java_util_stream_DoubleStream;
static of(...arg0: number[]): java_util_stream_DoubleStream;
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
average(): java_util_OptionalDouble;
summaryStatistics(): java_util_DoubleSummaryStatistics;
boxed(): java_util_stream_Stream<java_lang_Double>;
onClose(arg0: java_lang_Runnable): S;
unordered(): S;
isParallel(): boolean;
close(): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class DoubleSupplier {
asDouble: number;
getAsDouble(): number;

  }
}//@ts-nocheck

declare module 'java.util' {
import { DoubleConsumer as java_util_function_DoubleConsumer, DoubleSupplier as java_util_function_DoubleSupplier, Supplier as java_util_function_Supplier } from 'java.util.function';
import { Runnable as java_lang_Runnable, Object as java_lang_Object, Throwable as java_lang_Throwable } from 'java.lang';
import { OptionalDouble as java_util_OptionalDouble } from 'java.util';
import { DoubleStream as java_util_stream_DoubleStream } from 'java.util.stream';

  export class OptionalDouble extends java_lang_Object {
static EMPTY: java_util_OptionalDouble;
isPresent: boolean;
value: number;
asDouble: number;
ifPresent(arg0: java_util_function_DoubleConsumer): void;
ifPresentOrElse(arg0: java_util_function_DoubleConsumer, arg1: java_lang_Runnable): void;
orElseGet(arg0: java_util_function_DoubleSupplier): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
isEmpty(): boolean;
static empty(): java_util_OptionalDouble;
stream(): java_util_stream_DoubleStream;
static of(arg0: number): java_util_OptionalDouble;
isPresent(): boolean;
orElse(arg0: number): number;
orElseThrow(): number;
orElseThrow<X extends java_lang_Throwable>(arg0: java_util_function_Supplier<X>): number;
getAsDouble(): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { DoubleConsumer as java_util_function_DoubleConsumer } from 'java.util.function';

  export class DoubleConsumer {

andThen(arg0: java_util_function_DoubleConsumer): java_util_function_DoubleConsumer;
accept(arg0: number): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { DoublePredicate as java_util_function_DoublePredicate } from 'java.util.function';

  export class DoublePredicate {

or(arg0: java_util_function_DoublePredicate): java_util_function_DoublePredicate;
and(arg0: java_util_function_DoublePredicate): java_util_function_DoublePredicate;
negate(): java_util_function_DoublePredicate;
test(arg0: number): boolean;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class DoubleToIntFunction {

applyAsInt(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class DoubleToLongFunction {

applyAsLong(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class DoubleFunction<R extends java_lang_Object> {

apply(arg0: number): R;

  }
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.Spliterator' {
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfDouble as java_util_Spliterator_OfDouble } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';
import { Object as java_lang_Object, Double as java_lang_Double } from 'java.lang';
import { Consumer as java_util_function_Consumer, DoubleConsumer as java_util_function_DoubleConsumer } from 'java.util.function';

  export class OfDouble implements java_util_Spliterator_OfPrimitive<java_lang_Double, java_util_function_DoubleConsumer, java_util_Spliterator_OfDouble> {
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
trySplit(): java_util_Spliterator_OfPrimitive;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfDouble;
tryAdvance(arg0: java_lang_Object): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_util_function_DoubleConsumer): boolean;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_DoubleConsumer): void;
estimateSize(): number;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;
characteristics(): number;

  }
}//@ts-nocheck

declare module 'java.util.Spliterator' {
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';
import { OfPrimitive as java_util_Spliterator_OfPrimitive } from 'java.util.Spliterator';

  export class OfPrimitive<T extends java_lang_Object, T_CONS extends java_lang_Object, T_SPLITR extends java_util_Spliterator_OfPrimitive<T, T_CONS, T_SPLITR>> implements java_util_Spliterator<T> {
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
trySplit(): java_util_Spliterator;
trySplit(): T_SPLITR;
tryAdvance(arg0: T_CONS): boolean;
forEachRemaining(arg0: T_CONS): void;
estimateSize(): number;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
characteristics(): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ObjDoubleConsumer<T extends java_lang_Object> {

accept(arg0: T, arg1: number): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class BiConsumer<T extends java_lang_Object, U extends java_lang_Object> {

andThen(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_function_BiConsumer<T, U>;
accept(arg0: T, arg1: U): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { DoubleUnaryOperator as java_util_function_DoubleUnaryOperator } from 'java.util.function';

  export class DoubleUnaryOperator {

compose(arg0: java_util_function_DoubleUnaryOperator): java_util_function_DoubleUnaryOperator;
andThen(arg0: java_util_function_DoubleUnaryOperator): java_util_function_DoubleUnaryOperator;
static identity(): java_util_function_DoubleUnaryOperator;
applyAsDouble(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class DoubleBinaryOperator {

applyAsDouble(arg0: number, arg1: number): number;

  }
}//@ts-nocheck

declare module 'java.util' {
import { DoubleSummaryStatistics as java_util_DoubleSummaryStatistics } from 'java.util';
import { DoubleConsumer as java_util_function_DoubleConsumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class DoubleSummaryStatistics extends java_lang_Object implements java_util_function_DoubleConsumer {
count: number;
sum: number;
sumCompensation: number;
simpleSum: number;
min: number;
max: number;
count: number;
max: number;
sum: number;
average: number;
min: number;
getCount(): number;
toString(): string;
accept(arg0: number): void;
combine(arg0: java_util_DoubleSummaryStatistics): void;
getMax(): number;
getSum(): number;
getAverage(): number;
getMin(): number;
andThen(arg0: java_util_function_DoubleConsumer): java_util_function_DoubleConsumer;
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class LongFunction<R extends java_lang_Object> {

apply(arg0: number): R;

  }
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.PrimitiveIterator' {
import { Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { Consumer as java_util_function_Consumer, LongConsumer as java_util_function_LongConsumer } from 'java.util.function';
import { PrimitiveIterator as java_util_PrimitiveIterator } from 'java.util';

  export class OfLong implements java_util_PrimitiveIterator<java_lang_Long, java_util_function_LongConsumer> {

nextLong(): number;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_util_function_LongConsumer): void;
next(): java_lang_Long;
next(): java_lang_Object;
remove(): void;
hasNext(): boolean;

  }
}//@ts-nocheck

declare module 'java.util.Spliterator' {
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfLong as java_util_Spliterator_OfLong } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';
import { Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { Consumer as java_util_function_Consumer, LongConsumer as java_util_function_LongConsumer } from 'java.util.function';

  export class OfLong implements java_util_Spliterator_OfPrimitive<java_lang_Long, java_util_function_LongConsumer, java_util_Spliterator_OfLong> {
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
trySplit(): java_util_Spliterator_OfPrimitive;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfLong;
tryAdvance(arg0: java_lang_Object): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_util_function_LongConsumer): boolean;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_LongConsumer): void;
estimateSize(): number;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;
characteristics(): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ObjLongConsumer<T extends java_lang_Object> {

accept(arg0: T, arg1: number): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { LongUnaryOperator as java_util_function_LongUnaryOperator } from 'java.util.function';

  export class LongUnaryOperator {

compose(arg0: java_util_function_LongUnaryOperator): java_util_function_LongUnaryOperator;
andThen(arg0: java_util_function_LongUnaryOperator): java_util_function_LongUnaryOperator;
static identity(): java_util_function_LongUnaryOperator;
applyAsLong(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class LongBinaryOperator {

applyAsLong(arg0: number, arg1: number): number;

  }
}//@ts-nocheck

declare module 'java.util' {
import { LongSummaryStatistics as java_util_LongSummaryStatistics } from 'java.util';
import { LongConsumer as java_util_function_LongConsumer, IntConsumer as java_util_function_IntConsumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class LongSummaryStatistics extends java_lang_Object implements java_util_function_LongConsumer, java_util_function_IntConsumer {
count: number;
sum: number;
min: number;
max: number;
count: number;
max: number;
sum: number;
average: number;
min: number;
getCount(): number;
toString(): string;
accept(arg0: number): void;
accept(arg0: number): void;
combine(arg0: java_util_LongSummaryStatistics): void;
getMax(): number;
getSum(): number;
getAverage(): number;
getMin(): number;
andThen(arg0: java_util_function_LongConsumer): java_util_function_LongConsumer;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class IntToDoubleFunction {

applyAsDouble(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class IntFunction<R extends java_lang_Object> {

apply(arg0: number): R;

  }
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.Spliterator' {
import { OfPrimitive as java_util_Spliterator_OfPrimitive, OfInt as java_util_Spliterator_OfInt } from 'java.util.Spliterator';
import { Spliterator as java_util_Spliterator, Comparator as java_util_Comparator } from 'java.util';
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { Consumer as java_util_function_Consumer, IntConsumer as java_util_function_IntConsumer } from 'java.util.function';

  export class OfInt implements java_util_Spliterator_OfPrimitive<java_lang_Integer, java_util_function_IntConsumer, java_util_Spliterator_OfInt> {
exactSizeIfKnown: number;
comparator: java_util_Comparator<java_lang_Object>;
trySplit(): java_util_Spliterator_OfPrimitive;
trySplit(): java_util_Spliterator;
trySplit(): java_util_Spliterator_OfInt;
tryAdvance(arg0: java_lang_Object): boolean;
tryAdvance(arg0: java_util_function_Consumer<java_lang_Object>): boolean;
tryAdvance(arg0: java_util_function_IntConsumer): boolean;
forEachRemaining(arg0: java_util_function_Consumer<java_lang_Object>): void;
forEachRemaining(arg0: java_lang_Object): void;
forEachRemaining(arg0: java_util_function_IntConsumer): void;
estimateSize(): number;
getExactSizeIfKnown(): number;
hasCharacteristics(arg0: number): boolean;
getComparator(): java_util_Comparator<java_lang_Object>;
characteristics(): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ObjIntConsumer<T extends java_lang_Object> {

accept(arg0: T, arg1: number): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { IntUnaryOperator as java_util_function_IntUnaryOperator } from 'java.util.function';

  export class IntUnaryOperator {

compose(arg0: java_util_function_IntUnaryOperator): java_util_function_IntUnaryOperator;
andThen(arg0: java_util_function_IntUnaryOperator): java_util_function_IntUnaryOperator;
static identity(): java_util_function_IntUnaryOperator;
applyAsInt(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {


  export class IntBinaryOperator {

applyAsInt(arg0: number, arg1: number): number;

  }
}//@ts-nocheck

declare module 'java.util' {
import { IntSummaryStatistics as java_util_IntSummaryStatistics } from 'java.util';
import { IntConsumer as java_util_function_IntConsumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class IntSummaryStatistics extends java_lang_Object implements java_util_function_IntConsumer {
count: number;
sum: number;
min: number;
max: number;
count: number;
max: number;
sum: number;
average: number;
min: number;
getCount(): number;
toString(): string;
accept(arg0: number): void;
combine(arg0: java_util_IntSummaryStatistics): void;
getMax(): number;
getSum(): number;
getAverage(): number;
getMin(): number;
andThen(arg0: java_util_function_IntConsumer): java_util_function_IntConsumer;
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.util' {
import { Locale as java_util_Locale, Set as java_util_Set, List as java_util_List, Collection as java_util_Collection } from 'java.util';
import { Category as java_util_Locale_Category, IsoCountryCode as java_util_Locale_IsoCountryCode, LanguageRange as java_util_Locale_LanguageRange, FilteringMode as java_util_Locale_FilteringMode, Cache as java_util_Locale_Cache } from 'java.util.Locale';
import { Character as java_lang_Character, Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { BaseLocale as sun_util_locale_BaseLocale, LocaleExtensions as sun_util_locale_LocaleExtensions } from 'sun.util.locale';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';

  export class Locale extends java_lang_Object implements java_lang_Cloneable, java_io_Serializable {
static LOCALECACHE: java_util_Locale_Cache;
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
static serialVersionUID: number;
static DISPLAY_LANGUAGE: number;
static DISPLAY_COUNTRY: number;
static DISPLAY_VARIANT: number;
static DISPLAY_SCRIPT: number;
static DISPLAY_UEXT_KEY: number;
static DISPLAY_UEXT_TYPE: number;
baseLocale: sun_util_locale_BaseLocale;
localeExtensions: sun_util_locale_LocaleExtensions;
hashCodeValue: number;
static defaultLocale: java_util_Locale;
static defaultDisplayLocale: java_util_Locale;
static defaultFormatLocale: java_util_Locale;
languageTag: string;
static serialPersistentFields: java_io_ObjectStreamField[];
static isoLanguages: string[];
static isoCountries: string[];
static $assertionsDisabled: boolean;
displayName: string;
displayName: string;
static availableLocales: java_util_Locale[];
static iSOCountries: string[];
static iSOCountries: java_util_Set<string>;
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
static default: java_util_Locale;
static default: java_util_Locale;
language: string;
getDisplayName(): string;
getDisplayName(arg0: java_util_Locale): string;
static getAvailableLocales(): java_util_Locale[];
static setDefault(arg0: java_util_Locale): void;
static setDefault(arg0: java_util_Locale_Category, arg1: java_util_Locale): void;
static getISOCountries(): string[];
static getISOCountries(arg0: java_util_Locale_IsoCountryCode): java_util_Set<string>;
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
getDisplayLanguage(arg0: java_util_Locale): string;
getDisplayLanguage(): string;
getDisplayScript(): string;
getDisplayScript(arg0: java_util_Locale): string;
getDisplayCountry(): string;
getDisplayCountry(arg0: java_util_Locale): string;
getDisplayVariant(arg0: java_util_Locale): string;
getDisplayVariant(): string;
static filterTags(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>, arg2: java_util_Locale_FilteringMode): java_util_List<string>;
static filterTags(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>): java_util_List<string>;
static lookupTag(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<string>): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
static getDefault(): java_util_Locale;
static getDefault(arg0: java_util_Locale_Category): java_util_Locale;
static filter(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>): java_util_List<java_util_Locale>;
static filter(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>, arg2: java_util_Locale_FilteringMode): java_util_List<java_util_Locale>;
static lookup(arg0: java_util_List<java_util_Locale_LanguageRange>, arg1: java_util_Collection<java_util_Locale>): java_util_Locale;
getLanguage(): string;
constructor(arg0: string);
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: string, arg2: string);
  }
}//@ts-nocheck

declare module 'java.util.Locale' {
import { Category as java_util_Locale_Category } from 'java.util.Locale';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Category extends java_lang_Enum<java_util_Locale_Category> {
static DISPLAY: java_util_Locale_Category;
static FORMAT: java_util_Locale_Category;
languageKey: string;
scriptKey: string;
countryKey: string;
variantKey: string;
extensionsKey: string;
static $VALUES: java_util_Locale_Category[];
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
}//@ts-nocheck

declare module 'java.util.Locale' {
import { IsoCountryCode as java_util_Locale_IsoCountryCode } from 'java.util.Locale';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
import { Map as java_util_Map, Set as java_util_Set } from 'java.util';

  export class IsoCountryCode extends java_lang_Enum<java_util_Locale_IsoCountryCode> {
static PART1_ALPHA2: java_util_Locale_IsoCountryCode;
static PART1_ALPHA3: java_util_Locale_IsoCountryCode;
static PART3: java_util_Locale_IsoCountryCode;
static iso3166CodesMap: java_util_Map<java_util_Locale_IsoCountryCode, java_util_Set<string>>;
static $VALUES: java_util_Locale_IsoCountryCode[];
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
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.function' {
import { Function as java_util_function_Function, BiFunction as java_util_function_BiFunction } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class BiFunction<T extends java_lang_Object, U extends java_lang_Object, R extends java_lang_Object> {

andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_BiFunction<T, U, V>;
apply(arg0: T, arg1: U): R;

  }
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.function' {
import { UnaryOperator as java_util_function_UnaryOperator, Function as java_util_function_Function } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class UnaryOperator<T extends java_lang_Object> implements java_util_function_Function<T, T> {

static identity<T extends java_lang_Object>(): java_util_function_UnaryOperator<T>;
compose<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, T>): java_util_function_Function<V, R>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_Function<T, V>;
apply(arg0: T): R;

  }
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.Locale' {
import { Object as java_lang_Object } from 'java.lang';
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { LanguageRange as java_util_Locale_LanguageRange } from 'java.util.Locale';

  export class LanguageRange extends java_lang_Object {
static MAX_WEIGHT: number;
static MIN_WEIGHT: number;
range: string;
weight: number;
hash: number;
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
}//@ts-nocheck

declare module 'java.util.Locale' {
import { FilteringMode as java_util_Locale_FilteringMode } from 'java.util.Locale';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FilteringMode extends java_lang_Enum<java_util_Locale_FilteringMode> {
static AUTOSELECT_FILTERING: java_util_Locale_FilteringMode;
static EXTENDED_FILTERING: java_util_Locale_FilteringMode;
static IGNORE_EXTENDED_RANGES: java_util_Locale_FilteringMode;
static MAP_EXTENDED_RANGES: java_util_Locale_FilteringMode;
static REJECT_EXTENDED_RANGES: java_util_Locale_FilteringMode;
static $VALUES: java_util_Locale_FilteringMode[];
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
}//@ts-nocheck

declare module 'java.util.Locale' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { LocaleObjectCache as sun_util_locale_LocaleObjectCache } from 'sun.util.locale';
import { Locale as java_util_Locale } from 'java.util';

  export class Cache extends sun_util_locale_LocaleObjectCache<java_lang_Object, java_util_Locale> {
class: java_lang_Class<java_lang_Object>;
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
}//@ts-nocheck

declare module 'java.util' {
import { Iterator as java_util_Iterator } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class Enumeration<E extends java_lang_Object> {

asIterator(): java_util_Iterator<E>;
hasMoreElements(): boolean;
nextElement(): E;

  }
}//@ts-nocheck

declare module 'java.util' {
import { IntStream as java_util_stream_IntStream, LongStream as java_util_stream_LongStream, DoubleStream as java_util_stream_DoubleStream } from 'java.util.stream';
import { AtomicLong as java_util_concurrent_atomic_AtomicLong } from 'java.util.concurrent.atomic';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';
import { Object as java_lang_Object } from 'java.lang';

  export class Random extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
seed: java_util_concurrent_atomic_AtomicLong;
static multiplier: number;
static addend: number;
static mask: number;
static DOUBLE_UNIT: number;
static BadBound: string;
static BadRange: string;
static BadSize: string;
static seedUniquifier: java_util_concurrent_atomic_AtomicLong;
nextNextGaussian: number;
haveNextNextGaussian: boolean;
static serialPersistentFields: java_io_ObjectStreamField[];
static unsafe: jdk_internal_misc_Unsafe;
static seedOffset: number;
setSeed(arg0: number): void;
nextLong(): number;
nextBoolean(): boolean;
nextFloat(): number;
nextGaussian(): number;
ints(): java_util_stream_IntStream;
ints(arg0: number): java_util_stream_IntStream;
ints(arg0: number, arg1: number): java_util_stream_IntStream;
ints(arg0: number, arg1: number, arg2: number): java_util_stream_IntStream;
longs(arg0: number, arg1: number, arg2: number): java_util_stream_LongStream;
longs(): java_util_stream_LongStream;
longs(arg0: number): java_util_stream_LongStream;
longs(arg0: number, arg1: number): java_util_stream_LongStream;
doubles(): java_util_stream_DoubleStream;
doubles(arg0: number, arg1: number, arg2: number): java_util_stream_DoubleStream;
doubles(arg0: number, arg1: number): java_util_stream_DoubleStream;
doubles(arg0: number): java_util_stream_DoubleStream;
nextBytes(arg0: number[]): void;
nextInt(arg0: number): number;
nextInt(): number;
nextDouble(): number;
constructor();
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.util.concurrent.atomic' {
import { LongUnaryOperator as java_util_function_LongUnaryOperator, LongBinaryOperator as java_util_function_LongBinaryOperator } from 'java.util.function';
import { Object as java_lang_Object, Class as java_lang_Class, Number as java_lang_Number } from 'java.lang';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AtomicLong extends java_lang_Number implements java_io_Serializable {
static serialVersionUID: number;
static VM_SUPPORTS_LONG_CAS: boolean;
static U: jdk_internal_misc_Unsafe;
static VALUE: number;
value: number;
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
getAndUpdate(arg0: java_util_function_LongUnaryOperator): number;
updateAndGet(arg0: java_util_function_LongUnaryOperator): number;
getAndAccumulate(arg0: number, arg1: java_util_function_LongBinaryOperator): number;
accumulateAndGet(arg0: number, arg1: java_util_function_LongBinaryOperator): number;
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
constructor();
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Enumeration as java_util_Enumeration, Set as java_util_Set, Map as java_util_Map, Properties as java_util_Properties, Hashtable as java_util_Hashtable } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { PrintStream as java_io_PrintStream, PrintWriter as java_io_PrintWriter, Reader as java_io_Reader, InputStream as java_io_InputStream, OutputStream as java_io_OutputStream, Writer as java_io_Writer } from 'java.io';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';

  export class Properties extends java_util_Hashtable<java_lang_Object, java_lang_Object> {
static serialVersionUID: number;
static UNSAFE: jdk_internal_misc_Unsafe;
defaults: java_util_Properties;
map: java_util_concurrent_ConcurrentHashMap<java_lang_Object, java_lang_Object>;
static hexDigit: string[];
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
store(arg0: java_io_Writer, arg1: string): void;
store(arg0: java_io_OutputStream, arg1: string): void;
loadFromXML(arg0: java_io_InputStream): void;
storeToXML(arg0: java_io_OutputStream, arg1: string, arg2: java_nio_charset_Charset): void;
storeToXML(arg0: java_io_OutputStream, arg1: string, arg2: string): void;
storeToXML(arg0: java_io_OutputStream, arg1: string): void;
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
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Enumeration as java_util_Enumeration, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Consumer as java_util_function_Consumer, Function as java_util_function_Function, ToDoubleBiFunction as java_util_function_ToDoubleBiFunction, DoubleBinaryOperator as java_util_function_DoubleBinaryOperator, ToLongBiFunction as java_util_function_ToLongBiFunction, LongBinaryOperator as java_util_function_LongBinaryOperator, ToIntBiFunction as java_util_function_ToIntBiFunction, IntBinaryOperator as java_util_function_IntBinaryOperator, ToDoubleFunction as java_util_function_ToDoubleFunction, ToLongFunction as java_util_function_ToLongFunction, ToIntFunction as java_util_function_ToIntFunction } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { KeySetView as java_util_concurrent_ConcurrentHashMap_KeySetView, Node as java_util_concurrent_ConcurrentHashMap_Node, CounterCell as java_util_concurrent_ConcurrentHashMap_CounterCell, ValuesView as java_util_concurrent_ConcurrentHashMap_ValuesView, EntrySetView as java_util_concurrent_ConcurrentHashMap_EntrySetView } from 'java.util.concurrent.ConcurrentHashMap';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';

  export class ConcurrentHashMap<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> implements java_util_concurrent_ConcurrentMap<K, V>, java_io_Serializable {
static serialVersionUID: number;
static MAXIMUM_CAPACITY: number;
static DEFAULT_CAPACITY: number;
static MAX_ARRAY_SIZE: number;
static DEFAULT_CONCURRENCY_LEVEL: number;
static LOAD_FACTOR: number;
static TREEIFY_THRESHOLD: number;
static UNTREEIFY_THRESHOLD: number;
static MIN_TREEIFY_CAPACITY: number;
static MIN_TRANSFER_STRIDE: number;
static RESIZE_STAMP_BITS: number;
static MAX_RESIZERS: number;
static RESIZE_STAMP_SHIFT: number;
static MOVED: number;
static TREEBIN: number;
static RESERVED: number;
static HASH_BITS: number;
static NCPU: number;
static serialPersistentFields: java_io_ObjectStreamField[];
table: java_util_concurrent_ConcurrentHashMap_Node<K, V>[];
nextTable: java_util_concurrent_ConcurrentHashMap_Node<K, V>[];
baseCount: number;
sizeCtl: number;
transferIndex: number;
cellsBusy: number;
counterCells: java_util_concurrent_ConcurrentHashMap_CounterCell[];
keySet: java_util_concurrent_ConcurrentHashMap_KeySetView<K, V>;
values: java_util_concurrent_ConcurrentHashMap_ValuesView<K, V>;
entrySet: java_util_concurrent_ConcurrentHashMap_EntrySetView<K, V>;
static U: jdk_internal_misc_Unsafe;
static SIZECTL: number;
static TRANSFERINDEX: number;
static BASECOUNT: number;
static CELLSBUSY: number;
static CELLVALUE: number;
static ABASE: number;
static ASHIFT: number;
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
forEach<U extends java_lang_Object>(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, U>, arg2: java_util_function_Consumer<java_lang_Object>): void;
forEach(arg0: number, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
keys(): java_util_Enumeration<K>;
containsValue(arg0: java_lang_Object): boolean;
keySet(arg0: V): java_util_concurrent_ConcurrentHashMap_KeySetView<K, V>;
keySet(): java_util_concurrent_ConcurrentHashMap_KeySetView<K, V>;
keySet(): java_util_Set;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
mappingCount(): number;
static newKeySet<K extends java_lang_Object>(arg0: number): java_util_concurrent_ConcurrentHashMap_KeySetView<K, java_lang_Boolean>;
static newKeySet<K extends java_lang_Object>(): java_util_concurrent_ConcurrentHashMap_KeySetView<K, java_lang_Boolean>;
search<U extends java_lang_Object>(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, U>): U;
reduce<U extends java_lang_Object>(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, U>, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, U>): U;
reduceToDouble(arg0: number, arg1: java_util_function_ToDoubleBiFunction<java_lang_Object, java_lang_Object>, arg2: number, arg3: java_util_function_DoubleBinaryOperator): number;
reduceToLong(arg0: number, arg1: java_util_function_ToLongBiFunction<java_lang_Object, java_lang_Object>, arg2: number, arg3: java_util_function_LongBinaryOperator): number;
reduceToInt(arg0: number, arg1: java_util_function_ToIntBiFunction<java_lang_Object, java_lang_Object>, arg2: number, arg3: java_util_function_IntBinaryOperator): number;
forEachKey<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_function_Consumer<java_lang_Object>): void;
forEachKey(arg0: number, arg1: java_util_function_Consumer<java_lang_Object>): void;
searchKeys<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_lang_Object, U>): U;
reduceKeys<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, U>): U;
reduceKeys(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, K>): K;
reduceKeysToDouble(arg0: number, arg1: java_util_function_ToDoubleFunction<java_lang_Object>, arg2: number, arg3: java_util_function_DoubleBinaryOperator): number;
reduceKeysToLong(arg0: number, arg1: java_util_function_ToLongFunction<java_lang_Object>, arg2: number, arg3: java_util_function_LongBinaryOperator): number;
reduceKeysToInt(arg0: number, arg1: java_util_function_ToIntFunction<java_lang_Object>, arg2: number, arg3: java_util_function_IntBinaryOperator): number;
forEachValue(arg0: number, arg1: java_util_function_Consumer<java_lang_Object>): void;
forEachValue<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_function_Consumer<java_lang_Object>): void;
searchValues<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_lang_Object, U>): U;
reduceValues<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, U>): U;
reduceValues(arg0: number, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
reduceValuesToDouble(arg0: number, arg1: java_util_function_ToDoubleFunction<java_lang_Object>, arg2: number, arg3: java_util_function_DoubleBinaryOperator): number;
reduceValuesToLong(arg0: number, arg1: java_util_function_ToLongFunction<java_lang_Object>, arg2: number, arg3: java_util_function_LongBinaryOperator): number;
reduceValuesToInt(arg0: number, arg1: java_util_function_ToIntFunction<java_lang_Object>, arg2: number, arg3: java_util_function_IntBinaryOperator): number;
forEachEntry<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_util_Map_Entry<K, V>, U>, arg2: java_util_function_Consumer<java_lang_Object>): void;
forEachEntry(arg0: number, arg1: java_util_function_Consumer<java_lang_Object>): void;
searchEntries<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_util_Map_Entry<K, V>, U>): U;
reduceEntries<U extends java_lang_Object>(arg0: number, arg1: java_util_function_Function<java_util_Map_Entry<K, V>, U>, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, U>): U;
reduceEntries(arg0: number, arg1: java_util_function_BiFunction<java_util_Map_Entry<K, V>, java_util_Map_Entry<K, V>, java_util_Map_Entry<K, V>>): java_util_Map_Entry<K, V>;
reduceEntriesToDouble(arg0: number, arg1: java_util_function_ToDoubleFunction<java_util_Map_Entry<K, V>>, arg2: number, arg3: java_util_function_DoubleBinaryOperator): number;
reduceEntriesToLong(arg0: number, arg1: java_util_function_ToLongFunction<java_util_Map_Entry<K, V>>, arg2: number, arg3: java_util_function_LongBinaryOperator): number;
reduceEntriesToInt(arg0: number, arg1: java_util_function_ToIntFunction<java_util_Map_Entry<K, V>>, arg2: number, arg3: java_util_function_IntBinaryOperator): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
constructor(arg0: number);
constructor(arg0: java_util_Map<K, V>);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number);
  }
}//@ts-nocheck

declare module 'java.util.concurrent.ConcurrentHashMap' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Consumer as java_util_function_Consumer, IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate } from 'java.util.function';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { CollectionView as java_util_concurrent_ConcurrentHashMap_CollectionView } from 'java.util.concurrent.ConcurrentHashMap';
import { Serializable as java_io_Serializable } from 'java.io';

  export class KeySetView<K extends java_lang_Object, V extends java_lang_Object> extends java_util_concurrent_ConcurrentHashMap_CollectionView<K, V, K> implements java_util_Set<K>, java_io_Serializable {
static serialVersionUID: number;
value: V;
mappedValue: V;
map: java_util_concurrent_ConcurrentHashMap;
class: java_lang_Class<java_lang_Object>;
getMappedValue(): V;
add(arg0: K): boolean;
remove(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
contains(arg0: java_lang_Object): boolean;
iterator(): java_util_Iterator<K>;
spliterator(): java_util_Spliterator<K>;
addAll(arg0: java_util_Collection<K>): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
removeAll(arg0: java_util_Collection): boolean;
getMap(): java_util_concurrent_ConcurrentHashMap;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.ConcurrentHashMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator, Collection as java_util_Collection, Spliterator as java_util_Spliterator } from 'java.util';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class CollectionView<K extends java_lang_Object, V extends java_lang_Object, E extends java_lang_Object> extends java_lang_Object implements java_util_Collection<E>, java_io_Serializable {
static serialVersionUID: number;
map: java_util_concurrent_ConcurrentHashMap<K, V>;
static OOME_MSG: string;
map: java_util_concurrent_ConcurrentHashMap<K, V>;
remove(arg0: java_lang_Object): boolean;
toString(): string;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
iterator(): java_util_Iterator<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
getMap(): java_util_concurrent_ConcurrentHashMap<K, V>;
add(arg0: E): boolean;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToDoubleBiFunction<T extends java_lang_Object, U extends java_lang_Object> {

applyAsDouble(arg0: T, arg1: U): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToLongBiFunction<T extends java_lang_Object, U extends java_lang_Object> {

applyAsLong(arg0: T, arg1: U): number;

  }
}//@ts-nocheck

declare module 'java.util.function' {
import { Object as java_lang_Object } from 'java.lang';

  export class ToIntBiFunction<T extends java_lang_Object, U extends java_lang_Object> {

applyAsInt(arg0: T, arg1: U): number;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.ConcurrentHashMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Node as java_util_concurrent_ConcurrentHashMap_Node } from 'java.util.concurrent.ConcurrentHashMap';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Node<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_Object implements java_util_Map_Entry<K, V> {
hash: number;
key: K;
val: V;
next: java_util_concurrent_ConcurrentHashMap_Node<K, V>;
value: V;
key: K;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getValue(): V;
getKey(): K;
setValue(arg0: V): V;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.ConcurrentHashMap' {
import { Object as java_lang_Object } from 'java.lang';

  export class CounterCell extends java_lang_Object {
value: number;


  }
}//@ts-nocheck

declare module 'java.util.concurrent.ConcurrentHashMap' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection } from 'java.util';
import { Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { CollectionView as java_util_concurrent_ConcurrentHashMap_CollectionView } from 'java.util.concurrent.ConcurrentHashMap';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ValuesView<K extends java_lang_Object, V extends java_lang_Object> extends java_util_concurrent_ConcurrentHashMap_CollectionView<K, V, V> implements java_util_Collection<V>, java_io_Serializable {
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
add(arg0: V): boolean;
remove(arg0: java_lang_Object): boolean;
contains(arg0: java_lang_Object): boolean;
iterator(): java_util_Iterator<V>;
spliterator(): java_util_Spliterator<V>;
addAll(arg0: java_util_Collection<V>): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
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

  }
}//@ts-nocheck

declare module 'java.util.concurrent.ConcurrentHashMap' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { CollectionView as java_util_concurrent_ConcurrentHashMap_CollectionView } from 'java.util.concurrent.ConcurrentHashMap';
import { Serializable as java_io_Serializable } from 'java.io';

  export class EntrySetView<K extends java_lang_Object, V extends java_lang_Object> extends java_util_concurrent_ConcurrentHashMap_CollectionView<K, V, java_util_Map_Entry<K, V>> implements java_util_Set<java_util_Map_Entry<K, V>>, java_io_Serializable {
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
add(arg0: java_lang_Object): boolean;
add(arg0: java_util_Map_Entry<K, V>): boolean;
remove(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
contains(arg0: java_lang_Object): boolean;
iterator(): java_util_Iterator<java_util_Map_Entry<K, V>>;
spliterator(): java_util_Spliterator<java_util_Map_Entry<K, V>>;
addAll(arg0: java_util_Collection<java_util_Map_Entry<K, V>>): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
parallelStream(): java_util_stream_Stream<E>;

  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';

  export class AbstractMap<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_Object implements java_util_Map<K, V> {
keySet: java_util_Set<K>;
values: java_util_Collection<V>;
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
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Collection as java_util_Collection, Enumeration as java_util_Enumeration, Set as java_util_Set, Map as java_util_Map, Dictionary as java_util_Dictionary } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Entry as java_util_Hashtable_Entry } from 'java.util.Hashtable';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Hashtable<K extends java_lang_Object, V extends java_lang_Object> extends java_util_Dictionary<K, V> implements java_util_Map<K, V>, java_lang_Cloneable, java_io_Serializable {
table: java_util_Hashtable_Entry<java_lang_Object, java_lang_Object>[];
count: number;
threshold: number;
loadFactor: number;
modCount: number;
static serialVersionUID: number;
static MAX_ARRAY_SIZE: number;
keySet: java_util_Set<K>;
entrySet: java_util_Set<java_util_Map_Entry<K, V>>;
values: java_util_Collection<V>;
static KEYS: number;
static VALUES: number;
static ENTRIES: number;
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
}//@ts-nocheck

declare module 'java.util.Hashtable' {
import { Object as java_lang_Object } from 'java.lang';
import { Entry as java_util_Hashtable_Entry } from 'java.util.Hashtable';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Entry<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_Object implements java_util_Map_Entry<K, V> {
hash: number;
key: K;
value: V;
next: java_util_Hashtable_Entry<K, V>;
value: V;
key: K;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getValue(): V;
getKey(): K;
setValue(arg0: V): V;

  }
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util' {
import { Date as java_util_Date } from 'java.util';
import { Instant as java_time_Instant } from 'java.time';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable, Comparable as java_lang_Comparable } from 'java.lang';
import { BaseCalendar as sun_util_calendar_BaseCalendar } from 'sun.util.calendar';
import { Date as sun_util_calendar_BaseCalendar_Date } from 'sun.util.calendar.BaseCalendar';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Date extends java_lang_Object implements java_io_Serializable, java_lang_Cloneable, java_lang_Comparable<java_util_Date> {
static gcal: sun_util_calendar_BaseCalendar;
static jcal: sun_util_calendar_BaseCalendar;
fastTime: number;
cdate: sun_util_calendar_BaseCalendar_Date;
static defaultCenturyStart: number;
static serialVersionUID: number;
static wtb: string[];
static ttb: number[];
seconds: number;
year: number;
time: number;
hours: number;
minutes: number;
month: number;
date: number;
day: number;
timezoneOffset: number;
before(arg0: java_util_Date): boolean;
after(arg0: java_util_Date): boolean;
getSeconds(): number;
toInstant(): java_time_Instant;
getYear(): number;
setTime(arg0: number): void;
getTime(): number;
setDate(arg0: number): void;
setHours(arg0: number): void;
getHours(): number;
getMinutes(): number;
setMonth(arg0: number): void;
setMinutes(arg0: number): void;
setSeconds(arg0: number): void;
getMonth(): number;
setYear(arg0: number): void;
getDate(): number;
getDay(): number;
toLocaleString(): string;
toGMTString(): string;
getTimezoneOffset(): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
compareTo(arg0: java_util_Date): number;
compareTo(arg0: java_lang_Object): number;
static from(arg0: java_time_Instant): java_util_Date;
static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
static parse(arg0: string): number;
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: string);
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);
  }
}//@ts-nocheck

declare module 'java.util.regex' {
import { CharSequence as java_lang_CharSequence, Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { Pattern as java_util_regex_Pattern, Matcher as java_util_regex_Matcher } from 'java.util.regex';
import { Node as java_util_regex_Pattern_Node, CharPredicate as java_util_regex_Pattern_CharPredicate, GroupHead as java_util_regex_Pattern_GroupHead } from 'java.util.regex.Pattern';
import { Map as java_util_Map, List as java_util_List } from 'java.util';
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
static ALL_FLAGS: number;
static serialVersionUID: number;
pattern: string;
flags: number;
flags0: number;
compiled: boolean;
normalizedPattern: string;
root: java_util_regex_Pattern_Node;
matchRoot: java_util_regex_Pattern_Node;
buffer: number[];
predicate: java_util_regex_Pattern_CharPredicate;
namedGroups: java_util_Map<string, java_lang_Integer>;
groupNodes: java_util_regex_Pattern_GroupHead[];
topClosureNodes: java_util_List<java_util_regex_Pattern_Node>;
localTCNCount: number;
hasGroupRef: boolean;
temp: number[];
capturingGroupCount: number;
localCount: number;
cursor: number;
patternLength: number;
hasSupplementary: boolean;
static MAX_REPS: number;
static lookbehindEnd: java_util_regex_Pattern_Node;
static accept: java_util_regex_Pattern_Node;
static lastAccept: java_util_regex_Pattern_Node;
static $assertionsDisabled: boolean;
static quote(arg0: string): string;
pattern(): string;
splitAsStream(arg0: java_lang_CharSequence): java_util_stream_Stream<string>;
asPredicate(): java_util_function_Predicate<string>;
asMatchPredicate(): java_util_function_Predicate<string>;
toString(): string;
flags(): number;
static matches(arg0: string, arg1: java_lang_CharSequence): boolean;
split(arg0: java_lang_CharSequence, arg1: number): string[];
split(arg0: java_lang_CharSequence): string[];
static compile(arg0: string, arg1: number): java_util_regex_Pattern;
static compile(arg0: string): java_util_regex_Pattern;
matcher(arg0: java_lang_CharSequence): java_util_regex_Matcher;

  }
}//@ts-nocheck

declare module 'java.util.regex' {
import { Matcher as java_util_regex_Matcher, Pattern as java_util_regex_Pattern, MatchResult as java_util_regex_MatchResult, IntHashSet as java_util_regex_IntHashSet } from 'java.util.regex';
import { StringBuilder as java_lang_StringBuilder, StringBuffer as java_lang_StringBuffer, CharSequence as java_lang_CharSequence, Object as java_lang_Object } from 'java.lang';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Function as java_util_function_Function } from 'java.util.function';

  export class Matcher extends java_lang_Object implements java_util_regex_MatchResult {
parentPattern: java_util_regex_Pattern;
groups: number[];
from: number;
to: number;
lookbehindTo: number;
text: java_lang_CharSequence;
static ENDANCHOR: number;
static NOANCHOR: number;
acceptMode: number;
first: number;
last: number;
oldLast: number;
lastAppendPosition: number;
locals: number[];
localsPos: java_util_regex_IntHashSet[];
hitEnd: boolean;
requireEnd: boolean;
transparentBounds: boolean;
anchoringBounds: boolean;
modCount: number;
region(arg0: number, arg1: number): java_util_regex_Matcher;
pattern(): java_util_regex_Pattern;
appendReplacement(arg0: java_lang_StringBuilder, arg1: string): java_util_regex_Matcher;
appendReplacement(arg0: java_lang_StringBuffer, arg1: string): java_util_regex_Matcher;
appendTail(arg0: java_lang_StringBuilder): java_lang_StringBuilder;
appendTail(arg0: java_lang_StringBuffer): java_lang_StringBuffer;
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
group(arg0: number): string;
group(arg0: string): string;
group(): string;
toString(): string;
matches(): boolean;
replaceFirst(arg0: java_util_function_Function<java_util_regex_MatchResult, string>): string;
replaceFirst(arg0: string): string;
replaceAll(arg0: string): string;
replaceAll(arg0: java_util_function_Function<java_util_regex_MatchResult, string>): string;
end(): number;
end(arg0: number): number;
end(arg0: string): number;
start(arg0: string): number;
start(arg0: number): number;
start(): number;
reset(arg0: java_lang_CharSequence): java_util_regex_Matcher;
reset(): java_util_regex_Matcher;
find(): boolean;
find(arg0: number): boolean;

  }
}//@ts-nocheck

declare module 'java.util.regex' {


  export class MatchResult {

groupCount(): number;
group(): string;
group(arg0: number): string;
end(arg0: number): number;
end(): number;
start(arg0: number): number;
start(): number;

  }
}//@ts-nocheck

declare module 'java.util.regex' {
import { Object as java_lang_Object } from 'java.lang';

  export class IntHashSet extends java_lang_Object {
entries: number[];
hashes: number[];
pos: number;
add(arg0: number): void;
clear(): void;
contains(arg0: number): boolean;
constructor();
  }
}//@ts-nocheck

declare module 'java.util.regex.Pattern' {
import { Node as java_util_regex_Pattern_Node } from 'java.util.regex.Pattern';
import { Object as java_lang_Object } from 'java.lang';

  export class Node extends java_lang_Object {
next: java_util_regex_Pattern_Node;


  }
}//@ts-nocheck

declare module 'java.util.regex.Pattern' {
import { CharPredicate as java_util_regex_Pattern_CharPredicate } from 'java.util.regex.Pattern';

  export class CharPredicate {

and(arg0: java_util_regex_Pattern_CharPredicate): java_util_regex_Pattern_CharPredicate;
negate(): java_util_regex_Pattern_CharPredicate;
union(arg0: java_util_regex_Pattern_CharPredicate, arg1: java_util_regex_Pattern_CharPredicate): java_util_regex_Pattern_CharPredicate;
union(arg0: java_util_regex_Pattern_CharPredicate): java_util_regex_Pattern_CharPredicate;
is(arg0: number): boolean;

  }
}//@ts-nocheck

declare module 'java.util.regex.Pattern' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { GroupTail as java_util_regex_Pattern_GroupTail, Node as java_util_regex_Pattern_Node } from 'java.util.regex.Pattern';

  export class GroupHead extends java_util_regex_Pattern_Node {
localIndex: number;
tail: java_util_regex_Pattern_GroupTail;
class: java_lang_Class<java_lang_Object>;
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

declare module 'java.util.regex.Pattern' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Node as java_util_regex_Pattern_Node } from 'java.util.regex.Pattern';

  export class GroupTail extends java_util_regex_Pattern_Node {
localIndex: number;
groupIndex: number;
class: java_lang_Class<java_lang_Object>;
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

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { UnaryOperator as java_util_function_UnaryOperator, Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { List as java_util_List, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, Comparator as java_util_Comparator, ListIterator as java_util_ListIterator, AbstractList as java_util_AbstractList, RandomAccess as java_util_RandomAccess } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ArrayList<E extends java_lang_Object> extends java_util_AbstractList<E> implements java_util_List<E>, java_util_RandomAccess, java_lang_Cloneable, java_io_Serializable {
static serialVersionUID: number;
static DEFAULT_CAPACITY: number;
static EMPTY_ELEMENTDATA: java_lang_Object[];
static DEFAULTCAPACITY_EMPTY_ELEMENTDATA: java_lang_Object[];
elementData: java_lang_Object[];
size: number;
static MAX_ARRAY_SIZE: number;
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
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
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
listIterator(): java_util_ListIterator<E>;
listIterator(arg0: number): java_util_ListIterator<E>;
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
constructor(arg0: number);
constructor(arg0: java_util_Collection<E>);
constructor();
  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { List as java_util_List, Iterator as java_util_Iterator, Collection as java_util_Collection, ListIterator as java_util_ListIterator, Spliterator as java_util_Spliterator, Comparator as java_util_Comparator, AbstractCollection as java_util_AbstractCollection } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer, UnaryOperator as java_util_function_UnaryOperator } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class AbstractList<E extends java_lang_Object> extends java_util_AbstractCollection<E> implements java_util_List<E> {
modCount: number;
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
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator, Collection as java_util_Collection, Spliterator as java_util_Spliterator } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class AbstractCollection<E extends java_lang_Object> extends java_lang_Object implements java_util_Collection<E> {
static MAX_ARRAY_SIZE: number;
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
}//@ts-nocheck

declare module 'java.util' {


  export class RandomAccess {



  }
}//@ts-nocheck

declare module 'java.util' {
import { Locale as java_util_Locale, TimeZone as java_util_TimeZone, Date as java_util_Date } from 'java.util';
import { ZoneId as java_time_ZoneId } from 'java.time';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class TimeZone extends java_lang_Object implements java_io_Serializable, java_lang_Cloneable {
static SHORT: number;
static LONG: number;
static ONE_MINUTE: number;
static ONE_HOUR: number;
static ONE_DAY: number;
static serialVersionUID: number;
static NO_TIMEZONE: java_util_TimeZone;
ID: string;
zoneId: java_time_ZoneId;
static defaultTimeZone: java_util_TimeZone;
static GMT_ID: string;
static GMT_ID_LENGTH: number;
static $assertionsDisabled: boolean;
displayName: string;
displayName: string;
displayName: string;
displayName: string;
iD: string;
dSTSavings: number;
rawOffset: number;
static availableIDs: string[];
static availableIDs: string[];
static default: java_util_TimeZone;
static timeZone: java_util_TimeZone;
static timeZone: java_util_TimeZone;
offset: number;
offset: number;
getDisplayName(arg0: java_util_Locale): string;
getDisplayName(): string;
getDisplayName(arg0: boolean, arg1: number, arg2: java_util_Locale): string;
getDisplayName(arg0: boolean, arg1: number): string;
static setDefault(arg0: java_util_TimeZone): void;
getID(): string;
toZoneId(): java_time_ZoneId;
getDSTSavings(): number;
hasSameRules(arg0: java_util_TimeZone): boolean;
getRawOffset(): number;
setRawOffset(arg0: number): void;
setID(arg0: string): void;
useDaylightTime(): boolean;
observesDaylightTime(): boolean;
inDaylightTime(arg0: java_util_Date): boolean;
static getAvailableIDs(): string[];
static getAvailableIDs(arg0: number): string[];
clone(): java_lang_Object;
static getDefault(): java_util_TimeZone;
static getTimeZone(arg0: string): java_util_TimeZone;
static getTimeZone(arg0: java_time_ZoneId): java_util_TimeZone;
getOffset(arg0: number): number;
getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
constructor();
  }
}//@ts-nocheck

declare module 'java.util' {
import { Iterator as java_util_Iterator, NavigableSet as java_util_NavigableSet, SortedSet as java_util_SortedSet, Spliterator as java_util_Spliterator, Comparator as java_util_Comparator, Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class NavigableSet<E extends java_lang_Object> implements java_util_SortedSet<E> {

pollLast(): E;
descendingIterator(): java_util_Iterator<E>;
pollFirst(): E;
ceiling(arg0: E): E;
higher(arg0: E): E;
subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): java_util_NavigableSet<E>;
subSet(arg0: E, arg1: E): java_util_SortedSet<E>;
headSet(arg0: E): java_util_SortedSet<E>;
headSet(arg0: E, arg1: boolean): java_util_NavigableSet<E>;
tailSet(arg0: E): java_util_SortedSet<E>;
tailSet(arg0: E, arg1: boolean): java_util_NavigableSet<E>;
descendingSet(): java_util_NavigableSet<E>;
iterator(): java_util_Iterator<E>;
lower(arg0: E): E;
floor(arg0: E): E;
last(): E;
spliterator(): java_util_Spliterator<E>;
first(): E;
comparator(): java_util_Comparator<java_lang_Object>;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray<T extends java_lang_Object>(arg0: T[]): T[];
toArray(): java_lang_Object[];
addAll(arg0: java_util_Collection<E>): boolean;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'java.util' {
import { SortedSet as java_util_SortedSet, Spliterator as java_util_Spliterator, Comparator as java_util_Comparator, Iterator as java_util_Iterator, Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class SortedSet<E extends java_lang_Object> implements java_util_Set<E> {

subSet(arg0: E, arg1: E): java_util_SortedSet<E>;
headSet(arg0: E): java_util_SortedSet<E>;
tailSet(arg0: E): java_util_SortedSet<E>;
last(): E;
spliterator(): java_util_Spliterator<E>;
first(): E;
comparator(): java_util_Comparator<java_lang_Object>;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
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
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'java.util' {
import { SortedMap as java_util_SortedMap, Collection as java_util_Collection, Set as java_util_Set, Comparator as java_util_Comparator, Map as java_util_Map } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Object as java_lang_Object } from 'java.lang';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';

  export class SortedMap<K extends java_lang_Object, V extends java_lang_Object> implements java_util_Map<K, V> {
orDefault: V;
firstKey(): K;
lastKey(): K;
subMap(arg0: K, arg1: K): java_util_SortedMap<K, V>;
headMap(arg0: K): java_util_SortedMap<K, V>;
tailMap(arg0: K): java_util_SortedMap<K, V>;
values(): java_util_Collection<V>;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
keySet(): java_util_Set<K>;
comparator(): java_util_Comparator<java_lang_Object>;
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
}//@ts-nocheck

declare module 'java.util.concurrent.atomic' {
import { IntUnaryOperator as java_util_function_IntUnaryOperator, IntBinaryOperator as java_util_function_IntBinaryOperator } from 'java.util.function';
import { Object as java_lang_Object, Class as java_lang_Class, Number as java_lang_Number } from 'java.lang';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AtomicInteger extends java_lang_Number implements java_io_Serializable {
static serialVersionUID: number;
static U: jdk_internal_misc_Unsafe;
static VALUE: number;
value: number;
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
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Duration as java_time_Duration } from 'java.time';
import { Object as java_lang_Object, Thread as java_lang_Thread, Class as java_lang_Class, Enum as java_lang_Enum } from 'java.lang';
import { ChronoUnit as java_time_temporal_ChronoUnit } from 'java.time.temporal';

  export class TimeUnit extends java_lang_Enum<java_util_concurrent_TimeUnit> {
static NANOSECONDS: java_util_concurrent_TimeUnit;
static MICROSECONDS: java_util_concurrent_TimeUnit;
static MILLISECONDS: java_util_concurrent_TimeUnit;
static SECONDS: java_util_concurrent_TimeUnit;
static MINUTES: java_util_concurrent_TimeUnit;
static HOURS: java_util_concurrent_TimeUnit;
static DAYS: java_util_concurrent_TimeUnit;
static NANO_SCALE: number;
static MICRO_SCALE: number;
static MILLI_SCALE: number;
static SECOND_SCALE: number;
static MINUTE_SCALE: number;
static HOUR_SCALE: number;
static DAY_SCALE: number;
scale: number;
maxNanos: number;
maxMicros: number;
maxMillis: number;
maxSecs: number;
microRatio: number;
milliRatio: number;
secRatio: number;
static $VALUES: java_util_concurrent_TimeUnit[];
class: java_lang_Class<java_lang_Object>;
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
static values(): java_util_concurrent_TimeUnit[];
static valueOf(arg0: string): java_util_concurrent_TimeUnit;
static of(arg0: java_time_temporal_ChronoUnit): java_util_concurrent_TimeUnit;
sleep(arg0: number): void;
toNanos(arg0: number): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Runnable as java_lang_Runnable, Thread as java_lang_Thread } from 'java.lang';

  export class ThreadFactory {

newThread(arg0: java_lang_Runnable): java_lang_Thread;

  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';
import { Callable as java_util_concurrent_Callable, TimeUnit as java_util_concurrent_TimeUnit, Future as java_util_concurrent_Future, Executor as java_util_concurrent_Executor } from 'java.util.concurrent';
import { Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';

  export class ExecutorService implements java_util_concurrent_Executor {

invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>, arg1: number, arg2: java_util_concurrent_TimeUnit): java_util_List<java_util_concurrent_Future<T>>;
invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): java_util_List<java_util_concurrent_Future<T>>;
shutdownNow(): java_util_List<java_lang_Runnable>;
isTerminated(): boolean;
awaitTermination(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
submit<T extends java_lang_Object>(arg0: java_lang_Runnable, arg1: T): java_util_concurrent_Future<T>;
submit(arg0: java_lang_Runnable): java_util_concurrent_Future<java_lang_Object>;
submit<T extends java_lang_Object>(arg0: java_util_concurrent_Callable<T>): java_util_concurrent_Future<T>;
invokeAny<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): T;
invokeAny<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>, arg1: number, arg2: java_util_concurrent_TimeUnit): T;
shutdown(): void;
isShutdown(): boolean;
execute(arg0: java_lang_Runnable): void;

  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Object as java_lang_Object } from 'java.lang';

  export class Callable<V extends java_lang_Object> {

call(): V;

  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Object as java_lang_Object } from 'java.lang';

  export class Future<V extends java_lang_Object> {

isDone(): boolean;
cancel(arg0: boolean): boolean;
isCancelled(): boolean;
get(): V;
get(arg0: number, arg1: java_util_concurrent_TimeUnit): V;

  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Runnable as java_lang_Runnable } from 'java.lang';

  export class Executor {

execute(arg0: java_lang_Runnable): void;

  }
}//@ts-nocheck

declare module 'java.util' {
import { IOException as java_io_IOException, PrintStream as java_io_PrintStream, File as java_io_File, OutputStream as java_io_OutputStream, Closeable as java_io_Closeable, Flushable as java_io_Flushable } from 'java.io';
import { Locale as java_util_Locale, Formatter as java_util_Formatter } from 'java.util';
import { Object as java_lang_Object, Appendable as java_lang_Appendable } from 'java.lang';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';

  export class Formatter extends java_lang_Object implements java_io_Closeable, java_io_Flushable {
a: java_lang_Appendable;
l: java_util_Locale;
lastException: java_io_IOException;
zero: string;
static scaleUp: number;
static MAX_FD_CHARS: number;
static formatSpecifier: string;
static fsPattern: java_util_regex_Pattern;
ioException(): java_io_IOException;
toString(): string;
locale(): java_util_Locale;
format(arg0: string, ...arg1: java_lang_Object[]): java_util_Formatter;
format(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_util_Formatter;
out(): java_lang_Appendable;
flush(): void;
close(): void;
constructor(arg0: java_io_PrintStream);
constructor(arg0: java_io_File, arg1: java_nio_charset_Charset, arg2: java_util_Locale);
constructor(arg0: java_io_File, arg1: string, arg2: java_util_Locale);
constructor(arg0: java_io_File, arg1: string);
constructor(arg0: java_io_File);
constructor(arg0: java_io_OutputStream);
constructor(arg0: java_io_OutputStream, arg1: java_nio_charset_Charset, arg2: java_util_Locale);
constructor(arg0: java_io_OutputStream, arg1: string, arg2: java_util_Locale);
constructor(arg0: java_io_OutputStream, arg1: string);
constructor(arg0: java_util_Locale);
constructor(arg0: java_lang_Appendable);
constructor();
constructor(arg0: string, arg1: java_nio_charset_Charset, arg2: java_util_Locale);
constructor(arg0: string, arg1: string, arg2: java_util_Locale);
constructor(arg0: string, arg1: string);
constructor(arg0: string);
constructor(arg0: java_lang_Appendable, arg1: java_util_Locale);
  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Node as java_util_HashMap_Node } from 'java.util.HashMap';
import { Serializable as java_io_Serializable } from 'java.io';

  export class HashMap<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> implements java_util_Map<K, V>, java_lang_Cloneable, java_io_Serializable {
static serialVersionUID: number;
static DEFAULT_INITIAL_CAPACITY: number;
static MAXIMUM_CAPACITY: number;
static DEFAULT_LOAD_FACTOR: number;
static TREEIFY_THRESHOLD: number;
static UNTREEIFY_THRESHOLD: number;
static MIN_TREEIFY_CAPACITY: number;
table: java_util_HashMap_Node<K, V>[];
entrySet: java_util_Set<java_util_Map_Entry<K, V>>;
size: number;
modCount: number;
threshold: number;
loadFactor: number;
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
}//@ts-nocheck

declare module 'java.util.HashMap' {
import { Object as java_lang_Object } from 'java.lang';
import { Node as java_util_HashMap_Node } from 'java.util.HashMap';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Node<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_Object implements java_util_Map_Entry<K, V> {
hash: number;
key: K;
value: V;
next: java_util_HashMap_Node<K, V>;
value: V;
key: K;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getValue(): V;
getKey(): K;
setValue(arg0: V): V;

  }
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.stream' {
import { Function as java_util_function_Function, BiConsumer as java_util_function_BiConsumer, Supplier as java_util_function_Supplier, BinaryOperator as java_util_function_BinaryOperator } from 'java.util.function';
import { Set as java_util_Set } from 'java.util';
import { Characteristics as java_util_stream_Collector_Characteristics } from 'java.util.stream.Collector';
import { Collector as java_util_stream_Collector } from 'java.util.stream';
import { Object as java_lang_Object } from 'java.lang';

  export class Collector<T extends java_lang_Object, A extends java_lang_Object, R extends java_lang_Object> {

finisher(): java_util_function_Function<A, R>;
accumulator(): java_util_function_BiConsumer<A, T>;
characteristics(): java_util_Set<java_util_stream_Collector_Characteristics>;
static of<T extends java_lang_Object, R extends java_lang_Object>(arg0: java_util_function_Supplier<R>, arg1: java_util_function_BiConsumer<R, T>, arg2: java_util_function_BinaryOperator<R>, ...arg3: java_util_stream_Collector_Characteristics[]): java_util_stream_Collector<T, R, R>;
static of<T extends java_lang_Object, A extends java_lang_Object, R extends java_lang_Object>(arg0: java_util_function_Supplier<A>, arg1: java_util_function_BiConsumer<A, T>, arg2: java_util_function_BinaryOperator<A>, arg3: java_util_function_Function<A, R>, ...arg4: java_util_stream_Collector_Characteristics[]): java_util_stream_Collector<T, A, R>;
combiner(): java_util_function_BinaryOperator<A>;
supplier(): java_util_function_Supplier<A>;

  }
}//@ts-nocheck

declare module 'java.util.stream.Collector' {
import { Characteristics as java_util_stream_Collector_Characteristics } from 'java.util.stream.Collector';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Characteristics extends java_lang_Enum<java_util_stream_Collector_Characteristics> {
static CONCURRENT: java_util_stream_Collector_Characteristics;
static UNORDERED: java_util_stream_Collector_Characteristics;
static IDENTITY_FINISH: java_util_stream_Collector_Characteristics;
static $VALUES: java_util_stream_Collector_Characteristics[];
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
}//@ts-nocheck

declare module 'java.util.function' {
import { Comparator as java_util_Comparator } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { BinaryOperator as java_util_function_BinaryOperator, Function as java_util_function_Function, BiFunction as java_util_function_BiFunction } from 'java.util.function';

  export class BinaryOperator<T extends java_lang_Object> implements java_util_function_BiFunction<T, T, T> {

static maxBy<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_function_BinaryOperator<T>;
static minBy<T extends java_lang_Object>(arg0: java_util_Comparator<java_lang_Object>): java_util_function_BinaryOperator<T>;
andThen<V extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, V>): java_util_function_BiFunction<T, U, V>;
apply(arg0: T, arg1: U): R;

  }
}//@ts-nocheck

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
elementData: java_lang_Object[];
elementCount: number;
capacityIncrement: number;
static serialVersionUID: number;
static MAX_ARRAY_SIZE: number;
class: java_lang_Class<java_lang_Object>;
copyInto(arg0: java_lang_Object[]): void;
setSize(arg0: number): void;
firstElement(): E;
lastElement(): E;
setElementAt(arg0: E, arg1: number): void;
removeElementAt(arg0: number): void;
insertElementAt(arg0: E, arg1: number): void;
removeElement(arg0: java_lang_Object): boolean;
removeAllElements(): void;
elementAt(arg0: number): E;
add(arg0: number, arg1: E): void;
add(arg0: E): boolean;
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
indexOf(arg0: java_lang_Object, arg1: number): number;
indexOf(arg0: java_lang_Object): number;
clear(): void;
isEmpty(): boolean;
lastIndexOf(arg0: java_lang_Object, arg1: number): number;
lastIndexOf(arg0: java_lang_Object): number;
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
listIterator(): java_util_ListIterator<E>;
listIterator(arg0: number): java_util_ListIterator<E>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
parallelStream(): java_util_stream_Stream<E>;
constructor(arg0: number, arg1: number);
constructor(arg0: java_util_Collection<E>);
constructor(arg0: number);
/** Construct the vector with all components as 0. */
constructor();
  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator, Collection as java_util_Collection, Spliterator as java_util_Spliterator, Queue as java_util_Queue } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Deque<E extends java_lang_Object> implements java_util_Queue<E> {
first: E;
last: E;
offerFirst(arg0: E): boolean;
offerLast(arg0: E): boolean;
removeFirst(): E;
removeLast(): E;
pollLast(): E;
getFirst(): E;
getLast(): E;
peekFirst(): E;
peekLast(): E;
removeFirstOccurrence(arg0: java_lang_Object): boolean;
removeLastOccurrence(arg0: java_lang_Object): boolean;
offer(arg0: E): boolean;
pop(): E;
descendingIterator(): java_util_Iterator<E>;
push(arg0: E): void;
addLast(arg0: E): void;
pollFirst(): E;
addFirst(arg0: E): void;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
remove(): E;
contains(arg0: java_lang_Object): boolean;
size(): number;
iterator(): java_util_Iterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
poll(): E;
peek(): E;
element(): E;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clear(): void;
isEmpty(): boolean;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class Queue<E extends java_lang_Object> implements java_util_Collection<E> {

offer(arg0: E): boolean;
add(arg0: E): boolean;
remove(): E;
poll(): E;
peek(): E;
element(): E;
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
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Entry as java_util_WeakHashMap_Entry } from 'java.util.WeakHashMap';
import { ReferenceQueue as java_lang_ref_ReferenceQueue } from 'java.lang.ref';

  export class WeakHashMap<K extends java_lang_Object, V extends java_lang_Object> extends java_util_AbstractMap<K, V> implements java_util_Map<K, V> {
static DEFAULT_INITIAL_CAPACITY: number;
static MAXIMUM_CAPACITY: number;
static DEFAULT_LOAD_FACTOR: number;
table: java_util_WeakHashMap_Entry<K, V>[];
size: number;
threshold: number;
loadFactor: number;
queue: java_lang_ref_ReferenceQueue<java_lang_Object>;
modCount: number;
static NULL_KEY: java_lang_Object;
entrySet: java_util_Set<java_util_Map_Entry<K, V>>;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: K, arg1: V): V;
values(): java_util_Collection<V>;
clear(): void;
isEmpty(): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
entrySet(): java_util_Set<java_util_Map_Entry<K, V>>;
putAll(arg0: java_util_Map<K, V>): void;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
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
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
constructor();
constructor(arg0: java_util_Map<K, V>);
constructor(arg0: number);
constructor(arg0: number, arg1: number);
  }
}//@ts-nocheck

declare module 'java.util.WeakHashMap' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entry as java_util_WeakHashMap_Entry } from 'java.util.WeakHashMap';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';
import { Entry as java_util_Map_Entry } from 'java.util.Map';

  export class Entry<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_ref_WeakReference<java_lang_Object> implements java_util_Map_Entry<K, V> {
value: V;
hash: number;
next: java_util_WeakHashMap_Entry<K, V>;
value: V;
key: K;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getValue(): V;
getKey(): K;
setValue(arg0: V): V;
get(): T;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
static reachabilityFence(arg0: java_lang_Object): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.util.logging' {
import { Supplier as java_util_function_Supplier } from 'java.util.function';
import { Logger as java_util_logging_Logger, Filter as java_util_logging_Filter, Level as java_util_logging_Level, Handler as java_util_logging_Handler, LogRecord as java_util_logging_LogRecord, LogManager as java_util_logging_LogManager } from 'java.util.logging';
import { ResourceBundle as java_util_ResourceBundle, Locale as java_util_Locale, ArrayList as java_util_ArrayList } from 'java.util';
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Module as java_lang_Module } from 'java.lang';
import { LoggerBundle as java_util_logging_Logger_LoggerBundle, ConfigurationData as java_util_logging_Logger_ConfigurationData } from 'java.util.logging.Logger';
import { LoggerWeakRef as java_util_logging_LogManager_LoggerWeakRef } from 'java.util.logging.LogManager';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';

  export class Logger extends java_lang_Object {
static emptyHandlers: java_util_logging_Handler[];
static offValue: number;
static SYSTEM_LOGGER_RB_NAME: string;
static SYSTEM_BUNDLE: java_util_logging_Logger_LoggerBundle;
static NO_RESOURCE_BUNDLE: java_util_logging_Logger_LoggerBundle;
config: java_util_logging_Logger_ConfigurationData;
manager: java_util_logging_LogManager;
name: string;
loggerBundle: java_util_logging_Logger_LoggerBundle;
anonymous: boolean;
catalog: java_util_ResourceBundle;
catalogName: string;
catalogLocale: java_util_Locale;
static treeLock: java_lang_Object;
parent: java_util_logging_Logger;
kids: java_util_ArrayList<java_util_logging_LogManager_LoggerWeakRef>;
callerModuleRef: java_lang_ref_WeakReference<java_lang_Module>;
isSystemLogger: boolean;
static GLOBAL_LOGGER_NAME: string;
static global: java_util_logging_Logger;
static global: java_util_logging_Logger;
static anonymousLogger: java_util_logging_Logger;
static anonymousLogger: java_util_logging_Logger;
resourceBundle: java_util_ResourceBundle;
resourceBundleName: string;
filter: java_util_logging_Filter;
level: java_util_logging_Level;
handlers: java_util_logging_Handler[];
useParentHandlers: boolean;
name: string;
parent: java_util_logging_Logger;
static logger: java_util_logging_Logger;
static logger: java_util_logging_Logger;
warning(arg0: java_util_function_Supplier<string>): void;
warning(arg0: string): void;
config(arg0: string): void;
config(arg0: java_util_function_Supplier<string>): void;
static getGlobal(): java_util_logging_Logger;
static getAnonymousLogger(): java_util_logging_Logger;
static getAnonymousLogger(arg0: string): java_util_logging_Logger;
getResourceBundle(): java_util_ResourceBundle;
getResourceBundleName(): string;
setFilter(arg0: java_util_logging_Filter): void;
getFilter(): java_util_logging_Filter;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Object): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_function_Supplier<string>): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_lang_Throwable, arg4: java_util_function_Supplier<string>): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Throwable): void;
logp(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Object[]): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_ResourceBundle, arg4: string, arg5: java_lang_Throwable): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: java_lang_Throwable): void;
logrb(arg0: java_util_logging_Level, arg1: java_util_ResourceBundle, arg2: string, ...arg3: java_lang_Object[]): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: java_util_ResourceBundle, arg4: string, ...arg5: java_lang_Object[]): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: java_lang_Object): void;
logrb(arg0: java_util_logging_Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: java_lang_Object[]): void;
logrb(arg0: java_util_logging_Level, arg1: java_util_ResourceBundle, arg2: string, arg3: java_lang_Throwable): void;
entering(arg0: string, arg1: string, arg2: java_lang_Object): void;
entering(arg0: string, arg1: string): void;
entering(arg0: string, arg1: string, arg2: java_lang_Object[]): void;
exiting(arg0: string, arg1: string): void;
exiting(arg0: string, arg1: string, arg2: java_lang_Object): void;
throwing(arg0: string, arg1: string, arg2: java_lang_Throwable): void;
severe(arg0: java_util_function_Supplier<string>): void;
severe(arg0: string): void;
fine(arg0: java_util_function_Supplier<string>): void;
fine(arg0: string): void;
finer(arg0: java_util_function_Supplier<string>): void;
finer(arg0: string): void;
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
log(arg0: java_util_logging_Level, arg1: string, arg2: java_lang_Object[]): void;
log(arg0: java_util_logging_Level, arg1: string, arg2: java_lang_Object): void;
log(arg0: java_util_logging_Level, arg1: java_util_function_Supplier<string>): void;
log(arg0: java_util_logging_Level, arg1: string): void;
log(arg0: java_util_logging_LogRecord): void;
log(arg0: java_util_logging_Level, arg1: java_lang_Throwable, arg2: java_util_function_Supplier<string>): void;
log(arg0: java_util_logging_Level, arg1: string, arg2: java_lang_Throwable): void;
getName(): string;
info(arg0: string): void;
info(arg0: java_util_function_Supplier<string>): void;
getParent(): java_util_logging_Logger;
static getLogger(arg0: string): java_util_logging_Logger;
static getLogger(arg0: string, arg1: string): java_util_logging_Logger;
setParent(arg0: java_util_logging_Logger): void;

  }
}//@ts-nocheck

declare module 'java.util' {
import { Enumeration as java_util_Enumeration, Locale as java_util_Locale, ResourceBundle as java_util_ResourceBundle, Set as java_util_Set } from 'java.util';
import { Module as java_lang_Module, ClassLoader as java_lang_ClassLoader, Object as java_lang_Object } from 'java.lang';
import { Control as java_util_ResourceBundle_Control, CacheKey as java_util_ResourceBundle_CacheKey, BundleReference as java_util_ResourceBundle_BundleReference } from 'java.util.ResourceBundle';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { ReferenceQueue as java_lang_ref_ReferenceQueue } from 'java.lang.ref';

  export class ResourceBundle extends java_lang_Object {
static INITIAL_CACHE_SIZE: number;
static NONEXISTENT_BUNDLE: java_util_ResourceBundle;
static cacheList: java_util_concurrent_ConcurrentMap<java_util_ResourceBundle_CacheKey, java_util_ResourceBundle_BundleReference>;
static referenceQueue: java_lang_ref_ReferenceQueue<java_lang_Object>;
parent: java_util_ResourceBundle;
locale: java_util_Locale;
name: string;
expired: boolean;
cacheKey: java_util_ResourceBundle_CacheKey;
keySet: java_util_Set<string>;
static UNKNOWN_FORMAT: string;
static TRACE_ON: boolean;
static $assertionsDisabled: boolean;
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
object: java_lang_Object;
getString(arg0: string): string;
getKeys(): java_util_Enumeration<string>;
getBaseBundleName(): string;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_Module): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_ResourceBundle_Control): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_lang_Module): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_util_ResourceBundle_Control): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_ClassLoader): java_util_ResourceBundle;
static getBundle(arg0: string, arg1: java_util_Locale, arg2: java_lang_ClassLoader, arg3: java_util_ResourceBundle_Control): java_util_ResourceBundle;
static getBundle(arg0: string): java_util_ResourceBundle;
getLocale(): java_util_Locale;
getStringArray(arg0: string): string[];
static clearCache(arg0: java_lang_ClassLoader): void;
static clearCache(): void;
getObject(arg0: string): java_lang_Object;
containsKey(arg0: string): boolean;
keySet(): java_util_Set<string>;
constructor();
  }
}//@ts-nocheck

declare module 'java.util.ResourceBundle' {
import { List as java_util_List, Locale as java_util_Locale, ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Control as java_util_ResourceBundle_Control } from 'java.util.ResourceBundle';
import { ClassLoader as java_lang_ClassLoader, Object as java_lang_Object } from 'java.lang';
import { CandidateListCache as java_util_ResourceBundle_Control_CandidateListCache } from 'java.util.ResourceBundle.Control';

  export class Control extends java_lang_Object {
static FORMAT_DEFAULT: java_util_List<string>;
static FORMAT_CLASS: java_util_List<string>;
static FORMAT_PROPERTIES: java_util_List<string>;
static TTL_DONT_CACHE: number;
static TTL_NO_EXPIRATION_CONTROL: number;
static INSTANCE: java_util_ResourceBundle_Control;
static CANDIDATES_CACHE: java_util_ResourceBundle_Control_CandidateListCache;
static noFallbackControl: java_util_ResourceBundle_Control;
formats: java_util_List<string>;
fallbackLocale: java_util_Locale;
timeToLive: number;
static control: java_util_ResourceBundle_Control;
candidateLocales: java_util_List<java_util_Locale>;
toResourceName(arg0: string, arg1: string): string;
static getNoFallbackControl(arg0: java_util_List<string>): java_util_ResourceBundle_Control;
getFormats(arg0: string): java_util_List<string>;
getFallbackLocale(arg0: string, arg1: java_util_Locale): java_util_Locale;
newBundle(arg0: string, arg1: java_util_Locale, arg2: string, arg3: java_lang_ClassLoader, arg4: boolean): java_util_ResourceBundle;
getTimeToLive(arg0: string, arg1: java_util_Locale): number;
needsReload(arg0: string, arg1: java_util_Locale, arg2: string, arg3: java_lang_ClassLoader, arg4: java_util_ResourceBundle, arg5: number): boolean;
toBundleName(arg0: string, arg1: java_util_Locale): string;
static getControl(arg0: java_util_List<string>): java_util_ResourceBundle_Control;
getCandidateLocales(arg0: string, arg1: java_util_Locale): java_util_List<java_util_Locale>;

  }
}//@ts-nocheck

declare module 'java.util.ResourceBundle.Control' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { LocaleObjectCache as sun_util_locale_LocaleObjectCache, BaseLocale as sun_util_locale_BaseLocale } from 'sun.util.locale';
import { List as java_util_List, Locale as java_util_Locale } from 'java.util';

  export class CandidateListCache extends sun_util_locale_LocaleObjectCache<sun_util_locale_BaseLocale, java_util_List<java_util_Locale>> {
class: java_lang_Class<java_lang_Object>;
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

declare module 'java.util.ResourceBundle' {
import { Object as java_lang_Object, Module as java_lang_Module, Throwable as java_lang_Throwable, Boolean as java_lang_Boolean } from 'java.lang';
import { Locale as java_util_Locale, ServiceLoader as java_util_ServiceLoader } from 'java.util';
import { KeyElementReference as java_util_ResourceBundle_KeyElementReference } from 'java.util.ResourceBundle';
import { ResourceBundleProvider as java_util_spi_ResourceBundleProvider } from 'java.util.spi';

  export class CacheKey extends java_lang_Object {
name: string;
locale: java_util_Locale;
moduleRef: java_util_ResourceBundle_KeyElementReference<java_lang_Module>;
callerRef: java_util_ResourceBundle_KeyElementReference<java_lang_Module>;
modulesHash: number;
format: string;
loadTime: number;
expirationTime: number;
cause: java_lang_Throwable;
providers: java_util_ServiceLoader<java_util_spi_ResourceBundleProvider>;
providersChecked: boolean;
callerHasProvider: java_lang_Boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;

  }
}//@ts-nocheck

declare module 'java.util.ResourceBundle' {
import { CacheKey as java_util_ResourceBundle_CacheKey, CacheKeyReference as java_util_ResourceBundle_CacheKeyReference } from 'java.util.ResourceBundle';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';

  export class KeyElementReference<T extends java_lang_Object> extends java_lang_ref_WeakReference<T> implements java_util_ResourceBundle_CacheKeyReference {
cacheKey: java_util_ResourceBundle_CacheKey;
cacheKey: java_util_ResourceBundle_CacheKey;
class: java_lang_Class<java_lang_Object>;
getCacheKey(): java_util_ResourceBundle_CacheKey;
get(): T;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
static reachabilityFence(arg0: java_lang_Object): void;
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

declare module 'java.util.ResourceBundle' {
import { CacheKey as java_util_ResourceBundle_CacheKey } from 'java.util.ResourceBundle';

  export class CacheKeyReference {
cacheKey: java_util_ResourceBundle_CacheKey;
getCacheKey(): java_util_ResourceBundle_CacheKey;

  }
}//@ts-nocheck

declare module 'java.util' {
import { Optional as java_util_Optional, ServiceLoader as java_util_ServiceLoader, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, List as java_util_List } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object, ModuleLayer as java_lang_ModuleLayer, ClassLoader as java_lang_ClassLoader, Iterable as java_lang_Iterable } from 'java.lang';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Provider as java_util_ServiceLoader_Provider } from 'java.util.ServiceLoader';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { AccessControlContext as java_security_AccessControlContext } from 'java.security';
import { JavaLangAccess as jdk_internal_misc_JavaLangAccess } from 'jdk.internal.misc';

  export class ServiceLoader<S extends java_lang_Object> extends java_lang_Object implements java_lang_Iterable<S> {
service: java_lang_Class<S>;
serviceName: string;
layer: java_lang_ModuleLayer;
loader: java_lang_ClassLoader;
acc: java_security_AccessControlContext;
lookupIterator1: java_util_Iterator<java_util_ServiceLoader_Provider<S>>;
instantiatedProviders: java_util_List<S>;
lookupIterator2: java_util_Iterator<java_util_ServiceLoader_Provider<S>>;
loadedProviders: java_util_List<java_util_ServiceLoader_Provider<S>>;
loadedAllProviders: boolean;
reloadCount: number;
static LANG_ACCESS: jdk_internal_misc_JavaLangAccess;
static $assertionsDisabled: boolean;
findFirst(): java_util_Optional<S>;
static loadInstalled<S extends java_lang_Object>(arg0: java_lang_Class<S>): java_util_ServiceLoader<S>;
reload(): void;
toString(): string;
iterator(): java_util_Iterator<S>;
stream(): java_util_stream_Stream<java_util_ServiceLoader_Provider<S>>;
static load<S extends java_lang_Object>(arg0: java_lang_Class<S>): java_util_ServiceLoader<S>;
static load<S extends java_lang_Object>(arg0: java_lang_ModuleLayer, arg1: java_lang_Class<S>): java_util_ServiceLoader<S>;
static load<S extends java_lang_Object>(arg0: java_lang_Class<S>, arg1: java_lang_ClassLoader): java_util_ServiceLoader<S>;
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'java.util.ServiceLoader' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Supplier as java_util_function_Supplier } from 'java.util.function';

  export class Provider<S extends java_lang_Object> implements java_util_function_Supplier<S> {

get(): S;
type(): java_lang_Class<S>;

  }
}//@ts-nocheck

declare module 'java.util.spi' {
import { Locale as java_util_Locale, ResourceBundle as java_util_ResourceBundle } from 'java.util';

  export class ResourceBundleProvider {
bundle: java_util_ResourceBundle;
getBundle(arg0: string, arg1: java_util_Locale): java_util_ResourceBundle;

  }
}//@ts-nocheck

declare module 'java.util.ResourceBundle' {
import { CacheKey as java_util_ResourceBundle_CacheKey, CacheKeyReference as java_util_ResourceBundle_CacheKeyReference } from 'java.util.ResourceBundle';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SoftReference as java_lang_ref_SoftReference } from 'java.lang.ref';
import { ResourceBundle as java_util_ResourceBundle } from 'java.util';

  export class BundleReference extends java_lang_ref_SoftReference<java_util_ResourceBundle> implements java_util_ResourceBundle_CacheKeyReference {
cacheKey: java_util_ResourceBundle_CacheKey;
cacheKey: java_util_ResourceBundle_CacheKey;
class: java_lang_Class<java_lang_Object>;
getCacheKey(): java_util_ResourceBundle_CacheKey;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
static reachabilityFence(arg0: java_lang_Object): void;
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

declare module 'java.util.logging' {
import { LogRecord as java_util_logging_LogRecord } from 'java.util.logging';

  export class Filter {

isLoggable(arg0: java_util_logging_LogRecord): boolean;

  }
}//@ts-nocheck

declare module 'java.util.logging' {
import { ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Level as java_util_logging_Level } from 'java.util.logging';
import { Object as java_lang_Object, Throwable as java_lang_Throwable, ThreadLocal as java_lang_ThreadLocal, Integer as java_lang_Integer } from 'java.lang';
import { Instant as java_time_Instant } from 'java.time';
import { AtomicLong as java_util_concurrent_atomic_AtomicLong, AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';

  export class LogRecord extends java_lang_Object implements java_io_Serializable {
static globalSequenceNumber: java_util_concurrent_atomic_AtomicLong;
static MIN_SEQUENTIAL_THREAD_ID: number;
static nextThreadId: java_util_concurrent_atomic_AtomicInteger;
static threadIds: java_lang_ThreadLocal<java_lang_Integer>;
level: java_util_logging_Level;
sequenceNumber: number;
sourceClassName: string;
sourceMethodName: string;
message: string;
threadID: number;
thrown: java_lang_Throwable;
loggerName: string;
resourceBundleName: string;
instant: java_time_Instant;
static serialPersistentFields: java_io_ObjectStreamField[];
needToInferCaller: boolean;
parameters: java_lang_Object[];
resourceBundle: java_util_ResourceBundle;
static serialVersionUID: number;
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
message: string;
parameters: java_lang_Object[];
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
getMessage(): string;
getParameters(): java_lang_Object[];
constructor(arg0: java_util_logging_Level, arg1: string);
  }
}//@ts-nocheck

declare module 'java.util.logging' {
import { Object as java_lang_Object } from 'java.lang';
import { Level as java_util_logging_Level } from 'java.util.logging';
import { Locale as java_util_Locale } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Level extends java_lang_Object implements java_io_Serializable {
static defaultBundle: string;
name: string;
value: number;
resourceBundleName: string;
localizedLevelName: string;
cachedLocale: java_util_Locale;
static OFF: java_util_logging_Level;
static SEVERE: java_util_logging_Level;
static WARNING: java_util_logging_Level;
static INFO: java_util_logging_Level;
static CONFIG: java_util_logging_Level;
static FINE: java_util_logging_Level;
static FINER: java_util_logging_Level;
static FINEST: java_util_logging_Level;
static ALL: java_util_logging_Level;
static standardLevels: java_util_logging_Level[];
static serialVersionUID: number;
resourceBundleName: string;
localizedName: string;
name: string;
getResourceBundleName(): string;
getLocalizedName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
intValue(): number;
getName(): string;
static parse(arg0: string): java_util_logging_Level;

  }
}//@ts-nocheck

declare module 'java.util.logging' {
import { LogRecord as java_util_logging_LogRecord, Filter as java_util_logging_Filter, Level as java_util_logging_Level, Formatter as java_util_logging_Formatter, ErrorManager as java_util_logging_ErrorManager, LogManager as java_util_logging_LogManager } from 'java.util.logging';
import { Object as java_lang_Object } from 'java.lang';

  export class Handler extends java_lang_Object {
static offValue: number;
manager: java_util_logging_LogManager;
filter: java_util_logging_Filter;
formatter: java_util_logging_Formatter;
logLevel: java_util_logging_Level;
errorManager: java_util_logging_ErrorManager;
encoding: string;
filter: java_util_logging_Filter;
level: java_util_logging_Level;
formatter: java_util_logging_Formatter;
errorManager: java_util_logging_ErrorManager;
encoding: string;
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
flush(): void;
close(): void;
getEncoding(): string;

  }
}//@ts-nocheck

declare module 'java.util.logging' {
import { Handler as java_util_logging_Handler, LogRecord as java_util_logging_LogRecord } from 'java.util.logging';
import { Object as java_lang_Object } from 'java.lang';

  export class Formatter extends java_lang_Object {
head: string;
tail: string;
getHead(arg0: java_util_logging_Handler): string;
getTail(arg0: java_util_logging_Handler): string;
formatMessage(arg0: java_util_logging_LogRecord): string;
format(arg0: java_util_logging_LogRecord): string;

  }
}//@ts-nocheck

declare module 'java.util.logging' {
import { Exception as java_lang_Exception, Object as java_lang_Object } from 'java.lang';

  export class ErrorManager extends java_lang_Object {
reported: boolean;
static GENERIC_FAILURE: number;
static WRITE_FAILURE: number;
static FLUSH_FAILURE: number;
static CLOSE_FAILURE: number;
static OPEN_FAILURE: number;
static FORMAT_FAILURE: number;
error(arg0: string, arg1: java_lang_Exception, arg2: number): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.util.logging' {
import { LogManager as java_util_logging_LogManager, Logger as java_util_logging_Logger, LoggingMXBean as java_util_logging_LoggingMXBean, Level as java_util_logging_Level } from 'java.util.logging';
import { Enumeration as java_util_Enumeration, Properties as java_util_Properties, Map as java_util_Map, WeakHashMap as java_util_WeakHashMap } from 'java.util';
import { InputStream as java_io_InputStream } from 'java.io';
import { Function as java_util_function_Function, BiFunction as java_util_function_BiFunction } from 'java.util.function';
import { Runnable as java_lang_Runnable, Object as java_lang_Object } from 'java.lang';
import { LoggerContext as java_util_logging_LogManager_LoggerContext, CloseOnReset as java_util_logging_LogManager_CloseOnReset } from 'java.util.logging.LogManager';
import { ReentrantLock as java_util_concurrent_locks_ReentrantLock } from 'java.util.concurrent.locks';
import { CopyOnWriteArrayList as java_util_concurrent_CopyOnWriteArrayList } from 'java.util.concurrent';
import { ReferenceQueue as java_lang_ref_ReferenceQueue } from 'java.lang.ref';
import { Permission as java_security_Permission } from 'java.security';

  export class LogManager extends java_lang_Object {
static manager: java_util_logging_LogManager;
props: java_util_Properties;
static defaultLevel: java_util_logging_Level;
systemContext: java_util_logging_LogManager_LoggerContext;
userContext: java_util_logging_LogManager_LoggerContext;
rootLogger: java_util_logging_Logger;
readPrimordialConfiguration: boolean;
static STATE_INITIALIZED: number;
static STATE_INITIALIZING: number;
static STATE_READING_CONFIG: number;
static STATE_UNINITIALIZED: number;
static STATE_SHUTDOWN: number;
globalHandlersState: number;
configurationLock: java_util_concurrent_locks_ReentrantLock;
closeOnResetLoggers: java_util_concurrent_CopyOnWriteArrayList<java_util_logging_LogManager_CloseOnReset>;
listeners: java_util_Map<java_lang_Object, java_lang_Runnable>;
initializedCalled: boolean;
initializationDone: boolean;
contextsMap: java_util_WeakHashMap<java_lang_Object, java_util_logging_LogManager_LoggerContext>;
loggerRefQueue: java_lang_ref_ReferenceQueue<java_util_logging_Logger>;
static MAX_ITERATIONS: number;
static controlPermission: java_security_Permission;
static LOGGING_MXBEAN_NAME: string;
static $assertionsDisabled: boolean;
static logManager: java_util_logging_LogManager;
loggerNames: java_util_Enumeration<string>;
static loggingMXBean: java_util_logging_LoggingMXBean;
property: string;
logger: java_util_logging_Logger;
static getLogManager(): java_util_logging_LogManager;
addLogger(arg0: java_util_logging_Logger): boolean;
getLoggerNames(): java_util_Enumeration<string>;
readConfiguration(arg0: java_io_InputStream): void;
readConfiguration(): void;
updateConfiguration(arg0: java_io_InputStream, arg1: java_util_function_Function<string, java_util_function_BiFunction<string, string, string>>): void;
updateConfiguration(arg0: java_util_function_Function<string, java_util_function_BiFunction<string, string, string>>): void;
static getLoggingMXBean(): java_util_logging_LoggingMXBean;
addConfigurationListener(arg0: java_lang_Runnable): java_util_logging_LogManager;
removeConfigurationListener(arg0: java_lang_Runnable): void;
getProperty(arg0: string): string;
getLogger(arg0: string): java_util_logging_Logger;
checkAccess(): void;
reset(): void;

  }
}//@ts-nocheck

declare module 'java.util.logging' {
import { List as java_util_List } from 'java.util';

  export class LoggingMXBean {
loggerNames: java_util_List<string>;
loggerLevel: string;
parentLoggerName: string;
getLoggerNames(): java_util_List<string>;
getLoggerLevel(arg0: string): string;
setLoggerLevel(arg0: string, arg1: string): void;
getParentLoggerName(arg0: string): string;

  }
}//@ts-nocheck

declare module 'java.util.logging.LogManager' {
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';
import { LoggerWeakRef as java_util_logging_LogManager_LoggerWeakRef, LogNode as java_util_logging_LogManager_LogNode } from 'java.util.logging.LogManager';
import { LogManager as java_util_logging_LogManager } from 'java.util.logging';
import { Object as java_lang_Object } from 'java.lang';

  export class LoggerContext extends java_lang_Object {
namedLoggers: java_util_concurrent_ConcurrentHashMap<string, java_util_logging_LogManager_LoggerWeakRef>;
root: java_util_logging_LogManager_LogNode;
static $assertionsDisabled: boolean;
this$0: java_util_logging_LogManager;


  }
}//@ts-nocheck

declare module 'java.util.logging.LogManager' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { LogNode as java_util_logging_LogManager_LogNode } from 'java.util.logging.LogManager';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';
import { Logger as java_util_logging_Logger, LogManager as java_util_logging_LogManager } from 'java.util.logging';

  export class LoggerWeakRef extends java_lang_ref_WeakReference<java_util_logging_Logger> {
name: string;
node: java_util_logging_LogManager_LogNode;
parentRef: java_lang_ref_WeakReference<java_util_logging_Logger>;
disposed: boolean;
this$0: java_util_logging_LogManager;
class: java_lang_Class<java_lang_Object>;
get(): T;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
static reachabilityFence(arg0: java_lang_Object): void;
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

declare module 'java.util.logging.LogManager' {
import { HashMap as java_util_HashMap } from 'java.util';
import { LogNode as java_util_logging_LogManager_LogNode, LoggerWeakRef as java_util_logging_LogManager_LoggerWeakRef, LoggerContext as java_util_logging_LogManager_LoggerContext } from 'java.util.logging.LogManager';
import { Object as java_lang_Object } from 'java.lang';

  export class LogNode extends java_lang_Object {
children: java_util_HashMap<string, java_util_logging_LogManager_LogNode>;
loggerRef: java_util_logging_LogManager_LoggerWeakRef;
parent: java_util_logging_LogManager_LogNode;
context: java_util_logging_LogManager_LoggerContext;


  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Condition as java_util_concurrent_locks_Condition, Lock as java_util_concurrent_locks_Lock } from 'java.util.concurrent.locks';
import { Thread as java_lang_Thread, Object as java_lang_Object } from 'java.lang';
import { Sync as java_util_concurrent_locks_ReentrantLock_Sync } from 'java.util.concurrent.locks.ReentrantLock';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ReentrantLock extends java_lang_Object implements java_util_concurrent_locks_Lock, java_io_Serializable {
static serialVersionUID: number;
sync: java_util_concurrent_locks_ReentrantLock_Sync;
holdCount: number;
queueLength: number;
waitQueueLength: number;
lock(): void;
toString(): string;
lockInterruptibly(): void;
tryLock(): boolean;
tryLock(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
unlock(): void;
newCondition(): java_util_concurrent_locks_Condition;
getHoldCount(): number;
isHeldByCurrentThread(): boolean;
isLocked(): boolean;
isFair(): boolean;
hasQueuedThreads(): boolean;
hasQueuedThread(arg0: java_lang_Thread): boolean;
getQueueLength(): number;
hasWaiters(arg0: java_util_concurrent_locks_Condition): boolean;
getWaitQueueLength(arg0: java_util_concurrent_locks_Condition): number;
constructor();
constructor(arg0: boolean);
  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Date as java_util_Date } from 'java.util';

  export class Condition {

signal(): void;
awaitNanos(arg0: number): number;
signalAll(): void;
awaitUninterruptibly(): void;
await(): void;
await(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
awaitUntil(arg0: java_util_Date): boolean;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks.ReentrantLock' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AbstractQueuedSynchronizer as java_util_concurrent_locks_AbstractQueuedSynchronizer } from 'java.util.concurrent.locks';

  export class Sync extends java_util_concurrent_locks_AbstractQueuedSynchronizer {
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks' {
import { Thread as java_lang_Thread, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection } from 'java.util';
import { ConditionObject as java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject, Node as java_util_concurrent_locks_AbstractQueuedSynchronizer_Node } from 'java.util.concurrent.locks.AbstractQueuedSynchronizer';
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';
import { AbstractOwnableSynchronizer as java_util_concurrent_locks_AbstractOwnableSynchronizer } from 'java.util.concurrent.locks';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AbstractQueuedSynchronizer extends java_util_concurrent_locks_AbstractOwnableSynchronizer implements java_io_Serializable {
static serialVersionUID: number;
head: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
tail: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
state: number;
static SPIN_FOR_TIMEOUT_THRESHOLD: number;
static STATE: java_lang_invoke_VarHandle;
static HEAD: java_lang_invoke_VarHandle;
static TAIL: java_lang_invoke_VarHandle;
firstQueuedThread: java_lang_Thread;
exclusiveQueuedThreads: java_util_Collection<java_lang_Thread>;
sharedQueuedThreads: java_util_Collection<java_lang_Thread>;
queueLength: number;
queuedThreads: java_util_Collection<java_lang_Thread>;
waitQueueLength: number;
waitingThreads: java_util_Collection<java_lang_Thread>;
class: java_lang_Class<java_lang_Object>;
acquireShared(arg0: number): void;
acquireSharedInterruptibly(arg0: number): void;
tryAcquireSharedNanos(arg0: number, arg1: number): boolean;
releaseShared(arg0: number): boolean;
hasContended(): boolean;
getFirstQueuedThread(): java_lang_Thread;
hasQueuedPredecessors(): boolean;
getExclusiveQueuedThreads(): java_util_Collection<java_lang_Thread>;
getSharedQueuedThreads(): java_util_Collection<java_lang_Thread>;
owns(arg0: java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject): boolean;
toString(): string;
release(arg0: number): boolean;
hasQueuedThreads(): boolean;
getQueueLength(): number;
getQueuedThreads(): java_util_Collection<java_lang_Thread>;
hasWaiters(arg0: java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject): boolean;
getWaitQueueLength(arg0: java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject): number;
getWaitingThreads(arg0: java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject): java_util_Collection<java_lang_Thread>;
acquire(arg0: number): void;
acquireInterruptibly(arg0: number): void;
tryAcquireNanos(arg0: number, arg1: number): boolean;
isQueued(arg0: java_lang_Thread): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks.AbstractQueuedSynchronizer' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Date as java_util_Date } from 'java.util';
import { AbstractQueuedSynchronizer as java_util_concurrent_locks_AbstractQueuedSynchronizer, Condition as java_util_concurrent_locks_Condition } from 'java.util.concurrent.locks';
import { Node as java_util_concurrent_locks_AbstractQueuedSynchronizer_Node } from 'java.util.concurrent.locks.AbstractQueuedSynchronizer';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ConditionObject extends java_lang_Object implements java_util_concurrent_locks_Condition, java_io_Serializable {
static serialVersionUID: number;
firstWaiter: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
lastWaiter: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
static REINTERRUPT: number;
static THROW_IE: number;
this$0: java_util_concurrent_locks_AbstractQueuedSynchronizer;
signal(): void;
awaitNanos(arg0: number): number;
signalAll(): void;
awaitUninterruptibly(): void;
await(): void;
await(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
awaitUntil(arg0: java_util_Date): boolean;
constructor(arg0: java_util_concurrent_locks_AbstractQueuedSynchronizer);
  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks.AbstractQueuedSynchronizer' {
import { Node as java_util_concurrent_locks_AbstractQueuedSynchronizer_Node } from 'java.util.concurrent.locks.AbstractQueuedSynchronizer';
import { Thread as java_lang_Thread, Object as java_lang_Object } from 'java.lang';
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';

  export class Node extends java_lang_Object {
static SHARED: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
static EXCLUSIVE: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
static CANCELLED: number;
static SIGNAL: number;
static CONDITION: number;
static PROPAGATE: number;
waitStatus: number;
prev: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
next: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
thread: java_lang_Thread;
nextWaiter: java_util_concurrent_locks_AbstractQueuedSynchronizer_Node;
static NEXT: java_lang_invoke_VarHandle;
static PREV: java_lang_invoke_VarHandle;
static THREAD: java_lang_invoke_VarHandle;
static WAITSTATUS: java_lang_invoke_VarHandle;


  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks' {
import { Thread as java_lang_Thread, Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AbstractOwnableSynchronizer extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
exclusiveOwnerThread: java_lang_Thread;


  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Condition as java_util_concurrent_locks_Condition } from 'java.util.concurrent.locks';

  export class Lock {

lock(): void;
lockInterruptibly(): void;
tryLock(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
tryLock(): boolean;
unlock(): void;
newCondition(): java_util_concurrent_locks_Condition;

  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Collection as java_util_Collection, List as java_util_List, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Comparator as java_util_Comparator, ListIterator as java_util_ListIterator, RandomAccess as java_util_RandomAccess } from 'java.util';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { UnaryOperator as java_util_function_UnaryOperator, Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class CopyOnWriteArrayList<E extends java_lang_Object> extends java_lang_Object implements java_util_List<E>, java_util_RandomAccess, java_lang_Cloneable, java_io_Serializable {
static serialVersionUID: number;
lock: java_lang_Object;
array: java_lang_Object[];
addIfAbsent(arg0: E): boolean;
addAllAbsent(arg0: java_util_Collection<E>): number;
add(arg0: number, arg1: E): void;
add(arg0: E): boolean;
remove(arg0: number): E;
remove(arg0: java_lang_Object): boolean;
get(arg0: number): E;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
indexOf(arg0: java_lang_Object): number;
indexOf(arg0: E, arg1: number): number;
clear(): void;
isEmpty(): boolean;
lastIndexOf(arg0: java_lang_Object): number;
lastIndexOf(arg0: E, arg1: number): number;
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
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
listIterator(arg0: number): java_util_ListIterator<E>;
listIterator(): java_util_ListIterator<E>;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
parallelStream(): java_util_stream_Stream<E>;
constructor(arg0: java_util_Collection<E>);
constructor(arg0: E[]);
constructor();
  }
}//@ts-nocheck

declare module 'java.util.logging.LogManager' {
import { Logger as java_util_logging_Logger } from 'java.util.logging';
import { Object as java_lang_Object } from 'java.lang';
import { CloseOnReset as java_util_logging_LogManager_CloseOnReset } from 'java.util.logging.LogManager';

  export class CloseOnReset extends java_lang_Object {
logger: java_util_logging_Logger;
get(): java_util_logging_Logger;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static create(arg0: java_util_logging_Logger): java_util_logging_LogManager_CloseOnReset;

  }
}//@ts-nocheck

declare module 'java.util.logging.Logger' {
import { ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class LoggerBundle extends java_lang_Object {
resourceBundleName: string;
userBundle: java_util_ResourceBundle;


  }
}//@ts-nocheck

declare module 'java.util.logging.Logger' {
import { ConfigurationData as java_util_logging_Logger_ConfigurationData } from 'java.util.logging.Logger';
import { Filter as java_util_logging_Filter, Level as java_util_logging_Level, Handler as java_util_logging_Handler } from 'java.util.logging';
import { CopyOnWriteArrayList as java_util_concurrent_CopyOnWriteArrayList } from 'java.util.concurrent';
import { Object as java_lang_Object } from 'java.lang';

  export class ConfigurationData extends java_lang_Object {
delegate: java_util_logging_Logger_ConfigurationData;
useParentHandlers: boolean;
filter: java_util_logging_Filter;
levelObject: java_util_logging_Level;
levelValue: number;
handlers: java_util_concurrent_CopyOnWriteArrayList<java_util_logging_Handler>;


  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { UUID as java_util_UUID } from 'java.util';
import { JavaLangAccess as jdk_internal_misc_JavaLangAccess } from 'jdk.internal.misc';
import { Serializable as java_io_Serializable } from 'java.io';

  export class UUID extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_util_UUID> {
static serialVersionUID: number;
mostSigBits: number;
leastSigBits: number;
static jla: jdk_internal_misc_JavaLangAccess;
static $assertionsDisabled: boolean;
leastSignificantBits: number;
mostSignificantBits: number;
variant(): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
version(): number;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_util_UUID): number;
timestamp(): number;
node(): number;
static randomUUID(): java_util_UUID;
static nameUUIDFromBytes(arg0: number[]): java_util_UUID;
getLeastSignificantBits(): number;
getMostSignificantBits(): number;
clockSequence(): number;
static fromString(arg0: string): java_util_UUID;
constructor(arg0: number, arg1: number);
  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable, Enum as java_lang_Enum } from 'java.lang';
import { Collection as java_util_Collection, EnumMap as java_util_EnumMap, Set as java_util_Set, Map as java_util_Map, AbstractMap as java_util_AbstractMap } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Serializable as java_io_Serializable } from 'java.io';

  export class EnumMap<K extends java_lang_Enum<K>, V extends java_lang_Object> extends java_util_AbstractMap<K, V> implements java_io_Serializable, java_lang_Cloneable {
keyType: java_lang_Class<K>;
keyUniverse: K[];
vals: java_lang_Object[];
size: number;
static NULL: java_lang_Object;
entrySet: java_util_Set<java_util_Map_Entry<K, V>>;
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
remove(arg0: java_lang_Object): V;
get(arg0: java_lang_Object): V;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
put(arg0: K, arg1: V): V;
equals(arg0: java_lang_Object): boolean;
values(): java_util_Collection<V>;
hashCode(): number;
clone(): java_util_EnumMap<K, V>;
clone(): java_lang_Object;
clear(): void;
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
constructor(arg0: java_util_Map<K, V>);
constructor(arg0: java_util_EnumMap<K, V>);
constructor(arg0: java_lang_Class<K>);
  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class EventObject extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
source: java_lang_Object;
source: java_lang_Object;
toString(): string;
getSource(): java_lang_Object;
constructor(arg0: java_lang_Object);
  }
}//@ts-nocheck

declare module 'java.util' {


  export class EventListener {



  }
}//@ts-nocheck

declare module 'java.util.concurrent.atomic' {
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AtomicBoolean extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
static VALUE: java_lang_invoke_VarHandle;
value: number;
opaque: boolean;
acquire: boolean;
andSet: boolean;
plain: boolean;
get(): boolean;
toString(): string;
set(arg0: boolean): void;
getOpaque(): boolean;
setOpaque(arg0: boolean): void;
getAcquire(): boolean;
setRelease(arg0: boolean): void;
compareAndSet(arg0: boolean, arg1: boolean): boolean;
compareAndExchange(arg0: boolean, arg1: boolean): boolean;
compareAndExchangeAcquire(arg0: boolean, arg1: boolean): boolean;
compareAndExchangeRelease(arg0: boolean, arg1: boolean): boolean;
weakCompareAndSetPlain(arg0: boolean, arg1: boolean): boolean;
weakCompareAndSet(arg0: boolean, arg1: boolean): boolean;
weakCompareAndSetAcquire(arg0: boolean, arg1: boolean): boolean;
weakCompareAndSetRelease(arg0: boolean, arg1: boolean): boolean;
getAndSet(arg0: boolean): boolean;
lazySet(arg0: boolean): void;
getPlain(): boolean;
setPlain(arg0: boolean): void;
weakCompareAndSetVolatile(arg0: boolean, arg1: boolean): boolean;
constructor(arg0: boolean);
constructor();
  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { TimeUnit as java_util_concurrent_TimeUnit, Delayed as java_util_concurrent_Delayed } from 'java.util.concurrent';
import { Comparable as java_lang_Comparable } from 'java.lang';

  export class Delayed implements java_lang_Comparable<java_util_concurrent_Delayed> {
delay: number;
getDelay(arg0: java_util_concurrent_TimeUnit): number;
compareTo(arg0: T): number;

  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { CompletableFuture as java_util_concurrent_CompletableFuture, TimeUnit as java_util_concurrent_TimeUnit, CompletionStage as java_util_concurrent_CompletionStage, Executor as java_util_concurrent_Executor, Future as java_util_concurrent_Future } from 'java.util.concurrent';
import { Object as java_lang_Object, Void as java_lang_Void, Throwable as java_lang_Throwable, Runnable as java_lang_Runnable } from 'java.lang';
import { BiFunction as java_util_function_BiFunction, Function as java_util_function_Function, Consumer as java_util_function_Consumer, BiConsumer as java_util_function_BiConsumer, Supplier as java_util_function_Supplier } from 'java.util.function';
import { Completion as java_util_concurrent_CompletableFuture_Completion, AltResult as java_util_concurrent_CompletableFuture_AltResult } from 'java.util.concurrent.CompletableFuture';
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';

  export class CompletableFuture<T extends java_lang_Object> extends java_lang_Object implements java_util_concurrent_Future<T>, java_util_concurrent_CompletionStage<T> {
result: java_lang_Object;
stack: java_util_concurrent_CompletableFuture_Completion;
static NIL: java_util_concurrent_CompletableFuture_AltResult;
static USE_COMMON_POOL: boolean;
static ASYNC_POOL: java_util_concurrent_Executor;
static SYNC: number;
static ASYNC: number;
static NESTED: number;
static RESULT: java_lang_invoke_VarHandle;
static STACK: java_lang_invoke_VarHandle;
static NEXT: java_lang_invoke_VarHandle;
now: T;
numberOfDependents: number;
complete(arg0: T): boolean;
isDone(): boolean;
static allOf(...arg0: java_util_concurrent_CompletableFuture<java_lang_Object>[]): java_util_concurrent_CompletableFuture<java_lang_Void>;
cancel(arg0: boolean): boolean;
isCancelled(): boolean;
completeExceptionally(arg0: java_lang_Throwable): boolean;
get(arg0: number, arg1: java_util_concurrent_TimeUnit): T;
get(): T;
toString(): string;
join(): T;
copy(): java_util_concurrent_CompletableFuture<T>;
handle(arg0: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
handle<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletableFuture<U>;
static runAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
static runAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
getNow(arg0: T): T;
thenApply<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
thenApply(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
thenApplyAsync(arg0: java_util_function_Function, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenApplyAsync(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
thenAcceptAsync(arg0: java_util_function_Consumer): java_util_concurrent_CompletionStage;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage;
thenRunAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage;
thenRunAsync(arg0: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenRunAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenRunAsync(arg0: java_lang_Runnable, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenCombine<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletableFuture<V>;
thenCombine(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<V>;
thenCombineAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenCombineAsync<U extends java_lang_Object, V extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): java_util_concurrent_CompletableFuture<V>;
thenCombineAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
thenAcceptBoth(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
thenAcceptBoth<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
thenAcceptBothAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<U>, arg1: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
thenAcceptBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_BiConsumer, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
runAfterBoth(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterBoth(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
runAfterBothAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
applyToEither(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function): java_util_concurrent_CompletionStage;
applyToEither<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
applyToEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
applyToEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Function): java_util_concurrent_CompletionStage;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletableFuture<U>;
acceptEither(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer): java_util_concurrent_CompletionStage;
acceptEither(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_util_function_Consumer): java_util_concurrent_CompletionStage;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEither(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEither(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletableFuture<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage;
thenCompose<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletableFuture<U>;
thenCompose(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenComposeAsync(arg0: java_util_function_Function, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
thenComposeAsync(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletableFuture<U>;
whenComplete(arg0: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
whenComplete(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletableFuture<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer): java_util_concurrent_CompletionStage;
handleAsync(arg0: java_util_function_BiFunction): java_util_concurrent_CompletionStage;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletableFuture<U>;
handleAsync(arg0: java_util_function_BiFunction, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
toCompletableFuture(): java_util_concurrent_CompletableFuture<T>;
exceptionally(arg0: java_util_function_Function): java_util_concurrent_CompletionStage;
exceptionally(arg0: java_util_function_Function<java_lang_Throwable, T>): java_util_concurrent_CompletableFuture<T>;
static anyOf(...arg0: java_util_concurrent_CompletableFuture<java_lang_Object>[]): java_util_concurrent_CompletableFuture<java_lang_Object>;
isCompletedExceptionally(): boolean;
obtrudeValue(arg0: T): void;
obtrudeException(arg0: java_lang_Throwable): void;
getNumberOfDependents(): number;
newIncompleteFuture<U extends java_lang_Object>(): java_util_concurrent_CompletableFuture<U>;
minimalCompletionStage(): java_util_concurrent_CompletionStage<T>;
completeAsync(arg0: java_util_function_Supplier<T>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<T>;
completeAsync(arg0: java_util_function_Supplier<T>): java_util_concurrent_CompletableFuture<T>;
orTimeout(arg0: number, arg1: java_util_concurrent_TimeUnit): java_util_concurrent_CompletableFuture<T>;
completeOnTimeout(arg0: T, arg1: number, arg2: java_util_concurrent_TimeUnit): java_util_concurrent_CompletableFuture<T>;
static delayedExecutor(arg0: number, arg1: java_util_concurrent_TimeUnit): java_util_concurrent_Executor;
static delayedExecutor(arg0: number, arg1: java_util_concurrent_TimeUnit, arg2: java_util_concurrent_Executor): java_util_concurrent_Executor;
static completedStage<U extends java_lang_Object>(arg0: U): java_util_concurrent_CompletionStage<U>;
static failedFuture<U extends java_lang_Object>(arg0: java_lang_Throwable): java_util_concurrent_CompletableFuture<U>;
static failedStage<U extends java_lang_Object>(arg0: java_lang_Throwable): java_util_concurrent_CompletionStage<U>;
defaultExecutor(): java_util_concurrent_Executor;
static completedFuture<U extends java_lang_Object>(arg0: U): java_util_concurrent_CompletableFuture<U>;
static supplyAsync<U extends java_lang_Object>(arg0: java_util_function_Supplier<U>): java_util_concurrent_CompletableFuture<U>;
static supplyAsync<U extends java_lang_Object>(arg0: java_util_function_Supplier<U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletableFuture<U>;
thenAccept(arg0: java_util_function_Consumer): java_util_concurrent_CompletionStage;
thenAccept(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletableFuture<java_lang_Void>;
constructor();
  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { BiFunction as java_util_function_BiFunction, Function as java_util_function_Function, Consumer as java_util_function_Consumer, BiConsumer as java_util_function_BiConsumer } from 'java.util.function';
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Void as java_lang_Void, Runnable as java_lang_Runnable } from 'java.lang';
import { CompletionStage as java_util_concurrent_CompletionStage, Executor as java_util_concurrent_Executor, CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';

  export class CompletionStage<T extends java_lang_Object> {

handle<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletionStage<U>;
thenApply<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
thenApplyAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenAcceptAsync(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
thenRun(arg0: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
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
applyToEither<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
applyToEitherAsync<U extends java_lang_Object>(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Function<java_lang_Object, U>): java_util_concurrent_CompletionStage<U>;
acceptEither(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
acceptEitherAsync(arg0: java_util_concurrent_CompletionStage<T>, arg1: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEither(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable): java_util_concurrent_CompletionStage<java_lang_Void>;
runAfterEitherAsync(arg0: java_util_concurrent_CompletionStage<java_lang_Object>, arg1: java_lang_Runnable, arg2: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<java_lang_Void>;
thenCompose<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletionStage<U>;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
thenComposeAsync<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, java_util_concurrent_CompletionStage<U>>): java_util_concurrent_CompletionStage<U>;
whenComplete(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): java_util_concurrent_CompletionStage<T>;
whenCompleteAsync(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<T>;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>): java_util_concurrent_CompletionStage<U>;
handleAsync<U extends java_lang_Object>(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Throwable, U>, arg1: java_util_concurrent_Executor): java_util_concurrent_CompletionStage<U>;
toCompletableFuture(): java_util_concurrent_CompletableFuture<T>;
exceptionally(arg0: java_util_function_Function<java_lang_Throwable, T>): java_util_concurrent_CompletionStage<T>;
thenAccept(arg0: java_util_function_Consumer<java_lang_Object>): java_util_concurrent_CompletionStage<java_lang_Void>;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.CompletableFuture' {
import { Void as java_lang_Void, Object as java_lang_Object, Class as java_lang_Class, Runnable as java_lang_Runnable } from 'java.lang';
import { Completion as java_util_concurrent_CompletableFuture_Completion, AsynchronousCompletionTask as java_util_concurrent_CompletableFuture_AsynchronousCompletionTask } from 'java.util.concurrent.CompletableFuture';
import { ForkJoinTask as java_util_concurrent_ForkJoinTask } from 'java.util.concurrent';

  export class Completion extends java_util_concurrent_ForkJoinTask<java_lang_Void> implements java_lang_Runnable, java_util_concurrent_CompletableFuture_AsynchronousCompletionTask {
next: java_util_concurrent_CompletableFuture_Completion;
rawResult: java_lang_Void;
rawResult: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getRawResult(): java_lang_Void;
getRawResult(): java_lang_Object;
setRawResult(arg0: java_lang_Void): void;
setRawResult(arg0: java_lang_Object): void;
run(): void;
exec(): boolean;
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

declare module 'java.util.concurrent' {
import { ForkJoinPool as java_util_concurrent_ForkJoinPool, ForkJoinTask as java_util_concurrent_ForkJoinTask, Callable as java_util_concurrent_Callable, TimeUnit as java_util_concurrent_TimeUnit, Future as java_util_concurrent_Future } from 'java.util.concurrent';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object, Throwable as java_lang_Throwable, Runnable as java_lang_Runnable } from 'java.lang';
import { ExceptionNode as java_util_concurrent_ForkJoinTask_ExceptionNode } from 'java.util.concurrent.ForkJoinTask';
import { ReentrantLock as java_util_concurrent_locks_ReentrantLock } from 'java.util.concurrent.locks';
import { ReferenceQueue as java_lang_ref_ReferenceQueue } from 'java.lang.ref';
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ForkJoinTask<V extends java_lang_Object> extends java_lang_Object implements java_util_concurrent_Future<V>, java_io_Serializable {
status: number;
static DONE: number;
static ABNORMAL: number;
static THROWN: number;
static SIGNAL: number;
static SMASK: number;
static exceptionTable: java_util_concurrent_ForkJoinTask_ExceptionNode[];
static exceptionTableLock: java_util_concurrent_locks_ReentrantLock;
static exceptionTableRefQueue: java_lang_ref_ReferenceQueue<java_util_concurrent_ForkJoinTask<java_lang_Object>>;
static serialVersionUID: number;
static STATUS: java_lang_invoke_VarHandle;
static pool: java_util_concurrent_ForkJoinPool;
rawResult: V;
static queuedTaskCount: number;
static surplusQueuedTaskCount: number;
forkJoinTaskTag: number;
exception: java_lang_Throwable;
complete(arg0: V): void;
static getPool(): java_util_concurrent_ForkJoinPool;
isDone(): boolean;
getRawResult(): V;
fork(): java_util_concurrent_ForkJoinTask<V>;
quietlyComplete(): void;
static invokeAll<T extends java_util_concurrent_ForkJoinTask<java_lang_Object>>(arg0: java_util_Collection<T>): java_util_Collection<T>;
static invokeAll(...arg0: java_util_concurrent_ForkJoinTask<java_lang_Object>[]): void;
static invokeAll(arg0: java_util_concurrent_ForkJoinTask<java_lang_Object>, arg1: java_util_concurrent_ForkJoinTask<java_lang_Object>): void;
cancel(arg0: boolean): boolean;
isCancelled(): boolean;
isCompletedAbnormally(): boolean;
isCompletedNormally(): boolean;
completeExceptionally(arg0: java_lang_Throwable): void;
quietlyJoin(): void;
quietlyInvoke(): void;
static helpQuiesce(): void;
static inForkJoinPool(): boolean;
tryUnfork(): boolean;
static getQueuedTaskCount(): number;
static getSurplusQueuedTaskCount(): number;
getForkJoinTaskTag(): number;
setForkJoinTaskTag(arg0: number): number;
compareAndSetForkJoinTaskTag(arg0: number, arg1: number): boolean;
static adapt(arg0: java_lang_Runnable): java_util_concurrent_ForkJoinTask<java_lang_Object>;
static adapt<T extends java_lang_Object>(arg0: java_lang_Runnable, arg1: T): java_util_concurrent_ForkJoinTask<T>;
static adapt<T extends java_lang_Object>(arg0: java_util_concurrent_Callable<T>): java_util_concurrent_ForkJoinTask<T>;
invoke(): V;
get(arg0: number, arg1: java_util_concurrent_TimeUnit): V;
get(): V;
join(): V;
getException(): java_lang_Throwable;
reinitialize(): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';
import { Callable as java_util_concurrent_Callable, Future as java_util_concurrent_Future, ForkJoinPool as java_util_concurrent_ForkJoinPool, TimeUnit as java_util_concurrent_TimeUnit, ForkJoinTask as java_util_concurrent_ForkJoinTask, AbstractExecutorService as java_util_concurrent_AbstractExecutorService } from 'java.util.concurrent';
import { Object as java_lang_Object, Runnable as java_lang_Runnable, Class as java_lang_Class, RuntimePermission as java_lang_RuntimePermission } from 'java.lang';
import { ManagedBlocker as java_util_concurrent_ForkJoinPool_ManagedBlocker, ForkJoinWorkerThreadFactory as java_util_concurrent_ForkJoinPool_ForkJoinWorkerThreadFactory, WorkQueue as java_util_concurrent_ForkJoinPool_WorkQueue } from 'java.util.concurrent.ForkJoinPool';
import { UncaughtExceptionHandler as java_lang_Thread_UncaughtExceptionHandler } from 'java.lang.Thread';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';

  export class ForkJoinPool extends java_util_concurrent_AbstractExecutorService {
static SWIDTH: number;
static SMASK: number;
static MAX_CAP: number;
static SQMASK: number;
static UNSIGNALLED: number;
static SS_SEQ: number;
static QLOCK: number;
static OWNED: number;
static FIFO: number;
static SHUTDOWN: number;
static TERMINATED: number;
static STOP: number;
static QUIET: number;
static DORMANT: number;
static INITIAL_QUEUE_CAPACITY: number;
static MAXIMUM_QUEUE_CAPACITY: number;
static TOP_BOUND_SHIFT: number;
static defaultForkJoinWorkerThreadFactory: java_util_concurrent_ForkJoinPool_ForkJoinWorkerThreadFactory;
static modifyThreadPermission: java_lang_RuntimePermission;
static common: java_util_concurrent_ForkJoinPool;
static COMMON_PARALLELISM: number;
static COMMON_MAX_SPARES: number;
static poolNumberSequence: number;
static DEFAULT_KEEPALIVE: number;
static TIMEOUT_SLOP: number;
static DEFAULT_COMMON_MAX_SPARES: number;
static SEED_INCREMENT: number;
static SP_MASK: number;
static UC_MASK: number;
static RC_SHIFT: number;
static RC_UNIT: number;
static RC_MASK: number;
static TC_SHIFT: number;
static TC_UNIT: number;
static TC_MASK: number;
static ADD_WORKER: number;
stealCount: number;
keepAlive: number;
indexSeed: number;
bounds: number;
mode: number;
workQueues: java_util_concurrent_ForkJoinPool_WorkQueue[];
workerNamePrefix: string;
factory: java_util_concurrent_ForkJoinPool_ForkJoinWorkerThreadFactory;
ueh: java_lang_Thread_UncaughtExceptionHandler;
saturate: java_util_function_Predicate<java_lang_Object>;
ctl: number;
static CTL: java_lang_invoke_VarHandle;
static MODE: java_lang_invoke_VarHandle;
static QA: java_lang_invoke_VarHandle;
parallelism: number;
queuedTaskCount: number;
poolSize: number;
asyncMode: boolean;
runningThreadCount: number;
activeThreadCount: number;
stealCount: number;
queuedSubmissionCount: number;
factory: java_util_concurrent_ForkJoinPool_ForkJoinWorkerThreadFactory;
uncaughtExceptionHandler: java_lang_Thread_UncaughtExceptionHandler;
static commonPoolParallelism: number;
class: java_lang_Class<java_lang_Object>;
getParallelism(): number;
invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): java_util_List<java_util_concurrent_Future<T>>;
getQueuedTaskCount(): number;
static commonPool(): java_util_concurrent_ForkJoinPool;
getPoolSize(): number;
getAsyncMode(): boolean;
getRunningThreadCount(): number;
getActiveThreadCount(): number;
isQuiescent(): boolean;
getStealCount(): number;
getQueuedSubmissionCount(): number;
hasQueuedSubmissions(): boolean;
shutdownNow(): java_util_List<java_lang_Runnable>;
isTerminated(): boolean;
isTerminating(): boolean;
awaitTermination(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
awaitQuiescence(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
static managedBlock(arg0: java_util_concurrent_ForkJoinPool_ManagedBlocker): void;
submit<T extends java_lang_Object>(arg0: java_util_concurrent_ForkJoinTask<T>): java_util_concurrent_ForkJoinTask<T>;
submit(arg0: java_lang_Runnable, arg1: java_lang_Object): java_util_concurrent_Future;
submit<T extends java_lang_Object>(arg0: java_lang_Runnable, arg1: T): java_util_concurrent_ForkJoinTask<T>;
submit(arg0: java_lang_Runnable): java_util_concurrent_Future;
submit(arg0: java_lang_Runnable): java_util_concurrent_ForkJoinTask<java_lang_Object>;
submit(arg0: java_util_concurrent_Callable): java_util_concurrent_Future;
submit<T extends java_lang_Object>(arg0: java_util_concurrent_Callable<T>): java_util_concurrent_ForkJoinTask<T>;
invoke<T extends java_lang_Object>(arg0: java_util_concurrent_ForkJoinTask<T>): T;
shutdown(): void;
toString(): string;
getFactory(): java_util_concurrent_ForkJoinPool_ForkJoinWorkerThreadFactory;
execute(arg0: java_lang_Runnable): void;
execute(arg0: java_util_concurrent_ForkJoinTask<java_lang_Object>): void;
getUncaughtExceptionHandler(): java_lang_Thread_UncaughtExceptionHandler;
static getCommonPoolParallelism(): number;
isShutdown(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: java_util_concurrent_ForkJoinPool_ForkJoinWorkerThreadFactory, arg2: java_lang_Thread_UncaughtExceptionHandler, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: java_util_function_Predicate<java_lang_Object>, arg8: number, arg9: java_util_concurrent_TimeUnit);
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: java_util_concurrent_ForkJoinPool_ForkJoinWorkerThreadFactory, arg2: java_lang_Thread_UncaughtExceptionHandler, arg3: boolean);
  }
}//@ts-nocheck

declare module 'java.util.concurrent.ForkJoinPool' {


  export class ManagedBlocker {

isReleasable(): boolean;
block(): boolean;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.ForkJoinPool' {
import { ForkJoinPool as java_util_concurrent_ForkJoinPool, ForkJoinWorkerThread as java_util_concurrent_ForkJoinWorkerThread } from 'java.util.concurrent';

  export class ForkJoinWorkerThreadFactory {

newThread(arg0: java_util_concurrent_ForkJoinPool): java_util_concurrent_ForkJoinWorkerThread;

  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { ForkJoinPool as java_util_concurrent_ForkJoinPool } from 'java.util.concurrent';
import { Object as java_lang_Object, Class as java_lang_Class, Thread as java_lang_Thread } from 'java.lang';
import { WorkQueue as java_util_concurrent_ForkJoinPool_WorkQueue } from 'java.util.concurrent.ForkJoinPool';

  export class ForkJoinWorkerThread extends java_lang_Thread {
pool: java_util_concurrent_ForkJoinPool;
workQueue: java_util_concurrent_ForkJoinPool_WorkQueue;
pool: java_util_concurrent_ForkJoinPool;
poolIndex: number;
class: java_lang_Class<java_lang_Object>;
getPool(): java_util_concurrent_ForkJoinPool;
getPoolIndex(): number;
run(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.ForkJoinPool' {
import { ForkJoinTask as java_util_concurrent_ForkJoinTask, ForkJoinPool as java_util_concurrent_ForkJoinPool, ForkJoinWorkerThread as java_util_concurrent_ForkJoinWorkerThread } from 'java.util.concurrent';
import { Object as java_lang_Object } from 'java.lang';
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';

  export class WorkQueue extends java_lang_Object {
source: number;
id: number;
base: number;
top: number;
phase: number;
stackPred: number;
nsteals: number;
array: java_util_concurrent_ForkJoinTask<java_lang_Object>[];
pool: java_util_concurrent_ForkJoinPool;
owner: java_util_concurrent_ForkJoinWorkerThread;
static PHASE: java_lang_invoke_VarHandle;
static BASE: java_lang_invoke_VarHandle;
static TOP: java_lang_invoke_VarHandle;


  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';
import { Callable as java_util_concurrent_Callable, Future as java_util_concurrent_Future, TimeUnit as java_util_concurrent_TimeUnit, ExecutorService as java_util_concurrent_ExecutorService } from 'java.util.concurrent';
import { Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';

  export class AbstractExecutorService extends java_lang_Object implements java_util_concurrent_ExecutorService {
static $assertionsDisabled: boolean;
invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): java_util_List<java_util_concurrent_Future<T>>;
invokeAll<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>, arg1: number, arg2: java_util_concurrent_TimeUnit): java_util_List<java_util_concurrent_Future<T>>;
submit<T extends java_lang_Object>(arg0: java_util_concurrent_Callable<T>): java_util_concurrent_Future<T>;
submit<T extends java_lang_Object>(arg0: java_lang_Runnable, arg1: T): java_util_concurrent_Future<T>;
submit(arg0: java_lang_Runnable): java_util_concurrent_Future<java_lang_Object>;
invokeAny<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>, arg1: number, arg2: java_util_concurrent_TimeUnit): T;
invokeAny<T extends java_lang_Object>(arg0: java_util_Collection<java_util_concurrent_Callable<T>>): T;
shutdownNow(): java_util_List<java_lang_Runnable>;
isTerminated(): boolean;
awaitTermination(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
shutdown(): void;
isShutdown(): boolean;
execute(arg0: java_lang_Runnable): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.util.concurrent.ForkJoinTask' {
import { Object as java_lang_Object, Class as java_lang_Class, Throwable as java_lang_Throwable } from 'java.lang';
import { ExceptionNode as java_util_concurrent_ForkJoinTask_ExceptionNode } from 'java.util.concurrent.ForkJoinTask';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';
import { ForkJoinTask as java_util_concurrent_ForkJoinTask } from 'java.util.concurrent';

  export class ExceptionNode extends java_lang_ref_WeakReference<java_util_concurrent_ForkJoinTask<java_lang_Object>> {
ex: java_lang_Throwable;
next: java_util_concurrent_ForkJoinTask_ExceptionNode;
thrower: number;
hashCode: number;
class: java_lang_Class<java_lang_Object>;
get(): T;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
static reachabilityFence(arg0: java_lang_Object): void;
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

declare module 'java.util.concurrent.CompletableFuture' {


  export class AsynchronousCompletionTask {



  }
}//@ts-nocheck

declare module 'java.util.concurrent.CompletableFuture' {
import { Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';

  export class AltResult extends java_lang_Object {
ex: java_lang_Throwable;


  }
}//@ts-nocheck

declare module 'java.util' {
import { EnumSet as java_util_EnumSet, Collection as java_util_Collection, Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, AbstractSet as java_util_AbstractSet } from 'java.util';
import { Enum as java_lang_Enum, Class as java_lang_Class, Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';

  export class EnumSet<E extends java_lang_Enum<E>> extends java_util_AbstractSet<E> implements java_lang_Cloneable, java_io_Serializable {
static serialPersistentFields: java_io_ObjectStreamField[];
elementType: java_lang_Class<E>;
universe: java_lang_Enum<java_lang_Object>[];
class: java_lang_Class<java_lang_Object>;
static range<E extends java_lang_Enum<E>>(arg0: E, arg1: E): java_util_EnumSet<E>;
static allOf<E extends java_lang_Enum<E>>(arg0: java_lang_Class<E>): java_util_EnumSet<E>;
static complementOf<E extends java_lang_Enum<E>>(arg0: java_util_EnumSet<E>): java_util_EnumSet<E>;
clone(): java_lang_Object;
clone(): java_util_EnumSet<E>;
static copyOf<E extends java_lang_Enum<E>>(arg0: java_util_Collection<E>): java_util_EnumSet<E>;
static copyOf<E extends java_lang_Enum<E>>(arg0: java_util_EnumSet<E>): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, arg1: E): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E, ...arg1: E[]): java_util_EnumSet<E>;
static of<E extends java_lang_Enum<E>>(arg0: E): java_util_EnumSet<E>;
static noneOf<E extends java_lang_Enum<E>>(arg0: java_lang_Class<E>): java_util_EnumSet<E>;
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
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.util.concurrent.atomic' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Striped64 as java_util_concurrent_atomic_Striped64 } from 'java.util.concurrent.atomic';
import { Serializable as java_io_Serializable } from 'java.io';

  export class LongAdder extends java_util_concurrent_atomic_Striped64 implements java_io_Serializable {
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
decrement(): void;
sumThenReset(): number;
add(arg0: number): void;
toString(): string;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
increment(): void;
reset(): void;
sum(): number;
byteValue(): number;
shortValue(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.util.concurrent.atomic' {
import { Object as java_lang_Object, Class as java_lang_Class, Number as java_lang_Number } from 'java.lang';
import { Cell as java_util_concurrent_atomic_Striped64_Cell } from 'java.util.concurrent.atomic.Striped64';
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';

  export class Striped64 extends java_lang_Number {
static NCPU: number;
cells: java_util_concurrent_atomic_Striped64_Cell[];
base: number;
cellsBusy: number;
static BASE: java_lang_invoke_VarHandle;
static CELLSBUSY: java_lang_invoke_VarHandle;
static THREAD_PROBE: java_lang_invoke_VarHandle;
class: java_lang_Class<java_lang_Object>;
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

declare module 'java.util.concurrent.atomic.Striped64' {
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';
import { Object as java_lang_Object } from 'java.lang';

  export class Cell extends java_lang_Object {
value: number;
static VALUE: java_lang_invoke_VarHandle;


  }
}//@ts-nocheck

declare module 'java.util.concurrent' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator, Collection as java_util_Collection, AbstractQueue as java_util_AbstractQueue, Queue as java_util_Queue } from 'java.util';
import { Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Node as java_util_concurrent_ConcurrentLinkedQueue_Node } from 'java.util.concurrent.ConcurrentLinkedQueue';
import { VarHandle as java_lang_invoke_VarHandle } from 'java.lang.invoke';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ConcurrentLinkedQueue<E extends java_lang_Object> extends java_util_AbstractQueue<E> implements java_util_Queue<E>, java_io_Serializable {
static serialVersionUID: number;
head: java_util_concurrent_ConcurrentLinkedQueue_Node<E>;
tail: java_util_concurrent_ConcurrentLinkedQueue_Node<E>;
static MAX_HOPS: number;
static HEAD: java_lang_invoke_VarHandle;
static TAIL: java_lang_invoke_VarHandle;
static ITEM: java_lang_invoke_VarHandle;
static NEXT: java_lang_invoke_VarHandle;
class: java_lang_Class<java_lang_Object>;
offer(arg0: E): boolean;
add(arg0: E): boolean;
remove(arg0: java_lang_Object): boolean;
toString(): string;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
iterator(): java_util_Iterator<E>;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
poll(): E;
peek(): E;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
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
constructor(arg0: java_util_Collection<E>);
constructor();
  }
}//@ts-nocheck

declare module 'java.util.concurrent.ConcurrentLinkedQueue' {
import { Node as java_util_concurrent_ConcurrentLinkedQueue_Node } from 'java.util.concurrent.ConcurrentLinkedQueue';
import { Object as java_lang_Object } from 'java.lang';

  export class Node<E extends java_lang_Object> extends java_lang_Object {
item: E;
next: java_util_concurrent_ConcurrentLinkedQueue_Node<E>;


  }
}//@ts-nocheck

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
offer(arg0: E): boolean;
poll(): E;
peek(): E;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks' {
import { Thread as java_lang_Thread, Object as java_lang_Object } from 'java.lang';
import { Condition as java_util_concurrent_locks_Condition, Lock as java_util_concurrent_locks_Lock, ReadWriteLock as java_util_concurrent_locks_ReadWriteLock } from 'java.util.concurrent.locks';
import { WriteLock as java_util_concurrent_locks_ReentrantReadWriteLock_WriteLock, ReadLock as java_util_concurrent_locks_ReentrantReadWriteLock_ReadLock, Sync as java_util_concurrent_locks_ReentrantReadWriteLock_Sync } from 'java.util.concurrent.locks.ReentrantReadWriteLock';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ReentrantReadWriteLock extends java_lang_Object implements java_util_concurrent_locks_ReadWriteLock, java_io_Serializable {
static serialVersionUID: number;
readerLock: java_util_concurrent_locks_ReentrantReadWriteLock_ReadLock;
writerLock: java_util_concurrent_locks_ReentrantReadWriteLock_WriteLock;
sync: java_util_concurrent_locks_ReentrantReadWriteLock_Sync;
queueLength: number;
waitQueueLength: number;
readLockCount: number;
writeHoldCount: number;
readHoldCount: number;
toString(): string;
isFair(): boolean;
hasQueuedThreads(): boolean;
hasQueuedThread(arg0: java_lang_Thread): boolean;
getQueueLength(): number;
hasWaiters(arg0: java_util_concurrent_locks_Condition): boolean;
getWaitQueueLength(arg0: java_util_concurrent_locks_Condition): number;
writeLock(): java_util_concurrent_locks_ReentrantReadWriteLock_WriteLock;
writeLock(): java_util_concurrent_locks_Lock;
readLock(): java_util_concurrent_locks_ReentrantReadWriteLock_ReadLock;
readLock(): java_util_concurrent_locks_Lock;
getReadLockCount(): number;
isWriteLocked(): boolean;
isWriteLockedByCurrentThread(): boolean;
getWriteHoldCount(): number;
getReadHoldCount(): number;
constructor();
constructor(arg0: boolean);
  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks.ReentrantReadWriteLock' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Condition as java_util_concurrent_locks_Condition, Lock as java_util_concurrent_locks_Lock } from 'java.util.concurrent.locks';
import { Sync as java_util_concurrent_locks_ReentrantReadWriteLock_Sync } from 'java.util.concurrent.locks.ReentrantReadWriteLock';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class WriteLock extends java_lang_Object implements java_util_concurrent_locks_Lock, java_io_Serializable {
static serialVersionUID: number;
sync: java_util_concurrent_locks_ReentrantReadWriteLock_Sync;
holdCount: number;
lock(): void;
toString(): string;
lockInterruptibly(): void;
tryLock(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
tryLock(): boolean;
unlock(): void;
newCondition(): java_util_concurrent_locks_Condition;
getHoldCount(): number;
isHeldByCurrentThread(): boolean;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks.ReentrantReadWriteLock' {
import { Object as java_lang_Object, Class as java_lang_Class, Thread as java_lang_Thread } from 'java.lang';
import { ThreadLocalHoldCounter as java_util_concurrent_locks_ReentrantReadWriteLock_Sync_ThreadLocalHoldCounter, HoldCounter as java_util_concurrent_locks_ReentrantReadWriteLock_Sync_HoldCounter } from 'java.util.concurrent.locks.ReentrantReadWriteLock.Sync';
import { AbstractQueuedSynchronizer as java_util_concurrent_locks_AbstractQueuedSynchronizer } from 'java.util.concurrent.locks';

  export class Sync extends java_util_concurrent_locks_AbstractQueuedSynchronizer {
static serialVersionUID: number;
static SHARED_SHIFT: number;
static SHARED_UNIT: number;
static MAX_COUNT: number;
static EXCLUSIVE_MASK: number;
readHolds: java_util_concurrent_locks_ReentrantReadWriteLock_Sync_ThreadLocalHoldCounter;
cachedHoldCounter: java_util_concurrent_locks_ReentrantReadWriteLock_Sync_HoldCounter;
firstReader: java_lang_Thread;
firstReaderHoldCount: number;
class: java_lang_Class<java_lang_Object>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks.ReentrantReadWriteLock.Sync' {
import { HoldCounter as java_util_concurrent_locks_ReentrantReadWriteLock_Sync_HoldCounter } from 'java.util.concurrent.locks.ReentrantReadWriteLock.Sync';
import { Object as java_lang_Object, Class as java_lang_Class, ThreadLocal as java_lang_ThreadLocal } from 'java.lang';

  export class ThreadLocalHoldCounter extends java_lang_ThreadLocal<java_util_concurrent_locks_ReentrantReadWriteLock_Sync_HoldCounter> {
class: java_lang_Class<java_lang_Object>;
initialValue(): java_util_concurrent_locks_ReentrantReadWriteLock_Sync_HoldCounter;
initialValue(): java_lang_Object;
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

declare module 'java.util.concurrent.locks.ReentrantReadWriteLock.Sync' {
import { Object as java_lang_Object } from 'java.lang';

  export class HoldCounter extends java_lang_Object {
count: number;
tid: number;


  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks.ReentrantReadWriteLock' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Condition as java_util_concurrent_locks_Condition, Lock as java_util_concurrent_locks_Lock } from 'java.util.concurrent.locks';
import { Sync as java_util_concurrent_locks_ReentrantReadWriteLock_Sync } from 'java.util.concurrent.locks.ReentrantReadWriteLock';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ReadLock extends java_lang_Object implements java_util_concurrent_locks_Lock, java_io_Serializable {
static serialVersionUID: number;
sync: java_util_concurrent_locks_ReentrantReadWriteLock_Sync;
lock(): void;
toString(): string;
lockInterruptibly(): void;
tryLock(arg0: number, arg1: java_util_concurrent_TimeUnit): boolean;
tryLock(): boolean;
unlock(): void;
newCondition(): java_util_concurrent_locks_Condition;

  }
}//@ts-nocheck

declare module 'java.util.concurrent.locks' {
import { Lock as java_util_concurrent_locks_Lock } from 'java.util.concurrent.locks';

  export class ReadWriteLock {

writeLock(): java_util_concurrent_locks_Lock;
readLock(): java_util_concurrent_locks_Lock;

  }
}//@ts-nocheck

declare module 'java.util.jar' {
import { Version as java_lang_Runtime_Version } from 'java.lang.Runtime';
import { JarEntry as java_util_jar_JarEntry, Manifest as java_util_jar_Manifest, JarVerifier as java_util_jar_JarVerifier } from 'java.util.jar';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Enumeration as java_util_Enumeration } from 'java.util';
import { ZipEntry as java_util_zip_ZipEntry, ZipFile as java_util_zip_ZipFile } from 'java.util.zip';
import { InputStream as java_io_InputStream, File as java_io_File } from 'java.io';
import { Object as java_lang_Object, Class as java_lang_Class, ThreadLocal as java_lang_ThreadLocal, Boolean as java_lang_Boolean } from 'java.lang';
import { SoftReference as java_lang_ref_SoftReference } from 'java.lang.ref';
import { JavaUtilZipFileAccess as jdk_internal_misc_JavaUtilZipFileAccess } from 'jdk.internal.misc';

  export class JarFile extends java_util_zip_ZipFile {
static BASE_VERSION: java_lang_Runtime_Version;
static BASE_VERSION_FEATURE: number;
static RUNTIME_VERSION: java_lang_Runtime_Version;
static MULTI_RELEASE_ENABLED: boolean;
static MULTI_RELEASE_FORCED: boolean;
static isInitializing: java_lang_ThreadLocal<java_lang_Boolean>;
manRef: java_lang_ref_SoftReference<java_util_jar_Manifest>;
manEntry: java_util_jar_JarEntry;
jv: java_util_jar_JarVerifier;
jvInitialized: boolean;
verify: boolean;
version: java_lang_Runtime_Version;
versionFeature: number;
isMultiRelease: boolean;
hasClassPathAttribute: boolean;
hasCheckedSpecialAttributes: boolean;
static JUZFA: jdk_internal_misc_JavaUtilZipFileAccess;
static META_INF: string;
static META_INF_VERSIONS: string;
static MANIFEST_NAME: string;
static CLASSPATH_CHARS: number[];
static CLASSPATH_LASTOCC: number[];
static CLASSPATH_OPTOSFT: number[];
static MULTIRELEASE_CHARS: number[];
static MULTIRELEASE_LASTOCC: number[];
static MULTIRELEASE_OPTOSFT: number[];
jarEntry: java_util_jar_JarEntry;
version: java_lang_Runtime_Version;
inputStream: java_io_InputStream;
manifest: java_util_jar_Manifest;
entry: java_util_zip_ZipEntry;
class: java_lang_Class<java_lang_Object>;
static runtimeVersion(): java_lang_Runtime_Version;
isMultiRelease(): boolean;
getJarEntry(arg0: string): java_util_jar_JarEntry;
static baseVersion(): java_lang_Runtime_Version;
getVersion(): java_lang_Runtime_Version;
versionedStream(): java_util_stream_Stream<java_util_jar_JarEntry>;
stream(): java_util_stream_Stream<java_util_jar_JarEntry>;
entries(): java_util_Enumeration<java_util_jar_JarEntry>;
getInputStream(arg0: java_util_zip_ZipEntry): java_io_InputStream;
getManifest(): java_util_jar_Manifest;
getEntry(arg0: string): java_util_zip_ZipEntry;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_File);
constructor(arg0: string, arg1: boolean);
constructor(arg0: java_io_File, arg1: boolean);
constructor(arg0: java_io_File, arg1: boolean, arg2: number, arg3: java_lang_Runtime_Version);
constructor(arg0: string);
constructor(arg0: java_io_File, arg1: boolean, arg2: number);
  }
}//@ts-nocheck

declare module 'java.util.jar' {
import { Certificate as java_security_cert_Certificate } from 'java.security.cert';
import { Attributes as java_util_jar_Attributes, JarEntry as java_util_jar_JarEntry } from 'java.util.jar';
import { CodeSigner as java_security_CodeSigner } from 'java.security';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ZipEntry as java_util_zip_ZipEntry } from 'java.util.zip';

  export class JarEntry extends java_util_zip_ZipEntry {
attr: java_util_jar_Attributes;
certs: java_security_cert_Certificate[];
signers: java_security_CodeSigner[];
certificates: java_security_cert_Certificate[];
realName: string;
attributes: java_util_jar_Attributes;
codeSigners: java_security_CodeSigner[];
class: java_lang_Class<java_lang_Object>;
getCertificates(): java_security_cert_Certificate[];
getRealName(): string;
getAttributes(): java_util_jar_Attributes;
getCodeSigners(): java_security_CodeSigner[];
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_util_jar_JarEntry);
constructor(arg0: java_util_zip_ZipEntry);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.util.jar' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Name as java_util_jar_Attributes_Name } from 'java.util.jar.Attributes';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Attributes as java_util_jar_Attributes } from 'java.util.jar';

  export class Attributes extends java_lang_Object implements java_util_Map<java_lang_Object, java_lang_Object>, java_lang_Cloneable {
map: java_util_Map<java_lang_Object, java_lang_Object>;
value: string;
value: string;
orDefault: V;
putValue(arg0: string, arg1: string): string;
remove(arg0: java_lang_Object): java_lang_Object;
get(arg0: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
values(): java_util_Collection<java_lang_Object>;
hashCode(): number;
clone(): java_lang_Object;
clear(): void;
isEmpty(): boolean;
getValue(arg0: string): string;
getValue(arg0: java_util_jar_Attributes_Name): string;
size(): number;
entrySet(): java_util_Set<java_util_Map_Entry<java_lang_Object, java_lang_Object>>;
putAll(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<java_lang_Object>;
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
constructor(arg0: java_util_jar_Attributes);
constructor(arg0: number);
constructor();
  }
}//@ts-nocheck

declare module 'java.util.jar.Attributes' {
import { Object as java_lang_Object } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { Name as java_util_jar_Attributes_Name } from 'java.util.jar.Attributes';

  export class Name extends java_lang_Object {
name: string;
hashCode: number;
static KNOWN_NAMES: java_util_Map<string, java_util_jar_Attributes_Name>;
static MANIFEST_VERSION: java_util_jar_Attributes_Name;
static SIGNATURE_VERSION: java_util_jar_Attributes_Name;
static CONTENT_TYPE: java_util_jar_Attributes_Name;
static CLASS_PATH: java_util_jar_Attributes_Name;
static MAIN_CLASS: java_util_jar_Attributes_Name;
static SEALED: java_util_jar_Attributes_Name;
static EXTENSION_LIST: java_util_jar_Attributes_Name;
static EXTENSION_NAME: java_util_jar_Attributes_Name;
static EXTENSION_INSTALLATION: java_util_jar_Attributes_Name;
static IMPLEMENTATION_TITLE: java_util_jar_Attributes_Name;
static IMPLEMENTATION_VERSION: java_util_jar_Attributes_Name;
static IMPLEMENTATION_VENDOR: java_util_jar_Attributes_Name;
static IMPLEMENTATION_VENDOR_ID: java_util_jar_Attributes_Name;
static IMPLEMENTATION_URL: java_util_jar_Attributes_Name;
static SPECIFICATION_TITLE: java_util_jar_Attributes_Name;
static SPECIFICATION_VERSION: java_util_jar_Attributes_Name;
static SPECIFICATION_VENDOR: java_util_jar_Attributes_Name;
static MULTI_RELEASE: java_util_jar_Attributes_Name;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.util.zip' {
import { FileTime as java_nio_file_attribute_FileTime } from 'java.nio.file.attribute';
import { ZipEntry as java_util_zip_ZipEntry, ZipConstants as java_util_zip_ZipConstants } from 'java.util.zip';
import { LocalDateTime as java_time_LocalDateTime } from 'java.time';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';

  export class ZipEntry extends java_lang_Object implements java_util_zip_ZipConstants, java_lang_Cloneable {
name: string;
xdostime: number;
mtime: java_nio_file_attribute_FileTime;
atime: java_nio_file_attribute_FileTime;
ctime: java_nio_file_attribute_FileTime;
crc: number;
size: number;
csize: number;
method: number;
flag: number;
extra: number[];
comment: string;
static STORED: number;
static DEFLATED: number;
static DOSTIME_BEFORE_1980: number;
static UPPER_DOSTIME_BOUND: number;
lastModifiedTime: java_nio_file_attribute_FileTime;
comment: string;
timeLocal: java_time_LocalDateTime;
lastAccessTime: java_nio_file_attribute_FileTime;
creationTime: java_nio_file_attribute_FileTime;
compressedSize: number;
crc: number;
extra: number[];
time: number;
name: string;
method: number;
size: number;
isDirectory(): boolean;
getLastModifiedTime(): java_nio_file_attribute_FileTime;
setLastModifiedTime(arg0: java_nio_file_attribute_FileTime): java_util_zip_ZipEntry;
setSize(arg0: number): void;
getComment(): string;
setTime(arg0: number): void;
setTimeLocal(arg0: java_time_LocalDateTime): void;
getTimeLocal(): java_time_LocalDateTime;
setLastAccessTime(arg0: java_nio_file_attribute_FileTime): java_util_zip_ZipEntry;
getLastAccessTime(): java_nio_file_attribute_FileTime;
setCreationTime(arg0: java_nio_file_attribute_FileTime): java_util_zip_ZipEntry;
getCreationTime(): java_nio_file_attribute_FileTime;
getCompressedSize(): number;
setCompressedSize(arg0: number): void;
setCrc(arg0: number): void;
getCrc(): number;
setMethod(arg0: number): void;
setExtra(arg0: number[]): void;
getExtra(): number[];
setComment(arg0: string): void;
getTime(): number;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
getName(): string;
getMethod(): number;
getSize(): number;
constructor(arg0: string);
constructor(arg0: java_util_zip_ZipEntry);
  }
}//@ts-nocheck

declare module 'java.util.zip' {


  export class ZipConstants {
static LOCSIG: number;
static EXTSIG: number;
static CENSIG: number;
static ENDSIG: number;
static LOCHDR: number;
static EXTHDR: number;
static CENHDR: number;
static ENDHDR: number;
static LOCVER: number;
static LOCFLG: number;
static LOCHOW: number;
static LOCTIM: number;
static LOCCRC: number;
static LOCSIZ: number;
static LOCLEN: number;
static LOCNAM: number;
static LOCEXT: number;
static EXTCRC: number;
static EXTSIZ: number;
static EXTLEN: number;
static CENVEM: number;
static CENVER: number;
static CENFLG: number;
static CENHOW: number;
static CENTIM: number;
static CENCRC: number;
static CENSIZ: number;
static CENLEN: number;
static CENNAM: number;
static CENEXT: number;
static CENCOM: number;
static CENDSK: number;
static CENATT: number;
static CENATX: number;
static CENOFF: number;
static ENDSUB: number;
static ENDTOT: number;
static ENDSIZ: number;
static ENDOFF: number;
static ENDCOM: number;


  }
}//@ts-nocheck

declare module 'java.util.jar' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream } from 'java.io';
import { Attributes as java_util_jar_Attributes, Manifest as java_util_jar_Manifest, JarVerifier as java_util_jar_JarVerifier } from 'java.util.jar';
import { Map as java_util_Map } from 'java.util';

  export class Manifest extends java_lang_Object implements java_lang_Cloneable {
attr: java_util_jar_Attributes;
entries: java_util_Map<string, java_util_jar_Attributes>;
jv: java_util_jar_JarVerifier;
mainAttributes: java_util_jar_Attributes;
entries: java_util_Map<string, java_util_jar_Attributes>;
attributes: java_util_jar_Attributes;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clone(): java_lang_Object;
clear(): void;
write(arg0: java_io_OutputStream): void;
read(arg0: java_io_InputStream): void;
getMainAttributes(): java_util_jar_Attributes;
getEntries(): java_util_Map<string, java_util_jar_Attributes>;
getAttributes(arg0: string): java_util_jar_Attributes;
constructor(arg0: java_util_jar_Manifest);
constructor(arg0: java_io_InputStream);
constructor();
  }
}//@ts-nocheck

declare module 'java.util.jar' {
import { JarFile as java_util_jar_JarFile, JarEntry as java_util_jar_JarEntry } from 'java.util.jar';
import { CodeSource as java_security_CodeSource, CodeSigner as java_security_CodeSigner } from 'java.security';
import { Enumeration as java_util_Enumeration, List as java_util_List, Hashtable as java_util_Hashtable, ArrayList as java_util_ArrayList, Map as java_util_Map } from 'java.util';
import { URL as java_net_URL } from 'java.net';
import { Object as java_lang_Object } from 'java.lang';
import { ManifestEntryVerifier as sun_security_util_ManifestEntryVerifier, Debug as sun_security_util_Debug, SignatureFileVerifier as sun_security_util_SignatureFileVerifier, ManifestDigester as sun_security_util_ManifestDigester } from 'sun.security.util';
import { Certificate as java_security_cert_Certificate } from 'java.security.cert';
import { ByteArrayOutputStream as java_io_ByteArrayOutputStream } from 'java.io';

  export class JarVerifier extends java_lang_Object {
static debug: sun_security_util_Debug;
verifiedSigners: java_util_Hashtable<string, java_security_CodeSigner[]>;
sigFileSigners: java_util_Hashtable<string, java_security_CodeSigner[]>;
sigFileData: java_util_Hashtable<string, number[]>;
pendingBlocks: java_util_ArrayList<sun_security_util_SignatureFileVerifier>;
signerCache: java_util_ArrayList<java_security_CodeSigner[]>;
parsingBlockOrSF: boolean;
parsingMeta: boolean;
anyToVerify: boolean;
baos: java_io_ByteArrayOutputStream;
manDig: sun_security_util_ManifestDigester;
manifestRawBytes: number[];
eagerValidation: boolean;
csdomain: java_lang_Object;
manifestDigests: java_util_List<java_lang_Object>;
urlToCodeSourceMap: java_util_Map<java_net_URL, java_util_Map<java_security_CodeSigner[], java_security_CodeSource>>;
signerToCodeSource: java_util_Map<java_security_CodeSigner[], java_security_CodeSource>;
lastURL: java_net_URL;
lastURLMap: java_util_Map<java_security_CodeSigner[], java_security_CodeSource>;
emptySigner: java_security_CodeSigner[];
signerMap: java_util_Map<string, java_security_CodeSigner[]>;
jarCodeSigners: java_util_List<java_security_CodeSigner[]>;
codeSources: java_security_CodeSource[];
manifestDigests: java_util_List<java_lang_Object>;
certs: java_security_cert_Certificate[];
certs: java_security_cert_Certificate[];
codeSource: java_security_CodeSource;
codeSource: java_security_CodeSource;
codeSigners: java_security_CodeSigner[];
codeSigners: java_security_CodeSigner[];
entryNames(arg0: java_util_jar_JarFile, arg1: java_security_CodeSource[]): java_util_Enumeration<string>;
entries2(arg0: java_util_jar_JarFile, arg1: java_util_Enumeration<java_util_jar_JarEntry>): java_util_Enumeration<java_util_jar_JarEntry>;
getCodeSources(arg0: java_util_jar_JarFile, arg1: java_net_URL): java_security_CodeSource[];
setEagerValidation(arg0: boolean): void;
getManifestDigests(): java_util_List<java_lang_Object>;
beginEntry(arg0: java_util_jar_JarEntry, arg1: sun_security_util_ManifestEntryVerifier): void;
getCerts(arg0: string): java_security_cert_Certificate[];
getCerts(arg0: java_util_jar_JarFile, arg1: java_util_jar_JarEntry): java_security_cert_Certificate[];
update(arg0: number, arg1: sun_security_util_ManifestEntryVerifier): void;
update(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: sun_security_util_ManifestEntryVerifier): void;
getCodeSource(arg0: java_net_URL, arg1: java_util_jar_JarFile, arg2: java_util_jar_JarEntry): java_security_CodeSource;
getCodeSource(arg0: java_net_URL, arg1: string): java_security_CodeSource;
getCodeSigners(arg0: java_util_jar_JarFile, arg1: java_util_jar_JarEntry): java_security_CodeSigner[];
getCodeSigners(arg0: string): java_security_CodeSigner[];
constructor(arg0: number[]);
  }
}//@ts-nocheck

declare module 'java.util.zip' {
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { ZipEntry as java_util_zip_ZipEntry, ZipCoder as java_util_zip_ZipCoder, ZipConstants as java_util_zip_ZipConstants } from 'java.util.zip';
import { Enumeration as java_util_Enumeration } from 'java.util';
import { InputStream as java_io_InputStream, File as java_io_File, Closeable as java_io_Closeable } from 'java.io';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';
import { CleanableResource as java_util_zip_ZipFile_CleanableResource } from 'java.util.zip.ZipFile';
import { JavaLangAccess as jdk_internal_misc_JavaLangAccess } from 'jdk.internal.misc';
import { Object as java_lang_Object } from 'java.lang';

  export class ZipFile extends java_lang_Object implements java_util_zip_ZipConstants, java_io_Closeable {
name: string;
closeRequested: boolean;
zc: java_util_zip_ZipCoder;
res: java_util_zip_ZipFile_CleanableResource;
static STORED: number;
static DEFLATED: number;
static OPEN_READ: number;
static OPEN_DELETE: number;
lastEntryName: string;
lastEntryPos: number;
static isWindows: boolean;
static JLA: jdk_internal_misc_JavaLangAccess;
comment: string;
name: string;
inputStream: java_io_InputStream;
entry: java_util_zip_ZipEntry;
getComment(): string;
getName(): string;
size(): number;
stream(): java_util_stream_Stream<java_util_zip_ZipEntry>;
close(): void;
entries(): java_util_Enumeration<java_util_zip_ZipEntry>;
getInputStream(arg0: java_util_zip_ZipEntry): java_io_InputStream;
getEntry(arg0: string): java_util_zip_ZipEntry;
constructor(arg0: string);
constructor(arg0: java_io_File, arg1: number);
constructor(arg0: java_io_File);
constructor(arg0: java_io_File, arg1: number, arg2: java_nio_charset_Charset);
constructor(arg0: string, arg1: java_nio_charset_Charset);
constructor(arg0: java_io_File, arg1: java_nio_charset_Charset);
  }
}//@ts-nocheck

declare module 'java.util.zip' {
import { Charset as java_nio_charset_Charset, CharsetDecoder as java_nio_charset_CharsetDecoder, CharsetEncoder as java_nio_charset_CharsetEncoder } from 'java.nio.charset';
import { ZipCoder as java_util_zip_ZipCoder } from 'java.util.zip';
import { JavaLangAccess as jdk_internal_misc_JavaLangAccess } from 'jdk.internal.misc';
import { Object as java_lang_Object } from 'java.lang';

  export class ZipCoder extends java_lang_Object {
static JLA: jdk_internal_misc_JavaLangAccess;
static utf8: java_util_zip_ZipCoder;
cs: java_nio_charset_Charset;
dec: java_nio_charset_CharsetDecoder;
enc: java_nio_charset_CharsetEncoder;
static get(arg0: java_nio_charset_Charset): java_util_zip_ZipCoder;

  }
}//@ts-nocheck

declare module 'java.util.zip.ZipFile' {
import { Set as java_util_Set, Deque as java_util_Deque } from 'java.util';
import { InputStream as java_io_InputStream } from 'java.io';
import { Inflater as java_util_zip_Inflater } from 'java.util.zip';
import { Cleanable as java_lang_ref_Cleaner_Cleanable } from 'java.lang.ref.Cleaner';
import { Source as java_util_zip_ZipFile_Source } from 'java.util.zip.ZipFile';
import { Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';

  export class CleanableResource extends java_lang_Object implements java_lang_Runnable {
istreams: java_util_Set<java_io_InputStream>;
inflaterCache: java_util_Deque<java_util_zip_Inflater>;
cleanable: java_lang_ref_Cleaner_Cleanable;
zsrc: java_util_zip_ZipFile_Source;
run(): void;

  }
}//@ts-nocheck

declare module 'java.util.zip' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { InflaterZStreamRef as java_util_zip_Inflater_InflaterZStreamRef } from 'java.util.zip.Inflater';
import { Object as java_lang_Object } from 'java.lang';

  export class Inflater extends java_lang_Object {
zsRef: java_util_zip_Inflater_InflaterZStreamRef;
input: java_nio_ByteBuffer;
inputArray: number[];
inputPos: number;
inputLim: number;
finished: boolean;
needDict: boolean;
bytesRead: number;
bytesWritten: number;
inputConsumed: number;
outputConsumed: number;
static $assertionsDisabled: boolean;
bytesWritten: number;
remaining: number;
adler: number;
totalIn: number;
bytesRead: number;
totalOut: number;
setInput(arg0: number[]): void;
setInput(arg0: number[], arg1: number, arg2: number): void;
setInput(arg0: java_nio_ByteBuffer): void;
getBytesWritten(): number;
finished(): boolean;
needsDictionary(): boolean;
needsInput(): boolean;
setDictionary(arg0: number[]): void;
setDictionary(arg0: java_nio_ByteBuffer): void;
setDictionary(arg0: number[], arg1: number, arg2: number): void;
getRemaining(): number;
getAdler(): number;
getTotalIn(): number;
getBytesRead(): number;
getTotalOut(): number;
inflate(arg0: java_nio_ByteBuffer): number;
inflate(arg0: number[]): number;
inflate(arg0: number[], arg1: number, arg2: number): number;
end(): void;
reset(): void;
constructor(arg0: boolean);
constructor();
  }
}//@ts-nocheck

declare module 'java.util.zip.Inflater' {
import { Cleanable as java_lang_ref_Cleaner_Cleanable } from 'java.lang.ref.Cleaner';
import { Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';

  export class InflaterZStreamRef extends java_lang_Object implements java_lang_Runnable {
address: number;
cleanable: java_lang_ref_Cleaner_Cleanable;
run(): void;

  }
}//@ts-nocheck

declare module 'java.util.zip.ZipFile' {
import { Key as java_util_zip_ZipFile_Source_Key } from 'java.util.zip.ZipFile.Source';
import { RandomAccessFile as java_io_RandomAccessFile } from 'java.io';
import { HashMap as java_util_HashMap } from 'java.util';
import { Source as java_util_zip_ZipFile_Source } from 'java.util.zip.ZipFile';
import { Object as java_lang_Object } from 'java.lang';

  export class Source extends java_lang_Object {
key: java_util_zip_ZipFile_Source_Key;
refs: number;
zfile: java_io_RandomAccessFile;
cen: number[];
locpos: number;
comment: number[];
metanames: number[];
startsWithLoc: boolean;
entries: number[];
static ZIP_ENDCHAIN: number;
total: number;
table: number[];
tablelen: number;
static files: java_util_HashMap<java_util_zip_ZipFile_Source_Key, java_util_zip_ZipFile_Source>;
static BUF_SIZE: number;


  }
}//@ts-nocheck

declare module 'java.util.zip.ZipFile.Source' {
import { Object as java_lang_Object } from 'java.lang';
import { File as java_io_File } from 'java.io';
import { BasicFileAttributes as java_nio_file_attribute_BasicFileAttributes } from 'java.nio.file.attribute';

  export class Key extends java_lang_Object {
attrs: java_nio_file_attribute_BasicFileAttributes;
file: java_io_File;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
constructor(arg0: java_io_File, arg1: java_nio_file_attribute_BasicFileAttributes);
  }
}//@ts-nocheck

declare module 'java.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Iterator as java_util_Iterator, ArrayDeque as java_util_ArrayDeque, Spliterator as java_util_Spliterator, Collection as java_util_Collection, AbstractCollection as java_util_AbstractCollection, Deque as java_util_Deque } from 'java.util';
import { Consumer as java_util_function_Consumer, Predicate as java_util_function_Predicate, IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ArrayDeque<E extends java_lang_Object> extends java_util_AbstractCollection<E> implements java_util_Deque<E>, java_lang_Cloneable, java_io_Serializable {
elements: java_lang_Object[];
head: number;
tail: number;
static MAX_ARRAY_SIZE: number;
static serialVersionUID: number;
first: E;
last: E;
class: java_lang_Class<java_lang_Object>;
offerFirst(arg0: E): boolean;
offerLast(arg0: E): boolean;
removeFirst(): E;
removeLast(): E;
pollLast(): E;
getFirst(): E;
getLast(): E;
peekFirst(): E;
peekLast(): E;
removeFirstOccurrence(arg0: java_lang_Object): boolean;
removeLastOccurrence(arg0: java_lang_Object): boolean;
offer(arg0: E): boolean;
pop(): E;
descendingIterator(): java_util_Iterator<E>;
push(arg0: E): void;
addLast(arg0: E): void;
pollFirst(): E;
addFirst(arg0: E): void;
add(arg0: E): boolean;
remove(): E;
remove(arg0: java_lang_Object): boolean;
clone(): java_util_ArrayDeque<E>;
clone(): java_lang_Object;
clear(): void;
isEmpty(): boolean;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
iterator(): java_util_Iterator<E>;
spliterator(): java_util_Spliterator<E>;
addAll(arg0: java_util_Collection<E>): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
poll(): E;
peek(): E;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
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
stream(): java_util_stream_Stream<E>;
parallelStream(): java_util_stream_Stream<E>;
constructor(arg0: java_util_Collection<E>);
constructor();
constructor(arg0: number);
  }
}