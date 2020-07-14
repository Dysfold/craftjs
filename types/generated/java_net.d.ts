//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputStream as java_io_InputStream, Serializable as java_io_Serializable } from 'java.io';
import { URL as java_net_URL, URI as java_net_URI, Proxy as java_net_Proxy, URLConnection as java_net_URLConnection, URLStreamHandlerFactory as java_net_URLStreamHandlerFactory, URLStreamHandler as java_net_URLStreamHandler } from 'java.net';

  export class URL extends java_lang_Object implements java_io_Serializable {
authority: string;
content: java_lang_Object;
content: java_lang_Object;
defaultPort: number;
file: string;
host: string;
path: string;
port: number;
protocol: string;
query: string;
ref: string;
userInfo: string;
equals(arg0: java_lang_Object): boolean;
getAuthority(): string;
getContent(): java_lang_Object;
getContent(arg0: JArray<java_lang_Class<java_lang_Object>>): java_lang_Object;
getDefaultPort(): number;
getFile(): string;
getHost(): string;
getPath(): string;
getPort(): number;
getProtocol(): string;
getQuery(): string;
getRef(): string;
getUserInfo(): string;
hashCode(): number;
openConnection(): java_net_URLConnection;
openConnection(arg0: java_net_Proxy): java_net_URLConnection;
openStream(): java_io_InputStream;
sameFile(arg0: java_net_URL): boolean;
static setURLStreamHandlerFactory(arg0: java_net_URLStreamHandlerFactory): void;
toExternalForm(): string;
toString(): string;
toURI(): java_net_URI;
constructor(arg0: java_net_URL, arg1: string);
constructor(arg0: java_net_URL, arg1: string, arg2: java_net_URLStreamHandler);
constructor(arg0: string);
constructor(arg0: string, arg1: string, arg2: number, arg3: string);
constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: java_net_URLStreamHandler);
constructor(arg0: string, arg1: string, arg2: string);
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { URI as java_net_URI, URL as java_net_URL } from 'java.net';
import { Serializable as java_io_Serializable } from 'java.io';

  export class URI extends java_lang_Object implements java_lang_Comparable<java_net_URI>, java_io_Serializable {
authority: string;
fragment: string;
host: string;
path: string;
port: number;
query: string;
rawAuthority: string;
rawFragment: string;
rawPath: string;
rawQuery: string;
rawSchemeSpecificPart: string;
rawUserInfo: string;
scheme: string;
schemeSpecificPart: string;
userInfo: string;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_net_URI): number;
equals(arg0: java_lang_Object): boolean;
getAuthority(): string;
getFragment(): string;
getHost(): string;
getPath(): string;
getPort(): number;
getQuery(): string;
getRawAuthority(): string;
getRawFragment(): string;
getRawPath(): string;
getRawQuery(): string;
getRawSchemeSpecificPart(): string;
getRawUserInfo(): string;
getScheme(): string;
getSchemeSpecificPart(): string;
getUserInfo(): string;
hashCode(): number;
isAbsolute(): boolean;
isOpaque(): boolean;
normalize(): java_net_URI;
parseServerAuthority(): java_net_URI;
relativize(arg0: java_net_URI): java_net_URI;
resolve(arg0: java_net_URI): java_net_URI;
resolve(arg0: string): java_net_URI;
static create(arg0: string): java_net_URI;
toASCIIString(): string;
toString(): string;
toURL(): java_net_URL;
constructor(arg0: string);
constructor(arg0: string, arg1: string, arg2: string);
constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string);
constructor(arg0: string, arg1: string, arg2: string, arg3: string);
constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string);
  }
}
//@ts-nocheck

declare module 'java.net' {
import { Type as java_net_Proxy_Type } from 'java.net.Proxy';
import { Object as java_lang_Object } from 'java.lang';
import { SocketAddress as java_net_SocketAddress, Proxy as java_net_Proxy } from 'java.net';

  export class Proxy extends java_lang_Object {
static NO_PROXY: java_net_Proxy;
address(): java_net_SocketAddress;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
toString(): string;
type(): java_net_Proxy_Type;
constructor(arg0: java_net_Proxy_Type, arg1: java_net_SocketAddress);
  }
}
//@ts-nocheck

