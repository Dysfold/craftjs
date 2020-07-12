//@ts-nocheck

declare module 'sun.font' {
import { Font2D as sun_font_Font2D } from 'sun.font';
import { Object as java_lang_Object } from 'java.lang';

  export class Font2DHandle extends java_lang_Object {
font2D: sun_font_Font2D;

constructor(arg0: sun_font_Font2D);
  }
}//@ts-nocheck

declare module 'sun.font' {
import { Font as java_awt_Font } from 'java.awt';
import { FontRenderContext as java_awt_font_FontRenderContext } from 'java.awt.font';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';
import { Locale as java_util_Locale } from 'java.util';
import { FontStrike as sun_font_FontStrike, Font2DHandle as sun_font_Font2DHandle, FontFamily as sun_font_FontFamily, CharToGlyphMapper as sun_font_CharToGlyphMapper, FontStrikeDesc as sun_font_FontStrikeDesc } from 'sun.font';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';
import { Reference as java_lang_ref_Reference } from 'java.lang.ref';

  export class Font2D extends java_lang_Object {
static FONT_CONFIG_RANK: number;
static JRE_RANK: number;
static TTF_RANK: number;
static TYPE1_RANK: number;
static NATIVE_RANK: number;
static UNKNOWN_RANK: number;
static DEFAULT_RANK: number;
static boldNames: string[];
static italicNames: string[];
static boldItalicNames: string[];
static DEFAULT_FRC: java_awt_font_FontRenderContext;
handle: sun_font_Font2DHandle;
familyName: string;
fullName: string;
style: number;
family: sun_font_FontFamily;
fontRank: number;
mapper: sun_font_CharToGlyphMapper;
strikeCache: java_util_concurrent_ConcurrentHashMap<sun_font_FontStrikeDesc, java_lang_ref_Reference<sun_font_FontStrike>>;
lastFontStrike: java_lang_ref_Reference<sun_font_FontStrike>;
static FWIDTH_NORMAL: number;
static FWEIGHT_NORMAL: number;
static FWEIGHT_BOLD: number;
fontMetrics: void;
fontMetrics: void;
fontName: string;
numGlyphs: number;
missingGlyphCode: number;
baselineFor: number;
italicAngle: number;
familyName: string;
postscriptName: string;
strike: sun_font_FontStrike;
strike: sun_font_FontStrike;
strike: sun_font_FontStrike;
strike: sun_font_FontStrike;
styleMetrics: void;
style: number;
width: number;
weight: number;
getFontMetrics(arg0: java_awt_Font, arg1: java_awt_font_FontRenderContext, arg2: number[]): void;
getFontMetrics(arg0: java_awt_Font, arg1: java_awt_geom_AffineTransform, arg2: java_lang_Object, arg3: java_lang_Object, arg4: number[]): void;
getFontName(arg0: java_util_Locale): string;
getNumGlyphs(): number;
getMissingGlyphCode(): number;
getBaselineFor(arg0: string): number;
canDisplay(arg0: number): boolean;
canDisplay(arg0: string): boolean;
getItalicAngle(arg0: java_awt_Font, arg1: java_awt_geom_AffineTransform, arg2: java_lang_Object, arg3: java_lang_Object): number;
getFamilyName(arg0: java_util_Locale): string;
getPostscriptName(): string;
getStrike(arg0: java_awt_Font): sun_font_FontStrike;
getStrike(arg0: java_awt_Font, arg1: java_awt_geom_AffineTransform, arg2: java_awt_geom_AffineTransform, arg3: number, arg4: number): sun_font_FontStrike;
getStrike(arg0: java_awt_Font, arg1: java_awt_font_FontRenderContext): sun_font_FontStrike;
getStrike(arg0: java_awt_Font, arg1: java_awt_geom_AffineTransform, arg2: number, arg3: number): sun_font_FontStrike;
getStyleMetrics(arg0: number, arg1: number[], arg2: number): void;
canDoStyle(arg0: number): boolean;
useAAForPtSize(arg0: number): boolean;
hasSupplementaryChars(): boolean;
charToGlyph(arg0: number): number;
charToVariationGlyph(arg0: number, arg1: number): number;
getStyle(): number;
getWidth(): number;
getWeight(): number;
constructor();
  }
}//@ts-nocheck

