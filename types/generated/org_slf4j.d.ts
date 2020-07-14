//@ts-nocheck

declare module 'org.slf4j' {
import { Object as java_lang_Object, Throwable as java_lang_Throwable } from 'java.lang';
import { Marker as org_slf4j_Marker } from 'org.slf4j';

  export class Logger {
name: string;
static ROOT_LOGGER_NAME: string;
debug(arg0: org_slf4j_Marker, arg1: string): void;
debug(arg0: org_slf4j_Marker, arg1: string, ...arg2: JArray<java_lang_Object>): void;
debug(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
debug(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
debug(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
debug(arg0: string): void;
debug(arg0: string, ...arg1: JArray<java_lang_Object>): void;
debug(arg0: string, arg1: java_lang_Object): void;
debug(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
debug(arg0: string, arg1: java_lang_Throwable): void;
error(arg0: org_slf4j_Marker, arg1: string): void;
error(arg0: org_slf4j_Marker, arg1: string, ...arg2: JArray<java_lang_Object>): void;
error(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
error(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
error(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
error(arg0: string): void;
error(arg0: string, ...arg1: JArray<java_lang_Object>): void;
error(arg0: string, arg1: java_lang_Object): void;
error(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
error(arg0: string, arg1: java_lang_Throwable): void;
getName(): string;
info(arg0: org_slf4j_Marker, arg1: string): void;
info(arg0: org_slf4j_Marker, arg1: string, ...arg2: JArray<java_lang_Object>): void;
info(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
info(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
info(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
info(arg0: string): void;
info(arg0: string, ...arg1: JArray<java_lang_Object>): void;
info(arg0: string, arg1: java_lang_Object): void;
info(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
info(arg0: string, arg1: java_lang_Throwable): void;
isDebugEnabled(): boolean;
isDebugEnabled(arg0: org_slf4j_Marker): boolean;
isErrorEnabled(): boolean;
isErrorEnabled(arg0: org_slf4j_Marker): boolean;
isInfoEnabled(): boolean;
isInfoEnabled(arg0: org_slf4j_Marker): boolean;
isTraceEnabled(): boolean;
isTraceEnabled(arg0: org_slf4j_Marker): boolean;
isWarnEnabled(): boolean;
isWarnEnabled(arg0: org_slf4j_Marker): boolean;
trace(arg0: org_slf4j_Marker, arg1: string): void;
trace(arg0: org_slf4j_Marker, arg1: string, ...arg2: JArray<java_lang_Object>): void;
trace(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
trace(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
trace(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
trace(arg0: string): void;
trace(arg0: string, ...arg1: JArray<java_lang_Object>): void;
trace(arg0: string, arg1: java_lang_Object): void;
trace(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
trace(arg0: string, arg1: java_lang_Throwable): void;
warn(arg0: org_slf4j_Marker, arg1: string): void;
warn(arg0: org_slf4j_Marker, arg1: string, ...arg2: JArray<java_lang_Object>): void;
warn(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
warn(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
warn(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
warn(arg0: string): void;
warn(arg0: string, ...arg1: JArray<java_lang_Object>): void;
warn(arg0: string, arg1: java_lang_Object): void;
warn(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
warn(arg0: string, arg1: java_lang_Throwable): void;

  }
}
//@ts-nocheck

declare module 'org.slf4j' {
import { Marker as org_slf4j_Marker } from 'org.slf4j';
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Marker implements java_io_Serializable {
name: string;
static ANY_MARKER: string;
static ANY_NON_NULL_MARKER: string;
add(arg0: org_slf4j_Marker): void;
contains(arg0: org_slf4j_Marker): boolean;
contains(arg0: string): boolean;
equals(arg0: java_lang_Object): boolean;
getName(): string;
hasChildren(): boolean;
hasReferences(): boolean;
hashCode(): number;
iterator(): java_util_Iterator<org_slf4j_Marker>;
remove(arg0: org_slf4j_Marker): boolean;

  }
}