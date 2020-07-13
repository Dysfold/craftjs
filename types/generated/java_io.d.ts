//@ts-nocheck

declare module 'java.io' {
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream, Closeable as java_io_Closeable } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';

  export class InputStream extends java_lang_Object implements java_io_Closeable {
static MAX_SKIP_BUFFER_SIZE: number;
static DEFAULT_BUFFER_SIZE: number;
static MAX_BUFFER_SIZE: number;
read(arg0: number[], arg1: number, arg2: number): number;
read(arg0: number[]): number;
read(): number;
close(): void;
mark(arg0: number): void;
readAllBytes(): number[];
readNBytes(arg0: number[], arg1: number, arg2: number): number;
readNBytes(arg0: number): number[];
transferTo(arg0: java_io_OutputStream): number;
skip(arg0: number): number;
available(): number;
markSupported(): boolean;
reset(): void;
static nullInputStream(): java_io_InputStream;
constructor();
  }
}//@ts-nocheck

declare module 'java.io' {
import { OutputStream as java_io_OutputStream, Closeable as java_io_Closeable, Flushable as java_io_Flushable } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';

  export class OutputStream extends java_lang_Object implements java_io_Closeable, java_io_Flushable {

write(arg0: number[], arg1: number, arg2: number): void;
write(arg0: number[]): void;
write(arg0: number): void;
flush(): void;
close(): void;
static nullOutputStream(): java_io_OutputStream;
constructor();
  }
}//@ts-nocheck

declare module 'java.io' {
import { AutoCloseable as java_lang_AutoCloseable } from 'java.lang';

  export class Closeable implements java_lang_AutoCloseable {

close(): void;

  }
}//@ts-nocheck

declare module 'java.io' {


  export class Flushable {

flush(): void;

  }
}//@ts-nocheck

declare module 'java.io' {


  export class Serializable {



  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, Writer as java_io_Writer, File as java_io_File, OutputStream as java_io_OutputStream, PrintStream as java_io_PrintStream } from 'java.io';
import { Locale as java_util_Locale, Formatter as java_util_Formatter } from 'java.util';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';

  export class PrintWriter extends java_io_Writer {
out: java_io_Writer;
autoFlush: boolean;
trouble: boolean;
formatter: java_util_Formatter;
psOut: java_io_PrintStream;
class: java_lang_Class<java_lang_Object>;
println(arg0: string[]): void;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: string): void;
println(arg0: java_lang_Object): void;
println(arg0: number): void;
println(arg0: string): void;
println(arg0: boolean): void;
println(): void;
println(arg0: number): void;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_PrintWriter;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_Writer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_io_PrintWriter;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_io_Writer;
append(arg0: string): java_lang_Appendable;
append(arg0: string): java_io_Writer;
append(arg0: string): java_io_PrintWriter;
format(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_io_PrintWriter;
format(arg0: string, ...arg1: java_lang_Object[]): java_io_PrintWriter;
write(arg0: number): void;
write(arg0: string, arg1: number, arg2: number): void;
write(arg0: string[]): void;
write(arg0: string[], arg1: number, arg2: number): void;
write(arg0: string): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: string): void;
print(arg0: boolean): void;
print(arg0: java_lang_Object): void;
print(arg0: string): void;
print(arg0: string[]): void;
print(arg0: number): void;
flush(): void;
close(): void;
checkError(): boolean;
printf(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_io_PrintWriter;
printf(arg0: string, ...arg1: java_lang_Object[]): java_io_PrintWriter;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string);
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: java_nio_charset_Charset);
constructor(arg0: java_io_File);
constructor(arg0: java_io_File, arg1: string);
constructor(arg0: java_io_File, arg1: java_nio_charset_Charset);
constructor(arg0: java_io_Writer);
constructor(arg0: java_io_Writer, arg1: boolean);
constructor(arg0: java_io_OutputStream, arg1: boolean, arg2: java_nio_charset_Charset);
constructor(arg0: java_io_OutputStream, arg1: boolean);
constructor(arg0: java_io_OutputStream);
  }
}//@ts-nocheck

declare module 'java.io' {
import { CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object } from 'java.lang';
import { Writer as java_io_Writer, Closeable as java_io_Closeable, Flushable as java_io_Flushable } from 'java.io';

  export class Writer extends java_lang_Object implements java_lang_Appendable, java_io_Closeable, java_io_Flushable {
writeBuffer: string[];
static WRITE_BUFFER_SIZE: number;
lock: java_lang_Object;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_Writer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: string): java_io_Writer;
append(arg0: string): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_io_Writer;
write(arg0: number): void;
write(arg0: string[]): void;
write(arg0: string[], arg1: number, arg2: number): void;
write(arg0: string): void;
write(arg0: string, arg1: number, arg2: number): void;
flush(): void;
close(): void;
static nullWriter(): java_io_Writer;

  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { Field as java_lang_reflect_Field } from 'java.lang.reflect';

  export class ObjectStreamField extends java_lang_Object implements java_lang_Comparable<java_lang_Object> {
name: string;
signature: string;
type: java_lang_Class<java_lang_Object>;
typeSignature: string;
unshared: boolean;
field: java_lang_reflect_Field;
offset: number;
name: string;
type: java_lang_Class<java_lang_Object>;
typeCode: string;
typeString: string;
offset: number;
getName(): string;
toString(): string;
isPrimitive(): boolean;
compareTo(arg0: java_lang_Object): number;
getType(): java_lang_Class<java_lang_Object>;
getTypeCode(): string;
getTypeString(): string;
getOffset(): number;
isUnshared(): boolean;
constructor(arg0: string, arg1: java_lang_Class<java_lang_Object>);
constructor(arg0: string, arg1: java_lang_Class<java_lang_Object>, arg2: boolean);
  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { File as java_io_File, FilenameFilter as java_io_FilenameFilter, FileFilter as java_io_FileFilter, FileSystem as java_io_FileSystem, Serializable as java_io_Serializable } from 'java.io';
import { URI as java_net_URI, URL as java_net_URL } from 'java.net';
import { Path as java_nio_file_Path } from 'java.nio.file';
import { PathStatus as java_io_File_PathStatus } from 'java.io.File';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';

