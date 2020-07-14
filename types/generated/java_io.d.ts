//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, Writer as java_io_Writer, File as java_io_File, OutputStream as java_io_OutputStream } from 'java.io';
import { Locale as java_util_Locale } from 'java.util';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';

  export class PrintWriter extends java_io_Writer {
class: java_lang_Class<java_lang_Object>;
append(arg0: java_lang_CharSequence): java_io_PrintWriter;
append(arg0: java_lang_CharSequence): java_io_Writer;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_PrintWriter;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_Writer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: string): java_io_PrintWriter;
append(arg0: string): java_io_Writer;
append(arg0: string): java_lang_Appendable;
checkError(): boolean;
close(): void;
equals(arg0: java_lang_Object): boolean;
flush(): void;
format(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_io_PrintWriter;
format(arg0: string, ...arg1: java_lang_Object[]): java_io_PrintWriter;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
print(arg0: boolean): void;
print(arg0: java_lang_Object): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: string): void;
print(arg0: string): void;
print(arg0: string[]): void;
printf(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_io_PrintWriter;
printf(arg0: string, ...arg1: java_lang_Object[]): java_io_PrintWriter;
println(): void;
println(arg0: boolean): void;
println(arg0: java_lang_Object): void;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: string): void;
println(arg0: string): void;
println(arg0: string[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
write(arg0: number): void;
write(arg0: string): void;
write(arg0: string, arg1: number, arg2: number): void;
write(arg0: string[]): void;
write(arg0: string[], arg1: number, arg2: number): void;
constructor(arg0: java_io_File);
constructor(arg0: java_io_File, arg1: java_nio_charset_Charset);
constructor(arg0: java_io_File, arg1: string);
constructor(arg0: java_io_OutputStream);
constructor(arg0: java_io_OutputStream, arg1: boolean);
constructor(arg0: java_io_OutputStream, arg1: boolean, arg2: java_nio_charset_Charset);
constructor(arg0: java_io_Writer);
constructor(arg0: java_io_Writer, arg1: boolean);
constructor(arg0: string);
constructor(arg0: string, arg1: java_nio_charset_Charset);
constructor(arg0: string, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.io' {
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream, Closeable as java_io_Closeable } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';

  export class InputStream extends java_lang_Object implements java_io_Closeable {

available(): number;
close(): void;
mark(arg0: number): void;
markSupported(): boolean;
read(): number;
read(arg0: number[]): number;
read(arg0: number[], arg1: number, arg2: number): number;
readAllBytes(): number[];
readNBytes(arg0: number): number[];
readNBytes(arg0: number[], arg1: number, arg2: number): number;
reset(): void;
skip(arg0: number): number;
static nullInputStream(): java_io_InputStream;
transferTo(arg0: java_io_OutputStream): number;
constructor();
  }
}
//@ts-nocheck

declare module 'java.io' {
import { OutputStream as java_io_OutputStream, Closeable as java_io_Closeable, Flushable as java_io_Flushable } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';

  export class OutputStream extends java_lang_Object implements java_io_Closeable, java_io_Flushable {

close(): void;
flush(): void;
static nullOutputStream(): java_io_OutputStream;
write(arg0: number): void;
write(arg0: number[]): void;
write(arg0: number[], arg1: number, arg2: number): void;
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
absoluteFile: java_io_File;
absolutePath: string;
canonicalFile: java_io_File;
canonicalPath: string;
freeSpace: number;
name: string;
parent: string;
parentFile: java_io_File;
path: string;
static pathSeparator: string;
static pathSeparatorChar: string;
static separator: string;
static separatorChar: string;
totalSpace: number;
usableSpace: number;
canExecute(): boolean;
canRead(): boolean;
canWrite(): boolean;
compareTo(arg0: java_io_File): number;
compareTo(arg0: java_lang_Object): number;
createNewFile(): boolean;
delete(): boolean;
deleteOnExit(): void;
equals(arg0: java_lang_Object): boolean;
exists(): boolean;
getAbsoluteFile(): java_io_File;
getAbsolutePath(): string;
getCanonicalFile(): java_io_File;
getCanonicalPath(): string;
getFreeSpace(): number;
getName(): string;
getParent(): string;
getParentFile(): java_io_File;
getPath(): string;
getTotalSpace(): number;
getUsableSpace(): number;
hashCode(): number;
isAbsolute(): boolean;
isDirectory(): boolean;
isFile(): boolean;
isHidden(): boolean;
lastModified(): number;
length(): number;
list(): string[];
list(arg0: java_io_FilenameFilter): string[];
listFiles(): java_io_File[];
listFiles(arg0: java_io_FileFilter): java_io_File[];
listFiles(arg0: java_io_FilenameFilter): java_io_File[];
mkdir(): boolean;
mkdirs(): boolean;
renameTo(arg0: java_io_File): boolean;
setExecutable(arg0: boolean): boolean;
setExecutable(arg0: boolean, arg1: boolean): boolean;
setLastModified(arg0: number): boolean;
setReadOnly(): boolean;
setReadable(arg0: boolean): boolean;
setReadable(arg0: boolean, arg1: boolean): boolean;
setWritable(arg0: boolean): boolean;
setWritable(arg0: boolean, arg1: boolean): boolean;
static createTempFile(arg0: string, arg1: string): java_io_File;
static createTempFile(arg0: string, arg1: string, arg2: java_io_File): java_io_File;
static listRoots(): java_io_File[];
toPath(): java_nio_file_Path;
toString(): string;
toURI(): java_net_URI;
toURL(): java_net_URL;
constructor(arg0: java_io_File, arg1: string);
constructor(arg0: java_net_URI);
constructor(arg0: string);
constructor(arg0: string, arg1: string);
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
append(arg0: java_lang_CharSequence): java_io_PrintStream;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_PrintStream;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: string): java_io_PrintStream;
append(arg0: string): java_lang_Appendable;
checkError(): boolean;
close(): void;
equals(arg0: java_lang_Object): boolean;
flush(): void;
format(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_io_PrintStream;
format(arg0: string, ...arg1: java_lang_Object[]): java_io_PrintStream;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
print(arg0: boolean): void;
print(arg0: java_lang_Object): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: number): void;
print(arg0: string): void;
print(arg0: string): void;
print(arg0: string[]): void;
printf(arg0: java_util_Locale, arg1: string, ...arg2: java_lang_Object[]): java_io_PrintStream;
printf(arg0: string, ...arg1: java_lang_Object[]): java_io_PrintStream;
println(): void;
println(arg0: boolean): void;
println(arg0: java_lang_Object): void;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: number): void;
println(arg0: string): void;
println(arg0: string): void;
println(arg0: string[]): void;
static nullOutputStream(): java_io_OutputStream;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
write(arg0: number): void;
write(arg0: number[], arg1: number, arg2: number): void;
constructor(arg0: java_io_File);
constructor(arg0: java_io_File, arg1: java_nio_charset_Charset);
constructor(arg0: java_io_File, arg1: string);
constructor(arg0: java_io_OutputStream);
constructor(arg0: java_io_OutputStream, arg1: boolean);
constructor(arg0: java_io_OutputStream, arg1: boolean, arg2: java_nio_charset_Charset);
constructor(arg0: java_io_OutputStream, arg1: boolean, arg2: string);
constructor(arg0: string);
constructor(arg0: string, arg1: java_nio_charset_Charset);
constructor(arg0: string, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OutputStream as java_io_OutputStream } from 'java.io';

  export class FilterOutputStream extends java_io_OutputStream {
class: java_lang_Class<java_lang_Object>;
close(): void;
equals(arg0: java_lang_Object): boolean;
flush(): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
write(arg0: number): void;
write(arg0: number[]): void;
write(arg0: number[], arg1: number, arg2: number): void;
constructor(arg0: java_io_OutputStream);
  }
}
//@ts-nocheck

