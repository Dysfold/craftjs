//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object, Class as java_lang_Class, ThreadLocal as java_lang_ThreadLocal } from 'java.lang';
import { InputStream as java_io_InputStream, ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';
import { URL as java_net_URL, URI as java_net_URI, Proxy as java_net_Proxy, URLConnection as java_net_URLConnection, URLStreamHandlerFactory as java_net_URLStreamHandlerFactory, URLStreamHandler as java_net_URLStreamHandler, InetAddress as java_net_InetAddress, UrlDeserializedState as java_net_UrlDeserializedState } from 'java.net';
import { Hashtable as java_util_Hashtable } from 'java.util';

  export class URL extends java_lang_Object implements java_io_Serializable {
static BUILTIN_HANDLERS_PREFIX: string;
static serialVersionUID: number;
static protocolPathProp: string;
protocol: string;
host: string;
port: number;
file: string;
query: string;
authority: string;
path: string;
userInfo: string;
ref: string;
hostAddress: java_net_InetAddress;
handler: java_net_URLStreamHandler;
hashCode: number;
tempState: java_net_UrlDeserializedState;
static factory: java_net_URLStreamHandlerFactory;
static defaultFactory: java_net_URLStreamHandlerFactory;
static gate: java_lang_ThreadLocal<java_lang_Object>;
static handlers: java_util_Hashtable<string, java_net_URLStreamHandler>;
static streamHandlerLock: java_lang_Object;
static serialPersistentFields: java_io_ObjectStreamField[];
query: string;
path: string;
userInfo: string;
authority: string;
port: number;
defaultPort: number;
protocol: string;
host: string;
file: string;
ref: string;
content: java_lang_Object;
content: java_lang_Object;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
openStream(): java_io_InputStream;
getQuery(): string;
getPath(): string;
getUserInfo(): string;
getAuthority(): string;
getPort(): number;
getDefaultPort(): number;
getProtocol(): string;
getHost(): string;
getFile(): string;
getRef(): string;
sameFile(arg0: java_net_URL): boolean;
toExternalForm(): string;
toURI(): java_net_URI;
openConnection(arg0: java_net_Proxy): java_net_URLConnection;
openConnection(): java_net_URLConnection;
getContent(): java_lang_Object;
getContent(arg0: java_lang_Class<java_lang_Object>[]): java_lang_Object;
static setURLStreamHandlerFactory(arg0: java_net_URLStreamHandlerFactory): void;
constructor(arg0: java_net_URL, arg1: string, arg2: java_net_URLStreamHandler);
constructor(arg0: java_net_URL, arg1: string);
constructor(arg0: string);
constructor(arg0: string, arg1: string, arg2: number, arg3: string);
constructor(arg0: string, arg1: string, arg2: string);
constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: java_net_URLStreamHandler);
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { URI as java_net_URI, URL as java_net_URL } from 'java.net';
import { Serializable as java_io_Serializable } from 'java.io';

  export class URI extends java_lang_Object implements java_lang_Comparable<java_net_URI>, java_io_Serializable {
static serialVersionUID: number;
scheme: string;
fragment: string;
authority: string;
userInfo: string;
host: string;
port: number;
path: string;
query: string;
schemeSpecificPart: string;
hash: number;
decodedUserInfo: string;
decodedAuthority: string;
decodedPath: string;
decodedQuery: string;
decodedFragment: string;
decodedSchemeSpecificPart: string;
string: string;
static L_DIGIT: number;
static H_DIGIT: number;
static L_UPALPHA: number;
static H_UPALPHA: number;
static L_LOWALPHA: number;
static H_LOWALPHA: number;
static L_ALPHA: number;
static H_ALPHA: number;
static L_ALPHANUM: number;
static H_ALPHANUM: number;
static L_HEX: number;
static H_HEX: number;
static L_MARK: number;
static H_MARK: number;
static L_UNRESERVED: number;
static H_UNRESERVED: number;
static L_RESERVED: number;
static H_RESERVED: number;
static L_ESCAPED: number;
static H_ESCAPED: number;
static L_URIC: number;
static H_URIC: number;
static L_PCHAR: number;
static H_PCHAR: number;
static L_PATH: number;
static H_PATH: number;
static L_DASH: number;
static H_DASH: number;
static L_DOT: number;
static H_DOT: number;
static L_USERINFO: number;
static H_USERINFO: number;
static L_REG_NAME: number;
static H_REG_NAME: number;
static L_SERVER: number;
static H_SERVER: number;
static L_SERVER_PERCENT: number;
static H_SERVER_PERCENT: number;
static L_SCHEME: number;
static H_SCHEME: number;
static L_SCOPE_ID: number;
static H_SCOPE_ID: number;
static hexDigits: string[];
static $assertionsDisabled: boolean;
query: string;
path: string;
userInfo: string;
authority: string;
port: number;
host: string;
scheme: string;
rawFragment: string;
rawQuery: string;
rawPath: string;
rawAuthority: string;
rawSchemeSpecificPart: string;
schemeSpecificPart: string;
rawUserInfo: string;
fragment: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_net_URI): number;
resolve(arg0: java_net_URI): java_net_URI;
resolve(arg0: string): java_net_URI;
isAbsolute(): boolean;
normalize(): java_net_URI;
getQuery(): string;
getPath(): string;
getUserInfo(): string;
getAuthority(): string;
getPort(): number;
getHost(): string;
getScheme(): string;
isOpaque(): boolean;
getRawFragment(): string;
getRawQuery(): string;
getRawPath(): string;
static create(arg0: string): java_net_URI;
toURL(): java_net_URL;
getRawAuthority(): string;
relativize(arg0: java_net_URI): java_net_URI;
parseServerAuthority(): java_net_URI;
getRawSchemeSpecificPart(): string;
getSchemeSpecificPart(): string;
getRawUserInfo(): string;
getFragment(): string;
toASCIIString(): string;
constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string);
constructor(arg0: string, arg1: string, arg2: string, arg3: string);
constructor(arg0: string, arg1: string, arg2: string);
constructor(arg0: string);
constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string);
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Type as java_net_Proxy_Type } from 'java.net.Proxy';
import { Object as java_lang_Object } from 'java.lang';
import { SocketAddress as java_net_SocketAddress, Proxy as java_net_Proxy } from 'java.net';

  export class Proxy extends java_lang_Object {
type: java_net_Proxy_Type;
sa: java_net_SocketAddress;
static NO_PROXY: java_net_Proxy;
type(): java_net_Proxy_Type;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
address(): java_net_SocketAddress;
constructor(arg0: java_net_Proxy_Type, arg1: java_net_SocketAddress);
  }
}
//@ts-nocheck

