//@ts-nocheck

declare module 'sun.security.util' {
import { PrintStream as java_io_PrintStream } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';
import { BigInteger as java_math_BigInteger } from 'java.math';
import { Debug as sun_security_util_Debug } from 'sun.security.util';

  export class Debug extends java_lang_Object {
prefix: string;
static args: string;
static hexDigits: string[];
printStream: java_io_PrintStream;
static instance: sun_security_util_Debug;
static instance: sun_security_util_Debug;
static Help(): void;
static isVerbose(): boolean;
getPrintStream(): java_io_PrintStream;
println(arg0: java_lang_Object, arg1: string): void;
static println(arg0: string, arg1: string): void;
println(): void;
println(arg0: string): void;
static toString(arg0: number[]): string;
static toHexString(arg0: java_math_BigInteger): string;
static getInstance(arg0: string, arg1: string): sun_security_util_Debug;
static getInstance(arg0: string): sun_security_util_Debug;
static isOn(arg0: string): boolean;
constructor();
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Hashtable as java_util_Hashtable, HashMap as java_util_HashMap, ArrayList as java_util_ArrayList } from 'java.util';
import { CodeSigner as java_security_CodeSigner, MessageDigest as java_security_MessageDigest } from 'java.security';
import { JarEntry as java_util_jar_JarEntry, Manifest as java_util_jar_Manifest } from 'java.util.jar';
import { Debug as sun_security_util_Debug } from 'sun.security.util';
import { Object as java_lang_Object } from 'java.lang';

  export class ManifestEntryVerifier extends java_lang_Object {
static debug: sun_security_util_Debug;
createdDigests: java_util_HashMap<string, java_security_MessageDigest>;
digests: java_util_ArrayList<java_security_MessageDigest>;
manifestHashes: java_util_ArrayList<number[]>;
name: string;
man: java_util_jar_Manifest;
skip: boolean;
entry: java_util_jar_JarEntry;
signers: java_security_CodeSigner[];
static hexc: string[];
entry: java_util_jar_JarEntry;
update(arg0: number): void;
update(arg0: number[], arg1: number, arg2: number): void;
verify(arg0: java_util_Hashtable<string, java_security_CodeSigner[]>, arg1: java_util_Hashtable<string, java_security_CodeSigner[]>): java_security_CodeSigner[];
getEntry(): java_util_jar_JarEntry;
setEntry(arg0: string, arg1: java_util_jar_JarEntry): void;
constructor(arg0: java_util_jar_Manifest);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Hashtable as java_util_Hashtable, List as java_util_List, ArrayList as java_util_ArrayList, HashMap as java_util_HashMap, Map as java_util_Map } from 'java.util';
import { CodeSigner as java_security_CodeSigner, MessageDigest as java_security_MessageDigest, Timestamp as java_security_Timestamp } from 'java.security';
import { Object as java_lang_Object, Boolean as java_lang_Boolean } from 'java.lang';
import { ManifestDigester as sun_security_util_ManifestDigester, Debug as sun_security_util_Debug } from 'sun.security.util';
import { PKCS7 as sun_security_pkcs_PKCS7 } from 'sun.security.pkcs';
import { CertificateFactory as java_security_cert_CertificateFactory } from 'java.security.cert';

  export class SignatureFileVerifier extends java_lang_Object {
static debug: sun_security_util_Debug;
signerCache: java_util_ArrayList<java_security_CodeSigner[]>;
static ATTR_DIGEST: string;
block: sun_security_pkcs_PKCS7;
sfBytes: number[];
name: string;
md: sun_security_util_ManifestDigester;
createdDigests: java_util_HashMap<string, java_security_MessageDigest>;
workaround: boolean;
certificateFactory: java_security_cert_CertificateFactory;
permittedAlgs: java_util_Map<string, java_lang_Boolean>;
timestamp: java_security_Timestamp;
static hexc: string[];
static isBlockOrSF(arg0: string): boolean;
static isSigningRelated(arg0: string): boolean;
needSignatureFile(arg0: string): boolean;
setSignatureFile(arg0: number[]): void;
process(arg0: java_util_Hashtable<string, java_security_CodeSigner[]>, arg1: java_util_List<java_lang_Object>): void;
needSignatureFileBytes(): boolean;
constructor(arg0: java_util_ArrayList<java_security_CodeSigner[]>, arg1: sun_security_util_ManifestDigester, arg2: string, arg3: number[]);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Entry as sun_security_util_ManifestDigester_Entry } from 'sun.security.util.ManifestDigester';
import { MessageDigest as java_security_MessageDigest } from 'java.security';
import { HashMap as java_util_HashMap } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class ManifestDigester extends java_lang_Object {
static MF_MAIN_ATTRS: string;
rawBytes: number[];
entries: java_util_HashMap<string, sun_security_util_ManifestDigester_Entry>;
get(arg0: string, arg1: boolean): sun_security_util_ManifestDigester_Entry;
manifestDigest(arg0: java_security_MessageDigest): number[];
constructor(arg0: number[]);
  }
}//@ts-nocheck

declare module 'sun.security.util.ManifestDigester' {
import { MessageDigest as java_security_MessageDigest } from 'java.security';
import { List as java_util_List } from 'java.util';
import { Section as sun_security_util_ManifestDigester_Section } from 'sun.security.util.ManifestDigester';
import { Object as java_lang_Object } from 'java.lang';

  export class Entry extends java_lang_Object {
sections: java_util_List<sun_security_util_ManifestDigester_Section>;
oldStyle: boolean;
digest(arg0: java_security_MessageDigest): number[];
digestWorkaround(arg0: java_security_MessageDigest): number[];
constructor();
  }
}//@ts-nocheck

declare module 'sun.security.util.ManifestDigester' {
import { Object as java_lang_Object } from 'java.lang';

  export class Section extends java_lang_Object {
offset: number;
length: number;
lengthWithBlankLine: number;
rawBytes: number[];

constructor(arg0: number, arg1: number, arg2: number, arg3: number[]);
  }
}//@ts-nocheck

