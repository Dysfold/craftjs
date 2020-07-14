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
localizedMessage: string;
message: string;
stackTrace: JArray<java_lang_StackTraceElement>;
suppressed: JArray<java_lang_Throwable>;
addSuppressed(arg0: java_lang_Throwable): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): JArray<java_lang_StackTraceElement>;
getSuppressed(): JArray<java_lang_Throwable>;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: JArray<java_lang_StackTraceElement>): void;
toString(): string;
constructor();
constructor(arg0: java_lang_Throwable);
constructor(arg0: string);
constructor(arg0: string, arg1: java_lang_Throwable);
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';
import { CharSequence as java_lang_CharSequence } from 'java.lang';

  export class CharSequence {

charAt(arg0: number): string;
chars(): java_util_stream_IntStream;
codePoints(): java_util_stream_IntStream;
length(): number;
static compare(arg0: java_lang_CharSequence, arg1: java_lang_CharSequence): number;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
toString(): string;

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
class: java_lang_Class<java_lang_Object>;
static BYTES: number;
static MAX_VALUE: number;
static MIN_VALUE: number;
static SIZE: number;
static TYPE: java_lang_Class<java_lang_Integer>;
static integer: java_lang_Integer;
static integer: java_lang_Integer;
static integer: java_lang_Integer;
byteValue(): number;
compareTo(arg0: java_lang_Integer): number;
compareTo(arg0: java_lang_Object): number;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
floatValue(): number;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
intValue(): number;
longValue(): number;
notify(): void;
notifyAll(): void;
shortValue(): number;
static bitCount(arg0: number): number;
static compare(arg0: number, arg1: number): number;
static compareUnsigned(arg0: number, arg1: number): number;
static decode(arg0: string): java_lang_Integer;
static divideUnsigned(arg0: number, arg1: number): number;
static getInteger(arg0: string): java_lang_Integer;
static getInteger(arg0: string, arg1: java_lang_Integer): java_lang_Integer;
static getInteger(arg0: string, arg1: number): java_lang_Integer;
static hashCode(arg0: number): number;
static highestOneBit(arg0: number): number;
static lowestOneBit(arg0: number): number;
static max(arg0: number, arg1: number): number;
static min(arg0: number, arg1: number): number;
static numberOfLeadingZeros(arg0: number): number;
static numberOfTrailingZeros(arg0: number): number;
static parseInt(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
static parseInt(arg0: string): number;
static parseInt(arg0: string, arg1: number): number;
static parseUnsignedInt(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
static parseUnsignedInt(arg0: string): number;
static parseUnsignedInt(arg0: string, arg1: number): number;
static remainderUnsigned(arg0: number, arg1: number): number;
static reverse(arg0: number): number;
static reverseBytes(arg0: number): number;
static rotateLeft(arg0: number, arg1: number): number;
static rotateRight(arg0: number, arg1: number): number;
static signum(arg0: number): number;
static sum(arg0: number, arg1: number): number;
static toBinaryString(arg0: number): string;
static toHexString(arg0: number): string;
static toOctalString(arg0: number): string;
static toString(arg0: number): string;
static toString(arg0: number, arg1: number): string;
static toUnsignedLong(arg0: number): number;
static toUnsignedString(arg0: number): string;
static toUnsignedString(arg0: number, arg1: number): string;
static valueOf(arg0: number): java_lang_Integer;
static valueOf(arg0: string): java_lang_Integer;
static valueOf(arg0: string, arg1: number): java_lang_Integer;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: string);
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

annotatedInterfaces: JArray<java_lang_reflect_AnnotatedType>;
annotatedSuperclass: java_lang_reflect_AnnotatedType;
annotation: A;
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<A>;
canonicalName: string;
classLoader: java_lang_ClassLoader;
classes: JArray<java_lang_Class<java_lang_Object>>;
componentType: java_lang_Class<java_lang_Object>;
constructors: JArray<java_lang_reflect_Constructor<java_lang_Object>>;
declaredAnnotation: A;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<A>;
declaredClasses: JArray<java_lang_Class<java_lang_Object>>;
declaredConstructor: java_lang_reflect_Constructor<T>;
declaredConstructors: JArray<java_lang_reflect_Constructor<java_lang_Object>>;
declaredField: java_lang_reflect_Field;
declaredFields: JArray<java_lang_reflect_Field>;
declaredMethod: java_lang_reflect_Method;
declaredMethods: JArray<java_lang_reflect_Method>;
declaringClass: java_lang_Class<java_lang_Object>;
enclosingClass: java_lang_Class<java_lang_Object>;
enclosingConstructor: java_lang_reflect_Constructor<java_lang_Object>;
enclosingMethod: java_lang_reflect_Method;
enumConstants: JArray<T>;
field: java_lang_reflect_Field;
fields: JArray<java_lang_reflect_Field>;
genericInterfaces: JArray<java_lang_reflect_Type>;
genericSuperclass: java_lang_reflect_Type;
interfaces: JArray<java_lang_Class<java_lang_Object>>;
method: java_lang_reflect_Method;
methods: JArray<java_lang_reflect_Method>;
modifiers: number;
module: java_lang_Module;
name: string;
nestHost: java_lang_Class<java_lang_Object>;
nestMembers: JArray<java_lang_Class<java_lang_Object>>;
package: java_lang_Package;
packageName: string;
protectionDomain: java_security_ProtectionDomain;
resource: java_net_URL;
resourceAsStream: java_io_InputStream;
signers: JArray<java_lang_Object>;
simpleName: string;
superclass: java_lang_Class<java_lang_Object>;
typeName: string;
typeParameters: JArray<java_lang_reflect_TypeVariable<java_lang_Class<T>>>;
asSubclass<U extends java_lang_Object>(arg0: java_lang_Class<U>): java_lang_Class<U>;
cast(arg0: java_lang_Object): T;
desiredAssertionStatus(): boolean;
getAnnotatedInterfaces(): JArray<java_lang_reflect_AnnotatedType>;
getAnnotatedSuperclass(): java_lang_reflect_AnnotatedType;
getAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): JArray<A>;
getCanonicalName(): string;
getClassLoader(): java_lang_ClassLoader;
getClasses(): JArray<java_lang_Class<java_lang_Object>>;
getComponentType(): java_lang_Class<java_lang_Object>;
getConstructor(...arg0: JArray<java_lang_Class<java_lang_Object>>): java_lang_reflect_Constructor<T>;
getConstructors(): JArray<java_lang_reflect_Constructor<java_lang_Object>>;
getDeclaredAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): JArray<A>;
getDeclaredClasses(): JArray<java_lang_Class<java_lang_Object>>;
getDeclaredConstructor(...arg0: JArray<java_lang_Class<java_lang_Object>>): java_lang_reflect_Constructor<T>;
getDeclaredConstructors(): JArray<java_lang_reflect_Constructor<java_lang_Object>>;
getDeclaredField(arg0: string): java_lang_reflect_Field;
getDeclaredFields(): JArray<java_lang_reflect_Field>;
getDeclaredMethod(arg0: string, ...arg1: JArray<java_lang_Class<java_lang_Object>>): java_lang_reflect_Method;
getDeclaredMethods(): JArray<java_lang_reflect_Method>;
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getEnclosingClass(): java_lang_Class<java_lang_Object>;
getEnclosingConstructor(): java_lang_reflect_Constructor<java_lang_Object>;
getEnclosingMethod(): java_lang_reflect_Method;
getEnumConstants(): JArray<T>;
getField(arg0: string): java_lang_reflect_Field;
getFields(): JArray<java_lang_reflect_Field>;
getGenericInterfaces(): JArray<java_lang_reflect_Type>;
getGenericSuperclass(): java_lang_reflect_Type;
getInterfaces(): JArray<java_lang_Class<java_lang_Object>>;
getMethod(arg0: string, ...arg1: JArray<java_lang_Class<java_lang_Object>>): java_lang_reflect_Method;
getMethods(): JArray<java_lang_reflect_Method>;
getModifiers(): number;
getModule(): java_lang_Module;
getName(): string;
getNestHost(): java_lang_Class<java_lang_Object>;
getNestMembers(): JArray<java_lang_Class<java_lang_Object>>;
getPackage(): java_lang_Package;
getPackageName(): string;
getProtectionDomain(): java_security_ProtectionDomain;
getResource(arg0: string): java_net_URL;
getResourceAsStream(arg0: string): java_io_InputStream;
getSigners(): JArray<java_lang_Object>;
getSimpleName(): string;
getSuperclass(): java_lang_Class<java_lang_Object>;
getTypeName(): string;
getTypeParameters(): JArray<java_lang_reflect_TypeVariable<java_lang_Class<T>>>;
isAnnotation(): boolean;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
isAnonymousClass(): boolean;
isArray(): boolean;
isAssignableFrom(arg0: java_lang_Class<java_lang_Object>): boolean;
isEnum(): boolean;
isInstance(arg0: java_lang_Object): boolean;
isInterface(): boolean;
isLocalClass(): boolean;
isMemberClass(): boolean;
isNestmateOf(arg0: java_lang_Class<java_lang_Object>): boolean;
isPrimitive(): boolean;
isSynthetic(): boolean;
newInstance(): T;
static forName(arg0: java_lang_Module, arg1: string): java_lang_Class<java_lang_Object>;
static forName(arg0: string): java_lang_Class<java_lang_Object>;
static forName(arg0: string, arg1: boolean, arg2: java_lang_ClassLoader): java_lang_Class<java_lang_Object>;
toGenericString(): string;
toString(): string;

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
annotation: T;
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<T>;
classLoader: java_lang_ClassLoader;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
descriptor: java_lang_module_ModuleDescriptor;
layer: java_lang_ModuleLayer;
name: string;
packages: java_util_Set<string>;
resourceAsStream: java_io_InputStream;
addExports(arg0: string, arg1: java_lang_Module): java_lang_Module;
addOpens(arg0: string, arg1: java_lang_Module): java_lang_Module;
addReads(arg0: java_lang_Module): java_lang_Module;
addUses(arg0: java_lang_Class<java_lang_Object>): java_lang_Module;
canRead(arg0: java_lang_Module): boolean;
canUse(arg0: java_lang_Class<java_lang_Object>): boolean;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getClassLoader(): java_lang_ClassLoader;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDescriptor(): java_lang_module_ModuleDescriptor;
getLayer(): java_lang_ModuleLayer;
getName(): string;
getPackages(): java_util_Set<string>;
getResourceAsStream(arg0: string): java_io_InputStream;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
isExported(arg0: string): boolean;
isExported(arg0: string, arg1: java_lang_Module): boolean;
isNamed(): boolean;
isOpen(arg0: string): boolean;
isOpen(arg0: string, arg1: java_lang_Module): boolean;
toString(): string;

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
definedPackage: java_lang_Package;
definedPackages: JArray<java_lang_Package>;
name: string;
parent: java_lang_ClassLoader;
resource: java_net_URL;
resourceAsStream: java_io_InputStream;
resources: java_util_Enumeration<java_net_URL>;
static platformClassLoader: java_lang_ClassLoader;
static systemClassLoader: java_lang_ClassLoader;
static systemResource: java_net_URL;
static systemResourceAsStream: java_io_InputStream;
static systemResources: java_util_Enumeration<java_net_URL>;
unnamedModule: java_lang_Module;
clearAssertionStatus(): void;
getDefinedPackage(arg0: string): java_lang_Package;
getDefinedPackages(): JArray<java_lang_Package>;
getName(): string;
getParent(): java_lang_ClassLoader;
getResource(arg0: string): java_net_URL;
getResourceAsStream(arg0: string): java_io_InputStream;
getResources(arg0: string): java_util_Enumeration<java_net_URL>;
getUnnamedModule(): java_lang_Module;
isRegisteredAsParallelCapable(): boolean;
loadClass(arg0: string): java_lang_Class<java_lang_Object>;
resources(arg0: string): java_util_stream_Stream<java_net_URL>;
setClassAssertionStatus(arg0: string, arg1: boolean): void;
setDefaultAssertionStatus(arg0: boolean): void;
setPackageAssertionStatus(arg0: string, arg1: boolean): void;
static getPlatformClassLoader(): java_lang_ClassLoader;
static getSystemClassLoader(): java_lang_ClassLoader;
static getSystemResource(arg0: string): java_net_URL;
static getSystemResourceAsStream(arg0: string): java_io_InputStream;
static getSystemResources(arg0: string): java_util_Enumeration<java_net_URL>;

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
compareTo(arg0: E): number;
compareTo(arg0: java_lang_Object): number;
equals(arg0: java_lang_Object): boolean;
getDeclaringClass(): java_lang_Class<E>;
hashCode(): number;
name(): string;
ordinal(): number;
static valueOf<T extends java_lang_Enum<T>>(arg0: java_lang_Class<T>, arg1: string): T;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Package as java_lang_Package, Class as java_lang_Class, Object as java_lang_Object, NamedPackage as java_lang_NamedPackage } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { URL as java_net_URL } from 'java.net';
import { AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class Package extends java_lang_NamedPackage implements java_lang_reflect_AnnotatedElement {
annotation: A;
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<A>;
class: java_lang_Class<java_lang_Object>;
declaredAnnotation: A;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<A>;
implementationTitle: string;
implementationVendor: string;
implementationVersion: string;
name: string;
specificationTitle: string;
specificationVendor: string;
specificationVersion: string;
static package: java_lang_Package;
static packages: JArray<java_lang_Package>;
equals(arg0: java_lang_Object): boolean;
getAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): JArray<A>;
getClass(): java_lang_Class<java_lang_Object>;
getDeclaredAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): JArray<A>;
getImplementationTitle(): string;
getImplementationVendor(): string;
getImplementationVersion(): string;
getName(): string;
getSpecificationTitle(): string;
getSpecificationVendor(): string;
getSpecificationVersion(): string;
hashCode(): number;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
isCompatibleWith(arg0: string): boolean;
isSealed(): boolean;
isSealed(arg0: java_net_URL): boolean;
notify(): void;
notifyAll(): void;
static getPackage(arg0: string): java_lang_Package;
static getPackages(): JArray<java_lang_Package>;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang.annotation' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Annotation {

