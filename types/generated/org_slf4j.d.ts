//@ts-nocheck

declare module 'org.slf4j' {
import { Marker as org_slf4j_Marker } from 'org.slf4j';
import { Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';

  export class Logger {
static ROOT_LOGGER_NAME: string;
name: string;
warn(arg0: org_slf4j_Marker, arg1: string): void;
warn(arg0: string, arg1: java_lang_Throwable): void;
warn(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
warn(arg0: string, ...arg1: java_lang_Object[]): void;
warn(arg0: string, arg1: java_lang_Object): void;
warn(arg0: string): void;
warn(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
warn(arg0: org_slf4j_Marker, arg1: string, ...arg2: java_lang_Object[]): void;
warn(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
warn(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
getName(): string;
info(arg0: string, arg1: java_lang_Throwable): void;
info(arg0: string, ...arg1: java_lang_Object[]): void;
info(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
info(arg0: string, arg1: java_lang_Object): void;
info(arg0: string): void;
info(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
info(arg0: org_slf4j_Marker, arg1: string, ...arg2: java_lang_Object[]): void;
info(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
info(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
info(arg0: org_slf4j_Marker, arg1: string): void;
trace(arg0: string, arg1: java_lang_Throwable): void;
trace(arg0: org_slf4j_Marker, arg1: string): void;
trace(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
trace(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
trace(arg0: org_slf4j_Marker, arg1: string, ...arg2: java_lang_Object[]): void;
trace(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
trace(arg0: string): void;
trace(arg0: string, arg1: java_lang_Object): void;
trace(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
trace(arg0: string, ...arg1: java_lang_Object[]): void;
debug(arg0: string): void;
debug(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
debug(arg0: string, ...arg1: java_lang_Object[]): void;
debug(arg0: string, arg1: java_lang_Throwable): void;
debug(arg0: org_slf4j_Marker, arg1: string, ...arg2: java_lang_Object[]): void;
debug(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
debug(arg0: org_slf4j_Marker, arg1: string): void;
debug(arg0: string, arg1: java_lang_Object): void;
debug(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
debug(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
error(arg0: org_slf4j_Marker, arg1: string, ...arg2: java_lang_Object[]): void;
error(arg0: string): void;
error(arg0: string, arg1: java_lang_Object): void;
error(arg0: org_slf4j_Marker, arg1: string): void;
error(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object): void;
error(arg0: string, arg1: java_lang_Throwable): void;
error(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object): void;
error(arg0: string, ...arg1: java_lang_Object[]): void;
error(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
error(arg0: org_slf4j_Marker, arg1: string, arg2: java_lang_Throwable): void;
isDebugEnabled(arg0: org_slf4j_Marker): boolean;
isDebugEnabled(): boolean;
isErrorEnabled(arg0: org_slf4j_Marker): boolean;
isErrorEnabled(): boolean;
isInfoEnabled(arg0: org_slf4j_Marker): boolean;
isInfoEnabled(): boolean;
isTraceEnabled(arg0: org_slf4j_Marker): boolean;
isTraceEnabled(): boolean;
isWarnEnabled(arg0: org_slf4j_Marker): boolean;
isWarnEnabled(): boolean;

  }
}//@ts-nocheck

declare module 'org.slf4j' {
import { Marker as org_slf4j_Marker } from 'org.slf4j';
import { Object as java_lang_Object } from 'java.lang';
import { Iterator as java_util_Iterator } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Marker implements java_io_Serializable {
static ANY_MARKER: string;
static ANY_NON_NULL_MARKER: string;
name: string;
add(arg0: org_slf4j_Marker): void;
remove(arg0: org_slf4j_Marker): boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getName(): string;
contains(arg0: string): boolean;
contains(arg0: org_slf4j_Marker): boolean;
iterator(): java_util_Iterator<org_slf4j_Marker>;
hasChildren(): boolean;
hasReferences(): boolean;

  }
}