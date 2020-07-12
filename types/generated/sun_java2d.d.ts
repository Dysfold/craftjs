//@ts-nocheck

declare module 'sun.java2d' {
import { State as sun_java2dTrackable_State_State } from 'sun.java2dTrackable.State';
import { StateTrackableDelegate as sun_java2d_StateTrackableDelegate, StateTracker as sun_java2d_StateTracker, StateTrackable as sun_java2d_StateTrackable } from 'sun.java2d';
import { Object as java_lang_Object } from 'java.lang';

  export class StateTrackableDelegate extends java_lang_Object implements sun_java2d_StateTrackable {
static UNTRACKABLE_DELEGATE: sun_java2d_StateTrackableDelegate;
static IMMUTABLE_DELEGATE: sun_java2d_StateTrackableDelegate;
theState: sun_java2dTrackable_State_State;
theTracker: sun_java2d_StateTracker;
numDynamicAgents: number;
state: sun_java2dTrackable_State_State;
stateTracker: sun_java2d_StateTracker;
static createInstance(arg0: sun_java2dTrackable_State_State): sun_java2d_StateTrackableDelegate;
getState(): sun_java2dTrackable_State_State;
getStateTracker(): sun_java2d_StateTracker;
setImmutable(): void;
setUntrackable(): void;
addDynamicAgent(): void;
markDirty(): void;

  }
}//@ts-nocheck

declare module 'sun.java2d' {
import { StateTracker as sun_java2d_StateTracker } from 'sun.java2d';

  export class StateTracker {
static ALWAYS_CURRENT: sun_java2d_StateTracker;
static NEVER_CURRENT: sun_java2d_StateTracker;
isCurrent(): boolean;

  }
}//@ts-nocheck

declare module 'sun.java2d' {
import { State as sun_java2dTrackable_State_State } from 'sun.java2dTrackable.State';
import { StateTracker as sun_java2d_StateTracker } from 'sun.java2d';

  export class StateTrackable {
state: sun_java2dTrackable_State_State;
stateTracker: sun_java2d_StateTracker;
getState(): sun_java2dTrackable_State_State;
getStateTracker(): sun_java2d_StateTracker;

  }
}//@ts-nocheck

declare module 'sun.java2d.cmm' {
import { Object as java_lang_Object } from 'java.lang';

  export class Profile extends java_lang_Object {
nativePtr: number;


  }
}//@ts-nocheck

declare module 'sun.java2d.cmm' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { InputStream as java_io_InputStream } from 'java.io';

  export class ProfileDeferralInfo extends java_io_InputStream {
colorSpaceType: number;
numComponents: number;
profileClass: number;
filename: string;
class: java_lang_Class<java_lang_Object>;
read(): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: number, arg2: number, arg3: number);
  }
}//@ts-nocheck

declare module 'sun.java2d.cmm' {


  export class ProfileActivator {

activate(): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.cmm' {
import { Raster as java_awt_image_Raster, WritableRaster as java_awt_image_WritableRaster, BufferedImage as java_awt_image_BufferedImage } from 'java.awt.image';

  export class ColorTransform {
static Any: number;
static In: number;
static Out: number;
static Gamut: number;
static Simulation: number;
numInComponents: number;
numOutComponents: number;
getNumInComponents(): number;
getNumOutComponents(): number;
colorConvert(arg0: number[], arg1: number[]): number[];
colorConvert(arg0: java_awt_image_Raster, arg1: java_awt_image_WritableRaster): void;
colorConvert(arg0: number[], arg1: number[]): number[];
colorConvert(arg0: java_awt_image_Raster, arg1: java_awt_image_WritableRaster, arg2: number[], arg3: number[], arg4: number[], arg5: number[]): void;
colorConvert(arg0: java_awt_image_BufferedImage, arg1: java_awt_image_BufferedImage): void;

  }
}//@ts-nocheck

declare module 'sun.java2d' {


  export class DisposerRecord {

dispose(): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.Disposer' {


