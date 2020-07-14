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
class: java_lang_Class<java_lang_Object>;
newValue: java_lang_Object;
oldValue: java_lang_Object;
propagationId: java_lang_Object;
propertyName: string;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getNewValue(): java_lang_Object;
getOldValue(): java_lang_Object;
getPropagationId(): java_lang_Object;
getPropertyName(): string;
hashCode(): number;
notify(): void;
notifyAll(): void;
setPropagationId(arg0: java_lang_Object): void;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: java_lang_Object, arg1: string, arg2: java_lang_Object, arg3: java_lang_Object);
  }
}