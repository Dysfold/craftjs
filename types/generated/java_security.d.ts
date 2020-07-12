//@ts-nocheck

declare module 'java.security' {
import { PermissionCollection as java_security_PermissionCollection, Permission as java_security_Permission, Guard as java_security_Guard } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';
/** Represents a unique permission that may be attached to a Permissible */

  export class Permission extends java_lang_Object implements java_security_Guard, java_io_Serializable {
static serialVersionUID: number;
name: string;
name: string;
actions: string;
newPermissionCollection(): java_security_PermissionCollection;
checkGuard(arg0: java_lang_Object): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
/** Returns the unique fully qualified name of this Permission */
getName(): string;
implies(arg0: java_security_Permission): boolean;
getActions(): string;
constructor(name: string);
  }
}//@ts-nocheck

declare module 'java.security' {
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Permission as java_security_Permission } from 'java.security';
import { Enumeration as java_util_Enumeration } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class PermissionCollection extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
readOnly: boolean;
elementsAsStream(): java_util_stream_Stream<java_security_Permission>;
add(arg0: java_security_Permission): void;
toString(): string;
elements(): java_util_Enumeration<java_security_Permission>;
implies(arg0: java_security_Permission): boolean;
setReadOnly(): void;
isReadOnly(): boolean;
constructor();
  }
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.security' {
import { Key as java_security_Key } from 'java.security';

  export class PublicKey implements java_security_Key {
static serialVersionUID: number;
format: string;
encoded: number[];
algorithm: string;
getFormat(): string;
getEncoded(): number[];
getAlgorithm(): string;

  }
}//@ts-nocheck

declare module 'java.security' {
import { Serializable as java_io_Serializable } from 'java.io';

  export class Key implements java_io_Serializable {
static serialVersionUID: number;
format: string;
encoded: number[];
algorithm: string;
getFormat(): string;
getEncoded(): number[];
getAlgorithm(): string;

  }
}//@ts-nocheck

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
version: number;
property: string;
name: string;
orDefault: java_lang_Object;
service: java_security_Provider_Service;
services: java_util_Set<java_security_Provider_Service>;
versionStr: string;
info: string;
class: java_lang_Class<java_lang_Object>;
getVersion(): number;
remove(arg0: java_lang_Object): java_lang_Object;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
get(arg0: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
getProperty(arg0: string): string;
toString(): string;
values(): java_util_Collection<java_lang_Object>;
clear(): void;
getName(): string;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
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
}//@ts-nocheck

declare module 'java.security.Provider' {
import { Provider as java_security_Provider } from 'java.security';
import { Object as java_lang_Object, Class as java_lang_Class, Boolean as java_lang_Boolean } from 'java.lang';
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
provider: java_security_Provider;
attribute: string;
type: string;
className: string;
algorithm: string;
getProvider(): java_security_Provider;
getAttribute(arg0: string): string;
toString(): string;
newInstance(arg0: java_lang_Object): java_lang_Object;
getType(): string;
getClassName(): string;
getAlgorithm(): string;
supportsParameter(arg0: java_lang_Object): boolean;
constructor(arg0: java_security_Provider, arg1: string, arg2: string, arg3: string, arg4: java_util_List<string>, arg5: java_util_Map<string, string>);
  }
}//@ts-nocheck

declare module 'java.security.Provider' {
import { Object as java_lang_Object } from 'java.lang';

  export class UString extends java_lang_Object {
string: string;
lowerString: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;

  }
}//@ts-nocheck

declare module 'java.security.Provider' {
import { Object as java_lang_Object } from 'java.lang';

  export class ServiceKey extends java_lang_Object {
type: string;
algorithm: string;
originalAlgorithm: string;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;

  }
}//@ts-nocheck

