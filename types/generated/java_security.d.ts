//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { Permission as java_security_Permission, PermissionCollection as java_security_PermissionCollection, Guard as java_security_Guard } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';
/** Represents a unique permission that may be attached to a Permissible */

  export class Permission extends java_lang_Object implements java_security_Guard, java_io_Serializable {
/** Returns the unique fully qualified name of this Permission */
name: string;
actions: string;
/** Returns the unique fully qualified name of this Permission */
getName(): string;
checkGuard(arg0: java_lang_Object): void;
equals(arg0: java_lang_Object): boolean;
getActions(): string;
hashCode(): number;
implies(arg0: java_security_Permission): boolean;
newPermissionCollection(): java_security_PermissionCollection;
toString(): string;
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

add(arg0: java_security_Permission): void;
elements(): java_util_Enumeration<java_security_Permission>;
elementsAsStream(): java_util_stream_Stream<java_security_Permission>;
implies(arg0: java_security_Permission): boolean;
isReadOnly(): boolean;
setReadOnly(): void;
toString(): string;
constructor();
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
import { Object as java_lang_Object } from 'java.lang';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';

  export class Principal {
name: string;
equals(arg0: java_lang_Object): boolean;
getName(): string;
hashCode(): number;
implies(arg0: javax_security_auth_Subject): boolean;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { Permission as java_security_Permission, DomainCombiner as java_security_DomainCombiner, AccessControlContext as java_security_AccessControlContext, ProtectionDomain as java_security_ProtectionDomain } from 'java.security';

  export class AccessControlContext extends java_lang_Object {
domainCombiner: java_security_DomainCombiner;
checkPermission(arg0: java_security_Permission): void;
equals(arg0: java_lang_Object): boolean;
getDomainCombiner(): java_security_DomainCombiner;
hashCode(): number;
constructor(arg0: JArray<java_security_ProtectionDomain>);
constructor(arg0: java_security_AccessControlContext, arg1: java_security_DomainCombiner);
  }
}
//@ts-nocheck

declare module 'java.security' {
import { ProtectionDomain as java_security_ProtectionDomain } from 'java.security';

  export class DomainCombiner {

combine(arg0: JArray<java_security_ProtectionDomain>, arg1: JArray<java_security_ProtectionDomain>): JArray<java_security_ProtectionDomain>;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { ClassLoader as java_lang_ClassLoader, Object as java_lang_Object } from 'java.lang';
import { CodeSource as java_security_CodeSource, Principal as java_security_Principal, PermissionCollection as java_security_PermissionCollection, Permission as java_security_Permission } from 'java.security';

  export class ProtectionDomain extends java_lang_Object {
classLoader: java_lang_ClassLoader;
codeSource: java_security_CodeSource;
permissions: java_security_PermissionCollection;
principals: JArray<java_security_Principal>;
getClassLoader(): java_lang_ClassLoader;
getCodeSource(): java_security_CodeSource;
getPermissions(): java_security_PermissionCollection;
getPrincipals(): JArray<java_security_Principal>;
implies(arg0: java_security_Permission): boolean;
staticPermissionsOnly(): boolean;
toString(): string;
constructor(arg0: java_security_CodeSource, arg1: java_security_PermissionCollection);
constructor(arg0: java_security_CodeSource, arg1: java_security_PermissionCollection, arg2: java_lang_ClassLoader, arg3: JArray<java_security_Principal>);
  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { URL as java_net_URL } from 'java.net';
import { Certificate as java_security_cert_Certificate } from 'java.security.cert';
import { CodeSource as java_security_CodeSource, CodeSigner as java_security_CodeSigner } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class CodeSource extends java_lang_Object implements java_io_Serializable {
certificates: JArray<java_security_cert_Certificate>;
codeSigners: JArray<java_security_CodeSigner>;
location: java_net_URL;
equals(arg0: java_lang_Object): boolean;
getCertificates(): JArray<java_security_cert_Certificate>;
getCodeSigners(): JArray<java_security_CodeSigner>;
getLocation(): java_net_URL;
hashCode(): number;
implies(arg0: java_security_CodeSource): boolean;
toString(): string;
constructor(arg0: java_net_URL, arg1: JArray<java_security_CodeSigner>);
constructor(arg0: java_net_URL, arg1: JArray<java_security_cert_Certificate>);
  }
}
//@ts-nocheck

declare module 'java.security.cert' {
import { Object as java_lang_Object } from 'java.lang';
import { PublicKey as java_security_PublicKey, Provider as java_security_Provider } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Certificate extends java_lang_Object implements java_io_Serializable {
encoded: JArray<number>;
publicKey: java_security_PublicKey;
type: string;
equals(arg0: java_lang_Object): boolean;
getEncoded(): JArray<number>;
getPublicKey(): java_security_PublicKey;
getType(): string;
hashCode(): number;
toString(): string;
verify(arg0: java_security_PublicKey): void;
verify(arg0: java_security_PublicKey, arg1: java_security_Provider): void;
verify(arg0: java_security_PublicKey, arg1: string): void;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Key as java_security_Key } from 'java.security';

  export class PublicKey implements java_security_Key {
algorithm: string;
encoded: JArray<number>;
format: string;
static serialVersionUID: number;
getAlgorithm(): string;
getEncoded(): JArray<number>;
getFormat(): string;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Serializable as java_io_Serializable } from 'java.io';

  export class Key implements java_io_Serializable {
algorithm: string;
encoded: JArray<number>;
format: string;
static serialVersionUID: number;
getAlgorithm(): string;
getEncoded(): JArray<number>;
getFormat(): string;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Enumeration as java_util_Enumeration, Set as java_util_Set, Map as java_util_Map, Properties as java_util_Properties } from 'java.util';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { InputStream as java_io_InputStream } from 'java.io';
import { Service as java_security_Provider_Service } from 'java.security.Provider';
import { Provider as java_security_Provider } from 'java.security';

  export class Provider extends java_util_Properties {
class: java_lang_Class<java_lang_Object>;
info: string;
name: string;
orDefault: java_lang_Object;
property: string;
service: java_security_Provider_Service;
services: java_util_Set<java_security_Provider_Service>;
version: number;
versionStr: string;
clear(): void;
compute(arg0: java_lang_Object, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
computeIfAbsent(arg0: java_lang_Object, arg1: java_util_function_Function<java_lang_Object, java_lang_Object>): java_lang_Object;
computeIfPresent(arg0: java_lang_Object, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
configure(arg0: string): java_security_Provider;
elements(): java_util_Enumeration<java_lang_Object>;
entrySet(): java_util_Set<java_util_Map_Entry<java_lang_Object, java_lang_Object>>;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: java_lang_Object): java_lang_Object;
getClass(): java_lang_Class<java_lang_Object>;
getInfo(): string;
getName(): string;
getOrDefault(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
getProperty(arg0: string): string;
getService(arg0: string, arg1: string): java_security_Provider_Service;
getServices(): java_util_Set<java_security_Provider_Service>;
getVersion(): number;
getVersionStr(): string;
isConfigured(): boolean;
keySet(): java_util_Set<java_lang_Object>;
keys(): java_util_Enumeration<java_lang_Object>;
load(arg0: java_io_InputStream): void;
merge(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): java_lang_Object;
notify(): void;
notifyAll(): void;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
putAll(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
putIfAbsent(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
remove(arg0: java_lang_Object): java_lang_Object;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
replace(arg0: java_lang_Object, arg1: java_lang_Object, arg2: java_lang_Object): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, java_lang_Object>): void;
toString(): string;
values(): java_util_Collection<java_lang_Object>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.security.Provider' {
import { Object as java_lang_Object } from 'java.lang';
import { Provider as java_security_Provider } from 'java.security';
import { List as java_util_List, Map as java_util_Map } from 'java.util';

  export class Service extends java_lang_Object {
algorithm: string;
attribute: string;
className: string;
provider: java_security_Provider;
type: string;
getAlgorithm(): string;
getAttribute(arg0: string): string;
getClassName(): string;
getProvider(): java_security_Provider;
getType(): string;
newInstance(arg0: java_lang_Object): java_lang_Object;
supportsParameter(arg0: java_lang_Object): boolean;
toString(): string;
constructor(arg0: java_security_Provider, arg1: string, arg2: string, arg3: string, arg4: java_util_List<string>, arg5: java_util_Map<string, string>);
  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { CertPath as java_security_cert_CertPath } from 'java.security.cert';
import { Timestamp as java_security_Timestamp } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class CodeSigner extends java_lang_Object implements java_io_Serializable {
signerCertPath: java_security_cert_CertPath;
timestamp: java_security_Timestamp;
equals(arg0: java_lang_Object): boolean;
getSignerCertPath(): java_security_cert_CertPath;
getTimestamp(): java_security_Timestamp;
hashCode(): number;
toString(): string;
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
certificates: java_util_List<java_security_cert_Certificate>;
encoded: JArray<number>;
encoded: JArray<number>;
encodings: java_util_Iterator<string>;
type: string;
equals(arg0: java_lang_Object): boolean;
getCertificates(): java_util_List<java_security_cert_Certificate>;
getEncoded(): JArray<number>;
getEncoded(arg0: string): JArray<number>;
getEncodings(): java_util_Iterator<string>;
getType(): string;
hashCode(): number;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object } from 'java.lang';
import { CertPath as java_security_cert_CertPath } from 'java.security.cert';
import { Date as java_util_Date } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Timestamp extends java_lang_Object implements java_io_Serializable {
signerCertPath: java_security_cert_CertPath;
timestamp: java_util_Date;
equals(arg0: java_lang_Object): boolean;
getSignerCertPath(): java_security_cert_CertPath;
getTimestamp(): java_util_Date;
hashCode(): number;
toString(): string;
constructor(arg0: java_util_Date, arg1: java_security_cert_CertPath);
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

declare module 'java.security' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Permission as java_security_Permission, PermissionCollection as java_security_PermissionCollection } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class BasicPermission extends java_security_Permission implements java_io_Serializable {
actions: string;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
getActions(): string;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
implies(arg0: java_security_Permission): boolean;
newPermissionCollection(): java_security_PermissionCollection;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: string);
constructor(arg0: string, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.security' {
import { Object as java_lang_Object, Class as java_lang_Class, ClassLoader as java_lang_ClassLoader } from 'java.lang';

  export class SecureClassLoader extends java_lang_ClassLoader {
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}