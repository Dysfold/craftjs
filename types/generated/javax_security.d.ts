//@ts-nocheck

declare module 'javax.security.auth' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Set as java_util_Set } from 'java.util';
import { Principal as java_security_Principal, AccessControlContext as java_security_AccessControlContext, PrivilegedAction as java_security_PrivilegedAction, PrivilegedExceptionAction as java_security_PrivilegedExceptionAction, ProtectionDomain as java_security_ProtectionDomain } from 'java.security';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Subject extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
principals: java_util_Set<java_security_Principal>;
pubCredentials: java_util_Set<java_lang_Object>;
privCredentials: java_util_Set<java_lang_Object>;
readOnly: boolean;
static PRINCIPAL_SET: number;
static PUB_CREDENTIAL_SET: number;
static PRIV_CREDENTIAL_SET: number;
static NULL_PD_ARRAY: java_security_ProtectionDomain[];
principals: java_util_Set<T>;
principals: java_util_Set<java_security_Principal>;
static subject: javax_security_auth_Subject;
publicCredentials: java_util_Set<java_lang_Object>;
publicCredentials: java_util_Set<T>;
privateCredentials: java_util_Set<java_lang_Object>;
privateCredentials: java_util_Set<T>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getPrincipals<T extends java_security_Principal>(arg0: java_lang_Class<T>): java_util_Set<T>;
getPrincipals(): java_util_Set<java_security_Principal>;
setReadOnly(): void;
isReadOnly(): boolean;
static getSubject(arg0: java_security_AccessControlContext): javax_security_auth_Subject;
static doAs<T extends java_lang_Object>(arg0: javax_security_auth_Subject, arg1: java_security_PrivilegedAction<T>): T;
static doAs<T extends java_lang_Object>(arg0: javax_security_auth_Subject, arg1: java_security_PrivilegedExceptionAction<T>): T;
static doAsPrivileged<T extends java_lang_Object>(arg0: javax_security_auth_Subject, arg1: java_security_PrivilegedAction<T>, arg2: java_security_AccessControlContext): T;
static doAsPrivileged<T extends java_lang_Object>(arg0: javax_security_auth_Subject, arg1: java_security_PrivilegedExceptionAction<T>, arg2: java_security_AccessControlContext): T;
getPublicCredentials(): java_util_Set<java_lang_Object>;
getPublicCredentials<T extends java_lang_Object>(arg0: java_lang_Class<T>): java_util_Set<T>;
getPrivateCredentials(): java_util_Set<java_lang_Object>;
getPrivateCredentials<T extends java_lang_Object>(arg0: java_lang_Class<T>): java_util_Set<T>;
constructor();
constructor(arg0: boolean, arg1: java_util_Set<java_security_Principal>, arg2: java_util_Set<java_lang_Object>, arg3: java_util_Set<java_lang_Object>);
  }
}//@ts-nocheck

declare module 'javax.security.auth.x500' {
import { Object as java_lang_Object } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';
import { InputStream as java_io_InputStream, Serializable as java_io_Serializable } from 'java.io';
import { X500Name as sun_security_x509_X500Name } from 'sun.security.x509';
import { Principal as java_security_Principal } from 'java.security';

  export class X500Principal extends java_lang_Object implements java_security_Principal, java_io_Serializable {
static serialVersionUID: number;
static RFC1779: string;
static RFC2253: string;
static CANONICAL: string;
thisX500Name: sun_security_x509_X500Name;
name: string;
name: string;
name: string;
encoded: number[];
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getName(arg0: string): string;
getName(arg0: string, arg1: java_util_Map<string, string>): string;
getName(): string;
getEncoded(): number[];
implies(arg0: javax_security_auth_Subject): boolean;
constructor(arg0: java_io_InputStream);
constructor(arg0: number[]);
constructor(arg0: string, arg1: java_util_Map<string, string>);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'javax.security.auth' {


  export class Destroyable {

isDestroyed(): boolean;
destroy(): void;

  }
}