declare module 'sun.security.pkcs' {
import { BigInteger as java_math_BigInteger } from 'java.math';
import { X509Certificate as java_security_cert_X509Certificate, X509CRL as java_security_cert_X509CRL } from 'java.security.cert';
import { SignerInfo as sun_security_pkcs_SignerInfo, ContentInfo as sun_security_pkcs_ContentInfo } from 'sun.security.pkcs';
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream } from 'java.io';
import { DerOutputStream as sun_security_util_DerOutputStream, DerInputStream as sun_security_util_DerInputStream, ObjectIdentifier as sun_security_util_ObjectIdentifier } from 'sun.security.util';
import { AlgorithmId as sun_security_x509_AlgorithmId, X500Name as sun_security_x509_X500Name } from 'sun.security.x509';
import { URI as java_net_URI } from 'java.net';
import { Principal as java_security_Principal } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';

  export class PKCS7 extends java_lang_Object {
contentType: sun_security_util_ObjectIdentifier;
version: java_math_BigInteger;
digestAlgorithmIds: sun_security_x509_AlgorithmId[];
contentInfo: sun_security_pkcs_ContentInfo;
certificates: java_security_cert_X509Certificate[];
crls: java_security_cert_X509CRL[];
signerInfos: sun_security_pkcs_SignerInfo[];
oldStyle: boolean;
certIssuerNames: java_security_Principal[];
static KP_TIMESTAMPING_OID: string;
static EXTENDED_KEY_USAGE_OID: string;
version: java_math_BigInteger;
certificates: java_security_cert_X509Certificate[];
digestAlgorithmIds: sun_security_x509_AlgorithmId[];
cRLs: java_security_cert_X509CRL[];
signerInfos: sun_security_pkcs_SignerInfo[];
certificate: java_security_cert_X509Certificate;
contentInfo: sun_security_pkcs_ContentInfo;
getVersion(): java_math_BigInteger;
toString(): string;
getCertificates(): java_security_cert_X509Certificate[];
verify(arg0: sun_security_pkcs_SignerInfo, arg1: number[]): sun_security_pkcs_SignerInfo;
verify(arg0: number[]): sun_security_pkcs_SignerInfo[];
verify(): sun_security_pkcs_SignerInfo[];
isOldStyle(): boolean;
encodeSignedData(arg0: java_io_OutputStream): void;
encodeSignedData(arg0: sun_security_util_DerOutputStream): void;
getDigestAlgorithmIds(): sun_security_x509_AlgorithmId[];
getCRLs(): java_security_cert_X509CRL[];
getSignerInfos(): sun_security_pkcs_SignerInfo[];
getCertificate(arg0: java_math_BigInteger, arg1: sun_security_x509_X500Name): java_security_cert_X509Certificate;
static generateSignedData(arg0: number[], arg1: java_security_cert_X509Certificate[], arg2: number[], arg3: string, arg4: java_net_URI, arg5: string, arg6: string): number[];
getContentInfo(): sun_security_pkcs_ContentInfo;
constructor(arg0: sun_security_x509_AlgorithmId[], arg1: sun_security_pkcs_ContentInfo, arg2: java_security_cert_X509Certificate[], arg3: sun_security_pkcs_SignerInfo[]);
constructor(arg0: sun_security_x509_AlgorithmId[], arg1: sun_security_pkcs_ContentInfo, arg2: java_security_cert_X509Certificate[], arg3: java_security_cert_X509CRL[], arg4: sun_security_pkcs_SignerInfo[]);
constructor(arg0: sun_security_util_DerInputStream);
constructor(arg0: number[]);
constructor(arg0: java_io_InputStream);
  }
}//@ts-nocheck

declare module 'sun.security.x509' {
import { Object as java_lang_Object } from 'java.lang';
import { DerOutputStream as sun_security_util_DerOutputStream, ObjectIdentifier as sun_security_util_ObjectIdentifier, DerValue as sun_security_util_DerValue, DerInputStream as sun_security_util_DerInputStream } from 'sun.security.util';
import { X500Principal as javax_security_auth_x500_X500Principal } from 'javax.security.auth.x500';
import { X500Name as sun_security_x509_X500Name, RDN as sun_security_x509_RDN, AVA as sun_security_x509_AVA, GeneralNameInterface as sun_security_x509_GeneralNameInterface } from 'sun.security.x509';
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { Subject as javax_security_auth_Subject } from 'javax.security.auth';
import { Constructor as java_lang_reflect_Constructor, Field as java_lang_reflect_Field } from 'java.lang.reflect';
import { Principal as java_security_Principal } from 'java.security';

  export class X500Name extends java_lang_Object implements sun_security_x509_GeneralNameInterface, java_security_Principal {
dn: string;
rfc1779Dn: string;
rfc2253Dn: string;
canonicalDn: string;
names: sun_security_x509_RDN[];
x500Principal: javax_security_auth_x500_X500Principal;
encoded: number[];
rdnList: java_util_List<sun_security_x509_RDN>;
allAvaList: java_util_List<sun_security_x509_AVA>;
static commonName_data: number[];
static SURNAME_DATA: number[];
static SERIALNUMBER_DATA: number[];
static countryName_data: number[];
static localityName_data: number[];
static stateName_data: number[];
static streetAddress_data: number[];
static orgName_data: number[];
static orgUnitName_data: number[];
static title_data: number[];
static GIVENNAME_DATA: number[];
static INITIALS_DATA: number[];
static GENERATIONQUALIFIER_DATA: number[];
static DNQUALIFIER_DATA: number[];
static ipAddress_data: number[];
static DOMAIN_COMPONENT_DATA: number[];
static userid_data: number[];
static commonName_oid: sun_security_util_ObjectIdentifier;
static SERIALNUMBER_OID: sun_security_util_ObjectIdentifier;
static countryName_oid: sun_security_util_ObjectIdentifier;
static localityName_oid: sun_security_util_ObjectIdentifier;
static orgName_oid: sun_security_util_ObjectIdentifier;
static orgUnitName_oid: sun_security_util_ObjectIdentifier;
static stateName_oid: sun_security_util_ObjectIdentifier;
static streetAddress_oid: sun_security_util_ObjectIdentifier;
static title_oid: sun_security_util_ObjectIdentifier;
static DNQUALIFIER_OID: sun_security_util_ObjectIdentifier;
static SURNAME_OID: sun_security_util_ObjectIdentifier;
static GIVENNAME_OID: sun_security_util_ObjectIdentifier;
static INITIALS_OID: sun_security_util_ObjectIdentifier;
static GENERATIONQUALIFIER_OID: sun_security_util_ObjectIdentifier;
static ipAddress_oid: sun_security_util_ObjectIdentifier;
static DOMAIN_COMPONENT_OID: sun_security_util_ObjectIdentifier;
static userid_oid: sun_security_util_ObjectIdentifier;
static principalConstructor: java_lang_reflect_Constructor<javax_security_auth_x500_X500Principal>;
static principalField: java_lang_reflect_Field;
country: string;
iP: string;
name: string;
state: string;
type: number;
encoded: number[];
encodedInternal: number[];
organization: string;
organizationalUnit: string;
commonName: string;
locality: string;
dNQualifier: string;
surname: string;
givenName: string;
initials: string;
rFC1779Name: string;
rFC1779Name: string;
rFC2253Name: string;
rFC2253Name: string;
rFC2253CanonicalName: string;
generation: string;
domain: string;
getCountry(): string;
getIP(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getName(): string;
isEmpty(): boolean;
encode(arg0: sun_security_util_DerOutputStream): void;
size(): number;
getState(): string;
getType(): number;
getEncoded(): number[];
getEncodedInternal(): number[];
static asX500Name(arg0: javax_security_auth_x500_X500Principal): sun_security_x509_X500Name;
rdns(): java_util_List<sun_security_x509_RDN>;
allAvas(): java_util_List<sun_security_x509_AVA>;
avaSize(): number;
getOrganization(): string;
getOrganizationalUnit(): string;
getCommonName(): string;
getLocality(): string;
getDNQualifier(): string;
getSurname(): string;
getGivenName(): string;
getInitials(): string;
getRFC1779Name(): string;
getRFC1779Name(arg0: java_util_Map<string, string>): string;
getRFC2253Name(): string;
getRFC2253Name(arg0: java_util_Map<string, string>): string;
getRFC2253CanonicalName(): string;
findMostSpecificAttribute(arg0: sun_security_util_ObjectIdentifier): sun_security_util_DerValue;
constrains(arg0: sun_security_x509_GeneralNameInterface): number;
subtreeDepth(): number;
commonAncestor(arg0: sun_security_x509_X500Name): sun_security_x509_X500Name;
asX500Principal(): javax_security_auth_x500_X500Principal;
emit(arg0: sun_security_util_DerOutputStream): void;
getGeneration(): string;
getDomain(): string;
implies(arg0: javax_security_auth_Subject): boolean;
constructor(arg0: sun_security_util_DerValue);
constructor(arg0: sun_security_util_DerInputStream);
constructor(arg0: number[]);
constructor(arg0: string);
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: java_util_Map<string, string>);
constructor(arg0: string, arg1: string, arg2: string, arg3: string);
constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string);
constructor(arg0: sun_security_x509_RDN[]);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { DerOutputStream as sun_security_util_DerOutputStream, BitArray as sun_security_util_BitArray, DerValue as sun_security_util_DerValue, DerEncoder as sun_security_util_DerEncoder, ObjectIdentifier as sun_security_util_ObjectIdentifier, ByteArrayLexOrder as sun_security_util_ByteArrayLexOrder, ByteArrayTagOrder as sun_security_util_ByteArrayTagOrder } from 'sun.security.util';
import { Integer as java_lang_Integer, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BigInteger as java_math_BigInteger } from 'java.math';
import { Date as java_util_Date } from 'java.util';
import { OutputStream as java_io_OutputStream, ByteArrayOutputStream as java_io_ByteArrayOutputStream } from 'java.io';

