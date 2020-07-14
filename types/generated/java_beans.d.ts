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