declare module 'java.io' {
import { CharBuffer as java_nio_CharBuffer } from 'java.nio';
import { Writer as java_io_Writer, Reader as java_io_Reader, Closeable as java_io_Closeable } from 'java.io';
import { Object as java_lang_Object, Readable as java_lang_Readable } from 'java.lang';

  export class Reader extends java_lang_Object implements java_lang_Readable, java_io_Closeable {

close(): void;
mark(arg0: number): void;
markSupported(): boolean;
read(): number;
read(arg0: java_nio_CharBuffer): number;
read(arg0: string[]): number;
read(arg0: string[], arg1: number, arg2: number): number;
ready(): boolean;
reset(): void;
skip(arg0: number): number;
static nullReader(): java_io_Reader;
transferTo(arg0: java_io_Writer): number;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object } from 'java.lang';
import { Writer as java_io_Writer, Closeable as java_io_Closeable, Flushable as java_io_Flushable } from 'java.io';

  export class Writer extends java_lang_Object implements java_lang_Appendable, java_io_Closeable, java_io_Flushable {

append(arg0: java_lang_CharSequence): java_io_Writer;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_io_Writer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: string): java_io_Writer;
append(arg0: string): java_lang_Appendable;
close(): void;
flush(): void;
static nullWriter(): java_io_Writer;
write(arg0: number): void;
write(arg0: string): void;
write(arg0: string, arg1: number, arg2: number): void;
write(arg0: string[]): void;
write(arg0: string[], arg1: number, arg2: number): void;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
import { DataOutput as java_io_DataOutput } from 'java.io';