  export class DerOutputStream extends java_io_ByteArrayOutputStream implements sun_security_util_DerEncoder {
static lexOrder: sun_security_util_ByteArrayLexOrder;
static tagOrder: sun_security_util_ByteArrayTagOrder;
class: java_lang_Class<java_lang_Object>;
putBoolean(arg0: boolean): void;
write(arg0: number, arg1: number[]): void;
write(arg0: number, arg1: sun_security_util_DerOutputStream): void;
putInteger(arg0: number): void;
putInteger(arg0: java_lang_Integer): void;
putInteger(arg0: java_math_BigInteger): void;
putUnalignedBitString(arg0: sun_security_util_BitArray): void;
putLength(arg0: number): void;
writeImplicit(arg0: number, arg1: sun_security_util_DerOutputStream): void;
putEnumerated(arg0: number): void;
putBitString(arg0: number[]): void;
putTruncatedUnalignedBitString(arg0: sun_security_util_BitArray): void;
putOctetString(arg0: number[]): void;
putSequence(arg0: sun_security_util_DerValue[]): void;
putSet(arg0: sun_security_util_DerValue[]): void;
putOrderedSetOf(arg0: number, arg1: sun_security_util_DerEncoder[]): void;
putOrderedSet(arg0: number, arg1: sun_security_util_DerEncoder[]): void;
putUTF8String(arg0: string): void;
putPrintableString(arg0: string): void;
putT61String(arg0: string): void;
putIA5String(arg0: string): void;
putBMPString(arg0: string): void;
putGeneralString(arg0: string): void;
putUTCTime(arg0: java_util_Date): void;
putGeneralizedTime(arg0: java_util_Date): void;
putTag(arg0: number, arg1: boolean, arg2: number): void;
derEncode(arg0: java_io_OutputStream): void;
putOID(arg0: sun_security_util_ObjectIdentifier): void;
putNull(): void;
putDerValue(arg0: sun_security_util_DerValue): void;
write(arg0: number[]): void;
flush(): void;
static nullOutputStream(): java_io_OutputStream;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number);
constructor();
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Object as java_lang_Object } from 'java.lang';
import { BitArray as sun_security_util_BitArray } from 'sun.security.util';

  export class BitArray extends java_lang_Object {
repn: number[];
length: number;
static BITS_PER_UNIT: number;
static NYBBLE: byte[][];
static BYTES_PER_LINE: number;
get(arg0: number): boolean;
equals(arg0: java_lang_Object): boolean;
length(): number;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
set(arg0: number, arg1: boolean): void;
toByteArray(): number[];
truncate(): sun_security_util_BitArray;
toBooleanArray(): boolean;
constructor(arg0: number, arg1: number[]);
constructor(arg0: number);
constructor(arg0: boolean);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Object as java_lang_Object } from 'java.lang';
import { DerOutputStream as sun_security_util_DerOutputStream, BitArray as sun_security_util_BitArray, ObjectIdentifier as sun_security_util_ObjectIdentifier, DerInputStream as sun_security_util_DerInputStream, DerInputBuffer as sun_security_util_DerInputBuffer } from 'sun.security.util';
import { BigInteger as java_math_BigInteger } from 'java.math';
import { Date as java_util_Date } from 'java.util';
import { InputStream as java_io_InputStream } from 'java.io';

  export class DerValue extends java_lang_Object {
static TAG_UNIVERSAL: number;
static TAG_APPLICATION: number;
static TAG_CONTEXT: number;
static TAG_PRIVATE: number;
tag: number;
buffer: sun_security_util_DerInputBuffer;
data: sun_security_util_DerInputStream;
length: number;
static tag_Boolean: number;
static tag_Integer: number;
static tag_BitString: number;
static tag_OctetString: number;
static tag_Null: number;
static tag_ObjectId: number;
static tag_Enumerated: number;
static tag_UTF8String: number;
static tag_PrintableString: number;
static tag_T61String: number;
static tag_IA5String: number;
static tag_UtcTime: number;
static tag_GeneralizedTime: number;
static tag_GeneralString: number;
static tag_UniversalString: number;
static tag_BMPString: number;
static tag_Sequence: number;
static tag_SequenceOf: number;
static tag_Set: number;
static tag_SetOf: number;
tag: number;
boolean: boolean;
integer: number;
positiveBigInteger: java_math_BigInteger;
unalignedBitString: sun_security_util_BitArray;
unalignedBitString: sun_security_util_BitArray;
oID: sun_security_util_ObjectIdentifier;
octetString: number[];
bigInteger: java_math_BigInteger;
enumerated: number;
bitString: number[];
bitString: number[];
dataBytes: number[];
printableString: string;
t61String: string;
iA5String: string;
bMPString: string;
uTF8String: string;
generalString: string;
uTCTime: java_util_Date;
generalizedTime: java_util_Date;
asString: string;
data: sun_security_util_DerInputStream;
getTag(): number;
equals(arg0: java_lang_Object): boolean;
length(): number;
toString(): string;
hashCode(): number;
getBoolean(): boolean;
encode(arg0: sun_security_util_DerOutputStream): void;
toByteArray(): number[];
getInteger(): number;
getPositiveBigInteger(): java_math_BigInteger;
getUnalignedBitString(): sun_security_util_BitArray;
getUnalignedBitString(arg0: boolean): sun_security_util_BitArray;
isUniversal(): boolean;
isApplication(): boolean;
isContextSpecific(arg0: number): boolean;
isContextSpecific(): boolean;
isConstructed(arg0: number): boolean;
isConstructed(): boolean;
getOID(): sun_security_util_ObjectIdentifier;
getOctetString(): number[];
getBigInteger(): java_math_BigInteger;
getEnumerated(): number;
getBitString(): number[];
getBitString(arg0: boolean): number[];
getDataBytes(): number[];
getPrintableString(): string;
getT61String(): string;
getIA5String(): string;
getBMPString(): string;
getUTF8String(): string;
getGeneralString(): string;
getUTCTime(): java_util_Date;
getGeneralizedTime(): java_util_Date;
toDerInputStream(): sun_security_util_DerInputStream;
static isPrintableStringChar(arg0: string): boolean;
static createTag(arg0: number, arg1: boolean, arg2: number): number;
resetTag(arg0: number): void;
getAsString(): string;
getData(): sun_security_util_DerInputStream;
constructor(arg0: number, arg1: number[]);
constructor(arg0: number, arg1: string);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: number[]);
constructor(arg0: java_io_InputStream);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Object as java_lang_Object } from 'java.lang';
import { ObjectIdentifier as sun_security_util_ObjectIdentifier, DerInputStream as sun_security_util_DerInputStream } from 'sun.security.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ObjectIdentifier extends java_lang_Object implements java_io_Serializable {
encoding: number[];
stringForm: string;
static serialVersionUID: number;
components: java_lang_Object;
componentLen: number;
componentsCalculated: boolean;
static $assertionsDisabled: boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static newInternal(arg0: number[]): sun_security_util_ObjectIdentifier;
constructor(arg0: number[]);
constructor(arg0: sun_security_util_DerInputStream);
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { DerValue as sun_security_util_DerValue, BitArray as sun_security_util_BitArray, ObjectIdentifier as sun_security_util_ObjectIdentifier, DerInputStream as sun_security_util_DerInputStream, DerInputBuffer as sun_security_util_DerInputBuffer } from 'sun.security.util';
import { BigInteger as java_math_BigInteger } from 'java.math';
import { Date as java_util_Date } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class DerInputStream extends java_lang_Object {
buffer: sun_security_util_DerInputBuffer;
tag: number;
bytes: void;
integer: number;
derValue: sun_security_util_DerValue;
positiveBigInteger: java_math_BigInteger;
unalignedBitString: sun_security_util_BitArray;
oID: sun_security_util_ObjectIdentifier;
octetString: number[];
bigInteger: java_math_BigInteger;
enumerated: number;
bitString: number[];
printableString: string;
t61String: string;
iA5String: string;
bMPString: string;
uTF8String: string;
generalString: string;
uTCTime: java_util_Date;
generalizedTime: java_util_Date;
null: void;
sequence: sun_security_util_DerValue[];
set: sun_security_util_DerValue[];
set: sun_security_util_DerValue[];
getBytes(arg0: number[]): void;
toByteArray(): number[];
mark(arg0: number): void;
available(): number;
reset(): void;
getInteger(): number;
getDerValue(): sun_security_util_DerValue;
getPositiveBigInteger(): java_math_BigInteger;
getUnalignedBitString(): sun_security_util_BitArray;
getOID(): sun_security_util_ObjectIdentifier;
getOctetString(): number[];
getBigInteger(): java_math_BigInteger;
getEnumerated(): number;
getBitString(): number[];
getPrintableString(): string;
getT61String(): string;
getIA5String(): string;
getBMPString(): string;
getUTF8String(): string;
getGeneralString(): string;
getUTCTime(): java_util_Date;
getGeneralizedTime(): java_util_Date;
subStream(arg0: number, arg1: boolean): sun_security_util_DerInputStream;
getNull(): void;
peekByte(): number;
getSequence(arg0: number): sun_security_util_DerValue[];
getSet(arg0: number): sun_security_util_DerValue[];
getSet(arg0: number, arg1: boolean): sun_security_util_DerValue[];
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: number[], arg1: number, arg2: number, arg3: boolean);
constructor(arg0: number[]);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Date as java_util_Date } from 'java.util';
import { InputStream as java_io_InputStream, ByteArrayInputStream as java_io_ByteArrayInputStream } from 'java.io';

  export class DerInputBuffer extends java_io_ByteArrayInputStream implements java_lang_Cloneable {
allowBER: boolean;
integer: number;
bitString: number[];
uTCTime: java_util_Date;
generalizedTime: java_util_Date;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getInteger(arg0: number): number;
getBitString(arg0: number): number[];
getUTCTime(arg0: number): java_util_Date;
getGeneralizedTime(arg0: number): java_util_Date;
read(arg0: number[]): number;
readNBytes(arg0: number): number[];
static nullInputStream(): java_io_InputStream;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
toString(): string;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { OutputStream as java_io_OutputStream } from 'java.io';

  export class DerEncoder {

derEncode(arg0: java_io_OutputStream): void;

  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Comparator as java_util_Comparator } from 'java.util';
import { Function as java_util_function_Function, ToIntFunction as java_util_function_ToIntFunction, ToLongFunction as java_util_function_ToLongFunction, ToDoubleFunction as java_util_function_ToDoubleFunction } from 'java.util.function';

  export class ByteArrayLexOrder extends java_lang_Object implements java_util_Comparator<number[]> {

compare(arg0: number[], arg1: number[]): number;
compare(arg0: java_lang_Object, arg1: java_lang_Object): number;
reversed(): java_util_Comparator<T>;
thenComparing<U extends java_lang_Comparable<java_lang_Object>>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_Comparator<T>;
thenComparing<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
thenComparing(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
thenComparingInt(arg0: java_util_function_ToIntFunction<java_lang_Object>): java_util_Comparator<T>;
thenComparingLong(arg0: java_util_function_ToLongFunction<java_lang_Object>): java_util_Comparator<T>;
thenComparingDouble(arg0: java_util_function_ToDoubleFunction<java_lang_Object>): java_util_Comparator<T>;
constructor();
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { Comparator as java_util_Comparator } from 'java.util';
import { Function as java_util_function_Function, ToIntFunction as java_util_function_ToIntFunction, ToLongFunction as java_util_function_ToLongFunction, ToDoubleFunction as java_util_function_ToDoubleFunction } from 'java.util.function';

  export class ByteArrayTagOrder extends java_lang_Object implements java_util_Comparator<number[]> {

compare(arg0: number[], arg1: number[]): number;
compare(arg0: java_lang_Object, arg1: java_lang_Object): number;
reversed(): java_util_Comparator<T>;
thenComparing<U extends java_lang_Comparable<java_lang_Object>>(arg0: java_util_function_Function<java_lang_Object, U>): java_util_Comparator<T>;
thenComparing<U extends java_lang_Object>(arg0: java_util_function_Function<java_lang_Object, U>, arg1: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
thenComparing(arg0: java_util_Comparator<java_lang_Object>): java_util_Comparator<T>;
thenComparingInt(arg0: java_util_function_ToIntFunction<java_lang_Object>): java_util_Comparator<T>;
thenComparingLong(arg0: java_util_function_ToLongFunction<java_lang_Object>): java_util_Comparator<T>;
thenComparingDouble(arg0: java_util_function_ToDoubleFunction<java_lang_Object>): java_util_Comparator<T>;
constructor();
  }
}//@ts-nocheck

declare module 'sun.security.x509' {
import { Object as java_lang_Object } from 'java.lang';
import { List as java_util_List, Map as java_util_Map } from 'java.util';
import { AVA as sun_security_x509_AVA } from 'sun.security.x509';

  export class RDN extends java_lang_Object {
assertion: sun_security_x509_AVA[];
avaList: java_util_List<sun_security_x509_AVA>;
canonicalString: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
size(): number;
avas(): java_util_List<sun_security_x509_AVA>;
toRFC2253String(arg0: java_util_Map<string, string>): string;
toRFC2253String(): string;
toRFC2253String(arg0: boolean): string;
toRFC1779String(arg0: java_util_Map<string, string>): string;
toRFC1779String(): string;
constructor(arg0: sun_security_x509_AVA);
constructor(arg0: sun_security_x509_AVA[]);
constructor(arg0: string);
constructor(arg0: string, arg1: java_util_Map<string, string>);
  }
}//@ts-nocheck

declare module 'sun.security.x509' {
import { Object as java_lang_Object } from 'java.lang';
import { DerOutputStream as sun_security_util_DerOutputStream, DerValue as sun_security_util_DerValue, ObjectIdentifier as sun_security_util_ObjectIdentifier, Debug as sun_security_util_Debug, DerEncoder as sun_security_util_DerEncoder } from 'sun.security.util';
import { Map as java_util_Map } from 'java.util';
import { OutputStream as java_io_OutputStream } from 'java.io';

  export class AVA extends java_lang_Object implements sun_security_util_DerEncoder {
static debug: sun_security_util_Debug;
static PRESERVE_OLD_DC_ENCODING: boolean;
static DEFAULT: number;
static RFC1779: number;
static RFC2253: number;
oid: sun_security_util_ObjectIdentifier;
value: sun_security_util_DerValue;
static specialChars1779: string;
static specialChars2253: string;
static specialCharsDefault: string;
static escapedDefault: string;
static hexDigits: string;
valueString: string;
derValue: sun_security_util_DerValue;
objectIdentifier: sun_security_util_ObjectIdentifier;
getValueString(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
encode(arg0: sun_security_util_DerOutputStream): void;
getDerValue(): sun_security_util_DerValue;
toRFC2253String(arg0: java_util_Map<string, string>): string;
toRFC2253String(): string;
toRFC1779String(): string;
toRFC1779String(arg0: java_util_Map<string, string>): string;
toRFC2253CanonicalString(): string;
getObjectIdentifier(): sun_security_util_ObjectIdentifier;
derEncode(arg0: java_io_OutputStream): void;
constructor(arg0: sun_security_util_ObjectIdentifier, arg1: sun_security_util_DerValue);
  }
}//@ts-nocheck

declare module 'sun.security.x509' {
import { DerOutputStream as sun_security_util_DerOutputStream } from 'sun.security.util';
import { GeneralNameInterface as sun_security_x509_GeneralNameInterface } from 'sun.security.x509';

  export class GeneralNameInterface {
static NAME_ANY: number;
static NAME_RFC822: number;
static NAME_DNS: number;
static NAME_X400: number;
static NAME_DIRECTORY: number;
static NAME_EDI: number;
static NAME_URI: number;
static NAME_IP: number;
static NAME_OID: number;
static NAME_DIFF_TYPE: number;
static NAME_MATCH: number;
static NAME_NARROWS: number;
static NAME_WIDENS: number;
static NAME_SAME_TYPE: number;
type: number;
encode(arg0: sun_security_util_DerOutputStream): void;
getType(): number;
constrains(arg0: sun_security_x509_GeneralNameInterface): number;
subtreeDepth(): number;

  }
}//@ts-nocheck

declare module 'sun.security.pkcs' {
import { BigInteger as java_math_BigInteger } from 'java.math';
import { DerOutputStream as sun_security_util_DerOutputStream, DerInputStream as sun_security_util_DerInputStream, DisabledAlgorithmConstraints as sun_security_util_DisabledAlgorithmConstraints, Debug as sun_security_util_Debug, DerEncoder as sun_security_util_DerEncoder } from 'sun.security.util';
import { PKCS7 as sun_security_pkcs_PKCS7, PKCS9Attributes as sun_security_pkcs_PKCS9Attributes } from 'sun.security.pkcs';
import { ArrayList as java_util_ArrayList, Set as java_util_Set } from 'java.util';
import { X509Certificate as java_security_cert_X509Certificate } from 'java.security.cert';
import { AlgorithmId as sun_security_x509_AlgorithmId, X500Name as sun_security_x509_X500Name } from 'sun.security.x509';
import { OutputStream as java_io_OutputStream } from 'java.io';
import { Timestamp as java_security_Timestamp, CryptoPrimitive as java_security_CryptoPrimitive } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';

  export class SignerInfo extends java_lang_Object implements sun_security_util_DerEncoder {
static DIGEST_PRIMITIVE_SET: java_util_Set<java_security_CryptoPrimitive>;
static SIG_PRIMITIVE_SET: java_util_Set<java_security_CryptoPrimitive>;
static JAR_DISABLED_CHECK: sun_security_util_DisabledAlgorithmConstraints;
version: java_math_BigInteger;
issuerName: sun_security_x509_X500Name;
certificateSerialNumber: java_math_BigInteger;
digestAlgorithmId: sun_security_x509_AlgorithmId;
digestEncryptionAlgorithmId: sun_security_x509_AlgorithmId;
encryptedDigest: number[];
timestamp: java_security_Timestamp;
hasTimestamp: boolean;
static debug: sun_security_util_Debug;
authenticatedAttributes: sun_security_pkcs_PKCS9Attributes;
unauthenticatedAttributes: sun_security_pkcs_PKCS9Attributes;
version: java_math_BigInteger;
certificateChain: java_util_ArrayList<java_security_cert_X509Certificate>;
certificate: java_security_cert_X509Certificate;
digestAlgorithmId: sun_security_x509_AlgorithmId;
issuerName: sun_security_x509_X500Name;
certificateSerialNumber: java_math_BigInteger;
authenticatedAttributes: sun_security_pkcs_PKCS9Attributes;
digestEncryptionAlgorithmId: sun_security_x509_AlgorithmId;
encryptedDigest: number[];
unauthenticatedAttributes: sun_security_pkcs_PKCS9Attributes;
tsToken: sun_security_pkcs_PKCS7;
timestamp: java_security_Timestamp;
getVersion(): java_math_BigInteger;
toString(): string;
encode(arg0: sun_security_util_DerOutputStream): void;
getCertificateChain(arg0: sun_security_pkcs_PKCS7): java_util_ArrayList<java_security_cert_X509Certificate>;
getCertificate(arg0: sun_security_pkcs_PKCS7): java_security_cert_X509Certificate;
getDigestAlgorithmId(): sun_security_x509_AlgorithmId;
getIssuerName(): sun_security_x509_X500Name;
getCertificateSerialNumber(): java_math_BigInteger;
getAuthenticatedAttributes(): sun_security_pkcs_PKCS9Attributes;
getDigestEncryptionAlgorithmId(): sun_security_x509_AlgorithmId;
getEncryptedDigest(): number[];
getUnauthenticatedAttributes(): sun_security_pkcs_PKCS9Attributes;
getTsToken(): sun_security_pkcs_PKCS7;
derEncode(arg0: java_io_OutputStream): void;
getTimestamp(): java_security_Timestamp;
constructor(arg0: sun_security_x509_X500Name, arg1: java_math_BigInteger, arg2: sun_security_x509_AlgorithmId, arg3: sun_security_x509_AlgorithmId, arg4: number[]);
constructor(arg0: sun_security_util_DerInputStream, arg1: boolean);
constructor(arg0: sun_security_util_DerInputStream);
constructor(arg0: sun_security_x509_X500Name, arg1: java_math_BigInteger, arg2: sun_security_x509_AlgorithmId, arg3: sun_security_pkcs_PKCS9Attributes, arg4: sun_security_x509_AlgorithmId, arg5: number[], arg6: sun_security_pkcs_PKCS9Attributes);
  }
}//@ts-nocheck

declare module 'sun.security.x509' {
import { AlgorithmId as sun_security_x509_AlgorithmId } from 'sun.security.x509';
import { AlgorithmParameters as java_security_AlgorithmParameters, PrivateKey as java_security_PrivateKey } from 'java.security';
import { ObjectIdentifier as sun_security_util_ObjectIdentifier, DerOutputStream as sun_security_util_DerOutputStream, DerValue as sun_security_util_DerValue, DerEncoder as sun_security_util_DerEncoder } from 'sun.security.util';
import { Object as java_lang_Object } from 'java.lang';
import { OutputStream as java_io_OutputStream, Serializable as java_io_Serializable } from 'java.io';
import { AlgorithmParameterSpec as java_security_spec_AlgorithmParameterSpec, PSSParameterSpec as java_security_spec_PSSParameterSpec } from 'java.security.spec';
import { Map as java_util_Map } from 'java.util';

  export class AlgorithmId extends java_lang_Object implements java_io_Serializable, sun_security_util_DerEncoder {
static serialVersionUID: number;
algid: sun_security_util_ObjectIdentifier;
algParams: java_security_AlgorithmParameters;
constructedFromDer: boolean;
params: sun_security_util_DerValue;
static oidTable: java_util_Map<string, sun_security_util_ObjectIdentifier>;
static nameTable: java_util_Map<sun_security_util_ObjectIdentifier, string>;
static MD2_oid: sun_security_util_ObjectIdentifier;
static MD5_oid: sun_security_util_ObjectIdentifier;
static SHA_oid: sun_security_util_ObjectIdentifier;
static SHA224_oid: sun_security_util_ObjectIdentifier;
static SHA256_oid: sun_security_util_ObjectIdentifier;
static SHA384_oid: sun_security_util_ObjectIdentifier;
static SHA512_oid: sun_security_util_ObjectIdentifier;
static SHA512_224_oid: sun_security_util_ObjectIdentifier;
static SHA512_256_oid: sun_security_util_ObjectIdentifier;
static DH_data: number[];
static DH_PKIX_data: number[];
static DSA_OIW_data: number[];
static DSA_PKIX_data: number[];
static RSA_data: number[];
static DH_oid: sun_security_util_ObjectIdentifier;
static DH_PKIX_oid: sun_security_util_ObjectIdentifier;
static DSA_oid: sun_security_util_ObjectIdentifier;
static DSA_OIW_oid: sun_security_util_ObjectIdentifier;
static EC_oid: sun_security_util_ObjectIdentifier;
static ECDH_oid: sun_security_util_ObjectIdentifier;
static RSA_oid: sun_security_util_ObjectIdentifier;
static RSAEncryption_oid: sun_security_util_ObjectIdentifier;
static RSAES_OAEP_oid: sun_security_util_ObjectIdentifier;
static mgf1_oid: sun_security_util_ObjectIdentifier;
static RSASSA_PSS_oid: sun_security_util_ObjectIdentifier;
static AES_oid: sun_security_util_ObjectIdentifier;
static md2WithRSAEncryption_data: number[];
static md5WithRSAEncryption_data: number[];
static sha1WithRSAEncryption_data: number[];
static sha1WithRSAEncryption_OIW_data: number[];
static sha224WithRSAEncryption_data: number[];
static sha256WithRSAEncryption_data: number[];
static sha384WithRSAEncryption_data: number[];
static sha512WithRSAEncryption_data: number[];
static shaWithDSA_OIW_data: number[];
static sha1WithDSA_OIW_data: number[];
static dsaWithSHA1_PKIX_data: number[];
static md2WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static md5WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static sha1WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static sha1WithRSAEncryption_OIW_oid: sun_security_util_ObjectIdentifier;
static sha224WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static sha256WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static sha384WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static sha512WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static sha512_224WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static sha512_256WithRSAEncryption_oid: sun_security_util_ObjectIdentifier;
static shaWithDSA_OIW_oid: sun_security_util_ObjectIdentifier;
static sha1WithDSA_OIW_oid: sun_security_util_ObjectIdentifier;
static sha1WithDSA_oid: sun_security_util_ObjectIdentifier;
static sha224WithDSA_oid: sun_security_util_ObjectIdentifier;
static sha256WithDSA_oid: sun_security_util_ObjectIdentifier;
static sha1WithECDSA_oid: sun_security_util_ObjectIdentifier;
static sha224WithECDSA_oid: sun_security_util_ObjectIdentifier;
static sha256WithECDSA_oid: sun_security_util_ObjectIdentifier;
static sha384WithECDSA_oid: sun_security_util_ObjectIdentifier;
static sha512WithECDSA_oid: sun_security_util_ObjectIdentifier;
static specifiedWithECDSA_oid: sun_security_util_ObjectIdentifier;
static pbeWithMD5AndDES_oid: sun_security_util_ObjectIdentifier;
static pbeWithMD5AndRC2_oid: sun_security_util_ObjectIdentifier;
static pbeWithSHA1AndDES_oid: sun_security_util_ObjectIdentifier;
static pbeWithSHA1AndRC2_oid: sun_security_util_ObjectIdentifier;
static pbeWithSHA1AndDESede_oid: sun_security_util_ObjectIdentifier;
static pbeWithSHA1AndRC2_40_oid: sun_security_util_ObjectIdentifier;
name: string;
parameters: java_security_AlgorithmParameters;
static algorithmId: sun_security_x509_AlgorithmId;
oID: sun_security_util_ObjectIdentifier;
encodedParams: number[];
static encAlgFromSigAlg: string;
static digAlgFromSigAlg: string;
static defaultSigAlgForKey: string;
static withParameterSpec: sun_security_x509_AlgorithmId;
static defaultAlgorithmParameterSpec: java_security_spec_PSSParameterSpec;
static get(arg0: string): sun_security_x509_AlgorithmId;
static get(arg0: java_security_AlgorithmParameters): sun_security_x509_AlgorithmId;
equals(arg0: sun_security_util_ObjectIdentifier): boolean;
equals(arg0: java_lang_Object): boolean;
equals(arg0: sun_security_x509_AlgorithmId): boolean;
toString(): string;
hashCode(): number;
getName(): string;
encode(arg0: sun_security_util_DerOutputStream): void;
encode(): number[];
getParameters(): java_security_AlgorithmParameters;
static parse(arg0: sun_security_util_DerValue): sun_security_x509_AlgorithmId;
static getAlgorithmId(arg0: string): sun_security_x509_AlgorithmId;
getOID(): sun_security_util_ObjectIdentifier;
derEncode(arg0: java_io_OutputStream): void;
getEncodedParams(): number[];
static makeSigAlg(arg0: string, arg1: string): string;
static getEncAlgFromSigAlg(arg0: string): string;
static getDigAlgFromSigAlg(arg0: string): string;
static checkKeyAndSigAlgMatch(arg0: string, arg1: string): void;
static getDefaultSigAlgForKey(arg0: java_security_PrivateKey): string;
static getWithParameterSpec(arg0: string, arg1: java_security_spec_AlgorithmParameterSpec): sun_security_x509_AlgorithmId;
static getDefaultAlgorithmParameterSpec(arg0: string, arg1: java_security_PrivateKey): java_security_spec_PSSParameterSpec;
constructor(arg0: sun_security_util_ObjectIdentifier, arg1: java_security_AlgorithmParameters);
constructor(arg0: sun_security_util_ObjectIdentifier);
constructor();
  }
}//@ts-nocheck

declare module 'sun.security.pkcs' {
import { ObjectIdentifier as sun_security_util_ObjectIdentifier, DerInputStream as sun_security_util_DerInputStream } from 'sun.security.util';
import { PKCS9Attribute as sun_security_pkcs_PKCS9Attribute } from 'sun.security.pkcs';
import { OutputStream as java_io_OutputStream } from 'java.io';
import { Object as java_lang_Object } from 'java.lang';
import { Hashtable as java_util_Hashtable } from 'java.util';

  export class PKCS9Attributes extends java_lang_Object {
attributes: java_util_Hashtable<sun_security_util_ObjectIdentifier, sun_security_pkcs_PKCS9Attribute>;
permittedAttributes: java_util_Hashtable<sun_security_util_ObjectIdentifier, sun_security_util_ObjectIdentifier>;
derEncoding: number[];
ignoreUnsupportedAttributes: boolean;
attribute: sun_security_pkcs_PKCS9Attribute;
attribute: sun_security_pkcs_PKCS9Attribute;
attributes: sun_security_pkcs_PKCS9Attribute[];
attributeValue: java_lang_Object;
attributeValue: java_lang_Object;
derEncoding: number[];
getAttribute(arg0: sun_security_util_ObjectIdentifier): sun_security_pkcs_PKCS9Attribute;
getAttribute(arg0: string): sun_security_pkcs_PKCS9Attribute;
toString(): string;
encode(arg0: number, arg1: java_io_OutputStream): void;
getAttributes(): sun_security_pkcs_PKCS9Attribute[];
getAttributeValue(arg0: sun_security_util_ObjectIdentifier): java_lang_Object;
getAttributeValue(arg0: string): java_lang_Object;
getDerEncoding(): number[];
constructor(arg0: sun_security_pkcs_PKCS9Attribute[]);
constructor(arg0: sun_security_util_ObjectIdentifier[], arg1: sun_security_util_DerInputStream);
constructor(arg0: sun_security_util_DerInputStream);
constructor(arg0: sun_security_util_DerInputStream, arg1: boolean);
  }
}//@ts-nocheck

declare module 'sun.security.pkcs' {
import { ObjectIdentifier as sun_security_util_ObjectIdentifier, DerValue as sun_security_util_DerValue, Debug as sun_security_util_Debug, DerEncoder as sun_security_util_DerEncoder } from 'sun.security.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OutputStream as java_io_OutputStream } from 'java.io';
import { Hashtable as java_util_Hashtable } from 'java.util';

  export class PKCS9Attribute extends java_lang_Object implements sun_security_util_DerEncoder {
static debug: sun_security_util_Debug;
static PKCS9_OIDS: sun_security_util_ObjectIdentifier[];
static BYTE_ARRAY_CLASS: java_lang_Class<java_lang_Object>;
static EMAIL_ADDRESS_OID: sun_security_util_ObjectIdentifier;
static UNSTRUCTURED_NAME_OID: sun_security_util_ObjectIdentifier;
static CONTENT_TYPE_OID: sun_security_util_ObjectIdentifier;
static MESSAGE_DIGEST_OID: sun_security_util_ObjectIdentifier;
static SIGNING_TIME_OID: sun_security_util_ObjectIdentifier;
static COUNTERSIGNATURE_OID: sun_security_util_ObjectIdentifier;
static CHALLENGE_PASSWORD_OID: sun_security_util_ObjectIdentifier;
static UNSTRUCTURED_ADDRESS_OID: sun_security_util_ObjectIdentifier;
static EXTENDED_CERTIFICATE_ATTRIBUTES_OID: sun_security_util_ObjectIdentifier;
static ISSUER_SERIALNUMBER_OID: sun_security_util_ObjectIdentifier;
static EXTENSION_REQUEST_OID: sun_security_util_ObjectIdentifier;
static SMIME_CAPABILITY_OID: sun_security_util_ObjectIdentifier;
static SIGNING_CERTIFICATE_OID: sun_security_util_ObjectIdentifier;
static SIGNATURE_TIMESTAMP_TOKEN_OID: sun_security_util_ObjectIdentifier;
static EMAIL_ADDRESS_STR: string;
static UNSTRUCTURED_NAME_STR: string;
static CONTENT_TYPE_STR: string;
static MESSAGE_DIGEST_STR: string;
static SIGNING_TIME_STR: string;
static COUNTERSIGNATURE_STR: string;
static CHALLENGE_PASSWORD_STR: string;
static UNSTRUCTURED_ADDRESS_STR: string;
static EXTENDED_CERTIFICATE_ATTRIBUTES_STR: string;
static ISSUER_SERIALNUMBER_STR: string;
static RSA_PROPRIETARY_STR: string;
static SMIME_SIGNING_DESC_STR: string;
static EXTENSION_REQUEST_STR: string;
static SMIME_CAPABILITY_STR: string;
static SIGNING_CERTIFICATE_STR: string;
static SIGNATURE_TIMESTAMP_TOKEN_STR: string;
static NAME_OID_TABLE: java_util_Hashtable<string, sun_security_util_ObjectIdentifier>;
static OID_NAME_TABLE: java_util_Hashtable<sun_security_util_ObjectIdentifier, string>;
static PKCS9_VALUE_TAGS: Byte[][];
static VALUE_CLASSES: java_lang_Class<java_lang_Object>[];
static SINGLE_VALUED: boolean;
oid: sun_security_util_ObjectIdentifier;
index: number;
value: java_lang_Object;
name: string;
static name: string;
value: java_lang_Object;
oID: sun_security_util_ObjectIdentifier;
static oID: sun_security_util_ObjectIdentifier;
isKnown(): boolean;
toString(): string;
getName(): string;
static getName(arg0: sun_security_util_ObjectIdentifier): string;
getValue(): java_lang_Object;
getOID(): sun_security_util_ObjectIdentifier;
static getOID(arg0: string): sun_security_util_ObjectIdentifier;
isSingleValued(): boolean;
derEncode(arg0: java_io_OutputStream): void;
constructor(arg0: sun_security_util_DerValue);
constructor(arg0: sun_security_util_ObjectIdentifier, arg1: java_lang_Object);
constructor(arg0: string, arg1: java_lang_Object);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Key as java_security_Key, AlgorithmParameters as java_security_AlgorithmParameters, CryptoPrimitive as java_security_CryptoPrimitive } from 'java.security';
import { ConstraintsParameters as sun_security_util_ConstraintsParameters, AlgorithmDecomposer as sun_security_util_AlgorithmDecomposer, Debug as sun_security_util_Debug, AbstractAlgorithmConstraints as sun_security_util_AbstractAlgorithmConstraints } from 'sun.security.util';
import { Set as java_util_Set } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Constraints as sun_security_util_DisabledAlgorithmConstraints_Constraints } from 'sun.security.util.DisabledAlgorithmConstraints';

  export class DisabledAlgorithmConstraints extends sun_security_util_AbstractAlgorithmConstraints {
static debug: sun_security_util_Debug;
static PROPERTY_CERTPATH_DISABLED_ALGS: string;
static PROPERTY_TLS_DISABLED_ALGS: string;
static PROPERTY_JAR_DISABLED_ALGS: string;
disabledAlgorithms: string[];
algorithmConstraints: sun_security_util_DisabledAlgorithmConstraints_Constraints;
class: java_lang_Class<java_lang_Object>;
permits(arg0: string, arg1: java_security_Key, arg2: java_security_AlgorithmParameters, arg3: string): void;
permits(arg0: string, arg1: sun_security_util_ConstraintsParameters): void;
permits(arg0: sun_security_util_ConstraintsParameters): void;
permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: java_security_Key): boolean;
permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: string, arg2: java_security_Key, arg3: java_security_AlgorithmParameters): boolean;
permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: string, arg2: java_security_AlgorithmParameters): boolean;
checkProperty(arg0: string): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string);
constructor(arg0: string, arg1: sun_security_util_AlgorithmDecomposer);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Key as java_security_Key, AlgorithmParameters as java_security_AlgorithmParameters, Timestamp as java_security_Timestamp } from 'java.security';
import { Date as java_util_Date } from 'java.util';
import { X509Certificate as java_security_cert_X509Certificate } from 'java.security.cert';
import { Object as java_lang_Object } from 'java.lang';

  export class ConstraintsParameters extends java_lang_Object {
algorithm: string;
algParams: java_security_AlgorithmParameters;
publicKey: java_security_Key;
cert: java_security_cert_X509Certificate;
trustedMatch: boolean;
pkixDate: java_util_Date;
jarTimestamp: java_security_Timestamp;
variant: string;
variant: string;
publicKey: java_security_Key;
algParams: java_security_AlgorithmParameters;
pKIXParamDate: java_util_Date;
jARTimestamp: java_security_Timestamp;
certificate: java_security_cert_X509Certificate;
algorithm: string;
getVariant(): string;
getPublicKey(): java_security_Key;
getAlgParams(): java_security_AlgorithmParameters;
isTrustedMatch(): boolean;
getPKIXParamDate(): java_util_Date;
getJARTimestamp(): java_security_Timestamp;
getCertificate(): java_security_cert_X509Certificate;
getAlgorithm(): string;
constructor(arg0: java_security_cert_X509Certificate, arg1: boolean, arg2: java_util_Date, arg3: java_security_Timestamp, arg4: string);
constructor(arg0: java_security_Timestamp);
constructor(arg0: java_security_cert_X509Certificate);
constructor(arg0: string, arg1: java_security_AlgorithmParameters, arg2: java_security_Key, arg3: string);
  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Set as java_util_Set, Collection as java_util_Collection } from 'java.util';
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';
import { Object as java_lang_Object } from 'java.lang';

  export class AlgorithmDecomposer extends java_lang_Object {
static PATTERN: java_util_regex_Pattern;
static aliases: java_util_Collection<string>;
static decomposeOneHash(arg0: string): java_util_Set<string>;
static hashName(arg0: string): string;
decompose(arg0: string): java_util_Set<string>;
static getAliases(arg0: string): java_util_Collection<string>;
constructor();
  }
}//@ts-nocheck

