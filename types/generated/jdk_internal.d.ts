//@ts-nocheck

declare module 'jdk.internal.reflect' {
import { Object as java_lang_Object } from 'java.lang';

  export class FieldAccessor {
boolean: boolean;
byte: number;
short: number;
char: string;
int: number;
long: number;
float: number;
double: number;
get(arg0: java_lang_Object): java_lang_Object;
getBoolean(arg0: java_lang_Object): boolean;
getByte(arg0: java_lang_Object): number;
getShort(arg0: java_lang_Object): number;
getChar(arg0: java_lang_Object): string;
getInt(arg0: java_lang_Object): number;
getLong(arg0: java_lang_Object): number;
getFloat(arg0: java_lang_Object): number;
getDouble(arg0: java_lang_Object): number;
set(arg0: java_lang_Object, arg1: java_lang_Object): void;
setBoolean(arg0: java_lang_Object, arg1: boolean): void;
setByte(arg0: java_lang_Object, arg1: number): void;
setChar(arg0: java_lang_Object, arg1: string): void;
setShort(arg0: java_lang_Object, arg1: number): void;
setInt(arg0: java_lang_Object, arg1: number): void;
setLong(arg0: java_lang_Object, arg1: number): void;
setFloat(arg0: java_lang_Object, arg1: number): void;
setDouble(arg0: java_lang_Object, arg1: number): void;

  }
}//@ts-nocheck