declare module 'java.net.Proxy' {
import { Type as java_net_Proxy_Type } from 'java.net.Proxy';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Type extends java_lang_Enum<java_net_Proxy_Type> {
static DIRECT: java_net_Proxy_Type;
static HTTP: java_net_Proxy_Type;
static SOCKS: java_net_Proxy_Type;
static $VALUES: java_net_Proxy_Type[];
class: java_lang_Class<java_lang_Object>;
static values(): java_net_Proxy_Type[];
static valueOf(arg0: string): java_net_Proxy_Type;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class SocketAddress extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;

constructor();
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Class as java_lang_Class, Object as java_lang_Object, Boolean as java_lang_Boolean } from 'java.lang';
import { InputStream as java_io_InputStream, OutputStream as java_io_OutputStream } from 'java.io';
import { Permission as java_security_Permission } from 'java.security';
import { URL as java_net_URL, FileNameMap as java_net_FileNameMap, ContentHandlerFactory as java_net_ContentHandlerFactory, ContentHandler as java_net_ContentHandler } from 'java.net';
import { Map as java_util_Map, List as java_util_List, Hashtable as java_util_Hashtable } from 'java.util';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';
import { MessageHeader as sun_net_www_MessageHeader } from 'sun.net.www';

  export class URLConnection extends java_lang_Object {
url: java_net_URL;
doInput: boolean;
doOutput: boolean;
static defaultAllowUserInteraction: boolean;
allowUserInteraction: boolean;
static defaultUseCaches: boolean;
useCaches: boolean;
static defaultCaching: java_util_concurrent_ConcurrentHashMap<string, java_lang_Boolean>;
ifModifiedSince: number;
connected: boolean;
connectTimeout: number;
readTimeout: number;
requests: sun_net_www_MessageHeader;
static fileNameMap: java_net_FileNameMap;
static factory: java_net_ContentHandlerFactory;
static handlers: java_util_Hashtable<string, java_net_ContentHandler>;
static contentClassPrefix: string;
static contentPathProp: string;
static $assertionsDisabled: boolean;
content: java_lang_Object;
content: java_lang_Object;
inputStream: java_io_InputStream;
permission: java_security_Permission;
contentLength: number;
uRL: java_net_URL;
date: number;
lastModified: number;
contentLengthLong: number;
contentType: string;
headerField: string;
headerField: string;
requestProperty: string;
requestProperties: java_util_Map<string, java_util_List<string>>;
allowUserInteraction: boolean;
useCaches: boolean;
static defaultUseCaches: boolean;
defaultUseCaches: boolean;
static fileNameMap: java_net_FileNameMap;
connectTimeout: number;
readTimeout: number;
contentEncoding: string;
expiration: number;
headerFields: java_util_Map<string, java_util_List<string>>;
headerFieldInt: number;
headerFieldLong: number;
headerFieldDate: number;
headerFieldKey: string;
outputStream: java_io_OutputStream;
doInput: boolean;
doOutput: boolean;
static defaultAllowUserInteraction: boolean;
ifModifiedSince: number;
static defaultRequestProperty: string;
toString(): string;
connect(): void;
getContent(arg0: java_lang_Class<java_lang_Object>[]): java_lang_Object;
getContent(): java_lang_Object;
getInputStream(): java_io_InputStream;
getPermission(): java_security_Permission;
getContentLength(): number;
setRequestProperty(arg0: string, arg1: string): void;
getURL(): java_net_URL;
setUseCaches(arg0: boolean): void;
getDate(): number;
getLastModified(): number;
getContentLengthLong(): number;
getContentType(): string;
getHeaderField(arg0: number): string;
getHeaderField(arg0: string): string;
getRequestProperty(arg0: string): string;
addRequestProperty(arg0: string, arg1: string): void;
getRequestProperties(): java_util_Map<string, java_util_List<string>>;
setAllowUserInteraction(arg0: boolean): void;
getAllowUserInteraction(): boolean;
getUseCaches(): boolean;
setIfModifiedSince(arg0: number): void;
setDefaultUseCaches(arg0: boolean): void;
static setDefaultUseCaches(arg0: string, arg1: boolean): void;
static getDefaultUseCaches(arg0: string): boolean;
getDefaultUseCaches(): boolean;
static guessContentTypeFromStream(arg0: java_io_InputStream): string;
static guessContentTypeFromName(arg0: string): string;
static getFileNameMap(): java_net_FileNameMap;
static setFileNameMap(arg0: java_net_FileNameMap): void;
setConnectTimeout(arg0: number): void;
getConnectTimeout(): number;
setReadTimeout(arg0: number): void;
getReadTimeout(): number;
getContentEncoding(): string;
getExpiration(): number;
getHeaderFields(): java_util_Map<string, java_util_List<string>>;
getHeaderFieldInt(arg0: string, arg1: number): number;
getHeaderFieldLong(arg0: string, arg1: number): number;
getHeaderFieldDate(arg0: string, arg1: number): number;
getHeaderFieldKey(arg0: number): string;
getOutputStream(): java_io_OutputStream;
setDoInput(arg0: boolean): void;
getDoInput(): boolean;
setDoOutput(arg0: boolean): void;
getDoOutput(): boolean;
static setDefaultAllowUserInteraction(arg0: boolean): void;
static getDefaultAllowUserInteraction(): boolean;
getIfModifiedSince(): number;
static setDefaultRequestProperty(arg0: string, arg1: string): void;
static getDefaultRequestProperty(arg0: string): string;
static setContentHandlerFactory(arg0: java_net_ContentHandlerFactory): void;

  }
}
//@ts-nocheck