  export class File extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_io_File> {
static fs: java_io_FileSystem;
path: string;
status: java_io_File_PathStatus;
prefixLength: number;
static separatorChar: string;
static separator: string;
static pathSeparatorChar: string;
static pathSeparator: string;
static UNSAFE: jdk_internal_misc_Unsafe;
static PATH_OFFSET: number;
static PREFIX_LENGTH_OFFSET: number;
static serialVersionUID: number;
filePath: java_nio_file_Path;
static $assertionsDisabled: boolean;
name: string;
parent: string;
path: string;
parentFile: java_io_File;
absolutePath: string;
absoluteFile: java_io_File;
canonicalPath: string;
canonicalFile: java_io_File;
totalSpace: number;
freeSpace: number;
usableSpace: number;
getName(): string;
equals(arg0: java_lang_Object): boolean;
length(): number;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_io_File): number;
list(): string[];
list(arg0: java_io_FilenameFilter): string[];
getParent(): string;
isAbsolute(): boolean;
delete(): boolean;
setReadOnly(): boolean;
canRead(): boolean;
getPath(): string;
toURI(): java_net_URI;
toURL(): java_net_URL;
getParentFile(): java_io_File;
getAbsolutePath(): string;
getAbsoluteFile(): java_io_File;
getCanonicalPath(): string;
getCanonicalFile(): java_io_File;
isDirectory(): boolean;
canWrite(): boolean;
exists(): boolean;
isFile(): boolean;
isHidden(): boolean;
lastModified(): number;
createNewFile(): boolean;
deleteOnExit(): void;
listFiles(arg0: java_io_FileFilter): java_io_File[];
listFiles(arg0: java_io_FilenameFilter): java_io_File[];
listFiles(): java_io_File[];
mkdir(): boolean;
mkdirs(): boolean;
renameTo(arg0: java_io_File): boolean;
setLastModified(arg0: number): boolean;
setWritable(arg0: boolean): boolean;
setWritable(arg0: boolean, arg1: boolean): boolean;
setReadable(arg0: boolean, arg1: boolean): boolean;
setReadable(arg0: boolean): boolean;
setExecutable(arg0: boolean): boolean;
setExecutable(arg0: boolean, arg1: boolean): boolean;
canExecute(): boolean;
static listRoots(): java_io_File[];
getTotalSpace(): number;
getFreeSpace(): number;
getUsableSpace(): number;
static createTempFile(arg0: string, arg1: string): java_io_File;
static createTempFile(arg0: string, arg1: string, arg2: java_io_File): java_io_File;
toPath(): java_nio_file_Path;
constructor(arg0: string);
constructor(arg0: string, arg1: string);
constructor(arg0: java_io_File, arg1: string);
constructor(arg0: java_net_URI);
  }
}//@ts-nocheck

declare module 'java.io' {
import { File as java_io_File } from 'java.io';

  export class FilenameFilter {

accept(arg0: java_io_File, arg1: string): boolean;

  }
}//@ts-nocheck

declare module 'java.io' {
import { File as java_io_File } from 'java.io';

  export class FileFilter {

accept(arg0: java_io_File): boolean;

  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Class as java_lang_Class } from 'java.lang';
import { PrintStream as java_io_PrintStream, OutputStream as java_io_OutputStream, File as java_io_File, BufferedWriter as java_io_BufferedWriter, OutputStreamWriter as java_io_OutputStreamWriter, FilterOutputStream as java_io_FilterOutputStream, Closeable as java_io_Closeable } from 'java.io';
import { Locale as java_util_Locale, Formatter as java_util_Formatter } from 'java.util';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';

  export class PrintStream extends java_io_FilterOutputStream implements java_lang_Appendable, java_io_Closeable {
autoFlush: boolean;
trouble: boolean;
formatter: java_util_Formatter;
textOut: java_io_BufferedWriter;
charOut: java_io_OutputStreamWriter;
closing: boolean;
class: java_lang_Class<java_lang_Object>;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: java_lang_Object): void;
println(arg0: string[]): void;
println(arg0: string): void;
println(): void;
println(arg0: boolean): void;
println(arg0: string): void;
println(arg0: number): void;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_io_PrintStream;
append(arg0: string): java_lang_Appendable;
append(arg0: string): java_io_PrintStream;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_PrintStream;
format(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_io_PrintStream;
format(arg0: string, ...arg1: java_lang_Object[]): java_io_PrintStream;
write(arg0: number): void;
write(arg0: number[], arg1: number, arg2: number): void;
print(arg0: boolean): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: java_lang_Object): void;
print(arg0: string): void;
print(arg0: string[]): void;
print(arg0: string): void;
print(arg0: number): void;
flush(): void;
close(): void;
checkError(): boolean;
printf(arg0: string, ...arg1: java_lang_Object[]): java_io_PrintStream;
printf(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_io_PrintStream;
static nullOutputStream(): java_io_OutputStream;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: string);
constructor(arg0: string);
constructor(arg0: java_io_OutputStream, arg1: boolean, arg2: java_nio_charset_Charset);
constructor(arg0: java_io_OutputStream, arg1: boolean, arg2: string);
constructor(arg0: string, arg1: java_nio_charset_Charset);
constructor(arg0: java_io_File, arg1: string);
constructor(arg0: java_io_File, arg1: java_nio_charset_Charset);
constructor(arg0: java_io_File);
constructor(arg0: java_io_OutputStream);
constructor(arg0: java_io_OutputStream, arg1: boolean);
  }
}//@ts-nocheck

