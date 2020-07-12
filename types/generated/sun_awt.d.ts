//@ts-nocheck

declare module 'sun.awt' {
import { Object as java_lang_Object, ThreadGroup as java_lang_ThreadGroup, ClassLoader as java_lang_ClassLoader, ThreadLocal as java_lang_ThreadLocal } from 'java.lang';
import { Set as java_util_Set, Map as java_util_Map } from 'java.util';
import { AppContext as sun_awt_AppContext, MostRecentKeyValue as sun_awt_MostRecentKeyValue } from 'sun.awt';
import { Supplier as java_util_function_Supplier } from 'java.util.function';
import { PropertyChangeListener as java_beans_PropertyChangeListener, PropertyChangeSupport as java_beans_PropertyChangeSupport } from 'java.beans';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { State as sun_awt_AppContext_State } from 'sun.awt.AppContext';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';

  export class AppContext extends java_lang_Object {
static log: sun_util_logging_PlatformLogger;
static EVENT_QUEUE_KEY: java_lang_Object;
static EVENT_QUEUE_LOCK_KEY: java_lang_Object;
static EVENT_QUEUE_COND_KEY: java_lang_Object;
static threadGroup2appContext: java_util_Map<java_lang_ThreadGroup, sun_awt_AppContext>;
static mainAppContext: sun_awt_AppContext;
static getAppContextLock: java_lang_Object;
table: java_util_Map<java_lang_Object, java_lang_Object>;
threadGroup: java_lang_ThreadGroup;
changeSupport: java_beans_PropertyChangeSupport;
static DISPOSED_PROPERTY_NAME: string;
static GUI_DISPOSED: string;
state: sun_awt_AppContext_State;
static numAppContexts: java_util_concurrent_atomic_AtomicInteger;
contextClassLoader: java_lang_ClassLoader;
static threadAppContext: java_lang_ThreadLocal<sun_awt_AppContext>;
DISPOSAL_TIMEOUT: number;
THREAD_INTERRUPT_TIMEOUT: number;
mostRecentKeyValue: sun_awt_MostRecentKeyValue;
shadowMostRecentKeyValue: sun_awt_MostRecentKeyValue;
threadGroup: java_lang_ThreadGroup;
contextClassLoader: java_lang_ClassLoader;
static appContexts: java_util_Set<sun_awt_AppContext>;
static softReferenceValue: T;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
static appContext: sun_awt_AppContext;
dispose(): void;
remove(arg0: java_lang_Object): java_lang_Object;
get(arg0: java_lang_Object): java_lang_Object;
put(arg0: java_lang_Object, arg1: java_lang_Object): java_lang_Object;
toString(): string;
getThreadGroup(): java_lang_ThreadGroup;
getContextClassLoader(): java_lang_ClassLoader;
static getAppContexts(): java_util_Set<sun_awt_AppContext>;
isDisposed(): boolean;
static isMainContext(arg0: sun_awt_AppContext): boolean;
static getSoftReferenceValue<T extends java_lang_Object>(arg0: java_lang_Object, arg1: java_util_function_Supplier<T>): T;
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
static getAppContext(): sun_awt_AppContext;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;

  }
}//@ts-nocheck

declare module 'sun.awt.AppContext' {
import { State as sun_awt_AppContext_State } from 'sun.awt.AppContext';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class State extends java_lang_Enum<sun_awt_AppContext_State> {
static VALID: sun_awt_AppContext_State;
static BEING_DISPOSED: sun_awt_AppContext_State;
static DISPOSED: sun_awt_AppContext_State;
static $VALUES: sun_awt_AppContext_State[];
class: java_lang_Class<java_lang_Object>;
static values(): sun_awt_AppContext_State[];
static valueOf(arg0: string): sun_awt_AppContext_State;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.awt' {
import { Object as java_lang_Object } from 'java.lang';

  export class MostRecentKeyValue extends java_lang_Object {
key: java_lang_Object;
value: java_lang_Object;


  }
}//@ts-nocheck

declare module 'sun.awt' {
import { AWTEvent as java_awt_AWTEvent } from 'java.awt';
import { EventQueueItem as sun_awt_EventQueueItem } from 'sun.awt';
import { Object as java_lang_Object } from 'java.lang';