declare module 'java.net' {


  export class FileNameMap {
contentTypeFor: string;
getContentTypeFor(arg0: string): string;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { ContentHandler as java_net_ContentHandler } from 'java.net';

  export class ContentHandlerFactory {

createContentHandler(arg0: string): java_net_ContentHandler;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { URLConnection as java_net_URLConnection } from 'java.net';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ContentHandler extends java_lang_Object {
content: java_lang_Object;
content: java_lang_Object;
getContent(arg0: java_net_URLConnection): java_lang_Object;
getContent(arg0: java_net_URLConnection, arg1: java_lang_Class[]): java_lang_Object;
constructor();
  }
}
//@ts-nocheck

declare module 'java.net' {
import { URLStreamHandler as java_net_URLStreamHandler } from 'java.net';

  export class URLStreamHandlerFactory {

createURLStreamHandler(arg0: string): java_net_URLStreamHandler;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';

  export class URLStreamHandler extends java_lang_Object {


constructor();
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';
import { InetAddress as java_net_InetAddress, NetworkInterface as java_net_NetworkInterface, InetAddressImpl as java_net_InetAddressImpl } from 'java.net';
import { InetAddressHolder as java_net_InetAddress_InetAddressHolder, NameService as java_net_InetAddress_NameService, Addresses as java_net_InetAddress_Addresses, CachedAddresses as java_net_InetAddress_CachedAddresses, CachedLocalHost as java_net_InetAddress_CachedLocalHost } from 'java.net.InetAddress';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { NavigableSet as java_util_NavigableSet } from 'java.util';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';