declare module 'java.io' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';

  export class IOException extends java_lang_Exception {
static serialVersionUID: number;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Throwable);
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string);
constructor();
  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Writer as java_io_Writer } from 'java.io';

  export class BufferedWriter extends java_io_Writer {
out: java_io_Writer;
cb: string[];
nChars: number;
nextChar: number;
static defaultCharBufferSize: number;
class: java_lang_Class<java_lang_Object>;
write(arg0: string[], arg1: number, arg2: number): void;
write(arg0: number): void;
write(arg0: string, arg1: number, arg2: number): void;
newLine(): void;
flush(): void;
close(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_Writer);
constructor(arg0: java_io_Writer, arg1: number);
  }
}//@ts-nocheck

declare module 'java.io' {
import { CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Writer as java_io_Writer, OutputStream as java_io_OutputStream } from 'java.io';
import { CharsetEncoder as java_nio_charset_CharsetEncoder, Charset as java_nio_charset_Charset } from 'java.nio.charset';
import { StreamEncoder as sun_nio_cs_StreamEncoder } from 'sun.nio.cs';

  export class OutputStreamWriter extends java_io_Writer {
se: sun_nio_cs_StreamEncoder;
encoding: string;
class: java_lang_Class<java_lang_Object>;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_Writer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_io_Writer;
write(arg0: string[], arg1: number, arg2: number): void;
write(arg0: number): void;
write(arg0: string, arg1: number, arg2: number): void;
flush(): void;
close(): void;
getEncoding(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_OutputStream, arg1: java_nio_charset_CharsetEncoder);
constructor(arg0: java_io_OutputStream, arg1: java_nio_charset_Charset);
constructor(arg0: java_io_OutputStream);
constructor(arg0: java_io_OutputStream, arg1: string);
  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OutputStream as java_io_OutputStream } from 'java.io';

  export class FilterOutputStream extends java_io_OutputStream {
out: java_io_OutputStream;
closed: boolean;
closeLock: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
write(arg0: number[], arg1: number, arg2: number): void;
write(arg0: number[]): void;
write(arg0: number): void;
flush(): void;
close(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_OutputStream);
  }
}//@ts-nocheck

declare module 'java.io' {
import { CharBuffer as java_nio_CharBuffer } from 'java.nio';
import { Writer as java_io_Writer, Reader as java_io_Reader, Closeable as java_io_Closeable } from 'java.io';
import { Object as java_lang_Object, Readable as java_lang_Readable } from 'java.lang';

  export class Reader extends java_lang_Object implements java_lang_Readable, java_io_Closeable {
static TRANSFER_BUFFER_SIZE: number;
lock: java_lang_Object;
static maxSkipBufferSize: number;
skipBuffer: string[];
read(arg0: string[]): number;
read(arg0: string[], arg1: number, arg2: number): number;
read(arg0: java_nio_CharBuffer): number;
read(): number;
close(): void;
mark(arg0: number): void;
transferTo(arg0: java_io_Writer): number;
skip(arg0: number): number;
markSupported(): boolean;
reset(): void;
static nullReader(): java_io_Reader;
ready(): boolean;

  }
}//@ts-nocheck

declare module 'java.io' {
import { Closeable as java_io_Closeable, FileDescriptor as java_io_FileDescriptor } from 'java.io';
import { List as java_util_List } from 'java.util';
import { PhantomCleanable as jdk_internal_ref_PhantomCleanable } from 'jdk.internal.ref';
import { Object as java_lang_Object } from 'java.lang';

  export class FileDescriptor extends java_lang_Object {
fd: number;
handle: number;
parent: java_io_Closeable;
otherParents: java_util_List<java_io_Closeable>;
closed: boolean;
append: boolean;
cleanup: jdk_internal_ref_PhantomCleanable<java_io_FileDescriptor>;
static in: java_io_FileDescriptor;
static out: java_io_FileDescriptor;
static err: java_io_FileDescriptor;
sync(): void;
valid(): boolean;
constructor();
  }
}//@ts-nocheck

declare module 'java.io' {
import { File as java_io_File } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';

  export class FileSystem extends java_lang_Object {
static BA_EXISTS: number;
static BA_REGULAR: number;
static BA_DIRECTORY: number;
static BA_HIDDEN: number;
static ACCESS_READ: number;
static ACCESS_WRITE: number;
static ACCESS_EXECUTE: number;
static SPACE_TOTAL: number;
static SPACE_FREE: number;
static SPACE_USABLE: number;
static useCanonCaches: boolean;
static useCanonPrefixCache: boolean;
length: number;
defaultParent: string;
booleanAttributes: number;
lastModifiedTime: number;
space: number;
separator: string;
pathSeparator: string;
nameMax: number;
hashCode(arg0: java_io_File): number;
getLength(arg0: java_io_File): number;
list(arg0: java_io_File): string[];
compare(arg0: java_io_File, arg1: java_io_File): number;
resolve(arg0: java_io_File): string;
resolve(arg0: string, arg1: string): string;
isAbsolute(arg0: java_io_File): boolean;
checkAccess(arg0: java_io_File, arg1: number): boolean;
delete(arg0: java_io_File): boolean;
setReadOnly(arg0: java_io_File): boolean;
normalize(arg0: string): string;
canonicalize(arg0: string): string;
prefixLength(arg0: string): number;
listRoots(): java_io_File[];
getDefaultParent(): string;
fromURIPath(arg0: string): string;
getBooleanAttributes(arg0: java_io_File): number;
getLastModifiedTime(arg0: java_io_File): number;
createFileExclusively(arg0: string): boolean;
createDirectory(arg0: java_io_File): boolean;
rename(arg0: java_io_File, arg1: java_io_File): boolean;
setLastModifiedTime(arg0: java_io_File, arg1: number): boolean;
setPermission(arg0: java_io_File, arg1: number, arg2: boolean, arg3: boolean): boolean;
getSpace(arg0: java_io_File, arg1: number): number;
getSeparator(): string;
getPathSeparator(): string;
getNameMax(arg0: string): number;

  }
}//@ts-nocheck