annotationType(): java_lang_Class<java_lang_annotation_Annotation>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
toString(): string;

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
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<T>;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;

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

compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor): number;
equals(arg0: java_lang_Object): boolean;
exports(): java_util_Set<java_lang_module_ModuleDescriptor_Exports>;
hashCode(): number;
isAutomatic(): boolean;
isOpen(): boolean;
mainClass(): java_util_Optional<string>;
modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Modifier>;
name(): string;
opens(): java_util_Set<java_lang_module_ModuleDescriptor_Opens>;
packages(): java_util_Set<string>;
provides(): java_util_Set<java_lang_module_ModuleDescriptor_Provides>;
rawVersion(): java_util_Optional<string>;
requires(): java_util_Set<java_lang_module_ModuleDescriptor_Requires>;
static newAutomaticModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;
static newModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;
static newModule(arg0: string, arg1: java_util_Set<java_lang_module_ModuleDescriptor_Modifier>): java_lang_module_ModuleDescriptor_Builder;
static newOpenModule(arg0: string): java_lang_module_ModuleDescriptor_Builder;
static read(arg0: java_io_InputStream): java_lang_module_ModuleDescriptor;
static read(arg0: java_io_InputStream, arg1: java_util_function_Supplier<java_util_Set<string>>): java_lang_module_ModuleDescriptor;
static read(arg0: java_nio_ByteBuffer): java_lang_module_ModuleDescriptor;
static read(arg0: java_nio_ByteBuffer, arg1: java_util_function_Supplier<java_util_Set<string>>): java_lang_module_ModuleDescriptor;
toNameAndVersion(): string;
toString(): string;
uses(): java_util_Set<string>;
version(): java_util_Optional<java_lang_module_ModuleDescriptor_Version>;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Modifier as java_lang_module_ModuleDescriptor_Modifier } from 'java.lang.module.ModuleDescriptor';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Modifier> {
class: java_lang_Class<java_lang_Object>;
static AUTOMATIC: java_lang_module_ModuleDescriptor_Modifier;
static MANDATED: java_lang_module_ModuleDescriptor_Modifier;
static OPEN: java_lang_module_ModuleDescriptor_Modifier;
static SYNTHETIC: java_lang_module_ModuleDescriptor_Modifier;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_lang_module_ModuleDescriptor_Modifier;
static values(): JArray<java_lang_module_ModuleDescriptor_Modifier>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Version as java_lang_module_ModuleDescriptor_Version } from 'java.lang.module.ModuleDescriptor';

  export class Version extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Version> {

compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Version): number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static parse(arg0: string): java_lang_module_ModuleDescriptor_Version;
toString(): string;

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

compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Exports): number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
isQualified(): boolean;
modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>;
source(): string;
targets(): java_util_Set<string>;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Exports' {
import { Modifier as java_lang_module_ModuleDescriptor_Exports_Modifier } from 'java.lang.module.ModuleDescriptor.Exports';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Exports_Modifier> {
class: java_lang_Class<java_lang_Object>;
static MANDATED: java_lang_module_ModuleDescriptor_Exports_Modifier;
static SYNTHETIC: java_lang_module_ModuleDescriptor_Exports_Modifier;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_lang_module_ModuleDescriptor_Exports_Modifier;
static values(): JArray<java_lang_module_ModuleDescriptor_Exports_Modifier>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Set as java_util_Set } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Opens_Modifier } from 'java.lang.module.ModuleDescriptor.Opens';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Opens as java_lang_module_ModuleDescriptor_Opens } from 'java.lang.module.ModuleDescriptor';

  export class Opens extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Opens> {

compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Opens): number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
isQualified(): boolean;
modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>;
source(): string;
targets(): java_util_Set<string>;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Opens' {
import { Modifier as java_lang_module_ModuleDescriptor_Opens_Modifier } from 'java.lang.module.ModuleDescriptor.Opens';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Opens_Modifier> {
class: java_lang_Class<java_lang_Object>;
static MANDATED: java_lang_module_ModuleDescriptor_Opens_Modifier;
static SYNTHETIC: java_lang_module_ModuleDescriptor_Opens_Modifier;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_lang_module_ModuleDescriptor_Opens_Modifier;
static values(): JArray<java_lang_module_ModuleDescriptor_Opens_Modifier>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Provides as java_lang_module_ModuleDescriptor_Provides } from 'java.lang.module.ModuleDescriptor';
import { List as java_util_List } from 'java.util';

  export class Provides extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Provides> {

compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Provides): number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
providers(): java_util_List<string>;
service(): string;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor' {
import { Set as java_util_Set, Optional as java_util_Optional } from 'java.util';
import { Modifier as java_lang_module_ModuleDescriptor_Requires_Modifier } from 'java.lang.module.ModuleDescriptor.Requires';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Requires as java_lang_module_ModuleDescriptor_Requires, Version as java_lang_module_ModuleDescriptor_Version } from 'java.lang.module.ModuleDescriptor';

  export class Requires extends java_lang_Object implements java_lang_Comparable<java_lang_module_ModuleDescriptor_Requires> {

compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_module_ModuleDescriptor_Requires): number;
compiledVersion(): java_util_Optional<java_lang_module_ModuleDescriptor_Version>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
modifiers(): java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>;
name(): string;
rawCompiledVersion(): java_util_Optional<string>;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang.module.ModuleDescriptor.Requires' {
import { Modifier as java_lang_module_ModuleDescriptor_Requires_Modifier } from 'java.lang.module.ModuleDescriptor.Requires';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Modifier extends java_lang_Enum<java_lang_module_ModuleDescriptor_Requires_Modifier> {
class: java_lang_Class<java_lang_Object>;
static MANDATED: java_lang_module_ModuleDescriptor_Requires_Modifier;
static STATIC: java_lang_module_ModuleDescriptor_Requires_Modifier;
static SYNTHETIC: java_lang_module_ModuleDescriptor_Requires_Modifier;
static TRANSITIVE: java_lang_module_ModuleDescriptor_Requires_Modifier;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_lang_module_ModuleDescriptor_Requires_Modifier;
static values(): JArray<java_lang_module_ModuleDescriptor_Requires_Modifier>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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

build(): java_lang_module_ModuleDescriptor;
exports(arg0: java_lang_module_ModuleDescriptor_Exports): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Exports_Modifier>, arg1: string, arg2: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: string): java_lang_module_ModuleDescriptor_Builder;
exports(arg0: string, arg1: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
mainClass(arg0: string): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_lang_module_ModuleDescriptor_Opens): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Opens_Modifier>, arg1: string, arg2: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: string): java_lang_module_ModuleDescriptor_Builder;
opens(arg0: string, arg1: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
packages(arg0: java_util_Set<string>): java_lang_module_ModuleDescriptor_Builder;
provides(arg0: java_lang_module_ModuleDescriptor_Provides): java_lang_module_ModuleDescriptor_Builder;
provides(arg0: string, arg1: java_util_List<string>): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: java_lang_module_ModuleDescriptor_Requires): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>, arg1: string): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: java_util_Set<java_lang_module_ModuleDescriptor_Requires_Modifier>, arg1: string, arg2: java_lang_module_ModuleDescriptor_Version): java_lang_module_ModuleDescriptor_Builder;
requires(arg0: string): java_lang_module_ModuleDescriptor_Builder;
uses(arg0: string): java_lang_module_ModuleDescriptor_Builder;
version(arg0: java_lang_module_ModuleDescriptor_Version): java_lang_module_ModuleDescriptor_Builder;
version(arg0: string): java_lang_module_ModuleDescriptor_Builder;

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

