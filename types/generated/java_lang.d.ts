//@ts-nocheck

declare module 'java.lang' {  
  export type Object = {}
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object } from 'java.lang';

  export class Comparable<T extends java_lang_Object> {

compareTo(arg0: T): number;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream, Serializable as java_io_Serializable } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object } from 'java.lang';

  export class Throwable extends java_lang_Object implements java_io_Serializable {
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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.lang' {


  export class Runnable {

run(): void;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Integer as java_lang_Integer, CharSequence as java_lang_CharSequence, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Integer extends java_lang_Number implements java_lang_Comparable<java_lang_Integer> {
static MIN_VALUE: number;
static MAX_VALUE: number;
static TYPE: java_lang_Class<java_lang_Integer>;
static SIZE: number;
static BYTES: number;
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
}
//@ts-nocheck

declare module 'java.lang' {
import { Module as java_lang_Module, Class as java_lang_Class, Object as java_lang_Object, ClassLoader as java_lang_ClassLoader, Package as java_lang_Package } from 'java.lang';
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { TypeVariable as java_lang_reflect_TypeVariable, Type as java_lang_reflect_Type, Method as java_lang_reflect_Method, Constructor as java_lang_reflect_Constructor, Field as java_lang_reflect_Field, AnnotatedType as java_lang_reflect_AnnotatedType, GenericDeclaration as java_lang_reflect_GenericDeclaration, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';
import { InputStream as java_io_InputStream, Serializable as java_io_Serializable } from 'java.io';
import { URL as java_net_URL } from 'java.net';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Class<T extends java_lang_Object> extends java_lang_Object implements java_io_Serializable, java_lang_reflect_GenericDeclaration, java_lang_reflect_Type, java_lang_reflect_AnnotatedElement {
name: string;
module: java_lang_Module;
protectionDomain: java_security_ProtectionDomain;
modifiers: number;
superclass: java_lang_Class<java_lang_Object>;
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
getName(): string;
static forName(arg0: java_lang_Module, arg1: string): java_lang_Class<java_lang_Object>;
static forName(arg0: string, arg1: boolean, arg2: java_lang_ClassLoader): java_lang_Class<java_lang_Object>;
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
}
//@ts-nocheck

declare module 'java.lang' {
import { Module as java_lang_Module, Class as java_lang_Class, Object as java_lang_Object, ClassLoader as java_lang_ClassLoader, ModuleLayer as java_lang_ModuleLayer } from 'java.lang';
import { InputStream as java_io_InputStream } from 'java.io';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { ModuleDescriptor as java_lang_module_ModuleDescriptor } from 'java.lang.module';
import { Set as java_util_Set } from 'java.util';
import { AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class Module extends java_lang_Object implements java_lang_reflect_AnnotatedElement {
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
getName(): string;
toString(): string;
addReads(arg0: java_lang_Module): java_lang_Module;
addExports(arg0: string, arg1: java_lang_Module): java_lang_Module;
addOpens(arg0: string, arg1: java_lang_Module): java_lang_Module;
addUses(arg0: java_lang_Class<java_lang_Object>): java_lang_Module;
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
}
//@ts-nocheck

declare module 'java.lang' {
import { Class as java_lang_Class, Object as java_lang_Object, ClassLoader as java_lang_ClassLoader, Module as java_lang_Module, Package as java_lang_Package } from 'java.lang';
import { InputStream as java_io_InputStream } from 'java.io';
import { URL as java_net_URL } from 'java.net';
import { Enumeration as java_util_Enumeration } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class ClassLoader extends java_lang_Object {
name: string;
static platformClassLoader: java_lang_ClassLoader;
static systemClassLoader: java_lang_ClassLoader;
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
getName(): string;
loadClass(arg0: string): java_lang_Class<java_lang_Object>;
static getPlatformClassLoader(): java_lang_ClassLoader;
static getSystemClassLoader(): java_lang_ClassLoader;
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
}
//@ts-nocheck

declare module 'java.lang' {


  export class AutoCloseable {

close(): void;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Class as java_lang_Class, Enum as java_lang_Enum, Comparable as java_lang_Comparable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Enum<E extends java_lang_Enum<E>> extends java_lang_Object implements java_lang_Comparable<E>, java_io_Serializable {
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
}
//@ts-nocheck

declare module 'java.lang' {
import { Package as java_lang_Package, Class as java_lang_Class, Object as java_lang_Object, NamedPackage as java_lang_NamedPackage } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { URL as java_net_URL } from 'java.net';
import { AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class Package extends java_lang_NamedPackage implements java_lang_reflect_AnnotatedElement {
name: string;
static package: java_lang_Package;
annotation: A;
annotationsByType: A[];
annotations: java_lang_annotation_Annotation[];
declaredAnnotation: A;
declaredAnnotationsByType: A[];
declaredAnnotations: java_lang_annotation_Annotation[];
static packages: java_lang_Package[];
specificationTitle: string;
specificationVersion: string;
specificationVendor: string;
implementationTitle: string;
implementationVersion: string;
implementationVendor: string;
class: java_lang_Class<java_lang_Object>;
getName(): string;
toString(): string;
hashCode(): number;
static getPackage(arg0: string): java_lang_Package;
getAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
getAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A[];
getAnnotations(): java_lang_annotation_Annotation[];
getDeclaredAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getDeclaredAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A[];
getDeclaredAnnotations(): java_lang_annotation_Annotation[];
static getPackages(): java_lang_Package[];
isSealed(arg0: java_net_URL): boolean;
isSealed(): boolean;
getSpecificationTitle(): string;
getSpecificationVersion(): string;
getSpecificationVendor(): string;
getImplementationTitle(): string;
getImplementationVersion(): string;
getImplementationVendor(): string;
isCompatibleWith(arg0: string): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.lang.annotation' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Annotation {

equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
annotationType(): java_lang_Class<java_lang_annotation_Annotation>;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object } from 'java.lang';

  export class NamedPackage extends java_lang_Object {



  }
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.lang.module' {
import { Set as java_util_Set, Optional as java_util_Optional } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Modifier, Version as java_lang_module_ModuleDescriptor_Version, Exports as java_lang_module_ModuleDescriptor_Exports, Opens as java_lang_module_ModuleDescriptor_Opens, Provides as java_lang_module_ModuleDescriptor_Provides, Requires as java_lang_module_ModuleDescriptor_Requires, Builder as java_lang_module_ModuleDescriptor_Builder } from 'java.lang.module.ModuleDescriptor';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { ModuleDescriptor as java_lang_module_ModuleDescriptor } from 'java.lang.module';
import { InputStream as java_io_InputStream } from 'java.io';
import { Supplier as java_util_function_Supplier } from 'java.util.function';
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';

  export class ModuleDescriptor extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor> {

modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Modifier>;
name(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
version(): java_util_Optional<java_lang_module_ModuleDescriptor_Version>;
hashCode(): number;
compareTo(arg0: java_lang_module_ModuleDescriptor): number;
compareTo(arg0: java_lang_Object): number;
packages(): java_util_Set<string>;
isOpen(): boolean;
static read(arg0: java_io_InputStream): java_lang_module_ModuleDescriptor;
static read(arg0: java_io_InputStream, arg1: java_util_function_Supplier<java_util_Set<string>>): java_lang_module_ModuleDescriptor;
static read(arg0: java_nio_ByteBuffer): java_lang_module_ModuleDescriptor;
static read(arg0: java_nio_ByteBuffer, arg1: java_util_function_Supplier<java_util_Set<string>>): java_lang_module_ModuleDescriptor;
exports(): java_util_Set<java_lang_module_ModuleDescriptor_Exports>;
opens(): java_util_Set<java_lang_module_ModuleDescriptor_Opens>;
isAutomatic(): boolean;
uses(): java_util_Set<string>;
provides(): java_util_Set<java_lang_module_ModuleDescriptor_Provides>;
requires(): java_util_Set<java_lang_module_ModuleDescriptor_Requires>;
mainClass(): java_util_Optional<string>;
rawVersion(): java_util_Optional<string>;
toNameAndVersion(): string;
static newModule(arg0: string, arg1: java_util_Set<java_lang_module_ModuleDescriptor_Modifier>): java_lang_module_ModuleDescriptor_Builder;
static newModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;
static newOpenModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;
static newAutomaticModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Modifier as java_lang_module_ModuleDescriptor_Modifier } from 'java.lang.module.ModuleDescriptor';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Modifier> {
static OPEN: java_lang_module_ModuleDescriptor_Modifier;
static AUTOMATIC: java_lang_module_ModuleDescriptor_Modifier;
static SYNTHETIC: java_lang_module_ModuleDescriptor_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Modifier;
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
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Version as java_lang_module_ModuleDescriptor_Version } from 'java.lang.module.ModuleDescriptor';

  export class Version extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Version> {

equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Version): number;
compareTo(arg0: java_lang_Object): number;
static parse(arg0: string): java_lang_module_ModuleDescriptor_Version;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable } from 'java.lang';

  export class Appendable {

append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: string): java_lang_Appendable;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { CharBuffer as java_nio_CharBuffer } from 'java.nio';

  export class Readable {

read(arg0: java_nio_CharBuffer): number;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Set as java_util_Set } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Exports_Modifier } from 'java.lang.module.ModuleDescriptor.Exports';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Exports as java_lang_module_ModuleDescriptor_Exports } from 'java.lang.module.ModuleDescriptor';

  export class Exports extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Exports> {

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
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Exports' {
import { Modifier as java_lang_module_ModuleDescriptor_Exports_Modifier } from 'java.lang.module.ModuleDescriptor.Exports';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Exports_Modifier> {
static SYNTHETIC: java_lang_module_ModuleDescriptor_Exports_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Exports_Modifier;
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
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Set as java_util_Set } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Opens_Modifier } from 'java.lang.module.ModuleDescriptor.Opens';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Opens as java_lang_module_ModuleDescriptor_Opens } from 'java.lang.module.ModuleDescriptor';

  export class Opens extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Opens> {

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
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Opens' {
import { Modifier as java_lang_module_ModuleDescriptor_Opens_Modifier } from 'java.lang.module.ModuleDescriptor.Opens';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Opens_Modifier> {
static SYNTHETIC: java_lang_module_ModuleDescriptor_Opens_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Opens_Modifier;
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
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Provides as java_lang_module_ModuleDescriptor_Provides } from 'java.lang.module.ModuleDescriptor';
import { List as java_util_List } from 'java.util';

  export class Provides extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Provides> {

equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Provides): number;
service(): string;
providers(): java_util_List<string>;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Set as java_util_Set, Optional as java_util_Optional } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Requires_Modifier } from 'java.lang.module.ModuleDescriptor.Requires';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Requires as java_lang_module_ModuleDescriptor_Requires, Version as java_lang_module_ModuleDescriptor_Version } from 'java.lang.module.ModuleDescriptor';

  export class Requires extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Requires> {

modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>;
name(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Requires): number;
rawCompiledVersion(): java_util_Optional<string>;
compiledVersion(): java_util_Optional<java_lang_module_ModuleDescriptor_Version>;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Requires' {
import { Modifier as java_lang_module_ModuleDescriptor_Requires_Modifier } from 'java.lang.module.ModuleDescriptor.Requires';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Requires_Modifier> {
static TRANSITIVE: java_lang_module_ModuleDescriptor_Requires_Modifier;
static STATIC: java_lang_module_ModuleDescriptor_Requires_Modifier;
static SYNTHETIC: java_lang_module_ModuleDescriptor_Requires_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Requires_Modifier;
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
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Builder as java_lang_module_ModuleDescriptor_Builder, Version as java_lang_module_ModuleDescriptor_Version, Exports as java_lang_module_ModuleDescriptor_Exports, Opens as java_lang_module_ModuleDescriptor_Opens, Provides as java_lang_module_ModuleDescriptor_Provides, Requires as java_lang_module_ModuleDescriptor_Requires } from 'java.lang.module.ModuleDescriptor';
import { Set as java_util_Set, List as java_util_List } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Exports_Modifier } from 'java.lang.module.ModuleDescriptor.Exports';
import { Modifier as java_lang_module_ModuleDescriptor_Opens_Modifier } from 'java.lang.module.ModuleDescriptor.Opens';
import { ModuleDescriptor as java_lang_module_ModuleDescriptor } from 'java.lang.module';
import { Modifier as java_lang_module_ModuleDescriptor_Requires_Modifier } from 'java.lang.module.ModuleDescriptor.Requires';
import { Object as java_lang_Object } from 'java.lang';

  export class Builder extends java_lang_Object {

version(arg0: string): java_lang_module_ModuleDescriptor_Builder;
version(arg0: java_lang_module_ModuleDescriptor_Version): java_lang_module_ModuleDescriptor_Builder;
packages(arg0: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: string): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>, arg1: string, arg2: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: string, arg1: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: java_lang_module_ModuleDescriptor_Exports): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: string): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>, arg1: string, arg2: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: string, arg1: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_lang_module_ModuleDescriptor_Opens): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
uses(arg0: string): java_lang_module_ModuleDescriptor_Builder;
provides(arg0: java_lang_module_ModuleDescriptor_Provides): java_lang_module_ModuleDescriptor_Builder;
provides(arg0: string, arg1: java_util_List<string>): java_lang_module_ModuleDescriptor_Builder;
build(): java_lang_module_ModuleDescriptor;
requires(arg0: java_lang_module_ModuleDescriptor_Requires): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>, arg1: string, arg2: java_lang_module_ModuleDescriptor_Version): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: string): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
mainClass(arg0: string): java_lang_module_ModuleDescriptor_Builder;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { ModuleLayer as java_lang_ModuleLayer, Module as java_lang_Module, ClassLoader as java_lang_ClassLoader, Object as java_lang_Object } from 'java.lang';
import { Set as java_util_Set, List as java_util_List, Optional as java_util_Optional } from 'java.util';
import { Configuration as java_lang_module_Configuration } from 'java.lang.module';
import { Function as java_util_function_Function } from 'java.util.function';
import { Controller as java_lang_ModuleLayer_Controller } from 'java.lang.ModuleLayer';

  export class ModuleLayer extends java_lang_Object {

toString(): string;
static empty(): java_lang_ModuleLayer;
static boot(): java_lang_ModuleLayer;
modules(): java_util_Set<java_lang_Module>;
defineModules(arg0: java_lang_module_Configuration, arg1: java_util_function_Function<string, java_lang_ClassLoader>): java_lang_ModuleLayer;
static defineModules(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_util_function_Function<string, java_lang_ClassLoader>): java_lang_ModuleLayer_Controller;
findModule(arg0: string): java_util_Optional<java_lang_Module>;
parents(): java_util_List<java_lang_ModuleLayer>;
configuration(): java_lang_module_Configuration;
defineModulesWithOneLoader(arg0: java_lang_module_Configuration, arg1: java_lang_ClassLoader): java_lang_ModuleLayer;
static defineModulesWithOneLoader(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_lang_ClassLoader): java_lang_ModuleLayer_Controller;
static defineModulesWithManyLoaders(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_lang_ClassLoader): java_lang_ModuleLayer_Controller;
defineModulesWithManyLoaders(arg0: java_lang_module_Configuration, arg1: java_lang_ClassLoader): java_lang_ModuleLayer;
findLoader(arg0: string): java_lang_ClassLoader;

  }
}
//@ts-nocheck

