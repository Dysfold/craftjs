//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export type Object = {};
}

declare module 'java.lang' {
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object, Module as java_lang_Module, Package as java_lang_Package } from 'java.lang';
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { TypeVariable as java_lang_reflect_TypeVariable, Type as java_lang_reflect_Type, Method as java_lang_reflect_Method, Constructor as java_lang_reflect_Constructor, Field as java_lang_reflect_Field, AnnotatedType as java_lang_reflect_AnnotatedType, GenericDeclaration as java_lang_reflect_GenericDeclaration, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';
import { InputStream as java_io_InputStream, ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';
import { URL as java_net_URL } from 'java.net';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { SoftReference as java_lang_ref_SoftReference } from 'java.lang.ref';
import { ReflectionData as java_lang_Class_ReflectionData, AnnotationData as java_lang_Class_AnnotationData } from 'java.lang.Class';
import { ClassRepository as sun_reflect_generics_repository_ClassRepository } from 'sun.reflect.generics.repository';
import { ReflectionFactory as jdk_internal_reflect_ReflectionFactory } from 'jdk.internal.reflect';
import { Map as java_util_Map } from 'java.util';
import { AnnotationType as sun_reflect_annotation_AnnotationType } from 'sun.reflect.annotation';
import { ClassValueMap as java_lang_ClassValue_ClassValueMap } from 'java.lang.ClassValue';

  export class Class<T extends java_lang_Object> extends java_lang_Object implements java_io_Serializable, java_lang_reflect_GenericDeclaration, java_lang_reflect_Type, java_lang_reflect_AnnotatedElement {
static ANNOTATION: number;
static ENUM: number;
static SYNTHETIC: number;
cachedConstructor: java_lang_reflect_Constructor<T>;
newInstanceCallerCache: java_lang_Class<java_lang_Object>;
name: string;
module: java_lang_Module;
packageName: string;
componentType: java_lang_Class<java_lang_Object>;
static allPermDomain: java_security_ProtectionDomain;
reflectionData: java_lang_ref_SoftReference<java_lang_Class_ReflectionData<T>>;
classRedefinedCount: number;
genericInfo: sun_reflect_generics_repository_ClassRepository;
static EMPTY_CLASS_ARRAY: java_lang_Class<java_lang_Object>[];
static serialVersionUID: number;
static serialPersistentFields: java_io_ObjectStreamField[];
static reflectionFactory: jdk_internal_reflect_ReflectionFactory;
enumConstants: T[];
enumConstantDirectory: java_util_Map<string, T>;
annotationData: java_lang_Class_AnnotationData;
annotationType: sun_reflect_annotation_AnnotationType;
classValueMap: java_lang_ClassValue_ClassValueMap;
module: java_lang_Module;
protectionDomain: java_security_ProtectionDomain;
modifiers: number;
superclass: java_lang_Class<java_lang_Object>;
name: string;
classLoader: java_lang_ClassLoader;
typeParameters: java_lang_reflect_TypeVariable<java_lang_Class<T>>[];
genericSuperclass: java_lang_reflect_Type;
package: java_lang_Package;
packageName: string;
interfaces: java_lang_Class<java_lang_Object>[];
genericInterfaces: java_lang_reflect_Type[];
componentType: java_lang_Class<java_lang_Object>;
signers: java_lang_Object[];
enclosingMethod: java_lang_reflect_Method;
enclosingConstructor: java_lang_reflect_Constructor<java_lang_Object>;
declaringClass: java_lang_Class<java_lang_Object>;
enclosingClass: java_lang_Class<java_lang_Object>;
simpleName: string;
typeName: string;
canonicalName: string;
classes: java_lang_Class<java_lang_Object>[];
fields: java_lang_reflect_Field[];
methods: java_lang_reflect_Method[];
constructors: java_lang_reflect_Constructor<java_lang_Object>[];
field: java_lang_reflect_Field;
method: java_lang_reflect_Method;

declaredClasses: java_lang_Class<java_lang_Object>[];
declaredFields: java_lang_reflect_Field[];
declaredMethods: java_lang_reflect_Method[];
declaredConstructors: java_lang_reflect_Constructor<java_lang_Object>[];
declaredField: java_lang_reflect_Field;
declaredMethod: java_lang_reflect_Method;
declaredConstructor: java_lang_reflect_Constructor<T>;
resourceAsStream: java_io_InputStream;
resource: java_net_URL;
enumConstants: T[];
annotation: A;
annotationsByType: A[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: A;
declaredAnnotationsByType: A[];
declaredAnnotations: java_lang_annotation_Annotation[];
annotatedSuperclass: java_lang_reflect_AnnotatedType;
annotatedInterfaces: java_lang_reflect_AnnotatedType[];
nestHost: java_lang_Class<java_lang_Object>;
nestMembers: java_lang_Class<java_lang_Object>[];
static forName(arg0: string, arg1: boolean, arg2: java_lang_ClassLoader): java_lang_Class<java_lang_Object>;
static forName(arg0: java_lang_Module, arg1: string): java_lang_Class<java_lang_Object>;
static forName(arg0: string): java_lang_Class<java_lang_Object>;
toString(): string;
getModule(): java_lang_Module;
getProtectionDomain(): java_security_ProtectionDomain;
isAssignableFrom(arg0: java_lang_Class<java_lang_Object>): boolean;
isInstance(arg0: java_lang_Object): boolean;
getModifiers(): number;
isInterface(): boolean;
isArray(): boolean;
isPrimitive(): boolean;
getSuperclass(): java_lang_Class<java_lang_Object>;
cast(arg0: java_lang_Object): T;
getName(): string;
toGenericString(): string;
newInstance(): T;
isAnnotation(): boolean;
isSynthetic(): boolean;
getClassLoader(): java_lang_ClassLoader;
getTypeParameters(): java_lang_reflect_TypeVariable<java_lang_Class<T>>[];
getGenericSuperclass(): java_lang_reflect_Type;
getPackage(): java_lang_Package;
getPackageName(): string;
getInterfaces(): java_lang_Class<java_lang_Object>[];
getGenericInterfaces(): java_lang_reflect_Type[];
getComponentType(): java_lang_Class<java_lang_Object>;
getSigners(): java_lang_Object[];
getEnclosingMethod(): java_lang_reflect_Method;
getEnclosingConstructor(): java_lang_reflect_Constructor<java_lang_Object>;
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getEnclosingClass(): java_lang_Class<java_lang_Object>;
getSimpleName(): string;
getTypeName(): string;
getCanonicalName(): string;
isAnonymousClass(): boolean;
isLocalClass(): boolean;
isMemberClass(): boolean;
getClasses(): java_lang_Class<java_lang_Object>[];
getFields(): java_lang_reflect_Field[];
getMethods(): java_lang_reflect_Method[];
getConstructors(): java_lang_reflect_Constructor<java_lang_Object>[];
getField(arg0: string): java_lang_reflect_Field;
getMethod(arg0: string, ...arg1: java_lang_Class<java_lang_Object>[]): java_lang_reflect_Method;
getConstructor(...arg0: java_lang_Class<java_lang_Object>[]): java_lang_reflect_Constructor<T>;
getDeclaredClasses(): java_lang_Class<java_lang_Object>[];
getDeclaredFields(): java_lang_reflect_Field[];
getDeclaredMethods(): java_lang_reflect_Method[];
getDeclaredConstructors(): java_lang_reflect_Constructor<java_lang_Object>[];
getDeclaredField(arg0: string): java_lang_reflect_Field;
getDeclaredMethod(arg0: string, ...arg1: java_lang_Class<java_lang_Object>[]): java_lang_reflect_Method;
getDeclaredConstructor(...arg0: java_lang_Class<java_lang_Object>[]): java_lang_reflect_Constructor<T>;
getResourceAsStream(arg0: string): java_io_InputStream;
getResource(arg0: string): java_net_URL;
desiredAssertionStatus(): boolean;
isEnum(): boolean;
getEnumConstants(): T[];
asSubclass<U extends java_lang_Object>(arg0: java_lang_Class<U>): java_lang_Class<U>;
getAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getDeclaredAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
getAnnotatedSuperclass(): java_lang_reflect_AnnotatedType;
getAnnotatedInterfaces(): java_lang_reflect_AnnotatedType[];
getNestHost(): java_lang_Class<java_lang_Object>;
isNestmateOf(arg0: java_lang_Class<java_lang_Object>): boolean;
getNestMembers(): java_lang_Class<java_lang_Object>[];

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Class as java_lang_Class, Object as java_lang_Object, ClassLoader as java_lang_ClassLoader, Module as java_lang_Module, Package as java_lang_Package, NamedPackage as java_lang_NamedPackage, Boolean as java_lang_Boolean } from 'java.lang';
import { InputStream as java_io_InputStream } from 'java.io';
import { URL as java_net_URL } from 'java.net';
import { Enumeration as java_util_Enumeration, Map as java_util_Map, Vector as java_util_Vector, Set as java_util_Set } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';
import { Certificate as java_security_cert_Certificate } from 'java.security.cert';
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { NativeLibrary as java_lang_ClassLoader_NativeLibrary } from 'java.lang.ClassLoader';

  export class ClassLoader extends java_lang_Object {
parent: java_lang_ClassLoader;
name: string;
unnamedModule: java_lang_Module;
nameAndId: string;
parallelLockMap: java_util_concurrent_ConcurrentHashMap<string, java_lang_Object>;
package2certs: java_util_Map<string, java_security_cert_Certificate[]>;
static nocerts: java_security_cert_Certificate[];
classes: java_util_Vector<java_lang_Class<java_lang_Object>>;
defaultDomain: java_security_ProtectionDomain;
packages: java_util_concurrent_ConcurrentHashMap<string, java_lang_NamedPackage>;
static scl: java_lang_ClassLoader;
static usr_paths: string[];
static sys_paths: string[];
static loadedLibraryNames: java_util_Set<string>;
static systemNativeLibraries: java_util_Map<string, java_lang_ClassLoader_NativeLibrary>;
nativeLibraries: java_util_Map<string, java_lang_ClassLoader_NativeLibrary>;
assertionLock: java_lang_Object;
defaultAssertionStatus: boolean;
packageAssertionStatus: java_util_Map<string, java_lang_Boolean>;
classAssertionStatus: java_util_Map<string, java_lang_Boolean>;
classLoaderValueMap: java_util_concurrent_ConcurrentHashMap<java_lang_Object, java_lang_Object>;
static $assertionsDisabled: boolean;
static platformClassLoader: java_lang_ClassLoader;
static systemClassLoader: java_lang_ClassLoader;
name: string;
resourceAsStream: java_io_InputStream;
resource: java_net_URL;
static systemResourceAsStream: java_io_InputStream;
static systemResource: java_net_URL;
resources: java_util_Enumeration<java_net_URL>;
static systemResources: java_util_Enumeration<java_net_URL>;
parent: java_lang_ClassLoader;
unnamedModule: java_lang_Module;
definedPackage: java_lang_Package;
definedPackages: java_lang_Package[];
loadClass(arg0: string): java_lang_Class<java_lang_Object>;
static getPlatformClassLoader(): java_lang_ClassLoader;
static getSystemClassLoader(): java_lang_ClassLoader;
getName(): string;
getResourceAsStream(arg0: string): java_io_InputStream;
getResource(arg0: string): java_net_URL;
static getSystemResourceAsStream(arg0: string): java_io_InputStream;
static getSystemResource(arg0: string): java_net_URL;
getResources(arg0: string): java_util_Enumeration<java_net_URL>;
resources(arg0: string): java_util_stream_Stream<java_net_URL>;
isRegisteredAsParallelCapable(): boolean;
static getSystemResources(arg0: string): java_util_Enumeration<java_net_URL>;
getParent(): java_lang_ClassLoader;
getUnnamedModule(): java_lang_Module;
getDefinedPackage(arg0: string): java_lang_Package;
getDefinedPackages(): java_lang_Package[];
setDefaultAssertionStatus(arg0: boolean): void;
setPackageAssertionStatus(arg0: string, arg1: boolean): void;
setClassAssertionStatus(arg0: string, arg1: boolean): void;
clearAssertionStatus(): void;

  }
}//@ts-nocheck

declare module 'java.lang' {


  export class AutoCloseable {

close(): void;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object } from 'java.lang';

  export class Comparable<T extends java_lang_Object> {

compareTo(arg0: T): number;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Class as java_lang_Class, Enum as java_lang_Enum, Comparable as java_lang_Comparable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Enum<E extends java_lang_Enum<E>> extends java_lang_Object implements java_lang_Comparable<E>, java_io_Serializable {
name: string;
ordinal: number;
declaringClass: java_lang_Class<E>;
name(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: E): number;
static valueOf<T extends java_lang_Enum<T>>(arg0: java_lang_Class<T>, arg1: string): T;
getDeclaringClass(): java_lang_Class<E>;
ordinal(): number;

  }
}//@ts-nocheck

declare module 'java.lang' {


  export class Runnable {

run(): void;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream, Serializable as java_io_Serializable } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object } from 'java.lang';
import { List as java_util_List } from 'java.util';

  export class Throwable extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
backtrace: java_lang_Object;
detailMessage: string;
static UNASSIGNED_STACK: java_lang_StackTraceElement[];
cause: java_lang_Throwable;
stackTrace: java_lang_StackTraceElement[];
depth: number;
static SUPPRESSED_SENTINEL: java_util_List<java_lang_Throwable>;
suppressedExceptions: java_util_List<java_lang_Throwable>;
static NULL_CAUSE_MESSAGE: string;
static SELF_SUPPRESSION_MESSAGE: string;
static CAUSE_CAPTION: string;
static SUPPRESSED_CAPTION: string;
static EMPTY_THROWABLE_ARRAY: java_lang_Throwable[];
static $assertionsDisabled: boolean;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
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
constructor(arg0: java_lang_Throwable);
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string);
constructor();
  }
}//@ts-nocheck

declare module 'java.lang' {
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';
import { CharSequence as java_lang_CharSequence } from 'java.lang';