  export class EventQueueItem extends java_lang_Object {
event: java_awt_AWTEvent;
next: sun_awt_EventQueueItem;

constructor(arg0: java_awt_AWTEvent);
  }
}//@ts-nocheck

declare module 'sun.awt' {
import { Component as java_awt_Component } from 'java.awt';
import { Cause as java_awt_event_FocusEvent_Cause } from 'java.awt.event.FocusEvent';

  export class RequestFocusController {

acceptRequestFocus(arg0: java_awt_Component, arg1: java_awt_Component, arg2: boolean, arg3: boolean, arg4: java_awt_event_FocusEvent_Cause): boolean;

  }
}//@ts-nocheck

declare module 'sun.awt' {
import { SecondaryLoop as java_awt_SecondaryLoop } from 'java.awt';
import { Runnable as java_lang_Runnable } from 'java.lang';

  export class FwDispatcher {

createSecondaryLoop(): java_awt_SecondaryLoop;
isDispatchThread(): boolean;
scheduleDispatch(arg0: java_lang_Runnable): void;

  }
}//@ts-nocheck

declare module 'sun.awt.util' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Collection as java_util_Collection, Spliterator as java_util_Spliterator, Comparator as java_util_Comparator, AbstractList as java_util_AbstractList, List as java_util_List, RandomAccess as java_util_RandomAccess } from 'java.util';
import { IntFunction as java_util_function_IntFunction, Predicate as java_util_function_Predicate, Consumer as java_util_function_Consumer, UnaryOperator as java_util_function_UnaryOperator } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';

  export class IdentityArrayList<E extends java_lang_Object> extends java_util_AbstractList<E> implements java_util_List<E>, java_util_RandomAccess {
elementData: java_lang_Object[];
size: number;
class: java_lang_Class<java_lang_Object>;
add(arg0: E): boolean;
add(arg0: number, arg1: E): void;
remove(arg0: number): E;
remove(arg0: java_lang_Object): boolean;
get(arg0: number): E;
indexOf(arg0: java_lang_Object): number;
clear(): void;
isEmpty(): boolean;
lastIndexOf(arg0: java_lang_Object): number;
contains(arg0: java_lang_Object): boolean;
size(): number;
toArray(): java_lang_Object[];
toArray<T extends java_lang_Object>(arg0: T[]): T[];
addAll(arg0: number, arg1: java_util_Collection<E>): boolean;
addAll(arg0: java_util_Collection<E>): boolean;
set(arg0: number, arg1: E): E;
ensureCapacity(arg0: number): void;
trimToSize(): void;
toString(): string;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
retainAll(arg0: java_util_Collection<java_lang_Object>): boolean;
removeAll(arg0: java_util_Collection<java_lang_Object>): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
spliterator(): java_util_Spliterator<E>;
stream(): java_util_stream_Stream<E>;
removeIf(arg0: java_util_function_Predicate<java_lang_Object>): boolean;
parallelStream(): java_util_stream_Stream<E>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
replaceAll(arg0: java_util_function_UnaryOperator<E>): void;
sort(arg0: java_util_Comparator<java_lang_Object>): void;
constructor(arg0: number);
constructor(arg0: java_util_Collection<E>);
constructor();
  }
}//@ts-nocheck

declare module 'sun.awt.image.BufImgSurfaceData' {
import { Object as java_lang_Object } from 'java.lang';

  export class ICMColorData extends java_lang_Object {
pData: number;


  }
}//@ts-nocheck

declare module 'sun.awt.image' {
import { ImageConsumer as java_awt_image_ImageConsumer, BufferedImage as java_awt_image_BufferedImage, ImageProducer as java_awt_image_ImageProducer } from 'java.awt.image';
import { Hashtable as java_util_Hashtable } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class OffScreenImageSource extends java_lang_Object implements java_awt_image_ImageProducer {
image: java_awt_image_BufferedImage;
width: number;
height: number;
properties: java_util_Hashtable<java_lang_Object, java_lang_Object>;
theConsumer: java_awt_image_ImageConsumer;
addConsumer(arg0: java_awt_image_ImageConsumer): void;
isConsumer(arg0: java_awt_image_ImageConsumer): boolean;
removeConsumer(arg0: java_awt_image_ImageConsumer): void;
startProduction(arg0: java_awt_image_ImageConsumer): void;
requestTopDownLeftRightResend(arg0: java_awt_image_ImageConsumer): void;
constructor(arg0: java_awt_image_BufferedImage, arg1: java_util_Hashtable<java_lang_Object, java_lang_Object>);
constructor(arg0: java_awt_image_BufferedImage);
  }
}//@ts-nocheck