declare module 'java.io.File' {
import { PathStatus as java_io_File_PathStatus } from 'java.io.File';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class PathStatus extends java_lang_Enum<java_io_File_PathStatus> {
static INVALID: java_io_File_PathStatus;
static CHECKED: java_io_File_PathStatus;
static $VALUES: java_io_File_PathStatus[];
class: java_lang_Class<java_lang_Object>;
static values(): java_io_File_PathStatus[];
static valueOf(arg0: string): java_io_File_PathStatus;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
import { DataOutput as java_io_DataOutput } from 'java.io';

  export class ObjectOutput implements java_io_DataOutput, java_lang_AutoCloseable {

write(arg0: number[]): void;
write(arg0: number): void;
write(arg0: number[], arg1: number, arg2: number): void;
writeObject(arg0: java_lang_Object): void;
flush(): void;
close(): void;
writeInt(arg0: number): void;
writeBytes(arg0: string): void;
writeUTF(arg0: string): void;
writeFloat(arg0: number): void;
writeChar(arg0: number): void;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeShort(arg0: number): void;
writeLong(arg0: number): void;
writeDouble(arg0: number): void;
writeChars(arg0: string): void;

  }
}//@ts-nocheck

declare module 'java.io' {


  export class DataOutput {

write(arg0: number[], arg1: number, arg2: number): void;
write(arg0: number[]): void;
write(arg0: number): void;
writeInt(arg0: number): void;
writeBytes(arg0: string): void;
writeUTF(arg0: string): void;
writeFloat(arg0: number): void;
writeChar(arg0: number): void;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeShort(arg0: number): void;
writeLong(arg0: number): void;
writeDouble(arg0: number): void;
writeChars(arg0: string): void;

  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
import { DataInput as java_io_DataInput } from 'java.io';

  export class ObjectInput implements java_io_DataInput, java_lang_AutoCloseable {

readObject(): java_lang_Object;
read(arg0: number[], arg1: number, arg2: number): number;
read(arg0: number[]): number;
read(): number;
close(): void;
skip(arg0: number): number;
available(): number;
readLine(): string;
readInt(): number;
readUTF(): string;
readFloat(): number;
readChar(): string;
readFully(arg0: number[]): void;
readFully(arg0: number[], arg1: number, arg2: number): void;
skipBytes(arg0: number): number;
readBoolean(): boolean;
readByte(): number;
readUnsignedByte(): number;
readShort(): number;
readUnsignedShort(): number;
readLong(): number;
readDouble(): number;

  }
}//@ts-nocheck

declare module 'java.io' {


  export class DataInput {

readLine(): string;
readInt(): number;
readUTF(): string;
readFloat(): number;
readChar(): string;
readFully(arg0: number[]): void;
readFully(arg0: number[], arg1: number, arg2: number): void;
skipBytes(arg0: number): number;
readBoolean(): boolean;
readByte(): number;
readUnsignedByte(): number;
readShort(): number;
readUnsignedShort(): number;
readLong(): number;
readDouble(): number;

  }
}//@ts-nocheck

declare module 'java.io' {
import { ObjectOutput as java_io_ObjectOutput, ObjectInput as java_io_ObjectInput, Serializable as java_io_Serializable } from 'java.io';

  export class Externalizable implements java_io_Serializable {

writeExternal(arg0: java_io_ObjectOutput): void;
readExternal(arg0: java_io_ObjectInput): void;

  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { GetField as java_io_ObjectInputStream_GetField, BlockDataInputStream as java_io_ObjectInputStream_BlockDataInputStream, ValidationList as java_io_ObjectInputStream_ValidationList, HandleTable as java_io_ObjectInputStream_HandleTable } from 'java.io.ObjectInputStream';
import { ObjectInputValidation as java_io_ObjectInputValidation, ObjectInputFilter as java_io_ObjectInputFilter, InputStream as java_io_InputStream, SerialCallbackContext as java_io_SerialCallbackContext, ObjectInput as java_io_ObjectInput, ObjectStreamConstants as java_io_ObjectStreamConstants } from 'java.io';
import { Map as java_util_Map } from 'java.util';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';

  export class ObjectInputStream extends java_io_InputStream implements java_io_ObjectInput, java_io_ObjectStreamConstants {
static NULL_HANDLE: number;
static unsharedMarker: java_lang_Object;
static primClasses: java_util_Map<string, java_lang_Class<java_lang_Object>>;
bin: java_io_ObjectInputStream_BlockDataInputStream;
vlist: java_io_ObjectInputStream_ValidationList;
depth: number;
totalObjectRefs: number;
closed: boolean;
handles: java_io_ObjectInputStream_HandleTable;
passHandle: number;
defaultDataEnd: boolean;
enableOverride: boolean;
enableResolve: boolean;
curContext: java_io_SerialCallbackContext;
serialFilter: java_io_ObjectInputFilter;
static UNSAFE: jdk_internal_misc_Unsafe;
objectInputFilter: java_io_ObjectInputFilter;
class: java_lang_Class<java_lang_Object>;
readObject(): java_lang_Object;
defaultReadObject(): void;
read(arg0: number[], arg1: number, arg2: number): number;
read(): number;
readLine(): string;
close(): void;
readInt(): number;
readFields(): java_io_ObjectInputStream_GetField;
available(): number;
readUTF(): string;
readFloat(): number;
readChar(): string;
readFully(arg0: number[]): void;
readFully(arg0: number[], arg1: number, arg2: number): void;
skipBytes(arg0: number): number;
readBoolean(): boolean;
readByte(): number;
readUnsignedByte(): number;
readShort(): number;
readUnsignedShort(): number;
readLong(): number;
readDouble(): number;
readUnshared(): java_lang_Object;
registerValidation(arg0: java_io_ObjectInputValidation, arg1: number): void;
getObjectInputFilter(): java_io_ObjectInputFilter;
setObjectInputFilter(arg0: java_io_ObjectInputFilter): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_InputStream);
  }
}//@ts-nocheck

declare module 'java.io.ObjectInputStream' {
import { Object as java_lang_Object } from 'java.lang';
import { ObjectStreamClass as java_io_ObjectStreamClass } from 'java.io';

