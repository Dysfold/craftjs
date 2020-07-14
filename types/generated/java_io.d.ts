//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, Writer as java_io_Writer, File as java_io_File, OutputStream as java_io_OutputStream } from 'java.io';
import { Locale as java_util_Locale } from 'java.util';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';

  export class PrintWriter extends java_io_Writer {
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
}
//@ts-nocheck

declare module 'java.io' {
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream, Closeable as java_io_Closeable } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';

  export class InputStream extends java_lang_Object implements java_io_Closeable {

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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.io' {
import { AutoCloseable as java_lang_AutoCloseable } from 'java.lang';

  export class Closeable implements java_lang_AutoCloseable {

close(): void;

  }
}
//@ts-nocheck

declare module 'java.io' {


  export class Flushable {

flush(): void;

  }
}
//@ts-nocheck

declare module 'java.io' {


  export class Serializable {



  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { File as java_io_File, FilenameFilter as java_io_FilenameFilter, FileFilter as java_io_FileFilter, Serializable as java_io_Serializable } from 'java.io';
import { URI as java_net_URI, URL as java_net_URL } from 'java.net';
import { Path as java_nio_file_Path } from 'java.nio.file';

  export class File extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_io_File> {
static separatorChar: string;
static separator: string;
static pathSeparatorChar: string;
static pathSeparator: string;
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
}
//@ts-nocheck

declare module 'java.io' {
import { File as java_io_File } from 'java.io';

  export class FilenameFilter {

accept(arg0: java_io_File, arg1: string): boolean;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { File as java_io_File } from 'java.io';

  export class FileFilter {

accept(arg0: java_io_File): boolean;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Class as java_lang_Class } from 'java.lang';
import { PrintStream as java_io_PrintStream, OutputStream as java_io_OutputStream, File as java_io_File, FilterOutputStream as java_io_FilterOutputStream, Closeable as java_io_Closeable } from 'java.io';
import { Locale as java_util_Locale } from 'java.util';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';

  export class PrintStream extends java_io_FilterOutputStream implements java_lang_Appendable, java_io_Closeable {
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
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OutputStream as java_io_OutputStream } from 'java.io';

  export class FilterOutputStream extends java_io_OutputStream {
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
}
//@ts-nocheck

declare module 'java.io' {
import { CharBuffer as java_nio_CharBuffer } from 'java.nio';
import { Writer as java_io_Writer, Reader as java_io_Reader, Closeable as java_io_Closeable } from 'java.io';
import { Object as java_lang_Object, Readable as java_lang_Readable } from 'java.lang';

  export class Reader extends java_lang_Object implements java_lang_Readable, java_io_Closeable {

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
}
//@ts-nocheck

declare module 'java.io' {
import { CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object } from 'java.lang';
import { Writer as java_io_Writer, Closeable as java_io_Closeable, Flushable as java_io_Flushable } from 'java.io';

  export class Writer extends java_lang_Object implements java_lang_Appendable, java_io_Closeable, java_io_Flushable {

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
}
//@ts-nocheck

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
}
//@ts-nocheck

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
}
//@ts-nocheck

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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.io' {
import { ObjectOutput as java_io_ObjectOutput, ObjectInput as java_io_ObjectInput, Serializable as java_io_Serializable } from 'java.io';

  export class Externalizable implements java_io_Serializable {

writeExternal(arg0: java_io_ObjectOutput): void;
readExternal(arg0: java_io_ObjectInput): void;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { GetField as java_io_ObjectInputStream_GetField } from 'java.io.ObjectInputStream';
import { ObjectInputValidation as java_io_ObjectInputValidation, ObjectInputFilter as java_io_ObjectInputFilter, InputStream as java_io_InputStream, ObjectInput as java_io_ObjectInput, ObjectStreamConstants as java_io_ObjectStreamConstants } from 'java.io';

  export class ObjectInputStream extends java_io_InputStream implements java_io_ObjectInput, java_io_ObjectStreamConstants {
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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.io' {
import { ObjectStreamField as java_io_ObjectStreamField, ObjectStreamClass as java_io_ObjectStreamClass, Serializable as java_io_Serializable } from 'java.io';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class ObjectStreamClass extends java_lang_Object implements java_io_Serializable {
static NO_FIELDS: java_io_ObjectStreamField[];
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
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class ObjectStreamField extends java_lang_Object implements java_lang_Comparable<java_lang_Object> {
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
}
//@ts-nocheck

declare module 'java.io' {


  export class ObjectInputValidation {

validateObject(): void;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { FilterInfo as java_io_ObjectInputFilter_FilterInfo, Status as java_io_ObjectInputFilter_Status } from 'java.io.ObjectInputFilter';

  export class ObjectInputFilter {

checkInput(arg0: java_io_ObjectInputFilter_FilterInfo): java_io_ObjectInputFilter_Status;

  }
}
//@ts-nocheck

declare module 'java.io.ObjectInputFilter' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class FilterInfo {

depth(): number;
arrayLength(): number;
streamBytes(): number;
serialClass(): java_lang_Class<java_lang_Object>;
references(): number;

  }
}
//@ts-nocheck

declare module 'java.io.ObjectInputFilter' {
import { Status as java_io_ObjectInputFilter_Status } from 'java.io.ObjectInputFilter';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Status extends java_lang_Enum<java_io_ObjectInputFilter_Status> {
static UNDECIDED: java_io_ObjectInputFilter_Status;
static ALLOWED: java_io_ObjectInputFilter_Status;
static REJECTED: java_io_ObjectInputFilter_Status;
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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BasicPermission as java_security_BasicPermission } from 'java.security';

  export class SerializablePermission extends java_security_BasicPermission {
name: string;
class: java_lang_Class<java_lang_Object>;
/** Returns the unique fully qualified name of this Permission */
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
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PutField as java_io_ObjectOutputStream_PutField } from 'java.io.ObjectOutputStream';
import { OutputStream as java_io_OutputStream, ObjectOutput as java_io_ObjectOutput, ObjectStreamConstants as java_io_ObjectStreamConstants } from 'java.io';

  export class ObjectOutputStream extends java_io_OutputStream implements java_io_ObjectOutput, java_io_ObjectStreamConstants {
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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.io' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';

  export class IOException extends java_lang_Exception {
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
}
//@ts-nocheck

declare module 'java.io' {
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Reader as java_io_Reader } from 'java.io';

  export class BufferedReader extends java_io_Reader {
class: java_lang_Class<java_lang_Object>;
lines(): java_util_stream_Stream<string>;
read(): number;
read(arg0: string[], arg1: number, arg2: number): number;
readLine(): string;
close(): void;
mark(arg0: number): void;
skip(arg0: number): number;
markSupported(): boolean;
reset(): void;
ready(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_io_Reader, arg1: number);
constructor(arg0: java_io_Reader);
  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Writer as java_io_Writer } from 'java.io';

  export class BufferedWriter extends java_io_Writer {
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
}