declare module 'java.security.Provider' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class EngineDescription extends java_lang_Object {
name: string;
supportsParameter: boolean;
constructorParameterClassName: string;
constructorParameterClass: java_lang_Class<java_lang_Object>;


  }
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

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
provider: java_security_Provider;
static instance: java_security_cert_CertificateFactory;
static instance: java_security_cert_CertificateFactory;
static instance: java_security_cert_CertificateFactory;
type: string;
certPathEncodings: java_util_Iterator<string>;
getProvider(): java_security_Provider;
static getInstance(arg0: string, arg1: java_security_Provider): java_security_cert_CertificateFactory;
static getInstance(arg0: string, arg1: string): java_security_cert_CertificateFactory;
static getInstance(arg0: string): java_security_cert_CertificateFactory;
getType(): string;
generateCertificate(arg0: java_io_InputStream): java_security_cert_Certificate;
generateCertPath(arg0: java_io_InputStream, arg1: string): java_security_cert_CertPath;
generateCertPath(arg0: java_io_InputStream): java_security_cert_CertPath;
generateCertPath(arg0: java_util_List<java_security_cert_Certificate>): java_security_cert_CertPath;
getCertPathEncodings(): java_util_Iterator<string>;
generateCertificates(arg0: java_io_InputStream): java_util_Collection<java_security_cert_Certificate>;
generateCRL(arg0: java_io_InputStream): java_security_cert_CRL;
generateCRLs(arg0: java_io_InputStream): java_util_Collection<java_security_cert_CRL>;

  }
}//@ts-nocheck

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
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';

  export class Principal {
name: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getName(): string;
implies(arg0: javax_security_auth_Subject): boolean;

  }
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.security' {
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';

  export class DomainCombiner {

combine(arg0: java_security_ProtectionDomain[], arg1: java_security_ProtectionDomain[]): java_security_ProtectionDomain[];

  }
}//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';

  export class PrivilegedAction<T extends java_lang_Object> {

run(): T;

  }
}//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';

  export class PrivilegedExceptionAction<T extends java_lang_Object> {

run(): T;

  }
}//@ts-nocheck

declare module 'java.security.ProtectionDomain' {
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';

  export class Key extends java_lang_Object {
this$0: java_security_ProtectionDomain;


  }
}//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';

  export class Guard {

checkGuard(arg0: java_lang_Object): void;

  }
}//@ts-nocheck

