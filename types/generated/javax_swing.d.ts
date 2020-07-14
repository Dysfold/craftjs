//@ts-nocheck

declare module 'javax.swing.text' {
import { Object as java_lang_Object } from 'java.lang';
import { AttributeSet as javax_swing_text_AttributeSet } from 'javax.swing.text';
import { Enumeration as java_util_Enumeration } from 'java.util';

  export class AttributeSet {
static NameAttribute: java_lang_Object;
static ResolveAttribute: java_lang_Object;
attribute: java_lang_Object;
attributeCount: number;
attributeNames: java_util_Enumeration<java_lang_Object>;
resolveParent: javax_swing_text_AttributeSet;
isDefined(arg0: java_lang_Object): boolean;
getAttribute(arg0: java_lang_Object): java_lang_Object;
isEqual(arg0: javax_swing_text_AttributeSet): boolean;
getAttributeCount(): number;
copyAttributes(): javax_swing_text_AttributeSet;
getAttributeNames(): java_util_Enumeration<java_lang_Object>;
containsAttribute(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
containsAttributes(arg0: javax_swing_text_AttributeSet): boolean;
getResolveParent(): javax_swing_text_AttributeSet;

  }
}