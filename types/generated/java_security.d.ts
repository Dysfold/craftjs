//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { Permission as java_security_Permission, PermissionCollection as java_security_PermissionCollection, Guard as java_security_Guard } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';
/** Represents a unique permission that may be attached to a Permissible */

  export class Permission extends java_lang_Object implements java_security_Guard, java_io_Serializable {
static serialVersionUID: number;
name: string;
name: string;
actions: string;
/** Returns the unique fully qualified name of this Permission */
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
implies(arg0: java_security_Permission): boolean;
getActions(): string;
newPermissionCollection(): java_security_PermissionCollection;
checkGuard(arg0: java_lang_Object): void;
constructor(name: string);
  }
}
//@ts-nocheck

declare module 'java.security' {
import { Permission as java_security_Permission } from 'java.security';
import { Enumeration as java_util_Enumeration } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class PermissionCollection extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
readOnly: boolean;
add(arg0: java_security_Permission): void;
toString(): string;
elements(): java_util_Enumeration<java_security_Permission>;
implies(arg0: java_security_Permission): boolean;
setReadOnly(): void;
isReadOnly(): boolean;
elementsAsStream(): java_util_stream_Stream<java_security_Permission>;
constructor();
  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { Permission as java_security_Permission, DomainCombiner as java_security_DomainCombiner, AccessControlContext as java_security_AccessControlContext, ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { Debug as sun_security_util_Debug } from 'sun.security.util';

  export class AccessControlContext extends java_lang_Object {
context: java_security_ProtectionDomain[];
isPrivileged: boolean;
isAuthorized: boolean;
privilegedContext: java_security_AccessControlContext;
combiner: java_security_DomainCombiner;
permissions: java_security_Permission[];
parent: java_security_AccessControlContext;
isWrapped: boolean;
isLimited: boolean;
limitedContext: java_security_ProtectionDomain[];
static debugInit: boolean;
static debug: sun_security_util_Debug;
domainCombiner: java_security_DomainCombiner;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
checkPermission(arg0: java_security_Permission): void;
getDomainCombiner(): java_security_DomainCombiner;
constructor(arg0: java_security_AccessControlContext, arg1: java_security_DomainCombiner);
constructor(arg0: java_security_ProtectionDomain[]);
  }
}
//@ts-nocheck

declare module 'java.security' {
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';

  export class DomainCombiner {

combine(arg0: java_security_ProtectionDomain[], arg1: java_security_ProtectionDomain[]): java_security_ProtectionDomain[];

  }
}
//@ts-nocheck

declare module 'java.security' {
import { ClassLoader as java_lang_ClassLoader, Object as java_lang_Object } from 'java.lang';
import { CodeSource as java_security_CodeSource, Principal as java_security_Principal, PermissionCollection as java_security_PermissionCollection, Permission as java_security_Permission } from 'java.security';
import { Key as java_security_ProtectionDomain_Key } from 'java.security.ProtectionDomain';

  export class ProtectionDomain extends java_lang_Object {
static filePermCompatInPD: boolean;
codesource: java_security_CodeSource;
classloader: java_lang_ClassLoader;
principals: java_security_Principal[];
permissions: java_security_PermissionCollection;
hasAllPerm: boolean;
staticPermissions: boolean;
key: java_security_ProtectionDomain_Key;
classLoader: java_lang_ClassLoader;
codeSource: java_security_CodeSource;
principals: java_security_Principal[];
permissions: java_security_PermissionCollection;
toString(): string;
getClassLoader(): java_lang_ClassLoader;
getCodeSource(): java_security_CodeSource;
getPrincipals(): java_security_Principal[];
getPermissions(): java_security_PermissionCollection;
staticPermissionsOnly(): boolean;
implies(arg0: java_security_Permission): boolean;
constructor(arg0: java_security_CodeSource, arg1: java_security_PermissionCollection);
constructor(arg0: java_security_CodeSource, arg1: java_security_PermissionCollection, arg2: java_lang_ClassLoader, arg3: java_security_Principal[]);
  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { URL as java_net_URL, SocketPermission as java_net_SocketPermission } from 'java.net';
import { Certificate as java_security_cert_Certificate, CertificateFactory as java_security_cert_CertificateFactory } from 'java.security.cert';
import { CodeSource as java_security_CodeSource, CodeSigner as java_security_CodeSigner } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class CodeSource extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
location: java_net_URL;
signers: java_security_CodeSigner[];
certs: java_security_cert_Certificate[];
sp: java_net_SocketPermission;
factory: java_security_cert_CertificateFactory;
locationNoFragString: string;
location: java_net_URL;
certificates: java_security_cert_Certificate[];
codeSigners: java_security_CodeSigner[];
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getLocation(): java_net_URL;
getCertificates(): java_security_cert_Certificate[];
implies(arg0: java_security_CodeSource): boolean;
getCodeSigners(): java_security_CodeSigner[];
constructor(arg0: java_net_URL, arg1: java_security_cert_Certificate[]);
constructor(arg0: java_net_URL, arg1: java_security_CodeSigner[]);
  }
}
//@ts-nocheck

declare module 'java.security.cert' {
import { Object as java_lang_Object } from 'java.lang';
import { PublicKey as java_security_PublicKey, Provider as java_security_Provider } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Certificate extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
type: string;
hash: number;
type: string;
encoded: number[];
publicKey: java_security_PublicKey;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getType(): string;
getEncoded(): number[];
verify(arg0: java_security_PublicKey): void;
verify(arg0: java_security_PublicKey, arg1: string): void;
verify(arg0: java_security_PublicKey, arg1: java_security_Provider): void;
getPublicKey(): java_security_PublicKey;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Key as java_security_Key } from 'java.security';

