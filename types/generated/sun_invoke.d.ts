//@ts-nocheck

declare module 'sun.invoke.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Enum as java_lang_Enum } from 'java.lang';
import { Wrapper as sun_invoke_util_Wrapper } from 'sun.invoke.util';

  export class Wrapper extends java_lang_Enum<sun_invoke_util_Wrapper> {
static BOOLEAN: sun_invoke_util_Wrapper;
static BYTE: sun_invoke_util_Wrapper;
static SHORT: sun_invoke_util_Wrapper;
static CHAR: sun_invoke_util_Wrapper;
static INT: sun_invoke_util_Wrapper;
static LONG: sun_invoke_util_Wrapper;
static FLOAT: sun_invoke_util_Wrapper;
static DOUBLE: sun_invoke_util_Wrapper;
static OBJECT: sun_invoke_util_Wrapper;
static VOID: sun_invoke_util_Wrapper;
static COUNT: number;
wrapperType: java_lang_Class<java_lang_Object>;
primitiveType: java_lang_Class<java_lang_Object>;
basicTypeChar: string;
emptyArray: java_lang_Object;
format: number;
wrapperSimpleName: string;
primitiveSimpleName: string;
static DOUBLE_ZERO: java_lang_Object;
static FLOAT_ZERO: java_lang_Object;
static FROM_PRIM: sun_invoke_util_Wrapper[];
static FROM_WRAP: sun_invoke_util_Wrapper[];
static FROM_CHAR: sun_invoke_util_Wrapper[];
static $VALUES: sun_invoke_util_Wrapper[];
static $assertionsDisabled: boolean;
class: java_lang_Class<java_lang_Object>;
convert<T extends java_lang_Object>(arg0: java_lang_Object, arg1: java_lang_Class<T>): T;
isOther(): boolean;
isNumeric(): boolean;
isDoubleWord(): boolean;
static asPrimitiveType<T extends java_lang_Object>(arg0: java_lang_Class<T>): java_lang_Class<T>;
static asWrapperType<T extends java_lang_Object>(arg0: java_lang_Class<T>): java_lang_Class<T>;
wrapperSimpleName(): string;
primitiveSimpleName(): string;
detailString(): string;
bitWidth(): number;
stackSlots(): number;
isSingleWord(): boolean;
isIntegral(): boolean;
isSigned(): boolean;
isUnsigned(): boolean;
isFloating(): boolean;
static isPrimitiveType(arg0: java_lang_Class<java_lang_Object>): boolean;
makeArray(arg0: number): java_lang_Object;
copyArrayUnboxing(arg0: java_lang_Object[], arg1: number, arg2: java_lang_Object, arg3: number, arg4: number): void;
copyArrayBoxing(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object[], arg3: number, arg4: number): void;
static values(): sun_invoke_util_Wrapper[];
cast<T extends java_lang_Object>(arg0: java_lang_Object, arg1: java_lang_Class<T>): T;
static valueOf(arg0: string): sun_invoke_util_Wrapper;
wrap(arg0: number): java_lang_Object;
wrap(arg0: java_lang_Object): java_lang_Object;
static forPrimitiveType(arg0: string): sun_invoke_util_Wrapper;
static forPrimitiveType(arg0: java_lang_Class<java_lang_Object>): sun_invoke_util_Wrapper;
primitiveType(): java_lang_Class<java_lang_Object>;
arrayType(): java_lang_Class<java_lang_Object>;
static forBasicType(arg0: java_lang_Class<java_lang_Object>): sun_invoke_util_Wrapper;
static forBasicType(arg0: string): sun_invoke_util_Wrapper;
static basicTypeChar(arg0: java_lang_Class<java_lang_Object>): string;
basicTypeChar(): string;
zero(): java_lang_Object;
zero<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;
isSubwordOrInt(): boolean;
isConvertibleFrom(arg0: sun_invoke_util_Wrapper): boolean;
wrapperType(): java_lang_Class<java_lang_Object>;
wrapperType<T extends java_lang_Object>(arg0: java_lang_Class<T>): java_lang_Class<T>;
static isWrapperType(arg0: java_lang_Class<java_lang_Object>): boolean;
static forWrapperType(arg0: java_lang_Class<java_lang_Object>): sun_invoke_util_Wrapper;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}