declare module 'sun.security.util.DisabledAlgorithmConstraints' {
import { AlgorithmParameters as java_security_AlgorithmParameters, Key as java_security_Key } from 'java.security';
import { ConstraintsParameters as sun_security_util_ConstraintsParameters } from 'sun.security.util';
import { Map as java_util_Map, List as java_util_List } from 'java.util';
import { Constraint as sun_security_util_DisabledAlgorithmConstraints_Constraint } from 'sun.security.util.DisabledAlgorithmConstraints';
import { Object as java_lang_Object } from 'java.lang';

  export class Constraints extends java_lang_Object {
constraintsMap: java_util_Map<string, java_util_List<sun_security_util_DisabledAlgorithmConstraints_Constraint>>;
permits(arg0: string, arg1: java_security_AlgorithmParameters): boolean;
permits(arg0: string, arg1: sun_security_util_ConstraintsParameters): void;
permits(arg0: java_security_Key): boolean;
constructor(arg0: string[]);
  }
}//@ts-nocheck

declare module 'sun.security.util.DisabledAlgorithmConstraints' {
import { AlgorithmParameters as java_security_AlgorithmParameters, Key as java_security_Key } from 'java.security';
import { ConstraintsParameters as sun_security_util_ConstraintsParameters } from 'sun.security.util';
import { Constraint as sun_security_util_DisabledAlgorithmConstraints_Constraint } from 'sun.security.util.DisabledAlgorithmConstraints';
import { Object as java_lang_Object } from 'java.lang';