declare module 'sun.font' {
import { FontStrikeDisposer as sun_font_FontStrikeDisposer, FontStrikeDesc as sun_font_FontStrikeDesc, StrikeMetrics as sun_font_StrikeMetrics } from 'sun.font';
import { Object as java_lang_Object } from 'java.lang';

  export class FontStrike extends java_lang_Object {
disposer: sun_font_FontStrikeDisposer;
desc: sun_font_FontStrikeDesc;
strikeMetrics: sun_font_StrikeMetrics;
algoStyle: boolean;
boldness: number;
italic: number;
numGlyphs: number;
getNumGlyphs(): number;
constructor();
  }
}//@ts-nocheck

declare module 'sun.font' {
import { Font2D as sun_font_Font2D, FontStrikeDesc as sun_font_FontStrikeDesc } from 'sun.font';
import { Object as java_lang_Object } from 'java.lang';
import { DisposerRecord as sun_java2d_DisposerRecord } from 'sun.java2d';
import { PollDisposable as sun_java2d_Disposer_PollDisposable } from 'sun.java2d.Disposer';

  export class FontStrikeDisposer extends java_lang_Object implements sun_java2d_DisposerRecord, sun_java2d_Disposer_PollDisposable {
font2D: sun_font_Font2D;
desc: sun_font_FontStrikeDesc;
longGlyphImages: number[];
intGlyphImages: number[];
segIntGlyphImages: int[][];
segLongGlyphImages: long[][];
pScalerContext: number;
disposed: boolean;
comp: boolean;
dispose(): void;
constructor(arg0: sun_font_Font2D, arg1: sun_font_FontStrikeDesc, arg2: number, arg3: number[]);
constructor(arg0: sun_font_Font2D, arg1: sun_font_FontStrikeDesc);
constructor(arg0: sun_font_Font2D, arg1: sun_font_FontStrikeDesc, arg2: number);
constructor(arg0: sun_font_Font2D, arg1: sun_font_FontStrikeDesc, arg2: number, arg3: number[]);
  }
}//@ts-nocheck

declare module 'sun.font' {
import { Object as java_lang_Object } from 'java.lang';
import { Font2D as sun_font_Font2D } from 'sun.font';
import { Font as java_awt_Font } from 'java.awt';
import { FontRenderContext as java_awt_font_FontRenderContext } from 'java.awt.font';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';

  export class FontStrikeDesc extends java_lang_Object {
static AA_ON: number;
static AA_LCD_H: number;
static AA_LCD_V: number;
static FRAC_METRICS_ON: number;
static FRAC_METRICS_SP: number;
devTx: java_awt_geom_AffineTransform;
glyphTx: java_awt_geom_AffineTransform;
style: number;
aaHint: number;
fmHint: number;
hashCode: number;
valuemask: number;
static aAHintIntVal: number;
static aAHintIntVal: number;
static fMHintIntVal: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static getAAHintIntVal(arg0: sun_font_Font2D, arg1: java_awt_Font, arg2: java_awt_font_FontRenderContext): number;
static getAAHintIntVal(arg0: java_lang_Object, arg1: sun_font_Font2D, arg2: number): number;
static getFMHintIntVal(arg0: java_lang_Object): number;
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_awt_geom_AffineTransform, arg2: number, arg3: number, arg4: number);
  }
}//@ts-nocheck

declare module 'sun.font' {
import { Object as java_lang_Object } from 'java.lang';

  export class StrikeMetrics extends java_lang_Object {
ascentX: number;
ascentY: number;
descentX: number;
descentY: number;
baselineX: number;
baselineY: number;
leadingX: number;
leadingY: number;
maxAdvanceX: number;
maxAdvanceY: number;
ascent: number;
descent: number;
leading: number;
maxAdvance: number;
toString(): string;
getAscent(): number;
getDescent(): number;
getLeading(): number;
getMaxAdvance(): number;

  }
}//@ts-nocheck

