//@ts-nocheck

declare module 'org.yaml.snakeyaml.composer' {
import { Node as org_yaml_snakeyaml_nodes_Node } from 'org.yaml.snakeyaml.nodes';
import { Parser as org_yaml_snakeyaml_parser_Parser } from 'org.yaml.snakeyaml.parser';
import { Resolver as org_yaml_snakeyaml_resolver_Resolver } from 'org.yaml.snakeyaml.resolver';
import { LoaderOptions as org_yaml_snakeyaml_LoaderOptions } from 'org.yaml.snakeyaml';
import { Object as java_lang_Object } from 'java.lang';

  export class Composer extends java_lang_Object {
node: org_yaml_snakeyaml_nodes_Node;
singleNode: org_yaml_snakeyaml_nodes_Node;
getNode(): org_yaml_snakeyaml_nodes_Node;
checkNode(): boolean;
getSingleNode(): org_yaml_snakeyaml_nodes_Node;
constructor(arg0: org_yaml_snakeyaml_parser_Parser, arg1: org_yaml_snakeyaml_resolver_Resolver);
constructor(arg0: org_yaml_snakeyaml_parser_Parser, arg1: org_yaml_snakeyaml_resolver_Resolver, arg2: org_yaml_snakeyaml_LoaderOptions);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.nodes' {
import { Object as java_lang_Object, Class as java_lang_Class, Boolean as java_lang_Boolean } from 'java.lang';
import { Tag as org_yaml_snakeyaml_nodes_Tag, NodeId as org_yaml_snakeyaml_nodes_NodeId } from 'org.yaml.snakeyaml.nodes';
import { Mark as org_yaml_snakeyaml_error_Mark } from 'org.yaml.snakeyaml.error';

  export class Node extends java_lang_Object {
type: java_lang_Class<java_lang_Object>;
tag: org_yaml_snakeyaml_nodes_Tag;
startMark: org_yaml_snakeyaml_error_Mark;
nodeId: org_yaml_snakeyaml_nodes_NodeId;
endMark: org_yaml_snakeyaml_error_Mark;
anchor: string;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getType(): java_lang_Class<java_lang_Object>;
isResolved(): boolean;
getTag(): org_yaml_snakeyaml_nodes_Tag;
getStartMark(): org_yaml_snakeyaml_error_Mark;
isTwoStepsConstruction(): boolean;
useClassConstructor(): boolean;
getNodeId(): org_yaml_snakeyaml_nodes_NodeId;
getEndMark(): org_yaml_snakeyaml_error_Mark;
setTwoStepsConstruction(arg0: boolean): void;
setUseClassConstructor(arg0: java_lang_Boolean): void;
setAnchor(arg0: string): void;
getAnchor(): string;
setTag(arg0: org_yaml_snakeyaml_nodes_Tag): void;
setType(arg0: java_lang_Class<java_lang_Object>): void;
constructor(arg0: org_yaml_snakeyaml_nodes_Tag, arg1: org_yaml_snakeyaml_error_Mark, arg2: org_yaml_snakeyaml_error_Mark);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.nodes' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { URI as java_net_URI } from 'java.net';
import { Tag as org_yaml_snakeyaml_nodes_Tag } from 'org.yaml.snakeyaml.nodes';
/** Represents a tag that may be defined by the server or a resource pack to
 group like things together.

 Note that whilst all tags defined within this interface must be present in
 implementations, their existence is not guaranteed across future versions. */