configuration(): java_lang_module_Configuration;
defineModules(arg0: java_lang_module_Configuration, arg1: java_util_function_Function<string, java_lang_ClassLoader>): java_lang_ModuleLayer;
defineModulesWithManyLoaders(arg0: java_lang_module_Configuration, arg1: java_lang_ClassLoader): java_lang_ModuleLayer;
defineModulesWithOneLoader(arg0: java_lang_module_Configuration, arg1: java_lang_ClassLoader): java_lang_ModuleLayer;
findLoader(arg0: string): java_lang_ClassLoader;
findModule(arg0: string): java_util_Optional<java_lang_Module>;
modules(): java_util_Set<java_lang_Module>;
parents(): java_util_List<java_lang_ModuleLayer>;
static boot(): java_lang_ModuleLayer;
static defineModules(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_util_function_Function<string, java_lang_ClassLoader>): java_lang_ModuleLayer_Controller;
static defineModulesWithManyLoaders(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_lang_ClassLoader): java_lang_ModuleLayer_Controller;
static defineModulesWithOneLoader(arg0: java_lang_module_Configuration, arg1: java_util_List<java_lang_ModuleLayer>, arg2: java_lang_ClassLoader): java_lang_ModuleLayer_Controller;
static empty(): java_lang_ModuleLayer;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang.module' {
import { Configuration as java_lang_module_Configuration, ModuleFinder as java_lang_module_ModuleFinder, ResolvedModule as java_lang_module_ResolvedModule } from 'java.lang.module';
import { Collection as java_util_Collection, List as java_util_List, Set as java_util_Set, Optional as java_util_Optional } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a source of configurable options and settings */

  export class Configuration extends java_lang_Object {

findModule(arg0: string): java_util_Optional<java_lang_module_ResolvedModule>;
modules(): java_util_Set<java_lang_module_ResolvedModule>;
parents(): java_util_List<java_lang_module_Configuration>;
resolve(arg0: java_lang_module_ModuleFinder, arg1: java_lang_module_ModuleFinder, arg2: java_util_Collection<string>): java_lang_module_Configuration;
resolveAndBind(arg0: java_lang_module_ModuleFinder, arg1: java_lang_module_ModuleFinder, arg2: java_util_Collection<string>): java_lang_module_Configuration;
static empty(): java_lang_module_Configuration;
static resolve(arg0: java_lang_module_ModuleFinder, arg1: java_util_List<java_lang_module_Configuration>, arg2: java_lang_module_ModuleFinder, arg3: java_util_Collection<string>): java_lang_module_Configuration;
static resolveAndBind(arg0: java_lang_module_ModuleFinder, arg1: java_util_List<java_lang_module_Configuration>, arg2: java_lang_module_ModuleFinder, arg3: java_util_Collection<string>): java_lang_module_Configuration;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang.module' {
import { Path as java_nio_file_Path } from 'java.nio.file';
import { ModuleFinder as java_lang_module_ModuleFinder, ModuleReference as java_lang_module_ModuleReference } from 'java.lang.module';
import { Optional as java_util_Optional, Set as java_util_Set } from 'java.util';

  export class ModuleFinder {

find(arg0: string): java_util_Optional<java_lang_module_ModuleReference>;
findAll(): java_util_Set<java_lang_module_ModuleReference>;
static compose(...arg0: JArray<java_lang_module_ModuleFinder>): java_lang_module_ModuleFinder;
static of(...arg0: JArray<java_nio_file_Path>): java_lang_module_ModuleFinder;
static ofSystem(): java_lang_module_ModuleFinder;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Long as java_lang_Long, CharSequence as java_lang_CharSequence, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Long extends java_lang_Number implements java_lang_Comparable<java_lang_Long> {
class: java_lang_Class<java_lang_Object>;
static BYTES: number;
static MAX_VALUE: number;
static MIN_VALUE: number;
static SIZE: number;
static TYPE: java_lang_Class<java_lang_Long>;
static long: java_lang_Long;
static long: java_lang_Long;
static long: java_lang_Long;
byteValue(): number;
compareTo(arg0: java_lang_Long): number;
compareTo(arg0: java_lang_Object): number;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
floatValue(): number;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
intValue(): number;
longValue(): number;
notify(): void;
notifyAll(): void;
shortValue(): number;
static bitCount(arg0: number): number;
static compare(arg0: number, arg1: number): number;
static compareUnsigned(arg0: number, arg1: number): number;
static decode(arg0: string): java_lang_Long;
static divideUnsigned(arg0: number, arg1: number): number;
static getLong(arg0: string): java_lang_Long;
static getLong(arg0: string, arg1: java_lang_Long): java_lang_Long;
static getLong(arg0: string, arg1: number): java_lang_Long;
static hashCode(arg0: number): number;
static highestOneBit(arg0: number): number;
static lowestOneBit(arg0: number): number;
static max(arg0: number, arg1: number): number;
static min(arg0: number, arg1: number): number;
static numberOfLeadingZeros(arg0: number): number;
static numberOfTrailingZeros(arg0: number): number;
static parseLong(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
static parseLong(arg0: string): number;
static parseLong(arg0: string, arg1: number): number;
static parseUnsignedLong(arg0: java_lang_CharSequence, arg1: number, arg2: number, arg3: number): number;
static parseUnsignedLong(arg0: string): number;
static parseUnsignedLong(arg0: string, arg1: number): number;
static remainderUnsigned(arg0: number, arg1: number): number;
static reverse(arg0: number): number;
static reverseBytes(arg0: number): number;
static rotateLeft(arg0: number, arg1: number): number;
static rotateRight(arg0: number, arg1: number): number;
static signum(arg0: number): number;
static sum(arg0: number, arg1: number): number;
static toBinaryString(arg0: number): string;
static toHexString(arg0: number): string;
static toOctalString(arg0: number): string;
static toString(arg0: number): string;
static toString(arg0: number, arg1: number): string;
static toUnsignedString(arg0: number): string;
static toUnsignedString(arg0: number, arg1: number): string;
static valueOf(arg0: number): java_lang_Long;
static valueOf(arg0: string): java_lang_Long;
static valueOf(arg0: string, arg1: number): java_lang_Long;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Number extends java_lang_Object implements java_io_Serializable {

byteValue(): number;
doubleValue(): number;
floatValue(): number;
intValue(): number;
longValue(): number;
shortValue(): number;
constructor();
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Character as java_lang_Character, CharSequence as java_lang_CharSequence, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Character extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_lang_Character> {
static BYTES: number;
static COMBINING_SPACING_MARK: number;
static CONNECTOR_PUNCTUATION: number;
static CONTROL: number;
static CURRENCY_SYMBOL: number;
static DASH_PUNCTUATION: number;
static DECIMAL_DIGIT_NUMBER: number;
static DIRECTIONALITY_ARABIC_NUMBER: number;
static DIRECTIONALITY_BOUNDARY_NEUTRAL: number;
static DIRECTIONALITY_COMMON_NUMBER_SEPARATOR: number;
static DIRECTIONALITY_EUROPEAN_NUMBER: number;
static DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR: number;
static DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR: number;
static DIRECTIONALITY_FIRST_STRONG_ISOLATE: number;
static DIRECTIONALITY_LEFT_TO_RIGHT: number;
static DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING: number;
static DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE: number;
static DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE: number;
static DIRECTIONALITY_NONSPACING_MARK: number;
static DIRECTIONALITY_OTHER_NEUTRALS: number;
static DIRECTIONALITY_PARAGRAPH_SEPARATOR: number;
static DIRECTIONALITY_POP_DIRECTIONAL_FORMAT: number;
static DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE: number;
static DIRECTIONALITY_RIGHT_TO_LEFT: number;
static DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC: number;
static DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING: number;
static DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE: number;
static DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE: number;
static DIRECTIONALITY_SEGMENT_SEPARATOR: number;
static DIRECTIONALITY_UNDEFINED: number;
static DIRECTIONALITY_WHITESPACE: number;
static ENCLOSING_MARK: number;
static END_PUNCTUATION: number;
static FINAL_QUOTE_PUNCTUATION: number;
static FORMAT: number;
static INITIAL_QUOTE_PUNCTUATION: number;
static LETTER_NUMBER: number;
static LINE_SEPARATOR: number;
static LOWERCASE_LETTER: number;
static MATH_SYMBOL: number;
static MAX_CODE_POINT: number;
static MAX_HIGH_SURROGATE: string;
static MAX_LOW_SURROGATE: string;
static MAX_RADIX: number;
static MAX_SURROGATE: string;
static MAX_VALUE: string;
static MIN_CODE_POINT: number;
static MIN_HIGH_SURROGATE: string;
static MIN_LOW_SURROGATE: string;
static MIN_RADIX: number;
static MIN_SUPPLEMENTARY_CODE_POINT: number;
static MIN_SURROGATE: string;
static MIN_VALUE: string;
static MODIFIER_LETTER: number;
static MODIFIER_SYMBOL: number;
static NON_SPACING_MARK: number;
static OTHER_LETTER: number;
static OTHER_NUMBER: number;
static OTHER_PUNCTUATION: number;
static OTHER_SYMBOL: number;
static PARAGRAPH_SEPARATOR: number;
static PRIVATE_USE: number;
static SIZE: number;
static SPACE_SEPARATOR: number;
static START_PUNCTUATION: number;
static SURROGATE: number;
static TITLECASE_LETTER: number;
static TYPE: java_lang_Class<java_lang_Character>;
static UNASSIGNED: number;
static UPPERCASE_LETTER: number;
static directionality: number;
static directionality: number;
static name: string;
static numericValue: number;
static numericValue: number;
static type: number;
static type: number;
charValue(): string;
compareTo(arg0: java_lang_Character): number;
compareTo(arg0: java_lang_Object): number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static charCount(arg0: number): number;
static codePointAt(arg0: JArray<string>, arg1: number): number;
static codePointAt(arg0: JArray<string>, arg1: number, arg2: number): number;
static codePointAt(arg0: java_lang_CharSequence, arg1: number): number;
static codePointBefore(arg0: JArray<string>, arg1: number): number;
static codePointBefore(arg0: JArray<string>, arg1: number, arg2: number): number;
static codePointBefore(arg0: java_lang_CharSequence, arg1: number): number;
static codePointCount(arg0: JArray<string>, arg1: number, arg2: number): number;
static codePointCount(arg0: java_lang_CharSequence, arg1: number, arg2: number): number;
static codePointOf(arg0: string): number;
static compare(arg0: string, arg1: string): number;
static digit(arg0: number, arg1: number): number;
static digit(arg0: string, arg1: number): number;
static forDigit(arg0: number, arg1: number): string;
static getDirectionality(arg0: number): number;
static getDirectionality(arg0: string): number;
static getName(arg0: number): string;
static getNumericValue(arg0: number): number;
static getNumericValue(arg0: string): number;
static getType(arg0: number): number;
static getType(arg0: string): number;
static hashCode(arg0: string): number;
static highSurrogate(arg0: number): string;
static isAlphabetic(arg0: number): boolean;
static isBmpCodePoint(arg0: number): boolean;
static isDefined(arg0: number): boolean;
static isDefined(arg0: string): boolean;
static isDigit(arg0: number): boolean;
static isDigit(arg0: string): boolean;
static isHighSurrogate(arg0: string): boolean;
static isISOControl(arg0: number): boolean;
static isISOControl(arg0: string): boolean;
static isIdentifierIgnorable(arg0: number): boolean;
static isIdentifierIgnorable(arg0: string): boolean;
static isIdeographic(arg0: number): boolean;
static isJavaIdentifierPart(arg0: number): boolean;
static isJavaIdentifierPart(arg0: string): boolean;
static isJavaIdentifierStart(arg0: number): boolean;
static isJavaIdentifierStart(arg0: string): boolean;
static isJavaLetter(arg0: string): boolean;
static isJavaLetterOrDigit(arg0: string): boolean;
static isLetter(arg0: number): boolean;
static isLetter(arg0: string): boolean;
static isLetterOrDigit(arg0: number): boolean;
static isLetterOrDigit(arg0: string): boolean;
static isLowSurrogate(arg0: string): boolean;
static isLowerCase(arg0: number): boolean;
static isLowerCase(arg0: string): boolean;
static isMirrored(arg0: number): boolean;
static isMirrored(arg0: string): boolean;
static isSpace(arg0: string): boolean;
static isSpaceChar(arg0: number): boolean;
static isSpaceChar(arg0: string): boolean;
static isSupplementaryCodePoint(arg0: number): boolean;
static isSurrogate(arg0: string): boolean;
static isSurrogatePair(arg0: string, arg1: string): boolean;
static isTitleCase(arg0: number): boolean;
static isTitleCase(arg0: string): boolean;
static isUnicodeIdentifierPart(arg0: number): boolean;
static isUnicodeIdentifierPart(arg0: string): boolean;
static isUnicodeIdentifierStart(arg0: number): boolean;
static isUnicodeIdentifierStart(arg0: string): boolean;
static isUpperCase(arg0: number): boolean;
static isUpperCase(arg0: string): boolean;
static isValidCodePoint(arg0: number): boolean;
static isWhitespace(arg0: number): boolean;
static isWhitespace(arg0: string): boolean;
static lowSurrogate(arg0: number): string;
static offsetByCodePoints(arg0: JArray<string>, arg1: number, arg2: number, arg3: number, arg4: number): number;
static offsetByCodePoints(arg0: java_lang_CharSequence, arg1: number, arg2: number): number;
static reverseBytes(arg0: string): string;
static toChars(arg0: number): JArray<string>;
static toChars(arg0: number, arg1: JArray<string>, arg2: number): number;
static toCodePoint(arg0: string, arg1: string): number;
static toLowerCase(arg0: number): number;
static toLowerCase(arg0: string): string;
static toString(arg0: number): string;
static toString(arg0: string): string;
static toTitleCase(arg0: number): number;
static toTitleCase(arg0: string): string;
static toUpperCase(arg0: number): number;
static toUpperCase(arg0: string): string;
static valueOf(arg0: string): java_lang_Character;
toString(): string;
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
contextClassLoader: java_lang_ClassLoader;
id: number;
name: string;
priority: number;
stackTrace: JArray<java_lang_StackTraceElement>;
state: java_lang_Thread_State;
static MAX_PRIORITY: number;
static MIN_PRIORITY: number;
static NORM_PRIORITY: number;
static allStackTraces: java_util_Map<java_lang_Thread, JArray<java_lang_StackTraceElement>>;
static defaultUncaughtExceptionHandler: java_lang_Thread_UncaughtExceptionHandler;
threadGroup: java_lang_ThreadGroup;
uncaughtExceptionHandler: java_lang_Thread_UncaughtExceptionHandler;
checkAccess(): void;
countStackFrames(): number;
getContextClassLoader(): java_lang_ClassLoader;
getId(): number;
getName(): string;
getPriority(): number;
getStackTrace(): JArray<java_lang_StackTraceElement>;
getState(): java_lang_Thread_State;
getThreadGroup(): java_lang_ThreadGroup;
getUncaughtExceptionHandler(): java_lang_Thread_UncaughtExceptionHandler;
interrupt(): void;
isAlive(): boolean;
isDaemon(): boolean;
isInterrupted(): boolean;
join(): void;
join(arg0: number): void;
join(arg0: number, arg1: number): void;
resume(): void;
run(): void;
setContextClassLoader(arg0: java_lang_ClassLoader): void;
setDaemon(arg0: boolean): void;
setName(arg0: string): void;
setPriority(arg0: number): void;
setUncaughtExceptionHandler(arg0: java_lang_Thread_UncaughtExceptionHandler): void;
start(): void;
static activeCount(): number;
static currentThread(): java_lang_Thread;
static dumpStack(): void;
static enumerate(arg0: JArray<java_lang_Thread>): number;
static getAllStackTraces(): java_util_Map<java_lang_Thread, JArray<java_lang_StackTraceElement>>;
static getDefaultUncaughtExceptionHandler(): java_lang_Thread_UncaughtExceptionHandler;
static holdsLock(arg0: java_lang_Object): boolean;
static interrupted(): boolean;
static onSpinWait(): void;
static setDefaultUncaughtExceptionHandler(arg0: java_lang_Thread_UncaughtExceptionHandler): void;
static sleep(arg0: number): void;
static sleep(arg0: number, arg1: number): void;
static yield(): void;
stop(): void;
suspend(): void;
toString(): string;
constructor();
constructor(arg0: java_lang_Runnable);
constructor(arg0: java_lang_Runnable, arg1: string);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string, arg3: number);
constructor(arg0: java_lang_ThreadGroup, arg1: java_lang_Runnable, arg2: string, arg3: number, arg4: boolean);
constructor(arg0: java_lang_ThreadGroup, arg1: string);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { ThreadGroup as java_lang_ThreadGroup, Thread as java_lang_Thread, Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';
import { UncaughtExceptionHandler as java_lang_Thread_UncaughtExceptionHandler } from 'java.lang.Thread';

  export class ThreadGroup extends java_lang_Object implements java_lang_Thread_UncaughtExceptionHandler {
maxPriority: number;
name: string;
parent: java_lang_ThreadGroup;
activeCount(): number;
activeGroupCount(): number;
allowThreadSuspension(arg0: boolean): boolean;
checkAccess(): void;
destroy(): void;
enumerate(arg0: JArray<java_lang_Thread>): number;
enumerate(arg0: JArray<java_lang_Thread>, arg1: boolean): number;
enumerate(arg0: JArray<java_lang_ThreadGroup>): number;
enumerate(arg0: JArray<java_lang_ThreadGroup>, arg1: boolean): number;
getMaxPriority(): number;
getName(): string;
getParent(): java_lang_ThreadGroup;
interrupt(): void;
isDaemon(): boolean;
isDestroyed(): boolean;
list(): void;
parentOf(arg0: java_lang_ThreadGroup): boolean;
resume(): void;
setDaemon(arg0: boolean): void;
setMaxPriority(arg0: number): void;
stop(): void;
suspend(): void;
toString(): string;
uncaughtException(arg0: java_lang_Thread, arg1: java_lang_Throwable): void;
constructor(arg0: java_lang_ThreadGroup, arg1: string);
constructor(arg0: string);
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
classLoaderName: string;
className: string;
fileName: string;
lineNumber: number;
methodName: string;
moduleName: string;
moduleVersion: string;
equals(arg0: java_lang_Object): boolean;
getClassLoaderName(): string;
getClassName(): string;
getFileName(): string;
getLineNumber(): number;
getMethodName(): string;
getModuleName(): string;
getModuleVersion(): string;
hashCode(): number;
isNativeMethod(): boolean;
toString(): string;
constructor(arg0: string, arg1: string, arg2: string, arg3: number);
constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: number);
  }
}
//@ts-nocheck

declare module 'java.lang.Thread' {
import { State as java_lang_Thread_State } from 'java.lang.Thread';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class State extends java_lang_Enum<java_lang_Thread_State> {
class: java_lang_Class<java_lang_Object>;
static BLOCKED: java_lang_Thread_State;
static NEW: java_lang_Thread_State;
static RUNNABLE: java_lang_Thread_State;
static TERMINATED: java_lang_Thread_State;
static TIMED_WAITING: java_lang_Thread_State;
static WAITING: java_lang_Thread_State;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_lang_Thread_State;
static values(): JArray<java_lang_Thread_State>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Boolean extends java_lang_Object implements java_io_Serializable, java_lang_Comparable<java_lang_Boolean> {
static FALSE: java_lang_Boolean;
static TRUE: java_lang_Boolean;
static TYPE: java_lang_Class<java_lang_Boolean>;
static boolean: boolean;
booleanValue(): boolean;
compareTo(arg0: java_lang_Boolean): number;
compareTo(arg0: java_lang_Object): number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static compare(arg0: boolean, arg1: boolean): number;
static getBoolean(arg0: string): boolean;
static hashCode(arg0: boolean): number;
static logicalAnd(arg0: boolean, arg1: boolean): boolean;
static logicalOr(arg0: boolean, arg1: boolean): boolean;
static logicalXor(arg0: boolean, arg1: boolean): boolean;
static parseBoolean(arg0: string): boolean;
static toString(arg0: boolean): string;
static valueOf(arg0: boolean): java_lang_Boolean;
static valueOf(arg0: string): java_lang_Boolean;
toString(): string;
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
append(arg0: JArray<string>): java_lang_AbstractStringBuilder;
append(arg0: JArray<string>): java_lang_StringBuffer;
append(arg0: JArray<string>, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: JArray<string>, arg1: number, arg2: number): java_lang_StringBuffer;
append(arg0: boolean): java_lang_AbstractStringBuilder;
append(arg0: boolean): java_lang_StringBuffer;
append(arg0: java_lang_CharSequence): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_lang_StringBuffer;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_StringBuffer;
append(arg0: java_lang_Object): java_lang_AbstractStringBuilder;
append(arg0: java_lang_Object): java_lang_StringBuffer;
append(arg0: java_lang_StringBuffer): java_lang_AbstractStringBuilder;
append(arg0: java_lang_StringBuffer): java_lang_StringBuffer;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuffer;
append(arg0: number): java_lang_StringBuffer;
append(arg0: number): java_lang_StringBuffer;
append(arg0: number): java_lang_StringBuffer;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_Appendable;
append(arg0: string): java_lang_StringBuffer;
append(arg0: string): java_lang_StringBuffer;
appendCodePoint(arg0: number): java_lang_AbstractStringBuilder;
appendCodePoint(arg0: number): java_lang_StringBuffer;
capacity(): number;
charAt(arg0: number): string;
chars(): java_util_stream_IntStream;
codePointAt(arg0: number): number;
codePointBefore(arg0: number): number;
codePointCount(arg0: number, arg1: number): number;
codePoints(): java_util_stream_IntStream;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_StringBuffer): number;
delete(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
delete(arg0: number, arg1: number): java_lang_StringBuffer;
deleteCharAt(arg0: number): java_lang_AbstractStringBuilder;
deleteCharAt(arg0: number): java_lang_StringBuffer;
ensureCapacity(arg0: number): void;
equals(arg0: java_lang_Object): boolean;
getChars(arg0: number, arg1: number, arg2: JArray<string>, arg3: number): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
indexOf(arg0: string): number;
indexOf(arg0: string, arg1: number): number;
insert(arg0: number, arg1: JArray<string>): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: JArray<string>): java_lang_StringBuffer;
insert(arg0: number, arg1: JArray<string>, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: JArray<string>, arg2: number, arg3: number): java_lang_StringBuffer;
insert(arg0: number, arg1: boolean): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: boolean): java_lang_StringBuffer;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_StringBuffer;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_StringBuffer;
insert(arg0: number, arg1: java_lang_Object): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_Object): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_StringBuffer;
insert(arg0: number, arg1: number): java_lang_StringBuffer;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_StringBuffer;
insert(arg0: number, arg1: string): java_lang_StringBuffer;
lastIndexOf(arg0: string): number;
lastIndexOf(arg0: string, arg1: number): number;
length(): number;
notify(): void;
notifyAll(): void;
offsetByCodePoints(arg0: number, arg1: number): number;
replace(arg0: number, arg1: number, arg2: string): java_lang_AbstractStringBuilder;
replace(arg0: number, arg1: number, arg2: string): java_lang_StringBuffer;
reverse(): java_lang_AbstractStringBuilder;
reverse(): java_lang_StringBuffer;
setCharAt(arg0: number, arg1: string): void;
setLength(arg0: number): void;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
substring(arg0: number): string;
substring(arg0: number, arg1: number): string;
toString(): string;
trimToSize(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_lang_CharSequence);
constructor(arg0: number);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { AbstractStringBuilder as java_lang_AbstractStringBuilder, CharSequence as java_lang_CharSequence, Appendable as java_lang_Appendable, Object as java_lang_Object, StringBuffer as java_lang_StringBuffer } from 'java.lang';
import { IntStream as java_util_stream_IntStream } from 'java.util.stream';

  export class AbstractStringBuilder extends java_lang_Object implements java_lang_Appendable, java_lang_CharSequence {
chars: void;
append(arg0: JArray<string>): java_lang_AbstractStringBuilder;
append(arg0: JArray<string>, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: boolean): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_Object): java_lang_AbstractStringBuilder;
append(arg0: java_lang_StringBuffer): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_Appendable;
appendCodePoint(arg0: number): java_lang_AbstractStringBuilder;
capacity(): number;
charAt(arg0: number): string;
chars(): java_util_stream_IntStream;
codePointAt(arg0: number): number;
codePointBefore(arg0: number): number;
codePointCount(arg0: number, arg1: number): number;
codePoints(): java_util_stream_IntStream;
delete(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
deleteCharAt(arg0: number): java_lang_AbstractStringBuilder;
ensureCapacity(arg0: number): void;
getChars(arg0: number, arg1: number, arg2: JArray<string>, arg3: number): void;
indexOf(arg0: string): number;
indexOf(arg0: string, arg1: number): number;
insert(arg0: number, arg1: JArray<string>): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: JArray<string>, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: boolean): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_Object): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
lastIndexOf(arg0: string): number;
lastIndexOf(arg0: string, arg1: number): number;
length(): number;
offsetByCodePoints(arg0: number, arg1: number): number;
replace(arg0: number, arg1: number, arg2: string): java_lang_AbstractStringBuilder;
reverse(): java_lang_AbstractStringBuilder;
setCharAt(arg0: number, arg1: string): void;
setLength(arg0: number): void;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
substring(arg0: number): string;
substring(arg0: number, arg1: number): string;
toString(): string;
trimToSize(): void;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Object as java_lang_Object } from 'java.lang';

  export class Iterable<T extends java_lang_Object> {

forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
iterator(): java_util_Iterator<T>;
spliterator(): java_util_Spliterator<T>;

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
location(): java_util_Optional<java_net_URI>;
open(): java_lang_module_ModuleReader;

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

close(): void;
find(arg0: string): java_util_Optional<java_net_URI>;
list(): java_util_stream_Stream<string>;
open(arg0: string): java_util_Optional<java_io_InputStream>;
read(arg0: string): java_util_Optional<java_nio_ByteBuffer>;
release(arg0: java_nio_ByteBuffer): void;

  }
}
//@ts-nocheck

declare module 'java.lang.module' {
import { Object as java_lang_Object } from 'java.lang';
import { Set as java_util_Set } from 'java.util';
import { ResolvedModule as java_lang_module_ResolvedModule, ModuleReference as java_lang_module_ModuleReference, Configuration as java_lang_module_Configuration } from 'java.lang.module';

  export class ResolvedModule extends java_lang_Object {

configuration(): java_lang_module_Configuration;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
name(): string;
reads(): java_util_Set<java_lang_module_ResolvedModule>;
reference(): java_lang_module_ModuleReference;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang.ModuleLayer' {
import { Module as java_lang_Module, ModuleLayer as java_lang_ModuleLayer, Object as java_lang_Object } from 'java.lang';
import { Controller as java_lang_ModuleLayer_Controller } from 'java.lang.ModuleLayer';

  export class Controller extends java_lang_Object {

addExports(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): java_lang_ModuleLayer_Controller;
addOpens(arg0: java_lang_Module, arg1: string, arg2: java_lang_Module): java_lang_ModuleLayer_Controller;
addReads(arg0: java_lang_Module, arg1: java_lang_Module): java_lang_ModuleLayer_Controller;
layer(): java_lang_ModuleLayer;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { AnnotatedType as java_lang_reflect_AnnotatedType, Type as java_lang_reflect_Type, AnnotatedElement as java_lang_reflect_AnnotatedElement, GenericDeclaration as java_lang_reflect_GenericDeclaration } from 'java.lang.reflect';
import { Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class TypeVariable<D extends java_lang_reflect_GenericDeclaration> implements java_lang_reflect_Type, java_lang_reflect_AnnotatedElement {
annotatedBounds: JArray<java_lang_reflect_AnnotatedType>;
annotation: T;
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<T>;
bounds: JArray<java_lang_reflect_Type>;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
genericDeclaration: D;
name: string;
typeName: string;
getAnnotatedBounds(): JArray<java_lang_reflect_AnnotatedType>;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getBounds(): JArray<java_lang_reflect_Type>;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getGenericDeclaration(): D;
getName(): string;
getTypeName(): string;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';
import { Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class AnnotatedType implements java_lang_reflect_AnnotatedElement {
annotatedOwnerType: java_lang_reflect_AnnotatedType;
annotation: T;
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<T>;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
type: java_lang_reflect_Type;
getAnnotatedOwnerType(): java_lang_reflect_AnnotatedType;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getType(): java_lang_reflect_Type;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;

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
annotation: T;
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<T>;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
typeParameters: JArray<java_lang_reflect_TypeVariable<java_lang_Object>>;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getTypeParameters(): JArray<java_lang_reflect_TypeVariable<java_lang_Object>>;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { TypeVariable as java_lang_reflect_TypeVariable, Method as java_lang_reflect_Method, Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AccessibleObject as java_lang_reflect_AccessibleObject, Executable as java_lang_reflect_Executable } from 'java.lang.reflect';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Method extends java_lang_reflect_Executable {
annotatedReturnType: java_lang_reflect_AnnotatedType;
annotation: T;
annotations: JArray<java_lang_annotation_Annotation>;
class: java_lang_Class<java_lang_Object>;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
declaringClass: java_lang_Class<java_lang_Object>;
defaultValue: java_lang_Object;
exceptionTypes: JArray<java_lang_Class<java_lang_Object>>;
genericExceptionTypes: JArray<java_lang_reflect_Type>;
genericParameterTypes: JArray<java_lang_reflect_Type>;
genericReturnType: java_lang_reflect_Type;
modifiers: number;
name: string;
parameterAnnotations: JArray<Annotation[]>;
parameterCount: number;
parameterTypes: JArray<java_lang_Class<java_lang_Object>>;
returnType: java_lang_Class<java_lang_Object>;
typeParameters: JArray<java_lang_reflect_TypeVariable<java_lang_reflect_Method>>;
canAccess(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
getAnnotatedReturnType(): java_lang_reflect_AnnotatedType;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getClass(): java_lang_Class<java_lang_Object>;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getDefaultValue(): java_lang_Object;
getExceptionTypes(): JArray<java_lang_Class<java_lang_Object>>;
getGenericExceptionTypes(): JArray<java_lang_reflect_Type>;
getGenericParameterTypes(): JArray<java_lang_reflect_Type>;
getGenericReturnType(): java_lang_reflect_Type;
getModifiers(): number;
getName(): string;
getParameterAnnotations(): JArray<Annotation[]>;
getParameterCount(): number;
getParameterTypes(): JArray<java_lang_Class<java_lang_Object>>;
getReturnType(): java_lang_Class<java_lang_Object>;
getTypeParameters(): JArray<java_lang_reflect_TypeVariable<java_lang_reflect_Method>>;
hashCode(): number;
invoke(arg0: java_lang_Object, ...arg1: JArray<java_lang_Object>): java_lang_Object;
isAccessible(): boolean;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
isBridge(): boolean;
isDefault(): boolean;
isSynthetic(): boolean;
isVarArgs(): boolean;
notify(): void;
notifyAll(): void;
setAccessible(arg0: boolean): void;
static setAccessible(arg0: JArray<java_lang_reflect_AccessibleObject>, arg1: boolean): void;
toGenericString(): string;
toString(): string;
trySetAccessible(): boolean;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { AccessibleObject as java_lang_reflect_AccessibleObject, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class AccessibleObject extends java_lang_Object implements java_lang_reflect_AnnotatedElement {
annotation: T;
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<T>;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
canAccess(arg0: java_lang_Object): boolean;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
isAccessible(): boolean;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
setAccessible(arg0: boolean): void;
static setAccessible(arg0: JArray<java_lang_reflect_AccessibleObject>, arg1: boolean): void;
trySetAccessible(): boolean;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { TypeVariable as java_lang_reflect_TypeVariable, AnnotatedType as java_lang_reflect_AnnotatedType, Type as java_lang_reflect_Type, Parameter as java_lang_reflect_Parameter, AccessibleObject as java_lang_reflect_AccessibleObject, Member as java_lang_reflect_Member, GenericDeclaration as java_lang_reflect_GenericDeclaration } from 'java.lang.reflect';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Executable extends java_lang_reflect_AccessibleObject implements java_lang_reflect_Member, java_lang_reflect_GenericDeclaration {
annotatedExceptionTypes: JArray<java_lang_reflect_AnnotatedType>;
annotatedParameterTypes: JArray<java_lang_reflect_AnnotatedType>;
annotatedReceiverType: java_lang_reflect_AnnotatedType;
annotatedReturnType: java_lang_reflect_AnnotatedType;
annotation: T;
annotationsByType: JArray<T>;
class: java_lang_Class<java_lang_Object>;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaringClass: java_lang_Class<java_lang_Object>;
exceptionTypes: JArray<java_lang_Class<java_lang_Object>>;
genericExceptionTypes: JArray<java_lang_reflect_Type>;
genericParameterTypes: JArray<java_lang_reflect_Type>;
modifiers: number;
name: string;
parameterAnnotations: JArray<Annotation[]>;
parameterCount: number;
parameterTypes: JArray<java_lang_Class<java_lang_Object>>;
parameters: JArray<java_lang_reflect_Parameter>;
typeParameters: JArray<java_lang_reflect_TypeVariable<java_lang_Object>>;
equals(arg0: java_lang_Object): boolean;
getAnnotatedExceptionTypes(): JArray<java_lang_reflect_AnnotatedType>;
getAnnotatedParameterTypes(): JArray<java_lang_reflect_AnnotatedType>;
getAnnotatedReceiverType(): java_lang_reflect_AnnotatedType;
getAnnotatedReturnType(): java_lang_reflect_AnnotatedType;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getClass(): java_lang_Class<java_lang_Object>;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getExceptionTypes(): JArray<java_lang_Class<java_lang_Object>>;
getGenericExceptionTypes(): JArray<java_lang_reflect_Type>;
getGenericParameterTypes(): JArray<java_lang_reflect_Type>;
getModifiers(): number;
getName(): string;
getParameterAnnotations(): JArray<Annotation[]>;
getParameterCount(): number;
getParameterTypes(): JArray<java_lang_Class<java_lang_Object>>;
getParameters(): JArray<java_lang_reflect_Parameter>;
getTypeParameters(): JArray<java_lang_reflect_TypeVariable<java_lang_Object>>;
hashCode(): number;
isSynthetic(): boolean;
isVarArgs(): boolean;
notify(): void;
notifyAll(): void;
toGenericString(): string;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { AnnotatedType as java_lang_reflect_AnnotatedType, Executable as java_lang_reflect_Executable, Type as java_lang_reflect_Type, AnnotatedElement as java_lang_reflect_AnnotatedElement } from 'java.lang.reflect';

  export class Parameter extends java_lang_Object implements java_lang_reflect_AnnotatedElement {
annotatedType: java_lang_reflect_AnnotatedType;
annotation: T;
annotations: JArray<java_lang_annotation_Annotation>;
annotationsByType: JArray<T>;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
declaringExecutable: java_lang_reflect_Executable;
modifiers: number;
name: string;
parameterizedType: java_lang_reflect_Type;
type: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
getAnnotatedType(): java_lang_reflect_AnnotatedType;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDeclaringExecutable(): java_lang_reflect_Executable;
getModifiers(): number;
getName(): string;
getParameterizedType(): java_lang_reflect_Type;
getType(): java_lang_Class<java_lang_Object>;
hashCode(): number;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
isImplicit(): boolean;
isNamePresent(): boolean;
isSynthetic(): boolean;
isVarArgs(): boolean;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class Member {
declaringClass: java_lang_Class<java_lang_Object>;
modifiers: number;
name: string;
static DECLARED: number;
static PUBLIC: number;
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getModifiers(): number;
getName(): string;
isSynthetic(): boolean;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { TypeVariable as java_lang_reflect_TypeVariable, Constructor as java_lang_reflect_Constructor, Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AccessibleObject as java_lang_reflect_AccessibleObject, Executable as java_lang_reflect_Executable } from 'java.lang.reflect';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';

  export class Constructor<T extends java_lang_Object> extends java_lang_reflect_Executable {
annotatedReceiverType: java_lang_reflect_AnnotatedType;
annotatedReturnType: java_lang_reflect_AnnotatedType;
annotation: T;
annotations: JArray<java_lang_annotation_Annotation>;
class: java_lang_Class<java_lang_Object>;
declaredAnnotation: T;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaredAnnotationsByType: JArray<T>;
declaringClass: java_lang_Class<T>;
exceptionTypes: JArray<java_lang_Class<java_lang_Object>>;
genericExceptionTypes: JArray<java_lang_reflect_Type>;
genericParameterTypes: JArray<java_lang_reflect_Type>;
modifiers: number;
name: string;
parameterAnnotations: JArray<Annotation[]>;
parameterCount: number;
parameterTypes: JArray<java_lang_Class<java_lang_Object>>;
typeParameters: JArray<java_lang_reflect_TypeVariable<java_lang_reflect_Constructor<T>>>;
canAccess(arg0: java_lang_Object): boolean;
equals(arg0: java_lang_Object): boolean;
getAnnotatedReceiverType(): java_lang_reflect_AnnotatedType;
getAnnotatedReturnType(): java_lang_reflect_AnnotatedType;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotations(): JArray<java_lang_annotation_Annotation>;
getClass(): java_lang_Class<java_lang_Object>;
getDeclaredAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaredAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getDeclaringClass(): java_lang_Class<T>;
getExceptionTypes(): JArray<java_lang_Class<java_lang_Object>>;
getGenericExceptionTypes(): JArray<java_lang_reflect_Type>;
getGenericParameterTypes(): JArray<java_lang_reflect_Type>;
getModifiers(): number;
getName(): string;
getParameterAnnotations(): JArray<Annotation[]>;
getParameterCount(): number;
getParameterTypes(): JArray<java_lang_Class<java_lang_Object>>;
getTypeParameters(): JArray<java_lang_reflect_TypeVariable<java_lang_reflect_Constructor<T>>>;
hashCode(): number;
isAccessible(): boolean;
isAnnotationPresent(arg0: java_lang_Class<java_lang_annotation_Annotation>): boolean;
isSynthetic(): boolean;
isVarArgs(): boolean;
newInstance(...arg0: JArray<java_lang_Object>): T;
notify(): void;
notifyAll(): void;
setAccessible(arg0: boolean): void;
static setAccessible(arg0: JArray<java_lang_reflect_AccessibleObject>, arg1: boolean): void;
toGenericString(): string;
toString(): string;
trySetAccessible(): boolean;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang.reflect' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { Type as java_lang_reflect_Type, AnnotatedType as java_lang_reflect_AnnotatedType, AccessibleObject as java_lang_reflect_AccessibleObject, Member as java_lang_reflect_Member } from 'java.lang.reflect';

  export class Field extends java_lang_reflect_AccessibleObject implements java_lang_reflect_Member {
annotatedType: java_lang_reflect_AnnotatedType;
annotation: T;
annotationsByType: JArray<T>;
boolean: boolean;
byte: number;
char: string;
class: java_lang_Class<java_lang_Object>;
declaredAnnotations: JArray<java_lang_annotation_Annotation>;
declaringClass: java_lang_Class<java_lang_Object>;
double: number;
float: number;
genericType: java_lang_reflect_Type;
int: number;
long: number;
modifiers: number;
name: string;
short: number;
type: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
get(arg0: java_lang_Object): java_lang_Object;
getAnnotatedType(): java_lang_reflect_AnnotatedType;
getAnnotation<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): T;
getAnnotationsByType<T extends java_lang_annotation_Annotation>(arg0: java_lang_Class<T>): JArray<T>;
getBoolean(arg0: java_lang_Object): boolean;
getByte(arg0: java_lang_Object): number;
getChar(arg0: java_lang_Object): string;
getClass(): java_lang_Class<java_lang_Object>;
getDeclaredAnnotations(): JArray<java_lang_annotation_Annotation>;
getDeclaringClass(): java_lang_Class<java_lang_Object>;
getDouble(arg0: java_lang_Object): number;
getFloat(arg0: java_lang_Object): number;
getGenericType(): java_lang_reflect_Type;
getInt(arg0: java_lang_Object): number;
getLong(arg0: java_lang_Object): number;
getModifiers(): number;
getName(): string;
getShort(arg0: java_lang_Object): number;
getType(): java_lang_Class<java_lang_Object>;
hashCode(): number;
isEnumConstant(): boolean;
isSynthetic(): boolean;
notify(): void;
notifyAll(): void;
set(arg0: java_lang_Object, arg1: java_lang_Object): void;
setAccessible(arg0: boolean): void;
setBoolean(arg0: java_lang_Object, arg1: boolean): void;
setByte(arg0: java_lang_Object, arg1: number): void;
setChar(arg0: java_lang_Object, arg1: string): void;
setDouble(arg0: java_lang_Object, arg1: number): void;
setFloat(arg0: java_lang_Object, arg1: number): void;
setInt(arg0: java_lang_Object, arg1: number): void;
setLong(arg0: java_lang_Object, arg1: number): void;
setShort(arg0: java_lang_Object, arg1: number): void;
toGenericString(): string;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Double as java_lang_Double, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Double extends java_lang_Number implements java_lang_Comparable<java_lang_Double> {
class: java_lang_Class<java_lang_Object>;
static BYTES: number;
static MAX_EXPONENT: number;
static MAX_VALUE: number;
static MIN_EXPONENT: number;
static MIN_NORMAL: number;
static MIN_VALUE: number;
static NEGATIVE_INFINITY: number;
static NaN: number;
static POSITIVE_INFINITY: number;
static SIZE: number;
static TYPE: java_lang_Class<java_lang_Double>;
byteValue(): number;
compareTo(arg0: java_lang_Double): number;
compareTo(arg0: java_lang_Object): number;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
floatValue(): number;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
intValue(): number;
isInfinite(): boolean;
isNaN(): boolean;
longValue(): number;
notify(): void;
notifyAll(): void;
shortValue(): number;
static compare(arg0: number, arg1: number): number;
static doubleToLongBits(arg0: number): number;
static doubleToRawLongBits(arg0: number): number;
static hashCode(arg0: number): number;
static isFinite(arg0: number): boolean;
static isInfinite(arg0: number): boolean;
static isNaN(arg0: number): boolean;
static longBitsToDouble(arg0: number): number;
static max(arg0: number, arg1: number): number;
static min(arg0: number, arg1: number): number;
static parseDouble(arg0: string): number;
static sum(arg0: number, arg1: number): number;
static toHexString(arg0: number): string;
static toString(arg0: number): string;
static valueOf(arg0: number): java_lang_Double;
static valueOf(arg0: string): java_lang_Double;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Class as java_lang_Class, Throwable as java_lang_Throwable } from 'java.lang';

  export class Exception extends java_lang_Throwable {
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
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

declare module 'java.lang' {
import { Object as java_lang_Object, Byte as java_lang_Byte, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Byte extends java_lang_Number implements java_lang_Comparable<java_lang_Byte> {
class: java_lang_Class<java_lang_Object>;
static BYTES: number;
static MAX_VALUE: number;
static MIN_VALUE: number;
static SIZE: number;
static TYPE: java_lang_Class<java_lang_Byte>;
byteValue(): number;
compareTo(arg0: java_lang_Byte): number;
compareTo(arg0: java_lang_Object): number;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
floatValue(): number;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
intValue(): number;
longValue(): number;
notify(): void;
notifyAll(): void;
shortValue(): number;
static compare(arg0: number, arg1: number): number;
static compareUnsigned(arg0: number, arg1: number): number;
static decode(arg0: string): java_lang_Byte;
static hashCode(arg0: number): number;
static parseByte(arg0: string): number;
static parseByte(arg0: string, arg1: number): number;
static toString(arg0: number): string;
static toUnsignedInt(arg0: number): number;
static toUnsignedLong(arg0: number): number;
static valueOf(arg0: number): java_lang_Byte;
static valueOf(arg0: string): java_lang_Byte;
static valueOf(arg0: string, arg1: number): java_lang_Byte;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Short as java_lang_Short, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Short extends java_lang_Number implements java_lang_Comparable<java_lang_Short> {
class: java_lang_Class<java_lang_Object>;
static BYTES: number;
static MAX_VALUE: number;
static MIN_VALUE: number;
static SIZE: number;
static TYPE: java_lang_Class<java_lang_Short>;
byteValue(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_Short): number;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
floatValue(): number;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
intValue(): number;
longValue(): number;
notify(): void;
notifyAll(): void;
shortValue(): number;
static compare(arg0: number, arg1: number): number;
static compareUnsigned(arg0: number, arg1: number): number;
static decode(arg0: string): java_lang_Short;
static hashCode(arg0: number): number;
static parseShort(arg0: string): number;
static parseShort(arg0: string, arg1: number): number;
static reverseBytes(arg0: number): number;
static toString(arg0: number): string;
static toUnsignedInt(arg0: number): number;
static toUnsignedLong(arg0: number): number;
static valueOf(arg0: number): java_lang_Short;
static valueOf(arg0: string): java_lang_Short;
static valueOf(arg0: string, arg1: number): java_lang_Short;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.lang' {
import { Object as java_lang_Object, Float as java_lang_Float, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class Float extends java_lang_Number implements java_lang_Comparable<java_lang_Float> {
class: java_lang_Class<java_lang_Object>;
static BYTES: number;
static MAX_EXPONENT: number;
static MAX_VALUE: number;
static MIN_EXPONENT: number;
static MIN_NORMAL: number;
static MIN_VALUE: number;
static NEGATIVE_INFINITY: number;
static NaN: number;
static POSITIVE_INFINITY: number;
static SIZE: number;
static TYPE: java_lang_Class<java_lang_Float>;
byteValue(): number;
compareTo(arg0: java_lang_Float): number;
compareTo(arg0: java_lang_Object): number;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
floatValue(): number;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
intValue(): number;
isInfinite(): boolean;
isNaN(): boolean;
longValue(): number;
notify(): void;
notifyAll(): void;
shortValue(): number;
static compare(arg0: number, arg1: number): number;
static floatToIntBits(arg0: number): number;
static floatToRawIntBits(arg0: number): number;
static hashCode(arg0: number): number;
static intBitsToFloat(arg0: number): number;
static isFinite(arg0: number): boolean;
static isInfinite(arg0: number): boolean;
static isNaN(arg0: number): boolean;
static max(arg0: number, arg1: number): number;
static min(arg0: number, arg1: number): number;
static parseFloat(arg0: string): number;
static sum(arg0: number, arg1: number): number;
static toHexString(arg0: number): string;
static toString(arg0: number): string;
static valueOf(arg0: number): java_lang_Float;
static valueOf(arg0: string): java_lang_Float;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: number);
constructor(arg0: string);
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
append(arg0: JArray<string>): java_lang_AbstractStringBuilder;
append(arg0: JArray<string>): java_lang_StringBuilder;
append(arg0: JArray<string>, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: JArray<string>, arg1: number, arg2: number): java_lang_StringBuilder;
append(arg0: boolean): java_lang_AbstractStringBuilder;
append(arg0: boolean): java_lang_StringBuilder;
append(arg0: java_lang_CharSequence): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence): java_lang_Appendable;
append(arg0: java_lang_CharSequence): java_lang_StringBuilder;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_AbstractStringBuilder;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_Appendable;
append(arg0: java_lang_CharSequence, arg1: number, arg2: number): java_lang_StringBuilder;
append(arg0: java_lang_Object): java_lang_AbstractStringBuilder;
append(arg0: java_lang_Object): java_lang_StringBuilder;
append(arg0: java_lang_StringBuffer): java_lang_AbstractStringBuilder;
append(arg0: java_lang_StringBuffer): java_lang_StringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_AbstractStringBuilder;
append(arg0: number): java_lang_StringBuilder;
append(arg0: number): java_lang_StringBuilder;
append(arg0: number): java_lang_StringBuilder;
append(arg0: number): java_lang_StringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_AbstractStringBuilder;
append(arg0: string): java_lang_Appendable;
append(arg0: string): java_lang_StringBuilder;
append(arg0: string): java_lang_StringBuilder;
appendCodePoint(arg0: number): java_lang_AbstractStringBuilder;
appendCodePoint(arg0: number): java_lang_StringBuilder;
capacity(): number;
charAt(arg0: number): string;
chars(): java_util_stream_IntStream;
codePointAt(arg0: number): number;
codePointBefore(arg0: number): number;
codePointCount(arg0: number, arg1: number): number;
codePoints(): java_util_stream_IntStream;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_lang_StringBuilder): number;
delete(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
delete(arg0: number, arg1: number): java_lang_StringBuilder;
deleteCharAt(arg0: number): java_lang_AbstractStringBuilder;
deleteCharAt(arg0: number): java_lang_StringBuilder;
ensureCapacity(arg0: number): void;
equals(arg0: java_lang_Object): boolean;
getChars(arg0: number, arg1: number, arg2: JArray<string>, arg3: number): void;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
indexOf(arg0: string): number;
indexOf(arg0: string, arg1: number): number;
insert(arg0: number, arg1: JArray<string>): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: JArray<string>): java_lang_StringBuilder;
insert(arg0: number, arg1: JArray<string>, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: JArray<string>, arg2: number, arg3: number): java_lang_StringBuilder;
insert(arg0: number, arg1: boolean): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: boolean): java_lang_StringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence): java_lang_StringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_CharSequence, arg2: number, arg3: number): java_lang_StringBuilder;
insert(arg0: number, arg1: java_lang_Object): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: java_lang_Object): java_lang_StringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuilder;
insert(arg0: number, arg1: number): java_lang_StringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_AbstractStringBuilder;
insert(arg0: number, arg1: string): java_lang_StringBuilder;
insert(arg0: number, arg1: string): java_lang_StringBuilder;
lastIndexOf(arg0: string): number;
lastIndexOf(arg0: string, arg1: number): number;
length(): number;
notify(): void;
notifyAll(): void;
offsetByCodePoints(arg0: number, arg1: number): number;
replace(arg0: number, arg1: number, arg2: string): java_lang_AbstractStringBuilder;
replace(arg0: number, arg1: number, arg2: string): java_lang_StringBuilder;
reverse(): java_lang_AbstractStringBuilder;
reverse(): java_lang_StringBuilder;
setCharAt(arg0: number, arg1: string): void;
setLength(arg0: number): void;
subSequence(arg0: number, arg1: number): java_lang_CharSequence;
substring(arg0: number): string;
substring(arg0: number, arg1: number): string;
toString(): string;
trimToSize(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_lang_CharSequence);
constructor(arg0: number);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.lang.Character' {
import { Object as java_lang_Object } from 'java.lang';

  export class Subset extends java_lang_Object {

equals(arg0: java_lang_Object): boolean;
hashCode(): number;
toString(): string;

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
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
stackTrace: JArray<java_lang_StackTraceElement>;
suppressed: JArray<java_lang_Throwable>;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getStackTrace(): JArray<java_lang_StackTraceElement>;
getSuppressed(): JArray<java_lang_Throwable>;
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setStackTrace(arg0: JArray<java_lang_StackTraceElement>): void;
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

declare module 'java.lang.invoke' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MethodType as java_lang_invoke_MethodType, MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { List as java_util_List } from 'java.util';

  export class MethodHandle extends java_lang_Object {

asCollector(arg0: java_lang_Class<java_lang_Object>, arg1: number): java_lang_invoke_MethodHandle;
asCollector(arg0: number, arg1: java_lang_Class<java_lang_Object>, arg2: number): java_lang_invoke_MethodHandle;
asFixedArity(): java_lang_invoke_MethodHandle;
asSpreader(arg0: java_lang_Class<java_lang_Object>, arg1: number): java_lang_invoke_MethodHandle;
asSpreader(arg0: number, arg1: java_lang_Class<java_lang_Object>, arg2: number): java_lang_invoke_MethodHandle;
asType(arg0: java_lang_invoke_MethodType): java_lang_invoke_MethodHandle;
asVarargsCollector(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodHandle;
bindTo(arg0: java_lang_Object): java_lang_invoke_MethodHandle;
invoke(...arg0: JArray<java_lang_Object>): java_lang_Object;
invokeExact(...arg0: JArray<java_lang_Object>): java_lang_Object;
invokeWithArguments(...arg0: JArray<java_lang_Object>): java_lang_Object;
invokeWithArguments(arg0: java_util_List<java_lang_Object>): java_lang_Object;
isVarargsCollector(): boolean;
toString(): string;
type(): java_lang_invoke_MethodType;
withVarargs(arg0: boolean): java_lang_invoke_MethodHandle;

  }
}
//@ts-nocheck

declare module 'java.lang.invoke' {
import { Class as java_lang_Class, Object as java_lang_Object, ClassLoader as java_lang_ClassLoader } from 'java.lang';
import { MethodType as java_lang_invoke_MethodType } from 'java.lang.invoke';
import { List as java_util_List } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class MethodType extends java_lang_Object implements java_io_Serializable {

appendParameterTypes(...arg0: JArray<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
appendParameterTypes(arg0: java_util_List<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
changeParameterType(arg0: number, arg1: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodType;
changeReturnType(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodType;
dropParameterTypes(arg0: number, arg1: number): java_lang_invoke_MethodType;
equals(arg0: java_lang_Object): boolean;
erase(): java_lang_invoke_MethodType;
generic(): java_lang_invoke_MethodType;
hasPrimitives(): boolean;
hasWrappers(): boolean;
hashCode(): number;
insertParameterTypes(arg0: number, ...arg1: JArray<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
insertParameterTypes(arg0: number, arg1: java_util_List<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
lastParameterType(): java_lang_Class<java_lang_Object>;
parameterArray(): JArray<java_lang_Class<java_lang_Object>>;
parameterCount(): number;
parameterList(): java_util_List<java_lang_Class<java_lang_Object>>;
parameterType(arg0: number): java_lang_Class<java_lang_Object>;
returnType(): java_lang_Class<java_lang_Object>;
static fromMethodDescriptorString(arg0: string, arg1: java_lang_ClassLoader): java_lang_invoke_MethodType;
static genericMethodType(arg0: number): java_lang_invoke_MethodType;
static genericMethodType(arg0: number, arg1: boolean): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: JArray<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_Class<java_lang_Object>): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_Class<java_lang_Object>, ...arg2: JArray<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_invoke_MethodType): java_lang_invoke_MethodType;
static methodType(arg0: java_lang_Class<java_lang_Object>, arg1: java_util_List<java_lang_Class<java_lang_Object>>): java_lang_invoke_MethodType;
toMethodDescriptorString(): string;
toString(): string;
unwrap(): java_lang_invoke_MethodType;
wrap(): java_lang_invoke_MethodType;

  }
}