declare module 'sun.font' {
import { FontFamily as sun_font_FontFamily, Font2D as sun_font_Font2D } from 'sun.font';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';
import { HashMap as java_util_HashMap } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class FontFamily extends java_lang_Object {
static familyNameMap: java_util_concurrent_ConcurrentHashMap<string, sun_font_FontFamily>;
static allLocaleNames: java_util_HashMap<string, sun_font_FontFamily>;
familyName: string;
plain: sun_font_Font2D;
bold: sun_font_Font2D;
italic: sun_font_Font2D;
bolditalic: sun_font_Font2D;
logicalFont: boolean;
familyRank: number;
familyWidth: number;
static family: sun_font_FontFamily;
font: sun_font_Font2D;
familyName: string;
rank: number;
static allFamilyNames: string[];
fontWithExactStyleMatch: sun_font_Font2D;
static localeFamily: sun_font_FontFamily;
static allFontFamilies: sun_font_FontFamily[];
static getFamily(arg0: string): sun_font_FontFamily;
toString(): string;
getFont(arg0: number): sun_font_Font2D;
setFont(arg0: sun_font_Font2D, arg1: number): void;
getFamilyName(): string;
getRank(): number;
static getAllFamilyNames(): string[];
getFontWithExactStyleMatch(arg0: number): sun_font_Font2D;
static getLocaleFamily(arg0: string): sun_font_FontFamily;
static getAllFontFamilies(): sun_font_FontFamily[];
constructor(arg0: string, arg1: boolean, arg2: number);
  }
}//@ts-nocheck

declare module 'sun.font' {
import { Object as java_lang_Object } from 'java.lang';

  export class CharToGlyphMapper extends java_lang_Object {
static HI_SURROGATE_START: number;
static HI_SURROGATE_END: number;
static LO_SURROGATE_START: number;
static LO_SURROGATE_END: number;
static VS_START: number;
static VS_END: number;
static VSS_START: number;
static VSS_END: number;
static UNINITIALIZED_GLYPH: number;
static INVISIBLE_GLYPH_ID: number;
static INVISIBLE_GLYPHS: number;
missingGlyph: number;
numGlyphs: number;
missingGlyphCode: number;
getNumGlyphs(): number;
getMissingGlyphCode(): number;
canDisplay(arg0: number): boolean;
canDisplay(arg0: string): boolean;
charToGlyph(arg0: number): number;
charToGlyph(arg0: string): number;
charToVariationGlyph(arg0: number, arg1: number): number;
charsToGlyphs(arg0: number, arg1: string[], arg2: number[]): void;
charsToGlyphs(arg0: number, arg1: number[], arg2: number[]): void;
charsToGlyphsNS(arg0: number, arg1: string[], arg2: number[]): boolean;
static isVariationSelector(arg0: number): boolean;
constructor();
  }
}//@ts-nocheck

