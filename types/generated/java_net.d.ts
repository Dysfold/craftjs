//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputStream as java_io_InputStream, Serializable as java_io_Serializable } from 'java.io';
import { URL as java_net_URL, URI as java_net_URI, Proxy as java_net_Proxy, URLConnection as java_net_URLConnection, URLStreamHandlerFactory as java_net_URLStreamHandlerFactory, URLStreamHandler as java_net_URLStreamHandler } from 'java.net';

  export class URL extends java_lang_Object implements java_io_Serializable {
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


constructor();
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { InputStream as java_io_InputStream, OutputStream as java_io_OutputStream } from 'java.io';
import { Permission as java_security_Permission } from 'java.security';
import { URL as java_net_URL, FileNameMap as java_net_FileNameMap, ContentHandlerFactory as java_net_ContentHandlerFactory } from 'java.net';
import { Map as java_util_Map, List as java_util_List } from 'java.util';

  export class URLConnection extends java_lang_Object {
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
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InetAddress as java_net_InetAddress, InetSocketAddress as java_net_InetSocketAddress, SocketAddress as java_net_SocketAddress } from 'java.net';

  export class InetSocketAddress extends java_net_SocketAddress {
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

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';
import { InetAddress as java_net_InetAddress, NetworkInterface as java_net_NetworkInterface } from 'java.net';
import { Serializable as java_io_Serializable } from 'java.io';

  export class InetAddress extends java_lang_Object implements java_io_Serializable {
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
parent: java_net_NetworkInterface;
index: number;
static byName: java_net_NetworkInterface;
displayName: string;
inetAddresses: java_util_Enumeration<java_net_InetAddress>;
static byIndex: java_net_NetworkInterface;
static byInetAddress: java_net_NetworkInterface;
interfaceAddresses: java_util_List<java_net_InterfaceAddress>;
subInterfaces: java_util_Enumeration<java_net_NetworkInterface>;
hardwareAddress: number[];
mTU: number;
static networkInterfaces: java_util_Enumeration<java_net_NetworkInterface>;
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
getInterfaceAddresses(): java_util_List<java_net_InterfaceAddress>;
getSubInterfaces(): java_util_Enumeration<java_net_NetworkInterface>;
subInterfaces(): java_util_stream_Stream<java_net_NetworkInterface>;
static networkInterfaces(): java_util_stream_Stream<java_net_NetworkInterface>;
isUp(): boolean;
isPointToPoint(): boolean;
supportsMulticast(): boolean;
getHardwareAddress(): number[];
getMTU(): number;
inetAddresses(): java_util_stream_Stream<java_net_InetAddress>;
static getNetworkInterfaces(): java_util_Enumeration<java_net_NetworkInterface>;
isVirtual(): boolean;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';
import { InetAddress as java_net_InetAddress } from 'java.net';

  export class InterfaceAddress extends java_lang_Object {
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
import { URL as java_net_URL, URLClassLoader as java_net_URLClassLoader, URLStreamHandlerFactory as java_net_URLStreamHandlerFactory } from 'java.net';
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object, Module as java_lang_Module, Package as java_lang_Package } from 'java.lang';
import { InputStream as java_io_InputStream, Closeable as java_io_Closeable } from 'java.io';
import { Enumeration as java_util_Enumeration } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { SecureClassLoader as java_security_SecureClassLoader } from 'java.security';

  export class URLClassLoader extends java_security_SecureClassLoader implements java_io_Closeable {
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