  export class GetField extends java_lang_Object {
objectStreamClass: java_io_ObjectStreamClass;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: java_lang_Object): java_lang_Object;
get(arg0: string, arg1: boolean): boolean;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: string): string;
defaulted(arg0: string): boolean;
getObjectStreamClass(): java_io_ObjectStreamClass;
constructor();
  }
}//@ts-nocheck

declare module 'java.io' {
import { ObjectStreamField as java_io_ObjectStreamField, ObjectStreamClass as java_io_ObjectStreamClass, Serializable as java_io_Serializable } from 'java.io';
import { Class as java_lang_Class, Object as java_lang_Object, Long as java_lang_Long, ClassNotFoundException as java_lang_ClassNotFoundException } from 'java.lang';
import { ReflectionFactory as jdk_internal_reflect_ReflectionFactory } from 'jdk.internal.reflect';
import { ExceptionInfo as java_io_ObjectStreamClass_ExceptionInfo, FieldReflector as java_io_ObjectStreamClass_FieldReflector, ClassDataSlot as java_io_ObjectStreamClass_ClassDataSlot } from 'java.io.ObjectStreamClass';
import { Constructor as java_lang_reflect_Constructor, Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';

  export class ObjectStreamClass extends java_lang_Object implements java_io_Serializable {
static NO_FIELDS: java_io_ObjectStreamField[];
static serialVersionUID: number;
static serialPersistentFields: java_io_ObjectStreamField[];
static reflFactory: jdk_internal_reflect_ReflectionFactory;
cl: java_lang_Class<java_lang_Object>;
name: string;
suid: java_lang_Long;
isProxy: boolean;
isEnum: boolean;
serializable: boolean;
externalizable: boolean;
hasWriteObjectData: boolean;
hasBlockExternalData: boolean;
resolveEx: java_lang_ClassNotFoundException;
deserializeEx: java_io_ObjectStreamClass_ExceptionInfo;
serializeEx: java_io_ObjectStreamClass_ExceptionInfo;
defaultSerializeEx: java_io_ObjectStreamClass_ExceptionInfo;
fields: java_io_ObjectStreamField[];
primDataSize: number;
numObjFields: number;
fieldRefl: java_io_ObjectStreamClass_FieldReflector;
dataLayout: java_io_ObjectStreamClass_ClassDataSlot[];
cons: java_lang_reflect_Constructor<java_lang_Object>;
domains: java_security_ProtectionDomain[];
writeObjectMethod: java_lang_reflect_Method;
readObjectMethod: java_lang_reflect_Method;
readObjectNoDataMethod: java_lang_reflect_Method;
writeReplaceMethod: java_lang_reflect_Method;
readResolveMethod: java_lang_reflect_Method;
localDesc: java_io_ObjectStreamClass;
superDesc: java_io_ObjectStreamClass;
initialized: boolean;
name: string;
fields: java_io_ObjectStreamField[];
field: java_io_ObjectStreamField;
serialVersionUID: number;
getName(): string;
toString(): string;
getFields(): java_io_ObjectStreamField[];
getField(arg0: string): java_io_ObjectStreamField;
static lookup(arg0: java_lang_Class<java_lang_Object>): java_io_ObjectStreamClass;
static lookupAny(arg0: java_lang_Class<java_lang_Object>): java_io_ObjectStreamClass;
getSerialVersionUID(): number;
forClass(): java_lang_Class<java_lang_Object>;

  }
}//@ts-nocheck

declare module 'java.io.ObjectStreamClass' {
import { Object as java_lang_Object } from 'java.lang';

  export class ExceptionInfo extends java_lang_Object {
className: string;
message: string;


  }
}//@ts-nocheck

declare module 'java.io.ObjectStreamClass' {
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';
import { ObjectStreamField as java_io_ObjectStreamField } from 'java.io';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class FieldReflector extends java_lang_Object {
static unsafe: jdk_internal_misc_Unsafe;
fields: java_io_ObjectStreamField[];
numPrimFields: number;
readKeys: number[];
writeKeys: number[];
offsets: number[];
typeCodes: string[];
types: java_lang_Class<java_lang_Object>[];


  }
}//@ts-nocheck

declare module 'java.io.ObjectStreamClass' {
import { ObjectStreamClass as java_io_ObjectStreamClass } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';

  export class ClassDataSlot extends java_lang_Object {
desc: java_io_ObjectStreamClass;
hasData: boolean;


  }
}//@ts-nocheck

declare module 'java.io' {


  export class ObjectInputValidation {

validateObject(): void;

  }
}//@ts-nocheck

declare module 'java.io' {
import { FilterInfo as java_io_ObjectInputFilter_FilterInfo, Status as java_io_ObjectInputFilter_Status } from 'java.io.ObjectInputFilter';

  export class ObjectInputFilter {

checkInput(arg0: java_io_ObjectInputFilter_FilterInfo): java_io_ObjectInputFilter_Status;

  }
}//@ts-nocheck

declare module 'java.io.ObjectInputFilter' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class FilterInfo {

depth(): number;
arrayLength(): number;
streamBytes(): number;
serialClass(): java_lang_Class<java_lang_Object>;
references(): number;

  }
}//@ts-nocheck