  export class Constraint extends java_lang_Object {
algorithm: string;
nextConstraint: sun_security_util_DisabledAlgorithmConstraints_Constraint;
permits(arg0: java_security_AlgorithmParameters): boolean;
permits(arg0: java_security_Key): boolean;
permits(arg0: sun_security_util_ConstraintsParameters): void;

  }
}//@ts-nocheck

declare module 'sun.security.util' {
import { Set as java_util_Set } from 'java.util';
import { CryptoPrimitive as java_security_CryptoPrimitive, AlgorithmParameters as java_security_AlgorithmParameters, Key as java_security_Key, AlgorithmConstraints as java_security_AlgorithmConstraints } from 'java.security';
import { AlgorithmDecomposer as sun_security_util_AlgorithmDecomposer } from 'sun.security.util';
import { Object as java_lang_Object } from 'java.lang';

  export class AbstractAlgorithmConstraints extends java_lang_Object implements java_security_AlgorithmConstraints {
decomposer: sun_security_util_AlgorithmDecomposer;
permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: string, arg2: java_security_AlgorithmParameters): boolean;
permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: java_security_Key): boolean;
permits(arg0: java_util_Set<java_security_CryptoPrimitive>, arg1: string, arg2: java_security_Key, arg3: java_security_AlgorithmParameters): boolean;

  }
}//@ts-nocheck

