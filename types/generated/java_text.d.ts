//@ts-nocheck

declare module 'java.text' {
import { Object as java_lang_Object } from 'java.lang';

  export class ParsePosition extends java_lang_Object {
errorIndex: number;
index: number;
equals(arg0: java_lang_Object): boolean;
getErrorIndex(): number;
getIndex(): number;
hashCode(): number;
setErrorIndex(arg0: number): void;
setIndex(arg0: number): void;
toString(): string;
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.text' {
import { Object as java_lang_Object, StringBuffer as java_lang_StringBuffer, Cloneable as java_lang_Cloneable } from 'java.lang';
import { FieldPosition as java_text_FieldPosition, ParsePosition as java_text_ParsePosition, AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Format extends java_lang_Object implements java_io_Serializable, java_lang_Cloneable {

clone(): java_lang_Object;
format(arg0: java_lang_Object): string;
format(arg0: java_lang_Object, arg1: java_lang_StringBuffer, arg2: java_text_FieldPosition): java_lang_StringBuffer;
formatToCharacterIterator(arg0: java_lang_Object): java_text_AttributedCharacterIterator;
parseObject(arg0: string): java_lang_Object;
parseObject(arg0: string, arg1: java_text_ParsePosition): java_lang_Object;

  }
}
//@ts-nocheck

declare module 'java.text' {
import { Object as java_lang_Object } from 'java.lang';
import { Field as java_text_Format_Field } from 'java.text.Format';

  export class FieldPosition extends java_lang_Object {
beginIndex: number;
endIndex: number;
field: number;
fieldAttribute: java_text_Format_Field;
equals(arg0: java_lang_Object): boolean;
getBeginIndex(): number;
getEndIndex(): number;
getField(): number;
getFieldAttribute(): java_text_Format_Field;
hashCode(): number;
setBeginIndex(arg0: number): void;
setEndIndex(arg0: number): void;
toString(): string;
constructor(arg0: java_text_Format_Field);
constructor(arg0: java_text_Format_Field, arg1: number);
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.text.Format' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';

  export class Field extends java_textdCharacterIterator_Attribute_Attribute {
class: java_lang_Class<java_lang_Object>;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.text' {
import { Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';
import { Object as java_lang_Object } from 'java.lang';
import { CharacterIterator as java_text_CharacterIterator } from 'java.text';

  export class AttributedCharacterIterator implements java_text_CharacterIterator {
allAttributeKeys: java_util_Set<java_textdCharacterIterator_Attribute_Attribute>;
attribute: java_lang_Object;
attributes: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>;
beginIndex: number;
endIndex: number;
index: number;
runLimit: number;
runLimit: number;
runLimit: number;
runStart: number;
runStart: number;
runStart: number;
clone(): java_lang_Object;
current(): string;
first(): string;
getAllAttributeKeys(): java_util_Set<java_textdCharacterIterator_Attribute_Attribute>;
getAttribute(arg0: java_textdCharacterIterator_Attribute_Attribute): java_lang_Object;
getAttributes(): java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>;
getBeginIndex(): number;
getEndIndex(): number;
getIndex(): number;
getRunLimit(): number;
getRunLimit(arg0: java_textdCharacterIterator_Attribute_Attribute): number;
getRunLimit(arg0: java_util_Set<java_textdCharacterIterator_Attribute_Attribute>): number;
getRunStart(): number;
getRunStart(arg0: java_textdCharacterIterator_Attribute_Attribute): number;
getRunStart(arg0: java_util_Set<java_textdCharacterIterator_Attribute_Attribute>): number;
last(): string;
next(): string;
previous(): string;
setIndex(arg0: number): string;

  }
}
//@ts-nocheck

declare module 'java.text' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';

  export class CharacterIterator implements java_lang_Cloneable {
beginIndex: number;
endIndex: number;
index: number;
static DONE: string;
clone(): java_lang_Object;
current(): string;
first(): string;
getBeginIndex(): number;
getEndIndex(): number;
getIndex(): number;
last(): string;
next(): string;
previous(): string;
setIndex(arg0: number): string;

  }
}