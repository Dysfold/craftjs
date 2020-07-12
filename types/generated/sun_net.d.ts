//@ts-nocheck

declare module 'sun.net.www' {
import { PrintStream as java_io_PrintStream, InputStream as java_io_InputStream } from 'java.io';
import { Map as java_util_Map, List as java_util_List, Iterator as java_util_Iterator } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class MessageHeader extends java_lang_Object {
keys: string[];
values: string[];
nkeys: number;
value: string;
key: string;
key: number;
headers: java_util_Map<string, java_util_List<string>>;
headers: java_util_Map<string, java_util_List<string>>;
headerNamesInList: string;
prepend(arg0: string, arg1: string): void;
findValue(arg0: string): string;
add(arg0: string, arg1: string): void;
remove(arg0: string): void;
toString(): string;
getValue(arg0: number): string;
getKey(arg0: number): string;
getKey(arg0: string): number;
set(arg0: number, arg1: string, arg2: string): void;
set(arg0: string, arg1: string): void;
print(arg0: java_io_PrintStream): void;
reset(): void;
getHeaders(arg0: string[]): java_util_Map<string, java_util_List<string>>;
getHeaders(): java_util_Map<string, java_util_List<string>>;
getHeaderNamesInList(): string;
findNextValue(arg0: string, arg1: string): string;
filterNTLMResponses(arg0: string): boolean;
multiValueIterator(arg0: string): java_util_Iterator<string>;
filterAndAddHeaders(arg0: string[], arg1: java_util_Map<string, java_util_List<string>>): java_util_Map<string, java_util_List<string>>;
setIfNotSet(arg0: string, arg1: string): void;
static canonicalID(arg0: string): string;
parseHeader(arg0: java_io_InputStream): void;
mergeHeader(arg0: java_io_InputStream): void;
constructor();
constructor(arg0: java_io_InputStream);
  }
}