declare module 'sun.awt.image' {
import { Image as java_awt_Image, GraphicsConfiguration as java_awt_GraphicsConfiguration, ImageCapabilities as java_awt_ImageCapabilities } from 'java.awt';
import { SurfaceManager as sun_awt_image_SurfaceManager } from 'sun.awt.image';
import { Object as java_lang_Object } from 'java.lang';
import { SurfaceData as sun_java2d_SurfaceData } from 'sun.java2d';
import { ImageAccessor as sun_awt_image_SurfaceManager_ImageAccessor } from 'sun.awt.image.SurfaceManager';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';

  export class SurfaceManager extends java_lang_Object {
static imgaccessor: sun_awt_image_SurfaceManager_ImageAccessor;
cacheMap: java_util_concurrent_ConcurrentHashMap<java_lang_Object, java_lang_Object>;
cacheData: java_lang_Object;
primarySurfaceData: sun_java2d_SurfaceData;
static imageScaleX: number;
static imageScaleY: number;
capabilities: java_awt_ImageCapabilities;
static manager: sun_awt_image_SurfaceManager;
flush(): void;
static setManager(arg0: java_awt_Image, arg1: sun_awt_image_SurfaceManager): void;
getCacheData(arg0: java_lang_Object): java_lang_Object;
setCacheData(arg0: java_lang_Object, arg1: java_lang_Object): void;
getPrimarySurfaceData(): sun_java2d_SurfaceData;
restoreContents(): sun_java2d_SurfaceData;
acceleratedSurfaceLost(): void;
static getImageScaleX(arg0: java_awt_Image): number;
static getImageScaleY(arg0: java_awt_Image): number;
getCapabilities(arg0: java_awt_GraphicsConfiguration): java_awt_ImageCapabilities;
setAccelerationPriority(arg0: number): void;
static setImageAccessor(arg0: sun_awt_image_SurfaceManager_ImageAccessor): void;
static getManager(arg0: java_awt_Image): sun_awt_image_SurfaceManager;
constructor();
  }
}//@ts-nocheck

declare module 'sun.awt.image' {
import { ColorModel as java_awt_image_ColorModel } from 'java.awt.image';
import { PixelConverter as sun_awt_image_PixelConverter } from 'sun.awt.image';
import { Object as java_lang_Object } from 'java.lang';

  export class PixelConverter extends java_lang_Object {
static instance: sun_awt_image_PixelConverter;
alphaMask: number;
alphaMask: number;
rgbToPixel(arg0: number, arg1: java_awt_image_ColorModel): number;
pixelToRgb(arg0: number, arg1: java_awt_image_ColorModel): number;
getAlphaMask(): number;

  }
}//@ts-nocheck

declare module 'sun.awt' {


  export class ConstrainableGraphics {

constrain(arg0: number, arg1: number, arg2: number, arg3: number): void;

  }
}//@ts-nocheck

declare module 'sun.awt' {
import { EventListener as java_util_EventListener } from 'java.util';

  export class DisplayChangedListener implements java_util_EventListener {

displayChanged(): void;
paletteChanged(): void;

  }
}//@ts-nocheck

declare module 'sun.awt.image.SurfaceManager' {


  export class FlushableCacheData {

flush(arg0: boolean): boolean;

  }
}//@ts-nocheck

declare module 'sun.awt.geom' {


  export class PathConsumer2D {
nativeConsumer: number;
lineTo(arg0: number, arg1: number): void;
quadTo(arg0: number, arg1: number, arg2: number, arg3: number): void;
curveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
closePath(): void;
pathDone(): void;
getNativeConsumer(): number;
moveTo(arg0: number, arg1: number): void;

  }
}//@ts-nocheck

declare module 'sun.awt.image.SurfaceManager' {
import { Image as java_awt_Image } from 'java.awt';
import { SurfaceManager as sun_awt_image_SurfaceManager } from 'sun.awt.image';
import { Object as java_lang_Object } from 'java.lang';

  export class ImageAccessor extends java_lang_Object {
surfaceManager: sun_awt_image_SurfaceManager;
getSurfaceManager(arg0: java_awt_Image): sun_awt_image_SurfaceManager;
setSurfaceManager(arg0: java_awt_Image, arg1: sun_awt_image_SurfaceManager): void;
constructor();
  }
}