declare module 'java.lang.module' {
import { Configuration as java_lang_module_Configuration, ModuleFinder as java_lang_module_ModuleFinder, ResolvedModule as java_lang_module_ResolvedModule } from 'java.lang.module';
import { Collection as java_util_Collection, List as java_util_List, Set as java_util_Set, Optional as java_util_Optional } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a source of configurable options and settings */

  export class Configuration extends java_lang_Object {

toString(): string;
static empty(): java_lang_module_Configuration;
resolve(arg0: java_lang_module_ModuleFinder, arg1: java_lang_module_ModuleFinder, arg2: java_util_Collection<string>): java_lang_module_Configuration;
static resolve(arg0: java_lang_module_ModuleFinder, arg1: java_util_List<java_lang_module_Configuration>, arg2: java_lang_module_ModuleFinder, arg3: java_util_Collection<string>): java_lang_module_Configuration;
modules(): java_util_Set<java_lang_module_ResolvedModule>;
findModule(arg0: string): java_util_Optional<java_lang_module_ResolvedModule>;
parents(): java_util_List<java_lang_module_Configuration>;
static resolveAndBind(arg0: java_lang_module_ModuleFinder, arg1: java_util_List<java_lang_module_Configuration>, arg2: java_lang_module_ModuleFinder, arg3: java_util_Collection<string>): java_lang_module_Configuration;
resolveAndBind(arg0: java_lang_module_ModuleFinder, arg1: java_lang_module_ModuleFinder, arg2: java_util_Collection<string>): java_lang_module_Configuration;

  }
}
//@ts-nocheck

