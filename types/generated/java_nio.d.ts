//@ts-nocheck

declare module 'java.nio' {
import { ByteBuffer as java_nio_ByteBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder, CharBuffer as java_nio_CharBuffer, ShortBuffer as java_nio_ShortBuffer, IntBuffer as java_nio_IntBuffer, LongBuffer as java_nio_LongBuffer, FloatBuffer as java_nio_FloatBuffer, DoubleBuffer as java_nio_DoubleBuffer } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class ByteBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_ByteBuffer> {
char: string;
char: string;
class: java_lang_Class<java_lang_Object>;
double: number;
double: number;
float: number;
float: number;
int: number;
int: number;
long: number;
long: number;
short: number;
short: number;
alignedSlice(arg0: number): java_nio_ByteBuffer;
alignmentOffset(arg0: number, arg1: number): number;
array(): JArray<number>;
array(): java_lang_Object;
arrayOffset(): number;
asCharBuffer(): java_nio_CharBuffer;
asDoubleBuffer(): java_nio_DoubleBuffer;
asFloatBuffer(): java_nio_FloatBuffer;
asIntBuffer(): java_nio_IntBuffer;
asLongBuffer(): java_nio_LongBuffer;
asReadOnlyBuffer(): java_nio_ByteBuffer;
asShortBuffer(): java_nio_ShortBuffer;
clear(): java_nio_Buffer;
clear(): java_nio_ByteBuffer;
compact(): java_nio_ByteBuffer;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_ByteBuffer): number;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_ByteBuffer;
equals(arg0: java_lang_Object): boolean;
flip(): java_nio_Buffer;
flip(): java_nio_ByteBuffer;
get(): number;
get(arg0: JArray<number>): java_nio_ByteBuffer;
get(arg0: JArray<number>, arg1: number, arg2: number): java_nio_ByteBuffer;
get(arg0: number): number;
getChar(): string;
getChar(arg0: number): string;
getClass(): java_lang_Class<java_lang_Object>;
getDouble(): number;
getDouble(arg0: number): number;
getFloat(): number;
getFloat(arg0: number): number;
getInt(): number;
getInt(arg0: number): number;
getLong(): number;
getLong(arg0: number): number;
getShort(): number;
getShort(arg0: number): number;
hasArray(): boolean;
hashCode(): number;
isDirect(): boolean;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_ByteBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_ByteBuffer;
mismatch(arg0: java_nio_ByteBuffer): number;
notify(): void;
notifyAll(): void;
order(): java_nio_ByteOrder;
order(arg0: java_nio_ByteOrder): java_nio_ByteBuffer;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_ByteBuffer;
put(arg0: JArray<number>): java_nio_ByteBuffer;
put(arg0: JArray<number>, arg1: number, arg2: number): java_nio_ByteBuffer;
put(arg0: java_nio_ByteBuffer): java_nio_ByteBuffer;
put(arg0: number): java_nio_ByteBuffer;
put(arg0: number, arg1: number): java_nio_ByteBuffer;
putChar(arg0: number, arg1: string): java_nio_ByteBuffer;
putChar(arg0: string): java_nio_ByteBuffer;
putDouble(arg0: number): java_nio_ByteBuffer;
putDouble(arg0: number, arg1: number): java_nio_ByteBuffer;
putFloat(arg0: number): java_nio_ByteBuffer;
putFloat(arg0: number, arg1: number): java_nio_ByteBuffer;
putInt(arg0: number): java_nio_ByteBuffer;
putInt(arg0: number, arg1: number): java_nio_ByteBuffer;
putLong(arg0: number): java_nio_ByteBuffer;
putLong(arg0: number, arg1: number): java_nio_ByteBuffer;
putShort(arg0: number): java_nio_ByteBuffer;
putShort(arg0: number, arg1: number): java_nio_ByteBuffer;
reset(): java_nio_Buffer;
reset(): java_nio_ByteBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_ByteBuffer;
slice(): java_nio_Buffer;
slice(): java_nio_ByteBuffer;
static allocate(arg0: number): java_nio_ByteBuffer;
static allocateDirect(arg0: number): java_nio_ByteBuffer;
static wrap(arg0: JArray<number>): java_nio_ByteBuffer;
static wrap(arg0: JArray<number>, arg1: number, arg2: number): java_nio_ByteBuffer;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { Buffer as java_nio_Buffer } from 'java.nio';
import { Object as java_lang_Object } from 'java.lang';

  export class Buffer extends java_lang_Object {

array(): java_lang_Object;
arrayOffset(): number;
capacity(): number;
clear(): java_nio_Buffer;
duplicate(): java_nio_Buffer;
flip(): java_nio_Buffer;
hasArray(): boolean;
hasRemaining(): boolean;
isDirect(): boolean;
isReadOnly(): boolean;
limit(): number;
limit(arg0: number): java_nio_Buffer;
mark(): java_nio_Buffer;
position(): number;
position(arg0: number): java_nio_Buffer;
remaining(): number;
reset(): java_nio_Buffer;
rewind(): java_nio_Buffer;
slice(): java_nio_Buffer;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object } from 'java.lang';

  export class ByteOrder extends java_lang_Object {
static BIG_ENDIAN: java_nio_ByteOrder;
static LITTLE_ENDIAN: java_nio_ByteOrder;
static nativeOrder(): java_nio_ByteOrder;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { CharBuffer as java_nio_CharBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Class as java_lang_Class, Comparable as java_lang_Comparable, Readable as java_lang_Readable } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';