  export class Tag extends java_lang_Object {
static PREFIX: string;
static YAML: org_yaml_snakeyaml_nodes_Tag;
static MERGE: org_yaml_snakeyaml_nodes_Tag;
static SET: org_yaml_snakeyaml_nodes_Tag;
static PAIRS: org_yaml_snakeyaml_nodes_Tag;
static OMAP: org_yaml_snakeyaml_nodes_Tag;
static BINARY: org_yaml_snakeyaml_nodes_Tag;
static INT: org_yaml_snakeyaml_nodes_Tag;
static FLOAT: org_yaml_snakeyaml_nodes_Tag;
static TIMESTAMP: org_yaml_snakeyaml_nodes_Tag;
static BOOL: org_yaml_snakeyaml_nodes_Tag;
static NULL: org_yaml_snakeyaml_nodes_Tag;
static STR: org_yaml_snakeyaml_nodes_Tag;
static SEQ: org_yaml_snakeyaml_nodes_Tag;
static MAP: org_yaml_snakeyaml_nodes_Tag;
value: string;
className: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
startsWith(arg0: string): boolean;
matches(arg0: java_lang_Class<java_lang_Object>): boolean;
getValue(): string;
getClassName(): string;
isSecondary(): boolean;
isCompatible(arg0: java_lang_Class<java_lang_Object>): boolean;
constructor(arg0: java_net_URI);
constructor(arg0: java_lang_Class<java_lang_Object>);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.error' {
import { Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Mark extends java_lang_Object implements java_io_Serializable {
name: string;
index: number;
buffer: number[];
line: number;
column: number;
pointer: number;
getName(): string;
toString(): string;
getIndex(): number;
getBuffer(): number[];
getLine(): number;
getColumn(): number;
get_snippet(): string;
get_snippet(arg0: number, arg1: number): string;
getPointer(): number;
constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number);
constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number);
constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: string[], arg5: number);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.nodes' {
import { NodeId as org_yaml_snakeyaml_nodes_NodeId } from 'org.yaml.snakeyaml.nodes';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class NodeId extends java_lang_Enum<org_yaml_snakeyaml_nodes_NodeId> {
static scalar: org_yaml_snakeyaml_nodes_NodeId;
static sequence: org_yaml_snakeyaml_nodes_NodeId;
static mapping: org_yaml_snakeyaml_nodes_NodeId;
static anchor: org_yaml_snakeyaml_nodes_NodeId;
class: java_lang_Class<java_lang_Object>;
static values(): org_yaml_snakeyaml_nodes_NodeId[];
static valueOf(arg0: string): org_yaml_snakeyaml_nodes_NodeId;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.parser' {
import { ID as org_yaml_snakeyaml_events_Event_ID } from 'org.yaml.snakeyaml.events.Event';
import { Event as org_yaml_snakeyaml_events_Event } from 'org.yaml.snakeyaml.events';

  export class Parser {
event: org_yaml_snakeyaml_events_Event;
checkEvent(arg0: org_yaml_snakeyaml_events_Event_ID): boolean;
peekEvent(): org_yaml_snakeyaml_events_Event;
getEvent(): org_yaml_snakeyaml_events_Event;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.events.Event' {
import { ID as org_yaml_snakeyaml_events_Event_ID } from 'org.yaml.snakeyaml.events.Event';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ID extends java_lang_Enum<org_yaml_snakeyaml_events_Event_ID> {
static Alias: org_yaml_snakeyaml_events_Event_ID;
static DocumentEnd: org_yaml_snakeyaml_events_Event_ID;
static DocumentStart: org_yaml_snakeyaml_events_Event_ID;
static MappingEnd: org_yaml_snakeyaml_events_Event_ID;
static MappingStart: org_yaml_snakeyaml_events_Event_ID;
static Scalar: org_yaml_snakeyaml_events_Event_ID;
static SequenceEnd: org_yaml_snakeyaml_events_Event_ID;
static SequenceStart: org_yaml_snakeyaml_events_Event_ID;
static StreamEnd: org_yaml_snakeyaml_events_Event_ID;
static StreamStart: org_yaml_snakeyaml_events_Event_ID;
class: java_lang_Class<java_lang_Object>;
static values(): org_yaml_snakeyaml_events_Event_ID[];
static valueOf(arg0: string): org_yaml_snakeyaml_events_Event_ID;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.events' {
import { Object as java_lang_Object } from 'java.lang';
import { ID as org_yaml_snakeyaml_events_Event_ID } from 'org.yaml.snakeyaml.events.Event';
import { Mark as org_yaml_snakeyaml_error_Mark } from 'org.yaml.snakeyaml.error';
/** Represents an event.

 All events require a static method named getHandlerList() which returns the same HandlerList as getHandlers(). */

  export class Event extends java_lang_Object {
startMark: org_yaml_snakeyaml_error_Mark;
endMark: org_yaml_snakeyaml_error_Mark;
eventId: org_yaml_snakeyaml_events_Event_ID;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
is(arg0: org_yaml_snakeyaml_events_Event_ID): boolean;
getStartMark(): org_yaml_snakeyaml_error_Mark;
getEndMark(): org_yaml_snakeyaml_error_Mark;
getEventId(): org_yaml_snakeyaml_events_Event_ID;
constructor(arg0: org_yaml_snakeyaml_error_Mark, arg1: org_yaml_snakeyaml_error_Mark);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.resolver' {
import { NodeId as org_yaml_snakeyaml_nodes_NodeId, Tag as org_yaml_snakeyaml_nodes_Tag } from 'org.yaml.snakeyaml.nodes';
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';
import { Object as java_lang_Object } from 'java.lang';

  export class Resolver extends java_lang_Object {
static BOOL: java_util_regex_Pattern;
static FLOAT: java_util_regex_Pattern;
static INT: java_util_regex_Pattern;
static MERGE: java_util_regex_Pattern;
static NULL: java_util_regex_Pattern;
static EMPTY: java_util_regex_Pattern;
static TIMESTAMP: java_util_regex_Pattern;
static VALUE: java_util_regex_Pattern;
static YAML: java_util_regex_Pattern;
resolve(arg0: org_yaml_snakeyaml_nodes_NodeId, arg1: string, arg2: boolean): org_yaml_snakeyaml_nodes_Tag;
addImplicitResolver(arg0: org_yaml_snakeyaml_nodes_Tag, arg1: java_util_regex_Pattern, arg2: string): void;
constructor();
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml' {
import { Object as java_lang_Object } from 'java.lang';

  export class LoaderOptions extends java_lang_Object {
allowRecursiveKeys: boolean;
maxAliasesForCollections: number;
getAllowRecursiveKeys(): boolean;
isAllowDuplicateKeys(): boolean;
setAllowDuplicateKeys(arg0: boolean): void;
isWrappedToRootException(): boolean;
setWrappedToRootException(arg0: boolean): void;
setMaxAliasesForCollections(arg0: number): void;
getMaxAliasesForCollections(): number;
setAllowRecursiveKeys(arg0: boolean): void;
constructor();
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.introspector' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Property as org_yaml_snakeyaml_introspector_Property, BeanAccess as org_yaml_snakeyaml_introspector_BeanAccess } from 'org.yaml.snakeyaml.introspector';
import { Set as java_util_Set } from 'java.util';

  export class PropertyUtils extends java_lang_Object {
property: org_yaml_snakeyaml_introspector_Property;
property: org_yaml_snakeyaml_introspector_Property;
properties: java_util_Set<org_yaml_snakeyaml_introspector_Property>;
properties: java_util_Set<org_yaml_snakeyaml_introspector_Property>;
getProperty(arg0: java_lang_Class<java_lang_Object>, arg1: string): org_yaml_snakeyaml_introspector_Property;
getProperty(arg0: java_lang_Class<java_lang_Object>, arg1: string, arg2: org_yaml_snakeyaml_introspector_BeanAccess): org_yaml_snakeyaml_introspector_Property;
getProperties(arg0: java_lang_Class<java_lang_Object>): java_util_Set<org_yaml_snakeyaml_introspector_Property>;
getProperties(arg0: java_lang_Class<java_lang_Object>, arg1: org_yaml_snakeyaml_introspector_BeanAccess): java_util_Set<org_yaml_snakeyaml_introspector_Property>;
isAllowReadOnlyProperties(): boolean;
setAllowReadOnlyProperties(arg0: boolean): void;
setBeanAccess(arg0: org_yaml_snakeyaml_introspector_BeanAccess): void;
setSkipMissingProperties(arg0: boolean): void;
isSkipMissingProperties(): boolean;
constructor();
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.introspector' {
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { Property as org_yaml_snakeyaml_introspector_Property } from 'org.yaml.snakeyaml.introspector';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { List as java_util_List } from 'java.util';

  export class Property extends java_lang_Object implements java_lang_Comparable<org_yaml_snakeyaml_introspector_Property> {
name: string;
annotation: A;
annotations: java_util_List<java_lang_annotation_Annotation>;
type: java_lang_Class<java_lang_Object>;
actualTypeArguments: java_lang_Class<java_lang_Object>[];
getName(): string;
get(arg0: java_lang_Object): java_lang_Object;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: org_yaml_snakeyaml_introspector_Property): number;
getAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getAnnotations(): java_util_List<java_lang_annotation_Annotation>;
set(arg0: java_lang_Object, arg1: java_lang_Object): void;
getType(): java_lang_Class<java_lang_Object>;
getActualTypeArguments(): java_lang_Class<java_lang_Object>[];
isReadable(): boolean;
isWritable(): boolean;
constructor(arg0: string, arg1: java_lang_Class<java_lang_Object>);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.introspector' {
import { BeanAccess as org_yaml_snakeyaml_introspector_BeanAccess } from 'org.yaml.snakeyaml.introspector';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class BeanAccess extends java_lang_Enum<org_yaml_snakeyaml_introspector_BeanAccess> {
static DEFAULT: org_yaml_snakeyaml_introspector_BeanAccess;
static FIELD: org_yaml_snakeyaml_introspector_BeanAccess;
static PROPERTY: org_yaml_snakeyaml_introspector_BeanAccess;
class: java_lang_Class<java_lang_Object>;
static values(): org_yaml_snakeyaml_introspector_BeanAccess[];
static valueOf(arg0: string): org_yaml_snakeyaml_introspector_BeanAccess;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml' {
import { Property as org_yaml_snakeyaml_introspector_Property, PropertyUtils as org_yaml_snakeyaml_introspector_PropertyUtils, PropertySubstitute as org_yaml_snakeyaml_introspector_PropertySubstitute } from 'org.yaml.snakeyaml.introspector';
import { Node as org_yaml_snakeyaml_nodes_Node, Tag as org_yaml_snakeyaml_nodes_Tag } from 'org.yaml.snakeyaml.nodes';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Set as java_util_Set } from 'java.util';

  export class TypeDescription extends java_lang_Object {
property: org_yaml_snakeyaml_introspector_Property;
properties: java_util_Set<org_yaml_snakeyaml_introspector_Property>;
type: java_lang_Class<java_lang_Object>;
tag: org_yaml_snakeyaml_nodes_Tag;
listPropertyType: java_lang_Class<java_lang_Object>;
mapKeyType: java_lang_Class<java_lang_Object>;
mapValueType: java_lang_Class<java_lang_Object>;
getProperty(arg0: string): org_yaml_snakeyaml_introspector_Property;
toString(): string;
newInstance(arg0: string, arg1: org_yaml_snakeyaml_nodes_Node): java_lang_Object;
newInstance(arg0: org_yaml_snakeyaml_nodes_Node): java_lang_Object;
getProperties(): java_util_Set<org_yaml_snakeyaml_introspector_Property>;
setProperty(arg0: java_lang_Object, arg1: string, arg2: java_lang_Object): boolean;
getType(): java_lang_Class<java_lang_Object>;
getTag(): org_yaml_snakeyaml_nodes_Tag;
finalizeConstruction(arg0: java_lang_Object): java_lang_Object;
setPropertyUtils(arg0: org_yaml_snakeyaml_introspector_PropertyUtils): void;
putListPropertyType(arg0: string, arg1: java_lang_Class<java_lang_Object>): void;
addPropertyParameters(arg0: string, ...arg1: java_lang_Class<java_lang_Object>[]): void;
getListPropertyType(arg0: string): java_lang_Class<java_lang_Object>;
putMapPropertyType(arg0: string, arg1: java_lang_Class<java_lang_Object>, arg2: java_lang_Class<java_lang_Object>): void;
getMapKeyType(arg0: string): java_lang_Class<java_lang_Object>;
getMapValueType(arg0: string): java_lang_Class<java_lang_Object>;
substituteProperty(arg0: org_yaml_snakeyaml_introspector_PropertySubstitute): void;
substituteProperty(arg0: string, arg1: java_lang_Class<java_lang_Object>, arg2: string, arg3: string, ...arg4: java_lang_Class<java_lang_Object>[]): void;
setIncludes(...arg0: string[]): void;
setupPropertyType(arg0: string, arg1: org_yaml_snakeyaml_nodes_Node): boolean;
setExcludes(...arg0: string[]): void;
setTag(arg0: org_yaml_snakeyaml_nodes_Tag): void;
setTag(arg0: string): void;
constructor(arg0: java_lang_Class<java_lang_Object>, arg1: java_lang_Class<java_lang_Object>);
constructor(arg0: java_lang_Class<java_lang_Object>);
constructor(arg0: java_lang_Class<java_lang_Object>, arg1: string);
constructor(arg0: java_lang_Class<java_lang_Object>, arg1: org_yaml_snakeyaml_nodes_Tag, arg2: java_lang_Class<java_lang_Object>);
constructor(arg0: java_lang_Class<java_lang_Object>, arg1: org_yaml_snakeyaml_nodes_Tag);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.introspector' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { List as java_util_List } from 'java.util';
import { Property as org_yaml_snakeyaml_introspector_Property } from 'org.yaml.snakeyaml.introspector';

  export class PropertySubstitute extends org_yaml_snakeyaml_introspector_Property {
name: string;
annotation: A;
annotations: java_util_List<java_lang_annotation_Annotation>;
type: java_lang_Class<java_lang_Object>;
actualTypeArguments: java_lang_Class<java_lang_Object>[];
class: java_lang_Class<java_lang_Object>;
getName(): string;
get(arg0: java_lang_Object): java_lang_Object;
getAnnotation<A extends java_lang_annotation_Annotation>(arg0: java_lang_Class<A>): A;
getAnnotations(): java_util_List<java_lang_annotation_Annotation>;
set(arg0: java_lang_Object, arg1: java_lang_Object): void;
getType(): java_lang_Class<java_lang_Object>;
getActualTypeArguments(): java_lang_Class<java_lang_Object>[];
setDelegate(arg0: org_yaml_snakeyaml_introspector_Property): void;
isReadable(): boolean;
isWritable(): boolean;
setActualTypeArguments(...arg0: java_lang_Class<java_lang_Object>[]): void;
setTargetType(arg0: java_lang_Class<java_lang_Object>): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: java_lang_Class<java_lang_Object>, arg2: string, arg3: string, ...arg4: java_lang_Class<java_lang_Object>[]);
constructor(arg0: string, arg1: java_lang_Class<java_lang_Object>, ...arg2: java_lang_Class<java_lang_Object>[]);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.constructor' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { LoaderOptions as org_yaml_snakeyaml_LoaderOptions } from 'org.yaml.snakeyaml';
import { ConstructUndefined as org_yaml_snakeyaml_constructor_SafeConstructor_ConstructUndefined } from 'org.yaml.snakeyaml.constructor.SafeConstructor';
import { BaseConstructor as org_yaml_snakeyaml_constructor_BaseConstructor } from 'org.yaml.snakeyaml.constructor';

  export class SafeConstructor extends org_yaml_snakeyaml_constructor_BaseConstructor {
static undefinedConstructor: org_yaml_snakeyaml_constructor_SafeConstructor_ConstructUndefined;
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
constructor();
constructor(arg0: org_yaml_snakeyaml_LoaderOptions);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.constructor.SafeConstructor' {
import { Node as org_yaml_snakeyaml_nodes_Node } from 'org.yaml.snakeyaml.nodes';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AbstractConstruct as org_yaml_snakeyaml_constructor_AbstractConstruct } from 'org.yaml.snakeyaml.constructor';

  export class ConstructUndefined extends org_yaml_snakeyaml_constructor_AbstractConstruct {
class: java_lang_Class<java_lang_Object>;
construct(arg0: org_yaml_snakeyaml_nodes_Node): java_lang_Object;
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
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.constructor' {
import { Node as org_yaml_snakeyaml_nodes_Node } from 'org.yaml.snakeyaml.nodes';
import { Object as java_lang_Object } from 'java.lang';
import { Construct as org_yaml_snakeyaml_constructor_Construct } from 'org.yaml.snakeyaml.constructor';

  export class AbstractConstruct extends java_lang_Object implements org_yaml_snakeyaml_constructor_Construct {

construct2ndStep(arg0: org_yaml_snakeyaml_nodes_Node, arg1: java_lang_Object): void;
construct(arg0: org_yaml_snakeyaml_nodes_Node): java_lang_Object;
constructor();
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.constructor' {
import { Node as org_yaml_snakeyaml_nodes_Node } from 'org.yaml.snakeyaml.nodes';
import { Object as java_lang_Object } from 'java.lang';

  export class Construct {

construct2ndStep(arg0: org_yaml_snakeyaml_nodes_Node, arg1: java_lang_Object): void;
construct(arg0: org_yaml_snakeyaml_nodes_Node): java_lang_Object;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.constructor' {
import { Composer as org_yaml_snakeyaml_composer_Composer } from 'org.yaml.snakeyaml.composer';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { PropertyUtils as org_yaml_snakeyaml_introspector_PropertyUtils } from 'org.yaml.snakeyaml.introspector';
import { TypeDescription as org_yaml_snakeyaml_TypeDescription, LoaderOptions as org_yaml_snakeyaml_LoaderOptions } from 'org.yaml.snakeyaml';

  export class BaseConstructor extends java_lang_Object {
singleData: java_lang_Object;
propertyUtils: org_yaml_snakeyaml_introspector_PropertyUtils;
data: java_lang_Object;
setComposer(arg0: org_yaml_snakeyaml_composer_Composer): void;
checkData(): boolean;
getSingleData(arg0: java_lang_Class<java_lang_Object>): java_lang_Object;
setPropertyUtils(arg0: org_yaml_snakeyaml_introspector_PropertyUtils): void;
getPropertyUtils(): org_yaml_snakeyaml_introspector_PropertyUtils;
addTypeDescription(arg0: org_yaml_snakeyaml_TypeDescription): org_yaml_snakeyaml_TypeDescription;
isExplicitPropertyUtils(): boolean;
isAllowDuplicateKeys(): boolean;
setAllowDuplicateKeys(arg0: boolean): void;
isWrappedToRootException(): boolean;
setWrappedToRootException(arg0: boolean): void;
getData(): java_lang_Object;
constructor();
constructor(arg0: org_yaml_snakeyaml_LoaderOptions);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.DumperOptions' {
import { FlowStyle as org_yaml_snakeyaml_DumperOptions_FlowStyle } from 'org.yaml.snakeyaml.DumperOptions';
import { Boolean as java_lang_Boolean, Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FlowStyle extends java_lang_Enum<org_yaml_snakeyaml_DumperOptions_FlowStyle> {
static FLOW: org_yaml_snakeyaml_DumperOptions_FlowStyle;
static BLOCK: org_yaml_snakeyaml_DumperOptions_FlowStyle;
static AUTO: org_yaml_snakeyaml_DumperOptions_FlowStyle;
styleBoolean: java_lang_Boolean;
class: java_lang_Class<java_lang_Object>;
toString(): string;
static values(): org_yaml_snakeyaml_DumperOptions_FlowStyle[];
static valueOf(arg0: string): org_yaml_snakeyaml_DumperOptions_FlowStyle;
static fromBoolean(arg0: java_lang_Boolean): org_yaml_snakeyaml_DumperOptions_FlowStyle;
getStyleBoolean(): java_lang_Boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.DumperOptions' {
import { ScalarStyle as org_yaml_snakeyaml_DumperOptions_ScalarStyle } from 'org.yaml.snakeyaml.DumperOptions';
import { Character as java_lang_Character, Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ScalarStyle extends java_lang_Enum<org_yaml_snakeyaml_DumperOptions_ScalarStyle> {
static DOUBLE_QUOTED: org_yaml_snakeyaml_DumperOptions_ScalarStyle;
static SINGLE_QUOTED: org_yaml_snakeyaml_DumperOptions_ScalarStyle;
static LITERAL: org_yaml_snakeyaml_DumperOptions_ScalarStyle;
static FOLDED: org_yaml_snakeyaml_DumperOptions_ScalarStyle;
static PLAIN: org_yaml_snakeyaml_DumperOptions_ScalarStyle;
char: java_lang_Character;
class: java_lang_Class<java_lang_Object>;
toString(): string;
static values(): org_yaml_snakeyaml_DumperOptions_ScalarStyle[];
getChar(): java_lang_Character;
static valueOf(arg0: string): org_yaml_snakeyaml_DumperOptions_ScalarStyle;
static createStyle(arg0: java_lang_Character): org_yaml_snakeyaml_DumperOptions_ScalarStyle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.representer' {
import { TimeZone as java_util_TimeZone } from 'java.util';
import { PropertyUtils as org_yaml_snakeyaml_introspector_PropertyUtils } from 'org.yaml.snakeyaml.introspector';
import { TypeDescription as org_yaml_snakeyaml_TypeDescription, DumperOptions as org_yaml_snakeyaml_DumperOptions } from 'org.yaml.snakeyaml';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Tag as org_yaml_snakeyaml_nodes_Tag, Node as org_yaml_snakeyaml_nodes_Node } from 'org.yaml.snakeyaml.nodes';
import { FlowStyle as org_yaml_snakeyaml_DumperOptions_FlowStyle, ScalarStyle as org_yaml_snakeyaml_DumperOptions_ScalarStyle } from 'org.yaml.snakeyaml.DumperOptions';
import { SafeRepresenter as org_yaml_snakeyaml_representer_SafeRepresenter } from 'org.yaml.snakeyaml.representer';

  export class Representer extends org_yaml_snakeyaml_representer_SafeRepresenter {
timeZone: java_util_TimeZone;
propertyUtils: org_yaml_snakeyaml_introspector_PropertyUtils;
defaultScalarStyle: org_yaml_snakeyaml_DumperOptions_ScalarStyle;
defaultFlowStyle: org_yaml_snakeyaml_DumperOptions_FlowStyle;
class: java_lang_Class<java_lang_Object>;
setTimeZone(arg0: java_util_TimeZone): void;
getTimeZone(): java_util_TimeZone;
setPropertyUtils(arg0: org_yaml_snakeyaml_introspector_PropertyUtils): void;
addTypeDescription(arg0: org_yaml_snakeyaml_TypeDescription): org_yaml_snakeyaml_TypeDescription;
addClassTag(arg0: java_lang_Class, arg1: org_yaml_snakeyaml_nodes_Tag): org_yaml_snakeyaml_nodes_Tag;
getPropertyUtils(): org_yaml_snakeyaml_introspector_PropertyUtils;
isExplicitPropertyUtils(): boolean;
setDefaultFlowStyle(arg0: org_yaml_snakeyaml_DumperOptions_FlowStyle): void;
represent(arg0: java_lang_Object): org_yaml_snakeyaml_nodes_Node;
setDefaultScalarStyle(arg0: org_yaml_snakeyaml_DumperOptions_ScalarStyle): void;
getDefaultScalarStyle(): org_yaml_snakeyaml_DumperOptions_ScalarStyle;
getDefaultFlowStyle(): org_yaml_snakeyaml_DumperOptions_FlowStyle;
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
constructor(arg0: org_yaml_snakeyaml_DumperOptions);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml' {
import { Version as org_yaml_snakeyaml_DumperOptions_Version, FlowStyle as org_yaml_snakeyaml_DumperOptions_FlowStyle, NonPrintableStyle as org_yaml_snakeyaml_DumperOptions_NonPrintableStyle, LineBreak as org_yaml_snakeyaml_DumperOptions_LineBreak, ScalarStyle as org_yaml_snakeyaml_DumperOptions_ScalarStyle } from 'org.yaml.snakeyaml.DumperOptions';
import { TimeZone as java_util_TimeZone, Map as java_util_Map } from 'java.util';
import { AnchorGenerator as org_yaml_snakeyaml_serializer_AnchorGenerator } from 'org.yaml.snakeyaml.serializer';
import { Object as java_lang_Object } from 'java.lang';

  export class DumperOptions extends java_lang_Object {
version: org_yaml_snakeyaml_DumperOptions_Version;
timeZone: java_util_TimeZone;
nonPrintableStyle: org_yaml_snakeyaml_DumperOptions_NonPrintableStyle;
indent: number;
indicatorIndent: number;
splitLines: boolean;
lineBreak: org_yaml_snakeyaml_DumperOptions_LineBreak;
anchorGenerator: org_yaml_snakeyaml_serializer_AnchorGenerator;
maxSimpleKeyLength: number;
defaultScalarStyle: org_yaml_snakeyaml_DumperOptions_ScalarStyle;
defaultFlowStyle: org_yaml_snakeyaml_DumperOptions_FlowStyle;
tags: java_util_Map<string, string>;
width: number;
getVersion(): org_yaml_snakeyaml_DumperOptions_Version;
setTimeZone(arg0: java_util_TimeZone): void;
getTimeZone(): java_util_TimeZone;
setDefaultFlowStyle(arg0: org_yaml_snakeyaml_DumperOptions_FlowStyle): void;
getNonPrintableStyle(): org_yaml_snakeyaml_DumperOptions_NonPrintableStyle;
isAllowUnicode(): boolean;
setAllowUnicode(arg0: boolean): void;
getIndent(): number;
setIndicatorIndent(arg0: number): void;
getIndicatorIndent(): number;
setCanonical(arg0: boolean): void;
isCanonical(): boolean;
setPrettyFlow(arg0: boolean): void;
isPrettyFlow(): boolean;
setWidth(arg0: number): void;
setSplitLines(arg0: boolean): void;
getSplitLines(): boolean;
getLineBreak(): org_yaml_snakeyaml_DumperOptions_LineBreak;
setLineBreak(arg0: org_yaml_snakeyaml_DumperOptions_LineBreak): void;
isExplicitStart(): boolean;
setExplicitStart(arg0: boolean): void;
isExplicitEnd(): boolean;
setExplicitEnd(arg0: boolean): void;
setTags(arg0: java_util_Map<string, string>): void;
isAllowReadOnlyProperties(): boolean;
setAllowReadOnlyProperties(arg0: boolean): void;
getAnchorGenerator(): org_yaml_snakeyaml_serializer_AnchorGenerator;
setAnchorGenerator(arg0: org_yaml_snakeyaml_serializer_AnchorGenerator): void;
getMaxSimpleKeyLength(): number;
setMaxSimpleKeyLength(arg0: number): void;
setNonPrintableStyle(arg0: org_yaml_snakeyaml_DumperOptions_NonPrintableStyle): void;
setDefaultScalarStyle(arg0: org_yaml_snakeyaml_DumperOptions_ScalarStyle): void;
getDefaultScalarStyle(): org_yaml_snakeyaml_DumperOptions_ScalarStyle;
getDefaultFlowStyle(): org_yaml_snakeyaml_DumperOptions_FlowStyle;
setVersion(arg0: org_yaml_snakeyaml_DumperOptions_Version): void;
getTags(): java_util_Map<string, string>;
getWidth(): number;
setIndent(arg0: number): void;
constructor();
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.DumperOptions' {
import { Version as org_yaml_snakeyaml_DumperOptions_Version } from 'org.yaml.snakeyaml.DumperOptions';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Version extends java_lang_Enum<org_yaml_snakeyaml_DumperOptions_Version> {
static V1_0: org_yaml_snakeyaml_DumperOptions_Version;
static V1_1: org_yaml_snakeyaml_DumperOptions_Version;
representation: string;
class: java_lang_Class<java_lang_Object>;
toString(): string;
static values(): org_yaml_snakeyaml_DumperOptions_Version[];
static valueOf(arg0: string): org_yaml_snakeyaml_DumperOptions_Version;
major(): number;
minor(): number;
getRepresentation(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.DumperOptions' {
import { NonPrintableStyle as org_yaml_snakeyaml_DumperOptions_NonPrintableStyle } from 'org.yaml.snakeyaml.DumperOptions';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class NonPrintableStyle extends java_lang_Enum<org_yaml_snakeyaml_DumperOptions_NonPrintableStyle> {
static BINARY: org_yaml_snakeyaml_DumperOptions_NonPrintableStyle;
static ESCAPE: org_yaml_snakeyaml_DumperOptions_NonPrintableStyle;
class: java_lang_Class<java_lang_Object>;
static values(): org_yaml_snakeyaml_DumperOptions_NonPrintableStyle[];
static valueOf(arg0: string): org_yaml_snakeyaml_DumperOptions_NonPrintableStyle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.DumperOptions' {
import { LineBreak as org_yaml_snakeyaml_DumperOptions_LineBreak } from 'org.yaml.snakeyaml.DumperOptions';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class LineBreak extends java_lang_Enum<org_yaml_snakeyaml_DumperOptions_LineBreak> {
static WIN: org_yaml_snakeyaml_DumperOptions_LineBreak;
static MAC: org_yaml_snakeyaml_DumperOptions_LineBreak;
static UNIX: org_yaml_snakeyaml_DumperOptions_LineBreak;
string: string;
static platformLineBreak: org_yaml_snakeyaml_DumperOptions_LineBreak;
class: java_lang_Class<java_lang_Object>;
toString(): string;
static values(): org_yaml_snakeyaml_DumperOptions_LineBreak[];
static valueOf(arg0: string): org_yaml_snakeyaml_DumperOptions_LineBreak;
getString(): string;
static getPlatformLineBreak(): org_yaml_snakeyaml_DumperOptions_LineBreak;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.serializer' {
import { Node as org_yaml_snakeyaml_nodes_Node } from 'org.yaml.snakeyaml.nodes';

  export class AnchorGenerator {

nextAnchor(arg0: org_yaml_snakeyaml_nodes_Node): string;

  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.representer' {
import { TimeZone as java_util_TimeZone } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Tag as org_yaml_snakeyaml_nodes_Tag } from 'org.yaml.snakeyaml.nodes';
import { DumperOptions as org_yaml_snakeyaml_DumperOptions } from 'org.yaml.snakeyaml';
import { BaseRepresenter as org_yaml_snakeyaml_representer_BaseRepresenter } from 'org.yaml.snakeyaml.representer';

  export class SafeRepresenter extends org_yaml_snakeyaml_representer_BaseRepresenter {
timeZone: java_util_TimeZone;
class: java_lang_Class<java_lang_Object>;
setTimeZone(arg0: java_util_TimeZone): void;
getTimeZone(): java_util_TimeZone;
addClassTag(arg0: java_lang_Class<java_lang_Object>, arg1: org_yaml_snakeyaml_nodes_Tag): org_yaml_snakeyaml_nodes_Tag;
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
constructor(arg0: org_yaml_snakeyaml_DumperOptions);
  }
}
//@ts-nocheck

declare module 'org.yaml.snakeyaml.representer' {
import { PropertyUtils as org_yaml_snakeyaml_introspector_PropertyUtils } from 'org.yaml.snakeyaml.introspector';
import { FlowStyle as org_yaml_snakeyaml_DumperOptions_FlowStyle, ScalarStyle as org_yaml_snakeyaml_DumperOptions_ScalarStyle } from 'org.yaml.snakeyaml.DumperOptions';
import { Object as java_lang_Object } from 'java.lang';
import { Node as org_yaml_snakeyaml_nodes_Node } from 'org.yaml.snakeyaml.nodes';

  export class BaseRepresenter extends java_lang_Object {
propertyUtils: org_yaml_snakeyaml_introspector_PropertyUtils;
defaultScalarStyle: org_yaml_snakeyaml_DumperOptions_ScalarStyle;
defaultFlowStyle: org_yaml_snakeyaml_DumperOptions_FlowStyle;
setPropertyUtils(arg0: org_yaml_snakeyaml_introspector_PropertyUtils): void;
getPropertyUtils(): org_yaml_snakeyaml_introspector_PropertyUtils;
isExplicitPropertyUtils(): boolean;
setDefaultFlowStyle(arg0: org_yaml_snakeyaml_DumperOptions_FlowStyle): void;
represent(arg0: java_lang_Object): org_yaml_snakeyaml_nodes_Node;
setDefaultScalarStyle(arg0: org_yaml_snakeyaml_DumperOptions_ScalarStyle): void;
getDefaultScalarStyle(): org_yaml_snakeyaml_DumperOptions_ScalarStyle;
getDefaultFlowStyle(): org_yaml_snakeyaml_DumperOptions_FlowStyle;
constructor();
  }
}