declare module 'java.lang.module' {
import { Path as java_nio_file_Path } from 'java.nio.file';
import { ModuleFinder as java_lang_module_ModuleFinder, ModuleReference as java_lang_module_ModuleReference } from 'java.lang.module';
import { Optional as java_util_Optional, Set as java_util_Set } from 'java.util';

  export class ModuleFinder {

static of(...arg0: java_nio_file_Path[]): java_lang_module_ModuleFinder;
find(arg0: string): java_util_Optional<java_lang_module_ModuleReference>;
static ofSystem(): java_lang_module_ModuleFinder;
static compose(...arg0: java_lang_module_ModuleFinder[]): java_lang_module_ModuleFinder;
findAll(): java_util_Set<java_lang_module_ModuleReference>;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Long as java_lang_Long, CharSequence as java_lang_CharSequence, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Long extends java_lang_Number implements java_lang_Comparable<java_lang_Long> {
static MIN_VALUE: number;
static MAX_VALUE: number;
static TYPE: java_lang_Class<java_lang_Long>;
static SIZE: number;
static BYTES: number;
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
static valueOf(arg0: string): java_lang_Long;
static valueOf(arg0: number): java_lang_Long;
static valueOf(arg0: string, arg1: number): java_lang_Long;
static toHexString(arg0: number): string;
static decode(arg0: string): java_lang_Long;
static compare(arg0: number, arg1: number): number;
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
static parseLong(arg0: string): number;
static parseLong(arg0: string, arg1: number): number;
static parseLong(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
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
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Number extends java_lang_Object implements java_io_Serializable {

byteValue(): number;
shortValue(): number;
intValue(): number;
longValue(): number;
floatValue(): number;
doubleValue(): number;
constructor();
  }
}
//@ts-nocheck

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
static SIZE: number;
static BYTES: number;
static name: string;
static type: number;
static type: number;
static numericValue: number;
static numericValue: number;
static directionality: number;
static directionality: number;
static getName(arg0: number): string;
static isJavaIdentifierStart(arg0: string): boolean;
static isJavaIdentifierStart(arg0: number): boolean;
static isJavaIdentifierPart(arg0: number): boolean;
static isJavaIdentifierPart(arg0: string): boolean;
equals(arg0: java_lang_Object): boolean;
static toString(arg0: number): string;
static toString(arg0: string): string;
toString(): string;
hashCode(): number;
static hashCode(arg0: string): number;
static reverseBytes(arg0: string): string;
compareTo(arg0: java_lang_Character): number;
compareTo(arg0: java_lang_Object): number;
static isDigit(arg0: string): boolean;
static isDigit(arg0: number): boolean;
static isLowerCase(arg0: number): boolean;
static isLowerCase(arg0: string): boolean;
static isUpperCase(arg0: number): boolean;
static isUpperCase(arg0: string): boolean;
static isWhitespace(arg0: number): boolean;
static isWhitespace(arg0: string): boolean;
charValue(): string;
static valueOf(arg0: string): java_lang_Character;
static codePointAt(arg0: string[], arg1: number): number;
static codePointAt(arg0: string[], arg1: number, arg2: number): number;
static codePointAt(arg0: java_lang_CharSequence, arg1: number): number;
static codePointBefore(arg0: string[], arg1: number, arg2: number): number;
static codePointBefore(arg0: java_lang_CharSequence, arg1: number): number;
static codePointBefore(arg0: string[], arg1: number): number;
static codePointCount(arg0: java_lang_CharSequence, arg1: number, arg2: number): number;
static codePointCount(arg0: string[], arg1: number, arg2: number): number;
static offsetByCodePoints(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): number;
static offsetByCodePoints(arg0: java_lang_CharSequence, arg1: number, arg2: number): number;
static toLowerCase(arg0: string): string;
static toLowerCase(arg0: number): number;
static toUpperCase(arg0: string): string;
static toUpperCase(arg0: number): number;
static compare(arg0: string, arg1: string): number;
static toChars(arg0: number, arg1: string[], arg2: number): number;
static toChars(arg0: number): string[];
static isBmpCodePoint(arg0: number): boolean;
static isSupplementaryCodePoint(arg0: number): boolean;
static getType(arg0: string): number;
static getType(arg0: number): number;
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
}
//@ts-nocheck

declare module 'java.lang' {