declare module 'java.security' {
import { PermissionCollection as java_security_PermissionCollection, Permission as java_security_Permission } from 'java.security';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class BasicPermission extends java_security_Permission implements java_io_Serializable {
static serialVersionUID: number;
wildcard: boolean;
path: string;
exitVM: boolean;
actions: string;
class: java_lang_Class<java_lang_Object>;
newPermissionCollection(): java_security_PermissionCollection;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
implies(arg0: java_security_Permission): boolean;
getActions(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: string);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.security' {
import { Provider as java_security_Provider, MessageDigest as java_security_MessageDigest, MessageDigestSpi as java_security_MessageDigestSpi } from 'java.security';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { Debug as sun_security_util_Debug } from 'sun.security.util';

  export class MessageDigest extends java_security_MessageDigestSpi {
static pdebug: sun_security_util_Debug;
static skipDebug: boolean;
algorithm: string;
static INITIAL: number;
static IN_PROGRESS: number;
state: number;
provider: java_security_Provider;
provider: java_security_Provider;
static instance: java_security_MessageDigest;
static instance: java_security_MessageDigest;
static instance: java_security_MessageDigest;
algorithm: string;
digestLength: number;
class: java_lang_Class<java_lang_Object>;
digest(): number[];
digest(arg0: number[]): number[];
digest(arg0: number[], arg1: number, arg2: number): number;
getProvider(): java_security_Provider;
static isEqual(arg0: number[], arg1: number[]): boolean;
toString(): string;
clone(): java_lang_Object;
update(arg0: number[], arg1: number, arg2: number): void;
update(arg0: number[]): void;
update(arg0: java_nio_ByteBuffer): void;
update(arg0: number): void;
static getInstance(arg0: string): java_security_MessageDigest;
static getInstance(arg0: string, arg1: java_security_Provider): java_security_MessageDigest;
static getInstance(arg0: string, arg1: string): java_security_MessageDigest;
reset(): void;
getAlgorithm(): string;
getDigestLength(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';

  export class MessageDigestSpi extends java_lang_Object {
tempArray: number[];
clone(): java_lang_Object;
constructor();
  }
}//@ts-nocheck

declare module 'java.security.cert' {
import { Principal as java_security_Principal, PublicKey as java_security_PublicKey, Provider as java_security_Provider } from 'java.security';
import { Date as java_util_Date, List as java_util_List, Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { BigInteger as java_math_BigInteger } from 'java.math';
import { X500Principal as javax_security_auth_x500_X500Principal } from 'javax.security.auth.x500';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Certificate as java_security_cert_Certificate, X509Extension as java_security_cert_X509Extension } from 'java.security.cert';

  export class X509Certificate extends java_security_cert_Certificate implements java_security_cert_X509Extension {
static serialVersionUID: number;
subjectX500Principal: javax_security_auth_x500_X500Principal;
issuerX500Principal: javax_security_auth_x500_X500Principal;
version: number;
issuerDN: java_security_Principal;
subjectDN: java_security_Principal;
signature: number[];
basicConstraints: number;
serialNumber: java_math_BigInteger;
issuerX500Principal: javax_security_auth_x500_X500Principal;
subjectX500Principal: javax_security_auth_x500_X500Principal;
notBefore: java_util_Date;
notAfter: java_util_Date;
tBSCertificate: number[];
sigAlgName: string;
sigAlgOID: string;
sigAlgParams: number[];
issuerUniqueID: boolean;
subjectUniqueID: boolean;
keyUsage: boolean;
extendedKeyUsage: java_util_List<string>;
subjectAlternativeNames: java_util_Collection<java_util_List<java_lang_Object>>;
issuerAlternativeNames: java_util_Collection<java_util_List<java_lang_Object>>;
class: java_lang_Class<java_lang_Object>;
extensionValue: number[];
criticalExtensionOIDs: java_util_Set<string>;
nonCriticalExtensionOIDs: java_util_Set<string>;
getVersion(): number;
getIssuerDN(): java_security_Principal;
getSubjectDN(): java_security_Principal;
getSignature(): number[];
getBasicConstraints(): number;
verify(arg0: java_security_PublicKey, arg1: java_security_Provider): void;
checkValidity(): void;
checkValidity(arg0: java_util_Date): void;
getSerialNumber(): java_math_BigInteger;
getIssuerX500Principal(): javax_security_auth_x500_X500Principal;
getSubjectX500Principal(): javax_security_auth_x500_X500Principal;
getNotBefore(): java_util_Date;
getNotAfter(): java_util_Date;
getTBSCertificate(): number[];
getSigAlgName(): string;
getSigAlgOID(): string;
getSigAlgParams(): number[];
getIssuerUniqueID(): boolean;
getSubjectUniqueID(): boolean;
getKeyUsage(): boolean;
getExtendedKeyUsage(): java_util_List<string>;
getSubjectAlternativeNames(): java_util_Collection<java_util_List<java_lang_Object>>;
getIssuerAlternativeNames(): java_util_Collection<java_util_List<java_lang_Object>>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
getExtensionValue(arg0: string): number[];
hasUnsupportedCriticalExtension(): boolean;
getCriticalExtensionOIDs(): java_util_Set<string>;
getNonCriticalExtensionOIDs(): java_util_Set<string>;

  }
}//@ts-nocheck

declare module 'java.security.cert' {
import { Set as java_util_Set } from 'java.util';

  export class X509Extension {
extensionValue: number[];
criticalExtensionOIDs: java_util_Set<string>;
nonCriticalExtensionOIDs: java_util_Set<string>;
getExtensionValue(arg0: string): number[];
hasUnsupportedCriticalExtension(): boolean;
getCriticalExtensionOIDs(): java_util_Set<string>;
getNonCriticalExtensionOIDs(): java_util_Set<string>;

  }
}//@ts-nocheck

declare module 'java.security' {
import { Provider as java_security_Provider, AlgorithmParameters as java_security_AlgorithmParameters, AlgorithmParametersSpi as java_security_AlgorithmParametersSpi } from 'java.security';
import { AlgorithmParameterSpec as java_security_spec_AlgorithmParameterSpec } from 'java.security.spec';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class AlgorithmParameters extends java_lang_Object {
provider: java_security_Provider;
paramSpi: java_security_AlgorithmParametersSpi;
algorithm: string;
initialized: boolean;
provider: java_security_Provider;
static instance: java_security_AlgorithmParameters;
static instance: java_security_AlgorithmParameters;
static instance: java_security_AlgorithmParameters;
encoded: number[];
encoded: number[];
parameterSpec: T;
algorithm: string;
getProvider(): java_security_Provider;
toString(): string;
static getInstance(arg0: string): java_security_AlgorithmParameters;
static getInstance(arg0: string, arg1: java_security_Provider): java_security_AlgorithmParameters;
static getInstance(arg0: string, arg1: string): java_security_AlgorithmParameters;
init(arg0: java_security_spec_AlgorithmParameterSpec): void;
init(arg0: number[], arg1: string): void;
init(arg0: number[]): void;
getEncoded(arg0: string): number[];
getEncoded(): number[];
getParameterSpec<T extends java_security_spec_AlgorithmParameterSpec>(arg0: java_lang_Class<T>): T;
getAlgorithm(): string;

  }
}//@ts-nocheck

declare module 'java.security.spec' {


  export class AlgorithmParameterSpec {



  }
}//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';

  export class AlgorithmParametersSpi extends java_lang_Object {


constructor();
  }
}//@ts-nocheck

declare module 'java.security' {
import { Key as java_security_Key } from 'java.security';
import { Destroyable as javax_security_auth_Destroyable } from 'javax.security.auth';

  export class PrivateKey implements java_security_Key, javax_security_auth_Destroyable {
static serialVersionUID: number;
format: string;
encoded: number[];
algorithm: string;
getFormat(): string;
getEncoded(): number[];
getAlgorithm(): string;
isDestroyed(): boolean;
destroy(): void;

  }
}//@ts-nocheck

declare module 'java.security.spec' {
import { AlgorithmParameterSpec as java_security_spec_AlgorithmParameterSpec, PSSParameterSpec as java_security_spec_PSSParameterSpec } from 'java.security.spec';
import { Object as java_lang_Object } from 'java.lang';

  export class PSSParameterSpec extends java_lang_Object implements java_security_spec_AlgorithmParameterSpec {
mdName: string;
mgfName: string;
mgfSpec: java_security_spec_AlgorithmParameterSpec;
saltLen: number;
trailerField: number;
static TRAILER_FIELD_BC: number;
static DEFAULT: java_security_spec_PSSParameterSpec;
digestAlgorithm: string;
mGFAlgorithm: string;
mGFParameters: java_security_spec_AlgorithmParameterSpec;
saltLength: number;
trailerField: number;
toString(): string;
getDigestAlgorithm(): string;
getMGFAlgorithm(): string;
getMGFParameters(): java_security_spec_AlgorithmParameterSpec;
getSaltLength(): number;
getTrailerField(): number;
constructor(arg0: number);
constructor(arg0: string, arg1: string, arg2: java_security_spec_AlgorithmParameterSpec, arg3: number, arg4: number);
  }
}//@ts-nocheck

declare module 'java.security' {
import { CryptoPrimitive as java_security_CryptoPrimitive } from 'java.security';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class CryptoPrimitive extends java_lang_Enum<java_security_CryptoPrimitive> {
static MESSAGE_DIGEST: java_security_CryptoPrimitive;
static SECURE_RANDOM: java_security_CryptoPrimitive;
static BLOCK_CIPHER: java_security_CryptoPrimitive;
static STREAM_CIPHER: java_security_CryptoPrimitive;
static MAC: java_security_CryptoPrimitive;
static KEY_WRAP: java_security_CryptoPrimitive;
static PUBLIC_KEY_ENCRYPTION: java_security_CryptoPrimitive;
static SIGNATURE: java_security_CryptoPrimitive;
static KEY_ENCAPSULATION: java_security_CryptoPrimitive;
static KEY_AGREEMENT: java_security_CryptoPrimitive;
static $VALUES: java_security_CryptoPrimitive[];
class: java_lang_Class<java_lang_Object>;
static values(): java_security_CryptoPrimitive[];
static valueOf(arg0: string): java_security_CryptoPrimitive;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.security' {
import { Set as java_util_Set } from 'java.util';
import { CryptoPrimitive as java_security_CryptoPrimitive, AlgorithmParameters as java_security_AlgorithmParameters, Key as java_security_Key } from 'java.security';

  export class AlgorithmConstraints {

permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: string, arg2: java_security_AlgorithmParameters): boolean;
permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: java_security_Key): boolean;
permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: string, arg2: java_security_Key, arg3: java_security_AlgorithmParameters): boolean;

  }
}//@ts-nocheck

