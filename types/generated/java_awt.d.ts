//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object } from 'java.lang';
import { Color as java_awt_Color, Rectangle as java_awt_Rectangle, RenderingHints as java_awt_RenderingHints, PaintContext as java_awt_PaintContext, Paint as java_awt_Paint } from 'java.awt';
import { ColorSpace as java_awt_color_ColorSpace } from 'java.awt.color';
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Serializable as java_io_Serializable } from 'java.io';
/** A container for a color palette. This class is immutable; the set methods
 return a new color. The color names listed as fields are HTML4 standards,
 but subject to change. */

  export class Color extends java_lang_Object implements java_awt_Paint, java_io_Serializable {
alpha: number;
blue: number;
colorComponents: number[];
colorComponents: number[];
colorSpace: java_awt_color_ColorSpace;
components: number[];
components: number[];
green: number;
rGB: number;
rGBColorComponents: number[];
rGBComponents: number[];
red: number;
static BLACK: java_awt_Color;
static BLUE: java_awt_Color;
static CYAN: java_awt_Color;
static DARK_GRAY: java_awt_Color;
static GRAY: java_awt_Color;
static GREEN: java_awt_Color;
static LIGHT_GRAY: java_awt_Color;
static MAGENTA: java_awt_Color;
static ORANGE: java_awt_Color;
static PINK: java_awt_Color;
static RED: java_awt_Color;
static WHITE: java_awt_Color;
static YELLOW: java_awt_Color;
static black: java_awt_Color;
static blue: java_awt_Color;
static color: java_awt_Color;
static color: java_awt_Color;
static color: java_awt_Color;
static cyan: java_awt_Color;
static darkGray: java_awt_Color;
static gray: java_awt_Color;
static green: java_awt_Color;
static hSBColor: java_awt_Color;
static lightGray: java_awt_Color;
static magenta: java_awt_Color;
static orange: java_awt_Color;
static pink: java_awt_Color;
static red: java_awt_Color;
static white: java_awt_Color;
static yellow: java_awt_Color;
transparency: number;
/** Gets the blue component */
getBlue(): number;
/** Gets the green component */
getGreen(): number;
/** Gets the red component */
getRed(): number;
brighter(): java_awt_Color;
createContext(arg0: java_awt_image_ColorModel, arg1: java_awt_Rectangle, arg2: java_awt_geom_Rectangle2D, arg3: java_awt_geom_AffineTransform, arg4: java_awt_RenderingHints): java_awt_PaintContext;
darker(): java_awt_Color;
equals(o: java_lang_Object): boolean;
getAlpha(): number;
getColorComponents(arg0: java_awt_color_ColorSpace, arg1: number[]): number[];
getColorComponents(arg0: number[]): number[];
getColorSpace(): java_awt_color_ColorSpace;
getComponents(arg0: java_awt_color_ColorSpace, arg1: number[]): number[];
getComponents(arg0: number[]): number[];
getRGB(): number;
getRGBColorComponents(arg0: number[]): number[];
getRGBComponents(arg0: number[]): number[];
getTransparency(): number;
hashCode(): number;
static HSBtoRGB(arg0: number, arg1: number, arg2: number): number;
static RGBtoHSB(arg0: number, arg1: number, arg2: number, arg3: number[]): number[];
static decode(arg0: string): java_awt_Color;
static getColor(arg0: string): java_awt_Color;
static getColor(arg0: string, arg1: java_awt_Color): java_awt_Color;
static getColor(arg0: string, arg1: number): java_awt_Color;
static getHSBColor(arg0: number, arg1: number, arg2: number): java_awt_Color;
toString(): string;
constructor(arg0: java_awt_color_ColorSpace, arg1: number[], arg2: number);
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.awt.color' {
import { ColorSpace as java_awt_color_ColorSpace } from 'java.awt.color';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ColorSpace extends java_lang_Object implements java_io_Serializable {
maxValue: number;
minValue: number;
name: string;
numComponents: number;
static CS_CIEXYZ: number;
static CS_GRAY: number;
static CS_LINEAR_RGB: number;
static CS_PYCC: number;
static CS_sRGB: number;
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
static TYPE_CMY: number;
static TYPE_CMYK: number;
static TYPE_DCLR: number;
static TYPE_ECLR: number;
static TYPE_FCLR: number;
static TYPE_GRAY: number;
static TYPE_HLS: number;
static TYPE_HSV: number;
static TYPE_Lab: number;
static TYPE_Luv: number;
static TYPE_RGB: number;
static TYPE_XYZ: number;
static TYPE_YCbCr: number;
static TYPE_Yxy: number;
static instance: java_awt_color_ColorSpace;
type: number;
fromCIEXYZ(arg0: number[]): number[];
fromRGB(arg0: number[]): number[];
getMaxValue(arg0: number): number;
getMinValue(arg0: number): number;
getName(arg0: number): string;
getNumComponents(): number;
getType(): number;
isCS_sRGB(): boolean;
static getInstance(arg0: number): java_awt_color_ColorSpace;
toCIEXYZ(arg0: number[]): number[];
toRGB(arg0: number[]): number[];

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object } from 'java.lang';
import { SampleModel as java_awt_image_SampleModel, WritableRaster as java_awt_image_WritableRaster, ColorModel as java_awt_image_ColorModel, Raster as java_awt_image_Raster } from 'java.awt.image';
import { ColorSpace as java_awt_color_ColorSpace } from 'java.awt.color';
import { Transparency as java_awt_Transparency } from 'java.awt';

  export class ColorModel extends java_lang_Object implements java_awt_Transparency {
alpha: number;
alpha: number;
alphaRaster: java_awt_image_WritableRaster;
blue: number;
blue: number;
colorSpace: java_awt_color_ColorSpace;
componentSize: number;
componentSize: number[];
components: number[];
components: number[];
dataElement: number;
dataElement: number;
dataElements: java_lang_Object;
dataElements: java_lang_Object;
dataElements: java_lang_Object;
green: number;
green: number;
normalizedComponents: number[];
normalizedComponents: number[];
numColorComponents: number;
numComponents: number;
pixelSize: number;
rGB: number;
rGB: number;
red: number;
red: number;
static rGBdefault: java_awt_image_ColorModel;
transferType: number;
transparency: number;
unnormalizedComponents: number[];
coerceData(arg0: java_awt_image_WritableRaster, arg1: boolean): java_awt_image_ColorModel;
createCompatibleSampleModel(arg0: number, arg1: number): java_awt_image_SampleModel;
createCompatibleWritableRaster(arg0: number, arg1: number): java_awt_image_WritableRaster;
equals(arg0: java_lang_Object): boolean;
finalize(): void;
getAlpha(arg0: java_lang_Object): number;
getAlpha(arg0: number): number;
getAlphaRaster(arg0: java_awt_image_WritableRaster): java_awt_image_WritableRaster;
getBlue(arg0: java_lang_Object): number;
getBlue(arg0: number): number;
getColorSpace(): java_awt_color_ColorSpace;
getComponentSize(): number[];
getComponentSize(arg0: number): number;
getComponents(arg0: java_lang_Object, arg1: number[], arg2: number): number[];
getComponents(arg0: number, arg1: number[], arg2: number): number[];
getDataElement(arg0: number[], arg1: number): number;
getDataElement(arg0: number[], arg1: number): number;
getDataElements(arg0: number, arg1: java_lang_Object): java_lang_Object;
getDataElements(arg0: number[], arg1: number, arg2: java_lang_Object): java_lang_Object;
getDataElements(arg0: number[], arg1: number, arg2: java_lang_Object): java_lang_Object;
getGreen(arg0: java_lang_Object): number;
getGreen(arg0: number): number;
getNormalizedComponents(arg0: java_lang_Object, arg1: number[], arg2: number): number[];
getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
getNumColorComponents(): number;
getNumComponents(): number;
getPixelSize(): number;
getRGB(arg0: java_lang_Object): number;
getRGB(arg0: number): number;
getRed(arg0: java_lang_Object): number;
getRed(arg0: number): number;
getTransferType(): number;
getTransparency(): number;
getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
hasAlpha(): boolean;
hashCode(): number;
isAlphaPremultiplied(): boolean;
isCompatibleRaster(arg0: java_awt_image_Raster): boolean;
isCompatibleSampleModel(arg0: java_awt_image_SampleModel): boolean;
static getRGBdefault(): java_awt_image_ColorModel;
toString(): string;
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { DataBuffer as java_awt_image_DataBuffer, SampleModel as java_awt_image_SampleModel } from 'java.awt.image';
import { Object as java_lang_Object } from 'java.lang';

  export class SampleModel extends java_lang_Object {
dataElements: java_lang_Object;
dataElements: java_lang_Object;
dataType: number;
height: number;
numBands: number;
numDataElements: number;
pixel: number[];
pixel: number[];
pixel: number[];
pixels: number[];
pixels: number[];
pixels: number[];
sample: number;
sampleDouble: number;
sampleFloat: number;
sampleSize: number;
sampleSize: number[];
samples: number[];
samples: number[];
samples: number[];
transferType: number;
width: number;
createCompatibleSampleModel(arg0: number, arg1: number): java_awt_image_SampleModel;
createDataBuffer(): java_awt_image_DataBuffer;
createSubsetSampleModel(arg0: number[]): java_awt_image_SampleModel;
getDataElements(arg0: number, arg1: number, arg2: java_lang_Object, arg3: java_awt_image_DataBuffer): java_lang_Object;
getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_lang_Object, arg5: java_awt_image_DataBuffer): java_lang_Object;
getDataType(): number;
getHeight(): number;
getNumBands(): number;
getNumDataElements(): number;
getPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): number[];
getPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): number[];
getPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): number[];
getSample(arg0: number, arg1: number, arg2: number, arg3: java_awt_image_DataBuffer): number;
getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: java_awt_image_DataBuffer): number;
getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: java_awt_image_DataBuffer): number;
getSampleSize(): number[];
getSampleSize(arg0: number): number;
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): number[];
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): number[];
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): number[];
getTransferType(): number;
getWidth(): number;
setDataElements(arg0: number, arg1: number, arg2: java_lang_Object, arg3: java_awt_image_DataBuffer): void;
setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_lang_Object, arg5: java_awt_image_DataBuffer): void;
setPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): void;
setPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): void;
setPixel(arg0: number, arg1: number, arg2: number[], arg3: java_awt_image_DataBuffer): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_image_DataBuffer): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_DataBuffer): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_DataBuffer): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_DataBuffer): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_image_DataBuffer): void;
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object } from 'java.lang';

  export class DataBuffer extends java_lang_Object {
dataType: number;
elem: number;
elem: number;
elemDouble: number;
elemDouble: number;
elemFloat: number;
elemFloat: number;
numBanks: number;
offset: number;
offsets: number[];
size: number;
static TYPE_BYTE: number;
static TYPE_DOUBLE: number;
static TYPE_FLOAT: number;
static TYPE_INT: number;
static TYPE_SHORT: number;
static TYPE_UNDEFINED: number;
static TYPE_USHORT: number;
static dataTypeSize: number;
getDataType(): number;
getElem(arg0: number): number;
getElem(arg0: number, arg1: number): number;
getElemDouble(arg0: number): number;
getElemDouble(arg0: number, arg1: number): number;
getElemFloat(arg0: number): number;
getElemFloat(arg0: number, arg1: number): number;
getNumBanks(): number;
getOffset(): number;
getOffsets(): number[];
getSize(): number;
setElem(arg0: number, arg1: number): void;
setElem(arg0: number, arg1: number, arg2: number): void;
setElemDouble(arg0: number, arg1: number): void;
setElemDouble(arg0: number, arg1: number, arg2: number): void;
setElemFloat(arg0: number, arg1: number): void;
setElemFloat(arg0: number, arg1: number, arg2: number): void;
static getDataTypeSize(arg0: number): number;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Raster as java_awt_image_Raster, WritableRaster as java_awt_image_WritableRaster } from 'java.awt.image';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class WritableRaster extends java_awt_image_Raster {
class: java_lang_Class<java_lang_Object>;
writableParent: java_awt_image_WritableRaster;
createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): java_awt_image_WritableRaster;
createWritableTranslatedChild(arg0: number, arg1: number): java_awt_image_WritableRaster;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getWritableParent(): java_awt_image_WritableRaster;
hashCode(): number;
notify(): void;
notifyAll(): void;
setDataElements(arg0: number, arg1: number, arg2: java_awt_image_Raster): void;
setDataElements(arg0: number, arg1: number, arg2: java_lang_Object): void;
setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_lang_Object): void;
setPixel(arg0: number, arg1: number, arg2: number[]): void;
setPixel(arg0: number, arg1: number, arg2: number[]): void;
setPixel(arg0: number, arg1: number, arg2: number[]): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
setRect(arg0: java_awt_image_Raster): void;
setRect(arg0: number, arg1: number, arg2: java_awt_image_Raster): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Raster as java_awt_image_Raster, DataBuffer as java_awt_image_DataBuffer, WritableRaster as java_awt_image_WritableRaster, SampleModel as java_awt_image_SampleModel } from 'java.awt.image';
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class Raster extends java_lang_Object {
bounds: java_awt_Rectangle;
dataBuffer: java_awt_image_DataBuffer;
dataElements: java_lang_Object;
dataElements: java_lang_Object;
height: number;
minX: number;
minY: number;
numBands: number;
numDataElements: number;
parent: java_awt_image_Raster;
pixel: number[];
pixel: number[];
pixel: number[];
pixels: number[];
pixels: number[];
pixels: number[];
sample: number;
sampleDouble: number;
sampleFloat: number;
sampleModel: java_awt_image_SampleModel;
sampleModelTranslateX: number;
sampleModelTranslateY: number;
samples: number[];
samples: number[];
samples: number[];
transferType: number;
width: number;
createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): java_awt_image_Raster;
createCompatibleWritableRaster(): java_awt_image_WritableRaster;
createCompatibleWritableRaster(arg0: java_awt_Rectangle): java_awt_image_WritableRaster;
createCompatibleWritableRaster(arg0: number, arg1: number): java_awt_image_WritableRaster;
createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_image_WritableRaster;
createTranslatedChild(arg0: number, arg1: number): java_awt_image_Raster;
getBounds(): java_awt_Rectangle;
getDataBuffer(): java_awt_image_DataBuffer;
getDataElements(arg0: number, arg1: number, arg2: java_lang_Object): java_lang_Object;
getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_lang_Object): java_lang_Object;
getHeight(): number;
getMinX(): number;
getMinY(): number;
getNumBands(): number;
getNumDataElements(): number;
getParent(): java_awt_image_Raster;
getPixel(arg0: number, arg1: number, arg2: number[]): number[];
getPixel(arg0: number, arg1: number, arg2: number[]): number[];
getPixel(arg0: number, arg1: number, arg2: number[]): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
getSample(arg0: number, arg1: number, arg2: number): number;
getSampleDouble(arg0: number, arg1: number, arg2: number): number;
getSampleFloat(arg0: number, arg1: number, arg2: number): number;
getSampleModel(): java_awt_image_SampleModel;
getSampleModelTranslateX(): number;
getSampleModelTranslateY(): number;
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
getTransferType(): number;
getWidth(): number;
static createBandedRaster(arg0: java_awt_image_DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: java_awt_Point): java_awt_image_WritableRaster;
static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_Point): java_awt_image_WritableRaster;
static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: java_awt_Point): java_awt_image_WritableRaster;
static createInterleavedRaster(arg0: java_awt_image_DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_Point): java_awt_image_WritableRaster;
static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_Point): java_awt_image_WritableRaster;
static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: java_awt_Point): java_awt_image_WritableRaster;
static createPackedRaster(arg0: java_awt_image_DataBuffer, arg1: number, arg2: number, arg3: number, arg4: java_awt_Point): java_awt_image_WritableRaster;
static createPackedRaster(arg0: java_awt_image_DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: java_awt_Point): java_awt_image_WritableRaster;
static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java_awt_Point): java_awt_image_WritableRaster;
static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: java_awt_Point): java_awt_image_WritableRaster;
static createRaster(arg0: java_awt_image_SampleModel, arg1: java_awt_image_DataBuffer, arg2: java_awt_Point): java_awt_image_Raster;
static createWritableRaster(arg0: java_awt_image_SampleModel, arg1: java_awt_Point): java_awt_image_WritableRaster;
static createWritableRaster(arg0: java_awt_image_SampleModel, arg1: java_awt_image_DataBuffer, arg2: java_awt_Point): java_awt_image_WritableRaster;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Point as java_awt_Point } from 'java.awt';
import { Point2D as java_awt_geom_Point2D } from 'java.awt.geom';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Point extends java_awt_geom_Point2D implements java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
location: java_awt_Point;
x: number;
x: number;
y: number;
y: number;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getLocation(): java_awt_Point;
getX(): number;
getY(): number;
move(arg0: number, arg1: number): void;
notify(): void;
notifyAll(): void;
setLocation(arg0: java_awt_Point): void;
setLocation(arg0: number, arg1: number): void;
setLocation(arg0: number, arg1: number): void;
toString(): string;
translate(arg0: number, arg1: number): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_awt_Point);
constructor(arg0: number, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Point2D as java_awt_geom_Point2D } from 'java.awt.geom';

  export class Point2D extends java_lang_Object implements java_lang_Cloneable {
x: number;
y: number;
clone(): java_lang_Object;
distance(arg0: java_awt_geom_Point2D): number;
distance(arg0: number, arg1: number): number;
distanceSq(arg0: java_awt_geom_Point2D): number;
distanceSq(arg0: number, arg1: number): number;
equals(arg0: java_lang_Object): boolean;
getX(): number;
getY(): number;
hashCode(): number;
setLocation(arg0: java_awt_geom_Point2D): void;
setLocation(arg0: number, arg1: number): void;
static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
static distanceSq(arg0: number, arg1: number, arg2: number, arg3: number): number;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Rectangle as java_awt_Rectangle, Point as java_awt_Point, Dimension as java_awt_Dimension, Shape as java_awt_Shape } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D, Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Rectangle extends java_awt_geom_Rectangle2D implements java_awt_Shape, java_io_Serializable {
bounds2D: java_awt_geom_Rectangle2D;
bounds: java_awt_Rectangle;
centerX: number;
centerY: number;
class: java_lang_Class<java_lang_Object>;
frame: java_awt_geom_Rectangle2D;
height: number;
height: number;
location: java_awt_Point;
maxX: number;
maxY: number;
minX: number;
minY: number;
size: java_awt_Dimension;
width: number;
width: number;
x: number;
x: number;
y: number;
y: number;
add(arg0: java_awt_Point): void;
add(arg0: java_awt_Rectangle): void;
add(arg0: number, arg1: number): void;
clone(): java_lang_Object;
contains(arg0: java_awt_Point): boolean;
contains(arg0: java_awt_Rectangle): boolean;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
createIntersection(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
createUnion(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
equals(arg0: java_lang_Object): boolean;
getBounds(): java_awt_Rectangle;
getBounds2D(): java_awt_geom_Rectangle2D;
getCenterX(): number;
getCenterY(): number;
getClass(): java_lang_Class<java_lang_Object>;
getFrame(): java_awt_geom_Rectangle2D;
getHeight(): number;
getLocation(): java_awt_Point;
getMaxX(): number;
getMaxY(): number;
getMinX(): number;
getMinY(): number;
getSize(): java_awt_Dimension;
getWidth(): number;
getX(): number;
getY(): number;
grow(arg0: number, arg1: number): void;
inside(arg0: number, arg1: number): boolean;
intersection(arg0: java_awt_Rectangle): java_awt_Rectangle;
intersects(arg0: java_awt_Rectangle): boolean;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
isEmpty(): boolean;
move(arg0: number, arg1: number): void;
notify(): void;
notifyAll(): void;
outcode(arg0: number, arg1: number): number;
reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
resize(arg0: number, arg1: number): void;
setBounds(arg0: java_awt_Rectangle): void;
setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFrame(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Dimension2D): void;
setFrame(arg0: java_awt_geom_Rectangle2D): void;
setFrameFromCenter(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFrameFromDiagonal(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
setLocation(arg0: java_awt_Point): void;
setLocation(arg0: number, arg1: number): void;
setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
setSize(arg0: java_awt_Dimension): void;
setSize(arg0: number, arg1: number): void;
toString(): string;
translate(arg0: number, arg1: number): void;
union(arg0: java_awt_Rectangle): java_awt_Rectangle;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_awt_Dimension);
constructor(arg0: java_awt_Point);
constructor(arg0: java_awt_Point, arg1: java_awt_Dimension);
constructor(arg0: java_awt_Rectangle);
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Dimension as java_awt_Dimension } from 'java.awt';
import { Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Dimension extends java_awt_geom_Dimension2D implements java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
height: number;
height: number;
size: java_awt_Dimension;
width: number;
width: number;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getHeight(): number;
getSize(): java_awt_Dimension;
getWidth(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
setSize(arg0: java_awt_Dimension): void;
setSize(arg0: number, arg1: number): void;
setSize(arg0: number, arg1: number): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_awt_Dimension);
constructor(arg0: number, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';

  export class Dimension2D extends java_lang_Object implements java_lang_Cloneable {
height: number;
width: number;
clone(): java_lang_Object;
getHeight(): number;
getWidth(): number;
setSize(arg0: java_awt_geom_Dimension2D): void;
setSize(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt.geom' {
import { Point2D as java_awt_geom_Point2D, Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator, Line2D as java_awt_geom_Line2D, RectangularShape as java_awt_geom_RectangularShape } from 'java.awt.geom';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class Rectangle2D extends java_awt_geom_RectangularShape {
bounds2D: java_awt_geom_Rectangle2D;
class: java_lang_Class<java_lang_Object>;
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
static OUT_BOTTOM: number;
static OUT_LEFT: number;
static OUT_RIGHT: number;
static OUT_TOP: number;
add(arg0: java_awt_geom_Point2D): void;
add(arg0: java_awt_geom_Rectangle2D): void;
add(arg0: number, arg1: number): void;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
createIntersection(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
createUnion(arg0: java_awt_geom_Rectangle2D): java_awt_geom_Rectangle2D;
equals(arg0: java_lang_Object): boolean;
getBounds2D(): java_awt_geom_Rectangle2D;
getClass(): java_lang_Class<java_lang_Object>;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
hashCode(): number;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
intersectsLine(arg0: java_awt_geom_Line2D): boolean;
intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
notify(): void;
notifyAll(): void;
outcode(arg0: java_awt_geom_Point2D): number;
outcode(arg0: number, arg1: number): number;
setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
setRect(arg0: java_awt_geom_Rectangle2D): void;
setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
static intersect(arg0: java_awt_geom_Rectangle2D, arg1: java_awt_geom_Rectangle2D, arg2: java_awt_geom_Rectangle2D): void;
static union(arg0: java_awt_geom_Rectangle2D, arg1: java_awt_geom_Rectangle2D, arg2: java_awt_geom_Rectangle2D): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Point2D as java_awt_geom_Point2D, AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Shape as java_awt_Shape } from 'java.awt';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AffineTransform extends java_lang_Object implements java_lang_Cloneable, java_io_Serializable {
determinant: number;
matrix: void;
scaleX: number;
scaleY: number;
shearX: number;
shearY: number;
static TYPE_FLIP: number;
static TYPE_GENERAL_ROTATION: number;
static TYPE_GENERAL_SCALE: number;
static TYPE_GENERAL_TRANSFORM: number;
static TYPE_IDENTITY: number;
static TYPE_MASK_ROTATION: number;
static TYPE_MASK_SCALE: number;
static TYPE_QUADRANT_ROTATION: number;
static TYPE_TRANSLATION: number;
static TYPE_UNIFORM_SCALE: number;
static quadrantRotateInstance: java_awt_geom_AffineTransform;
static quadrantRotateInstance: java_awt_geom_AffineTransform;
static rotateInstance: java_awt_geom_AffineTransform;
static rotateInstance: java_awt_geom_AffineTransform;
static rotateInstance: java_awt_geom_AffineTransform;
static rotateInstance: java_awt_geom_AffineTransform;
static scaleInstance: java_awt_geom_AffineTransform;
static shearInstance: java_awt_geom_AffineTransform;
static translateInstance: java_awt_geom_AffineTransform;
translateX: number;
translateY: number;
type: number;
clone(): java_lang_Object;
concatenate(arg0: java_awt_geom_AffineTransform): void;
createInverse(): java_awt_geom_AffineTransform;
createTransformedShape(arg0: java_awt_Shape): java_awt_Shape;
deltaTransform(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): java_awt_geom_Point2D;
deltaTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
equals(arg0: java_lang_Object): boolean;
getDeterminant(): number;
getMatrix(arg0: number[]): void;
getScaleX(): number;
getScaleY(): number;
getShearX(): number;
getShearY(): number;
getTranslateX(): number;
getTranslateY(): number;
getType(): number;
hashCode(): number;
inverseTransform(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): java_awt_geom_Point2D;
inverseTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
invert(): void;
isIdentity(): boolean;
preConcatenate(arg0: java_awt_geom_AffineTransform): void;
quadrantRotate(arg0: number): void;
quadrantRotate(arg0: number, arg1: number, arg2: number): void;
rotate(arg0: number): void;
rotate(arg0: number, arg1: number): void;
rotate(arg0: number, arg1: number, arg2: number): void;
rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
scale(arg0: number, arg1: number): void;
setToIdentity(): void;
setToQuadrantRotation(arg0: number): void;
setToQuadrantRotation(arg0: number, arg1: number, arg2: number): void;
setToRotation(arg0: number): void;
setToRotation(arg0: number, arg1: number): void;
setToRotation(arg0: number, arg1: number, arg2: number): void;
setToRotation(arg0: number, arg1: number, arg2: number, arg3: number): void;
setToScale(arg0: number, arg1: number): void;
setToShear(arg0: number, arg1: number): void;
setToTranslation(arg0: number, arg1: number): void;
setTransform(arg0: java_awt_geom_AffineTransform): void;
setTransform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
shear(arg0: number, arg1: number): void;
static getQuadrantRotateInstance(arg0: number): java_awt_geom_AffineTransform;
static getQuadrantRotateInstance(arg0: number, arg1: number, arg2: number): java_awt_geom_AffineTransform;
static getRotateInstance(arg0: number): java_awt_geom_AffineTransform;
static getRotateInstance(arg0: number, arg1: number): java_awt_geom_AffineTransform;
static getRotateInstance(arg0: number, arg1: number, arg2: number): java_awt_geom_AffineTransform;
static getRotateInstance(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_geom_AffineTransform;
static getScaleInstance(arg0: number, arg1: number): java_awt_geom_AffineTransform;
static getShearInstance(arg0: number, arg1: number): java_awt_geom_AffineTransform;
static getTranslateInstance(arg0: number, arg1: number): java_awt_geom_AffineTransform;
toString(): string;
transform(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): java_awt_geom_Point2D;
transform(arg0: java_awt_geom_Point2D[], arg1: number, arg2: java_awt_geom_Point2D[], arg3: number, arg4: number): void;
transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;
translate(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_awt_geom_AffineTransform);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: number[]);
constructor(arg0: number[]);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle } from 'java.awt';

  export class Shape {
bounds2D: java_awt_geom_Rectangle2D;
bounds: java_awt_Rectangle;
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getBounds(): java_awt_Rectangle;
getBounds2D(): java_awt_geom_Rectangle2D;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

  }
}
//@ts-nocheck

declare module 'java.awt.geom' {


  export class PathIterator {
static SEG_CLOSE: number;
static SEG_CUBICTO: number;
static SEG_LINETO: number;
static SEG_MOVETO: number;
static SEG_QUADTO: number;
static WIND_EVEN_ODD: number;
static WIND_NON_ZERO: number;
windingRule: number;
currentSegment(arg0: number[]): number;
currentSegment(arg0: number[]): number;
getWindingRule(): number;
isDone(): boolean;
next(): void;

  }
}
//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator, Line2D as java_awt_geom_Line2D } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle, Shape as java_awt_Shape } from 'java.awt';

  export class Line2D extends java_lang_Object implements java_awt_Shape, java_lang_Cloneable {
bounds2D: java_awt_geom_Rectangle2D;
bounds: java_awt_Rectangle;
p1: java_awt_geom_Point2D;
p2: java_awt_geom_Point2D;
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
x1: number;
x2: number;
y1: number;
y2: number;
clone(): java_lang_Object;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getBounds(): java_awt_Rectangle;
getBounds2D(): java_awt_geom_Rectangle2D;
getP1(): java_awt_geom_Point2D;
getP2(): java_awt_geom_Point2D;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
getX1(): number;
getX2(): number;
getY1(): number;
getY2(): number;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
intersectsLine(arg0: java_awt_geom_Line2D): boolean;
intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
ptLineDist(arg0: java_awt_geom_Point2D): number;
ptLineDist(arg0: number, arg1: number): number;
ptLineDistSq(arg0: java_awt_geom_Point2D): number;
ptLineDistSq(arg0: number, arg1: number): number;
ptSegDist(arg0: java_awt_geom_Point2D): number;
ptSegDist(arg0: number, arg1: number): number;
ptSegDistSq(arg0: java_awt_geom_Point2D): number;
ptSegDistSq(arg0: number, arg1: number): number;
relativeCCW(arg0: java_awt_geom_Point2D): number;
relativeCCW(arg0: number, arg1: number): number;
setLine(arg0: java_awt_geom_Line2D): void;
setLine(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
static linesIntersect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): boolean;
static ptLineDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
static ptLineDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
static ptSegDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
static ptSegDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
static relativeCCW(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

  }
}
//@ts-nocheck

declare module 'java.awt.geom' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Point2D as java_awt_geom_Point2D, Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator, Dimension2D as java_awt_geom_Dimension2D } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle, Shape as java_awt_Shape } from 'java.awt';

  export class RectangularShape extends java_lang_Object implements java_awt_Shape, java_lang_Cloneable {
bounds2D: java_awt_geom_Rectangle2D;
bounds: java_awt_Rectangle;
centerX: number;
centerY: number;
frame: java_awt_geom_Rectangle2D;
height: number;
maxX: number;
maxY: number;
minX: number;
minY: number;
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
width: number;
x: number;
y: number;
clone(): java_lang_Object;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getBounds(): java_awt_Rectangle;
getBounds2D(): java_awt_geom_Rectangle2D;
getCenterX(): number;
getCenterY(): number;
getFrame(): java_awt_geom_Rectangle2D;
getHeight(): number;
getMaxX(): number;
getMaxY(): number;
getMinX(): number;
getMinY(): number;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
getWidth(): number;
getX(): number;
getY(): number;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
isEmpty(): boolean;
setFrame(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Dimension2D): void;
setFrame(arg0: java_awt_geom_Rectangle2D): void;
setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFrameFromCenter(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
setFrameFromDiagonal(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): void;
setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {


  export class Transparency {
static BITMASK: number;
static OPAQUE: number;
static TRANSLUCENT: number;
transparency: number;
getTransparency(): number;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { RenderingHints as java_awt_RenderingHints } from 'java.awt';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { BiFunction as java_util_function_BiFunction, BiConsumer as java_util_function_BiConsumer, Function as java_util_function_Function } from 'java.util.function';
import { Key as java_awt_RenderingHints_Key } from 'java.awt.RenderingHints';

  export class RenderingHints extends java_lang_Object implements java_util_Map<java_lang_Object, java_lang_Object>, java_lang_Cloneable {
orDefault: V;
static KEY_ALPHA_INTERPOLATION: java_awt_RenderingHints_Key;
static KEY_ANTIALIASING: java_awt_RenderingHints_Key;
static KEY_COLOR_RENDERING: java_awt_RenderingHints_Key;
static KEY_DITHERING: java_awt_RenderingHints_Key;
static KEY_FRACTIONALMETRICS: java_awt_RenderingHints_Key;
static KEY_INTERPOLATION: java_awt_RenderingHints_Key;
static KEY_RENDERING: java_awt_RenderingHints_Key;
static KEY_RESOLUTION_VARIANT: java_awt_RenderingHints_Key;
static KEY_STROKE_CONTROL: java_awt_RenderingHints_Key;
static KEY_TEXT_ANTIALIASING: java_awt_RenderingHints_Key;
static KEY_TEXT_LCD_CONTRAST: java_awt_RenderingHints_Key;
static VALUE_ALPHA_INTERPOLATION_DEFAULT: java_lang_Object;
static VALUE_ALPHA_INTERPOLATION_QUALITY: java_lang_Object;
static VALUE_ALPHA_INTERPOLATION_SPEED: java_lang_Object;
static VALUE_ANTIALIAS_DEFAULT: java_lang_Object;
static VALUE_ANTIALIAS_OFF: java_lang_Object;
static VALUE_ANTIALIAS_ON: java_lang_Object;
static VALUE_COLOR_RENDER_DEFAULT: java_lang_Object;
static VALUE_COLOR_RENDER_QUALITY: java_lang_Object;
static VALUE_COLOR_RENDER_SPEED: java_lang_Object;
static VALUE_DITHER_DEFAULT: java_lang_Object;
static VALUE_DITHER_DISABLE: java_lang_Object;
static VALUE_DITHER_ENABLE: java_lang_Object;
static VALUE_FRACTIONALMETRICS_DEFAULT: java_lang_Object;
static VALUE_FRACTIONALMETRICS_OFF: java_lang_Object;
static VALUE_FRACTIONALMETRICS_ON: java_lang_Object;
static VALUE_INTERPOLATION_BICUBIC: java_lang_Object;
static VALUE_INTERPOLATION_BILINEAR: java_lang_Object;
static VALUE_INTERPOLATION_NEAREST_NEIGHBOR: java_lang_Object;
static VALUE_RENDER_DEFAULT: java_lang_Object;
static VALUE_RENDER_QUALITY: java_lang_Object;
static VALUE_RENDER_SPEED: java_lang_Object;
static VALUE_RESOLUTION_VARIANT_BASE: java_lang_Object;
static VALUE_RESOLUTION_VARIANT_DEFAULT: java_lang_Object;
static VALUE_RESOLUTION_VARIANT_DPI_FIT: java_lang_Object;
static VALUE_RESOLUTION_VARIANT_SIZE_FIT: java_lang_Object;
static VALUE_STROKE_DEFAULT: java_lang_Object;
static VALUE_STROKE_NORMALIZE: java_lang_Object;
static VALUE_STROKE_PURE: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_DEFAULT: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_GASP: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_LCD_HBGR: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_LCD_HRGB: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_LCD_VBGR: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_LCD_VRGB: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_OFF: java_lang_Object;
static VALUE_TEXT_ANTIALIAS_ON: java_lang_Object;
add(arg0: java_awt_RenderingHints): void;
clear(): void;
clone(): java_lang_Object;
compute(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
computeIfAbsent(arg0: K, arg1: java_util_function_Function<java_lang_Object, V>): V;
computeIfPresent(arg0: K, arg1: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
containsKey(arg0: java_lang_Object): boolean;
containsValue(arg0: java_lang_Object): boolean;
entrySet(): java_util_Set<java_util_Map_Entry<java_lang_Object, java_lang_Object>>;
equals(arg0: java_lang_Object): boolean;
forEach(arg0: java_util_function_BiConsumer<java_lang_Object, java_lang_Object>): void;
get(arg0: java_lang_Object): java_lang_Object;
getOrDefault(arg0: java_lang_Object, arg1: V): V;
hashCode(): number;
isEmpty(): boolean;
keySet(): java_util_Set<java_lang_Object>;
merge(arg0: K, arg1: V, arg2: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): V;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
putAll(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
putIfAbsent(arg0: K, arg1: V): V;
remove(arg0: java_lang_Object): java_lang_Object;
remove(arg0: java_lang_Object, arg1: java_lang_Object): boolean;
replace(arg0: K, arg1: V): V;
replace(arg0: K, arg1: V, arg2: V): boolean;
replaceAll(arg0: java_util_function_BiFunction<java_lang_Object, java_lang_Object, V>): void;
size(): number;
toString(): string;
values(): java_util_Collection<java_lang_Object>;
constructor(arg0: java_awt_RenderingHints_Key, arg1: java_lang_Object);
constructor(arg0: java_util_Map<java_awt_RenderingHints_Key, java_lang_Object>);
  }
}
//@ts-nocheck

declare module 'java.awt.RenderingHints' {
import { Object as java_lang_Object } from 'java.lang';

  export class Key extends java_lang_Object {

equals(arg0: java_lang_Object): boolean;
hashCode(): number;
isCompatibleValue(arg0: java_lang_Object): boolean;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { ColorModel as java_awt_image_ColorModel, Raster as java_awt_image_Raster } from 'java.awt.image';

  export class PaintContext {
colorModel: java_awt_image_ColorModel;
raster: java_awt_image_Raster;
dispose(): void;
getColorModel(): java_awt_image_ColorModel;
getRaster(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_image_Raster;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { Rectangle as java_awt_Rectangle, RenderingHints as java_awt_RenderingHints, PaintContext as java_awt_PaintContext, Transparency as java_awt_Transparency } from 'java.awt';
import { Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';

  export class Paint implements java_awt_Transparency {
transparency: number;
createContext(arg0: java_awt_image_ColorModel, arg1: java_awt_Rectangle, arg2: java_awt_geom_Rectangle2D, arg3: java_awt_geom_AffineTransform, arg4: java_awt_RenderingHints): java_awt_PaintContext;
getTransparency(): number;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { ImageObserver as java_awt_image_ImageObserver, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { Object as java_lang_Object } from 'java.lang';
import { Graphics as java_awt_Graphics, Image as java_awt_Image, GraphicsConfiguration as java_awt_GraphicsConfiguration, ImageCapabilities as java_awt_ImageCapabilities } from 'java.awt';

  export class Image extends java_lang_Object {
accelerationPriority: number;
capabilities: java_awt_ImageCapabilities;
graphics: java_awt_Graphics;
height: number;
property: java_lang_Object;
scaledInstance: java_awt_Image;
source: java_awt_image_ImageProducer;
static SCALE_AREA_AVERAGING: number;
static SCALE_DEFAULT: number;
static SCALE_FAST: number;
static SCALE_REPLICATE: number;
static SCALE_SMOOTH: number;
static UndefinedProperty: java_lang_Object;
width: number;
flush(): void;
getAccelerationPriority(): number;
getCapabilities(arg0: java_awt_GraphicsConfiguration): java_awt_ImageCapabilities;
getGraphics(): java_awt_Graphics;
getHeight(arg0: java_awt_image_ImageObserver): number;
getProperty(arg0: string, arg1: java_awt_image_ImageObserver): java_lang_Object;
getScaledInstance(arg0: number, arg1: number, arg2: number): java_awt_Image;
getSource(): java_awt_image_ImageProducer;
getWidth(arg0: java_awt_image_ImageObserver): number;
setAccelerationPriority(arg0: number): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Image as java_awt_Image } from 'java.awt';

  export class ImageObserver {
static ABORT: number;
static ALLBITS: number;
static ERROR: number;
static FRAMEBITS: number;
static HEIGHT: number;
static PROPERTIES: number;
static SOMEBITS: number;
static WIDTH: number;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Graphics as java_awt_Graphics, Font as java_awt_Font, Color as java_awt_Color, FontMetrics as java_awt_FontMetrics, Rectangle as java_awt_Rectangle, Shape as java_awt_Shape, Polygon as java_awt_Polygon, Image as java_awt_Image } from 'java.awt';
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';
import { ImageObserver as java_awt_image_ImageObserver } from 'java.awt.image';
import { Object as java_lang_Object } from 'java.lang';

  export class Graphics extends java_lang_Object {
clip: java_awt_Shape;
clipBounds: java_awt_Rectangle;
clipBounds: java_awt_Rectangle;
clipRect: java_awt_Rectangle;
color: java_awt_Color;
font: java_awt_Font;
fontMetrics: java_awt_FontMetrics;
fontMetrics: java_awt_FontMetrics;
clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
create(): java_awt_Graphics;
create(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_Graphics;
dispose(): void;
draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
drawChars(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): void;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_Color, arg4: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java_awt_Color, arg6: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java_awt_Color, arg10: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java_awt_image_ImageObserver): boolean;
drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawPolygon(arg0: java_awt_Polygon): void;
drawPolygon(arg0: number[], arg1: number[], arg2: number): void;
drawPolyline(arg0: number[], arg1: number[], arg2: number): void;
drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
drawString(arg0: java_text_AttributedCharacterIterator, arg1: number, arg2: number): void;
drawString(arg0: string, arg1: number, arg2: number): void;
fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
fillPolygon(arg0: java_awt_Polygon): void;
fillPolygon(arg0: number[], arg1: number[], arg2: number): void;
fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
finalize(): void;
getClip(): java_awt_Shape;
getClipBounds(): java_awt_Rectangle;
getClipBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getClipRect(): java_awt_Rectangle;
getColor(): java_awt_Color;
getFont(): java_awt_Font;
getFontMetrics(): java_awt_FontMetrics;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
setClip(arg0: java_awt_Shape): void;
setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
setColor(arg0: java_awt_Color): void;
setFont(arg0: java_awt_Font): void;
setPaintMode(): void;
setXORMode(arg0: java_awt_Color): void;
toString(): string;
translate(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object } from 'java.lang';
import { Font as java_awt_Font } from 'java.awt';
import { Map as java_util_Map, Locale as java_util_Locale } from 'java.util';
import { TextAttribute as java_awt_font_TextAttribute, FontRenderContext as java_awt_font_FontRenderContext, LineMetrics as java_awt_font_LineMetrics, GlyphVector as java_awt_font_GlyphVector } from 'java.awt.font';
import { AffineTransform as java_awt_geom_AffineTransform, Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';
import { File as java_io_File, InputStream as java_io_InputStream, Serializable as java_io_Serializable } from 'java.io';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';
import { CharacterIterator as java_text_CharacterIterator } from 'java.text';

  export class Font extends java_lang_Object implements java_io_Serializable {
attributes: java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
availableAttributes: java_textdCharacterIterator_Attribute_Attribute[];
baselineFor: number;
family: string;
family: string;
fontName: string;
fontName: string;
italicAngle: number;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
maxCharBounds: java_awt_geom_Rectangle2D;
missingGlyphCode: number;
name: string;
numGlyphs: number;
pSName: string;
size2D: number;
size: number;
static BOLD: number;
static CENTER_BASELINE: number;
static DIALOG: string;
static DIALOG_INPUT: string;
static HANGING_BASELINE: number;
static ITALIC: number;
static LAYOUT_LEFT_TO_RIGHT: number;
static LAYOUT_NO_LIMIT_CONTEXT: number;
static LAYOUT_NO_START_CONTEXT: number;
static LAYOUT_RIGHT_TO_LEFT: number;
static MONOSPACED: string;
static PLAIN: number;
static ROMAN_BASELINE: number;
static SANS_SERIF: string;
static SERIF: string;
static TRUETYPE_FONT: number;
static TYPE1_FONT: number;
static font: java_awt_Font;
static font: java_awt_Font;
static font: java_awt_Font;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
style: number;
transform: java_awt_geom_AffineTransform;
canDisplay(arg0: number): boolean;
canDisplay(arg0: string): boolean;
canDisplayUpTo(arg0: java_text_CharacterIterator, arg1: number, arg2: number): number;
canDisplayUpTo(arg0: string): number;
canDisplayUpTo(arg0: string[], arg1: number, arg2: number): number;
createGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: java_text_CharacterIterator): java_awt_font_GlyphVector;
createGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: number[]): java_awt_font_GlyphVector;
createGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: string): java_awt_font_GlyphVector;
createGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: string[]): java_awt_font_GlyphVector;
deriveFont(arg0: java_awt_geom_AffineTransform): java_awt_Font;
deriveFont(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>): java_awt_Font;
deriveFont(arg0: number): java_awt_Font;
deriveFont(arg0: number): java_awt_Font;
deriveFont(arg0: number, arg1: java_awt_geom_AffineTransform): java_awt_Font;
deriveFont(arg0: number, arg1: number): java_awt_Font;
equals(arg0: java_lang_Object): boolean;
getAttributes(): java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
getAvailableAttributes(): java_textdCharacterIterator_Attribute_Attribute[];
getBaselineFor(arg0: string): number;
getFamily(): string;
getFamily(arg0: java_util_Locale): string;
getFontName(): string;
getFontName(arg0: java_util_Locale): string;
getItalicAngle(): number;
getLineMetrics(arg0: java_text_CharacterIterator, arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_font_LineMetrics;
getLineMetrics(arg0: string, arg1: java_awt_font_FontRenderContext): java_awt_font_LineMetrics;
getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_font_LineMetrics;
getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_font_LineMetrics;
getMaxCharBounds(arg0: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getMissingGlyphCode(): number;
getName(): string;
getNumGlyphs(): number;
getPSName(): string;
getSize(): number;
getSize2D(): number;
getStringBounds(arg0: java_text_CharacterIterator, arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string, arg1: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string, arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: java_awt_font_FontRenderContext): java_awt_geom_Rectangle2D;
getStyle(): number;
getTransform(): java_awt_geom_AffineTransform;
hasLayoutAttributes(): boolean;
hasUniformLineMetrics(): boolean;
hashCode(): number;
isBold(): boolean;
isItalic(): boolean;
isPlain(): boolean;
isTransformed(): boolean;
layoutGlyphVector(arg0: java_awt_font_FontRenderContext, arg1: string[], arg2: number, arg3: number, arg4: number): java_awt_font_GlyphVector;
static createFont(arg0: number, arg1: java_io_File): java_awt_Font;
static createFont(arg0: number, arg1: java_io_InputStream): java_awt_Font;
static createFonts(arg0: java_io_File): java_awt_Font[];
static createFonts(arg0: java_io_InputStream): java_awt_Font[];
static decode(arg0: string): java_awt_Font;
static getFont(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>): java_awt_Font;
static getFont(arg0: string): java_awt_Font;
static getFont(arg0: string, arg1: java_awt_Font): java_awt_Font;
static textRequiresLayout(arg0: string[], arg1: number, arg2: number): boolean;
toString(): string;
constructor(arg0: java_util_Map<java_textdCharacterIterator_Attribute_Attribute, java_lang_Object>);
constructor(arg0: string, arg1: number, arg2: number);
  }
}
//@ts-nocheck

declare module 'java.awt.font' {
import { Class as java_lang_Class, Object as java_lang_Object, Float as java_lang_Float, Integer as java_lang_Integer, Boolean as java_lang_Boolean } from 'java.lang';
import { TextAttribute as java_awt_font_TextAttribute } from 'java.awt.font';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';

  export class TextAttribute extends java_textdCharacterIterator_Attribute_Attribute {
class: java_lang_Class<java_lang_Object>;
static BACKGROUND: java_awt_font_TextAttribute;
static BIDI_EMBEDDING: java_awt_font_TextAttribute;
static CHAR_REPLACEMENT: java_awt_font_TextAttribute;
static FAMILY: java_awt_font_TextAttribute;
static FONT: java_awt_font_TextAttribute;
static FOREGROUND: java_awt_font_TextAttribute;
static INPUT_METHOD_HIGHLIGHT: java_awt_font_TextAttribute;
static INPUT_METHOD_UNDERLINE: java_awt_font_TextAttribute;
static JUSTIFICATION: java_awt_font_TextAttribute;
static JUSTIFICATION_FULL: java_lang_Float;
static JUSTIFICATION_NONE: java_lang_Float;
static KERNING: java_awt_font_TextAttribute;
static KERNING_ON: java_lang_Integer;
static LIGATURES: java_awt_font_TextAttribute;
static LIGATURES_ON: java_lang_Integer;
static NUMERIC_SHAPING: java_awt_font_TextAttribute;
static POSTURE: java_awt_font_TextAttribute;
static POSTURE_OBLIQUE: java_lang_Float;
static POSTURE_REGULAR: java_lang_Float;
static RUN_DIRECTION: java_awt_font_TextAttribute;
static RUN_DIRECTION_LTR: java_lang_Boolean;
static RUN_DIRECTION_RTL: java_lang_Boolean;
static SIZE: java_awt_font_TextAttribute;
static STRIKETHROUGH: java_awt_font_TextAttribute;
static STRIKETHROUGH_ON: java_lang_Boolean;
static SUPERSCRIPT: java_awt_font_TextAttribute;
static SUPERSCRIPT_SUB: java_lang_Integer;
static SUPERSCRIPT_SUPER: java_lang_Integer;
static SWAP_COLORS: java_awt_font_TextAttribute;
static SWAP_COLORS_ON: java_lang_Boolean;
static TRACKING: java_awt_font_TextAttribute;
static TRACKING_LOOSE: java_lang_Float;
static TRACKING_TIGHT: java_lang_Float;
static TRANSFORM: java_awt_font_TextAttribute;
static UNDERLINE: java_awt_font_TextAttribute;
static UNDERLINE_LOW_DASHED: java_lang_Integer;
static UNDERLINE_LOW_DOTTED: java_lang_Integer;
static UNDERLINE_LOW_GRAY: java_lang_Integer;
static UNDERLINE_LOW_ONE_PIXEL: java_lang_Integer;
static UNDERLINE_LOW_TWO_PIXEL: java_lang_Integer;
static UNDERLINE_ON: java_lang_Integer;
static WEIGHT: java_awt_font_TextAttribute;
static WEIGHT_BOLD: java_lang_Float;
static WEIGHT_DEMIBOLD: java_lang_Float;
static WEIGHT_DEMILIGHT: java_lang_Float;
static WEIGHT_EXTRABOLD: java_lang_Float;
static WEIGHT_EXTRA_LIGHT: java_lang_Float;
static WEIGHT_HEAVY: java_lang_Float;
static WEIGHT_LIGHT: java_lang_Float;
static WEIGHT_MEDIUM: java_lang_Float;
static WEIGHT_REGULAR: java_lang_Float;
static WEIGHT_SEMIBOLD: java_lang_Float;
static WEIGHT_ULTRABOLD: java_lang_Float;
static WIDTH: java_awt_font_TextAttribute;
static WIDTH_CONDENSED: java_lang_Float;
static WIDTH_EXTENDED: java_lang_Float;
static WIDTH_REGULAR: java_lang_Float;
static WIDTH_SEMI_CONDENSED: java_lang_Float;
static WIDTH_SEMI_EXTENDED: java_lang_Float;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt.font' {
import { Object as java_lang_Object } from 'java.lang';
import { FontRenderContext as java_awt_font_FontRenderContext } from 'java.awt.font';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';

  export class FontRenderContext extends java_lang_Object {
antiAliasingHint: java_lang_Object;
fractionalMetricsHint: java_lang_Object;
transform: java_awt_geom_AffineTransform;
transformType: number;
equals(arg0: java_awt_font_FontRenderContext): boolean;
equals(arg0: java_lang_Object): boolean;
getAntiAliasingHint(): java_lang_Object;
getFractionalMetricsHint(): java_lang_Object;
getTransform(): java_awt_geom_AffineTransform;
getTransformType(): number;
hashCode(): number;
isAntiAliased(): boolean;
isTransformed(): boolean;
usesFractionalMetrics(): boolean;
constructor(arg0: java_awt_geom_AffineTransform, arg1: boolean, arg2: boolean);
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_lang_Object, arg2: java_lang_Object);
  }
}
//@ts-nocheck

declare module 'java.awt.font' {
import { Object as java_lang_Object } from 'java.lang';

  export class LineMetrics extends java_lang_Object {
ascent: number;
baselineIndex: number;
baselineOffsets: number[];
descent: number;
height: number;
leading: number;
numChars: number;
strikethroughOffset: number;
strikethroughThickness: number;
underlineOffset: number;
underlineThickness: number;
getAscent(): number;
getBaselineIndex(): number;
getBaselineOffsets(): number[];
getDescent(): number;
getHeight(): number;
getLeading(): number;
getNumChars(): number;
getStrikethroughOffset(): number;
getStrikethroughThickness(): number;
getUnderlineOffset(): number;
getUnderlineThickness(): number;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt.font' {
import { GlyphVector as java_awt_font_GlyphVector, FontRenderContext as java_awt_font_FontRenderContext, GlyphMetrics as java_awt_font_GlyphMetrics, GlyphJustificationInfo as java_awt_font_GlyphJustificationInfo } from 'java.awt.font';
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D, AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle, Shape as java_awt_Shape, Font as java_awt_Font } from 'java.awt';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';

  export class GlyphVector extends java_lang_Object implements java_lang_Cloneable {
font: java_awt_Font;
fontRenderContext: java_awt_font_FontRenderContext;
glyphCharIndex: number;
glyphCharIndices: number[];
glyphCode: number;
glyphCodes: number[];
glyphJustificationInfo: java_awt_font_GlyphJustificationInfo;
glyphLogicalBounds: java_awt_Shape;
glyphMetrics: java_awt_font_GlyphMetrics;
glyphOutline: java_awt_Shape;
glyphOutline: java_awt_Shape;
glyphPixelBounds: java_awt_Rectangle;
glyphPosition: java_awt_geom_Point2D;
glyphPositions: number[];
glyphTransform: java_awt_geom_AffineTransform;
glyphVisualBounds: java_awt_Shape;
layoutFlags: number;
logicalBounds: java_awt_geom_Rectangle2D;
numGlyphs: number;
outline: java_awt_Shape;
outline: java_awt_Shape;
pixelBounds: java_awt_Rectangle;
static FLAG_COMPLEX_GLYPHS: number;
static FLAG_HAS_POSITION_ADJUSTMENTS: number;
static FLAG_HAS_TRANSFORMS: number;
static FLAG_MASK: number;
static FLAG_RUN_RTL: number;
visualBounds: java_awt_geom_Rectangle2D;
equals(arg0: java_awt_font_GlyphVector): boolean;
getFont(): java_awt_Font;
getFontRenderContext(): java_awt_font_FontRenderContext;
getGlyphCharIndex(arg0: number): number;
getGlyphCharIndices(arg0: number, arg1: number, arg2: number[]): number[];
getGlyphCode(arg0: number): number;
getGlyphCodes(arg0: number, arg1: number, arg2: number[]): number[];
getGlyphJustificationInfo(arg0: number): java_awt_font_GlyphJustificationInfo;
getGlyphLogicalBounds(arg0: number): java_awt_Shape;
getGlyphMetrics(arg0: number): java_awt_font_GlyphMetrics;
getGlyphOutline(arg0: number): java_awt_Shape;
getGlyphOutline(arg0: number, arg1: number, arg2: number): java_awt_Shape;
getGlyphPixelBounds(arg0: number, arg1: java_awt_font_FontRenderContext, arg2: number, arg3: number): java_awt_Rectangle;
getGlyphPosition(arg0: number): java_awt_geom_Point2D;
getGlyphPositions(arg0: number, arg1: number, arg2: number[]): number[];
getGlyphTransform(arg0: number): java_awt_geom_AffineTransform;
getGlyphVisualBounds(arg0: number): java_awt_Shape;
getLayoutFlags(): number;
getLogicalBounds(): java_awt_geom_Rectangle2D;
getNumGlyphs(): number;
getOutline(): java_awt_Shape;
getOutline(arg0: number, arg1: number): java_awt_Shape;
getPixelBounds(arg0: java_awt_font_FontRenderContext, arg1: number, arg2: number): java_awt_Rectangle;
getVisualBounds(): java_awt_geom_Rectangle2D;
performDefaultLayout(): void;
setGlyphPosition(arg0: number, arg1: java_awt_geom_Point2D): void;
setGlyphTransform(arg0: number, arg1: java_awt_geom_AffineTransform): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt.font' {
import { Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';

  export class GlyphMetrics extends java_lang_Object {
advance: number;
advanceX: number;
advanceY: number;
bounds2D: java_awt_geom_Rectangle2D;
lSB: number;
rSB: number;
static COMBINING: number;
static COMPONENT: number;
static LIGATURE: number;
static STANDARD: number;
static WHITESPACE: number;
type: number;
getAdvance(): number;
getAdvanceX(): number;
getAdvanceY(): number;
getBounds2D(): java_awt_geom_Rectangle2D;
getLSB(): number;
getRSB(): number;
getType(): number;
isCombining(): boolean;
isComponent(): boolean;
isLigature(): boolean;
isStandard(): boolean;
isWhitespace(): boolean;
constructor(arg0: boolean, arg1: number, arg2: number, arg3: java_awt_geom_Rectangle2D, arg4: number);
constructor(arg0: number, arg1: java_awt_geom_Rectangle2D, arg2: number);
  }
}
//@ts-nocheck

declare module 'java.awt.font' {
import { Object as java_lang_Object } from 'java.lang';

  export class GlyphJustificationInfo extends java_lang_Object {
growAbsorb: boolean;
growLeftLimit: number;
growPriority: number;
growRightLimit: number;
shrinkAbsorb: boolean;
shrinkLeftLimit: number;
shrinkPriority: number;
shrinkRightLimit: number;
static PRIORITY_INTERCHAR: number;
static PRIORITY_KASHIDA: number;
static PRIORITY_NONE: number;
static PRIORITY_WHITESPACE: number;
weight: number;

constructor(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: number);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Graphics as java_awt_Graphics, Font as java_awt_Font } from 'java.awt';
import { LineMetrics as java_awt_font_LineMetrics, FontRenderContext as java_awt_font_FontRenderContext } from 'java.awt.font';
import { CharacterIterator as java_text_CharacterIterator } from 'java.text';
import { Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class FontMetrics extends java_lang_Object implements java_io_Serializable {
ascent: number;
descent: number;
font: java_awt_Font;
fontRenderContext: java_awt_font_FontRenderContext;
height: number;
leading: number;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
lineMetrics: java_awt_font_LineMetrics;
maxAdvance: number;
maxAscent: number;
maxCharBounds: java_awt_geom_Rectangle2D;
maxDecent: number;
maxDescent: number;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
stringBounds: java_awt_geom_Rectangle2D;
widths: number[];
bytesWidth(arg0: number[], arg1: number, arg2: number): number;
charWidth(arg0: number): number;
charWidth(arg0: string): number;
charsWidth(arg0: string[], arg1: number, arg2: number): number;
getAscent(): number;
getDescent(): number;
getFont(): java_awt_Font;
getFontRenderContext(): java_awt_font_FontRenderContext;
getHeight(): number;
getLeading(): number;
getLineMetrics(arg0: java_text_CharacterIterator, arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_font_LineMetrics;
getLineMetrics(arg0: string, arg1: java_awt_Graphics): java_awt_font_LineMetrics;
getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_font_LineMetrics;
getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_font_LineMetrics;
getMaxAdvance(): number;
getMaxAscent(): number;
getMaxCharBounds(arg0: java_awt_Graphics): java_awt_geom_Rectangle2D;
getMaxDecent(): number;
getMaxDescent(): number;
getStringBounds(arg0: java_text_CharacterIterator, arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string, arg1: java_awt_Graphics): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string, arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_geom_Rectangle2D;
getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: java_awt_Graphics): java_awt_geom_Rectangle2D;
getWidths(): number[];
hasUniformLineMetrics(): boolean;
stringWidth(arg0: string): number;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle, Shape as java_awt_Shape } from 'java.awt';
import { Point2D as java_awt_geom_Point2D, Rectangle2D as java_awt_geom_Rectangle2D, AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Polygon extends java_lang_Object implements java_awt_Shape, java_io_Serializable {
boundingBox: java_awt_Rectangle;
bounds2D: java_awt_geom_Rectangle2D;
bounds: java_awt_Rectangle;
npoints: number;
pathIterator: java_awt_geom_PathIterator;
pathIterator: java_awt_geom_PathIterator;
xpoints: number[];
ypoints: number[];
addPoint(arg0: number, arg1: number): void;
contains(arg0: java_awt_Point): boolean;
contains(arg0: java_awt_geom_Point2D): boolean;
contains(arg0: java_awt_geom_Rectangle2D): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number): boolean;
contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getBoundingBox(): java_awt_Rectangle;
getBounds(): java_awt_Rectangle;
getBounds2D(): java_awt_geom_Rectangle2D;
getPathIterator(arg0: java_awt_geom_AffineTransform): java_awt_geom_PathIterator;
getPathIterator(arg0: java_awt_geom_AffineTransform, arg1: number): java_awt_geom_PathIterator;
inside(arg0: number, arg1: number): boolean;
intersects(arg0: java_awt_geom_Rectangle2D): boolean;
intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
invalidate(): void;
reset(): void;
translate(arg0: number, arg1: number): void;
constructor();
constructor(arg0: number[], arg1: number[], arg2: number);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { GraphicsDevice as java_awt_GraphicsDevice, ImageCapabilities as java_awt_ImageCapabilities, BufferCapabilities as java_awt_BufferCapabilities, Rectangle as java_awt_Rectangle } from 'java.awt';
import { BufferedImage as java_awt_image_BufferedImage, ColorModel as java_awt_image_ColorModel, VolatileImage as java_awt_image_VolatileImage } from 'java.awt.image';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';

  export class GraphicsConfiguration extends java_lang_Object {
bounds: java_awt_Rectangle;
bufferCapabilities: java_awt_BufferCapabilities;
colorModel: java_awt_image_ColorModel;
colorModel: java_awt_image_ColorModel;
defaultTransform: java_awt_geom_AffineTransform;
device: java_awt_GraphicsDevice;
imageCapabilities: java_awt_ImageCapabilities;
normalizingTransform: java_awt_geom_AffineTransform;
createCompatibleImage(arg0: number, arg1: number): java_awt_image_BufferedImage;
createCompatibleImage(arg0: number, arg1: number, arg2: number): java_awt_image_BufferedImage;
createCompatibleVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
createCompatibleVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
createCompatibleVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities, arg3: number): java_awt_image_VolatileImage;
createCompatibleVolatileImage(arg0: number, arg1: number, arg2: number): java_awt_image_VolatileImage;
getBounds(): java_awt_Rectangle;
getBufferCapabilities(): java_awt_BufferCapabilities;
getColorModel(): java_awt_image_ColorModel;
getColorModel(arg0: number): java_awt_image_ColorModel;
getDefaultTransform(): java_awt_geom_AffineTransform;
getDevice(): java_awt_GraphicsDevice;
getImageCapabilities(): java_awt_ImageCapabilities;
getNormalizingTransform(): java_awt_geom_AffineTransform;
isTranslucencyCapable(): boolean;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { GraphicsConfiguration as java_awt_GraphicsConfiguration, GraphicsConfigTemplate as java_awt_GraphicsConfigTemplate, Window as java_awt_Window, DisplayMode as java_awt_DisplayMode } from 'java.awt';
import { WindowTranslucency as java_awt_GraphicsDevice_WindowTranslucency } from 'java.awt.GraphicsDevice';
import { Object as java_lang_Object } from 'java.lang';

  export class GraphicsDevice extends java_lang_Object {
availableAcceleratedMemory: number;
bestConfiguration: java_awt_GraphicsConfiguration;
configurations: java_awt_GraphicsConfiguration[];
defaultConfiguration: java_awt_GraphicsConfiguration;
displayMode: java_awt_DisplayMode;
displayModes: java_awt_DisplayMode[];
fullScreenWindow: java_awt_Window;
iDstring: string;
static TYPE_IMAGE_BUFFER: number;
static TYPE_PRINTER: number;
static TYPE_RASTER_SCREEN: number;
type: number;
getAvailableAcceleratedMemory(): number;
getBestConfiguration(arg0: java_awt_GraphicsConfigTemplate): java_awt_GraphicsConfiguration;
getConfigurations(): java_awt_GraphicsConfiguration[];
getDefaultConfiguration(): java_awt_GraphicsConfiguration;
getDisplayMode(): java_awt_DisplayMode;
getDisplayModes(): java_awt_DisplayMode[];
getFullScreenWindow(): java_awt_Window;
getIDstring(): string;
getType(): number;
isDisplayChangeSupported(): boolean;
isFullScreenSupported(): boolean;
isWindowTranslucencySupported(arg0: java_awt_GraphicsDevice_WindowTranslucency): boolean;
setDisplayMode(arg0: java_awt_DisplayMode): void;
setFullScreenWindow(arg0: java_awt_Window): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { GraphicsConfiguration as java_awt_GraphicsConfiguration } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class GraphicsConfigTemplate extends java_lang_Object implements java_io_Serializable {
bestConfiguration: java_awt_GraphicsConfiguration;
static PREFERRED: number;
static REQUIRED: number;
static UNNECESSARY: number;
getBestConfiguration(arg0: java_awt_GraphicsConfiguration[]): java_awt_GraphicsConfiguration;
isGraphicsConfigSupported(arg0: java_awt_GraphicsConfiguration): boolean;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Type as java_awt_Window_Type } from 'java.awt.Window';
import { Window as java_awt_Window, Dimension as java_awt_Dimension, Shape as java_awt_Shape, Rectangle as java_awt_Rectangle, Component as java_awt_Component, AWTKeyStroke as java_awt_AWTKeyStroke, Container as java_awt_Container, Event as java_awt_Event, BufferCapabilities as java_awt_BufferCapabilities, Graphics as java_awt_Graphics, Color as java_awt_Color, Image as java_awt_Image, Toolkit as java_awt_Toolkit, Point as java_awt_Point, Cursor as java_awt_Cursor, PopupMenu as java_awt_PopupMenu, MenuComponent as java_awt_MenuComponent, Font as java_awt_Font, FontMetrics as java_awt_FontMetrics, ImageCapabilities as java_awt_ImageCapabilities, ComponentOrientation as java_awt_ComponentOrientation, GraphicsConfiguration as java_awt_GraphicsConfiguration, AWTEvent as java_awt_AWTEvent, Frame as java_awt_Frame } from 'java.awt';
import { Locale as java_util_Locale, Set as java_util_Set, ResourceBundle as java_util_ResourceBundle, List as java_util_List, EventListener as java_util_EventListener } from 'java.util';
import { AccessibleContext as javax_accessibility_AccessibleContext, Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { BufferStrategy as java_awt_image_BufferStrategy, ColorModel as java_awt_image_ColorModel, VolatileImage as java_awt_image_VolatileImage, ImageObserver as java_awt_image_ImageObserver, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { InputContext as java_awt_im_InputContext, InputMethodRequests as java_awt_im_InputMethodRequests } from 'java.awt.im';
import { ModalExclusionType as java_awt_Dialog_ModalExclusionType } from 'java.awt.Dialog';
import { WindowListener as java_awt_event_WindowListener, WindowStateListener as java_awt_event_WindowStateListener, WindowFocusListener as java_awt_event_WindowFocusListener, ComponentListener as java_awt_event_ComponentListener, FocusListener as java_awt_event_FocusListener, HierarchyListener as java_awt_event_HierarchyListener, HierarchyBoundsListener as java_awt_event_HierarchyBoundsListener, KeyListener as java_awt_event_KeyListener, MouseListener as java_awt_event_MouseListener, MouseMotionListener as java_awt_event_MouseMotionListener, MouseWheelListener as java_awt_event_MouseWheelListener, InputMethodListener as java_awt_event_InputMethodListener } from 'java.awt.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';

  export class Window extends java_awt_Container implements javax_accessibility_Accessible {
accessibleContext: javax_accessibility_AccessibleContext;
background: java_awt_Color;
baseline: number;
baselineResizeBehavior: java_awt_Component_BaselineResizeBehavior;
bounds: java_awt_Rectangle;
bounds: java_awt_Rectangle;
bufferStrategy: java_awt_image_BufferStrategy;
class: java_lang_Class<java_lang_Object>;
colorModel: java_awt_image_ColorModel;
componentListeners: java_awt_event_ComponentListener[];
componentOrientation: java_awt_ComponentOrientation;
cursor: java_awt_Cursor;
dropTarget: java_awt_dnd_DropTarget;
focusCycleRootAncestor: java_awt_Container;
focusListeners: java_awt_event_FocusListener[];
focusOwner: java_awt_Component;
focusTraversalKeys: java_util_Set<java_awt_AWTKeyStroke>;
focusTraversalKeysEnabled: boolean;
focusableWindowState: boolean;
font: java_awt_Font;
fontMetrics: java_awt_FontMetrics;
foreground: java_awt_Color;
graphics: java_awt_Graphics;
graphicsConfiguration: java_awt_GraphicsConfiguration;
height: number;
hierarchyBoundsListeners: java_awt_event_HierarchyBoundsListener[];
hierarchyListeners: java_awt_event_HierarchyListener[];
iconImages: java_util_List<java_awt_Image>;
ignoreRepaint: boolean;
inputContext: java_awt_im_InputContext;
inputMethodListeners: java_awt_event_InputMethodListener[];
inputMethodRequests: java_awt_im_InputMethodRequests;
keyListeners: java_awt_event_KeyListener[];
listeners: T[];
locale: java_util_Locale;
location: java_awt_Point;
location: java_awt_Point;
locationOnScreen: java_awt_Point;
modalExclusionType: java_awt_Dialog_ModalExclusionType;
mostRecentFocusOwner: java_awt_Component;
mouseListeners: java_awt_event_MouseListener[];
mouseMotionListeners: java_awt_event_MouseMotionListener[];
mousePosition: java_awt_Point;
mouseWheelListeners: java_awt_event_MouseWheelListener[];
name: string;
opacity: number;
ownedWindows: java_awt_Window[];
owner: java_awt_Window;
parent: java_awt_Container;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
shape: java_awt_Shape;
size: java_awt_Dimension;
size: java_awt_Dimension;
static ownerlessWindows: java_awt_Window[];
static windows: java_awt_Window[];
toolkit: java_awt_Toolkit;
treeLock: java_lang_Object;
type: java_awt_Window_Type;
warningString: string;
width: number;
windowFocusListeners: java_awt_event_WindowFocusListener[];
windowListeners: java_awt_event_WindowListener[];
windowStateListeners: java_awt_event_WindowStateListener[];
x: number;
y: number;
action(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
add(arg0: java_awt_PopupMenu): void;
addComponentListener(arg0: java_awt_event_ComponentListener): void;
addFocusListener(arg0: java_awt_event_FocusListener): void;
addHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
addHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
addInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
addKeyListener(arg0: java_awt_event_KeyListener): void;
addMouseListener(arg0: java_awt_event_MouseListener): void;
addMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
addMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
addNotify(): void;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
addWindowFocusListener(arg0: java_awt_event_WindowFocusListener): void;
addWindowListener(arg0: java_awt_event_WindowListener): void;
addWindowStateListener(arg0: java_awt_event_WindowStateListener): void;
applyResourceBundle(arg0: java_util_ResourceBundle): void;
applyResourceBundle(arg0: string): void;
bounds(): java_awt_Rectangle;
checkImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): number;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
contains(arg0: java_awt_Point): boolean;
contains(arg0: number, arg1: number): boolean;
createBufferStrategy(arg0: number): void;
createBufferStrategy(arg0: number, arg1: java_awt_BufferCapabilities): void;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
createImage(arg0: number, arg1: number): java_awt_Image;
createVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
createVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
disable(): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;
dispose(): void;
enable(): void;
enable(arg0: boolean): void;
enableInputMethods(arg0: boolean): void;
equals(arg0: java_lang_Object): boolean;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: string, arg2: string): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getBackground(): java_awt_Color;
getBaseline(arg0: number, arg1: number): number;
getBaselineResizeBehavior(): java_awt_Component_BaselineResizeBehavior;
getBounds(): java_awt_Rectangle;
getBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getBufferStrategy(): java_awt_image_BufferStrategy;
getClass(): java_lang_Class<java_lang_Object>;
getColorModel(): java_awt_image_ColorModel;
getComponentListeners(): java_awt_event_ComponentListener[];
getComponentOrientation(): java_awt_ComponentOrientation;
getCursor(): java_awt_Cursor;
getDropTarget(): java_awt_dnd_DropTarget;
getFocusCycleRootAncestor(): java_awt_Container;
getFocusListeners(): java_awt_event_FocusListener[];
getFocusOwner(): java_awt_Component;
getFocusTraversalKeys(arg0: number): java_util_Set<java_awt_AWTKeyStroke>;
getFocusTraversalKeysEnabled(): boolean;
getFocusableWindowState(): boolean;
getFont(): java_awt_Font;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getForeground(): java_awt_Color;
getGraphics(): java_awt_Graphics;
getGraphicsConfiguration(): java_awt_GraphicsConfiguration;
getHeight(): number;
getHierarchyBoundsListeners(): java_awt_event_HierarchyBoundsListener[];
getHierarchyListeners(): java_awt_event_HierarchyListener[];
getIconImages(): java_util_List<java_awt_Image>;
getIgnoreRepaint(): boolean;
getInputContext(): java_awt_im_InputContext;
getInputMethodListeners(): java_awt_event_InputMethodListener[];
getInputMethodRequests(): java_awt_im_InputMethodRequests;
getKeyListeners(): java_awt_event_KeyListener[];
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
getLocale(): java_util_Locale;
getLocation(): java_awt_Point;
getLocation(arg0: java_awt_Point): java_awt_Point;
getLocationOnScreen(): java_awt_Point;
getModalExclusionType(): java_awt_Dialog_ModalExclusionType;
getMostRecentFocusOwner(): java_awt_Component;
getMouseListeners(): java_awt_event_MouseListener[];
getMouseMotionListeners(): java_awt_event_MouseMotionListener[];
getMousePosition(): java_awt_Point;
getMouseWheelListeners(): java_awt_event_MouseWheelListener[];
getName(): string;
getOpacity(): number;
getOwnedWindows(): java_awt_Window[];
getOwner(): java_awt_Window;
getParent(): java_awt_Container;
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getShape(): java_awt_Shape;
getSize(): java_awt_Dimension;
getSize(arg0: java_awt_Dimension): java_awt_Dimension;
getToolkit(): java_awt_Toolkit;
getTreeLock(): java_lang_Object;
getType(): java_awt_Window_Type;
getWarningString(): string;
getWidth(): number;
getWindowFocusListeners(): java_awt_event_WindowFocusListener[];
getWindowListeners(): java_awt_event_WindowListener[];
getWindowStateListeners(): java_awt_event_WindowStateListener[];
getX(): number;
getY(): number;
gotFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
handleEvent(arg0: java_awt_Event): boolean;
hasFocus(): boolean;
hashCode(): number;
hide(): void;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
inside(arg0: number, arg1: number): boolean;
isActive(): boolean;
isAlwaysOnTop(): boolean;
isAlwaysOnTopSupported(): boolean;
isAutoRequestFocus(): boolean;
isBackgroundSet(): boolean;
isCursorSet(): boolean;
isDisplayable(): boolean;
isDoubleBuffered(): boolean;
isEnabled(): boolean;
isFocusCycleRoot(): boolean;
isFocusOwner(): boolean;
isFocusTraversable(): boolean;
isFocusable(): boolean;
isFocusableWindow(): boolean;
isFocused(): boolean;
isFontSet(): boolean;
isForegroundSet(): boolean;
isLightweight(): boolean;
isLocationByPlatform(): boolean;
isMaximumSizeSet(): boolean;
isMinimumSizeSet(): boolean;
isOpaque(): boolean;
isPreferredSizeSet(): boolean;
isShowing(): boolean;
isValid(): boolean;
isValidateRoot(): boolean;
isVisible(): boolean;
keyDown(arg0: java_awt_Event, arg1: number): boolean;
keyUp(arg0: java_awt_Event, arg1: number): boolean;
list(): void;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintWriter): void;
location(): java_awt_Point;
lostFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
mouseDown(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseDrag(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseEnter(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseExit(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseMove(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseUp(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
move(arg0: number, arg1: number): void;
nextFocus(): void;
notify(): void;
notifyAll(): void;
pack(): void;
paint(arg0: java_awt_Graphics): void;
paintAll(arg0: java_awt_Graphics): void;
postEvent(arg0: java_awt_Event): boolean;
prepareImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): boolean;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
printAll(arg0: java_awt_Graphics): void;
remove(arg0: java_awt_MenuComponent): void;
removeComponentListener(arg0: java_awt_event_ComponentListener): void;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
removeHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
removeHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
removeInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
removeKeyListener(arg0: java_awt_event_KeyListener): void;
removeMouseListener(arg0: java_awt_event_MouseListener): void;
removeMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
removeMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
removeNotify(): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
removeWindowFocusListener(arg0: java_awt_event_WindowFocusListener): void;
removeWindowListener(arg0: java_awt_event_WindowListener): void;
removeWindowStateListener(arg0: java_awt_event_WindowStateListener): void;
repaint(): void;
repaint(arg0: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
requestFocus(): void;
requestFocus(arg0: java_awt_event_FocusEvent_Cause): void;
requestFocusInWindow(): boolean;
requestFocusInWindow(arg0: java_awt_event_FocusEvent_Cause): boolean;
reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
resize(arg0: java_awt_Dimension): void;
resize(arg0: number, arg1: number): void;
revalidate(): void;
setAlwaysOnTop(arg0: boolean): void;
setAutoRequestFocus(arg0: boolean): void;
setBackground(arg0: java_awt_Color): void;
setBounds(arg0: java_awt_Rectangle): void;
setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
setComponentOrientation(arg0: java_awt_ComponentOrientation): void;
setCursor(arg0: java_awt_Cursor): void;
setDropTarget(arg0: java_awt_dnd_DropTarget): void;
setEnabled(arg0: boolean): void;
setFocusCycleRoot(arg0: boolean): void;
setFocusTraversalKeysEnabled(arg0: boolean): void;
setFocusable(arg0: boolean): void;
setFocusableWindowState(arg0: boolean): void;
setForeground(arg0: java_awt_Color): void;
setIconImage(arg0: java_awt_Image): void;
setIconImages(arg0: java_util_List<java_awt_Image>): void;
setIgnoreRepaint(arg0: boolean): void;
setLocale(arg0: java_util_Locale): void;
setLocation(arg0: java_awt_Point): void;
setLocation(arg0: number, arg1: number): void;
setLocationByPlatform(arg0: boolean): void;
setLocationRelativeTo(arg0: java_awt_Component): void;
setMaximumSize(arg0: java_awt_Dimension): void;
setMinimumSize(arg0: java_awt_Dimension): void;
setMixingCutoutShape(arg0: java_awt_Shape): void;
setModalExclusionType(arg0: java_awt_Dialog_ModalExclusionType): void;
setName(arg0: string): void;
setOpacity(arg0: number): void;
setPreferredSize(arg0: java_awt_Dimension): void;
setShape(arg0: java_awt_Shape): void;
setSize(arg0: java_awt_Dimension): void;
setSize(arg0: number, arg1: number): void;
setType(arg0: java_awt_Window_Type): void;
setVisible(arg0: boolean): void;
show(): void;
show(arg0: boolean): void;
size(): java_awt_Dimension;
static getOwnerlessWindows(): java_awt_Window[];
static getWindows(): java_awt_Window[];
toBack(): void;
toFront(): void;
toString(): string;
transferFocus(): void;
transferFocusBackward(): void;
transferFocusUpCycle(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Frame);
constructor(arg0: java_awt_Window);
constructor(arg0: java_awt_Window, arg1: java_awt_GraphicsConfiguration);
  }
}
//@ts-nocheck

declare module 'java.awt.Window' {
import { Type as java_awt_Window_Type } from 'java.awt.Window';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Type extends java_lang_Enum<java_awt_Window_Type> {
class: java_lang_Class<java_lang_Object>;
static NORMAL: java_awt_Window_Type;
static POPUP: java_awt_Window_Type;
static UTILITY: java_awt_Window_Type;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_awt_Window_Type;
static values(): java_awt_Window_Type[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { PopupMenu as java_awt_PopupMenu, MenuComponent as java_awt_MenuComponent, Graphics as java_awt_Graphics, Point as java_awt_Point, Dimension as java_awt_Dimension, Container as java_awt_Container, Event as java_awt_Event, Rectangle as java_awt_Rectangle, Font as java_awt_Font, Image as java_awt_Image, FontMetrics as java_awt_FontMetrics, AWTKeyStroke as java_awt_AWTKeyStroke, ComponentOrientation as java_awt_ComponentOrientation, Component as java_awt_Component, ImageCapabilities as java_awt_ImageCapabilities, Shape as java_awt_Shape, Color as java_awt_Color, GraphicsConfiguration as java_awt_GraphicsConfiguration, Toolkit as java_awt_Toolkit, Cursor as java_awt_Cursor, AWTEvent as java_awt_AWTEvent, MenuContainer as java_awt_MenuContainer } from 'java.awt';
import { PrintStream as java_io_PrintStream, PrintWriter as java_io_PrintWriter, Serializable as java_io_Serializable } from 'java.io';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Locale as java_util_Locale, Set as java_util_Set, EventListener as java_util_EventListener } from 'java.util';
import { ColorModel as java_awt_image_ColorModel, VolatileImage as java_awt_image_VolatileImage, ImageObserver as java_awt_image_ImageObserver, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';
import { ComponentListener as java_awt_event_ComponentListener, FocusListener as java_awt_event_FocusListener, HierarchyListener as java_awt_event_HierarchyListener, HierarchyBoundsListener as java_awt_event_HierarchyBoundsListener, KeyListener as java_awt_event_KeyListener, MouseListener as java_awt_event_MouseListener, MouseMotionListener as java_awt_event_MouseMotionListener, MouseWheelListener as java_awt_event_MouseWheelListener, InputMethodListener as java_awt_event_InputMethodListener } from 'java.awt.event';
import { InputMethodRequests as java_awt_im_InputMethodRequests, InputContext as java_awt_im_InputContext } from 'java.awt.im';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';

  export class Component extends java_lang_Object implements java_awt_image_ImageObserver, java_awt_MenuContainer, java_io_Serializable {
accessibleContext: javax_accessibility_AccessibleContext;
alignmentX: number;
alignmentY: number;
background: java_awt_Color;
baseline: number;
baselineResizeBehavior: java_awt_Component_BaselineResizeBehavior;
bounds: java_awt_Rectangle;
bounds: java_awt_Rectangle;
colorModel: java_awt_image_ColorModel;
componentAt: java_awt_Component;
componentAt: java_awt_Component;
componentListeners: java_awt_event_ComponentListener[];
componentOrientation: java_awt_ComponentOrientation;
cursor: java_awt_Cursor;
dropTarget: java_awt_dnd_DropTarget;
focusCycleRootAncestor: java_awt_Container;
focusListeners: java_awt_event_FocusListener[];
focusTraversalKeys: java_util_Set<java_awt_AWTKeyStroke>;
focusTraversalKeysEnabled: boolean;
font: java_awt_Font;
fontMetrics: java_awt_FontMetrics;
foreground: java_awt_Color;
graphics: java_awt_Graphics;
graphicsConfiguration: java_awt_GraphicsConfiguration;
height: number;
hierarchyBoundsListeners: java_awt_event_HierarchyBoundsListener[];
hierarchyListeners: java_awt_event_HierarchyListener[];
ignoreRepaint: boolean;
inputContext: java_awt_im_InputContext;
inputMethodListeners: java_awt_event_InputMethodListener[];
inputMethodRequests: java_awt_im_InputMethodRequests;
keyListeners: java_awt_event_KeyListener[];
listeners: T[];
locale: java_util_Locale;
location: java_awt_Point;
location: java_awt_Point;
locationOnScreen: java_awt_Point;
maximumSize: java_awt_Dimension;
minimumSize: java_awt_Dimension;
mouseListeners: java_awt_event_MouseListener[];
mouseMotionListeners: java_awt_event_MouseMotionListener[];
mousePosition: java_awt_Point;
mouseWheelListeners: java_awt_event_MouseWheelListener[];
name: string;
parent: java_awt_Container;
preferredSize: java_awt_Dimension;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
size: java_awt_Dimension;
size: java_awt_Dimension;
static BOTTOM_ALIGNMENT: number;
static CENTER_ALIGNMENT: number;
static LEFT_ALIGNMENT: number;
static RIGHT_ALIGNMENT: number;
static TOP_ALIGNMENT: number;
toolkit: java_awt_Toolkit;
treeLock: java_lang_Object;
width: number;
x: number;
y: number;
action(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
add(arg0: java_awt_PopupMenu): void;
addComponentListener(arg0: java_awt_event_ComponentListener): void;
addFocusListener(arg0: java_awt_event_FocusListener): void;
addHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
addHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
addInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
addKeyListener(arg0: java_awt_event_KeyListener): void;
addMouseListener(arg0: java_awt_event_MouseListener): void;
addMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
addMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
addNotify(): void;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
applyComponentOrientation(arg0: java_awt_ComponentOrientation): void;
areFocusTraversalKeysSet(arg0: number): boolean;
bounds(): java_awt_Rectangle;
checkImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): number;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
contains(arg0: java_awt_Point): boolean;
contains(arg0: number, arg1: number): boolean;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
createImage(arg0: number, arg1: number): java_awt_Image;
createVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
createVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
deliverEvent(arg0: java_awt_Event): void;
disable(): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;
doLayout(): void;
enable(): void;
enable(arg0: boolean): void;
enableInputMethods(arg0: boolean): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: string, arg2: string): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getAlignmentX(): number;
getAlignmentY(): number;
getBackground(): java_awt_Color;
getBaseline(arg0: number, arg1: number): number;
getBaselineResizeBehavior(): java_awt_Component_BaselineResizeBehavior;
getBounds(): java_awt_Rectangle;
getBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getColorModel(): java_awt_image_ColorModel;
getComponentAt(arg0: java_awt_Point): java_awt_Component;
getComponentAt(arg0: number, arg1: number): java_awt_Component;
getComponentListeners(): java_awt_event_ComponentListener[];
getComponentOrientation(): java_awt_ComponentOrientation;
getCursor(): java_awt_Cursor;
getDropTarget(): java_awt_dnd_DropTarget;
getFocusCycleRootAncestor(): java_awt_Container;
getFocusListeners(): java_awt_event_FocusListener[];
getFocusTraversalKeys(arg0: number): java_util_Set<java_awt_AWTKeyStroke>;
getFocusTraversalKeysEnabled(): boolean;
getFont(): java_awt_Font;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getForeground(): java_awt_Color;
getGraphics(): java_awt_Graphics;
getGraphicsConfiguration(): java_awt_GraphicsConfiguration;
getHeight(): number;
getHierarchyBoundsListeners(): java_awt_event_HierarchyBoundsListener[];
getHierarchyListeners(): java_awt_event_HierarchyListener[];
getIgnoreRepaint(): boolean;
getInputContext(): java_awt_im_InputContext;
getInputMethodListeners(): java_awt_event_InputMethodListener[];
getInputMethodRequests(): java_awt_im_InputMethodRequests;
getKeyListeners(): java_awt_event_KeyListener[];
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
getLocale(): java_util_Locale;
getLocation(): java_awt_Point;
getLocation(arg0: java_awt_Point): java_awt_Point;
getLocationOnScreen(): java_awt_Point;
getMaximumSize(): java_awt_Dimension;
getMinimumSize(): java_awt_Dimension;
getMouseListeners(): java_awt_event_MouseListener[];
getMouseMotionListeners(): java_awt_event_MouseMotionListener[];
getMousePosition(): java_awt_Point;
getMouseWheelListeners(): java_awt_event_MouseWheelListener[];
getName(): string;
getParent(): java_awt_Container;
getPreferredSize(): java_awt_Dimension;
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getSize(): java_awt_Dimension;
getSize(arg0: java_awt_Dimension): java_awt_Dimension;
getToolkit(): java_awt_Toolkit;
getTreeLock(): java_lang_Object;
getWidth(): number;
getX(): number;
getY(): number;
gotFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
handleEvent(arg0: java_awt_Event): boolean;
hasFocus(): boolean;
hide(): void;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
inside(arg0: number, arg1: number): boolean;
invalidate(): void;
isBackgroundSet(): boolean;
isCursorSet(): boolean;
isDisplayable(): boolean;
isDoubleBuffered(): boolean;
isEnabled(): boolean;
isFocusCycleRoot(arg0: java_awt_Container): boolean;
isFocusOwner(): boolean;
isFocusTraversable(): boolean;
isFocusable(): boolean;
isFontSet(): boolean;
isForegroundSet(): boolean;
isLightweight(): boolean;
isMaximumSizeSet(): boolean;
isMinimumSizeSet(): boolean;
isOpaque(): boolean;
isPreferredSizeSet(): boolean;
isShowing(): boolean;
isValid(): boolean;
isVisible(): boolean;
keyDown(arg0: java_awt_Event, arg1: number): boolean;
keyUp(arg0: java_awt_Event, arg1: number): boolean;
layout(): void;
list(): void;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintStream, arg1: number): void;
list(arg0: java_io_PrintWriter): void;
list(arg0: java_io_PrintWriter, arg1: number): void;
locate(arg0: number, arg1: number): java_awt_Component;
location(): java_awt_Point;
lostFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
minimumSize(): java_awt_Dimension;
mouseDown(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseDrag(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseEnter(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseExit(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseMove(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseUp(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
move(arg0: number, arg1: number): void;
nextFocus(): void;
paint(arg0: java_awt_Graphics): void;
paintAll(arg0: java_awt_Graphics): void;
postEvent(arg0: java_awt_Event): boolean;
preferredSize(): java_awt_Dimension;
prepareImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): boolean;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
print(arg0: java_awt_Graphics): void;
printAll(arg0: java_awt_Graphics): void;
remove(arg0: java_awt_MenuComponent): void;
removeComponentListener(arg0: java_awt_event_ComponentListener): void;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
removeHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
removeHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
removeInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
removeKeyListener(arg0: java_awt_event_KeyListener): void;
removeMouseListener(arg0: java_awt_event_MouseListener): void;
removeMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
removeMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
removeNotify(): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
repaint(): void;
repaint(arg0: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
requestFocus(): void;
requestFocus(arg0: java_awt_event_FocusEvent_Cause): void;
requestFocusInWindow(): boolean;
requestFocusInWindow(arg0: java_awt_event_FocusEvent_Cause): boolean;
reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
resize(arg0: java_awt_Dimension): void;
resize(arg0: number, arg1: number): void;
revalidate(): void;
setBackground(arg0: java_awt_Color): void;
setBounds(arg0: java_awt_Rectangle): void;
setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
setComponentOrientation(arg0: java_awt_ComponentOrientation): void;
setCursor(arg0: java_awt_Cursor): void;
setDropTarget(arg0: java_awt_dnd_DropTarget): void;
setEnabled(arg0: boolean): void;
setFocusTraversalKeys(arg0: number, arg1: java_util_Set<java_awt_AWTKeyStroke>): void;
setFocusTraversalKeysEnabled(arg0: boolean): void;
setFocusable(arg0: boolean): void;
setFont(arg0: java_awt_Font): void;
setForeground(arg0: java_awt_Color): void;
setIgnoreRepaint(arg0: boolean): void;
setLocale(arg0: java_util_Locale): void;
setLocation(arg0: java_awt_Point): void;
setLocation(arg0: number, arg1: number): void;
setMaximumSize(arg0: java_awt_Dimension): void;
setMinimumSize(arg0: java_awt_Dimension): void;
setMixingCutoutShape(arg0: java_awt_Shape): void;
setName(arg0: string): void;
setPreferredSize(arg0: java_awt_Dimension): void;
setSize(arg0: java_awt_Dimension): void;
setSize(arg0: number, arg1: number): void;
setVisible(arg0: boolean): void;
show(): void;
show(arg0: boolean): void;
size(): java_awt_Dimension;
toString(): string;
transferFocus(): void;
transferFocusBackward(): void;
transferFocusUpCycle(): void;
update(arg0: java_awt_Graphics): void;
validate(): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { MenuContainer as java_awt_MenuContainer, Component as java_awt_Component, MenuShortcut as java_awt_MenuShortcut, Font as java_awt_Font, Event as java_awt_Event, AWTEvent as java_awt_AWTEvent, Menu as java_awt_Menu } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { ActionListener as java_awt_event_ActionListener } from 'java.awt.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { EventListener as java_util_EventListener } from 'java.util';

  export class PopupMenu extends java_awt_Menu {
accessibleContext: javax_accessibility_AccessibleContext;
actionCommand: string;
actionListeners: java_awt_event_ActionListener[];
class: java_lang_Class<java_lang_Object>;
font: java_awt_Font;
label: string;
listeners: T[];
name: string;
parent: java_awt_MenuContainer;
shortcut: java_awt_MenuShortcut;
addActionListener(arg0: java_awt_event_ActionListener): void;
addNotify(): void;
deleteShortcut(): void;
disable(): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;
enable(): void;
enable(arg0: boolean): void;
equals(arg0: java_lang_Object): boolean;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getActionCommand(): string;
getActionListeners(): java_awt_event_ActionListener[];
getClass(): java_lang_Class<java_lang_Object>;
getFont(): java_awt_Font;
getLabel(): string;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
getName(): string;
getParent(): java_awt_MenuContainer;
getShortcut(): java_awt_MenuShortcut;
hashCode(): number;
isEnabled(): boolean;
notify(): void;
notifyAll(): void;
postEvent(arg0: java_awt_Event): boolean;
removeActionListener(arg0: java_awt_event_ActionListener): void;
setActionCommand(arg0: string): void;
setEnabled(arg0: boolean): void;
setFont(arg0: java_awt_Font): void;
setLabel(arg0: string): void;
setName(arg0: string): void;
setShortcut(arg0: java_awt_MenuShortcut): void;
show(arg0: java_awt_Component, arg1: number, arg2: number): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { MenuComponent as java_awt_MenuComponent, Event as java_awt_Event, Font as java_awt_Font } from 'java.awt';

  export class MenuContainer {
font: java_awt_Font;
getFont(): java_awt_Font;
postEvent(arg0: java_awt_Event): boolean;
remove(arg0: java_awt_MenuComponent): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { MenuContainer as java_awt_MenuContainer, Font as java_awt_Font, Event as java_awt_Event, AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class MenuComponent extends java_lang_Object implements java_io_Serializable {
accessibleContext: javax_accessibility_AccessibleContext;
font: java_awt_Font;
name: string;
parent: java_awt_MenuContainer;
dispatchEvent(arg0: java_awt_AWTEvent): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getFont(): java_awt_Font;
getName(): string;
getParent(): java_awt_MenuContainer;
postEvent(arg0: java_awt_Event): boolean;
removeNotify(): void;
setFont(arg0: java_awt_Font): void;
setName(arg0: string): void;
toString(): string;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object } from 'java.lang';
import { Event as java_awt_Event } from 'java.awt';
import { Serializable as java_io_Serializable } from 'java.io';
/** Represents an event.

 All events require a static method named getHandlerList() which returns the same HandlerList as getHandlers(). */

  export class Event extends java_lang_Object implements java_io_Serializable {
arg: java_lang_Object;
clickCount: number;
evt: java_awt_Event;
id: number;
key: number;
modifiers: number;
static ACTION_EVENT: number;
static ALT_MASK: number;
static BACK_SPACE: number;
static CAPS_LOCK: number;
static CTRL_MASK: number;
static DELETE: number;
static DOWN: number;
static END: number;
static ENTER: number;
static ESCAPE: number;
static F10: number;
static F11: number;
static F12: number;
static F1: number;
static F2: number;
static F3: number;
static F4: number;
static F5: number;
static F6: number;
static F7: number;
static F8: number;
static F9: number;
static GOT_FOCUS: number;
static HOME: number;
static INSERT: number;
static KEY_ACTION: number;
static KEY_ACTION_RELEASE: number;
static KEY_PRESS: number;
static KEY_RELEASE: number;
static LEFT: number;
static LIST_DESELECT: number;
static LIST_SELECT: number;
static LOAD_FILE: number;
static LOST_FOCUS: number;
static META_MASK: number;
static MOUSE_DOWN: number;
static MOUSE_DRAG: number;
static MOUSE_ENTER: number;
static MOUSE_EXIT: number;
static MOUSE_MOVE: number;
static MOUSE_UP: number;
static NUM_LOCK: number;
static PAUSE: number;
static PGDN: number;
static PGUP: number;
static PRINT_SCREEN: number;
static RIGHT: number;
static SAVE_FILE: number;
static SCROLL_ABSOLUTE: number;
static SCROLL_BEGIN: number;
static SCROLL_END: number;
static SCROLL_LINE_DOWN: number;
static SCROLL_LINE_UP: number;
static SCROLL_LOCK: number;
static SCROLL_PAGE_DOWN: number;
static SCROLL_PAGE_UP: number;
static SHIFT_MASK: number;
static TAB: number;
static UP: number;
static WINDOW_DEICONIFY: number;
static WINDOW_DESTROY: number;
static WINDOW_EXPOSE: number;
static WINDOW_ICONIFY: number;
static WINDOW_MOVED: number;
target: java_lang_Object;
when: number;
x: number;
y: number;
controlDown(): boolean;
metaDown(): boolean;
shiftDown(): boolean;
toString(): string;
translate(arg0: number, arg1: number): void;
constructor(arg0: java_lang_Object, arg1: number, arg2: java_lang_Object);
constructor(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
constructor(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_lang_Object);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { FocusEvent as java_awt_event_FocusEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class FocusListener implements java_util_EventListener {

focusGained(arg0: java_awt_event_FocusEvent): void;
focusLost(arg0: java_awt_event_FocusEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';

  export class FocusEvent extends java_awt_event_ComponentEvent {
cause: java_awt_event_FocusEvent_Cause;
class: java_lang_Class<java_lang_Object>;
iD: number;
oppositeComponent: java_awt_Component;
source: java_lang_Object;
static FOCUS_FIRST: number;
static FOCUS_GAINED: number;
static FOCUS_LAST: number;
static FOCUS_LOST: number;
equals(arg0: java_lang_Object): boolean;
getCause(): java_awt_event_FocusEvent_Cause;
getClass(): java_lang_Class<java_lang_Object>;
getID(): number;
getOppositeComponent(): java_awt_Component;
getSource(): java_lang_Object;
hashCode(): number;
isTemporary(): boolean;
notify(): void;
notifyAll(): void;
paramString(): string;
setSource(arg0: java_lang_Object): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Component, arg1: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: boolean);
constructor(arg0: java_awt_Component, arg1: number, arg2: boolean, arg3: java_awt_Component);
constructor(arg0: java_awt_Component, arg1: number, arg2: boolean, arg3: java_awt_Component, arg4: java_awt_event_FocusEvent_Cause);
  }
}
//@ts-nocheck

declare module 'java.awt.event.FocusEvent' {
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Cause extends java_lang_Enum<java_awt_event_FocusEvent_Cause> {
class: java_lang_Class<java_lang_Object>;
static ACTIVATION: java_awt_event_FocusEvent_Cause;
static CLEAR_GLOBAL_FOCUS_OWNER: java_awt_event_FocusEvent_Cause;
static MOUSE_EVENT: java_awt_event_FocusEvent_Cause;
static ROLLBACK: java_awt_event_FocusEvent_Cause;
static TRAVERSAL: java_awt_event_FocusEvent_Cause;
static TRAVERSAL_BACKWARD: java_awt_event_FocusEvent_Cause;
static TRAVERSAL_DOWN: java_awt_event_FocusEvent_Cause;
static TRAVERSAL_FORWARD: java_awt_event_FocusEvent_Cause;
static TRAVERSAL_UP: java_awt_event_FocusEvent_Cause;
static UNEXPECTED: java_awt_event_FocusEvent_Cause;
static UNKNOWN: java_awt_event_FocusEvent_Cause;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_awt_event_FocusEvent_Cause;
static values(): java_awt_event_FocusEvent_Cause[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component, AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ComponentEvent extends java_awt_AWTEvent {
class: java_lang_Class<java_lang_Object>;
component: java_awt_Component;
source: java_lang_Object;
static COMPONENT_FIRST: number;
static COMPONENT_HIDDEN: number;
static COMPONENT_LAST: number;
static COMPONENT_MOVED: number;
static COMPONENT_RESIZED: number;
static COMPONENT_SHOWN: number;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getComponent(): java_awt_Component;
getSource(): java_lang_Object;
hashCode(): number;
notify(): void;
notifyAll(): void;
paramString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Component, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Event as java_awt_Event } from 'java.awt';
import { EventObject as java_util_EventObject } from 'java.util';

  export class AWTEvent extends java_util_EventObject {
class: java_lang_Class<java_lang_Object>;
iD: number;
static ACTION_EVENT_MASK: number;
static ADJUSTMENT_EVENT_MASK: number;
static COMPONENT_EVENT_MASK: number;
static CONTAINER_EVENT_MASK: number;
static FOCUS_EVENT_MASK: number;
static HIERARCHY_BOUNDS_EVENT_MASK: number;
static HIERARCHY_EVENT_MASK: number;
static INPUT_METHOD_EVENT_MASK: number;
static INVOCATION_EVENT_MASK: number;
static ITEM_EVENT_MASK: number;
static KEY_EVENT_MASK: number;
static MOUSE_EVENT_MASK: number;
static MOUSE_MOTION_EVENT_MASK: number;
static MOUSE_WHEEL_EVENT_MASK: number;
static PAINT_EVENT_MASK: number;
static RESERVED_ID_MAX: number;
static TEXT_EVENT_MASK: number;
static WINDOW_EVENT_MASK: number;
static WINDOW_FOCUS_EVENT_MASK: number;
static WINDOW_STATE_EVENT_MASK: number;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getID(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
paramString(): string;
setSource(arg0: java_lang_Object): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Event);
constructor(arg0: java_lang_Object, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Cursor as java_awt_Cursor } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Cursor extends java_lang_Object implements java_io_Serializable {
name: string;
static CROSSHAIR_CURSOR: number;
static CUSTOM_CURSOR: number;
static DEFAULT_CURSOR: number;
static E_RESIZE_CURSOR: number;
static HAND_CURSOR: number;
static MOVE_CURSOR: number;
static NE_RESIZE_CURSOR: number;
static NW_RESIZE_CURSOR: number;
static N_RESIZE_CURSOR: number;
static SE_RESIZE_CURSOR: number;
static SW_RESIZE_CURSOR: number;
static S_RESIZE_CURSOR: number;
static TEXT_CURSOR: number;
static WAIT_CURSOR: number;
static W_RESIZE_CURSOR: number;
static defaultCursor: java_awt_Cursor;
static predefinedCursor: java_awt_Cursor;
static systemCustomCursor: java_awt_Cursor;
type: number;
getName(): string;
getType(): number;
static getDefaultCursor(): java_awt_Cursor;
static getPredefinedCursor(arg0: number): java_awt_Cursor;
static getSystemCustomCursor(arg0: string): java_awt_Cursor;
toString(): string;
constructor(arg0: number);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { MenuShortcut as java_awt_MenuShortcut } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class MenuShortcut extends java_lang_Object implements java_io_Serializable {
key: number;
equals(arg0: java_awt_MenuShortcut): boolean;
equals(arg0: java_lang_Object): boolean;
getKey(): number;
hashCode(): number;
toString(): string;
usesShiftModifier(): boolean;
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { ActionEvent as java_awt_event_ActionEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class ActionListener implements java_util_EventListener {

actionPerformed(arg0: java_awt_event_ActionEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AWTEvent as java_awt_AWTEvent } from 'java.awt';

  export class ActionEvent extends java_awt_AWTEvent {
actionCommand: string;
class: java_lang_Class<java_lang_Object>;
modifiers: number;
source: java_lang_Object;
static ACTION_FIRST: number;
static ACTION_LAST: number;
static ACTION_PERFORMED: number;
static ALT_MASK: number;
static CTRL_MASK: number;
static META_MASK: number;
static SHIFT_MASK: number;
when: number;
equals(arg0: java_lang_Object): boolean;
getActionCommand(): string;
getClass(): java_lang_Class<java_lang_Object>;
getModifiers(): number;
getSource(): java_lang_Object;
getWhen(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
paramString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_lang_Object, arg1: number, arg2: string);
constructor(arg0: java_lang_Object, arg1: number, arg2: string, arg3: number);
constructor(arg0: java_lang_Object, arg1: number, arg2: string, arg3: number, arg4: number);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { MenuItem as java_awt_MenuItem, MenuComponent as java_awt_MenuComponent, MenuContainer as java_awt_MenuContainer, Font as java_awt_Font, Event as java_awt_Event, AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext, Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class Menu extends java_awt_MenuItem implements java_awt_MenuContainer, javax_accessibility_Accessible {
accessibleContext: javax_accessibility_AccessibleContext;
class: java_lang_Class<java_lang_Object>;
font: java_awt_Font;
item: java_awt_MenuItem;
itemCount: number;
name: string;
parent: java_awt_MenuContainer;
add(arg0: java_awt_MenuItem): java_awt_MenuItem;
add(arg0: string): void;
addNotify(): void;
addSeparator(): void;
countItems(): number;
dispatchEvent(arg0: java_awt_AWTEvent): void;
equals(arg0: java_lang_Object): boolean;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getClass(): java_lang_Class<java_lang_Object>;
getFont(): java_awt_Font;
getItem(arg0: number): java_awt_MenuItem;
getItemCount(): number;
getName(): string;
getParent(): java_awt_MenuContainer;
hashCode(): number;
insert(arg0: java_awt_MenuItem, arg1: number): void;
insert(arg0: string, arg1: number): void;
insertSeparator(arg0: number): void;
isTearOff(): boolean;
notify(): void;
notifyAll(): void;
paramString(): string;
postEvent(arg0: java_awt_Event): boolean;
remove(arg0: java_awt_MenuComponent): void;
remove(arg0: number): void;
removeAll(): void;
removeNotify(): void;
setFont(arg0: java_awt_Font): void;
setName(arg0: string): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: string);
constructor(arg0: string, arg1: boolean);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { AccessibleContext as javax_accessibility_AccessibleContext, Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { MenuShortcut as java_awt_MenuShortcut, MenuComponent as java_awt_MenuComponent } from 'java.awt';
import { ActionListener as java_awt_event_ActionListener } from 'java.awt.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { EventListener as java_util_EventListener } from 'java.util';

  export class MenuItem extends java_awt_MenuComponent implements javax_accessibility_Accessible {
accessibleContext: javax_accessibility_AccessibleContext;
actionCommand: string;
actionListeners: java_awt_event_ActionListener[];
class: java_lang_Class<java_lang_Object>;
label: string;
listeners: T[];
shortcut: java_awt_MenuShortcut;
addActionListener(arg0: java_awt_event_ActionListener): void;
addNotify(): void;
deleteShortcut(): void;
disable(): void;
enable(): void;
enable(arg0: boolean): void;
equals(arg0: java_lang_Object): boolean;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getActionCommand(): string;
getActionListeners(): java_awt_event_ActionListener[];
getClass(): java_lang_Class<java_lang_Object>;
getLabel(): string;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
getShortcut(): java_awt_MenuShortcut;
hashCode(): number;
isEnabled(): boolean;
notify(): void;
notifyAll(): void;
paramString(): string;
removeActionListener(arg0: java_awt_event_ActionListener): void;
setActionCommand(arg0: string): void;
setEnabled(arg0: boolean): void;
setLabel(arg0: string): void;
setShortcut(arg0: java_awt_MenuShortcut): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: string);
constructor(arg0: string, arg1: java_awt_MenuShortcut);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Component as java_awt_Component, Graphics as java_awt_Graphics, Font as java_awt_Font, AWTKeyStroke as java_awt_AWTKeyStroke, Container as java_awt_Container, LayoutManager as java_awt_LayoutManager, Dimension as java_awt_Dimension, FocusTraversalPolicy as java_awt_FocusTraversalPolicy, ComponentOrientation as java_awt_ComponentOrientation, Insets as java_awt_Insets, Event as java_awt_Event, Point as java_awt_Point } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Set as java_util_Set, EventListener as java_util_EventListener } from 'java.util';
import { ContainerListener as java_awt_event_ContainerListener } from 'java.awt.event';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';
/** Represents a captured state of a container block. */

  export class Container extends java_awt_Component {
alignmentX: number;
alignmentY: number;
class: java_lang_Class<java_lang_Object>;
component: java_awt_Component;
componentAt: java_awt_Component;
componentAt: java_awt_Component;
componentCount: number;
componentZOrder: number;
components: java_awt_Component[];
containerListeners: java_awt_event_ContainerListener[];
focusTraversalKeys: java_util_Set<java_awt_AWTKeyStroke>;
focusTraversalPolicy: java_awt_FocusTraversalPolicy;
insets: java_awt_Insets;
layout: java_awt_LayoutManager;
listeners: T[];
maximumSize: java_awt_Dimension;
minimumSize: java_awt_Dimension;
mousePosition: java_awt_Point;
preferredSize: java_awt_Dimension;
add(arg0: java_awt_Component): java_awt_Component;
add(arg0: java_awt_Component, arg1: java_lang_Object): void;
add(arg0: java_awt_Component, arg1: java_lang_Object, arg2: number): void;
add(arg0: java_awt_Component, arg1: number): java_awt_Component;
add(arg0: string, arg1: java_awt_Component): java_awt_Component;
addContainerListener(arg0: java_awt_event_ContainerListener): void;
addNotify(): void;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
applyComponentOrientation(arg0: java_awt_ComponentOrientation): void;
areFocusTraversalKeysSet(arg0: number): boolean;
countComponents(): number;
deliverEvent(arg0: java_awt_Event): void;
doLayout(): void;
equals(arg0: java_lang_Object): boolean;
findComponentAt(arg0: java_awt_Point): java_awt_Component;
findComponentAt(arg0: number, arg1: number): java_awt_Component;
getAlignmentX(): number;
getAlignmentY(): number;
getClass(): java_lang_Class<java_lang_Object>;
getComponent(arg0: number): java_awt_Component;
getComponentAt(arg0: java_awt_Point): java_awt_Component;
getComponentAt(arg0: number, arg1: number): java_awt_Component;
getComponentCount(): number;
getComponentZOrder(arg0: java_awt_Component): number;
getComponents(): java_awt_Component[];
getContainerListeners(): java_awt_event_ContainerListener[];
getFocusTraversalKeys(arg0: number): java_util_Set<java_awt_AWTKeyStroke>;
getFocusTraversalPolicy(): java_awt_FocusTraversalPolicy;
getInsets(): java_awt_Insets;
getLayout(): java_awt_LayoutManager;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
getMaximumSize(): java_awt_Dimension;
getMinimumSize(): java_awt_Dimension;
getMousePosition(arg0: boolean): java_awt_Point;
getPreferredSize(): java_awt_Dimension;
hashCode(): number;
insets(): java_awt_Insets;
invalidate(): void;
isAncestorOf(arg0: java_awt_Component): boolean;
isFocusCycleRoot(): boolean;
isFocusCycleRoot(arg0: java_awt_Container): boolean;
isFocusTraversalPolicyProvider(): boolean;
isFocusTraversalPolicySet(): boolean;
isValidateRoot(): boolean;
layout(): void;
list(arg0: java_io_PrintStream, arg1: number): void;
list(arg0: java_io_PrintWriter, arg1: number): void;
locate(arg0: number, arg1: number): java_awt_Component;
minimumSize(): java_awt_Dimension;
notify(): void;
notifyAll(): void;
paint(arg0: java_awt_Graphics): void;
paintComponents(arg0: java_awt_Graphics): void;
preferredSize(): java_awt_Dimension;
print(arg0: java_awt_Graphics): void;
printComponents(arg0: java_awt_Graphics): void;
remove(arg0: java_awt_Component): void;
remove(arg0: number): void;
removeAll(): void;
removeContainerListener(arg0: java_awt_event_ContainerListener): void;
removeNotify(): void;
setComponentZOrder(arg0: java_awt_Component, arg1: number): void;
setFocusCycleRoot(arg0: boolean): void;
setFocusTraversalKeys(arg0: number, arg1: java_util_Set<java_awt_AWTKeyStroke>): void;
setFocusTraversalPolicy(arg0: java_awt_FocusTraversalPolicy): void;
setFocusTraversalPolicyProvider(arg0: boolean): void;
setFont(arg0: java_awt_Font): void;
setLayout(arg0: java_awt_LayoutManager): void;
transferFocusDownCycle(): void;
update(arg0: java_awt_Graphics): void;
validate(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Character as java_lang_Character } from 'java.lang';
import { AWTKeyStroke as java_awt_AWTKeyStroke } from 'java.awt';
import { KeyEvent as java_awt_event_KeyEvent } from 'java.awt.event';
import { Serializable as java_io_Serializable } from 'java.io';

  export class AWTKeyStroke extends java_lang_Object implements java_io_Serializable {
keyChar: string;
keyCode: number;
keyEventType: number;
modifiers: number;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStroke: java_awt_AWTKeyStroke;
static aWTKeyStrokeForEvent: java_awt_AWTKeyStroke;
equals(arg0: java_lang_Object): boolean;
getKeyChar(): string;
getKeyCode(): number;
getKeyEventType(): number;
getModifiers(): number;
hashCode(): number;
isOnKeyRelease(): boolean;
static getAWTKeyStroke(arg0: java_lang_Character, arg1: number): java_awt_AWTKeyStroke;
static getAWTKeyStroke(arg0: number, arg1: number): java_awt_AWTKeyStroke;
static getAWTKeyStroke(arg0: number, arg1: number, arg2: boolean): java_awt_AWTKeyStroke;
static getAWTKeyStroke(arg0: string): java_awt_AWTKeyStroke;
static getAWTKeyStroke(arg0: string): java_awt_AWTKeyStroke;
static getAWTKeyStrokeForEvent(arg0: java_awt_event_KeyEvent): java_awt_AWTKeyStroke;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputEvent as java_awt_event_InputEvent } from 'java.awt.event';

  export class KeyEvent extends java_awt_event_InputEvent {
class: java_lang_Class<java_lang_Object>;
component: java_awt_Component;
extendedKeyCode: number;
iD: number;
keyChar: string;
keyCode: number;
keyLocation: number;
source: java_lang_Object;
static CHAR_UNDEFINED: string;
static KEY_FIRST: number;
static KEY_LAST: number;
static KEY_LOCATION_LEFT: number;
static KEY_LOCATION_NUMPAD: number;
static KEY_LOCATION_RIGHT: number;
static KEY_LOCATION_STANDARD: number;
static KEY_LOCATION_UNKNOWN: number;
static KEY_PRESSED: number;
static KEY_RELEASED: number;
static KEY_TYPED: number;
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
static VK_A: number;
static VK_ACCEPT: number;
static VK_ADD: number;
static VK_AGAIN: number;
static VK_ALL_CANDIDATES: number;
static VK_ALPHANUMERIC: number;
static VK_ALT: number;
static VK_ALT_GRAPH: number;
static VK_AMPERSAND: number;
static VK_ASTERISK: number;
static VK_AT: number;
static VK_B: number;
static VK_BACK_QUOTE: number;
static VK_BACK_SLASH: number;
static VK_BACK_SPACE: number;
static VK_BEGIN: number;
static VK_BRACELEFT: number;
static VK_BRACERIGHT: number;
static VK_C: number;
static VK_CANCEL: number;
static VK_CAPS_LOCK: number;
static VK_CIRCUMFLEX: number;
static VK_CLEAR: number;
static VK_CLOSE_BRACKET: number;
static VK_CODE_INPUT: number;
static VK_COLON: number;
static VK_COMMA: number;
static VK_COMPOSE: number;
static VK_CONTEXT_MENU: number;
static VK_CONTROL: number;
static VK_CONVERT: number;
static VK_COPY: number;
static VK_CUT: number;
static VK_D: number;
static VK_DEAD_ABOVEDOT: number;
static VK_DEAD_ABOVERING: number;
static VK_DEAD_ACUTE: number;
static VK_DEAD_BREVE: number;
static VK_DEAD_CARON: number;
static VK_DEAD_CEDILLA: number;
static VK_DEAD_CIRCUMFLEX: number;
static VK_DEAD_DIAERESIS: number;
static VK_DEAD_DOUBLEACUTE: number;
static VK_DEAD_GRAVE: number;
static VK_DEAD_IOTA: number;
static VK_DEAD_MACRON: number;
static VK_DEAD_OGONEK: number;
static VK_DEAD_SEMIVOICED_SOUND: number;
static VK_DEAD_TILDE: number;
static VK_DEAD_VOICED_SOUND: number;
static VK_DECIMAL: number;
static VK_DELETE: number;
static VK_DIVIDE: number;
static VK_DOLLAR: number;
static VK_DOWN: number;
static VK_E: number;
static VK_END: number;
static VK_ENTER: number;
static VK_EQUALS: number;
static VK_ESCAPE: number;
static VK_EURO_SIGN: number;
static VK_EXCLAMATION_MARK: number;
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
static VK_F1: number;
static VK_F20: number;
static VK_F21: number;
static VK_F22: number;
static VK_F23: number;
static VK_F24: number;
static VK_F2: number;
static VK_F3: number;
static VK_F4: number;
static VK_F5: number;
static VK_F6: number;
static VK_F7: number;
static VK_F8: number;
static VK_F9: number;
static VK_F: number;
static VK_FINAL: number;
static VK_FIND: number;
static VK_FULL_WIDTH: number;
static VK_G: number;
static VK_GREATER: number;
static VK_H: number;
static VK_HALF_WIDTH: number;
static VK_HELP: number;
static VK_HIRAGANA: number;
static VK_HOME: number;
static VK_I: number;
static VK_INPUT_METHOD_ON_OFF: number;
static VK_INSERT: number;
static VK_INVERTED_EXCLAMATION_MARK: number;
static VK_J: number;
static VK_JAPANESE_HIRAGANA: number;
static VK_JAPANESE_KATAKANA: number;
static VK_JAPANESE_ROMAN: number;
static VK_K: number;
static VK_KANA: number;
static VK_KANA_LOCK: number;
static VK_KANJI: number;
static VK_KATAKANA: number;
static VK_KP_DOWN: number;
static VK_KP_LEFT: number;
static VK_KP_RIGHT: number;
static VK_KP_UP: number;
static VK_L: number;
static VK_LEFT: number;
static VK_LEFT_PARENTHESIS: number;
static VK_LESS: number;
static VK_M: number;
static VK_META: number;
static VK_MINUS: number;
static VK_MODECHANGE: number;
static VK_MULTIPLY: number;
static VK_N: number;
static VK_NONCONVERT: number;
static VK_NUMBER_SIGN: number;
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
static VK_NUM_LOCK: number;
static VK_O: number;
static VK_OPEN_BRACKET: number;
static VK_P: number;
static VK_PAGE_DOWN: number;
static VK_PAGE_UP: number;
static VK_PASTE: number;
static VK_PAUSE: number;
static VK_PERIOD: number;
static VK_PLUS: number;
static VK_PREVIOUS_CANDIDATE: number;
static VK_PRINTSCREEN: number;
static VK_PROPS: number;
static VK_Q: number;
static VK_QUOTE: number;
static VK_QUOTEDBL: number;
static VK_R: number;
static VK_RIGHT: number;
static VK_RIGHT_PARENTHESIS: number;
static VK_ROMAN_CHARACTERS: number;
static VK_S: number;
static VK_SCROLL_LOCK: number;
static VK_SEMICOLON: number;
static VK_SEPARATER: number;
static VK_SEPARATOR: number;
static VK_SHIFT: number;
static VK_SLASH: number;
static VK_SPACE: number;
static VK_STOP: number;
static VK_SUBTRACT: number;
static VK_T: number;
static VK_TAB: number;
static VK_U: number;
static VK_UNDEFINED: number;
static VK_UNDERSCORE: number;
static VK_UNDO: number;
static VK_UP: number;
static VK_V: number;
static VK_W: number;
static VK_WINDOWS: number;
static VK_X: number;
static VK_Y: number;
static VK_Z: number;
static extendedKeyCodeForChar: number;
static keyModifiersText: string;
static keyText: string;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getComponent(): java_awt_Component;
getExtendedKeyCode(): number;
getID(): number;
getKeyChar(): string;
getKeyCode(): number;
getKeyLocation(): number;
getSource(): java_lang_Object;
hashCode(): number;
isActionKey(): boolean;
notify(): void;
notifyAll(): void;
paramString(): string;
setKeyChar(arg0: string): void;
setKeyCode(arg0: number): void;
setModifiers(arg0: number): void;
setSource(arg0: java_lang_Object): void;
static getExtendedKeyCodeForChar(arg0: number): number;
static getKeyModifiersText(arg0: number): string;
static getKeyText(arg0: number): string;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string, arg6: number);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';

  export class InputEvent extends java_awt_event_ComponentEvent {
class: java_lang_Class<java_lang_Object>;
iD: number;
modifiers: number;
modifiersEx: number;
source: java_lang_Object;
static ALT_DOWN_MASK: number;
static ALT_GRAPH_DOWN_MASK: number;
static ALT_GRAPH_MASK: number;
static ALT_MASK: number;
static BUTTON1_DOWN_MASK: number;
static BUTTON1_MASK: number;
static BUTTON2_DOWN_MASK: number;
static BUTTON2_MASK: number;
static BUTTON3_DOWN_MASK: number;
static BUTTON3_MASK: number;
static CTRL_DOWN_MASK: number;
static CTRL_MASK: number;
static META_DOWN_MASK: number;
static META_MASK: number;
static SHIFT_DOWN_MASK: number;
static SHIFT_MASK: number;
static maskForButton: number;
static modifiersExText: string;
when: number;
consume(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getID(): number;
getModifiers(): number;
getModifiersEx(): number;
getSource(): java_lang_Object;
getWhen(): number;
hashCode(): number;
isAltDown(): boolean;
isAltGraphDown(): boolean;
isConsumed(): boolean;
isControlDown(): boolean;
isMetaDown(): boolean;
isShiftDown(): boolean;
notify(): void;
notifyAll(): void;
setSource(arg0: java_lang_Object): void;
static getMaskForButton(arg0: number): number;
static getModifiersExText(arg0: number): string;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Component as java_awt_Component, Container as java_awt_Container, Dimension as java_awt_Dimension } from 'java.awt';

  export class LayoutManager {

addLayoutComponent(arg0: string, arg1: java_awt_Component): void;
layoutContainer(arg0: java_awt_Container): void;
minimumLayoutSize(arg0: java_awt_Container): java_awt_Dimension;
preferredLayoutSize(arg0: java_awt_Container): java_awt_Dimension;
removeLayoutComponent(arg0: java_awt_Component): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Window as java_awt_Window, Component as java_awt_Component, Container as java_awt_Container } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class FocusTraversalPolicy extends java_lang_Object {
componentAfter: java_awt_Component;
componentBefore: java_awt_Component;
defaultComponent: java_awt_Component;
firstComponent: java_awt_Component;
initialComponent: java_awt_Component;
lastComponent: java_awt_Component;
getComponentAfter(arg0: java_awt_Container, arg1: java_awt_Component): java_awt_Component;
getComponentBefore(arg0: java_awt_Container, arg1: java_awt_Component): java_awt_Component;
getDefaultComponent(arg0: java_awt_Container): java_awt_Component;
getFirstComponent(arg0: java_awt_Container): java_awt_Component;
getInitialComponent(arg0: java_awt_Window): java_awt_Component;
getLastComponent(arg0: java_awt_Container): java_awt_Component;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { ResourceBundle as java_util_ResourceBundle, Locale as java_util_Locale } from 'java.util';
import { ComponentOrientation as java_awt_ComponentOrientation } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ComponentOrientation extends java_lang_Object implements java_io_Serializable {
static LEFT_TO_RIGHT: java_awt_ComponentOrientation;
static RIGHT_TO_LEFT: java_awt_ComponentOrientation;
static UNKNOWN: java_awt_ComponentOrientation;
static orientation: java_awt_ComponentOrientation;
static orientation: java_awt_ComponentOrientation;
isHorizontal(): boolean;
isLeftToRight(): boolean;
static getOrientation(arg0: java_util_Locale): java_awt_ComponentOrientation;
static getOrientation(arg0: java_util_ResourceBundle): java_awt_ComponentOrientation;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Insets extends java_lang_Object implements java_lang_Cloneable, java_io_Serializable {
bottom: number;
left: number;
right: number;
top: number;
clone(): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
set(arg0: number, arg1: number, arg2: number, arg3: number): void;
toString(): string;
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { ContainerEvent as java_awt_event_ContainerEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class ContainerListener implements java_util_EventListener {

componentAdded(arg0: java_awt_event_ContainerEvent): void;
componentRemoved(arg0: java_awt_event_ContainerEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component, Container as java_awt_Container } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';

  export class ContainerEvent extends java_awt_event_ComponentEvent {
child: java_awt_Component;
class: java_lang_Class<java_lang_Object>;
container: java_awt_Container;
iD: number;
source: java_lang_Object;
static COMPONENT_ADDED: number;
static COMPONENT_REMOVED: number;
static CONTAINER_FIRST: number;
static CONTAINER_LAST: number;
equals(arg0: java_lang_Object): boolean;
getChild(): java_awt_Component;
getClass(): java_lang_Class<java_lang_Object>;
getContainer(): java_awt_Container;
getID(): number;
getSource(): java_lang_Object;
hashCode(): number;
notify(): void;
notifyAll(): void;
paramString(): string;
setSource(arg0: java_lang_Object): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_Component);
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DropTargetDropEvent as java_awt_dnd_DropTargetDropEvent, DropTargetListener as java_awt_dnd_DropTargetListener, DropTargetDragEvent as java_awt_dnd_DropTargetDragEvent, DropTargetEvent as java_awt_dnd_DropTargetEvent, DropTargetContext as java_awt_dnd_DropTargetContext } from 'java.awt.dnd';
import { FlavorMap as java_awt_datatransfer_FlavorMap } from 'java.awt.datatransfer';
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DropTarget extends java_lang_Object implements java_awt_dnd_DropTargetListener, java_io_Serializable {
component: java_awt_Component;
defaultActions: number;
dropTargetContext: java_awt_dnd_DropTargetContext;
flavorMap: java_awt_datatransfer_FlavorMap;
addDropTargetListener(arg0: java_awt_dnd_DropTargetListener): void;
addNotify(): void;
dragEnter(arg0: java_awt_dnd_DropTargetDragEvent): void;
dragExit(arg0: java_awt_dnd_DropTargetEvent): void;
dragOver(arg0: java_awt_dnd_DropTargetDragEvent): void;
drop(arg0: java_awt_dnd_DropTargetDropEvent): void;
dropActionChanged(arg0: java_awt_dnd_DropTargetDragEvent): void;
getComponent(): java_awt_Component;
getDefaultActions(): number;
getDropTargetContext(): java_awt_dnd_DropTargetContext;
getFlavorMap(): java_awt_datatransfer_FlavorMap;
isActive(): boolean;
removeDropTargetListener(arg0: java_awt_dnd_DropTargetListener): void;
removeNotify(): void;
setActive(arg0: boolean): void;
setComponent(arg0: java_awt_Component): void;
setDefaultActions(arg0: number): void;
setFlavorMap(arg0: java_awt_datatransfer_FlavorMap): void;
constructor();
constructor(arg0: java_awt_Component, arg1: java_awt_dnd_DropTargetListener);
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_dnd_DropTargetListener);
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_dnd_DropTargetListener, arg3: boolean);
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_dnd_DropTargetListener, arg3: boolean, arg4: java_awt_datatransfer_FlavorMap);
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { Point as java_awt_Point } from 'java.awt';
import { DataFlavor as java_awt_datatransfer_DataFlavor, Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { List as java_util_List } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DropTargetContext as java_awt_dnd_DropTargetContext, DropTargetEvent as java_awt_dnd_DropTargetEvent } from 'java.awt.dnd';

  export class DropTargetDropEvent extends java_awt_dnd_DropTargetEvent {
class: java_lang_Class<java_lang_Object>;
currentDataFlavors: java_awt_datatransfer_DataFlavor[];
currentDataFlavorsAsList: java_util_List<java_awt_datatransfer_DataFlavor>;
dropAction: number;
location: java_awt_Point;
source: java_lang_Object;
sourceActions: number;
transferable: java_awt_datatransfer_Transferable;
acceptDrop(arg0: number): void;
dropComplete(arg0: boolean): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getCurrentDataFlavors(): java_awt_datatransfer_DataFlavor[];
getCurrentDataFlavorsAsList(): java_util_List<java_awt_datatransfer_DataFlavor>;
getDropAction(): number;
getLocation(): java_awt_Point;
getSource(): java_lang_Object;
getSourceActions(): number;
getTransferable(): java_awt_datatransfer_Transferable;
hashCode(): number;
isDataFlavorSupported(arg0: java_awt_datatransfer_DataFlavor): boolean;
isLocalTransfer(): boolean;
notify(): void;
notifyAll(): void;
rejectDrop(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_dnd_DropTargetContext, arg1: java_awt_Point, arg2: number, arg3: number);
constructor(arg0: java_awt_dnd_DropTargetContext, arg1: java_awt_Point, arg2: number, arg3: number, arg4: boolean);
  }
}
//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Object as java_lang_Object, Class as java_lang_Class, ClassLoader as java_lang_ClassLoader, Cloneable as java_lang_Cloneable } from 'java.lang';
import { DataFlavor as java_awt_datatransfer_DataFlavor, Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { ObjectOutput as java_io_ObjectOutput, ObjectInput as java_io_ObjectInput, Reader as java_io_Reader, Externalizable as java_io_Externalizable } from 'java.io';

  export class DataFlavor extends java_lang_Object implements java_io_Externalizable, java_lang_Cloneable {
defaultRepresentationClass: java_lang_Class<java_lang_Object>;
defaultRepresentationClassAsString: string;
humanPresentableName: string;
mimeType: string;
parameter: string;
primaryType: string;
readerForText: java_io_Reader;
representationClass: java_lang_Class<java_lang_Object>;
static allHtmlFlavor: java_awt_datatransfer_DataFlavor;
static fragmentHtmlFlavor: java_awt_datatransfer_DataFlavor;
static imageFlavor: java_awt_datatransfer_DataFlavor;
static javaFileListFlavor: java_awt_datatransfer_DataFlavor;
static javaJVMLocalObjectMimeType: string;
static javaRemoteObjectMimeType: string;
static javaSerializedObjectMimeType: string;
static plainTextFlavor: java_awt_datatransfer_DataFlavor;
static selectionHtmlFlavor: java_awt_datatransfer_DataFlavor;
static stringFlavor: java_awt_datatransfer_DataFlavor;
static textPlainUnicodeFlavor: java_awt_datatransfer_DataFlavor;
subType: string;
clone(): java_lang_Object;
equals(arg0: java_awt_datatransfer_DataFlavor): boolean;
equals(arg0: java_lang_Object): boolean;
equals(arg0: string): boolean;
getDefaultRepresentationClass(): java_lang_Class<java_lang_Object>;
getDefaultRepresentationClassAsString(): string;
getHumanPresentableName(): string;
getMimeType(): string;
getParameter(arg0: string): string;
getPrimaryType(): string;
getReaderForText(arg0: java_awt_datatransfer_Transferable): java_io_Reader;
getRepresentationClass(): java_lang_Class<java_lang_Object>;
getSubType(): string;
hashCode(): number;
isFlavorJavaFileListType(): boolean;
isFlavorRemoteObjectType(): boolean;
isFlavorSerializedObjectType(): boolean;
isFlavorTextType(): boolean;
isMimeTypeEqual(arg0: java_awt_datatransfer_DataFlavor): boolean;
isMimeTypeEqual(arg0: string): boolean;
isMimeTypeSerializedObject(): boolean;
isRepresentationClassByteBuffer(): boolean;
isRepresentationClassCharBuffer(): boolean;
isRepresentationClassInputStream(): boolean;
isRepresentationClassReader(): boolean;
isRepresentationClassRemote(): boolean;
isRepresentationClassSerializable(): boolean;
match(arg0: java_awt_datatransfer_DataFlavor): boolean;
readExternal(arg0: java_io_ObjectInput): void;
setHumanPresentableName(arg0: string): void;
static getTextPlainUnicodeFlavor(): java_awt_datatransfer_DataFlavor;
static selectBestTextFlavor(arg0: java_awt_datatransfer_DataFlavor[]): java_awt_datatransfer_DataFlavor;
toString(): string;
writeExternal(arg0: java_io_ObjectOutput): void;
constructor();
constructor(arg0: java_lang_Class<java_lang_Object>, arg1: string);
constructor(arg0: string);
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: string, arg2: java_lang_ClassLoader);
  }
}
//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { DataFlavor as java_awt_datatransfer_DataFlavor } from 'java.awt.datatransfer';
import { Object as java_lang_Object } from 'java.lang';

  export class Transferable {
transferData: java_lang_Object;
transferDataFlavors: java_awt_datatransfer_DataFlavor[];
getTransferData(arg0: java_awt_datatransfer_DataFlavor): java_lang_Object;
getTransferDataFlavors(): java_awt_datatransfer_DataFlavor[];
isDataFlavorSupported(arg0: java_awt_datatransfer_DataFlavor): boolean;

  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DropTargetContext extends java_lang_Object implements java_io_Serializable {
component: java_awt_Component;
dropTarget: java_awt_dnd_DropTarget;
dropComplete(arg0: boolean): void;
getComponent(): java_awt_Component;
getDropTarget(): java_awt_dnd_DropTarget;

  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DropTargetContext as java_awt_dnd_DropTargetContext } from 'java.awt.dnd';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EventObject as java_util_EventObject } from 'java.util';

  export class DropTargetEvent extends java_util_EventObject {
class: java_lang_Class<java_lang_Object>;
dropTargetContext: java_awt_dnd_DropTargetContext;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getDropTargetContext(): java_awt_dnd_DropTargetContext;
hashCode(): number;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_dnd_DropTargetContext);
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DropTargetDropEvent as java_awt_dnd_DropTargetDropEvent, DropTargetDragEvent as java_awt_dnd_DropTargetDragEvent, DropTargetEvent as java_awt_dnd_DropTargetEvent } from 'java.awt.dnd';
import { EventListener as java_util_EventListener } from 'java.util';

  export class DropTargetListener implements java_util_EventListener {

dragEnter(arg0: java_awt_dnd_DropTargetDragEvent): void;
dragExit(arg0: java_awt_dnd_DropTargetEvent): void;
dragOver(arg0: java_awt_dnd_DropTargetDragEvent): void;
drop(arg0: java_awt_dnd_DropTargetDropEvent): void;
dropActionChanged(arg0: java_awt_dnd_DropTargetDragEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { Point as java_awt_Point } from 'java.awt';
import { DataFlavor as java_awt_datatransfer_DataFlavor, Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { List as java_util_List } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DropTargetContext as java_awt_dnd_DropTargetContext, DropTargetEvent as java_awt_dnd_DropTargetEvent } from 'java.awt.dnd';

  export class DropTargetDragEvent extends java_awt_dnd_DropTargetEvent {
class: java_lang_Class<java_lang_Object>;
currentDataFlavors: java_awt_datatransfer_DataFlavor[];
currentDataFlavorsAsList: java_util_List<java_awt_datatransfer_DataFlavor>;
dropAction: number;
location: java_awt_Point;
source: java_lang_Object;
sourceActions: number;
transferable: java_awt_datatransfer_Transferable;
acceptDrag(arg0: number): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getCurrentDataFlavors(): java_awt_datatransfer_DataFlavor[];
getCurrentDataFlavorsAsList(): java_util_List<java_awt_datatransfer_DataFlavor>;
getDropAction(): number;
getLocation(): java_awt_Point;
getSource(): java_lang_Object;
getSourceActions(): number;
getTransferable(): java_awt_datatransfer_Transferable;
hashCode(): number;
isDataFlavorSupported(arg0: java_awt_datatransfer_DataFlavor): boolean;
notify(): void;
notifyAll(): void;
rejectDrag(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_dnd_DropTargetContext, arg1: java_awt_Point, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { DataFlavor as java_awt_datatransfer_DataFlavor } from 'java.awt.datatransfer';
import { Map as java_util_Map } from 'java.util';

  export class FlavorMap {
flavorsForNatives: java_util_Map<string, java_awt_datatransfer_DataFlavor>;
nativesForFlavors: java_util_Map<java_awt_datatransfer_DataFlavor, string>;
getFlavorsForNatives(arg0: string[]): java_util_Map<string, java_awt_datatransfer_DataFlavor>;
getNativesForFlavors(arg0: java_awt_datatransfer_DataFlavor[]): java_util_Map<java_awt_datatransfer_DataFlavor, string>;

  }
}
//@ts-nocheck

declare module 'java.awt.Component' {
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class BaselineResizeBehavior extends java_lang_Enum<java_awt_Component_BaselineResizeBehavior> {
class: java_lang_Class<java_lang_Object>;
static CENTER_OFFSET: java_awt_Component_BaselineResizeBehavior;
static CONSTANT_ASCENT: java_awt_Component_BaselineResizeBehavior;
static CONSTANT_DESCENT: java_awt_Component_BaselineResizeBehavior;
static OTHER: java_awt_Component_BaselineResizeBehavior;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_awt_Component_BaselineResizeBehavior;
static values(): java_awt_Component_BaselineResizeBehavior[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';

  export class ImageCapabilities extends java_lang_Object implements java_lang_Cloneable {

clone(): java_lang_Object;
isAccelerated(): boolean;
isTrueVolatile(): boolean;
constructor(arg0: boolean);
  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { GraphicsConfiguration as java_awt_GraphicsConfiguration, Graphics as java_awt_Graphics, Graphics2D as java_awt_Graphics2D, ImageCapabilities as java_awt_ImageCapabilities, Image as java_awt_Image, Transparency as java_awt_Transparency } from 'java.awt';
import { BufferedImage as java_awt_image_BufferedImage, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class VolatileImage extends java_awt_Image implements java_awt_Transparency {
capabilities: java_awt_ImageCapabilities;
class: java_lang_Class<java_lang_Object>;
graphics: java_awt_Graphics;
height: number;
snapshot: java_awt_image_BufferedImage;
source: java_awt_image_ImageProducer;
static IMAGE_INCOMPATIBLE: number;
static IMAGE_OK: number;
static IMAGE_RESTORED: number;
transparency: number;
width: number;
contentsLost(): boolean;
createGraphics(): java_awt_Graphics2D;
equals(arg0: java_lang_Object): boolean;
getCapabilities(): java_awt_ImageCapabilities;
getClass(): java_lang_Class<java_lang_Object>;
getGraphics(): java_awt_Graphics;
getHeight(): number;
getSnapshot(): java_awt_image_BufferedImage;
getSource(): java_awt_image_ImageProducer;
getTransparency(): number;
getWidth(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
validate(arg0: java_awt_GraphicsConfiguration): number;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ImageObserver as java_awt_image_ImageObserver, ColorModel as java_awt_image_ColorModel, SampleModel as java_awt_image_SampleModel, Raster as java_awt_image_Raster, WritableRaster as java_awt_image_WritableRaster, BufferedImage as java_awt_image_BufferedImage, TileObserver as java_awt_image_TileObserver, ImageProducer as java_awt_image_ImageProducer, RenderedImage as java_awt_image_RenderedImage, IndexColorModel as java_awt_image_IndexColorModel, WritableRenderedImage as java_awt_image_WritableRenderedImage } from 'java.awt.image';
import { Rectangle as java_awt_Rectangle, Graphics as java_awt_Graphics, Graphics2D as java_awt_Graphics2D, Point as java_awt_Point, Image as java_awt_Image, Transparency as java_awt_Transparency } from 'java.awt';
import { Vector as java_util_Vector, Hashtable as java_util_Hashtable } from 'java.util';

  export class BufferedImage extends java_awt_Image implements java_awt_image_WritableRenderedImage, java_awt_Transparency {
alphaRaster: java_awt_image_WritableRaster;
class: java_lang_Class<java_lang_Object>;
colorModel: java_awt_image_ColorModel;
data: java_awt_image_Raster;
data: java_awt_image_Raster;
graphics: java_awt_Graphics;
height: number;
height: number;
minTileX: number;
minTileY: number;
minX: number;
minY: number;
numXTiles: number;
numYTiles: number;
property: java_lang_Object;
property: java_lang_Object;
propertyNames: string[];
rGB: number;
rGB: number[];
raster: java_awt_image_WritableRaster;
sampleModel: java_awt_image_SampleModel;
source: java_awt_image_ImageProducer;
sources: java_util_Vector<java_awt_image_RenderedImage>;
static TYPE_3BYTE_BGR: number;
static TYPE_4BYTE_ABGR: number;
static TYPE_4BYTE_ABGR_PRE: number;
static TYPE_BYTE_BINARY: number;
static TYPE_BYTE_GRAY: number;
static TYPE_BYTE_INDEXED: number;
static TYPE_CUSTOM: number;
static TYPE_INT_ARGB: number;
static TYPE_INT_ARGB_PRE: number;
static TYPE_INT_BGR: number;
static TYPE_INT_RGB: number;
static TYPE_USHORT_555_RGB: number;
static TYPE_USHORT_565_RGB: number;
static TYPE_USHORT_GRAY: number;
subimage: java_awt_image_BufferedImage;
tile: java_awt_image_Raster;
tileGridXOffset: number;
tileGridYOffset: number;
tileHeight: number;
tileWidth: number;
transparency: number;
type: number;
width: number;
width: number;
writableTile: java_awt_image_WritableRaster;
writableTileIndices: java_awt_Point[];
addTileObserver(arg0: java_awt_image_TileObserver): void;
coerceData(arg0: boolean): void;
copyData(arg0: java_awt_image_WritableRaster): java_awt_image_WritableRaster;
createGraphics(): java_awt_Graphics2D;
equals(arg0: java_lang_Object): boolean;
getAlphaRaster(): java_awt_image_WritableRaster;
getClass(): java_lang_Class<java_lang_Object>;
getColorModel(): java_awt_image_ColorModel;
getData(): java_awt_image_Raster;
getData(arg0: java_awt_Rectangle): java_awt_image_Raster;
getGraphics(): java_awt_Graphics;
getHeight(): number;
getHeight(arg0: java_awt_image_ImageObserver): number;
getMinTileX(): number;
getMinTileY(): number;
getMinX(): number;
getMinY(): number;
getNumXTiles(): number;
getNumYTiles(): number;
getProperty(arg0: string): java_lang_Object;
getProperty(arg0: string, arg1: java_awt_image_ImageObserver): java_lang_Object;
getPropertyNames(): string[];
getRGB(arg0: number, arg1: number): number;
getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];
getRaster(): java_awt_image_WritableRaster;
getSampleModel(): java_awt_image_SampleModel;
getSource(): java_awt_image_ImageProducer;
getSources(): java_util_Vector<java_awt_image_RenderedImage>;
getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_image_BufferedImage;
getTile(arg0: number, arg1: number): java_awt_image_Raster;
getTileGridXOffset(): number;
getTileGridYOffset(): number;
getTileHeight(): number;
getTileWidth(): number;
getTransparency(): number;
getType(): number;
getWidth(): number;
getWidth(arg0: java_awt_image_ImageObserver): number;
getWritableTile(arg0: number, arg1: number): java_awt_image_WritableRaster;
getWritableTileIndices(): java_awt_Point[];
hasTileWriters(): boolean;
hashCode(): number;
isAlphaPremultiplied(): boolean;
isTileWritable(arg0: number, arg1: number): boolean;
notify(): void;
notifyAll(): void;
releaseWritableTile(arg0: number, arg1: number): void;
removeTileObserver(arg0: java_awt_image_TileObserver): void;
setData(arg0: java_awt_image_Raster): void;
setRGB(arg0: number, arg1: number, arg2: number): void;
setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_image_ColorModel, arg1: java_awt_image_WritableRaster, arg2: boolean, arg3: java_util_Hashtable<java_lang_Object, java_lang_Object>);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: java_awt_image_IndexColorModel);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Shape as java_awt_Shape, Rectangle as java_awt_Rectangle, Image as java_awt_Image, Composite as java_awt_Composite, GraphicsConfiguration as java_awt_GraphicsConfiguration, Paint as java_awt_Paint, Stroke as java_awt_Stroke, RenderingHints as java_awt_RenderingHints, Color as java_awt_Color, Graphics as java_awt_Graphics } from 'java.awt';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';
import { BufferedImage as java_awt_image_BufferedImage, BufferedImageOp as java_awt_image_BufferedImageOp, ImageObserver as java_awt_image_ImageObserver, RenderedImage as java_awt_image_RenderedImage } from 'java.awt.image';
import { RenderableImage as java_awt_image_renderable_RenderableImage } from 'java.awt.image.renderable';
import { GlyphVector as java_awt_font_GlyphVector, FontRenderContext as java_awt_font_FontRenderContext } from 'java.awt.font';
import { Key as java_awt_RenderingHints_Key } from 'java.awt.RenderingHints';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Map as java_util_Map } from 'java.util';

  export class Graphics2D extends java_awt_Graphics {
background: java_awt_Color;
class: java_lang_Class<java_lang_Object>;
composite: java_awt_Composite;
deviceConfiguration: java_awt_GraphicsConfiguration;
fontRenderContext: java_awt_font_FontRenderContext;
paint: java_awt_Paint;
renderingHint: java_lang_Object;
renderingHints: java_awt_RenderingHints;
stroke: java_awt_Stroke;
transform: java_awt_geom_AffineTransform;
addRenderingHints(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
clip(arg0: java_awt_Shape): void;
draw(arg0: java_awt_Shape): void;
draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
drawGlyphVector(arg0: java_awt_font_GlyphVector, arg1: number, arg2: number): void;
drawImage(arg0: java_awt_Image, arg1: java_awt_geom_AffineTransform, arg2: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_image_BufferedImage, arg1: java_awt_image_BufferedImageOp, arg2: number, arg3: number): void;
drawRenderableImage(arg0: java_awt_image_renderable_RenderableImage, arg1: java_awt_geom_AffineTransform): void;
drawRenderedImage(arg0: java_awt_image_RenderedImage, arg1: java_awt_geom_AffineTransform): void;
drawString(arg0: java_text_AttributedCharacterIterator, arg1: number, arg2: number): void;
drawString(arg0: java_text_AttributedCharacterIterator, arg1: number, arg2: number): void;
drawString(arg0: string, arg1: number, arg2: number): void;
drawString(arg0: string, arg1: number, arg2: number): void;
equals(arg0: java_lang_Object): boolean;
fill(arg0: java_awt_Shape): void;
fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
getBackground(): java_awt_Color;
getClass(): java_lang_Class<java_lang_Object>;
getComposite(): java_awt_Composite;
getDeviceConfiguration(): java_awt_GraphicsConfiguration;
getFontRenderContext(): java_awt_font_FontRenderContext;
getPaint(): java_awt_Paint;
getRenderingHint(arg0: java_awt_RenderingHints_Key): java_lang_Object;
getRenderingHints(): java_awt_RenderingHints;
getStroke(): java_awt_Stroke;
getTransform(): java_awt_geom_AffineTransform;
hashCode(): number;
hit(arg0: java_awt_Rectangle, arg1: java_awt_Shape, arg2: boolean): boolean;
notify(): void;
notifyAll(): void;
rotate(arg0: number): void;
rotate(arg0: number, arg1: number, arg2: number): void;
scale(arg0: number, arg1: number): void;
setBackground(arg0: java_awt_Color): void;
setComposite(arg0: java_awt_Composite): void;
setPaint(arg0: java_awt_Paint): void;
setRenderingHint(arg0: java_awt_RenderingHints_Key, arg1: java_lang_Object): void;
setRenderingHints(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
setStroke(arg0: java_awt_Stroke): void;
setTransform(arg0: java_awt_geom_AffineTransform): void;
shear(arg0: number, arg1: number): void;
transform(arg0: java_awt_geom_AffineTransform): void;
translate(arg0: number, arg1: number): void;
translate(arg0: number, arg1: number): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { BufferedImage as java_awt_image_BufferedImage, ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { Rectangle2D as java_awt_geom_Rectangle2D, Point2D as java_awt_geom_Point2D } from 'java.awt.geom';
import { RenderingHints as java_awt_RenderingHints } from 'java.awt';

  export class BufferedImageOp {
bounds2D: java_awt_geom_Rectangle2D;
point2D: java_awt_geom_Point2D;
renderingHints: java_awt_RenderingHints;
createCompatibleDestImage(arg0: java_awt_image_BufferedImage, arg1: java_awt_image_ColorModel): java_awt_image_BufferedImage;
filter(arg0: java_awt_image_BufferedImage, arg1: java_awt_image_BufferedImage): java_awt_image_BufferedImage;
getBounds2D(arg0: java_awt_image_BufferedImage): java_awt_geom_Rectangle2D;
getPoint2D(arg0: java_awt_geom_Point2D, arg1: java_awt_geom_Point2D): java_awt_geom_Point2D;
getRenderingHints(): java_awt_RenderingHints;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { RenderingHints as java_awt_RenderingHints, CompositeContext as java_awt_CompositeContext } from 'java.awt';

  export class Composite {

createContext(arg0: java_awt_image_ColorModel, arg1: java_awt_image_ColorModel, arg2: java_awt_RenderingHints): java_awt_CompositeContext;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Raster as java_awt_image_Raster, WritableRaster as java_awt_image_WritableRaster } from 'java.awt.image';

  export class CompositeContext {

compose(arg0: java_awt_image_Raster, arg1: java_awt_image_Raster, arg2: java_awt_image_WritableRaster): void;
dispose(): void;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object } from 'java.lang';
import { ColorModel as java_awt_image_ColorModel, SampleModel as java_awt_image_SampleModel, Raster as java_awt_image_Raster, WritableRaster as java_awt_image_WritableRaster, RenderedImage as java_awt_image_RenderedImage } from 'java.awt.image';
import { Rectangle as java_awt_Rectangle } from 'java.awt';
import { Vector as java_util_Vector } from 'java.util';

  export class RenderedImage {
colorModel: java_awt_image_ColorModel;
data: java_awt_image_Raster;
data: java_awt_image_Raster;
height: number;
minTileX: number;
minTileY: number;
minX: number;
minY: number;
numXTiles: number;
numYTiles: number;
property: java_lang_Object;
propertyNames: string[];
sampleModel: java_awt_image_SampleModel;
sources: java_util_Vector<java_awt_image_RenderedImage>;
tile: java_awt_image_Raster;
tileGridXOffset: number;
tileGridYOffset: number;
tileHeight: number;
tileWidth: number;
width: number;
copyData(arg0: java_awt_image_WritableRaster): java_awt_image_WritableRaster;
getColorModel(): java_awt_image_ColorModel;
getData(): java_awt_image_Raster;
getData(arg0: java_awt_Rectangle): java_awt_image_Raster;
getHeight(): number;
getMinTileX(): number;
getMinTileY(): number;
getMinX(): number;
getMinY(): number;
getNumXTiles(): number;
getNumYTiles(): number;
getProperty(arg0: string): java_lang_Object;
getPropertyNames(): string[];
getSampleModel(): java_awt_image_SampleModel;
getSources(): java_util_Vector<java_awt_image_RenderedImage>;
getTile(arg0: number, arg1: number): java_awt_image_Raster;
getTileGridXOffset(): number;
getTileGridYOffset(): number;
getTileHeight(): number;
getTileWidth(): number;
getWidth(): number;

  }
}
//@ts-nocheck

declare module 'java.awt.image.renderable' {
import { Object as java_lang_Object } from 'java.lang';
import { RenderingHints as java_awt_RenderingHints } from 'java.awt';
import { RenderedImage as java_awt_image_RenderedImage } from 'java.awt.image';
import { RenderContext as java_awt_image_renderable_RenderContext, RenderableImage as java_awt_image_renderable_RenderableImage } from 'java.awt.image.renderable';
import { Vector as java_util_Vector } from 'java.util';

  export class RenderableImage {
height: number;
minX: number;
minY: number;
property: java_lang_Object;
propertyNames: string[];
sources: java_util_Vector<java_awt_image_renderable_RenderableImage>;
static HINTS_OBSERVED: string;
width: number;
createDefaultRendering(): java_awt_image_RenderedImage;
createRendering(arg0: java_awt_image_renderable_RenderContext): java_awt_image_RenderedImage;
createScaledRendering(arg0: number, arg1: number, arg2: java_awt_RenderingHints): java_awt_image_RenderedImage;
getHeight(): number;
getMinX(): number;
getMinY(): number;
getProperty(arg0: string): java_lang_Object;
getPropertyNames(): string[];
getSources(): java_util_Vector<java_awt_image_renderable_RenderableImage>;
getWidth(): number;
isDynamic(): boolean;

  }
}
//@ts-nocheck

declare module 'java.awt.image.renderable' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { RenderingHints as java_awt_RenderingHints, Shape as java_awt_Shape } from 'java.awt';

  export class RenderContext extends java_lang_Object implements java_lang_Cloneable {
areaOfInterest: java_awt_Shape;
renderingHints: java_awt_RenderingHints;
transform: java_awt_geom_AffineTransform;
clone(): java_lang_Object;
concatenateTransform(arg0: java_awt_geom_AffineTransform): void;
concetenateTransform(arg0: java_awt_geom_AffineTransform): void;
getAreaOfInterest(): java_awt_Shape;
getRenderingHints(): java_awt_RenderingHints;
getTransform(): java_awt_geom_AffineTransform;
preConcatenateTransform(arg0: java_awt_geom_AffineTransform): void;
preConcetenateTransform(arg0: java_awt_geom_AffineTransform): void;
setAreaOfInterest(arg0: java_awt_Shape): void;
setRenderingHints(arg0: java_awt_RenderingHints): void;
setTransform(arg0: java_awt_geom_AffineTransform): void;
constructor(arg0: java_awt_geom_AffineTransform);
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_awt_RenderingHints);
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_awt_Shape);
constructor(arg0: java_awt_geom_AffineTransform, arg1: java_awt_Shape, arg2: java_awt_RenderingHints);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Shape as java_awt_Shape } from 'java.awt';

  export class Stroke {

createStrokedShape(arg0: java_awt_Shape): java_awt_Shape;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { WritableRenderedImage as java_awt_image_WritableRenderedImage } from 'java.awt.image';

  export class TileObserver {

tileUpdate(arg0: java_awt_image_WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Raster as java_awt_image_Raster, TileObserver as java_awt_image_TileObserver, WritableRaster as java_awt_image_WritableRaster, ColorModel as java_awt_image_ColorModel, SampleModel as java_awt_image_SampleModel, RenderedImage as java_awt_image_RenderedImage } from 'java.awt.image';
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Vector as java_util_Vector } from 'java.util';

  export class WritableRenderedImage implements java_awt_image_RenderedImage {
colorModel: java_awt_image_ColorModel;
data: java_awt_image_Raster;
data: java_awt_image_Raster;
height: number;
minTileX: number;
minTileY: number;
minX: number;
minY: number;
numXTiles: number;
numYTiles: number;
property: java_lang_Object;
propertyNames: string[];
sampleModel: java_awt_image_SampleModel;
sources: java_util_Vector<java_awt_image_RenderedImage>;
tile: java_awt_image_Raster;
tileGridXOffset: number;
tileGridYOffset: number;
tileHeight: number;
tileWidth: number;
width: number;
writableTile: java_awt_image_WritableRaster;
writableTileIndices: java_awt_Point[];
addTileObserver(arg0: java_awt_image_TileObserver): void;
copyData(arg0: java_awt_image_WritableRaster): java_awt_image_WritableRaster;
getColorModel(): java_awt_image_ColorModel;
getData(): java_awt_image_Raster;
getData(arg0: java_awt_Rectangle): java_awt_image_Raster;
getHeight(): number;
getMinTileX(): number;
getMinTileY(): number;
getMinX(): number;
getMinY(): number;
getNumXTiles(): number;
getNumYTiles(): number;
getProperty(arg0: string): java_lang_Object;
getPropertyNames(): string[];
getSampleModel(): java_awt_image_SampleModel;
getSources(): java_util_Vector<java_awt_image_RenderedImage>;
getTile(arg0: number, arg1: number): java_awt_image_Raster;
getTileGridXOffset(): number;
getTileGridYOffset(): number;
getTileHeight(): number;
getTileWidth(): number;
getWidth(): number;
getWritableTile(arg0: number, arg1: number): java_awt_image_WritableRaster;
getWritableTileIndices(): java_awt_Point[];
hasTileWriters(): boolean;
isTileWritable(arg0: number, arg1: number): boolean;
releaseWritableTile(arg0: number, arg1: number): void;
removeTileObserver(arg0: java_awt_image_TileObserver): void;
setData(arg0: java_awt_image_Raster): void;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { ImageConsumer as java_awt_image_ImageConsumer } from 'java.awt.image';

  export class ImageProducer {

addConsumer(arg0: java_awt_image_ImageConsumer): void;
isConsumer(arg0: java_awt_image_ImageConsumer): boolean;
removeConsumer(arg0: java_awt_image_ImageConsumer): void;
requestTopDownLeftRightResend(arg0: java_awt_image_ImageConsumer): void;
startProduction(arg0: java_awt_image_ImageConsumer): void;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Hashtable as java_util_Hashtable } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';

  export class ImageConsumer {
static COMPLETESCANLINES: number;
static IMAGEABORTED: number;
static IMAGEERROR: number;
static RANDOMPIXELORDER: number;
static SINGLEFRAME: number;
static SINGLEFRAMEDONE: number;
static SINGLEPASS: number;
static STATICIMAGEDONE: number;
static TOPDOWNLEFTRIGHT: number;
imageComplete(arg0: number): void;
setColorModel(arg0: java_awt_image_ColorModel): void;
setDimensions(arg0: number, arg1: number): void;
setHints(arg0: number): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_ColorModel, arg5: number[], arg6: number, arg7: number): void;
setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_awt_image_ColorModel, arg5: number[], arg6: number, arg7: number): void;
setProperties(arg0: java_util_Hashtable<java_lang_Object, java_lang_Object>): void;

  }
}
//@ts-nocheck

declare module 'java.awt.image' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SampleModel as java_awt_image_SampleModel, Raster as java_awt_image_Raster, BufferedImage as java_awt_image_BufferedImage, WritableRaster as java_awt_image_WritableRaster, ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { BigInteger as java_math_BigInteger } from 'java.math';

  export class IndexColorModel extends java_awt_image_ColorModel {
alpha: number;
alphas: void;
blue: number;
blues: void;
class: java_lang_Class<java_lang_Object>;
componentSize: number[];
components: number[];
components: number[];
dataElement: number;
dataElements: java_lang_Object;
dataElements: java_lang_Object;
green: number;
greens: void;
mapSize: number;
rGB: number;
rGBs: void;
red: number;
reds: void;
transparency: number;
transparentPixel: number;
validPixels: java_math_BigInteger;
convertToIntDiscrete(arg0: java_awt_image_Raster, arg1: boolean): java_awt_image_BufferedImage;
createCompatibleSampleModel(arg0: number, arg1: number): java_awt_image_SampleModel;
createCompatibleWritableRaster(arg0: number, arg1: number): java_awt_image_WritableRaster;
equals(arg0: java_lang_Object): boolean;
finalize(): void;
getAlpha(arg0: number): number;
getAlphas(arg0: number[]): void;
getBlue(arg0: number): number;
getBlues(arg0: number[]): void;
getClass(): java_lang_Class<java_lang_Object>;
getComponentSize(): number[];
getComponents(arg0: java_lang_Object, arg1: number[], arg2: number): number[];
getComponents(arg0: number, arg1: number[], arg2: number): number[];
getDataElement(arg0: number[], arg1: number): number;
getDataElements(arg0: number, arg1: java_lang_Object): java_lang_Object;
getDataElements(arg0: number[], arg1: number, arg2: java_lang_Object): java_lang_Object;
getGreen(arg0: number): number;
getGreens(arg0: number[]): void;
getMapSize(): number;
getRGB(arg0: number): number;
getRGBs(arg0: number[]): void;
getRed(arg0: number): number;
getReds(arg0: number[]): void;
getTransparency(): number;
getTransparentPixel(): number;
getValidPixels(): java_math_BigInteger;
hashCode(): number;
isCompatibleRaster(arg0: java_awt_image_Raster): boolean;
isCompatibleSampleModel(arg0: java_awt_image_SampleModel): boolean;
isValid(): boolean;
isValid(arg0: number): boolean;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: java_math_BigInteger);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[]);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class ComponentListener implements java_util_EventListener {

componentHidden(arg0: java_awt_event_ComponentEvent): void;
componentMoved(arg0: java_awt_event_ComponentEvent): void;
componentResized(arg0: java_awt_event_ComponentEvent): void;
componentShown(arg0: java_awt_event_ComponentEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { HierarchyEvent as java_awt_event_HierarchyEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class HierarchyListener implements java_util_EventListener {

hierarchyChanged(arg0: java_awt_event_HierarchyEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component, Container as java_awt_Container, AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class HierarchyEvent extends java_awt_AWTEvent {
changeFlags: number;
changed: java_awt_Component;
changedParent: java_awt_Container;
class: java_lang_Class<java_lang_Object>;
component: java_awt_Component;
source: java_lang_Object;
static ANCESTOR_MOVED: number;
static ANCESTOR_RESIZED: number;
static DISPLAYABILITY_CHANGED: number;
static HIERARCHY_CHANGED: number;
static HIERARCHY_FIRST: number;
static HIERARCHY_LAST: number;
static PARENT_CHANGED: number;
static SHOWING_CHANGED: number;
equals(arg0: java_lang_Object): boolean;
getChangeFlags(): number;
getChanged(): java_awt_Component;
getChangedParent(): java_awt_Container;
getClass(): java_lang_Class<java_lang_Object>;
getComponent(): java_awt_Component;
getSource(): java_lang_Object;
hashCode(): number;
notify(): void;
notifyAll(): void;
paramString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_Component, arg3: java_awt_Container);
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_Component, arg3: java_awt_Container, arg4: number);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { HierarchyEvent as java_awt_event_HierarchyEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class HierarchyBoundsListener implements java_util_EventListener {

ancestorMoved(arg0: java_awt_event_HierarchyEvent): void;
ancestorResized(arg0: java_awt_event_HierarchyEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { KeyEvent as java_awt_event_KeyEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class KeyListener implements java_util_EventListener {

keyPressed(arg0: java_awt_event_KeyEvent): void;
keyReleased(arg0: java_awt_event_KeyEvent): void;
keyTyped(arg0: java_awt_event_KeyEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { MouseEvent as java_awt_event_MouseEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class MouseListener implements java_util_EventListener {

mouseClicked(arg0: java_awt_event_MouseEvent): void;
mouseEntered(arg0: java_awt_event_MouseEvent): void;
mouseExited(arg0: java_awt_event_MouseEvent): void;
mousePressed(arg0: java_awt_event_MouseEvent): void;
mouseReleased(arg0: java_awt_event_MouseEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Point as java_awt_Point, Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputEvent as java_awt_event_InputEvent } from 'java.awt.event';

  export class MouseEvent extends java_awt_event_InputEvent {
button: number;
class: java_lang_Class<java_lang_Object>;
clickCount: number;
component: java_awt_Component;
iD: number;
locationOnScreen: java_awt_Point;
modifiersEx: number;
point: java_awt_Point;
source: java_lang_Object;
static BUTTON1: number;
static BUTTON2: number;
static BUTTON3: number;
static MOUSE_CLICKED: number;
static MOUSE_DRAGGED: number;
static MOUSE_ENTERED: number;
static MOUSE_EXITED: number;
static MOUSE_FIRST: number;
static MOUSE_LAST: number;
static MOUSE_MOVED: number;
static MOUSE_PRESSED: number;
static MOUSE_RELEASED: number;
static MOUSE_WHEEL: number;
static NOBUTTON: number;
static mouseModifiersText: string;
x: number;
xOnScreen: number;
y: number;
yOnScreen: number;
equals(arg0: java_lang_Object): boolean;
getButton(): number;
getClass(): java_lang_Class<java_lang_Object>;
getClickCount(): number;
getComponent(): java_awt_Component;
getID(): number;
getLocationOnScreen(): java_awt_Point;
getModifiersEx(): number;
getPoint(): java_awt_Point;
getSource(): java_lang_Object;
getX(): number;
getXOnScreen(): number;
getY(): number;
getYOnScreen(): number;
hashCode(): number;
isPopupTrigger(): boolean;
notify(): void;
notifyAll(): void;
paramString(): string;
setSource(arg0: java_lang_Object): void;
static getMouseModifiersText(arg0: number): string;
toString(): string;
translatePoint(arg0: number, arg1: number): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { MouseEvent as java_awt_event_MouseEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class MouseMotionListener implements java_util_EventListener {

mouseDragged(arg0: java_awt_event_MouseEvent): void;
mouseMoved(arg0: java_awt_event_MouseEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { MouseWheelEvent as java_awt_event_MouseWheelEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class MouseWheelListener implements java_util_EventListener {

mouseWheelMoved(arg0: java_awt_event_MouseWheelEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MouseEvent as java_awt_event_MouseEvent } from 'java.awt.event';

  export class MouseWheelEvent extends java_awt_event_MouseEvent {
class: java_lang_Class<java_lang_Object>;
component: java_awt_Component;
iD: number;
modifiers: number;
preciseWheelRotation: number;
scrollAmount: number;
scrollType: number;
source: java_lang_Object;
static WHEEL_BLOCK_SCROLL: number;
static WHEEL_UNIT_SCROLL: number;
static maskForButton: number;
static modifiersExText: string;
unitsToScroll: number;
wheelRotation: number;
when: number;
consume(): void;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getComponent(): java_awt_Component;
getID(): number;
getModifiers(): number;
getPreciseWheelRotation(): number;
getScrollAmount(): number;
getScrollType(): number;
getSource(): java_lang_Object;
getUnitsToScroll(): number;
getWheelRotation(): number;
getWhen(): number;
hashCode(): number;
isAltDown(): boolean;
isAltGraphDown(): boolean;
isConsumed(): boolean;
isControlDown(): boolean;
isMetaDown(): boolean;
isShiftDown(): boolean;
notify(): void;
notifyAll(): void;
paramString(): string;
setSource(arg0: java_lang_Object): void;
static getMaskForButton(arg0: number): number;
static getModifiersExText(arg0: number): string;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number, arg13: number);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { InputMethodEvent as java_awt_event_InputMethodEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class InputMethodListener implements java_util_EventListener {

caretPositionChanged(arg0: java_awt_event_InputMethodEvent): void;
inputMethodTextChanged(arg0: java_awt_event_InputMethodEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';
import { TextHitInfo as java_awt_font_TextHitInfo } from 'java.awt.font';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Component as java_awt_Component, AWTEvent as java_awt_AWTEvent } from 'java.awt';

  export class InputMethodEvent extends java_awt_AWTEvent {
caret: java_awt_font_TextHitInfo;
class: java_lang_Class<java_lang_Object>;
committedCharacterCount: number;
source: java_lang_Object;
static CARET_POSITION_CHANGED: number;
static INPUT_METHOD_FIRST: number;
static INPUT_METHOD_LAST: number;
static INPUT_METHOD_TEXT_CHANGED: number;
text: java_text_AttributedCharacterIterator;
visiblePosition: java_awt_font_TextHitInfo;
when: number;
consume(): void;
equals(arg0: java_lang_Object): boolean;
getCaret(): java_awt_font_TextHitInfo;
getClass(): java_lang_Class<java_lang_Object>;
getCommittedCharacterCount(): number;
getSource(): java_lang_Object;
getText(): java_text_AttributedCharacterIterator;
getVisiblePosition(): java_awt_font_TextHitInfo;
getWhen(): number;
hashCode(): number;
isConsumed(): boolean;
notify(): void;
notifyAll(): void;
paramString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Component, arg1: number, arg2: java_awt_font_TextHitInfo, arg3: java_awt_font_TextHitInfo);
constructor(arg0: java_awt_Component, arg1: number, arg2: java_text_AttributedCharacterIterator, arg3: number, arg4: java_awt_font_TextHitInfo, arg5: java_awt_font_TextHitInfo);
constructor(arg0: java_awt_Component, arg1: number, arg2: number, arg3: java_text_AttributedCharacterIterator, arg4: number, arg5: java_awt_font_TextHitInfo, arg6: java_awt_font_TextHitInfo);
  }
}
//@ts-nocheck

declare module 'java.awt.font' {
import { Object as java_lang_Object } from 'java.lang';
import { TextHitInfo as java_awt_font_TextHitInfo } from 'java.awt.font';

  export class TextHitInfo extends java_lang_Object {
charIndex: number;
insertionIndex: number;
offsetHit: java_awt_font_TextHitInfo;
otherHit: java_awt_font_TextHitInfo;
equals(arg0: java_awt_font_TextHitInfo): boolean;
equals(arg0: java_lang_Object): boolean;
getCharIndex(): number;
getInsertionIndex(): number;
getOffsetHit(arg0: number): java_awt_font_TextHitInfo;
getOtherHit(): java_awt_font_TextHitInfo;
hashCode(): number;
isLeadingEdge(): boolean;
static afterOffset(arg0: number): java_awt_font_TextHitInfo;
static beforeOffset(arg0: number): java_awt_font_TextHitInfo;
static leading(arg0: number): java_awt_font_TextHitInfo;
static trailing(arg0: number): java_awt_font_TextHitInfo;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.awt.im' {
import { TextHitInfo as java_awt_font_TextHitInfo } from 'java.awt.font';
import { Rectangle as java_awt_Rectangle } from 'java.awt';
import { Attribute as java_textdCharacterIterator_Attribute_Attribute } from 'java.textdCharacterIterator.Attribute';
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';

  export class InputMethodRequests {
committedText: java_text_AttributedCharacterIterator;
committedTextLength: number;
insertPositionOffset: number;
locationOffset: java_awt_font_TextHitInfo;
selectedText: java_text_AttributedCharacterIterator;
textLocation: java_awt_Rectangle;
cancelLatestCommittedText(arg0: java_textdCharacterIterator_Attribute_Attribute[]): java_text_AttributedCharacterIterator;
getCommittedText(arg0: number, arg1: number, arg2: java_textdCharacterIterator_Attribute_Attribute[]): java_text_AttributedCharacterIterator;
getCommittedTextLength(): number;
getInsertPositionOffset(): number;
getLocationOffset(arg0: number, arg1: number): java_awt_font_TextHitInfo;
getSelectedText(arg0: java_textdCharacterIterator_Attribute_Attribute[]): java_text_AttributedCharacterIterator;
getTextLocation(arg0: java_awt_font_TextHitInfo): java_awt_Rectangle;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Font as java_awt_Font, FontMetrics as java_awt_FontMetrics, GraphicsConfiguration as java_awt_GraphicsConfiguration, Insets as java_awt_Insets, Image as java_awt_Image, Toolkit as java_awt_Toolkit, Dimension as java_awt_Dimension, Frame as java_awt_Frame, PrintJob as java_awt_PrintJob, JobAttributes as java_awt_JobAttributes, PageAttributes as java_awt_PageAttributes, Point as java_awt_Point, Cursor as java_awt_Cursor, EventQueue as java_awt_EventQueue, Component as java_awt_Component } from 'java.awt';
import { ColorModel as java_awt_image_ColorModel, ImageObserver as java_awt_image_ImageObserver, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { ModalExclusionType as java_awt_Dialog_ModalExclusionType, ModalityType as java_awt_Dialog_ModalityType } from 'java.awt.Dialog';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';
import { URL as java_net_URL } from 'java.net';
import { Properties as java_util_Properties, Map as java_util_Map } from 'java.util';
import { Clipboard as java_awt_datatransfer_Clipboard } from 'java.awt.datatransfer';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { DragSource as java_awt_dnd_DragSource, DragGestureListener as java_awt_dnd_DragGestureListener, DragGestureRecognizer as java_awt_dnd_DragGestureRecognizer } from 'java.awt.dnd';
import { AWTEventListener as java_awt_event_AWTEventListener } from 'java.awt.event';
import { InputMethodHighlight as java_awt_im_InputMethodHighlight } from 'java.awt.im';
import { TextAttribute as java_awt_font_TextAttribute } from 'java.awt.font';

  export class Toolkit extends java_lang_Object {
aWTEventListeners: java_awt_event_AWTEventListener[];
aWTEventListeners: java_awt_event_AWTEventListener[];
bestCursorSize: java_awt_Dimension;
colorModel: java_awt_image_ColorModel;
desktopProperty: java_lang_Object;
fontList: string[];
fontMetrics: java_awt_FontMetrics;
image: java_awt_Image;
image: java_awt_Image;
lockingKeyState: boolean;
maximumCursorColors: number;
menuShortcutKeyMask: number;
menuShortcutKeyMaskEx: number;
printJob: java_awt_PrintJob;
printJob: java_awt_PrintJob;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
screenInsets: java_awt_Insets;
screenResolution: number;
screenSize: java_awt_Dimension;
static defaultToolkit: java_awt_Toolkit;
static property: string;
systemClipboard: java_awt_datatransfer_Clipboard;
systemEventQueue: java_awt_EventQueue;
systemSelection: java_awt_datatransfer_Clipboard;
addAWTEventListener(arg0: java_awt_event_AWTEventListener, arg1: number): void;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
areExtraMouseButtonsEnabled(): boolean;
beep(): void;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
createCustomCursor(arg0: java_awt_Image, arg1: java_awt_Point, arg2: string): java_awt_Cursor;
createDragGestureRecognizer<T extends java_awt_dnd_DragGestureRecognizer>(arg0: java_lang_Class<T>, arg1: java_awt_dnd_DragSource, arg2: java_awt_Component, arg3: number, arg4: java_awt_dnd_DragGestureListener): T;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
createImage(arg0: java_net_URL): java_awt_Image;
createImage(arg0: number[]): java_awt_Image;
createImage(arg0: number[], arg1: number, arg2: number): java_awt_Image;
createImage(arg0: string): java_awt_Image;
getAWTEventListeners(): java_awt_event_AWTEventListener[];
getAWTEventListeners(arg0: number): java_awt_event_AWTEventListener[];
getBestCursorSize(arg0: number, arg1: number): java_awt_Dimension;
getColorModel(): java_awt_image_ColorModel;
getDesktopProperty(arg0: string): java_lang_Object;
getFontList(): string[];
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getImage(arg0: java_net_URL): java_awt_Image;
getImage(arg0: string): java_awt_Image;
getLockingKeyState(arg0: number): boolean;
getMaximumCursorColors(): number;
getMenuShortcutKeyMask(): number;
getMenuShortcutKeyMaskEx(): number;
getPrintJob(arg0: java_awt_Frame, arg1: string, arg2: java_awt_JobAttributes, arg3: java_awt_PageAttributes): java_awt_PrintJob;
getPrintJob(arg0: java_awt_Frame, arg1: string, arg2: java_util_Properties): java_awt_PrintJob;
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getScreenInsets(arg0: java_awt_GraphicsConfiguration): java_awt_Insets;
getScreenResolution(): number;
getScreenSize(): java_awt_Dimension;
getSystemClipboard(): java_awt_datatransfer_Clipboard;
getSystemEventQueue(): java_awt_EventQueue;
getSystemSelection(): java_awt_datatransfer_Clipboard;
isAlwaysOnTopSupported(): boolean;
isDynamicLayoutActive(): boolean;
isFrameStateSupported(arg0: number): boolean;
isModalExclusionTypeSupported(arg0: java_awt_Dialog_ModalExclusionType): boolean;
isModalityTypeSupported(arg0: java_awt_Dialog_ModalityType): boolean;
mapInputMethodHighlight(arg0: java_awt_im_InputMethodHighlight): java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
removeAWTEventListener(arg0: java_awt_event_AWTEventListener): void;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
setDynamicLayout(arg0: boolean): void;
setLockingKeyState(arg0: number, arg1: boolean): void;
static getDefaultToolkit(): java_awt_Toolkit;
static getProperty(arg0: string, arg1: string): string;
sync(): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt.Dialog' {
import { ModalExclusionType as java_awt_Dialog_ModalExclusionType } from 'java.awt.Dialog';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ModalExclusionType extends java_lang_Enum<java_awt_Dialog_ModalExclusionType> {
class: java_lang_Class<java_lang_Object>;
static APPLICATION_EXCLUDE: java_awt_Dialog_ModalExclusionType;
static NO_EXCLUDE: java_awt_Dialog_ModalExclusionType;
static TOOLKIT_EXCLUDE: java_awt_Dialog_ModalExclusionType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_awt_Dialog_ModalExclusionType;
static values(): java_awt_Dialog_ModalExclusionType[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { MenuComponent as java_awt_MenuComponent, Shape as java_awt_Shape, Image as java_awt_Image, MenuBar as java_awt_MenuBar, Rectangle as java_awt_Rectangle, Frame as java_awt_Frame, Color as java_awt_Color, Component as java_awt_Component, Graphics as java_awt_Graphics, Font as java_awt_Font, Container as java_awt_Container, LayoutManager as java_awt_LayoutManager, Dimension as java_awt_Dimension, FocusTraversalPolicy as java_awt_FocusTraversalPolicy, ComponentOrientation as java_awt_ComponentOrientation, Insets as java_awt_Insets, Event as java_awt_Event, Point as java_awt_Point, AWTKeyStroke as java_awt_AWTKeyStroke, PopupMenu as java_awt_PopupMenu, FontMetrics as java_awt_FontMetrics, ImageCapabilities as java_awt_ImageCapabilities, GraphicsConfiguration as java_awt_GraphicsConfiguration, Cursor as java_awt_Cursor, AWTEvent as java_awt_AWTEvent, Window as java_awt_Window, MenuContainer as java_awt_MenuContainer } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { ContainerListener as java_awt_event_ContainerListener, ComponentListener as java_awt_event_ComponentListener, FocusListener as java_awt_event_FocusListener, HierarchyListener as java_awt_event_HierarchyListener, HierarchyBoundsListener as java_awt_event_HierarchyBoundsListener, KeyListener as java_awt_event_KeyListener, MouseListener as java_awt_event_MouseListener, MouseMotionListener as java_awt_event_MouseMotionListener, MouseWheelListener as java_awt_event_MouseWheelListener, InputMethodListener as java_awt_event_InputMethodListener } from 'java.awt.event';
import { Set as java_util_Set, Locale as java_util_Locale } from 'java.util';
import { ColorModel as java_awt_image_ColorModel, VolatileImage as java_awt_image_VolatileImage, ImageObserver as java_awt_image_ImageObserver, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';
import { DropTarget as java_awt_dnd_DropTarget } from 'java.awt.dnd';
import { BaselineResizeBehavior as java_awt_Component_BaselineResizeBehavior } from 'java.awt.Component';
import { InputMethodRequests as java_awt_im_InputMethodRequests } from 'java.awt.im';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';

  export class Frame extends java_awt_Window implements java_awt_MenuContainer {
accessibleContext: javax_accessibility_AccessibleContext;
alignmentX: number;
alignmentY: number;
baseline: number;
baselineResizeBehavior: java_awt_Component_BaselineResizeBehavior;
bounds: java_awt_Rectangle;
bounds: java_awt_Rectangle;
class: java_lang_Class<java_lang_Object>;
colorModel: java_awt_image_ColorModel;
component: java_awt_Component;
componentAt: java_awt_Component;
componentAt: java_awt_Component;
componentCount: number;
componentListeners: java_awt_event_ComponentListener[];
componentOrientation: java_awt_ComponentOrientation;
componentZOrder: number;
components: java_awt_Component[];
containerListeners: java_awt_event_ContainerListener[];
cursor: java_awt_Cursor;
cursorType: number;
dropTarget: java_awt_dnd_DropTarget;
extendedState: number;
focusListeners: java_awt_event_FocusListener[];
focusTraversalKeysEnabled: boolean;
focusTraversalPolicy: java_awt_FocusTraversalPolicy;
font: java_awt_Font;
fontMetrics: java_awt_FontMetrics;
foreground: java_awt_Color;
graphics: java_awt_Graphics;
graphicsConfiguration: java_awt_GraphicsConfiguration;
height: number;
hierarchyBoundsListeners: java_awt_event_HierarchyBoundsListener[];
hierarchyListeners: java_awt_event_HierarchyListener[];
iconImage: java_awt_Image;
ignoreRepaint: boolean;
inputMethodListeners: java_awt_event_InputMethodListener[];
inputMethodRequests: java_awt_im_InputMethodRequests;
insets: java_awt_Insets;
keyListeners: java_awt_event_KeyListener[];
layout: java_awt_LayoutManager;
location: java_awt_Point;
location: java_awt_Point;
locationOnScreen: java_awt_Point;
maximizedBounds: java_awt_Rectangle;
maximumSize: java_awt_Dimension;
menuBar: java_awt_MenuBar;
minimumSize: java_awt_Dimension;
mouseListeners: java_awt_event_MouseListener[];
mouseMotionListeners: java_awt_event_MouseMotionListener[];
mousePosition: java_awt_Point;
mousePosition: java_awt_Point;
mouseWheelListeners: java_awt_event_MouseWheelListener[];
name: string;
parent: java_awt_Container;
preferredSize: java_awt_Dimension;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
size: java_awt_Dimension;
size: java_awt_Dimension;
state: number;
static CROSSHAIR_CURSOR: number;
static DEFAULT_CURSOR: number;
static E_RESIZE_CURSOR: number;
static HAND_CURSOR: number;
static ICONIFIED: number;
static MAXIMIZED_BOTH: number;
static MAXIMIZED_HORIZ: number;
static MAXIMIZED_VERT: number;
static MOVE_CURSOR: number;
static NE_RESIZE_CURSOR: number;
static NORMAL: number;
static NW_RESIZE_CURSOR: number;
static N_RESIZE_CURSOR: number;
static SE_RESIZE_CURSOR: number;
static SW_RESIZE_CURSOR: number;
static S_RESIZE_CURSOR: number;
static TEXT_CURSOR: number;
static WAIT_CURSOR: number;
static W_RESIZE_CURSOR: number;
static frames: java_awt_Frame[];
title: string;
treeLock: java_lang_Object;
width: number;
x: number;
y: number;
action(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
add(arg0: java_awt_Component): java_awt_Component;
add(arg0: java_awt_Component, arg1: java_lang_Object): void;
add(arg0: java_awt_Component, arg1: java_lang_Object, arg2: number): void;
add(arg0: java_awt_Component, arg1: number): java_awt_Component;
add(arg0: java_awt_PopupMenu): void;
add(arg0: string, arg1: java_awt_Component): java_awt_Component;
addComponentListener(arg0: java_awt_event_ComponentListener): void;
addContainerListener(arg0: java_awt_event_ContainerListener): void;
addFocusListener(arg0: java_awt_event_FocusListener): void;
addHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
addHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
addInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
addKeyListener(arg0: java_awt_event_KeyListener): void;
addMouseListener(arg0: java_awt_event_MouseListener): void;
addMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
addMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
addNotify(): void;
applyComponentOrientation(arg0: java_awt_ComponentOrientation): void;
areFocusTraversalKeysSet(arg0: number): boolean;
bounds(): java_awt_Rectangle;
checkImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): number;
checkImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): number;
contains(arg0: java_awt_Point): boolean;
contains(arg0: number, arg1: number): boolean;
countComponents(): number;
createImage(arg0: java_awt_image_ImageProducer): java_awt_Image;
createImage(arg0: number, arg1: number): java_awt_Image;
createVolatileImage(arg0: number, arg1: number): java_awt_image_VolatileImage;
createVolatileImage(arg0: number, arg1: number, arg2: java_awt_ImageCapabilities): java_awt_image_VolatileImage;
deliverEvent(arg0: java_awt_Event): void;
disable(): void;
dispatchEvent(arg0: java_awt_AWTEvent): void;
doLayout(): void;
enable(): void;
enable(arg0: boolean): void;
enableInputMethods(arg0: boolean): void;
equals(arg0: java_lang_Object): boolean;
findComponentAt(arg0: java_awt_Point): java_awt_Component;
findComponentAt(arg0: number, arg1: number): java_awt_Component;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: string, arg2: string): void;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getAlignmentX(): number;
getAlignmentY(): number;
getBaseline(arg0: number, arg1: number): number;
getBaselineResizeBehavior(): java_awt_Component_BaselineResizeBehavior;
getBounds(): java_awt_Rectangle;
getBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
getClass(): java_lang_Class<java_lang_Object>;
getColorModel(): java_awt_image_ColorModel;
getComponent(arg0: number): java_awt_Component;
getComponentAt(arg0: java_awt_Point): java_awt_Component;
getComponentAt(arg0: number, arg1: number): java_awt_Component;
getComponentCount(): number;
getComponentListeners(): java_awt_event_ComponentListener[];
getComponentOrientation(): java_awt_ComponentOrientation;
getComponentZOrder(arg0: java_awt_Component): number;
getComponents(): java_awt_Component[];
getContainerListeners(): java_awt_event_ContainerListener[];
getCursor(): java_awt_Cursor;
getCursorType(): number;
getDropTarget(): java_awt_dnd_DropTarget;
getExtendedState(): number;
getFocusListeners(): java_awt_event_FocusListener[];
getFocusTraversalKeysEnabled(): boolean;
getFocusTraversalPolicy(): java_awt_FocusTraversalPolicy;
getFont(): java_awt_Font;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getForeground(): java_awt_Color;
getGraphics(): java_awt_Graphics;
getGraphicsConfiguration(): java_awt_GraphicsConfiguration;
getHeight(): number;
getHierarchyBoundsListeners(): java_awt_event_HierarchyBoundsListener[];
getHierarchyListeners(): java_awt_event_HierarchyListener[];
getIconImage(): java_awt_Image;
getIgnoreRepaint(): boolean;
getInputMethodListeners(): java_awt_event_InputMethodListener[];
getInputMethodRequests(): java_awt_im_InputMethodRequests;
getInsets(): java_awt_Insets;
getKeyListeners(): java_awt_event_KeyListener[];
getLayout(): java_awt_LayoutManager;
getLocation(): java_awt_Point;
getLocation(arg0: java_awt_Point): java_awt_Point;
getLocationOnScreen(): java_awt_Point;
getMaximizedBounds(): java_awt_Rectangle;
getMaximumSize(): java_awt_Dimension;
getMenuBar(): java_awt_MenuBar;
getMinimumSize(): java_awt_Dimension;
getMouseListeners(): java_awt_event_MouseListener[];
getMouseMotionListeners(): java_awt_event_MouseMotionListener[];
getMousePosition(): java_awt_Point;
getMousePosition(arg0: boolean): java_awt_Point;
getMouseWheelListeners(): java_awt_event_MouseWheelListener[];
getName(): string;
getParent(): java_awt_Container;
getPreferredSize(): java_awt_Dimension;
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getSize(): java_awt_Dimension;
getSize(arg0: java_awt_Dimension): java_awt_Dimension;
getState(): number;
getTitle(): string;
getTreeLock(): java_lang_Object;
getWidth(): number;
getX(): number;
getY(): number;
gotFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
handleEvent(arg0: java_awt_Event): boolean;
hasFocus(): boolean;
hashCode(): number;
imageUpdate(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
insets(): java_awt_Insets;
inside(arg0: number, arg1: number): boolean;
invalidate(): void;
isAncestorOf(arg0: java_awt_Component): boolean;
isBackgroundSet(): boolean;
isCursorSet(): boolean;
isDisplayable(): boolean;
isDoubleBuffered(): boolean;
isEnabled(): boolean;
isFocusCycleRoot(arg0: java_awt_Container): boolean;
isFocusOwner(): boolean;
isFocusTraversable(): boolean;
isFocusTraversalPolicyProvider(): boolean;
isFocusTraversalPolicySet(): boolean;
isFocusable(): boolean;
isFontSet(): boolean;
isForegroundSet(): boolean;
isLightweight(): boolean;
isMaximumSizeSet(): boolean;
isMinimumSizeSet(): boolean;
isPreferredSizeSet(): boolean;
isResizable(): boolean;
isUndecorated(): boolean;
isValid(): boolean;
isVisible(): boolean;
keyDown(arg0: java_awt_Event, arg1: number): boolean;
keyUp(arg0: java_awt_Event, arg1: number): boolean;
layout(): void;
list(): void;
list(arg0: java_io_PrintStream): void;
list(arg0: java_io_PrintStream, arg1: number): void;
list(arg0: java_io_PrintWriter): void;
list(arg0: java_io_PrintWriter, arg1: number): void;
locate(arg0: number, arg1: number): java_awt_Component;
location(): java_awt_Point;
lostFocus(arg0: java_awt_Event, arg1: java_lang_Object): boolean;
minimumSize(): java_awt_Dimension;
mouseDown(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseDrag(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseEnter(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseExit(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseMove(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
mouseUp(arg0: java_awt_Event, arg1: number, arg2: number): boolean;
move(arg0: number, arg1: number): void;
nextFocus(): void;
notify(): void;
notifyAll(): void;
paintAll(arg0: java_awt_Graphics): void;
paintComponents(arg0: java_awt_Graphics): void;
preferredSize(): java_awt_Dimension;
prepareImage(arg0: java_awt_Image, arg1: java_awt_image_ImageObserver): boolean;
prepareImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
print(arg0: java_awt_Graphics): void;
printAll(arg0: java_awt_Graphics): void;
printComponents(arg0: java_awt_Graphics): void;
remove(arg0: java_awt_Component): void;
remove(arg0: java_awt_MenuComponent): void;
remove(arg0: number): void;
removeAll(): void;
removeComponentListener(arg0: java_awt_event_ComponentListener): void;
removeContainerListener(arg0: java_awt_event_ContainerListener): void;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
removeHierarchyBoundsListener(arg0: java_awt_event_HierarchyBoundsListener): void;
removeHierarchyListener(arg0: java_awt_event_HierarchyListener): void;
removeInputMethodListener(arg0: java_awt_event_InputMethodListener): void;
removeKeyListener(arg0: java_awt_event_KeyListener): void;
removeMouseListener(arg0: java_awt_event_MouseListener): void;
removeMouseMotionListener(arg0: java_awt_event_MouseMotionListener): void;
removeMouseWheelListener(arg0: java_awt_event_MouseWheelListener): void;
removeNotify(): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
repaint(): void;
repaint(arg0: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
requestFocus(): void;
requestFocus(arg0: java_awt_event_FocusEvent_Cause): void;
requestFocusInWindow(): boolean;
requestFocusInWindow(arg0: java_awt_event_FocusEvent_Cause): boolean;
resize(arg0: java_awt_Dimension): void;
resize(arg0: number, arg1: number): void;
revalidate(): void;
setBackground(arg0: java_awt_Color): void;
setComponentOrientation(arg0: java_awt_ComponentOrientation): void;
setComponentZOrder(arg0: java_awt_Component, arg1: number): void;
setCursor(arg0: number): void;
setDropTarget(arg0: java_awt_dnd_DropTarget): void;
setEnabled(arg0: boolean): void;
setExtendedState(arg0: number): void;
setFocusTraversalKeys(arg0: number, arg1: java_util_Set<java_awt_AWTKeyStroke>): void;
setFocusTraversalKeysEnabled(arg0: boolean): void;
setFocusTraversalPolicy(arg0: java_awt_FocusTraversalPolicy): void;
setFocusTraversalPolicyProvider(arg0: boolean): void;
setFocusable(arg0: boolean): void;
setFont(arg0: java_awt_Font): void;
setForeground(arg0: java_awt_Color): void;
setIconImage(arg0: java_awt_Image): void;
setIgnoreRepaint(arg0: boolean): void;
setLayout(arg0: java_awt_LayoutManager): void;
setLocale(arg0: java_util_Locale): void;
setMaximizedBounds(arg0: java_awt_Rectangle): void;
setMaximumSize(arg0: java_awt_Dimension): void;
setMenuBar(arg0: java_awt_MenuBar): void;
setMixingCutoutShape(arg0: java_awt_Shape): void;
setName(arg0: string): void;
setOpacity(arg0: number): void;
setPreferredSize(arg0: java_awt_Dimension): void;
setResizable(arg0: boolean): void;
setShape(arg0: java_awt_Shape): void;
setState(arg0: number): void;
setTitle(arg0: string): void;
setUndecorated(arg0: boolean): void;
show(arg0: boolean): void;
size(): java_awt_Dimension;
static getFrames(): java_awt_Frame[];
toString(): string;
transferFocus(): void;
transferFocusBackward(): void;
transferFocusDownCycle(): void;
transferFocusUpCycle(): void;
update(arg0: java_awt_Graphics): void;
validate(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_awt_GraphicsConfiguration);
constructor(arg0: string);
constructor(arg0: string, arg1: java_awt_GraphicsConfiguration);
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Menu as java_awt_Menu, MenuComponent as java_awt_MenuComponent, MenuShortcut as java_awt_MenuShortcut, MenuItem as java_awt_MenuItem, MenuContainer as java_awt_MenuContainer } from 'java.awt';
import { AccessibleContext as javax_accessibility_AccessibleContext, Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { Enumeration as java_util_Enumeration } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class MenuBar extends java_awt_MenuComponent implements java_awt_MenuContainer, javax_accessibility_Accessible {
accessibleContext: javax_accessibility_AccessibleContext;
class: java_lang_Class<java_lang_Object>;
helpMenu: java_awt_Menu;
menu: java_awt_Menu;
menuCount: number;
shortcutMenuItem: java_awt_MenuItem;
add(arg0: java_awt_Menu): java_awt_Menu;
addNotify(): void;
countMenus(): number;
deleteShortcut(arg0: java_awt_MenuShortcut): void;
equals(arg0: java_lang_Object): boolean;
getAccessibleContext(): javax_accessibility_AccessibleContext;
getClass(): java_lang_Class<java_lang_Object>;
getHelpMenu(): java_awt_Menu;
getMenu(arg0: number): java_awt_Menu;
getMenuCount(): number;
getShortcutMenuItem(arg0: java_awt_MenuShortcut): java_awt_MenuItem;
hashCode(): number;
notify(): void;
notifyAll(): void;
remove(arg0: java_awt_MenuComponent): void;
remove(arg0: number): void;
removeNotify(): void;
setHelpMenu(arg0: java_awt_Menu): void;
shortcuts(): java_util_Enumeration<java_awt_MenuShortcut>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Dimension as java_awt_Dimension, Graphics as java_awt_Graphics } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class PrintJob extends java_lang_Object {
graphics: java_awt_Graphics;
pageDimension: java_awt_Dimension;
pageResolution: number;
end(): void;
finalize(): void;
getGraphics(): java_awt_Graphics;
getPageDimension(): java_awt_Dimension;
getPageResolution(): number;
lastPageFirst(): boolean;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { JobAttributes as java_awt_JobAttributes } from 'java.awt';
import { DefaultSelectionType as java_awt_JobAttributes_DefaultSelectionType, DialogType as java_awt_JobAttributes_DialogType, MultipleDocumentHandlingType as java_awt_JobAttributes_MultipleDocumentHandlingType, SidesType as java_awt_JobAttributes_SidesType, DestinationType as java_awt_JobAttributes_DestinationType } from 'java.awt.JobAttributes';

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
printer: string;
sides: java_awt_JobAttributes_SidesType;
toPage: number;
clone(): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
getCopies(): number;
getDefaultSelection(): java_awt_JobAttributes_DefaultSelectionType;
getDestination(): java_awt_JobAttributes_DestinationType;
getDialog(): java_awt_JobAttributes_DialogType;
getFileName(): string;
getFromPage(): number;
getMaxPage(): number;
getMinPage(): number;
getMultipleDocumentHandling(): java_awt_JobAttributes_MultipleDocumentHandlingType;
getPageRanges(): int[][];
getPrinter(): string;
getSides(): java_awt_JobAttributes_SidesType;
getToPage(): number;
hashCode(): number;
set(arg0: java_awt_JobAttributes): void;
setCopies(arg0: number): void;
setCopiesToDefault(): void;
setDefaultSelection(arg0: java_awt_JobAttributes_DefaultSelectionType): void;
setDestination(arg0: java_awt_JobAttributes_DestinationType): void;
setDialog(arg0: java_awt_JobAttributes_DialogType): void;
setFileName(arg0: string): void;
setFromPage(arg0: number): void;
setMaxPage(arg0: number): void;
setMinPage(arg0: number): void;
setMultipleDocumentHandling(arg0: java_awt_JobAttributes_MultipleDocumentHandlingType): void;
setMultipleDocumentHandlingToDefault(): void;
setPageRanges(arg0: int[][]): void;
setPrinter(arg0: string): void;
setSides(arg0: java_awt_JobAttributes_SidesType): void;
setSidesToDefault(): void;
setToPage(arg0: number): void;
toString(): string;
constructor();
constructor(arg0: java_awt_JobAttributes);
constructor(arg0: number, arg1: java_awt_JobAttributes_DefaultSelectionType, arg2: java_awt_JobAttributes_DestinationType, arg3: java_awt_JobAttributes_DialogType, arg4: string, arg5: number, arg6: number, arg7: java_awt_JobAttributes_MultipleDocumentHandlingType, arg8: int[][], arg9: string, arg10: java_awt_JobAttributes_SidesType);
  }
}
//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DefaultSelectionType as java_awt_JobAttributes_DefaultSelectionType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class DefaultSelectionType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static ALL: java_awt_JobAttributes_DefaultSelectionType;
static RANGE: java_awt_JobAttributes_DefaultSelectionType;
static SELECTION: java_awt_JobAttributes_DefaultSelectionType;
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
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object } from 'java.lang';

  export class AttributeValue extends java_lang_Object {

hashCode(): number;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DialogType as java_awt_JobAttributes_DialogType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class DialogType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static COMMON: java_awt_JobAttributes_DialogType;
static NATIVE: java_awt_JobAttributes_DialogType;
static NONE: java_awt_JobAttributes_DialogType;
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
//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MultipleDocumentHandlingType as java_awt_JobAttributes_MultipleDocumentHandlingType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class MultipleDocumentHandlingType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static SEPARATE_DOCUMENTS_COLLATED_COPIES: java_awt_JobAttributes_MultipleDocumentHandlingType;
static SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: java_awt_JobAttributes_MultipleDocumentHandlingType;
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
//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SidesType as java_awt_JobAttributes_SidesType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class SidesType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static ONE_SIDED: java_awt_JobAttributes_SidesType;
static TWO_SIDED_LONG_EDGE: java_awt_JobAttributes_SidesType;
static TWO_SIDED_SHORT_EDGE: java_awt_JobAttributes_SidesType;
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
//@ts-nocheck

declare module 'java.awt.JobAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DestinationType as java_awt_JobAttributes_DestinationType } from 'java.awt.JobAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class DestinationType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static FILE: java_awt_JobAttributes_DestinationType;
static PRINTER: java_awt_JobAttributes_DestinationType;
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
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { PageAttributes as java_awt_PageAttributes } from 'java.awt';
import { MediaType as java_awt_PageAttributes_MediaType, OrientationRequestedType as java_awt_PageAttributes_OrientationRequestedType, OriginType as java_awt_PageAttributes_OriginType, PrintQualityType as java_awt_PageAttributes_PrintQualityType, ColorType as java_awt_PageAttributes_ColorType } from 'java.awt.PageAttributes';

  export class PageAttributes extends java_lang_Object implements java_lang_Cloneable {
color: java_awt_PageAttributes_ColorType;
media: java_awt_PageAttributes_MediaType;
orientationRequested: java_awt_PageAttributes_OrientationRequestedType;
origin: java_awt_PageAttributes_OriginType;
printQuality: java_awt_PageAttributes_PrintQualityType;
printerResolution: number[];
clone(): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
getColor(): java_awt_PageAttributes_ColorType;
getMedia(): java_awt_PageAttributes_MediaType;
getOrientationRequested(): java_awt_PageAttributes_OrientationRequestedType;
getOrigin(): java_awt_PageAttributes_OriginType;
getPrintQuality(): java_awt_PageAttributes_PrintQualityType;
getPrinterResolution(): number[];
hashCode(): number;
set(arg0: java_awt_PageAttributes): void;
setColor(arg0: java_awt_PageAttributes_ColorType): void;
setMedia(arg0: java_awt_PageAttributes_MediaType): void;
setMediaToDefault(): void;
setOrientationRequested(arg0: java_awt_PageAttributes_OrientationRequestedType): void;
setOrientationRequested(arg0: number): void;
setOrientationRequestedToDefault(): void;
setOrigin(arg0: java_awt_PageAttributes_OriginType): void;
setPrintQuality(arg0: java_awt_PageAttributes_PrintQualityType): void;
setPrintQuality(arg0: number): void;
setPrintQualityToDefault(): void;
setPrinterResolution(arg0: number): void;
setPrinterResolution(arg0: number[]): void;
setPrinterResolutionToDefault(): void;
toString(): string;
constructor();
constructor(arg0: java_awt_PageAttributes);
constructor(arg0: java_awt_PageAttributes_ColorType, arg1: java_awt_PageAttributes_MediaType, arg2: java_awt_PageAttributes_OrientationRequestedType, arg3: java_awt_PageAttributes_OriginType, arg4: java_awt_PageAttributes_PrintQualityType, arg5: number[]);
  }
}
//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MediaType as java_awt_PageAttributes_MediaType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class MediaType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static A0: java_awt_PageAttributes_MediaType;
static A10: java_awt_PageAttributes_MediaType;
static A1: java_awt_PageAttributes_MediaType;
static A2: java_awt_PageAttributes_MediaType;
static A3: java_awt_PageAttributes_MediaType;
static A4: java_awt_PageAttributes_MediaType;
static A5: java_awt_PageAttributes_MediaType;
static A6: java_awt_PageAttributes_MediaType;
static A7: java_awt_PageAttributes_MediaType;
static A8: java_awt_PageAttributes_MediaType;
static A9: java_awt_PageAttributes_MediaType;
static A: java_awt_PageAttributes_MediaType;
static B0: java_awt_PageAttributes_MediaType;
static B10: java_awt_PageAttributes_MediaType;
static B1: java_awt_PageAttributes_MediaType;
static B2: java_awt_PageAttributes_MediaType;
static B3: java_awt_PageAttributes_MediaType;
static B4: java_awt_PageAttributes_MediaType;
static B5: java_awt_PageAttributes_MediaType;
static B6: java_awt_PageAttributes_MediaType;
static B7: java_awt_PageAttributes_MediaType;
static B8: java_awt_PageAttributes_MediaType;
static B9: java_awt_PageAttributes_MediaType;
static B: java_awt_PageAttributes_MediaType;
static C0: java_awt_PageAttributes_MediaType;
static C10: java_awt_PageAttributes_MediaType;
static C1: java_awt_PageAttributes_MediaType;
static C2: java_awt_PageAttributes_MediaType;
static C3: java_awt_PageAttributes_MediaType;
static C4: java_awt_PageAttributes_MediaType;
static C5: java_awt_PageAttributes_MediaType;
static C6: java_awt_PageAttributes_MediaType;
static C7: java_awt_PageAttributes_MediaType;
static C8: java_awt_PageAttributes_MediaType;
static C9: java_awt_PageAttributes_MediaType;
static C: java_awt_PageAttributes_MediaType;
static D: java_awt_PageAttributes_MediaType;
static E: java_awt_PageAttributes_MediaType;
static ENV_10: java_awt_PageAttributes_MediaType;
static ENV_10X13: java_awt_PageAttributes_MediaType;
static ENV_10X14: java_awt_PageAttributes_MediaType;
static ENV_10X15: java_awt_PageAttributes_MediaType;
static ENV_11: java_awt_PageAttributes_MediaType;
static ENV_12: java_awt_PageAttributes_MediaType;
static ENV_14: java_awt_PageAttributes_MediaType;
static ENV_6X9: java_awt_PageAttributes_MediaType;
static ENV_7X9: java_awt_PageAttributes_MediaType;
static ENV_9: java_awt_PageAttributes_MediaType;
static ENV_9X11: java_awt_PageAttributes_MediaType;
static ENV_9X12: java_awt_PageAttributes_MediaType;
static ENV_INVITE: java_awt_PageAttributes_MediaType;
static ENV_ITALY: java_awt_PageAttributes_MediaType;
static ENV_MONARCH: java_awt_PageAttributes_MediaType;
static ENV_PERSONAL: java_awt_PageAttributes_MediaType;
static EXECUTIVE: java_awt_PageAttributes_MediaType;
static FOLIO: java_awt_PageAttributes_MediaType;
static INVITE: java_awt_PageAttributes_MediaType;
static INVITE_ENVELOPE: java_awt_PageAttributes_MediaType;
static INVOICE: java_awt_PageAttributes_MediaType;
static ISO_2A0: java_awt_PageAttributes_MediaType;
static ISO_4A0: java_awt_PageAttributes_MediaType;
static ISO_A0: java_awt_PageAttributes_MediaType;
static ISO_A10: java_awt_PageAttributes_MediaType;
static ISO_A1: java_awt_PageAttributes_MediaType;
static ISO_A2: java_awt_PageAttributes_MediaType;
static ISO_A3: java_awt_PageAttributes_MediaType;
static ISO_A4: java_awt_PageAttributes_MediaType;
static ISO_A5: java_awt_PageAttributes_MediaType;
static ISO_A6: java_awt_PageAttributes_MediaType;
static ISO_A7: java_awt_PageAttributes_MediaType;
static ISO_A8: java_awt_PageAttributes_MediaType;
static ISO_A9: java_awt_PageAttributes_MediaType;
static ISO_B0: java_awt_PageAttributes_MediaType;
static ISO_B10: java_awt_PageAttributes_MediaType;
static ISO_B1: java_awt_PageAttributes_MediaType;
static ISO_B2: java_awt_PageAttributes_MediaType;
static ISO_B3: java_awt_PageAttributes_MediaType;
static ISO_B4: java_awt_PageAttributes_MediaType;
static ISO_B4_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_B5: java_awt_PageAttributes_MediaType;
static ISO_B5_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_B6: java_awt_PageAttributes_MediaType;
static ISO_B7: java_awt_PageAttributes_MediaType;
static ISO_B8: java_awt_PageAttributes_MediaType;
static ISO_B9: java_awt_PageAttributes_MediaType;
static ISO_C0: java_awt_PageAttributes_MediaType;
static ISO_C0_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C10: java_awt_PageAttributes_MediaType;
static ISO_C10_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C1: java_awt_PageAttributes_MediaType;
static ISO_C1_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C2: java_awt_PageAttributes_MediaType;
static ISO_C2_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C3: java_awt_PageAttributes_MediaType;
static ISO_C3_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C4: java_awt_PageAttributes_MediaType;
static ISO_C4_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C5: java_awt_PageAttributes_MediaType;
static ISO_C5_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C6: java_awt_PageAttributes_MediaType;
static ISO_C6_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C7: java_awt_PageAttributes_MediaType;
static ISO_C7_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C8: java_awt_PageAttributes_MediaType;
static ISO_C8_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_C9: java_awt_PageAttributes_MediaType;
static ISO_C9_ENVELOPE: java_awt_PageAttributes_MediaType;
static ISO_DESIGNATED_LONG: java_awt_PageAttributes_MediaType;
static ISO_DESIGNATED_LONG_ENVELOPE: java_awt_PageAttributes_MediaType;
static ITALY: java_awt_PageAttributes_MediaType;
static ITALY_ENVELOPE: java_awt_PageAttributes_MediaType;
static JIS_B0: java_awt_PageAttributes_MediaType;
static JIS_B10: java_awt_PageAttributes_MediaType;
static JIS_B1: java_awt_PageAttributes_MediaType;
static JIS_B2: java_awt_PageAttributes_MediaType;
static JIS_B3: java_awt_PageAttributes_MediaType;
static JIS_B4: java_awt_PageAttributes_MediaType;
static JIS_B5: java_awt_PageAttributes_MediaType;
static JIS_B6: java_awt_PageAttributes_MediaType;
static JIS_B7: java_awt_PageAttributes_MediaType;
static JIS_B8: java_awt_PageAttributes_MediaType;
static JIS_B9: java_awt_PageAttributes_MediaType;
static LEDGER: java_awt_PageAttributes_MediaType;
static LEGAL: java_awt_PageAttributes_MediaType;
static LETTER: java_awt_PageAttributes_MediaType;
static MONARCH: java_awt_PageAttributes_MediaType;
static MONARCH_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_10X13_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_10X14_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_10X15_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_6X9_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_7X9_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_9X11_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_9X12_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_LEGAL: java_awt_PageAttributes_MediaType;
static NA_LETTER: java_awt_PageAttributes_MediaType;
static NA_NUMBER_10_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_11_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_12_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_14_ENVELOPE: java_awt_PageAttributes_MediaType;
static NA_NUMBER_9_ENVELOPE: java_awt_PageAttributes_MediaType;
static NOTE: java_awt_PageAttributes_MediaType;
static PERSONAL: java_awt_PageAttributes_MediaType;
static PERSONAL_ENVELOPE: java_awt_PageAttributes_MediaType;
static QUARTO: java_awt_PageAttributes_MediaType;
static STATEMENT: java_awt_PageAttributes_MediaType;
static TABLOID: java_awt_PageAttributes_MediaType;
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
//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OrientationRequestedType as java_awt_PageAttributes_OrientationRequestedType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class OrientationRequestedType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static LANDSCAPE: java_awt_PageAttributes_OrientationRequestedType;
static PORTRAIT: java_awt_PageAttributes_OrientationRequestedType;
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
//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { OriginType as java_awt_PageAttributes_OriginType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class OriginType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static PHYSICAL: java_awt_PageAttributes_OriginType;
static PRINTABLE: java_awt_PageAttributes_OriginType;
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
//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintQualityType as java_awt_PageAttributes_PrintQualityType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class PrintQualityType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static DRAFT: java_awt_PageAttributes_PrintQualityType;
static HIGH: java_awt_PageAttributes_PrintQualityType;
static NORMAL: java_awt_PageAttributes_PrintQualityType;
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
//@ts-nocheck

declare module 'java.awt.PageAttributes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ColorType as java_awt_PageAttributes_ColorType } from 'java.awt.PageAttributes';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class ColorType extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static COLOR: java_awt_PageAttributes_ColorType;
static MONOCHROME: java_awt_PageAttributes_ColorType;
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
//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Object as java_lang_Object } from 'java.lang';
import { Transferable as java_awt_datatransfer_Transferable, DataFlavor as java_awt_datatransfer_DataFlavor, FlavorListener as java_awt_datatransfer_FlavorListener, ClipboardOwner as java_awt_datatransfer_ClipboardOwner } from 'java.awt.datatransfer';

  export class Clipboard extends java_lang_Object {
availableDataFlavors: java_awt_datatransfer_DataFlavor[];
contents: java_awt_datatransfer_Transferable;
data: java_lang_Object;
flavorListeners: java_awt_datatransfer_FlavorListener[];
name: string;
addFlavorListener(arg0: java_awt_datatransfer_FlavorListener): void;
getAvailableDataFlavors(): java_awt_datatransfer_DataFlavor[];
getContents(arg0: java_lang_Object): java_awt_datatransfer_Transferable;
getData(arg0: java_awt_datatransfer_DataFlavor): java_lang_Object;
getFlavorListeners(): java_awt_datatransfer_FlavorListener[];
getName(): string;
isDataFlavorAvailable(arg0: java_awt_datatransfer_DataFlavor): boolean;
removeFlavorListener(arg0: java_awt_datatransfer_FlavorListener): void;
setContents(arg0: java_awt_datatransfer_Transferable, arg1: java_awt_datatransfer_ClipboardOwner): void;
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { FlavorEvent as java_awt_datatransfer_FlavorEvent } from 'java.awt.datatransfer';
import { EventListener as java_util_EventListener } from 'java.util';

  export class FlavorListener implements java_util_EventListener {

flavorsChanged(arg0: java_awt_datatransfer_FlavorEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Clipboard as java_awt_datatransfer_Clipboard } from 'java.awt.datatransfer';
import { EventObject as java_util_EventObject } from 'java.util';

  export class FlavorEvent extends java_util_EventObject {
class: java_lang_Class<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_datatransfer_Clipboard);
  }
}
//@ts-nocheck

declare module 'java.awt.datatransfer' {
import { Clipboard as java_awt_datatransfer_Clipboard, Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';

  export class ClipboardOwner {

lostOwnership(arg0: java_awt_datatransfer_Clipboard, arg1: java_awt_datatransfer_Transferable): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { EventQueue as java_awt_EventQueue, AWTEvent as java_awt_AWTEvent, SecondaryLoop as java_awt_SecondaryLoop } from 'java.awt';
import { Runnable as java_lang_Runnable, Object as java_lang_Object } from 'java.lang';

  export class EventQueue extends java_lang_Object {
nextEvent: java_awt_AWTEvent;
static currentEvent: java_awt_AWTEvent;
static mostRecentEventTime: number;
createSecondaryLoop(): java_awt_SecondaryLoop;
getNextEvent(): java_awt_AWTEvent;
peekEvent(): java_awt_AWTEvent;
peekEvent(arg0: number): java_awt_AWTEvent;
postEvent(arg0: java_awt_AWTEvent): void;
push(arg0: java_awt_EventQueue): void;
static getCurrentEvent(): java_awt_AWTEvent;
static getMostRecentEventTime(): number;
static invokeAndWait(arg0: java_lang_Runnable): void;
static invokeLater(arg0: java_lang_Runnable): void;
static isDispatchThread(): boolean;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt' {


  export class SecondaryLoop {

enter(): boolean;
exit(): boolean;

  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragSource as java_awt_dnd_DragSource, DragGestureEvent as java_awt_dnd_DragGestureEvent, DragSourceListener as java_awt_dnd_DragSourceListener, DragGestureListener as java_awt_dnd_DragGestureListener, DragGestureRecognizer as java_awt_dnd_DragGestureRecognizer, DragSourceMotionListener as java_awt_dnd_DragSourceMotionListener } from 'java.awt.dnd';
import { Cursor as java_awt_Cursor, Image as java_awt_Image, Point as java_awt_Point, Component as java_awt_Component } from 'java.awt';
import { Transferable as java_awt_datatransfer_Transferable, FlavorMap as java_awt_datatransfer_FlavorMap } from 'java.awt.datatransfer';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { EventListener as java_util_EventListener } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DragSource extends java_lang_Object implements java_io_Serializable {
dragSourceListeners: java_awt_dnd_DragSourceListener[];
dragSourceMotionListeners: java_awt_dnd_DragSourceMotionListener[];
flavorMap: java_awt_datatransfer_FlavorMap;
listeners: T[];
static DefaultCopyDrop: java_awt_Cursor;
static DefaultCopyNoDrop: java_awt_Cursor;
static DefaultLinkDrop: java_awt_Cursor;
static DefaultLinkNoDrop: java_awt_Cursor;
static DefaultMoveDrop: java_awt_Cursor;
static DefaultMoveNoDrop: java_awt_Cursor;
static defaultDragSource: java_awt_dnd_DragSource;
static dragThreshold: number;
addDragSourceListener(arg0: java_awt_dnd_DragSourceListener): void;
addDragSourceMotionListener(arg0: java_awt_dnd_DragSourceMotionListener): void;
createDefaultDragGestureRecognizer(arg0: java_awt_Component, arg1: number, arg2: java_awt_dnd_DragGestureListener): java_awt_dnd_DragGestureRecognizer;
createDragGestureRecognizer<T extends java_awt_dnd_DragGestureRecognizer>(arg0: java_lang_Class<T>, arg1: java_awt_Component, arg2: number, arg3: java_awt_dnd_DragGestureListener): T;
getDragSourceListeners(): java_awt_dnd_DragSourceListener[];
getDragSourceMotionListeners(): java_awt_dnd_DragSourceMotionListener[];
getFlavorMap(): java_awt_datatransfer_FlavorMap;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
removeDragSourceListener(arg0: java_awt_dnd_DragSourceListener): void;
removeDragSourceMotionListener(arg0: java_awt_dnd_DragSourceMotionListener): void;
startDrag(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_Image, arg3: java_awt_Point, arg4: java_awt_datatransfer_Transferable, arg5: java_awt_dnd_DragSourceListener): void;
startDrag(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_Image, arg3: java_awt_Point, arg4: java_awt_datatransfer_Transferable, arg5: java_awt_dnd_DragSourceListener, arg6: java_awt_datatransfer_FlavorMap): void;
startDrag(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_datatransfer_Transferable, arg3: java_awt_dnd_DragSourceListener): void;
startDrag(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_datatransfer_Transferable, arg3: java_awt_dnd_DragSourceListener, arg4: java_awt_datatransfer_FlavorMap): void;
static getDefaultDragSource(): java_awt_dnd_DragSource;
static getDragThreshold(): number;
static isDragImageSupported(): boolean;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Iterator as java_util_Iterator, List as java_util_List, EventObject as java_util_EventObject } from 'java.util';
import { InputEvent as java_awt_event_InputEvent } from 'java.awt.event';
import { Cursor as java_awt_Cursor, Image as java_awt_Image, Point as java_awt_Point, Component as java_awt_Component } from 'java.awt';
import { Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { DragSourceListener as java_awt_dnd_DragSourceListener, DragSource as java_awt_dnd_DragSource, DragGestureRecognizer as java_awt_dnd_DragGestureRecognizer } from 'java.awt.dnd';

  export class DragGestureEvent extends java_util_EventObject {
class: java_lang_Class<java_lang_Object>;
component: java_awt_Component;
dragAction: number;
dragOrigin: java_awt_Point;
dragSource: java_awt_dnd_DragSource;
sourceAsDragGestureRecognizer: java_awt_dnd_DragGestureRecognizer;
triggerEvent: java_awt_event_InputEvent;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getComponent(): java_awt_Component;
getDragAction(): number;
getDragOrigin(): java_awt_Point;
getDragSource(): java_awt_dnd_DragSource;
getSourceAsDragGestureRecognizer(): java_awt_dnd_DragGestureRecognizer;
getTriggerEvent(): java_awt_event_InputEvent;
hashCode(): number;
iterator(): java_util_Iterator<java_awt_event_InputEvent>;
notify(): void;
notifyAll(): void;
startDrag(arg0: java_awt_Cursor, arg1: java_awt_Image, arg2: java_awt_Point, arg3: java_awt_datatransfer_Transferable, arg4: java_awt_dnd_DragSourceListener): void;
startDrag(arg0: java_awt_Cursor, arg1: java_awt_datatransfer_Transferable): void;
startDrag(arg0: java_awt_Cursor, arg1: java_awt_datatransfer_Transferable, arg2: java_awt_dnd_DragSourceListener): void;
toArray(): java_lang_Object[];
toArray(arg0: java_lang_Object[]): java_lang_Object[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_dnd_DragGestureRecognizer, arg1: number, arg2: java_awt_Point, arg3: java_util_List<java_awt_event_InputEvent>);
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragSourceDropEvent as java_awt_dnd_DragSourceDropEvent, DragSourceDragEvent as java_awt_dnd_DragSourceDragEvent, DragSourceEvent as java_awt_dnd_DragSourceEvent } from 'java.awt.dnd';
import { EventListener as java_util_EventListener } from 'java.util';

  export class DragSourceListener implements java_util_EventListener {

dragDropEnd(arg0: java_awt_dnd_DragSourceDropEvent): void;
dragEnter(arg0: java_awt_dnd_DragSourceDragEvent): void;
dragExit(arg0: java_awt_dnd_DragSourceEvent): void;
dragOver(arg0: java_awt_dnd_DragSourceDragEvent): void;
dropActionChanged(arg0: java_awt_dnd_DragSourceDragEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DragSourceContext as java_awt_dnd_DragSourceContext, DragSourceEvent as java_awt_dnd_DragSourceEvent } from 'java.awt.dnd';

  export class DragSourceDropEvent extends java_awt_dnd_DragSourceEvent {
class: java_lang_Class<java_lang_Object>;
dropAction: number;
dropSuccess: boolean;
source: java_lang_Object;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getDropAction(): number;
getDropSuccess(): boolean;
getSource(): java_lang_Object;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_dnd_DragSourceContext);
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: boolean);
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: boolean, arg3: number, arg4: number);
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragSourceListener as java_awt_dnd_DragSourceListener, DragSourceDropEvent as java_awt_dnd_DragSourceDropEvent, DragSourceDragEvent as java_awt_dnd_DragSourceDragEvent, DragSource as java_awt_dnd_DragSource, DragGestureEvent as java_awt_dnd_DragGestureEvent, DragSourceEvent as java_awt_dnd_DragSourceEvent, DragSourceMotionListener as java_awt_dnd_DragSourceMotionListener } from 'java.awt.dnd';
import { Transferable as java_awt_datatransfer_Transferable } from 'java.awt.datatransfer';
import { Component as java_awt_Component, Cursor as java_awt_Cursor, Image as java_awt_Image, Point as java_awt_Point } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DragSourceContext extends java_lang_Object implements java_awt_dnd_DragSourceListener, java_awt_dnd_DragSourceMotionListener, java_io_Serializable {
component: java_awt_Component;
cursor: java_awt_Cursor;
dragSource: java_awt_dnd_DragSource;
sourceActions: number;
transferable: java_awt_datatransfer_Transferable;
trigger: java_awt_dnd_DragGestureEvent;
addDragSourceListener(arg0: java_awt_dnd_DragSourceListener): void;
dragDropEnd(arg0: java_awt_dnd_DragSourceDropEvent): void;
dragEnter(arg0: java_awt_dnd_DragSourceDragEvent): void;
dragExit(arg0: java_awt_dnd_DragSourceEvent): void;
dragMouseMoved(arg0: java_awt_dnd_DragSourceDragEvent): void;
dragOver(arg0: java_awt_dnd_DragSourceDragEvent): void;
dropActionChanged(arg0: java_awt_dnd_DragSourceDragEvent): void;
getComponent(): java_awt_Component;
getCursor(): java_awt_Cursor;
getDragSource(): java_awt_dnd_DragSource;
getSourceActions(): number;
getTransferable(): java_awt_datatransfer_Transferable;
getTrigger(): java_awt_dnd_DragGestureEvent;
removeDragSourceListener(arg0: java_awt_dnd_DragSourceListener): void;
setCursor(arg0: java_awt_Cursor): void;
transferablesFlavorsChanged(): void;
constructor(arg0: java_awt_dnd_DragGestureEvent, arg1: java_awt_Cursor, arg2: java_awt_Image, arg3: java_awt_Point, arg4: java_awt_datatransfer_Transferable, arg5: java_awt_dnd_DragSourceListener);
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { DragSourceContext as java_awt_dnd_DragSourceContext, DragSourceEvent as java_awt_dnd_DragSourceEvent } from 'java.awt.dnd';

  export class DragSourceDragEvent extends java_awt_dnd_DragSourceEvent {
class: java_lang_Class<java_lang_Object>;
dropAction: number;
gestureModifiers: number;
gestureModifiersEx: number;
source: java_lang_Object;
targetActions: number;
userAction: number;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getDropAction(): number;
getGestureModifiers(): number;
getGestureModifiersEx(): number;
getSource(): java_lang_Object;
getTargetActions(): number;
getUserAction(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: number, arg3: number);
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { Point as java_awt_Point } from 'java.awt';
import { DragSourceContext as java_awt_dnd_DragSourceContext } from 'java.awt.dnd';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EventObject as java_util_EventObject } from 'java.util';

  export class DragSourceEvent extends java_util_EventObject {
class: java_lang_Class<java_lang_Object>;
dragSourceContext: java_awt_dnd_DragSourceContext;
location: java_awt_Point;
x: number;
y: number;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getDragSourceContext(): java_awt_dnd_DragSourceContext;
getLocation(): java_awt_Point;
getX(): number;
getY(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_dnd_DragSourceContext);
constructor(arg0: java_awt_dnd_DragSourceContext, arg1: number, arg2: number);
  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragSourceDragEvent as java_awt_dnd_DragSourceDragEvent } from 'java.awt.dnd';
import { EventListener as java_util_EventListener } from 'java.util';

  export class DragSourceMotionListener implements java_util_EventListener {

dragMouseMoved(arg0: java_awt_dnd_DragSourceDragEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragSource as java_awt_dnd_DragSource, DragGestureListener as java_awt_dnd_DragGestureListener } from 'java.awt.dnd';
import { InputEvent as java_awt_event_InputEvent } from 'java.awt.event';
import { Component as java_awt_Component } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class DragGestureRecognizer extends java_lang_Object implements java_io_Serializable {
component: java_awt_Component;
dragSource: java_awt_dnd_DragSource;
sourceActions: number;
triggerEvent: java_awt_event_InputEvent;
addDragGestureListener(arg0: java_awt_dnd_DragGestureListener): void;
getComponent(): java_awt_Component;
getDragSource(): java_awt_dnd_DragSource;
getSourceActions(): number;
getTriggerEvent(): java_awt_event_InputEvent;
removeDragGestureListener(arg0: java_awt_dnd_DragGestureListener): void;
resetRecognizer(): void;
setComponent(arg0: java_awt_Component): void;
setSourceActions(arg0: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt.dnd' {
import { DragGestureEvent as java_awt_dnd_DragGestureEvent } from 'java.awt.dnd';
import { EventListener as java_util_EventListener } from 'java.util';

  export class DragGestureListener implements java_util_EventListener {

dragGestureRecognized(arg0: java_awt_dnd_DragGestureEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.Dialog' {
import { ModalityType as java_awt_Dialog_ModalityType } from 'java.awt.Dialog';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ModalityType extends java_lang_Enum<java_awt_Dialog_ModalityType> {
class: java_lang_Class<java_lang_Object>;
static APPLICATION_MODAL: java_awt_Dialog_ModalityType;
static DOCUMENT_MODAL: java_awt_Dialog_ModalityType;
static MODELESS: java_awt_Dialog_ModalityType;
static TOOLKIT_MODAL: java_awt_Dialog_ModalityType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_awt_Dialog_ModalityType;
static values(): java_awt_Dialog_ModalityType[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { EventListener as java_util_EventListener } from 'java.util';

  export class AWTEventListener implements java_util_EventListener {

eventDispatched(arg0: java_awt_AWTEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.im' {
import { Map as java_util_Map } from 'java.util';
import { TextAttribute as java_awt_font_TextAttribute } from 'java.awt.font';
import { Object as java_lang_Object } from 'java.lang';
import { InputMethodHighlight as java_awt_im_InputMethodHighlight } from 'java.awt.im';

  export class InputMethodHighlight extends java_lang_Object {
state: number;
static CONVERTED_TEXT: number;
static RAW_TEXT: number;
static SELECTED_CONVERTED_TEXT_HIGHLIGHT: java_awt_im_InputMethodHighlight;
static SELECTED_RAW_TEXT_HIGHLIGHT: java_awt_im_InputMethodHighlight;
static UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: java_awt_im_InputMethodHighlight;
static UNSELECTED_RAW_TEXT_HIGHLIGHT: java_awt_im_InputMethodHighlight;
style: java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
variation: number;
getState(): number;
getStyle(): java_util_Map<java_awt_font_TextAttribute, java_lang_Object>;
getVariation(): number;
isSelected(): boolean;
constructor(arg0: boolean, arg1: number);
constructor(arg0: boolean, arg1: number, arg2: number);
constructor(arg0: boolean, arg1: number, arg2: number, arg3: java_util_Map<java_awt_font_TextAttribute, java_lang_Object>);
  }
}
//@ts-nocheck

declare module 'java.awt.im' {
import { InputContext as java_awt_im_InputContext } from 'java.awt.im';
import { Locale as java_util_Locale } from 'java.util';
import { Subset as java_lang_Character_Subset } from 'java.lang.Character';
import { Object as java_lang_Object } from 'java.lang';
import { Component as java_awt_Component, AWTEvent as java_awt_AWTEvent } from 'java.awt';

  export class InputContext extends java_lang_Object {
inputMethodControlObject: java_lang_Object;
locale: java_util_Locale;
static instance: java_awt_im_InputContext;
dispatchEvent(arg0: java_awt_AWTEvent): void;
dispose(): void;
endComposition(): void;
getInputMethodControlObject(): java_lang_Object;
getLocale(): java_util_Locale;
isCompositionEnabled(): boolean;
reconvert(): void;
removeNotify(arg0: java_awt_Component): void;
selectInputMethod(arg0: java_util_Locale): boolean;
setCharacterSubsets(arg0: java_lang_Character_Subset[]): void;
setCompositionEnabled(arg0: boolean): void;
static getInstance(): java_awt_im_InputContext;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { ImageCapabilities as java_awt_ImageCapabilities } from 'java.awt';
import { FlipContents as java_awt_BufferCapabilities_FlipContents } from 'java.awt.BufferCapabilities';

  export class BufferCapabilities extends java_lang_Object implements java_lang_Cloneable {
backBufferCapabilities: java_awt_ImageCapabilities;
flipContents: java_awt_BufferCapabilities_FlipContents;
frontBufferCapabilities: java_awt_ImageCapabilities;
clone(): java_lang_Object;
getBackBufferCapabilities(): java_awt_ImageCapabilities;
getFlipContents(): java_awt_BufferCapabilities_FlipContents;
getFrontBufferCapabilities(): java_awt_ImageCapabilities;
isFullScreenRequired(): boolean;
isMultiBufferAvailable(): boolean;
isPageFlipping(): boolean;
constructor(arg0: java_awt_ImageCapabilities, arg1: java_awt_ImageCapabilities, arg2: java_awt_BufferCapabilities_FlipContents);
  }
}
//@ts-nocheck

declare module 'java.awt.BufferCapabilities' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { FlipContents as java_awt_BufferCapabilities_FlipContents } from 'java.awt.BufferCapabilities';
import { AttributeValue as java_awt_AttributeValue } from 'java.awt';

  export class FlipContents extends java_awt_AttributeValue {
class: java_lang_Class<java_lang_Object>;
static BACKGROUND: java_awt_BufferCapabilities_FlipContents;
static COPIED: java_awt_BufferCapabilities_FlipContents;
static PRIOR: java_awt_BufferCapabilities_FlipContents;
static UNDEFINED: java_awt_BufferCapabilities_FlipContents;
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
//@ts-nocheck

declare module 'java.awt.image' {
import { BufferCapabilities as java_awt_BufferCapabilities, Graphics as java_awt_Graphics } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class BufferStrategy extends java_lang_Object {
capabilities: java_awt_BufferCapabilities;
drawGraphics: java_awt_Graphics;
contentsLost(): boolean;
contentsRestored(): boolean;
dispose(): void;
getCapabilities(): java_awt_BufferCapabilities;
getDrawGraphics(): java_awt_Graphics;
show(): void;
constructor();
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { WindowEvent as java_awt_event_WindowEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class WindowListener implements java_util_EventListener {

windowActivated(arg0: java_awt_event_WindowEvent): void;
windowClosed(arg0: java_awt_event_WindowEvent): void;
windowClosing(arg0: java_awt_event_WindowEvent): void;
windowDeactivated(arg0: java_awt_event_WindowEvent): void;
windowDeiconified(arg0: java_awt_event_WindowEvent): void;
windowIconified(arg0: java_awt_event_WindowEvent): void;
windowOpened(arg0: java_awt_event_WindowEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { Window as java_awt_Window } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ComponentEvent as java_awt_event_ComponentEvent } from 'java.awt.event';

  export class WindowEvent extends java_awt_event_ComponentEvent {
class: java_lang_Class<java_lang_Object>;
iD: number;
newState: number;
oldState: number;
oppositeWindow: java_awt_Window;
source: java_lang_Object;
static WINDOW_ACTIVATED: number;
static WINDOW_CLOSED: number;
static WINDOW_CLOSING: number;
static WINDOW_DEACTIVATED: number;
static WINDOW_DEICONIFIED: number;
static WINDOW_FIRST: number;
static WINDOW_GAINED_FOCUS: number;
static WINDOW_ICONIFIED: number;
static WINDOW_LAST: number;
static WINDOW_LOST_FOCUS: number;
static WINDOW_OPENED: number;
static WINDOW_STATE_CHANGED: number;
window: java_awt_Window;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getID(): number;
getNewState(): number;
getOldState(): number;
getOppositeWindow(): java_awt_Window;
getSource(): java_lang_Object;
getWindow(): java_awt_Window;
hashCode(): number;
notify(): void;
notifyAll(): void;
paramString(): string;
setSource(arg0: java_lang_Object): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_awt_Window, arg1: number);
constructor(arg0: java_awt_Window, arg1: number, arg2: java_awt_Window);
constructor(arg0: java_awt_Window, arg1: number, arg2: java_awt_Window, arg3: number, arg4: number);
constructor(arg0: java_awt_Window, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { WindowEvent as java_awt_event_WindowEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class WindowStateListener implements java_util_EventListener {

windowStateChanged(arg0: java_awt_event_WindowEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt.event' {
import { WindowEvent as java_awt_event_WindowEvent } from 'java.awt.event';
import { EventListener as java_util_EventListener } from 'java.util';

  export class WindowFocusListener implements java_util_EventListener {

windowGainedFocus(arg0: java_awt_event_WindowEvent): void;
windowLostFocus(arg0: java_awt_event_WindowEvent): void;

  }
}
//@ts-nocheck

declare module 'java.awt' {
import { DisplayMode as java_awt_DisplayMode } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class DisplayMode extends java_lang_Object {
bitDepth: number;
height: number;
refreshRate: number;
static BIT_DEPTH_MULTI: number;
static REFRESH_RATE_UNKNOWN: number;
width: number;
equals(arg0: java_awt_DisplayMode): boolean;
equals(arg0: java_lang_Object): boolean;
getBitDepth(): number;
getHeight(): number;
getRefreshRate(): number;
getWidth(): number;
hashCode(): number;
toString(): string;
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
  }
}
//@ts-nocheck

declare module 'java.awt.GraphicsDevice' {
import { WindowTranslucency as java_awt_GraphicsDevice_WindowTranslucency } from 'java.awt.GraphicsDevice';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class WindowTranslucency extends java_lang_Enum<java_awt_GraphicsDevice_WindowTranslucency> {
class: java_lang_Class<java_lang_Object>;
static PERPIXEL_TRANSLUCENT: java_awt_GraphicsDevice_WindowTranslucency;
static PERPIXEL_TRANSPARENT: java_awt_GraphicsDevice_WindowTranslucency;
static TRANSLUCENT: java_awt_GraphicsDevice_WindowTranslucency;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_awt_GraphicsDevice_WindowTranslucency;
static values(): java_awt_GraphicsDevice_WindowTranslucency[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}