  export class Cloneable {



  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Thread as java_lang_Thread, ThreadGroup as java_lang_ThreadGroup, ClassLoader as java_lang_ClassLoader, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Runnable as java_lang_Runnable } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { State as java_lang_Thread_State, UncaughtExceptionHandler as java_lang_Thread_UncaughtExceptionHandler } from 'java.lang.Thread';

  export class Thread extends java_lang_Object implements java_lang_Runnable {
static MIN_PRIORITY: number;
static NORM_PRIORITY: number;
static MAX_PRIORITY: number;
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
getName(): string;
run(): void;
toString(): string;
isInterrupted(): boolean;
static currentThread(): java_lang_Thread;
static onSpinWait(): void;
join(arg0: number, arg1: number): void;
join(arg0: number): void;
join(): void;
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
static sleep(arg0: number): void;
static sleep(arg0: number, arg1: number): void;
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
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable);
constructor(arg0: string);
constructor();
constructor(arg0: java_lang_Runnable);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string, arg3: number, arg4: boolean);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string, arg3: number);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string);
constructor(arg0: java_lang_Runnable, arg1: string);
constructor(arg0: java_lang_ThreadGroup, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { ThreadGroup as java_lang_ThreadGroup, Thread as java_lang_Thread, Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';
import { UncaughtExceptionHandler as java_lang_Thread_UncaughtExceptionHandler } from 'java.lang.Thread';

  export class ThreadGroup extends java_lang_Object implements java_lang_Thread_UncaughtExceptionHandler {
name: string;
parent: java_lang_ThreadGroup;
maxPriority: number;
getName(): string;
toString(): string;
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
enumerate(arg0: java_lang_Thread[]): number;
enumerate(arg0: java_lang_ThreadGroup[]): number;
isDaemon(): boolean;
getMaxPriority(): number;
uncaughtException(arg0: java_lang_Thread, arg1: java_lang_Throwable): void;
isDestroyed(): boolean;
setMaxPriority(arg0: number): void;
parentOf(arg0: java_lang_ThreadGroup): boolean;
activeGroupCount(): number;
destroy(): void;
allowThreadSuspension(arg0: boolean): boolean;
constructor(arg0: string);
constructor(arg0: java_lang_ThreadGroup, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.lang.Thread' {
import { Thread as java_lang_Thread, Throwable as java_lang_Throwable } from 'java.lang';

  export class UncaughtExceptionHandler {

uncaughtException(arg0: java_lang_Thread, arg1: java_lang_Throwable): void;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class StackTraceElement extends java_lang_Object implements java_io_Serializable {
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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Boolean extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_lang_Boolean> {
static TRUE: java_lang_Boolean;
static FALSE: java_lang_Boolean;
static TYPE: java_lang_Class<java_lang_Boolean>;
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
}
//@ts-nocheck

declare module 'java.lang' {
import { AbstractStringBuilder as java_lang_AbstractStringBuilder, StringBuffer as java_lang_StringBuffer, Appendable as java_lang_Appendable, CharSequence as java_lang_CharSequence, Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class StringBuffer extends java_lang_AbstractStringBuilder implements java_io_Serializable, java_lang_Comparable<java_lang_StringBuffer>, java_lang_CharSequence {
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
}
//@ts-nocheck

declare module 'java.lang' {
import { AbstractStringBuilder as java_lang_AbstractStringBuilder, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object, StringBuffer as java_lang_StringBuffer } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';

  export class AbstractStringBuilder extends java_lang_Object implements java_lang_Appendable, java_lang_CharSequence {
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
}
//@ts-nocheck

declare module 'java.lang' {
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Iterable<T extends java_lang_Object> {

iterator(): java_util_Iterator<T>;
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;

  }
}
//@ts-nocheck

declare module 'java.lang.module' {
import { ModuleDescriptor as java_lang_module_ModuleDescriptor, ModuleReader as java_lang_module_ModuleReader } from 'java.lang.module';
import { Optional as java_util_Optional } from 'java.util';
import { URI as java_net_URI } from 'java.net';
import { Object as java_lang_Object } from 'java.lang';

  export class ModuleReference extends java_lang_Object {

descriptor(): java_lang_module_ModuleDescriptor;
open(): java_lang_module_ModuleReader;
location(): java_util_Optional<java_net_URI>;

  }
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.lang.module' {
import { Object as java_lang_Object } from 'java.lang';
import { Set as java_util_Set } from 'java.util';
import { ResolvedModule as java_lang_module_ResolvedModule, ModuleReference as java_lang_module_ModuleReference, Configuration as java_lang_module_Configuration } from 'java.lang.module';

  export class ResolvedModule extends java_lang_Object {

name(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
reads(): java_util_Set<java_lang_module_ResolvedModule>;
reference(): java_lang_module_ModuleReference;
configuration(): java_lang_module_Configuration;

  }
}
//@ts-nocheck

declare module 'java.lang.ModuleLayer' {
import { Module as java_lang_Module, ModuleLayer as java_lang_ModuleLayer, Object as java_lang_Object } from 'java.lang';
import { Controller as java_lang_ModuleLayer_Controller } from 'java.lang.ModuleLayer';

  export class Controller extends java_lang_Object {

addReads(arg0: java_lang_Module, arg1: java_lang_Module): java_lang_ModuleLayer_Controller;
addExports(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): java_lang_ModuleLayer_Controller;
addOpens(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): java_lang_ModuleLayer_Controller;
layer(): java_lang_ModuleLayer;

  }
}
//@ts-nocheck

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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.lang.reflect' {


  export class Type {
typeName: string;
getTypeName(): string;

  }
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { TypeVariable as java_lang_reflect_TypeVariable, Method as java_lang_reflect_Method, Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AccessibleObject as java_lang_reflect_AccessibleObject, Executable as java_lang_reflect_Executable } from 'java.lang.reflect';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Method extends java_lang_reflect_Executable {
name: string;
modifiers: number;
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
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
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
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { AccessibleObject as java_lang_reflect_AccessibleObject, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class AccessibleObject extends java_lang_Object implements java_lang_reflect_AnnotatedElement {
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
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { TypeVariable as java_lang_reflect_TypeVariable, AnnotatedType as java_lang_reflect_AnnotatedType, Type as java_lang_reflect_Type, Parameter as java_lang_reflect_Parameter, AccessibleObject as java_lang_reflect_AccessibleObject, Member as java_lang_reflect_Member, GenericDeclaration as java_lang_reflect_GenericDeclaration } from 'java.lang.reflect';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Executable extends java_lang_reflect_AccessibleObject implements java_lang_reflect_Member, java_lang_reflect_GenericDeclaration {
name: string;
modifiers: number;
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
getName(): string;
getModifiers(): number;
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
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { AnnotatedType as java_lang_reflect_AnnotatedType, Executable as java_lang_reflect_Executable, Type as java_lang_reflect_Type, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class Parameter extends java_lang_Object implements java_lang_reflect_AnnotatedElement {
name: string;
modifiers: number;
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
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
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
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class Member {
static PUBLIC: number;
static DECLARED: number;
name: string;
modifiers: number;
declaringClass: java_lang_Class<java_lang_Object>;
getName(): string;
getModifiers(): number;
isSynthetic(): boolean;
getDeclaringClass(): java_lang_Class<java_lang_Object>;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { TypeVariable as java_lang_reflect_TypeVariable, Constructor as java_lang_reflect_Constructor, Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AccessibleObject as java_lang_reflect_AccessibleObject, Executable as java_lang_reflect_Executable } from 'java.lang.reflect';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Constructor<T extends java_lang_Object> extends java_lang_reflect_Executable {
name: string;
modifiers: number;
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
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
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
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AccessibleObject as java_lang_reflect_AccessibleObject, Member as java_lang_reflect_Member } from 'java.lang.reflect';

  export class Field extends java_lang_reflect_AccessibleObject implements java_lang_reflect_Member {
name: string;
modifiers: number;
boolean: boolean;
byte: number;
short: number;
char: string;
int: number;
long: number;
float: number;
double: number;
declaringClass: java_lang_Class<java_lang_Object>;
annotation: T;
annotationsByType: T[];
declaredAnnotations: java_lang_annotation_Annotation[];
type: java_lang_Class<java_lang_Object>;
genericType: java_lang_reflect_Type;
annotatedType: java_lang_reflect_AnnotatedType;
class: java_lang_Class<java_lang_Object>;
getName(): string;
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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Class as java_lang_Class, Throwable as java_lang_Throwable } from 'java.lang';

  export class Exception extends java_lang_Throwable {
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
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Byte as java_lang_Byte, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Byte extends java_lang_Number implements java_lang_Comparable<java_lang_Byte> {
static MIN_VALUE: number;
static MAX_VALUE: number;
static TYPE: java_lang_Class<java_lang_Byte>;
static SIZE: number;
static BYTES: number;
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
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Short as java_lang_Short, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Short extends java_lang_Number implements java_lang_Comparable<java_lang_Short> {
static MIN_VALUE: number;
static MAX_VALUE: number;
static TYPE: java_lang_Class<java_lang_Short>;
static SIZE: number;
static BYTES: number;
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
}
//@ts-nocheck

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
}
//@ts-nocheck

declare module 'java.lang' {
import { StringBuffer as java_lang_StringBuffer, AbstractStringBuilder as java_lang_AbstractStringBuilder, StringBuilder as java_lang_StringBuilder, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class StringBuilder extends java_lang_AbstractStringBuilder implements java_io_Serializable, java_lang_Comparable<java_lang_StringBuilder>, java_lang_CharSequence {
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
}
//@ts-nocheck

declare module 'java.lang.Character' {
import { Object as java_lang_Object } from 'java.lang';

  export class Subset extends java_lang_Object {

equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Class as java_lang_Class, Void as java_lang_Void, Object as java_lang_Object } from 'java.lang';

  export class Void extends java_lang_Object {
static TYPE: java_lang_Class<java_lang_Void>;


  }
}
//@ts-nocheck

declare module 'java.lang' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';

  export class RuntimeException extends java_lang_Exception {
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

declare module 'java.lang.invoke' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MethodType as java_lang_invoke_MethodType, MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { List as java_util_List } from 'java.util';

  export class MethodHandle extends java_lang_Object {

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
}
//@ts-nocheck

declare module 'java.lang.invoke' {
import { Class as java_lang_Class, Object as java_lang_Object, ClassLoader as java_lang_ClassLoader } from 'java.lang';
import { MethodType as java_lang_invoke_MethodType } from 'java.lang.invoke';
import { List as java_util_List } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class MethodType extends java_lang_Object implements java_io_Serializable {

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
}