declare module 'java.security.cert' {
import { Principal as java_security_Principal, PublicKey as java_security_PublicKey, Provider as java_security_Provider } from 'java.security';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { X500Principal as javax_security_auth_x500_X500Principal } from 'javax.security.auth.x500';
import { Date as java_util_Date, Set as java_util_Set } from 'java.util';
import { X509Certificate as java_security_cert_X509Certificate, X509CRLEntry as java_security_cert_X509CRLEntry, CRL as java_security_cert_CRL, X509Extension as java_security_cert_X509Extension } from 'java.security.cert';
import { BigInteger as java_math_BigInteger } from 'java.math';

  export class X509CRL extends java_security_cert_CRL implements java_security_cert_X509Extension {
issuerPrincipal: javax_security_auth_x500_X500Principal;
version: number;
issuerDN: java_security_Principal;
signature: number[];
encoded: number[];
issuerX500Principal: javax_security_auth_x500_X500Principal;
sigAlgName: string;
sigAlgOID: string;
sigAlgParams: number[];
thisUpdate: java_util_Date;
nextUpdate: java_util_Date;
revokedCertificate: java_security_cert_X509CRLEntry;
revokedCertificate: java_security_cert_X509CRLEntry;
revokedCertificates: java_util_Set<java_security_cert_X509CRLEntry>;
tBSCertList: number[];
class: java_lang_Class<java_lang_Object>;
extensionValue: number[];
criticalExtensionOIDs: java_util_Set<string>;
nonCriticalExtensionOIDs: java_util_Set<string>;
getVersion(): number;
getIssuerDN(): java_security_Principal;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getSignature(): number[];
getEncoded(): number[];
verify(arg0: java_security_PublicKey, arg1: java_security_Provider): void;
verify(arg0: java_security_PublicKey): void;
verify(arg0: java_security_PublicKey, arg1: string): void;
getIssuerX500Principal(): javax_security_auth_x500_X500Principal;
getSigAlgName(): string;
getSigAlgOID(): string;
getSigAlgParams(): number[];
getThisUpdate(): java_util_Date;
getNextUpdate(): java_util_Date;
getRevokedCertificate(arg0: java_security_cert_X509Certificate): java_security_cert_X509CRLEntry;
getRevokedCertificate(arg0: java_math_BigInteger): java_security_cert_X509CRLEntry;
getRevokedCertificates(): java_util_Set<java_security_cert_X509CRLEntry>;
getTBSCertList(): number[];
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
getExtensionValue(arg0: string): number[];
hasUnsupportedCriticalExtension(): boolean;
getCriticalExtensionOIDs(): java_util_Set<string>;
getNonCriticalExtensionOIDs(): java_util_Set<string>;

  }
}//@ts-nocheck

