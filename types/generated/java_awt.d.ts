//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object } from 'java.lang';
import { Color as java_awt_Color, Rectangle as java_awt_Rectangle, RenderingHints as java_awt_RenderingHints, PaintContext as java_awt_PaintContext, Paint as java_awt_Paint } from 'java.awt';
import { ColorSpace as java_awt_color_ColorSpace } from 'java.awt.color';
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Color extends java_lang_Object implements java_awt_Paint, java_io_Serializable {
static white: java_awt_Color;
static WHITE: java_awt_Color;
static lightGray: java_awt_Color;
static LIGHT_GRAY: java_awt_Color;
static gray: java_awt_Color;
static GRAY: java_awt_Color;
static darkGray: java_awt_Color;
static DARK_GRAY: java_awt_Color;
static black: java_awt_Color;
static BLACK: java_awt_Color;
static red: java_awt_Color;
static RED: java_awt_Color;
static pink: java_awt_Color;
static PINK: java_awt_Color;
static orange: java_awt_Color;
static ORANGE: java_awt_Color;
static yellow: java_awt_Color;
static YELLOW: java_awt_Color;
static green: java_awt_Color;
static GREEN: java_awt_Color;
static magenta: java_awt_Color;
static MAGENTA: java_awt_Color;
static cyan: java_awt_Color;
static CYAN: java_awt_Color;
static blue: java_awt_Color;
static BLUE: java_awt_Color;
value: number;
frgbvalue: number[];
fvalue: number[];
falpha: number;
cs: java_awt_color_ColorSpace;
static serialVersionUID: number;
static FACTOR: number;
red: number;
green: number;
blue: number;
rGB: number;
transparency: number;
colorSpace: java_awt_color_ColorSpace;
alpha: number;
static hSBColor: java_awt_Color;
rGBComponents: number[];
rGBColorComponents: number[];
colorComponents: number[];
colorComponents: number[];
static color: java_awt_Color;
static color: java_awt_Color;
static color: java_awt_Color;
components: number[];
components: number[];
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static decode(arg0: string): java_awt_Color;
getRed(): number;
getGreen(): number;
getBlue(): number;
getRGB(): number;
getTransparency(): number;
getColorSpace(): java_awt_color_ColorSpace;
getAlpha(): number;
brighter(): java_awt_Color;
darker(): java_awt_Color;
static HSBtoRGB(arg0: number, arg1: number, arg2: number): number;
static RGBtoHSB(arg0: number, arg1: number, arg2: number, arg3: number[]): number[];
static getHSBColor(arg0: number, arg1: number, arg2: number): java_awt_Color;
getRGBComponents(arg0: number[]): number[];
getRGBColorComponents(arg0: number[]): number[];
getColorComponents(arg0: java_awt_color_ColorSpace, arg1: number[]): number[];
getColorComponents(arg0: number[]): number[];
createContext(arg0: java_awt_image_ColorModel, arg1: java_awt_Rectangle, arg2: java_awt_geom_Rectangle2D, arg3: java_awt_geom_AffineTransform, arg4: java_awt_RenderingHints): java_awt_PaintContext;
static getColor(arg0: string, arg1: number): java_awt_Color;
static getColor(arg0: string): java_awt_Color;
static getColor(arg0: string, arg1: java_awt_Color): java_awt_Color;
getComponents(arg0: java_awt_color_ColorSpace, arg1: number[]): number[];
getComponents(arg0: number[]): number[];
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: java_awt_color_ColorSpace, arg1: number[], arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.awt.color' {
import { ColorSpace as java_awt_color_ColorSpace } from 'java.awt.color';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ColorSpace extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
type: number;
numComponents: number;
compName: string[];
static sRGBspace: java_awt_color_ColorSpace;
static XYZspace: java_awt_color_ColorSpace;
static PYCCspace: java_awt_color_ColorSpace;
static GRAYspace: java_awt_color_ColorSpace;
static LINEAR_RGBspace: java_awt_color_ColorSpace;
static TYPE_XYZ: number;
static TYPE_Lab: number;
static TYPE_Luv: number;
static TYPE_YCbCr: number;
static TYPE_Yxy: number;
static TYPE_RGB: number;
static TYPE_GRAY: number;
static TYPE_HSV: number;
static TYPE_HLS: number;
static TYPE_CMYK: number;
static TYPE_CMY: number;
static TYPE_2CLR: number;
static TYPE_3CLR: number;
static TYPE_4CLR: number;
static TYPE_5CLR: number;
static TYPE_6CLR: number;
static TYPE_7CLR: number;
static TYPE_8CLR: number;
static TYPE_9CLR: number;
static TYPE_ACLR: number;
static TYPE_BCLR: number;
static TYPE_CCLR: number;
static TYPE_DCLR: number;
static TYPE_ECLR: number;
static TYPE_FCLR: number;
static CS_sRGB: number;
static CS_LINEAR_RGB: number;
static CS_CIEXYZ: number;
static CS_PYCC: number;
static CS_GRAY: number;
name: string;
static instance: java_awt_color_ColorSpace;
type: number;
numComponents: number;
minValue: number;
maxValue: number;
getName(arg0: number): string;
static getInstance(arg0: number): java_awt_color_ColorSpace;
getType(): number;
getNumComponents(): number;
toRGB(arg0: number[]): number[];
toCIEXYZ(arg0: number[]): number[];
fromCIEXYZ(arg0: number[]): number[];
isCS_sRGB(): boolean;
fromRGB(arg0: number[]): number[];
getMinValue(arg0: number): number;
getMaxValue(arg0: number): number;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object } from 'java.lang';
import { WritableRaster as java_awt_image_WritableRaster, ColorModel as java_awt_image_ColorModel, Raster as java_awt_image_Raster, SampleModel as java_awt_image_SampleModel } from 'java.awt.image';
import { ColorSpace as java_awt_color_ColorSpace, ICC_ColorSpace as java_awt_color_ICC_ColorSpace } from 'java.awt.color';
import { Map as java_util_Map } from 'java.util';
import { Transparency as java_awt_Transparency } from 'java.awt';

  export class ColorModel extends java_lang_Object implements java_awt_Transparency {
pData: number;
pixel_bits: number;
nBits: number[];
transparency: number;
supportsAlpha: boolean;
isAlphaPremultiplied: boolean;
numComponents: number;
numColorComponents: number;
colorSpace: java_awt_color_ColorSpace;
colorSpaceType: number;
maxBits: number;
is_sRGB: boolean;
transferType: number;
static loaded: boolean;
static RGBdefault: java_awt_image_ColorModel;
static l8Tos8: number[];
static s8Tol8: number[];
static l16Tos8: number[];
static s8Tol16: number[];
static g8Tos8Map: java_util_Map<java_awt_color_ICC_ColorSpace, number[]>;
static lg16Toog8Map: java_util_Map<java_awt_color_ICC_ColorSpace, number[]>;
static g16Tos8Map: java_util_Map<java_awt_color_ICC_ColorSpace, number[]>;
static lg16Toog16Map: java_util_Map<java_awt_color_ICC_ColorSpace, number[]>;
red: number;
red: number;
green: number;
green: number;
blue: number;
blue: number;
alphaRaster: java_awt_image_WritableRaster;
rGB: number;
rGB: number;
transparency: number;
static rGBdefault: java_awt_image_ColorModel;
colorSpace: java_awt_color_ColorSpace;
componentSize: number[];
componentSize: number;
pixelSize: number;
numComponents: number;
dataElements: java_lang_Object;
dataElements: java_lang_Object;
dataElements: java_lang_Object;
alpha: number;
alpha: number;
transferType: number;
numColorComponents: number;
unnormalizedComponents: number[];
normalizedComponents: number[];
normalizedComponents: number[];
dataElement: number;
dataElement: number;
components: number[];
components: number[];
finalize(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getRed(arg0: java_lang_Object): number;
getRed(arg0: number): number;
getGreen(arg0: number): number;
getGreen(arg0: java_lang_Object): number;
getBlue(arg0: number): number;
getBlue(arg0: java_lang_Object): number;
getAlphaRaster(arg0: java_awt_image_WritableRaster): java_awt_image_WritableRaster;
getRGB(arg0: java_lang_Object): number;
getRGB(arg0: number): number;
isAlphaPremultiplied(): boolean;
coerceData(arg0: java_awt_image_WritableRaster, arg1: boolean): java_awt_image_ColorModel;
getTransparency(): number;
createCompatibleWritableRaster(arg0: number, arg1: number): java_awt_image_WritableRaster;
static getRGBdefault(): java_awt_image_ColorModel;
hasAlpha(): boolean;
isCompatibleRaster(arg0: java_awt_image_Raster): boolean;
getColorSpace(): java_awt_color_ColorSpace;
getComponentSize(): number[];
getComponentSize(arg0: number): number;
getPixelSize(): number;
getNumComponents(): number;
getDataElements(arg0: number[], arg1: number, arg2: java_lang_Object): java_lang_Object;
getDataElements(arg0: number[], arg1: number, arg2: java_lang_Object): java_lang_Object;
getDataElements(arg0: number, arg1: java_lang_Object): java_lang_Object;
createCompatibleSampleModel(arg0: number, arg1: number): java_awt_image_SampleModel;
getAlpha(arg0: number): number;
getAlpha(arg0: java_lang_Object): number;
getTransferType(): number;
getNumColorComponents(): number;
getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
getNormalizedComponents(arg0: java_lang_Object, arg1: number[], arg2: number): number[];
getDataElement(arg0: number[], arg1: number): number;
getDataElement(arg0: number[], arg1: number): number;
isCompatibleSampleModel(arg0: java_awt_image_SampleModel): boolean;
getComponents(arg0: number, arg1: number[], arg2: number): number[];
getComponents(arg0: java_lang_Object, arg1: number[], arg2: number): number[];
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Raster as java_awt_image_Raster, WritableRaster as java_awt_image_WritableRaster } from 'java.awt.image';

  export class WritableRaster extends java_awt_image_Raster {
writableParent: java_awt_image_WritableRaster;
class: java_lang_Class<java_lang_Object>;
setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_lang_Object): void;
setDataElements(arg0: number, arg1: number, arg2: java_awt_image_Raster): void;
setDataElements(arg0: number, arg1: number, arg2: java_lang_Object): void;
createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): java_awt_image_WritableRaster;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
setRect(arg0: java_awt_image_Raster): void;
setRect(arg0: number, arg1: number, arg2: java_awt_image_Raster): void;
getWritableParent(): java_awt_image_WritableRaster;
createWritableTranslatedChild(arg0: number, arg1: number): java_awt_image_WritableRaster;
setPixel(arg0: number, arg1: number, arg2: number[]): void;
setPixel(arg0: number, arg1: number, arg2: number[]): void;
setPixel(arg0: number, arg1: number, arg2: number[]): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
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

declare module 'java.awt.image' {
import { Raster as java_awt_image_Raster, SampleModel as java_awt_image_SampleModel, WritableRaster as java_awt_image_WritableRaster, DataBuffer as java_awt_image_DataBuffer } from 'java.awt.image';
import { Rectangle as java_awt_Rectangle, Point as java_awt_Point } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class Raster extends java_lang_Object {
sampleModel: java_awt_image_SampleModel;
dataBuffer: java_awt_image_DataBuffer;
minX: number;
minY: number;
width: number;
height: number;
sampleModelTranslateX: number;
sampleModelTranslateY: number;
numBands: number;
numDataElements: number;
parent: java_awt_image_Raster;
parent: java_awt_image_Raster;
sample: number;
sampleModel: java_awt_image_SampleModel;
minY: number;
numBands: number;
dataElements: java_lang_Object;
dataElements: java_lang_Object;
dataBuffer: java_awt_image_DataBuffer;
sampleModelTranslateX: number;
sampleModelTranslateY: number;
pixels: number[];
pixels: number[];
pixels: number[];
transferType: number;
numDataElements: number;
pixel: number[];
pixel: number[];
pixel: number[];
sampleFloat: number;
sampleDouble: number;
samples: number[];
samples: number[];
samples: number[];
width: number;
height: number;
minX: number;
bounds: java_awt_Rectangle;
getParent(): java_awt_image_Raster;
getSample(arg0: number, arg1: number, arg2: number): number;
getSampleModel(): java_awt_image_SampleModel;
getMinY(): number;
createCompatibleWritableRaster(arg0: java_awt_Rectangle): java_awt_image_WritableRaster;
createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_image_WritableRaster;
createCompatibleWritableRaster(arg0: number, arg1: number): java_awt_image_WritableRaster;
createCompatibleWritableRaster(): java_awt_image_WritableRaster;
static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_Point): java_awt_image_WritableRaster;
static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_Point): java_awt_image_WritableRaster;
static createInterleavedRaster(arg0: java_awt_image_DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_Point): java_awt_image_WritableRaster;
static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java_awt_Point): java_awt_image_WritableRaster;
static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: java_awt_Point): java_awt_image_WritableRaster;
static createPackedRaster(arg0: java_awt_image_DataBuffer, arg1: number, arg2: number, arg3: number, arg4: java_awt_Point): java_awt_image_WritableRaster;
static createPackedRaster(arg0: java_awt_image_DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_Point): java_awt_image_WritableRaster;
getNumBands(): number;
getDataElements(arg0: number, arg1: number, arg2: java_lang_Object): java_lang_Object;
getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_lang_Object): java_lang_Object;
getDataBuffer(): java_awt_image_DataBuffer;
getSampleModelTranslateX(): number;
getSampleModelTranslateY(): number;
static createWritableRaster(arg0: java_awt_image_SampleModel, arg1: java_awt_image_DataBuffer, arg2: java_awt_Point): java_awt_image_WritableRaster;
static createWritableRaster(arg0: java_awt_image_SampleModel, arg1: java_awt_Point): java_awt_image_WritableRaster;
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
getTransferType(): number;
static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_Point): java_awt_image_WritableRaster;
static createBandedRaster(arg0: java_awt_image_DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: java_awt_Point): java_awt_image_WritableRaster;
static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: java_awt_Point): java_awt_image_WritableRaster;
static createRaster(arg0: java_awt_image_SampleModel, arg1: java_awt_image_DataBuffer, arg2: java_awt_Point): java_awt_image_Raster;
createTranslatedChild(arg0: number, arg1: number): java_awt_image_Raster;
getNumDataElements(): number;
getPixel(arg0: number, arg1: number, arg2: number[]): number[];
getPixel(arg0: number, arg1: number, arg2: number[]): number[];
getPixel(arg0: number, arg1: number, arg2: number[]): number[];
getSampleFloat(arg0: number, arg1: number, arg2: number): number;
getSampleDouble(arg0: number, arg1: number, arg2: number): number;
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
getWidth(): number;
getHeight(): number;
createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): java_awt_image_Raster;
getMinX(): number;
getBounds(): java_awt_Rectangle;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { DataBuffer as java_awt_image_DataBuffer, SampleModel as java_awt_image_SampleModel } from 'java.awt.image';
import { Object as java_lang_Object } from 'java.lang';

  export class SampleModel extends java_lang_Object {
width: number;
height: number;
numBands: number;
dataType: number;
dataType: number;
sample: number;
numBands: number;
dataElements: java_lang_Object;
dataElements: java_lang_Object;
pixels: number[];
pixels: number[];
pixels: number[];
transferType: number;
numDataElements: number;
pixel: number[];
pixel: number[];
pixel: number[];
sampleFloat: number;
sampleDouble: number;
samples: number[];
samples: number[];
samples: number[];
sampleSize: number[];
sampleSize: number;
width: number;
height: number;
getDataType(): number;
getSample(arg0: number, arg1: number, arg2: number, arg3: java_awt_image_DataBuffer): number;
setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_DataBuffer): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_DataBuffer): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_DataBuffer): void;
getNumBands(): number;
getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_lang_Object, arg5: java_awt_image_DataBuffer): java_lang_Object;
getDataElements(arg0: number, arg1: number, arg2: java_lang_Object, arg3: java_awt_image_DataBuffer): java_lang_Object;
setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_lang_Object, arg5: java_awt_image_DataBuffer): void;
setDataElements(arg0: number, arg1: number, arg2: java_lang_Object, arg3: java_awt_image_DataBuffer): void;
createCompatibleSampleModel(arg0: number, arg1: number): java_awt_image_SampleModel;
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): number[];
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): void;
getTransferType(): number;
setPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): void;
setPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): void;
setPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): void;
createDataBuffer(): java_awt_image_DataBuffer;
createSubsetSampleModel(arg0: number[]): java_awt_image_SampleModel;
getNumDataElements(): number;
getPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): number[];
getPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): number[];
getPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): number[];
getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: java_awt_image_DataBuffer): number;
getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: java_awt_image_DataBuffer): number;
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): number[];
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): number[];
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): number[];
getSampleSize(): number[];
getSampleSize(arg0: number): number;
getWidth(): number;
getHeight(): number;
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { StateTrackableDelegate as sun_java2d_StateTrackableDelegate } from 'sun.java2d';
import { Object as java_lang_Object } from 'java.lang';

  export class DataBuffer extends java_lang_Object {
static TYPE_BYTE: number;
static TYPE_USHORT: number;
static TYPE_SHORT: number;
static TYPE_INT: number;
static TYPE_FLOAT: number;
static TYPE_DOUBLE: number;
static TYPE_UNDEFINED: number;
dataType: number;
banks: number;
offset: number;
size: number;
offsets: number[];
theTrackable: sun_java2d_StateTrackableDelegate;
static dataTypeSize: number[];
size: number;
offset: number;
offsets: number[];
dataType: number;
static dataTypeSize: number;
numBanks: number;
elem: number;
elem: number;
elemFloat: number;
elemFloat: number;
elemDouble: number;
elemDouble: number;
getSize(): number;
getOffset(): number;
getOffsets(): number[];
getDataType(): number;
static getDataTypeSize(arg0: number): number;
getNumBanks(): number;
getElem(arg0: number): number;
getElem(arg0: number, arg1: number): number;
setElem(arg0: number, arg1: number): void;
setElem(arg0: number, arg1: number, arg2: number): void;
getElemFloat(arg0: number, arg1: number): number;
getElemFloat(arg0: number): number;
setElemFloat(arg0: number, arg1: number, arg2: number): void;
setElemFloat(arg0: number, arg1: number): void;
getElemDouble(arg0: number): number;
getElemDouble(arg0: number, arg1: number): number;
setElemDouble(arg0: number, arg1: number): void;
setElemDouble(arg0: number, arg1: number, arg2: number): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Rectangle as java_awt_Rectangle, Point as java_awt_Point, Dimension as java_awt_Dimension, Shape as java_awt_Shape } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D, Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Rectangle extends java_awt_geom_Rectangle2D implements java_awt_Shape, java_io_Serializable {
x: number;
y: number;
width: number;
height: number;
static serialVersionUID: number;
location: java_awt_Point;
size: java_awt_Dimension;
y: number;
x: number;
bounds2D: java_awt_geom_Rectangle2D;
width: number;
height: number;
bounds: java_awt_Rectangle;
maxY: number;
centerY: number;
minY: number;
frame: java_awt_geom_Rectangle2D;
centerX: number;
minX: number;
maxX: number;
class: java_lang_Class<java_lang_Object>;
add(arg0: java_awt_Rectangle): void;
add(arg0: java_awt_Point): void;
add(arg0: number, arg1: number): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
isEmpty(): boolean;
contains(arg0: java_awt_Point): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: java_awt_Rectangle): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getLocation(): java_awt_Point;
getSize(): java_awt_Dimension;
resize(arg0: number, arg1: number): void;
grow(arg0: number, arg1: number): void;
setSize(arg0: java_awt_Dimension): void;
setSize(arg0: number, arg1: number): void;
move(arg0: number, arg1: number): void;
union(arg0: java_awt_Rectangle): java_awt_Rectangle;
reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
createIntersection(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
getY(): number;
getX(): number;
intersects(arg0: java_awt_Rectangle): boolean;
getBounds2D(): java_awt_geom_Rectangle2D;
setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
setBounds(arg0: java_awt_Rectangle): void;
setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
inside(arg0: number, arg1: number): boolean;
outcode(arg0: number, arg1: number): number;
setLocation(arg0: number, arg1: number): void;
setLocation(arg0: java_awt_Point): void;
createUnion(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
getWidth(): number;
getHeight(): number;
intersection(arg0: java_awt_Rectangle): java_awt_Rectangle;
translate(arg0: number, arg1: number): void;
getBounds(): java_awt_Rectangle;
clone(): java_lang_Object;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
getMaxY(): number;
getCenterY(): number;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
getMinY(): number;
setFrame(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Dimension2D): void;
setFrame(arg0: java_awt_geom_Rectangle2D): void;
setFrameFromDiagonal(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFrameFromCenter(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
getFrame(): java_awt_geom_Rectangle2D;
getCenterX(): number;
getMinX(): number;
getMaxX(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number);
constructor(arg0: java_awt_Dimension);
constructor(arg0: java_awt_Point);
constructor(arg0: java_awt_Rectangle);
constructor();
constructor(arg0: java_awt_Point, arg1: java_awt_Dimension);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Point as java_awt_Point } from 'java.awt';
import { Point2D as java_awt_geom_Point2D } from 'java.awt.geom';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Point extends java_awt_geom_Point2D implements java_io_Serializable {
x: number;
y: number;
static serialVersionUID: number;
location: java_awt_Point;
y: number;
x: number;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
getLocation(): java_awt_Point;
move(arg0: number, arg1: number): void;
getY(): number;
getX(): number;
setLocation(arg0: java_awt_Point): void;
setLocation(arg0: number, arg1: number): void;
setLocation(arg0: number, arg1: number): void;
translate(arg0: number, arg1: number): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: number);
constructor(arg0: java_awt_Point);
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Point2D as java_awt_geom_Point2D } from 'java.awt.geom';

  export class Point2D extends java_lang_Object implements java_lang_Cloneable {
y: number;
x: number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
clone(): java_lang_Object;
distance(arg0: number, arg1: number): number;
static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
distance(arg0: java_awt_geom_Point2D): number;
distanceSq(arg0: number, arg1: number): number;
distanceSq(arg0: java_awt_geom_Point2D): number;
static distanceSq(arg0: number, arg1: number, arg2: number, arg3: number): number;
getY(): number;
getX(): number;
setLocation(arg0: java_awt_geom_Point2D): void;
setLocation(arg0: number, arg1: number): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Dimension as java_awt_Dimension } from 'java.awt';
import { Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Dimension extends java_awt_geom_Dimension2D implements java_io_Serializable {
width: number;
height: number;
static serialVersionUID: number;
size: java_awt_Dimension;
width: number;
height: number;
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getSize(): java_awt_Dimension;
setSize(arg0: java_awt_Dimension): void;
setSize(arg0: number, arg1: number): void;
setSize(arg0: number, arg1: number): void;
getWidth(): number;
getHeight(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Dimension);
constructor();
constructor(arg0: number, arg1: number);
  }
}//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';

  export class Dimension2D extends java_lang_Object implements java_lang_Cloneable {
width: number;
height: number;
clone(): java_lang_Object;
setSize(arg0: number, arg1: number): void;
setSize(arg0: java_awt_geom_Dimension2D): void;
getWidth(): number;
getHeight(): number;

  }
}//@ts-nocheck

declare module 'java.awt.geom' {
import { Point2D as java_awt_geom_Point2D, Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator, Line2D as java_awt_geom_Line2D, RectangularShape as java_awt_geom_RectangularShape } from 'java.awt.geom';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class Rectangle2D extends java_awt_geom_RectangularShape {
static OUT_LEFT: number;
static OUT_TOP: number;
static OUT_RIGHT: number;
static OUT_BOTTOM: number;
bounds2D: java_awt_geom_Rectangle2D;
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
class: java_lang_Class<java_lang_Object>;
add(arg0: number, arg1: number): void;
add(arg0: java_awt_geom_Point2D): void;
add(arg0: java_awt_geom_Rectangle2D): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
static union(arg0: java_awt_geom_Rectangle2D, arg1: java_awt_geom_Rectangle2D, arg2: java_awt_geom_Rectangle2D): void;
static intersect(arg0: java_awt_geom_Rectangle2D, arg1: java_awt_geom_Rectangle2D, arg2: java_awt_geom_Rectangle2D): void;
createIntersection(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getBounds2D(): java_awt_geom_Rectangle2D;
setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
setRect(arg0: java_awt_geom_Rectangle2D): void;
outcode(arg0: number, arg1: number): number;
outcode(arg0: java_awt_geom_Point2D): number;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
intersectsLine(arg0: java_awt_geom_Line2D): boolean;
setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
createUnion(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
toString(): string;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Point2D as java_awt_geom_Point2D, AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Shape as java_awt_Shape } from 'java.awt';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AffineTransform extends java_lang_Object implements java_lang_Cloneable, java_io_Serializable {
static TYPE_UNKNOWN: number;
static TYPE_IDENTITY: number;
static TYPE_TRANSLATION: number;
static TYPE_UNIFORM_SCALE: number;
static TYPE_GENERAL_SCALE: number;
static TYPE_MASK_SCALE: number;
static TYPE_FLIP: number;
static TYPE_QUADRANT_ROTATION: number;
static TYPE_GENERAL_ROTATION: number;
static TYPE_MASK_ROTATION: number;
static TYPE_GENERAL_TRANSFORM: number;
static APPLY_IDENTITY: number;
static APPLY_TRANSLATE: number;
static APPLY_SCALE: number;
static APPLY_SHEAR: number;
static HI_SHIFT: number;
static HI_IDENTITY: number;
static HI_TRANSLATE: number;
static HI_SCALE: number;
static HI_SHEAR: number;
m00: number;
m10: number;
m01: number;
m11: number;
m02: number;
m12: number;
state: number;
type: number;
static rot90conversion: number[];
static serialVersionUID: number;
type: number;
matrix: void;
static translateInstance: java_awt_geom_AffineTransform;
static rotateInstance: java_awt_geom_AffineTransform;
static rotateInstance: java_awt_geom_AffineTransform;
static rotateInstance: java_awt_geom_AffineTransform;
static rotateInstance: java_awt_geom_AffineTransform;
static quadrantRotateInstance: java_awt_geom_AffineTransform;
static quadrantRotateInstance: java_awt_geom_AffineTransform;
static scaleInstance: java_awt_geom_AffineTransform;
static shearInstance: java_awt_geom_AffineTransform;
determinant: number;
scaleX: number;
scaleY: number;
shearX: number;
shearY: number;
translateX: number;
translateY: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
getType(): number;
isIdentity(): boolean;
scale(arg0: number, arg1: number): void;
rotate(arg0: number): void;
rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
rotate(arg0: number, arg1: number): void;
rotate(arg0: number, arg1: number, arg2: number): void;
transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
transform(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): java_awt_geom_Point2D;
transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
transform(arg0: java_awt_geom_Point2D[], arg1: number, arg2: java_awt_geom_Point2D[], arg3: number, arg4: number): void;
getMatrix(arg0: number[]): void;
createInverse(): java_awt_geom_AffineTransform;
concatenate(arg0: java_awt_geom_AffineTransform): void;
static getTranslateInstance(arg0: number, arg1: number): java_awt_geom_AffineTransform;
static getRotateInstance(arg0: number): java_awt_geom_AffineTransform;
static getRotateInstance(arg0: number, arg1: number, arg2: number): java_awt_geom_AffineTransform;
static getRotateInstance(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_geom_AffineTransform;
static getRotateInstance(arg0: number, arg1: number): java_awt_geom_AffineTransform;
static getQuadrantRotateInstance(arg0: number): java_awt_geom_AffineTransform;
static getQuadrantRotateInstance(arg0: number, arg1: number, arg2: number): java_awt_geom_AffineTransform;
static getScaleInstance(arg0: number, arg1: number): java_awt_geom_AffineTransform;
static getShearInstance(arg0: number, arg1: number): java_awt_geom_AffineTransform;
getDeterminant(): number;
getScaleX(): number;
getScaleY(): number;
getShearX(): number;
getShearY(): number;
getTranslateX(): number;
getTranslateY(): number;
quadrantRotate(arg0: number, arg1: number, arg2: number): void;
quadrantRotate(arg0: number): void;
setToIdentity(): void;
setToTranslation(arg0: number, arg1: number): void;
setToRotation(arg0: number, arg1: number): void;
setToRotation(arg0: number, arg1: number, arg2: number, arg3: number): void;
setToRotation(arg0: number, arg1: number, arg2: number): void;
setToRotation(arg0: number): void;
setToQuadrantRotation(arg0: number): void;
setToQuadrantRotation(arg0: number, arg1: number, arg2: number): void;
setToScale(arg0: number, arg1: number): void;
setToShear(arg0: number, arg1: number): void;
setTransform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
setTransform(arg0: java_awt_geom_AffineTransform): void;
preConcatenate(arg0: java_awt_geom_AffineTransform): void;
inverseTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
inverseTransform(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): java_awt_geom_Point2D;
deltaTransform(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): java_awt_geom_Point2D;
deltaTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
createTransformedShape(arg0: java_awt_Shape): java_awt_Shape;
shear(arg0: number, arg1: number): void;
invert(): void;
translate(arg0: number, arg1: number): void;
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: number[]);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: number[]);
constructor();
constructor(arg0: java_awt_geom_AffineTransform);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Point2D as java_awt_geom_Point2D, Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle } from 'java.awt';

  export class Shape {
bounds2D: java_awt_geom_Rectangle2D;
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
bounds: java_awt_Rectangle;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getBounds2D(): java_awt_geom_Rectangle2D;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
getBounds(): java_awt_Rectangle;

  }
}//@ts-nocheck

declare module 'java.awt.geom' {


  export class PathIterator {
static WIND_EVEN_ODD: number;
static WIND_NON_ZERO: number;
static SEG_MOVETO: number;
static SEG_LINETO: number;
static SEG_QUADTO: number;
static SEG_CUBICTO: number;
static SEG_CLOSE: number;
windingRule: number;
next(): void;
isDone(): boolean;
getWindingRule(): number;
currentSegment(arg0: number[]): number;
currentSegment(arg0: number[]): number;

  }
}//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator, Line2D as java_awt_geom_Line2D } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle, Shape as java_awt_Shape } from 'java.awt';

  export class Line2D extends java_lang_Object implements java_awt_Shape, java_lang_Cloneable {
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
x1: number;
y1: number;
x2: number;
y2: number;
p1: java_awt_geom_Point2D;
p2: java_awt_geom_Point2D;
bounds: java_awt_Rectangle;
bounds2D: java_awt_geom_Rectangle2D;
clone(): java_lang_Object;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: java_awt_geom_Point2D): boolean;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
intersectsLine(arg0: java_awt_geom_Line2D): boolean;
getX1(): number;
getY1(): number;
getX2(): number;
getY2(): number;
getP1(): java_awt_geom_Point2D;
getP2(): java_awt_geom_Point2D;
setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
setLine(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setLine(arg0: java_awt_geom_Line2D): void;
relativeCCW(arg0: number, arg1: number): number;
static relativeCCW(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
relativeCCW(arg0: java_awt_geom_Point2D): number;
static linesIntersect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): boolean;
ptSegDistSq(arg0: java_awt_geom_Point2D): number;
ptSegDistSq(arg0: number, arg1: number): number;
static ptSegDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
static ptSegDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
ptSegDist(arg0: number, arg1: number): number;
ptSegDist(arg0: java_awt_geom_Point2D): number;
ptLineDistSq(arg0: java_awt_geom_Point2D): number;
ptLineDistSq(arg0: number, arg1: number): number;
static ptLineDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
ptLineDist(arg0: number, arg1: number): number;
static ptLineDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
ptLineDist(arg0: java_awt_geom_Point2D): number;
getBounds(): java_awt_Rectangle;
getBounds2D(): java_awt_geom_Rectangle2D;

  }
}//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Point2D as java_awt_geom_Point2D, Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator, Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle, Shape as java_awt_Shape } from 'java.awt';

  export class RectangularShape extends java_lang_Object implements java_awt_Shape, java_lang_Cloneable {
maxY: number;
centerY: number;
y: number;
x: number;
minY: number;
pathIterator: java_awt_geom_PathIterator;
frame: java_awt_geom_Rectangle2D;
width: number;
height: number;
centerX: number;
minX: number;
maxX: number;
bounds: java_awt_Rectangle;
bounds2D: java_awt_geom_Rectangle2D;
pathIterator: java_awt_geom_PathIterator;
clone(): java_lang_Object;
isEmpty(): boolean;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
getMaxY(): number;
getCenterY(): number;
getY(): number;
getX(): number;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
getMinY(): number;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
setFrame(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Dimension2D): void;
setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFrame(arg0: java_awt_geom_Rectangle2D): void;
setFrameFromDiagonal(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFrameFromCenter(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
getFrame(): java_awt_geom_Rectangle2D;
getWidth(): number;
getHeight(): number;
getCenterX(): number;
getMinX(): number;
getMaxX(): number;
getBounds(): java_awt_Rectangle;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
contains(arg0: number, arg1: number): boolean;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getBounds2D(): java_awt_geom_Rectangle2D;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;

  }
}//@ts-nocheck

declare module 'java.awt.color' {
import { ICC_Profile as java_awt_color_ICC_Profile, ColorSpace as java_awt_color_ColorSpace } from 'java.awt.color';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ColorTransform as sun_java2d_cmm_ColorTransform } from 'sun.java2d.cmm';

  export class ICC_ColorSpace extends java_awt_color_ColorSpace {
static serialVersionUID: number;
thisProfile: java_awt_color_ICC_Profile;
minVal: number[];
maxVal: number[];
diffMinMax: number[];
invDiffMinMax: number[];
needScaleInit: boolean;
this2srgb: sun_java2d_cmm_ColorTransform;
srgb2this: sun_java2d_cmm_ColorTransform;
this2xyz: sun_java2d_cmm_ColorTransform;
xyz2this: sun_java2d_cmm_ColorTransform;
profile: java_awt_color_ICC_Profile;
minValue: number;
maxValue: number;
class: java_lang_Class<java_lang_Object>;
toRGB(arg0: number[]): number[];
toCIEXYZ(arg0: number[]): number[];
fromCIEXYZ(arg0: number[]): number[];
getProfile(): java_awt_color_ICC_Profile;
fromRGB(arg0: number[]): number[];
getMinValue(arg0: number): number;
getMaxValue(arg0: number): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_color_ICC_Profile);
  }
}//@ts-nocheck

declare module 'java.awt.color' {
import { InputStream as java_io_InputStream, OutputStream as java_io_OutputStream, Serializable as java_io_Serializable } from 'java.io';
import { ICC_Profile as java_awt_color_ICC_Profile } from 'java.awt.color';
import { Profile as sun_java2d_cmm_Profile, ProfileDeferralInfo as sun_java2d_cmm_ProfileDeferralInfo, ProfileActivator as sun_java2d_cmm_ProfileActivator } from 'sun.java2d.cmm';
import { Object as java_lang_Object } from 'java.lang';