declare module 'sun.font' {
import { EAttribute as sun_font_EAttribute, AttributeValues as sun_font_AttributeValues } from 'sun.font';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Map as java_util_Map, Hashtable as java_util_Hashtable } from 'java.util';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';
import { TextAttribute as java_awt_font_TextAttribute, TransformAttribute as java_awt_font_TransformAttribute, GraphicAttribute as java_awt_font_GraphicAttribute, NumericShaper as java_awt_font_NumericShaper } from 'java.awt.font';
import { Font as java_awt_Font, Paint as java_awt_Paint } from 'java.awt';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { InputMethodHighlight as java_awt_im_InputMethodHighlight } from 'java.awt.im';
import { Annotation as java_text_Annotation } from 'java.text';

  export class AttributeValues extends java_lang_Object implements java_lang_Cloneable {
defined: number;
nondefault: number;
family: string;
weight: number;
width: number;
posture: number;
size: number;
tracking: number;
numericShaping: java_awt_font_NumericShaper;
transform: java_awt_geom_AffineTransform;
charReplacement: java_awt_font_GraphicAttribute;
foreground: java_awt_Paint;
background: java_awt_Paint;
justification: number;
imHighlight: java_lang_Object;
font: java_awt_Font;
imUnderline: number;
superscript: number;
underline: number;
runDirection: number;
bidiEmbedding: number;
kerning: number;
ligatures: number;
strikethrough: boolean;
swapColors: boolean;
baselineTransform: java_awt_geom_AffineTransform;
charTransform: java_awt_geom_AffineTransform;
static DEFAULT: sun_font_AttributeValues;
static MASK_ALL: number;
static DEFINED_KEY: string;
static mask: number;
static mask: number;
family: string;
size: number;
font: java_awt_Font;
transform: java_awt_geom_AffineTransform;
posture: number;
superscript: number;
static charTransform: java_awt_geom_AffineTransform;
charTransform: java_awt_geom_AffineTransform;
kerning: number;
ligatures: number;
baselineTransform: java_awt_geom_AffineTransform;
static baselineTransform: java_awt_geom_AffineTransform;
background: java_awt_Paint;
charReplacement: java_awt_font_GraphicAttribute;
foreground: java_awt_Paint;
underline: number;
strikethrough: boolean;
runDirection: number;
bidiEmbedding: number;
justification: number;
static justification: number;
inputMethodHighlight: java_lang_Object;
inputMethodUnderline: number;
swapColors: boolean;
static numericShaping: java_awt_font_NumericShaper;
numericShaping: java_awt_font_NumericShaper;
tracking: number;
width: number;
weight: number;
setSize(arg0: number): void;
setDefault(arg0: sun_font_EAttribute): void;
static getMask(arg0: sun_font_EAttribute): number;
static getMask(...arg0: sun_font_EAttribute[]): number;
getFamily(): string;
get(arg0: sun_font_EAttribute): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
equals(arg0: sun_font_AttributeValues): boolean;
toString(): string;
hashCode(): number;
clone(): sun_font_AttributeValues;
clone(): java_lang_Object;
merge(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>, arg1: number): sun_font_AttributeValues;
merge(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>): sun_font_AttributeValues;
merge(arg0: sun_font_AttributeValues): sun_font_AttributeValues;
merge(arg0: sun_font_AttributeValues, arg1: number): sun_font_AttributeValues;
toMap(arg0: java_util_Map<java_awt_font_TextAttribute, java_lang_Object>): java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
set(arg0: sun_font_EAttribute, arg1: java_lang_Object): void;
set(arg0: sun_font_EAttribute, arg1: sun_font_AttributeValues): void;
getSize(): number;
isDefined(arg0: sun_font_EAttribute): boolean;
getFont(): java_awt_Font;
setFont(arg0: java_awt_Font): void;
getTransform(): java_awt_geom_AffineTransform;
setFamily(arg0: string): void;
setWeight(arg0: number): void;
setPosture(arg0: number): void;
defineAll(arg0: number): void;
getPosture(): number;
anyNonDefault(arg0: number): boolean;
isNonDefault(arg0: sun_font_EAttribute): boolean;
anyDefined(arg0: number): boolean;
getSuperscript(): number;
toSerializableHashtable(): java_util_Hashtable<java_lang_Object, java_lang_Object>;
static fromSerializableHashtable(arg0: java_util_Hashtable<java_lang_Object, java_lang_Object>): sun_font_AttributeValues;
static is16Hashtable(arg0: java_util_Hashtable<java_lang_Object, java_lang_Object>): boolean;
unsetDefault(): void;
static getCharTransform(arg0: java_util_Map<java_lang_Object, java_lang_Object>): java_awt_geom_AffineTransform;
getCharTransform(): java_awt_geom_AffineTransform;
getKerning(): number;
getLigatures(): number;
getBaselineTransform(): java_awt_geom_AffineTransform;
static getBaselineTransform(arg0: java_util_Map<java_lang_Object, java_lang_Object>): java_awt_geom_AffineTransform;
setTransform(arg0: java_awt_font_TransformAttribute): void;
setTransform(arg0: java_awt_geom_AffineTransform): void;
setBackground(arg0: java_awt_Paint): void;
getBackground(): java_awt_Paint;
setSuperscript(arg0: number): void;
getCharReplacement(): java_awt_font_GraphicAttribute;
setCharReplacement(arg0: java_awt_font_GraphicAttribute): void;
getForeground(): java_awt_Paint;
setForeground(arg0: java_awt_Paint): void;
getUnderline(): number;
getStrikethrough(): boolean;
getRunDirection(): number;
setRunDirection(arg0: number): void;
getBidiEmbedding(): number;
setBidiEmbedding(arg0: number): void;
getJustification(): number;
static getJustification(arg0: java_util_Map<java_lang_Object, java_lang_Object>): number;
setJustification(arg0: number): void;
getInputMethodHighlight(): java_lang_Object;
setInputMethodHighlight(arg0: java_awt_im_InputMethodHighlight): void;
setInputMethodHighlight(arg0: java_text_Annotation): void;
getInputMethodUnderline(): number;
setInputMethodUnderline(arg0: number): void;
getSwapColors(): boolean;
setSwapColors(arg0: boolean): void;
static getNumericShaping(arg0: java_util_Map<java_lang_Object, java_lang_Object>): java_awt_font_NumericShaper;
getNumericShaping(): java_awt_font_NumericShaper;
setNumericShaping(arg0: java_awt_font_NumericShaper): void;
setKerning(arg0: number): void;
getTracking(): number;
setTracking(arg0: number): void;
setLigatures(arg0: number): void;
allDefined(arg0: number): boolean;
applyIMHighlight(): sun_font_AttributeValues;
updateDerivedTransforms(): void;
static extractXRotation(arg0: java_awt_geom_AffineTransform, arg1: boolean): java_awt_geom_AffineTransform;
static extractYRotation(arg0: java_awt_geom_AffineTransform, arg1: boolean): java_awt_geom_AffineTransform;
setWidth(arg0: number): void;
setStrikethrough(arg0: boolean): void;
setUnderline(arg0: number): void;
getWidth(): number;
static fromMap(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>, arg1: number): sun_font_AttributeValues;
static fromMap(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>): sun_font_AttributeValues;
getWeight(): number;
unset(arg0: sun_font_EAttribute): void;
constructor();
  }
}//@ts-nocheck

