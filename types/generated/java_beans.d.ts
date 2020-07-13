//@ts-nocheck

declare module 'java.beans' {
import { PropertyChangeEvent as java_beans_PropertyChangeEvent } from 'java.beans';
import { EventListener as java_util_EventListener } from 'java.util';

  export class PropertyChangeListener implements java_util_EventListener {

propertyChange(arg0: java_beans_PropertyChangeEvent): void;

  }
}
//@ts-nocheck

declare module 'java.beans' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EventObject as java_util_EventObject } from 'java.util';

  export class PropertyChangeEvent extends java_util_EventObject {
static serialVersionUID: number;
propertyName: string;
newValue: java_lang_Object;
oldValue: java_lang_Object;
propagationId: java_lang_Object;
newValue: java_lang_Object;
oldValue: java_lang_Object;
propagationId: java_lang_Object;
propertyName: string;
class: java_lang_Class<java_lang_Object>;
toString(): string;
getNewValue(): java_lang_Object;
getOldValue(): java_lang_Object;
setPropagationId(arg0: java_lang_Object): void;
getPropagationId(): java_lang_Object;
getPropertyName(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: java_lang_Object, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object);
  }
}
//@ts-nocheck

declare module 'java.beans' {
import { PropertyChangeListener as java_beans_PropertyChangeListener, PropertyChangeEvent as java_beans_PropertyChangeEvent } from 'java.beans';
import { Object as java_lang_Object } from 'java.lang';
import { PropertyChangeListenerMap as java_beans_PropertyChangeSupport_PropertyChangeListenerMap } from 'java.beans.PropertyChangeSupport';
import { ObjectStreamField as java_io_ObjectStreamField, Serializable as java_io_Serializable } from 'java.io';

  export class PropertyChangeSupport extends java_lang_Object implements java_io_Serializable {
map: java_beans_PropertyChangeSupport_PropertyChangeListenerMap;
source: java_lang_Object;
static serialPersistentFields: java_io_ObjectStreamField[];
static serialVersionUID: number;
propertyChangeListeners: java_beans_PropertyChangeListener[];
propertyChangeListeners: java_beans_PropertyChangeListener[];
getPropertyChangeListeners(): java_beans_PropertyChangeListener[];
getPropertyChangeListeners(arg0: string): java_beans_PropertyChangeListener[];
firePropertyChange(arg0: string, arg1: number, arg2: number): void;
firePropertyChange(arg0: string, arg1: boolean, arg2: boolean): void;
firePropertyChange(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
firePropertyChange(arg0: java_beans_PropertyChangeEvent): void;
fireIndexedPropertyChange(arg0: string, arg1: number, arg2: number, arg3: number): void;
fireIndexedPropertyChange(arg0: string, arg1: number, arg2: java_lang_Object, arg3: java_lang_Object): void;
fireIndexedPropertyChange(arg0: string, arg1: number, arg2: boolean, arg3: boolean): void;
addPropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: string, arg1: java_beans_PropertyChangeListener): void;
hasListeners(arg0: string): boolean;
constructor(arg0: java_lang_Object);
  }
}
//@ts-nocheck

declare module 'java.beans.PropertyChangeSupport' {
import { EventListener as java_util_EventListener } from 'java.util';
import { PropertyChangeListener as java_beans_PropertyChangeListener, ChangeListenerMap as java_beans_ChangeListenerMap } from 'java.beans';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PropertyChangeListenerMap extends java_beans_ChangeListenerMap<java_beans_PropertyChangeListener> {
static EMPTY: java_beans_PropertyChangeListener[];
class: java_lang_Class<java_lang_Object>;
extract(arg0: java_util_EventListener): java_util_EventListener;
extract(arg0: java_beans_PropertyChangeListener): java_beans_PropertyChangeListener;
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
//@ts-nocheck

declare module 'java.beans' {
import { Set as java_util_Set, Map as java_util_Map, EventListener as java_util_EventListener } from 'java.util';
import { Entry as java_util_Map_Entry } from 'java.util.Map';
import { Object as java_lang_Object } from 'java.lang';

  export class ChangeListenerMap<L extends java_util_EventListener> extends java_lang_Object {
map: java_util_Map<string, L[]>;
entries: java_util_Set<java_util_Map_Entry<string, L[]>>;
listeners: L[];
listeners: L[];
add(arg0: string, arg1: L): void;
remove(arg0: string, arg1: L): void;
get(arg0: string): L[];
set(arg0: string, arg1: L[]): void;
getEntries(): java_util_Set<java_util_Map_Entry<string, L[]>>;
extract(arg0: L): L;
getListeners(arg0: string): L[];
getListeners(): L[];
hasListeners(arg0: string): boolean;

  }
}