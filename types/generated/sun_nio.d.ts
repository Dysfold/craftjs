//@ts-nocheck

declare module 'sun.nio.ch' {
import { Thread as java_lang_Thread } from 'java.lang';

  export class Interruptible {

interrupt(arg0: java_lang_Thread): void;

  }
}//@ts-nocheck

declare module 'sun.nio.cs' {
import { CharBuffer as java_nio_CharBuffer, ByteBuffer as java_nio_ByteBuffer } from 'java.nio';
import { OutputStream as java_io_OutputStream, Writer as java_io_Writer } from 'java.io';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Charset as java_nio_charset_Charset, CharsetEncoder as java_nio_charset_CharsetEncoder } from 'java.nio.charset';
import { StreamEncoder as sun_nio_cs_StreamEncoder } from 'sun.nio.cs';
import { WritableByteChannel as java_nio_channels_WritableByteChannel } from 'java.nio.channels';

  export class StreamEncoder extends java_io_Writer {
static DEFAULT_BYTE_BUFFER_SIZE: number;
closed: boolean;
cs: java_nio_charset_Charset;
encoder: java_nio_charset_CharsetEncoder;
bb: java_nio_ByteBuffer;
out: java_io_OutputStream;
ch: java_nio_channels_WritableByteChannel;
haveLeftoverChar: boolean;
leftoverChar: string;
lcb: java_nio_CharBuffer;
static $assertionsDisabled: boolean;
encoding: string;
class: java_lang_Class<java_lang_Object>;
write(arg0: string, arg1: number, arg2: number): void;
write(arg0: string[], arg1: number, arg2: number): void;
write(arg0: number): void;
write(arg0: java_nio_CharBuffer): void;
flush(): void;
close(): void;
flushBuffer(): void;
getEncoding(): string;
static forOutputStreamWriter(arg0: java_io_OutputStream, arg1: java_lang_Object, arg2: java_nio_charset_Charset): sun_nio_cs_StreamEncoder;
static forOutputStreamWriter(arg0: java_io_OutputStream, arg1: java_lang_Object, arg2: string): sun_nio_cs_StreamEncoder;
static forOutputStreamWriter(arg0: java_io_OutputStream, arg1: java_lang_Object, arg2: java_nio_charset_CharsetEncoder): sun_nio_cs_StreamEncoder;
static forEncoder(arg0: java_nio_channels_WritableByteChannel, arg1: java_nio_charset_CharsetEncoder, arg2: number): sun_nio_cs_StreamEncoder;
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