declare module 'sun.font' {
import { EAttribute as sun_font_EAttribute } from 'sun.font';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
import { TextAttribute as java_awt_font_TextAttribute } from 'java.awt.font';

  export class EAttribute extends java_lang_Enum<sun_font_EAttribute> {
static EFAMILY: sun_font_EAttribute;
static EWEIGHT: sun_font_EAttribute;
static EWIDTH: sun_font_EAttribute;
static EPOSTURE: sun_font_EAttribute;
static ESIZE: sun_font_EAttribute;
static ETRANSFORM: sun_font_EAttribute;
static ESUPERSCRIPT: sun_font_EAttribute;
static EFONT: sun_font_EAttribute;
static ECHAR_REPLACEMENT: sun_font_EAttribute;
static EFOREGROUND: sun_font_EAttribute;
static EBACKGROUND: sun_font_EAttribute;
static EUNDERLINE: sun_font_EAttribute;
static ESTRIKETHROUGH: sun_font_EAttribute;
static ERUN_DIRECTION: sun_font_EAttribute;
static EBIDI_EMBEDDING: sun_font_EAttribute;
static EJUSTIFICATION: sun_font_EAttribute;
static EINPUT_METHOD_HIGHLIGHT: sun_font_EAttribute;
static EINPUT_METHOD_UNDERLINE: sun_font_EAttribute;
static ESWAP_COLORS: sun_font_EAttribute;
static ENUMERIC_SHAPING: sun_font_EAttribute;
static EKERNING: sun_font_EAttribute;
static ELIGATURES: sun_font_EAttribute;
static ETRACKING: sun_font_EAttribute;
static EBASELINE_TRANSFORM: sun_font_EAttribute;
mask: number;
att: java_awt_font_TextAttribute;
static atts: sun_font_EAttribute[];
static $VALUES: sun_font_EAttribute[];
class: java_lang_Class<java_lang_Object>;
toString(): string;
static values(): sun_font_EAttribute[];
static valueOf(arg0: string): sun_font_EAttribute;
static forAttribute(arg0: java_textdCharacterIterator_Attribute_Attribute): sun_font_EAttribute;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.font' {
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { CoreMetrics as sun_font_CoreMetrics } from 'sun.font';
import { FontRenderContext as java_awt_font_FontRenderContext, LineMetrics as java_awt_font_LineMetrics } from 'java.awt.font';