declare module 'java.security.cert' {
import { Object as java_lang_Object } from 'java.lang';
import { BigInteger as java_math_BigInteger } from 'java.math';
import { X500Principal as javax_security_auth_x500_X500Principal } from 'javax.security.auth.x500';
import { Date as java_util_Date, Set as java_util_Set } from 'java.util';
import { CRLReason as java_security_cert_CRLReason, X509Extension as java_security_cert_X509Extension } from 'java.security.cert';

  export class X509CRLEntry extends java_lang_Object implements java_security_cert_X509Extension {
encoded: number[];
serialNumber: java_math_BigInteger;
certificateIssuer: javax_security_auth_x500_X500Principal;
revocationDate: java_util_Date;
revocationReason: java_security_cert_CRLReason;
extensionValue: number[];
criticalExtensionOIDs: java_util_Set<string>;
nonCriticalExtensionOIDs: java_util_Set<string>;
hasExtensions(): boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getEncoded(): number[];
getSerialNumber(): java_math_BigInteger;
getCertificateIssuer(): javax_security_auth_x500_X500Principal;
getRevocationDate(): java_util_Date;
getRevocationReason(): java_security_cert_CRLReason;
getExtensionValue(arg0: string): number[];
hasUnsupportedCriticalExtension(): boolean;
getCriticalExtensionOIDs(): java_util_Set<string>;
getNonCriticalExtensionOIDs(): java_util_Set<string>;
constructor();
  }
}//@ts-nocheck

declare module 'java.security.cert' {
import { CRLReason as java_security_cert_CRLReason } from 'java.security.cert';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class CRLReason extends java_lang_Enum<java_security_cert_CRLReason> {
static UNSPECIFIED: java_security_cert_CRLReason;
static KEY_COMPROMISE: java_security_cert_CRLReason;
static CA_COMPROMISE: java_security_cert_CRLReason;
static AFFILIATION_CHANGED: java_security_cert_CRLReason;
static SUPERSEDED: java_security_cert_CRLReason;
static CESSATION_OF_OPERATION: java_security_cert_CRLReason;
static CERTIFICATE_HOLD: java_security_cert_CRLReason;
static UNUSED: java_security_cert_CRLReason;
static REMOVE_FROM_CRL: java_security_cert_CRLReason;
static PRIVILEGE_WITHDRAWN: java_security_cert_CRLReason;
static AA_COMPROMISE: java_security_cert_CRLReason;
static $VALUES: java_security_cert_CRLReason[];
class: java_lang_Class<java_lang_Object>;
static values(): java_security_cert_CRLReason[];
static valueOf(arg0: string): java_security_cert_CRLReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

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
}//@ts-nocheck

declare module 'java.security.SecureClassLoader' {
import { Object as java_lang_Object } from 'java.lang';
import { CodeSource as java_security_CodeSource } from 'java.security';

  export class CodeSourceKey extends java_lang_Object {
cs: java_security_CodeSource;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;

  }
}