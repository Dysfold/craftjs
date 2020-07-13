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
//@ts-nocheck

declare module 'javax.swing' {
import { ActionListener as java_awt_event_ActionListener } from 'java.awt.event';
import { Class as java_lang_Class, Runnable as java_lang_Runnable, Object as java_lang_Object } from 'java.lang';
import { EventListener as java_util_EventListener } from 'java.util';
import { EventListenerList as javax_swing_event_EventListenerList } from 'javax.swing.event';
import { AtomicBoolean as java_util_concurrent_atomic_AtomicBoolean } from 'java.util.concurrent.atomic';
import { Lock as java_util_concurrent_locks_Lock } from 'java.util.concurrent.locks';
import { DelayedTimer as javax_swing_TimerQueue_DelayedTimer } from 'javax.swing.TimerQueue';
import { AccessControlContext as java_security_AccessControlContext } from 'java.security';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Timer extends java_lang_Object implements java_io_Serializable {
listenerList: javax_swing_event_EventListenerList;
notify: java_util_concurrent_atomic_AtomicBoolean;
initialDelay: number;
delay: number;
repeats: boolean;
coalesce: boolean;
doPostEvent: java_lang_Runnable;
static logTimers: boolean;
lock: java_util_concurrent_locks_Lock;
delayedTimer: javax_swing_TimerQueue_DelayedTimer;
actionCommand: string;
acc: java_security_AccessControlContext;
static logTimers: boolean;
initialDelay: number;
actionCommand: string;
actionListeners: java_awt_event_ActionListener[];
listeners: T[];
delay: number;
start(): void;
stop(): void;
static setLogTimers(arg0: boolean): void;
static getLogTimers(): boolean;
getInitialDelay(): number;
setRepeats(arg0: boolean): void;
isRepeats(): boolean;
isCoalesce(): boolean;
setActionCommand(arg0: string): void;
getActionCommand(): string;
addActionListener(arg0: java_awt_event_ActionListener): void;
removeActionListener(arg0: java_awt_event_ActionListener): void;
getActionListeners(): java_awt_event_ActionListener[];
setCoalesce(arg0: boolean): void;
setInitialDelay(arg0: number): void;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
setDelay(arg0: number): void;
isRunning(): boolean;
restart(): void;
getDelay(): number;
constructor(arg0: number, arg1: java_awt_event_ActionListener);
  }
}
//@ts-nocheck

declare module 'javax.swing.event' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { EventListener as java_util_EventListener } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class EventListenerList extends java_lang_Object implements java_io_Serializable {
static NULL_ARRAY: java_lang_Object[];
listenerList: java_lang_Object[];
listenerList: java_lang_Object[];
listenerCount: number;
listenerCount: number;
listeners: T[];
add<T extends java_util_EventListener>(arg0: java_lang_Class<T>, arg1: T): void;
remove<T extends java_util_EventListener>(arg0: java_lang_Class<T>, arg1: T): void;
toString(): string;
getListenerList(): java_lang_Object[];
getListenerCount(arg0: java_lang_Class<java_lang_Object>): number;
getListenerCount(): number;
getListeners<T extends java_util_EventListener>(arg0: java_lang_Class<T>): T[];
constructor();
  }
}
//@ts-nocheck

declare module 'javax.swing.TimerQueue' {
import { Delayed as java_util_concurrent_Delayed, TimeUnit as java_util_concurrent_TimeUnit } from 'java.util.concurrent';
import { Object as java_lang_Object } from 'java.lang';
import { AtomicLong as java_util_concurrent_atomic_AtomicLong } from 'java.util.concurrent.atomic';
import { Timer as javax_swing_Timer } from 'javax.swing';

  export class DelayedTimer extends java_lang_Object implements java_util_concurrent_Delayed {
static sequencer: java_util_concurrent_atomic_AtomicLong;
sequenceNumber: number;
time: number;
timer: javax_swing_Timer;
delay: number;
compareTo(arg0: java_util_concurrent_Delayed): number;
compareTo(arg0: java_lang_Object): number;
getDelay(arg0: java_util_concurrent_TimeUnit): number;

  }
}