  export class PollDisposable {



  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { Object as java_lang_Object } from 'java.lang';
import { SpanIterator as sun_java2d_pipe_SpanIterator, Region as sun_java2d_pipe_Region, RegionIterator as sun_java2d_pipe_RegionIterator } from 'sun.java2d.pipe';
import { Rectangle as java_awt_Rectangle, Shape as java_awt_Shape } from 'java.awt';
import { AffineTransform as java_awt_geom_AffineTransform, Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';

  export class Region extends java_lang_Object {
static INIT_SIZE: number;
static GROW_SIZE: number;
static EMPTY_REGION: sun_java2d_pipe_Region;
static WHOLE_REGION: sun_java2d_pipe_Region;
lox: number;
loy: number;
hix: number;
hiy: number;
endIndex: number;
bands: number[];
static INCLUDE_A: number;
static INCLUDE_B: number;
static INCLUDE_COMMON: number;
static instance: sun_java2d_pipe_Region;
static instance: sun_java2d_pipe_Region;
static instance: sun_java2d_pipe_Region;
static instance: sun_java2d_pipe_Region;
static instance: sun_java2d_pipe_Region;
static instance: sun_java2d_pipe_Region;
iterator: sun_java2d_pipe_RegionIterator;
union: sun_java2d_pipe_Region;
intersection: sun_java2d_pipe_Region;
intersection: sun_java2d_pipe_Region;
intersection: sun_java2d_pipe_Region;
translatedRegion: sun_java2d_pipe_Region;
static instanceXYWH: sun_java2d_pipe_Region;
difference: sun_java2d_pipe_Region;
static instanceXYXY: sun_java2d_pipe_Region;
scaledRegion: sun_java2d_pipe_Region;
intersectionXYWH: sun_java2d_pipe_Region;
intersectionXYXY: sun_java2d_pipe_Region;
intersectionXYXY: sun_java2d_pipe_Region;
exclusiveOr: sun_java2d_pipe_Region;
boundsIntersection: sun_java2d_pipe_Region;
boundsIntersection: sun_java2d_pipe_Region;
boundsIntersectionXYWH: sun_java2d_pipe_Region;
boundsIntersectionXYXY: sun_java2d_pipe_Region;
loX: number;
loY: number;
hiX: number;
hiY: number;
spanIterator: sun_java2d_pipe_SpanIterator;
spanIterator: sun_java2d_pipe_SpanIterator;
width: number;
height: number;
bounds: void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
isEmpty(): boolean;
contains(arg0: number, arg1: number): boolean;
filter(arg0: sun_java2d_pipe_SpanIterator): sun_java2d_pipe_SpanIterator;
static getInstance(arg0: number[], arg1: sun_java2d_pipe_SpanIterator): sun_java2d_pipe_Region;
static getInstance(arg0: number[]): sun_java2d_pipe_Region;
static getInstance(arg0: java_awt_Rectangle): sun_java2d_pipe_Region;
static getInstance(arg0: java_awt_Shape, arg1: java_awt_geom_AffineTransform): sun_java2d_pipe_Region;
static getInstance(arg0: sun_java2d_pipe_Region, arg1: boolean, arg2: java_awt_Shape, arg3: java_awt_geom_AffineTransform): sun_java2d_pipe_Region;
static getInstance(arg0: sun_java2d_pipe_Region, arg1: java_awt_Shape, arg2: java_awt_geom_AffineTransform): sun_java2d_pipe_Region;
getIterator(): sun_java2d_pipe_RegionIterator;
getUnion(arg0: sun_java2d_pipe_Region): sun_java2d_pipe_Region;
getIntersection(arg0: java_awt_geom_Rectangle2D): sun_java2d_pipe_Region;
getIntersection(arg0: java_awt_Rectangle): sun_java2d_pipe_Region;
getIntersection(arg0: sun_java2d_pipe_Region): sun_java2d_pipe_Region;
getTranslatedRegion(arg0: number, arg1: number): sun_java2d_pipe_Region;
static getInstanceXYWH(arg0: number, arg1: number, arg2: number, arg3: number): sun_java2d_pipe_Region;
getDifference(arg0: sun_java2d_pipe_Region): sun_java2d_pipe_Region;
static dimAdd(arg0: number, arg1: number): number;
static clipAdd(arg0: number, arg1: number): number;
static clipRound(arg0: number): number;
static clipScale(arg0: number, arg1: number): number;
static getInstanceXYXY(arg0: number, arg1: number, arg2: number, arg3: number): sun_java2d_pipe_Region;
getScaledRegion(arg0: number, arg1: number): sun_java2d_pipe_Region;
getIntersectionXYWH(arg0: number, arg1: number, arg2: number, arg3: number): sun_java2d_pipe_Region;
getIntersectionXYXY(arg0: number, arg1: number, arg2: number, arg3: number): sun_java2d_pipe_Region;
getIntersectionXYXY(arg0: number, arg1: number, arg2: number, arg3: number): sun_java2d_pipe_Region;
getExclusiveOr(arg0: sun_java2d_pipe_Region): sun_java2d_pipe_Region;
getBoundsIntersection(arg0: java_awt_Rectangle): sun_java2d_pipe_Region;
getBoundsIntersection(arg0: sun_java2d_pipe_Region): sun_java2d_pipe_Region;
getBoundsIntersectionXYWH(arg0: number, arg1: number, arg2: number, arg3: number): sun_java2d_pipe_Region;
getBoundsIntersectionXYXY(arg0: number, arg1: number, arg2: number, arg3: number): sun_java2d_pipe_Region;
getLoX(): number;
getLoY(): number;
getHiX(): number;
getHiY(): number;
isRectangular(): boolean;
isInsideXYWH(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
isInsideXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
isInsideQuickCheck(arg0: sun_java2d_pipe_Region): boolean;
intersectsQuickCheckXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
intersectsQuickCheck(arg0: sun_java2d_pipe_Region): boolean;
encompasses(arg0: sun_java2d_pipe_Region): boolean;
encompassesXYWH(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
encompassesXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
clipBoxToBounds(arg0: number[]): void;
getSpanIterator(): sun_java2d_pipe_SpanIterator;
getSpanIterator(arg0: number[]): sun_java2d_pipe_SpanIterator;
getWidth(): number;
getHeight(): number;
getBounds(arg0: number[]): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {


  export class SpanIterator {
pathBox: void;
nativeIterator: number;
getPathBox(arg0: number[]): void;
nextSpan(arg0: number[]): boolean;
intersectClipBox(arg0: number, arg1: number, arg2: number, arg3: number): void;
skipDownTo(arg0: number): void;
getNativeIterator(): number;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { RegionIterator as sun_java2d_pipe_RegionIterator, Region as sun_java2d_pipe_Region } from 'sun.java2d.pipe';
import { Object as java_lang_Object } from 'java.lang';

  export class RegionIterator extends java_lang_Object {
region: sun_java2d_pipe_Region;
curIndex: number;
numXbands: number;
createCopy(): sun_java2d_pipe_RegionIterator;
copyStateFrom(arg0: sun_java2d_pipe_RegionIterator): void;
nextYRange(arg0: number[]): boolean;
nextXBand(arg0: number[]): boolean;

  }
}//@ts-nocheck

declare module 'sun.java2d' {
import { State as sun_java2dTrackable_State_State } from 'sun.java2dTrackable.State';
import { SurfaceData as sun_java2d_SurfaceData, SunGraphics2D as sun_java2d_SunGraphics2D, StateTracker as sun_java2d_StateTracker, SurfaceDataProxy as sun_java2d_SurfaceDataProxy, StateTrackableDelegate as sun_java2d_StateTrackableDelegate, DisposerTarget as sun_java2d_DisposerTarget, StateTrackable as sun_java2d_StateTrackable, Surface as sun_java2d_Surface } from 'sun.java2d';
import { Image as java_awt_Image, GraphicsConfiguration as java_awt_GraphicsConfiguration, Color as java_awt_Color, Rectangle as java_awt_Rectangle, Transparency as java_awt_Transparency } from 'java.awt';
import { Raster as java_awt_image_Raster, ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { Object as java_lang_Object } from 'java.lang';
import { RenderLoops as sun_java2d_loops_RenderLoops, SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, RenderCache as sun_java2d_loops_RenderCache } from 'sun.java2d.loops';
import { LoopPipe as sun_java2d_pipe_LoopPipe, TextPipe as sun_java2d_pipe_TextPipe, AlphaColorPipe as sun_java2d_pipe_AlphaColorPipe, PixelToShapeConverter as sun_java2d_pipe_PixelToShapeConverter, PixelToParallelogramConverter as sun_java2d_pipe_PixelToParallelogramConverter, CompositePipe as sun_java2d_pipe_CompositePipe, AAShapePipe as sun_java2d_pipe_AAShapePipe, SpanShapeRenderer as sun_java2d_pipe_SpanShapeRenderer, DrawImagePipe as sun_java2d_pipe_DrawImagePipe } from 'sun.java2d.pipe';
import { Permission as java_security_Permission } from 'java.security';

  export class SurfaceData extends java_lang_Object implements java_awt_Transparency, sun_java2d_DisposerTarget, sun_java2d_StateTrackable, sun_java2d_Surface {
pData: number;
valid: boolean;
surfaceLost: boolean;
surfaceType: sun_java2d_loops_SurfaceType;
colorModel: java_awt_image_ColorModel;
disposerReferent: java_lang_Object;
blitProxyKey: java_lang_Object;
stateDelegate: sun_java2d_StateTrackableDelegate;
static colorPrimitives: sun_java2d_pipe_LoopPipe;
static outlineTextRenderer: sun_java2d_pipe_TextPipe;
static solidTextRenderer: sun_java2d_pipe_TextPipe;
static aaTextRenderer: sun_java2d_pipe_TextPipe;
static lcdTextRenderer: sun_java2d_pipe_TextPipe;
static colorPipe: sun_java2d_pipe_AlphaColorPipe;
static colorViaShape: sun_java2d_pipe_PixelToShapeConverter;
static colorViaPgram: sun_java2d_pipe_PixelToParallelogramConverter;
static colorText: sun_java2d_pipe_TextPipe;
static clipColorPipe: sun_java2d_pipe_CompositePipe;
static clipColorText: sun_java2d_pipe_TextPipe;
static AAColorShape: sun_java2d_pipe_AAShapePipe;
static AAColorViaShape: sun_java2d_pipe_PixelToParallelogramConverter;
static AAColorViaPgram: sun_java2d_pipe_PixelToParallelogramConverter;
static AAClipColorShape: sun_java2d_pipe_AAShapePipe;
static AAClipColorViaShape: sun_java2d_pipe_PixelToParallelogramConverter;
static paintPipe: sun_java2d_pipe_CompositePipe;
static paintShape: sun_java2d_pipe_SpanShapeRenderer;
static paintViaShape: sun_java2d_pipe_PixelToShapeConverter;
static paintText: sun_java2d_pipe_TextPipe;
static clipPaintPipe: sun_java2d_pipe_CompositePipe;
static clipPaintText: sun_java2d_pipe_TextPipe;
static AAPaintShape: sun_java2d_pipe_AAShapePipe;
static AAPaintViaShape: sun_java2d_pipe_PixelToParallelogramConverter;
static AAClipPaintShape: sun_java2d_pipe_AAShapePipe;
static AAClipPaintViaShape: sun_java2d_pipe_PixelToParallelogramConverter;
static compPipe: sun_java2d_pipe_CompositePipe;
static compShape: sun_java2d_pipe_SpanShapeRenderer;
static compViaShape: sun_java2d_pipe_PixelToShapeConverter;
static compText: sun_java2d_pipe_TextPipe;
static clipCompPipe: sun_java2d_pipe_CompositePipe;
static clipCompText: sun_java2d_pipe_TextPipe;
static AACompShape: sun_java2d_pipe_AAShapePipe;
static AACompViaShape: sun_java2d_pipe_PixelToParallelogramConverter;
static AAClipCompShape: sun_java2d_pipe_AAShapePipe;
static AAClipCompViaShape: sun_java2d_pipe_PixelToParallelogramConverter;
static imagepipe: sun_java2d_pipe_DrawImagePipe;
static LOOP_UNKNOWN: number;
static LOOP_FOUND: number;
static LOOP_NOTFOUND: number;
haveLCDLoop: number;
havePgramXORLoop: number;
havePgramSolidLoop: number;
static loopcache: sun_java2d_loops_RenderCache;
static compPermission: java_security_Permission;
state: sun_java2dTrackable_State_State;
static primarySurfaceData: sun_java2d_SurfaceData;
defaultScaleX: number;
defaultScaleY: number;
stateTracker: sun_java2d_StateTracker;
deviceConfiguration: java_awt_GraphicsConfiguration;
raster: java_awt_image_Raster;
transparency: number;
disposerReferent: java_lang_Object;
renderLoops: sun_java2d_loops_RenderLoops;
surfaceType: sun_java2d_loops_SurfaceType;
sourceSurfaceData: sun_java2d_SurfaceData;
nativeOps: number;
destination: java_lang_Object;
replacement: sun_java2d_SurfaceData;
colorModel: java_awt_image_ColorModel;
bounds: java_awt_Rectangle;
isValid(): boolean;
getState(): sun_java2dTrackable_State_State;
flush(): void;
static isNull(arg0: sun_java2d_SurfaceData): boolean;
static getPrimarySurfaceData(arg0: java_awt_Image): sun_java2d_SurfaceData;
static restoreContents(arg0: java_awt_Image): sun_java2d_SurfaceData;
getDefaultScaleX(): number;
getDefaultScaleY(): number;
copyArea(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
getStateTracker(): sun_java2d_StateTracker;
getDeviceConfiguration(): java_awt_GraphicsConfiguration;
getRaster(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_image_Raster;
getTransparency(): number;
getDisposerReferent(): java_lang_Object;
getRenderLoops(arg0: sun_java2d_SunGraphics2D): sun_java2d_loops_RenderLoops;
getSurfaceType(): sun_java2d_loops_SurfaceType;
static makeRenderLoops(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_RenderLoops;
getSourceSurfaceData(arg0: java_awt_Image, arg1: number, arg2: sun_java2d_loops_CompositeType, arg3: java_awt_Color): sun_java2d_SurfaceData;
makeProxyFor(arg0: sun_java2d_SurfaceData): sun_java2d_SurfaceDataProxy;
setSurfaceLost(arg0: boolean): void;
isSurfaceLost(): boolean;
getNativeOps(): number;
canRenderLCDText(arg0: sun_java2d_SunGraphics2D): boolean;
canRenderParallelograms(arg0: sun_java2d_SunGraphics2D): boolean;
validatePipe(arg0: sun_java2d_SunGraphics2D): void;
useTightBBoxes(): boolean;
pixelFor(arg0: number): number;
pixelFor(arg0: java_awt_Color): number;
rgbFor(arg0: number): number;
markDirty(): void;
getDestination(): java_lang_Object;
getReplacement(): sun_java2d_SurfaceData;
invalidate(): void;
getColorModel(): java_awt_image_ColorModel;
getBounds(): java_awt_Rectangle;

  }
}//@ts-nocheck

declare module 'sun.java2d' {
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { Rectangle as java_awt_Rectangle, Shape as java_awt_Shape, Graphics as java_awt_Graphics, Color as java_awt_Color, Font as java_awt_Font, FontMetrics as java_awt_FontMetrics, Image as java_awt_Image, GraphicsConfiguration as java_awt_GraphicsConfiguration, Composite as java_awt_Composite, Paint as java_awt_Paint, Stroke as java_awt_Stroke, RenderingHints as java_awt_RenderingHints, Polygon as java_awt_Polygon, Graphics2D as java_awt_Graphics2D } from 'java.awt';
import { Region as sun_java2d_pipe_Region, PixelDrawPipe as sun_java2d_pipe_PixelDrawPipe, PixelFillPipe as sun_java2d_pipe_PixelFillPipe, DrawImagePipe as sun_java2d_pipe_DrawImagePipe, ShapeDrawPipe as sun_java2d_pipe_ShapeDrawPipe, TextPipe as sun_java2d_pipe_TextPipe, ValidatePipe as sun_java2d_pipe_ValidatePipe } from 'sun.java2d.pipe';
import { AttributedCharacterIterator as java_text_AttributedCharacterIterator } from 'java.text';
import { FontRenderContext as java_awt_font_FontRenderContext, GlyphVector as java_awt_font_GlyphVector } from 'java.awt.font';
import { ImageObserver as java_awt_image_ImageObserver, ColorModel as java_awt_image_ColorModel, RenderedImage as java_awt_image_RenderedImage, BufferedImage as java_awt_image_BufferedImage, BufferedImageOp as java_awt_image_BufferedImageOp } from 'java.awt.image';
import { FontInfo as sun_java2d_loops_FontInfo, MaskFill as sun_java2d_loops_MaskFill, RenderLoops as sun_java2d_loops_RenderLoops, CompositeType as sun_java2d_loops_CompositeType, Blit as sun_java2d_loops_Blit } from 'sun.java2d.loops';
import { RenderableImage as java_awt_image_renderable_RenderableImage } from 'java.awt.image.renderable';
import { Key as java_awt_RenderingHints_Key } from 'java.awt.RenderingHints';
import { Object as java_lang_Object, Class as java_lang_Class, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { Surface as sun_java2d_Surface, SurfaceData as sun_java2d_SurfaceData, DestSurfaceProvider as sun_java2d_DestSurfaceProvider } from 'sun.java2d';
import { ConstrainableGraphics as sun_awt_ConstrainableGraphics } from 'sun.awt';

  export class SunGraphics2D extends java_awt_Graphics2D implements sun_awt_ConstrainableGraphics, java_lang_Cloneable, sun_java2d_DestSurfaceProvider {
static PAINT_CUSTOM: number;
static PAINT_TEXTURE: number;
static PAINT_RAD_GRADIENT: number;
static PAINT_LIN_GRADIENT: number;
static PAINT_GRADIENT: number;
static PAINT_ALPHACOLOR: number;
static PAINT_OPAQUECOLOR: number;
static COMP_CUSTOM: number;
static COMP_XOR: number;
static COMP_ALPHA: number;
static COMP_ISCOPY: number;
static STROKE_CUSTOM: number;
static STROKE_WIDE: number;
static STROKE_THINDASHED: number;
static STROKE_THIN: number;
static TRANSFORM_GENERIC: number;
static TRANSFORM_TRANSLATESCALE: number;
static TRANSFORM_ANY_TRANSLATE: number;
static TRANSFORM_INT_TRANSLATE: number;
static TRANSFORM_ISIDENT: number;
static CLIP_SHAPE: number;
static CLIP_RECTANGULAR: number;
static CLIP_DEVICE: number;
eargb: number;
pixel: number;
surfaceData: sun_java2d_SurfaceData;
drawpipe: sun_java2d_pipe_PixelDrawPipe;
fillpipe: sun_java2d_pipe_PixelFillPipe;
imagepipe: sun_java2d_pipe_DrawImagePipe;
shapepipe: sun_java2d_pipe_ShapeDrawPipe;
textpipe: sun_java2d_pipe_TextPipe;
alphafill: sun_java2d_loops_MaskFill;
loops: sun_java2d_loops_RenderLoops;
imageComp: sun_java2d_loops_CompositeType;
paintState: number;
compositeState: number;
strokeState: number;
transformState: number;
clipState: number;
foregroundColor: java_awt_Color;
backgroundColor: java_awt_Color;
transform: java_awt_geom_AffineTransform;
transX: number;
transY: number;
static defaultStroke: java_awt_Stroke;
static defaultComposite: java_awt_Composite;
static defaultFont: java_awt_Font;
paint: java_awt_Paint;
stroke: java_awt_Stroke;
composite: java_awt_Composite;
font: java_awt_Font;
fontMetrics: java_awt_FontMetrics;
renderHint: number;
antialiasHint: number;
textAntialiasHint: number;
fractionalMetricsHint: number;
lcdTextContrast: number;
static lcdTextContrastDefaultValue: number;
interpolationHint: number;
strokeHint: number;
interpolationType: number;
hints: java_awt_RenderingHints;
constrainClip: sun_java2d_pipe_Region;
constrainX: number;
constrainY: number;
clipRegion: sun_java2d_pipe_Region;
usrClip: java_awt_Shape;
devClip: sun_java2d_pipe_Region;
resolutionVariantHint: number;
validFontInfo: boolean;
fontInfo: sun_java2d_loops_FontInfo;
glyphVectorFontInfo: sun_java2d_loops_FontInfo;
glyphVectorFRC: java_awt_font_FontRenderContext;
static slowTextTransformMask: number;
static invalidpipe: sun_java2d_pipe_ValidatePipe;
static IDENT_MATRIX: number[];
static IDENT_ATX: java_awt_geom_AffineTransform;
static MINALLOCATED: number;
static TEXTARRSIZE: number;
static textTxArr: double[][];
static textAtArr: java_awt_geom_AffineTransform[];
static NON_UNIFORM_SCALE_MASK: number;
static MinPenSizeAA: number;
static MinPenSizeAASquared: number;
static MinPenSizeSquared: number;
static NON_RECTILINEAR_TRANSFORM_MASK: number;
lastCAblit: sun_java2d_loops_Blit;
lastCAcomp: java_awt_Composite;
cachedFRC: java_awt_font_FontRenderContext;
static $assertionsDisabled: boolean;
font: java_awt_Font;
fontMetrics: java_awt_FontMetrics;
fontMetrics: java_awt_FontMetrics;
clipBounds: java_awt_Rectangle;
clipBounds: java_awt_Rectangle;
clip: java_awt_Shape;
transform: java_awt_geom_AffineTransform;
fontRenderContext: java_awt_font_FontRenderContext;
compClip: sun_java2d_pipe_Region;
gVFontInfo: sun_java2d_loops_FontInfo;
deviceColorModel: java_awt_image_ColorModel;
deviceConfiguration: java_awt_GraphicsConfiguration;
renderingHint: java_lang_Object;
renderingHints: java_awt_RenderingHints;
paint: java_awt_Paint;
composite: java_awt_Composite;
background: java_awt_Color;
stroke: java_awt_Stroke;
destSurface: sun_java2d_Surface;
fontInfo: sun_java2d_loops_FontInfo;
surfaceData: sun_java2d_SurfaceData;
color: java_awt_Color;
destination: java_lang_Object;
clipRect: java_awt_Rectangle;
class: java_lang_Class<java_lang_Object>;
dispose(): void;
transform(arg0: java_awt_geom_AffineTransform): void;
hit(arg0: java_awt_Rectangle, arg1: java_awt_Shape, arg2: boolean): boolean;
finalize(): void;
fill(arg0: java_awt_Shape): void;
create(): java_awt_Graphics;
scale(arg0: number, arg1: number): void;
rotate(arg0: number, arg1: number, arg2: number): void;
rotate(arg0: number): void;
constrain(arg0: number, arg1: number, arg2: number, arg3: number): void;
constrain(arg0: number, arg1: number, arg2: number, arg3: number, arg4: sun_java2d_pipe_Region): void;
setPaintMode(): void;
setXORMode(arg0: java_awt_Color): void;
getFont(): java_awt_Font;
setFont(arg0: java_awt_Font): void;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getFontMetrics(): java_awt_FontMetrics;
getClipBounds(): java_awt_Rectangle;
getClipBounds(arg0: java_awt_Rectangle): java_awt_Rectangle;
clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
setClip(arg0: java_awt_Shape): void;
setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
getClip(): java_awt_Shape;
copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
drawPolyline(arg0: number[], arg1: number[], arg2: number): void;
drawPolygon(arg0: number[], arg1: number[], arg2: number): void;
fillPolygon(arg0: number[], arg1: number[], arg2: number): void;
drawString(arg0: java_text_AttributedCharacterIterator, arg1: number, arg2: number): void;
drawString(arg0: java_text_AttributedCharacterIterator, arg1: number, arg2: number): void;
drawString(arg0: string, arg1: number, arg2: number): void;
drawString(arg0: string, arg1: number, arg2: number): void;
drawChars(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): void;
drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
getTransform(): java_awt_geom_AffineTransform;
setTransform(arg0: java_awt_geom_AffineTransform): void;
getFontRenderContext(): java_awt_font_FontRenderContext;
clip(arg0: java_awt_Shape): void;
copyImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_awt_Color, arg8: java_awt_image_ImageObserver): boolean;
getCompClip(): sun_java2d_pipe_Region;
getGVFontInfo(arg0: java_awt_Font, arg1: java_awt_font_FontRenderContext): sun_java2d_loops_FontInfo;
untransformShape(arg0: java_awt_Shape): java_awt_Shape;
getDeviceColorModel(): java_awt_image_ColorModel;
cloneTransform(): java_awt_geom_AffineTransform;
draw(arg0: java_awt_Shape): void;
drawRenderedImage(arg0: java_awt_image_RenderedImage, arg1: java_awt_geom_AffineTransform): void;
drawRenderableImage(arg0: java_awt_image_renderable_RenderableImage, arg1: java_awt_geom_AffineTransform): void;
drawGlyphVector(arg0: java_awt_font_GlyphVector, arg1: number, arg2: number): void;
getDeviceConfiguration(): java_awt_GraphicsConfiguration;
setComposite(arg0: java_awt_Composite): void;
setPaint(arg0: java_awt_Paint): void;
setStroke(arg0: java_awt_Stroke): void;
setRenderingHint(arg0: java_awt_RenderingHints_Key, arg1: java_lang_Object): void;
getRenderingHint(arg0: java_awt_RenderingHints_Key): java_lang_Object;
setRenderingHints(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
addRenderingHints(arg0: java_util_Map<java_lang_Object, java_lang_Object>): void;
getRenderingHints(): java_awt_RenderingHints;
getPaint(): java_awt_Paint;
getComposite(): java_awt_Composite;
setBackground(arg0: java_awt_Color): void;
getBackground(): java_awt_Color;
getStroke(): java_awt_Stroke;
setDevClip(arg0: java_awt_Rectangle): void;
setDevClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
checkFontInfo(arg0: sun_java2d_loops_FontInfo, arg1: java_awt_Font, arg2: java_awt_font_FontRenderContext): sun_java2d_loops_FontInfo;
static isRotated(arg0: number[]): boolean;
getDestSurface(): sun_java2d_Surface;
validatePipe(): void;
getFontInfo(): sun_java2d_loops_FontInfo;
getSurfaceData(): sun_java2d_SurfaceData;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java_awt_Color, arg10: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: java_awt_geom_AffineTransform, arg2: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_image_BufferedImage, arg1: java_awt_image_BufferedImageOp, arg2: number, arg3: number): void;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java_awt_Color, arg6: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_image_ImageObserver): boolean;
drawImage(arg0: java_awt_Image, arg1: number, arg2: number, arg3: java_awt_Color, arg4: java_awt_image_ImageObserver): boolean;
getColor(): java_awt_Color;
getDestination(): java_lang_Object;
shear(arg0: number, arg1: number): void;
translate(arg0: number, arg1: number): void;
translate(arg0: number, arg1: number): void;
setColor(arg0: java_awt_Color): void;
toString(): string;
create(arg0: number, arg1: number, arg2: number, arg3: number): java_awt_Graphics;
drawPolygon(arg0: java_awt_Polygon): void;
fillPolygon(arg0: java_awt_Polygon): void;
getClipRect(): java_awt_Rectangle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: sun_java2d_SurfaceData, arg1: java_awt_Color, arg2: java_awt_Color, arg3: java_awt_Font);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';
import { Font as java_awt_Font } from 'java.awt';
import { Font2D as sun_font_Font2D, FontStrike as sun_font_FontStrike } from 'sun.font';

  export class FontInfo extends java_lang_Object implements java_lang_Cloneable {
font: java_awt_Font;
font2D: sun_font_Font2D;
fontStrike: sun_font_FontStrike;
devTx: number[];
glyphTx: number[];
pixelHeight: number;
originX: number;
originY: number;
aaHint: number;
lcdRGBOrder: boolean;
lcdSubPixPos: boolean;
toString(): string;
clone(): java_lang_Object;
mtx(arg0: number[]): string;
constructor();
  }
}//@ts-nocheck

declare module 'sun.java2d' {


  export class Surface {



  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';

  export class PixelDrawPipe {

drawLine(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRoundRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
drawOval(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawArc(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
drawPolyline(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
drawPolygon(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';

  export class PixelFillPipe {

fillRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillRoundRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
fillOval(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillArc(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
fillPolygon(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { Image as java_awt_Image, Color as java_awt_Color } from 'java.awt';
import { ImageObserver as java_awt_image_ImageObserver, BufferedImage as java_awt_image_BufferedImage, BufferedImageOp as java_awt_image_BufferedImageOp } from 'java.awt.image';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';

  export class DrawImagePipe {

copyImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: number, arg3: number, arg4: java_awt_Color, arg5: java_awt_image_ImageObserver): boolean;
copyImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: java_awt_Color, arg9: java_awt_image_ImageObserver): boolean;
scaleImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: java_awt_Color, arg11: java_awt_image_ImageObserver): boolean;
scaleImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: java_awt_Color, arg7: java_awt_image_ImageObserver): boolean;
transformImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: java_awt_geom_AffineTransform, arg3: java_awt_image_ImageObserver): boolean;
transformImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_image_BufferedImage, arg2: java_awt_image_BufferedImageOp, arg3: number, arg4: number): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { Shape as java_awt_Shape } from 'java.awt';

  export class ShapeDrawPipe {

fill(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
draw(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { GlyphVector as java_awt_font_GlyphVector } from 'java.awt.font';

  export class TextPipe {

drawString(arg0: sun_java2d_SunGraphics2D, arg1: string, arg2: number, arg3: number): void;
drawChars(arg0: sun_java2d_SunGraphics2D, arg1: string[], arg2: number, arg3: number, arg4: number, arg5: number): void;
drawGlyphVector(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_font_GlyphVector, arg2: number, arg3: number): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { Composite as java_awt_Composite } from 'java.awt';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, MaskFill as sun_java2d_loops_MaskFill, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, RenderCache as sun_java2d_loops_RenderCache } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class MaskFill extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static fillPgramSignature: string;
static drawPgramSignature: string;
static primTypeID: number;
static fillcache: sun_java2d_loops_RenderCache;
static fromCache: sun_java2d_loops_MaskFill;
class: java_lang_Class<java_lang_Object>;
MaskFill(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: java_awt_Composite, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: number): void;
FillAAPgram(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: java_awt_Composite, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
DrawAAPgram(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: java_awt_Composite, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
static locatePrim(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_MaskFill;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
canDoParallelograms(): boolean;
static getFromCache(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_MaskFill;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_MaskFill;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { SurfaceType as sun_java2d_loops_SurfaceType } from 'sun.java2d.loops';
import { PixelConverter as sun_awt_image_PixelConverter } from 'sun.awt.image';
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { HashMap as java_util_HashMap } from 'java.util';

  export class SurfaceType extends java_lang_Object {
static unusedUID: number;
static surfaceUIDMap: java_util_HashMap<string, java_lang_Integer>;
static DESC_ANY: string;
static DESC_INT_RGB: string;
static DESC_INT_ARGB: string;
static DESC_INT_ARGB_PRE: string;
static DESC_INT_BGR: string;
static DESC_3BYTE_BGR: string;
static DESC_4BYTE_ABGR: string;
static DESC_4BYTE_ABGR_PRE: string;
static DESC_USHORT_565_RGB: string;
static DESC_USHORT_555_RGB: string;
static DESC_USHORT_555_RGBx: string;
static DESC_USHORT_4444_ARGB: string;
static DESC_BYTE_GRAY: string;
static DESC_USHORT_INDEXED: string;
static DESC_USHORT_GRAY: string;
static DESC_BYTE_BINARY: string;
static DESC_BYTE_INDEXED: string;
static DESC_ANY_INT: string;
static DESC_ANY_SHORT: string;
static DESC_ANY_BYTE: string;
static DESC_ANY_3BYTE: string;
static DESC_ANY_4BYTE: string;
static DESC_ANY_INT_DCM: string;
static DESC_INT_RGBx: string;
static DESC_INT_BGRx: string;
static DESC_3BYTE_RGB: string;
static DESC_INT_ARGB_BM: string;
static DESC_BYTE_INDEXED_BM: string;
static DESC_BYTE_INDEXED_OPAQUE: string;
static DESC_INDEX8_GRAY: string;
static DESC_INDEX12_GRAY: string;
static DESC_BYTE_BINARY_1BIT: string;
static DESC_BYTE_BINARY_2BIT: string;
static DESC_BYTE_BINARY_4BIT: string;
static DESC_ANY_PAINT: string;
static DESC_ANY_COLOR: string;
static DESC_OPAQUE_COLOR: string;
static DESC_GRADIENT_PAINT: string;
static DESC_OPAQUE_GRADIENT_PAINT: string;
static DESC_TEXTURE_PAINT: string;
static DESC_OPAQUE_TEXTURE_PAINT: string;
static DESC_LINEAR_GRADIENT_PAINT: string;
static DESC_OPAQUE_LINEAR_GRADIENT_PAINT: string;
static DESC_RADIAL_GRADIENT_PAINT: string;
static DESC_OPAQUE_RADIAL_GRADIENT_PAINT: string;
static Any: sun_java2d_loops_SurfaceType;
static AnyInt: sun_java2d_loops_SurfaceType;
static AnyShort: sun_java2d_loops_SurfaceType;
static AnyByte: sun_java2d_loops_SurfaceType;
static AnyByteBinary: sun_java2d_loops_SurfaceType;
static Any3Byte: sun_java2d_loops_SurfaceType;
static Any4Byte: sun_java2d_loops_SurfaceType;
static AnyDcm: sun_java2d_loops_SurfaceType;
static Custom: sun_java2d_loops_SurfaceType;
static IntRgb: sun_java2d_loops_SurfaceType;
static IntArgb: sun_java2d_loops_SurfaceType;
static IntArgbPre: sun_java2d_loops_SurfaceType;
static IntBgr: sun_java2d_loops_SurfaceType;
static ThreeByteBgr: sun_java2d_loops_SurfaceType;
static FourByteAbgr: sun_java2d_loops_SurfaceType;
static FourByteAbgrPre: sun_java2d_loops_SurfaceType;
static Ushort565Rgb: sun_java2d_loops_SurfaceType;
static Ushort555Rgb: sun_java2d_loops_SurfaceType;
static Ushort555Rgbx: sun_java2d_loops_SurfaceType;
static Ushort4444Argb: sun_java2d_loops_SurfaceType;
static UshortIndexed: sun_java2d_loops_SurfaceType;
static ByteGray: sun_java2d_loops_SurfaceType;
static UshortGray: sun_java2d_loops_SurfaceType;
static ByteBinary1Bit: sun_java2d_loops_SurfaceType;
static ByteBinary2Bit: sun_java2d_loops_SurfaceType;
static ByteBinary4Bit: sun_java2d_loops_SurfaceType;
static ByteIndexed: sun_java2d_loops_SurfaceType;
static IntRgbx: sun_java2d_loops_SurfaceType;
static IntBgrx: sun_java2d_loops_SurfaceType;
static ThreeByteRgb: sun_java2d_loops_SurfaceType;
static IntArgbBm: sun_java2d_loops_SurfaceType;
static ByteIndexedBm: sun_java2d_loops_SurfaceType;
static ByteIndexedOpaque: sun_java2d_loops_SurfaceType;
static Index8Gray: sun_java2d_loops_SurfaceType;
static Index12Gray: sun_java2d_loops_SurfaceType;
static AnyPaint: sun_java2d_loops_SurfaceType;
static AnyColor: sun_java2d_loops_SurfaceType;
static OpaqueColor: sun_java2d_loops_SurfaceType;
static GradientPaint: sun_java2d_loops_SurfaceType;
static OpaqueGradientPaint: sun_java2d_loops_SurfaceType;
static LinearGradientPaint: sun_java2d_loops_SurfaceType;
static OpaqueLinearGradientPaint: sun_java2d_loops_SurfaceType;
static RadialGradientPaint: sun_java2d_loops_SurfaceType;
static OpaqueRadialGradientPaint: sun_java2d_loops_SurfaceType;
static TexturePaint: sun_java2d_loops_SurfaceType;
static OpaqueTexturePaint: sun_java2d_loops_SurfaceType;
uniqueID: number;
desc: string;
next: sun_java2d_loops_SurfaceType;
pixelConverter: sun_awt_image_PixelConverter;
descriptor: string;
superType: sun_java2d_loops_SurfaceType;
pixelConverter: sun_awt_image_PixelConverter;
alphaMask: number;
uniqueID: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getDescriptor(): string;
deriveSubType(arg0: string): sun_java2d_loops_SurfaceType;
deriveSubType(arg0: string, arg1: sun_awt_image_PixelConverter): sun_java2d_loops_SurfaceType;
static makeUniqueID(arg0: string): number;
getSuperType(): sun_java2d_loops_SurfaceType;
getPixelConverter(): sun_awt_image_PixelConverter;
getAlphaMask(): number;
pixelFor(arg0: number, arg1: java_awt_image_ColorModel): number;
rgbFor(arg0: number, arg1: java_awt_image_ColorModel): number;
getUniqueID(): number;

  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { CompositeType as sun_java2d_loops_CompositeType } from 'sun.java2d.loops';
import { AlphaComposite as java_awt_AlphaComposite } from 'java.awt';
import { HashMap as java_util_HashMap } from 'java.util';

  export class CompositeType extends java_lang_Object {
static unusedUID: number;
static compositeUIDMap: java_util_HashMap<string, java_lang_Integer>;
static DESC_ANY: string;
static DESC_XOR: string;
static DESC_CLEAR: string;
static DESC_SRC: string;
static DESC_DST: string;
static DESC_SRC_OVER: string;
static DESC_DST_OVER: string;
static DESC_SRC_IN: string;
static DESC_DST_IN: string;
static DESC_SRC_OUT: string;
static DESC_DST_OUT: string;
static DESC_SRC_ATOP: string;
static DESC_DST_ATOP: string;
static DESC_ALPHA_XOR: string;
static DESC_SRC_NO_EA: string;
static DESC_SRC_OVER_NO_EA: string;
static DESC_ANY_ALPHA: string;
static Any: sun_java2d_loops_CompositeType;
static General: sun_java2d_loops_CompositeType;
static AnyAlpha: sun_java2d_loops_CompositeType;
static Xor: sun_java2d_loops_CompositeType;
static Clear: sun_java2d_loops_CompositeType;
static Src: sun_java2d_loops_CompositeType;
static Dst: sun_java2d_loops_CompositeType;
static SrcOver: sun_java2d_loops_CompositeType;
static DstOver: sun_java2d_loops_CompositeType;
static SrcIn: sun_java2d_loops_CompositeType;
static DstIn: sun_java2d_loops_CompositeType;
static SrcOut: sun_java2d_loops_CompositeType;
static DstOut: sun_java2d_loops_CompositeType;
static SrcAtop: sun_java2d_loops_CompositeType;
static DstAtop: sun_java2d_loops_CompositeType;
static AlphaXor: sun_java2d_loops_CompositeType;
static SrcNoEa: sun_java2d_loops_CompositeType;
static SrcOverNoEa: sun_java2d_loops_CompositeType;
static OpaqueSrcOverNoEa: sun_java2d_loops_CompositeType;
uniqueID: number;
desc: string;
next: sun_java2d_loops_CompositeType;
descriptor: string;
superType: sun_java2d_loops_CompositeType;
uniqueID: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getDescriptor(): string;
deriveSubType(arg0: string): sun_java2d_loops_CompositeType;
static makeUniqueID(arg0: string): number;
getSuperType(): sun_java2d_loops_CompositeType;
static forAlphaComposite(arg0: java_awt_AlphaComposite): sun_java2d_loops_CompositeType;
getUniqueID(): number;
isDerivedFrom(arg0: sun_java2d_loops_CompositeType): boolean;

  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive } from 'sun.java2d.loops';
import { Object as java_lang_Object } from 'java.lang';
import { Field as java_lang_reflect_Field } from 'java.lang.reflect';
import { HashMap as java_util_HashMap } from 'java.util';
import { PrintStream as java_io_PrintStream } from 'java.io';

  export class GraphicsPrimitive extends java_lang_Object {
methodSignature: string;
uniqueID: number;
static unusedPrimID: number;
sourceType: sun_java2d_loops_SurfaceType;
compositeType: sun_java2d_loops_CompositeType;
destType: sun_java2d_loops_SurfaceType;
pNativePrim: number;
static traceMap: java_util_HashMap<java_lang_Object, number[]>;
static traceflags: number;
static tracefile: string;
static traceout: java_io_PrintStream;
static TRACELOG: number;
static TRACETIMESTAMP: number;
static TRACECOUNTS: number;
cachedname: string;
signature: string;
compositeType: sun_java2d_loops_CompositeType;
nativePrim: number;
primTypeID: number;
sourceType: sun_java2d_loops_SurfaceType;
destType: sun_java2d_loops_SurfaceType;
uniqueID: number;
toString(): string;
getSignature(): string;
static makeUniqueID(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType): number;
getCompositeType(): sun_java2d_loops_CompositeType;
getNativePrim(): number;
static makePrimTypeID(): number;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
getPrimTypeID(): number;
getSourceType(): sun_java2d_loops_SurfaceType;
getDestType(): sun_java2d_loops_SurfaceType;
satisfies(arg0: string, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType): boolean;
static tracingEnabled(): boolean;
static tracePrimitive(arg0: java_lang_Object): void;
static simplename(arg0: sun_java2d_loops_CompositeType): string;
static simplename(arg0: sun_java2d_loops_SurfaceType): string;
static simplename(arg0: java_lang_reflect_Field[], arg1: java_lang_Object): string;
getUniqueID(): number;

  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType } from 'sun.java2d.loops';
import { Object as java_lang_Object } from 'java.lang';
import { Entry as sun_java2d_loops_RenderCache_Entry } from 'sun.java2d.loops.RenderCache';

  export class RenderCache extends java_lang_Object {
entries: sun_java2d_loops_RenderCache_Entry[];
get(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): java_lang_Object;
put(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType, arg3: java_lang_Object): void;
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops.RenderCache' {
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, RenderCache as sun_java2d_loops_RenderCache } from 'sun.java2d.loops';
import { Object as java_lang_Object } from 'java.lang';

  export class Entry extends java_lang_Object {
src: sun_java2d_loops_SurfaceType;
comp: sun_java2d_loops_CompositeType;
dst: sun_java2d_loops_SurfaceType;
value: java_lang_Object;
this$0: sun_java2d_loops_RenderCache;
value: java_lang_Object;
matches(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): boolean;
getValue(): java_lang_Object;
constructor(arg0: sun_java2d_loops_RenderCache, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType, arg4: java_lang_Object);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { DrawLine as sun_java2d_loops_DrawLine, FillRect as sun_java2d_loops_FillRect, DrawRect as sun_java2d_loops_DrawRect, DrawPolygons as sun_java2d_loops_DrawPolygons, DrawPath as sun_java2d_loops_DrawPath, FillPath as sun_java2d_loops_FillPath, FillSpans as sun_java2d_loops_FillSpans, FillParallelogram as sun_java2d_loops_FillParallelogram, DrawParallelogram as sun_java2d_loops_DrawParallelogram, DrawGlyphList as sun_java2d_loops_DrawGlyphList, DrawGlyphListAA as sun_java2d_loops_DrawGlyphListAA, DrawGlyphListLCD as sun_java2d_loops_DrawGlyphListLCD } from 'sun.java2d.loops';
import { Object as java_lang_Object } from 'java.lang';

  export class RenderLoops extends java_lang_Object {
static primTypeID: number;
drawLineLoop: sun_java2d_loops_DrawLine;
fillRectLoop: sun_java2d_loops_FillRect;
drawRectLoop: sun_java2d_loops_DrawRect;
drawPolygonsLoop: sun_java2d_loops_DrawPolygons;
drawPathLoop: sun_java2d_loops_DrawPath;
fillPathLoop: sun_java2d_loops_FillPath;
fillSpansLoop: sun_java2d_loops_FillSpans;
fillParallelogramLoop: sun_java2d_loops_FillParallelogram;
drawParallelogramLoop: sun_java2d_loops_DrawParallelogram;
drawGlyphListLoop: sun_java2d_loops_DrawGlyphList;
drawGlyphListAALoop: sun_java2d_loops_DrawGlyphListAA;
drawGlyphListLCDLoop: sun_java2d_loops_DrawGlyphListLCD;

constructor();
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, DrawLine as sun_java2d_loops_DrawLine } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DrawLine extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
DrawLine(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number, arg4: number, arg5: number): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_DrawLine;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, FillRect as sun_java2d_loops_FillRect } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class FillRect extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
FillRect(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number, arg4: number, arg5: number): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_FillRect;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, DrawRect as sun_java2d_loops_DrawRect } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DrawRect extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
DrawRect(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number, arg4: number, arg5: number): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_DrawRect;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, DrawPolygons as sun_java2d_loops_DrawPolygons } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DrawPolygons extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
DrawPolygons(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: number[], arg3: number[], arg4: number[], arg5: number, arg6: number, arg7: number, arg8: boolean): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_DrawPolygons;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { Float as java_awt_geom_Path2D_Float } from 'java.awt.geom.Path2D';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, DrawPath as sun_java2d_loops_DrawPath } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DrawPath extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
DrawPath(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number, arg4: java_awt_geom_Path2D_Float): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_DrawPath;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { Float as java_awt_geom_Path2D_Float } from 'java.awt.geom.Path2D';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, FillPath as sun_java2d_loops_FillPath } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class FillPath extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
FillPath(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number, arg4: java_awt_geom_Path2D_Float): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_FillPath;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { SpanIterator as sun_java2d_pipe_SpanIterator } from 'sun.java2d.pipe';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, FillSpans as sun_java2d_loops_FillSpans } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class FillSpans extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
FillSpans(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: sun_java2d_pipe_SpanIterator): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_FillSpans;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, FillParallelogram as sun_java2d_loops_FillParallelogram } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class FillParallelogram extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
FillParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_FillParallelogram;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, DrawParallelogram as sun_java2d_loops_DrawParallelogram } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DrawParallelogram extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
DrawParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_DrawParallelogram;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { GlyphList as sun_font_GlyphList } from 'sun.font';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, DrawGlyphList as sun_java2d_loops_DrawGlyphList } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DrawGlyphList extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
DrawGlyphList(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: sun_font_GlyphList): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_DrawGlyphList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { GlyphList as sun_font_GlyphList } from 'sun.font';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, DrawGlyphListAA as sun_java2d_loops_DrawGlyphListAA } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DrawGlyphListAA extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
DrawGlyphListAA(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: sun_font_GlyphList): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_DrawGlyphListAA;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { GlyphList as sun_font_GlyphList } from 'sun.font';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, DrawGlyphListLCD as sun_java2d_loops_DrawGlyphListLCD } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class DrawGlyphListLCD extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
class: java_lang_Class<java_lang_Object>;
DrawGlyphListLCD(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_SurfaceData, arg2: sun_font_GlyphList): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_DrawGlyphListLCD;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { Shape as java_awt_Shape, Image as java_awt_Image, Color as java_awt_Color } from 'java.awt';
import { ImageObserver as java_awt_image_ImageObserver, BufferedImage as java_awt_image_BufferedImage, BufferedImageOp as java_awt_image_BufferedImageOp } from 'java.awt.image';
import { AffineTransform as java_awt_geom_AffineTransform } from 'java.awt.geom';
import { GlyphVector as java_awt_font_GlyphVector } from 'java.awt.font';
import { Object as java_lang_Object } from 'java.lang';
import { PixelDrawPipe as sun_java2d_pipe_PixelDrawPipe, PixelFillPipe as sun_java2d_pipe_PixelFillPipe, ShapeDrawPipe as sun_java2d_pipe_ShapeDrawPipe, TextPipe as sun_java2d_pipe_TextPipe, DrawImagePipe as sun_java2d_pipe_DrawImagePipe } from 'sun.java2d.pipe';

  export class ValidatePipe extends java_lang_Object implements sun_java2d_pipe_PixelDrawPipe, sun_java2d_pipe_PixelFillPipe, sun_java2d_pipe_ShapeDrawPipe, sun_java2d_pipe_TextPipe, sun_java2d_pipe_DrawImagePipe {

fill(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
validate(arg0: sun_java2d_SunGraphics2D): boolean;
drawLine(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRoundRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
fillRoundRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
drawOval(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillOval(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawArc(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
fillArc(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
drawPolyline(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
drawPolygon(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
fillPolygon(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
drawString(arg0: sun_java2d_SunGraphics2D, arg1: string, arg2: number, arg3: number): void;
drawChars(arg0: sun_java2d_SunGraphics2D, arg1: string[], arg2: number, arg3: number, arg4: number, arg5: number): void;
copyImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: number, arg3: number, arg4: java_awt_Color, arg5: java_awt_image_ImageObserver): boolean;
copyImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: java_awt_Color, arg9: java_awt_image_ImageObserver): boolean;
scaleImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: java_awt_Color, arg7: java_awt_image_ImageObserver): boolean;
scaleImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: java_awt_Color, arg11: java_awt_image_ImageObserver): boolean;
transformImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Image, arg2: java_awt_geom_AffineTransform, arg3: java_awt_image_ImageObserver): boolean;
transformImage(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_image_BufferedImage, arg2: java_awt_image_BufferedImageOp, arg3: number, arg4: number): void;
draw(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
drawGlyphVector(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_font_GlyphVector, arg2: number, arg3: number): void;
constructor();
  }
}//@ts-nocheck

declare module 'sun.java2d.loops' {
import { SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { Composite as java_awt_Composite } from 'java.awt';
import { Region as sun_java2d_pipe_Region } from 'sun.java2d.pipe';
import { SurfaceType as sun_java2d_loops_SurfaceType, CompositeType as sun_java2d_loops_CompositeType, GraphicsPrimitive as sun_java2d_loops_GraphicsPrimitive, Blit as sun_java2d_loops_Blit, RenderCache as sun_java2d_loops_RenderCache } from 'sun.java2d.loops';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class Blit extends sun_java2d_loops_GraphicsPrimitive {
static methodSignature: string;
static primTypeID: number;
static blitcache: sun_java2d_loops_RenderCache;
static fromCache: sun_java2d_loops_Blit;
class: java_lang_Class<java_lang_Object>;
Blit(arg0: sun_java2d_SurfaceData, arg1: sun_java2d_SurfaceData, arg2: java_awt_Composite, arg3: sun_java2d_pipe_Region, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
makePrimitive(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_GraphicsPrimitive;
traceWrap(): sun_java2d_loops_GraphicsPrimitive;
static getFromCache(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_Blit;
static locate(arg0: sun_java2d_loops_SurfaceType, arg1: sun_java2d_loops_CompositeType, arg2: sun_java2d_loops_SurfaceType): sun_java2d_loops_Blit;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: number, arg1: sun_java2d_loops_SurfaceType, arg2: sun_java2d_loops_CompositeType, arg3: sun_java2d_loops_SurfaceType);
  }
}//@ts-nocheck

declare module 'sun.java2d' {
import { Surface as sun_java2d_Surface } from 'sun.java2d';

  export class DestSurfaceProvider {
destSurface: sun_java2d_Surface;
getDestSurface(): sun_java2d_Surface;

  }
}//@ts-nocheck

declare module 'sun.java2d' {
import { SurfaceData as sun_java2d_SurfaceData, StateTracker as sun_java2d_StateTracker, SurfaceDataProxy as sun_java2d_SurfaceDataProxy } from 'sun.java2d';
import { CompositeType as sun_java2d_loops_CompositeType } from 'sun.java2d.loops';
import { Color as java_awt_Color } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { DisplayChangedListener as sun_awt_DisplayChangedListener } from 'sun.awt';
import { FlushableCacheData as sun_awt_image_SurfaceManager_FlushableCacheData } from 'sun.awt.image.SurfaceManager';

  export class SurfaceDataProxy extends java_lang_Object implements sun_awt_DisplayChangedListener, sun_awt_image_SurfaceManager_FlushableCacheData {
static cachingAllowed: boolean;
static defaultThreshold: number;
static UNCACHED: sun_java2d_SurfaceDataProxy;
threshold: number;
srcTracker: sun_java2d_StateTracker;
numtries: number;
cachedSD: sun_java2d_SurfaceData;
cacheTracker: sun_java2d_StateTracker;
valid: boolean;
retryTracker: sun_java2d_StateTracker;
isValid(): boolean;
flush(): void;
flush(arg0: boolean): boolean;
isAccelerated(): boolean;
displayChanged(): void;
paletteChanged(): void;
isSupportedOperation(arg0: sun_java2d_SurfaceData, arg1: number, arg2: sun_java2d_loops_CompositeType, arg3: java_awt_Color): boolean;
validateSurfaceData(arg0: sun_java2d_SurfaceData, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number): sun_java2d_SurfaceData;
getRetryTracker(arg0: sun_java2d_SurfaceData): sun_java2d_StateTracker;
updateSurfaceData(arg0: sun_java2d_SurfaceData, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number): void;
updateSurfaceDataBg(arg0: sun_java2d_SurfaceData, arg1: sun_java2d_SurfaceData, arg2: number, arg3: number, arg4: java_awt_Color): void;
static isCachingAllowed(): boolean;
invalidate(): void;
replaceData(arg0: sun_java2d_SurfaceData, arg1: number, arg2: sun_java2d_loops_CompositeType, arg3: java_awt_Color): sun_java2d_SurfaceData;
constructor();
constructor(arg0: number);
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { Shape as java_awt_Shape } from 'java.awt';
import { ShapeSpanIterator as sun_java2d_pipe_ShapeSpanIterator, RenderingEngine as sun_java2d_pipe_RenderingEngine, PixelDrawPipe as sun_java2d_pipe_PixelDrawPipe, PixelFillPipe as sun_java2d_pipe_PixelFillPipe, ParallelogramPipe as sun_java2d_pipe_ParallelogramPipe, ShapeDrawPipe as sun_java2d_pipe_ShapeDrawPipe, LoopBasedPipe as sun_java2d_pipe_LoopBasedPipe } from 'sun.java2d.pipe';
import { Object as java_lang_Object } from 'java.lang';

  export class LoopPipe extends java_lang_Object implements sun_java2d_pipe_PixelDrawPipe, sun_java2d_pipe_PixelFillPipe, sun_java2d_pipe_ParallelogramPipe, sun_java2d_pipe_ShapeDrawPipe, sun_java2d_pipe_LoopBasedPipe {
static RenderEngine: sun_java2d_pipe_RenderingEngine;
static fillSSI: sun_java2d_pipe_ShapeSpanIterator;
static strokeSpans: sun_java2d_pipe_ShapeSpanIterator;
fill(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
drawLine(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRoundRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
fillRoundRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
drawOval(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillOval(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawArc(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
fillArc(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
drawPolyline(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
drawPolygon(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
fillPolygon(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
static getFillSSI(arg0: sun_java2d_SunGraphics2D): sun_java2d_pipe_ShapeSpanIterator;
static getStrokeSpans(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): sun_java2d_pipe_ShapeSpanIterator;
fillParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
drawParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
draw(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
constructor();
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { Region as sun_java2d_pipe_Region, SpanIterator as sun_java2d_pipe_SpanIterator } from 'sun.java2d.pipe';
import { Rectangle as java_awt_Rectangle } from 'java.awt';
import { PathIterator as java_awt_geom_PathIterator } from 'java.awt.geom';
import { Object as java_lang_Object } from 'java.lang';
import { PathConsumer2D as sun_awt_geom_PathConsumer2D } from 'sun.awt.geom';

  export class ShapeSpanIterator extends java_lang_Object implements sun_java2d_pipe_SpanIterator, sun_awt_geom_PathConsumer2D {
pData: number;
pathBox: void;
nativeIterator: number;
nativeConsumer: number;
dispose(): void;
static initIDs(): void;
appendPoly(arg0: number[], arg1: number[], arg2: number, arg3: number, arg4: number): void;
setRule(arg0: number): void;
lineTo(arg0: number, arg1: number): void;
quadTo(arg0: number, arg1: number, arg2: number, arg3: number): void;
curveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
closePath(): void;
pathDone(): void;
setOutputArea(arg0: sun_java2d_pipe_Region): void;
setOutputArea(arg0: java_awt_Rectangle): void;
getPathBox(arg0: number[]): void;
nextSpan(arg0: number[]): boolean;
intersectClipBox(arg0: number, arg1: number, arg2: number, arg3: number): void;
skipDownTo(arg0: number): void;
getNativeIterator(): number;
setOutputAreaXYWH(arg0: number, arg1: number, arg2: number, arg3: number): void;
setOutputAreaXYXY(arg0: number, arg1: number, arg2: number, arg3: number): void;
addSegment(arg0: number, arg1: number[]): void;
getNativeConsumer(): number;
moveTo(arg0: number, arg1: number): void;
appendPath(arg0: java_awt_geom_PathIterator): void;
constructor(arg0: boolean);
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { RenderingEngine as sun_java2d_pipe_RenderingEngine, Region as sun_java2d_pipe_Region, AATileGenerator as sun_java2d_pipe_AATileGenerator } from 'sun.java2d.pipe';
import { Shape as java_awt_Shape, BasicStroke as java_awt_BasicStroke } from 'java.awt';
import { AffineTransform as java_awt_geom_AffineTransform, PathIterator as java_awt_geom_PathIterator } from 'java.awt.geom';
import { PathConsumer2D as sun_awt_geom_PathConsumer2D } from 'sun.awt.geom';
import { Object as java_lang_Object } from 'java.lang';

  export class RenderingEngine extends java_lang_Object {
static reImpl: sun_java2d_pipe_RenderingEngine;
static instance: sun_java2d_pipe_RenderingEngine;
aATileGenerator: sun_java2d_pipe_AATileGenerator;
aATileGenerator: sun_java2d_pipe_AATileGenerator;
minimumAAPenSize: number;
static getInstance(): sun_java2d_pipe_RenderingEngine;
strokeTo(arg0: java_awt_Shape, arg1: java_awt_geom_AffineTransform, arg2: java_awt_BasicStroke, arg3: boolean, arg4: boolean, arg5: boolean, arg6: sun_awt_geom_PathConsumer2D): void;
getAATileGenerator(arg0: java_awt_Shape, arg1: java_awt_geom_AffineTransform, arg2: sun_java2d_pipe_Region, arg3: java_awt_BasicStroke, arg4: boolean, arg5: boolean, arg6: number[]): sun_java2d_pipe_AATileGenerator;
getAATileGenerator(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: sun_java2d_pipe_Region, arg9: number[]): sun_java2d_pipe_AATileGenerator;
getMinimumAAPenSize(): number;
static feedConsumer(arg0: java_awt_geom_PathIterator, arg1: sun_awt_geom_PathConsumer2D): void;
createStrokedShape(arg0: java_awt_Shape, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): java_awt_Shape;
constructor();
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {


  export class AATileGenerator {
alpha: void;
typicalAlpha: number;
tileWidth: number;
tileHeight: number;
dispose(): void;
getAlpha(arg0: number[], arg1: number, arg2: number): void;
getTypicalAlpha(): number;
nextTile(): void;
getTileWidth(): number;
getTileHeight(): number;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';

  export class ParallelogramPipe {

fillParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
drawParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {


  export class LoopBasedPipe {



  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { Shape as java_awt_Shape, Rectangle as java_awt_Rectangle } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { CompositePipe as sun_java2d_pipe_CompositePipe, ParallelogramPipe as sun_java2d_pipe_ParallelogramPipe } from 'sun.java2d.pipe';

  export class AlphaColorPipe extends java_lang_Object implements sun_java2d_pipe_CompositePipe, sun_java2d_pipe_ParallelogramPipe {

fillParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
drawParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
startSequence(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape, arg2: java_awt_Rectangle, arg3: number[]): java_lang_Object;
needTile(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
renderPathTile(arg0: java_lang_Object, arg1: number[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
skipTile(arg0: java_lang_Object, arg1: number, arg2: number): void;
endSequence(arg0: java_lang_Object): void;
constructor();
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { Shape as java_awt_Shape, Rectangle as java_awt_Rectangle } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class CompositePipe {

startSequence(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape, arg2: java_awt_Rectangle, arg3: number[]): java_lang_Object;
needTile(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
renderPathTile(arg0: java_lang_Object, arg1: number[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
skipTile(arg0: java_lang_Object, arg1: number, arg2: number): void;
endSequence(arg0: java_lang_Object): void;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { ShapeDrawPipe as sun_java2d_pipe_ShapeDrawPipe, PixelDrawPipe as sun_java2d_pipe_PixelDrawPipe, PixelFillPipe as sun_java2d_pipe_PixelFillPipe } from 'sun.java2d.pipe';
import { Object as java_lang_Object } from 'java.lang';

  export class PixelToShapeConverter extends java_lang_Object implements sun_java2d_pipe_PixelDrawPipe, sun_java2d_pipe_PixelFillPipe {
outpipe: sun_java2d_pipe_ShapeDrawPipe;
drawLine(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRoundRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
fillRoundRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
drawOval(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillOval(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawArc(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
fillArc(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
drawPolyline(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
drawPolygon(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
fillPolygon(arg0: sun_java2d_SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
constructor(arg0: sun_java2d_pipe_ShapeDrawPipe);
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { Shape as java_awt_Shape } from 'java.awt';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ShapeDrawPipe as sun_java2d_pipe_ShapeDrawPipe, ParallelogramPipe as sun_java2d_pipe_ParallelogramPipe, PixelToShapeConverter as sun_java2d_pipe_PixelToShapeConverter } from 'sun.java2d.pipe';

  export class PixelToParallelogramConverter extends sun_java2d_pipe_PixelToShapeConverter implements sun_java2d_pipe_ShapeDrawPipe {
outrenderer: sun_java2d_pipe_ParallelogramPipe;
minPenSize: number;
normPosition: number;
normRoundingBias: number;
adjustfill: boolean;
class: java_lang_Class<java_lang_Object>;
fill(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
drawLine(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
fillRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRect(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawGeneralLine(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
fillRectangle(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
drawRectangle(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
fillOuterParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number): void;
draw(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: sun_java2d_pipe_ShapeDrawPipe, arg1: sun_java2d_pipe_ParallelogramPipe, arg2: number, arg3: number, arg4: boolean);
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D, ReentrantContextProvider as sun_java2d_ReentrantContextProvider } from 'sun.java2d';
import { Shape as java_awt_Shape, BasicStroke as java_awt_BasicStroke } from 'java.awt';
import { AATileGenerator as sun_java2d_pipe_AATileGenerator, CompositePipe as sun_java2d_pipe_CompositePipe, RenderingEngine as sun_java2d_pipe_RenderingEngine, ShapeDrawPipe as sun_java2d_pipe_ShapeDrawPipe, ParallelogramPipe as sun_java2d_pipe_ParallelogramPipe } from 'sun.java2d.pipe';
import { TileState as sun_java2d_pipe_AAShapePipe_TileState } from 'sun.java2d.pipe.AAShapePipe';
import { Object as java_lang_Object } from 'java.lang';

  export class AAShapePipe extends java_lang_Object implements sun_java2d_pipe_ShapeDrawPipe, sun_java2d_pipe_ParallelogramPipe {
static RDR_ENGINE: sun_java2d_pipe_RenderingEngine;
static TILE_STATE_PROVIDER: sun_java2d_ReentrantContextProvider<sun_java2d_pipe_AAShapePipe_TileState>;
outpipe: sun_java2d_pipe_CompositePipe;
fill(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
fillParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
drawParallelogram(arg0: sun_java2d_SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
renderPath(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape, arg2: java_awt_BasicStroke): void;
renderTiles(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape, arg2: sun_java2d_pipe_AATileGenerator, arg3: number[], arg4: sun_java2d_pipe_AAShapePipe_TileState): void;
draw(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
constructor(arg0: sun_java2d_pipe_CompositePipe);
  }
}//@ts-nocheck

declare module 'sun.java2d.pipe.AAShapePipe' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Rectangle as java_awt_Rectangle } from 'java.awt';
import { Double as java_awt_geom_Rectangle2D_Double } from 'java.awt.geom.Rectangle2D';
import { ReentrantContext as sun_java2d_ReentrantContext } from 'sun.java2d';

  export class TileState extends sun_java2d_ReentrantContext {
theTile: number[];
abox: number[];
dev: java_awt_Rectangle;
bbox2D: java_awt_geom_Rectangle2D_Double;
class: java_lang_Class<java_lang_Object>;
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

declare module 'sun.java2d' {
import { Reference as java_lang_ref_Reference } from 'java.lang.ref';
import { ReentrantContext as sun_java2d_ReentrantContext } from 'sun.java2d';
import { Object as java_lang_Object } from 'java.lang';

  export class ReentrantContext extends java_lang_Object {
usage: number;
reference: java_lang_ref_Reference<sun_java2d_ReentrantContext>;

constructor();
  }
}//@ts-nocheck

declare module 'sun.java2d' {
import { Object as java_lang_Object } from 'java.lang';
import { ReentrantContext as sun_java2d_ReentrantContext } from 'sun.java2d';

  export class ReentrantContextProvider<K extends sun_java2d_ReentrantContext> extends java_lang_Object {
static USAGE_TL_INACTIVE: number;
static USAGE_TL_IN_USE: number;
static USAGE_CLQ: number;
static REF_HARD: number;
static REF_SOFT: number;
static REF_WEAK: number;
refType: number;
release(arg0: K): void;
acquire(): K;

  }
}//@ts-nocheck

declare module 'sun.java2d.pipe' {
import { SunGraphics2D as sun_java2d_SunGraphics2D } from 'sun.java2d';
import { Shape as java_awt_Shape, Rectangle as java_awt_Rectangle } from 'java.awt';
import { Object as java_lang_Object } from 'java.lang';
import { Rectangle2D as java_awt_geom_Rectangle2D } from 'java.awt.geom';
import { Region as sun_java2d_pipe_Region, ShapeSpanIterator as sun_java2d_pipe_ShapeSpanIterator, SpanIterator as sun_java2d_pipe_SpanIterator, RenderingEngine as sun_java2d_pipe_RenderingEngine, ShapeDrawPipe as sun_java2d_pipe_ShapeDrawPipe } from 'sun.java2d.pipe';

  export class SpanShapeRenderer extends java_lang_Object implements sun_java2d_pipe_ShapeDrawPipe {
static RenderEngine: sun_java2d_pipe_RenderingEngine;
static NON_RECTILINEAR_TRANSFORM_MASK: number;
fill(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
startSequence(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape, arg2: java_awt_Rectangle, arg3: number[]): java_lang_Object;
endSequence(arg0: java_lang_Object): void;
renderBox(arg0: java_lang_Object, arg1: number, arg2: number, arg3: number, arg4: number): void;
renderRect(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_geom_Rectangle2D): void;
renderSpans(arg0: sun_java2d_SunGraphics2D, arg1: sun_java2d_pipe_Region, arg2: java_awt_Shape, arg3: sun_java2d_pipe_ShapeSpanIterator): void;
spanClipLoop(arg0: java_lang_Object, arg1: sun_java2d_pipe_SpanIterator, arg2: sun_java2d_pipe_Region, arg3: number[]): void;
draw(arg0: sun_java2d_SunGraphics2D, arg1: java_awt_Shape): void;
constructor();
  }
}//@ts-nocheck

declare module 'sun.java2d' {
import { Object as java_lang_Object } from 'java.lang';

  export class DisposerTarget {
disposerReferent: java_lang_Object;
getDisposerReferent(): java_lang_Object;

  }
}