declare module 'sun.security.pkcs' {
import { DerOutputStream as sun_security_util_DerOutputStream, DerValue as sun_security_util_DerValue, ObjectIdentifier as sun_security_util_ObjectIdentifier, DerInputStream as sun_security_util_DerInputStream } from 'sun.security.util';
import { Object as java_lang_Object } from 'java.lang';

  export class ContentInfo extends java_lang_Object {
static pkcs7: number[];
static data: number[];
static sdata: number[];
static edata: number[];
static sedata: number[];
static ddata: number[];
static crdata: number[];
static nsdata: number[];
static tstInfo: number[];
static OLD_SDATA: number[];
static OLD_DATA: number[];
static PKCS7_OID: sun_security_util_ObjectIdentifier;
static DATA_OID: sun_security_util_ObjectIdentifier;
static SIGNED_DATA_OID: sun_security_util_ObjectIdentifier;
static ENVELOPED_DATA_OID: sun_security_util_ObjectIdentifier;
static SIGNED_AND_ENVELOPED_DATA_OID: sun_security_util_ObjectIdentifier;
static DIGESTED_DATA_OID: sun_security_util_ObjectIdentifier;
static ENCRYPTED_DATA_OID: sun_security_util_ObjectIdentifier;
static OLD_SIGNED_DATA_OID: sun_security_util_ObjectIdentifier;
static OLD_DATA_OID: sun_security_util_ObjectIdentifier;
static NETSCAPE_CERT_SEQUENCE_OID: sun_security_util_ObjectIdentifier;
static TIMESTAMP_TOKEN_INFO_OID: sun_security_util_ObjectIdentifier;
contentType: sun_security_util_ObjectIdentifier;
content: sun_security_util_DerValue;
content: sun_security_util_DerValue;
contentBytes: number[];
contentType: sun_security_util_ObjectIdentifier;
data: number[];
toString(): string;
encode(arg0: sun_security_util_DerOutputStream): void;
getContent(): sun_security_util_DerValue;
getContentBytes(): number[];
getContentType(): sun_security_util_ObjectIdentifier;
getData(): number[];
constructor(arg0: sun_security_util_DerInputStream, arg1: boolean);
constructor(arg0: sun_security_util_DerInputStream);
constructor(arg0: number[]);
constructor(arg0: sun_security_util_ObjectIdentifier, arg1: sun_security_util_DerValue);
  }
}