  export class PublicKey implements java_security_Key {
static serialVersionUID: number;
encoded: number[];
format: string;
algorithm: string;
getEncoded(): number[];
getFormat(): string;
getAlgorithm(): string;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Serializable as java_io_Serializable } from 'java.io';

  export class Key implements java_io_Serializable {
static serialVersionUID: number;
encoded: number[];
format: string;
algorithm: string;
getEncoded(): number[];
getFormat(): string;
getAlgorithm(): string;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Enumeration as java_util_Enumeration, Set as java_util_Set, Map as java_util_Map, Properties as java_util_Properties } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { InputStream as java_io_InputStream } from 'java.io';
import { Service as java_security_Provider_Service, ServiceKey as java_security_Provider_ServiceKey, EngineDescription as java_security_Provider_EngineDescription } from 'java.security.Provider';
import { Provider as java_security_Provider } from 'java.security';
import { Debug as sun_security_util_Debug } from 'sun.security.util';

  export class Provider extends java_util_Properties {
static serialVersionUID: number;
static debug: sun_security_util_Debug;
name: string;
info: string;
version: number;
versionStr: string;
entrySet: java_util_Set<java_util_Map_Entry<java_lang_Object, java_lang_Object>>;
entrySetCallCount: number;
initialized: boolean;
legacyChanged: boolean;
servicesChanged: boolean;
serviceMap: java_util_Map<java_security_Provider_ServiceKey, java_security_Provider_Service>;
legacyMap: java_util_Map<java_security_Provider_ServiceKey, java_security_Provider_Service>;
serviceSet: java_util_Set<java_security_Provider_Service>;
static ALIAS_PREFIX: string;
static ALIAS_PREFIX_LOWER: string;
static ALIAS_LENGTH: number;
static previousKey: java_security_Provider_ServiceKey;
static knownEngines: java_util_Map<string, java_security_Provider_EngineDescription>;
name: string;
property: string;
orDefault: java_lang_Object;
version: number;
service: java_security_Provider_Service;
services: java_util_Set<java_security_Provider_Service>;
versionStr: string;
info: string;
class: java_lang_Class<java_lang_Object>;
getName(): string;
remove(arg0: java_lang_Object): java_lang_Object;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
get(arg0: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
getProperty(arg0: string): string;
toString(): string;
values(): java_util_Collection<java_lang_Object>;
clear(): void;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): void;
elements(): java_util_Enumeration<java_lang_Object>;
merge(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
entrySet(): java_util_Set<java_util_Map_Entry<java_lang_Object, java_lang_Object>>;
putAll(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
putIfAbsent(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
compute(arg0: java_lang_Object, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
load(arg0: java_io_InputStream): void;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
computeIfAbsent(arg0: java_lang_Object, arg1: java_util_function_Function<java_lang_Object, java_lang_Object>): java_lang_Object;
keys(): java_util_Enumeration<java_lang_Object>;
keySet(): java_util_Set<java_lang_Object>;
getOrDefault(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
computeIfPresent(arg0: java_lang_Object, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
getVersion(): number;
getService(arg0: string, arg1: string): java_security_Provider_Service;
getServices(): java_util_Set<java_security_Provider_Service>;
configure(arg0: string): java_security_Provider;
isConfigured(): boolean;
getVersionStr(): string;
getInfo(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.security.Provider' {
import { Object as java_lang_Object, Class as java_lang_Class, Boolean as java_lang_Boolean } from 'java.lang';
import { Provider as java_security_Provider } from 'java.security';
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { UString as java_security_Provider_UString } from 'java.security.Provider';
import { Reference as java_lang_ref_Reference } from 'java.lang.ref';

  export class Service extends java_lang_Object {
type: string;
algorithm: string;
className: string;
provider: java_security_Provider;
aliases: java_util_List<string>;
attributes: java_util_Map<java_security_Provider_UString, string>;
classRef: java_lang_ref_Reference<java_lang_Class<java_lang_Object>>;
hasKeyAttributes: java_lang_Boolean;
supportedFormats: string[];
supportedClasses: java_lang_Class<java_lang_Object>[];
registered: boolean;
static CLASS0: java_lang_Class<java_lang_Object>[];
type: string;
className: string;
attribute: string;
provider: java_security_Provider;
algorithm: string;
toString(): string;
newInstance(arg0: java_lang_Object): java_lang_Object;
getType(): string;
getClassName(): string;
getAttribute(arg0: string): string;
getProvider(): java_security_Provider;
getAlgorithm(): string;
supportsParameter(arg0: java_lang_Object): boolean;
constructor(arg0: java_security_Provider, arg1: string, arg2: string, arg3: string, arg4: java_util_List<string>, arg5: java_util_Map<string, string>);
  }
}
//@ts-nocheck

declare module 'java.security.Provider' {
import { Object as java_lang_Object } from 'java.lang';

  export class UString extends java_lang_Object {
string: string;
lowerString: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;

  }
}
//@ts-nocheck

declare module 'java.security.Provider' {
import { Object as java_lang_Object } from 'java.lang';

  export class ServiceKey extends java_lang_Object {
type: string;
algorithm: string;
originalAlgorithm: string;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;

  }
}
//@ts-nocheck

declare module 'java.security.Provider' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class EngineDescription extends java_lang_Object {
name: string;
supportsParameter: boolean;
constructorParameterClassName: string;
constructorParameterClass: java_lang_Class<java_lang_Object>;


  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { CertPath as java_security_cert_CertPath } from 'java.security.cert';
import { Timestamp as java_security_Timestamp } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class CodeSigner extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
signerCertPath: java_security_cert_CertPath;
timestamp: java_security_Timestamp;
myhash: number;
signerCertPath: java_security_cert_CertPath;
timestamp: java_security_Timestamp;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getSignerCertPath(): java_security_cert_CertPath;
getTimestamp(): java_security_Timestamp;
constructor(arg0: java_security_cert_CertPath, arg1: java_security_Timestamp);
  }
}
//@ts-nocheck

declare module 'java.security.cert' {
import { Object as java_lang_Object } from 'java.lang';
import { List as java_util_List, Iterator as java_util_Iterator } from 'java.util';
import { Certificate as java_security_cert_Certificate } from 'java.security.cert';
import { Serializable as java_io_Serializable } from 'java.io';

  export class CertPath extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
type: string;
certificates: java_util_List<java_security_cert_Certificate>;
type: string;
encoded: number[];
encoded: number[];
encodings: java_util_Iterator<string>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getCertificates(): java_util_List<java_security_cert_Certificate>;
getType(): string;
getEncoded(arg0: string): number[];
getEncoded(): number[];
getEncodings(): java_util_Iterator<string>;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { CertPath as java_security_cert_CertPath } from 'java.security.cert';
import { Date as java_util_Date } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Timestamp extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
timestamp: java_util_Date;
signerCertPath: java_security_cert_CertPath;
myhash: number;
signerCertPath: java_security_cert_CertPath;
timestamp: java_util_Date;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getSignerCertPath(): java_security_cert_CertPath;
getTimestamp(): java_util_Date;
constructor(arg0: java_util_Date, arg1: java_security_cert_CertPath);
  }
}
//@ts-nocheck

declare module 'java.security.cert' {
import { Provider as java_security_Provider } from 'java.security';
import { CertificateFactory as java_security_cert_CertificateFactory, Certificate as java_security_cert_Certificate, CertPath as java_security_cert_CertPath, CRL as java_security_cert_CRL, CertificateFactorySpi as java_security_cert_CertificateFactorySpi } from 'java.security.cert';
import { InputStream as java_io_InputStream } from 'java.io';
import { List as java_util_List, Iterator as java_util_Iterator, Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class CertificateFactory extends java_lang_Object {
type: string;
provider: java_security_Provider;
certFacSpi: java_security_cert_CertificateFactorySpi;
static instance: java_security_cert_CertificateFactory;
static instance: java_security_cert_CertificateFactory;
static instance: java_security_cert_CertificateFactory;
type: string;
provider: java_security_Provider;
certPathEncodings: java_util_Iterator<string>;
static getInstance(arg0: string, arg1: java_security_Provider): java_security_cert_CertificateFactory;
static getInstance(arg0: string, arg1: string): java_security_cert_CertificateFactory;
static getInstance(arg0: string): java_security_cert_CertificateFactory;
getType(): string;
generateCertificate(arg0: java_io_InputStream): java_security_cert_Certificate;
generateCertPath(arg0: java_io_InputStream): java_security_cert_CertPath;
generateCertPath(arg0: java_io_InputStream, arg1: string): java_security_cert_CertPath;
generateCertPath(arg0: java_util_List<java_security_cert_Certificate>): java_security_cert_CertPath;
getProvider(): java_security_Provider;
getCertPathEncodings(): java_util_Iterator<string>;
generateCertificates(arg0: java_io_InputStream): java_util_Collection<java_security_cert_Certificate>;
generateCRL(arg0: java_io_InputStream): java_security_cert_CRL;
generateCRLs(arg0: java_io_InputStream): java_util_Collection<java_security_cert_CRL>;

  }
}
//@ts-nocheck

declare module 'java.security.cert' {
import { Certificate as java_security_cert_Certificate } from 'java.security.cert';
import { Object as java_lang_Object } from 'java.lang';

  export class CRL extends java_lang_Object {
type: string;
type: string;
toString(): string;
getType(): string;
isRevoked(arg0: java_security_cert_Certificate): boolean;

  }
}
//@ts-nocheck

declare module 'java.security.cert' {
import { InputStream as java_io_InputStream } from 'java.io';
import { Certificate as java_security_cert_Certificate, CertPath as java_security_cert_CertPath, CRL as java_security_cert_CRL } from 'java.security.cert';
import { Iterator as java_util_Iterator, List as java_util_List, Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class CertificateFactorySpi extends java_lang_Object {

engineGenerateCertificate(arg0: java_io_InputStream): java_security_cert_Certificate;
engineGetCertPathEncodings(): java_util_Iterator<string>;
engineGenerateCertPath(arg0: java_util_List<java_security_cert_Certificate>): java_security_cert_CertPath;
engineGenerateCertPath(arg0: java_io_InputStream, arg1: string): java_security_cert_CertPath;
engineGenerateCertPath(arg0: java_io_InputStream): java_security_cert_CertPath;
engineGenerateCertificates(arg0: java_io_InputStream): java_util_Collection<java_security_cert_Certificate>;
engineGenerateCRL(arg0: java_io_InputStream): java_security_cert_CRL;
engineGenerateCRLs(arg0: java_io_InputStream): java_util_Collection<java_security_cert_CRL>;
constructor();
  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';

  export class Principal {
name: string;
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
implies(arg0: javax_security_auth_Subject): boolean;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';

  export class PrivilegedAction<T extends java_lang_Object> {

run(): T;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';

  export class PrivilegedExceptionAction<T extends java_lang_Object> {

run(): T;

  }
}
//@ts-nocheck

declare module 'java.security.ProtectionDomain' {
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';

  export class Key extends java_lang_Object {
this$0: java_security_ProtectionDomain;


  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';

  export class Guard {

checkGuard(arg0: java_lang_Object): void;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Permission as java_security_Permission, PermissionCollection as java_security_PermissionCollection } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class BasicPermission extends java_security_Permission implements java_io_Serializable {
static serialVersionUID: number;
wildcard: boolean;
path: string;
exitVM: boolean;
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
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object, Class as java_lang_Class, ClassLoader as java_lang_ClassLoader } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { CodeSourceKey as java_security_SecureClassLoader_CodeSourceKey } from 'java.security.SecureClassLoader';
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';

  export class SecureClassLoader extends java_lang_ClassLoader {
initialized: boolean;
pdcache: java_util_Map<java_security_SecureClassLoader_CodeSourceKey, java_security_ProtectionDomain>;
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

  }
}
//@ts-nocheck

declare module 'java.security.SecureClassLoader' {
import { Object as java_lang_Object } from 'java.lang';
import { CodeSource as java_security_CodeSource } from 'java.security';

  export class CodeSourceKey extends java_lang_Object {
cs: java_security_CodeSource;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;

  }
}