  export class ICC_Profile extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
cmmProfile: sun_java2d_cmm_Profile;
deferralInfo: sun_java2d_cmm_ProfileDeferralInfo;
profileActivator: sun_java2d_cmm_ProfileActivator;
static sRGBprofile: java_awt_color_ICC_Profile;
static XYZprofile: java_awt_color_ICC_Profile;
static PYCCprofile: java_awt_color_ICC_Profile;
static GRAYprofile: java_awt_color_ICC_Profile;
static LINEAR_RGBprofile: java_awt_color_ICC_Profile;
static CLASS_INPUT: number;
static CLASS_DISPLAY: number;
static CLASS_OUTPUT: number;
static CLASS_DEVICELINK: number;
static CLASS_COLORSPACECONVERSION: number;
static CLASS_ABSTRACT: number;
static CLASS_NAMEDCOLOR: number;
static icSigXYZData: number;
static icSigLabData: number;
static icSigLuvData: number;
static icSigYCbCrData: number;
static icSigYxyData: number;
static icSigRgbData: number;
static icSigGrayData: number;
static icSigHsvData: number;
static icSigHlsData: number;
static icSigCmykData: number;
static icSigCmyData: number;
static icSigSpace2CLR: number;
static icSigSpace3CLR: number;
static icSigSpace4CLR: number;
static icSigSpace5CLR: number;
static icSigSpace6CLR: number;
static icSigSpace7CLR: number;
static icSigSpace8CLR: number;
static icSigSpace9CLR: number;
static icSigSpaceACLR: number;
static icSigSpaceBCLR: number;
static icSigSpaceCCLR: number;
static icSigSpaceDCLR: number;
static icSigSpaceECLR: number;
static icSigSpaceFCLR: number;
static icSigInputClass: number;
static icSigDisplayClass: number;
static icSigOutputClass: number;
static icSigLinkClass: number;
static icSigAbstractClass: number;
static icSigColorSpaceClass: number;
static icSigNamedColorClass: number;
static icPerceptual: number;
static icRelativeColorimetric: number;
static icMediaRelativeColorimetric: number;
static icSaturation: number;
static icAbsoluteColorimetric: number;
static icICCAbsoluteColorimetric: number;
static icSigHead: number;
static icSigAToB0Tag: number;
static icSigAToB1Tag: number;
static icSigAToB2Tag: number;
static icSigBlueColorantTag: number;
static icSigBlueMatrixColumnTag: number;
static icSigBlueTRCTag: number;
static icSigBToA0Tag: number;
static icSigBToA1Tag: number;
static icSigBToA2Tag: number;
static icSigCalibrationDateTimeTag: number;
static icSigCharTargetTag: number;
static icSigCopyrightTag: number;
static icSigCrdInfoTag: number;
static icSigDeviceMfgDescTag: number;
static icSigDeviceModelDescTag: number;
static icSigDeviceSettingsTag: number;
static icSigGamutTag: number;
static icSigGrayTRCTag: number;
static icSigGreenColorantTag: number;
static icSigGreenMatrixColumnTag: number;
static icSigGreenTRCTag: number;
static icSigLuminanceTag: number;
static icSigMeasurementTag: number;
static icSigMediaBlackPointTag: number;
static icSigMediaWhitePointTag: number;
static icSigNamedColor2Tag: number;
static icSigOutputResponseTag: number;
static icSigPreview0Tag: number;
static icSigPreview1Tag: number;
static icSigPreview2Tag: number;
static icSigProfileDescriptionTag: number;
static icSigProfileSequenceDescTag: number;
static icSigPs2CRD0Tag: number;
static icSigPs2CRD1Tag: number;
static icSigPs2CRD2Tag: number;
static icSigPs2CRD3Tag: number;
static icSigPs2CSATag: number;
static icSigPs2RenderingIntentTag: number;
static icSigRedColorantTag: number;
static icSigRedMatrixColumnTag: number;
static icSigRedTRCTag: number;
static icSigScreeningDescTag: number;
static icSigScreeningTag: number;
static icSigTechnologyTag: number;
static icSigUcrBgTag: number;
static icSigViewingCondDescTag: number;
static icSigViewingConditionsTag: number;
static icSigChromaticityTag: number;
static icSigChromaticAdaptationTag: number;
static icSigColorantOrderTag: number;
static icSigColorantTableTag: number;
static icHdrSize: number;
static icHdrCmmId: number;
static icHdrVersion: number;
static icHdrDeviceClass: number;
static icHdrColorSpace: number;
static icHdrPcs: number;
static icHdrDate: number;
static icHdrMagic: number;
static icHdrPlatform: number;
static icHdrFlags: number;
static icHdrManufacturer: number;
static icHdrModel: number;
static icHdrAttributes: number;
static icHdrRenderingIntent: number;
static icHdrIlluminant: number;
static icHdrCreator: number;
static icHdrProfileID: number;
static icTagType: number;
static icTagReserved: number;
static icCurveCount: number;
static icCurveData: number;
static icXYZNumberX: number;
iccProfileSerializedDataVersion: number;
resolvedDeserializedProfile: java_awt_color_ICC_Profile;
static instance: java_awt_color_ICC_Profile;
static instance: java_awt_color_ICC_Profile;
static instance: java_awt_color_ICC_Profile;
static instance: java_awt_color_ICC_Profile;
majorVersion: number;
minorVersion: number;
data: number[];
data: number[];
numComponents: number;
colorSpaceType: number;
profileClass: number;
pCSType: number;
static getInstance(arg0: java_io_InputStream): java_awt_color_ICC_Profile;
static getInstance(arg0: string): java_awt_color_ICC_Profile;
static getInstance(arg0: number[]): java_awt_color_ICC_Profile;
static getInstance(arg0: number): java_awt_color_ICC_Profile;
write(arg0: java_io_OutputStream): void;
write(arg0: string): void;
getMajorVersion(): number;
getMinorVersion(): number;
getData(arg0: number): number[];
getData(): number[];
setData(arg0: number, arg1: number[]): void;
getNumComponents(): number;
getColorSpaceType(): number;
getProfileClass(): number;
getPCSType(): number;

  }
}//@ts-nocheck

declare module 'java.awt' {