  export class FontLineMetrics extends java_awt_font_LineMetrics implements java_lang_Cloneable {
numchars: number;
cm: sun_font_CoreMetrics;
frc: java_awt_font_FontRenderContext;
ascent: number;
descent: number;
leading: number;
numChars: number;
baselineIndex: number;
baselineOffsets: number[];
strikethroughOffset: number;
strikethroughThickness: number;
underlineOffset: number;
underlineThickness: number;
height: number;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clone(): java_lang_Object;
getAscent(): number;
getDescent(): number;
getLeading(): number;
getNumChars(): number;
getBaselineIndex(): number;
getBaselineOffsets(): number[];
getStrikethroughOffset(): number;
getStrikethroughThickness(): number;
getUnderlineOffset(): number;
getUnderlineThickness(): number;
getHeight(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
toString(): string;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_font_CoreMetrics, arg2: java_awt_font_FontRenderContext);
  }
}//@ts-nocheck

declare module 'sun.font' {
import { LineMetrics as java_awt_font_LineMetrics } from 'java.awt.font';
import { CoreMetrics as sun_font_CoreMetrics } from 'sun.font';
import { Object as java_lang_Object } from 'java.lang';

  export class CoreMetrics extends java_lang_Object {
ascent: number;
descent: number;
leading: number;
height: number;
baselineIndex: number;
baselineOffsets: number[];
strikethroughOffset: number;
strikethroughThickness: number;
underlineOffset: number;
underlineThickness: number;
ssOffset: number;
italicAngle: number;
static get(arg0: java_awt_font_LineMetrics): sun_font_CoreMetrics;
equals(arg0: java_lang_Object): boolean;
equals(arg0: sun_font_CoreMetrics): boolean;
hashCode(): number;
effectiveBaselineOffset(arg0: number[]): number;
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number);
  }
}//@ts-nocheck

declare module 'sun.font' {
import { GlyphList as sun_font_GlyphList } from 'sun.font';
import { FontInfo as sun_java2d_loops_FontInfo } from 'sun.java2d.loops';
import { GlyphVector as java_awt_font_GlyphVector } from 'java.awt.font';
import { Object as java_lang_Object } from 'java.lang';
import { AtomicBoolean as java_util_concurrent_atomic_AtomicBoolean } from 'java.util.concurrent.atomic';

  export class GlyphList extends java_lang_Object {
static MINGRAYLENGTH: number;
static MAXGRAYLENGTH: number;
static DEFAULT_LENGTH: number;
glyphindex: number;
metrics: number[];
graybits: number[];
strikelist: java_lang_Object;
len: number;
maxLen: number;
maxPosLen: number;
glyphData: number[];
chData: string[];
images: number[];
positions: number[];
x: number;
y: number;
gposx: number;
gposy: number;
usePositions: boolean;
lcdRGBOrder: boolean;
lcdSubPixPos: boolean;
static reusableGL: sun_font_GlyphList;
static inUse: java_util_concurrent_atomic_AtomicBoolean;
static instance: sun_font_GlyphList;
numGlyphs: number;
metrics: number[];
grayBits: number[];
strike: java_lang_Object;
images: number[];
positions: number[];
x: number;
y: number;
bounds: number[];
dispose(): void;
static getInstance(): sun_font_GlyphList;
getNumGlyphs(): number;
getMetrics(): number[];
setFromString(arg0: sun_java2d_loops_FontInfo, arg1: string, arg2: number, arg3: number): boolean;
setFromChars(arg0: sun_java2d_loops_FontInfo, arg1: string[], arg2: number, arg3: number, arg4: number, arg5: number): boolean;
setFromGlyphVector(arg0: sun_java2d_loops_FontInfo, arg1: java_awt_font_GlyphVector, arg2: number, arg3: number): void;
setGlyphIndex(arg0: number): void;
getGrayBits(): number[];
getStrike(): java_lang_Object;
usePositions(): boolean;
getImages(): number[];
getPositions(): number[];
isSubPixPos(): boolean;
isRGBOrder(): boolean;
getX(): number;
getY(): number;
getBounds(): number[];

  }
}