declare module 'java.io.ObjectInputFilter' {
import { Status as java_io_ObjectInputFilter_Status } from 'java.io.ObjectInputFilter';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Status extends java_lang_Enum<java_io_ObjectInputFilter_Status> {
static UNDECIDED: java_io_ObjectInputFilter_Status;
static ALLOWED: java_io_ObjectInputFilter_Status;
static REJECTED: java_io_ObjectInputFilter_Status;
static $VALUES: java_io_ObjectInputFilter_Status[];
class: java_lang_Class<java_lang_Object>;
static values(): java_io_ObjectInputFilter_Status[];
static valueOf(arg0: string): java_io_ObjectInputFilter_Status;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.io.ObjectInputStream' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PeekInputStream as java_io_ObjectInputStream_PeekInputStream } from 'java.io.ObjectInputStream';
import { DataInputStream as java_io_DataInputStream, ObjectInputStream as java_io_ObjectInputStream, InputStream as java_io_InputStream, DataInput as java_io_DataInput } from 'java.io';

  export class BlockDataInputStream extends java_io_InputStream implements java_io_DataInput {
static MAX_BLOCK_SIZE: number;
static MAX_HEADER_SIZE: number;
static CHAR_BUF_SIZE: number;
static HEADER_BLOCKED: number;
buf: number[];
hbuf: number[];
cbuf: string[];
blkmode: boolean;
pos: number;
end: number;
unread: number;
in: java_io_ObjectInputStream_PeekInputStream;
din: java_io_DataInputStream;
this$0: java_io_ObjectInputStream;
class: java_lang_Class<java_lang_Object>;
read(): number;
read(arg0: number[], arg1: number, arg2: number): number;
readLine(): string;
close(): void;
readInt(): number;
skip(arg0: number): number;
available(): number;
readUTF(): string;
readFloat(): number;
readChar(): string;
readFully(arg0: number[], arg1: number, arg2: number): void;
readFully(arg0: number[]): void;
readFully(arg0: number[], arg1: number, arg2: number, arg3: boolean): void;
skipBytes(arg0: number): number;
readBoolean(): boolean;
readByte(): number;
readUnsignedByte(): number;
readShort(): number;
readUnsignedShort(): number;
readLong(): number;
readDouble(): number;
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

declare module 'java.io.ObjectInputStream' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputStream as java_io_InputStream } from 'java.io';

  export class PeekInputStream extends java_io_InputStream {
in: java_io_InputStream;
peekb: number;
totalBytesRead: number;
bytesRead: number;
class: java_lang_Class<java_lang_Object>;
read(arg0: number[], arg1: number, arg2: number): number;
read(): number;
close(): void;
skip(arg0: number): number;
available(): number;
getBytesRead(): number;
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

declare module 'java.io' {
import { DataInput as java_io_DataInput, OutputStream as java_io_OutputStream, InputStream as java_io_InputStream, FilterInputStream as java_io_FilterInputStream } from 'java.io';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DataInputStream extends java_io_FilterInputStream implements java_io_DataInput {
bytearr: number[];
chararr: string[];
readBuffer: number[];
lineBuffer: string[];
class: java_lang_Class<java_lang_Object>;
read(arg0: number[], arg1: number, arg2: number): number;
read(arg0: number[]): number;
readLine(): string;
readInt(): number;
static readUTF(arg0: java_io_DataInput): string;
readUTF(): string;
readFloat(): number;
readChar(): string;
readFully(arg0: number[], arg1: number, arg2: number): void;
readFully(arg0: number[]): void;
skipBytes(arg0: number): number;
readBoolean(): boolean;
readByte(): number;
readUnsignedByte(): number;
readShort(): number;
readUnsignedShort(): number;
readLong(): number;
readDouble(): number;
readAllBytes(): number[];
readNBytes(arg0: number[], arg1: number, arg2: number): number;
readNBytes(arg0: number): number[];
transferTo(arg0: java_io_OutputStream): number;
static nullInputStream(): java_io_InputStream;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_InputStream);
  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputStream as java_io_InputStream } from 'java.io';

  export class FilterInputStream extends java_io_InputStream {
in: java_io_InputStream;
class: java_lang_Class<java_lang_Object>;
read(arg0: number[], arg1: number, arg2: number): number;
read(arg0: number[]): number;
read(): number;
close(): void;
mark(arg0: number): void;
skip(arg0: number): number;
available(): number;
markSupported(): boolean;
reset(): void;
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

declare module 'java.io.ObjectInputStream' {
import { Callback as java_io_ObjectInputStream_ValidationList_Callback } from 'java.io.ObjectInputStream.ValidationList';
import { Object as java_lang_Object } from 'java.lang';

  export class ValidationList extends java_lang_Object {
list: java_io_ObjectInputStream_ValidationList_Callback;
clear(): void;

  }
}//@ts-nocheck

declare module 'java.io.ObjectInputStream.ValidationList' {
import { ObjectInputValidation as java_io_ObjectInputValidation } from 'java.io';
import { Callback as java_io_ObjectInputStream_ValidationList_Callback } from 'java.io.ObjectInputStream.ValidationList';
import { AccessControlContext as java_security_AccessControlContext } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';

  export class Callback extends java_lang_Object {
obj: java_io_ObjectInputValidation;
priority: number;
next: java_io_ObjectInputStream_ValidationList_Callback;
acc: java_security_AccessControlContext;


  }
}//@ts-nocheck

declare module 'java.io.ObjectInputStream' {
import { Object as java_lang_Object } from 'java.lang';
import { HandleList as java_io_ObjectInputStream_HandleTable_HandleList } from 'java.io.ObjectInputStream.HandleTable';

  export class HandleTable extends java_lang_Object {
static STATUS_OK: number;
static STATUS_UNKNOWN: number;
static STATUS_EXCEPTION: number;
status: number[];
entries: java_lang_Object[];
deps: java_io_ObjectInputStream_HandleTable_HandleList[];
lowDep: number;
size: number;


  }
}//@ts-nocheck

declare module 'java.io.ObjectInputStream.HandleTable' {
import { Object as java_lang_Object } from 'java.lang';

  export class HandleList extends java_lang_Object {
list: number[];
size: number;
add(arg0: number): void;
get(arg0: number): number;
size(): number;
constructor();
  }
}//@ts-nocheck

declare module 'java.io' {
import { ObjectStreamClass as java_io_ObjectStreamClass } from 'java.io';
import { Object as java_lang_Object, Thread as java_lang_Thread } from 'java.lang';

  export class SerialCallbackContext extends java_lang_Object {
obj: java_lang_Object;
desc: java_io_ObjectStreamClass;
thread: java_lang_Thread;
desc: java_io_ObjectStreamClass;
obj: java_lang_Object;
check(): void;
getDesc(): java_io_ObjectStreamClass;
getObj(): java_lang_Object;
checkAndSetUsed(): void;
setUsed(): void;
constructor(arg0: java_lang_Object, arg1: java_io_ObjectStreamClass);
  }
}//@ts-nocheck

declare module 'java.io' {
import { SerializablePermission as java_io_SerializablePermission } from 'java.io';

  export class ObjectStreamConstants {
static STREAM_MAGIC: number;
static STREAM_VERSION: number;
static TC_BASE: number;
static TC_NULL: number;
static TC_REFERENCE: number;
static TC_CLASSDESC: number;
static TC_OBJECT: number;
static TC_STRING: number;
static TC_ARRAY: number;
static TC_CLASS: number;
static TC_BLOCKDATA: number;
static TC_ENDBLOCKDATA: number;
static TC_RESET: number;
static TC_BLOCKDATALONG: number;
static TC_EXCEPTION: number;
static TC_LONGSTRING: number;
static TC_PROXYCLASSDESC: number;
static TC_ENUM: number;
static TC_MAX: number;
static baseWireHandle: number;
static SC_WRITE_METHOD: number;
static SC_BLOCK_DATA: number;
static SC_SERIALIZABLE: number;
static SC_EXTERNALIZABLE: number;
static SC_ENUM: number;
static SUBSTITUTION_PERMISSION: java_io_SerializablePermission;
static SUBCLASS_IMPLEMENTATION_PERMISSION: java_io_SerializablePermission;
static SERIAL_FILTER_PERMISSION: java_io_SerializablePermission;
static PROTOCOL_VERSION_1: number;
static PROTOCOL_VERSION_2: number;


  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BasicPermission as java_security_BasicPermission } from 'java.security';

  export class SerializablePermission extends java_security_BasicPermission {
static serialVersionUID: number;
actions: string;
name: string;
class: java_lang_Class<java_lang_Object>;
getName(): string;
toString(): string;
checkGuard(arg0: java_lang_Object): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string);
constructor(arg0: string, arg1: string);
  }
}//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PutField as java_io_ObjectOutputStream_PutField, BlockDataOutputStream as java_io_ObjectOutputStream_BlockDataOutputStream, HandleTable as java_io_ObjectOutputStream_HandleTable, ReplaceTable as java_io_ObjectOutputStream_ReplaceTable, PutFieldImpl as java_io_ObjectOutputStream_PutFieldImpl, DebugTraceInfoStack as java_io_ObjectOutputStream_DebugTraceInfoStack } from 'java.io.ObjectOutputStream';
import { OutputStream as java_io_OutputStream, SerialCallbackContext as java_io_SerialCallbackContext, ObjectOutput as java_io_ObjectOutput, ObjectStreamConstants as java_io_ObjectStreamConstants } from 'java.io';

  export class ObjectOutputStream extends java_io_OutputStream implements java_io_ObjectOutput, java_io_ObjectStreamConstants {
bout: java_io_ObjectOutputStream_BlockDataOutputStream;
handles: java_io_ObjectOutputStream_HandleTable;
subs: java_io_ObjectOutputStream_ReplaceTable;
protocol: number;
depth: number;
primVals: number[];
enableOverride: boolean;
enableReplace: boolean;
curContext: java_io_SerialCallbackContext;
curPut: java_io_ObjectOutputStream_PutFieldImpl;
debugInfoStack: java_io_ObjectOutputStream_DebugTraceInfoStack;
static extendedDebugInfo: boolean;
class: java_lang_Class<java_lang_Object>;
write(arg0: number[], arg1: number, arg2: number): void;
write(arg0: number[]): void;
write(arg0: number): void;
writeObject(arg0: java_lang_Object): void;
defaultWriteObject(): void;
flush(): void;
close(): void;
writeInt(arg0: number): void;
putFields(): java_io_ObjectOutputStream_PutField;
writeFields(): void;
reset(): void;
writeBytes(arg0: string): void;
writeUTF(arg0: string): void;
writeFloat(arg0: number): void;
writeChar(arg0: number): void;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeShort(arg0: number): void;
writeLong(arg0: number): void;
writeDouble(arg0: number): void;
writeChars(arg0: string): void;
useProtocolVersion(arg0: number): void;
writeUnshared(arg0: java_lang_Object): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_OutputStream);
  }
}//@ts-nocheck

declare module 'java.io.ObjectOutputStream' {
import { Object as java_lang_Object } from 'java.lang';
import { ObjectOutput as java_io_ObjectOutput } from 'java.io';