  export class CharBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_CharBuffer>, java_lang_Appendable, java_lang_CharSequence, java_lang_Readable {
class: java_lang_Class<java_lang_Object>;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_nio_CharBuffer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_nio_CharBuffer;
append(arg0: string): java_lang_Appendable;
append(arg0: string): java_nio_CharBuffer;
array(): JArray<string>;
array(): java_lang_Object;
arrayOffset(): number;
asReadOnlyBuffer(): java_nio_CharBuffer;
charAt(arg0: number): string;
chars(): java_util_stream_IntStream;
clear(): java_nio_Buffer;
clear(): java_nio_CharBuffer;
codePoints(): java_util_stream_IntStream;
compact(): java_nio_CharBuffer;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_CharBuffer): number;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_CharBuffer;
equals(arg0: java_lang_Object): boolean;
flip(): java_nio_Buffer;
flip(): java_nio_CharBuffer;
get(): string;
get(arg0: JArray<string>): java_nio_CharBuffer;
get(arg0: JArray<string>, arg1: number, arg2: number): java_nio_CharBuffer;
get(arg0: number): string;
getClass(): java_lang_Class<java_lang_Object>;
hasArray(): boolean;
hashCode(): number;
isDirect(): boolean;
length(): number;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_CharBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_CharBuffer;
mismatch(arg0: java_nio_CharBuffer): number;
notify(): void;
notifyAll(): void;
order(): java_nio_ByteOrder;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_CharBuffer;
put(arg0: JArray<string>): java_nio_CharBuffer;
put(arg0: JArray<string>, arg1: number, arg2: number): java_nio_CharBuffer;
put(arg0: java_nio_CharBuffer): java_nio_CharBuffer;
put(arg0: number, arg1: string): java_nio_CharBuffer;
put(arg0: string): java_nio_CharBuffer;
put(arg0: string): java_nio_CharBuffer;
put(arg0: string, arg1: number, arg2: number): java_nio_CharBuffer;
read(arg0: java_nio_CharBuffer): number;
reset(): java_nio_Buffer;
reset(): java_nio_CharBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_CharBuffer;
slice(): java_nio_Buffer;
slice(): java_nio_CharBuffer;
static allocate(arg0: number): java_nio_CharBuffer;
static wrap(arg0: JArray<string>): java_nio_CharBuffer;
static wrap(arg0: JArray<string>, arg1: number, arg2: number): java_nio_CharBuffer;
static wrap(arg0: java_lang_CharSequence): java_nio_CharBuffer;
static wrap(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_nio_CharBuffer;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
subSequence(arg0: number, arg1: number): java_nio_CharBuffer;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { ShortBuffer as java_nio_ShortBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class ShortBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_ShortBuffer> {
class: java_lang_Class<java_lang_Object>;
array(): JArray<number>;
array(): java_lang_Object;
arrayOffset(): number;
asReadOnlyBuffer(): java_nio_ShortBuffer;
clear(): java_nio_Buffer;
clear(): java_nio_ShortBuffer;
compact(): java_nio_ShortBuffer;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_ShortBuffer): number;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_ShortBuffer;
equals(arg0: java_lang_Object): boolean;
flip(): java_nio_Buffer;
flip(): java_nio_ShortBuffer;
get(): number;
get(arg0: JArray<number>): java_nio_ShortBuffer;
get(arg0: JArray<number>, arg1: number, arg2: number): java_nio_ShortBuffer;
get(arg0: number): number;
getClass(): java_lang_Class<java_lang_Object>;
hasArray(): boolean;
hashCode(): number;
isDirect(): boolean;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_ShortBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_ShortBuffer;
mismatch(arg0: java_nio_ShortBuffer): number;
notify(): void;
notifyAll(): void;
order(): java_nio_ByteOrder;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_ShortBuffer;
put(arg0: JArray<number>): java_nio_ShortBuffer;
put(arg0: JArray<number>, arg1: number, arg2: number): java_nio_ShortBuffer;
put(arg0: java_nio_ShortBuffer): java_nio_ShortBuffer;
put(arg0: number): java_nio_ShortBuffer;
put(arg0: number, arg1: number): java_nio_ShortBuffer;
reset(): java_nio_Buffer;
reset(): java_nio_ShortBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_ShortBuffer;
slice(): java_nio_Buffer;
slice(): java_nio_ShortBuffer;
static allocate(arg0: number): java_nio_ShortBuffer;
static wrap(arg0: JArray<number>): java_nio_ShortBuffer;
static wrap(arg0: JArray<number>, arg1: number, arg2: number): java_nio_ShortBuffer;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { IntBuffer as java_nio_IntBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class IntBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_IntBuffer> {
class: java_lang_Class<java_lang_Object>;
array(): JArray<number>;
array(): java_lang_Object;
arrayOffset(): number;
asReadOnlyBuffer(): java_nio_IntBuffer;
clear(): java_nio_Buffer;
clear(): java_nio_IntBuffer;
compact(): java_nio_IntBuffer;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_IntBuffer): number;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_IntBuffer;
equals(arg0: java_lang_Object): boolean;
flip(): java_nio_Buffer;
flip(): java_nio_IntBuffer;
get(): number;
get(arg0: JArray<number>): java_nio_IntBuffer;
get(arg0: JArray<number>, arg1: number, arg2: number): java_nio_IntBuffer;
get(arg0: number): number;
getClass(): java_lang_Class<java_lang_Object>;
hasArray(): boolean;
hashCode(): number;
isDirect(): boolean;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_IntBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_IntBuffer;
mismatch(arg0: java_nio_IntBuffer): number;
notify(): void;
notifyAll(): void;
order(): java_nio_ByteOrder;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_IntBuffer;
put(arg0: JArray<number>): java_nio_IntBuffer;
put(arg0: JArray<number>, arg1: number, arg2: number): java_nio_IntBuffer;
put(arg0: java_nio_IntBuffer): java_nio_IntBuffer;
put(arg0: number): java_nio_IntBuffer;
put(arg0: number, arg1: number): java_nio_IntBuffer;
reset(): java_nio_Buffer;
reset(): java_nio_IntBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_IntBuffer;
slice(): java_nio_Buffer;
slice(): java_nio_IntBuffer;
static allocate(arg0: number): java_nio_IntBuffer;
static wrap(arg0: JArray<number>): java_nio_IntBuffer;
static wrap(arg0: JArray<number>, arg1: number, arg2: number): java_nio_IntBuffer;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { LongBuffer as java_nio_LongBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class LongBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_LongBuffer> {
class: java_lang_Class<java_lang_Object>;
array(): JArray<number>;
array(): java_lang_Object;
arrayOffset(): number;
asReadOnlyBuffer(): java_nio_LongBuffer;
clear(): java_nio_Buffer;
clear(): java_nio_LongBuffer;
compact(): java_nio_LongBuffer;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_LongBuffer): number;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_LongBuffer;
equals(arg0: java_lang_Object): boolean;
flip(): java_nio_Buffer;
flip(): java_nio_LongBuffer;
get(): number;
get(arg0: JArray<number>): java_nio_LongBuffer;
get(arg0: JArray<number>, arg1: number, arg2: number): java_nio_LongBuffer;
get(arg0: number): number;
getClass(): java_lang_Class<java_lang_Object>;
hasArray(): boolean;
hashCode(): number;
isDirect(): boolean;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_LongBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_LongBuffer;
mismatch(arg0: java_nio_LongBuffer): number;
notify(): void;
notifyAll(): void;
order(): java_nio_ByteOrder;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_LongBuffer;
put(arg0: JArray<number>): java_nio_LongBuffer;
put(arg0: JArray<number>, arg1: number, arg2: number): java_nio_LongBuffer;
put(arg0: java_nio_LongBuffer): java_nio_LongBuffer;
put(arg0: number): java_nio_LongBuffer;
put(arg0: number, arg1: number): java_nio_LongBuffer;
reset(): java_nio_Buffer;
reset(): java_nio_LongBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_LongBuffer;
slice(): java_nio_Buffer;
slice(): java_nio_LongBuffer;
static allocate(arg0: number): java_nio_LongBuffer;
static wrap(arg0: JArray<number>): java_nio_LongBuffer;
static wrap(arg0: JArray<number>, arg1: number, arg2: number): java_nio_LongBuffer;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { FloatBuffer as java_nio_FloatBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class FloatBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_FloatBuffer> {
class: java_lang_Class<java_lang_Object>;
array(): JArray<number>;
array(): java_lang_Object;
arrayOffset(): number;
asReadOnlyBuffer(): java_nio_FloatBuffer;
clear(): java_nio_Buffer;
clear(): java_nio_FloatBuffer;
compact(): java_nio_FloatBuffer;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_FloatBuffer): number;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_FloatBuffer;
equals(arg0: java_lang_Object): boolean;
flip(): java_nio_Buffer;
flip(): java_nio_FloatBuffer;
get(): number;
get(arg0: JArray<number>): java_nio_FloatBuffer;
get(arg0: JArray<number>, arg1: number, arg2: number): java_nio_FloatBuffer;
get(arg0: number): number;
getClass(): java_lang_Class<java_lang_Object>;
hasArray(): boolean;
hashCode(): number;
isDirect(): boolean;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_FloatBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_FloatBuffer;
mismatch(arg0: java_nio_FloatBuffer): number;
notify(): void;
notifyAll(): void;
order(): java_nio_ByteOrder;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_FloatBuffer;
put(arg0: JArray<number>): java_nio_FloatBuffer;
put(arg0: JArray<number>, arg1: number, arg2: number): java_nio_FloatBuffer;
put(arg0: java_nio_FloatBuffer): java_nio_FloatBuffer;
put(arg0: number): java_nio_FloatBuffer;
put(arg0: number, arg1: number): java_nio_FloatBuffer;
reset(): java_nio_Buffer;
reset(): java_nio_FloatBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_FloatBuffer;
slice(): java_nio_Buffer;
slice(): java_nio_FloatBuffer;
static allocate(arg0: number): java_nio_FloatBuffer;
static wrap(arg0: JArray<number>): java_nio_FloatBuffer;
static wrap(arg0: JArray<number>, arg1: number, arg2: number): java_nio_FloatBuffer;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { DoubleBuffer as java_nio_DoubleBuffer, Buffer as java_nio_Buffer, ByteOrder as java_nio_ByteOrder } from 'java.nio';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class DoubleBuffer extends java_nio_Buffer implements java_lang_Comparable<java_nio_DoubleBuffer> {
class: java_lang_Class<java_lang_Object>;
array(): JArray<number>;
array(): java_lang_Object;
arrayOffset(): number;
asReadOnlyBuffer(): java_nio_DoubleBuffer;
clear(): java_nio_Buffer;
clear(): java_nio_DoubleBuffer;
compact(): java_nio_DoubleBuffer;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_DoubleBuffer): number;
duplicate(): java_nio_Buffer;
duplicate(): java_nio_DoubleBuffer;
equals(arg0: java_lang_Object): boolean;
flip(): java_nio_Buffer;
flip(): java_nio_DoubleBuffer;
get(): number;
get(arg0: JArray<number>): java_nio_DoubleBuffer;
get(arg0: JArray<number>, arg1: number, arg2: number): java_nio_DoubleBuffer;
get(arg0: number): number;
getClass(): java_lang_Class<java_lang_Object>;
hasArray(): boolean;
hashCode(): number;
isDirect(): boolean;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_DoubleBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_DoubleBuffer;
mismatch(arg0: java_nio_DoubleBuffer): number;
notify(): void;
notifyAll(): void;
order(): java_nio_ByteOrder;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_DoubleBuffer;
put(arg0: JArray<number>): java_nio_DoubleBuffer;
put(arg0: JArray<number>, arg1: number, arg2: number): java_nio_DoubleBuffer;
put(arg0: java_nio_DoubleBuffer): java_nio_DoubleBuffer;
put(arg0: number): java_nio_DoubleBuffer;
put(arg0: number, arg1: number): java_nio_DoubleBuffer;
reset(): java_nio_Buffer;
reset(): java_nio_DoubleBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_DoubleBuffer;
slice(): java_nio_Buffer;
slice(): java_nio_DoubleBuffer;
static allocate(arg0: number): java_nio_DoubleBuffer;
static wrap(arg0: JArray<number>): java_nio_DoubleBuffer;
static wrap(arg0: JArray<number>, arg1: number, arg2: number): java_nio_DoubleBuffer;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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
fileName: java_nio_file_Path;
fileSystem: java_nio_file_FileSystem;
name: java_nio_file_Path;
nameCount: number;
parent: java_nio_file_Path;
root: java_nio_file_Path;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_file_Path): number;
endsWith(arg0: java_nio_file_Path): boolean;
endsWith(arg0: string): boolean;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
getFileName(): java_nio_file_Path;
getFileSystem(): java_nio_file_FileSystem;
getName(arg0: number): java_nio_file_Path;
getNameCount(): number;
getParent(): java_nio_file_Path;
getRoot(): java_nio_file_Path;
hashCode(): number;
isAbsolute(): boolean;
iterator(): java_util_Iterator<java_nio_file_Path>;
normalize(): java_nio_file_Path;
register(arg0: java_nio_file_WatchService, ...arg1: JArray<java_nio_file_WatchEvent_Kind<java_lang_Object>>): java_nio_file_WatchKey;
register(arg0: java_nio_file_WatchService, arg1: JArray<java_nio_file_WatchEvent_Kind<java_lang_Object>>, ...arg2: JArray<java_nio_file_WatchEvent_Modifier>): java_nio_file_WatchKey;
relativize(arg0: java_nio_file_Path): java_nio_file_Path;
resolve(arg0: java_nio_file_Path): java_nio_file_Path;
resolve(arg0: string): java_nio_file_Path;
resolveSibling(arg0: java_nio_file_Path): java_nio_file_Path;
resolveSibling(arg0: string): java_nio_file_Path;
spliterator(): java_util_Spliterator<T>;
startsWith(arg0: java_nio_file_Path): boolean;
startsWith(arg0: string): boolean;
static of(arg0: java_net_URI): java_nio_file_Path;
static of(arg0: string, ...arg1: JArray<string>): java_nio_file_Path;
subpath(arg0: number, arg1: number): java_nio_file_Path;
toAbsolutePath(): java_nio_file_Path;
toFile(): java_io_File;
toRealPath(...arg0: JArray<java_nio_file_LinkOption>): java_nio_file_Path;
toString(): string;
toUri(): java_net_URI;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { WatchKey as java_nio_file_WatchKey } from 'java.nio.file';
import { Closeable as java_io_Closeable } from 'java.io';

  export class WatchService implements java_io_Closeable {

close(): void;
poll(): java_nio_file_WatchKey;
poll(arg0: number, arg1: java_util_concurrent_TimeUnit): java_nio_file_WatchKey;
take(): java_nio_file_WatchKey;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { List as java_util_List } from 'java.util';
import { WatchEvent as java_nio_file_WatchEvent, Watchable as java_nio_file_Watchable } from 'java.nio.file';
import { Object as java_lang_Object } from 'java.lang';

  export class WatchKey {

cancel(): void;
isValid(): boolean;
pollEvents(): java_util_List<java_nio_file_WatchEvent<java_lang_Object>>;
reset(): boolean;
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

register(arg0: java_nio_file_WatchService, ...arg1: JArray<java_nio_file_WatchEvent_Kind<java_lang_Object>>): java_nio_file_WatchKey;
register(arg0: java_nio_file_WatchService, arg1: JArray<java_nio_file_WatchEvent_Kind<java_lang_Object>>, ...arg2: JArray<java_nio_file_WatchEvent_Modifier>): java_nio_file_WatchKey;

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
class: java_lang_Class<java_lang_Object>;
static NOFOLLOW_LINKS: java_nio_file_LinkOption;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_nio_file_LinkOption;
static values(): JArray<java_nio_file_LinkOption>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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
fileStores: java_lang_Iterable<java_nio_file_FileStore>;
path: java_nio_file_Path;
pathMatcher: java_nio_file_PathMatcher;
rootDirectories: java_lang_Iterable<java_nio_file_Path>;
separator: string;
userPrincipalLookupService: java_nio_file_attribute_UserPrincipalLookupService;
close(): void;
getFileStores(): java_lang_Iterable<java_nio_file_FileStore>;
getPath(arg0: string, ...arg1: JArray<string>): java_nio_file_Path;
getPathMatcher(arg0: string): java_nio_file_PathMatcher;
getRootDirectories(): java_lang_Iterable<java_nio_file_Path>;
getSeparator(): string;
getUserPrincipalLookupService(): java_nio_file_attribute_UserPrincipalLookupService;
isOpen(): boolean;
isReadOnly(): boolean;
newWatchService(): java_nio_file_WatchService;
provider(): java_nio_file_spi_FileSystemProvider;
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
fileAttributeView: V;
fileStore: java_nio_file_FileStore;
fileSystem: java_nio_file_FileSystem;
path: java_nio_file_Path;
scheme: string;
checkAccess(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_AccessMode>): void;
copy(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: JArray<java_nio_file_CopyOption>): void;
createDirectory(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): void;
createLink(arg0: java_nio_file_Path, arg1: java_nio_file_Path): void;
createSymbolicLink(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): void;
delete(arg0: java_nio_file_Path): void;
deleteIfExists(arg0: java_nio_file_Path): boolean;
getFileAttributeView<V extends java_nio_file_attribute_FileAttributeView>(arg0: java_nio_file_Path, arg1: java_lang_Class<V>, ...arg2: JArray<java_nio_file_LinkOption>): V;
getFileStore(arg0: java_nio_file_Path): java_nio_file_FileStore;
getFileSystem(arg0: java_net_URI): java_nio_file_FileSystem;
getPath(arg0: java_net_URI): java_nio_file_Path;
getScheme(): string;
isHidden(arg0: java_nio_file_Path): boolean;
isSameFile(arg0: java_nio_file_Path, arg1: java_nio_file_Path): boolean;
move(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: JArray<java_nio_file_CopyOption>): void;
newAsynchronousFileChannel(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, arg2: java_util_concurrent_ExecutorService, ...arg3: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_channels_AsynchronousFileChannel;
newByteChannel(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, ...arg2: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_channels_SeekableByteChannel;
newDirectoryStream(arg0: java_nio_file_Path, arg1: java_nio_file_DirectoryStream_Filter<java_lang_Object>): java_nio_file_DirectoryStream<java_nio_file_Path>;
newFileChannel(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, ...arg2: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_channels_FileChannel;
newFileSystem(arg0: java_net_URI, arg1: java_util_Map<string, java_lang_Object>): java_nio_file_FileSystem;
newFileSystem(arg0: java_nio_file_Path, arg1: java_util_Map<string, java_lang_Object>): java_nio_file_FileSystem;
newInputStream(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_OpenOption>): java_io_InputStream;
newOutputStream(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_OpenOption>): java_io_OutputStream;
readAttributes(arg0: java_nio_file_Path, arg1: string, ...arg2: JArray<java_nio_file_LinkOption>): java_util_Map<string, java_lang_Object>;
readAttributes<A extends java_nio_file_attribute_BasicFileAttributes>(arg0: java_nio_file_Path, arg1: java_lang_Class<A>, ...arg2: JArray<java_nio_file_LinkOption>): A;
readSymbolicLink(arg0: java_nio_file_Path): java_nio_file_Path;
setAttribute(arg0: java_nio_file_Path, arg1: string, arg2: java_lang_Object, ...arg3: JArray<java_nio_file_LinkOption>): void;
static installedProviders(): java_util_List<java_nio_file_spi_FileSystemProvider>;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { AccessMode as java_nio_file_AccessMode } from 'java.nio.file';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class AccessMode extends java_lang_Enum<java_nio_file_AccessMode> {
class: java_lang_Class<java_lang_Object>;
static EXECUTE: java_nio_file_AccessMode;
static READ: java_nio_file_AccessMode;
static WRITE: java_nio_file_AccessMode;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_nio_file_AccessMode;
static values(): JArray<java_nio_file_AccessMode>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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

creationTime(): java_nio_file_attribute_FileTime;
fileKey(): java_lang_Object;
isDirectory(): boolean;
isOther(): boolean;
isRegularFile(): boolean;
isSymbolicLink(): boolean;
lastAccessTime(): java_nio_file_attribute_FileTime;
lastModifiedTime(): java_nio_file_attribute_FileTime;
size(): number;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { FileTime as java_nio_file_attribute_FileTime } from 'java.nio.file.attribute';
import { TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Instant as java_time_Instant } from 'java.time';

  export class FileTime extends java_lang_Object implements java_lang_Comparable<java_nio_file_attribute_FileTime> {

compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_file_attribute_FileTime): number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static from(arg0: java_time_Instant): java_nio_file_attribute_FileTime;
static from(arg0: number, arg1: java_util_concurrent_TimeUnit): java_nio_file_attribute_FileTime;
static fromMillis(arg0: number): java_nio_file_attribute_FileTime;
to(arg0: java_util_concurrent_TimeUnit): number;
toInstant(): java_time_Instant;
toMillis(): number;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { FileAttributeView as java_nio_file_attribute_FileAttributeView, FileStoreAttributeView as java_nio_file_attribute_FileStoreAttributeView } from 'java.nio.file.attribute';

  export class FileStore extends java_lang_Object {
attribute: java_lang_Object;
blockSize: number;
fileStoreAttributeView: V;
totalSpace: number;
unallocatedSpace: number;
usableSpace: number;
getAttribute(arg0: string): java_lang_Object;
getBlockSize(): number;
getFileStoreAttributeView<V extends java_nio_file_attribute_FileStoreAttributeView>(arg0: java_lang_Class<V>): V;
getTotalSpace(): number;
getUnallocatedSpace(): number;
getUsableSpace(): number;
isReadOnly(): boolean;
name(): string;
supportsFileAttributeView(arg0: java_lang_Class<java_nio_file_attribute_FileAttributeView>): boolean;
supportsFileAttributeView(arg0: string): boolean;
type(): string;

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
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
force(arg0: boolean): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
lock(): java_nio_channels_FileLock;
lock(arg0: number, arg1: number, arg2: boolean): java_nio_channels_FileLock;
map(arg0: java_nio_channels_FileChannel_MapMode, arg1: number, arg2: number): java_nio_MappedByteBuffer;
notify(): void;
notifyAll(): void;
position(): number;
position(arg0: number): java_nio_channels_FileChannel;
position(arg0: number): java_nio_channels_SeekableByteChannel;
read(arg0: JArray<java_nio_ByteBuffer>): number;
read(arg0: JArray<java_nio_ByteBuffer>, arg1: number, arg2: number): number;
read(arg0: java_nio_ByteBuffer): number;
read(arg0: java_nio_ByteBuffer, arg1: number): number;
size(): number;
static open(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_OpenOption>): java_nio_channels_FileChannel;
static open(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, ...arg2: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_channels_FileChannel;
toString(): string;
transferFrom(arg0: java_nio_channels_ReadableByteChannel, arg1: number, arg2: number): number;
transferTo(arg0: number, arg1: number, arg2: java_nio_channels_WritableByteChannel): number;
truncate(arg0: number): java_nio_channels_FileChannel;
truncate(arg0: number): java_nio_channels_SeekableByteChannel;
tryLock(): java_nio_channels_FileLock;
tryLock(arg0: number, arg1: number, arg2: boolean): java_nio_channels_FileLock;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
write(arg0: JArray<java_nio_ByteBuffer>): number;
write(arg0: JArray<java_nio_ByteBuffer>, arg1: number, arg2: number): number;
write(arg0: java_nio_ByteBuffer): number;
write(arg0: java_nio_ByteBuffer, arg1: number): number;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { FileChannel as java_nio_channels_FileChannel, Channel as java_nio_channels_Channel } from 'java.nio.channels';
import { Object as java_lang_Object, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';

  export class FileLock extends java_lang_Object implements java_lang_AutoCloseable {

acquiredBy(): java_nio_channels_Channel;
channel(): java_nio_channels_FileChannel;
close(): void;
isShared(): boolean;
isValid(): boolean;
overlaps(arg0: number, arg1: number): boolean;
position(): number;
release(): void;
size(): number;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { Closeable as java_io_Closeable } from 'java.io';

  export class Channel implements java_io_Closeable {

close(): void;
isOpen(): boolean;

  }
}
//@ts-nocheck

declare module 'java.nio.channels.FileChannel' {
import { MapMode as java_nio_channels_FileChannel_MapMode } from 'java.nio.channels.FileChannel';
import { Object as java_lang_Object } from 'java.lang';

  export class MapMode extends java_lang_Object {
static PRIVATE: java_nio_channels_FileChannel_MapMode;
static READ_ONLY: java_nio_channels_FileChannel_MapMode;
static READ_WRITE: java_nio_channels_FileChannel_MapMode;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio' {
import { MappedByteBuffer as java_nio_MappedByteBuffer, ByteBuffer as java_nio_ByteBuffer, Buffer as java_nio_Buffer } from 'java.nio';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class MappedByteBuffer extends java_nio_ByteBuffer {
class: java_lang_Class<java_lang_Object>;
capacity(): number;
clear(): java_nio_Buffer;
clear(): java_nio_ByteBuffer;
clear(): java_nio_MappedByteBuffer;
flip(): java_nio_Buffer;
flip(): java_nio_ByteBuffer;
flip(): java_nio_MappedByteBuffer;
force(): java_nio_MappedByteBuffer;
getClass(): java_lang_Class<java_lang_Object>;
hasRemaining(): boolean;
isLoaded(): boolean;
isReadOnly(): boolean;
limit(): number;
limit(arg0: number): java_nio_Buffer;
limit(arg0: number): java_nio_ByteBuffer;
limit(arg0: number): java_nio_MappedByteBuffer;
load(): java_nio_MappedByteBuffer;
mark(): java_nio_Buffer;
mark(): java_nio_ByteBuffer;
mark(): java_nio_MappedByteBuffer;
notify(): void;
notifyAll(): void;
position(): number;
position(arg0: number): java_nio_Buffer;
position(arg0: number): java_nio_ByteBuffer;
position(arg0: number): java_nio_MappedByteBuffer;
remaining(): number;
reset(): java_nio_Buffer;
reset(): java_nio_ByteBuffer;
reset(): java_nio_MappedByteBuffer;
rewind(): java_nio_Buffer;
rewind(): java_nio_ByteBuffer;
rewind(): java_nio_MappedByteBuffer;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { SeekableByteChannel as java_nio_channels_SeekableByteChannel, ByteChannel as java_nio_channels_ByteChannel } from 'java.nio.channels';
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';

  export class SeekableByteChannel implements java_nio_channels_ByteChannel {

close(): void;
isOpen(): boolean;
position(): number;
position(arg0: number): java_nio_channels_SeekableByteChannel;
read(arg0: java_nio_ByteBuffer): number;
size(): number;
truncate(arg0: number): java_nio_channels_SeekableByteChannel;
write(arg0: java_nio_ByteBuffer): number;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { ReadableByteChannel as java_nio_channels_ReadableByteChannel, WritableByteChannel as java_nio_channels_WritableByteChannel } from 'java.nio.channels';

  export class ByteChannel implements java_nio_channels_ReadableByteChannel, java_nio_channels_WritableByteChannel {

close(): void;
isOpen(): boolean;
read(arg0: java_nio_ByteBuffer): number;
write(arg0: java_nio_ByteBuffer): number;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Channel as java_nio_channels_Channel } from 'java.nio.channels';

  export class ReadableByteChannel implements java_nio_channels_Channel {

close(): void;
isOpen(): boolean;
read(arg0: java_nio_ByteBuffer): number;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Channel as java_nio_channels_Channel } from 'java.nio.channels';

  export class WritableByteChannel implements java_nio_channels_Channel {

close(): void;
isOpen(): boolean;
write(arg0: java_nio_ByteBuffer): number;

  }
}
//@ts-nocheck

declare module 'java.nio.channels.spi' {
import { Object as java_lang_Object } from 'java.lang';
import { Channel as java_nio_channels_Channel, InterruptibleChannel as java_nio_channels_InterruptibleChannel } from 'java.nio.channels';

  export class AbstractInterruptibleChannel extends java_lang_Object implements java_nio_channels_Channel, java_nio_channels_InterruptibleChannel {

close(): void;
isOpen(): boolean;

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

close(): void;
isOpen(): boolean;
write(arg0: JArray<java_nio_ByteBuffer>): number;
write(arg0: JArray<java_nio_ByteBuffer>, arg1: number, arg2: number): number;
write(arg0: java_nio_ByteBuffer): number;

  }
}
//@ts-nocheck

declare module 'java.nio.channels' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { ReadableByteChannel as java_nio_channels_ReadableByteChannel } from 'java.nio.channels';

  export class ScatteringByteChannel implements java_nio_channels_ReadableByteChannel {

close(): void;
isOpen(): boolean;
read(arg0: JArray<java_nio_ByteBuffer>): number;
read(arg0: JArray<java_nio_ByteBuffer>, arg1: number, arg2: number): number;
read(arg0: java_nio_ByteBuffer): number;

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

close(): void;
force(arg0: boolean): void;
isOpen(): boolean;
lock(): java_util_concurrent_Future<java_nio_channels_FileLock>;
lock(arg0: number, arg1: number, arg2: boolean): java_util_concurrent_Future<java_nio_channels_FileLock>;
lock<A extends java_lang_Object>(arg0: A, arg1: java_nio_channels_CompletionHandler<java_nio_channels_FileLock, java_lang_Object>): void;
lock<A extends java_lang_Object>(arg0: number, arg1: number, arg2: boolean, arg3: A, arg4: java_nio_channels_CompletionHandler<java_nio_channels_FileLock, java_lang_Object>): void;
read(arg0: java_nio_ByteBuffer, arg1: number): java_util_concurrent_Future<java_lang_Integer>;
read<A extends java_lang_Object>(arg0: java_nio_ByteBuffer, arg1: number, arg2: A, arg3: java_nio_channels_CompletionHandler<java_lang_Integer, java_lang_Object>): void;
size(): number;
static open(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_OpenOption>): java_nio_channels_AsynchronousFileChannel;
static open(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, arg2: java_util_concurrent_ExecutorService, ...arg3: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_channels_AsynchronousFileChannel;
truncate(arg0: number): java_nio_channels_AsynchronousFileChannel;
tryLock(): java_nio_channels_FileLock;
tryLock(arg0: number, arg1: number, arg2: boolean): java_nio_channels_FileLock;
write(arg0: java_nio_ByteBuffer, arg1: number): java_util_concurrent_Future<java_lang_Integer>;
write<A extends java_lang_Object>(arg0: java_nio_ByteBuffer, arg1: number, arg2: A, arg3: java_nio_channels_CompletionHandler<java_lang_Integer, java_lang_Object>): void;

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

close(): void;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
iterator(): java_util_Iterator<T>;
spliterator(): java_util_Spliterator<T>;

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

lookupPrincipalByGroupName(arg0: string): java_nio_file_attribute_GroupPrincipal;
lookupPrincipalByName(arg0: string): java_nio_file_attribute_UserPrincipal;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { Object as java_lang_Object } from 'java.lang';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';
import { Principal as java_security_Principal } from 'java.security';

  export class UserPrincipal implements java_security_Principal {
name: string;
equals(arg0: java_lang_Object): boolean;
getName(): string;
hashCode(): number;
implies(arg0: javax_security_auth_Subject): boolean;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.charset' {
import { Charset as java_nio_charset_Charset, CharsetEncoder as java_nio_charset_CharsetEncoder, CharsetDecoder as java_nio_charset_CharsetDecoder } from 'java.nio.charset';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { ByteBuffer as java_nio_ByteBuffer, CharBuffer as java_nio_CharBuffer } from 'java.nio';
import { Set as java_util_Set, SortedMap as java_util_SortedMap, Locale as java_util_Locale } from 'java.util';

  export class Charset extends java_lang_Object implements java_lang_Comparable<java_nio_charset_Charset> {

aliases(): java_util_Set<string>;
canEncode(): boolean;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_nio_charset_Charset): number;
contains(arg0: java_nio_charset_Charset): boolean;
decode(arg0: java_nio_ByteBuffer): java_nio_CharBuffer;
displayName(): string;
displayName(arg0: java_util_Locale): string;
encode(arg0: java_nio_CharBuffer): java_nio_ByteBuffer;
encode(arg0: string): java_nio_ByteBuffer;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
isRegistered(): boolean;
name(): string;
newDecoder(): java_nio_charset_CharsetDecoder;
newEncoder(): java_nio_charset_CharsetEncoder;
static availableCharsets(): java_util_SortedMap<string, java_nio_charset_Charset>;
static defaultCharset(): java_nio_charset_Charset;
static forName(arg0: string): java_nio_charset_Charset;
static isSupported(arg0: string): boolean;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.charset' {
import { Charset as java_nio_charset_Charset, CoderResult as java_nio_charset_CoderResult, CharsetEncoder as java_nio_charset_CharsetEncoder, CodingErrorAction as java_nio_charset_CodingErrorAction } from 'java.nio.charset';
import { CharBuffer as java_nio_CharBuffer, ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { CharSequence as java_lang_CharSequence, Object as java_lang_Object } from 'java.lang';

  export class CharsetEncoder extends java_lang_Object {

averageBytesPerChar(): number;
canEncode(arg0: java_lang_CharSequence): boolean;
canEncode(arg0: string): boolean;
charset(): java_nio_charset_Charset;
encode(arg0: java_nio_CharBuffer): java_nio_ByteBuffer;
encode(arg0: java_nio_CharBuffer, arg1: java_nio_ByteBuffer, arg2: boolean): java_nio_charset_CoderResult;
flush(arg0: java_nio_ByteBuffer): java_nio_charset_CoderResult;
isLegalReplacement(arg0: JArray<number>): boolean;
malformedInputAction(): java_nio_charset_CodingErrorAction;
maxBytesPerChar(): number;
onMalformedInput(arg0: java_nio_charset_CodingErrorAction): java_nio_charset_CharsetEncoder;
onUnmappableCharacter(arg0: java_nio_charset_CodingErrorAction): java_nio_charset_CharsetEncoder;
replaceWith(arg0: JArray<number>): java_nio_charset_CharsetEncoder;
replacement(): JArray<number>;
reset(): java_nio_charset_CharsetEncoder;
unmappableCharacterAction(): java_nio_charset_CodingErrorAction;

  }
}
//@ts-nocheck

declare module 'java.nio.charset' {
import { CoderResult as java_nio_charset_CoderResult } from 'java.nio.charset';
import { Object as java_lang_Object } from 'java.lang';

  export class CoderResult extends java_lang_Object {
static OVERFLOW: java_nio_charset_CoderResult;
static UNDERFLOW: java_nio_charset_CoderResult;
isError(): boolean;
isMalformed(): boolean;
isOverflow(): boolean;
isUnderflow(): boolean;
isUnmappable(): boolean;
length(): number;
static malformedForLength(arg0: number): java_nio_charset_CoderResult;
static unmappableForLength(arg0: number): java_nio_charset_CoderResult;
throwException(): void;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.charset' {
import { CodingErrorAction as java_nio_charset_CodingErrorAction } from 'java.nio.charset';
import { Object as java_lang_Object } from 'java.lang';

  export class CodingErrorAction extends java_lang_Object {
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

averageCharsPerByte(): number;
charset(): java_nio_charset_Charset;
decode(arg0: java_nio_ByteBuffer): java_nio_CharBuffer;
decode(arg0: java_nio_ByteBuffer, arg1: java_nio_CharBuffer, arg2: boolean): java_nio_charset_CoderResult;
detectedCharset(): java_nio_charset_Charset;
flush(arg0: java_nio_CharBuffer): java_nio_charset_CoderResult;
isAutoDetecting(): boolean;
isCharsetDetected(): boolean;
malformedInputAction(): java_nio_charset_CodingErrorAction;
maxCharsPerByte(): number;
onMalformedInput(arg0: java_nio_charset_CodingErrorAction): java_nio_charset_CharsetDecoder;
onUnmappableCharacter(arg0: java_nio_charset_CodingErrorAction): java_nio_charset_CharsetDecoder;
replaceWith(arg0: string): java_nio_charset_CharsetDecoder;
replacement(): string;
reset(): java_nio_charset_CharsetDecoder;
unmappableCharacterAction(): java_nio_charset_CodingErrorAction;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { Object as java_lang_Object } from 'java.lang';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';
import { UserPrincipal as java_nio_file_attribute_UserPrincipal } from 'java.nio.file.attribute';

  export class GroupPrincipal implements java_nio_file_attribute_UserPrincipal {
name: string;
equals(arg0: java_lang_Object): boolean;
getName(): string;
hashCode(): number;
implies(arg0: javax_security_auth_Subject): boolean;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { Path as java_nio_file_Path, OpenOption as java_nio_file_OpenOption, CopyOption as java_nio_file_CopyOption, FileVisitOption as java_nio_file_FileVisitOption, LinkOption as java_nio_file_LinkOption, FileVisitor as java_nio_file_FileVisitor, FileStore as java_nio_file_FileStore, DirectoryStream as java_nio_file_DirectoryStream } from 'java.nio.file';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';
import { Iterable as java_lang_Iterable, CharSequence as java_lang_CharSequence, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream, BufferedReader as java_io_BufferedReader, BufferedWriter as java_io_BufferedWriter } from 'java.io';
import { BiPredicate as java_util_function_BiPredicate } from 'java.util.function';
import { BasicFileAttributes as java_nio_file_attribute_BasicFileAttributes, UserPrincipal as java_nio_file_attribute_UserPrincipal, FileAttribute as java_nio_file_attribute_FileAttribute, FileTime as java_nio_file_attribute_FileTime, PosixFilePermission as java_nio_file_attribute_PosixFilePermission, FileAttributeView as java_nio_file_attribute_FileAttributeView } from 'java.nio.file.attribute';
import { Set as java_util_Set, List as java_util_List, Map as java_util_Map } from 'java.util';
import { SeekableByteChannel as java_nio_channels_SeekableByteChannel } from 'java.nio.channels';
import { Filter as java_nio_file_DirectoryStream_Filter } from 'java.nio.file.DirectoryStream';

  export class Files extends java_lang_Object {
static attribute: java_lang_Object;
static fileAttributeView: V;
static fileStore: java_nio_file_FileStore;
static lastModifiedTime: java_nio_file_attribute_FileTime;
static owner: java_nio_file_attribute_UserPrincipal;
static posixFilePermissions: java_util_Set<java_nio_file_attribute_PosixFilePermission>;
static copy(arg0: java_io_InputStream, arg1: java_nio_file_Path, ...arg2: JArray<java_nio_file_CopyOption>): number;
static copy(arg0: java_nio_file_Path, arg1: java_io_OutputStream): number;
static copy(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: JArray<java_nio_file_CopyOption>): java_nio_file_Path;
static createDirectories(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_file_Path;
static createDirectory(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_file_Path;
static createFile(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_file_Path;
static createLink(arg0: java_nio_file_Path, arg1: java_nio_file_Path): java_nio_file_Path;
static createSymbolicLink(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_file_Path;
static createTempDirectory(arg0: java_nio_file_Path, arg1: string, ...arg2: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_file_Path;
static createTempDirectory(arg0: string, ...arg1: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_file_Path;
static createTempFile(arg0: java_nio_file_Path, arg1: string, arg2: string, ...arg3: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_file_Path;
static createTempFile(arg0: string, arg1: string, ...arg2: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_file_Path;
static delete(arg0: java_nio_file_Path): void;
static deleteIfExists(arg0: java_nio_file_Path): boolean;
static exists(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_LinkOption>): boolean;
static find(arg0: java_nio_file_Path, arg1: number, arg2: java_util_function_BiPredicate<java_nio_file_Path, java_nio_file_attribute_BasicFileAttributes>, ...arg3: JArray<java_nio_file_FileVisitOption>): java_util_stream_Stream<java_nio_file_Path>;
static getAttribute(arg0: java_nio_file_Path, arg1: string, ...arg2: JArray<java_nio_file_LinkOption>): java_lang_Object;
static getFileAttributeView<V extends java_nio_file_attribute_FileAttributeView>(arg0: java_nio_file_Path, arg1: java_lang_Class<V>, ...arg2: JArray<java_nio_file_LinkOption>): V;
static getFileStore(arg0: java_nio_file_Path): java_nio_file_FileStore;
static getLastModifiedTime(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_LinkOption>): java_nio_file_attribute_FileTime;
static getOwner(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_LinkOption>): java_nio_file_attribute_UserPrincipal;
static getPosixFilePermissions(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_LinkOption>): java_util_Set<java_nio_file_attribute_PosixFilePermission>;
static isDirectory(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_LinkOption>): boolean;
static isExecutable(arg0: java_nio_file_Path): boolean;
static isHidden(arg0: java_nio_file_Path): boolean;
static isReadable(arg0: java_nio_file_Path): boolean;
static isRegularFile(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_LinkOption>): boolean;
static isSameFile(arg0: java_nio_file_Path, arg1: java_nio_file_Path): boolean;
static isSymbolicLink(arg0: java_nio_file_Path): boolean;
static isWritable(arg0: java_nio_file_Path): boolean;
static lines(arg0: java_nio_file_Path): java_util_stream_Stream<string>;
static lines(arg0: java_nio_file_Path, arg1: java_nio_charset_Charset): java_util_stream_Stream<string>;
static list(arg0: java_nio_file_Path): java_util_stream_Stream<java_nio_file_Path>;
static move(arg0: java_nio_file_Path, arg1: java_nio_file_Path, ...arg2: JArray<java_nio_file_CopyOption>): java_nio_file_Path;
static newBufferedReader(arg0: java_nio_file_Path): java_io_BufferedReader;
static newBufferedReader(arg0: java_nio_file_Path, arg1: java_nio_charset_Charset): java_io_BufferedReader;
static newBufferedWriter(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_OpenOption>): java_io_BufferedWriter;
static newBufferedWriter(arg0: java_nio_file_Path, arg1: java_nio_charset_Charset, ...arg2: JArray<java_nio_file_OpenOption>): java_io_BufferedWriter;
static newByteChannel(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_OpenOption>): java_nio_channels_SeekableByteChannel;
static newByteChannel(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_OpenOption>, ...arg2: JArray<java_nio_file_attribute_FileAttribute<java_lang_Object>>): java_nio_channels_SeekableByteChannel;
static newDirectoryStream(arg0: java_nio_file_Path): java_nio_file_DirectoryStream<java_nio_file_Path>;
static newDirectoryStream(arg0: java_nio_file_Path, arg1: java_nio_file_DirectoryStream_Filter<java_lang_Object>): java_nio_file_DirectoryStream<java_nio_file_Path>;
static newDirectoryStream(arg0: java_nio_file_Path, arg1: string): java_nio_file_DirectoryStream<java_nio_file_Path>;
static newInputStream(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_OpenOption>): java_io_InputStream;
static newOutputStream(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_OpenOption>): java_io_OutputStream;
static notExists(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_LinkOption>): boolean;
static probeContentType(arg0: java_nio_file_Path): string;
static readAllBytes(arg0: java_nio_file_Path): JArray<number>;
static readAllLines(arg0: java_nio_file_Path): java_util_List<string>;
static readAllLines(arg0: java_nio_file_Path, arg1: java_nio_charset_Charset): java_util_List<string>;
static readAttributes(arg0: java_nio_file_Path, arg1: string, ...arg2: JArray<java_nio_file_LinkOption>): java_util_Map<string, java_lang_Object>;
static readAttributes<A extends java_nio_file_attribute_BasicFileAttributes>(arg0: java_nio_file_Path, arg1: java_lang_Class<A>, ...arg2: JArray<java_nio_file_LinkOption>): A;
static readString(arg0: java_nio_file_Path): string;
static readString(arg0: java_nio_file_Path, arg1: java_nio_charset_Charset): string;
static readSymbolicLink(arg0: java_nio_file_Path): java_nio_file_Path;
static setAttribute(arg0: java_nio_file_Path, arg1: string, arg2: java_lang_Object, ...arg3: JArray<java_nio_file_LinkOption>): java_nio_file_Path;
static setLastModifiedTime(arg0: java_nio_file_Path, arg1: java_nio_file_attribute_FileTime): java_nio_file_Path;
static setOwner(arg0: java_nio_file_Path, arg1: java_nio_file_attribute_UserPrincipal): java_nio_file_Path;
static setPosixFilePermissions(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_attribute_PosixFilePermission>): java_nio_file_Path;
static size(arg0: java_nio_file_Path): number;
static walk(arg0: java_nio_file_Path, ...arg1: JArray<java_nio_file_FileVisitOption>): java_util_stream_Stream<java_nio_file_Path>;
static walk(arg0: java_nio_file_Path, arg1: number, ...arg2: JArray<java_nio_file_FileVisitOption>): java_util_stream_Stream<java_nio_file_Path>;
static walkFileTree(arg0: java_nio_file_Path, arg1: java_nio_file_FileVisitor<java_lang_Object>): java_nio_file_Path;
static walkFileTree(arg0: java_nio_file_Path, arg1: java_util_Set<java_nio_file_FileVisitOption>, arg2: number, arg3: java_nio_file_FileVisitor<java_lang_Object>): java_nio_file_Path;
static write(arg0: java_nio_file_Path, arg1: JArray<number>, ...arg2: JArray<java_nio_file_OpenOption>): java_nio_file_Path;
static write(arg0: java_nio_file_Path, arg1: java_lang_Iterable<java_lang_CharSequence>, ...arg2: JArray<java_nio_file_OpenOption>): java_nio_file_Path;
static write(arg0: java_nio_file_Path, arg1: java_lang_Iterable<java_lang_CharSequence>, arg2: java_nio_charset_Charset, ...arg3: JArray<java_nio_file_OpenOption>): java_nio_file_Path;
static writeString(arg0: java_nio_file_Path, arg1: java_lang_CharSequence, ...arg2: JArray<java_nio_file_OpenOption>): java_nio_file_Path;
static writeString(arg0: java_nio_file_Path, arg1: java_lang_CharSequence, arg2: java_nio_charset_Charset, ...arg3: JArray<java_nio_file_OpenOption>): java_nio_file_Path;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { FileVisitOption as java_nio_file_FileVisitOption } from 'java.nio.file';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FileVisitOption extends java_lang_Enum<java_nio_file_FileVisitOption> {
class: java_lang_Class<java_lang_Object>;
static FOLLOW_LINKS: java_nio_file_FileVisitOption;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_nio_file_FileVisitOption;
static values(): JArray<java_nio_file_FileVisitOption>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio.file.attribute' {
import { PosixFilePermission as java_nio_file_attribute_PosixFilePermission } from 'java.nio.file.attribute';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class PosixFilePermission extends java_lang_Enum<java_nio_file_attribute_PosixFilePermission> {
class: java_lang_Class<java_lang_Object>;
static GROUP_EXECUTE: java_nio_file_attribute_PosixFilePermission;
static GROUP_READ: java_nio_file_attribute_PosixFilePermission;
static GROUP_WRITE: java_nio_file_attribute_PosixFilePermission;
static OTHERS_EXECUTE: java_nio_file_attribute_PosixFilePermission;
static OTHERS_READ: java_nio_file_attribute_PosixFilePermission;
static OTHERS_WRITE: java_nio_file_attribute_PosixFilePermission;
static OWNER_EXECUTE: java_nio_file_attribute_PosixFilePermission;
static OWNER_READ: java_nio_file_attribute_PosixFilePermission;
static OWNER_WRITE: java_nio_file_attribute_PosixFilePermission;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_nio_file_attribute_PosixFilePermission;
static values(): JArray<java_nio_file_attribute_PosixFilePermission>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { BasicFileAttributes as java_nio_file_attribute_BasicFileAttributes } from 'java.nio.file.attribute';
import { FileVisitResult as java_nio_file_FileVisitResult } from 'java.nio.file';
import { IOException as java_io_IOException } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';

  export class FileVisitor<T extends java_lang_Object> {

postVisitDirectory(arg0: T, arg1: java_io_IOException): java_nio_file_FileVisitResult;
preVisitDirectory(arg0: T, arg1: java_nio_file_attribute_BasicFileAttributes): java_nio_file_FileVisitResult;
visitFile(arg0: T, arg1: java_nio_file_attribute_BasicFileAttributes): java_nio_file_FileVisitResult;
visitFileFailed(arg0: T, arg1: java_io_IOException): java_nio_file_FileVisitResult;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { FileVisitResult as java_nio_file_FileVisitResult } from 'java.nio.file';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FileVisitResult extends java_lang_Enum<java_nio_file_FileVisitResult> {
class: java_lang_Class<java_lang_Object>;
static CONTINUE: java_nio_file_FileVisitResult;
static SKIP_SIBLINGS: java_nio_file_FileVisitResult;
static SKIP_SUBTREE: java_nio_file_FileVisitResult;
static TERMINATE: java_nio_file_FileVisitResult;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_nio_file_FileVisitResult;
static values(): JArray<java_nio_file_FileVisitResult>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.nio.file' {
import { Path as java_nio_file_Path } from 'java.nio.file';
import { URI as java_net_URI } from 'java.net';
import { Object as java_lang_Object } from 'java.lang';

  export class Paths extends java_lang_Object {

static get(arg0: java_net_URI): java_nio_file_Path;
static get(arg0: string, ...arg1: JArray<string>): java_nio_file_Path;

  }
}