declare module 'jdk.internal.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Constructor as java_lang_reflect_Constructor, Field as java_lang_reflect_Field, Method as java_lang_reflect_Method, Executable as java_lang_reflect_Executable } from 'java.lang.reflect';
import { ReflectionFactory as jdk_internal_reflect_ReflectionFactory, FieldAccessor as jdk_internal_reflect_FieldAccessor, MethodAccessor as jdk_internal_reflect_MethodAccessor, ConstructorAccessor as jdk_internal_reflect_ConstructorAccessor, LangReflectAccess as jdk_internal_reflect_LangReflectAccess } from 'jdk.internal.reflect';
import { MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { OptionalDataException as java_io_OptionalDataException } from 'java.io';

  export class ReflectionFactory extends java_lang_Object {
static initted: boolean;
static soleInstance: jdk_internal_reflect_ReflectionFactory;
static langReflectAccess: jdk_internal_reflect_LangReflectAccess;
static hasStaticInitializerMethod: java_lang_reflect_Method;
static noInflation: boolean;
static inflationThreshold: number;
static disableSerialConstructorChecks: boolean;
static $assertionsDisabled: boolean;
executableTypeAnnotationBytes: number[];
static reflectionFactory: jdk_internal_reflect_ReflectionFactory;
executableSharedParameterTypes: java_lang_Class<java_lang_Object>[];
methodAccessor: jdk_internal_reflect_MethodAccessor;
constructorAccessor: jdk_internal_reflect_ConstructorAccessor;
newConstructor(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_Class<java_lang_Object>[], arg2: java_lang_Class<java_lang_Object>[], arg3: number, arg4: number, arg5: string, arg6: number[], arg7: number[]): java_lang_reflect_Constructor<java_lang_Object>;
newField(arg0: java_lang_Class<java_lang_Object>, arg1: string, arg2: java_lang_Class<java_lang_Object>, arg3: number, arg4: number, arg5: string, arg6: number[]): java_lang_reflect_Field;
newMethod(arg0: java_lang_Class<java_lang_Object>, arg1: string, arg2: java_lang_Class<java_lang_Object>[], arg3: java_lang_Class<java_lang_Object>, arg4: java_lang_Class<java_lang_Object>[], arg5: number, arg6: number, arg7: string, arg8: number[], arg9: number[], arg10: number[]): java_lang_reflect_Method;
getExecutableTypeAnnotationBytes(arg0: java_lang_reflect_Executable): number[];
static getReflectionFactory(): jdk_internal_reflect_ReflectionFactory;
copyConstructor<T extends java_lang_Object>(arg0: java_lang_reflect_Constructor<T>): java_lang_reflect_Constructor<T>;
getExecutableSharedParameterTypes(arg0: java_lang_reflect_Executable): java_lang_Class<java_lang_Object>[];
copyMethod(arg0: java_lang_reflect_Method): java_lang_reflect_Method;
copyField(arg0: java_lang_reflect_Field): java_lang_reflect_Field;
newFieldAccessor(arg0: java_lang_reflect_Field, arg1: boolean): jdk_internal_reflect_FieldAccessor;
getMethodAccessor(arg0: java_lang_reflect_Method): jdk_internal_reflect_MethodAccessor;
setMethodAccessor(arg0: java_lang_reflect_Method, arg1: jdk_internal_reflect_MethodAccessor): void;
newMethodAccessor(arg0: java_lang_reflect_Method): jdk_internal_reflect_MethodAccessor;
getConstructorAccessor(arg0: java_lang_reflect_Constructor<java_lang_Object>): jdk_internal_reflect_ConstructorAccessor;
setConstructorAccessor(arg0: java_lang_reflect_Constructor<java_lang_Object>, arg1: jdk_internal_reflect_ConstructorAccessor): void;
newConstructorAccessor(arg0: java_lang_reflect_Constructor<java_lang_Object>): jdk_internal_reflect_ConstructorAccessor;
setLangReflectAccess(arg0: jdk_internal_reflect_LangReflectAccess): void;
leafCopyMethod(arg0: java_lang_reflect_Method): java_lang_reflect_Method;
newConstructorForExternalization(arg0: java_lang_Class<java_lang_Object>): java_lang_reflect_Constructor<java_lang_Object>;
newConstructorForSerialization(arg0: java_lang_Class<java_lang_Object>): java_lang_reflect_Constructor<java_lang_Object>;
newConstructorForSerialization(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_reflect_Constructor<java_lang_Object>): java_lang_reflect_Constructor<java_lang_Object>;
readObjectForSerialization(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodHandle;
readObjectNoDataForSerialization(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodHandle;
writeObjectForSerialization(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodHandle;
writeReplaceForSerialization(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodHandle;
readResolveForSerialization(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodHandle;
hasStaticInitializerForSerialization(arg0: java_lang_Class<java_lang_Object>): boolean;
newOptionalDataExceptionForSerialization(): java_lang_reflect_Constructor<java_io_OptionalDataException>;

  }
}//@ts-nocheck

declare module 'jdk.internal.reflect' {
import { Object as java_lang_Object } from 'java.lang';

  export class ConstructorAccessor {

newInstance(arg0: java_lang_Object[]): java_lang_Object;

  }
}//@ts-nocheck

declare module 'jdk.internal.reflect' {
import { Object as java_lang_Object } from 'java.lang';

  export class MethodAccessor {

invoke(arg0: java_lang_Object, arg1: java_lang_Object[]): java_lang_Object;

  }
}//@ts-nocheck

declare module 'jdk.internal.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Constructor as java_lang_reflect_Constructor, Field as java_lang_reflect_Field, Method as java_lang_reflect_Method, Executable as java_lang_reflect_Executable, AccessibleObject as java_lang_reflect_AccessibleObject } from 'java.lang.reflect';
import { MethodAccessor as jdk_internal_reflect_MethodAccessor, ConstructorAccessor as jdk_internal_reflect_ConstructorAccessor } from 'jdk.internal.reflect';

  export class LangReflectAccess {
executableTypeAnnotationBytes: number[];
executableSharedParameterTypes: java_lang_Class<java_lang_Object>[];
root: T;
methodAccessor: jdk_internal_reflect_MethodAccessor;
constructorAccessor: jdk_internal_reflect_ConstructorAccessor;
constructorSlot: number;
constructorSignature: string;
constructorAnnotations: number[];
constructorParameterAnnotations: number[];
newConstructor<T extends java_lang_Object>(arg0: java_lang_Class<T>, arg1: java_lang_Class<java_lang_Object>[], arg2: java_lang_Class<java_lang_Object>[], arg3: number, arg4: number, arg5: string, arg6: number[], arg7: number[]): java_lang_reflect_Constructor<T>;
newField(arg0: java_lang_Class<java_lang_Object>, arg1: string, arg2: java_lang_Class<java_lang_Object>, arg3: number, arg4: number, arg5: string, arg6: number[]): java_lang_reflect_Field;
newMethod(arg0: java_lang_Class<java_lang_Object>, arg1: string, arg2: java_lang_Class<java_lang_Object>[], arg3: java_lang_Class<java_lang_Object>, arg4: java_lang_Class<java_lang_Object>[], arg5: number, arg6: number, arg7: string, arg8: number[], arg9: number[], arg10: number[]): java_lang_reflect_Method;
getExecutableTypeAnnotationBytes(arg0: java_lang_reflect_Executable): number[];
copyConstructor<T extends java_lang_Object>(arg0: java_lang_reflect_Constructor<T>): java_lang_reflect_Constructor<T>;
getExecutableSharedParameterTypes(arg0: java_lang_reflect_Executable): java_lang_Class<java_lang_Object>[];
copyMethod(arg0: java_lang_reflect_Method): java_lang_reflect_Method;
copyField(arg0: java_lang_reflect_Field): java_lang_reflect_Field;
getRoot<T extends java_lang_reflect_AccessibleObject>(arg0: T): T;
getMethodAccessor(arg0: java_lang_reflect_Method): jdk_internal_reflect_MethodAccessor;
setMethodAccessor(arg0: java_lang_reflect_Method, arg1: jdk_internal_reflect_MethodAccessor): void;
getConstructorAccessor(arg0: java_lang_reflect_Constructor<java_lang_Object>): jdk_internal_reflect_ConstructorAccessor;
setConstructorAccessor(arg0: java_lang_reflect_Constructor<java_lang_Object>, arg1: jdk_internal_reflect_ConstructorAccessor): void;
leafCopyMethod(arg0: java_lang_reflect_Method): java_lang_reflect_Method;
getConstructorSlot(arg0: java_lang_reflect_Constructor<java_lang_Object>): number;
getConstructorSignature(arg0: java_lang_reflect_Constructor<java_lang_Object>): string;
getConstructorAnnotations(arg0: java_lang_reflect_Constructor<java_lang_Object>): number[];
getConstructorParameterAnnotations(arg0: java_lang_reflect_Constructor<java_lang_Object>): number[];

  }
}//@ts-nocheck

declare module 'jdk.internal.misc' {
import { Class as java_lang_Class, Object as java_lang_Object, Throwable as java_lang_Throwable, ClassLoader as java_lang_ClassLoader } from 'java.lang';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { Field as java_lang_reflect_Field } from 'java.lang.reflect';

  export class Unsafe extends java_lang_Object {
static theUnsafe: jdk_internal_misc_Unsafe;
static INVALID_FIELD_OFFSET: number;
static ARRAY_BOOLEAN_BASE_OFFSET: number;
static ARRAY_BYTE_BASE_OFFSET: number;
static ARRAY_SHORT_BASE_OFFSET: number;
static ARRAY_CHAR_BASE_OFFSET: number;
static ARRAY_INT_BASE_OFFSET: number;
static ARRAY_LONG_BASE_OFFSET: number;
static ARRAY_FLOAT_BASE_OFFSET: number;
static ARRAY_DOUBLE_BASE_OFFSET: number;
static ARRAY_OBJECT_BASE_OFFSET: number;
static ARRAY_BOOLEAN_INDEX_SCALE: number;
static ARRAY_BYTE_INDEX_SCALE: number;
static ARRAY_SHORT_INDEX_SCALE: number;
static ARRAY_CHAR_INDEX_SCALE: number;
static ARRAY_INT_INDEX_SCALE: number;
static ARRAY_LONG_INDEX_SCALE: number;
static ARRAY_FLOAT_INDEX_SCALE: number;
static ARRAY_DOUBLE_INDEX_SCALE: number;
static ARRAY_OBJECT_INDEX_SCALE: number;
static ADDRESS_SIZE: number;
static BE: boolean;
static unalignedAccess: boolean;
object: java_lang_Object;
boolean: boolean;
byte: number;
byte: number;
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
objectVolatile: java_lang_Object;
booleanVolatile: boolean;
byteVolatile: number;
shortVolatile: number;
charVolatile: string;
intVolatile: number;
longVolatile: number;
floatVolatile: number;
doubleVolatile: number;
objectOpaque: java_lang_Object;
booleanOpaque: boolean;
byteOpaque: number;
shortOpaque: number;
charOpaque: string;
intOpaque: number;
longOpaque: number;
floatOpaque: number;
doubleOpaque: number;
objectAcquire: java_lang_Object;
booleanAcquire: boolean;
byteAcquire: number;
shortAcquire: number;
charAcquire: string;
intAcquire: number;
longAcquire: number;
floatAcquire: number;
doubleAcquire: number;
shortUnaligned: number;
shortUnaligned: number;
charUnaligned: string;
charUnaligned: string;
intUnaligned: number;
intUnaligned: number;
longUnaligned: number;
longUnaligned: number;
andAddInt: number;
andAddLong: number;
andAddByte: number;
andAddShort: number;
andSetInt: number;
andSetLong: number;
andSetByte: number;
andSetShort: number;
andSetObject: java_lang_Object;
static unsafe: jdk_internal_misc_Unsafe;
address: number;
address: number;
uncompressedObject: java_lang_Object;
loadAverage: number;
andAddIntRelease: number;
andAddIntAcquire: number;
andAddLongRelease: number;
andAddLongAcquire: number;
andAddByteRelease: number;
andAddByteAcquire: number;
andAddShortRelease: number;
andAddShortAcquire: number;
andAddChar: string;
andAddCharRelease: string;
andAddCharAcquire: string;
andAddFloat: number;
andAddFloatRelease: number;
andAddFloatAcquire: number;
andAddDouble: number;
andAddDoubleRelease: number;
andAddDoubleAcquire: number;
andSetIntRelease: number;
andSetIntAcquire: number;
andSetLongRelease: number;
andSetLongAcquire: number;
andSetObjectRelease: java_lang_Object;
andSetObjectAcquire: java_lang_Object;
andSetByteRelease: number;
andSetByteAcquire: number;
andSetBoolean: boolean;
andSetBooleanRelease: boolean;
andSetBooleanAcquire: boolean;
andSetShortRelease: number;
andSetShortAcquire: number;
andSetChar: string;
andSetCharRelease: string;
andSetCharAcquire: string;
andSetFloat: number;
andSetFloatRelease: number;
andSetFloatAcquire: number;
andSetDouble: number;
andSetDoubleRelease: number;
andSetDoubleAcquire: number;
andBitwiseOrBoolean: boolean;
andBitwiseOrBooleanRelease: boolean;
andBitwiseOrBooleanAcquire: boolean;
andBitwiseAndBoolean: boolean;
andBitwiseAndBooleanRelease: boolean;
andBitwiseAndBooleanAcquire: boolean;
andBitwiseXorBoolean: boolean;
andBitwiseXorBooleanRelease: boolean;
andBitwiseXorBooleanAcquire: boolean;
andBitwiseOrByte: number;
andBitwiseOrByteRelease: number;
andBitwiseOrByteAcquire: number;
andBitwiseAndByte: number;
andBitwiseAndByteRelease: number;
andBitwiseAndByteAcquire: number;
andBitwiseXorByte: number;
andBitwiseXorByteRelease: number;
andBitwiseXorByteAcquire: number;
andBitwiseOrChar: string;
andBitwiseOrCharRelease: string;
andBitwiseOrCharAcquire: string;
andBitwiseAndChar: string;
andBitwiseAndCharRelease: string;
andBitwiseAndCharAcquire: string;
andBitwiseXorChar: string;
andBitwiseXorCharRelease: string;
andBitwiseXorCharAcquire: string;
andBitwiseOrShort: number;
andBitwiseOrShortRelease: number;
andBitwiseOrShortAcquire: number;
andBitwiseAndShort: number;
andBitwiseAndShortRelease: number;
andBitwiseAndShortAcquire: number;
andBitwiseXorShort: number;
andBitwiseXorShortRelease: number;
andBitwiseXorShortAcquire: number;
andBitwiseOrInt: number;
andBitwiseOrIntRelease: number;
andBitwiseOrIntAcquire: number;
andBitwiseAndInt: number;
andBitwiseAndIntRelease: number;
andBitwiseAndIntAcquire: number;
andBitwiseXorInt: number;
andBitwiseXorIntRelease: number;
andBitwiseXorIntAcquire: number;
andBitwiseOrLong: number;
andBitwiseOrLongRelease: number;
andBitwiseOrLongAcquire: number;
andBitwiseAndLong: number;
andBitwiseAndLongRelease: number;
andBitwiseAndLongAcquire: number;
andBitwiseXorLong: number;
andBitwiseXorLongRelease: number;
andBitwiseXorLongAcquire: number;
allocateInstance(arg0: java_lang_Class<java_lang_Object>): java_lang_Object;
loadFence(): void;
storeFence(): void;
fullFence(): void;
getObject(arg0: java_lang_Object, arg1: number): java_lang_Object;
putObject(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object): void;
getBoolean(arg0: java_lang_Object, arg1: number): boolean;
putBoolean(arg0: java_lang_Object, arg1: number, arg2: boolean): void;
getByte(arg0: java_lang_Object, arg1: number): number;
getByte(arg0: number): number;
putByte(arg0: java_lang_Object, arg1: number, arg2: number): void;
putByte(arg0: number, arg1: number): void;
getShort(arg0: java_lang_Object, arg1: number): number;
getShort(arg0: number): number;
putShort(arg0: java_lang_Object, arg1: number, arg2: number): void;
putShort(arg0: number, arg1: number): void;
getChar(arg0: java_lang_Object, arg1: number): string;
getChar(arg0: number): string;
putChar(arg0: number, arg1: string): void;
putChar(arg0: java_lang_Object, arg1: number, arg2: string): void;
getInt(arg0: java_lang_Object, arg1: number): number;
getInt(arg0: number): number;
putInt(arg0: number, arg1: number): void;
putInt(arg0: java_lang_Object, arg1: number, arg2: number): void;
getLong(arg0: java_lang_Object, arg1: number): number;
getLong(arg0: number): number;
putLong(arg0: java_lang_Object, arg1: number, arg2: number): void;
putLong(arg0: number, arg1: number): void;
getFloat(arg0: number): number;
getFloat(arg0: java_lang_Object, arg1: number): number;
putFloat(arg0: number, arg1: number): void;
putFloat(arg0: java_lang_Object, arg1: number, arg2: number): void;
getDouble(arg0: java_lang_Object, arg1: number): number;
getDouble(arg0: number): number;
putDouble(arg0: java_lang_Object, arg1: number, arg2: number): void;
putDouble(arg0: number, arg1: number): void;
getObjectVolatile(arg0: java_lang_Object, arg1: number): java_lang_Object;
putObjectVolatile(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object): void;
getBooleanVolatile(arg0: java_lang_Object, arg1: number): boolean;
putBooleanVolatile(arg0: java_lang_Object, arg1: number, arg2: boolean): void;
getByteVolatile(arg0: java_lang_Object, arg1: number): number;
putByteVolatile(arg0: java_lang_Object, arg1: number, arg2: number): void;
getShortVolatile(arg0: java_lang_Object, arg1: number): number;
putShortVolatile(arg0: java_lang_Object, arg1: number, arg2: number): void;
getCharVolatile(arg0: java_lang_Object, arg1: number): string;
putCharVolatile(arg0: java_lang_Object, arg1: number, arg2: string): void;
getIntVolatile(arg0: java_lang_Object, arg1: number): number;
putIntVolatile(arg0: java_lang_Object, arg1: number, arg2: number): void;
getLongVolatile(arg0: java_lang_Object, arg1: number): number;
putLongVolatile(arg0: java_lang_Object, arg1: number, arg2: number): void;
getFloatVolatile(arg0: java_lang_Object, arg1: number): number;
putFloatVolatile(arg0: java_lang_Object, arg1: number, arg2: number): void;
getDoubleVolatile(arg0: java_lang_Object, arg1: number): number;
putDoubleVolatile(arg0: java_lang_Object, arg1: number, arg2: number): void;
getObjectOpaque(arg0: java_lang_Object, arg1: number): java_lang_Object;
putObjectOpaque(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object): void;
getBooleanOpaque(arg0: java_lang_Object, arg1: number): boolean;
putBooleanOpaque(arg0: java_lang_Object, arg1: number, arg2: boolean): void;
getByteOpaque(arg0: java_lang_Object, arg1: number): number;
putByteOpaque(arg0: java_lang_Object, arg1: number, arg2: number): void;
getShortOpaque(arg0: java_lang_Object, arg1: number): number;
putShortOpaque(arg0: java_lang_Object, arg1: number, arg2: number): void;
getCharOpaque(arg0: java_lang_Object, arg1: number): string;
putCharOpaque(arg0: java_lang_Object, arg1: number, arg2: string): void;
getIntOpaque(arg0: java_lang_Object, arg1: number): number;
putIntOpaque(arg0: java_lang_Object, arg1: number, arg2: number): void;
getLongOpaque(arg0: java_lang_Object, arg1: number): number;
putLongOpaque(arg0: java_lang_Object, arg1: number, arg2: number): void;
getFloatOpaque(arg0: java_lang_Object, arg1: number): number;
putFloatOpaque(arg0: java_lang_Object, arg1: number, arg2: number): void;
getDoubleOpaque(arg0: java_lang_Object, arg1: number): number;
putDoubleOpaque(arg0: java_lang_Object, arg1: number, arg2: number): void;
getObjectAcquire(arg0: java_lang_Object, arg1: number): java_lang_Object;
putObjectRelease(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object): void;
getBooleanAcquire(arg0: java_lang_Object, arg1: number): boolean;
putBooleanRelease(arg0: java_lang_Object, arg1: number, arg2: boolean): void;
getByteAcquire(arg0: java_lang_Object, arg1: number): number;
putByteRelease(arg0: java_lang_Object, arg1: number, arg2: number): void;
getShortAcquire(arg0: java_lang_Object, arg1: number): number;
putShortRelease(arg0: java_lang_Object, arg1: number, arg2: number): void;
getCharAcquire(arg0: java_lang_Object, arg1: number): string;
putCharRelease(arg0: java_lang_Object, arg1: number, arg2: string): void;
getIntAcquire(arg0: java_lang_Object, arg1: number): number;
putIntRelease(arg0: java_lang_Object, arg1: number, arg2: number): void;
getLongAcquire(arg0: java_lang_Object, arg1: number): number;
putLongRelease(arg0: java_lang_Object, arg1: number, arg2: number): void;
getFloatAcquire(arg0: java_lang_Object, arg1: number): number;
putFloatRelease(arg0: java_lang_Object, arg1: number, arg2: number): void;
getDoubleAcquire(arg0: java_lang_Object, arg1: number): number;
putDoubleRelease(arg0: java_lang_Object, arg1: number, arg2: number): void;
getShortUnaligned(arg0: java_lang_Object, arg1: number): number;
getShortUnaligned(arg0: java_lang_Object, arg1: number, arg2: boolean): number;
putShortUnaligned(arg0: java_lang_Object, arg1: number, arg2: number, arg3: boolean): void;
putShortUnaligned(arg0: java_lang_Object, arg1: number, arg2: number): void;
getCharUnaligned(arg0: java_lang_Object, arg1: number, arg2: boolean): string;
getCharUnaligned(arg0: java_lang_Object, arg1: number): string;
putCharUnaligned(arg0: java_lang_Object, arg1: number, arg2: string): void;
putCharUnaligned(arg0: java_lang_Object, arg1: number, arg2: string, arg3: boolean): void;
getIntUnaligned(arg0: java_lang_Object, arg1: number, arg2: boolean): number;
getIntUnaligned(arg0: java_lang_Object, arg1: number): number;
putIntUnaligned(arg0: java_lang_Object, arg1: number, arg2: number, arg3: boolean): void;
putIntUnaligned(arg0: java_lang_Object, arg1: number, arg2: number): void;
getLongUnaligned(arg0: java_lang_Object, arg1: number, arg2: boolean): number;
getLongUnaligned(arg0: java_lang_Object, arg1: number): number;
putLongUnaligned(arg0: java_lang_Object, arg1: number, arg2: number): void;
putLongUnaligned(arg0: java_lang_Object, arg1: number, arg2: number, arg3: boolean): void;
compareAndSetObject(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): boolean;
compareAndExchangeObject(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): java_lang_Object;
compareAndExchangeObjectAcquire(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): java_lang_Object;
compareAndExchangeObjectRelease(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): java_lang_Object;
compareAndSetLong(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
compareAndExchangeLong(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeLongAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeLongRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndSetInt(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
compareAndExchangeInt(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeIntAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeIntRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndSetByte(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
compareAndExchangeByte(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeByteAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeByteRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndSetShort(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
compareAndExchangeShort(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeShortAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeShortRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
weakCompareAndSetObjectPlain(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): boolean;
weakCompareAndSetObjectAcquire(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): boolean;
weakCompareAndSetObjectRelease(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): boolean;
weakCompareAndSetObject(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): boolean;
weakCompareAndSetLongPlain(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetLongAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetLongRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetLong(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetIntPlain(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetIntAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetIntRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetInt(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetBytePlain(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetByteAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetByteRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetByte(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetShortPlain(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetShortAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetShortRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetShort(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
getAndAddInt(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddLong(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddByte(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddShort(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetInt(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetLong(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetByte(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetShort(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetObject(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object): java_lang_Object;
park(arg0: boolean, arg1: number): void;
unpark(arg0: java_lang_Object): void;
static getUnsafe(): jdk_internal_misc_Unsafe;
throwException(arg0: java_lang_Throwable): void;
defineClass(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: java_lang_ClassLoader, arg5: java_security_ProtectionDomain): java_lang_Class<java_lang_Object>;
objectFieldOffset(arg0: java_lang_Class<java_lang_Object>, arg1: string): number;
objectFieldOffset(arg0: java_lang_reflect_Field): number;
staticFieldBase(arg0: java_lang_reflect_Field): java_lang_Object;
staticFieldOffset(arg0: java_lang_reflect_Field): number;
shouldBeInitialized(arg0: java_lang_Class<java_lang_Object>): boolean;
ensureClassInitialized(arg0: java_lang_Class<java_lang_Object>): void;
loadLoadFence(): void;
storeStoreFence(): void;
unalignedAccess(): boolean;
getAddress(arg0: java_lang_Object, arg1: number): number;
getAddress(arg0: number): number;
putAddress(arg0: java_lang_Object, arg1: number, arg2: number): void;
putAddress(arg0: number, arg1: number): void;
getUncompressedObject(arg0: number): java_lang_Object;
allocateMemory(arg0: number): number;
reallocateMemory(arg0: number, arg1: number): number;
setMemory(arg0: number, arg1: number, arg2: number): void;
setMemory(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): void;
copyMemory(arg0: number, arg1: number, arg2: number): void;
copyMemory(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: number, arg4: number): void;
copySwapMemory(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object, arg3: number, arg4: number, arg5: number): void;
copySwapMemory(arg0: number, arg1: number, arg2: number, arg3: number): void;
freeMemory(arg0: number): void;
arrayBaseOffset(arg0: java_lang_Class<java_lang_Object>): number;
arrayIndexScale(arg0: java_lang_Class<java_lang_Object>): number;
addressSize(): number;
pageSize(): number;
defineClass0(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: java_lang_ClassLoader, arg5: java_security_ProtectionDomain): java_lang_Class<java_lang_Object>;
defineAnonymousClass(arg0: java_lang_Class<java_lang_Object>, arg1: number[], arg2: java_lang_Object[]): java_lang_Class<java_lang_Object>;
allocateUninitializedArray(arg0: java_lang_Class<java_lang_Object>, arg1: number): java_lang_Object;
compareAndSetChar(arg0: java_lang_Object, arg1: number, arg2: string, arg3: string): boolean;
compareAndExchangeChar(arg0: java_lang_Object, arg1: number, arg2: string, arg3: string): string;
compareAndExchangeCharAcquire(arg0: java_lang_Object, arg1: number, arg2: string, arg3: string): string;
compareAndExchangeCharRelease(arg0: java_lang_Object, arg1: number, arg2: string, arg3: string): string;
weakCompareAndSetChar(arg0: java_lang_Object, arg1: number, arg2: string, arg3: string): boolean;
weakCompareAndSetCharAcquire(arg0: java_lang_Object, arg1: number, arg2: string, arg3: string): boolean;
weakCompareAndSetCharRelease(arg0: java_lang_Object, arg1: number, arg2: string, arg3: string): boolean;
weakCompareAndSetCharPlain(arg0: java_lang_Object, arg1: number, arg2: string, arg3: string): boolean;
compareAndSetBoolean(arg0: java_lang_Object, arg1: number, arg2: boolean, arg3: boolean): boolean;
compareAndExchangeBoolean(arg0: java_lang_Object, arg1: number, arg2: boolean, arg3: boolean): boolean;
compareAndExchangeBooleanAcquire(arg0: java_lang_Object, arg1: number, arg2: boolean, arg3: boolean): boolean;
compareAndExchangeBooleanRelease(arg0: java_lang_Object, arg1: number, arg2: boolean, arg3: boolean): boolean;
weakCompareAndSetBoolean(arg0: java_lang_Object, arg1: number, arg2: boolean, arg3: boolean): boolean;
weakCompareAndSetBooleanAcquire(arg0: java_lang_Object, arg1: number, arg2: boolean, arg3: boolean): boolean;
weakCompareAndSetBooleanRelease(arg0: java_lang_Object, arg1: number, arg2: boolean, arg3: boolean): boolean;
weakCompareAndSetBooleanPlain(arg0: java_lang_Object, arg1: number, arg2: boolean, arg3: boolean): boolean;
compareAndSetFloat(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
compareAndExchangeFloat(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeFloatAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeFloatRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
weakCompareAndSetFloatPlain(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetFloatAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetFloatRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetFloat(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
compareAndSetDouble(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
compareAndExchangeDouble(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeDoubleAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
compareAndExchangeDoubleRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): number;
weakCompareAndSetDoublePlain(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetDoubleAcquire(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetDoubleRelease(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
weakCompareAndSetDouble(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number): boolean;
getLoadAverage(arg0: number[], arg1: number): number;
getAndAddIntRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddIntAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddLongRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddLongAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddByteRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddByteAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddShortRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddShortAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddChar(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndAddCharRelease(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndAddCharAcquire(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndAddFloat(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddFloatRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddFloatAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddDouble(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddDoubleRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndAddDoubleAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetIntRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetIntAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetLongRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetLongAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetObjectRelease(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object): java_lang_Object;
getAndSetObjectAcquire(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object): java_lang_Object;
getAndSetByteRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetByteAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetBoolean(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndSetBooleanRelease(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndSetBooleanAcquire(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndSetShortRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetShortAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetChar(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndSetCharRelease(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndSetCharAcquire(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndSetFloat(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetFloatRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetFloatAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetDouble(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetDoubleRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndSetDoubleAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrBoolean(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseOrBooleanRelease(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseOrBooleanAcquire(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseAndBoolean(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseAndBooleanRelease(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseAndBooleanAcquire(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseXorBoolean(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseXorBooleanRelease(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseXorBooleanAcquire(arg0: java_lang_Object, arg1: number, arg2: boolean): boolean;
getAndBitwiseOrByte(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrByteRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrByteAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndByte(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndByteRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndByteAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorByte(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorByteRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorByteAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrChar(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseOrCharRelease(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseOrCharAcquire(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseAndChar(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseAndCharRelease(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseAndCharAcquire(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseXorChar(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseXorCharRelease(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseXorCharAcquire(arg0: java_lang_Object, arg1: number, arg2: string): string;
getAndBitwiseOrShort(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrShortRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrShortAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndShort(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndShortRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndShortAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorShort(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorShortRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorShortAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrInt(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrIntRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrIntAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndInt(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndIntRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndIntAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorInt(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorIntRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorIntAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrLong(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrLongRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseOrLongAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndLong(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndLongRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseAndLongAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorLong(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorLongRelease(arg0: java_lang_Object, arg1: number, arg2: number): number;
getAndBitwiseXorLongAcquire(arg0: java_lang_Object, arg1: number, arg2: number): number;
isBigEndian(): boolean;

  }
}//@ts-nocheck

declare module 'jdk.internal.ref' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Cleaner as java_lang_ref_Cleaner, PhantomReference as java_lang_ref_PhantomReference } from 'java.lang.ref';
import { PhantomCleanable as jdk_internal_ref_PhantomCleanable } from 'jdk.internal.ref';
import { Cleanable as java_lang_ref_Cleaner_Cleanable } from 'java.lang.ref.Cleaner';

  export class PhantomCleanable<T extends java_lang_Object> extends java_lang_ref_PhantomReference<T> implements java_lang_ref_Cleaner_Cleanable {
prev: jdk_internal_ref_PhantomCleanable<java_lang_Object>;
next: jdk_internal_ref_PhantomCleanable<java_lang_Object>;
list: jdk_internal_ref_PhantomCleanable<java_lang_Object>;
class: java_lang_Class<java_lang_Object>;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
clean(): void;
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
constructor(arg0: T, arg1: java_lang_ref_Cleaner);
  }
}//@ts-nocheck

declare module 'jdk.internal.ref' {
import { Function as java_util_function_Function } from 'java.util.function';
import { Cleaner as java_lang_ref_Cleaner, ReferenceQueue as java_lang_ref_ReferenceQueue } from 'java.lang.ref';
import { CleanerImpl as jdk_internal_ref_CleanerImpl, PhantomCleanable as jdk_internal_ref_PhantomCleanable, WeakCleanable as jdk_internal_ref_WeakCleanable, SoftCleanable as jdk_internal_ref_SoftCleanable } from 'jdk.internal.ref';
import { ThreadFactory as java_util_concurrent_ThreadFactory } from 'java.util.concurrent';
import { Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';

  export class CleanerImpl extends java_lang_Object implements java_lang_Runnable {
static cleanerImplAccess: java_util_function_Function<java_lang_ref_Cleaner, jdk_internal_ref_CleanerImpl>;
phantomCleanableList: jdk_internal_ref_PhantomCleanable<java_lang_Object>;
weakCleanableList: jdk_internal_ref_WeakCleanable<java_lang_Object>;
softCleanableList: jdk_internal_ref_SoftCleanable<java_lang_Object>;
queue: java_lang_ref_ReferenceQueue<java_lang_Object>;
static setCleanerImplAccess(arg0: java_util_function_Function<java_lang_ref_Cleaner, jdk_internal_ref_CleanerImpl>): void;
run(): void;
start(arg0: java_lang_ref_Cleaner, arg1: java_util_concurrent_ThreadFactory): void;
constructor();
  }
}//@ts-nocheck

declare module 'jdk.internal.ref' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Cleaner as java_lang_ref_Cleaner, WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';
import { WeakCleanable as jdk_internal_ref_WeakCleanable } from 'jdk.internal.ref';
import { Cleanable as java_lang_ref_Cleaner_Cleanable } from 'java.lang.ref.Cleaner';

  export class WeakCleanable<T extends java_lang_Object> extends java_lang_ref_WeakReference<T> implements java_lang_ref_Cleaner_Cleanable {
prev: jdk_internal_ref_WeakCleanable<java_lang_Object>;
next: jdk_internal_ref_WeakCleanable<java_lang_Object>;
list: jdk_internal_ref_WeakCleanable<java_lang_Object>;
class: java_lang_Class<java_lang_Object>;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
clean(): void;
get(): T;
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
constructor(arg0: T, arg1: java_lang_ref_Cleaner);
  }
}//@ts-nocheck

declare module 'jdk.internal.ref' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Cleaner as java_lang_ref_Cleaner, SoftReference as java_lang_ref_SoftReference } from 'java.lang.ref';
import { SoftCleanable as jdk_internal_ref_SoftCleanable } from 'jdk.internal.ref';
import { Cleanable as java_lang_ref_Cleaner_Cleanable } from 'java.lang.ref.Cleaner';

  export class SoftCleanable<T extends java_lang_Object> extends java_lang_ref_SoftReference<T> implements java_lang_ref_Cleaner_Cleanable {
prev: jdk_internal_ref_SoftCleanable<java_lang_Object>;
next: jdk_internal_ref_SoftCleanable<java_lang_Object>;
list: jdk_internal_ref_SoftCleanable<java_lang_Object>;
class: java_lang_Class<java_lang_Object>;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
clean(): void;
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
constructor(arg0: T, arg1: java_lang_ref_Cleaner);
  }
}//@ts-nocheck

declare module 'jdk.internal.perf' {
import { PerfCounter as jdk_internal_perf_PerfCounter, Perf as jdk_internal_perf_Perf } from 'jdk.internal.perf';
import { LongBuffer as java_nio_LongBuffer } from 'java.nio';
import { Object as java_lang_Object } from 'java.lang';

  export class PerfCounter extends java_lang_Object {
static perf: jdk_internal_perf_Perf;
static V_Constant: number;
static V_Monotonic: number;
static V_Variable: number;
static U_None: number;
name: string;
lb: java_nio_LongBuffer;
static zipFileOpenTime: jdk_internal_perf_PerfCounter;
static zipFileCount: jdk_internal_perf_PerfCounter;
static readClassBytesTime: jdk_internal_perf_PerfCounter;
static parentDelegationTime: jdk_internal_perf_PerfCounter;
static findClassTime: jdk_internal_perf_PerfCounter;
static findClasses: jdk_internal_perf_PerfCounter;
static getZipFileOpenTime(): jdk_internal_perf_PerfCounter;
static getZipFileCount(): jdk_internal_perf_PerfCounter;
static newConstantPerfCounter(arg0: string): jdk_internal_perf_PerfCounter;
static getReadClassBytesTime(): jdk_internal_perf_PerfCounter;
add(arg0: number): void;
get(): number;
toString(): string;
set(arg0: number): void;
static getParentDelegationTime(): jdk_internal_perf_PerfCounter;
addTime(arg0: number): void;
static getFindClassTime(): jdk_internal_perf_PerfCounter;
addElapsedTimeFrom(arg0: number): void;
static getFindClasses(): jdk_internal_perf_PerfCounter;
increment(): void;
static newPerfCounter(arg0: string): jdk_internal_perf_PerfCounter;

  }
}//@ts-nocheck

declare module 'jdk.internal.perf' {
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Perf as jdk_internal_perf_Perf } from 'jdk.internal.perf';
import { Object as java_lang_Object } from 'java.lang';

  export class Perf extends java_lang_Object {
static instance: jdk_internal_perf_Perf;
static PERF_MODE_RO: number;
static PERF_MODE_RW: number;
static perf: jdk_internal_perf_Perf;
createLong(arg0: string, arg1: number, arg2: number, arg3: number): java_nio_ByteBuffer;
static getPerf(): jdk_internal_perf_Perf;
createString(arg0: string, arg1: number, arg2: number, arg3: string): java_nio_ByteBuffer;
createString(arg0: string, arg1: number, arg2: number, arg3: string, arg4: number): java_nio_ByteBuffer;
createByteArray(arg0: string, arg1: number, arg2: number, arg3: number[], arg4: number): java_nio_ByteBuffer;
highResCounter(): number;
highResFrequency(): number;
attach(arg0: string, arg1: number, arg2: string): java_nio_ByteBuffer;
attach(arg0: number, arg1: string): java_nio_ByteBuffer;

  }
}//@ts-nocheck

declare module 'jdk.internal.module' {
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { ServiceProvider as jdk_internal_module_ServicesCatalog_ServiceProvider } from 'jdk.internal.module.ServicesCatalog';
import { ClassLoader as java_lang_ClassLoader, Module as java_lang_Module, Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { ServicesCatalog as jdk_internal_module_ServicesCatalog } from 'jdk.internal.module';
import { ClassLoaderValue as jdk_internal_loader_ClassLoaderValue } from 'jdk.internal.loader';

  export class ServicesCatalog extends java_lang_Object {
map: java_util_Map<string, java_util_List<jdk_internal_module_ServicesCatalog_ServiceProvider>>;
static CLV: jdk_internal_loader_ClassLoaderValue<jdk_internal_module_ServicesCatalog>;
static servicesCatalogOrNull: jdk_internal_module_ServicesCatalog;
static servicesCatalog: jdk_internal_module_ServicesCatalog;
findServices(arg0: string): java_util_List<jdk_internal_module_ServicesCatalog_ServiceProvider>;
static getServicesCatalogOrNull(arg0: java_lang_ClassLoader): jdk_internal_module_ServicesCatalog;
register(arg0: java_lang_Module): void;
static getServicesCatalog(arg0: java_lang_ClassLoader): jdk_internal_module_ServicesCatalog;
addProvider(arg0: java_lang_Module, arg1: java_lang_Class<java_lang_Object>, arg2: java_lang_Class<java_lang_Object>): void;
static create(): jdk_internal_module_ServicesCatalog;

  }
}//@ts-nocheck

declare module 'jdk.internal.module.ServicesCatalog' {
import { Object as java_lang_Object, Module as java_lang_Module } from 'java.lang';
import { ServicesCatalog as jdk_internal_module_ServicesCatalog } from 'jdk.internal.module';

  export class ServiceProvider extends java_lang_Object {
module: java_lang_Module;
providerName: string;
this$0: jdk_internal_module_ServicesCatalog;
providerName(): string;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
module(): java_lang_Module;
constructor(arg0: jdk_internal_module_ServicesCatalog, arg1: java_lang_Module, arg2: string);
  }
}//@ts-nocheck

declare module 'jdk.internal.loader' {
import { AbstractClassLoaderValue as jdk_internal_loader_AbstractClassLoaderValue, ClassLoaderValue as jdk_internal_loader_ClassLoaderValue } from 'jdk.internal.loader';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ClassLoaderValue<V extends java_lang_Object> extends jdk_internal_loader_AbstractClassLoaderValue<jdk_internal_loader_ClassLoaderValue<V>, V> {
class: java_lang_Class<java_lang_Object>;
isEqualOrDescendantOf(arg0: jdk_internal_loader_AbstractClassLoaderValue<java_lang_Object, V>): boolean;
key(): jdk_internal_loader_ClassLoaderValue<V>;
key(): java_lang_Object;
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

declare module 'jdk.internal.loader' {
import { AbstractClassLoaderValue as jdk_internal_loader_AbstractClassLoaderValue } from 'jdk.internal.loader';
import { Object as java_lang_Object, ClassLoader as java_lang_ClassLoader } from 'java.lang';
import { Sub as jdk_internal_loader_AbstractClassLoaderValue_Sub } from 'jdk.internal.loader.AbstractClassLoaderValue';
import { BiFunction as java_util_function_BiFunction } from 'java.util.function';
import { JavaLangAccess as jdk_internal_misc_JavaLangAccess } from 'jdk.internal.misc';

  export class AbstractClassLoaderValue<CLV extends jdk_internal_loader_AbstractClassLoaderValue<CLV, V>, V extends java_lang_Object> extends java_lang_Object {
static JLA: jdk_internal_misc_JavaLangAccess;
isEqualOrDescendantOf(arg0: jdk_internal_loader_AbstractClassLoaderValue<java_lang_Object, V>): boolean;
sub<K extends java_lang_Object>(arg0: K): jdk_internal_loader_AbstractClassLoaderValue_Sub<K>;
remove(arg0: java_lang_ClassLoader, arg1: java_lang_Object): boolean;
get(arg0: java_lang_ClassLoader): V;
putIfAbsent(arg0: java_lang_ClassLoader, arg1: V): V;
key(): java_lang_Object;
computeIfAbsent(arg0: java_lang_ClassLoader, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
removeAll(arg0: java_lang_ClassLoader): void;

  }
}//@ts-nocheck

declare module 'jdk.internal.loader.AbstractClassLoaderValue' {
import { AbstractClassLoaderValue as jdk_internal_loader_AbstractClassLoaderValue } from 'jdk.internal.loader';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Sub as jdk_internal_loader_AbstractClassLoaderValue_Sub } from 'jdk.internal.loader.AbstractClassLoaderValue';

  export class Sub<K extends java_lang_Object> extends jdk_internal_loader_AbstractClassLoaderValue<jdk_internal_loader_AbstractClassLoaderValue_Sub<K>, V> {
key: K;
this$0: jdk_internal_loader_AbstractClassLoaderValue;
class: java_lang_Class<java_lang_Object>;
isEqualOrDescendantOf(arg0: jdk_internal_loader_AbstractClassLoaderValue<java_lang_Object, V>): boolean;
parent(): jdk_internal_loader_AbstractClassLoaderValue<CLV, V>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
key(): K;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
toString(): string;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'jdk.internal.misc' {
import { Class as java_lang_Class, Object as java_lang_Object, Runnable as java_lang_Runnable, Thread as java_lang_Thread, ClassLoader as java_lang_ClassLoader, Module as java_lang_Module, Package as java_lang_Package, Enum as java_lang_Enum, ModuleLayer as java_lang_ModuleLayer } from 'java.lang';
import { Executable as java_lang_reflect_Executable, Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { AccessControlContext as java_security_AccessControlContext, ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { Charset as java_nio_charset_Charset } from 'java.nio.charset';
import { List as java_util_List, Map as java_util_Map, Iterator as java_util_Iterator } from 'java.util';
import { ConstantPool as jdk_internal_reflect_ConstantPool } from 'jdk.internal.reflect';
import { AnnotationType as sun_reflect_annotation_AnnotationType } from 'sun.reflect.annotation';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';
import { Interruptible as sun_nio_ch_Interruptible } from 'sun.nio.ch';
import { ServicesCatalog as jdk_internal_module_ServicesCatalog } from 'jdk.internal.module';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { ModuleDescriptor as java_lang_module_ModuleDescriptor } from 'java.lang.module';
import { URI as java_net_URI } from 'java.net';

  export class JavaLangAccess {
rawClassAnnotations: number[];
rawClassTypeAnnotations: number[];
rawExecutableTypeAnnotations: number[];
bytesNoRepl: number[];
bytesUTF8NoRepl: number[];
declaredPublicMethods: java_util_List<java_lang_reflect_Method>;
constantPool: jdk_internal_reflect_ConstantPool;
enumConstantsShared: E[];
annotationType: sun_reflect_annotation_AnnotationType;
declaredAnnotationMap: java_util_Map<java_lang_Class<java_lang_annotation_Annotation>, java_lang_annotation_Annotation>;
servicesCatalog: jdk_internal_module_ServicesCatalog;
getRawClassAnnotations(arg0: java_lang_Class<java_lang_Object>): number[];
getRawClassTypeAnnotations(arg0: java_lang_Class<java_lang_Object>): number[];
getRawExecutableTypeAnnotations(arg0: java_lang_reflect_Executable): number[];
registerShutdownHook(arg0: number, arg1: boolean, arg2: java_lang_Runnable): void;
newThreadWithAcc(arg0: java_lang_Runnable, arg1: java_security_AccessControlContext): java_lang_Thread;
defineUnnamedModule(arg0: java_lang_ClassLoader): java_lang_Module;
newStringNoRepl(arg0: number[], arg1: java_nio_charset_Charset): string;
getBytesNoRepl(arg0: string, arg1: java_nio_charset_Charset): number[];
newStringUTF8NoRepl(arg0: number[], arg1: number, arg2: number): string;
getBytesUTF8NoRepl(arg0: string): number[];
definePackage(arg0: java_lang_ClassLoader, arg1: string, arg2: java_lang_Module): java_lang_Package;
addReads(arg0: java_lang_Module, arg1: java_lang_Module): void;
addExports(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): void;
addOpens(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): void;
addUses(arg0: java_lang_Module, arg1: java_lang_Class<java_lang_Object>): void;
getDeclaredPublicMethods(arg0: java_lang_Class<java_lang_Object>, arg1: string, ...arg2: java_lang_Class<java_lang_Object>[]): java_util_List<java_lang_reflect_Method>;
getConstantPool(arg0: java_lang_Class<java_lang_Object>): jdk_internal_reflect_ConstantPool;
getEnumConstantsShared<E extends java_lang_Enum<E>>(arg0: java_lang_Class<E>): E[];
casAnnotationType(arg0: java_lang_Class<java_lang_Object>, arg1: sun_reflect_annotation_AnnotationType, arg2: sun_reflect_annotation_AnnotationType): boolean;
getAnnotationType(arg0: java_lang_Class<java_lang_Object>): sun_reflect_annotation_AnnotationType;
getDeclaredAnnotationMap(arg0: java_lang_Class<java_lang_Object>): java_util_Map<java_lang_Class<java_lang_annotation_Annotation>, java_lang_annotation_Annotation>;
defineClass(arg0: java_lang_ClassLoader, arg1: string, arg2: number[], arg3: java_security_ProtectionDomain, arg4: string): java_lang_Class<java_lang_Object>;
findBootstrapClassOrNull(arg0: java_lang_ClassLoader, arg1: string): java_lang_Class<java_lang_Object>;
createOrGetClassLoaderValueMap(arg0: java_lang_ClassLoader): java_util_concurrent_ConcurrentHashMap<java_lang_Object, java_lang_Object>;
addNonExportedPackages(arg0: java_lang_ModuleLayer): void;
invalidatePackageAccessCache(): void;
invokeFinalize(arg0: java_lang_Object): void;
blockedOn(arg0: sun_nio_ch_Interruptible): void;
isReflectivelyExported(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): boolean;
isReflectivelyOpened(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): boolean;
getServicesCatalog(arg0: java_lang_ModuleLayer): jdk_internal_module_ServicesCatalog;
layers(arg0: java_lang_ClassLoader): java_util_stream_Stream<java_lang_ModuleLayer>;
layers(arg0: java_lang_ModuleLayer): java_util_stream_Stream<java_lang_ModuleLayer>;
defineModule(arg0: java_lang_ClassLoader, arg1: java_lang_module_ModuleDescriptor, arg2: java_net_URI): java_lang_Module;
addReadsAllUnnamed(arg0: java_lang_Module): void;
addExportsToAllUnnamed(arg0: java_lang_Module, arg1: string): void;
addOpensToAllUnnamed(arg0: java_lang_Module, arg1: string): void;
addOpensToAllUnnamed(arg0: java_lang_Module, arg1: java_util_Iterator<string>): void;
fastUUID(arg0: number, arg1: number): string;

  }
}//@ts-nocheck

declare module 'jdk.internal.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Member as java_lang_reflect_Member, Field as java_lang_reflect_Field } from 'java.lang.reflect';
import { Tag as jdk_internal_reflect_ConstantPool_Tag } from 'jdk.internal.reflect.ConstantPool';

  export class ConstantPool extends java_lang_Object {
size: number;
classAt: java_lang_Class<java_lang_Object>;
classAtIfLoaded: java_lang_Class<java_lang_Object>;
classRefIndexAt: number;
methodAt: java_lang_reflect_Member;
methodAtIfLoaded: java_lang_reflect_Member;
fieldAt: java_lang_reflect_Field;
fieldAtIfLoaded: java_lang_reflect_Field;
memberRefInfoAt: string[];
nameAndTypeRefIndexAt: number;
nameAndTypeRefInfoAt: string[];
intAt: number;
longAt: number;
floatAt: number;
doubleAt: number;
stringAt: string;
uTF8At: string;
tagAt: jdk_internal_reflect_ConstantPool_Tag;
getSize(): number;
getClassAt(arg0: number): java_lang_Class<java_lang_Object>;
getClassAtIfLoaded(arg0: number): java_lang_Class<java_lang_Object>;
getClassRefIndexAt(arg0: number): number;
getMethodAt(arg0: number): java_lang_reflect_Member;
getMethodAtIfLoaded(arg0: number): java_lang_reflect_Member;
getFieldAt(arg0: number): java_lang_reflect_Field;
getFieldAtIfLoaded(arg0: number): java_lang_reflect_Field;
getMemberRefInfoAt(arg0: number): string[];
getNameAndTypeRefIndexAt(arg0: number): number;
getNameAndTypeRefInfoAt(arg0: number): string[];
getIntAt(arg0: number): number;
getLongAt(arg0: number): number;
getFloatAt(arg0: number): number;
getDoubleAt(arg0: number): number;
getStringAt(arg0: number): string;
getUTF8At(arg0: number): string;
getTagAt(arg0: number): jdk_internal_reflect_ConstantPool_Tag;
constructor();
  }
}//@ts-nocheck

declare module 'jdk.internal.reflect.ConstantPool' {
import { Tag as jdk_internal_reflect_ConstantPool_Tag } from 'jdk.internal.reflect.ConstantPool';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Tag extends java_lang_Enum<jdk_internal_reflect_ConstantPool_Tag> {
static UTF8: jdk_internal_reflect_ConstantPool_Tag;
static INTEGER: jdk_internal_reflect_ConstantPool_Tag;
static FLOAT: jdk_internal_reflect_ConstantPool_Tag;
static LONG: jdk_internal_reflect_ConstantPool_Tag;
static DOUBLE: jdk_internal_reflect_ConstantPool_Tag;
static CLASS: jdk_internal_reflect_ConstantPool_Tag;
static STRING: jdk_internal_reflect_ConstantPool_Tag;
static FIELDREF: jdk_internal_reflect_ConstantPool_Tag;
static METHODREF: jdk_internal_reflect_ConstantPool_Tag;
static INTERFACEMETHODREF: jdk_internal_reflect_ConstantPool_Tag;
static NAMEANDTYPE: jdk_internal_reflect_ConstantPool_Tag;
static METHODHANDLE: jdk_internal_reflect_ConstantPool_Tag;
static METHODTYPE: jdk_internal_reflect_ConstantPool_Tag;
static INVOKEDYNAMIC: jdk_internal_reflect_ConstantPool_Tag;
static INVALID: jdk_internal_reflect_ConstantPool_Tag;
tagCode: number;
static $VALUES: jdk_internal_reflect_ConstantPool_Tag[];
class: java_lang_Class<java_lang_Object>;
static values(): jdk_internal_reflect_ConstantPool_Tag[];
static valueOf(arg0: string): jdk_internal_reflect_ConstantPool_Tag;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'jdk.internal.misc' {
import { PrivilegedAction as java_security_PrivilegedAction, AccessControlContext as java_security_AccessControlContext, ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';
import { ProtectionDomainCache as jdk_internal_misc_JavaSecurityAccess_ProtectionDomainCache } from 'jdk.internal.misc.JavaSecurityAccess';

  export class JavaSecurityAccess {
protectDomains: java_security_ProtectionDomain[];
protectionDomainCache: jdk_internal_misc_JavaSecurityAccess_ProtectionDomainCache;
doIntersectionPrivilege<T extends java_lang_Object>(arg0: java_security_PrivilegedAction<T>, arg1: java_security_AccessControlContext, arg2: java_security_AccessControlContext): T;
doIntersectionPrivilege<T extends java_lang_Object>(arg0: java_security_PrivilegedAction<T>, arg1: java_security_AccessControlContext): T;
getProtectDomains(arg0: java_security_AccessControlContext): java_security_ProtectionDomain[];
getProtectionDomainCache(): jdk_internal_misc_JavaSecurityAccess_ProtectionDomainCache;

  }
}//@ts-nocheck

declare module 'jdk.internal.misc.JavaSecurityAccess' {
import { ProtectionDomain as java_security_ProtectionDomain, PermissionCollection as java_security_PermissionCollection } from 'java.security';

  export class ProtectionDomainCache {

get(arg0: java_security_ProtectionDomain): java_security_PermissionCollection;
put(arg0: java_security_ProtectionDomain, arg1: java_security_PermissionCollection): void;

  }
}//@ts-nocheck

declare module 'jdk.internal.misc' {
import { ZipFile as java_util_zip_ZipFile } from 'java.util.zip';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Function as java_util_function_Function } from 'java.util.function';
import { JarEntry as java_util_jar_JarEntry } from 'java.util.jar';
import { Enumeration as java_util_Enumeration } from 'java.util';

  export class JavaUtilZipFileAccess {
metaInfEntryNames: string[];
entry: java_util_jar_JarEntry;
startsWithLocHeader(arg0: java_util_zip_ZipFile): boolean;
entryNameStream(arg0: java_util_zip_ZipFile): java_util_stream_Stream<string>;
getMetaInfEntryNames(arg0: java_util_zip_ZipFile): string[];
stream(arg0: java_util_zip_ZipFile, arg1: java_util_function_Function<string, java_util_jar_JarEntry>): java_util_stream_Stream<java_util_jar_JarEntry>;
entries(arg0: java_util_zip_ZipFile, arg1: java_util_function_Function<string, java_util_jar_JarEntry>): java_util_Enumeration<java_util_jar_JarEntry>;
getEntry(arg0: java_util_zip_ZipFile, arg1: string, arg2: java_util_function_Function<string, java_util_jar_JarEntry>): java_util_jar_JarEntry;

  }
}//@ts-nocheck

declare module 'jdk.internal.loader' {
import { List as java_util_List, Enumeration as java_util_Enumeration, ArrayList as java_util_ArrayList, ArrayDeque as java_util_ArrayDeque, HashMap as java_util_HashMap } from 'java.util';
import { IOException as java_io_IOException } from 'java.io';
import { URL as java_net_URL, URLStreamHandlerFactory as java_net_URLStreamHandlerFactory, URLStreamHandler as java_net_URLStreamHandler } from 'java.net';
import { Resource as jdk_internal_loader_Resource } from 'jdk.internal.loader';
import { AccessControlContext as java_security_AccessControlContext } from 'java.security';
import { Loader as jdk_internal_loader_URLClassPath_Loader } from 'jdk.internal.loader.URLClassPath';
import { JavaNetURLAccess as jdk_internal_misc_JavaNetURLAccess } from 'jdk.internal.misc';
import { Object as java_lang_Object } from 'java.lang';

  export class URLClassPath extends java_lang_Object {
static USER_AGENT_JAVA_VERSION: string;
static JAVA_VERSION: string;
static DEBUG: boolean;
static DISABLE_JAR_CHECKING: boolean;
static DISABLE_ACC_CHECKING: boolean;
static DISABLE_CP_URL_CHECK: boolean;
static DEBUG_CP_URL_CHECK: boolean;
path: java_util_ArrayList<java_net_URL>;
unopenedUrls: java_util_ArrayDeque<java_net_URL>;
loaders: java_util_ArrayList<jdk_internal_loader_URLClassPath_Loader>;
lmap: java_util_HashMap<string, jdk_internal_loader_URLClassPath_Loader>;
jarHandler: java_net_URLStreamHandler;
closed: boolean;
acc: java_security_AccessControlContext;
static JNUA: jdk_internal_misc_JavaNetURLAccess;
uRLs: java_net_URL[];
resource: jdk_internal_loader_Resource;
resource: jdk_internal_loader_Resource;
resources: java_util_Enumeration<jdk_internal_loader_Resource>;
resources: java_util_Enumeration<jdk_internal_loader_Resource>;
closeLoaders(): java_util_List<java_io_IOException>;
addURL(arg0: java_net_URL): void;
getURLs(): java_net_URL[];
getResource(arg0: string): jdk_internal_loader_Resource;
getResource(arg0: string, arg1: boolean): jdk_internal_loader_Resource;
findResource(arg0: string, arg1: boolean): java_net_URL;
getResources(arg0: string, arg1: boolean): java_util_Enumeration<jdk_internal_loader_Resource>;
getResources(arg0: string): java_util_Enumeration<jdk_internal_loader_Resource>;
findResources(arg0: string, arg1: boolean): java_util_Enumeration<java_net_URL>;
static check(arg0: java_net_URL): void;
addFile(arg0: string): void;
static checkURL(arg0: java_net_URL): java_net_URL;
constructor(arg0: java_net_URL[], arg1: java_security_AccessControlContext);
constructor(arg0: java_net_URL[], arg1: java_net_URLStreamHandlerFactory, arg2: java_security_AccessControlContext);
  }
}//@ts-nocheck

declare module 'jdk.internal.loader' {
import { URL as java_net_URL } from 'java.net';
import { Certificate as java_security_cert_Certificate } from 'java.security.cert';
import { InputStream as java_io_InputStream } from 'java.io';
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Manifest as java_util_jar_Manifest } from 'java.util.jar';
import { CodeSigner as java_security_CodeSigner } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';

  export class Resource extends java_lang_Object {
cis: java_io_InputStream;
uRL: java_net_URL;
contentLength: number;
name: string;
bytes: number[];
certificates: java_security_cert_Certificate[];
inputStream: java_io_InputStream;
byteBuffer: java_nio_ByteBuffer;
codeSourceURL: java_net_URL;
manifest: java_util_jar_Manifest;
codeSigners: java_security_CodeSigner[];
getURL(): java_net_URL;
getContentLength(): number;
getName(): string;
getBytes(): number[];
getCertificates(): java_security_cert_Certificate[];
getInputStream(): java_io_InputStream;
getByteBuffer(): java_nio_ByteBuffer;
getCodeSourceURL(): java_net_URL;
getManifest(): java_util_jar_Manifest;
getCodeSigners(): java_security_CodeSigner[];
constructor();
  }
}//@ts-nocheck

declare module 'jdk.internal.loader.URLClassPath' {
import { URL as java_net_URL } from 'java.net';
import { JarFile as java_util_jar_JarFile } from 'java.util.jar';
import { Object as java_lang_Object } from 'java.lang';
import { Closeable as java_io_Closeable } from 'java.io';

  export class Loader extends java_lang_Object implements java_io_Closeable {
base: java_net_URL;
jarfile: java_util_jar_JarFile;
close(): void;

  }
}//@ts-nocheck

declare module 'jdk.internal.misc' {
import { URL as java_net_URL, URLStreamHandler as java_net_URLStreamHandler } from 'java.net';

  export class JavaNetURLAccess {
handler: java_net_URLStreamHandler;
getHandler(arg0: java_net_URL): java_net_URLStreamHandler;

  }
}