  export class ObjectOutput implements java_io_DataOutput, java_lang_AutoCloseable {

close(): void;
flush(): void;
write(arg0: number): void;
write(arg0: number[]): void;
write(arg0: number[], arg1: number, arg2: number): void;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeBytes(arg0: string): void;
writeChar(arg0: number): void;
writeChars(arg0: string): void;
writeDouble(arg0: number): void;
writeFloat(arg0: number): void;
writeInt(arg0: number): void;
writeLong(arg0: number): void;
writeObject(arg0: java_lang_Object): void;
writeShort(arg0: number): void;
writeUTF(arg0: string): void;

  }
}
//@ts-nocheck

declare module 'java.io' {


  export class DataOutput {

write(arg0: number): void;
write(arg0: number[]): void;
write(arg0: number[], arg1: number, arg2: number): void;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeBytes(arg0: string): void;
writeChar(arg0: number): void;
writeChars(arg0: string): void;
writeDouble(arg0: number): void;
writeFloat(arg0: number): void;
writeInt(arg0: number): void;
writeLong(arg0: number): void;
writeShort(arg0: number): void;
writeUTF(arg0: string): void;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
import { DataInput as java_io_DataInput } from 'java.io';

  export class ObjectInput implements java_io_DataInput, java_lang_AutoCloseable {

available(): number;
close(): void;
read(): number;
read(arg0: number[]): number;
read(arg0: number[], arg1: number, arg2: number): number;
readBoolean(): boolean;
readByte(): number;
readChar(): string;
readDouble(): number;
readFloat(): number;
readFully(arg0: number[]): void;
readFully(arg0: number[], arg1: number, arg2: number): void;
readInt(): number;
readLine(): string;
readLong(): number;
readObject(): java_lang_Object;
readShort(): number;
readUTF(): string;
readUnsignedByte(): number;
readUnsignedShort(): number;
skip(arg0: number): number;
skipBytes(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.io' {


  export class DataInput {

readBoolean(): boolean;
readByte(): number;
readChar(): string;
readDouble(): number;
readFloat(): number;
readFully(arg0: number[]): void;
readFully(arg0: number[], arg1: number, arg2: number): void;
readInt(): number;
readLine(): string;
readLong(): number;
readShort(): number;
readUTF(): string;
readUnsignedByte(): number;
readUnsignedShort(): number;
skipBytes(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { ObjectOutput as java_io_ObjectOutput, ObjectInput as java_io_ObjectInput, Serializable as java_io_Serializable } from 'java.io';

  export class Externalizable implements java_io_Serializable {

readExternal(arg0: java_io_ObjectInput): void;
writeExternal(arg0: java_io_ObjectOutput): void;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { GetField as java_io_ObjectInputStream_GetField } from 'java.io.ObjectInputStream';
import { ObjectInputValidation as java_io_ObjectInputValidation, ObjectInputFilter as java_io_ObjectInputFilter, InputStream as java_io_InputStream, ObjectInput as java_io_ObjectInput, ObjectStreamConstants as java_io_ObjectStreamConstants } from 'java.io';

  export class ObjectInputStream extends java_io_InputStream implements java_io_ObjectInput, java_io_ObjectStreamConstants {
class: java_lang_Class<java_lang_Object>;
objectInputFilter: java_io_ObjectInputFilter;
available(): number;
close(): void;
defaultReadObject(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getObjectInputFilter(): java_io_ObjectInputFilter;
hashCode(): number;
notify(): void;
notifyAll(): void;
read(): number;
read(arg0: number[], arg1: number, arg2: number): number;
readBoolean(): boolean;
readByte(): number;
readChar(): string;
readDouble(): number;
readFields(): java_io_ObjectInputStream_GetField;
readFloat(): number;
readFully(arg0: number[]): void;
readFully(arg0: number[], arg1: number, arg2: number): void;
readInt(): number;
readLine(): string;
readLong(): number;
readObject(): java_lang_Object;
readShort(): number;
readUTF(): string;
readUnshared(): java_lang_Object;
readUnsignedByte(): number;
readUnsignedShort(): number;
registerValidation(arg0: java_io_ObjectInputValidation, arg1: number): void;
setObjectInputFilter(arg0: java_io_ObjectInputFilter): void;
skipBytes(arg0: number): number;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_io_InputStream);
  }
}
//@ts-nocheck

declare module 'java.io.ObjectInputStream' {
import { Object as java_lang_Object } from 'java.lang';
import { ObjectStreamClass as java_io_ObjectStreamClass } from 'java.io';

  export class GetField extends java_lang_Object {
objectStreamClass: java_io_ObjectStreamClass;
defaulted(arg0: string): boolean;
get(arg0: string, arg1: boolean): boolean;
get(arg0: string, arg1: java_lang_Object): java_lang_Object;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: number): number;
get(arg0: string, arg1: string): string;
getObjectStreamClass(): java_io_ObjectStreamClass;
constructor();
  }
}
//@ts-nocheck

declare module 'java.io' {
import { ObjectStreamField as java_io_ObjectStreamField, ObjectStreamClass as java_io_ObjectStreamClass, Serializable as java_io_Serializable } from 'java.io';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class ObjectStreamClass extends java_lang_Object implements java_io_Serializable {
field: java_io_ObjectStreamField;
fields: java_io_ObjectStreamField[];
name: string;
serialVersionUID: number;
static NO_FIELDS: java_io_ObjectStreamField[];
forClass(): java_lang_Class<java_lang_Object>;
getField(arg0: string): java_io_ObjectStreamField;
getFields(): java_io_ObjectStreamField[];
getName(): string;
getSerialVersionUID(): number;
static lookup(arg0: java_lang_Class<java_lang_Object>): java_io_ObjectStreamClass;
static lookupAny(arg0: java_lang_Class<java_lang_Object>): java_io_ObjectStreamClass;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';

  export class ObjectStreamField extends java_lang_Object implements java_lang_Comparable<java_lang_Object> {
name: string;
offset: number;
type: java_lang_Class<java_lang_Object>;
typeCode: string;
typeString: string;
compareTo(arg0: java_lang_Object): number;
getName(): string;
getOffset(): number;
getType(): java_lang_Class<java_lang_Object>;
getTypeCode(): string;
getTypeString(): string;
isPrimitive(): boolean;
isUnshared(): boolean;
toString(): string;
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

arrayLength(): number;
depth(): number;
references(): number;
serialClass(): java_lang_Class<java_lang_Object>;
streamBytes(): number;

  }
}
//@ts-nocheck

declare module 'java.io.ObjectInputFilter' {
import { Status as java_io_ObjectInputFilter_Status } from 'java.io.ObjectInputFilter';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Status extends java_lang_Enum<java_io_ObjectInputFilter_Status> {
class: java_lang_Class<java_lang_Object>;
static ALLOWED: java_io_ObjectInputFilter_Status;
static REJECTED: java_io_ObjectInputFilter_Status;
static UNDECIDED: java_io_ObjectInputFilter_Status;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_io_ObjectInputFilter_Status;
static values(): java_io_ObjectInputFilter_Status[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.io' {
import { SerializablePermission as java_io_SerializablePermission } from 'java.io';

  export class ObjectStreamConstants {
static PROTOCOL_VERSION_1: number;
static PROTOCOL_VERSION_2: number;
static SC_BLOCK_DATA: number;
static SC_ENUM: number;
static SC_EXTERNALIZABLE: number;
static SC_SERIALIZABLE: number;
static SC_WRITE_METHOD: number;
static SERIAL_FILTER_PERMISSION: java_io_SerializablePermission;
static STREAM_MAGIC: number;
static STREAM_VERSION: number;
static SUBCLASS_IMPLEMENTATION_PERMISSION: java_io_SerializablePermission;
static SUBSTITUTION_PERMISSION: java_io_SerializablePermission;
static TC_ARRAY: number;
static TC_BASE: number;
static TC_BLOCKDATA: number;
static TC_BLOCKDATALONG: number;
static TC_CLASS: number;
static TC_CLASSDESC: number;
static TC_ENDBLOCKDATA: number;
static TC_ENUM: number;
static TC_EXCEPTION: number;
static TC_LONGSTRING: number;
static TC_MAX: number;
static TC_NULL: number;
static TC_OBJECT: number;
static TC_PROXYCLASSDESC: number;
static TC_REFERENCE: number;
static TC_RESET: number;
static TC_STRING: number;
static baseWireHandle: number;


  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BasicPermission as java_security_BasicPermission } from 'java.security';

  export class SerializablePermission extends java_security_BasicPermission {
/** Returns the unique fully qualified name of this Permission */
name: string;
class: java_lang_Class<java_lang_Object>;
/** Returns the unique fully qualified name of this Permission */
getName(): string;
checkGuard(arg0: java_lang_Object): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
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
close(): void;
defaultWriteObject(): void;
equals(arg0: java_lang_Object): boolean;
flush(): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
putFields(): java_io_ObjectOutputStream_PutField;
reset(): void;
toString(): string;
useProtocolVersion(arg0: number): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
write(arg0: number): void;
write(arg0: number[]): void;
write(arg0: number[], arg1: number, arg2: number): void;
writeBoolean(arg0: boolean): void;
writeByte(arg0: number): void;
writeBytes(arg0: string): void;
writeChar(arg0: number): void;
writeChars(arg0: string): void;
writeDouble(arg0: number): void;
writeFields(): void;
writeFloat(arg0: number): void;
writeInt(arg0: number): void;
writeLong(arg0: number): void;
writeObject(arg0: java_lang_Object): void;
writeShort(arg0: number): void;
writeUTF(arg0: string): void;
writeUnshared(arg0: java_lang_Object): void;
constructor(arg0: java_io_OutputStream);
  }
}
//@ts-nocheck

declare module 'java.io.ObjectOutputStream' {
import { Object as java_lang_Object } from 'java.lang';
import { ObjectOutput as java_io_ObjectOutput } from 'java.io';

  export class PutField extends java_lang_Object {

put(arg0: string, arg1: boolean): void;
put(arg0: string, arg1: java_lang_Object): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: number): void;
put(arg0: string, arg1: string): void;
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
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
stackTrace: java_lang_StackTraceElement[];
suppressed: java_lang_Throwable[];
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
getSuppressed(): java_lang_Throwable[];
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_lang_Throwable);
constructor(arg0: string);
constructor(arg0: string, arg1: java_lang_Throwable);
  }
}
//@ts-nocheck

declare module 'java.io' {
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Reader as java_io_Reader } from 'java.io';

  export class BufferedReader extends java_io_Reader {
class: java_lang_Class<java_lang_Object>;
close(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
lines(): java_util_stream_Stream<string>;
mark(arg0: number): void;
markSupported(): boolean;
notify(): void;
notifyAll(): void;
read(): number;
read(arg0: string[], arg1: number, arg2: number): number;
readLine(): string;
ready(): boolean;
reset(): void;
skip(arg0: number): number;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_io_Reader);
constructor(arg0: java_io_Reader, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.io' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Writer as java_io_Writer } from 'java.io';

  export class BufferedWriter extends java_io_Writer {
class: java_lang_Class<java_lang_Object>;
close(): void;
equals(arg0: java_lang_Object): boolean;
flush(): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
newLine(): void;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
write(arg0: number): void;
write(arg0: string, arg1: number, arg2: number): void;
write(arg0: string[], arg1: number, arg2: number): void;
constructor(arg0: java_io_Writer);
constructor(arg0: java_io_Writer, arg1: number);
  }
}