//@ts-nocheck

declare module 'java.nio.charset' {
import { Charset as java_nio_charset_Charset, CharsetEncoder as java_nio_charset_CharsetEncoder, CharsetDecoder as java_nio_charset_CharsetDecoder } from 'java.nio.charset';
import { Object as java_lang_Object, ThreadLocal as java_lang_ThreadLocal, Comparable as java_lang_Comparable } from 'java.lang';
import { ByteBuffer as java_nio_ByteBuffer, CharBuffer as java_nio_CharBuffer } from 'java.nio';
import { Set as java_util_Set, SortedMap as java_util_SortedMap, Locale as java_util_Locale } from 'java.util';
import { CharsetProvider as java_nio_charset_spi_CharsetProvider } from 'java.nio.charset.spi';

  export class Charset extends java_lang_Object implements java_lang_Comparable<java_nio_charset_Charset> {
static standardProvider: java_nio_charset_spi_CharsetProvider;
static zeroAliases: string[];
static cache1: java_lang_Object[];
static cache2: java_lang_Object[];
static gate: java_lang_ThreadLocal<java_lang_ThreadLocal<java_lang_Object>>;
static defaultCharset: java_nio_charset_Charset;
name: string;
aliases: string[];
aliasSet: java_util_Set<string>;
name(): string;
static forName(arg0: string): java_nio_charset_Charset;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_nio_charset_Charset): number;
compareTo(arg0: java_lang_Object): number;
contains(arg0: java_nio_charset_Charset): boolean;
decode(arg0: java_nio_ByteBuffer): java_nio_CharBuffer;
encode(arg0: java_nio_CharBuffer): java_nio_ByteBuffer;
encode(arg0: string): java_nio_ByteBuffer;
canEncode(): boolean;
isRegistered(): boolean;
static defaultCharset(): java_nio_charset_Charset;
static isSupported(arg0: string): boolean;
newEncoder(): java_nio_charset_CharsetEncoder;
aliases(): java_util_Set<string>;
static availableCharsets(): java_util_SortedMap<string, java_nio_charset_Charset>;
displayName(): string;
displayName(arg0: java_util_Locale): string;
newDecoder(): java_nio_charset_CharsetDecoder;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { ByteBuffer as java_nio_ByteBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder, CharBuffer as java_nio_CharBuffer, ShortBuffer as java_nio_ShortBuffer, IntBuffer as java_nio_IntBuffer, LongBuffer as java_nio_LongBuffer, FloatBuffer as java_nio_FloatBuffer, DoubleBuffer as java_nio_DoubleBuffer } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class ByteBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_ByteBuffer> {
hb: number[];
offset: number;
isReadOnly: boolean;
bigEndian: boolean;
nativeByteOrder: boolean;
short: number;
short: number;
char: string;
char: string;
int: number;
int: number;
long: number;
long: number;
float: number;
float: number;
double: number;
double: number;
class: java_lang_Class<java_lang_Object>;
get(arg0: number[], arg1: number, arg2: number): java_nio_ByteBuffer;
get(arg0: number): number;
get(): number;
get(arg0: number[]): java_nio_ByteBuffer;
put(arg0: java_nio_ByteBuffer): java_nio_ByteBuffer;
put(arg0: number): java_nio_ByteBuffer;
put(arg0: number, arg1: number): java_nio_ByteBuffer;
put(arg0: number[], arg1: number, arg2: number): java_nio_ByteBuffer;
put(arg0: number[]): java_nio_ByteBuffer;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_nio_ByteBuffer): number;
compareTo(arg0: java_lang_Object): number;
getShort(): number;
getShort(arg0: number): number;
putShort(arg0: number, arg1: number): java_nio_ByteBuffer;
putShort(arg0: number): java_nio_ByteBuffer;
getChar(): string;
getChar(arg0: number): string;
putChar(arg0: number, arg1: string): java_nio_ByteBuffer;
putChar(arg0: string): java_nio_ByteBuffer;
getInt(arg0: number): number;
getInt(): number;
putInt(arg0: number): java_nio_ByteBuffer;
putInt(arg0: number, arg1: number): java_nio_ByteBuffer;
getLong(arg0: number): number;
getLong(): number;
putLong(arg0: number, arg1: number): java_nio_ByteBuffer;
putLong(arg0: number): java_nio_ByteBuffer;
getFloat(): number;
getFloat(arg0: number): number;
putFloat(arg0: number, arg1: number): java_nio_ByteBuffer;
putFloat(arg0: number): java_nio_ByteBuffer;
getDouble(arg0: number): number;
getDouble(): number;
putDouble(arg0: number, arg1: number): java_nio_ByteBuffer;
putDouble(arg0: number): java_nio_ByteBuffer;
clear(): java_nio_Buffer;
clear(): java_nio_ByteBuffer;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_ByteBuffer;
isDirect(): boolean;
hasArray(): boolean;
array(): number[];
array(): java_lang_Object;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_ByteBuffer;
arrayOffset(): number;
static wrap(arg0: number[]): java_nio_ByteBuffer;
static wrap(arg0: number[], arg1: number, arg2: number): java_nio_ByteBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_ByteBuffer;
reset(): java_nio_ByteBuffer;
reset(): java_nio_Buffer;
flip(): java_nio_Buffer;
flip(): java_nio_ByteBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_ByteBuffer;
slice(): java_nio_Buffer;
slice(): java_nio_ByteBuffer;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_ByteBuffer;
static allocate(arg0: number): java_nio_ByteBuffer;
mismatch(arg0: java_nio_ByteBuffer): number;
static allocateDirect(arg0: number): java_nio_ByteBuffer;
asReadOnlyBuffer(): java_nio_ByteBuffer;
compact(): java_nio_ByteBuffer;
order(arg0: java_nio_ByteOrder): java_nio_ByteBuffer;
order(): java_nio_ByteOrder;
alignmentOffset(arg0: number, arg1: number): number;
alignedSlice(arg0: number): java_nio_ByteBuffer;
asCharBuffer(): java_nio_CharBuffer;
asShortBuffer(): java_nio_ShortBuffer;
asIntBuffer(): java_nio_IntBuffer;
asLongBuffer(): java_nio_LongBuffer;
asFloatBuffer(): java_nio_FloatBuffer;
asDoubleBuffer(): java_nio_DoubleBuffer;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { Buffer as java_nio_Buffer } from 'java.nio';
import { Object as java_lang_Object } from 'java.lang';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';

  export class Buffer extends java_lang_Object {
static UNSAFE: jdk_internal_misc_Unsafe;
static SPLITERATOR_CHARACTERISTICS: number;
mark: number;
position: number;
limit: number;
capacity: number;
address: number;
static $assertionsDisabled: boolean;
clear(): java_nio_Buffer;
limit(arg0: number): java_nio_Buffer;
limit(): number;
remaining(): number;
isDirect(): boolean;
hasArray(): boolean;
array(): java_lang_Object;
position(arg0: number): java_nio_Buffer;
position(): number;
arrayOffset(): number;
capacity(): number;
mark(): java_nio_Buffer;
reset(): java_nio_Buffer;
flip(): java_nio_Buffer;
rewind(): java_nio_Buffer;
hasRemaining(): boolean;
isReadOnly(): boolean;
slice(): java_nio_Buffer;
duplicate(): java_nio_Buffer;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object } from 'java.lang';

