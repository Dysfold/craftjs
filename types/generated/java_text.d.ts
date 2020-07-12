//@ts-nocheck

declare module 'java.text' {
import { Object as java_lang_Object } from 'java.lang';

  export class ParsePosition extends java_lang_Object {
index: number;
errorIndex: number;
errorIndex: number;
index: number;
getErrorIndex(): number;
setErrorIndex(arg0: number): void;
setIndex(arg0: number): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getIndex(): number;
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.text' {
import { Object as java_lang_Object, StringBuffer as java_lang_StringBuffer, Cloneable as java_lang_Cloneable } from 'java.lang';
import { ParsePosition as java_text_ParsePosition, AttributedCharacterIterator as java_text_AttributedCharacterIterator, FieldPosition as java_text_FieldPosition } from 'java.text';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Format extends java_lang_Object implements java_io_Serializable, java_lang_Cloneable {
static serialVersionUID: number;
parseObject(arg0: string): java_lang_Object;
parseObject(arg0: string, arg1: java_text_ParsePosition): java_lang_Object;
formatToCharacterIterator(arg0: java_lang_Object): java_text_AttributedCharacterIterator;
clone(): java_lang_Object;
format(arg0: java_lang_Object): string;
format(arg0: java_lang_Object, arg1: java_lang_StringBuffer, arg2: java_text_FieldPosition): java_lang_StringBuffer;

  }
}//@ts-nocheck

declare module 'java.text' {
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';
import { Object as java_lang_Object } from 'java.lang';
import { Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { CharacterIterator as java_text_CharacterIterator } from 'java.text';

  export class AttributedCharacterIterator implements java_text_CharacterIterator {
attribute: java_lang_Object;
attributes: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>;
runStart: number;
runStart: number;
runStart: number;
runLimit: number;
runLimit: number;
runLimit: number;
allAttributeKeys: java_util_Set<java_textdCharacterIterator_Attribute_Attribute>;
beginIndex: number;
endIndex: number;
index: number;
getAttribute(arg0: java_textdCharacterIterator_Attribute_Attribute): java_lang_Object;
getAttributes(): java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>;
getRunStart(): number;
getRunStart(arg0: java_util_Set<java_textdCharacterIterator_Attribute_Attribute>): number;
getRunStart(arg0: java_textdCharacterIterator_Attribute_Attribute): number;
getRunLimit(arg0: java_util_Set<java_textdCharacterIterator_Attribute_Attribute>): number;
getRunLimit(arg0: java_textdCharacterIterator_Attribute_Attribute): number;
getRunLimit(): number;
getAllAttributeKeys(): java_util_Set<java_textdCharacterIterator_Attribute_Attribute>;
setIndex(arg0: number): string;
getBeginIndex(): number;
getEndIndex(): number;
clone(): java_lang_Object;
last(): string;
next(): string;
first(): string;
current(): string;
getIndex(): number;
previous(): string;

  }
}//@ts-nocheck

declare module 'java.text' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';

  export class CharacterIterator implements java_lang_Cloneable {
static DONE: string;
beginIndex: number;
endIndex: number;
index: number;
setIndex(arg0: number): string;
getBeginIndex(): number;
getEndIndex(): number;
clone(): java_lang_Object;
last(): string;
next(): string;
first(): string;
current(): string;
getIndex(): number;
previous(): string;

  }
}//@ts-nocheck

declare module 'java.text' {
import { Field as java_text_Format_Field } from 'java.text.Format';
import { Object as java_lang_Object } from 'java.lang';

  export class FieldPosition extends java_lang_Object {
field: number;
endIndex: number;
beginIndex: number;
attribute: java_text_Format_Field;
fieldAttribute: java_text_Format_Field;
beginIndex: number;
endIndex: number;
field: number;
setBeginIndex(arg0: number): void;
setEndIndex(arg0: number): void;
getFieldAttribute(): java_text_Format_Field;
getBeginIndex(): number;
getEndIndex(): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getField(): number;
constructor(arg0: number);
constructor(arg0: java_text_Format_Field, arg1: number);
constructor(arg0: java_text_Format_Field);
  }
}//@ts-nocheck

declare module 'java.text.Format' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';

  export class Field extends java_textdCharacterIterator_Attribute_Attribute {
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.text' {
import { Object as java_lang_Object } from 'java.lang';

  export class Annotation extends java_lang_Object {
value: java_lang_Object;
value: java_lang_Object;
toString(): string;
getValue(): java_lang_Object;
constructor(arg0: java_lang_Object);
  }
}