  export class InetAddress extends java_lang_Object implements java_io_Serializable {
static PREFER_IPV4_VALUE: number;
static PREFER_IPV6_VALUE: number;
static PREFER_SYSTEM_VALUE: number;
static IPv4: number;
static IPv6: number;
static preferIPv6Address: number;
holder: java_net_InetAddress_InetAddressHolder;
static nameService: java_net_InetAddress_NameService;
canonicalHostName: string;
static serialVersionUID: number;
static cache: java_util_concurrent_ConcurrentMap<string, java_net_InetAddress_Addresses>;
static expirySet: java_util_NavigableSet<java_net_InetAddress_CachedAddresses>;
static impl: java_net_InetAddressImpl;
static cachedLocalHost: java_net_InetAddress_CachedLocalHost;
static UNSAFE: jdk_internal_misc_Unsafe;
static FIELDS_OFFSET: number;
static serialPersistentFields: java_io_ObjectStreamField[];
hostAddress: string;
address: number[];
hostName: string;
static byName: java_net_InetAddress;
static byAddress: java_net_InetAddress;
static byAddress: java_net_InetAddress;
canonicalHostName: string;
static allByName: java_net_InetAddress[];
static loopbackAddress: java_net_InetAddress;
static localHost: java_net_InetAddress;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getHostAddress(): string;
getAddress(): number[];
getHostName(): string;
static getByName(arg0: string): java_net_InetAddress;
static getByAddress(arg0: number[]): java_net_InetAddress;
static getByAddress(arg0: string, arg1: number[]): java_net_InetAddress;
isMulticastAddress(): boolean;
isAnyLocalAddress(): boolean;
isLoopbackAddress(): boolean;
isLinkLocalAddress(): boolean;
isSiteLocalAddress(): boolean;
isMCGlobal(): boolean;
isMCNodeLocal(): boolean;
isMCLinkLocal(): boolean;
isMCSiteLocal(): boolean;
isMCOrgLocal(): boolean;
isReachable(arg0: java_net_NetworkInterface, arg1: number, arg2: number): boolean;
isReachable(arg0: number): boolean;
getCanonicalHostName(): string;
static getAllByName(arg0: string): java_net_InetAddress[];
static getLoopbackAddress(): java_net_InetAddress;
static getLocalHost(): java_net_InetAddress;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';
import { NetworkInterface as java_net_NetworkInterface, InetAddress as java_net_InetAddress, InterfaceAddress as java_net_InterfaceAddress } from 'java.net';
import { Enumeration as java_util_Enumeration, List as java_util_List } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class NetworkInterface extends java_lang_Object {
name: string;
displayName: string;
index: number;
addrs: java_net_InetAddress[];
bindings: java_net_InterfaceAddress[];
childs: java_net_NetworkInterface[];
parent: java_net_NetworkInterface;
virtual: boolean;
static defaultInterface: java_net_NetworkInterface;
static defaultIndex: number;
name: string;
parent: java_net_NetworkInterface;
index: number;
static byName: java_net_NetworkInterface;
displayName: string;
inetAddresses: java_util_Enumeration<java_net_InetAddress>;
static byIndex: java_net_NetworkInterface;
static byInetAddress: java_net_NetworkInterface;
static networkInterfaces: java_util_Enumeration<java_net_NetworkInterface>;
interfaceAddresses: java_util_List<java_net_InterfaceAddress>;
subInterfaces: java_util_Enumeration<java_net_NetworkInterface>;
hardwareAddress: number[];
mTU: number;
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getParent(): java_net_NetworkInterface;
getIndex(): number;
static getByName(arg0: string): java_net_NetworkInterface;
getDisplayName(): string;
getInetAddresses(): java_util_Enumeration<java_net_InetAddress>;
isLoopback(): boolean;
static getByIndex(arg0: number): java_net_NetworkInterface;
static getByInetAddress(arg0: java_net_InetAddress): java_net_NetworkInterface;
inetAddresses(): java_util_stream_Stream<java_net_InetAddress>;
static getNetworkInterfaces(): java_util_Enumeration<java_net_NetworkInterface>;
getInterfaceAddresses(): java_util_List<java_net_InterfaceAddress>;
getSubInterfaces(): java_util_Enumeration<java_net_NetworkInterface>;
subInterfaces(): java_util_stream_Stream<java_net_NetworkInterface>;
static networkInterfaces(): java_util_stream_Stream<java_net_NetworkInterface>;
isUp(): boolean;
isPointToPoint(): boolean;
supportsMulticast(): boolean;
getHardwareAddress(): number[];
getMTU(): number;
isVirtual(): boolean;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';
import { InetAddress as java_net_InetAddress, Inet4Address as java_net_Inet4Address } from 'java.net';

  export class InterfaceAddress extends java_lang_Object {
address: java_net_InetAddress;
broadcast: java_net_Inet4Address;
maskLength: number;
address: java_net_InetAddress;
broadcast: java_net_InetAddress;
networkPrefixLength: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getAddress(): java_net_InetAddress;
getBroadcast(): java_net_InetAddress;
getNetworkPrefixLength(): number;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InetAddress as java_net_InetAddress } from 'java.net';

  export class Inet4Address extends java_net_InetAddress {
static INADDRSZ: number;
static serialVersionUID: number;
hostAddress: string;
address: number[];
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getHostAddress(): string;
getAddress(): number[];
isMulticastAddress(): boolean;
isAnyLocalAddress(): boolean;
isLoopbackAddress(): boolean;
isLinkLocalAddress(): boolean;
isSiteLocalAddress(): boolean;
isMCGlobal(): boolean;
isMCNodeLocal(): boolean;
isMCLinkLocal(): boolean;
isMCSiteLocal(): boolean;
isMCOrgLocal(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.net.InetAddress' {
import { Object as java_lang_Object } from 'java.lang';

  export class InetAddressHolder extends java_lang_Object {
originalHostName: string;
hostName: string;
address: number;
family: number;


  }
}
//@ts-nocheck

declare module 'java.net.InetAddress' {
import { InetAddress as java_net_InetAddress } from 'java.net';

  export class NameService {
hostByAddr: string;
getHostByAddr(arg0: number[]): string;
lookupAllHostAddr(arg0: string): java_net_InetAddress[];

  }
}
//@ts-nocheck

declare module 'java.net.InetAddress' {
import { InetAddress as java_net_InetAddress } from 'java.net';

  export class Addresses {

get(): java_net_InetAddress[];

  }
}
//@ts-nocheck

declare module 'java.net.InetAddress' {
import { InetAddress as java_net_InetAddress } from 'java.net';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { CachedAddresses as java_net_InetAddress_CachedAddresses, Addresses as java_net_InetAddress_Addresses } from 'java.net.InetAddress';
import { AtomicLong as java_util_concurrent_atomic_AtomicLong } from 'java.util.concurrent.atomic';

  export class CachedAddresses extends java_lang_Object implements java_net_InetAddress_Addresses, java_lang_Comparable<java_net_InetAddress_CachedAddresses> {
static seq: java_util_concurrent_atomic_AtomicLong;
host: string;
inetAddresses: java_net_InetAddress[];
expiryTime: number;
id: number;
get(): java_net_InetAddress[];
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_net_InetAddress_CachedAddresses): number;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { InetAddress as java_net_InetAddress, NetworkInterface as java_net_NetworkInterface } from 'java.net';

  export class InetAddressImpl {
hostByAddr: string;
localHostName: string;
isReachable(arg0: java_net_InetAddress, arg1: number, arg2: java_net_NetworkInterface, arg3: number): boolean;
anyLocalAddress(): java_net_InetAddress;
getHostByAddr(arg0: number[]): string;
loopbackAddress(): java_net_InetAddress;
lookupAllHostAddr(arg0: string): java_net_InetAddress[];
getLocalHostName(): string;

  }
}
//@ts-nocheck

declare module 'java.net.InetAddress' {
import { InetAddress as java_net_InetAddress } from 'java.net';
import { Object as java_lang_Object } from 'java.lang';

  export class CachedLocalHost extends java_lang_Object {
host: string;
addr: java_net_InetAddress;
expiryTime: number;


  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';

  export class UrlDeserializedState extends java_lang_Object {
protocol: string;
host: string;
port: number;
authority: string;
file: string;
ref: string;
hashCode: number;

constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: string, arg5: string, arg6: number);
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Permission as java_security_Permission, PermissionCollection as java_security_PermissionCollection } from 'java.security';
import { InetAddress as java_net_InetAddress } from 'java.net';
import { Debug as sun_security_util_Debug } from 'sun.security.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class SocketPermission extends java_security_Permission implements java_io_Serializable {
static serialVersionUID: number;
static CONNECT: number;
static LISTEN: number;
static ACCEPT: number;
static RESOLVE: number;
static NONE: number;
static ALL: number;
static PORT_MIN: number;
static PORT_MAX: number;
static PRIV_PORT_MAX: number;
static DEF_EPH_LOW: number;
mask: number;
actions: string;
hostname: string;
cname: string;
addresses: java_net_InetAddress[];
wildcard: boolean;
init_with_ip: boolean;
invalid: boolean;
portrange: number[];
defaultDeny: boolean;
untrusted: boolean;
trusted: boolean;
static trustNameService: boolean;
static debug: sun_security_util_Debug;
static debugInit: boolean;
cdomain: string;
hdomain: string;
actions: string;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
implies(arg0: java_security_Permission): boolean;
getActions(): string;
newPermissionCollection(): java_security_PermissionCollection;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InetAddress as java_net_InetAddress, InetSocketAddress as java_net_InetSocketAddress, SocketAddress as java_net_SocketAddress } from 'java.net';
import { InetSocketAddressHolder as java_net_InetSocketAddress_InetSocketAddressHolder } from 'java.net.InetSocketAddress';
import { ObjectStreamField as java_io_ObjectStreamField } from 'java.io';
import { Unsafe as jdk_internal_misc_Unsafe } from 'jdk.internal.misc';

  export class InetSocketAddress extends java_net_SocketAddress {
holder: java_net_InetSocketAddress_InetSocketAddressHolder;
static serialVersionUID: number;
static serialPersistentFields: java_io_ObjectStreamField[];
static UNSAFE: jdk_internal_misc_Unsafe;
static FIELDS_OFFSET: number;
address: java_net_InetAddress;
port: number;
hostName: string;
hostString: string;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getAddress(): java_net_InetAddress;
getPort(): number;
isUnresolved(): boolean;
getHostName(): string;
static createUnresolved(arg0: string, arg1: number): java_net_InetSocketAddress;
getHostString(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_net_InetAddress, arg1: number);
constructor(arg0: number);
constructor(arg0: string, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.net.InetSocketAddress' {
import { Object as java_lang_Object } from 'java.lang';
import { InetAddress as java_net_InetAddress } from 'java.net';

  export class InetSocketAddressHolder extends java_lang_Object {
hostname: string;
addr: java_net_InetAddress;
port: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { URL as java_net_URL, URLClassLoader as java_net_URLClassLoader, URLStreamHandlerFactory as java_net_URLStreamHandlerFactory } from 'java.net';
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object, Module as java_lang_Module, Package as java_lang_Package, Void as java_lang_Void } from 'java.lang';
import { InputStream as java_io_InputStream, Closeable as java_io_Closeable } from 'java.io';
import { Enumeration as java_util_Enumeration, WeakHashMap as java_util_WeakHashMap } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { URLClassPath as jdk_internal_loader_URLClassPath } from 'jdk.internal.loader';
import { AccessControlContext as java_security_AccessControlContext, SecureClassLoader as java_security_SecureClassLoader } from 'java.security';

  export class URLClassLoader extends java_security_SecureClassLoader implements java_io_Closeable {
ucp: jdk_internal_loader_URLClassPath;
acc: java_security_AccessControlContext;
closeables: java_util_WeakHashMap<java_io_Closeable, java_lang_Void>;
resourceAsStream: java_io_InputStream;
uRLs: java_net_URL[];
name: string;
static platformClassLoader: java_lang_ClassLoader;
static systemClassLoader: java_lang_ClassLoader;
resource: java_net_URL;
static systemResourceAsStream: java_io_InputStream;
static systemResource: java_net_URL;
resources: java_util_Enumeration<java_net_URL>;
static systemResources: java_util_Enumeration<java_net_URL>;
parent: java_lang_ClassLoader;
unnamedModule: java_lang_Module;
definedPackage: java_lang_Package;
definedPackages: java_lang_Package[];
class: java_lang_Class<java_lang_Object>;
static newInstance(arg0: java_net_URL[], arg1: java_lang_ClassLoader): java_net_URLClassLoader;
static newInstance(arg0: java_net_URL[]): java_net_URLClassLoader;
getResourceAsStream(arg0: string): java_io_InputStream;
findResource(arg0: string): java_net_URL;
findResources(arg0: string): java_util_Enumeration<java_net_URL>;
close(): void;
getURLs(): java_net_URL[];
getName(): string;
loadClass(arg0: string): java_lang_Class<java_lang_Object>;
static getPlatformClassLoader(): java_lang_ClassLoader;
static getSystemClassLoader(): java_lang_ClassLoader;
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
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_net_URL[], arg1: java_lang_ClassLoader, arg2: java_net_URLStreamHandlerFactory);
constructor(arg0: string, arg1: java_net_URL[], arg2: java_lang_ClassLoader);
constructor(arg0: string, arg1: java_net_URL[], arg2: java_lang_ClassLoader, arg3: java_net_URLStreamHandlerFactory);
constructor(arg0: java_net_URL[], arg1: java_lang_ClassLoader);
constructor(arg0: java_net_URL[]);
  }
}