  export class PutField extends java_lang_Object {

put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: java_lang_Object): void;
put(arg0: string, arg1: boolean): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: string): void;
put(arg0: string, arg1: number): void;
write(arg0: java_io_ObjectOutput): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.io.ObjectOutputStream' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OutputStream as java_io_OutputStream, DataOutputStream as java_io_DataOutputStream, DataOutput as java_io_DataOutput } from 'java.io';

  export class BlockDataOutputStream extends java_io_OutputStream implements java_io_DataOutput {
static MAX_BLOCK_SIZE: number;
static MAX_HEADER_SIZE: number;
static CHAR_BUF_SIZE: number;
buf: number[];
hbuf: number[];
cbuf: string[];
blkmode: boolean;
pos: number;
out: java_io_OutputStream;
dout: java_io_DataOutputStream;
class: java_lang_Class<java_lang_Object>;
write(arg0: number[]): void;
write(arg0: number[], arg1: number, arg2: number): void;
write(arg0: number): void;
flush(): void;
close(): void;
writeInt(arg0: number): void;
writeBytes(arg0: string): void;
writeUTF(arg0: string): void;
writeFloat(arg0: number): void;
writeChar(arg0: number): void;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeShort(arg0: number): void;
writeLong(arg0: number): void;
writeDouble(arg0: number): void;
writeChars(arg0: string): void;
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

declare module 'java.io' {
import { OutputStream as java_io_OutputStream, FilterOutputStream as java_io_FilterOutputStream, DataOutput as java_io_DataOutput } from 'java.io';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DataOutputStream extends java_io_FilterOutputStream implements java_io_DataOutput {
written: number;
bytearr: number[];
writeBuffer: number[];
class: java_lang_Class<java_lang_Object>;
size(): number;
write(arg0: number): void;
write(arg0: number[], arg1: number, arg2: number): void;
flush(): void;
writeInt(arg0: number): void;
writeBytes(arg0: string): void;
writeUTF(arg0: string): void;
writeFloat(arg0: number): void;
writeChar(arg0: number): void;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeShort(arg0: number): void;
writeLong(arg0: number): void;
writeDouble(arg0: number): void;
writeChars(arg0: string): void;
static nullOutputStream(): java_io_OutputStream;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_OutputStream);
  }
}//@ts-nocheck

declare module 'java.io.ObjectOutputStream' {
import { Object as java_lang_Object } from 'java.lang';