declare module 'java.net.Proxy' {
import { Type as java_net_Proxy_Type } from 'java.net.Proxy';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Type extends java_lang_Enum<java_net_Proxy_Type> {
class: java_lang_Class<java_lang_Object>;
static DIRECT: java_net_Proxy_Type;
static HTTP: java_net_Proxy_Type;
static SOCKS: java_net_Proxy_Type;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_net_Proxy_Type;
static values(): JArray<java_net_Proxy_Type>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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
allowUserInteraction: boolean;
connectTimeout: number;
content: java_lang_Object;
content: java_lang_Object;
contentEncoding: string;
contentLength: number;
contentLengthLong: number;
contentType: string;
date: number;
defaultUseCaches: boolean;
doInput: boolean;
doOutput: boolean;
expiration: number;
headerField: string;
headerField: string;
headerFieldDate: number;
headerFieldInt: number;
headerFieldKey: string;
headerFieldLong: number;
headerFields: java_util_Map<string, java_util_List<string>>;
ifModifiedSince: number;
inputStream: java_io_InputStream;
lastModified: number;
outputStream: java_io_OutputStream;
permission: java_security_Permission;
readTimeout: number;
requestProperties: java_util_Map<string, java_util_List<string>>;
requestProperty: string;
static defaultAllowUserInteraction: boolean;
static defaultRequestProperty: string;
static defaultUseCaches: boolean;
static fileNameMap: java_net_FileNameMap;
uRL: java_net_URL;
useCaches: boolean;
addRequestProperty(arg0: string, arg1: string): void;
connect(): void;
getAllowUserInteraction(): boolean;
getConnectTimeout(): number;
getContent(): java_lang_Object;
getContent(arg0: JArray<java_lang_Class<java_lang_Object>>): java_lang_Object;
getContentEncoding(): string;
getContentLength(): number;
getContentLengthLong(): number;
getContentType(): string;
getDate(): number;
getDefaultUseCaches(): boolean;
getDoInput(): boolean;
getDoOutput(): boolean;
getExpiration(): number;
getHeaderField(arg0: number): string;
getHeaderField(arg0: string): string;
getHeaderFieldDate(arg0: string, arg1: number): number;
getHeaderFieldInt(arg0: string, arg1: number): number;
getHeaderFieldKey(arg0: number): string;
getHeaderFieldLong(arg0: string, arg1: number): number;
getHeaderFields(): java_util_Map<string, java_util_List<string>>;
getIfModifiedSince(): number;
getInputStream(): java_io_InputStream;
getLastModified(): number;
getOutputStream(): java_io_OutputStream;
getPermission(): java_security_Permission;
getReadTimeout(): number;
getRequestProperties(): java_util_Map<string, java_util_List<string>>;
getRequestProperty(arg0: string): string;
getURL(): java_net_URL;
getUseCaches(): boolean;
setAllowUserInteraction(arg0: boolean): void;
setConnectTimeout(arg0: number): void;
setDefaultUseCaches(arg0: boolean): void;
setDoInput(arg0: boolean): void;
setDoOutput(arg0: boolean): void;
setIfModifiedSince(arg0: number): void;
setReadTimeout(arg0: number): void;
setRequestProperty(arg0: string, arg1: string): void;
setUseCaches(arg0: boolean): void;
static getDefaultAllowUserInteraction(): boolean;
static getDefaultRequestProperty(arg0: string): string;
static getDefaultUseCaches(arg0: string): boolean;
static getFileNameMap(): java_net_FileNameMap;
static guessContentTypeFromName(arg0: string): string;
static guessContentTypeFromStream(arg0: java_io_InputStream): string;
static setContentHandlerFactory(arg0: java_net_ContentHandlerFactory): void;
static setDefaultAllowUserInteraction(arg0: boolean): void;
static setDefaultRequestProperty(arg0: string, arg1: string): void;
static setDefaultUseCaches(arg0: string, arg1: boolean): void;
static setFileNameMap(arg0: java_net_FileNameMap): void;
toString(): string;

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
getContent(arg0: java_net_URLConnection, arg1: JArray<java_lang_Class>): java_lang_Object;
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
class: java_lang_Class<java_lang_Object>;
hostName: string;
hostString: string;
port: number;
equals(arg0: java_lang_Object): boolean;
getAddress(): java_net_InetAddress;
getClass(): java_lang_Class<java_lang_Object>;
getHostName(): string;
getHostString(): string;
getPort(): number;
hashCode(): number;
isUnresolved(): boolean;
notify(): void;
notifyAll(): void;
static createUnresolved(arg0: string, arg1: number): java_net_InetSocketAddress;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
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
address: JArray<number>;
canonicalHostName: string;
hostAddress: string;
hostName: string;
static allByName: JArray<java_net_InetAddress>;
static byAddress: java_net_InetAddress;
static byAddress: java_net_InetAddress;
static byName: java_net_InetAddress;
static localHost: java_net_InetAddress;
static loopbackAddress: java_net_InetAddress;
equals(arg0: java_lang_Object): boolean;
getAddress(): JArray<number>;
getCanonicalHostName(): string;
getHostAddress(): string;
getHostName(): string;
hashCode(): number;
isAnyLocalAddress(): boolean;
isLinkLocalAddress(): boolean;
isLoopbackAddress(): boolean;
isMCGlobal(): boolean;
isMCLinkLocal(): boolean;
isMCNodeLocal(): boolean;
isMCOrgLocal(): boolean;
isMCSiteLocal(): boolean;
isMulticastAddress(): boolean;
isReachable(arg0: java_net_NetworkInterface, arg1: number, arg2: number): boolean;
isReachable(arg0: number): boolean;
isSiteLocalAddress(): boolean;
static getAllByName(arg0: string): JArray<java_net_InetAddress>;
static getByAddress(arg0: JArray<number>): java_net_InetAddress;
static getByAddress(arg0: string, arg1: JArray<number>): java_net_InetAddress;
static getByName(arg0: string): java_net_InetAddress;
static getLocalHost(): java_net_InetAddress;
static getLoopbackAddress(): java_net_InetAddress;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.net' {
import { Object as java_lang_Object } from 'java.lang';
import { NetworkInterface as java_net_NetworkInterface, InetAddress as java_net_InetAddress, InterfaceAddress as java_net_InterfaceAddress } from 'java.net';
import { Enumeration as java_util_Enumeration, List as java_util_List } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class NetworkInterface extends java_lang_Object {
displayName: string;
hardwareAddress: JArray<number>;
index: number;
inetAddresses: java_util_Enumeration<java_net_InetAddress>;
interfaceAddresses: java_util_List<java_net_InterfaceAddress>;
mTU: number;
name: string;
parent: java_net_NetworkInterface;
static byIndex: java_net_NetworkInterface;
static byInetAddress: java_net_NetworkInterface;
static byName: java_net_NetworkInterface;
static networkInterfaces: java_util_Enumeration<java_net_NetworkInterface>;
subInterfaces: java_util_Enumeration<java_net_NetworkInterface>;
equals(arg0: java_lang_Object): boolean;
getDisplayName(): string;
getHardwareAddress(): JArray<number>;
getIndex(): number;
getInetAddresses(): java_util_Enumeration<java_net_InetAddress>;
getInterfaceAddresses(): java_util_List<java_net_InterfaceAddress>;
getMTU(): number;
getName(): string;
getParent(): java_net_NetworkInterface;
getSubInterfaces(): java_util_Enumeration<java_net_NetworkInterface>;
hashCode(): number;
inetAddresses(): java_util_stream_Stream<java_net_InetAddress>;
isLoopback(): boolean;
isPointToPoint(): boolean;
isUp(): boolean;
isVirtual(): boolean;
static getByIndex(arg0: number): java_net_NetworkInterface;
static getByInetAddress(arg0: java_net_InetAddress): java_net_NetworkInterface;
static getByName(arg0: string): java_net_NetworkInterface;
static getNetworkInterfaces(): java_util_Enumeration<java_net_NetworkInterface>;
static networkInterfaces(): java_util_stream_Stream<java_net_NetworkInterface>;
subInterfaces(): java_util_stream_Stream<java_net_NetworkInterface>;
supportsMulticast(): boolean;
toString(): string;

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
getAddress(): java_net_InetAddress;
getBroadcast(): java_net_InetAddress;
getNetworkPrefixLength(): number;
hashCode(): number;
toString(): string;

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
class: java_lang_Class<java_lang_Object>;
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
uRLs: JArray<java_net_URL>;
unnamedModule: java_lang_Module;
clearAssertionStatus(): void;
close(): void;
equals(arg0: java_lang_Object): boolean;
findResource(arg0: string): java_net_URL;
findResources(arg0: string): java_util_Enumeration<java_net_URL>;
getClass(): java_lang_Class<java_lang_Object>;
getDefinedPackage(arg0: string): java_lang_Package;
getDefinedPackages(): JArray<java_lang_Package>;
getName(): string;
getParent(): java_lang_ClassLoader;
getResource(arg0: string): java_net_URL;
getResourceAsStream(arg0: string): java_io_InputStream;
getResources(arg0: string): java_util_Enumeration<java_net_URL>;
getURLs(): JArray<java_net_URL>;
getUnnamedModule(): java_lang_Module;
hashCode(): number;
isRegisteredAsParallelCapable(): boolean;
loadClass(arg0: string): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
resources(arg0: string): java_util_stream_Stream<java_net_URL>;
setClassAssertionStatus(arg0: string, arg1: boolean): void;
setDefaultAssertionStatus(arg0: boolean): void;
setPackageAssertionStatus(arg0: string, arg1: boolean): void;
static getPlatformClassLoader(): java_lang_ClassLoader;
static getSystemClassLoader(): java_lang_ClassLoader;
static getSystemResource(arg0: string): java_net_URL;
static getSystemResourceAsStream(arg0: string): java_io_InputStream;
static getSystemResources(arg0: string): java_util_Enumeration<java_net_URL>;
static newInstance(arg0: JArray<java_net_URL>): java_net_URLClassLoader;
static newInstance(arg0: JArray<java_net_URL>, arg1: java_lang_ClassLoader): java_net_URLClassLoader;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: JArray<java_net_URL>);
constructor(arg0: JArray<java_net_URL>, arg1: java_lang_ClassLoader);
constructor(arg0: JArray<java_net_URL>, arg1: java_lang_ClassLoader, arg2: java_net_URLStreamHandlerFactory);
constructor(arg0: string, arg1: JArray<java_net_URL>, arg2: java_lang_ClassLoader);
constructor(arg0: string, arg1: JArray<java_net_URL>, arg2: java_lang_ClassLoader, arg3: java_net_URLStreamHandlerFactory);
  }
}