  export class Transparency {
static OPAQUE: number;
static BITMASK: number;
static TRANSLUCENT: number;
transparency: number;
getTransparency(): number;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { RenderingHints as java_awt_RenderingHints } from 'java.awt';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, HashMap as java_util_HashMap } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Key as java_awt_RenderingHints_Key } from 'java.awt.RenderingHints';

  export class RenderingHints extends java_lang_Object implements java_util_Map<java_lang_Object, java_lang_Object>, java_lang_Cloneable {
hintmap: java_util_HashMap<java_lang_Object, java_lang_Object>;
static KEY_ANTIALIASING: java_awt_RenderingHints_Key;
static VALUE_ANTIALIAS_ON: java_lang_Object;
static VALUE_ANTIALIAS_OFF: java_lang_Object;
static VALUE_ANTIALIAS_DEFAULT: java_lang_Object;
static KEY_RENDERING: java_awt_RenderingHints_Key;
static VALUE_RENDER_SPEED: java_lang_Object;
static VALUE_RENDER_QUALITY: java_lang_Object;
static VALUE_RENDER_DEFAULT: java_lang_Object;
static KEY_DITHERING: java_awt_RenderingHints_Key;
static VALUE_DITHER_DISABLE: java_lang_Object;
static VALUE_DITHER_ENABLE: java_lang_Object;
static VALUE_DITHER_DEFAULT: java_lang_Object;
static KEY_TEXT_ANTIALIASING: java_awt_RenderingHints_Key;
static VALUE_TEXT_ANTIALIAS_ON: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_OFF: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_DEFAULT: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_GASP: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_LCD_HRGB: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_LCD_HBGR: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_LCD_VRGB: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_LCD_VBGR: java_lang_Object;
static KEY_TEXT_LCD_CONTRAST: java_awt_RenderingHints_Key;
static KEY_FRACTIONALMETRICS: java_awt_RenderingHints_Key;
static VALUE_FRACTIONALMETRICS_OFF: java_lang_Object;
static VALUE_FRACTIONALMETRICS_ON: java_lang_Object;
static VALUE_FRACTIONALMETRICS_DEFAULT: java_lang_Object;
static KEY_INTERPOLATION: java_awt_RenderingHints_Key;
static VALUE_INTERPOLATION_NEAREST_NEIGHBOR: java_lang_Object;
static VALUE_INTERPOLATION_BILINEAR: java_lang_Object;
static VALUE_INTERPOLATION_BICUBIC: java_lang_Object;
static KEY_ALPHA_INTERPOLATION: java_awt_RenderingHints_Key;
static VALUE_ALPHA_INTERPOLATION_SPEED: java_lang_Object;
static VALUE_ALPHA_INTERPOLATION_QUALITY: java_lang_Object;
static VALUE_ALPHA_INTERPOLATION_DEFAULT: java_lang_Object;
static KEY_COLOR_RENDERING: java_awt_RenderingHints_Key;
static VALUE_COLOR_RENDER_SPEED: java_lang_Object;
static VALUE_COLOR_RENDER_QUALITY: java_lang_Object;
static VALUE_COLOR_RENDER_DEFAULT: java_lang_Object;
static KEY_STROKE_CONTROL: java_awt_RenderingHints_Key;
static VALUE_STROKE_DEFAULT: java_lang_Object;
static VALUE_STROKE_NORMALIZE: java_lang_Object;
static VALUE_STROKE_PURE: java_lang_Object;
static KEY_RESOLUTION_VARIANT: java_awt_RenderingHints_Key;
static VALUE_RESOLUTION_VARIANT_DEFAULT: java_lang_Object;
static VALUE_RESOLUTION_VARIANT_BASE: java_lang_Object;
static VALUE_RESOLUTION_VARIANT_SIZE_FIT: java_lang_Object;
static VALUE_RESOLUTION_VARIANT_DPI_FIT: java_lang_Object;
orDefault: V;
add(arg0: java_awt_RenderingHints): void;
remove(arg0: java_lang_Object): java_lang_Object;
get(arg0: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
toString(): string;
values(): java_util_Collection<java_lang_Object>;
hashCode(): number;
clone(): java_lang_Object;
clear(): void;
isEmpty(): boolean;
size(): number;
entrySet(): java_util_Set<java_util_Map_Entry<java_lang_Object, java_lang_Object>>;
putAll(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
keySet(): java_util_Set<java_lang_Object>;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
putIfAbsent(arg0: K, arg1: V): V;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
constructor(arg0: java_util_Map<java_awt_RenderingHints_Key, java_lang_Object>);
constructor(arg0: java_awt_RenderingHints_Key, arg1: java_lang_Object);
  }
}//@ts-nocheck

declare module 'java.awt.RenderingHints' {
import { Object as java_lang_Object } from 'java.lang';
import { HashMap as java_util_HashMap } from 'java.util';

  export class Key extends java_lang_Object {
static identitymap: java_util_HashMap<java_lang_Object, java_lang_Object>;
privatekey: number;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
isCompatibleValue(arg0: java_lang_Object): boolean;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { ColorModel as java_awt_image_ColorModel, Raster as java_awt_image_Raster } from 'java.awt.image';

  export class PaintContext {
colorModel: java_awt_image_ColorModel;
raster: java_awt_image_Raster;
dispose(): void;
getColorModel(): java_awt_image_ColorModel;
getRaster(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_image_Raster;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { Rectangle as java_awt_Rectangle, RenderingHints as java_awt_RenderingHints, PaintContext as java_awt_PaintContext, Transparency as java_awt_Transparency } from 'java.awt';
import { Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';

  export class Paint implements java_awt_Transparency {
transparency: number;
createContext(arg0: java_awt_image_ColorModel, arg1: java_awt_Rectangle, arg2: java_awt_geom_Rectangle2D, arg3: java_awt_geom_AffineTransform, arg4: java_awt_RenderingHints): java_awt_PaintContext;
getTransparency(): number;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { ImageObserver as java_awt_image_ImageObserver, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { Object as java_lang_Object } from 'java.lang';
import { Graphics as java_awt_Graphics, Image as java_awt_Image, GraphicsConfiguration as java_awt_GraphicsConfiguration, ImageCapabilities as java_awt_ImageCapabilities } from 'java.awt';
import { SurfaceManager as sun_awt_image_SurfaceManager } from 'sun.awt.image';

  export class Image extends java_lang_Object {
static defaultImageCaps: java_awt_ImageCapabilities;
accelerationPriority: number;
static UndefinedProperty: java_lang_Object;
static SCALE_DEFAULT: number;
static SCALE_FAST: number;
static SCALE_SMOOTH: number;
static SCALE_REPLICATE: number;
static SCALE_AREA_AVERAGING: number;
surfaceManager: sun_awt_image_SurfaceManager;
property: java_lang_Object;
graphics: java_awt_Graphics;
scaledInstance: java_awt_Image;
capabilities: java_awt_ImageCapabilities;
accelerationPriority: number;
source: java_awt_image_ImageProducer;
width: number;
height: number;
getProperty(arg0: string, arg1: java_awt_image_ImageObserver): java_lang_Object;
flush(): void;
getGraphics(): java_awt_Graphics;
getScaledInstance(arg0: number, arg1: number, arg2: number): java_awt_Image;
getCapabilities(arg0: java_awt_GraphicsConfiguration): java_awt_ImageCapabilities;
setAccelerationPriority(arg0: number): void;
getAccelerationPriority(): number;
getSource(): java_awt_image_ImageProducer;
getWidth(arg0: java_awt_image_ImageObserver): number;
getHeight(arg0: java_awt_image_ImageObserver): number;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { Image as java_awt_Image } from 'java.awt';

  export class ImageObserver {
static WIDTH: number;
static HEIGHT: number;
static PROPERTIES: number;
static SOMEBITS: number;
static FRAMEBITS: number;
static ALLBITS: number;
static ERROR: number;
static ABORT: number;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Graphics as java_awt_Graphics, Font as java_awt_Font, Image as java_awt_Image, Color as java_awt_Color, FontMetrics as java_awt_FontMetrics, Rectangle as java_awt_Rectangle, Shape as java_awt_Shape, Polygon as java_awt_Polygon } from 'java.awt';
import { ImageObserver as java_awt_image_ImageObserver } from 'java.awt.image';
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';
import { Object as java_lang_Object } from 'java.lang';

  export class Graphics extends java_lang_Object {
fontMetrics: java_awt_FontMetrics;
fontMetrics: java_awt_FontMetrics;
clipBounds: java_awt_Rectangle;
clipBounds: java_awt_Rectangle;
clip: java_awt_Shape;
clipRect: java_awt_Rectangle;
color: java_awt_Color;
font: java_awt_Font;
finalize(): void;
toString(): string;
create(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_Graphics;
create(): java_awt_Graphics;
dispose(): void;
setFont(arg0: java_awt_Font): void;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_Color, arg4: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java_awt_Color, arg6: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java_awt_Color, arg10: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java_awt_image_ImageObserver): boolean;
setPaintMode(): void;
setXORMode(arg0: java_awt_Color): void;
getFontMetrics(): java_awt_FontMetrics;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getClipBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getClipBounds(): java_awt_Rectangle;
clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
setClip(arg0: java_awt_Shape): void;
getClip(): java_awt_Shape;
copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
drawPolyline(arg0: number[], arg1: number[], arg2: number): void;
drawPolygon(arg0: java_awt_Polygon): void;
drawPolygon(arg0: number[], arg1: number[], arg2: number): void;
fillPolygon(arg0: java_awt_Polygon): void;
fillPolygon(arg0: number[], arg1: number[], arg2: number): void;
drawString(arg0: string, arg1: number, arg2: number): void;
drawString(arg0: java_text_AttributedCharacterIterator, arg1: number, arg2: number): void;
drawChars(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): void;
drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
getClipRect(): java_awt_Rectangle;
hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getColor(): java_awt_Color;
getFont(): java_awt_Font;
translate(arg0: number, arg1: number): void;
setColor(arg0: java_awt_Color): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object } from 'java.lang';
import { Font as java_awt_Font } from 'java.awt';
import { Map as java_util_Map, Locale as java_util_Locale, Hashtable as java_util_Hashtable } from 'java.util';
import { TextAttribute as java_awt_font_TextAttribute, FontRenderContext as java_awt_font_FontRenderContext, LineMetrics as java_awt_font_LineMetrics, GlyphVector as java_awt_font_GlyphVector } from 'java.awt.font';
import { AffineTransform as java_awt_geom_AffineTransform, Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';
import { File as java_io_File, InputStream as java_io_InputStream, Serializable as java_io_Serializable } from 'java.io';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';
import { CharacterIterator as java_text_CharacterIterator } from 'java.text';
import { FontPeer as java_awt_peer_FontPeer } from 'java.awt.peer';
import { Font2DHandle as sun_font_Font2DHandle, AttributeValues as sun_font_AttributeValues, FontLineMetrics as sun_font_FontLineMetrics } from 'sun.font';
import { SoftReference as java_lang_ref_SoftReference } from 'java.lang.ref';

  export class Font extends java_lang_Object implements java_io_Serializable {
fRequestedAttributes: java_util_Hashtable<java_lang_Object, java_lang_Object>;
static DIALOG: string;
static DIALOG_INPUT: string;
static SANS_SERIF: string;
static SERIF: string;
static MONOSPACED: string;
static PLAIN: number;
static BOLD: number;
static ITALIC: number;
static ROMAN_BASELINE: number;
static CENTER_BASELINE: number;
static HANGING_BASELINE: number;
static TRUETYPE_FONT: number;
static TYPE1_FONT: number;
name: string;
style: number;
size: number;
pointSize: number;
peer: java_awt_peer_FontPeer;
pData: number;
font2DHandle: sun_font_Font2DHandle;
values: sun_font_AttributeValues;
hasLayoutAttributes: boolean;
createdFont: boolean;
nonIdentityTx: boolean;
static identityTx: java_awt_geom_AffineTransform;
static serialVersionUID: number;
static RECOGNIZED_MASK: number;
static PRIMARY_MASK: number;
static SECONDARY_MASK: number;
static LAYOUT_MASK: number;
static EXTRA_MASK: number;
static ssinfo: number[];
hash: number;
fontSerializedDataVersion: number;
flmref: java_lang_ref_SoftReference<sun_font_FontLineMetrics>;
static LAYOUT_LEFT_TO_RIGHT: number;
static LAYOUT_RIGHT_TO_LEFT: number;
static LAYOUT_NO_START_CONTEXT: number;
static LAYOUT_NO_LIMIT_CONTEXT: number;
name: string;
size: number;
attributes: java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
family: string;
family: string;
transform: java_awt_geom_AffineTransform;
pSName: string;
fontName: string;
fontName: string;
size2D: number;
numGlyphs: number;
missingGlyphCode: number;
baselineFor: number;
availableAttributes: java_textdCharacterIterator_Attribute_Attribute[];
italicAngle: number;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
maxCharBounds: java_awt_geom_Rectangle2D;
static font: java_awt_Font;
static font: java_awt_Font;
static font: java_awt_Font;
style: number;
getName(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static decode(arg0: string): java_awt_Font;
getSize(): number;
getAttributes(): java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
getFamily(arg0: java_util_Locale): string;
getFamily(): string;
isPlain(): boolean;
getTransform(): java_awt_geom_AffineTransform;
hasLayoutAttributes(): boolean;
static textRequiresLayout(arg0: string[], arg1: number, arg2: number): boolean;
static createFonts(arg0: java_io_File): java_awt_Font[];
static createFonts(arg0: java_io_InputStream): java_awt_Font[];
static createFont(arg0: number, arg1: java_io_InputStream): java_awt_Font;
static createFont(arg0: number, arg1: java_io_File): java_awt_Font;
getPSName(): string;
getFontName(arg0: java_util_Locale): string;
getFontName(): string;
getSize2D(): number;
isTransformed(): boolean;
getNumGlyphs(): number;
getMissingGlyphCode(): number;
getBaselineFor(arg0: string): number;
getAvailableAttributes(): java_textdCharacterIterator_Attribute_Attribute[];
deriveFont(arg0: number, arg1: number): java_awt_Font;
deriveFont(arg0: number, arg1: java_awt_geom_AffineTransform): java_awt_Font;
deriveFont(arg0: number): java_awt_Font;
deriveFont(arg0: java_awt_geom_AffineTransform): java_awt_Font;
deriveFont(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>): java_awt_Font;
deriveFont(arg0: number): java_awt_Font;
canDisplay(arg0: number): boolean;
canDisplay(arg0: string): boolean;
canDisplayUpTo(arg0: string): number;
canDisplayUpTo(arg0: java_text_CharacterIterator, arg1: number, arg2: number): number;
canDisplayUpTo(arg0: string[], arg1: number, arg2: number): number;
getItalicAngle(): number;
hasUniformLineMetrics(): boolean;
getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_font_LineMetrics;
getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_font_LineMetrics;
getLineMetrics(arg0: string, arg1: java_awt_font_FontRenderContext): java_awt_font_LineMetrics;
getLineMetrics(arg0: java_text_CharacterIterator, arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_font_LineMetrics;
getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string, arg1: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string, arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getStringBounds(arg0: java_text_CharacterIterator, arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getMaxCharBounds(arg0: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
createGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: string): java_awt_font_GlyphVector;
createGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: string[]): java_awt_font_GlyphVector;
createGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: java_text_CharacterIterator): java_awt_font_GlyphVector;
createGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: number[]): java_awt_font_GlyphVector;
layoutGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: string[], arg2: number, arg3: number, arg4: number): java_awt_font_GlyphVector;
isBold(): boolean;
isItalic(): boolean;
static getFont(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>): java_awt_Font;
static getFont(arg0: string, arg1: java_awt_Font): java_awt_Font;
static getFont(arg0: string): java_awt_Font;
getStyle(): number;
constructor(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>);
constructor(arg0: string, arg1: number, arg2: number);
  }
}//@ts-nocheck

declare module 'java.awt.font' {
import { Class as java_lang_Class, Object as java_lang_Object, Float as java_lang_Float, Integer as java_lang_Integer, Boolean as java_lang_Boolean } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { TextAttribute as java_awt_font_TextAttribute } from 'java.awt.font';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';

  export class TextAttribute extends java_textdCharacterIterator_Attribute_Attribute {
static instanceMap: java_util_Map<string, java_awt_font_TextAttribute>;
static serialVersionUID: number;
static FAMILY: java_awt_font_TextAttribute;
static WEIGHT: java_awt_font_TextAttribute;
static WEIGHT_EXTRA_LIGHT: java_lang_Float;
static WEIGHT_LIGHT: java_lang_Float;
static WEIGHT_DEMILIGHT: java_lang_Float;
static WEIGHT_REGULAR: java_lang_Float;
static WEIGHT_SEMIBOLD: java_lang_Float;
static WEIGHT_MEDIUM: java_lang_Float;
static WEIGHT_DEMIBOLD: java_lang_Float;
static WEIGHT_BOLD: java_lang_Float;
static WEIGHT_HEAVY: java_lang_Float;
static WEIGHT_EXTRABOLD: java_lang_Float;
static WEIGHT_ULTRABOLD: java_lang_Float;
static WIDTH: java_awt_font_TextAttribute;
static WIDTH_CONDENSED: java_lang_Float;
static WIDTH_SEMI_CONDENSED: java_lang_Float;
static WIDTH_REGULAR: java_lang_Float;
static WIDTH_SEMI_EXTENDED: java_lang_Float;
static WIDTH_EXTENDED: java_lang_Float;
static POSTURE: java_awt_font_TextAttribute;
static POSTURE_REGULAR: java_lang_Float;
static POSTURE_OBLIQUE: java_lang_Float;
static SIZE: java_awt_font_TextAttribute;
static TRANSFORM: java_awt_font_TextAttribute;
static SUPERSCRIPT: java_awt_font_TextAttribute;
static SUPERSCRIPT_SUPER: java_lang_Integer;
static SUPERSCRIPT_SUB: java_lang_Integer;
static FONT: java_awt_font_TextAttribute;
static CHAR_REPLACEMENT: java_awt_font_TextAttribute;
static FOREGROUND: java_awt_font_TextAttribute;
static BACKGROUND: java_awt_font_TextAttribute;
static UNDERLINE: java_awt_font_TextAttribute;
static UNDERLINE_ON: java_lang_Integer;
static STRIKETHROUGH: java_awt_font_TextAttribute;
static STRIKETHROUGH_ON: java_lang_Boolean;
static RUN_DIRECTION: java_awt_font_TextAttribute;
static RUN_DIRECTION_LTR: java_lang_Boolean;
static RUN_DIRECTION_RTL: java_lang_Boolean;
static BIDI_EMBEDDING: java_awt_font_TextAttribute;
static JUSTIFICATION: java_awt_font_TextAttribute;
static JUSTIFICATION_FULL: java_lang_Float;
static JUSTIFICATION_NONE: java_lang_Float;
static INPUT_METHOD_HIGHLIGHT: java_awt_font_TextAttribute;
static INPUT_METHOD_UNDERLINE: java_awt_font_TextAttribute;
static UNDERLINE_LOW_ONE_PIXEL: java_lang_Integer;
static UNDERLINE_LOW_TWO_PIXEL: java_lang_Integer;
static UNDERLINE_LOW_DOTTED: java_lang_Integer;
static UNDERLINE_LOW_GRAY: java_lang_Integer;
static UNDERLINE_LOW_DASHED: java_lang_Integer;
static SWAP_COLORS: java_awt_font_TextAttribute;
static SWAP_COLORS_ON: java_lang_Boolean;
static NUMERIC_SHAPING: java_awt_font_TextAttribute;
static KERNING: java_awt_font_TextAttribute;
static KERNING_ON: java_lang_Integer;
static LIGATURES: java_awt_font_TextAttribute;
static LIGATURES_ON: java_lang_Integer;
static TRACKING: java_awt_font_TextAttribute;
static TRACKING_TIGHT: java_lang_Float;
static TRACKING_LOOSE: java_lang_Float;
class: java_lang_Class<java_lang_Object>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.font' {
import { Object as java_lang_Object } from 'java.lang';
import { FontRenderContext as java_awt_font_FontRenderContext } from 'java.awt.font';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';

  export class FontRenderContext extends java_lang_Object {
tx: java_awt_geom_AffineTransform;
aaHintValue: java_lang_Object;
fmHintValue: java_lang_Object;
defaulting: boolean;
transform: java_awt_geom_AffineTransform;
antiAliasingHint: java_lang_Object;
fractionalMetricsHint: java_lang_Object;
transformType: number;
equals(arg0: java_lang_Object): boolean;
equals(arg0: java_awt_font_FontRenderContext): boolean;
hashCode(): number;
getTransform(): java_awt_geom_AffineTransform;
isTransformed(): boolean;
getAntiAliasingHint(): java_lang_Object;
getFractionalMetricsHint(): java_lang_Object;
isAntiAliased(): boolean;
usesFractionalMetrics(): boolean;
getTransformType(): number;
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_lang_Object, arg2: java_lang_Object);
constructor(arg0: java_awt_geom_AffineTransform, arg1: boolean, arg2: boolean);
  }
}//@ts-nocheck

declare module 'java.awt.font' {
import { Object as java_lang_Object } from 'java.lang';

  export class LineMetrics extends java_lang_Object {
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
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.font' {
import { GlyphVector as java_awt_font_GlyphVector, FontRenderContext as java_awt_font_FontRenderContext, GlyphMetrics as java_awt_font_GlyphMetrics, GlyphJustificationInfo as java_awt_font_GlyphJustificationInfo } from 'java.awt.font';
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D, AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle, Shape as java_awt_Shape, Font as java_awt_Font } from 'java.awt';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';

  export class GlyphVector extends java_lang_Object implements java_lang_Cloneable {
static FLAG_HAS_TRANSFORMS: number;
static FLAG_HAS_POSITION_ADJUSTMENTS: number;
static FLAG_RUN_RTL: number;
static FLAG_COMPLEX_GLYPHS: number;
static FLAG_MASK: number;
numGlyphs: number;
fontRenderContext: java_awt_font_FontRenderContext;
glyphCode: number;
glyphCodes: number[];
glyphCharIndex: number;
glyphCharIndices: number[];
logicalBounds: java_awt_geom_Rectangle2D;
visualBounds: java_awt_geom_Rectangle2D;
pixelBounds: java_awt_Rectangle;
outline: java_awt_Shape;
outline: java_awt_Shape;
glyphOutline: java_awt_Shape;
glyphOutline: java_awt_Shape;
glyphPosition: java_awt_geom_Point2D;
glyphTransform: java_awt_geom_AffineTransform;
layoutFlags: number;
glyphPositions: number[];
glyphLogicalBounds: java_awt_Shape;
glyphVisualBounds: java_awt_Shape;
glyphPixelBounds: java_awt_Rectangle;
glyphMetrics: java_awt_font_GlyphMetrics;
glyphJustificationInfo: java_awt_font_GlyphJustificationInfo;
font: java_awt_Font;
equals(arg0: java_awt_font_GlyphVector): boolean;
getNumGlyphs(): number;
getFontRenderContext(): java_awt_font_FontRenderContext;
performDefaultLayout(): void;
getGlyphCode(arg0: number): number;
getGlyphCodes(arg0: number, arg1: number, arg2: number[]): number[];
getGlyphCharIndex(arg0: number): number;
getGlyphCharIndices(arg0: number, arg1: number, arg2: number[]): number[];
getLogicalBounds(): java_awt_geom_Rectangle2D;
getVisualBounds(): java_awt_geom_Rectangle2D;
getPixelBounds(arg0: java_awt_font_FontRenderContext, arg1: number, arg2: number): java_awt_Rectangle;
getOutline(arg0: number, arg1: number): java_awt_Shape;
getOutline(): java_awt_Shape;
getGlyphOutline(arg0: number): java_awt_Shape;
getGlyphOutline(arg0: number, arg1: number, arg2: number): java_awt_Shape;
getGlyphPosition(arg0: number): java_awt_geom_Point2D;
setGlyphPosition(arg0: number, arg1: java_awt_geom_Point2D): void;
getGlyphTransform(arg0: number): java_awt_geom_AffineTransform;
setGlyphTransform(arg0: number, arg1: java_awt_geom_AffineTransform): void;
getLayoutFlags(): number;
getGlyphPositions(arg0: number, arg1: number, arg2: number[]): number[];
getGlyphLogicalBounds(arg0: number): java_awt_Shape;
getGlyphVisualBounds(arg0: number): java_awt_Shape;
getGlyphPixelBounds(arg0: number, arg1: java_awt_font_FontRenderContext, arg2: number, arg3: number): java_awt_Rectangle;
getGlyphMetrics(arg0: number): java_awt_font_GlyphMetrics;
getGlyphJustificationInfo(arg0: number): java_awt_font_GlyphJustificationInfo;
getFont(): java_awt_Font;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.font' {
import { Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';
import { Float as java_awt_geom_Rectangle2D_Float } from 'java.awt.geom.Rectangle2D';
import { Object as java_lang_Object } from 'java.lang';

  export class GlyphMetrics extends java_lang_Object {
horizontal: boolean;
advanceX: number;
advanceY: number;
bounds: java_awt_geom_Rectangle2D_Float;
glyphType: number;
static STANDARD: number;
static LIGATURE: number;
static COMBINING: number;
static COMPONENT: number;
static WHITESPACE: number;
type: number;
bounds2D: java_awt_geom_Rectangle2D;
advance: number;
advanceX: number;
advanceY: number;
lSB: number;
rSB: number;
isWhitespace(): boolean;
getType(): number;
isStandard(): boolean;
getBounds2D(): java_awt_geom_Rectangle2D;
getAdvance(): number;
getAdvanceX(): number;
getAdvanceY(): number;
getLSB(): number;
getRSB(): number;
isLigature(): boolean;
isCombining(): boolean;
isComponent(): boolean;
constructor(arg0: number, arg1: java_awt_geom_Rectangle2D, arg2: number);
constructor(arg0: boolean, arg1: number, arg2: number, arg3: java_awt_geom_Rectangle2D, arg4: number);
  }
}//@ts-nocheck

declare module 'java.awt.geom.Rectangle2D' {
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D, Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Rectangle as java_awt_Rectangle } from 'java.awt';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Float extends java_awt_geom_Rectangle2D implements java_io_Serializable {
x: number;
y: number;
width: number;
height: number;
static serialVersionUID: number;
y: number;
x: number;
bounds2D: java_awt_geom_Rectangle2D;
width: number;
height: number;
maxY: number;
centerY: number;
minY: number;
frame: java_awt_geom_Rectangle2D;
centerX: number;
minX: number;
maxX: number;
bounds: java_awt_Rectangle;
class: java_lang_Class<java_lang_Object>;
toString(): string;
isEmpty(): boolean;
createIntersection(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
getY(): number;
getX(): number;
getBounds2D(): java_awt_geom_Rectangle2D;
setRect(arg0: java_awt_geom_Rectangle2D): void;
setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
outcode(arg0: number, arg1: number): number;
createUnion(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
getWidth(): number;
getHeight(): number;
clone(): java_lang_Object;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
getMaxY(): number;
getCenterY(): number;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
getMinY(): number;
setFrame(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Dimension2D): void;
setFrame(arg0: java_awt_geom_Rectangle2D): void;
setFrameFromDiagonal(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFrameFromCenter(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
getFrame(): java_awt_geom_Rectangle2D;
getCenterX(): number;
getMinX(): number;
getMaxX(): number;
getBounds(): java_awt_Rectangle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.awt.font' {
import { Object as java_lang_Object } from 'java.lang';

  export class GlyphJustificationInfo extends java_lang_Object {
static PRIORITY_KASHIDA: number;
static PRIORITY_WHITESPACE: number;
static PRIORITY_INTERCHAR: number;
static PRIORITY_NONE: number;
weight: number;
growPriority: number;
growAbsorb: boolean;
growLeftLimit: number;
growRightLimit: number;
shrinkPriority: number;
shrinkAbsorb: boolean;
shrinkLeftLimit: number;
shrinkRightLimit: number;

constructor(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: number);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Graphics as java_awt_Graphics, Font as java_awt_Font } from 'java.awt';
import { LineMetrics as java_awt_font_LineMetrics, FontRenderContext as java_awt_font_FontRenderContext } from 'java.awt.font';
import { CharacterIterator as java_text_CharacterIterator } from 'java.text';
import { Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class FontMetrics extends java_lang_Object implements java_io_Serializable {
static DEFAULT_FRC: java_awt_font_FontRenderContext;
font: java_awt_Font;
static serialVersionUID: number;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
maxCharBounds: java_awt_geom_Rectangle2D;
ascent: number;
descent: number;
leading: number;
fontRenderContext: java_awt_font_FontRenderContext;
maxAscent: number;
maxDescent: number;
maxDecent: number;
maxAdvance: number;
widths: number[];
height: number;
font: java_awt_Font;
toString(): string;
hasUniformLineMetrics(): boolean;
getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_font_LineMetrics;
getLineMetrics(arg0: java_text_CharacterIterator, arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_font_LineMetrics;
getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_font_LineMetrics;
getLineMetrics(arg0: string, arg1: java_awt_Graphics): java_awt_font_LineMetrics;
getStringBounds(arg0: string, arg1: java_awt_Graphics): java_awt_geom_Rectangle2D;
getStringBounds(arg0: java_text_CharacterIterator, arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string, arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_geom_Rectangle2D;
getMaxCharBounds(arg0: java_awt_Graphics): java_awt_geom_Rectangle2D;
getAscent(): number;
getDescent(): number;
getLeading(): number;
getFontRenderContext(): java_awt_font_FontRenderContext;
getMaxAscent(): number;
getMaxDescent(): number;
getMaxDecent(): number;
getMaxAdvance(): number;
charWidth(arg0: number): number;
charWidth(arg0: string): number;
stringWidth(arg0: string): number;
charsWidth(arg0: string[], arg1: number, arg2: number): number;
bytesWidth(arg0: number[], arg1: number, arg2: number): number;
getWidths(): number[];
getHeight(): number;
getFont(): java_awt_Font;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle, Shape as java_awt_Shape } from 'java.awt';
import { Point2D as java_awt_geom_Point2D, Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Polygon extends java_lang_Object implements java_awt_Shape, java_io_Serializable {
npoints: number;
xpoints: number[];
ypoints: number[];
bounds: java_awt_Rectangle;
static serialVersionUID: number;
static MIN_LENGTH: number;
bounds2D: java_awt_geom_Rectangle2D;
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
boundingBox: java_awt_Rectangle;
bounds: java_awt_Rectangle;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: java_awt_Point): boolean;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
reset(): void;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
getBounds2D(): java_awt_geom_Rectangle2D;
inside(arg0: number, arg1: number): boolean;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
addPoint(arg0: number, arg1: number): void;
getBoundingBox(): java_awt_Rectangle;
invalidate(): void;
translate(arg0: number, arg1: number): void;
getBounds(): java_awt_Rectangle;
constructor();
constructor(arg0: number[], arg1: number[], arg2: number);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { ColorModel as java_awt_image_ColorModel, BufferedImage as java_awt_image_BufferedImage, VolatileImage as java_awt_image_VolatileImage } from 'java.awt.image';
import { GraphicsDevice as java_awt_GraphicsDevice, ImageCapabilities as java_awt_ImageCapabilities, BufferCapabilities as java_awt_BufferCapabilities, Rectangle as java_awt_Rectangle } from 'java.awt';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';

  export class GraphicsConfiguration extends java_lang_Object {
static defaultBufferCaps: java_awt_BufferCapabilities;
static defaultImageCaps: java_awt_ImageCapabilities;
static $assertionsDisabled: boolean;
colorModel: java_awt_image_ColorModel;
colorModel: java_awt_image_ColorModel;
device: java_awt_GraphicsDevice;
defaultTransform: java_awt_geom_AffineTransform;
normalizingTransform: java_awt_geom_AffineTransform;
bufferCapabilities: java_awt_BufferCapabilities;
imageCapabilities: java_awt_ImageCapabilities;
bounds: java_awt_Rectangle;
getColorModel(): java_awt_image_ColorModel;
getColorModel(arg0: number): java_awt_image_ColorModel;
getDevice(): java_awt_GraphicsDevice;
createCompatibleImage(arg0: number, arg1: number): java_awt_image_BufferedImage;
createCompatibleImage(arg0: number, arg1: number, arg2: number): java_awt_image_BufferedImage;
createCompatibleVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
createCompatibleVolatileImage(arg0: number, arg1: number, arg2: number): java_awt_image_VolatileImage;
createCompatibleVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities, arg3: number): java_awt_image_VolatileImage;
createCompatibleVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
getDefaultTransform(): java_awt_geom_AffineTransform;
getNormalizingTransform(): java_awt_geom_AffineTransform;
getBufferCapabilities(): java_awt_BufferCapabilities;
getImageCapabilities(): java_awt_ImageCapabilities;
isTranslucencyCapable(): boolean;
getBounds(): java_awt_Rectangle;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { GraphicsConfiguration as java_awt_GraphicsConfiguration, GraphicsConfigTemplate as java_awt_GraphicsConfigTemplate, Window as java_awt_Window, DisplayMode as java_awt_DisplayMode, Rectangle as java_awt_Rectangle } from 'java.awt';
import { WindowTranslucency as java_awt_GraphicsDevice_WindowTranslucency } from 'java.awt.GraphicsDevice';
import { AppContext as sun_awt_AppContext } from 'sun.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class GraphicsDevice extends java_lang_Object {
fullScreenWindow: java_awt_Window;
fullScreenAppContext: sun_awt_AppContext;
fsAppContextLock: java_lang_Object;
windowedModeBounds: java_awt_Rectangle;
static TYPE_RASTER_SCREEN: number;
static TYPE_PRINTER: number;
static TYPE_IMAGE_BUFFER: number;
type: number;
iDstring: string;
defaultConfiguration: java_awt_GraphicsConfiguration;
bestConfiguration: java_awt_GraphicsConfiguration;
fullScreenWindow: java_awt_Window;
displayMode: java_awt_DisplayMode;
displayModes: java_awt_DisplayMode[];
availableAcceleratedMemory: number;
configurations: java_awt_GraphicsConfiguration[];
getType(): number;
getIDstring(): string;
getDefaultConfiguration(): java_awt_GraphicsConfiguration;
getBestConfiguration(arg0: java_awt_GraphicsConfigTemplate): java_awt_GraphicsConfiguration;
isFullScreenSupported(): boolean;
setFullScreenWindow(arg0: java_awt_Window): void;
getFullScreenWindow(): java_awt_Window;
isDisplayChangeSupported(): boolean;
setDisplayMode(arg0: java_awt_DisplayMode): void;
getDisplayMode(): java_awt_DisplayMode;
getDisplayModes(): java_awt_DisplayMode[];
getAvailableAcceleratedMemory(): number;
isWindowTranslucencySupported(arg0: java_awt_GraphicsDevice_WindowTranslucency): boolean;
getConfigurations(): java_awt_GraphicsConfiguration[];

  }
}//@ts-nocheck

declare module 'java.awt' {
import { GraphicsConfiguration as java_awt_GraphicsConfiguration } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class GraphicsConfigTemplate extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
static REQUIRED: number;
static PREFERRED: number;
static UNNECESSARY: number;
bestConfiguration: java_awt_GraphicsConfiguration;
getBestConfiguration(arg0: java_awt_GraphicsConfiguration[]): java_awt_GraphicsConfiguration;
isGraphicsConfigSupported(arg0: java_awt_GraphicsConfiguration): boolean;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Type as java_awt_Window_Type, WindowDisposerRecord as java_awt_Window_WindowDisposerRecord } from 'java.awt.Window';
import { Window as java_awt_Window, Dimension as java_awt_Dimension, Shape as java_awt_Shape, Image as java_awt_Image, Toolkit as java_awt_Toolkit, Component as java_awt_Component, AWTKeyStroke as java_awt_AWTKeyStroke, Container as java_awt_Container, Event as java_awt_Event, BufferCapabilities as java_awt_BufferCapabilities, Graphics as java_awt_Graphics, Rectangle as java_awt_Rectangle, Color as java_awt_Color, Point as java_awt_Point, Cursor as java_awt_Cursor, PopupMenu as java_awt_PopupMenu, MenuComponent as java_awt_MenuComponent, ComponentOrientation as java_awt_ComponentOrientation, ImageCapabilities as java_awt_ImageCapabilities, Font as java_awt_Font, FontMetrics as java_awt_FontMetrics, GraphicsConfiguration as java_awt_GraphicsConfiguration, AWTEvent as java_awt_AWTEvent, Frame as java_awt_Frame, Dialog as java_awt_Dialog, FocusManager as java_awt_FocusManager } from 'java.awt';
import { Locale as java_util_Locale, List as java_util_List, Set as java_util_Set, ResourceBundle as java_util_ResourceBundle, EventListener as java_util_EventListener, Vector as java_util_Vector } from 'java.util';
import { InputContext as java_awt_im_InputContext, InputMethodRequests as java_awt_im_InputMethodRequests } from 'java.awt.im';
import { ModalExclusionType as java_awt_Dialog_ModalExclusionType } from 'java.awt.Dialog';
import { WindowListener as java_awt_event_WindowListener, WindowStateListener as java_awt_event_WindowStateListener, WindowFocusListener as java_awt_event_WindowFocusListener, MouseListener as java_awt_event_MouseListener, MouseMotionListener as java_awt_event_MouseMotionListener, MouseWheelListener as java_awt_event_MouseWheelListener, InputMethodListener as java_awt_event_InputMethodListener, ComponentListener as java_awt_event_ComponentListener, FocusListener as java_awt_event_FocusListener, HierarchyListener as java_awt_event_HierarchyListener, HierarchyBoundsListener as java_awt_event_HierarchyBoundsListener, KeyListener as java_awt_event_KeyListener } from 'java.awt.event';
import { AccessibleContext as javax_accessibility_AccessibleContext, Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { BufferStrategy as java_awt_image_BufferStrategy, ColorModel as java_awt_image_ColorModel, ImageProducer as java_awt_image_ImageProducer, VolatileImage as java_awt_image_VolatileImage, ImageObserver as java_awt_image_ImageObserver } from 'java.awt.image';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { PrintStream as java_io_PrintStream, PrintWriter as java_io_PrintWriter } from 'java.io';
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';
import { IdentityArrayList as sun_awt_util_IdentityArrayList } from 'sun.awt.util';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { AtomicBoolean as java_util_concurrent_atomic_AtomicBoolean } from 'java.util.concurrent.atomic';

  export class Window extends java_awt_Container implements javax_accessibility_Accessible {
warningString: string;
icons: java_util_List<java_awt_Image>;
temporaryLostComponent: java_awt_Component;
static systemSyncLWRequests: boolean;
syncLWRequests: boolean;
beforeFirstShow: boolean;
disposing: boolean;
disposerRecord: java_awt_Window_WindowDisposerRecord;
static OPENED: number;
state: number;
alwaysOnTop: boolean;
static allWindows: sun_awt_util_IdentityArrayList<java_awt_Window>;
ownedWindowList: java_util_Vector<java_lang_ref_WeakReference<java_awt_Window>>;
weakThis: java_lang_ref_WeakReference<java_awt_Window>;
showWithParent: boolean;
modalBlocker: java_awt_Dialog;
modalExclusionType: java_awt_Dialog_ModalExclusionType;
windowListener: java_awt_event_WindowListener;
windowStateListener: java_awt_event_WindowStateListener;
windowFocusListener: java_awt_event_WindowFocusListener;
inputContext: java_awt_im_InputContext;
inputContextLock: java_lang_Object;
focusMgr: java_awt_FocusManager;
focusableWindowState: boolean;
autoRequestFocus: boolean;
isInShow: boolean;
opacity: number;
shape: java_awt_Shape;
static base: string;
static nameCounter: number;
static serialVersionUID: number;
static log: sun_util_logging_PlatformLogger;
static locationByPlatformProp: boolean;
isTrayIconWindow: boolean;
securityWarningWidth: number;
securityWarningHeight: number;
securityWarningPointX: number;
securityWarningPointY: number;
securityWarningAlignmentX: number;
securityWarningAlignmentY: number;
anchor: java_lang_Object;
static beforeFirstWindowShown: java_util_concurrent_atomic_AtomicBoolean;
type: java_awt_Window_Type;
windowSerializedDataVersion: number;
locationByPlatform: boolean;
type: java_awt_Window_Type;
owner: java_awt_Window;
locale: java_util_Locale;
iconImages: java_util_List<java_awt_Image>;
toolkit: java_awt_Toolkit;
warningString: string;
inputContext: java_awt_im_InputContext;
ownedWindows: java_awt_Window[];
static windows: java_awt_Window[];
static ownerlessWindows: java_awt_Window[];
modalExclusionType: java_awt_Dialog_ModalExclusionType;
windowListeners: java_awt_event_WindowListener[];
windowFocusListeners: java_awt_event_WindowFocusListener[];
windowStateListeners: java_awt_event_WindowStateListener[];
focusOwner: java_awt_Component;
mostRecentFocusOwner: java_awt_Component;
focusTraversalKeys: java_util_Set<java_awt_AWTKeyStroke>;
focusCycleRootAncestor: java_awt_Container;
focusableWindowState: boolean;
accessibleContext: javax_accessibility_AccessibleContext;
bufferStrategy: java_awt_image_BufferStrategy;
background: java_awt_Color;
opacity: number;
listeners: T[];
shape: java_awt_Shape;
name: string;
parent: java_awt_Container;
location: java_awt_Point;
location: java_awt_Point;
size: java_awt_Dimension;
size: java_awt_Dimension;
mouseListeners: java_awt_event_MouseListener[];
mouseMotionListeners: java_awt_event_MouseMotionListener[];
mouseWheelListeners: java_awt_event_MouseWheelListener[];
inputMethodListeners: java_awt_event_InputMethodListener[];
inputMethodRequests: java_awt_im_InputMethodRequests;
focusTraversalKeysEnabled: boolean;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
componentOrientation: java_awt_ComponentOrientation;
y: number;
x: number;
colorModel: java_awt_image_ColorModel;
graphics: java_awt_Graphics;
treeLock: java_lang_Object;
locationOnScreen: java_awt_Point;
mousePosition: java_awt_Point;
dropTarget: java_awt_dnd_DropTarget;
baseline: number;
baselineResizeBehavior: java_awt_Component_BaselineResizeBehavior;
ignoreRepaint: boolean;
componentListeners: java_awt_event_ComponentListener[];
focusListeners: java_awt_event_FocusListener[];
hierarchyListeners: java_awt_event_HierarchyListener[];
hierarchyBoundsListeners: java_awt_event_HierarchyBoundsListener[];
keyListeners: java_awt_event_KeyListener[];
fontMetrics: java_awt_FontMetrics;
foreground: java_awt_Color;
graphicsConfiguration: java_awt_GraphicsConfiguration;
cursor: java_awt_Cursor;
width: number;
height: number;
font: java_awt_Font;
bounds: java_awt_Rectangle;
bounds: java_awt_Rectangle;
class: java_lang_Class<java_lang_Object>;
getType(): java_awt_Window_Type;
isOpaque(): boolean;
isActive(): boolean;
getOwner(): java_awt_Window;
setSize(arg0: number, arg1: number): void;
setSize(arg0: java_awt_Dimension): void;
pack(): void;
getLocale(): java_util_Locale;
dispose(): void;
show(): void;
setShape(arg0: java_awt_Shape): void;
reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
getIconImages(): java_util_List<java_awt_Image>;
setIconImages(arg0: java_util_List<java_awt_Image>): void;
setIconImage(arg0: java_awt_Image): void;
addNotify(): void;
removeNotify(): void;
setMinimumSize(arg0: java_awt_Dimension): void;
toBack(): void;
getToolkit(): java_awt_Toolkit;
getWarningString(): string;
getInputContext(): java_awt_im_InputContext;
getOwnedWindows(): java_awt_Window[];
static getWindows(): java_awt_Window[];
static getOwnerlessWindows(): java_awt_Window[];
setModalExclusionType(arg0: java_awt_Dialog_ModalExclusionType): void;
getModalExclusionType(): java_awt_Dialog_ModalExclusionType;
addWindowListener(arg0: java_awt_event_WindowListener): void;
addWindowStateListener(arg0: java_awt_event_WindowStateListener): void;
addWindowFocusListener(arg0: java_awt_event_WindowFocusListener): void;
removeWindowListener(arg0: java_awt_event_WindowListener): void;
removeWindowStateListener(arg0: java_awt_event_WindowStateListener): void;
removeWindowFocusListener(arg0: java_awt_event_WindowFocusListener): void;
getWindowListeners(): java_awt_event_WindowListener[];
getWindowFocusListeners(): java_awt_event_WindowFocusListener[];
getWindowStateListeners(): java_awt_event_WindowStateListener[];
setAlwaysOnTop(arg0: boolean): void;
isAlwaysOnTopSupported(): boolean;
isAlwaysOnTop(): boolean;
getFocusOwner(): java_awt_Component;
getMostRecentFocusOwner(): java_awt_Component;
isFocused(): boolean;
getFocusTraversalKeys(arg0: number): java_util_Set<java_awt_AWTKeyStroke>;
setFocusCycleRoot(arg0: boolean): void;
isFocusCycleRoot(): boolean;
getFocusCycleRootAncestor(): java_awt_Container;
isFocusableWindow(): boolean;
getFocusableWindowState(): boolean;
setFocusableWindowState(arg0: boolean): void;
setAutoRequestFocus(arg0: boolean): void;
isAutoRequestFocus(): boolean;
isValidateRoot(): boolean;
postEvent(arg0: java_awt_Event): boolean;
isShowing(): boolean;
applyResourceBundle(arg0: java_util_ResourceBundle): void;
applyResourceBundle(arg0: string): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
setLocationRelativeTo(arg0: java_awt_Component): void;
createBufferStrategy(arg0: number): void;
createBufferStrategy(arg0: number, arg1: java_awt_BufferCapabilities): void;
getBufferStrategy(): java_awt_image_BufferStrategy;
setLocationByPlatform(arg0: boolean): void;
isLocationByPlatform(): boolean;
paint(arg0: java_awt_Graphics): void;
setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
setBounds(arg0: java_awt_Rectangle): void;
getBackground(): java_awt_Color;
setBackground(arg0: java_awt_Color): void;
getOpacity(): number;
setOpacity(arg0: number): void;
toFront(): void;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
setLocation(arg0: java_awt_Point): void;
setLocation(arg0: number, arg1: number): void;
setCursor(arg0: java_awt_Cursor): void;
getShape(): java_awt_Shape;
hide(): void;
setVisible(arg0: boolean): void;
setType(arg0: java_awt_Window_Type): void;
getName(): string;
add(arg0: java_awt_PopupMenu): void;
remove(arg0: java_awt_MenuComponent): void;
toString(): string;
contains(arg0: number, arg1: number): boolean;
contains(arg0: java_awt_Point): boolean;
list(): void;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintWriter): void;
size(): java_awt_Dimension;
getParent(): java_awt_Container;
getLocation(): java_awt_Point;
getLocation(arg0: java_awt_Point): java_awt_Point;
setName(arg0: string): void;
action(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
location(): java_awt_Point;
getSize(arg0: java_awt_Dimension): java_awt_Dimension;
getSize(): java_awt_Dimension;
resize(arg0: java_awt_Dimension): void;
resize(arg0: number, arg1: number): void;
move(arg0: number, arg1: number): void;
setLocale(arg0: java_util_Locale): void;
isEnabled(): boolean;
bounds(): java_awt_Rectangle;
enable(arg0: boolean): void;
enable(): void;
isValid(): boolean;
show(arg0: boolean): void;
getMouseListeners(): java_awt_event_MouseListener[];
addMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
removeMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
getMouseMotionListeners(): java_awt_event_MouseMotionListener[];
addMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
removeMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
getMouseWheelListeners(): java_awt_event_MouseWheelListener[];
addInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
removeInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
getInputMethodListeners(): java_awt_event_InputMethodListener[];
getInputMethodRequests(): java_awt_im_InputMethodRequests;
mouseDown(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseDrag(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseUp(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseMove(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseEnter(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseExit(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
keyDown(arg0: java_awt_Event, arg1: number): boolean;
keyUp(arg0: java_awt_Event, arg1: number): boolean;
gotFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
lostFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
isFocusTraversable(): boolean;
setFocusable(arg0: boolean): void;
setFocusTraversalKeysEnabled(arg0: boolean): void;
getFocusTraversalKeysEnabled(): boolean;
requestFocusInWindow(): boolean;
requestFocusInWindow(arg0: java_awt_event_FocusEvent_Cause): boolean;
nextFocus(): void;
transferFocusUpCycle(): void;
hasFocus(): boolean;
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
setComponentOrientation(arg0: java_awt_ComponentOrientation): void;
getComponentOrientation(): java_awt_ComponentOrientation;
setMixingCutoutShape(arg0: java_awt_Shape): void;
getY(): number;
getX(): number;
getColorModel(): java_awt_image_ColorModel;
getGraphics(): java_awt_Graphics;
createImage(arg0: number, arg1: number): java_awt_Image;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
firePropertyChange(arg0: string, arg1: string, arg2: string): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
getTreeLock(): java_lang_Object;
isMinimumSizeSet(): boolean;
isDisplayable(): boolean;
requestFocus(): void;
requestFocus(arg0: java_awt_event_FocusEvent_Cause): void;
getLocationOnScreen(): java_awt_Point;
getMousePosition(): java_awt_Point;
isLightweight(): boolean;
isFocusable(): boolean;
isFocusOwner(): boolean;
transferFocus(): void;
isPreferredSizeSet(): boolean;
isMaximumSizeSet(): boolean;
transferFocusBackward(): void;
setDropTarget(arg0: java_awt_dnd_DropTarget): void;
getDropTarget(): java_awt_dnd_DropTarget;
isDoubleBuffered(): boolean;
enableInputMethods(arg0: boolean): void;
isForegroundSet(): boolean;
isBackgroundSet(): boolean;
isFontSet(): boolean;
setPreferredSize(arg0: java_awt_Dimension): void;
setMaximumSize(arg0: java_awt_Dimension): void;
getBaseline(arg0: number, arg1: number): number;
getBaselineResizeBehavior(): java_awt_Component_BaselineResizeBehavior;
revalidate(): void;
isCursorSet(): boolean;
paintAll(arg0: java_awt_Graphics): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
repaint(arg0: number): void;
repaint(): void;
printAll(arg0: java_awt_Graphics): void;
createVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
createVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
prepareImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): boolean;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
checkImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): number;
setIgnoreRepaint(arg0: boolean): void;
getIgnoreRepaint(): boolean;
addComponentListener(arg0: java_awt_event_ComponentListener): void;
removeComponentListener(arg0: java_awt_event_ComponentListener): void;
getComponentListeners(): java_awt_event_ComponentListener[];
addFocusListener(arg0: java_awt_event_FocusListener): void;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
getFocusListeners(): java_awt_event_FocusListener[];
addHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
removeHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
getHierarchyListeners(): java_awt_event_HierarchyListener[];
addHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
removeHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
getHierarchyBoundsListeners(): java_awt_event_HierarchyBoundsListener[];
addKeyListener(arg0: java_awt_event_KeyListener): void;
removeKeyListener(arg0: java_awt_event_KeyListener): void;
getKeyListeners(): java_awt_event_KeyListener[];
addMouseListener(arg0: java_awt_event_MouseListener): void;
removeMouseListener(arg0: java_awt_event_MouseListener): void;
inside(arg0: number, arg1: number): boolean;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getForeground(): java_awt_Color;
setForeground(arg0: java_awt_Color): void;
getGraphicsConfiguration(): java_awt_GraphicsConfiguration;
setEnabled(arg0: boolean): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;
handleEvent(arg0: java_awt_Event): boolean;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
getCursor(): java_awt_Cursor;
disable(): void;
isVisible(): boolean;
getWidth(): number;
getHeight(): number;
getFont(): java_awt_Font;
getBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getBounds(): java_awt_Rectangle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Frame);
constructor(arg0: java_awt_Window);
constructor(arg0: java_awt_Window, arg1: java_awt_GraphicsConfiguration);
  }
}//@ts-nocheck

declare module 'java.awt.Window' {
import { Type as java_awt_Window_Type } from 'java.awt.Window';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Type extends java_lang_Enum<java_awt_Window_Type> {
static NORMAL: java_awt_Window_Type;
static UTILITY: java_awt_Window_Type;
static POPUP: java_awt_Window_Type;
static $VALUES: java_awt_Window_Type[];
class: java_lang_Class<java_lang_Object>;
static values(): java_awt_Window_Type[];
static valueOf(arg0: string): java_awt_Window_Type;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { PropertyChangeListener as java_beans_PropertyChangeListener, PropertyChangeSupport as java_beans_PropertyChangeSupport } from 'java.beans';
import { Dimension as java_awt_Dimension, Image as java_awt_Image, Frame as java_awt_Frame, JobAttributes as java_awt_JobAttributes, PageAttributes as java_awt_PageAttributes, PrintJob as java_awt_PrintJob, Point as java_awt_Point, Cursor as java_awt_Cursor, EventQueue as java_awt_EventQueue, Component as java_awt_Component, Toolkit as java_awt_Toolkit, GraphicsConfiguration as java_awt_GraphicsConfiguration, Insets as java_awt_Insets, Font as java_awt_Font, FontMetrics as java_awt_FontMetrics } from 'java.awt';
import { URL as java_net_URL } from 'java.net';
import { Properties as java_util_Properties, Map as java_util_Map, ResourceBundle as java_util_ResourceBundle, WeakHashMap as java_util_WeakHashMap } from 'java.util';
import { Clipboard as java_awt_datatransfer_Clipboard } from 'java.awt.datatransfer';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { DragSource as java_awt_dnd_DragSource, DragGestureListener as java_awt_dnd_DragGestureListener, DragGestureRecognizer as java_awt_dnd_DragGestureRecognizer } from 'java.awt.dnd';
import { ModalityType as java_awt_Dialog_ModalityType, ModalExclusionType as java_awt_Dialog_ModalExclusionType } from 'java.awt.Dialog';
import { AWTEventListener as java_awt_event_AWTEventListener } from 'java.awt.event';
import { ColorModel as java_awt_image_ColorModel, ImageProducer as java_awt_image_ImageProducer, ImageObserver as java_awt_image_ImageObserver } from 'java.awt.image';
import { InputMethodHighlight as java_awt_im_InputMethodHighlight } from 'java.awt.im';
import { TextAttribute as java_awt_font_TextAttribute } from 'java.awt.font';
import { SelectiveAWTEventListener as java_awt_Toolkit_SelectiveAWTEventListener } from 'java.awt.Toolkit';

  export class Toolkit extends java_lang_Object {
static toolkit: java_awt_Toolkit;
static atNames: string;
static resources: java_util_ResourceBundle;
static platformResources: java_util_ResourceBundle;
static loaded: boolean;
desktopProperties: java_util_Map<string, java_lang_Object>;
desktopPropsSupport: java_beans_PropertyChangeSupport;
static LONG_BITS: number;
calls: number[];
static enabledOnToolkitMask: number;
eventListener: java_awt_event_AWTEventListener;
listener2SelectiveListener: java_util_WeakHashMap<java_awt_event_AWTEventListener, java_awt_Toolkit_SelectiveAWTEventListener>;
static $assertionsDisabled: boolean;
static property: string;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
screenSize: java_awt_Dimension;
screenResolution: number;
fontList: string[];
image: java_awt_Image;
image: java_awt_Image;
printJob: java_awt_PrintJob;
printJob: java_awt_PrintJob;
systemClipboard: java_awt_datatransfer_Clipboard;
systemSelection: java_awt_datatransfer_Clipboard;
menuShortcutKeyMask: number;
menuShortcutKeyMaskEx: number;
lockingKeyState: boolean;
bestCursorSize: java_awt_Dimension;
maximumCursorColors: number;
systemEventQueue: java_awt_EventQueue;
desktopProperty: java_lang_Object;
aWTEventListeners: java_awt_event_AWTEventListener[];
aWTEventListeners: java_awt_event_AWTEventListener[];
colorModel: java_awt_image_ColorModel;
static defaultToolkit: java_awt_Toolkit;
screenInsets: java_awt_Insets;
fontMetrics: java_awt_FontMetrics;
static getProperty(arg0: string, arg1: string): string;
sync(): void;
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
setDynamicLayout(arg0: boolean): void;
isDynamicLayoutActive(): boolean;
getScreenSize(): java_awt_Dimension;
getScreenResolution(): number;
getFontList(): string[];
getImage(arg0: string): java_awt_Image;
getImage(arg0: java_net_URL): java_awt_Image;
getPrintJob(arg0: java_awt_Frame, arg1: string, arg2: java_awt_JobAttributes, arg3: java_awt_PageAttributes): java_awt_PrintJob;
getPrintJob(arg0: java_awt_Frame, arg1: string, arg2: java_util_Properties): java_awt_PrintJob;
getSystemClipboard(): java_awt_datatransfer_Clipboard;
getSystemSelection(): java_awt_datatransfer_Clipboard;
getMenuShortcutKeyMask(): number;
getMenuShortcutKeyMaskEx(): number;
getLockingKeyState(arg0: number): boolean;
setLockingKeyState(arg0: number, arg1: boolean): void;
createCustomCursor(arg0: java_awt_Image, arg1: java_awt_Point, arg2: string): java_awt_Cursor;
getBestCursorSize(arg0: number, arg1: number): java_awt_Dimension;
getMaximumCursorColors(): number;
isFrameStateSupported(arg0: number): boolean;
getSystemEventQueue(): java_awt_EventQueue;
createDragGestureRecognizer<T extends java_awt_dnd_DragGestureRecognizer>(arg0: java_lang_Class<T>, arg1: java_awt_dnd_DragSource, arg2: java_awt_Component, arg3: number, arg4: java_awt_dnd_DragGestureListener): T;
getDesktopProperty(arg0: string): java_lang_Object;
isModalityTypeSupported(arg0: java_awt_Dialog_ModalityType): boolean;
addAWTEventListener(arg0: java_awt_event_AWTEventListener, arg1: number): void;
removeAWTEventListener(arg0: java_awt_event_AWTEventListener): void;
getAWTEventListeners(): java_awt_event_AWTEventListener[];
getAWTEventListeners(arg0: number): java_awt_event_AWTEventListener[];
areExtraMouseButtonsEnabled(): boolean;
getColorModel(): java_awt_image_ColorModel;
static getDefaultToolkit(): java_awt_Toolkit;
createImage(arg0: string): java_awt_Image;
createImage(arg0: number[]): java_awt_Image;
createImage(arg0: number[], arg1: number, arg2: number): java_awt_Image;
createImage(arg0: java_net_URL): java_awt_Image;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
isAlwaysOnTopSupported(): boolean;
getScreenInsets(arg0: java_awt_GraphicsConfiguration): java_awt_Insets;
isModalExclusionTypeSupported(arg0: java_awt_Dialog_ModalExclusionType): boolean;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
mapInputMethodHighlight(arg0: java_awt_im_InputMethodHighlight): java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
beep(): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { MenuComponent as java_awt_MenuComponent, Shape as java_awt_Shape, Image as java_awt_Image, MenuBar as java_awt_MenuBar, Rectangle as java_awt_Rectangle, Frame as java_awt_Frame, Color as java_awt_Color, Component as java_awt_Component, Graphics as java_awt_Graphics, Font as java_awt_Font, Dimension as java_awt_Dimension, Container as java_awt_Container, LayoutManager as java_awt_LayoutManager, FocusTraversalPolicy as java_awt_FocusTraversalPolicy, ComponentOrientation as java_awt_ComponentOrientation, Insets as java_awt_Insets, Event as java_awt_Event, Point as java_awt_Point, AWTKeyStroke as java_awt_AWTKeyStroke, PopupMenu as java_awt_PopupMenu, ImageCapabilities as java_awt_ImageCapabilities, FontMetrics as java_awt_FontMetrics, GraphicsConfiguration as java_awt_GraphicsConfiguration, AWTEvent as java_awt_AWTEvent, Cursor as java_awt_Cursor, Window as java_awt_Window, MenuContainer as java_awt_MenuContainer } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { ContainerListener as java_awt_event_ContainerListener, MouseListener as java_awt_event_MouseListener, MouseMotionListener as java_awt_event_MouseMotionListener, MouseWheelListener as java_awt_event_MouseWheelListener, InputMethodListener as java_awt_event_InputMethodListener, ComponentListener as java_awt_event_ComponentListener, FocusListener as java_awt_event_FocusListener, HierarchyListener as java_awt_event_HierarchyListener, HierarchyBoundsListener as java_awt_event_HierarchyBoundsListener, KeyListener as java_awt_event_KeyListener } from 'java.awt.event';
import { Set as java_util_Set, Locale as java_util_Locale, Vector as java_util_Vector } from 'java.util';
import { InputMethodRequests as java_awt_im_InputMethodRequests } from 'java.awt.im';
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';
import { ColorModel as java_awt_image_ColorModel, ImageProducer as java_awt_image_ImageProducer, VolatileImage as java_awt_image_VolatileImage, ImageObserver as java_awt_image_ImageObserver } from 'java.awt.image';
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';

  export class Frame extends java_awt_Window implements java_awt_MenuContainer {
static DEFAULT_CURSOR: number;
static CROSSHAIR_CURSOR: number;
static TEXT_CURSOR: number;
static WAIT_CURSOR: number;
static SW_RESIZE_CURSOR: number;
static SE_RESIZE_CURSOR: number;
static NW_RESIZE_CURSOR: number;
static NE_RESIZE_CURSOR: number;
static N_RESIZE_CURSOR: number;
static S_RESIZE_CURSOR: number;
static W_RESIZE_CURSOR: number;
static E_RESIZE_CURSOR: number;
static HAND_CURSOR: number;
static MOVE_CURSOR: number;
static NORMAL: number;
static ICONIFIED: number;
static MAXIMIZED_HORIZ: number;
static MAXIMIZED_VERT: number;
static MAXIMIZED_BOTH: number;
maximizedBounds: java_awt_Rectangle;
title: string;
menuBar: java_awt_MenuBar;
resizable: boolean;
undecorated: boolean;
mbManagement: boolean;
state: number;
ownedWindows: java_util_Vector<java_awt_Window>;
static base: string;
static nameCounter: number;
static serialVersionUID: number;
frameSerializedDataVersion: number;
state: number;
iconImage: java_awt_Image;
menuBar: java_awt_MenuBar;
extendedState: number;
maximizedBounds: java_awt_Rectangle;
cursorType: number;
static frames: java_awt_Frame[];
accessibleContext: javax_accessibility_AccessibleContext;
title: string;
preferredSize: java_awt_Dimension;
minimumSize: java_awt_Dimension;
focusTraversalPolicy: java_awt_FocusTraversalPolicy;
componentCount: number;
insets: java_awt_Insets;
componentZOrder: number;
maximumSize: java_awt_Dimension;
alignmentX: number;
alignmentY: number;
containerListeners: java_awt_event_ContainerListener[];
componentAt: java_awt_Component;
componentAt: java_awt_Component;
mousePosition: java_awt_Point;
layout: java_awt_LayoutManager;
component: java_awt_Component;
components: java_awt_Component[];
name: string;
parent: java_awt_Container;
location: java_awt_Point;
location: java_awt_Point;
size: java_awt_Dimension;
size: java_awt_Dimension;
mouseListeners: java_awt_event_MouseListener[];
mouseMotionListeners: java_awt_event_MouseMotionListener[];
mouseWheelListeners: java_awt_event_MouseWheelListener[];
inputMethodListeners: java_awt_event_InputMethodListener[];
inputMethodRequests: java_awt_im_InputMethodRequests;
focusTraversalKeysEnabled: boolean;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
componentOrientation: java_awt_ComponentOrientation;
y: number;
x: number;
colorModel: java_awt_image_ColorModel;
graphics: java_awt_Graphics;
treeLock: java_lang_Object;
locationOnScreen: java_awt_Point;
mousePosition: java_awt_Point;
dropTarget: java_awt_dnd_DropTarget;
baseline: number;
baselineResizeBehavior: java_awt_Component_BaselineResizeBehavior;
ignoreRepaint: boolean;
componentListeners: java_awt_event_ComponentListener[];
focusListeners: java_awt_event_FocusListener[];
hierarchyListeners: java_awt_event_HierarchyListener[];
hierarchyBoundsListeners: java_awt_event_HierarchyBoundsListener[];
keyListeners: java_awt_event_KeyListener[];
fontMetrics: java_awt_FontMetrics;
foreground: java_awt_Color;
graphicsConfiguration: java_awt_GraphicsConfiguration;
cursor: java_awt_Cursor;
width: number;
height: number;
font: java_awt_Font;
bounds: java_awt_Rectangle;
bounds: java_awt_Rectangle;
class: java_lang_Class<java_lang_Object>;
remove(arg0: java_awt_MenuComponent): void;
getState(): number;
setState(arg0: number): void;
setShape(arg0: java_awt_Shape): void;
getIconImage(): java_awt_Image;
getMenuBar(): java_awt_MenuBar;
setMenuBar(arg0: java_awt_MenuBar): void;
isResizable(): boolean;
setResizable(arg0: boolean): void;
setExtendedState(arg0: number): void;
getExtendedState(): number;
setMaximizedBounds(arg0: java_awt_Rectangle): void;
getMaximizedBounds(): java_awt_Rectangle;
setUndecorated(arg0: boolean): void;
isUndecorated(): boolean;
getCursorType(): number;
static getFrames(): java_awt_Frame[];
setIconImage(arg0: java_awt_Image): void;
addNotify(): void;
removeNotify(): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
setBackground(arg0: java_awt_Color): void;
setOpacity(arg0: number): void;
getTitle(): string;
setCursor(arg0: number): void;
setTitle(arg0: string): void;
add(arg0: java_awt_Component): java_awt_Component;
add(arg0: string, arg1: java_awt_Component): java_awt_Component;
add(arg0: java_awt_Component, arg1: java_lang_Object): void;
add(arg0: java_awt_Component, arg1: number): java_awt_Component;
add(arg0: java_awt_Component, arg1: java_lang_Object, arg2: number): void;
remove(arg0: java_awt_Component): void;
remove(arg0: number): void;
update(arg0: java_awt_Graphics): void;
list(arg0: java_io_PrintWriter, arg1: number): void;
list(arg0: java_io_PrintStream, arg1: number): void;
validate(): void;
print(arg0: java_awt_Graphics): void;
removeAll(): void;
setFont(arg0: java_awt_Font): void;
layout(): void;
minimumSize(): java_awt_Dimension;
isFocusCycleRoot(arg0: java_awt_Container): boolean;
setLayout(arg0: java_awt_LayoutManager): void;
getPreferredSize(): java_awt_Dimension;
getMinimumSize(): java_awt_Dimension;
getFocusTraversalPolicy(): java_awt_FocusTraversalPolicy;
applyComponentOrientation(arg0: java_awt_ComponentOrientation): void;
getComponentCount(): number;
countComponents(): number;
getInsets(): java_awt_Insets;
insets(): java_awt_Insets;
setComponentZOrder(arg0: java_awt_Component, arg1: number): void;
getComponentZOrder(arg0: java_awt_Component): number;
doLayout(): void;
preferredSize(): java_awt_Dimension;
getMaximumSize(): java_awt_Dimension;
getAlignmentX(): number;
getAlignmentY(): number;
paintComponents(arg0: java_awt_Graphics): void;
printComponents(arg0: java_awt_Graphics): void;
addContainerListener(arg0: java_awt_event_ContainerListener): void;
removeContainerListener(arg0: java_awt_event_ContainerListener): void;
getContainerListeners(): java_awt_event_ContainerListener[];
deliverEvent(arg0: java_awt_Event): void;
getComponentAt(arg0: number, arg1: number): java_awt_Component;
getComponentAt(arg0: java_awt_Point): java_awt_Component;
getMousePosition(arg0: boolean): java_awt_Point;
findComponentAt(arg0: number, arg1: number): java_awt_Component;
findComponentAt(arg0: java_awt_Point): java_awt_Component;
isAncestorOf(arg0: java_awt_Component): boolean;
setFocusTraversalKeys(arg0: number, arg1: java_util_Set<java_awt_AWTKeyStroke>): void;
areFocusTraversalKeysSet(arg0: number): boolean;
setFocusTraversalPolicy(arg0: java_awt_FocusTraversalPolicy): void;
isFocusTraversalPolicySet(): boolean;
setFocusTraversalPolicyProvider(arg0: boolean): void;
isFocusTraversalPolicyProvider(): boolean;
transferFocusDownCycle(): void;
getLayout(): java_awt_LayoutManager;
getComponent(arg0: number): java_awt_Component;
locate(arg0: number, arg1: number): java_awt_Component;
getComponents(): java_awt_Component[];
invalidate(): void;
getName(): string;
add(arg0: java_awt_PopupMenu): void;
toString(): string;
contains(arg0: number, arg1: number): boolean;
contains(arg0: java_awt_Point): boolean;
list(): void;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintWriter): void;
size(): java_awt_Dimension;
getParent(): java_awt_Container;
getLocation(): java_awt_Point;
getLocation(arg0: java_awt_Point): java_awt_Point;
setName(arg0: string): void;
action(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
location(): java_awt_Point;
getSize(arg0: java_awt_Dimension): java_awt_Dimension;
getSize(): java_awt_Dimension;
resize(arg0: java_awt_Dimension): void;
resize(arg0: number, arg1: number): void;
move(arg0: number, arg1: number): void;
setLocale(arg0: java_util_Locale): void;
isEnabled(): boolean;
bounds(): java_awt_Rectangle;
enable(arg0: boolean): void;
enable(): void;
isValid(): boolean;
show(arg0: boolean): void;
getMouseListeners(): java_awt_event_MouseListener[];
addMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
removeMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
getMouseMotionListeners(): java_awt_event_MouseMotionListener[];
addMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
removeMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
getMouseWheelListeners(): java_awt_event_MouseWheelListener[];
addInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
removeInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
getInputMethodListeners(): java_awt_event_InputMethodListener[];
getInputMethodRequests(): java_awt_im_InputMethodRequests;
mouseDown(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseDrag(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseUp(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseMove(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseEnter(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseExit(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
keyDown(arg0: java_awt_Event, arg1: number): boolean;
keyUp(arg0: java_awt_Event, arg1: number): boolean;
gotFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
lostFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
isFocusTraversable(): boolean;
setFocusable(arg0: boolean): void;
setFocusTraversalKeysEnabled(arg0: boolean): void;
getFocusTraversalKeysEnabled(): boolean;
requestFocusInWindow(): boolean;
requestFocusInWindow(arg0: java_awt_event_FocusEvent_Cause): boolean;
nextFocus(): void;
transferFocusUpCycle(): void;
hasFocus(): boolean;
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
setComponentOrientation(arg0: java_awt_ComponentOrientation): void;
getComponentOrientation(): java_awt_ComponentOrientation;
setMixingCutoutShape(arg0: java_awt_Shape): void;
getY(): number;
getX(): number;
getColorModel(): java_awt_image_ColorModel;
getGraphics(): java_awt_Graphics;
createImage(arg0: number, arg1: number): java_awt_Image;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
firePropertyChange(arg0: string, arg1: string, arg2: string): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
getTreeLock(): java_lang_Object;
isMinimumSizeSet(): boolean;
isDisplayable(): boolean;
requestFocus(): void;
requestFocus(arg0: java_awt_event_FocusEvent_Cause): void;
getLocationOnScreen(): java_awt_Point;
getMousePosition(): java_awt_Point;
isLightweight(): boolean;
isFocusable(): boolean;
isFocusOwner(): boolean;
transferFocus(): void;
isPreferredSizeSet(): boolean;
isMaximumSizeSet(): boolean;
transferFocusBackward(): void;
setDropTarget(arg0: java_awt_dnd_DropTarget): void;
getDropTarget(): java_awt_dnd_DropTarget;
isDoubleBuffered(): boolean;
enableInputMethods(arg0: boolean): void;
isForegroundSet(): boolean;
isBackgroundSet(): boolean;
isFontSet(): boolean;
setPreferredSize(arg0: java_awt_Dimension): void;
setMaximumSize(arg0: java_awt_Dimension): void;
getBaseline(arg0: number, arg1: number): number;
getBaselineResizeBehavior(): java_awt_Component_BaselineResizeBehavior;
revalidate(): void;
isCursorSet(): boolean;
paintAll(arg0: java_awt_Graphics): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
repaint(arg0: number): void;
repaint(): void;
printAll(arg0: java_awt_Graphics): void;
createVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
createVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
prepareImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): boolean;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
checkImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): number;
setIgnoreRepaint(arg0: boolean): void;
getIgnoreRepaint(): boolean;
addComponentListener(arg0: java_awt_event_ComponentListener): void;
removeComponentListener(arg0: java_awt_event_ComponentListener): void;
getComponentListeners(): java_awt_event_ComponentListener[];
addFocusListener(arg0: java_awt_event_FocusListener): void;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
getFocusListeners(): java_awt_event_FocusListener[];
addHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
removeHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
getHierarchyListeners(): java_awt_event_HierarchyListener[];
addHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
removeHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
getHierarchyBoundsListeners(): java_awt_event_HierarchyBoundsListener[];
addKeyListener(arg0: java_awt_event_KeyListener): void;
removeKeyListener(arg0: java_awt_event_KeyListener): void;
getKeyListeners(): java_awt_event_KeyListener[];
addMouseListener(arg0: java_awt_event_MouseListener): void;
removeMouseListener(arg0: java_awt_event_MouseListener): void;
inside(arg0: number, arg1: number): boolean;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getForeground(): java_awt_Color;
setForeground(arg0: java_awt_Color): void;
getGraphicsConfiguration(): java_awt_GraphicsConfiguration;
setEnabled(arg0: boolean): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;
handleEvent(arg0: java_awt_Event): boolean;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
getCursor(): java_awt_Cursor;
disable(): void;
isVisible(): boolean;
getWidth(): number;
getHeight(): number;
getFont(): java_awt_Font;
getBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getBounds(): java_awt_Rectangle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: java_awt_GraphicsConfiguration);
constructor(arg0: string);
constructor(arg0: java_awt_GraphicsConfiguration);
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { MenuContainer as java_awt_MenuContainer, Font as java_awt_Font, Event as java_awt_Event, AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { MenuComponentPeer as java_awt_peer_MenuComponentPeer } from 'java.awt.peer';
import { AppContext as sun_awt_AppContext } from 'sun.awt';
import { AccessControlContext as java_security_AccessControlContext } from 'java.security';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class MenuComponent extends java_lang_Object implements java_io_Serializable {
peer: java_awt_peer_MenuComponentPeer;
parent: java_awt_MenuContainer;
appContext: sun_awt_AppContext;
font: java_awt_Font;
name: string;
nameExplicitlySet: boolean;
newEventsOnly: boolean;
acc: java_security_AccessControlContext;
static actionListenerK: string;
static itemListenerK: string;
static serialVersionUID: number;
accessibleContext: javax_accessibility_AccessibleContext;
name: string;
parent: java_awt_MenuContainer;
accessibleContext: javax_accessibility_AccessibleContext;
font: java_awt_Font;
getName(): string;
toString(): string;
getParent(): java_awt_MenuContainer;
setName(arg0: string): void;
setFont(arg0: java_awt_Font): void;
removeNotify(): void;
postEvent(arg0: java_awt_Event): boolean;
getAccessibleContext(): javax_accessibility_AccessibleContext;
dispatchEvent(arg0: java_awt_AWTEvent): void;
getFont(): java_awt_Font;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { MenuComponent as java_awt_MenuComponent, Event as java_awt_Event, Font as java_awt_Font } from 'java.awt';

  export class MenuContainer {
font: java_awt_Font;
remove(arg0: java_awt_MenuComponent): void;
postEvent(arg0: java_awt_Event): boolean;
getFont(): java_awt_Font;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object } from 'java.lang';
import { Event as java_awt_Event } from 'java.awt';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Event extends java_lang_Object implements java_io_Serializable {
data: number;
static SHIFT_MASK: number;
static CTRL_MASK: number;
static META_MASK: number;
static ALT_MASK: number;
static HOME: number;
static END: number;
static PGUP: number;
static PGDN: number;
static UP: number;
static DOWN: number;
static LEFT: number;
static RIGHT: number;
static F1: number;
static F2: number;
static F3: number;
static F4: number;
static F5: number;
static F6: number;
static F7: number;
static F8: number;
static F9: number;
static F10: number;
static F11: number;
static F12: number;
static PRINT_SCREEN: number;
static SCROLL_LOCK: number;
static CAPS_LOCK: number;
static NUM_LOCK: number;
static PAUSE: number;
static INSERT: number;
static ENTER: number;
static BACK_SPACE: number;
static TAB: number;
static ESCAPE: number;
static DELETE: number;
static WINDOW_EVENT: number;
static WINDOW_DESTROY: number;
static WINDOW_EXPOSE: number;
static WINDOW_ICONIFY: number;
static WINDOW_DEICONIFY: number;
static WINDOW_MOVED: number;
static KEY_EVENT: number;
static KEY_PRESS: number;
static KEY_RELEASE: number;
static KEY_ACTION: number;
static KEY_ACTION_RELEASE: number;
static MOUSE_EVENT: number;
static MOUSE_DOWN: number;
static MOUSE_UP: number;
static MOUSE_MOVE: number;
static MOUSE_ENTER: number;
static MOUSE_EXIT: number;
static MOUSE_DRAG: number;
static SCROLL_EVENT: number;
static SCROLL_LINE_UP: number;
static SCROLL_LINE_DOWN: number;
static SCROLL_PAGE_UP: number;
static SCROLL_PAGE_DOWN: number;
static SCROLL_ABSOLUTE: number;
static SCROLL_BEGIN: number;
static SCROLL_END: number;
static LIST_EVENT: number;
static LIST_SELECT: number;
static LIST_DESELECT: number;
static MISC_EVENT: number;
static ACTION_EVENT: number;
static LOAD_FILE: number;
static SAVE_FILE: number;
static GOT_FOCUS: number;
static LOST_FOCUS: number;
target: java_lang_Object;
when: number;
id: number;
x: number;
y: number;
key: number;
modifiers: number;
clickCount: number;
arg: java_lang_Object;
evt: java_awt_Event;
static actionKeyCodes: int[][];
consumed: boolean;
static serialVersionUID: number;
toString(): string;
shiftDown(): boolean;
controlDown(): boolean;
metaDown(): boolean;
translate(arg0: number, arg1: number): void;
constructor(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
constructor(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_lang_Object);
constructor(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { FocusEvent as java_awt_event_FocusEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class FocusListener implements java_util_EventListener {

focusGained(arg0: java_awt_event_FocusEvent): void;
focusLost(arg0: java_awt_event_FocusEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';

  export class FocusEvent extends java_awt_event_ComponentEvent {
static FOCUS_FIRST: number;
static FOCUS_LAST: number;
static FOCUS_GAINED: number;
static FOCUS_LOST: number;
cause: java_awt_event_FocusEvent_Cause;
temporary: boolean;
opposite: java_awt_Component;
static serialVersionUID: number;
cause: java_awt_event_FocusEvent_Cause;
oppositeComponent: java_awt_Component;
iD: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getCause(): java_awt_event_FocusEvent_Cause;
paramString(): string;
isTemporary(): boolean;
getOppositeComponent(): java_awt_Component;
toString(): string;
getID(): number;
setSource(arg0: java_lang_Object): void;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Component, arg1: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: boolean);
constructor(arg0: java_awt_Component, arg1: number, arg2: boolean, arg3: java_awt_Component, arg4: java_awt_event_FocusEvent_Cause);
constructor(arg0: java_awt_Component, arg1: number, arg2: boolean, arg3: java_awt_Component);
  }
}//@ts-nocheck

declare module 'java.awt.event.FocusEvent' {
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Cause extends java_lang_Enum<java_awt_event_FocusEvent_Cause> {
static UNKNOWN: java_awt_event_FocusEvent_Cause;
static MOUSE_EVENT: java_awt_event_FocusEvent_Cause;
static TRAVERSAL: java_awt_event_FocusEvent_Cause;
static TRAVERSAL_UP: java_awt_event_FocusEvent_Cause;
static TRAVERSAL_DOWN: java_awt_event_FocusEvent_Cause;
static TRAVERSAL_FORWARD: java_awt_event_FocusEvent_Cause;
static TRAVERSAL_BACKWARD: java_awt_event_FocusEvent_Cause;
static ROLLBACK: java_awt_event_FocusEvent_Cause;
static UNEXPECTED: java_awt_event_FocusEvent_Cause;
static ACTIVATION: java_awt_event_FocusEvent_Cause;
static CLEAR_GLOBAL_FOCUS_OWNER: java_awt_event_FocusEvent_Cause;
static $VALUES: java_awt_event_FocusEvent_Cause[];
class: java_lang_Class<java_lang_Object>;
static values(): java_awt_event_FocusEvent_Cause[];
static valueOf(arg0: string): java_awt_event_FocusEvent_Cause;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { PopupMenu as java_awt_PopupMenu, MenuComponent as java_awt_MenuComponent, Graphics as java_awt_Graphics, Point as java_awt_Point, Dimension as java_awt_Dimension, Container as java_awt_Container, Event as java_awt_Event, Rectangle as java_awt_Rectangle, Font as java_awt_Font, ComponentOrientation as java_awt_ComponentOrientation, Shape as java_awt_Shape, Image as java_awt_Image, Toolkit as java_awt_Toolkit, AWTKeyStroke as java_awt_AWTKeyStroke, Component as java_awt_Component, ImageCapabilities as java_awt_ImageCapabilities, FontMetrics as java_awt_FontMetrics, Color as java_awt_Color, GraphicsConfiguration as java_awt_GraphicsConfiguration, AWTEvent as java_awt_AWTEvent, Cursor as java_awt_Cursor, MenuContainer as java_awt_MenuContainer } from 'java.awt';
import { PrintStream as java_io_PrintStream, PrintWriter as java_io_PrintWriter, Serializable as java_io_Serializable } from 'java.io';
import { Object as java_lang_Object, Class as java_lang_Class, Boolean as java_lang_Boolean } from 'java.lang';
import { Locale as java_util_Locale, Set as java_util_Set, EventListener as java_util_EventListener, Vector as java_util_Vector, Map as java_util_Map } from 'java.util';
import { MouseListener as java_awt_event_MouseListener, MouseMotionListener as java_awt_event_MouseMotionListener, MouseWheelListener as java_awt_event_MouseWheelListener, InputMethodListener as java_awt_event_InputMethodListener, ComponentListener as java_awt_event_ComponentListener, FocusListener as java_awt_event_FocusListener, HierarchyListener as java_awt_event_HierarchyListener, HierarchyBoundsListener as java_awt_event_HierarchyBoundsListener, KeyListener as java_awt_event_KeyListener } from 'java.awt.event';
import { InputMethodRequests as java_awt_im_InputMethodRequests, InputContext as java_awt_im_InputContext } from 'java.awt.im';
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { PropertyChangeListener as java_beans_PropertyChangeListener, PropertyChangeSupport as java_beans_PropertyChangeSupport } from 'java.beans';
import { ColorModel as java_awt_image_ColorModel, ImageProducer as java_awt_image_ImageProducer, VolatileImage as java_awt_image_VolatileImage, ImageObserver as java_awt_image_ImageObserver, BufferStrategy as java_awt_image_BufferStrategy } from 'java.awt.image';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { ComponentPeer as java_awt_peer_ComponentPeer } from 'java.awt.peer';
import { AppContext as sun_awt_AppContext, EventQueueItem as sun_awt_EventQueueItem, RequestFocusController as sun_awt_RequestFocusController } from 'sun.awt';
import { AccessControlContext as java_security_AccessControlContext } from 'java.security';
import { Region as sun_java2d_pipe_Region } from 'sun.java2d.pipe';

  export class Component extends java_lang_Object implements java_awt_image_ImageObserver, java_awt_MenuContainer, java_io_Serializable {
static log: sun_util_logging_PlatformLogger;
static eventLog: sun_util_logging_PlatformLogger;
static focusLog: sun_util_logging_PlatformLogger;
static mixingLog: sun_util_logging_PlatformLogger;
peer: java_awt_peer_ComponentPeer;
parent: java_awt_Container;
appContext: sun_awt_AppContext;
x: number;
y: number;
width: number;
height: number;
foreground: java_awt_Color;
background: java_awt_Color;
font: java_awt_Font;
peerFont: java_awt_Font;
cursor: java_awt_Cursor;
locale: java_util_Locale;
graphicsConfig: java_awt_GraphicsConfiguration;
bufferStrategy: java_awt_image_BufferStrategy;
ignoreRepaint: boolean;
visible: boolean;
enabled: boolean;
valid: boolean;
dropTarget: java_awt_dnd_DropTarget;
popups: java_util_Vector<java_awt_PopupMenu>;
name: string;
nameExplicitlySet: boolean;
focusable: boolean;
static FOCUS_TRAVERSABLE_UNKNOWN: number;
static FOCUS_TRAVERSABLE_DEFAULT: number;
static FOCUS_TRAVERSABLE_SET: number;
isFocusTraversableOverridden: number;
focusTraversalKeys: java_util_Set<java_awt_AWTKeyStroke>[];
static focusTraversalKeyPropertyNames: string[];
focusTraversalKeysEnabled: boolean;
static LOCK: java_lang_Object;
acc: java_security_AccessControlContext;
minSize: java_awt_Dimension;
minSizeSet: boolean;
prefSize: java_awt_Dimension;
prefSizeSet: boolean;
maxSize: java_awt_Dimension;
maxSizeSet: boolean;
componentOrientation: java_awt_ComponentOrientation;
newEventsOnly: boolean;
componentListener: java_awt_event_ComponentListener;
focusListener: java_awt_event_FocusListener;
hierarchyListener: java_awt_event_HierarchyListener;
hierarchyBoundsListener: java_awt_event_HierarchyBoundsListener;
keyListener: java_awt_event_KeyListener;
mouseListener: java_awt_event_MouseListener;
mouseMotionListener: java_awt_event_MouseMotionListener;
mouseWheelListener: java_awt_event_MouseWheelListener;
inputMethodListener: java_awt_event_InputMethodListener;
static actionListenerK: string;
static adjustmentListenerK: string;
static componentListenerK: string;
static containerListenerK: string;
static focusListenerK: string;
static itemListenerK: string;
static keyListenerK: string;
static mouseListenerK: string;
static mouseMotionListenerK: string;
static mouseWheelListenerK: string;
static textListenerK: string;
static ownedWindowK: string;
static windowListenerK: string;
static inputMethodListenerK: string;
static hierarchyListenerK: string;
static hierarchyBoundsListenerK: string;
static windowStateListenerK: string;
static windowFocusListenerK: string;
eventMask: number;
static isInc: boolean;
static incRate: number;
static TOP_ALIGNMENT: number;
static CENTER_ALIGNMENT: number;
static BOTTOM_ALIGNMENT: number;
static LEFT_ALIGNMENT: number;
static RIGHT_ALIGNMENT: number;
static serialVersionUID: number;
changeSupport: java_beans_PropertyChangeSupport;
objectLock: java_lang_Object;
isPacked: boolean;
boundsOp: number;
compoundShape: sun_java2d_pipe_Region;
mixingCutoutRegion: sun_java2d_pipe_Region;
isAddNotifyComplete: boolean;
backgroundEraseDisabled: boolean;
eventCache: sun_awt_EventQueueItem[];
coalescingEnabled: boolean;
static coalesceMap: java_util_Map<java_lang_Class<java_lang_Object>, java_lang_Boolean>;
static coalesceEventsParams: java_lang_Class<java_lang_Object>[];
static requestFocusController: sun_awt_RequestFocusController;
autoFocusTransferOnDisposal: boolean;
componentSerializedDataVersion: number;
accessibleContext: javax_accessibility_AccessibleContext;
static $assertionsDisabled: boolean;
name: string;
parent: java_awt_Container;
location: java_awt_Point;
location: java_awt_Point;
size: java_awt_Dimension;
size: java_awt_Dimension;
locale: java_util_Locale;
mouseListeners: java_awt_event_MouseListener[];
mouseMotionListeners: java_awt_event_MouseMotionListener[];
mouseWheelListeners: java_awt_event_MouseWheelListener[];
inputMethodListeners: java_awt_event_InputMethodListener[];
inputMethodRequests: java_awt_im_InputMethodRequests;
focusTraversalKeysEnabled: boolean;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
componentOrientation: java_awt_ComponentOrientation;
y: number;
x: number;
colorModel: java_awt_image_ColorModel;
graphics: java_awt_Graphics;
toolkit: java_awt_Toolkit;
inputContext: java_awt_im_InputContext;
focusTraversalKeys: java_util_Set<java_awt_AWTKeyStroke>;
focusCycleRootAncestor: java_awt_Container;
accessibleContext: javax_accessibility_AccessibleContext;
treeLock: java_lang_Object;
preferredSize: java_awt_Dimension;
minimumSize: java_awt_Dimension;
locationOnScreen: java_awt_Point;
maximumSize: java_awt_Dimension;
alignmentX: number;
alignmentY: number;
componentAt: java_awt_Component;
componentAt: java_awt_Component;
mousePosition: java_awt_Point;
dropTarget: java_awt_dnd_DropTarget;
baseline: number;
baselineResizeBehavior: java_awt_Component_BaselineResizeBehavior;
ignoreRepaint: boolean;
componentListeners: java_awt_event_ComponentListener[];
focusListeners: java_awt_event_FocusListener[];
hierarchyListeners: java_awt_event_HierarchyListener[];
hierarchyBoundsListeners: java_awt_event_HierarchyBoundsListener[];
keyListeners: java_awt_event_KeyListener[];
fontMetrics: java_awt_FontMetrics;
foreground: java_awt_Color;
background: java_awt_Color;
graphicsConfiguration: java_awt_GraphicsConfiguration;
listeners: T[];
cursor: java_awt_Cursor;
width: number;
height: number;
font: java_awt_Font;
bounds: java_awt_Rectangle;
bounds: java_awt_Rectangle;
getName(): string;
add(arg0: java_awt_PopupMenu): void;
remove(arg0: java_awt_MenuComponent): void;
toString(): string;
update(arg0: java_awt_Graphics): void;
contains(arg0: number, arg1: number): boolean;
contains(arg0: java_awt_Point): boolean;
list(arg0: java_io_PrintStream, arg1: number): void;
list(): void;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintWriter): void;
list(arg0: java_io_PrintWriter, arg1: number): void;
size(): java_awt_Dimension;
validate(): void;
getParent(): java_awt_Container;
getLocation(): java_awt_Point;
getLocation(arg0: java_awt_Point): java_awt_Point;
setName(arg0: string): void;
print(arg0: java_awt_Graphics): void;
action(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
location(): java_awt_Point;
getSize(arg0: java_awt_Dimension): java_awt_Dimension;
getSize(): java_awt_Dimension;
isOpaque(): boolean;
resize(arg0: java_awt_Dimension): void;
resize(arg0: number, arg1: number): void;
setSize(arg0: number, arg1: number): void;
setSize(arg0: java_awt_Dimension): void;
move(arg0: number, arg1: number): void;
setLocale(arg0: java_util_Locale): void;
getLocale(): java_util_Locale;
isEnabled(): boolean;
bounds(): java_awt_Rectangle;
enable(arg0: boolean): void;
enable(): void;
isValid(): boolean;
show(arg0: boolean): void;
show(): void;
reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFont(arg0: java_awt_Font): void;
getMouseListeners(): java_awt_event_MouseListener[];
addMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
removeMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
getMouseMotionListeners(): java_awt_event_MouseMotionListener[];
addMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
removeMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
getMouseWheelListeners(): java_awt_event_MouseWheelListener[];
addInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
removeInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
getInputMethodListeners(): java_awt_event_InputMethodListener[];
getInputMethodRequests(): java_awt_im_InputMethodRequests;
mouseDown(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseDrag(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseUp(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseMove(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseEnter(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseExit(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
keyDown(arg0: java_awt_Event, arg1: number): boolean;
keyUp(arg0: java_awt_Event, arg1: number): boolean;
gotFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
lostFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
isFocusTraversable(): boolean;
setFocusable(arg0: boolean): void;
setFocusTraversalKeysEnabled(arg0: boolean): void;
getFocusTraversalKeysEnabled(): boolean;
requestFocusInWindow(): boolean;
requestFocusInWindow(arg0: java_awt_event_FocusEvent_Cause): boolean;
nextFocus(): void;
transferFocusUpCycle(): void;
hasFocus(): boolean;
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
setComponentOrientation(arg0: java_awt_ComponentOrientation): void;
getComponentOrientation(): java_awt_ComponentOrientation;
setMixingCutoutShape(arg0: java_awt_Shape): void;
getY(): number;
getX(): number;
layout(): void;
getColorModel(): java_awt_image_ColorModel;
getGraphics(): java_awt_Graphics;
createImage(arg0: number, arg1: number): java_awt_Image;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
addNotify(): void;
removeNotify(): void;
setMinimumSize(arg0: java_awt_Dimension): void;
minimumSize(): java_awt_Dimension;
getToolkit(): java_awt_Toolkit;
getInputContext(): java_awt_im_InputContext;
getFocusTraversalKeys(arg0: number): java_util_Set<java_awt_AWTKeyStroke>;
isFocusCycleRoot(arg0: java_awt_Container): boolean;
getFocusCycleRootAncestor(): java_awt_Container;
postEvent(arg0: java_awt_Event): boolean;
isShowing(): boolean;
getAccessibleContext(): javax_accessibility_AccessibleContext;
paint(arg0: java_awt_Graphics): void;
firePropertyChange(arg0: string, arg1: string, arg2: string): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
getTreeLock(): java_lang_Object;
getPreferredSize(): java_awt_Dimension;
isMinimumSizeSet(): boolean;
getMinimumSize(): java_awt_Dimension;
isDisplayable(): boolean;
requestFocus(): void;
requestFocus(arg0: java_awt_event_FocusEvent_Cause): void;
applyComponentOrientation(arg0: java_awt_ComponentOrientation): void;
getLocationOnScreen(): java_awt_Point;
doLayout(): void;
preferredSize(): java_awt_Dimension;
getMaximumSize(): java_awt_Dimension;
getAlignmentX(): number;
getAlignmentY(): number;
deliverEvent(arg0: java_awt_Event): void;
getComponentAt(arg0: java_awt_Point): java_awt_Component;
getComponentAt(arg0: number, arg1: number): java_awt_Component;
getMousePosition(): java_awt_Point;
setFocusTraversalKeys(arg0: number, arg1: java_util_Set<java_awt_AWTKeyStroke>): void;
areFocusTraversalKeysSet(arg0: number): boolean;
isLightweight(): boolean;
isFocusable(): boolean;
isFocusOwner(): boolean;
transferFocus(): void;
isPreferredSizeSet(): boolean;
isMaximumSizeSet(): boolean;
transferFocusBackward(): void;
setDropTarget(arg0: java_awt_dnd_DropTarget): void;
getDropTarget(): java_awt_dnd_DropTarget;
isDoubleBuffered(): boolean;
enableInputMethods(arg0: boolean): void;
isForegroundSet(): boolean;
isBackgroundSet(): boolean;
isFontSet(): boolean;
setPreferredSize(arg0: java_awt_Dimension): void;
setMaximumSize(arg0: java_awt_Dimension): void;
getBaseline(arg0: number, arg1: number): number;
getBaselineResizeBehavior(): java_awt_Component_BaselineResizeBehavior;
revalidate(): void;
isCursorSet(): boolean;
paintAll(arg0: java_awt_Graphics): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
repaint(arg0: number): void;
repaint(): void;
printAll(arg0: java_awt_Graphics): void;
createVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
createVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
prepareImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): boolean;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
checkImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): number;
setIgnoreRepaint(arg0: boolean): void;
getIgnoreRepaint(): boolean;
addComponentListener(arg0: java_awt_event_ComponentListener): void;
removeComponentListener(arg0: java_awt_event_ComponentListener): void;
getComponentListeners(): java_awt_event_ComponentListener[];
addFocusListener(arg0: java_awt_event_FocusListener): void;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
getFocusListeners(): java_awt_event_FocusListener[];
addHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
removeHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
getHierarchyListeners(): java_awt_event_HierarchyListener[];
addHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
removeHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
getHierarchyBoundsListeners(): java_awt_event_HierarchyBoundsListener[];
addKeyListener(arg0: java_awt_event_KeyListener): void;
removeKeyListener(arg0: java_awt_event_KeyListener): void;
getKeyListeners(): java_awt_event_KeyListener[];
addMouseListener(arg0: java_awt_event_MouseListener): void;
removeMouseListener(arg0: java_awt_event_MouseListener): void;
setBounds(arg0: java_awt_Rectangle): void;
setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
inside(arg0: number, arg1: number): boolean;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getForeground(): java_awt_Color;
setForeground(arg0: java_awt_Color): void;
getBackground(): java_awt_Color;
setBackground(arg0: java_awt_Color): void;
getGraphicsConfiguration(): java_awt_GraphicsConfiguration;
setEnabled(arg0: boolean): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;
handleEvent(arg0: java_awt_Event): boolean;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
setLocation(arg0: number, arg1: number): void;
setLocation(arg0: java_awt_Point): void;
getCursor(): java_awt_Cursor;
disable(): void;
isVisible(): boolean;
locate(arg0: number, arg1: number): java_awt_Component;
getWidth(): number;
getHeight(): number;
setCursor(arg0: java_awt_Cursor): void;
getFont(): java_awt_Font;
hide(): void;
setVisible(arg0: boolean): void;
invalidate(): void;
getBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getBounds(): java_awt_Rectangle;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { MenuContainer as java_awt_MenuContainer, Component as java_awt_Component, MenuShortcut as java_awt_MenuShortcut, Font as java_awt_Font, Event as java_awt_Event, AWTEvent as java_awt_AWTEvent, Menu as java_awt_Menu } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { ActionListener as java_awt_event_ActionListener } from 'java.awt.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { EventListener as java_util_EventListener } from 'java.util';

  export class PopupMenu extends java_awt_Menu {
static base: string;
static nameCounter: number;
isTrayIconPopup: boolean;
static serialVersionUID: number;
parent: java_awt_MenuContainer;
accessibleContext: javax_accessibility_AccessibleContext;
label: string;
shortcut: java_awt_MenuShortcut;
actionCommand: string;
actionListeners: java_awt_event_ActionListener[];
listeners: T[];
name: string;
font: java_awt_Font;
class: java_lang_Class<java_lang_Object>;
getParent(): java_awt_MenuContainer;
show(arg0: java_awt_Component, arg1: number, arg2: number): void;
addNotify(): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
isEnabled(): boolean;
enable(arg0: boolean): void;
enable(): void;
setLabel(arg0: string): void;
getLabel(): string;
deleteShortcut(): void;
getShortcut(): java_awt_MenuShortcut;
setShortcut(arg0: java_awt_MenuShortcut): void;
setActionCommand(arg0: string): void;
getActionCommand(): string;
addActionListener(arg0: java_awt_event_ActionListener): void;
removeActionListener(arg0: java_awt_event_ActionListener): void;
getActionListeners(): java_awt_event_ActionListener[];
setEnabled(arg0: boolean): void;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
disable(): void;
getName(): string;
toString(): string;
setName(arg0: string): void;
setFont(arg0: java_awt_Font): void;
postEvent(arg0: java_awt_Event): boolean;
dispatchEvent(arg0: java_awt_AWTEvent): void;
getFont(): java_awt_Font;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { MenuShortcut as java_awt_MenuShortcut } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class MenuShortcut extends java_lang_Object implements java_io_Serializable {
key: number;
usesShift: boolean;
static serialVersionUID: number;
key: number;
equals(arg0: java_awt_MenuShortcut): boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getKey(): number;
usesShiftModifier(): boolean;
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { ActionEvent as java_awt_event_ActionEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class ActionListener implements java_util_EventListener {

actionPerformed(arg0: java_awt_event_ActionEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AWTEvent as java_awt_AWTEvent } from 'java.awt';

  export class ActionEvent extends java_awt_AWTEvent {
static SHIFT_MASK: number;
static CTRL_MASK: number;
static META_MASK: number;
static ALT_MASK: number;
static ACTION_FIRST: number;
static ACTION_LAST: number;
static ACTION_PERFORMED: number;
actionCommand: string;
when: number;
modifiers: number;
static serialVersionUID: number;
modifiers: number;
when: number;
actionCommand: string;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getModifiers(): number;
paramString(): string;
getWhen(): number;
getActionCommand(): string;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Object, arg1: number, arg2: string, arg3: number, arg4: number);
constructor(arg0: java_lang_Object, arg1: number, arg2: string, arg3: number);
constructor(arg0: java_lang_Object, arg1: number, arg2: string);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Event as java_awt_Event } from 'java.awt';
import { AccessControlContext as java_security_AccessControlContext } from 'java.security';
import { EventObject as java_util_EventObject } from 'java.util';

  export class AWTEvent extends java_util_EventObject {
bdata: number[];
id: number;
consumed: boolean;
acc: java_security_AccessControlContext;
focusManagerIsDispatching: boolean;
isPosted: boolean;
isSystemGenerated: boolean;
static COMPONENT_EVENT_MASK: number;
static CONTAINER_EVENT_MASK: number;
static FOCUS_EVENT_MASK: number;
static KEY_EVENT_MASK: number;
static MOUSE_EVENT_MASK: number;
static MOUSE_MOTION_EVENT_MASK: number;
static WINDOW_EVENT_MASK: number;
static ACTION_EVENT_MASK: number;
static ADJUSTMENT_EVENT_MASK: number;
static ITEM_EVENT_MASK: number;
static TEXT_EVENT_MASK: number;
static INPUT_METHOD_EVENT_MASK: number;
static INPUT_METHODS_ENABLED_MASK: number;
static PAINT_EVENT_MASK: number;
static INVOCATION_EVENT_MASK: number;
static HIERARCHY_EVENT_MASK: number;
static HIERARCHY_BOUNDS_EVENT_MASK: number;
static MOUSE_WHEEL_EVENT_MASK: number;
static WINDOW_STATE_EVENT_MASK: number;
static WINDOW_FOCUS_EVENT_MASK: number;
static RESERVED_ID_MAX: number;
static serialVersionUID: number;
iD: number;
class: java_lang_Class<java_lang_Object>;
toString(): string;
paramString(): string;
getID(): number;
setSource(arg0: java_lang_Object): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Object, arg1: number);
constructor(arg0: java_awt_Event);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { MenuItem as java_awt_MenuItem, MenuComponent as java_awt_MenuComponent, MenuContainer as java_awt_MenuContainer, Font as java_awt_Font, Event as java_awt_Event, AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext, Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Vector as java_util_Vector } from 'java.util';

  export class Menu extends java_awt_MenuItem implements java_awt_MenuContainer, javax_accessibility_Accessible {
items: java_util_Vector<java_awt_MenuItem>;
tearOff: boolean;
isHelpMenu: boolean;
static base: string;
static nameCounter: number;
static serialVersionUID: number;
menuSerializedDataVersion: number;
itemCount: number;
accessibleContext: javax_accessibility_AccessibleContext;
item: java_awt_MenuItem;
name: string;
parent: java_awt_MenuContainer;
font: java_awt_Font;
class: java_lang_Class<java_lang_Object>;
add(arg0: string): void;
add(arg0: java_awt_MenuItem): java_awt_MenuItem;
remove(arg0: java_awt_MenuComponent): void;
remove(arg0: number): void;
insert(arg0: string, arg1: number): void;
insert(arg0: java_awt_MenuItem, arg1: number): void;
paramString(): string;
removeAll(): void;
getItemCount(): number;
isTearOff(): boolean;
countItems(): number;
addSeparator(): void;
insertSeparator(arg0: number): void;
addNotify(): void;
removeNotify(): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getItem(arg0: number): java_awt_MenuItem;
getName(): string;
toString(): string;
getParent(): java_awt_MenuContainer;
setName(arg0: string): void;
setFont(arg0: java_awt_Font): void;
postEvent(arg0: java_awt_Event): boolean;
dispatchEvent(arg0: java_awt_AWTEvent): void;
getFont(): java_awt_Font;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: boolean);
constructor(arg0: string);
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { MenuShortcut as java_awt_MenuShortcut, MenuComponent as java_awt_MenuComponent } from 'java.awt';
import { ActionListener as java_awt_event_ActionListener } from 'java.awt.event';
import { AccessibleContext as javax_accessibility_AccessibleContext, Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { EventListener as java_util_EventListener } from 'java.util';

  export class MenuItem extends java_awt_MenuComponent implements javax_accessibility_Accessible {
enabled: boolean;
label: string;
actionCommand: string;
eventMask: number;
actionListener: java_awt_event_ActionListener;
shortcut: java_awt_MenuShortcut;
static base: string;
static nameCounter: number;
static serialVersionUID: number;
menuItemSerializedDataVersion: number;
label: string;
shortcut: java_awt_MenuShortcut;
actionCommand: string;
actionListeners: java_awt_event_ActionListener[];
accessibleContext: javax_accessibility_AccessibleContext;
listeners: T[];
class: java_lang_Class<java_lang_Object>;
paramString(): string;
isEnabled(): boolean;
enable(arg0: boolean): void;
enable(): void;
setLabel(arg0: string): void;
getLabel(): string;
deleteShortcut(): void;
getShortcut(): java_awt_MenuShortcut;
setShortcut(arg0: java_awt_MenuShortcut): void;
setActionCommand(arg0: string): void;
getActionCommand(): string;
addActionListener(arg0: java_awt_event_ActionListener): void;
removeActionListener(arg0: java_awt_event_ActionListener): void;
getActionListeners(): java_awt_event_ActionListener[];
addNotify(): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
setEnabled(arg0: boolean): void;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
disable(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: java_awt_MenuShortcut);
constructor(arg0: string);
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Component as java_awt_Component, Graphics as java_awt_Graphics, Font as java_awt_Font, Dimension as java_awt_Dimension, AWTKeyStroke as java_awt_AWTKeyStroke, Container as java_awt_Container, LayoutManager as java_awt_LayoutManager, FocusTraversalPolicy as java_awt_FocusTraversalPolicy, ComponentOrientation as java_awt_ComponentOrientation, Insets as java_awt_Insets, Event as java_awt_Event, Point as java_awt_Point, LightweightDispatcher as java_awt_LightweightDispatcher, Color as java_awt_Color } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class, Thread as java_lang_Thread } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream, ObjectStreamField as java_io_ObjectStreamField } from 'java.io';
import { Set as java_util_Set, EventListener as java_util_EventListener, List as java_util_List } from 'java.util';
import { ContainerListener as java_awt_event_ContainerListener } from 'java.awt.event';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { AppContext as sun_awt_AppContext } from 'sun.awt';

  export class Container extends java_awt_Component {
static log: sun_util_logging_PlatformLogger;
static eventLog: sun_util_logging_PlatformLogger;
static EMPTY_ARRAY: java_awt_Component[];
component: java_util_List<java_awt_Component>;
layoutMgr: java_awt_LayoutManager;
dispatcher: java_awt_LightweightDispatcher;
focusTraversalPolicy: java_awt_FocusTraversalPolicy;
focusCycleRoot: boolean;
focusTraversalPolicyProvider: boolean;
printingThreads: java_util_Set<java_lang_Thread>;
printing: boolean;
containerListener: java_awt_event_ContainerListener;
listeningChildren: number;
listeningBoundsChildren: number;
descendantsCount: number;
preserveBackgroundColor: java_awt_Color;
static serialVersionUID: number;
static INCLUDE_SELF: boolean;
static SEARCH_HEAVYWEIGHTS: boolean;
numOfHWComponents: number;
numOfLWComponents: number;
static mixingLog: sun_util_logging_PlatformLogger;
static serialPersistentFields: java_io_ObjectStreamField[];
static isJavaAwtSmartInvalidate: boolean;
static descendUnconditionallyWhenValidating: boolean;
modalComp: java_awt_Component;
modalAppContext: sun_awt_AppContext;
containerSerializedDataVersion: number;
focusTraversalKeys: java_util_Set<java_awt_AWTKeyStroke>;
preferredSize: java_awt_Dimension;
minimumSize: java_awt_Dimension;
focusTraversalPolicy: java_awt_FocusTraversalPolicy;
componentCount: number;
insets: java_awt_Insets;
componentZOrder: number;
maximumSize: java_awt_Dimension;
alignmentX: number;
alignmentY: number;
containerListeners: java_awt_event_ContainerListener[];
componentAt: java_awt_Component;
componentAt: java_awt_Component;
mousePosition: java_awt_Point;
layout: java_awt_LayoutManager;
component: java_awt_Component;
listeners: T[];
components: java_awt_Component[];
class: java_lang_Class<java_lang_Object>;
add(arg0: java_awt_Component): java_awt_Component;
add(arg0: string, arg1: java_awt_Component): java_awt_Component;
add(arg0: java_awt_Component, arg1: java_lang_Object): void;
add(arg0: java_awt_Component, arg1: number): java_awt_Component;
add(arg0: java_awt_Component, arg1: java_lang_Object, arg2: number): void;
remove(arg0: java_awt_Component): void;
remove(arg0: number): void;
update(arg0: java_awt_Graphics): void;
list(arg0: java_io_PrintWriter, arg1: number): void;
list(arg0: java_io_PrintStream, arg1: number): void;
validate(): void;
print(arg0: java_awt_Graphics): void;
removeAll(): void;
setFont(arg0: java_awt_Font): void;
layout(): void;
addNotify(): void;
removeNotify(): void;
minimumSize(): java_awt_Dimension;
getFocusTraversalKeys(arg0: number): java_util_Set<java_awt_AWTKeyStroke>;
setFocusCycleRoot(arg0: boolean): void;
isFocusCycleRoot(): boolean;
isFocusCycleRoot(arg0: java_awt_Container): boolean;
isValidateRoot(): boolean;
paint(arg0: java_awt_Graphics): void;
setLayout(arg0: java_awt_LayoutManager): void;
getPreferredSize(): java_awt_Dimension;
getMinimumSize(): java_awt_Dimension;
getFocusTraversalPolicy(): java_awt_FocusTraversalPolicy;
applyComponentOrientation(arg0: java_awt_ComponentOrientation): void;
getComponentCount(): number;
countComponents(): number;
getInsets(): java_awt_Insets;
insets(): java_awt_Insets;
setComponentZOrder(arg0: java_awt_Component, arg1: number): void;
getComponentZOrder(arg0: java_awt_Component): number;
doLayout(): void;
preferredSize(): java_awt_Dimension;
getMaximumSize(): java_awt_Dimension;
getAlignmentX(): number;
getAlignmentY(): number;
paintComponents(arg0: java_awt_Graphics): void;
printComponents(arg0: java_awt_Graphics): void;
addContainerListener(arg0: java_awt_event_ContainerListener): void;
removeContainerListener(arg0: java_awt_event_ContainerListener): void;
getContainerListeners(): java_awt_event_ContainerListener[];
deliverEvent(arg0: java_awt_Event): void;
getComponentAt(arg0: number, arg1: number): java_awt_Component;
getComponentAt(arg0: java_awt_Point): java_awt_Component;
getMousePosition(arg0: boolean): java_awt_Point;
findComponentAt(arg0: number, arg1: number): java_awt_Component;
findComponentAt(arg0: java_awt_Point): java_awt_Component;
isAncestorOf(arg0: java_awt_Component): boolean;
setFocusTraversalKeys(arg0: number, arg1: java_util_Set<java_awt_AWTKeyStroke>): void;
areFocusTraversalKeysSet(arg0: number): boolean;
setFocusTraversalPolicy(arg0: java_awt_FocusTraversalPolicy): void;
isFocusTraversalPolicySet(): boolean;
setFocusTraversalPolicyProvider(arg0: boolean): void;
isFocusTraversalPolicyProvider(): boolean;
transferFocusDownCycle(): void;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
getLayout(): java_awt_LayoutManager;
getComponent(arg0: number): java_awt_Component;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
locate(arg0: number, arg1: number): java_awt_Component;
getComponents(): java_awt_Component[];
invalidate(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Character as java_lang_Character, Integer as java_lang_Integer } from 'java.lang';
import { AWTKeyStroke as java_awt_AWTKeyStroke, VKCollection as java_awt_VKCollection } from 'java.awt';
import { KeyEvent as java_awt_event_KeyEvent } from 'java.awt.event';
import { Map as java_util_Map } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AWTKeyStroke extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
static modifierKeywords: java_util_Map<string, java_lang_Integer>;
static vks: java_awt_VKCollection;
static APP_CONTEXT_CACHE_KEY: java_lang_Object;
static APP_CONTEXT_KEYSTROKE_KEY: java_awt_AWTKeyStroke;
keyChar: string;
keyCode: number;
modifiers: number;
onKeyRelease: boolean;
static $assertionsDisabled: boolean;
modifiers: number;
keyChar: string;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStrokeForEvent: java_awt_AWTKeyStroke;
keyEventType: number;
keyCode: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getModifiers(): number;
getKeyChar(): string;
static getAWTKeyStroke(arg0: number, arg1: number): java_awt_AWTKeyStroke;
static getAWTKeyStroke(arg0: java_lang_Character, arg1: number): java_awt_AWTKeyStroke;
static getAWTKeyStroke(arg0: string): java_awt_AWTKeyStroke;
static getAWTKeyStroke(arg0: string): java_awt_AWTKeyStroke;
static getAWTKeyStroke(arg0: number, arg1: number, arg2: boolean): java_awt_AWTKeyStroke;
static getAWTKeyStrokeForEvent(arg0: java_awt_event_KeyEvent): java_awt_AWTKeyStroke;
isOnKeyRelease(): boolean;
getKeyEventType(): number;
getKeyCode(): number;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputEvent as java_awt_event_InputEvent } from 'java.awt.event';

  export class KeyEvent extends java_awt_event_InputEvent {
isProxyActive: boolean;
static KEY_FIRST: number;
static KEY_LAST: number;
static KEY_TYPED: number;
static KEY_PRESSED: number;
static KEY_RELEASED: number;
static VK_ENTER: number;
static VK_BACK_SPACE: number;
static VK_TAB: number;
static VK_CANCEL: number;
static VK_CLEAR: number;
static VK_SHIFT: number;
static VK_CONTROL: number;
static VK_ALT: number;
static VK_PAUSE: number;
static VK_CAPS_LOCK: number;
static VK_ESCAPE: number;
static VK_SPACE: number;
static VK_PAGE_UP: number;
static VK_PAGE_DOWN: number;
static VK_END: number;
static VK_HOME: number;
static VK_LEFT: number;
static VK_UP: number;
static VK_RIGHT: number;
static VK_DOWN: number;
static VK_COMMA: number;
static VK_MINUS: number;
static VK_PERIOD: number;
static VK_SLASH: number;
static VK_0: number;
static VK_1: number;
static VK_2: number;
static VK_3: number;
static VK_4: number;
static VK_5: number;
static VK_6: number;
static VK_7: number;
static VK_8: number;
static VK_9: number;
static VK_SEMICOLON: number;
static VK_EQUALS: number;
static VK_A: number;
static VK_B: number;
static VK_C: number;
static VK_D: number;
static VK_E: number;
static VK_F: number;
static VK_G: number;
static VK_H: number;
static VK_I: number;
static VK_J: number;
static VK_K: number;
static VK_L: number;
static VK_M: number;
static VK_N: number;
static VK_O: number;
static VK_P: number;
static VK_Q: number;
static VK_R: number;
static VK_S: number;
static VK_T: number;
static VK_U: number;
static VK_V: number;
static VK_W: number;
static VK_X: number;
static VK_Y: number;
static VK_Z: number;
static VK_OPEN_BRACKET: number;
static VK_BACK_SLASH: number;
static VK_CLOSE_BRACKET: number;
static VK_NUMPAD0: number;
static VK_NUMPAD1: number;
static VK_NUMPAD2: number;
static VK_NUMPAD3: number;
static VK_NUMPAD4: number;
static VK_NUMPAD5: number;
static VK_NUMPAD6: number;
static VK_NUMPAD7: number;
static VK_NUMPAD8: number;
static VK_NUMPAD9: number;
static VK_MULTIPLY: number;
static VK_ADD: number;
static VK_SEPARATER: number;
static VK_SEPARATOR: number;
static VK_SUBTRACT: number;
static VK_DECIMAL: number;
static VK_DIVIDE: number;
static VK_DELETE: number;
static VK_NUM_LOCK: number;
static VK_SCROLL_LOCK: number;
static VK_F1: number;
static VK_F2: number;
static VK_F3: number;
static VK_F4: number;
static VK_F5: number;
static VK_F6: number;
static VK_F7: number;
static VK_F8: number;
static VK_F9: number;
static VK_F10: number;
static VK_F11: number;
static VK_F12: number;
static VK_F13: number;
static VK_F14: number;
static VK_F15: number;
static VK_F16: number;
static VK_F17: number;
static VK_F18: number;
static VK_F19: number;
static VK_F20: number;
static VK_F21: number;
static VK_F22: number;
static VK_F23: number;
static VK_F24: number;
static VK_PRINTSCREEN: number;
static VK_INSERT: number;
static VK_HELP: number;
static VK_META: number;
static VK_BACK_QUOTE: number;
static VK_QUOTE: number;
static VK_KP_UP: number;
static VK_KP_DOWN: number;
static VK_KP_LEFT: number;
static VK_KP_RIGHT: number;
static VK_DEAD_GRAVE: number;
static VK_DEAD_ACUTE: number;
static VK_DEAD_CIRCUMFLEX: number;
static VK_DEAD_TILDE: number;
static VK_DEAD_MACRON: number;
static VK_DEAD_BREVE: number;
static VK_DEAD_ABOVEDOT: number;
static VK_DEAD_DIAERESIS: number;
static VK_DEAD_ABOVERING: number;
static VK_DEAD_DOUBLEACUTE: number;
static VK_DEAD_CARON: number;
static VK_DEAD_CEDILLA: number;
static VK_DEAD_OGONEK: number;
static VK_DEAD_IOTA: number;
static VK_DEAD_VOICED_SOUND: number;
static VK_DEAD_SEMIVOICED_SOUND: number;
static VK_AMPERSAND: number;
static VK_ASTERISK: number;
static VK_QUOTEDBL: number;
static VK_LESS: number;
static VK_GREATER: number;
static VK_BRACELEFT: number;
static VK_BRACERIGHT: number;
static VK_AT: number;
static VK_COLON: number;
static VK_CIRCUMFLEX: number;
static VK_DOLLAR: number;
static VK_EURO_SIGN: number;
static VK_EXCLAMATION_MARK: number;
static VK_INVERTED_EXCLAMATION_MARK: number;
static VK_LEFT_PARENTHESIS: number;
static VK_NUMBER_SIGN: number;
static VK_PLUS: number;
static VK_RIGHT_PARENTHESIS: number;
static VK_UNDERSCORE: number;
static VK_WINDOWS: number;
static VK_CONTEXT_MENU: number;
static VK_FINAL: number;
static VK_CONVERT: number;
static VK_NONCONVERT: number;
static VK_ACCEPT: number;
static VK_MODECHANGE: number;
static VK_KANA: number;
static VK_KANJI: number;
static VK_ALPHANUMERIC: number;
static VK_KATAKANA: number;
static VK_HIRAGANA: number;
static VK_FULL_WIDTH: number;
static VK_HALF_WIDTH: number;
static VK_ROMAN_CHARACTERS: number;
static VK_ALL_CANDIDATES: number;
static VK_PREVIOUS_CANDIDATE: number;
static VK_CODE_INPUT: number;
static VK_JAPANESE_KATAKANA: number;
static VK_JAPANESE_HIRAGANA: number;
static VK_JAPANESE_ROMAN: number;
static VK_KANA_LOCK: number;
static VK_INPUT_METHOD_ON_OFF: number;
static VK_CUT: number;
static VK_COPY: number;
static VK_PASTE: number;
static VK_UNDO: number;
static VK_AGAIN: number;
static VK_FIND: number;
static VK_PROPS: number;
static VK_STOP: number;
static VK_COMPOSE: number;
static VK_ALT_GRAPH: number;
static VK_BEGIN: number;
static VK_UNDEFINED: number;
static CHAR_UNDEFINED: string;
static KEY_LOCATION_UNKNOWN: number;
static KEY_LOCATION_STANDARD: number;
static KEY_LOCATION_LEFT: number;
static KEY_LOCATION_RIGHT: number;
static KEY_LOCATION_NUMPAD: number;
keyCode: number;
keyChar: string;
keyLocation: number;
rawCode: number;
primaryLevelUnicode: number;
scancode: number;
extendedKeyCode: number;
static serialVersionUID: number;
originalSource: java_awt_Component;
keyChar: string;
extendedKeyCode: number;
keyCode: number;
static keyText: string;
static keyModifiersText: string;
keyLocation: number;
static extendedKeyCodeForChar: number;
component: java_awt_Component;
iD: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
paramString(): string;
setKeyChar(arg0: string): void;
setModifiers(arg0: number): void;
getKeyChar(): string;
getExtendedKeyCode(): number;
isActionKey(): boolean;
getKeyCode(): number;
static getKeyText(arg0: number): string;
static getKeyModifiersText(arg0: number): string;
setKeyCode(arg0: number): void;
getKeyLocation(): number;
static getExtendedKeyCodeForChar(arg0: number): number;
getComponent(): java_awt_Component;
toString(): string;
getID(): number;
setSource(arg0: java_lang_Object): void;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string, arg6: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';

  export class InputEvent extends java_awt_event_ComponentEvent {
static logger: sun_util_logging_PlatformLogger;
static SHIFT_MASK: number;
static CTRL_MASK: number;
static META_MASK: number;
static ALT_MASK: number;
static ALT_GRAPH_MASK: number;
static BUTTON1_MASK: number;
static BUTTON2_MASK: number;
static BUTTON3_MASK: number;
static SHIFT_DOWN_MASK: number;
static CTRL_DOWN_MASK: number;
static META_DOWN_MASK: number;
static ALT_DOWN_MASK: number;
static BUTTON1_DOWN_MASK: number;
static BUTTON2_DOWN_MASK: number;
static BUTTON3_DOWN_MASK: number;
static ALT_GRAPH_DOWN_MASK: number;
static BUTTON_DOWN_MASK: number[];
static FIRST_HIGH_BIT: number;
static JDK_1_3_MODIFIERS: number;
static HIGH_MODIFIERS: number;
when: number;
modifiers: number;
canAccessSystemClipboard: boolean;
static serialVersionUID: number;
modifiers: number;
when: number;
modifiersEx: number;
static modifiersExText: string;
static maskForButton: number;
iD: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getModifiers(): number;
consume(): void;
isConsumed(): boolean;
getWhen(): number;
isControlDown(): boolean;
isShiftDown(): boolean;
getModifiersEx(): number;
static getModifiersExText(arg0: number): string;
static getMaskForButton(arg0: number): number;
isMetaDown(): boolean;
isAltDown(): boolean;
isAltGraphDown(): boolean;
toString(): string;
getID(): number;
setSource(arg0: java_lang_Object): void;
getSource(): java_lang_Object;
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

declare module 'java.awt.event' {
import { Component as java_awt_Component, AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ComponentEvent extends java_awt_AWTEvent {
static COMPONENT_FIRST: number;
static COMPONENT_LAST: number;
static COMPONENT_MOVED: number;
static COMPONENT_RESIZED: number;
static COMPONENT_SHOWN: number;
static COMPONENT_HIDDEN: number;
static serialVersionUID: number;
component: java_awt_Component;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
paramString(): string;
getComponent(): java_awt_Component;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Component, arg1: number);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { Map as java_util_Map } from 'java.util';

  export class VKCollection extends java_lang_Object {
code2name: java_util_Map<java_lang_Integer, string>;
name2code: java_util_Map<string, java_lang_Integer>;
static $assertionsDisabled: boolean;
put(arg0: string, arg1: java_lang_Integer): void;
findCode(arg0: string): java_lang_Integer;
findName(arg0: java_lang_Integer): string;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Component as java_awt_Component, Container as java_awt_Container, Dimension as java_awt_Dimension } from 'java.awt';

  export class LayoutManager {

removeLayoutComponent(arg0: java_awt_Component): void;
addLayoutComponent(arg0: string, arg1: java_awt_Component): void;
layoutContainer(arg0: java_awt_Container): void;
preferredLayoutSize(arg0: java_awt_Container): java_awt_Dimension;
minimumLayoutSize(arg0: java_awt_Container): java_awt_Dimension;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Container as java_awt_Container, Component as java_awt_Component, Window as java_awt_Window } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class FocusTraversalPolicy extends java_lang_Object {
componentAfter: java_awt_Component;
componentBefore: java_awt_Component;
firstComponent: java_awt_Component;
lastComponent: java_awt_Component;
initialComponent: java_awt_Component;
defaultComponent: java_awt_Component;
getComponentAfter(arg0: java_awt_Container, arg1: java_awt_Component): java_awt_Component;
getComponentBefore(arg0: java_awt_Container, arg1: java_awt_Component): java_awt_Component;
getFirstComponent(arg0: java_awt_Container): java_awt_Component;
getLastComponent(arg0: java_awt_Container): java_awt_Component;
getInitialComponent(arg0: java_awt_Window): java_awt_Component;
getDefaultComponent(arg0: java_awt_Container): java_awt_Component;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { ResourceBundle as java_util_ResourceBundle, Locale as java_util_Locale } from 'java.util';
import { ComponentOrientation as java_awt_ComponentOrientation } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ComponentOrientation extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
static UNK_BIT: number;
static HORIZ_BIT: number;
static LTR_BIT: number;
static LEFT_TO_RIGHT: java_awt_ComponentOrientation;
static RIGHT_TO_LEFT: java_awt_ComponentOrientation;
static UNKNOWN: java_awt_ComponentOrientation;
orientation: number;
static orientation: java_awt_ComponentOrientation;
static orientation: java_awt_ComponentOrientation;
static getOrientation(arg0: java_util_ResourceBundle): java_awt_ComponentOrientation;
static getOrientation(arg0: java_util_Locale): java_awt_ComponentOrientation;
isHorizontal(): boolean;
isLeftToRight(): boolean;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Insets extends java_lang_Object implements java_lang_Cloneable, java_io_Serializable {
top: number;
left: number;
bottom: number;
right: number;
static serialVersionUID: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
set(arg0: number, arg1: number, arg2: number, arg3: number): void;
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { ContainerEvent as java_awt_event_ContainerEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class ContainerListener implements java_util_EventListener {

componentAdded(arg0: java_awt_event_ContainerEvent): void;
componentRemoved(arg0: java_awt_event_ContainerEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component, Container as java_awt_Container } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';

  export class ContainerEvent extends java_awt_event_ComponentEvent {
static CONTAINER_FIRST: number;
static CONTAINER_LAST: number;
static COMPONENT_ADDED: number;
static COMPONENT_REMOVED: number;
child: java_awt_Component;
static serialVersionUID: number;
child: java_awt_Component;
container: java_awt_Container;
iD: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
paramString(): string;
getChild(): java_awt_Component;
getContainer(): java_awt_Container;
toString(): string;
getID(): number;
setSource(arg0: java_lang_Object): void;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_Component);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { AWTEvent as java_awt_AWTEvent, Container as java_awt_Container, Component as java_awt_Component, Cursor as java_awt_Cursor } from 'java.awt';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';
import { AWTEventListener as java_awt_event_AWTEventListener } from 'java.awt.event';

  export class LightweightDispatcher extends java_lang_Object implements java_io_Serializable, java_awt_event_AWTEventListener {
static serialVersionUID: number;
static LWD_MOUSE_DRAGGED_OVER: number;
static eventLog: sun_util_logging_PlatformLogger;
static BUTTONS_DOWN_MASK: number;
nativeContainer: java_awt_Container;
focus: java_awt_Component;
mouseEventTarget: java_lang_ref_WeakReference<java_awt_Component>;
targetLastEntered: java_lang_ref_WeakReference<java_awt_Component>;
targetLastEnteredDT: java_lang_ref_WeakReference<java_awt_Component>;
isMouseInNativeContainer: boolean;
isMouseDTInNativeContainer: boolean;
nativeCursor: java_awt_Cursor;
eventMask: number;
static PROXY_EVENT_MASK: number;
static MOUSE_MASK: number;
static $assertionsDisabled: boolean;
eventDispatched(arg0: java_awt_AWTEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Cursor as java_awt_Cursor } from 'java.awt';
import { Hashtable as java_util_Hashtable, Properties as java_util_Properties } from 'java.util';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { Object as java_lang_Object } from 'java.lang';
import { CursorDisposer as java_awt_Cursor_CursorDisposer } from 'java.awt.Cursor';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Cursor extends java_lang_Object implements java_io_Serializable {
static DEFAULT_CURSOR: number;
static CROSSHAIR_CURSOR: number;
static TEXT_CURSOR: number;
static WAIT_CURSOR: number;
static SW_RESIZE_CURSOR: number;
static SE_RESIZE_CURSOR: number;
static NW_RESIZE_CURSOR: number;
static NE_RESIZE_CURSOR: number;
static N_RESIZE_CURSOR: number;
static S_RESIZE_CURSOR: number;
static W_RESIZE_CURSOR: number;
static E_RESIZE_CURSOR: number;
static HAND_CURSOR: number;
static MOVE_CURSOR: number;
static predefined: java_awt_Cursor[];
static predefinedPrivate: java_awt_Cursor[];
static cursorProperties: String[][];
type: number;
static CUSTOM_CURSOR: number;
static systemCustomCursors: java_util_Hashtable<string, java_awt_Cursor>;
static RESOURCE_PREFIX: string;
static PROPERTIES_FILE: string;
static systemCustomCursorProperties: java_util_Properties;
static CURSOR_DOT_PREFIX: string;
static DOT_FILE_SUFFIX: string;
static DOT_HOTSPOT_SUFFIX: string;
static DOT_NAME_SUFFIX: string;
static serialVersionUID: number;
static log: sun_util_logging_PlatformLogger;
pData: number;
anchor: java_lang_Object;
disposer: java_awt_Cursor_CursorDisposer;
name: string;
name: string;
type: number;
static systemCustomCursor: java_awt_Cursor;
static defaultCursor: java_awt_Cursor;
static predefinedCursor: java_awt_Cursor;
getName(): string;
toString(): string;
getType(): number;
static getSystemCustomCursor(arg0: string): java_awt_Cursor;
static getDefaultCursor(): java_awt_Cursor;
static getPredefinedCursor(arg0: number): java_awt_Cursor;
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.awt.Cursor' {
import { Object as java_lang_Object } from 'java.lang';
import { DisposerRecord as sun_java2d_DisposerRecord } from 'sun.java2d';

  export class CursorDisposer extends java_lang_Object implements sun_java2d_DisposerRecord {
pData: number;
dispose(): void;
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { EventListener as java_util_EventListener } from 'java.util';

  export class AWTEventListener implements java_util_EventListener {

eventDispatched(arg0: java_awt_AWTEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { MouseEvent as java_awt_event_MouseEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class MouseListener implements java_util_EventListener {

mousePressed(arg0: java_awt_event_MouseEvent): void;
mouseReleased(arg0: java_awt_event_MouseEvent): void;
mouseClicked(arg0: java_awt_event_MouseEvent): void;
mouseExited(arg0: java_awt_event_MouseEvent): void;
mouseEntered(arg0: java_awt_event_MouseEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Point as java_awt_Point, Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputEvent as java_awt_event_InputEvent } from 'java.awt.event';

  export class MouseEvent extends java_awt_event_InputEvent {
static MOUSE_FIRST: number;
static MOUSE_LAST: number;
static MOUSE_CLICKED: number;
static MOUSE_PRESSED: number;
static MOUSE_RELEASED: number;
static MOUSE_MOVED: number;
static MOUSE_ENTERED: number;
static MOUSE_EXITED: number;
static MOUSE_DRAGGED: number;
static MOUSE_WHEEL: number;
static NOBUTTON: number;
static BUTTON1: number;
static BUTTON2: number;
static BUTTON3: number;
x: number;
y: number;
xAbs: number;
yAbs: number;
clickCount: number;
causedByTouchEvent: boolean;
button: number;
popupTrigger: boolean;
static serialVersionUID: number;
static cachedNumberOfButtons: number;
shouldExcludeButtonFromExtModifiers: boolean;
xOnScreen: number;
yOnScreen: number;
clickCount: number;
y: number;
x: number;
locationOnScreen: java_awt_Point;
modifiersEx: number;
point: java_awt_Point;
static mouseModifiersText: string;
button: number;
component: java_awt_Component;
iD: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
paramString(): string;
getXOnScreen(): number;
getYOnScreen(): number;
getClickCount(): number;
isPopupTrigger(): boolean;
getY(): number;
getX(): number;
getLocationOnScreen(): java_awt_Point;
getModifiersEx(): number;
translatePoint(arg0: number, arg1: number): void;
getPoint(): java_awt_Point;
static getMouseModifiersText(arg0: number): string;
getButton(): number;
getComponent(): java_awt_Component;
toString(): string;
getID(): number;
setSource(arg0: java_lang_Object): void;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { MouseEvent as java_awt_event_MouseEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class MouseMotionListener implements java_util_EventListener {

mouseMoved(arg0: java_awt_event_MouseEvent): void;
mouseDragged(arg0: java_awt_event_MouseEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { MouseWheelEvent as java_awt_event_MouseWheelEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class MouseWheelListener implements java_util_EventListener {

mouseWheelMoved(arg0: java_awt_event_MouseWheelEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MouseEvent as java_awt_event_MouseEvent } from 'java.awt.event';

  export class MouseWheelEvent extends java_awt_event_MouseEvent {
static WHEEL_UNIT_SCROLL: number;
static WHEEL_BLOCK_SCROLL: number;
scrollType: number;
scrollAmount: number;
wheelRotation: number;
preciseWheelRotation: number;
static serialVersionUID: number;
scrollType: number;
scrollAmount: number;
wheelRotation: number;
preciseWheelRotation: number;
unitsToScroll: number;
modifiers: number;
when: number;
static modifiersExText: string;
static maskForButton: number;
component: java_awt_Component;
iD: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
paramString(): string;
getScrollType(): number;
getScrollAmount(): number;
getWheelRotation(): number;
getPreciseWheelRotation(): number;
getUnitsToScroll(): number;
getModifiers(): number;
consume(): void;
isConsumed(): boolean;
getWhen(): number;
isControlDown(): boolean;
isShiftDown(): boolean;
static getModifiersExText(arg0: number): string;
static getMaskForButton(arg0: number): number;
isMetaDown(): boolean;
isAltDown(): boolean;
isAltGraphDown(): boolean;
getComponent(): java_awt_Component;
toString(): string;
getID(): number;
setSource(arg0: java_lang_Object): void;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number, arg13: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: number);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { InputMethodEvent as java_awt_event_InputMethodEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class InputMethodListener implements java_util_EventListener {

inputMethodTextChanged(arg0: java_awt_event_InputMethodEvent): void;
caretPositionChanged(arg0: java_awt_event_InputMethodEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';
import { TextHitInfo as java_awt_font_TextHitInfo } from 'java.awt.font';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Component as java_awt_Component, AWTEvent as java_awt_AWTEvent } from 'java.awt';

  export class InputMethodEvent extends java_awt_AWTEvent {
static serialVersionUID: number;
static INPUT_METHOD_FIRST: number;
static INPUT_METHOD_TEXT_CHANGED: number;
static CARET_POSITION_CHANGED: number;
static INPUT_METHOD_LAST: number;
when: number;
text: java_text_AttributedCharacterIterator;
committedCharacterCount: number;
caret: java_awt_font_TextHitInfo;
visiblePosition: java_awt_font_TextHitInfo;
text: java_text_AttributedCharacterIterator;
when: number;
committedCharacterCount: number;
caret: java_awt_font_TextHitInfo;
visiblePosition: java_awt_font_TextHitInfo;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
paramString(): string;
getText(): java_text_AttributedCharacterIterator;
consume(): void;
isConsumed(): boolean;
getWhen(): number;
getCommittedCharacterCount(): number;
getCaret(): java_awt_font_TextHitInfo;
getVisiblePosition(): java_awt_font_TextHitInfo;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_font_TextHitInfo, arg3: java_awt_font_TextHitInfo);
constructor(arg0: java_awt_Component, arg1: number, arg2: java_text_AttributedCharacterIterator, arg3: number, arg4: java_awt_font_TextHitInfo, arg5: java_awt_font_TextHitInfo);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: java_text_AttributedCharacterIterator, arg4: number, arg5: java_awt_font_TextHitInfo, arg6: java_awt_font_TextHitInfo);
  }
}//@ts-nocheck

declare module 'java.awt.font' {
import { Object as java_lang_Object } from 'java.lang';
import { TextHitInfo as java_awt_font_TextHitInfo } from 'java.awt.font';

  export class TextHitInfo extends java_lang_Object {
charIndex: number;
isLeadingEdge: boolean;
insertionIndex: number;
otherHit: java_awt_font_TextHitInfo;
offsetHit: java_awt_font_TextHitInfo;
charIndex: number;
equals(arg0: java_lang_Object): boolean;
equals(arg0: java_awt_font_TextHitInfo): boolean;
toString(): string;
hashCode(): number;
static trailing(arg0: number): java_awt_font_TextHitInfo;
static leading(arg0: number): java_awt_font_TextHitInfo;
isLeadingEdge(): boolean;
getInsertionIndex(): number;
static beforeOffset(arg0: number): java_awt_font_TextHitInfo;
static afterOffset(arg0: number): java_awt_font_TextHitInfo;
getOtherHit(): java_awt_font_TextHitInfo;
getOffsetHit(arg0: number): java_awt_font_TextHitInfo;
getCharIndex(): number;

  }
}//@ts-nocheck

declare module 'java.awt.im' {
import { TextHitInfo as java_awt_font_TextHitInfo } from 'java.awt.font';
import { Rectangle as java_awt_Rectangle } from 'java.awt';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';

  export class InputMethodRequests {
textLocation: java_awt_Rectangle;
locationOffset: java_awt_font_TextHitInfo;
insertPositionOffset: number;
committedText: java_text_AttributedCharacterIterator;
committedTextLength: number;
selectedText: java_text_AttributedCharacterIterator;
getTextLocation(arg0: java_awt_font_TextHitInfo): java_awt_Rectangle;
getLocationOffset(arg0: number, arg1: number): java_awt_font_TextHitInfo;
getInsertPositionOffset(): number;
getCommittedText(arg0: number, arg1: number, arg2: java_textdCharacterIterator_Attribute_Attribute[]): java_text_AttributedCharacterIterator;
getCommittedTextLength(): number;
cancelLatestCommittedText(arg0: java_textdCharacterIterator_Attribute_Attribute[]): java_text_AttributedCharacterIterator;
getSelectedText(arg0: java_textdCharacterIterator_Attribute_Attribute[]): java_text_AttributedCharacterIterator;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { ImageConsumer as java_awt_image_ImageConsumer } from 'java.awt.image';

  export class ImageProducer {

addConsumer(arg0: java_awt_image_ImageConsumer): void;
isConsumer(arg0: java_awt_image_ImageConsumer): boolean;
removeConsumer(arg0: java_awt_image_ImageConsumer): void;
startProduction(arg0: java_awt_image_ImageConsumer): void;
requestTopDownLeftRightResend(arg0: java_awt_image_ImageConsumer): void;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { Hashtable as java_util_Hashtable } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';

  export class ImageConsumer {
static RANDOMPIXELORDER: number;
static TOPDOWNLEFTRIGHT: number;
static COMPLETESCANLINES: number;
static SINGLEPASS: number;
static SINGLEFRAME: number;
static IMAGEERROR: number;
static SINGLEFRAMEDONE: number;
static STATICIMAGEDONE: number;
static IMAGEABORTED: number;
setProperties(arg0: java_util_Hashtable<java_lang_Object, java_lang_Object>): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_ColorModel, arg5: number[], arg6: number, arg7: number): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_ColorModel, arg5: number[], arg6: number, arg7: number): void;
setDimensions(arg0: number, arg1: number): void;
setColorModel(arg0: java_awt_image_ColorModel): void;
setHints(arg0: number): void;
imageComplete(arg0: number): void;

  }
}//@ts-nocheck

declare module 'java.awt.im' {
import { InputContext as java_awt_im_InputContext } from 'java.awt.im';
import { Locale as java_util_Locale } from 'java.util';
import { Subset as java_lang_Character_Subset } from 'java.lang.Character';
import { Object as java_lang_Object } from 'java.lang';
import { Component as java_awt_Component, AWTEvent as java_awt_AWTEvent } from 'java.awt';

  export class InputContext extends java_lang_Object {
static instance: java_awt_im_InputContext;
locale: java_util_Locale;
inputMethodControlObject: java_lang_Object;
static getInstance(): java_awt_im_InputContext;
getLocale(): java_util_Locale;
dispose(): void;
endComposition(): void;
selectInputMethod(arg0: java_util_Locale): boolean;
setCharacterSubsets(arg0: java_lang_Character_Subset[]): void;
setCompositionEnabled(arg0: boolean): void;
isCompositionEnabled(): boolean;
reconvert(): void;
getInputMethodControlObject(): java_lang_Object;
removeNotify(arg0: java_awt_Component): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { DropTargetDropEvent as java_awt_dnd_DropTargetDropEvent, DropTargetListener as java_awt_dnd_DropTargetListener, DropTargetDragEvent as java_awt_dnd_DropTargetDragEvent, DropTargetEvent as java_awt_dnd_DropTargetEvent, DropTargetContext as java_awt_dnd_DropTargetContext } from 'java.awt.dnd';
import { Component as java_awt_Component } from 'java.awt';
import { FlavorMap as java_awt_datatransfer_FlavorMap } from 'java.awt.datatransfer';
import { ComponentPeer as java_awt_peer_ComponentPeer } from 'java.awt.peer';
import { DropTargetPeer as java_awt_dnd_peer_DropTargetPeer } from 'java.awt.dnd.peer';
import { DropTargetAutoScroller as java_awt_dnd_DropTarget_DropTargetAutoScroller } from 'java.awt.dnd.DropTarget';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DropTarget extends java_lang_Object implements java_awt_dnd_DropTargetListener, java_io_Serializable {
static serialVersionUID: number;
dropTargetContext: java_awt_dnd_DropTargetContext;
component: java_awt_Component;
componentPeer: java_awt_peer_ComponentPeer;
nativePeer: java_awt_dnd_peer_DropTargetPeer;
actions: number;
active: boolean;
autoScroller: java_awt_dnd_DropTarget_DropTargetAutoScroller;
dtListener: java_awt_dnd_DropTargetListener;
flavorMap: java_awt_datatransfer_FlavorMap;
isDraggingInside: boolean;
defaultActions: number;
flavorMap: java_awt_datatransfer_FlavorMap;
dropTargetContext: java_awt_dnd_DropTargetContext;
component: java_awt_Component;
isActive(): boolean;
drop(arg0: java_awt_dnd_DropTargetDropEvent): void;
setActive(arg0: boolean): void;
setComponent(arg0: java_awt_Component): void;
setDefaultActions(arg0: number): void;
getDefaultActions(): number;
addDropTargetListener(arg0: java_awt_dnd_DropTargetListener): void;
removeDropTargetListener(arg0: java_awt_dnd_DropTargetListener): void;
dragEnter(arg0: java_awt_dnd_DropTargetDragEvent): void;
dragOver(arg0: java_awt_dnd_DropTargetDragEvent): void;
dropActionChanged(arg0: java_awt_dnd_DropTargetDragEvent): void;
dragExit(arg0: java_awt_dnd_DropTargetEvent): void;
getFlavorMap(): java_awt_datatransfer_FlavorMap;
setFlavorMap(arg0: java_awt_datatransfer_FlavorMap): void;
getDropTargetContext(): java_awt_dnd_DropTargetContext;
addNotify(): void;
removeNotify(): void;
getComponent(): java_awt_Component;
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_dnd_DropTargetListener);
constructor(arg0: java_awt_Component, arg1: java_awt_dnd_DropTargetListener);
constructor();
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_dnd_DropTargetListener, arg3: boolean);
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_dnd_DropTargetListener, arg3: boolean, arg4: java_awt_datatransfer_FlavorMap);
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Point as java_awt_Point } from 'java.awt';
import { DataFlavor as java_awt_datatransfer_DataFlavor, Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { List as java_util_List } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DropTargetContext as java_awt_dnd_DropTargetContext, DropTargetEvent as java_awt_dnd_DropTargetEvent } from 'java.awt.dnd';

  export class DropTargetDropEvent extends java_awt_dnd_DropTargetEvent {
static serialVersionUID: number;
static zero: java_awt_Point;
location: java_awt_Point;
actions: number;
dropAction: number;
isLocalTx: boolean;
location: java_awt_Point;
sourceActions: number;
currentDataFlavors: java_awt_datatransfer_DataFlavor[];
currentDataFlavorsAsList: java_util_List<java_awt_datatransfer_DataFlavor>;
dropAction: number;
transferable: java_awt_datatransfer_Transferable;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getLocation(): java_awt_Point;
rejectDrop(): void;
isDataFlavorSupported(arg0: java_awt_datatransfer_DataFlavor): boolean;
getSourceActions(): number;
getCurrentDataFlavors(): java_awt_datatransfer_DataFlavor[];
getCurrentDataFlavorsAsList(): java_util_List<java_awt_datatransfer_DataFlavor>;
getDropAction(): number;
getTransferable(): java_awt_datatransfer_Transferable;
acceptDrop(arg0: number): void;
dropComplete(arg0: boolean): void;
isLocalTransfer(): boolean;
toString(): string;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_dnd_DropTargetContext, arg1: java_awt_Point, arg2: number, arg3: number);
constructor(arg0: java_awt_dnd_DropTargetContext, arg1: java_awt_Point, arg2: number, arg3: number, arg4: boolean);
  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Object as java_lang_Object, Class as java_lang_Class, ClassLoader as java_lang_ClassLoader, Cloneable as java_lang_Cloneable } from 'java.lang';
import { DataFlavor as java_awt_datatransfer_DataFlavor, Transferable as java_awt_datatransfer_Transferable, MimeType as java_awt_datatransfer_MimeType } from 'java.awt.datatransfer';
import { ObjectOutput as java_io_ObjectOutput, ObjectInput as java_io_ObjectInput, Reader as java_io_Reader, InputStream as java_io_InputStream, Externalizable as java_io_Externalizable } from 'java.io';

  export class DataFlavor extends java_lang_Object implements java_io_Externalizable, java_lang_Cloneable {
static serialVersionUID: number;
static ioInputStreamClass: java_lang_Class<java_io_InputStream>;
static stringFlavor: java_awt_datatransfer_DataFlavor;
static imageFlavor: java_awt_datatransfer_DataFlavor;
static plainTextFlavor: java_awt_datatransfer_DataFlavor;
static javaSerializedObjectMimeType: string;
static javaFileListFlavor: java_awt_datatransfer_DataFlavor;
static javaJVMLocalObjectMimeType: string;
static javaRemoteObjectMimeType: string;
static selectionHtmlFlavor: java_awt_datatransfer_DataFlavor;
static fragmentHtmlFlavor: java_awt_datatransfer_DataFlavor;
static allHtmlFlavor: java_awt_datatransfer_DataFlavor;
atom: number;
mimeType: java_awt_datatransfer_MimeType;
humanPresentableName: string;
representationClass: java_lang_Class<java_lang_Object>;
readerForText: java_io_Reader;
representationClass: java_lang_Class<java_lang_Object>;
humanPresentableName: string;
primaryType: string;
subType: string;
defaultRepresentationClass: java_lang_Class<java_lang_Object>;
defaultRepresentationClassAsString: string;
parameter: string;
static textPlainUnicodeFlavor: java_awt_datatransfer_DataFlavor;
mimeType: string;
equals(arg0: java_lang_Object): boolean;
equals(arg0: string): boolean;
equals(arg0: java_awt_datatransfer_DataFlavor): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
match(arg0: java_awt_datatransfer_DataFlavor): boolean;
writeExternal(arg0: java_io_ObjectOutput): void;
readExternal(arg0: java_io_ObjectInput): void;
static selectBestTextFlavor(arg0: java_awt_datatransfer_DataFlavor[]): java_awt_datatransfer_DataFlavor;
getReaderForText(arg0: java_awt_datatransfer_Transferable): java_io_Reader;
getRepresentationClass(): java_lang_Class<java_lang_Object>;
getHumanPresentableName(): string;
getPrimaryType(): string;
getSubType(): string;
setHumanPresentableName(arg0: string): void;
isMimeTypeEqual(arg0: java_awt_datatransfer_DataFlavor): boolean;
isMimeTypeEqual(arg0: string): boolean;
isMimeTypeSerializedObject(): boolean;
getDefaultRepresentationClass(): java_lang_Class<java_lang_Object>;
getDefaultRepresentationClassAsString(): string;
isRepresentationClassInputStream(): boolean;
isRepresentationClassReader(): boolean;
isRepresentationClassCharBuffer(): boolean;
isRepresentationClassByteBuffer(): boolean;
isRepresentationClassSerializable(): boolean;
isRepresentationClassRemote(): boolean;
isFlavorSerializedObjectType(): boolean;
isFlavorRemoteObjectType(): boolean;
isFlavorJavaFileListType(): boolean;
isFlavorTextType(): boolean;
getParameter(arg0: string): string;
static getTextPlainUnicodeFlavor(): java_awt_datatransfer_DataFlavor;
getMimeType(): string;
constructor();
constructor(arg0: string);
constructor(arg0: java_lang_Class<java_lang_Object>, arg1: string);
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: string, arg2: java_lang_ClassLoader);
  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { DataFlavor as java_awt_datatransfer_DataFlavor } from 'java.awt.datatransfer';
import { Object as java_lang_Object } from 'java.lang';

  export class Transferable {
transferDataFlavors: java_awt_datatransfer_DataFlavor[];
transferData: java_lang_Object;
getTransferDataFlavors(): java_awt_datatransfer_DataFlavor[];
isDataFlavorSupported(arg0: java_awt_datatransfer_DataFlavor): boolean;
getTransferData(arg0: java_awt_datatransfer_DataFlavor): java_lang_Object;

  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { MimeType as java_awt_datatransfer_MimeType, MimeTypeParameterList as java_awt_datatransfer_MimeTypeParameterList } from 'java.awt.datatransfer';
import { ObjectOutput as java_io_ObjectOutput, ObjectInput as java_io_ObjectInput, Externalizable as java_io_Externalizable } from 'java.io';

  export class MimeType extends java_lang_Object implements java_io_Externalizable, java_lang_Cloneable {
static serialVersionUID: number;
primaryType: string;
subType: string;
parameters: java_awt_datatransfer_MimeTypeParameterList;
static TSPECIALS: string;
parameters: java_awt_datatransfer_MimeTypeParameterList;
primaryType: string;
subType: string;
baseType: string;
parameter: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
match(arg0: string): boolean;
match(arg0: java_awt_datatransfer_MimeType): boolean;
getParameters(): java_awt_datatransfer_MimeTypeParameterList;
writeExternal(arg0: java_io_ObjectOutput): void;
readExternal(arg0: java_io_ObjectInput): void;
getPrimaryType(): string;
getSubType(): string;
removeParameter(arg0: string): void;
getBaseType(): string;
getParameter(arg0: string): string;
setParameter(arg0: string, arg1: string): void;
constructor(arg0: string, arg1: string, arg2: java_awt_datatransfer_MimeTypeParameterList);
constructor(arg0: string, arg1: string);
constructor(arg0: string);
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Enumeration as java_util_Enumeration, Hashtable as java_util_Hashtable } from 'java.util';

  export class MimeTypeParameterList extends java_lang_Object implements java_lang_Cloneable {
parameters: java_util_Hashtable<string, string>;
static TSPECIALS: string;
names: java_util_Enumeration<string>;
remove(arg0: string): void;
get(arg0: string): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
isEmpty(): boolean;
size(): number;
set(arg0: string, arg1: string): void;
getNames(): java_util_Enumeration<string>;
constructor();
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { Component as java_awt_Component } from 'java.awt';
import { DropTargetContextPeer as java_awt_dnd_peer_DropTargetContextPeer } from 'java.awt.dnd.peer';
import { Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DropTargetContext extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
dropTarget: java_awt_dnd_DropTarget;
dropTargetContextPeer: java_awt_dnd_peer_DropTargetContextPeer;
transferable: java_awt_datatransfer_Transferable;
dropTarget: java_awt_dnd_DropTarget;
component: java_awt_Component;
getDropTarget(): java_awt_dnd_DropTarget;
dropComplete(arg0: boolean): void;
getComponent(): java_awt_Component;

  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { DropTargetContext as java_awt_dnd_DropTargetContext } from 'java.awt.dnd';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EventObject as java_util_EventObject } from 'java.util';

  export class DropTargetEvent extends java_util_EventObject {
static serialVersionUID: number;
context: java_awt_dnd_DropTargetContext;
dropTargetContext: java_awt_dnd_DropTargetContext;
class: java_lang_Class<java_lang_Object>;
getDropTargetContext(): java_awt_dnd_DropTargetContext;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_dnd_DropTargetContext);
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { DropTargetDropEvent as java_awt_dnd_DropTargetDropEvent, DropTargetDragEvent as java_awt_dnd_DropTargetDragEvent, DropTargetEvent as java_awt_dnd_DropTargetEvent } from 'java.awt.dnd';
import { EventListener as java_util_EventListener } from 'java.util';

  export class DropTargetListener implements java_util_EventListener {

drop(arg0: java_awt_dnd_DropTargetDropEvent): void;
dragEnter(arg0: java_awt_dnd_DropTargetDragEvent): void;
dragOver(arg0: java_awt_dnd_DropTargetDragEvent): void;
dropActionChanged(arg0: java_awt_dnd_DropTargetDragEvent): void;
dragExit(arg0: java_awt_dnd_DropTargetEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Point as java_awt_Point } from 'java.awt';
import { DataFlavor as java_awt_datatransfer_DataFlavor, Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { List as java_util_List } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DropTargetContext as java_awt_dnd_DropTargetContext, DropTargetEvent as java_awt_dnd_DropTargetEvent } from 'java.awt.dnd';

  export class DropTargetDragEvent extends java_awt_dnd_DropTargetEvent {
static serialVersionUID: number;
location: java_awt_Point;
actions: number;
dropAction: number;
location: java_awt_Point;
sourceActions: number;
currentDataFlavors: java_awt_datatransfer_DataFlavor[];
currentDataFlavorsAsList: java_util_List<java_awt_datatransfer_DataFlavor>;
dropAction: number;
transferable: java_awt_datatransfer_Transferable;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getLocation(): java_awt_Point;
isDataFlavorSupported(arg0: java_awt_datatransfer_DataFlavor): boolean;
getSourceActions(): number;
getCurrentDataFlavors(): java_awt_datatransfer_DataFlavor[];
getCurrentDataFlavorsAsList(): java_util_List<java_awt_datatransfer_DataFlavor>;
getDropAction(): number;
getTransferable(): java_awt_datatransfer_Transferable;
acceptDrag(arg0: number): void;
rejectDrag(): void;
toString(): string;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_dnd_DropTargetContext, arg1: java_awt_Point, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { DataFlavor as java_awt_datatransfer_DataFlavor } from 'java.awt.datatransfer';
import { Map as java_util_Map } from 'java.util';

  export class FlavorMap {
nativesForFlavors: java_util_Map<java_awt_datatransfer_DataFlavor, string>;
flavorsForNatives: java_util_Map<string, java_awt_datatransfer_DataFlavor>;
getNativesForFlavors(arg0: java_awt_datatransfer_DataFlavor[]): java_util_Map<java_awt_datatransfer_DataFlavor, string>;
getFlavorsForNatives(arg0: string[]): java_util_Map<string, java_awt_datatransfer_DataFlavor>;

  }
}//@ts-nocheck

declare module 'java.awt.dnd.DropTarget' {
import { ActionEvent as java_awt_event_ActionEvent, ActionListener as java_awt_event_ActionListener } from 'java.awt.event';
import { Component as java_awt_Component, Point as java_awt_Point, Rectangle as java_awt_Rectangle } from 'java.awt';
import { Autoscroll as java_awt_dnd_Autoscroll } from 'java.awt.dnd';
import { Timer as javax_swing_Timer } from 'javax.swing';
import { Object as java_lang_Object } from 'java.lang';

  export class DropTargetAutoScroller extends java_lang_Object implements java_awt_event_ActionListener {
component: java_awt_Component;
autoScroll: java_awt_dnd_Autoscroll;
timer: javax_swing_Timer;
locn: java_awt_Point;
prev: java_awt_Point;
outer: java_awt_Rectangle;
inner: java_awt_Rectangle;
hysteresis: number;
actionPerformed(arg0: java_awt_event_ActionEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Insets as java_awt_Insets, Point as java_awt_Point } from 'java.awt';

  export class Autoscroll {
autoscrollInsets: java_awt_Insets;
getAutoscrollInsets(): java_awt_Insets;
autoscroll(arg0: java_awt_Point): void;

  }
}//@ts-nocheck

declare module 'java.awt.Component' {
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class BaselineResizeBehavior extends java_lang_Enum<java_awt_Component_BaselineResizeBehavior> {
static CONSTANT_ASCENT: java_awt_Component_BaselineResizeBehavior;
static CONSTANT_DESCENT: java_awt_Component_BaselineResizeBehavior;
static CENTER_OFFSET: java_awt_Component_BaselineResizeBehavior;
static OTHER: java_awt_Component_BaselineResizeBehavior;
static $VALUES: java_awt_Component_BaselineResizeBehavior[];
class: java_lang_Class<java_lang_Object>;
static values(): java_awt_Component_BaselineResizeBehavior[];
static valueOf(arg0: string): java_awt_Component_BaselineResizeBehavior;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';

  export class ImageCapabilities extends java_lang_Object implements java_lang_Cloneable {
accelerated: boolean;
clone(): java_lang_Object;
isAccelerated(): boolean;
isTrueVolatile(): boolean;
constructor(arg0: boolean);
  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { GraphicsConfiguration as java_awt_GraphicsConfiguration, Graphics as java_awt_Graphics, Graphics2D as java_awt_Graphics2D, ImageCapabilities as java_awt_ImageCapabilities, Image as java_awt_Image, Transparency as java_awt_Transparency } from 'java.awt';
import { BufferedImage as java_awt_image_BufferedImage, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class VolatileImage extends java_awt_Image implements java_awt_Transparency {
static IMAGE_OK: number;
static IMAGE_RESTORED: number;
static IMAGE_INCOMPATIBLE: number;
transparency: number;
snapshot: java_awt_image_BufferedImage;
graphics: java_awt_Graphics;
transparency: number;
capabilities: java_awt_ImageCapabilities;
source: java_awt_image_ImageProducer;
width: number;
height: number;
class: java_lang_Class<java_lang_Object>;
validate(arg0: java_awt_GraphicsConfiguration): number;
getSnapshot(): java_awt_image_BufferedImage;
getGraphics(): java_awt_Graphics;
createGraphics(): java_awt_Graphics2D;
getTransparency(): number;
getCapabilities(): java_awt_ImageCapabilities;
contentsLost(): boolean;
getSource(): java_awt_image_ImageProducer;
getWidth(): number;
getHeight(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ImageObserver as java_awt_image_ImageObserver, Raster as java_awt_image_Raster, ColorModel as java_awt_image_ColorModel, SampleModel as java_awt_image_SampleModel, WritableRaster as java_awt_image_WritableRaster, BufferedImage as java_awt_image_BufferedImage, TileObserver as java_awt_image_TileObserver, ImageProducer as java_awt_image_ImageProducer, RenderedImage as java_awt_image_RenderedImage, IndexColorModel as java_awt_image_IndexColorModel, WritableRenderedImage as java_awt_image_WritableRenderedImage } from 'java.awt.image';
import { Rectangle as java_awt_Rectangle, Graphics as java_awt_Graphics, Graphics2D as java_awt_Graphics2D, Point as java_awt_Point, Image as java_awt_Image, Transparency as java_awt_Transparency } from 'java.awt';
import { Vector as java_util_Vector, Hashtable as java_util_Hashtable } from 'java.util';
import { OffScreenImageSource as sun_awt_image_OffScreenImageSource } from 'sun.awt.image';

  export class BufferedImage extends java_awt_Image implements java_awt_image_WritableRenderedImage, java_awt_Transparency {
imageType: number;
colorModel: java_awt_image_ColorModel;
raster: java_awt_image_WritableRaster;
osis: sun_awt_image_OffScreenImageSource;
properties: java_util_Hashtable<string, java_lang_Object>;
static TYPE_CUSTOM: number;
static TYPE_INT_RGB: number;
static TYPE_INT_ARGB: number;
static TYPE_INT_ARGB_PRE: number;
static TYPE_INT_BGR: number;
static TYPE_3BYTE_BGR: number;
static TYPE_4BYTE_ABGR: number;
static TYPE_4BYTE_ABGR_PRE: number;
static TYPE_USHORT_565_RGB: number;
static TYPE_USHORT_555_RGB: number;
static TYPE_BYTE_GRAY: number;
static TYPE_USHORT_GRAY: number;
static TYPE_BYTE_BINARY: number;
static TYPE_BYTE_INDEXED: number;
static DCM_RED_MASK: number;
static DCM_GREEN_MASK: number;
static DCM_BLUE_MASK: number;
static DCM_ALPHA_MASK: number;
static DCM_565_RED_MASK: number;
static DCM_565_GRN_MASK: number;
static DCM_565_BLU_MASK: number;
static DCM_555_RED_MASK: number;
static DCM_555_GRN_MASK: number;
static DCM_555_BLU_MASK: number;
static DCM_BGR_RED_MASK: number;
static DCM_BGR_GRN_MASK: number;
static DCM_BGR_BLU_MASK: number;
property: java_lang_Object;
property: java_lang_Object;
type: number;
data: java_awt_image_Raster;
data: java_awt_image_Raster;
propertyNames: string[];
colorModel: java_awt_image_ColorModel;
sampleModel: java_awt_image_SampleModel;
minY: number;
numXTiles: number;
numYTiles: number;
minTileX: number;
minTileY: number;
tileWidth: number;
tileHeight: number;
tileGridXOffset: number;
tileGridYOffset: number;
tile: java_awt_image_Raster;
raster: java_awt_image_WritableRaster;
alphaRaster: java_awt_image_WritableRaster;
rGB: number;
rGB: number[];
graphics: java_awt_Graphics;
subimage: java_awt_image_BufferedImage;
writableTileIndices: java_awt_Point[];
writableTile: java_awt_image_WritableRaster;
transparency: number;
source: java_awt_image_ImageProducer;
sources: java_util_Vector<java_awt_image_RenderedImage>;
width: number;
width: number;
height: number;
height: number;
minX: number;
class: java_lang_Class<java_lang_Object>;
getProperty(arg0: string): java_lang_Object;
getProperty(arg0: string, arg1: java_awt_image_ImageObserver): java_lang_Object;
toString(): string;
getType(): number;
getData(arg0: java_awt_Rectangle): java_awt_image_Raster;
getData(): java_awt_image_Raster;
setData(arg0: java_awt_image_Raster): void;
getPropertyNames(): string[];
getColorModel(): java_awt_image_ColorModel;
getSampleModel(): java_awt_image_SampleModel;
getMinY(): number;
getNumXTiles(): number;
getNumYTiles(): number;
getMinTileX(): number;
getMinTileY(): number;
getTileWidth(): number;
getTileHeight(): number;
getTileGridXOffset(): number;
getTileGridYOffset(): number;
getTile(arg0: number, arg1: number): java_awt_image_Raster;
copyData(arg0: java_awt_image_WritableRaster): java_awt_image_WritableRaster;
getRaster(): java_awt_image_WritableRaster;
getAlphaRaster(): java_awt_image_WritableRaster;
getRGB(arg0: number, arg1: number): number;
getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];
setRGB(arg0: number, arg1: number, arg2: number): void;
setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;
getGraphics(): java_awt_Graphics;
createGraphics(): java_awt_Graphics2D;
getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_image_BufferedImage;
isAlphaPremultiplied(): boolean;
coerceData(arg0: boolean): void;
addTileObserver(arg0: java_awt_image_TileObserver): void;
removeTileObserver(arg0: java_awt_image_TileObserver): void;
isTileWritable(arg0: number, arg1: number): boolean;
getWritableTileIndices(): java_awt_Point[];
hasTileWriters(): boolean;
getWritableTile(arg0: number, arg1: number): java_awt_image_WritableRaster;
releaseWritableTile(arg0: number, arg1: number): void;
getTransparency(): number;
getSource(): java_awt_image_ImageProducer;
getSources(): java_util_Vector<java_awt_image_RenderedImage>;
getWidth(arg0: java_awt_image_ImageObserver): number;
getWidth(): number;
getHeight(arg0: java_awt_image_ImageObserver): number;
getHeight(): number;
getMinX(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: number, arg2: number, arg3: java_awt_image_IndexColorModel);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: java_awt_image_ColorModel, arg1: java_awt_image_WritableRaster, arg2: boolean, arg3: java_util_Hashtable<java_lang_Object, java_lang_Object>);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Shape as java_awt_Shape, Rectangle as java_awt_Rectangle, GraphicsConfiguration as java_awt_GraphicsConfiguration, Paint as java_awt_Paint, Stroke as java_awt_Stroke, RenderingHints as java_awt_RenderingHints, Composite as java_awt_Composite, Image as java_awt_Image, Color as java_awt_Color, Graphics as java_awt_Graphics } from 'java.awt';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { RenderedImage as java_awt_image_RenderedImage, ImageObserver as java_awt_image_ImageObserver, BufferedImage as java_awt_image_BufferedImage, BufferedImageOp as java_awt_image_BufferedImageOp } from 'java.awt.image';
import { RenderableImage as java_awt_image_renderable_RenderableImage } from 'java.awt.image.renderable';
import { GlyphVector as java_awt_font_GlyphVector, FontRenderContext as java_awt_font_FontRenderContext } from 'java.awt.font';
import { Key as java_awt_RenderingHints_Key } from 'java.awt.RenderingHints';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';

  export class Graphics2D extends java_awt_Graphics {
deviceConfiguration: java_awt_GraphicsConfiguration;
renderingHint: java_lang_Object;
renderingHints: java_awt_RenderingHints;
paint: java_awt_Paint;
composite: java_awt_Composite;
stroke: java_awt_Stroke;
transform: java_awt_geom_AffineTransform;
fontRenderContext: java_awt_font_FontRenderContext;
background: java_awt_Color;
class: java_lang_Class<java_lang_Object>;
fill(arg0: java_awt_Shape): void;
scale(arg0: number, arg1: number): void;
rotate(arg0: number): void;
rotate(arg0: number, arg1: number, arg2: number): void;
transform(arg0: java_awt_geom_AffineTransform): void;
hit(arg0: java_awt_Rectangle, arg1: java_awt_Shape, arg2: boolean): boolean;
draw(arg0: java_awt_Shape): void;
drawRenderedImage(arg0: java_awt_image_RenderedImage, arg1: java_awt_geom_AffineTransform): void;
drawRenderableImage(arg0: java_awt_image_renderable_RenderableImage, arg1: java_awt_geom_AffineTransform): void;
drawGlyphVector(arg0: java_awt_font_GlyphVector, arg1: number, arg2: number): void;
getDeviceConfiguration(): java_awt_GraphicsConfiguration;
setPaint(arg0: java_awt_Paint): void;
setStroke(arg0: java_awt_Stroke): void;
setRenderingHint(arg0: java_awt_RenderingHints_Key, arg1: java_lang_Object): void;
getRenderingHint(arg0: java_awt_RenderingHints_Key): java_lang_Object;
setRenderingHints(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
addRenderingHints(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
getRenderingHints(): java_awt_RenderingHints;
getPaint(): java_awt_Paint;
getComposite(): java_awt_Composite;
getStroke(): java_awt_Stroke;
drawImage(arg0: java_awt_Image, arg1: java_awt_geom_AffineTransform, arg2: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_image_BufferedImage, arg1: java_awt_image_BufferedImageOp, arg2: number, arg3: number): void;
getTransform(): java_awt_geom_AffineTransform;
setComposite(arg0: java_awt_Composite): void;
clip(arg0: java_awt_Shape): void;
setTransform(arg0: java_awt_geom_AffineTransform): void;
draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
drawString(arg0: string, arg1: number, arg2: number): void;
drawString(arg0: java_text_AttributedCharacterIterator, arg1: number, arg2: number): void;
drawString(arg0: java_text_AttributedCharacterIterator, arg1: number, arg2: number): void;
drawString(arg0: string, arg1: number, arg2: number): void;
getFontRenderContext(): java_awt_font_FontRenderContext;
getBackground(): java_awt_Color;
setBackground(arg0: java_awt_Color): void;
shear(arg0: number, arg1: number): void;
translate(arg0: number, arg1: number): void;
translate(arg0: number, arg1: number): void;
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

declare module 'java.awt.image' {
import { Object as java_lang_Object } from 'java.lang';
import { Raster as java_awt_image_Raster, ColorModel as java_awt_image_ColorModel, SampleModel as java_awt_image_SampleModel, WritableRaster as java_awt_image_WritableRaster, RenderedImage as java_awt_image_RenderedImage } from 'java.awt.image';
import { Rectangle as java_awt_Rectangle } from 'java.awt';
import { Vector as java_util_Vector } from 'java.util';

  export class RenderedImage {
property: java_lang_Object;
data: java_awt_image_Raster;
data: java_awt_image_Raster;
propertyNames: string[];
colorModel: java_awt_image_ColorModel;
sampleModel: java_awt_image_SampleModel;
minY: number;
numXTiles: number;
numYTiles: number;
minTileX: number;
minTileY: number;
tileWidth: number;
tileHeight: number;
tileGridXOffset: number;
tileGridYOffset: number;
tile: java_awt_image_Raster;
sources: java_util_Vector<java_awt_image_RenderedImage>;
width: number;
height: number;
minX: number;
getProperty(arg0: string): java_lang_Object;
getData(): java_awt_image_Raster;
getData(arg0: java_awt_Rectangle): java_awt_image_Raster;
getPropertyNames(): string[];
getColorModel(): java_awt_image_ColorModel;
getSampleModel(): java_awt_image_SampleModel;
getMinY(): number;
getNumXTiles(): number;
getNumYTiles(): number;
getMinTileX(): number;
getMinTileY(): number;
getTileWidth(): number;
getTileHeight(): number;
getTileGridXOffset(): number;
getTileGridYOffset(): number;
getTile(arg0: number, arg1: number): java_awt_image_Raster;
copyData(arg0: java_awt_image_WritableRaster): java_awt_image_WritableRaster;
getSources(): java_util_Vector<java_awt_image_RenderedImage>;
getWidth(): number;
getHeight(): number;
getMinX(): number;

  }
}//@ts-nocheck

declare module 'java.awt.image.renderable' {
import { Object as java_lang_Object } from 'java.lang';
import { RenderingHints as java_awt_RenderingHints } from 'java.awt';
import { RenderedImage as java_awt_image_RenderedImage } from 'java.awt.image';
import { RenderContext as java_awt_image_renderable_RenderContext, RenderableImage as java_awt_image_renderable_RenderableImage } from 'java.awt.image.renderable';
import { Vector as java_util_Vector } from 'java.util';

  export class RenderableImage {
static HINTS_OBSERVED: string;
property: java_lang_Object;
propertyNames: string[];
minY: number;
sources: java_util_Vector<java_awt_image_renderable_RenderableImage>;
width: number;
height: number;
minX: number;
getProperty(arg0: string): java_lang_Object;
createScaledRendering(arg0: number, arg1: number, arg2: java_awt_RenderingHints): java_awt_image_RenderedImage;
createDefaultRendering(): java_awt_image_RenderedImage;
createRendering(arg0: java_awt_image_renderable_RenderContext): java_awt_image_RenderedImage;
isDynamic(): boolean;
getPropertyNames(): string[];
getMinY(): number;
getSources(): java_util_Vector<java_awt_image_renderable_RenderableImage>;
getWidth(): number;
getHeight(): number;
getMinX(): number;

  }
}//@ts-nocheck

declare module 'java.awt.image.renderable' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { RenderingHints as java_awt_RenderingHints, Shape as java_awt_Shape } from 'java.awt';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';

  export class RenderContext extends java_lang_Object implements java_lang_Cloneable {
hints: java_awt_RenderingHints;
usr2dev: java_awt_geom_AffineTransform;
aoi: java_awt_Shape;
renderingHints: java_awt_RenderingHints;
areaOfInterest: java_awt_Shape;
transform: java_awt_geom_AffineTransform;
clone(): java_lang_Object;
setRenderingHints(arg0: java_awt_RenderingHints): void;
getRenderingHints(): java_awt_RenderingHints;
preConcatenateTransform(arg0: java_awt_geom_AffineTransform): void;
preConcetenateTransform(arg0: java_awt_geom_AffineTransform): void;
concatenateTransform(arg0: java_awt_geom_AffineTransform): void;
concetenateTransform(arg0: java_awt_geom_AffineTransform): void;
setAreaOfInterest(arg0: java_awt_Shape): void;
getAreaOfInterest(): java_awt_Shape;
getTransform(): java_awt_geom_AffineTransform;
setTransform(arg0: java_awt_geom_AffineTransform): void;
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_awt_Shape);
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_awt_RenderingHints);
constructor(arg0: java_awt_geom_AffineTransform);
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_awt_Shape, arg2: java_awt_RenderingHints);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Shape as java_awt_Shape } from 'java.awt';

  export class Stroke {

createStrokedShape(arg0: java_awt_Shape): java_awt_Shape;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { RenderingHints as java_awt_RenderingHints, CompositeContext as java_awt_CompositeContext } from 'java.awt';

  export class Composite {

createContext(arg0: java_awt_image_ColorModel, arg1: java_awt_image_ColorModel, arg2: java_awt_RenderingHints): java_awt_CompositeContext;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Raster as java_awt_image_Raster, WritableRaster as java_awt_image_WritableRaster } from 'java.awt.image';

  export class CompositeContext {

compose(arg0: java_awt_image_Raster, arg1: java_awt_image_Raster, arg2: java_awt_image_WritableRaster): void;
dispose(): void;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { BufferedImage as java_awt_image_BufferedImage, ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { RenderingHints as java_awt_RenderingHints } from 'java.awt';
import { Point2D as java_awt_geom_Point2D, Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';

  export class BufferedImageOp {
renderingHints: java_awt_RenderingHints;
point2D: java_awt_geom_Point2D;
bounds2D: java_awt_geom_Rectangle2D;
filter(arg0: java_awt_image_BufferedImage, arg1: java_awt_image_BufferedImage): java_awt_image_BufferedImage;
getRenderingHints(): java_awt_RenderingHints;
createCompatibleDestImage(arg0: java_awt_image_BufferedImage, arg1: java_awt_image_ColorModel): java_awt_image_BufferedImage;
getPoint2D(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): java_awt_geom_Point2D;
getBounds2D(arg0: java_awt_image_BufferedImage): java_awt_geom_Rectangle2D;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { WritableRenderedImage as java_awt_image_WritableRenderedImage } from 'java.awt.image';

  export class TileObserver {

tileUpdate(arg0: java_awt_image_WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { Raster as java_awt_image_Raster, TileObserver as java_awt_image_TileObserver, WritableRaster as java_awt_image_WritableRaster, ColorModel as java_awt_image_ColorModel, SampleModel as java_awt_image_SampleModel, RenderedImage as java_awt_image_RenderedImage } from 'java.awt.image';
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Vector as java_util_Vector } from 'java.util';

  export class WritableRenderedImage implements java_awt_image_RenderedImage {
writableTileIndices: java_awt_Point[];
writableTile: java_awt_image_WritableRaster;
property: java_lang_Object;
data: java_awt_image_Raster;
data: java_awt_image_Raster;
propertyNames: string[];
colorModel: java_awt_image_ColorModel;
sampleModel: java_awt_image_SampleModel;
minY: number;
numXTiles: number;
numYTiles: number;
minTileX: number;
minTileY: number;
tileWidth: number;
tileHeight: number;
tileGridXOffset: number;
tileGridYOffset: number;
tile: java_awt_image_Raster;
sources: java_util_Vector<java_awt_image_RenderedImage>;
width: number;
height: number;
minX: number;
setData(arg0: java_awt_image_Raster): void;
addTileObserver(arg0: java_awt_image_TileObserver): void;
removeTileObserver(arg0: java_awt_image_TileObserver): void;
isTileWritable(arg0: number, arg1: number): boolean;
getWritableTileIndices(): java_awt_Point[];
hasTileWriters(): boolean;
getWritableTile(arg0: number, arg1: number): java_awt_image_WritableRaster;
releaseWritableTile(arg0: number, arg1: number): void;
getProperty(arg0: string): java_lang_Object;
getData(): java_awt_image_Raster;
getData(arg0: java_awt_Rectangle): java_awt_image_Raster;
getPropertyNames(): string[];
getColorModel(): java_awt_image_ColorModel;
getSampleModel(): java_awt_image_SampleModel;
getMinY(): number;
getNumXTiles(): number;
getNumYTiles(): number;
getMinTileX(): number;
getMinTileY(): number;
getTileWidth(): number;
getTileHeight(): number;
getTileGridXOffset(): number;
getTileGridYOffset(): number;
getTile(arg0: number, arg1: number): java_awt_image_Raster;
copyData(arg0: java_awt_image_WritableRaster): java_awt_image_WritableRaster;
getSources(): java_util_Vector<java_awt_image_RenderedImage>;
getWidth(): number;
getHeight(): number;
getMinX(): number;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Raster as java_awt_image_Raster, BufferedImage as java_awt_image_BufferedImage, WritableRaster as java_awt_image_WritableRaster, SampleModel as java_awt_image_SampleModel, ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { BigInteger as java_math_BigInteger } from 'java.math';
import { ICMColorData as sun_awt_image_BufImgSurfaceData_ICMColorData } from 'sun.awt.image.BufImgSurfaceData';

  export class IndexColorModel extends java_awt_image_ColorModel {
rgb: number[];
map_size: number;
pixel_mask: number;
transparent_index: number;
allgrayopaque: boolean;
validBits: java_math_BigInteger;
hashCode: number;
colorData: sun_awt_image_BufImgSurfaceData_ICMColorData;
static opaqueBits: number[];
static alphaBits: number[];
static CACHESIZE: number;
lookupcache: number[];
red: number;
green: number;
blue: number;
mapSize: number;
transparentPixel: number;
reds: void;
greens: void;
blues: void;
alphas: void;
rGBs: void;
validPixels: java_math_BigInteger;
rGB: number;
transparency: number;
componentSize: number[];
dataElements: java_lang_Object;
dataElements: java_lang_Object;
alpha: number;
dataElement: number;
components: number[];
components: number[];
class: java_lang_Class<java_lang_Object>;
finalize(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
isValid(arg0: number): boolean;
isValid(): boolean;
getRed(arg0: number): number;
getGreen(arg0: number): number;
getBlue(arg0: number): number;
getMapSize(): number;
getTransparentPixel(): number;
getReds(arg0: number[]): void;
getGreens(arg0: number[]): void;
getBlues(arg0: number[]): void;
getAlphas(arg0: number[]): void;
getRGBs(arg0: number[]): void;
convertToIntDiscrete(arg0: java_awt_image_Raster, arg1: boolean): java_awt_image_BufferedImage;
getValidPixels(): java_math_BigInteger;
getRGB(arg0: number): number;
getTransparency(): number;
createCompatibleWritableRaster(arg0: number, arg1: number): java_awt_image_WritableRaster;
isCompatibleRaster(arg0: java_awt_image_Raster): boolean;
getComponentSize(): number[];
getDataElements(arg0: number[], arg1: number, arg2: java_lang_Object): java_lang_Object;
getDataElements(arg0: number, arg1: java_lang_Object): java_lang_Object;
createCompatibleSampleModel(arg0: number, arg1: number): java_awt_image_SampleModel;
getAlpha(arg0: number): number;
getDataElement(arg0: number[], arg1: number): number;
isCompatibleSampleModel(arg0: java_awt_image_SampleModel): boolean;
getComponents(arg0: java_lang_Object, arg1: number[], arg2: number): number[];
getComponents(arg0: number, arg1: number[], arg2: number): number[];
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: java_math_BigInteger);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[]);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class ComponentListener implements java_util_EventListener {

componentResized(arg0: java_awt_event_ComponentEvent): void;
componentMoved(arg0: java_awt_event_ComponentEvent): void;
componentShown(arg0: java_awt_event_ComponentEvent): void;
componentHidden(arg0: java_awt_event_ComponentEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { HierarchyEvent as java_awt_event_HierarchyEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class HierarchyListener implements java_util_EventListener {

hierarchyChanged(arg0: java_awt_event_HierarchyEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component, Container as java_awt_Container, AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class HierarchyEvent extends java_awt_AWTEvent {
static serialVersionUID: number;
static HIERARCHY_FIRST: number;
static HIERARCHY_CHANGED: number;
static ANCESTOR_MOVED: number;
static ANCESTOR_RESIZED: number;
static HIERARCHY_LAST: number;
static PARENT_CHANGED: number;
static DISPLAYABILITY_CHANGED: number;
static SHOWING_CHANGED: number;
changed: java_awt_Component;
changedParent: java_awt_Container;
changeFlags: number;
changed: java_awt_Component;
changedParent: java_awt_Container;
changeFlags: number;
component: java_awt_Component;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
paramString(): string;
getChanged(): java_awt_Component;
getChangedParent(): java_awt_Container;
getChangeFlags(): number;
getComponent(): java_awt_Component;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_Component, arg3: java_awt_Container);
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_Component, arg3: java_awt_Container, arg4: number);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { HierarchyEvent as java_awt_event_HierarchyEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class HierarchyBoundsListener implements java_util_EventListener {

ancestorMoved(arg0: java_awt_event_HierarchyEvent): void;
ancestorResized(arg0: java_awt_event_HierarchyEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { KeyEvent as java_awt_event_KeyEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class KeyListener implements java_util_EventListener {

keyTyped(arg0: java_awt_event_KeyEvent): void;
keyPressed(arg0: java_awt_event_KeyEvent): void;
keyReleased(arg0: java_awt_event_KeyEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.image' {
import { Graphics as java_awt_Graphics, BufferCapabilities as java_awt_BufferCapabilities } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class BufferStrategy extends java_lang_Object {
drawGraphics: java_awt_Graphics;
capabilities: java_awt_BufferCapabilities;
dispose(): void;
show(): void;
getDrawGraphics(): java_awt_Graphics;
contentsRestored(): boolean;
getCapabilities(): java_awt_BufferCapabilities;
contentsLost(): boolean;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { ImageCapabilities as java_awt_ImageCapabilities } from 'java.awt';
import { FlipContents as java_awt_BufferCapabilities_FlipContents } from 'java.awt.BufferCapabilities';

  export class BufferCapabilities extends java_lang_Object implements java_lang_Cloneable {
frontCaps: java_awt_ImageCapabilities;
backCaps: java_awt_ImageCapabilities;
flipContents: java_awt_BufferCapabilities_FlipContents;
frontBufferCapabilities: java_awt_ImageCapabilities;
backBufferCapabilities: java_awt_ImageCapabilities;
flipContents: java_awt_BufferCapabilities_FlipContents;
clone(): java_lang_Object;
getFrontBufferCapabilities(): java_awt_ImageCapabilities;
getBackBufferCapabilities(): java_awt_ImageCapabilities;
isPageFlipping(): boolean;
getFlipContents(): java_awt_BufferCapabilities_FlipContents;
isFullScreenRequired(): boolean;
isMultiBufferAvailable(): boolean;
constructor(arg0: java_awt_ImageCapabilities, arg1: java_awt_ImageCapabilities, arg2: java_awt_BufferCapabilities_FlipContents);
  }
}//@ts-nocheck

declare module 'java.awt.BufferCapabilities' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { FlipContents as java_awt_BufferCapabilities_FlipContents } from 'java.awt.BufferCapabilities';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class FlipContents extends java_awt_AttributeValue {
static I_UNDEFINED: number;
static I_BACKGROUND: number;
static I_PRIOR: number;
static I_COPIED: number;
static NAMES: string[];
static UNDEFINED: java_awt_BufferCapabilities_FlipContents;
static BACKGROUND: java_awt_BufferCapabilities_FlipContents;
static PRIOR: java_awt_BufferCapabilities_FlipContents;
static COPIED: java_awt_BufferCapabilities_FlipContents;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { Object as java_lang_Object } from 'java.lang';

  export class AttributeValue extends java_lang_Object {
static log: sun_util_logging_PlatformLogger;
value: number;
names: string[];
toString(): string;
hashCode(): number;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Menu as java_awt_Menu, MenuComponent as java_awt_MenuComponent, MenuShortcut as java_awt_MenuShortcut, MenuItem as java_awt_MenuItem, MenuContainer as java_awt_MenuContainer } from 'java.awt';
import { Enumeration as java_util_Enumeration, Vector as java_util_Vector } from 'java.util';
import { AccessibleContext as javax_accessibility_AccessibleContext, Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class MenuBar extends java_awt_MenuComponent implements java_awt_MenuContainer, javax_accessibility_Accessible {
menus: java_util_Vector<java_awt_Menu>;
helpMenu: java_awt_Menu;
static base: string;
static nameCounter: number;
static serialVersionUID: number;
menuBarSerializedDataVersion: number;
shortcutMenuItem: java_awt_MenuItem;
accessibleContext: javax_accessibility_AccessibleContext;
helpMenu: java_awt_Menu;
menuCount: number;
menu: java_awt_Menu;
class: java_lang_Class<java_lang_Object>;
add(arg0: java_awt_Menu): java_awt_Menu;
remove(arg0: number): void;
remove(arg0: java_awt_MenuComponent): void;
getShortcutMenuItem(arg0: java_awt_MenuShortcut): java_awt_MenuItem;
shortcuts(): java_util_Enumeration<java_awt_MenuShortcut>;
deleteShortcut(arg0: java_awt_MenuShortcut): void;
addNotify(): void;
removeNotify(): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getHelpMenu(): java_awt_Menu;
setHelpMenu(arg0: java_awt_Menu): void;
getMenuCount(): number;
countMenus(): number;
getMenu(arg0: number): java_awt_Menu;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { JobAttributes as java_awt_JobAttributes } from 'java.awt';
import { DestinationType as java_awt_JobAttributes_DestinationType, DefaultSelectionType as java_awt_JobAttributes_DefaultSelectionType, DialogType as java_awt_JobAttributes_DialogType, MultipleDocumentHandlingType as java_awt_JobAttributes_MultipleDocumentHandlingType, SidesType as java_awt_JobAttributes_SidesType } from 'java.awt.JobAttributes';

  export class JobAttributes extends java_lang_Object implements java_lang_Cloneable {
copies: number;
defaultSelection: java_awt_JobAttributes_DefaultSelectionType;
destination: java_awt_JobAttributes_DestinationType;
dialog: java_awt_JobAttributes_DialogType;
fileName: string;
fromPage: number;
maxPage: number;
minPage: number;
multipleDocumentHandling: java_awt_JobAttributes_MultipleDocumentHandlingType;
pageRanges: int[][];
prFirst: number;
prLast: number;
printer: string;
sides: java_awt_JobAttributes_SidesType;
toPage: number;
fileName: string;
destination: java_awt_JobAttributes_DestinationType;
copies: number;
defaultSelection: java_awt_JobAttributes_DefaultSelectionType;
dialog: java_awt_JobAttributes_DialogType;
fromPage: number;
maxPage: number;
minPage: number;
multipleDocumentHandling: java_awt_JobAttributes_MultipleDocumentHandlingType;
pageRanges: int[][];
printer: string;
sides: java_awt_JobAttributes_SidesType;
toPage: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
set(arg0: java_awt_JobAttributes): void;
getFileName(): string;
getDestination(): java_awt_JobAttributes_DestinationType;
getCopies(): number;
setCopies(arg0: number): void;
setCopiesToDefault(): void;
getDefaultSelection(): java_awt_JobAttributes_DefaultSelectionType;
setDefaultSelection(arg0: java_awt_JobAttributes_DefaultSelectionType): void;
getDialog(): java_awt_JobAttributes_DialogType;
setDialog(arg0: java_awt_JobAttributes_DialogType): void;
getFromPage(): number;
setFromPage(arg0: number): void;
getMaxPage(): number;
setMaxPage(arg0: number): void;
getMinPage(): number;
setMinPage(arg0: number): void;
getMultipleDocumentHandling(): java_awt_JobAttributes_MultipleDocumentHandlingType;
setMultipleDocumentHandling(arg0: java_awt_JobAttributes_MultipleDocumentHandlingType): void;
setMultipleDocumentHandlingToDefault(): void;
getPageRanges(): int[][];
setPageRanges(arg0: int[][]): void;
getPrinter(): string;
setPrinter(arg0: string): void;
getSides(): java_awt_JobAttributes_SidesType;
setSides(arg0: java_awt_JobAttributes_SidesType): void;
setSidesToDefault(): void;
getToPage(): number;
setToPage(arg0: number): void;
setFileName(arg0: string): void;
setDestination(arg0: java_awt_JobAttributes_DestinationType): void;
constructor(arg0: number, arg1: java_awt_JobAttributes_DefaultSelectionType, arg2: java_awt_JobAttributes_DestinationType, arg3: java_awt_JobAttributes_DialogType, arg4: string, arg5: number, arg6: number, arg7: java_awt_JobAttributes_MultipleDocumentHandlingType, arg8: int[][], arg9: string, arg10: java_awt_JobAttributes_SidesType);
constructor(arg0: java_awt_JobAttributes);
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DestinationType as java_awt_JobAttributes_DestinationType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class DestinationType extends java_awt_AttributeValue {
static I_FILE: number;
static I_PRINTER: number;
static NAMES: string[];
static FILE: java_awt_JobAttributes_DestinationType;
static PRINTER: java_awt_JobAttributes_DestinationType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DefaultSelectionType as java_awt_JobAttributes_DefaultSelectionType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class DefaultSelectionType extends java_awt_AttributeValue {
static I_ALL: number;
static I_RANGE: number;
static I_SELECTION: number;
static NAMES: string[];
static ALL: java_awt_JobAttributes_DefaultSelectionType;
static RANGE: java_awt_JobAttributes_DefaultSelectionType;
static SELECTION: java_awt_JobAttributes_DefaultSelectionType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DialogType as java_awt_JobAttributes_DialogType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class DialogType extends java_awt_AttributeValue {
static I_COMMON: number;
static I_NATIVE: number;
static I_NONE: number;
static NAMES: string[];
static COMMON: java_awt_JobAttributes_DialogType;
static NATIVE: java_awt_JobAttributes_DialogType;
static NONE: java_awt_JobAttributes_DialogType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MultipleDocumentHandlingType as java_awt_JobAttributes_MultipleDocumentHandlingType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class MultipleDocumentHandlingType extends java_awt_AttributeValue {
static I_SEPARATE_DOCUMENTS_COLLATED_COPIES: number;
static I_SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: number;
static NAMES: string[];
static SEPARATE_DOCUMENTS_COLLATED_COPIES: java_awt_JobAttributes_MultipleDocumentHandlingType;
static SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: java_awt_JobAttributes_MultipleDocumentHandlingType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SidesType as java_awt_JobAttributes_SidesType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class SidesType extends java_awt_AttributeValue {
static I_ONE_SIDED: number;
static I_TWO_SIDED_LONG_EDGE: number;
static I_TWO_SIDED_SHORT_EDGE: number;
static NAMES: string[];
static ONE_SIDED: java_awt_JobAttributes_SidesType;
static TWO_SIDED_LONG_EDGE: java_awt_JobAttributes_SidesType;
static TWO_SIDED_SHORT_EDGE: java_awt_JobAttributes_SidesType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { PageAttributes as java_awt_PageAttributes } from 'java.awt';
import { OriginType as java_awt_PageAttributes_OriginType, MediaType as java_awt_PageAttributes_MediaType, OrientationRequestedType as java_awt_PageAttributes_OrientationRequestedType, PrintQualityType as java_awt_PageAttributes_PrintQualityType, ColorType as java_awt_PageAttributes_ColorType } from 'java.awt.PageAttributes';

  export class PageAttributes extends java_lang_Object implements java_lang_Cloneable {
color: java_awt_PageAttributes_ColorType;
media: java_awt_PageAttributes_MediaType;
orientationRequested: java_awt_PageAttributes_OrientationRequestedType;
origin: java_awt_PageAttributes_OriginType;
printQuality: java_awt_PageAttributes_PrintQualityType;
printerResolution: number[];
origin: java_awt_PageAttributes_OriginType;
media: java_awt_PageAttributes_MediaType;
orientationRequested: java_awt_PageAttributes_OrientationRequestedType;
printQuality: java_awt_PageAttributes_PrintQualityType;
printerResolution: number[];
color: java_awt_PageAttributes_ColorType;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
set(arg0: java_awt_PageAttributes): void;
getOrigin(): java_awt_PageAttributes_OriginType;
getMedia(): java_awt_PageAttributes_MediaType;
setMedia(arg0: java_awt_PageAttributes_MediaType): void;
setMediaToDefault(): void;
getOrientationRequested(): java_awt_PageAttributes_OrientationRequestedType;
setOrientationRequested(arg0: number): void;
setOrientationRequested(arg0: java_awt_PageAttributes_OrientationRequestedType): void;
setOrientationRequestedToDefault(): void;
setOrigin(arg0: java_awt_PageAttributes_OriginType): void;
getPrintQuality(): java_awt_PageAttributes_PrintQualityType;
setPrintQuality(arg0: java_awt_PageAttributes_PrintQualityType): void;
setPrintQuality(arg0: number): void;
setPrintQualityToDefault(): void;
getPrinterResolution(): number[];
setPrinterResolution(arg0: number): void;
setPrinterResolution(arg0: number[]): void;
setPrinterResolutionToDefault(): void;
getColor(): java_awt_PageAttributes_ColorType;
setColor(arg0: java_awt_PageAttributes_ColorType): void;
constructor(arg0: java_awt_PageAttributes_ColorType, arg1: java_awt_PageAttributes_MediaType, arg2: java_awt_PageAttributes_OrientationRequestedType, arg3: java_awt_PageAttributes_OriginType, arg4: java_awt_PageAttributes_PrintQualityType, arg5: number[]);
constructor(arg0: java_awt_PageAttributes);
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OriginType as java_awt_PageAttributes_OriginType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class OriginType extends java_awt_AttributeValue {
static I_PHYSICAL: number;
static I_PRINTABLE: number;
static NAMES: string[];
static PHYSICAL: java_awt_PageAttributes_OriginType;
static PRINTABLE: java_awt_PageAttributes_OriginType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MediaType as java_awt_PageAttributes_MediaType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class MediaType extends java_awt_AttributeValue {
static I_ISO_4A0: number;
static I_ISO_2A0: number;
static I_ISO_A0: number;
static I_ISO_A1: number;
static I_ISO_A2: number;
static I_ISO_A3: number;
static I_ISO_A4: number;
static I_ISO_A5: number;
static I_ISO_A6: number;
static I_ISO_A7: number;
static I_ISO_A8: number;
static I_ISO_A9: number;
static I_ISO_A10: number;
static I_ISO_B0: number;
static I_ISO_B1: number;
static I_ISO_B2: number;
static I_ISO_B3: number;
static I_ISO_B4: number;
static I_ISO_B5: number;
static I_ISO_B6: number;
static I_ISO_B7: number;
static I_ISO_B8: number;
static I_ISO_B9: number;
static I_ISO_B10: number;
static I_JIS_B0: number;
static I_JIS_B1: number;
static I_JIS_B2: number;
static I_JIS_B3: number;
static I_JIS_B4: number;
static I_JIS_B5: number;
static I_JIS_B6: number;
static I_JIS_B7: number;
static I_JIS_B8: number;
static I_JIS_B9: number;
static I_JIS_B10: number;
static I_ISO_C0: number;
static I_ISO_C1: number;
static I_ISO_C2: number;
static I_ISO_C3: number;
static I_ISO_C4: number;
static I_ISO_C5: number;
static I_ISO_C6: number;
static I_ISO_C7: number;
static I_ISO_C8: number;
static I_ISO_C9: number;
static I_ISO_C10: number;
static I_ISO_DESIGNATED_LONG: number;
static I_EXECUTIVE: number;
static I_FOLIO: number;
static I_INVOICE: number;
static I_LEDGER: number;
static I_NA_LETTER: number;
static I_NA_LEGAL: number;
static I_QUARTO: number;
static I_A: number;
static I_B: number;
static I_C: number;
static I_D: number;
static I_E: number;
static I_NA_10X15_ENVELOPE: number;
static I_NA_10X14_ENVELOPE: number;
static I_NA_10X13_ENVELOPE: number;
static I_NA_9X12_ENVELOPE: number;
static I_NA_9X11_ENVELOPE: number;
static I_NA_7X9_ENVELOPE: number;
static I_NA_6X9_ENVELOPE: number;
static I_NA_NUMBER_9_ENVELOPE: number;
static I_NA_NUMBER_10_ENVELOPE: number;
static I_NA_NUMBER_11_ENVELOPE: number;
static I_NA_NUMBER_12_ENVELOPE: number;
static I_NA_NUMBER_14_ENVELOPE: number;
static I_INVITE_ENVELOPE: number;
static I_ITALY_ENVELOPE: number;
static I_MONARCH_ENVELOPE: number;
static I_PERSONAL_ENVELOPE: number;
static NAMES: string[];
static ISO_4A0: java_awt_PageAttributes_MediaType;
static ISO_2A0: java_awt_PageAttributes_MediaType;
static ISO_A0: java_awt_PageAttributes_MediaType;
static ISO_A1: java_awt_PageAttributes_MediaType;
static ISO_A2: java_awt_PageAttributes_MediaType;
static ISO_A3: java_awt_PageAttributes_MediaType;
static ISO_A4: java_awt_PageAttributes_MediaType;
static ISO_A5: java_awt_PageAttributes_MediaType;
static ISO_A6: java_awt_PageAttributes_MediaType;
static ISO_A7: java_awt_PageAttributes_MediaType;
static ISO_A8: java_awt_PageAttributes_MediaType;
static ISO_A9: java_awt_PageAttributes_MediaType;
static ISO_A10: java_awt_PageAttributes_MediaType;
static ISO_B0: java_awt_PageAttributes_MediaType;
static ISO_B1: java_awt_PageAttributes_MediaType;
static ISO_B2: java_awt_PageAttributes_MediaType;
static ISO_B3: java_awt_PageAttributes_MediaType;
static ISO_B4: java_awt_PageAttributes_MediaType;
static ISO_B5: java_awt_PageAttributes_MediaType;
static ISO_B6: java_awt_PageAttributes_MediaType;
static ISO_B7: java_awt_PageAttributes_MediaType;
static ISO_B8: java_awt_PageAttributes_MediaType;
static ISO_B9: java_awt_PageAttributes_MediaType;
static ISO_B10: java_awt_PageAttributes_MediaType;
static JIS_B0: java_awt_PageAttributes_MediaType;
static JIS_B1: java_awt_PageAttributes_MediaType;
static JIS_B2: java_awt_PageAttributes_MediaType;
static JIS_B3: java_awt_PageAttributes_MediaType;
static JIS_B4: java_awt_PageAttributes_MediaType;
static JIS_B5: java_awt_PageAttributes_MediaType;
static JIS_B6: java_awt_PageAttributes_MediaType;
static JIS_B7: java_awt_PageAttributes_MediaType;
static JIS_B8: java_awt_PageAttributes_MediaType;
static JIS_B9: java_awt_PageAttributes_MediaType;
static JIS_B10: java_awt_PageAttributes_MediaType;
static ISO_C0: java_awt_PageAttributes_MediaType;
static ISO_C1: java_awt_PageAttributes_MediaType;
static ISO_C2: java_awt_PageAttributes_MediaType;
static ISO_C3: java_awt_PageAttributes_MediaType;
static ISO_C4: java_awt_PageAttributes_MediaType;
static ISO_C5: java_awt_PageAttributes_MediaType;
static ISO_C6: java_awt_PageAttributes_MediaType;
static ISO_C7: java_awt_PageAttributes_MediaType;
static ISO_C8: java_awt_PageAttributes_MediaType;
static ISO_C9: java_awt_PageAttributes_MediaType;
static ISO_C10: java_awt_PageAttributes_MediaType;
static ISO_DESIGNATED_LONG: java_awt_PageAttributes_MediaType;
static EXECUTIVE: java_awt_PageAttributes_MediaType;
static FOLIO: java_awt_PageAttributes_MediaType;
static INVOICE: java_awt_PageAttributes_MediaType;
static LEDGER: java_awt_PageAttributes_MediaType;
static NA_LETTER: java_awt_PageAttributes_MediaType;
static NA_LEGAL: java_awt_PageAttributes_MediaType;
static QUARTO: java_awt_PageAttributes_MediaType;
static A: java_awt_PageAttributes_MediaType;
static B: java_awt_PageAttributes_MediaType;
static C: java_awt_PageAttributes_MediaType;
static D: java_awt_PageAttributes_MediaType;
static E: java_awt_PageAttributes_MediaType;
static NA_10X15_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_10X14_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_10X13_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_9X12_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_9X11_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_7X9_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_6X9_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_9_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_10_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_11_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_12_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_14_ENVELOPE: java_awt_PageAttributes_MediaType;
static INVITE_ENVELOPE: java_awt_PageAttributes_MediaType;
static ITALY_ENVELOPE: java_awt_PageAttributes_MediaType;
static MONARCH_ENVELOPE: java_awt_PageAttributes_MediaType;
static PERSONAL_ENVELOPE: java_awt_PageAttributes_MediaType;
static A0: java_awt_PageAttributes_MediaType;
static A1: java_awt_PageAttributes_MediaType;
static A2: java_awt_PageAttributes_MediaType;
static A3: java_awt_PageAttributes_MediaType;
static A4: java_awt_PageAttributes_MediaType;
static A5: java_awt_PageAttributes_MediaType;
static A6: java_awt_PageAttributes_MediaType;
static A7: java_awt_PageAttributes_MediaType;
static A8: java_awt_PageAttributes_MediaType;
static A9: java_awt_PageAttributes_MediaType;
static A10: java_awt_PageAttributes_MediaType;
static B0: java_awt_PageAttributes_MediaType;
static B1: java_awt_PageAttributes_MediaType;
static B2: java_awt_PageAttributes_MediaType;
static B3: java_awt_PageAttributes_MediaType;
static B4: java_awt_PageAttributes_MediaType;
static ISO_B4_ENVELOPE: java_awt_PageAttributes_MediaType;
static B5: java_awt_PageAttributes_MediaType;
static ISO_B5_ENVELOPE: java_awt_PageAttributes_MediaType;
static B6: java_awt_PageAttributes_MediaType;
static B7: java_awt_PageAttributes_MediaType;
static B8: java_awt_PageAttributes_MediaType;
static B9: java_awt_PageAttributes_MediaType;
static B10: java_awt_PageAttributes_MediaType;
static C0: java_awt_PageAttributes_MediaType;
static ISO_C0_ENVELOPE: java_awt_PageAttributes_MediaType;
static C1: java_awt_PageAttributes_MediaType;
static ISO_C1_ENVELOPE: java_awt_PageAttributes_MediaType;
static C2: java_awt_PageAttributes_MediaType;
static ISO_C2_ENVELOPE: java_awt_PageAttributes_MediaType;
static C3: java_awt_PageAttributes_MediaType;
static ISO_C3_ENVELOPE: java_awt_PageAttributes_MediaType;
static C4: java_awt_PageAttributes_MediaType;
static ISO_C4_ENVELOPE: java_awt_PageAttributes_MediaType;
static C5: java_awt_PageAttributes_MediaType;
static ISO_C5_ENVELOPE: java_awt_PageAttributes_MediaType;
static C6: java_awt_PageAttributes_MediaType;
static ISO_C6_ENVELOPE: java_awt_PageAttributes_MediaType;
static C7: java_awt_PageAttributes_MediaType;
static ISO_C7_ENVELOPE: java_awt_PageAttributes_MediaType;
static C8: java_awt_PageAttributes_MediaType;
static ISO_C8_ENVELOPE: java_awt_PageAttributes_MediaType;
static C9: java_awt_PageAttributes_MediaType;
static ISO_C9_ENVELOPE: java_awt_PageAttributes_MediaType;
static C10: java_awt_PageAttributes_MediaType;
static ISO_C10_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_DESIGNATED_LONG_ENVELOPE: java_awt_PageAttributes_MediaType;
static STATEMENT: java_awt_PageAttributes_MediaType;
static TABLOID: java_awt_PageAttributes_MediaType;
static LETTER: java_awt_PageAttributes_MediaType;
static NOTE: java_awt_PageAttributes_MediaType;
static LEGAL: java_awt_PageAttributes_MediaType;
static ENV_10X15: java_awt_PageAttributes_MediaType;
static ENV_10X14: java_awt_PageAttributes_MediaType;
static ENV_10X13: java_awt_PageAttributes_MediaType;
static ENV_9X12: java_awt_PageAttributes_MediaType;
static ENV_9X11: java_awt_PageAttributes_MediaType;
static ENV_7X9: java_awt_PageAttributes_MediaType;
static ENV_6X9: java_awt_PageAttributes_MediaType;
static ENV_9: java_awt_PageAttributes_MediaType;
static ENV_10: java_awt_PageAttributes_MediaType;
static ENV_11: java_awt_PageAttributes_MediaType;
static ENV_12: java_awt_PageAttributes_MediaType;
static ENV_14: java_awt_PageAttributes_MediaType;
static ENV_INVITE: java_awt_PageAttributes_MediaType;
static ENV_ITALY: java_awt_PageAttributes_MediaType;
static ENV_MONARCH: java_awt_PageAttributes_MediaType;
static ENV_PERSONAL: java_awt_PageAttributes_MediaType;
static INVITE: java_awt_PageAttributes_MediaType;
static ITALY: java_awt_PageAttributes_MediaType;
static MONARCH: java_awt_PageAttributes_MediaType;
static PERSONAL: java_awt_PageAttributes_MediaType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OrientationRequestedType as java_awt_PageAttributes_OrientationRequestedType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class OrientationRequestedType extends java_awt_AttributeValue {
static I_PORTRAIT: number;
static I_LANDSCAPE: number;
static NAMES: string[];
static PORTRAIT: java_awt_PageAttributes_OrientationRequestedType;
static LANDSCAPE: java_awt_PageAttributes_OrientationRequestedType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintQualityType as java_awt_PageAttributes_PrintQualityType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class PrintQualityType extends java_awt_AttributeValue {
static I_HIGH: number;
static I_NORMAL: number;
static I_DRAFT: number;
static NAMES: string[];
static HIGH: java_awt_PageAttributes_PrintQualityType;
static NORMAL: java_awt_PageAttributes_PrintQualityType;
static DRAFT: java_awt_PageAttributes_PrintQualityType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ColorType as java_awt_PageAttributes_ColorType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class ColorType extends java_awt_AttributeValue {
static I_COLOR: number;
static I_MONOCHROME: number;
static NAMES: string[];
static COLOR: java_awt_PageAttributes_ColorType;
static MONOCHROME: java_awt_PageAttributes_ColorType;
class: java_lang_Class<java_lang_Object>;
toString(): string;
hashCode(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Dimension as java_awt_Dimension, Graphics as java_awt_Graphics } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class PrintJob extends java_lang_Object {
pageDimension: java_awt_Dimension;
pageResolution: number;
graphics: java_awt_Graphics;
finalize(): void;
end(): void;
getPageDimension(): java_awt_Dimension;
getPageResolution(): number;
lastPageFirst(): boolean;
getGraphics(): java_awt_Graphics;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Object as java_lang_Object } from 'java.lang';
import { Transferable as java_awt_datatransfer_Transferable, DataFlavor as java_awt_datatransfer_DataFlavor, FlavorListener as java_awt_datatransfer_FlavorListener, ClipboardOwner as java_awt_datatransfer_ClipboardOwner } from 'java.awt.datatransfer';
import { Set as java_util_Set } from 'java.util';

  export class Clipboard extends java_lang_Object {
name: string;
owner: java_awt_datatransfer_ClipboardOwner;
contents: java_awt_datatransfer_Transferable;
flavorListeners: java_util_Set<java_awt_datatransfer_FlavorListener>;
currentDataFlavors: java_util_Set<java_awt_datatransfer_DataFlavor>;
name: string;
contents: java_awt_datatransfer_Transferable;
data: java_lang_Object;
availableDataFlavors: java_awt_datatransfer_DataFlavor[];
flavorListeners: java_awt_datatransfer_FlavorListener[];
getName(): string;
getContents(arg0: java_lang_Object): java_awt_datatransfer_Transferable;
getData(arg0: java_awt_datatransfer_DataFlavor): java_lang_Object;
getAvailableDataFlavors(): java_awt_datatransfer_DataFlavor[];
isDataFlavorAvailable(arg0: java_awt_datatransfer_DataFlavor): boolean;
addFlavorListener(arg0: java_awt_datatransfer_FlavorListener): void;
removeFlavorListener(arg0: java_awt_datatransfer_FlavorListener): void;
getFlavorListeners(): java_awt_datatransfer_FlavorListener[];
setContents(arg0: java_awt_datatransfer_Transferable, arg1: java_awt_datatransfer_ClipboardOwner): void;
constructor(arg0: string);
  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { FlavorEvent as java_awt_datatransfer_FlavorEvent } from 'java.awt.datatransfer';
import { EventListener as java_util_EventListener } from 'java.util';

  export class FlavorListener implements java_util_EventListener {

flavorsChanged(arg0: java_awt_datatransfer_FlavorEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Clipboard as java_awt_datatransfer_Clipboard } from 'java.awt.datatransfer';
import { EventObject as java_util_EventObject } from 'java.util';

  export class FlavorEvent extends java_util_EventObject {
static serialVersionUID: number;
class: java_lang_Class<java_lang_Object>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_datatransfer_Clipboard);
  }
}//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Clipboard as java_awt_datatransfer_Clipboard, Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';

  export class ClipboardOwner {

lostOwnership(arg0: java_awt_datatransfer_Clipboard, arg1: java_awt_datatransfer_Transferable): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { EventQueue as java_awt_EventQueue, AWTEvent as java_awt_AWTEvent, SecondaryLoop as java_awt_SecondaryLoop, Queue as java_awt_Queue, EventDispatchThread as java_awt_EventDispatchThread } from 'java.awt';
import { Runnable as java_lang_Runnable, ThreadGroup as java_lang_ThreadGroup, ClassLoader as java_lang_ClassLoader, Object as java_lang_Object } from 'java.lang';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';
import { Lock as java_util_concurrent_locks_Lock, Condition as java_util_concurrent_locks_Condition } from 'java.util.concurrent.locks';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';
import { AppContext as sun_awt_AppContext, FwDispatcher as sun_awt_FwDispatcher } from 'sun.awt';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { JavaSecurityAccess as jdk_internal_misc_JavaSecurityAccess } from 'jdk.internal.misc';

  export class EventQueue extends java_lang_Object {
static threadInitNumber: java_util_concurrent_atomic_AtomicInteger;
static LOW_PRIORITY: number;
static NORM_PRIORITY: number;
static HIGH_PRIORITY: number;
static ULTIMATE_PRIORITY: number;
static NUM_PRIORITIES: number;
queues: java_awt_Queue[];
nextQueue: java_awt_EventQueue;
previousQueue: java_awt_EventQueue;
pushPopLock: java_util_concurrent_locks_Lock;
pushPopCond: java_util_concurrent_locks_Condition;
static dummyRunnable: java_lang_Runnable;
dispatchThread: java_awt_EventDispatchThread;
threadGroup: java_lang_ThreadGroup;
classLoader: java_lang_ClassLoader;
mostRecentEventTime: number;
mostRecentKeyEventTime: number;
currentEvent: java_lang_ref_WeakReference<java_awt_AWTEvent>;
waitForID: number;
appContext: sun_awt_AppContext;
name: string;
fwDispatcher: sun_awt_FwDispatcher;
static eventLog: sun_util_logging_PlatformLogger;
static fxAppThreadIsDispatchThread: boolean;
static PAINT: number;
static UPDATE: number;
static MOVE: number;
static DRAG: number;
static PEER: number;
static CACHE_LENGTH: number;
static javaSecurityAccess: jdk_internal_misc_JavaSecurityAccess;
static currentEvent: java_awt_AWTEvent;
nextEvent: java_awt_AWTEvent;
static mostRecentEventTime: number;
push(arg0: java_awt_EventQueue): void;
peekEvent(arg0: number): java_awt_AWTEvent;
peekEvent(): java_awt_AWTEvent;
static invokeLater(arg0: java_lang_Runnable): void;
static getCurrentEvent(): java_awt_AWTEvent;
createSecondaryLoop(): java_awt_SecondaryLoop;
postEvent(arg0: java_awt_AWTEvent): void;
static isDispatchThread(): boolean;
static invokeAndWait(arg0: java_lang_Runnable): void;
getNextEvent(): java_awt_AWTEvent;
static getMostRecentEventTime(): number;
constructor();
  }
}//@ts-nocheck

declare module 'java.awt' {


  export class SecondaryLoop {

exit(): boolean;
enter(): boolean;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { EventQueueItem as sun_awt_EventQueueItem } from 'sun.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class Queue extends java_lang_Object {
head: sun_awt_EventQueueItem;
tail: sun_awt_EventQueueItem;


  }
}//@ts-nocheck

declare module 'java.awt' {
import { EventQueue as java_awt_EventQueue, EventFilter as java_awt_EventFilter } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class, Thread as java_lang_Thread } from 'java.lang';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { ArrayList as java_util_ArrayList } from 'java.util';

  export class EventDispatchThread extends java_lang_Thread {
static eventLog: sun_util_logging_PlatformLogger;
theQueue: java_awt_EventQueue;
doDispatch: boolean;
static ANY_EVENT: number;
eventFilters: java_util_ArrayList<java_awt_EventFilter>;
eventQueue: java_awt_EventQueue;
class: java_lang_Class<java_lang_Object>;
run(): void;
stopDispatching(): void;
setEventQueue(arg0: java_awt_EventQueue): void;
getEventQueue(): java_awt_EventQueue;
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

declare module 'java.awt' {
import { AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { FilterAction as java_awt_EventFilter_FilterAction } from 'java.awt.EventFilter';

  export class EventFilter {

acceptEvent(arg0: java_awt_AWTEvent): java_awt_EventFilter_FilterAction;

  }
}//@ts-nocheck

declare module 'java.awt.EventFilter' {
import { FilterAction as java_awt_EventFilter_FilterAction } from 'java.awt.EventFilter';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FilterAction extends java_lang_Enum<java_awt_EventFilter_FilterAction> {
static ACCEPT: java_awt_EventFilter_FilterAction;
static REJECT: java_awt_EventFilter_FilterAction;
static ACCEPT_IMMEDIATELY: java_awt_EventFilter_FilterAction;
static $VALUES: java_awt_EventFilter_FilterAction[];
class: java_lang_Class<java_lang_Object>;
static values(): java_awt_EventFilter_FilterAction[];
static valueOf(arg0: string): java_awt_EventFilter_FilterAction;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Component as java_awt_Component, Cursor as java_awt_Cursor, Image as java_awt_Image, Point as java_awt_Point } from 'java.awt';
import { DragGestureListener as java_awt_dnd_DragGestureListener, DragGestureRecognizer as java_awt_dnd_DragGestureRecognizer, DragSource as java_awt_dnd_DragSource, DragGestureEvent as java_awt_dnd_DragGestureEvent, DragSourceListener as java_awt_dnd_DragSourceListener, DragSourceMotionListener as java_awt_dnd_DragSourceMotionListener } from 'java.awt.dnd';
import { FlavorMap as java_awt_datatransfer_FlavorMap, Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { EventListener as java_util_EventListener } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DragSource extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
static DefaultCopyDrop: java_awt_Cursor;
static DefaultMoveDrop: java_awt_Cursor;
static DefaultLinkDrop: java_awt_Cursor;
static DefaultCopyNoDrop: java_awt_Cursor;
static DefaultMoveNoDrop: java_awt_Cursor;
static DefaultLinkNoDrop: java_awt_Cursor;
static dflt: java_awt_dnd_DragSource;
static dragSourceListenerK: string;
static dragSourceMotionListenerK: string;
flavorMap: java_awt_datatransfer_FlavorMap;
listener: java_awt_dnd_DragSourceListener;
motionListener: java_awt_dnd_DragSourceMotionListener;
flavorMap: java_awt_datatransfer_FlavorMap;
static defaultDragSource: java_awt_dnd_DragSource;
dragSourceListeners: java_awt_dnd_DragSourceListener[];
dragSourceMotionListeners: java_awt_dnd_DragSourceMotionListener[];
static dragThreshold: number;
listeners: T[];
createDragGestureRecognizer<T extends java_awt_dnd_DragGestureRecognizer>(arg0: java_lang_Class<T>, arg1: java_awt_Component, arg2: number, arg3: java_awt_dnd_DragGestureListener): T;
getFlavorMap(): java_awt_datatransfer_FlavorMap;
static getDefaultDragSource(): java_awt_dnd_DragSource;
static isDragImageSupported(): boolean;
startDrag(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_Image, arg3: java_awt_Point, arg4: java_awt_datatransfer_Transferable, arg5: java_awt_dnd_DragSourceListener, arg6: java_awt_datatransfer_FlavorMap): void;
startDrag(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_Image, arg3: java_awt_Point, arg4: java_awt_datatransfer_Transferable, arg5: java_awt_dnd_DragSourceListener): void;
startDrag(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_datatransfer_Transferable, arg3: java_awt_dnd_DragSourceListener, arg4: java_awt_datatransfer_FlavorMap): void;
startDrag(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_datatransfer_Transferable, arg3: java_awt_dnd_DragSourceListener): void;
createDefaultDragGestureRecognizer(arg0: java_awt_Component, arg1: number, arg2: java_awt_dnd_DragGestureListener): java_awt_dnd_DragGestureRecognizer;
addDragSourceListener(arg0: java_awt_dnd_DragSourceListener): void;
removeDragSourceListener(arg0: java_awt_dnd_DragSourceListener): void;
getDragSourceListeners(): java_awt_dnd_DragSourceListener[];
addDragSourceMotionListener(arg0: java_awt_dnd_DragSourceMotionListener): void;
removeDragSourceMotionListener(arg0: java_awt_dnd_DragSourceMotionListener): void;
getDragSourceMotionListeners(): java_awt_dnd_DragSourceMotionListener[];
static getDragThreshold(): number;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
constructor();
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragGestureEvent as java_awt_dnd_DragGestureEvent } from 'java.awt.dnd';
import { EventListener as java_util_EventListener } from 'java.util';

  export class DragGestureListener implements java_util_EventListener {

dragGestureRecognized(arg0: java_awt_dnd_DragGestureEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Iterator as java_util_Iterator, List as java_util_List, EventObject as java_util_EventObject } from 'java.util';
import { InputEvent as java_awt_event_InputEvent } from 'java.awt.event';
import { DragGestureRecognizer as java_awt_dnd_DragGestureRecognizer, DragSourceListener as java_awt_dnd_DragSourceListener, DragSource as java_awt_dnd_DragSource } from 'java.awt.dnd';
import { Point as java_awt_Point, Cursor as java_awt_Cursor, Image as java_awt_Image, Component as java_awt_Component } from 'java.awt';
import { Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';

  export class DragGestureEvent extends java_util_EventObject {
static serialVersionUID: number;
events: java_util_List;
dragSource: java_awt_dnd_DragSource;
component: java_awt_Component;
origin: java_awt_Point;
action: number;
sourceAsDragGestureRecognizer: java_awt_dnd_DragGestureRecognizer;
dragOrigin: java_awt_Point;
dragAction: number;
dragSource: java_awt_dnd_DragSource;
triggerEvent: java_awt_event_InputEvent;
component: java_awt_Component;
class: java_lang_Class<java_lang_Object>;
toArray(arg0: java_lang_Object[]): java_lang_Object[];
toArray(): java_lang_Object[];
iterator(): java_util_Iterator<java_awt_event_InputEvent>;
getSourceAsDragGestureRecognizer(): java_awt_dnd_DragGestureRecognizer;
getDragOrigin(): java_awt_Point;
getDragAction(): number;
startDrag(arg0: java_awt_Cursor, arg1: java_awt_datatransfer_Transferable): void;
startDrag(arg0: java_awt_Cursor, arg1: java_awt_datatransfer_Transferable, arg2: java_awt_dnd_DragSourceListener): void;
startDrag(arg0: java_awt_Cursor, arg1: java_awt_Image, arg2: java_awt_Point, arg3: java_awt_datatransfer_Transferable, arg4: java_awt_dnd_DragSourceListener): void;
getDragSource(): java_awt_dnd_DragSource;
getTriggerEvent(): java_awt_event_InputEvent;
getComponent(): java_awt_Component;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_dnd_DragGestureRecognizer, arg1: number, arg2: java_awt_Point, arg3: java_util_List<java_awt_event_InputEvent>);
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Component as java_awt_Component } from 'java.awt';
import { DragSource as java_awt_dnd_DragSource, DragGestureListener as java_awt_dnd_DragGestureListener } from 'java.awt.dnd';
import { InputEvent as java_awt_event_InputEvent } from 'java.awt.event';
import { ArrayList as java_util_ArrayList } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DragGestureRecognizer extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
dragSource: java_awt_dnd_DragSource;
component: java_awt_Component;
dragGestureListener: java_awt_dnd_DragGestureListener;
sourceActions: number;
events: java_util_ArrayList<java_awt_event_InputEvent>;
dragSource: java_awt_dnd_DragSource;
sourceActions: number;
triggerEvent: java_awt_event_InputEvent;
component: java_awt_Component;
setComponent(arg0: java_awt_Component): void;
getDragSource(): java_awt_dnd_DragSource;
getSourceActions(): number;
setSourceActions(arg0: number): void;
getTriggerEvent(): java_awt_event_InputEvent;
resetRecognizer(): void;
addDragGestureListener(arg0: java_awt_dnd_DragGestureListener): void;
removeDragGestureListener(arg0: java_awt_dnd_DragGestureListener): void;
getComponent(): java_awt_Component;

  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragSourceDragEvent as java_awt_dnd_DragSourceDragEvent, DragSourceEvent as java_awt_dnd_DragSourceEvent, DragSourceDropEvent as java_awt_dnd_DragSourceDropEvent } from 'java.awt.dnd';
import { EventListener as java_util_EventListener } from 'java.util';

  export class DragSourceListener implements java_util_EventListener {

dragEnter(arg0: java_awt_dnd_DragSourceDragEvent): void;
dragOver(arg0: java_awt_dnd_DragSourceDragEvent): void;
dropActionChanged(arg0: java_awt_dnd_DragSourceDragEvent): void;
dragExit(arg0: java_awt_dnd_DragSourceEvent): void;
dragDropEnd(arg0: java_awt_dnd_DragSourceDropEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DragSourceContext as java_awt_dnd_DragSourceContext, DragSourceEvent as java_awt_dnd_DragSourceEvent } from 'java.awt.dnd';

  export class DragSourceDragEvent extends java_awt_dnd_DragSourceEvent {
static serialVersionUID: number;
static JDK_1_3_MODIFIERS: number;
static JDK_1_4_MODIFIERS: number;
targetActions: number;
dropAction: number;
gestureModifiers: number;
invalidModifiers: boolean;
gestureModifiers: number;
gestureModifiersEx: number;
userAction: number;
dropAction: number;
targetActions: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getGestureModifiers(): number;
getGestureModifiersEx(): number;
getUserAction(): number;
getDropAction(): number;
getTargetActions(): number;
toString(): string;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: number, arg3: number);
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragGestureEvent as java_awt_dnd_DragGestureEvent, DragSourceDragEvent as java_awt_dnd_DragSourceDragEvent, DragSourceEvent as java_awt_dnd_DragSourceEvent, DragSourceListener as java_awt_dnd_DragSourceListener, DragSourceDropEvent as java_awt_dnd_DragSourceDropEvent, DragSource as java_awt_dnd_DragSource, DragSourceMotionListener as java_awt_dnd_DragSourceMotionListener } from 'java.awt.dnd';
import { Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { Component as java_awt_Component, Cursor as java_awt_Cursor, Image as java_awt_Image, Point as java_awt_Point } from 'java.awt';
import { DragSourceContextPeer as java_awt_dnd_peer_DragSourceContextPeer } from 'java.awt.dnd.peer';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DragSourceContext extends java_lang_Object implements java_awt_dnd_DragSourceListener, java_awt_dnd_DragSourceMotionListener, java_io_Serializable {
static serialVersionUID: number;
static DEFAULT: number;
static ENTER: number;
static OVER: number;
static CHANGED: number;
static emptyTransferable: java_awt_datatransfer_Transferable;
peer: java_awt_dnd_peer_DragSourceContextPeer;
trigger: java_awt_dnd_DragGestureEvent;
cursor: java_awt_Cursor;
transferable: java_awt_datatransfer_Transferable;
listener: java_awt_dnd_DragSourceListener;
useCustomCursor: boolean;
sourceActions: number;
trigger: java_awt_dnd_DragGestureEvent;
dragSource: java_awt_dnd_DragSource;
sourceActions: number;
transferable: java_awt_datatransfer_Transferable;
component: java_awt_Component;
cursor: java_awt_Cursor;
getTrigger(): java_awt_dnd_DragGestureEvent;
transferablesFlavorsChanged(): void;
dragEnter(arg0: java_awt_dnd_DragSourceDragEvent): void;
dragOver(arg0: java_awt_dnd_DragSourceDragEvent): void;
dropActionChanged(arg0: java_awt_dnd_DragSourceDragEvent): void;
dragExit(arg0: java_awt_dnd_DragSourceEvent): void;
addDragSourceListener(arg0: java_awt_dnd_DragSourceListener): void;
removeDragSourceListener(arg0: java_awt_dnd_DragSourceListener): void;
dragDropEnd(arg0: java_awt_dnd_DragSourceDropEvent): void;
dragMouseMoved(arg0: java_awt_dnd_DragSourceDragEvent): void;
getDragSource(): java_awt_dnd_DragSource;
getSourceActions(): number;
getTransferable(): java_awt_datatransfer_Transferable;
getComponent(): java_awt_Component;
getCursor(): java_awt_Cursor;
setCursor(arg0: java_awt_Cursor): void;
constructor(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_Image, arg3: java_awt_Point, arg4: java_awt_datatransfer_Transferable, arg5: java_awt_dnd_DragSourceListener);
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Point as java_awt_Point } from 'java.awt';
import { DragSourceContext as java_awt_dnd_DragSourceContext } from 'java.awt.dnd';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EventObject as java_util_EventObject } from 'java.util';

  export class DragSourceEvent extends java_util_EventObject {
static serialVersionUID: number;
locationSpecified: boolean;
x: number;
y: number;
location: java_awt_Point;
dragSourceContext: java_awt_dnd_DragSourceContext;
y: number;
x: number;
class: java_lang_Class<java_lang_Object>;
getLocation(): java_awt_Point;
getDragSourceContext(): java_awt_dnd_DragSourceContext;
getY(): number;
getX(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_dnd_DragSourceContext);
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: number);
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DragSourceContext as java_awt_dnd_DragSourceContext, DragSourceEvent as java_awt_dnd_DragSourceEvent } from 'java.awt.dnd';

  export class DragSourceDropEvent extends java_awt_dnd_DragSourceEvent {
static serialVersionUID: number;
dropSuccess: boolean;
dropAction: number;
dropSuccess: boolean;
dropAction: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getDropSuccess(): boolean;
getDropAction(): number;
toString(): string;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_dnd_DragSourceContext);
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: boolean, arg3: number, arg4: number);
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: boolean);
  }
}//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragSourceDragEvent as java_awt_dnd_DragSourceDragEvent } from 'java.awt.dnd';
import { EventListener as java_util_EventListener } from 'java.util';

  export class DragSourceMotionListener implements java_util_EventListener {

dragMouseMoved(arg0: java_awt_dnd_DragSourceDragEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.Dialog' {
import { ModalityType as java_awt_Dialog_ModalityType } from 'java.awt.Dialog';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ModalityType extends java_lang_Enum<java_awt_Dialog_ModalityType> {
static MODELESS: java_awt_Dialog_ModalityType;
static DOCUMENT_MODAL: java_awt_Dialog_ModalityType;
static APPLICATION_MODAL: java_awt_Dialog_ModalityType;
static TOOLKIT_MODAL: java_awt_Dialog_ModalityType;
static $VALUES: java_awt_Dialog_ModalityType[];
class: java_lang_Class<java_lang_Object>;
static values(): java_awt_Dialog_ModalityType[];
static valueOf(arg0: string): java_awt_Dialog_ModalityType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.Dialog' {
import { ModalExclusionType as java_awt_Dialog_ModalExclusionType } from 'java.awt.Dialog';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ModalExclusionType extends java_lang_Enum<java_awt_Dialog_ModalExclusionType> {
static NO_EXCLUDE: java_awt_Dialog_ModalExclusionType;
static APPLICATION_EXCLUDE: java_awt_Dialog_ModalExclusionType;
static TOOLKIT_EXCLUDE: java_awt_Dialog_ModalExclusionType;
static $VALUES: java_awt_Dialog_ModalExclusionType[];
class: java_lang_Class<java_lang_Object>;
static values(): java_awt_Dialog_ModalExclusionType[];
static valueOf(arg0: string): java_awt_Dialog_ModalExclusionType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'java.awt.im' {
import { Map as java_util_Map } from 'java.util';
import { TextAttribute as java_awt_font_TextAttribute } from 'java.awt.font';
import { Object as java_lang_Object } from 'java.lang';
import { InputMethodHighlight as java_awt_im_InputMethodHighlight } from 'java.awt.im';

  export class InputMethodHighlight extends java_lang_Object {
static RAW_TEXT: number;
static CONVERTED_TEXT: number;
static UNSELECTED_RAW_TEXT_HIGHLIGHT: java_awt_im_InputMethodHighlight;
static SELECTED_RAW_TEXT_HIGHLIGHT: java_awt_im_InputMethodHighlight;
static UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: java_awt_im_InputMethodHighlight;
static SELECTED_CONVERTED_TEXT_HIGHLIGHT: java_awt_im_InputMethodHighlight;
selected: boolean;
state: number;
variation: number;
style: java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
state: number;
variation: number;
style: java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
getState(): number;
getVariation(): number;
isSelected(): boolean;
getStyle(): java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
constructor(arg0: boolean, arg1: number, arg2: number, arg3: java_util_Map<java_awt_font_TextAttribute, java_lang_Object>);
constructor(arg0: boolean, arg1: number, arg2: number);
constructor(arg0: boolean, arg1: number);
  }
}//@ts-nocheck

declare module 'java.awt.Toolkit' {
import { AWTEvent as java_awt_AWTEvent, Toolkit as java_awt_Toolkit } from 'java.awt';
import { AWTEventListener as java_awt_event_AWTEventListener } from 'java.awt.event';
import { Object as java_lang_Object } from 'java.lang';

  export class SelectiveAWTEventListener extends java_lang_Object implements java_awt_event_AWTEventListener {
listener: java_awt_event_AWTEventListener;
eventMask: number;
calls: number[];
this$0: java_awt_Toolkit;
calls: number[];
eventMask: number;
listener: java_awt_event_AWTEventListener;
orEventMasks(arg0: number): void;
getCalls(): number[];
getEventMask(): number;
eventDispatched(arg0: java_awt_AWTEvent): void;
getListener(): java_awt_event_AWTEventListener;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { WindowEvent as java_awt_event_WindowEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class WindowListener implements java_util_EventListener {

windowOpened(arg0: java_awt_event_WindowEvent): void;
windowClosing(arg0: java_awt_event_WindowEvent): void;
windowClosed(arg0: java_awt_event_WindowEvent): void;
windowIconified(arg0: java_awt_event_WindowEvent): void;
windowDeiconified(arg0: java_awt_event_WindowEvent): void;
windowActivated(arg0: java_awt_event_WindowEvent): void;
windowDeactivated(arg0: java_awt_event_WindowEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { Window as java_awt_Window } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';

  export class WindowEvent extends java_awt_event_ComponentEvent {
static WINDOW_FIRST: number;
static WINDOW_OPENED: number;
static WINDOW_CLOSING: number;
static WINDOW_CLOSED: number;
static WINDOW_ICONIFIED: number;
static WINDOW_DEICONIFIED: number;
static WINDOW_ACTIVATED: number;
static WINDOW_DEACTIVATED: number;
static WINDOW_GAINED_FOCUS: number;
static WINDOW_LOST_FOCUS: number;
static WINDOW_STATE_CHANGED: number;
static WINDOW_LAST: number;
opposite: java_awt_Window;
oldState: number;
newState: number;
static serialVersionUID: number;
window: java_awt_Window;
oppositeWindow: java_awt_Window;
oldState: number;
newState: number;
iD: number;
source: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
paramString(): string;
getWindow(): java_awt_Window;
getOppositeWindow(): java_awt_Window;
getOldState(): number;
getNewState(): number;
toString(): string;
getID(): number;
setSource(arg0: java_lang_Object): void;
getSource(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Window, arg1: number);
constructor(arg0: java_awt_Window, arg1: number, arg2: number, arg3: number);
constructor(arg0: java_awt_Window, arg1: number, arg2: java_awt_Window);
constructor(arg0: java_awt_Window, arg1: number, arg2: java_awt_Window, arg3: number, arg4: number);
  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { WindowEvent as java_awt_event_WindowEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class WindowStateListener implements java_util_EventListener {

windowStateChanged(arg0: java_awt_event_WindowEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.event' {
import { WindowEvent as java_awt_event_WindowEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class WindowFocusListener implements java_util_EventListener {

windowGainedFocus(arg0: java_awt_event_WindowEvent): void;
windowLostFocus(arg0: java_awt_event_WindowEvent): void;

  }
}//@ts-nocheck

declare module 'java.awt.Window' {
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';
import { Window as java_awt_Window } from 'java.awt';
import { AppContext as sun_awt_AppContext } from 'sun.awt';
import { Object as java_lang_Object } from 'java.lang';
import { DisposerRecord as sun_java2d_DisposerRecord } from 'sun.java2d';

  export class WindowDisposerRecord extends java_lang_Object implements sun_java2d_DisposerRecord {
owner: java_lang_ref_WeakReference<java_awt_Window>;
weakThis: java_lang_ref_WeakReference<java_awt_Window>;
context: java_lang_ref_WeakReference<sun_awt_AppContext>;
dispose(): void;
updateOwner(): void;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Shape as java_awt_Shape, Color as java_awt_Color, Component as java_awt_Component, Graphics as java_awt_Graphics, Font as java_awt_Font, Dimension as java_awt_Dimension, Container as java_awt_Container, LayoutManager as java_awt_LayoutManager, FocusTraversalPolicy as java_awt_FocusTraversalPolicy, ComponentOrientation as java_awt_ComponentOrientation, Insets as java_awt_Insets, Event as java_awt_Event, Point as java_awt_Point, AWTKeyStroke as java_awt_AWTKeyStroke, PopupMenu as java_awt_PopupMenu, MenuComponent as java_awt_MenuComponent, Rectangle as java_awt_Rectangle, Image as java_awt_Image, ImageCapabilities as java_awt_ImageCapabilities, FontMetrics as java_awt_FontMetrics, GraphicsConfiguration as java_awt_GraphicsConfiguration, AWTEvent as java_awt_AWTEvent, Cursor as java_awt_Cursor, Window as java_awt_Window, Dialog as java_awt_Dialog, Frame as java_awt_Frame, ModalEventFilter as java_awt_ModalEventFilter, SecondaryLoop as java_awt_SecondaryLoop } from 'java.awt';
import { ModalityType as java_awt_Dialog_ModalityType } from 'java.awt.Dialog';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { ContainerListener as java_awt_event_ContainerListener, MouseListener as java_awt_event_MouseListener, MouseMotionListener as java_awt_event_MouseMotionListener, MouseWheelListener as java_awt_event_MouseWheelListener, InputMethodListener as java_awt_event_InputMethodListener, ComponentListener as java_awt_event_ComponentListener, FocusListener as java_awt_event_FocusListener, HierarchyListener as java_awt_event_HierarchyListener, HierarchyBoundsListener as java_awt_event_HierarchyBoundsListener, KeyListener as java_awt_event_KeyListener } from 'java.awt.event';
import { Set as java_util_Set, Locale as java_util_Locale } from 'java.util';
import { InputMethodRequests as java_awt_im_InputMethodRequests } from 'java.awt.im';
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';
import { ColorModel as java_awt_image_ColorModel, ImageProducer as java_awt_image_ImageProducer, VolatileImage as java_awt_image_VolatileImage, ImageObserver as java_awt_image_ImageObserver } from 'java.awt.image';
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';
import { IdentityArrayList as sun_awt_util_IdentityArrayList } from 'sun.awt.util';

  export class Dialog extends java_awt_Window {
resizable: boolean;
undecorated: boolean;
initialized: boolean;
static DEFAULT_MODALITY_TYPE: java_awt_Dialog_ModalityType;
modal: boolean;
modalityType: java_awt_Dialog_ModalityType;
static modalDialogs: sun_awt_util_IdentityArrayList<java_awt_Dialog>;
blockedWindows: sun_awt_util_IdentityArrayList<java_awt_Window>;
title: string;
modalFilter: java_awt_ModalEventFilter;
secondaryLoop: java_awt_SecondaryLoop;
isInHide: boolean;
isInDispose: boolean;
static base: string;
static nameCounter: number;
static serialVersionUID: number;
modalityType: java_awt_Dialog_ModalityType;
accessibleContext: javax_accessibility_AccessibleContext;
title: string;
preferredSize: java_awt_Dimension;
minimumSize: java_awt_Dimension;
focusTraversalPolicy: java_awt_FocusTraversalPolicy;
componentCount: number;
insets: java_awt_Insets;
componentZOrder: number;
maximumSize: java_awt_Dimension;
alignmentX: number;
alignmentY: number;
containerListeners: java_awt_event_ContainerListener[];
componentAt: java_awt_Component;
componentAt: java_awt_Component;
mousePosition: java_awt_Point;
layout: java_awt_LayoutManager;
component: java_awt_Component;
components: java_awt_Component[];
name: string;
parent: java_awt_Container;
location: java_awt_Point;
location: java_awt_Point;
size: java_awt_Dimension;
size: java_awt_Dimension;
mouseListeners: java_awt_event_MouseListener[];
mouseMotionListeners: java_awt_event_MouseMotionListener[];
mouseWheelListeners: java_awt_event_MouseWheelListener[];
inputMethodListeners: java_awt_event_InputMethodListener[];
inputMethodRequests: java_awt_im_InputMethodRequests;
focusTraversalKeysEnabled: boolean;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
componentOrientation: java_awt_ComponentOrientation;
y: number;
x: number;
colorModel: java_awt_image_ColorModel;
graphics: java_awt_Graphics;
treeLock: java_lang_Object;
locationOnScreen: java_awt_Point;
mousePosition: java_awt_Point;
dropTarget: java_awt_dnd_DropTarget;
baseline: number;
baselineResizeBehavior: java_awt_Component_BaselineResizeBehavior;
ignoreRepaint: boolean;
componentListeners: java_awt_event_ComponentListener[];
focusListeners: java_awt_event_FocusListener[];
hierarchyListeners: java_awt_event_HierarchyListener[];
hierarchyBoundsListeners: java_awt_event_HierarchyBoundsListener[];
keyListeners: java_awt_event_KeyListener[];
fontMetrics: java_awt_FontMetrics;
foreground: java_awt_Color;
graphicsConfiguration: java_awt_GraphicsConfiguration;
cursor: java_awt_Cursor;
width: number;
height: number;
font: java_awt_Font;
bounds: java_awt_Rectangle;
bounds: java_awt_Rectangle;
class: java_lang_Class<java_lang_Object>;
show(): void;
isModal(): boolean;
setShape(arg0: java_awt_Shape): void;
setModal(arg0: boolean): void;
isResizable(): boolean;
setResizable(arg0: boolean): void;
setUndecorated(arg0: boolean): void;
isUndecorated(): boolean;
getModalityType(): java_awt_Dialog_ModalityType;
setModalityType(arg0: java_awt_Dialog_ModalityType): void;
addNotify(): void;
toBack(): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
setBackground(arg0: java_awt_Color): void;
setOpacity(arg0: number): void;
getTitle(): string;
hide(): void;
setTitle(arg0: string): void;
setVisible(arg0: boolean): void;
add(arg0: java_awt_Component): java_awt_Component;
add(arg0: string, arg1: java_awt_Component): java_awt_Component;
add(arg0: java_awt_Component, arg1: java_lang_Object): void;
add(arg0: java_awt_Component, arg1: number): java_awt_Component;
add(arg0: java_awt_Component, arg1: java_lang_Object, arg2: number): void;
remove(arg0: java_awt_Component): void;
remove(arg0: number): void;
update(arg0: java_awt_Graphics): void;
list(arg0: java_io_PrintWriter, arg1: number): void;
list(arg0: java_io_PrintStream, arg1: number): void;
validate(): void;
print(arg0: java_awt_Graphics): void;
removeAll(): void;
setFont(arg0: java_awt_Font): void;
layout(): void;
minimumSize(): java_awt_Dimension;
isFocusCycleRoot(arg0: java_awt_Container): boolean;
setLayout(arg0: java_awt_LayoutManager): void;
getPreferredSize(): java_awt_Dimension;
getMinimumSize(): java_awt_Dimension;
getFocusTraversalPolicy(): java_awt_FocusTraversalPolicy;
applyComponentOrientation(arg0: java_awt_ComponentOrientation): void;
getComponentCount(): number;
countComponents(): number;
getInsets(): java_awt_Insets;
insets(): java_awt_Insets;
setComponentZOrder(arg0: java_awt_Component, arg1: number): void;
getComponentZOrder(arg0: java_awt_Component): number;
doLayout(): void;
preferredSize(): java_awt_Dimension;
getMaximumSize(): java_awt_Dimension;
getAlignmentX(): number;
getAlignmentY(): number;
paintComponents(arg0: java_awt_Graphics): void;
printComponents(arg0: java_awt_Graphics): void;
addContainerListener(arg0: java_awt_event_ContainerListener): void;
removeContainerListener(arg0: java_awt_event_ContainerListener): void;
getContainerListeners(): java_awt_event_ContainerListener[];
deliverEvent(arg0: java_awt_Event): void;
getComponentAt(arg0: number, arg1: number): java_awt_Component;
getComponentAt(arg0: java_awt_Point): java_awt_Component;
getMousePosition(arg0: boolean): java_awt_Point;
findComponentAt(arg0: number, arg1: number): java_awt_Component;
findComponentAt(arg0: java_awt_Point): java_awt_Component;
isAncestorOf(arg0: java_awt_Component): boolean;
setFocusTraversalKeys(arg0: number, arg1: java_util_Set<java_awt_AWTKeyStroke>): void;
areFocusTraversalKeysSet(arg0: number): boolean;
setFocusTraversalPolicy(arg0: java_awt_FocusTraversalPolicy): void;
isFocusTraversalPolicySet(): boolean;
setFocusTraversalPolicyProvider(arg0: boolean): void;
isFocusTraversalPolicyProvider(): boolean;
transferFocusDownCycle(): void;
getLayout(): java_awt_LayoutManager;
getComponent(arg0: number): java_awt_Component;
locate(arg0: number, arg1: number): java_awt_Component;
getComponents(): java_awt_Component[];
invalidate(): void;
getName(): string;
add(arg0: java_awt_PopupMenu): void;
remove(arg0: java_awt_MenuComponent): void;
toString(): string;
contains(arg0: number, arg1: number): boolean;
contains(arg0: java_awt_Point): boolean;
list(): void;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintWriter): void;
size(): java_awt_Dimension;
getParent(): java_awt_Container;
getLocation(): java_awt_Point;
getLocation(arg0: java_awt_Point): java_awt_Point;
setName(arg0: string): void;
action(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
location(): java_awt_Point;
getSize(arg0: java_awt_Dimension): java_awt_Dimension;
getSize(): java_awt_Dimension;
resize(arg0: java_awt_Dimension): void;
resize(arg0: number, arg1: number): void;
move(arg0: number, arg1: number): void;
setLocale(arg0: java_util_Locale): void;
isEnabled(): boolean;
bounds(): java_awt_Rectangle;
enable(arg0: boolean): void;
enable(): void;
isValid(): boolean;
show(arg0: boolean): void;
getMouseListeners(): java_awt_event_MouseListener[];
addMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
removeMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
getMouseMotionListeners(): java_awt_event_MouseMotionListener[];
addMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
removeMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
getMouseWheelListeners(): java_awt_event_MouseWheelListener[];
addInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
removeInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
getInputMethodListeners(): java_awt_event_InputMethodListener[];
getInputMethodRequests(): java_awt_im_InputMethodRequests;
mouseDown(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseDrag(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseUp(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseMove(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseEnter(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseExit(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
keyDown(arg0: java_awt_Event, arg1: number): boolean;
keyUp(arg0: java_awt_Event, arg1: number): boolean;
gotFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
lostFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
isFocusTraversable(): boolean;
setFocusable(arg0: boolean): void;
setFocusTraversalKeysEnabled(arg0: boolean): void;
getFocusTraversalKeysEnabled(): boolean;
requestFocusInWindow(): boolean;
requestFocusInWindow(arg0: java_awt_event_FocusEvent_Cause): boolean;
nextFocus(): void;
transferFocusUpCycle(): void;
hasFocus(): boolean;
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
setComponentOrientation(arg0: java_awt_ComponentOrientation): void;
getComponentOrientation(): java_awt_ComponentOrientation;
setMixingCutoutShape(arg0: java_awt_Shape): void;
getY(): number;
getX(): number;
getColorModel(): java_awt_image_ColorModel;
getGraphics(): java_awt_Graphics;
createImage(arg0: number, arg1: number): java_awt_Image;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
firePropertyChange(arg0: string, arg1: string, arg2: string): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
getTreeLock(): java_lang_Object;
isMinimumSizeSet(): boolean;
isDisplayable(): boolean;
requestFocus(): void;
requestFocus(arg0: java_awt_event_FocusEvent_Cause): void;
getLocationOnScreen(): java_awt_Point;
getMousePosition(): java_awt_Point;
isLightweight(): boolean;
isFocusable(): boolean;
isFocusOwner(): boolean;
transferFocus(): void;
isPreferredSizeSet(): boolean;
isMaximumSizeSet(): boolean;
transferFocusBackward(): void;
setDropTarget(arg0: java_awt_dnd_DropTarget): void;
getDropTarget(): java_awt_dnd_DropTarget;
isDoubleBuffered(): boolean;
enableInputMethods(arg0: boolean): void;
isForegroundSet(): boolean;
isBackgroundSet(): boolean;
isFontSet(): boolean;
setPreferredSize(arg0: java_awt_Dimension): void;
setMaximumSize(arg0: java_awt_Dimension): void;
getBaseline(arg0: number, arg1: number): number;
getBaselineResizeBehavior(): java_awt_Component_BaselineResizeBehavior;
revalidate(): void;
isCursorSet(): boolean;
paintAll(arg0: java_awt_Graphics): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
repaint(arg0: number): void;
repaint(): void;
printAll(arg0: java_awt_Graphics): void;
createVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
createVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
prepareImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): boolean;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
checkImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): number;
setIgnoreRepaint(arg0: boolean): void;
getIgnoreRepaint(): boolean;
addComponentListener(arg0: java_awt_event_ComponentListener): void;
removeComponentListener(arg0: java_awt_event_ComponentListener): void;
getComponentListeners(): java_awt_event_ComponentListener[];
addFocusListener(arg0: java_awt_event_FocusListener): void;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
getFocusListeners(): java_awt_event_FocusListener[];
addHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
removeHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
getHierarchyListeners(): java_awt_event_HierarchyListener[];
addHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
removeHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
getHierarchyBoundsListeners(): java_awt_event_HierarchyBoundsListener[];
addKeyListener(arg0: java_awt_event_KeyListener): void;
removeKeyListener(arg0: java_awt_event_KeyListener): void;
getKeyListeners(): java_awt_event_KeyListener[];
addMouseListener(arg0: java_awt_event_MouseListener): void;
removeMouseListener(arg0: java_awt_event_MouseListener): void;
inside(arg0: number, arg1: number): boolean;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getForeground(): java_awt_Color;
setForeground(arg0: java_awt_Color): void;
getGraphicsConfiguration(): java_awt_GraphicsConfiguration;
setEnabled(arg0: boolean): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;
handleEvent(arg0: java_awt_Event): boolean;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
getCursor(): java_awt_Cursor;
disable(): void;
isVisible(): boolean;
getWidth(): number;
getHeight(): number;
getFont(): java_awt_Font;
getBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getBounds(): java_awt_Rectangle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_awt_Window, arg1: string);
constructor(arg0: java_awt_Window);
constructor(arg0: java_awt_Dialog, arg1: string, arg2: boolean, arg3: java_awt_GraphicsConfiguration);
constructor(arg0: java_awt_Dialog, arg1: string, arg2: boolean);
constructor(arg0: java_awt_Window, arg1: java_awt_Dialog_ModalityType);
constructor(arg0: java_awt_Window, arg1: string, arg2: java_awt_Dialog_ModalityType);
constructor(arg0: java_awt_Window, arg1: string, arg2: java_awt_Dialog_ModalityType, arg3: java_awt_GraphicsConfiguration);
constructor(arg0: java_awt_Frame, arg1: string, arg2: boolean);
constructor(arg0: java_awt_Frame, arg1: string);
constructor(arg0: java_awt_Frame, arg1: boolean);
constructor(arg0: java_awt_Frame);
constructor(arg0: java_awt_Dialog, arg1: string);
constructor(arg0: java_awt_Dialog);
constructor(arg0: java_awt_Frame, arg1: string, arg2: boolean, arg3: java_awt_GraphicsConfiguration);
  }
}//@ts-nocheck

declare module 'java.awt' {
import { AWTEvent as java_awt_AWTEvent, Dialog as java_awt_Dialog, EventFilter as java_awt_EventFilter } from 'java.awt';
import { FilterAction as java_awt_EventFilter_FilterAction } from 'java.awt.EventFilter';
import { Object as java_lang_Object } from 'java.lang';

  export class ModalEventFilter extends java_lang_Object implements java_awt_EventFilter {
modalDialog: java_awt_Dialog;
disabled: boolean;
acceptEvent(arg0: java_awt_AWTEvent): java_awt_EventFilter_FilterAction;

  }
}//@ts-nocheck

declare module 'java.awt' {
import { Container as java_awt_Container, Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class FocusManager extends java_lang_Object implements java_io_Serializable {
focusRoot: java_awt_Container;
focusOwner: java_awt_Component;
static serialVersionUID: number;


  }
}//@ts-nocheck

declare module 'java.awt' {
import { DisplayMode as java_awt_DisplayMode, Dimension as java_awt_Dimension } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class DisplayMode extends java_lang_Object {
size: java_awt_Dimension;
bitDepth: number;
refreshRate: number;
static BIT_DEPTH_MULTI: number;
static REFRESH_RATE_UNKNOWN: number;
bitDepth: number;
refreshRate: number;
width: number;
height: number;
equals(arg0: java_awt_DisplayMode): boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getBitDepth(): number;
getRefreshRate(): number;
getWidth(): number;
getHeight(): number;
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'java.awt.GraphicsDevice' {
import { WindowTranslucency as java_awt_GraphicsDevice_WindowTranslucency } from 'java.awt.GraphicsDevice';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class WindowTranslucency extends java_lang_Enum<java_awt_GraphicsDevice_WindowTranslucency> {
static PERPIXEL_TRANSPARENT: java_awt_GraphicsDevice_WindowTranslucency;
static TRANSLUCENT: java_awt_GraphicsDevice_WindowTranslucency;
static PERPIXEL_TRANSLUCENT: java_awt_GraphicsDevice_WindowTranslucency;
static $VALUES: java_awt_GraphicsDevice_WindowTranslucency[];
class: java_lang_Class<java_lang_Object>;
static values(): java_awt_GraphicsDevice_WindowTranslucency[];
static valueOf(arg0: string): java_awt_GraphicsDevice_WindowTranslucency;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}