  export class CharSequence {

length(): number;
toString(): string;
codePoints(): java_util_stream_IntStream;
charAt(arg0: number): string;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
chars(): java_util_stream_IntStream;
static compare(arg0: java_lang_CharSequence, arg1: java_lang_CharSequence): number;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Double as java_lang_Double, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Double extends java_lang_Number implements java_lang_Comparable<java_lang_Double> {
static POSITIVE_INFINITY: number;
static NEGATIVE_INFINITY: number;
static NaN: number;
static MAX_VALUE: number;
static MIN_NORMAL: number;
static MIN_VALUE: number;
static MAX_EXPONENT: number;
static MIN_EXPONENT: number;
static SIZE: number;
static BYTES: number;
static TYPE: java_lang_Class<java_lang_Double>;
value: number;
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
static toString(arg0: number): string;
toString(): string;
hashCode(): number;
static hashCode(arg0: number): number;
static min(arg0: number, arg1: number): number;
static max(arg0: number, arg1: number): number;
static doubleToRawLongBits(arg0: number): number;
static doubleToLongBits(arg0: number): number;
static longBitsToDouble(arg0: number): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_Double): number;
byteValue(): number;
shortValue(): number;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
static valueOf(arg0: string): java_lang_Double;
static valueOf(arg0: number): java_lang_Double;
static toHexString(arg0: number): string;
static compare(arg0: number, arg1: number): number;
static isNaN(arg0: number): boolean;
isNaN(): boolean;
static isInfinite(arg0: number): boolean;
isInfinite(): boolean;
static isFinite(arg0: number): boolean;
static sum(arg0: number, arg1: number): number;
static parseDouble(arg0: string): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Number extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
byteValue(): number;
shortValue(): number;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
constructor();
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Long as java_lang_Long, CharSequence as java_lang_CharSequence, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Long extends java_lang_Number implements java_lang_Comparable<java_lang_Long> {
static MIN_VALUE: number;
static MAX_VALUE: number;
static TYPE: java_lang_Class<java_lang_Long>;
value: number;
static SIZE: number;
static BYTES: number;
static serialVersionUID: number;
static long: java_lang_Long;
static long: java_lang_Long;
static long: java_lang_Long;
class: java_lang_Class<java_lang_Object>;
static numberOfLeadingZeros(arg0: number): number;
static numberOfTrailingZeros(arg0: number): number;
static bitCount(arg0: number): number;
equals(arg0: java_lang_Object): boolean;
static toString(arg0: number): string;
static toString(arg0: number, arg1: number): string;
toString(): string;
static hashCode(arg0: number): number;
hashCode(): number;
static min(arg0: number, arg1: number): number;
static max(arg0: number, arg1: number): number;
static reverseBytes(arg0: number): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_Long): number;
static getLong(arg0: string): java_lang_Long;
static getLong(arg0: string, arg1: number): java_lang_Long;
static getLong(arg0: string, arg1: java_lang_Long): java_lang_Long;
byteValue(): number;
shortValue(): number;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
static valueOf(arg0: string, arg1: number): java_lang_Long;
static valueOf(arg0: string): java_lang_Long;
static valueOf(arg0: number): java_lang_Long;
static toHexString(arg0: number): string;
static decode(arg0: string): java_lang_Long;
static compare(arg0: number, arg1: number): number;
static parseLong(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
static parseLong(arg0: string): number;
static parseLong(arg0: string, arg1: number): number;
static reverse(arg0: number): number;
static sum(arg0: number, arg1: number): number;
static compareUnsigned(arg0: number, arg1: number): number;
static toUnsignedString(arg0: number, arg1: number): string;
static toUnsignedString(arg0: number): string;
static toOctalString(arg0: number): string;
static toBinaryString(arg0: number): string;
static divideUnsigned(arg0: number, arg1: number): number;
static remainderUnsigned(arg0: number, arg1: number): number;
static highestOneBit(arg0: number): number;
static lowestOneBit(arg0: number): number;
static rotateLeft(arg0: number, arg1: number): number;
static rotateRight(arg0: number, arg1: number): number;
static signum(arg0: number): number;
static parseUnsignedLong(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
static parseUnsignedLong(arg0: string, arg1: number): number;
static parseUnsignedLong(arg0: string): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string);
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Integer as java_lang_Integer, CharSequence as java_lang_CharSequence, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Integer extends java_lang_Number implements java_lang_Comparable<java_lang_Integer> {
static MIN_VALUE: number;
static MAX_VALUE: number;
static TYPE: java_lang_Class<java_lang_Integer>;
static digits: string[];
static DigitTens: number[];
static DigitOnes: number[];
static sizeTable: number[];
value: number;
static SIZE: number;
static BYTES: number;
static serialVersionUID: number;
static integer: java_lang_Integer;
static integer: java_lang_Integer;
static integer: java_lang_Integer;
class: java_lang_Class<java_lang_Object>;
static numberOfLeadingZeros(arg0: number): number;
static numberOfTrailingZeros(arg0: number): number;
static bitCount(arg0: number): number;
equals(arg0: java_lang_Object): boolean;
static toString(arg0: number): string;
static toString(arg0: number, arg1: number): string;
toString(): string;
static hashCode(arg0: number): number;
hashCode(): number;
static min(arg0: number, arg1: number): number;
static max(arg0: number, arg1: number): number;
static reverseBytes(arg0: number): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_Integer): number;
byteValue(): number;
shortValue(): number;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
static valueOf(arg0: number): java_lang_Integer;
static valueOf(arg0: string, arg1: number): java_lang_Integer;
static valueOf(arg0: string): java_lang_Integer;
static toHexString(arg0: number): string;
static decode(arg0: string): java_lang_Integer;
static compare(arg0: number, arg1: number): number;
static reverse(arg0: number): number;
static toUnsignedLong(arg0: number): number;
static parseInt(arg0: string): number;
static parseInt(arg0: string, arg1: number): number;
static parseInt(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
static sum(arg0: number, arg1: number): number;
static compareUnsigned(arg0: number, arg1: number): number;
static toUnsignedString(arg0: number, arg1: number): string;
static toUnsignedString(arg0: number): string;
static toOctalString(arg0: number): string;
static toBinaryString(arg0: number): string;
static parseUnsignedInt(arg0: string, arg1: number): number;
static parseUnsignedInt(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
static parseUnsignedInt(arg0: string): number;
static getInteger(arg0: string, arg1: java_lang_Integer): java_lang_Integer;
static getInteger(arg0: string, arg1: number): java_lang_Integer;
static getInteger(arg0: string): java_lang_Integer;
static divideUnsigned(arg0: number, arg1: number): number;
static remainderUnsigned(arg0: number, arg1: number): number;
static highestOneBit(arg0: number): number;
static lowestOneBit(arg0: number): number;
static rotateLeft(arg0: number, arg1: number): number;
static rotateRight(arg0: number, arg1: number): number;
static signum(arg0: number): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string);
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable } from 'java.lang';

  export class Appendable {

append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: string): java_lang_Appendable;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Iterable<T extends java_lang_Object> {

iterator(): java_util_Iterator<T>;
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Character as java_lang_Character, CharSequence as java_lang_CharSequence, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Character extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_lang_Character> {
static MIN_RADIX: number;
static MAX_RADIX: number;
static MIN_VALUE: string;
static MAX_VALUE: string;
static TYPE: java_lang_Class<java_lang_Character>;
static UNASSIGNED: number;
static UPPERCASE_LETTER: number;
static LOWERCASE_LETTER: number;
static TITLECASE_LETTER: number;
static MODIFIER_LETTER: number;
static OTHER_LETTER: number;
static NON_SPACING_MARK: number;
static ENCLOSING_MARK: number;
static COMBINING_SPACING_MARK: number;
static DECIMAL_DIGIT_NUMBER: number;
static LETTER_NUMBER: number;
static OTHER_NUMBER: number;
static SPACE_SEPARATOR: number;
static LINE_SEPARATOR: number;
static PARAGRAPH_SEPARATOR: number;
static CONTROL: number;
static FORMAT: number;
static PRIVATE_USE: number;
static SURROGATE: number;
static DASH_PUNCTUATION: number;
static START_PUNCTUATION: number;
static END_PUNCTUATION: number;
static CONNECTOR_PUNCTUATION: number;
static OTHER_PUNCTUATION: number;
static MATH_SYMBOL: number;
static CURRENCY_SYMBOL: number;
static MODIFIER_SYMBOL: number;
static OTHER_SYMBOL: number;
static INITIAL_QUOTE_PUNCTUATION: number;
static FINAL_QUOTE_PUNCTUATION: number;
static ERROR: number;
static DIRECTIONALITY_UNDEFINED: number;
static DIRECTIONALITY_LEFT_TO_RIGHT: number;
static DIRECTIONALITY_RIGHT_TO_LEFT: number;
static DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC: number;
static DIRECTIONALITY_EUROPEAN_NUMBER: number;
static DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR: number;
static DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR: number;
static DIRECTIONALITY_ARABIC_NUMBER: number;
static DIRECTIONALITY_COMMON_NUMBER_SEPARATOR: number;
static DIRECTIONALITY_NONSPACING_MARK: number;
static DIRECTIONALITY_BOUNDARY_NEUTRAL: number;
static DIRECTIONALITY_PARAGRAPH_SEPARATOR: number;
static DIRECTIONALITY_SEGMENT_SEPARATOR: number;
static DIRECTIONALITY_WHITESPACE: number;
static DIRECTIONALITY_OTHER_NEUTRALS: number;
static DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING: number;
static DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE: number;
static DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING: number;
static DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE: number;
static DIRECTIONALITY_POP_DIRECTIONAL_FORMAT: number;
static DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE: number;
static DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE: number;
static DIRECTIONALITY_FIRST_STRONG_ISOLATE: number;
static DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE: number;
static MIN_HIGH_SURROGATE: string;
static MAX_HIGH_SURROGATE: string;
static MIN_LOW_SURROGATE: string;
static MAX_LOW_SURROGATE: string;
static MIN_SURROGATE: string;
static MAX_SURROGATE: string;
static MIN_SUPPLEMENTARY_CODE_POINT: number;
static MIN_CODE_POINT: number;
static MAX_CODE_POINT: number;
value: string;
static serialVersionUID: number;
static SIZE: number;
static BYTES: number;
static $assertionsDisabled: boolean;
static name: string;
static type: number;
static type: number;
static numericValue: number;
static numericValue: number;
static directionality: number;
static directionality: number;
static isJavaIdentifierStart(arg0: string): boolean;
static isJavaIdentifierStart(arg0: number): boolean;
static isJavaIdentifierPart(arg0: string): boolean;
static isJavaIdentifierPart(arg0: number): boolean;
equals(arg0: java_lang_Object): boolean;
static toString(arg0: number): string;
static toString(arg0: string): string;
toString(): string;
hashCode(): number;
static hashCode(arg0: string): number;
static reverseBytes(arg0: string): string;
compareTo(arg0: java_lang_Character): number;
compareTo(arg0: java_lang_Object): number;
static isDigit(arg0: number): boolean;
static isDigit(arg0: string): boolean;
static isLowerCase(arg0: number): boolean;
static isLowerCase(arg0: string): boolean;
static isUpperCase(arg0: string): boolean;
static isUpperCase(arg0: number): boolean;
static isWhitespace(arg0: number): boolean;
static isWhitespace(arg0: string): boolean;
charValue(): string;
static valueOf(arg0: string): java_lang_Character;
static getName(arg0: number): string;
static codePointAt(arg0: string[], arg1: number): number;
static codePointAt(arg0: java_lang_CharSequence, arg1: number): number;
static codePointAt(arg0: string[], arg1: number, arg2: number): number;
static codePointBefore(arg0: string[], arg1: number, arg2: number): number;
static codePointBefore(arg0: java_lang_CharSequence, arg1: number): number;
static codePointBefore(arg0: string[], arg1: number): number;
static codePointCount(arg0: string[], arg1: number, arg2: number): number;
static codePointCount(arg0: java_lang_CharSequence, arg1: number, arg2: number): number;
static offsetByCodePoints(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): number;
static offsetByCodePoints(arg0: java_lang_CharSequence, arg1: number, arg2: number): number;
static toLowerCase(arg0: number): number;
static toLowerCase(arg0: string): string;
static toUpperCase(arg0: number): number;
static toUpperCase(arg0: string): string;
static compare(arg0: string, arg1: string): number;
static toChars(arg0: number): string[];
static toChars(arg0: number, arg1: string[], arg2: number): number;
static isBmpCodePoint(arg0: number): boolean;
static isSupplementaryCodePoint(arg0: number): boolean;
static getType(arg0: number): number;
static getType(arg0: string): number;
static isLetter(arg0: number): boolean;
static isLetter(arg0: string): boolean;
static isLetterOrDigit(arg0: string): boolean;
static isLetterOrDigit(arg0: number): boolean;
static isValidCodePoint(arg0: number): boolean;
static isHighSurrogate(arg0: string): boolean;
static isLowSurrogate(arg0: string): boolean;
static isSurrogate(arg0: string): boolean;
static isSurrogatePair(arg0: string, arg1: string): boolean;
static charCount(arg0: number): number;
static toCodePoint(arg0: string, arg1: string): number;
static highSurrogate(arg0: number): string;
static lowSurrogate(arg0: number): string;
static isTitleCase(arg0: number): boolean;
static isTitleCase(arg0: string): boolean;
static isDefined(arg0: string): boolean;
static isDefined(arg0: number): boolean;
static isJavaLetter(arg0: string): boolean;
static isJavaLetterOrDigit(arg0: string): boolean;
static isAlphabetic(arg0: number): boolean;
static isIdeographic(arg0: number): boolean;
static isUnicodeIdentifierStart(arg0: string): boolean;
static isUnicodeIdentifierStart(arg0: number): boolean;
static isUnicodeIdentifierPart(arg0: string): boolean;
static isUnicodeIdentifierPart(arg0: number): boolean;
static isIdentifierIgnorable(arg0: number): boolean;
static isIdentifierIgnorable(arg0: string): boolean;
static toTitleCase(arg0: number): number;
static toTitleCase(arg0: string): string;
static digit(arg0: number, arg1: number): number;
static digit(arg0: string, arg1: number): number;
static getNumericValue(arg0: number): number;
static getNumericValue(arg0: string): number;
static isSpace(arg0: string): boolean;
static isSpaceChar(arg0: number): boolean;
static isSpaceChar(arg0: string): boolean;
static isISOControl(arg0: number): boolean;
static isISOControl(arg0: string): boolean;
static forDigit(arg0: number, arg1: number): string;
static getDirectionality(arg0: number): number;
static getDirectionality(arg0: string): number;
static isMirrored(arg0: number): boolean;
static isMirrored(arg0: string): boolean;
static codePointOf(arg0: string): number;
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.lang.ref' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ReferenceQueue as java_lang_ref_ReferenceQueue, Reference as java_lang_ref_Reference } from 'java.lang.ref';

  export class SoftReference<T extends java_lang_Object> extends java_lang_ref_Reference<T> {
static clock: number;
timestamp: number;
class: java_lang_Class<java_lang_Object>;
get(): T;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: T);
constructor(arg0: T, arg1: java_lang_ref_ReferenceQueue<java_lang_Object>);
  }
}//@ts-nocheck

declare module 'java.lang.ref' {
import { Reference as java_lang_ref_Reference, ReferenceQueue as java_lang_ref_ReferenceQueue } from 'java.lang.ref';
import { Object as java_lang_Object } from 'java.lang';
import { Lock as java_lang_ref_ReferenceQueue_Lock } from 'java.lang.ref.ReferenceQueue';

  export class ReferenceQueue<T extends java_lang_Object> extends java_lang_Object {
static NULL: java_lang_ref_ReferenceQueue<java_lang_Object>;
static ENQUEUED: java_lang_ref_ReferenceQueue<java_lang_Object>;
lock: java_lang_ref_ReferenceQueue_Lock;
head: java_lang_ref_Reference<T>;
queueLength: number;
static $assertionsDisabled: boolean;
remove(arg0: number): java_lang_ref_Reference<T>;
remove(): java_lang_ref_Reference<T>;
poll(): java_lang_ref_Reference<T>;
constructor();
  }
}//@ts-nocheck

declare module 'java.lang.ref' {
import { Object as java_lang_Object } from 'java.lang';
import { ReferenceQueue as java_lang_ref_ReferenceQueue, Reference as java_lang_ref_Reference } from 'java.lang.ref';

  export class Reference<T extends java_lang_Object> extends java_lang_Object {
referent: T;
queue: java_lang_ref_ReferenceQueue<java_lang_Object>;
next: java_lang_ref_Reference;
discovered: java_lang_ref_Reference<T>;
static processPendingLock: java_lang_Object;
static processPendingActive: boolean;
get(): T;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
static reachabilityFence(arg0: java_lang_Object): void;

  }
}//@ts-nocheck

declare module 'java.lang.ref.ReferenceQueue' {
import { Object as java_lang_Object } from 'java.lang';

  export class Lock extends java_lang_Object {



  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, Field as java_lang_reflect_Field, AccessibleObject as java_lang_reflect_AccessibleObject, Member as java_lang_reflect_Member } from 'java.lang.reflect';
import { FieldRepository as sun_reflect_generics_repository_FieldRepository } from 'sun.reflect.generics.repository';
import { FieldAccessor as jdk_internal_reflect_FieldAccessor } from 'jdk.internal.reflect';
import { Map as java_util_Map } from 'java.util';

  export class Field extends java_lang_reflect_AccessibleObject implements java_lang_reflect_Member {
clazz: java_lang_Class<java_lang_Object>;
slot: number;
name: string;
type: java_lang_Class<java_lang_Object>;
modifiers: number;
signature: string;
genericInfo: sun_reflect_generics_repository_FieldRepository;
annotations: number[];
fieldAccessor: jdk_internal_reflect_FieldAccessor;
overrideFieldAccessor: jdk_internal_reflect_FieldAccessor;
root: java_lang_reflect_Field;
declaredAnnotations: java_util_Map<java_lang_Class<java_lang_annotation_Annotation>, java_lang_annotation_Annotation>;
modifiers: number;
boolean: boolean;
byte: number;
short: number;
char: string;
int: number;
long: number;
float: number;
double: number;
name: string;
declaringClass: java_lang_Class<java_lang_Object>;
annotation: T;
annotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
type: java_lang_Class<java_lang_Object>;
genericType: java_lang_reflect_Type;
annotatedType: java_lang_reflect_AnnotatedType;
class: java_lang_Class<java_lang_Object>;
get(arg0: java_lang_Object): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
getBoolean(arg0: java_lang_Object): boolean;
getByte(arg0: java_lang_Object): number;
getShort(arg0: java_lang_Object): number;
getChar(arg0: java_lang_Object): string;
getInt(arg0: java_lang_Object): number;
getLong(arg0: java_lang_Object): number;
getFloat(arg0: java_lang_Object): number;
getDouble(arg0: java_lang_Object): number;
getName(): string;
toGenericString(): string;
isSynthetic(): boolean;
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
set(arg0: java_lang_Object, arg1: java_lang_Object): void;
setAccessible(arg0: boolean): void;
isEnumConstant(): boolean;
getType(): java_lang_Class<java_lang_Object>;
getGenericType(): java_lang_reflect_Type;
setBoolean(arg0: java_lang_Object, arg1: boolean): void;
setByte(arg0: java_lang_Object, arg1: number): void;
setChar(arg0: java_lang_Object, arg1: string): void;
setShort(arg0: java_lang_Object, arg1: number): void;
setInt(arg0: java_lang_Object, arg1: number): void;
setLong(arg0: java_lang_Object, arg1: number): void;
setFloat(arg0: java_lang_Object, arg1: number): void;
setDouble(arg0: java_lang_Object, arg1: number): void;
getAnnotatedType(): java_lang_reflect_AnnotatedType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.annotation' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Annotation {

equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
annotationType(): java_lang_Class<java_lang_annotation_Annotation>;

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {


  export class Type {
typeName: string;
getTypeName(): string;

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';
import { Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class AnnotatedType implements java_lang_reflect_AnnotatedElement {
type: java_lang_reflect_Type;
annotatedOwnerType: java_lang_reflect_AnnotatedType;
annotation: T;
annotationsByType: T[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
getType(): java_lang_reflect_Type;
getAnnotatedOwnerType(): java_lang_reflect_AnnotatedType;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class AnnotatedElement {
annotation: T;
annotationsByType: T[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { AnnotatedType as java_lang_reflect_AnnotatedType, Type as java_lang_reflect_Type, AnnotatedElement as java_lang_reflect_AnnotatedElement, GenericDeclaration as java_lang_reflect_GenericDeclaration } from 'java.lang.reflect';
import { Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class TypeVariable<D extends java_lang_reflect_GenericDeclaration> implements java_lang_reflect_Type, java_lang_reflect_AnnotatedElement {
name: string;
genericDeclaration: D;
annotatedBounds: java_lang_reflect_AnnotatedType[];
bounds: java_lang_reflect_Type[];
typeName: string;
annotation: T;
annotationsByType: T[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
getName(): string;
getGenericDeclaration(): D;
getAnnotatedBounds(): java_lang_reflect_AnnotatedType[];
getBounds(): java_lang_reflect_Type[];
getTypeName(): string;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { TypeVariable as java_lang_reflect_TypeVariable, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class GenericDeclaration implements java_lang_reflect_AnnotatedElement {
typeParameters: java_lang_reflect_TypeVariable<java_lang_Object>[];
annotation: T;
annotationsByType: T[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
getTypeParameters(): java_lang_reflect_TypeVariable<java_lang_Object>[];
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Type as java_lang_reflect_Type } from 'java.lang.reflect';

  export class WildcardType implements java_lang_reflect_Type {
upperBounds: java_lang_reflect_Type[];
lowerBounds: java_lang_reflect_Type[];
typeName: string;
getUpperBounds(): java_lang_reflect_Type[];
getLowerBounds(): java_lang_reflect_Type[];
getTypeName(): string;

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Type as java_lang_reflect_Type } from 'java.lang.reflect';

  export class ParameterizedType implements java_lang_reflect_Type {
rawType: java_lang_reflect_Type;
actualTypeArguments: java_lang_reflect_Type[];
ownerType: java_lang_reflect_Type;
typeName: string;
getRawType(): java_lang_reflect_Type;
getActualTypeArguments(): java_lang_reflect_Type[];
getOwnerType(): java_lang_reflect_Type;
getTypeName(): string;

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { AccessibleObject as java_lang_reflect_AccessibleObject, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';
import { ReflectionFactory as jdk_internal_reflect_ReflectionFactory } from 'jdk.internal.reflect';

  export class AccessibleObject extends java_lang_Object implements java_lang_reflect_AnnotatedElement {
override: boolean;
static reflectionFactory: jdk_internal_reflect_ReflectionFactory;
securityCheckCache: java_lang_Object;
static printStackWhenAccessFails: boolean;
static printStackPropertiesSet: boolean;
annotation: T;
annotationsByType: T[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
static setAccessible(arg0: java_lang_reflect_AccessibleObject[], arg1: boolean): void;
setAccessible(arg0: boolean): void;
trySetAccessible(): boolean;
isAccessible(): boolean;
canAccess(arg0: java_lang_Object): boolean;

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { TypeVariable as java_lang_reflect_TypeVariable, Constructor as java_lang_reflect_Constructor, Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AccessibleObject as java_lang_reflect_AccessibleObject, Executable as java_lang_reflect_Executable } from 'java.lang.reflect';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { ConstructorRepository as sun_reflect_generics_repository_ConstructorRepository } from 'sun.reflect.generics.repository';
import { ConstructorAccessor as jdk_internal_reflect_ConstructorAccessor } from 'jdk.internal.reflect';

  export class Constructor<T extends java_lang_Object> extends java_lang_reflect_Executable {
clazz: java_lang_Class<T>;
slot: number;
parameterTypes: java_lang_Class<java_lang_Object>[];
exceptionTypes: java_lang_Class<java_lang_Object>[];
modifiers: number;
signature: string;
genericInfo: sun_reflect_generics_repository_ConstructorRepository;
annotations: number[];
parameterAnnotations: number[];
constructorAccessor: jdk_internal_reflect_ConstructorAccessor;
root: java_lang_reflect_Constructor<T>;
modifiers: number;
name: string;
typeParameters: java_lang_reflect_TypeVariable<java_lang_reflect_Constructor<T>>[];
declaringClass: java_lang_Class<T>;
annotation: T;
declaredAnnotations: java_lang_annotation_Annotation[];
parameterTypes: java_lang_Class<java_lang_Object>[];
parameterCount: number;
parameterAnnotations: Annotation[][];
genericParameterTypes: java_lang_reflect_Type[];
exceptionTypes: java_lang_Class<java_lang_Object>[];
genericExceptionTypes: java_lang_reflect_Type[];
annotatedReturnType: java_lang_reflect_AnnotatedType;
annotatedReceiverType: java_lang_reflect_AnnotatedType;
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
getName(): string;
toGenericString(): string;
newInstance(...arg0: java_lang_Object[]): T;
isSynthetic(): boolean;
getTypeParameters(): java_lang_reflect_TypeVariable<java_lang_reflect_Constructor<T>>[];
getDeclaringClass(): java_lang_Class<T>;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
getParameterTypes(): java_lang_Class<java_lang_Object>[];
setAccessible(arg0: boolean): void;
isVarArgs(): boolean;
getParameterCount(): number;
getParameterAnnotations(): Annotation[][];
getGenericParameterTypes(): java_lang_reflect_Type[];
getExceptionTypes(): java_lang_Class<java_lang_Object>[];
getGenericExceptionTypes(): java_lang_reflect_Type[];
getAnnotatedReturnType(): java_lang_reflect_AnnotatedType;
getAnnotatedReceiverType(): java_lang_reflect_AnnotatedType;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
static setAccessible(arg0: java_lang_reflect_AccessibleObject[], arg1: boolean): void;
trySetAccessible(): boolean;
isAccessible(): boolean;
canAccess(arg0: java_lang_Object): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { TypeVariable as java_lang_reflect_TypeVariable, AnnotatedType as java_lang_reflect_AnnotatedType, Type as java_lang_reflect_Type, Parameter as java_lang_reflect_Parameter, AccessibleObject as java_lang_reflect_AccessibleObject, Member as java_lang_reflect_Member, GenericDeclaration as java_lang_reflect_GenericDeclaration } from 'java.lang.reflect';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { Map as java_util_Map } from 'java.util';

  export class Executable extends java_lang_reflect_AccessibleObject implements java_lang_reflect_Member, java_lang_reflect_GenericDeclaration {
hasRealParameterData: boolean;
parameters: java_lang_reflect_Parameter[];
declaredAnnotations: java_util_Map<java_lang_Class<java_lang_annotation_Annotation>, java_lang_annotation_Annotation>;
modifiers: number;
name: string;
typeParameters: java_lang_reflect_TypeVariable<java_lang_Object>[];
declaringClass: java_lang_Class<java_lang_Object>;
annotation: T;
annotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
parameterTypes: java_lang_Class<java_lang_Object>[];
annotatedParameterTypes: java_lang_reflect_AnnotatedType[];
parameterCount: number;
parameterAnnotations: Annotation[][];
genericParameterTypes: java_lang_reflect_Type[];
exceptionTypes: java_lang_Class<java_lang_Object>[];
genericExceptionTypes: java_lang_reflect_Type[];
annotatedReturnType: java_lang_reflect_AnnotatedType;
parameters: java_lang_reflect_Parameter[];
annotatedReceiverType: java_lang_reflect_AnnotatedType;
annotatedExceptionTypes: java_lang_reflect_AnnotatedType[];
class: java_lang_Class<java_lang_Object>;
getModifiers(): number;
getName(): string;
toGenericString(): string;
isSynthetic(): boolean;
getTypeParameters(): java_lang_reflect_TypeVariable<java_lang_Object>[];
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
getParameterTypes(): java_lang_Class<java_lang_Object>[];
isVarArgs(): boolean;
getAnnotatedParameterTypes(): java_lang_reflect_AnnotatedType[];
getParameterCount(): number;
getParameterAnnotations(): Annotation[][];
getGenericParameterTypes(): java_lang_reflect_Type[];
getExceptionTypes(): java_lang_Class<java_lang_Object>[];
getGenericExceptionTypes(): java_lang_reflect_Type[];
getAnnotatedReturnType(): java_lang_reflect_AnnotatedType;
getParameters(): java_lang_reflect_Parameter[];
getAnnotatedReceiverType(): java_lang_reflect_AnnotatedType;
getAnnotatedExceptionTypes(): java_lang_reflect_AnnotatedType[];
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

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { AnnotatedType as java_lang_reflect_AnnotatedType, Executable as java_lang_reflect_Executable, Type as java_lang_reflect_Type, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';
import { Map as java_util_Map } from 'java.util';

  export class Parameter extends java_lang_Object implements java_lang_reflect_AnnotatedElement {
name: string;
modifiers: number;
executable: java_lang_reflect_Executable;
index: number;
parameterTypeCache: java_lang_reflect_Type;
parameterClassCache: java_lang_Class<java_lang_Object>;
declaredAnnotations: java_util_Map<java_lang_Class<java_lang_annotation_Annotation>, java_lang_annotation_Annotation>;
modifiers: number;
name: string;
annotation: T;
annotationsByType: T[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
type: java_lang_Class<java_lang_Object>;
annotatedType: java_lang_reflect_AnnotatedType;
declaringExecutable: java_lang_reflect_Executable;
parameterizedType: java_lang_reflect_Type;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
getName(): string;
isSynthetic(): boolean;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
getType(): java_lang_Class<java_lang_Object>;
getAnnotatedType(): java_lang_reflect_AnnotatedType;
isNamePresent(): boolean;
getDeclaringExecutable(): java_lang_reflect_Executable;
getParameterizedType(): java_lang_reflect_Type;
isImplicit(): boolean;
isVarArgs(): boolean;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class Member {
static PUBLIC: number;
static DECLARED: number;
modifiers: number;
name: string;
declaringClass: java_lang_Class<java_lang_Object>;
getModifiers(): number;
getName(): string;
isSynthetic(): boolean;
getDeclaringClass(): java_lang_Class<java_lang_Object>;

  }
}//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { TypeVariable as java_lang_reflect_TypeVariable, Method as java_lang_reflect_Method, Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AccessibleObject as java_lang_reflect_AccessibleObject, Executable as java_lang_reflect_Executable } from 'java.lang.reflect';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { MethodRepository as sun_reflect_generics_repository_MethodRepository } from 'sun.reflect.generics.repository';
import { MethodAccessor as jdk_internal_reflect_MethodAccessor } from 'jdk.internal.reflect';

  export class Method extends java_lang_reflect_Executable {
clazz: java_lang_Class<java_lang_Object>;
slot: number;
name: string;
returnType: java_lang_Class<java_lang_Object>;
parameterTypes: java_lang_Class<java_lang_Object>[];
exceptionTypes: java_lang_Class<java_lang_Object>[];
modifiers: number;
signature: string;
genericInfo: sun_reflect_generics_repository_MethodRepository;
annotations: number[];
parameterAnnotations: number[];
annotationDefault: number[];
methodAccessor: jdk_internal_reflect_MethodAccessor;
root: java_lang_reflect_Method;
modifiers: number;
name: string;
typeParameters: java_lang_reflect_TypeVariable<java_lang_reflect_Method>[];
declaringClass: java_lang_Class<java_lang_Object>;
annotation: T;
declaredAnnotations: java_lang_annotation_Annotation[];
returnType: java_lang_Class<java_lang_Object>;
parameterTypes: java_lang_Class<java_lang_Object>[];
parameterCount: number;
parameterAnnotations: Annotation[][];
genericReturnType: java_lang_reflect_Type;
genericParameterTypes: java_lang_reflect_Type[];
exceptionTypes: java_lang_Class<java_lang_Object>[];
genericExceptionTypes: java_lang_reflect_Type[];
defaultValue: java_lang_Object;
annotatedReturnType: java_lang_reflect_AnnotatedType;
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
class: java_lang_Class<java_lang_Object>;
invoke(arg0: java_lang_Object, ...arg1: java_lang_Object[]): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
getName(): string;
toGenericString(): string;
isSynthetic(): boolean;
getTypeParameters(): java_lang_reflect_TypeVariable<java_lang_reflect_Method>[];
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
getReturnType(): java_lang_Class<java_lang_Object>;
getParameterTypes(): java_lang_Class<java_lang_Object>[];
setAccessible(arg0: boolean): void;
isVarArgs(): boolean;
getParameterCount(): number;
getParameterAnnotations(): Annotation[][];
getGenericReturnType(): java_lang_reflect_Type;
getGenericParameterTypes(): java_lang_reflect_Type[];
getExceptionTypes(): java_lang_Class<java_lang_Object>[];
getGenericExceptionTypes(): java_lang_reflect_Type[];
isBridge(): boolean;
isDefault(): boolean;
getDefaultValue(): java_lang_Object;
getAnnotatedReturnType(): java_lang_reflect_AnnotatedType;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
static setAccessible(arg0: java_lang_reflect_AccessibleObject[], arg1: boolean): void;
trySetAccessible(): boolean;
isAccessible(): boolean;
canAccess(arg0: java_lang_Object): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.invoke' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MethodType as java_lang_invoke_MethodType, MethodHandle as java_lang_invoke_MethodHandle, LambdaForm as java_lang_invoke_LambdaForm } from 'java.lang.invoke';
import { List as java_util_List } from 'java.util';

  export class MethodHandle extends java_lang_Object {
type: java_lang_invoke_MethodType;
form: java_lang_invoke_LambdaForm;
asTypeCache: java_lang_invoke_MethodHandle;
customizationCount: number;
static FORM_OFFSET: number;
static $assertionsDisabled: boolean;
invoke(...arg0: java_lang_Object[]): java_lang_Object;
invokeExact(...arg0: java_lang_Object[]): java_lang_Object;
type(): java_lang_invoke_MethodType;
toString(): string;
invokeWithArguments(...arg0: java_lang_Object[]): java_lang_Object;
invokeWithArguments(arg0: java_util_List<java_lang_Object>): java_lang_Object;
asType(arg0: java_lang_invoke_MethodType): java_lang_invoke_MethodHandle;
asSpreader(arg0: java_lang_Class<java_lang_Object>, arg1: number): java_lang_invoke_MethodHandle;
asSpreader(arg0: number, arg1: java_lang_Class<java_lang_Object>, arg2: number): java_lang_invoke_MethodHandle;
withVarargs(arg0: boolean): java_lang_invoke_MethodHandle;
asCollector(arg0: java_lang_Class<java_lang_Object>, arg1: number): java_lang_invoke_MethodHandle;
asCollector(arg0: number, arg1: java_lang_Class<java_lang_Object>, arg2: number): java_lang_invoke_MethodHandle;
asVarargsCollector(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodHandle;
isVarargsCollector(): boolean;
asFixedArity(): java_lang_invoke_MethodHandle;
bindTo(arg0: java_lang_Object): java_lang_invoke_MethodHandle;

  }
}//@ts-nocheck

declare module 'java.lang.invoke' {
import { Class as java_lang_Class, Object as java_lang_Object, ClassLoader as java_lang_ClassLoader } from 'java.lang';
import { MethodType as java_lang_invoke_MethodType, MethodTypeForm as java_lang_invoke_MethodTypeForm, Invokers as java_lang_invoke_Invokers } from 'java.lang.invoke';
import { List as java_util_List } from 'java.util';
import { ConcurrentWeakInternSet as java_lang_invoke_MethodType_ConcurrentWeakInternSet } from 'java.lang.invoke.MethodType';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';

  export class MethodType extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
rtype: java_lang_Class<java_lang_Object>;
ptypes: java_lang_Class<java_lang_Object>[];
form: java_lang_invoke_MethodTypeForm;
wrapAlt: java_lang_Object;
invokers: java_lang_invoke_Invokers;
methodDescriptor: string;
static MAX_JVM_ARITY: number;
static MAX_MH_ARITY: number;
static MAX_MH_INVOKER_ARITY: number;
static internTable: java_lang_invoke_MethodType_ConcurrentWeakInternSet<java_lang_invoke_MethodType>;
static NO_PTYPES: java_lang_Class<java_lang_Object>[];
static objectOnlyTypes: java_lang_invoke_MethodType[];
static METHOD_HANDLE_ARRAY: java_lang_Class<java_lang_Object>[];
static serialPersistentFields: java_io_ObjectStreamField[];
static $assertionsDisabled: boolean;
returnType(): java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
parameterType(arg0: number): java_lang_Class<java_lang_Object>;
wrap(): java_lang_invoke_MethodType;
insertParameterTypes(arg0: number, arg1: java_util_List<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
insertParameterTypes(arg0: number, ...arg1: java_lang_Class<java_lang_Object>[]): java_lang_invoke_MethodType;
changeReturnType(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_Class<java_lang_Object>[]): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_Class<java_lang_Object>, ...arg2: java_lang_Class<java_lang_Object>[]): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_util_List<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_invoke_MethodType): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodType;
dropParameterTypes(arg0: number, arg1: number): java_lang_invoke_MethodType;
appendParameterTypes(arg0: java_util_List<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
appendParameterTypes(...arg0: java_lang_Class<java_lang_Object>[]): java_lang_invoke_MethodType;
parameterCount(): number;
static genericMethodType(arg0: number, arg1: boolean): java_lang_invoke_MethodType;
static genericMethodType(arg0: number): java_lang_invoke_MethodType;
lastParameterType(): java_lang_Class<java_lang_Object>;
parameterList(): java_util_List<java_lang_Class<java_lang_Object>>;
erase(): java_lang_invoke_MethodType;
toMethodDescriptorString(): string;
parameterArray(): java_lang_Class<java_lang_Object>[];
changeParameterType(arg0: number, arg1: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodType;
hasPrimitives(): boolean;
hasWrappers(): boolean;
generic(): java_lang_invoke_MethodType;
unwrap(): java_lang_invoke_MethodType;
static fromMethodDescriptorString(arg0: string, arg1: java_lang_ClassLoader): java_lang_invoke_MethodType;

  }
}//@ts-nocheck

declare module 'java.lang.invoke' {
import { MethodType as java_lang_invoke_MethodType, LambdaForm as java_lang_invoke_LambdaForm, MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { SoftReference as java_lang_ref_SoftReference } from 'java.lang.ref';
import { Object as java_lang_Object } from 'java.lang';

  export class MethodTypeForm extends java_lang_Object {
argToSlotTable: number[];
slotToArgTable: number[];
argCounts: number;
primCounts: number;
erasedType: java_lang_invoke_MethodType;
basicType: java_lang_invoke_MethodType;
methodHandles: java_lang_ref_SoftReference<java_lang_invoke_MethodHandle>[];
static MH_BASIC_INV: number;
static MH_NF_INV: number;
static MH_UNINIT_CS: number;
static MH_LIMIT: number;
lambdaForms: java_lang_ref_SoftReference<java_lang_invoke_LambdaForm>[];
static LF_INVVIRTUAL: number;
static LF_INVSTATIC: number;
static LF_INVSPECIAL: number;
static LF_NEWINVSPECIAL: number;
static LF_INVINTERFACE: number;
static LF_INVSTATIC_INIT: number;
static LF_INTERPRET: number;
static LF_REBIND: number;
static LF_DELEGATE: number;
static LF_DELEGATE_BLOCK_INLINING: number;
static LF_EX_LINKER: number;
static LF_EX_INVOKER: number;
static LF_GEN_LINKER: number;
static LF_GEN_INVOKER: number;
static LF_CS_LINKER: number;
static LF_MH_LINKER: number;
static LF_GWC: number;
static LF_GWT: number;
static LF_TF: number;
static LF_LOOP: number;
static LF_INVSPECIAL_IFC: number;
static LF_LIMIT: number;
static NO_CHANGE: number;
static ERASE: number;
static WRAP: number;
static UNWRAP: number;
static INTS: number;
static LONGS: number;
static RAW_RETURN: number;
static $assertionsDisabled: boolean;
returnCount(): number;
longPrimitiveParameterCount(): number;
primitiveReturnCount(): number;
longPrimitiveReturnCount(): number;
hasNonVoidPrimitives(): boolean;
hasLongPrimitives(): boolean;
argSlotToParameter(arg0: number): number;
toString(): string;
basicType(): java_lang_invoke_MethodType;
cachedLambdaForm(arg0: number): java_lang_invoke_LambdaForm;
setCachedLambdaForm(arg0: number, arg1: java_lang_invoke_LambdaForm): java_lang_invoke_LambdaForm;
parameterCount(): number;
hasPrimitives(): boolean;
parameterSlotCount(): number;
returnSlotCount(): number;
erasedType(): java_lang_invoke_MethodType;
static canonicalize(arg0: java_lang_invoke_MethodType, arg1: number, arg2: number): java_lang_invoke_MethodType;
primitiveParameterCount(): number;
parameterToArgSlot(arg0: number): number;
cachedMethodHandle(arg0: number): java_lang_invoke_MethodHandle;
setCachedMethodHandle(arg0: number, arg1: java_lang_invoke_MethodHandle): java_lang_invoke_MethodHandle;

  }
}//@ts-nocheck

declare module 'java.lang.invoke' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { LambdaForm as java_lang_invoke_LambdaForm, MethodType as java_lang_invoke_MethodType, MethodHandle as java_lang_invoke_MethodHandle, MemberName as java_lang_invoke_MemberName } from 'java.lang.invoke';
import { Name as java_lang_invoke_LambdaForm_Name, Kind as java_lang_invoke_LambdaForm_Kind, NamedFunction as java_lang_invoke_LambdaForm_NamedFunction } from 'java.lang.invoke.LambdaForm';
import { PerfCounter as jdk_internal_perf_PerfCounter } from 'jdk.internal.perf';
import { Factory as java_lang_invoke_MemberName_Factory } from 'java.lang.invoke.MemberName';
import { HashMap as java_util_HashMap } from 'java.util';

  export class LambdaForm extends java_lang_Object {
arity: number;
result: number;
forceInline: boolean;
customized: java_lang_invoke_MethodHandle;
names: java_lang_invoke_LambdaForm_Name[];
kind: java_lang_invoke_LambdaForm_Kind;
vmentry: java_lang_invoke_MemberName;
isCompiled: boolean;
transformCache: java_lang_Object;
static VOID_RESULT: number;
static LAST_RESULT: number;
static LF_FAILED: jdk_internal_perf_PerfCounter;
static COMPILE_THRESHOLD: number;
invocationCounter: number;
static INTERNED_ARGUMENT_LIMIT: number;
static INTERNED_ARGUMENTS: Name[][];
static IMPL_NAMES: java_lang_invoke_MemberName_Factory;
static LF_identity: java_lang_invoke_LambdaForm[];
static LF_zero: java_lang_invoke_LambdaForm[];
static NF_identity: java_lang_invoke_LambdaForm_NamedFunction[];
static NF_zero: java_lang_invoke_LambdaForm_NamedFunction[];
static createFormsLock: java_lang_Object;
static DEBUG_NAME_COUNTERS: java_util_HashMap<string, java_lang_Integer>;
static DEBUG_NAMES: java_util_HashMap<java_lang_invoke_LambdaForm, string>;
static TRACE_INTERPRETER: boolean;
static $assertionsDisabled: boolean;
equals(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_invoke_LambdaForm): boolean;
toString(): string;
hashCode(): number;
prepare(): void;
static basicTypeSignature(arg0: java_lang_invoke_MethodType): string;
static shortenSignature(arg0: string): string;

  }
}//@ts-nocheck

declare module 'java.lang.invoke.LambdaForm' {
import { Object as java_lang_Object } from 'java.lang';
import { Name as java_lang_invoke_LambdaForm_Name, BasicType as java_lang_invoke_LambdaForm_BasicType, NamedFunction as java_lang_invoke_LambdaForm_NamedFunction } from 'java.lang.invoke.LambdaForm';

  export class Name extends java_lang_Object {
type: java_lang_invoke_LambdaForm_BasicType;
index: number;
function: java_lang_invoke_LambdaForm_NamedFunction;
constraint: java_lang_Object;
arguments: java_lang_Object[];
static $assertionsDisabled: boolean;
equals(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_invoke_LambdaForm_Name): boolean;
toString(): string;
hashCode(): number;
debugString(): string;
paramString(): string;
exprString(): string;

  }
}//@ts-nocheck

declare module 'java.lang.invoke.LambdaForm' {
import { BasicType as java_lang_invoke_LambdaForm_BasicType } from 'java.lang.invoke.LambdaForm';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
import { Wrapper as sun_invoke_util_Wrapper } from 'sun.invoke.util';

  export class BasicType extends java_lang_Enum<java_lang_invoke_LambdaForm_BasicType> {
static L_TYPE: java_lang_invoke_LambdaForm_BasicType;
static I_TYPE: java_lang_invoke_LambdaForm_BasicType;
static J_TYPE: java_lang_invoke_LambdaForm_BasicType;
static F_TYPE: java_lang_invoke_LambdaForm_BasicType;
static D_TYPE: java_lang_invoke_LambdaForm_BasicType;
static V_TYPE: java_lang_invoke_LambdaForm_BasicType;
static ALL_TYPES: java_lang_invoke_LambdaForm_BasicType[];
static ARG_TYPES: java_lang_invoke_LambdaForm_BasicType[];
static ARG_TYPE_LIMIT: number;
static TYPE_LIMIT: number;
static L_TYPE_NUM: number;
static I_TYPE_NUM: number;
static J_TYPE_NUM: number;
static F_TYPE_NUM: number;
static D_TYPE_NUM: number;
static V_TYPE_NUM: number;
btChar: string;
btClass: java_lang_Class<java_lang_Object>;
btWrapper: sun_invoke_util_Wrapper;
static $VALUES: java_lang_invoke_LambdaForm_BasicType[];
static $assertionsDisabled: boolean;
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_invoke_LambdaForm_BasicType[];
static valueOf(arg0: string): java_lang_invoke_LambdaForm_BasicType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.invoke.LambdaForm' {
import { Object as java_lang_Object } from 'java.lang';
import { Intrinsic as java_lang_invoke_MethodHandleImpl_Intrinsic } from 'java.lang.invoke.MethodHandleImpl';
import { MemberName as java_lang_invoke_MemberName, MethodHandle as java_lang_invoke_MethodHandle, MethodType as java_lang_invoke_MethodType } from 'java.lang.invoke';

  export class NamedFunction extends java_lang_Object {
member: java_lang_invoke_MemberName;
resolvedHandle: java_lang_invoke_MethodHandle;
invoker: java_lang_invoke_MethodHandle;
intrinsicName: java_lang_invoke_MethodHandleImpl_Intrinsic;
static INVOKER_METHOD_TYPE: java_lang_invoke_MethodType;
static $assertionsDisabled: boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
intrinsicName(): java_lang_invoke_MethodHandleImpl_Intrinsic;
isConstantZero(): boolean;
isIdentity(): boolean;

  }
}//@ts-nocheck

declare module 'java.lang.invoke.MethodHandleImpl' {
import { Intrinsic as java_lang_invoke_MethodHandleImpl_Intrinsic } from 'java.lang.invoke.MethodHandleImpl';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Intrinsic extends java_lang_Enum<java_lang_invoke_MethodHandleImpl_Intrinsic> {
static SELECT_ALTERNATIVE: java_lang_invoke_MethodHandleImpl_Intrinsic;
static GUARD_WITH_CATCH: java_lang_invoke_MethodHandleImpl_Intrinsic;
static TRY_FINALLY: java_lang_invoke_MethodHandleImpl_Intrinsic;
static LOOP: java_lang_invoke_MethodHandleImpl_Intrinsic;
static NEW_ARRAY: java_lang_invoke_MethodHandleImpl_Intrinsic;
static ARRAY_LOAD: java_lang_invoke_MethodHandleImpl_Intrinsic;
static ARRAY_STORE: java_lang_invoke_MethodHandleImpl_Intrinsic;
static ARRAY_LENGTH: java_lang_invoke_MethodHandleImpl_Intrinsic;
static IDENTITY: java_lang_invoke_MethodHandleImpl_Intrinsic;
static ZERO: java_lang_invoke_MethodHandleImpl_Intrinsic;
static NONE: java_lang_invoke_MethodHandleImpl_Intrinsic;
static $VALUES: java_lang_invoke_MethodHandleImpl_Intrinsic[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_invoke_MethodHandleImpl_Intrinsic[];
static valueOf(arg0: string): java_lang_invoke_MethodHandleImpl_Intrinsic;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.invoke' {
import { Object as java_lang_Object, ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, IllegalAccessException as java_lang_IllegalAccessException, ReflectiveOperationException as java_lang_ReflectiveOperationException, Cloneable as java_lang_Cloneable } from 'java.lang';
import { MemberName as java_lang_invoke_MemberName, MethodType as java_lang_invoke_MethodType, ResolvedMethodName as java_lang_invoke_ResolvedMethodName } from 'java.lang.invoke';
import { Field as java_lang_reflect_Field, Method as java_lang_reflect_Method, Constructor as java_lang_reflect_Constructor, Member as java_lang_reflect_Member } from 'java.lang.reflect';

  export class MemberName extends java_lang_Object implements java_lang_reflect_Member, java_lang_Cloneable {
clazz: java_lang_Class<java_lang_Object>;
name: string;
type: java_lang_Object;
flags: number;
method: java_lang_invoke_ResolvedMethodName;
resolution: java_lang_Object;
static MH_INVOKE_MODS: number;
static BRIDGE: number;
static VARARGS: number;
static SYNTHETIC: number;
static ANNOTATION: number;
static ENUM: number;
static CONSTRUCTOR_NAME: string;
static RECOGNIZED_MODIFIERS: number;
static IS_METHOD: number;
static IS_CONSTRUCTOR: number;
static IS_FIELD: number;
static IS_TYPE: number;
static CALLER_SENSITIVE: number;
static ALL_ACCESS: number;
static ALL_KINDS: number;
static IS_INVOCABLE: number;
static IS_FIELD_OR_METHOD: number;
static SEARCH_ALL_SUPERS: number;
static $assertionsDisabled: boolean;
modifiers: number;
name: string;
classLoader: java_lang_ClassLoader;
declaringClass: java_lang_Class<java_lang_Object>;
returnType: java_lang_Class<java_lang_Object>;
parameterTypes: java_lang_Class<java_lang_Object>[];
type: java_lang_Object;
signature: string;
referenceKind: number;
methodType: java_lang_invoke_MethodType;
methodOrFieldType: java_lang_invoke_MethodType;
invocationType: java_lang_invoke_MethodType;
fieldType: java_lang_Class<java_lang_Object>;
definition: java_lang_invoke_MemberName;
equals(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_invoke_MemberName): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
getName(): string;
isSynthetic(): boolean;
getClassLoader(): java_lang_ClassLoader;
getDeclaringClass(): java_lang_Class<java_lang_Object>;
isMethod(): boolean;
getReturnType(): java_lang_Class<java_lang_Object>;
getParameterTypes(): java_lang_Class<java_lang_Object>[];
isConstructor(): boolean;
isStatic(): boolean;
isPublic(): boolean;
isProtected(): boolean;
getType(): java_lang_Object;
isBridge(): boolean;
getSignature(): string;
isFinal(): boolean;
isVolatile(): boolean;
isGetter(): boolean;
isResolved(): boolean;
getReferenceKind(): number;
isAbstract(): boolean;
getMethodType(): java_lang_invoke_MethodType;
getMethodOrFieldType(): java_lang_invoke_MethodType;
isField(): boolean;
asSpecial(): java_lang_invoke_MemberName;
asConstructor(): java_lang_invoke_MemberName;
isInvocable(): boolean;
getInvocationType(): java_lang_invoke_MethodType;
isMethodHandleInvoke(): boolean;
getFieldType(): java_lang_Class<java_lang_Object>;
isVarargs(): boolean;
makeAccessException(arg0: string, arg1: java_lang_Object): java_lang_IllegalAccessException;
makeAccessException(): java_lang_ReflectiveOperationException;
static isMethodHandleInvokeName(arg0: string): boolean;
isVarHandleMethodInvoke(): boolean;
static isVarHandleMethodInvokeName(arg0: string): boolean;
isPrivate(): boolean;
canBeStaticallyBound(): boolean;
isNative(): boolean;
isFieldOrMethod(): boolean;
isType(): boolean;
isPackage(): boolean;
isCallerSensitive(): boolean;
isAccessibleFrom(arg0: java_lang_Class<java_lang_Object>): boolean;
refersTo(arg0: java_lang_Class<java_lang_Object>, arg1: string): boolean;
asNormalOriginal(): java_lang_invoke_MemberName;
isSetter(): boolean;
asSetter(): java_lang_invoke_MemberName;
getDefinition(): java_lang_invoke_MemberName;
hasReceiverTypeDispatch(): boolean;
constructor(arg0: number, arg1: java_lang_Class<java_lang_Object>, arg2: string, arg3: java_lang_Object);
constructor(arg0: java_lang_Class<java_lang_Object>, arg1: string, arg2: java_lang_Class<java_lang_Object>, arg3: number);
constructor(arg0: java_lang_reflect_Field, arg1: boolean);
constructor(arg0: java_lang_Class<java_lang_Object>);
constructor(arg0: java_lang_Class<java_lang_Object>, arg1: string, arg2: java_lang_invoke_MethodType, arg3: number);
constructor(arg0: java_lang_reflect_Method);
constructor(arg0: java_lang_reflect_Constructor<java_lang_Object>);
constructor(arg0: java_lang_reflect_Field);
constructor(arg0: java_lang_reflect_Method, arg1: boolean);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, ReflectiveOperationException as java_lang_ReflectiveOperationException } from 'java.lang';

  export class IllegalAccessException extends java_lang_ReflectiveOperationException {
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
constructor();
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Boolean extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_lang_Boolean> {
static TRUE: java_lang_Boolean;
static FALSE: java_lang_Boolean;
static TYPE: java_lang_Class<java_lang_Boolean>;
value: boolean;
static serialVersionUID: number;
static boolean: boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
static toString(arg0: boolean): string;
static hashCode(arg0: boolean): number;
hashCode(): number;
compareTo(arg0: java_lang_Boolean): number;
compareTo(arg0: java_lang_Object): number;
static getBoolean(arg0: string): boolean;
booleanValue(): boolean;
static valueOf(arg0: string): java_lang_Boolean;
static valueOf(arg0: boolean): java_lang_Boolean;
static compare(arg0: boolean, arg1: boolean): number;
static parseBoolean(arg0: string): boolean;
static logicalAnd(arg0: boolean, arg1: boolean): boolean;
static logicalOr(arg0: boolean, arg1: boolean): boolean;
static logicalXor(arg0: boolean, arg1: boolean): boolean;
constructor(arg0: boolean);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { CharBuffer as java_nio_CharBuffer } from 'java.nio';

  export class Readable {

read(arg0: java_nio_CharBuffer): number;

  }
}//@ts-nocheck

declare module 'java.lang' {


  export class Cloneable {



  }
}//@ts-nocheck

declare module 'java.lang' {
import { StringBuffer as java_lang_StringBuffer, AbstractStringBuilder as java_lang_AbstractStringBuilder, StringBuilder as java_lang_StringBuilder, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class StringBuilder extends java_lang_AbstractStringBuilder implements java_io_Serializable, java_lang_Comparable<java_lang_StringBuilder>, java_lang_CharSequence {
static serialVersionUID: number;
chars: void;
class: java_lang_Class<java_lang_Object>;
length(): number;
toString(): string;
append(arg0: java_lang_StringBuffer): java_lang_AbstractStringBuilder;
append(arg0: java_lang_StringBuffer): java_lang_StringBuilder;
append(arg0: java_lang_CharSequence): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_lang_StringBuilder;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_StringBuilder;
append(arg0: string[]): java_lang_AbstractStringBuilder;
append(arg0: string[]): java_lang_StringBuilder;
append(arg0: java_lang_Object): java_lang_AbstractStringBuilder;
append(arg0: java_lang_Object): java_lang_StringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_StringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_Appendable;
append(arg0: string): java_lang_StringBuilder;
append(arg0: boolean): java_lang_AbstractStringBuilder;
append(arg0: boolean): java_lang_StringBuilder;
append(arg0: string[], arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: string[], arg1: number, arg2: number): java_lang_StringBuilder;
getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_StringBuilder): number;
indexOf(arg0: string, arg1: number): number;
indexOf(arg0: string): number;
codePoints(): java_util_stream_IntStream;
charAt(arg0: number): string;
codePointAt(arg0: number): number;
codePointBefore(arg0: number): number;
codePointCount(arg0: number, arg1: number): number;
offsetByCodePoints(arg0: number, arg1: number): number;
lastIndexOf(arg0: string): number;
lastIndexOf(arg0: string, arg1: number): number;
substring(arg0: number, arg1: number): string;
substring(arg0: number): string;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
replace(arg0: number, arg1: number, arg2: string): java_lang_AbstractStringBuilder;
replace(arg0: number, arg1: number, arg2: string): java_lang_StringBuilder;
chars(): java_util_stream_IntStream;
delete(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
delete(arg0: number, arg1: number): java_lang_StringBuilder;
setLength(arg0: number): void;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_StringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuilder;
insert(arg0: number, arg1: boolean): java_lang_StringBuilder;
insert(arg0: number, arg1: boolean): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_StringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string[], arg2: number, arg3: number): java_lang_StringBuilder;
insert(arg0: number, arg1: string[], arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_Object): java_lang_StringBuilder;
insert(arg0: number, arg1: java_lang_Object): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_StringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string[]): java_lang_StringBuilder;
insert(arg0: number, arg1: string[]): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_StringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuilder;
capacity(): number;
ensureCapacity(arg0: number): void;
trimToSize(): void;
setCharAt(arg0: number, arg1: string): void;
appendCodePoint(arg0: number): java_lang_StringBuilder;
appendCodePoint(arg0: number): java_lang_AbstractStringBuilder;
deleteCharAt(arg0: number): java_lang_AbstractStringBuilder;
deleteCharAt(arg0: number): java_lang_StringBuilder;
reverse(): java_lang_AbstractStringBuilder;
reverse(): java_lang_StringBuilder;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_CharSequence);
constructor(arg0: string);
constructor(arg0: number);
constructor();
  }
}//@ts-nocheck

declare module 'java.lang' {
import { AbstractStringBuilder as java_lang_AbstractStringBuilder, StringBuffer as java_lang_StringBuffer, Appendable as java_lang_Appendable, CharSequence as java_lang_CharSequence, Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';

  export class StringBuffer extends java_lang_AbstractStringBuilder implements java_io_Serializable, java_lang_Comparable<java_lang_StringBuffer>, java_lang_CharSequence {
toStringCache: string;
static serialVersionUID: number;
static serialPersistentFields: java_io_ObjectStreamField[];
chars: void;
class: java_lang_Class<java_lang_Object>;
length(): number;
toString(): string;
append(arg0: string[]): java_lang_AbstractStringBuilder;
append(arg0: string[]): java_lang_StringBuffer;
append(arg0: number): java_lang_StringBuffer;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuffer;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuffer;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: string[], arg1: number, arg2: number): java_lang_StringBuffer;
append(arg0: string[], arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: boolean): java_lang_StringBuffer;
append(arg0: boolean): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_StringBuffer;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_Appendable;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuffer;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_StringBuffer;
append(arg0: java_lang_StringBuffer): java_lang_AbstractStringBuilder;
append(arg0: java_lang_StringBuffer): java_lang_StringBuffer;
append(arg0: java_lang_CharSequence): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_lang_StringBuffer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_StringBuffer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: java_lang_Object): java_lang_AbstractStringBuilder;
append(arg0: java_lang_Object): java_lang_StringBuffer;
getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
compareTo(arg0: java_lang_StringBuffer): number;
compareTo(arg0: java_lang_Object): number;
indexOf(arg0: string): number;
indexOf(arg0: string, arg1: number): number;
codePoints(): java_util_stream_IntStream;
charAt(arg0: number): string;
codePointAt(arg0: number): number;
codePointBefore(arg0: number): number;
codePointCount(arg0: number, arg1: number): number;
offsetByCodePoints(arg0: number, arg1: number): number;
lastIndexOf(arg0: string): number;
lastIndexOf(arg0: string, arg1: number): number;
substring(arg0: number, arg1: number): string;
substring(arg0: number): string;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
replace(arg0: number, arg1: number, arg2: string): java_lang_StringBuffer;
replace(arg0: number, arg1: number, arg2: string): java_lang_AbstractStringBuilder;
chars(): java_util_stream_IntStream;
delete(arg0: number, arg1: number): java_lang_StringBuffer;
delete(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
setLength(arg0: number): void;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_StringBuffer;
insert(arg0: number, arg1: java_lang_Object): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_Object): java_lang_StringBuffer;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_StringBuffer;
insert(arg0: number, arg1: string[]): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string[]): java_lang_StringBuffer;
insert(arg0: number, arg1: string[], arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string[], arg2: number, arg3: number): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_StringBuffer;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: boolean): java_lang_StringBuffer;
insert(arg0: number, arg1: boolean): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_StringBuffer;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
capacity(): number;
ensureCapacity(arg0: number): void;
trimToSize(): void;
setCharAt(arg0: number, arg1: string): void;
appendCodePoint(arg0: number): java_lang_StringBuffer;
appendCodePoint(arg0: number): java_lang_AbstractStringBuilder;
deleteCharAt(arg0: number): java_lang_StringBuffer;
deleteCharAt(arg0: number): java_lang_AbstractStringBuilder;
reverse(): java_lang_AbstractStringBuilder;
reverse(): java_lang_StringBuffer;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_CharSequence);
constructor(arg0: string);
constructor(arg0: number);
constructor();
  }
}//@ts-nocheck

declare module 'java.lang' {
import { AbstractStringBuilder as java_lang_AbstractStringBuilder, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object, StringBuffer as java_lang_StringBuffer } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';

  export class AbstractStringBuilder extends java_lang_Object implements java_lang_Appendable, java_lang_CharSequence {
value: number[];
coder: number;
count: number;
static EMPTYVALUE: number[];
static MAX_ARRAY_SIZE: number;
chars: void;
length(): number;
toString(): string;
append(arg0: string[]): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_Object): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: java_lang_StringBuffer): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_Appendable;
append(arg0: boolean): java_lang_AbstractStringBuilder;
append(arg0: string[], arg1: number, arg2: number): java_lang_AbstractStringBuilder;
getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
indexOf(arg0: string, arg1: number): number;
indexOf(arg0: string): number;
codePoints(): java_util_stream_IntStream;
charAt(arg0: number): string;
codePointAt(arg0: number): number;
codePointBefore(arg0: number): number;
codePointCount(arg0: number, arg1: number): number;
offsetByCodePoints(arg0: number, arg1: number): number;
lastIndexOf(arg0: string, arg1: number): number;
lastIndexOf(arg0: string): number;
substring(arg0: number, arg1: number): string;
substring(arg0: number): string;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
replace(arg0: number, arg1: number, arg2: string): java_lang_AbstractStringBuilder;
chars(): java_util_stream_IntStream;
delete(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
setLength(arg0: number): void;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: boolean): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string[]): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_Object): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string[], arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
capacity(): number;
ensureCapacity(arg0: number): void;
trimToSize(): void;
setCharAt(arg0: number, arg1: string): void;
appendCodePoint(arg0: number): java_lang_AbstractStringBuilder;
deleteCharAt(arg0: number): java_lang_AbstractStringBuilder;
reverse(): java_lang_AbstractStringBuilder;

  }
}//@ts-nocheck

declare module 'java.lang.ref' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ReferenceQueue as java_lang_ref_ReferenceQueue, Reference as java_lang_ref_Reference } from 'java.lang.ref';

  export class WeakReference<T extends java_lang_Object> extends java_lang_ref_Reference<T> {
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
constructor(arg0: T);
constructor(arg0: T, arg1: java_lang_ref_ReferenceQueue<java_lang_Object>);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Supplier as java_util_function_Supplier } from 'java.util.function';
import { ThreadLocal as java_lang_ThreadLocal, Object as java_lang_Object } from 'java.lang';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';

  export class ThreadLocal<T extends java_lang_Object> extends java_lang_Object {
threadLocalHashCode: number;
static nextHashCode: java_util_concurrent_atomic_AtomicInteger;
static HASH_INCREMENT: number;
remove(): void;
get(): T;
set(arg0: T): void;
static withInitial<S extends java_lang_Object>(arg0: java_util_function_Supplier<S>): java_lang_ThreadLocal<S>;
constructor();
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Thread as java_lang_Thread, ThreadGroup as java_lang_ThreadGroup, ClassLoader as java_lang_ClassLoader, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { State as java_lang_Thread_State, UncaughtExceptionHandler as java_lang_Thread_UncaughtExceptionHandler } from 'java.lang.Thread';
import { AccessControlContext as java_security_AccessControlContext } from 'java.security';
import { ThreadLocalMap as java_lang_ThreadLocal_ThreadLocalMap } from 'java.lang.ThreadLocal';
import { Interruptible as sun_nio_ch_Interruptible } from 'sun.nio.ch';

  export class Thread extends java_lang_Object implements java_lang_Runnable {
name: string;
priority: number;
daemon: boolean;
stillborn: boolean;
eetop: number;
target: java_lang_Runnable;
group: java_lang_ThreadGroup;
contextClassLoader: java_lang_ClassLoader;
inheritedAccessControlContext: java_security_AccessControlContext;
static threadInitNumber: number;
threadLocals: java_lang_ThreadLocal_ThreadLocalMap;
inheritableThreadLocals: java_lang_ThreadLocal_ThreadLocalMap;
stackSize: number;
nativeParkEventPointer: number;
tid: number;
static threadSeqNumber: number;
threadStatus: number;
parkBlocker: java_lang_Object;
blocker: sun_nio_ch_Interruptible;
blockerLock: java_lang_Object;
static MIN_PRIORITY: number;
static NORM_PRIORITY: number;
static MAX_PRIORITY: number;
static EMPTY_STACK_TRACE: java_lang_StackTraceElement[];
uncaughtExceptionHandler: java_lang_Thread_UncaughtExceptionHandler;
static defaultUncaughtExceptionHandler: java_lang_Thread_UncaughtExceptionHandler;
threadLocalRandomSeed: number;
threadLocalRandomProbe: number;
threadLocalRandomSecondarySeed: number;
name: string;
threadGroup: java_lang_ThreadGroup;
stackTrace: java_lang_StackTraceElement[];
priority: number;
contextClassLoader: java_lang_ClassLoader;
static allStackTraces: java_util_Map<java_lang_Thread, java_lang_StackTraceElement[]>;
id: number;
state: java_lang_Thread_State;
static defaultUncaughtExceptionHandler: java_lang_Thread_UncaughtExceptionHandler;
uncaughtExceptionHandler: java_lang_Thread_UncaughtExceptionHandler;
run(): void;
toString(): string;
isInterrupted(): boolean;
static currentThread(): java_lang_Thread;
static onSpinWait(): void;
getName(): string;
join(): void;
join(arg0: number, arg1: number): void;
join(arg0: number): void;
getThreadGroup(): java_lang_ThreadGroup;
setContextClassLoader(arg0: java_lang_ClassLoader): void;
getStackTrace(): java_lang_StackTraceElement[];
static holdsLock(arg0: java_lang_Object): boolean;
checkAccess(): void;
static dumpStack(): void;
setPriority(arg0: number): void;
setDaemon(arg0: boolean): void;
start(): void;
static yield(): void;
static sleep(arg0: number, arg1: number): void;
static sleep(arg0: number): void;
stop(): void;
interrupt(): void;
static interrupted(): boolean;
isAlive(): boolean;
suspend(): void;
resume(): void;
getPriority(): number;
setName(arg0: string): void;
static activeCount(): number;
static enumerate(arg0: java_lang_Thread[]): number;
countStackFrames(): number;
isDaemon(): boolean;
getContextClassLoader(): java_lang_ClassLoader;
static getAllStackTraces(): java_util_Map<java_lang_Thread, java_lang_StackTraceElement[]>;
getId(): number;
getState(): java_lang_Thread_State;
static setDefaultUncaughtExceptionHandler(arg0: java_lang_Thread_UncaughtExceptionHandler): void;
static getDefaultUncaughtExceptionHandler(): java_lang_Thread_UncaughtExceptionHandler;
getUncaughtExceptionHandler(): java_lang_Thread_UncaughtExceptionHandler;
setUncaughtExceptionHandler(arg0: java_lang_Thread_UncaughtExceptionHandler): void;
constructor(arg0: java_lang_ThreadGroup, arg1: string);
constructor(arg0: string);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable);
constructor(arg0: java_lang_Runnable);
constructor();
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string, arg3: number, arg4: boolean);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string, arg3: number);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string);
constructor(arg0: java_lang_Runnable, arg1: string);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { ThreadGroup as java_lang_ThreadGroup, Thread as java_lang_Thread, Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';
import { UncaughtExceptionHandler as java_lang_Thread_UncaughtExceptionHandler } from 'java.lang.Thread';

  export class ThreadGroup extends java_lang_Object implements java_lang_Thread_UncaughtExceptionHandler {
parent: java_lang_ThreadGroup;
name: string;
maxPriority: number;
destroyed: boolean;
daemon: boolean;
nUnstartedThreads: number;
nthreads: number;
threads: java_lang_Thread[];
ngroups: number;
groups: java_lang_ThreadGroup[];
name: string;
parent: java_lang_ThreadGroup;
maxPriority: number;
toString(): string;
getName(): string;
list(): void;
getParent(): java_lang_ThreadGroup;
checkAccess(): void;
setDaemon(arg0: boolean): void;
stop(): void;
interrupt(): void;
suspend(): void;
resume(): void;
activeCount(): number;
enumerate(arg0: java_lang_ThreadGroup[], arg1: boolean): number;
enumerate(arg0: java_lang_Thread[], arg1: boolean): number;
enumerate(arg0: java_lang_ThreadGroup[]): number;
enumerate(arg0: java_lang_Thread[]): number;
isDaemon(): boolean;
getMaxPriority(): number;
uncaughtException(arg0: java_lang_Thread, arg1: java_lang_Throwable): void;
isDestroyed(): boolean;
setMaxPriority(arg0: number): void;
parentOf(arg0: java_lang_ThreadGroup): boolean;
activeGroupCount(): number;
destroy(): void;
allowThreadSuspension(arg0: boolean): boolean;
constructor(arg0: java_lang_ThreadGroup, arg1: string);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.lang.Thread' {
import { Thread as java_lang_Thread, Throwable as java_lang_Throwable } from 'java.lang';

  export class UncaughtExceptionHandler {

uncaughtException(arg0: java_lang_Thread, arg1: java_lang_Throwable): void;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class StackTraceElement extends java_lang_Object implements java_io_Serializable {
declaringClassObject: java_lang_Class<java_lang_Object>;
classLoaderName: string;
moduleName: string;
moduleVersion: string;
declaringClass: string;
methodName: string;
fileName: string;
lineNumber: number;
format: number;
static BUILTIN_CLASS_LOADER: number;
static JDK_NON_UPGRADEABLE_MODULE: number;
static serialVersionUID: number;
fileName: string;
lineNumber: number;
moduleName: string;
moduleVersion: string;
classLoaderName: string;
className: string;
methodName: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getFileName(): string;
getLineNumber(): number;
getModuleName(): string;
getModuleVersion(): string;
getClassLoaderName(): string;
getClassName(): string;
getMethodName(): string;
isNativeMethod(): boolean;
constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: number);
constructor(arg0: string, arg1: string, arg2: string, arg3: number);
  }
}//@ts-nocheck

declare module 'java.lang.Thread' {
import { State as java_lang_Thread_State } from 'java.lang.Thread';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class State extends java_lang_Enum<java_lang_Thread_State> {
static NEW: java_lang_Thread_State;
static RUNNABLE: java_lang_Thread_State;
static BLOCKED: java_lang_Thread_State;
static WAITING: java_lang_Thread_State;
static TIMED_WAITING: java_lang_Thread_State;
static TERMINATED: java_lang_Thread_State;
static $VALUES: java_lang_Thread_State[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_Thread_State[];
static valueOf(arg0: string): java_lang_Thread_State;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.ThreadLocal' {
import { Entry as java_lang_ThreadLocal_ThreadLocalMap_Entry } from 'java.lang.ThreadLocal.ThreadLocalMap';
import { Object as java_lang_Object } from 'java.lang';

  export class ThreadLocalMap extends java_lang_Object {
static INITIAL_CAPACITY: number;
table: java_lang_ThreadLocal_ThreadLocalMap_Entry[];
size: number;
threshold: number;


  }
}//@ts-nocheck

declare module 'java.lang.ThreadLocal.ThreadLocalMap' {
import { Object as java_lang_Object, Class as java_lang_Class, ThreadLocal as java_lang_ThreadLocal } from 'java.lang';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';

  export class Entry extends java_lang_ref_WeakReference<java_lang_ThreadLocal<java_lang_Object>> {
value: java_lang_Object;
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

declare module 'java.lang.ref' {
import { Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';
import { Cleanable as java_lang_ref_Cleaner_Cleanable } from 'java.lang.ref.Cleaner';
import { Cleaner as java_lang_ref_Cleaner } from 'java.lang.ref';
import { ThreadFactory as java_util_concurrent_ThreadFactory } from 'java.util.concurrent';
import { CleanerImpl as jdk_internal_ref_CleanerImpl } from 'jdk.internal.ref';

  export class Cleaner extends java_lang_Object {
impl: jdk_internal_ref_CleanerImpl;
register(arg0: java_lang_Object, arg1: java_lang_Runnable): java_lang_ref_Cleaner_Cleanable;
static create(): java_lang_ref_Cleaner;
static create(arg0: java_util_concurrent_ThreadFactory): java_lang_ref_Cleaner;

  }
}//@ts-nocheck

declare module 'java.lang.ref.Cleaner' {


  export class Cleanable {

clean(): void;

  }
}//@ts-nocheck

declare module 'java.lang.ref' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ReferenceQueue as java_lang_ref_ReferenceQueue, Reference as java_lang_ref_Reference } from 'java.lang.ref';

  export class PhantomReference<T extends java_lang_Object> extends java_lang_ref_Reference<T> {
class: java_lang_Class<java_lang_Object>;
get(): T;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: T, arg1: java_lang_ref_ReferenceQueue<java_lang_Object>);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Class as java_lang_Class, Throwable as java_lang_Throwable } from 'java.lang';

  export class Exception extends java_lang_Throwable {
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
constructor(arg0: java_lang_Throwable);
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string);
constructor();
  }
}//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';

  export class ReflectiveOperationException extends java_lang_Exception {
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

declare module 'java.lang.invoke' {
import { Object as java_lang_Object } from 'java.lang';

  export class ResolvedMethodName extends java_lang_Object {



  }
}//@ts-nocheck

declare module 'java.lang.invoke.LambdaForm' {
import { Kind as java_lang_invoke_LambdaForm_Kind } from 'java.lang.invoke.LambdaForm';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Kind extends java_lang_Enum<java_lang_invoke_LambdaForm_Kind> {
static GENERIC: java_lang_invoke_LambdaForm_Kind;
static ZERO: java_lang_invoke_LambdaForm_Kind;
static IDENTITY: java_lang_invoke_LambdaForm_Kind;
static BOUND_REINVOKER: java_lang_invoke_LambdaForm_Kind;
static REINVOKER: java_lang_invoke_LambdaForm_Kind;
static DELEGATE: java_lang_invoke_LambdaForm_Kind;
static EXACT_LINKER: java_lang_invoke_LambdaForm_Kind;
static EXACT_INVOKER: java_lang_invoke_LambdaForm_Kind;
static GENERIC_LINKER: java_lang_invoke_LambdaForm_Kind;
static GENERIC_INVOKER: java_lang_invoke_LambdaForm_Kind;
static LINK_TO_TARGET_METHOD: java_lang_invoke_LambdaForm_Kind;
static LINK_TO_CALL_SITE: java_lang_invoke_LambdaForm_Kind;
static DIRECT_INVOKE_VIRTUAL: java_lang_invoke_LambdaForm_Kind;
static DIRECT_INVOKE_SPECIAL: java_lang_invoke_LambdaForm_Kind;
static DIRECT_INVOKE_SPECIAL_IFC: java_lang_invoke_LambdaForm_Kind;
static DIRECT_INVOKE_STATIC: java_lang_invoke_LambdaForm_Kind;
static DIRECT_NEW_INVOKE_SPECIAL: java_lang_invoke_LambdaForm_Kind;
static DIRECT_INVOKE_INTERFACE: java_lang_invoke_LambdaForm_Kind;
static DIRECT_INVOKE_STATIC_INIT: java_lang_invoke_LambdaForm_Kind;
static GET_OBJECT: java_lang_invoke_LambdaForm_Kind;
static PUT_OBJECT: java_lang_invoke_LambdaForm_Kind;
static GET_OBJECT_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_OBJECT_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static GET_INT: java_lang_invoke_LambdaForm_Kind;
static PUT_INT: java_lang_invoke_LambdaForm_Kind;
static GET_INT_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_INT_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static GET_BOOLEAN: java_lang_invoke_LambdaForm_Kind;
static PUT_BOOLEAN: java_lang_invoke_LambdaForm_Kind;
static GET_BOOLEAN_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_BOOLEAN_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static GET_BYTE: java_lang_invoke_LambdaForm_Kind;
static PUT_BYTE: java_lang_invoke_LambdaForm_Kind;
static GET_BYTE_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_BYTE_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static GET_CHAR: java_lang_invoke_LambdaForm_Kind;
static PUT_CHAR: java_lang_invoke_LambdaForm_Kind;
static GET_CHAR_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_CHAR_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static GET_SHORT: java_lang_invoke_LambdaForm_Kind;
static PUT_SHORT: java_lang_invoke_LambdaForm_Kind;
static GET_SHORT_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_SHORT_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static GET_LONG: java_lang_invoke_LambdaForm_Kind;
static PUT_LONG: java_lang_invoke_LambdaForm_Kind;
static GET_LONG_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_LONG_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static GET_FLOAT: java_lang_invoke_LambdaForm_Kind;
static PUT_FLOAT: java_lang_invoke_LambdaForm_Kind;
static GET_FLOAT_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_FLOAT_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static GET_DOUBLE: java_lang_invoke_LambdaForm_Kind;
static PUT_DOUBLE: java_lang_invoke_LambdaForm_Kind;
static GET_DOUBLE_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static PUT_DOUBLE_VOLATILE: java_lang_invoke_LambdaForm_Kind;
static TRY_FINALLY: java_lang_invoke_LambdaForm_Kind;
static COLLECT: java_lang_invoke_LambdaForm_Kind;
static CONVERT: java_lang_invoke_LambdaForm_Kind;
static SPREAD: java_lang_invoke_LambdaForm_Kind;
static LOOP: java_lang_invoke_LambdaForm_Kind;
static FIELD: java_lang_invoke_LambdaForm_Kind;
static GUARD: java_lang_invoke_LambdaForm_Kind;
static GUARD_WITH_CATCH: java_lang_invoke_LambdaForm_Kind;
static VARHANDLE_EXACT_INVOKER: java_lang_invoke_LambdaForm_Kind;
static VARHANDLE_INVOKER: java_lang_invoke_LambdaForm_Kind;
static VARHANDLE_LINKER: java_lang_invoke_LambdaForm_Kind;
defaultLambdaName: string;
methodName: string;
static $VALUES: java_lang_invoke_LambdaForm_Kind[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_invoke_LambdaForm_Kind[];
static valueOf(arg0: string): java_lang_invoke_LambdaForm_Kind;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.invoke.MemberName' {
import { Class as java_lang_Class, Object as java_lang_Object, ReflectiveOperationException as java_lang_ReflectiveOperationException } from 'java.lang';
import { List as java_util_List } from 'java.util';
import { MemberName as java_lang_invoke_MemberName, MethodType as java_lang_invoke_MethodType } from 'java.lang.invoke';
import { Factory as java_lang_invoke_MemberName_Factory } from 'java.lang.invoke.MemberName';

  export class Factory extends java_lang_Object {
static INSTANCE: java_lang_invoke_MemberName_Factory;
static ALLOWED_FLAGS: number;
static $assertionsDisabled: boolean;
nestedTypes: java_util_List<java_lang_invoke_MemberName>;
fields: java_util_List<java_lang_invoke_MemberName>;
fields: java_util_List<java_lang_invoke_MemberName>;
methods: java_util_List<java_lang_invoke_MemberName>;
methods: java_util_List<java_lang_invoke_MemberName>;
constructors: java_util_List<java_lang_invoke_MemberName>;
getNestedTypes(arg0: java_lang_Class<java_lang_Object>, arg1: boolean, arg2: java_lang_Class<java_lang_Object>): java_util_List<java_lang_invoke_MemberName>;
getFields(arg0: java_lang_Class<java_lang_Object>, arg1: boolean, arg2: java_lang_Class<java_lang_Object>): java_util_List<java_lang_invoke_MemberName>;
getFields(arg0: java_lang_Class<java_lang_Object>, arg1: boolean, arg2: string, arg3: java_lang_Class<java_lang_Object>, arg4: java_lang_Class<java_lang_Object>): java_util_List<java_lang_invoke_MemberName>;
getMethods(arg0: java_lang_Class<java_lang_Object>, arg1: boolean, arg2: string, arg3: java_lang_invoke_MethodType, arg4: java_lang_Class<java_lang_Object>): java_util_List<java_lang_invoke_MemberName>;
getMethods(arg0: java_lang_Class<java_lang_Object>, arg1: boolean, arg2: java_lang_Class<java_lang_Object>): java_util_List<java_lang_invoke_MemberName>;
getConstructors(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_Class<java_lang_Object>): java_util_List<java_lang_invoke_MemberName>;
resolveOrNull(arg0: number, arg1: java_lang_invoke_MemberName, arg2: java_lang_Class<java_lang_Object>): java_lang_invoke_MemberName;
resolveOrFail<NoSuchMemberException extends java_lang_ReflectiveOperationException>(arg0: number, arg1: java_lang_invoke_MemberName, arg2: java_lang_Class<java_lang_Object>, arg3: java_lang_Class<NoSuchMemberException>): java_lang_invoke_MemberName;

  }
}//@ts-nocheck

declare module 'java.lang.invoke' {
import { MethodType as java_lang_invoke_MethodType, MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { NamedFunction as java_lang_invoke_LambdaForm_NamedFunction } from 'java.lang.invoke.LambdaForm';
import { Object as java_lang_Object } from 'java.lang';

  export class Invokers extends java_lang_Object {
targetType: java_lang_invoke_MethodType;
invokers: java_lang_invoke_MethodHandle[];
static INV_EXACT: number;
static INV_GENERIC: number;
static INV_BASIC: number;
static INV_LIMIT: number;
static MH_LINKER_ARG_APPENDED: number;
static NF_checkExactType: number;
static NF_checkGenericType: number;
static NF_getCallSiteTarget: number;
static NF_checkCustomized: number;
static NF_checkVarHandleGenericType: number;
static NF_checkVarHandleExactType: number;
static NF_LIMIT: number;
static NFS: java_lang_invoke_LambdaForm_NamedFunction[];
static $assertionsDisabled: boolean;
toString(): string;

  }
}//@ts-nocheck

declare module 'java.lang.invoke.MethodType' {
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { WeakEntry as java_lang_invoke_MethodType_ConcurrentWeakInternSet_WeakEntry } from 'java.lang.invoke.MethodType.ConcurrentWeakInternSet';
import { ReferenceQueue as java_lang_ref_ReferenceQueue } from 'java.lang.ref';
import { Object as java_lang_Object } from 'java.lang';

  export class ConcurrentWeakInternSet<T extends java_lang_Object> extends java_lang_Object {
map: java_util_concurrent_ConcurrentMap<java_lang_invoke_MethodType_ConcurrentWeakInternSet_WeakEntry<T>, java_lang_invoke_MethodType_ConcurrentWeakInternSet_WeakEntry<T>>;
stale: java_lang_ref_ReferenceQueue<T>;
add(arg0: T): T;
get(arg0: T): T;
constructor();
  }
}//@ts-nocheck

declare module 'java.lang.invoke.MethodType.ConcurrentWeakInternSet' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ReferenceQueue as java_lang_ref_ReferenceQueue, WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';

  export class WeakEntry<T extends java_lang_Object> extends java_lang_ref_WeakReference<T> {
hashcode: number;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
get(): T;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
static reachabilityFence(arg0: java_lang_Object): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
toString(): string;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: T, arg1: java_lang_ref_ReferenceQueue<T>);
constructor(arg0: T);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Module as java_lang_Module, Class as java_lang_Class, Object as java_lang_Object, ClassLoader as java_lang_ClassLoader, ModuleLayer as java_lang_ModuleLayer } from 'java.lang';
import { InputStream as java_io_InputStream } from 'java.io';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { ModuleDescriptor as java_lang_module_ModuleDescriptor } from 'java.lang.module';
import { Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class Module extends java_lang_Object implements java_lang_reflect_AnnotatedElement {
layer: java_lang_ModuleLayer;
name: string;
loader: java_lang_ClassLoader;
descriptor: java_lang_module_ModuleDescriptor;
static ALL_UNNAMED_MODULE: java_lang_Module;
static ALL_UNNAMED_MODULE_SET: java_util_Set<java_lang_Module>;
static EVERYONE_MODULE: java_lang_Module;
static EVERYONE_SET: java_util_Set<java_lang_Module>;
reads: java_util_Set<java_lang_Module>;
openPackages: java_util_Map<string, java_util_Set<java_lang_Module>>;
exportedPackages: java_util_Map<string, java_util_Set<java_lang_Module>>;
moduleInfoClass: java_lang_Class<java_lang_Object>;
static $assertionsDisabled: boolean;
name: string;
classLoader: java_lang_ClassLoader;
resourceAsStream: java_io_InputStream;
annotation: T;
annotations: java_lang_annotation_Annotation[];
declaredAnnotations: java_lang_annotation_Annotation[];
descriptor: java_lang_module_ModuleDescriptor;
packages: java_util_Set<string>;
layer: java_lang_ModuleLayer;
annotationsByType: T[];
declaredAnnotation: T;
declaredAnnotationsByType: T[];
toString(): string;
addReads(arg0: java_lang_Module): java_lang_Module;
addExports(arg0: string, arg1: java_lang_Module): java_lang_Module;
addOpens(arg0: string, arg1: java_lang_Module): java_lang_Module;
addUses(arg0: java_lang_Class<java_lang_Object>): java_lang_Module;
getName(): string;
getClassLoader(): java_lang_ClassLoader;
getResourceAsStream(arg0: string): java_io_InputStream;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
getDescriptor(): java_lang_module_ModuleDescriptor;
isNamed(): boolean;
isOpen(arg0: string): boolean;
isOpen(arg0: string, arg1: java_lang_Module): boolean;
getPackages(): java_util_Set<string>;
getLayer(): java_lang_ModuleLayer;
canRead(arg0: java_lang_Module): boolean;
isExported(arg0: string): boolean;
isExported(arg0: string, arg1: java_lang_Module): boolean;
canUse(arg0: java_lang_Class<java_lang_Object>): boolean;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T[];

  }
}//@ts-nocheck

declare module 'java.lang.module' {
import { Set as java_util_Set, Optional as java_util_Optional } from 'java.util';
import { Requires as java_lang_module_ModuleDescriptor_Requires, Builder as java_lang_module_ModuleDescriptor_Builder, Modifier as java_lang_module_ModuleDescriptor_Modifier, Version as java_lang_module_ModuleDescriptor_Version, Exports as java_lang_module_ModuleDescriptor_Exports, Opens as java_lang_module_ModuleDescriptor_Opens, Provides as java_lang_module_ModuleDescriptor_Provides } from 'java.lang.module.ModuleDescriptor';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { ModuleDescriptor as java_lang_module_ModuleDescriptor } from 'java.lang.module';
import { InputStream as java_io_InputStream } from 'java.io';
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Supplier as java_util_function_Supplier } from 'java.util.function';

  export class ModuleDescriptor extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor> {
name: string;
version: java_lang_module_ModuleDescriptor_Version;
rawVersionString: string;
modifiers: java_util_Set<java_lang_module_ModuleDescriptor_Modifier>;
open: boolean;
automatic: boolean;
requires: java_util_Set<java_lang_module_ModuleDescriptor_Requires>;
exports: java_util_Set<java_lang_module_ModuleDescriptor_Exports>;
opens: java_util_Set<java_lang_module_ModuleDescriptor_Opens>;
uses: java_util_Set<string>;
provides: java_util_Set<java_lang_module_ModuleDescriptor_Provides>;
packages: java_util_Set<string>;
mainClass: string;
hash: number;
static $assertionsDisabled: boolean;
requires(): java_util_Set<java_lang_module_ModuleDescriptor_Requires>;
mainClass(): java_util_Optional<string>;
rawVersion(): java_util_Optional<string>;
toNameAndVersion(): string;
static newModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;
static newModule(arg0: string, arg1: java_util_Set<java_lang_module_ModuleDescriptor_Modifier>): java_lang_module_ModuleDescriptor_Builder;
static newOpenModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;
static newAutomaticModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;
modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Modifier>;
name(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
version(): java_util_Optional<java_lang_module_ModuleDescriptor_Version>;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor): number;
packages(): java_util_Set<string>;
isOpen(): boolean;
static read(arg0: java_io_InputStream): java_lang_module_ModuleDescriptor;
static read(arg0: java_nio_ByteBuffer): java_lang_module_ModuleDescriptor;
static read(arg0: java_nio_ByteBuffer, arg1: java_util_function_Supplier<java_util_Set<string>>): java_lang_module_ModuleDescriptor;
static read(arg0: java_io_InputStream, arg1: java_util_function_Supplier<java_util_Set<string>>): java_lang_module_ModuleDescriptor;
exports(): java_util_Set<java_lang_module_ModuleDescriptor_Exports>;
opens(): java_util_Set<java_lang_module_ModuleDescriptor_Opens>;
isAutomatic(): boolean;
uses(): java_util_Set<string>;
provides(): java_util_Set<java_lang_module_ModuleDescriptor_Provides>;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Optional as java_util_Optional, Set as java_util_Set } from 'java.util';
import { Version as java_lang_module_ModuleDescriptor_Version, Requires as java_lang_module_ModuleDescriptor_Requires } from 'java.lang.module.ModuleDescriptor';
import { Modifier as java_lang_module_ModuleDescriptor_Requires_Modifier } from 'java.lang.module.ModuleDescriptor.Requires';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';

  export class Requires extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Requires> {
mods: java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>;
name: string;
compiledVersion: java_lang_module_ModuleDescriptor_Version;
rawCompiledVersion: string;
static $assertionsDisabled: boolean;
rawCompiledVersion(): java_util_Optional<string>;
compiledVersion(): java_util_Optional<java_lang_module_ModuleDescriptor_Version>;
modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>;
name(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Requires): number;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Version as java_lang_module_ModuleDescriptor_Version } from 'java.lang.module.ModuleDescriptor';
import { List as java_util_List } from 'java.util';

  export class Version extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Version> {
version: string;
sequence: java_util_List<java_lang_Object>;
pre: java_util_List<java_lang_Object>;
build: java_util_List<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Version): number;
static parse(arg0: string): java_lang_module_ModuleDescriptor_Version;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Requires' {
import { Modifier as java_lang_module_ModuleDescriptor_Requires_Modifier } from 'java.lang.module.ModuleDescriptor.Requires';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Requires_Modifier> {
static TRANSITIVE: java_lang_module_ModuleDescriptor_Requires_Modifier;
static STATIC: java_lang_module_ModuleDescriptor_Requires_Modifier;
static SYNTHETIC: java_lang_module_ModuleDescriptor_Requires_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Requires_Modifier;
static $VALUES: java_lang_module_ModuleDescriptor_Requires_Modifier[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_module_ModuleDescriptor_Requires_Modifier[];
static valueOf(arg0: string): java_lang_module_ModuleDescriptor_Requires_Modifier;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Set as java_util_Set, List as java_util_List, Map as java_util_Map } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Requires_Modifier } from 'java.lang.module.ModuleDescriptor.Requires';
import { Builder as java_lang_module_ModuleDescriptor_Builder, Version as java_lang_module_ModuleDescriptor_Version, Requires as java_lang_module_ModuleDescriptor_Requires, Exports as java_lang_module_ModuleDescriptor_Exports, Opens as java_lang_module_ModuleDescriptor_Opens, Provides as java_lang_module_ModuleDescriptor_Provides, Modifier as java_lang_module_ModuleDescriptor_Modifier } from 'java.lang.module.ModuleDescriptor';
import { Modifier as java_lang_module_ModuleDescriptor_Exports_Modifier } from 'java.lang.module.ModuleDescriptor.Exports';
import { Modifier as java_lang_module_ModuleDescriptor_Opens_Modifier } from 'java.lang.module.ModuleDescriptor.Opens';
import { ModuleDescriptor as java_lang_module_ModuleDescriptor } from 'java.lang.module';
import { Object as java_lang_Object } from 'java.lang';

  export class Builder extends java_lang_Object {
name: string;
strict: boolean;
modifiers: java_util_Set<java_lang_module_ModuleDescriptor_Modifier>;
open: boolean;
automatic: boolean;
packages: java_util_Set<string>;
requires: java_util_Map<string, java_lang_module_ModuleDescriptor_Requires>;
exports: java_util_Map<string, java_lang_module_ModuleDescriptor_Exports>;
opens: java_util_Map<string, java_lang_module_ModuleDescriptor_Opens>;
uses: java_util_Set<string>;
provides: java_util_Map<string, java_lang_module_ModuleDescriptor_Provides>;
version: java_lang_module_ModuleDescriptor_Version;
rawVersionString: string;
mainClass: string;
static $assertionsDisabled: boolean;
requires(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: string): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>, arg1: string, arg2: java_lang_module_ModuleDescriptor_Version): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: java_lang_module_ModuleDescriptor_Requires): java_lang_module_ModuleDescriptor_Builder;
mainClass(arg0: string): java_lang_module_ModuleDescriptor_Builder;
version(arg0: string): java_lang_module_ModuleDescriptor_Builder;
version(arg0: java_lang_module_ModuleDescriptor_Version): java_lang_module_ModuleDescriptor_Builder;
packages(arg0: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: java_lang_module_ModuleDescriptor_Exports): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>, arg1: string, arg2: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: string, arg1: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: string): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>, arg1: string, arg2: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: string, arg1: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: string): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_lang_module_ModuleDescriptor_Opens): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
uses(arg0: string): java_lang_module_ModuleDescriptor_Builder;
provides(arg0: java_lang_module_ModuleDescriptor_Provides): java_lang_module_ModuleDescriptor_Builder;
provides(arg0: string, arg1: java_util_List<string>): java_lang_module_ModuleDescriptor_Builder;
build(): java_lang_module_ModuleDescriptor;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Set as java_util_Set } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Exports_Modifier } from 'java.lang.module.ModuleDescriptor.Exports';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Exports as java_lang_module_ModuleDescriptor_Exports } from 'java.lang.module.ModuleDescriptor';

  export class Exports extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Exports> {
mods: java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>;
source: string;
targets: java_util_Set<string>;
modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Exports): number;
compareTo(arg0: java_lang_Object): number;
source(): string;
isQualified(): boolean;
targets(): java_util_Set<string>;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Exports' {
import { Modifier as java_lang_module_ModuleDescriptor_Exports_Modifier } from 'java.lang.module.ModuleDescriptor.Exports';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Exports_Modifier> {
static SYNTHETIC: java_lang_module_ModuleDescriptor_Exports_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Exports_Modifier;
static $VALUES: java_lang_module_ModuleDescriptor_Exports_Modifier[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_module_ModuleDescriptor_Exports_Modifier[];
static valueOf(arg0: string): java_lang_module_ModuleDescriptor_Exports_Modifier;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Opens' {
import { Modifier as java_lang_module_ModuleDescriptor_Opens_Modifier } from 'java.lang.module.ModuleDescriptor.Opens';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Opens_Modifier> {
static SYNTHETIC: java_lang_module_ModuleDescriptor_Opens_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Opens_Modifier;
static $VALUES: java_lang_module_ModuleDescriptor_Opens_Modifier[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_module_ModuleDescriptor_Opens_Modifier[];
static valueOf(arg0: string): java_lang_module_ModuleDescriptor_Opens_Modifier;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Set as java_util_Set } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Opens_Modifier } from 'java.lang.module.ModuleDescriptor.Opens';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Opens as java_lang_module_ModuleDescriptor_Opens } from 'java.lang.module.ModuleDescriptor';

  export class Opens extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Opens> {
mods: java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>;
source: string;
targets: java_util_Set<string>;
modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Opens): number;
compareTo(arg0: java_lang_Object): number;
source(): string;
isQualified(): boolean;
targets(): java_util_Set<string>;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Provides as java_lang_module_ModuleDescriptor_Provides } from 'java.lang.module.ModuleDescriptor';
import { List as java_util_List } from 'java.util';

  export class Provides extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Provides> {
service: string;
providers: java_util_List<string>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Provides): number;
service(): string;
providers(): java_util_List<string>;

  }
}//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Modifier as java_lang_module_ModuleDescriptor_Modifier } from 'java.lang.module.ModuleDescriptor';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Modifier> {
static OPEN: java_lang_module_ModuleDescriptor_Modifier;
static AUTOMATIC: java_lang_module_ModuleDescriptor_Modifier;
static SYNTHETIC: java_lang_module_ModuleDescriptor_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Modifier;
static $VALUES: java_lang_module_ModuleDescriptor_Modifier[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_module_ModuleDescriptor_Modifier[];
static valueOf(arg0: string): java_lang_module_ModuleDescriptor_Modifier;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Configuration as java_lang_module_Configuration } from 'java.lang.module';
import { List as java_util_List, Set as java_util_Set, Optional as java_util_Optional, Map as java_util_Map } from 'java.util';
import { ModuleLayer as java_lang_ModuleLayer, ClassLoader as java_lang_ClassLoader, Module as java_lang_Module, Object as java_lang_Object } from 'java.lang';
import { Controller as java_lang_ModuleLayer_Controller } from 'java.lang.ModuleLayer';
import { Function as java_util_function_Function } from 'java.util.function';
import { ServicesCatalog as jdk_internal_module_ServicesCatalog } from 'jdk.internal.module';
import { ClassLoaderValue as jdk_internal_loader_ClassLoaderValue } from 'jdk.internal.loader';

  export class ModuleLayer extends java_lang_Object {
static EMPTY_LAYER: java_lang_ModuleLayer;
cf: java_lang_module_Configuration;
parents: java_util_List<java_lang_ModuleLayer>;
nameToModule: java_util_Map<string, java_lang_Module>;
allLayers: java_util_List<java_lang_ModuleLayer>;
modules: java_util_Set<java_lang_Module>;
servicesCatalog: jdk_internal_module_ServicesCatalog;
static CLV: jdk_internal_loader_ClassLoaderValue<java_util_List<java_lang_ModuleLayer>>;
static defineModulesWithOneLoader(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_lang_ClassLoader): java_lang_ModuleLayer_Controller;
defineModulesWithOneLoader(arg0: java_lang_module_Configuration, arg1: java_lang_ClassLoader): java_lang_ModuleLayer;
static defineModulesWithManyLoaders(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_lang_ClassLoader): java_lang_ModuleLayer_Controller;
defineModulesWithManyLoaders(arg0: java_lang_module_Configuration, arg1: java_lang_ClassLoader): java_lang_ModuleLayer;
findLoader(arg0: string): java_lang_ClassLoader;
toString(): string;
static empty(): java_lang_ModuleLayer;
static boot(): java_lang_ModuleLayer;
modules(): java_util_Set<java_lang_Module>;
static defineModules(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_util_function_Function<string, java_lang_ClassLoader>): java_lang_ModuleLayer_Controller;
defineModules(arg0: java_lang_module_Configuration, arg1: java_util_function_Function<string, java_lang_ClassLoader>): java_lang_ModuleLayer;
findModule(arg0: string): java_util_Optional<java_lang_Module>;
parents(): java_util_List<java_lang_ModuleLayer>;
configuration(): java_lang_module_Configuration;

  }
}//@ts-nocheck

declare module 'java.lang.module' {
import { Configuration as java_lang_module_Configuration, ModuleFinder as java_lang_module_ModuleFinder, ResolvedModule as java_lang_module_ResolvedModule } from 'java.lang.module';
import { List as java_util_List, Collection as java_util_Collection, Set as java_util_Set, Optional as java_util_Optional, Map as java_util_Map } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a source of configurable options and settings */

  export class Configuration extends java_lang_Object {
static EMPTY_CONFIGURATION: java_lang_module_Configuration;
parents: java_util_List<java_lang_module_Configuration>;
graph: java_util_Map<java_lang_module_ResolvedModule, java_util_Set<java_lang_module_ResolvedModule>>;
modules: java_util_Set<java_lang_module_ResolvedModule>;
nameToModule: java_util_Map<string, java_lang_module_ResolvedModule>;
targetPlatform: string;
allConfigurations: java_util_List<java_lang_module_Configuration>;
static $assertionsDisabled: boolean;
toString(): string;
static empty(): java_lang_module_Configuration;
static resolve(arg0: java_lang_module_ModuleFinder, arg1: java_util_List<java_lang_module_Configuration>, arg2: java_lang_module_ModuleFinder, arg3: java_util_Collection<string>): java_lang_module_Configuration;
resolve(arg0: java_lang_module_ModuleFinder, arg1: java_lang_module_ModuleFinder, arg2: java_util_Collection<string>): java_lang_module_Configuration;
modules(): java_util_Set<java_lang_module_ResolvedModule>;
findModule(arg0: string): java_util_Optional<java_lang_module_ResolvedModule>;
parents(): java_util_List<java_lang_module_Configuration>;
static resolveAndBind(arg0: java_lang_module_ModuleFinder, arg1: java_util_List<java_lang_module_Configuration>, arg2: java_lang_module_ModuleFinder, arg3: java_util_Collection<string>): java_lang_module_Configuration;
resolveAndBind(arg0: java_lang_module_ModuleFinder, arg1: java_lang_module_ModuleFinder, arg2: java_util_Collection<string>): java_lang_module_Configuration;

  }
}//@ts-nocheck

declare module 'java.lang.module' {
import { ModuleFinder as java_lang_module_ModuleFinder, ModuleReference as java_lang_module_ModuleReference } from 'java.lang.module';
import { Set as java_util_Set, Optional as java_util_Optional } from 'java.util';
import { Path as java_nio_file_Path } from 'java.nio.file';

  export class ModuleFinder {

static ofSystem(): java_lang_module_ModuleFinder;
static compose(...arg0: java_lang_module_ModuleFinder[]): java_lang_module_ModuleFinder;
findAll(): java_util_Set<java_lang_module_ModuleReference>;
static of(...arg0: java_nio_file_Path[]): java_lang_module_ModuleFinder;
find(arg0: string): java_util_Optional<java_lang_module_ModuleReference>;

  }
}//@ts-nocheck

declare module 'java.lang.module' {
import { ModuleDescriptor as java_lang_module_ModuleDescriptor, ModuleReader as java_lang_module_ModuleReader } from 'java.lang.module';
import { Optional as java_util_Optional } from 'java.util';
import { URI as java_net_URI } from 'java.net';
import { Object as java_lang_Object } from 'java.lang';

  export class ModuleReference extends java_lang_Object {
descriptor: java_lang_module_ModuleDescriptor;
location: java_net_URI;
descriptor(): java_lang_module_ModuleDescriptor;
open(): java_lang_module_ModuleReader;
location(): java_util_Optional<java_net_URI>;

  }
}//@ts-nocheck

declare module 'java.lang.module' {
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Optional as java_util_Optional } from 'java.util';
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { InputStream as java_io_InputStream, Closeable as java_io_Closeable } from 'java.io';
import { URI as java_net_URI } from 'java.net';

  export class ModuleReader implements java_io_Closeable {

list(): java_util_stream_Stream<string>;
read(arg0: string): java_util_Optional<java_nio_ByteBuffer>;
close(): void;
open(arg0: string): java_util_Optional<java_io_InputStream>;
find(arg0: string): java_util_Optional<java_net_URI>;
release(arg0: java_nio_ByteBuffer): void;

  }
}//@ts-nocheck

declare module 'java.lang.module' {
import { Object as java_lang_Object } from 'java.lang';
import { Set as java_util_Set } from 'java.util';
import { ResolvedModule as java_lang_module_ResolvedModule, ModuleReference as java_lang_module_ModuleReference, Configuration as java_lang_module_Configuration } from 'java.lang.module';

  export class ResolvedModule extends java_lang_Object {
cf: java_lang_module_Configuration;
mref: java_lang_module_ModuleReference;
name(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
reads(): java_util_Set<java_lang_module_ResolvedModule>;
reference(): java_lang_module_ModuleReference;
configuration(): java_lang_module_Configuration;

  }
}//@ts-nocheck

declare module 'java.lang.ModuleLayer' {
import { Module as java_lang_Module, ModuleLayer as java_lang_ModuleLayer, Object as java_lang_Object } from 'java.lang';
import { Controller as java_lang_ModuleLayer_Controller } from 'java.lang.ModuleLayer';

  export class Controller extends java_lang_Object {
layer: java_lang_ModuleLayer;
addReads(arg0: java_lang_Module, arg1: java_lang_Module): java_lang_ModuleLayer_Controller;
addExports(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): java_lang_ModuleLayer_Controller;
addOpens(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): java_lang_ModuleLayer_Controller;
layer(): java_lang_ModuleLayer;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Package as java_lang_Package, Class as java_lang_Class, Object as java_lang_Object, NamedPackage as java_lang_NamedPackage } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { URL as java_net_URL } from 'java.net';
import { VersionInfo as java_lang_Package_VersionInfo } from 'java.lang.Package';
import { AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class Package extends java_lang_NamedPackage implements java_lang_reflect_AnnotatedElement {
versionInfo: java_lang_Package_VersionInfo;
packageInfo: java_lang_Class<java_lang_Object>;
specificationTitle: string;
specificationVersion: string;
specificationVendor: string;
implementationTitle: string;
implementationVersion: string;
implementationVendor: string;
name: string;
static package: java_lang_Package;
annotation: A;
annotationsByType: A[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: A;
declaredAnnotationsByType: A[];
declaredAnnotations: java_lang_annotation_Annotation[];
static packages: java_lang_Package[];
class: java_lang_Class<java_lang_Object>;
getSpecificationTitle(): string;
getSpecificationVersion(): string;
getSpecificationVendor(): string;
getImplementationTitle(): string;
getImplementationVersion(): string;
getImplementationVendor(): string;
isCompatibleWith(arg0: string): boolean;
toString(): string;
hashCode(): number;
getName(): string;
static getPackage(arg0: string): java_lang_Package;
getAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getDeclaredAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
static getPackages(): java_lang_Package[];
isSealed(): boolean;
isSealed(arg0: java_net_URL): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.Package' {
import { VersionInfo as java_lang_Package_VersionInfo } from 'java.lang.Package';
import { URL as java_net_URL } from 'java.net';
import { Object as java_lang_Object } from 'java.lang';

  export class VersionInfo extends java_lang_Object {
static NULL_VERSION_INFO: java_lang_Package_VersionInfo;
specTitle: string;
specVersion: string;
specVendor: string;
implTitle: string;
implVersion: string;
implVendor: string;
sealBase: java_net_URL;


  }
}//@ts-nocheck

declare module 'java.lang' {
import { Module as java_lang_Module, Object as java_lang_Object } from 'java.lang';

  export class NamedPackage extends java_lang_Object {
name: string;
module: java_lang_Module;


  }
}//@ts-nocheck

declare module 'java.lang.annotation' {
import { RetentionPolicy as java_lang_annotation_RetentionPolicy } from 'java.lang.annotation';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class RetentionPolicy extends java_lang_Enum<java_lang_annotation_RetentionPolicy> {
static SOURCE: java_lang_annotation_RetentionPolicy;
static CLASS: java_lang_annotation_RetentionPolicy;
static RUNTIME: java_lang_annotation_RetentionPolicy;
static $VALUES: java_lang_annotation_RetentionPolicy[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_annotation_RetentionPolicy[];
static valueOf(arg0: string): java_lang_annotation_RetentionPolicy;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.ClassLoader' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Deque as java_util_Deque } from 'java.util';
import { NativeLibrary as java_lang_ClassLoader_NativeLibrary } from 'java.lang.ClassLoader';

  export class NativeLibrary extends java_lang_Object {
fromClass: java_lang_Class<java_lang_Object>;
name: string;
isBuiltin: boolean;
handle: number;
jniVersion: number;
static nativeLibraryContext: java_util_Deque<java_lang_ClassLoader_NativeLibrary>;


  }
}//@ts-nocheck

declare module 'java.lang.Class' {
import { Field as java_lang_reflect_Field, Method as java_lang_reflect_Method, Constructor as java_lang_reflect_Constructor } from 'java.lang.reflect';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class ReflectionData<T extends java_lang_Object> extends java_lang_Object {
declaredFields: java_lang_reflect_Field[];
publicFields: java_lang_reflect_Field[];
declaredMethods: java_lang_reflect_Method[];
publicMethods: java_lang_reflect_Method[];
declaredConstructors: java_lang_reflect_Constructor<T>[];
publicConstructors: java_lang_reflect_Constructor<T>[];
declaredPublicFields: java_lang_reflect_Field[];
declaredPublicMethods: java_lang_reflect_Method[];
interfaces: java_lang_Class<java_lang_Object>[];
simpleName: string;
canonicalName: string;
static NULL_SENTINEL: string;
redefinedCount: number;


  }
}//@ts-nocheck

declare module 'java.lang.Class' {
import { Map as java_util_Map } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class AnnotationData extends java_lang_Object {
annotations: java_util_Map<java_lang_Class<java_lang_annotation_Annotation>, java_lang_annotation_Annotation>;
declaredAnnotations: java_util_Map<java_lang_Class<java_lang_annotation_Annotation>, java_lang_annotation_Annotation>;
redefinedCount: number;


  }
}//@ts-nocheck

declare module 'java.lang.ClassValue' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BiFunction as java_util_function_BiFunction, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_lang_ClassValue_Entry, Identity as java_lang_ClassValue_Identity } from 'java.lang.ClassValue';
import { WeakHashMap as java_util_WeakHashMap } from 'java.util';

  export class ClassValueMap extends java_util_WeakHashMap<java_lang_ClassValue_Identity, java_lang_ClassValue_Entry<java_lang_Object>> {
cacheArray: java_lang_ClassValue_Entry<java_lang_Object>[];
cacheLoad: number;
cacheLoadLimit: number;
static INITIAL_ENTRIES: number;
static CACHE_LOAD_LIMIT: number;
static PROBE_LIMIT: number;
static $assertionsDisabled: boolean;
class: java_lang_Class<java_lang_Object>;
orDefault: V;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
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

  }
}//@ts-nocheck

declare module 'java.lang.ClassValue' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entry as java_lang_ClassValue_Entry, Version as java_lang_ClassValue_Version } from 'java.lang.ClassValue';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';

  export class Entry<T extends java_lang_Object> extends java_lang_ref_WeakReference<java_lang_ClassValue_Version<T>> {
value: java_lang_Object;
static DEAD_ENTRY: java_lang_ClassValue_Entry<java_lang_Object>;
static $assertionsDisabled: boolean;
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

declare module 'java.lang.ClassValue' {
import { ClassValue as java_lang_ClassValue, Object as java_lang_Object } from 'java.lang';
import { Entry as java_lang_ClassValue_Entry } from 'java.lang.ClassValue';

  export class Version<T extends java_lang_Object> extends java_lang_Object {
classValue: java_lang_ClassValue<T>;
promise: java_lang_ClassValue_Entry<T>;


  }
}//@ts-nocheck

declare module 'java.lang' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Entry as java_lang_ClassValue_Entry, Identity as java_lang_ClassValue_Identity, Version as java_lang_ClassValue_Version } from 'java.lang.ClassValue';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';

  export class ClassValue<T extends java_lang_Object> extends java_lang_Object {
static EMPTY_CACHE: java_lang_ClassValue_Entry<java_lang_Object>[];
hashCodeForCache: number;
static nextHashCode: java_util_concurrent_atomic_AtomicInteger;
static HASH_INCREMENT: number;
static HASH_MASK: number;
identity: java_lang_ClassValue_Identity;
version: java_lang_ClassValue_Version<T>;
static CRITICAL_SECTION: java_lang_Object;
remove(arg0: java_lang_Class<java_lang_Object>): void;
get(arg0: java_lang_Class<java_lang_Object>): T;

  }
}//@ts-nocheck

declare module 'java.lang.ClassValue' {
import { Object as java_lang_Object } from 'java.lang';

  export class Identity extends java_lang_Object {



  }
}//@ts-nocheck

declare module 'java.lang.invoke' {
import { Object as java_lang_Object, Class as java_lang_Class, Integer as java_lang_Integer, ArrayIndexOutOfBoundsException as java_lang_ArrayIndexOutOfBoundsException } from 'java.lang';
import { List as java_util_List } from 'java.util';
import { AccessMode as java_lang_invoke_VarHandle_AccessMode, TypesAndInvokers as java_lang_invoke_VarHandle_TypesAndInvokers } from 'java.lang.invoke.VarHandle';
import { MethodType as java_lang_invoke_MethodType, MethodHandle as java_lang_invoke_MethodHandle, VarForm as java_lang_invoke_VarForm } from 'java.lang.invoke';
import { BiFunction as java_util_function_BiFunction } from 'java.util.function';

  export class VarHandle extends java_lang_Object {
vform: java_lang_invoke_VarForm;
typesAndInvokers: java_lang_invoke_VarHandle_TypesAndInvokers;
static AIOOBE_SUPPLIER: java_util_function_BiFunction<string, java_util_List<java_lang_Integer>, java_lang_ArrayIndexOutOfBoundsException>;
static VFORM_OFFSET: number;
static $assertionsDisabled: boolean;
volatile: java_lang_Object;
opaque: java_lang_Object;
acquire: java_lang_Object;
andSet: java_lang_Object;
andSetAcquire: java_lang_Object;
andSetRelease: java_lang_Object;
andAdd: java_lang_Object;
andAddAcquire: java_lang_Object;
andAddRelease: java_lang_Object;
andBitwiseOr: java_lang_Object;
andBitwiseOrAcquire: java_lang_Object;
andBitwiseOrRelease: java_lang_Object;
andBitwiseAnd: java_lang_Object;
andBitwiseAndAcquire: java_lang_Object;
andBitwiseAndRelease: java_lang_Object;
andBitwiseXor: java_lang_Object;
andBitwiseXorAcquire: java_lang_Object;
andBitwiseXorRelease: java_lang_Object;
get(...arg0: java_lang_Object[]): java_lang_Object;
static fullFence(): void;
set(...arg0: java_lang_Object[]): void;
getVolatile(...arg0: java_lang_Object[]): java_lang_Object;
setVolatile(...arg0: java_lang_Object[]): void;
getOpaque(...arg0: java_lang_Object[]): java_lang_Object;
setOpaque(...arg0: java_lang_Object[]): void;
getAcquire(...arg0: java_lang_Object[]): java_lang_Object;
setRelease(...arg0: java_lang_Object[]): void;
compareAndSet(...arg0: java_lang_Object[]): boolean;
compareAndExchange(...arg0: java_lang_Object[]): java_lang_Object;
compareAndExchangeAcquire(...arg0: java_lang_Object[]): java_lang_Object;
compareAndExchangeRelease(...arg0: java_lang_Object[]): java_lang_Object;
weakCompareAndSetPlain(...arg0: java_lang_Object[]): boolean;
weakCompareAndSet(...arg0: java_lang_Object[]): boolean;
weakCompareAndSetAcquire(...arg0: java_lang_Object[]): boolean;
weakCompareAndSetRelease(...arg0: java_lang_Object[]): boolean;
getAndSet(...arg0: java_lang_Object[]): java_lang_Object;
getAndSetAcquire(...arg0: java_lang_Object[]): java_lang_Object;
getAndSetRelease(...arg0: java_lang_Object[]): java_lang_Object;
getAndAdd(...arg0: java_lang_Object[]): java_lang_Object;
getAndAddAcquire(...arg0: java_lang_Object[]): java_lang_Object;
getAndAddRelease(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseOr(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseOrAcquire(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseOrRelease(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseAnd(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseAndAcquire(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseAndRelease(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseXor(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseXorAcquire(...arg0: java_lang_Object[]): java_lang_Object;
getAndBitwiseXorRelease(...arg0: java_lang_Object[]): java_lang_Object;
varType(): java_lang_Class<java_lang_Object>;
coordinateTypes(): java_util_List<java_lang_Class<java_lang_Object>>;
accessModeType(arg0: java_lang_invoke_VarHandle_AccessMode): java_lang_invoke_MethodType;
isAccessModeSupported(arg0: java_lang_invoke_VarHandle_AccessMode): boolean;
toMethodHandle(arg0: java_lang_invoke_VarHandle_AccessMode): java_lang_invoke_MethodHandle;
static acquireFence(): void;
static releaseFence(): void;
static loadLoadFence(): void;
static storeStoreFence(): void;

  }
}//@ts-nocheck

declare module 'java.lang.invoke.VarHandle' {
import { AccessMode as java_lang_invoke_VarHandle_AccessMode, AccessType as java_lang_invoke_VarHandle_AccessType } from 'java.lang.invoke.VarHandle';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
import { Map as java_util_Map } from 'java.util';

  export class AccessMode extends java_lang_Enum<java_lang_invoke_VarHandle_AccessMode> {
static GET: java_lang_invoke_VarHandle_AccessMode;
static SET: java_lang_invoke_VarHandle_AccessMode;
static GET_VOLATILE: java_lang_invoke_VarHandle_AccessMode;
static SET_VOLATILE: java_lang_invoke_VarHandle_AccessMode;
static GET_ACQUIRE: java_lang_invoke_VarHandle_AccessMode;
static SET_RELEASE: java_lang_invoke_VarHandle_AccessMode;
static GET_OPAQUE: java_lang_invoke_VarHandle_AccessMode;
static SET_OPAQUE: java_lang_invoke_VarHandle_AccessMode;
static COMPARE_AND_SET: java_lang_invoke_VarHandle_AccessMode;
static COMPARE_AND_EXCHANGE: java_lang_invoke_VarHandle_AccessMode;
static COMPARE_AND_EXCHANGE_ACQUIRE: java_lang_invoke_VarHandle_AccessMode;
static COMPARE_AND_EXCHANGE_RELEASE: java_lang_invoke_VarHandle_AccessMode;
static WEAK_COMPARE_AND_SET_PLAIN: java_lang_invoke_VarHandle_AccessMode;
static WEAK_COMPARE_AND_SET: java_lang_invoke_VarHandle_AccessMode;
static WEAK_COMPARE_AND_SET_ACQUIRE: java_lang_invoke_VarHandle_AccessMode;
static WEAK_COMPARE_AND_SET_RELEASE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_SET: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_SET_ACQUIRE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_SET_RELEASE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_ADD: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_ADD_ACQUIRE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_ADD_RELEASE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_OR: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_OR_RELEASE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_OR_ACQUIRE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_AND: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_AND_RELEASE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_AND_ACQUIRE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_XOR: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_XOR_RELEASE: java_lang_invoke_VarHandle_AccessMode;
static GET_AND_BITWISE_XOR_ACQUIRE: java_lang_invoke_VarHandle_AccessMode;
static methodNameToAccessMode: java_util_Map<string, java_lang_invoke_VarHandle_AccessMode>;
methodName: string;
at: java_lang_invoke_VarHandle_AccessType;
static $VALUES: java_lang_invoke_VarHandle_AccessMode[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_invoke_VarHandle_AccessMode[];
methodName(): string;
static valueOf(arg0: string): java_lang_invoke_VarHandle_AccessMode;
static valueFromMethodName(arg0: string): java_lang_invoke_VarHandle_AccessMode;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.invoke.VarHandle' {
import { AccessType as java_lang_invoke_VarHandle_AccessType } from 'java.lang.invoke.VarHandle';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class AccessType extends java_lang_Enum<java_lang_invoke_VarHandle_AccessType> {
static GET: java_lang_invoke_VarHandle_AccessType;
static SET: java_lang_invoke_VarHandle_AccessType;
static COMPARE_AND_SET: java_lang_invoke_VarHandle_AccessType;
static COMPARE_AND_EXCHANGE: java_lang_invoke_VarHandle_AccessType;
static GET_AND_UPDATE: java_lang_invoke_VarHandle_AccessType;
returnType: java_lang_Class<java_lang_Object>;
isMonomorphicInReturnType: boolean;
static $VALUES: java_lang_invoke_VarHandle_AccessType[];
class: java_lang_Class<java_lang_Object>;
static values(): java_lang_invoke_VarHandle_AccessType[];
static valueOf(arg0: string): java_lang_invoke_VarHandle_AccessType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.invoke' {
import { MethodType as java_lang_invoke_MethodType, MemberName as java_lang_invoke_MemberName } from 'java.lang.invoke';
import { Object as java_lang_Object } from 'java.lang';

  export class VarForm extends java_lang_Object {
methodType_table: java_lang_invoke_MethodType[];
memberName_table: java_lang_invoke_MemberName[];
methodType_V_table: java_lang_invoke_MethodType[];
static $assertionsDisabled: boolean;


  }
}//@ts-nocheck

declare module 'java.lang.invoke.VarHandle' {
import { MethodType as java_lang_invoke_MethodType, MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { Object as java_lang_Object } from 'java.lang';

  export class TypesAndInvokers extends java_lang_Object {
methodType_table: java_lang_invoke_MethodType[];
methodHandle_table: java_lang_invoke_MethodHandle[];


  }
}//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, IndexOutOfBoundsException as java_lang_IndexOutOfBoundsException } from 'java.lang';

  export class ArrayIndexOutOfBoundsException extends java_lang_IndexOutOfBoundsException {
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
constructor();
constructor(arg0: string);
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, RuntimeException as java_lang_RuntimeException } from 'java.lang';

  export class IndexOutOfBoundsException extends java_lang_RuntimeException {
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
constructor();
constructor(arg0: string);
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';

  export class RuntimeException extends java_lang_Exception {
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

declare module 'java.lang' {
import { Object as java_lang_Object, Byte as java_lang_Byte, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Byte extends java_lang_Number implements java_lang_Comparable<java_lang_Byte> {
static MIN_VALUE: number;
static MAX_VALUE: number;
static TYPE: java_lang_Class<java_lang_Byte>;
value: number;
static SIZE: number;
static BYTES: number;
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
static toString(arg0: number): string;
static hashCode(arg0: number): number;
hashCode(): number;
compareTo(arg0: java_lang_Byte): number;
compareTo(arg0: java_lang_Object): number;
byteValue(): number;
shortValue(): number;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
static valueOf(arg0: string, arg1: number): java_lang_Byte;
static valueOf(arg0: string): java_lang_Byte;
static valueOf(arg0: number): java_lang_Byte;
static decode(arg0: string): java_lang_Byte;
static compare(arg0: number, arg1: number): number;
static toUnsignedInt(arg0: number): number;
static toUnsignedLong(arg0: number): number;
static parseByte(arg0: string): number;
static parseByte(arg0: string, arg1: number): number;
static compareUnsigned(arg0: number, arg1: number): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Short as java_lang_Short, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Short extends java_lang_Number implements java_lang_Comparable<java_lang_Short> {
static MIN_VALUE: number;
static MAX_VALUE: number;
static TYPE: java_lang_Class<java_lang_Short>;
value: number;
static SIZE: number;
static BYTES: number;
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
static toString(arg0: number): string;
hashCode(): number;
static hashCode(arg0: number): number;
static reverseBytes(arg0: number): number;
compareTo(arg0: java_lang_Short): number;
compareTo(arg0: java_lang_Object): number;
byteValue(): number;
shortValue(): number;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
static valueOf(arg0: string, arg1: number): java_lang_Short;
static valueOf(arg0: string): java_lang_Short;
static valueOf(arg0: number): java_lang_Short;
static decode(arg0: string): java_lang_Short;
static compare(arg0: number, arg1: number): number;
static toUnsignedInt(arg0: number): number;
static toUnsignedLong(arg0: number): number;
static compareUnsigned(arg0: number, arg1: number): number;
static parseShort(arg0: string, arg1: number): number;
static parseShort(arg0: string): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Float as java_lang_Float, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Float extends java_lang_Number implements java_lang_Comparable<java_lang_Float> {
static POSITIVE_INFINITY: number;
static NEGATIVE_INFINITY: number;
static NaN: number;
static MAX_VALUE: number;
static MIN_NORMAL: number;
static MIN_VALUE: number;
static MAX_EXPONENT: number;
static MIN_EXPONENT: number;
static SIZE: number;
static BYTES: number;
static TYPE: java_lang_Class<java_lang_Float>;
value: number;
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
static toString(arg0: number): string;
toString(): string;
hashCode(): number;
static hashCode(arg0: number): number;
static min(arg0: number, arg1: number): number;
static max(arg0: number, arg1: number): number;
static floatToRawIntBits(arg0: number): number;
static floatToIntBits(arg0: number): number;
static intBitsToFloat(arg0: number): number;
compareTo(arg0: java_lang_Float): number;
compareTo(arg0: java_lang_Object): number;
byteValue(): number;
shortValue(): number;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
static valueOf(arg0: number): java_lang_Float;
static valueOf(arg0: string): java_lang_Float;
static toHexString(arg0: number): string;
static compare(arg0: number, arg1: number): number;
static isNaN(arg0: number): boolean;
isNaN(): boolean;
static parseFloat(arg0: string): number;
static isInfinite(arg0: number): boolean;
isInfinite(): boolean;
static isFinite(arg0: number): boolean;
static sum(arg0: number, arg1: number): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string);
constructor(arg0: number);
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.lang.System.Logger' {
import { Level as java_lang_System_Logger_Level } from 'java.lang.System.Logger';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Level extends java_lang_Enum<java_lang_System_Logger_Level> {
static ALL: java_lang_System_Logger_Level;
static TRACE: java_lang_System_Logger_Level;
static DEBUG: java_lang_System_Logger_Level;
static INFO: java_lang_System_Logger_Level;
static WARNING: java_lang_System_Logger_Level;
static ERROR: java_lang_System_Logger_Level;
static OFF: java_lang_System_Logger_Level;
severity: number;
static $VALUES: java_lang_System_Logger_Level[];
severity: number;
name: string;
class: java_lang_Class<java_lang_Object>;
getSeverity(): number;
static values(): java_lang_System_Logger_Level[];
static valueOf(arg0: string): java_lang_System_Logger_Level;
getName(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.lang.System' {
import { Level as java_lang_System_Logger_Level } from 'java.lang.System.Logger';
import { ResourceBundle as java_util_ResourceBundle } from 'java.util';
import { Object as java_lang_Object, Throwable as java_lang_Throwable } from 'java.lang';
import { Supplier as java_util_function_Supplier } from 'java.util.function';

  export class Logger {
name: string;
isLoggable(arg0: java_lang_System_Logger_Level): boolean;
log(arg0: java_lang_System_Logger_Level, arg1: java_util_ResourceBundle, arg2: string, ...arg3: java_lang_Object[]): void;
log(arg0: java_lang_System_Logger_Level, arg1: java_util_function_Supplier<string>, arg2: java_lang_Throwable): void;
log(arg0: java_lang_System_Logger_Level, arg1: string, ...arg2: java_lang_Object[]): void;
log(arg0: java_lang_System_Logger_Level, arg1: java_util_ResourceBundle, arg2: string, arg3: java_lang_Throwable): void;
log(arg0: java_lang_System_Logger_Level, arg1: string, arg2: java_lang_Throwable): void;
log(arg0: java_lang_System_Logger_Level, arg1: string): void;
log(arg0: java_lang_System_Logger_Level, arg1: java_util_function_Supplier<string>): void;
log(arg0: java_lang_System_Logger_Level, arg1: java_lang_Object): void;
getName(): string;

  }
}//@ts-nocheck

declare module 'java.lang.Character' {
import { Object as java_lang_Object } from 'java.lang';

  export class Subset extends java_lang_Object {
name: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { Class as java_lang_Class, Void as java_lang_Void, Object as java_lang_Object } from 'java.lang';

  export class Void extends java_lang_Object {
static TYPE: java_lang_Class<java_lang_Void>;


  }
}//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BasicPermission as java_security_BasicPermission } from 'java.security';

  export class RuntimePermission extends java_security_BasicPermission {
static serialVersionUID: number;
name: string;
class: java_lang_Class<java_lang_Object>;
checkGuard(arg0: java_lang_Object): void;
toString(): string;
/** Returns the unique fully qualified name of this Permission */
getName(): string;
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

declare module 'java.lang' {
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, ReflectiveOperationException as java_lang_ReflectiveOperationException } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';

  export class ClassNotFoundException extends java_lang_ReflectiveOperationException {
static serialVersionUID: number;
ex: java_lang_Throwable;
cause: java_lang_Throwable;
exception: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
getCause(): java_lang_Throwable;
getException(): java_lang_Throwable;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
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
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string);
constructor();
  }
}//@ts-nocheck

declare module 'java.lang.Runtime' {
import { Version as java_lang_Runtime_Version } from 'java.lang.Runtime';
import { Object as java_lang_Object, Integer as java_lang_Integer, Comparable as java_lang_Comparable } from 'java.lang';
import { List as java_util_List, Optional as java_util_Optional } from 'java.util';

  export class Version extends java_lang_Object implements java_lang_Comparable<java_lang_Runtime_Version> {
version: java_util_List<java_lang_Integer>;
pre: java_util_Optional<string>;
build: java_util_Optional<java_lang_Integer>;
optional: java_util_Optional<string>;
feature(): number;
interim(): number;
patch(): number;
major(): number;
minor(): number;
compareToIgnoreOptional(arg0: java_lang_Runtime_Version): number;
equalsIgnoreOptional(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
version(): java_util_List<java_lang_Integer>;
hashCode(): number;
compareTo(arg0: java_lang_Runtime_Version): number;
compareTo(arg0: java_lang_Object): number;
update(): number;
security(): number;
pre(): java_util_Optional<string>;
build(): java_util_Optional<java_lang_Integer>;
optional(): java_util_Optional<string>;
static parse(arg0: string): java_lang_Runtime_Version;

  }
}//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, RuntimeException as java_lang_RuntimeException } from 'java.lang';

  export class IllegalStateException extends java_lang_RuntimeException {
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
}