  export class HandleTable extends java_lang_Object {
size: number;
threshold: number;
loadFactor: number;
spine: number[];
next: number[];
objs: java_lang_Object[];


  }
}//@ts-nocheck

declare module 'java.io.ObjectOutputStream' {
import { HandleTable as java_io_ObjectOutputStream_HandleTable } from 'java.io.ObjectOutputStream';
import { Object as java_lang_Object } from 'java.lang';

  export class ReplaceTable extends java_lang_Object {
htab: java_io_ObjectOutputStream_HandleTable;
reps: java_lang_Object[];


  }
}//@ts-nocheck

declare module 'java.io.ObjectOutputStream' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ObjectOutput as java_io_ObjectOutput, ObjectStreamClass as java_io_ObjectStreamClass, ObjectOutputStream as java_io_ObjectOutputStream } from 'java.io';
import { PutField as java_io_ObjectOutputStream_PutField } from 'java.io.ObjectOutputStream';

  export class PutFieldImpl extends java_io_ObjectOutputStream_PutField {
desc: java_io_ObjectStreamClass;
primVals: number[];
objVals: java_lang_Object[];
this$0: java_io_ObjectOutputStream;
class: java_lang_Class<java_lang_Object>;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: java_lang_Object): void;
put(arg0: string, arg1: boolean): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: string): void;
put(arg0: string, arg1: number): void;
write(arg0: java_io_ObjectOutput): void;
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

declare module 'java.io.ObjectOutputStream' {
import { List as java_util_List } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class DebugTraceInfoStack extends java_lang_Object {
stack: java_util_List<string>;
toString(): string;

  }
}//@ts-nocheck

declare module 'java.io' {
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';
import { OutputStream as java_io_OutputStream } from 'java.io';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ByteArrayOutputStream extends java_io_OutputStream {
buf: number[];
count: number;
static MAX_ARRAY_SIZE: number;
class: java_lang_Class<java_lang_Object>;
toString(arg0: string): string;
toString(): string;
toString(arg0: java_nio_charset_Charset): string;
toString(arg0: number): string;
size(): number;
write(arg0: number): void;
write(arg0: number[], arg1: number, arg2: number): void;
close(): void;
toByteArray(): number[];
reset(): void;
writeBytes(arg0: number[]): void;
writeTo(arg0: java_io_OutputStream): void;
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

declare module 'java.io' {
import { FileDescriptor as java_io_FileDescriptor, File as java_io_File, DataOutput as java_io_DataOutput, DataInput as java_io_DataInput, Closeable as java_io_Closeable } from 'java.io';
import { FileChannel as java_nio_channels_FileChannel } from 'java.nio.channels';
import { AtomicBoolean as java_util_concurrent_atomic_AtomicBoolean } from 'java.util.concurrent.atomic';
import { Object as java_lang_Object } from 'java.lang';

  export class RandomAccessFile extends java_lang_Object implements java_io_DataOutput, java_io_DataInput, java_io_Closeable {
fd: java_io_FileDescriptor;
channel: java_nio_channels_FileChannel;
rw: boolean;
path: string;
closed: java_util_concurrent_atomic_AtomicBoolean;
static O_RDONLY: number;
static O_RDWR: number;
static O_SYNC: number;
static O_DSYNC: number;
static O_TEMPORARY: number;
fD: java_io_FileDescriptor;
channel: java_nio_channels_FileChannel;
filePointer: number;
length(): number;
write(arg0: number): void;
write(arg0: number[]): void;
write(arg0: number[], arg1: number, arg2: number): void;
read(arg0: number[]): number;
read(arg0: number[], arg1: number, arg2: number): number;
read(): number;
readLine(): string;
setLength(arg0: number): void;
close(): void;
writeInt(arg0: number): void;
readInt(): number;
writeBytes(arg0: string): void;
writeUTF(arg0: string): void;
readUTF(): string;
writeFloat(arg0: number): void;
readFloat(): number;
getFD(): java_io_FileDescriptor;
getChannel(): java_nio_channels_FileChannel;
writeChar(arg0: number): void;
readChar(): string;
seek(arg0: number): void;
readFully(arg0: number[]): void;
readFully(arg0: number[], arg1: number, arg2: number): void;
skipBytes(arg0: number): number;
getFilePointer(): number;
readBoolean(): boolean;
readByte(): number;
readUnsignedByte(): number;
readShort(): number;
readUnsignedShort(): number;
readLong(): number;
readDouble(): number;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeShort(arg0: number): void;
writeLong(arg0: number): void;
writeDouble(arg0: number): void;
writeChars(arg0: string): void;
constructor(arg0: java_io_File, arg1: string);
constructor(arg0: string, arg1: string);
  }
}