  export class ByteOrder extends java_lang_Object {
name: string;
static BIG_ENDIAN: java_nio_ByteOrder;
static LITTLE_ENDIAN: java_nio_ByteOrder;
static NATIVE_ORDER: java_nio_ByteOrder;
toString(): string;
static nativeOrder(): java_nio_ByteOrder;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { CharBuffer as java_nio_CharBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Class as java_lang_Class, Comparable as java_lang_Comparable, Readable as java_lang_Readable } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';

  export class CharBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_CharBuffer>, java_lang_Appendable, java_lang_CharSequence, java_lang_Readable {
hb: string[];
offset: number;
isReadOnly: boolean;
class: java_lang_Class<java_lang_Object>;
get(): string;
get(arg0: number): string;
get(arg0: string[], arg1: number, arg2: number): java_nio_CharBuffer;
get(arg0: string[]): java_nio_CharBuffer;
put(arg0: string): java_nio_CharBuffer;
put(arg0: string): java_nio_CharBuffer;
put(arg0: number, arg1: string): java_nio_CharBuffer;
put(arg0: java_nio_CharBuffer): java_nio_CharBuffer;
put(arg0: string[], arg1: number, arg2: number): java_nio_CharBuffer;
put(arg0: string, arg1: number, arg2: number): java_nio_CharBuffer;
put(arg0: string[]): java_nio_CharBuffer;
equals(arg0: java_lang_Object): boolean;
length(): number;
toString(): string;
append(arg0: java_lang_CharSequence): java_nio_CharBuffer;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_nio_CharBuffer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: string): java_nio_CharBuffer;
append(arg0: string): java_lang_Appendable;
hashCode(): number;
compareTo(arg0: java_nio_CharBuffer): number;
compareTo(arg0: java_lang_Object): number;
clear(): java_nio_Buffer;
clear(): java_nio_CharBuffer;
charAt(arg0: number): string;
subSequence(arg0: number, arg1: number): java_nio_CharBuffer;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_CharBuffer;
chars(): java_util_stream_IntStream;
isDirect(): boolean;
hasArray(): boolean;
array(): java_lang_Object;
array(): string[];
position(arg0: number): java_nio_CharBuffer;
position(arg0: number): java_nio_Buffer;
arrayOffset(): number;
read(arg0: java_nio_CharBuffer): number;
static wrap(arg0: string[]): java_nio_CharBuffer;
static wrap(arg0: java_lang_CharSequence): java_nio_CharBuffer;
static wrap(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_nio_CharBuffer;
static wrap(arg0: string[], arg1: number, arg2: number): java_nio_CharBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_CharBuffer;
reset(): java_nio_Buffer;
reset(): java_nio_CharBuffer;
flip(): java_nio_Buffer;
flip(): java_nio_CharBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_CharBuffer;
slice(): java_nio_CharBuffer;
slice(): java_nio_Buffer;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_CharBuffer;
static allocate(arg0: number): java_nio_CharBuffer;
mismatch(arg0: java_nio_CharBuffer): number;
asReadOnlyBuffer(): java_nio_CharBuffer;
compact(): java_nio_CharBuffer;
order(): java_nio_ByteOrder;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
codePoints(): java_util_stream_IntStream;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { ShortBuffer as java_nio_ShortBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class ShortBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_ShortBuffer> {
hb: number[];
offset: number;
isReadOnly: boolean;
class: java_lang_Class<java_lang_Object>;
get(arg0: number[], arg1: number, arg2: number): java_nio_ShortBuffer;
get(arg0: number): number;
get(): number;
get(arg0: number[]): java_nio_ShortBuffer;
put(arg0: number): java_nio_ShortBuffer;
put(arg0: number[], arg1: number, arg2: number): java_nio_ShortBuffer;
put(arg0: java_nio_ShortBuffer): java_nio_ShortBuffer;
put(arg0: number, arg1: number): java_nio_ShortBuffer;
put(arg0: number[]): java_nio_ShortBuffer;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_ShortBuffer): number;
clear(): java_nio_ShortBuffer;
clear(): java_nio_Buffer;
limit(arg0: number): java_nio_ShortBuffer;
limit(arg0: number): java_nio_Buffer;
isDirect(): boolean;
hasArray(): boolean;
array(): number[];
array(): java_lang_Object;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_ShortBuffer;
arrayOffset(): number;
static wrap(arg0: number[]): java_nio_ShortBuffer;
static wrap(arg0: number[], arg1: number, arg2: number): java_nio_ShortBuffer;
mark(): java_nio_ShortBuffer;
mark(): java_nio_Buffer;
reset(): java_nio_Buffer;
reset(): java_nio_ShortBuffer;
flip(): java_nio_Buffer;
flip(): java_nio_ShortBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_ShortBuffer;
slice(): java_nio_ShortBuffer;
slice(): java_nio_Buffer;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_ShortBuffer;
static allocate(arg0: number): java_nio_ShortBuffer;
mismatch(arg0: java_nio_ShortBuffer): number;
asReadOnlyBuffer(): java_nio_ShortBuffer;
compact(): java_nio_ShortBuffer;
order(): java_nio_ByteOrder;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { IntBuffer as java_nio_IntBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class IntBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_IntBuffer> {
hb: number[];
offset: number;
isReadOnly: boolean;
class: java_lang_Class<java_lang_Object>;
get(arg0: number[], arg1: number, arg2: number): java_nio_IntBuffer;
get(arg0: number): number;
get(): number;
get(arg0: number[]): java_nio_IntBuffer;
put(arg0: number): java_nio_IntBuffer;
put(arg0: number[], arg1: number, arg2: number): java_nio_IntBuffer;
put(arg0: java_nio_IntBuffer): java_nio_IntBuffer;
put(arg0: number, arg1: number): java_nio_IntBuffer;
put(arg0: number[]): java_nio_IntBuffer;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_IntBuffer): number;
clear(): java_nio_IntBuffer;
clear(): java_nio_Buffer;
limit(arg0: number): java_nio_IntBuffer;
limit(arg0: number): java_nio_Buffer;
isDirect(): boolean;
hasArray(): boolean;
array(): number[];
array(): java_lang_Object;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_IntBuffer;
arrayOffset(): number;
static wrap(arg0: number[]): java_nio_IntBuffer;
static wrap(arg0: number[], arg1: number, arg2: number): java_nio_IntBuffer;
mark(): java_nio_IntBuffer;
mark(): java_nio_Buffer;
reset(): java_nio_Buffer;
reset(): java_nio_IntBuffer;
flip(): java_nio_Buffer;
flip(): java_nio_IntBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_IntBuffer;
slice(): java_nio_IntBuffer;
slice(): java_nio_Buffer;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_IntBuffer;
static allocate(arg0: number): java_nio_IntBuffer;
mismatch(arg0: java_nio_IntBuffer): number;
asReadOnlyBuffer(): java_nio_IntBuffer;
compact(): java_nio_IntBuffer;
order(): java_nio_ByteOrder;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { LongBuffer as java_nio_LongBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class LongBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_LongBuffer> {
hb: number[];
offset: number;
isReadOnly: boolean;
class: java_lang_Class<java_lang_Object>;
get(arg0: number[], arg1: number, arg2: number): java_nio_LongBuffer;
get(arg0: number): number;
get(): number;
get(arg0: number[]): java_nio_LongBuffer;
put(arg0: number): java_nio_LongBuffer;
put(arg0: number[], arg1: number, arg2: number): java_nio_LongBuffer;
put(arg0: java_nio_LongBuffer): java_nio_LongBuffer;
put(arg0: number, arg1: number): java_nio_LongBuffer;
put(arg0: number[]): java_nio_LongBuffer;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_LongBuffer): number;
clear(): java_nio_LongBuffer;
clear(): java_nio_Buffer;
limit(arg0: number): java_nio_LongBuffer;
limit(arg0: number): java_nio_Buffer;
isDirect(): boolean;
hasArray(): boolean;
array(): number[];
array(): java_lang_Object;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_LongBuffer;
arrayOffset(): number;
static wrap(arg0: number[]): java_nio_LongBuffer;
static wrap(arg0: number[], arg1: number, arg2: number): java_nio_LongBuffer;
mark(): java_nio_LongBuffer;
mark(): java_nio_Buffer;
reset(): java_nio_Buffer;
reset(): java_nio_LongBuffer;
flip(): java_nio_Buffer;
flip(): java_nio_LongBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_LongBuffer;
slice(): java_nio_LongBuffer;
slice(): java_nio_Buffer;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_LongBuffer;
static allocate(arg0: number): java_nio_LongBuffer;
mismatch(arg0: java_nio_LongBuffer): number;
asReadOnlyBuffer(): java_nio_LongBuffer;
compact(): java_nio_LongBuffer;
order(): java_nio_ByteOrder;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { FloatBuffer as java_nio_FloatBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class FloatBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_FloatBuffer> {
hb: number[];
offset: number;
isReadOnly: boolean;
class: java_lang_Class<java_lang_Object>;
get(arg0: number[], arg1: number, arg2: number): java_nio_FloatBuffer;
get(arg0: number): number;
get(): number;
get(arg0: number[]): java_nio_FloatBuffer;
put(arg0: number): java_nio_FloatBuffer;
put(arg0: number[], arg1: number, arg2: number): java_nio_FloatBuffer;
put(arg0: java_nio_FloatBuffer): java_nio_FloatBuffer;
put(arg0: number, arg1: number): java_nio_FloatBuffer;
put(arg0: number[]): java_nio_FloatBuffer;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_FloatBuffer): number;
clear(): java_nio_FloatBuffer;
clear(): java_nio_Buffer;
limit(arg0: number): java_nio_FloatBuffer;
limit(arg0: number): java_nio_Buffer;
isDirect(): boolean;
hasArray(): boolean;
array(): number[];
array(): java_lang_Object;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_FloatBuffer;
arrayOffset(): number;
static wrap(arg0: number[]): java_nio_FloatBuffer;
static wrap(arg0: number[], arg1: number, arg2: number): java_nio_FloatBuffer;
mark(): java_nio_FloatBuffer;
mark(): java_nio_Buffer;
reset(): java_nio_Buffer;
reset(): java_nio_FloatBuffer;
flip(): java_nio_Buffer;
flip(): java_nio_FloatBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_FloatBuffer;
slice(): java_nio_FloatBuffer;
slice(): java_nio_Buffer;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_FloatBuffer;
static allocate(arg0: number): java_nio_FloatBuffer;
mismatch(arg0: java_nio_FloatBuffer): number;
asReadOnlyBuffer(): java_nio_FloatBuffer;
compact(): java_nio_FloatBuffer;
order(): java_nio_ByteOrder;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { DoubleBuffer as java_nio_DoubleBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class DoubleBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_DoubleBuffer> {
hb: number[];
offset: number;
isReadOnly: boolean;
class: java_lang_Class<java_lang_Object>;
get(arg0: number[], arg1: number, arg2: number): java_nio_DoubleBuffer;
get(arg0: number): number;
get(): number;
get(arg0: number[]): java_nio_DoubleBuffer;
put(arg0: number): java_nio_DoubleBuffer;
put(arg0: number[], arg1: number, arg2: number): java_nio_DoubleBuffer;
put(arg0: java_nio_DoubleBuffer): java_nio_DoubleBuffer;
put(arg0: number, arg1: number): java_nio_DoubleBuffer;
put(arg0: number[]): java_nio_DoubleBuffer;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_DoubleBuffer): number;
clear(): java_nio_DoubleBuffer;
clear(): java_nio_Buffer;
limit(arg0: number): java_nio_DoubleBuffer;
limit(arg0: number): java_nio_Buffer;
isDirect(): boolean;
hasArray(): boolean;
array(): number[];
array(): java_lang_Object;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_DoubleBuffer;
arrayOffset(): number;
static wrap(arg0: number[]): java_nio_DoubleBuffer;
static wrap(arg0: number[], arg1: number, arg2: number): java_nio_DoubleBuffer;
mark(): java_nio_DoubleBuffer;
mark(): java_nio_Buffer;
reset(): java_nio_Buffer;
reset(): java_nio_DoubleBuffer;
flip(): java_nio_Buffer;
flip(): java_nio_DoubleBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_DoubleBuffer;
slice(): java_nio_DoubleBuffer;
slice(): java_nio_Buffer;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_DoubleBuffer;
static allocate(arg0: number): java_nio_DoubleBuffer;
mismatch(arg0: java_nio_DoubleBuffer): number;
asReadOnlyBuffer(): java_nio_DoubleBuffer;
compact(): java_nio_DoubleBuffer;
order(): java_nio_ByteOrder;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.charset' {
import { Charset as java_nio_charset_Charset, CoderResult as java_nio_charset_CoderResult, CharsetEncoder as java_nio_charset_CharsetEncoder, CodingErrorAction as java_nio_charset_CodingErrorAction, CharsetDecoder as java_nio_charset_CharsetDecoder } from 'java.nio.charset';
import { CharBuffer as java_nio_CharBuffer, ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { CharSequence as java_lang_CharSequence, Object as java_lang_Object } from 'java.lang';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';

  export class CharsetEncoder extends java_lang_Object {
charset: java_nio_charset_Charset;
averageBytesPerChar: number;
maxBytesPerChar: number;
replacement: number[];
malformedInputAction: java_nio_charset_CodingErrorAction;
unmappableCharacterAction: java_nio_charset_CodingErrorAction;
static ST_RESET: number;
static ST_CODING: number;
static ST_END: number;
static ST_FLUSHED: number;
state: number;
static stateNames: string[];
cachedDecoder: java_lang_ref_WeakReference<java_nio_charset_CharsetDecoder>;
static $assertionsDisabled: boolean;
charset(): java_nio_charset_Charset;
replacement(): number[];
encode(arg0: java_nio_CharBuffer): java_nio_ByteBuffer;
encode(arg0: java_nio_CharBuffer, arg1: java_nio_ByteBuffer, arg2: boolean): java_nio_charset_CoderResult;
canEncode(arg0: string): boolean;
canEncode(arg0: java_lang_CharSequence): boolean;
flush(arg0: java_nio_ByteBuffer): java_nio_charset_CoderResult;
reset(): java_nio_charset_CharsetEncoder;
onMalformedInput(arg0: java_nio_charset_CodingErrorAction): java_nio_charset_CharsetEncoder;
onUnmappableCharacter(arg0: java_nio_charset_CodingErrorAction): java_nio_charset_CharsetEncoder;
isLegalReplacement(arg0: number[]): boolean;
averageBytesPerChar(): number;
maxBytesPerChar(): number;
malformedInputAction(): java_nio_charset_CodingErrorAction;
unmappableCharacterAction(): java_nio_charset_CodingErrorAction;
replaceWith(arg0: number[]): java_nio_charset_CharsetEncoder;

  }
}
//@ts-nocheck

declare module 'java.nio.charset' {
import { CoderResult as java_nio_charset_CoderResult } from 'java.nio.charset';
import { Object as java_lang_Object } from 'java.lang';

  export class CoderResult extends java_lang_Object {
static CR_UNDERFLOW: number;
static CR_OVERFLOW: number;
static CR_ERROR_MIN: number;
static CR_MALFORMED: number;
static CR_UNMAPPABLE: number;
static names: string[];
type: number;
length: number;
static UNDERFLOW: java_nio_charset_CoderResult;
static OVERFLOW: java_nio_charset_CoderResult;
static malformed4: java_nio_charset_CoderResult[];
static unmappable4: java_nio_charset_CoderResult[];
static $assertionsDisabled: boolean;
length(): number;
toString(): string;
throwException(): void;
isUnderflow(): boolean;
isOverflow(): boolean;
isError(): boolean;
static malformedForLength(arg0: number): java_nio_charset_CoderResult;
isMalformed(): boolean;
isUnmappable(): boolean;
static unmappableForLength(arg0: number): java_nio_charset_CoderResult;

  }
}
//@ts-nocheck

declare module 'java.nio.charset' {
import { CodingErrorAction as java_nio_charset_CodingErrorAction } from 'java.nio.charset';
import { Object as java_lang_Object } from 'java.lang';

  export class CodingErrorAction extends java_lang_Object {
name: string;
static IGNORE: java_nio_charset_CodingErrorAction;
static REPLACE: java_nio_charset_CodingErrorAction;
static REPORT: java_nio_charset_CodingErrorAction;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.charset' {
import { Charset as java_nio_charset_Charset, CoderResult as java_nio_charset_CoderResult, CharsetDecoder as java_nio_charset_CharsetDecoder, CodingErrorAction as java_nio_charset_CodingErrorAction } from 'java.nio.charset';
import { ByteBuffer as java_nio_ByteBuffer, CharBuffer as java_nio_CharBuffer } from 'java.nio';
import { Object as java_lang_Object } from 'java.lang';

  export class CharsetDecoder extends java_lang_Object {
charset: java_nio_charset_Charset;
averageCharsPerByte: number;
maxCharsPerByte: number;
replacement: string;
malformedInputAction: java_nio_charset_CodingErrorAction;
unmappableCharacterAction: java_nio_charset_CodingErrorAction;
static ST_RESET: number;
static ST_CODING: number;
static ST_END: number;
static ST_FLUSHED: number;
state: number;
static stateNames: string[];
static $assertionsDisabled: boolean;
charset(): java_nio_charset_Charset;
replacement(): string;
decode(arg0: java_nio_ByteBuffer): java_nio_CharBuffer;
decode(arg0: java_nio_ByteBuffer, arg1: java_nio_CharBuffer, arg2: boolean): java_nio_charset_CoderResult;
flush(arg0: java_nio_CharBuffer): java_nio_charset_CoderResult;
reset(): java_nio_charset_CharsetDecoder;
onMalformedInput(arg0: java_nio_charset_CodingErrorAction): java_nio_charset_CharsetDecoder;
onUnmappableCharacter(arg0: java_nio_charset_CodingErrorAction): java_nio_charset_CharsetDecoder;
malformedInputAction(): java_nio_charset_CodingErrorAction;
unmappableCharacterAction(): java_nio_charset_CodingErrorAction;
replaceWith(arg0: string): java_nio_charset_CharsetDecoder;
maxCharsPerByte(): number;
averageCharsPerByte(): number;
isAutoDetecting(): boolean;
isCharsetDetected(): boolean;
detectedCharset(): java_nio_charset_Charset;

  }
}
//@ts-nocheck

declare module 'java.nio.charset.spi' {
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';
import { Iterator as java_util_Iterator } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class CharsetProvider extends java_lang_Object {

charsetForName(arg0: string): java_nio_charset_Charset;
charsets(): java_util_Iterator<java_nio_charset_Charset>;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { Path as java_nio_file_Path, WatchService as java_nio_file_WatchService, WatchKey as java_nio_file_WatchKey, LinkOption as java_nio_file_LinkOption, FileSystem as java_nio_file_FileSystem, Watchable as java_nio_file_Watchable } from 'java.nio.file';
import { Object as java_lang_Object, Comparable as java_lang_Comparable, Iterable as java_lang_Iterable } from 'java.lang';
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Kind as java_nio_file_WatchEvent_Kind, Modifier as java_nio_file_WatchEvent_Modifier } from 'java.nio.file.WatchEvent';
import { URI as java_net_URI } from 'java.net';
import { File as java_io_File } from 'java.io';
import { Consumer as java_util_function_Consumer } from 'java.util.function';

  export class Path implements java_lang_Comparable<java_nio_file_Path>, java_lang_Iterable<java_nio_file_Path>, java_nio_file_Watchable {
name: java_nio_file_Path;
parent: java_nio_file_Path;
root: java_nio_file_Path;
fileName: java_nio_file_Path;
fileSystem: java_nio_file_FileSystem;
nameCount: number;
getName(arg0: number): java_nio_file_Path;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_file_Path): number;
startsWith(arg0: string): boolean;
startsWith(arg0: java_nio_file_Path): boolean;
endsWith(arg0: string): boolean;
endsWith(arg0: java_nio_file_Path): boolean;
iterator(): java_util_Iterator<java_nio_file_Path>;
resolve(arg0: string): java_nio_file_Path;
resolve(arg0: java_nio_file_Path): java_nio_file_Path;
getParent(): java_nio_file_Path;
isAbsolute(): boolean;
register(arg0: java_nio_file_WatchService, ...arg1: java_nio_file_WatchEvent_Kind<java_lang_Object>[]): java_nio_file_WatchKey;
register(arg0: java_nio_file_WatchService, arg1: java_nio_file_WatchEvent_Kind<java_lang_Object>[], ...arg2: java_nio_file_WatchEvent_Modifier[]): java_nio_file_WatchKey;
static of(arg0: string, ...arg1: string[]): java_nio_file_Path;
static of(arg0: java_net_URI): java_nio_file_Path;
getRoot(): java_nio_file_Path;
normalize(): java_nio_file_Path;
toRealPath(...arg0: java_nio_file_LinkOption[]): java_nio_file_Path;
toFile(): java_io_File;
getFileName(): java_nio_file_Path;
getFileSystem(): java_nio_file_FileSystem;
relativize(arg0: java_nio_file_Path): java_nio_file_Path;
getNameCount(): number;
subpath(arg0: number, arg1: number): java_nio_file_Path;
toAbsolutePath(): java_nio_file_Path;
toUri(): java_net_URI;
resolveSibling(arg0: string): java_nio_file_Path;
resolveSibling(arg0: java_nio_file_Path): java_nio_file_Path;
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { WatchKey as java_nio_file_WatchKey } from 'java.nio.file';
import { Closeable as java_io_Closeable } from 'java.io';

  export class WatchService implements java_io_Closeable {

poll(arg0: number, arg1: java_util_concurrent_TimeUnit): java_nio_file_WatchKey;
poll(): java_nio_file_WatchKey;
close(): void;
take(): java_nio_file_WatchKey;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { List as java_util_List } from 'java.util';
import { WatchEvent as java_nio_file_WatchEvent, Watchable as java_nio_file_Watchable } from 'java.nio.file';
import { Object as java_lang_Object } from 'java.lang';

  export class WatchKey {

reset(): boolean;
cancel(): void;
isValid(): boolean;
pollEvents(): java_util_List<java_nio_file_WatchEvent<java_lang_Object>>;
watchable(): java_nio_file_Watchable;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { Kind as java_nio_file_WatchEvent_Kind } from 'java.nio.file.WatchEvent';
import { Object as java_lang_Object } from 'java.lang';

  export class WatchEvent<T extends java_lang_Object> {

context(): T;
count(): number;
kind(): java_nio_file_WatchEvent_Kind<T>;

  }
}
//@ts-nocheck

declare module 'java.nio.file.WatchEvent' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class Kind<T extends java_lang_Object> {

name(): string;
type(): java_lang_Class<T>;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { WatchService as java_nio_file_WatchService, WatchKey as java_nio_file_WatchKey } from 'java.nio.file';
import { Kind as java_nio_file_WatchEvent_Kind, Modifier as java_nio_file_WatchEvent_Modifier } from 'java.nio.file.WatchEvent';
import { Object as java_lang_Object } from 'java.lang';

  export class Watchable {

register(arg0: java_nio_file_WatchService, arg1: java_nio_file_WatchEvent_Kind<java_lang_Object>[], ...arg2: java_nio_file_WatchEvent_Modifier[]): java_nio_file_WatchKey;
register(arg0: java_nio_file_WatchService, ...arg1: java_nio_file_WatchEvent_Kind<java_lang_Object>[]): java_nio_file_WatchKey;

  }
}
//@ts-nocheck

declare module 'java.nio.file.WatchEvent' {


  export class Modifier {

name(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { LinkOption as java_nio_file_LinkOption, OpenOption as java_nio_file_OpenOption, CopyOption as java_nio_file_CopyOption } from 'java.nio.file';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class LinkOption extends java_lang_Enum<java_nio_file_LinkOption> implements java_nio_file_OpenOption, java_nio_file_CopyOption {
static NOFOLLOW_LINKS: java_nio_file_LinkOption;
static $VALUES: java_nio_file_LinkOption[];
class: java_lang_Class<java_lang_Object>;
static values(): java_nio_file_LinkOption[];
static valueOf(arg0: string): java_nio_file_LinkOption;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {


  export class OpenOption {



  }
}
//@ts-nocheck

declare module 'java.nio.file' {


  export class CopyOption {



  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { FileSystemProvider as java_nio_file_spi_FileSystemProvider } from 'java.nio.file.spi';
import { Path as java_nio_file_Path, FileStore as java_nio_file_FileStore, PathMatcher as java_nio_file_PathMatcher, WatchService as java_nio_file_WatchService } from 'java.nio.file';
import { Iterable as java_lang_Iterable, Object as java_lang_Object } from 'java.lang';
import { UserPrincipalLookupService as java_nio_file_attribute_UserPrincipalLookupService } from 'java.nio.file.attribute';
import { Set as java_util_Set } from 'java.util';
import { Closeable as java_io_Closeable } from 'java.io';

  export class FileSystem extends java_lang_Object implements java_io_Closeable {
path: java_nio_file_Path;
separator: string;
rootDirectories: java_lang_Iterable<java_nio_file_Path>;
fileStores: java_lang_Iterable<java_nio_file_FileStore>;
pathMatcher: java_nio_file_PathMatcher;
userPrincipalLookupService: java_nio_file_attribute_UserPrincipalLookupService;
isOpen(): boolean;
provider(): java_nio_file_spi_FileSystemProvider;
close(): void;
getPath(arg0: string, ...arg1: string[]): java_nio_file_Path;
isReadOnly(): boolean;
getSeparator(): string;
getRootDirectories(): java_lang_Iterable<java_nio_file_Path>;
getFileStores(): java_lang_Iterable<java_nio_file_FileStore>;
getPathMatcher(arg0: string): java_nio_file_PathMatcher;
getUserPrincipalLookupService(): java_nio_file_attribute_UserPrincipalLookupService;
newWatchService(): java_nio_file_WatchService;
supportedFileAttributeViews(): java_util_Set<string>;

  }
}
//@ts-nocheck

declare module 'java.nio.file.spi' {
import { Path as java_nio_file_Path, AccessMode as java_nio_file_AccessMode, CopyOption as java_nio_file_CopyOption, FileSystem as java_nio_file_FileSystem, LinkOption as java_nio_file_LinkOption, FileStore as java_nio_file_FileStore, OpenOption as java_nio_file_OpenOption, DirectoryStream as java_nio_file_DirectoryStream } from 'java.nio.file';
import { URI as java_net_URI } from 'java.net';
import { FileAttribute as java_nio_file_attribute_FileAttribute, BasicFileAttributes as java_nio_file_attribute_BasicFileAttributes, FileAttributeView as java_nio_file_attribute_FileAttributeView } from 'java.nio.file.attribute';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Map as java_util_Map, List as java_util_List, Set as java_util_Set } from 'java.util';
import { FileSystemProvider as java_nio_file_spi_FileSystemProvider } from 'java.nio.file.spi';
import { FileChannel as java_nio_channels_FileChannel, AsynchronousFileChannel as java_nio_channels_AsynchronousFileChannel, SeekableByteChannel as java_nio_channels_SeekableByteChannel } from 'java.nio.channels';
import { ExecutorService as java_util_concurrent_ExecutorService } from 'java.util.concurrent';
import { InputStream as java_io_InputStream, OutputStream as java_io_OutputStream } from 'java.io';
import { Filter as java_nio_file_DirectoryStream_Filter } from 'java.nio.file.DirectoryStream';

  export class FileSystemProvider extends java_lang_Object {
static lock: java_lang_Object;
static installedProviders: java_util_List<java_nio_file_spi_FileSystemProvider>;
static loadingProviders: boolean;
static DEFAULT_OPEN_OPTIONS: java_util_Set<java_nio_file_OpenOption>;
path: java_nio_file_Path;
scheme: string;
fileSystem: java_nio_file_FileSystem;
fileStore: java_nio_file_FileStore;
fileAttributeView: V;
checkAccess(arg0: java_nio_file_Path, ...arg1: java_nio_file_AccessMode[]): void;
delete(arg0: java_nio_file_Path): void;
copy(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: java_nio_file_CopyOption[]): void;
getPath(arg0: java_net_URI): java_nio_file_Path;
getScheme(): string;
isHidden(arg0: java_nio_file_Path): boolean;
createDirectory(arg0: java_nio_file_Path, ...arg1: java_nio_file_attribute_FileAttribute<java_lang_Object>[]): void;
getFileSystem(arg0: java_net_URI): java_nio_file_FileSystem;
readAttributes<A extends java_nio_file_attribute_BasicFileAttributes>(arg0: java_nio_file_Path, arg1: java_lang_Class<A>, ...arg2: java_nio_file_LinkOption[]): A;
readAttributes(arg0: java_nio_file_Path, arg1: string, ...arg2: java_nio_file_LinkOption[]): java_util_Map<string, java_lang_Object>;
newFileSystem(arg0: java_net_URI, arg1: java_util_Map<string, java_lang_Object>): java_nio_file_FileSystem;
newFileSystem(arg0: java_nio_file_Path, arg1: java_util_Map<string, java_lang_Object>): java_nio_file_FileSystem;
static installedProviders(): java_util_List<java_nio_file_spi_FileSystemProvider>;
getFileStore(arg0: java_nio_file_Path): java_nio_file_FileStore;
getFileAttributeView<V extends java_nio_file_attribute_FileAttributeView>(arg0: java_nio_file_Path, arg1: java_lang_Class<V>, ...arg2: java_nio_file_LinkOption[]): V;
newFileChannel(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, ...arg2: java_nio_file_attribute_FileAttribute<java_lang_Object>[]): java_nio_channels_FileChannel;
newAsynchronousFileChannel(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, arg2: java_util_concurrent_ExecutorService, ...arg3: java_nio_file_attribute_FileAttribute<java_lang_Object>[]): java_nio_channels_AsynchronousFileChannel;
newByteChannel(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, ...arg2: java_nio_file_attribute_FileAttribute<java_lang_Object>[]): java_nio_channels_SeekableByteChannel;
move(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: java_nio_file_CopyOption[]): void;
isSameFile(arg0: java_nio_file_Path, arg1: java_nio_file_Path): boolean;
createSymbolicLink(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: java_nio_file_attribute_FileAttribute<java_lang_Object>[]): void;
createLink(arg0: java_nio_file_Path, arg1: java_nio_file_Path): void;
readSymbolicLink(arg0: java_nio_file_Path): java_nio_file_Path;
setAttribute(arg0: java_nio_file_Path, arg1: string, arg2: java_lang_Object, ...arg3: java_nio_file_LinkOption[]): void;
deleteIfExists(arg0: java_nio_file_Path): boolean;
newInputStream(arg0: java_nio_file_Path, ...arg1: java_nio_file_OpenOption[]): java_io_InputStream;
newOutputStream(arg0: java_nio_file_Path, ...arg1: java_nio_file_OpenOption[]): java_io_OutputStream;
newDirectoryStream(arg0: java_nio_file_Path, arg1: java_nio_file_DirectoryStream_Filter<java_lang_Object>): java_nio_file_DirectoryStream<java_nio_file_Path>;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { AccessMode as java_nio_file_AccessMode } from 'java.nio.file';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class AccessMode extends java_lang_Enum<java_nio_file_AccessMode> {
static READ: java_nio_file_AccessMode;
static WRITE: java_nio_file_AccessMode;
static EXECUTE: java_nio_file_AccessMode;
static $VALUES: java_nio_file_AccessMode[];
class: java_lang_Class<java_lang_Object>;
static values(): java_nio_file_AccessMode[];
static valueOf(arg0: string): java_nio_file_AccessMode;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { Object as java_lang_Object } from 'java.lang';

  export class FileAttribute<T extends java_lang_Object> {

name(): string;
value(): T;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { FileTime as java_nio_file_attribute_FileTime } from 'java.nio.file.attribute';
import { Object as java_lang_Object } from 'java.lang';

  export class BasicFileAttributes {

size(): number;
isDirectory(): boolean;
isRegularFile(): boolean;
isSymbolicLink(): boolean;
lastAccessTime(): java_nio_file_attribute_FileTime;
creationTime(): java_nio_file_attribute_FileTime;
isOther(): boolean;
lastModifiedTime(): java_nio_file_attribute_FileTime;
fileKey(): java_lang_Object;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { FileTime as java_nio_file_attribute_FileTime } from 'java.nio.file.attribute';
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Instant as java_time_Instant } from 'java.time';

  export class FileTime extends java_lang_Object implements java_lang_Comparable<java_nio_file_attribute_FileTime> {
unit: java_util_concurrent_TimeUnit;
value: number;
instant: java_time_Instant;
valueAsString: string;
static HOURS_PER_DAY: number;
static MINUTES_PER_HOUR: number;
static SECONDS_PER_MINUTE: number;
static SECONDS_PER_HOUR: number;
static SECONDS_PER_DAY: number;
static MILLIS_PER_SECOND: number;
static MICROS_PER_SECOND: number;
static NANOS_PER_SECOND: number;
static NANOS_PER_MILLI: number;
static NANOS_PER_MICRO: number;
static MIN_SECOND: number;
static MAX_SECOND: number;
static DAYS_PER_10000_YEARS: number;
static SECONDS_PER_10000_YEARS: number;
static SECONDS_0000_TO_1970: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_nio_file_attribute_FileTime): number;
compareTo(arg0: java_lang_Object): number;
to(arg0: java_util_concurrent_TimeUnit): number;
static from(arg0: java_time_Instant): java_nio_file_attribute_FileTime;
static from(arg0: number, arg1: java_util_concurrent_TimeUnit): java_nio_file_attribute_FileTime;
toMillis(): number;
static fromMillis(arg0: number): java_nio_file_attribute_FileTime;
toInstant(): java_time_Instant;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { FileAttributeView as java_nio_file_attribute_FileAttributeView, FileStoreAttributeView as java_nio_file_attribute_FileStoreAttributeView } from 'java.nio.file.attribute';

  export class FileStore extends java_lang_Object {
totalSpace: number;
usableSpace: number;
attribute: java_lang_Object;
blockSize: number;
unallocatedSpace: number;
fileStoreAttributeView: V;
name(): string;
type(): string;
isReadOnly(): boolean;
getTotalSpace(): number;
getUsableSpace(): number;
getAttribute(arg0: string): java_lang_Object;
getBlockSize(): number;
getUnallocatedSpace(): number;
supportsFileAttributeView(arg0: java_lang_Class<java_nio_file_attribute_FileAttributeView>): boolean;
supportsFileAttributeView(arg0: string): boolean;
getFileStoreAttributeView<V extends java_nio_file_attribute_FileStoreAttributeView>(arg0: java_lang_Class<V>): V;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { AttributeView as java_nio_file_attribute_AttributeView } from 'java.nio.file.attribute';

  export class FileAttributeView implements java_nio_file_attribute_AttributeView {

name(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {


  export class AttributeView {

name(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { AttributeView as java_nio_file_attribute_AttributeView } from 'java.nio.file.attribute';

  export class FileStoreAttributeView implements java_nio_file_attribute_AttributeView {

name(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { FileLock as java_nio_channels_FileLock, FileChannel as java_nio_channels_FileChannel, SeekableByteChannel as java_nio_channels_SeekableByteChannel, WritableByteChannel as java_nio_channels_WritableByteChannel, ReadableByteChannel as java_nio_channels_ReadableByteChannel, GatheringByteChannel as java_nio_channels_GatheringByteChannel, ScatteringByteChannel as java_nio_channels_ScatteringByteChannel } from 'java.nio.channels';
import { MapMode as java_nio_channels_FileChannel_MapMode } from 'java.nio.channels.FileChannel';
import { MappedByteBuffer as java_nio_MappedByteBuffer, ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Path as java_nio_file_Path, OpenOption as java_nio_file_OpenOption } from 'java.nio.file';
import { Set as java_util_Set } from 'java.util';
import { FileAttribute as java_nio_file_attribute_FileAttribute } from 'java.nio.file.attribute';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AbstractInterruptibleChannel as java_nio_channels_spi_AbstractInterruptibleChannel } from 'java.nio.channels.spi';

  export class FileChannel extends java_nio_channels_spi_AbstractInterruptibleChannel implements java_nio_channels_SeekableByteChannel, java_nio_channels_GatheringByteChannel, java_nio_channels_ScatteringByteChannel {
static NO_ATTRIBUTES: java_nio_file_attribute_FileAttribute<java_lang_Object>[];
class: java_lang_Class<java_lang_Object>;
lock(): java_nio_channels_FileLock;
lock(arg0: number, arg1: number, arg2: boolean): java_nio_channels_FileLock;
size(): number;
map(arg0: java_nio_channels_FileChannel_MapMode, arg1: number, arg2: number): java_nio_MappedByteBuffer;
position(arg0: number): java_nio_channels_FileChannel;
position(arg0: number): java_nio_channels_SeekableByteChannel;
position(): number;
write(arg0: java_nio_ByteBuffer, arg1: number): number;
write(arg0: java_nio_ByteBuffer): number;
write(arg0: java_nio_ByteBuffer[], arg1: number, arg2: number): number;
write(arg0: java_nio_ByteBuffer[]): number;
read(arg0: java_nio_ByteBuffer): number;
read(arg0: java_nio_ByteBuffer, arg1: number): number;
read(arg0: java_nio_ByteBuffer[]): number;
read(arg0: java_nio_ByteBuffer[], arg1: number, arg2: number): number;
static open(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, ...arg2: java_nio_file_attribute_FileAttribute<java_lang_Object>[]): java_nio_channels_FileChannel;
static open(arg0: java_nio_file_Path, ...arg1: java_nio_file_OpenOption[]): java_nio_channels_FileChannel;
transferTo(arg0: number, arg1: number, arg2: java_nio_channels_WritableByteChannel): number;
truncate(arg0: number): java_nio_channels_FileChannel;
truncate(arg0: number): java_nio_channels_SeekableByteChannel;
tryLock(): java_nio_channels_FileLock;
tryLock(arg0: number, arg1: number, arg2: boolean): java_nio_channels_FileLock;
force(arg0: boolean): void;
transferFrom(arg0: java_nio_channels_ReadableByteChannel, arg1: number, arg2: number): number;
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
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { FileChannel as java_nio_channels_FileChannel, Channel as java_nio_channels_Channel } from 'java.nio.channels';
import { Object as java_lang_Object, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';

  export class FileLock extends java_lang_Object implements java_lang_AutoCloseable {
channel: java_nio_channels_Channel;
position: number;
size: number;
shared: boolean;
toString(): string;
size(): number;
position(): number;
close(): void;
release(): void;
channel(): java_nio_channels_FileChannel;
isShared(): boolean;
isValid(): boolean;
overlaps(arg0: number, arg1: number): boolean;
acquiredBy(): java_nio_channels_Channel;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { Closeable as java_io_Closeable } from 'java.io';

  export class Channel implements java_io_Closeable {

isOpen(): boolean;
close(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels.FileChannel' {
import { MapMode as java_nio_channels_FileChannel_MapMode } from 'java.nio.channels.FileChannel';
import { Object as java_lang_Object } from 'java.lang';

  export class MapMode extends java_lang_Object {
static READ_ONLY: java_nio_channels_FileChannel_MapMode;
static READ_WRITE: java_nio_channels_FileChannel_MapMode;
static PRIVATE: java_nio_channels_FileChannel_MapMode;
name: string;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { MappedByteBuffer as java_nio_MappedByteBuffer, ByteBuffer as java_nio_ByteBuffer, Buffer as java_nio_Buffer } from 'java.nio';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { FileDescriptor as java_io_FileDescriptor } from 'java.io';

  export class MappedByteBuffer extends java_nio_ByteBuffer {
fd: java_io_FileDescriptor;
static unused: number;
class: java_lang_Class<java_lang_Object>;
clear(): java_nio_MappedByteBuffer;
clear(): java_nio_ByteBuffer;
clear(): java_nio_Buffer;
limit(arg0: number): java_nio_MappedByteBuffer;
limit(arg0: number): java_nio_ByteBuffer;
limit(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_MappedByteBuffer;
position(arg0: number): java_nio_ByteBuffer;
position(arg0: number): java_nio_Buffer;
load(): java_nio_MappedByteBuffer;
mark(): java_nio_ByteBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_MappedByteBuffer;
reset(): java_nio_ByteBuffer;
reset(): java_nio_MappedByteBuffer;
reset(): java_nio_Buffer;
flip(): java_nio_Buffer;
flip(): java_nio_MappedByteBuffer;
flip(): java_nio_ByteBuffer;
rewind(): java_nio_MappedByteBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_ByteBuffer;
isLoaded(): boolean;
force(): java_nio_MappedByteBuffer;
limit(): number;
remaining(): number;
position(): number;
capacity(): number;
hasRemaining(): boolean;
isReadOnly(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { SeekableByteChannel as java_nio_channels_SeekableByteChannel, ByteChannel as java_nio_channels_ByteChannel } from 'java.nio.channels';
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';

  export class SeekableByteChannel implements java_nio_channels_ByteChannel {

size(): number;
position(arg0: number): java_nio_channels_SeekableByteChannel;
position(): number;
write(arg0: java_nio_ByteBuffer): number;
read(arg0: java_nio_ByteBuffer): number;
truncate(arg0: number): java_nio_channels_SeekableByteChannel;
isOpen(): boolean;
close(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { ReadableByteChannel as java_nio_channels_ReadableByteChannel, WritableByteChannel as java_nio_channels_WritableByteChannel } from 'java.nio.channels';

  export class ByteChannel implements java_nio_channels_ReadableByteChannel, java_nio_channels_WritableByteChannel {

read(arg0: java_nio_ByteBuffer): number;
isOpen(): boolean;
close(): void;
write(arg0: java_nio_ByteBuffer): number;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Channel as java_nio_channels_Channel } from 'java.nio.channels';

  export class ReadableByteChannel implements java_nio_channels_Channel {

read(arg0: java_nio_ByteBuffer): number;
isOpen(): boolean;
close(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Channel as java_nio_channels_Channel } from 'java.nio.channels';

  export class WritableByteChannel implements java_nio_channels_Channel {

write(arg0: java_nio_ByteBuffer): number;
isOpen(): boolean;
close(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels.spi' {
import { Object as java_lang_Object, Thread as java_lang_Thread } from 'java.lang';
import { Interruptible as sun_nio_ch_Interruptible } from 'sun.nio.ch';
import { Channel as java_nio_channels_Channel, InterruptibleChannel as java_nio_channels_InterruptibleChannel } from 'java.nio.channels';

  export class AbstractInterruptibleChannel extends java_lang_Object implements java_nio_channels_Channel, java_nio_channels_InterruptibleChannel {
closeLock: java_lang_Object;
closed: boolean;
interruptor: sun_nio_ch_Interruptible;
interrupted: java_lang_Thread;
isOpen(): boolean;
close(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { Channel as java_nio_channels_Channel } from 'java.nio.channels';

  export class InterruptibleChannel implements java_nio_channels_Channel {

close(): void;
isOpen(): boolean;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { WritableByteChannel as java_nio_channels_WritableByteChannel } from 'java.nio.channels';

  export class GatheringByteChannel implements java_nio_channels_WritableByteChannel {

write(arg0: java_nio_ByteBuffer[], arg1: number, arg2: number): number;
write(arg0: java_nio_ByteBuffer[]): number;
write(arg0: java_nio_ByteBuffer): number;
isOpen(): boolean;
close(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { ReadableByteChannel as java_nio_channels_ReadableByteChannel } from 'java.nio.channels';

  export class ScatteringByteChannel implements java_nio_channels_ReadableByteChannel {

read(arg0: java_nio_ByteBuffer[], arg1: number, arg2: number): number;
read(arg0: java_nio_ByteBuffer[]): number;
read(arg0: java_nio_ByteBuffer): number;
isOpen(): boolean;
close(): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { Future as java_util_concurrent_Future, ExecutorService as java_util_concurrent_ExecutorService } from 'java.util.concurrent';
import { FileLock as java_nio_channels_FileLock, CompletionHandler as java_nio_channels_CompletionHandler, AsynchronousFileChannel as java_nio_channels_AsynchronousFileChannel, AsynchronousChannel as java_nio_channels_AsynchronousChannel } from 'java.nio.channels';
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Path as java_nio_file_Path, OpenOption as java_nio_file_OpenOption } from 'java.nio.file';
import { Set as java_util_Set } from 'java.util';
import { FileAttribute as java_nio_file_attribute_FileAttribute } from 'java.nio.file.attribute';

  export class AsynchronousFileChannel extends java_lang_Object implements java_nio_channels_AsynchronousChannel {
static NO_ATTRIBUTES: java_nio_file_attribute_FileAttribute<java_lang_Object>[];
lock(arg0: number, arg1: number, arg2: boolean): java_util_concurrent_Future<java_nio_channels_FileLock>;
lock<A extends java_lang_Object>(arg0: A, arg1: java_nio_channels_CompletionHandler<java_nio_channels_FileLock, java_lang_Object>): void;
lock<A extends java_lang_Object>(arg0: number, arg1: number, arg2: boolean, arg3: A, arg4: java_nio_channels_CompletionHandler<java_nio_channels_FileLock, java_lang_Object>): void;
lock(): java_util_concurrent_Future<java_nio_channels_FileLock>;
size(): number;
write<A extends java_lang_Object>(arg0: java_nio_ByteBuffer, arg1: number, arg2: A, arg3: java_nio_channels_CompletionHandler<java_lang_Integer, java_lang_Object>): void;
write(arg0: java_nio_ByteBuffer, arg1: number): java_util_concurrent_Future<java_lang_Integer>;
read<A extends java_lang_Object>(arg0: java_nio_ByteBuffer, arg1: number, arg2: A, arg3: java_nio_channels_CompletionHandler<java_lang_Integer, java_lang_Object>): void;
read(arg0: java_nio_ByteBuffer, arg1: number): java_util_concurrent_Future<java_lang_Integer>;
static open(arg0: java_nio_file_Path, ...arg1: java_nio_file_OpenOption[]): java_nio_channels_AsynchronousFileChannel;
static open(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, arg2: java_util_concurrent_ExecutorService, ...arg3: java_nio_file_attribute_FileAttribute<java_lang_Object>[]): java_nio_channels_AsynchronousFileChannel;
truncate(arg0: number): java_nio_channels_AsynchronousFileChannel;
tryLock(): java_nio_channels_FileLock;
tryLock(arg0: number, arg1: number, arg2: boolean): java_nio_channels_FileLock;
force(arg0: boolean): void;
close(): void;
isOpen(): boolean;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';

  export class CompletionHandler<V extends java_lang_Object, A extends java_lang_Object> {

completed(arg0: V, arg1: A): void;
failed(arg0: java_lang_Throwable, arg1: A): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { Channel as java_nio_channels_Channel } from 'java.nio.channels';

  export class AsynchronousChannel implements java_nio_channels_Channel {

close(): void;
isOpen(): boolean;

  }
}
//@ts-nocheck

declare module 'java.nio.file.DirectoryStream' {
import { Object as java_lang_Object } from 'java.lang';

  export class Filter<T extends java_lang_Object> {

accept(arg0: T): boolean;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object, Iterable as java_lang_Iterable } from 'java.lang';
import { Closeable as java_io_Closeable } from 'java.io';

  export class DirectoryStream<T extends java_lang_Object> implements java_io_Closeable, java_lang_Iterable<T> {

iterator(): java_util_Iterator<T>;
close(): void;
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { Path as java_nio_file_Path } from 'java.nio.file';

  export class PathMatcher {

matches(arg0: java_nio_file_Path): boolean;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { UserPrincipal as java_nio_file_attribute_UserPrincipal, GroupPrincipal as java_nio_file_attribute_GroupPrincipal } from 'java.nio.file.attribute';
import { Object as java_lang_Object } from 'java.lang';

  export class UserPrincipalLookupService extends java_lang_Object {

lookupPrincipalByName(arg0: string): java_nio_file_attribute_UserPrincipal;
lookupPrincipalByGroupName(arg0: string): java_nio_file_attribute_GroupPrincipal;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { Object as java_lang_Object } from 'java.lang';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';
import { Principal as java_security_Principal } from 'java.security';

  export class UserPrincipal implements java_security_Principal {
name: string;
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
implies(arg0: javax_security_auth_Subject): boolean;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { Object as java_lang_Object } from 'java.lang';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';
import { UserPrincipal as java_nio_file_attribute_UserPrincipal } from 'java.nio.file.attribute';

  export class GroupPrincipal implements java_nio_file_attribute_UserPrincipal {
name: string;
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
implies(arg0: javax_security_auth_Subject): boolean;

  }
}