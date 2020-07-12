//@ts-nocheck

declare module 'sun.reflect.generics.repository' {
import { GenericsFactory as sun_reflect_generics_factory_GenericsFactory } from 'sun.reflect.generics.factory';
import { FieldRepository as sun_reflect_generics_repository_FieldRepository, AbstractRepository as sun_reflect_generics_repository_AbstractRepository } from 'sun.reflect.generics.repository';
import { Type as java_lang_reflect_Type } from 'java.lang.reflect';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { TypeSignature as sun_reflect_generics_tree_TypeSignature } from 'sun.reflect.generics.tree';

  export class FieldRepository extends sun_reflect_generics_repository_AbstractRepository<sun_reflect_generics_tree_TypeSignature> {
genericType: java_lang_reflect_Type;
genericType: java_lang_reflect_Type;
class: java_lang_Class<java_lang_Object>;
static make(arg0: string, arg1: sun_reflect_generics_factory_GenericsFactory): sun_reflect_generics_repository_FieldRepository;
getGenericType(): java_lang_reflect_Type;
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

declare module 'sun.reflect.generics.factory' {
import { Type as java_lang_reflect_Type, TypeVariable as java_lang_reflect_TypeVariable, WildcardType as java_lang_reflect_WildcardType, ParameterizedType as java_lang_reflect_ParameterizedType } from 'java.lang.reflect';
import { FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature } from 'sun.reflect.generics.tree';
import { Object as java_lang_Object } from 'java.lang';

  export class GenericsFactory {

makeDouble(): java_lang_reflect_Type;
makeLong(): java_lang_reflect_Type;
makeInt(): java_lang_reflect_Type;
makeShort(): java_lang_reflect_Type;
makeTypeVariable(arg0: string, arg1: sun_reflect_generics_tree_FieldTypeSignature[]): java_lang_reflect_TypeVariable<java_lang_Object>;
makeWildcard(arg0: sun_reflect_generics_tree_FieldTypeSignature[], arg1: sun_reflect_generics_tree_FieldTypeSignature[]): java_lang_reflect_WildcardType;
makeParameterizedType(arg0: java_lang_reflect_Type, arg1: java_lang_reflect_Type[], arg2: java_lang_reflect_Type): java_lang_reflect_ParameterizedType;
findTypeVariable(arg0: string): java_lang_reflect_TypeVariable<java_lang_Object>;
makeNamedType(arg0: string): java_lang_reflect_Type;
makeArrayType(arg0: java_lang_reflect_Type): java_lang_reflect_Type;
makeByte(): java_lang_reflect_Type;
makeBool(): java_lang_reflect_Type;
makeChar(): java_lang_reflect_Type;
makeFloat(): java_lang_reflect_Type;
makeVoid(): java_lang_reflect_Type;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';
import { BaseType as sun_reflect_generics_tree_BaseType, TypeSignature as sun_reflect_generics_tree_TypeSignature, TypeArgument as sun_reflect_generics_tree_TypeArgument } from 'sun.reflect.generics.tree';

  export class FieldTypeSignature implements sun_reflect_generics_tree_BaseType, sun_reflect_generics_tree_TypeSignature, sun_reflect_generics_tree_TypeArgument {

accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.visitor' {
import { SimpleClassTypeSignature as sun_reflect_generics_tree_SimpleClassTypeSignature, ClassTypeSignature as sun_reflect_generics_tree_ClassTypeSignature, FormalTypeParameter as sun_reflect_generics_tree_FormalTypeParameter, ArrayTypeSignature as sun_reflect_generics_tree_ArrayTypeSignature, TypeVariableSignature as sun_reflect_generics_tree_TypeVariableSignature, Wildcard as sun_reflect_generics_tree_Wildcard, BottomSignature as sun_reflect_generics_tree_BottomSignature, ByteSignature as sun_reflect_generics_tree_ByteSignature, BooleanSignature as sun_reflect_generics_tree_BooleanSignature, ShortSignature as sun_reflect_generics_tree_ShortSignature, CharSignature as sun_reflect_generics_tree_CharSignature, IntSignature as sun_reflect_generics_tree_IntSignature, LongSignature as sun_reflect_generics_tree_LongSignature, FloatSignature as sun_reflect_generics_tree_FloatSignature, DoubleSignature as sun_reflect_generics_tree_DoubleSignature, VoidDescriptor as sun_reflect_generics_tree_VoidDescriptor } from 'sun.reflect.generics.tree';
import { Object as java_lang_Object } from 'java.lang';

  export class TypeTreeVisitor<T extends java_lang_Object> {
result: T;
getResult(): T;
visitSimpleClassTypeSignature(arg0: sun_reflect_generics_tree_SimpleClassTypeSignature): void;
visitClassTypeSignature(arg0: sun_reflect_generics_tree_ClassTypeSignature): void;
visitFormalTypeParameter(arg0: sun_reflect_generics_tree_FormalTypeParameter): void;
visitArrayTypeSignature(arg0: sun_reflect_generics_tree_ArrayTypeSignature): void;
visitTypeVariableSignature(arg0: sun_reflect_generics_tree_TypeVariableSignature): void;
visitWildcard(arg0: sun_reflect_generics_tree_Wildcard): void;
visitBottomSignature(arg0: sun_reflect_generics_tree_BottomSignature): void;
visitByteSignature(arg0: sun_reflect_generics_tree_ByteSignature): void;
visitBooleanSignature(arg0: sun_reflect_generics_tree_BooleanSignature): void;
visitShortSignature(arg0: sun_reflect_generics_tree_ShortSignature): void;
visitCharSignature(arg0: sun_reflect_generics_tree_CharSignature): void;
visitIntSignature(arg0: sun_reflect_generics_tree_IntSignature): void;
visitLongSignature(arg0: sun_reflect_generics_tree_LongSignature): void;
visitFloatSignature(arg0: sun_reflect_generics_tree_FloatSignature): void;
visitDoubleSignature(arg0: sun_reflect_generics_tree_DoubleSignature): void;
visitVoidDescriptor(arg0: sun_reflect_generics_tree_VoidDescriptor): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeArgument as sun_reflect_generics_tree_TypeArgument, SimpleClassTypeSignature as sun_reflect_generics_tree_SimpleClassTypeSignature, FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class SimpleClassTypeSignature extends java_lang_Object implements sun_reflect_generics_tree_FieldTypeSignature {
dollar: boolean;
name: string;
typeArgs: sun_reflect_generics_tree_TypeArgument[];
name: string;
dollar: boolean;
typeArguments: sun_reflect_generics_tree_TypeArgument[];
getName(): string;
static make(arg0: string, arg1: boolean, arg2: sun_reflect_generics_tree_TypeArgument[]): sun_reflect_generics_tree_SimpleClassTypeSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;
getDollar(): boolean;
getTypeArguments(): sun_reflect_generics_tree_TypeArgument[];

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';
import { TypeTree as sun_reflect_generics_tree_TypeTree } from 'sun.reflect.generics.tree';

  export class TypeArgument implements sun_reflect_generics_tree_TypeTree {

accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';
import { Tree as sun_reflect_generics_tree_Tree } from 'sun.reflect.generics.tree';

  export class TypeTree implements sun_reflect_generics_tree_Tree {

accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {

/** Represents the different types of Tree block that face a direction. */

  export class Tree {



  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { List as java_util_List } from 'java.util';
import { SimpleClassTypeSignature as sun_reflect_generics_tree_SimpleClassTypeSignature, ClassTypeSignature as sun_reflect_generics_tree_ClassTypeSignature, FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class ClassTypeSignature extends java_lang_Object implements sun_reflect_generics_tree_FieldTypeSignature {
path: java_util_List<sun_reflect_generics_tree_SimpleClassTypeSignature>;
path: java_util_List<sun_reflect_generics_tree_SimpleClassTypeSignature>;
static make(arg0: java_util_List<sun_reflect_generics_tree_SimpleClassTypeSignature>): sun_reflect_generics_tree_ClassTypeSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;
getPath(): java_util_List<sun_reflect_generics_tree_SimpleClassTypeSignature>;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature, FormalTypeParameter as sun_reflect_generics_tree_FormalTypeParameter, TypeTree as sun_reflect_generics_tree_TypeTree } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class FormalTypeParameter extends java_lang_Object implements sun_reflect_generics_tree_TypeTree {
name: string;
bounds: sun_reflect_generics_tree_FieldTypeSignature[];
name: string;
bounds: sun_reflect_generics_tree_FieldTypeSignature[];
getName(): string;
static make(arg0: string, arg1: sun_reflect_generics_tree_FieldTypeSignature[]): sun_reflect_generics_tree_FormalTypeParameter;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;
getBounds(): sun_reflect_generics_tree_FieldTypeSignature[];

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeSignature as sun_reflect_generics_tree_TypeSignature, ArrayTypeSignature as sun_reflect_generics_tree_ArrayTypeSignature, FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class ArrayTypeSignature extends java_lang_Object implements sun_reflect_generics_tree_FieldTypeSignature {
componentType: sun_reflect_generics_tree_TypeSignature;
componentType: sun_reflect_generics_tree_TypeSignature;
getComponentType(): sun_reflect_generics_tree_TypeSignature;
static make(arg0: sun_reflect_generics_tree_TypeSignature): sun_reflect_generics_tree_ArrayTypeSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';
import { ReturnType as sun_reflect_generics_tree_ReturnType } from 'sun.reflect.generics.tree';

  export class TypeSignature implements sun_reflect_generics_tree_ReturnType {

accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';
import { TypeTree as sun_reflect_generics_tree_TypeTree } from 'sun.reflect.generics.tree';

  export class ReturnType implements sun_reflect_generics_tree_TypeTree {

accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeVariableSignature as sun_reflect_generics_tree_TypeVariableSignature, FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class TypeVariableSignature extends java_lang_Object implements sun_reflect_generics_tree_FieldTypeSignature {
identifier: string;
identifier: string;
static make(arg0: string): sun_reflect_generics_tree_TypeVariableSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;
getIdentifier(): string;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature, Wildcard as sun_reflect_generics_tree_Wildcard, TypeArgument as sun_reflect_generics_tree_TypeArgument } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class Wildcard extends java_lang_Object implements sun_reflect_generics_tree_TypeArgument {
upperBounds: sun_reflect_generics_tree_FieldTypeSignature[];
lowerBounds: sun_reflect_generics_tree_FieldTypeSignature[];
static emptyBounds: sun_reflect_generics_tree_FieldTypeSignature[];
upperBounds: sun_reflect_generics_tree_FieldTypeSignature[];
lowerBounds: sun_reflect_generics_tree_FieldTypeSignature[];
static make(arg0: sun_reflect_generics_tree_FieldTypeSignature[], arg1: sun_reflect_generics_tree_FieldTypeSignature[]): sun_reflect_generics_tree_Wildcard;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;
getUpperBounds(): sun_reflect_generics_tree_FieldTypeSignature[];
getLowerBounds(): sun_reflect_generics_tree_FieldTypeSignature[];

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { BottomSignature as sun_reflect_generics_tree_BottomSignature, FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class BottomSignature extends java_lang_Object implements sun_reflect_generics_tree_FieldTypeSignature {
static singleton: sun_reflect_generics_tree_BottomSignature;
static make(): sun_reflect_generics_tree_BottomSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { ByteSignature as sun_reflect_generics_tree_ByteSignature, BaseType as sun_reflect_generics_tree_BaseType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class ByteSignature extends java_lang_Object implements sun_reflect_generics_tree_BaseType {
static singleton: sun_reflect_generics_tree_ByteSignature;
static make(): sun_reflect_generics_tree_ByteSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';
import { TypeSignature as sun_reflect_generics_tree_TypeSignature } from 'sun.reflect.generics.tree';

  export class BaseType implements sun_reflect_generics_tree_TypeSignature {

accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { BooleanSignature as sun_reflect_generics_tree_BooleanSignature, BaseType as sun_reflect_generics_tree_BaseType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class BooleanSignature extends java_lang_Object implements sun_reflect_generics_tree_BaseType {
static singleton: sun_reflect_generics_tree_BooleanSignature;
static make(): sun_reflect_generics_tree_BooleanSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { ShortSignature as sun_reflect_generics_tree_ShortSignature, BaseType as sun_reflect_generics_tree_BaseType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class ShortSignature extends java_lang_Object implements sun_reflect_generics_tree_BaseType {
static singleton: sun_reflect_generics_tree_ShortSignature;
static make(): sun_reflect_generics_tree_ShortSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { CharSignature as sun_reflect_generics_tree_CharSignature, BaseType as sun_reflect_generics_tree_BaseType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class CharSignature extends java_lang_Object implements sun_reflect_generics_tree_BaseType {
static singleton: sun_reflect_generics_tree_CharSignature;
static make(): sun_reflect_generics_tree_CharSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { IntSignature as sun_reflect_generics_tree_IntSignature, BaseType as sun_reflect_generics_tree_BaseType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class IntSignature extends java_lang_Object implements sun_reflect_generics_tree_BaseType {
static singleton: sun_reflect_generics_tree_IntSignature;
static make(): sun_reflect_generics_tree_IntSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { LongSignature as sun_reflect_generics_tree_LongSignature, BaseType as sun_reflect_generics_tree_BaseType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class LongSignature extends java_lang_Object implements sun_reflect_generics_tree_BaseType {
static singleton: sun_reflect_generics_tree_LongSignature;
static make(): sun_reflect_generics_tree_LongSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { FloatSignature as sun_reflect_generics_tree_FloatSignature, BaseType as sun_reflect_generics_tree_BaseType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class FloatSignature extends java_lang_Object implements sun_reflect_generics_tree_BaseType {
static singleton: sun_reflect_generics_tree_FloatSignature;
static make(): sun_reflect_generics_tree_FloatSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { DoubleSignature as sun_reflect_generics_tree_DoubleSignature, BaseType as sun_reflect_generics_tree_BaseType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class DoubleSignature extends java_lang_Object implements sun_reflect_generics_tree_BaseType {
static singleton: sun_reflect_generics_tree_DoubleSignature;
static make(): sun_reflect_generics_tree_DoubleSignature;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { VoidDescriptor as sun_reflect_generics_tree_VoidDescriptor, ReturnType as sun_reflect_generics_tree_ReturnType } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class VoidDescriptor extends java_lang_Object implements sun_reflect_generics_tree_ReturnType {
static singleton: sun_reflect_generics_tree_VoidDescriptor;
static make(): sun_reflect_generics_tree_VoidDescriptor;
accept(arg0: sun_reflect_generics_visitor_TypeTreeVisitor<java_lang_Object>): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.repository' {
import { GenericsFactory as sun_reflect_generics_factory_GenericsFactory } from 'sun.reflect.generics.factory';
import { Object as java_lang_Object } from 'java.lang';
import { Tree as sun_reflect_generics_tree_Tree } from 'sun.reflect.generics.tree';

  export class AbstractRepository<T extends sun_reflect_generics_tree_Tree> extends java_lang_Object {
factory: sun_reflect_generics_factory_GenericsFactory;
tree: T;


  }
}//@ts-nocheck

declare module 'sun.reflect.generics.repository' {
import { GenericsFactory as sun_reflect_generics_factory_GenericsFactory } from 'sun.reflect.generics.factory';
import { ConstructorRepository as sun_reflect_generics_repository_ConstructorRepository, GenericDeclRepository as sun_reflect_generics_repository_GenericDeclRepository } from 'sun.reflect.generics.repository';
import { Type as java_lang_reflect_Type } from 'java.lang.reflect';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { MethodTypeSignature as sun_reflect_generics_tree_MethodTypeSignature } from 'sun.reflect.generics.tree';

  export class ConstructorRepository extends sun_reflect_generics_repository_GenericDeclRepository<sun_reflect_generics_tree_MethodTypeSignature> {
parameterTypes: java_lang_reflect_Type[];
exceptionTypes: java_lang_reflect_Type[];
parameterTypes: java_lang_reflect_Type[];
exceptionTypes: java_lang_reflect_Type[];
class: java_lang_Class<java_lang_Object>;
static make(arg0: string, arg1: sun_reflect_generics_factory_GenericsFactory): sun_reflect_generics_repository_ConstructorRepository;
getParameterTypes(): java_lang_reflect_Type[];
getExceptionTypes(): java_lang_reflect_Type[];
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

declare module 'sun.reflect.generics.repository' {
import { TypeVariable as java_lang_reflect_TypeVariable } from 'java.lang.reflect';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AbstractRepository as sun_reflect_generics_repository_AbstractRepository } from 'sun.reflect.generics.repository';
import { Signature as sun_reflect_generics_tree_Signature } from 'sun.reflect.generics.tree';

  export class GenericDeclRepository<S extends sun_reflect_generics_tree_Signature> extends sun_reflect_generics_repository_AbstractRepository<S> {
typeParameters: java_lang_reflect_TypeVariable<java_lang_Object>[];
typeParameters: java_lang_reflect_TypeVariable<java_lang_Object>[];
class: java_lang_Class<java_lang_Object>;
getTypeParameters(): java_lang_reflect_TypeVariable<java_lang_Object>[];
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

declare module 'sun.reflect.generics.tree' {
import { FormalTypeParameter as sun_reflect_generics_tree_FormalTypeParameter, Tree as sun_reflect_generics_tree_Tree } from 'sun.reflect.generics.tree';

  export class Signature implements sun_reflect_generics_tree_Tree {
formalTypeParameters: sun_reflect_generics_tree_FormalTypeParameter[];
getFormalTypeParameters(): sun_reflect_generics_tree_FormalTypeParameter[];

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { FormalTypeParameter as sun_reflect_generics_tree_FormalTypeParameter, TypeSignature as sun_reflect_generics_tree_TypeSignature, ReturnType as sun_reflect_generics_tree_ReturnType, FieldTypeSignature as sun_reflect_generics_tree_FieldTypeSignature, MethodTypeSignature as sun_reflect_generics_tree_MethodTypeSignature, Signature as sun_reflect_generics_tree_Signature } from 'sun.reflect.generics.tree';
import { Visitor as sun_reflect_generics_visitor_Visitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class MethodTypeSignature extends java_lang_Object implements sun_reflect_generics_tree_Signature {
formalTypeParams: sun_reflect_generics_tree_FormalTypeParameter[];
parameterTypes: sun_reflect_generics_tree_TypeSignature[];
returnType: sun_reflect_generics_tree_ReturnType;
exceptionTypes: sun_reflect_generics_tree_FieldTypeSignature[];
returnType: sun_reflect_generics_tree_ReturnType;
parameterTypes: sun_reflect_generics_tree_TypeSignature[];
exceptionTypes: sun_reflect_generics_tree_FieldTypeSignature[];
formalTypeParameters: sun_reflect_generics_tree_FormalTypeParameter[];
static make(arg0: sun_reflect_generics_tree_FormalTypeParameter[], arg1: sun_reflect_generics_tree_TypeSignature[], arg2: sun_reflect_generics_tree_ReturnType, arg3: sun_reflect_generics_tree_FieldTypeSignature[]): sun_reflect_generics_tree_MethodTypeSignature;
getReturnType(): sun_reflect_generics_tree_ReturnType;
getParameterTypes(): sun_reflect_generics_tree_TypeSignature[];
accept(arg0: sun_reflect_generics_visitor_Visitor<java_lang_Object>): void;
getExceptionTypes(): sun_reflect_generics_tree_FieldTypeSignature[];
getFormalTypeParameters(): sun_reflect_generics_tree_FormalTypeParameter[];

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.visitor' {
import { MethodTypeSignature as sun_reflect_generics_tree_MethodTypeSignature, ClassSignature as sun_reflect_generics_tree_ClassSignature, SimpleClassTypeSignature as sun_reflect_generics_tree_SimpleClassTypeSignature, ClassTypeSignature as sun_reflect_generics_tree_ClassTypeSignature, FormalTypeParameter as sun_reflect_generics_tree_FormalTypeParameter, ArrayTypeSignature as sun_reflect_generics_tree_ArrayTypeSignature, TypeVariableSignature as sun_reflect_generics_tree_TypeVariableSignature, Wildcard as sun_reflect_generics_tree_Wildcard, BottomSignature as sun_reflect_generics_tree_BottomSignature, ByteSignature as sun_reflect_generics_tree_ByteSignature, BooleanSignature as sun_reflect_generics_tree_BooleanSignature, ShortSignature as sun_reflect_generics_tree_ShortSignature, CharSignature as sun_reflect_generics_tree_CharSignature, IntSignature as sun_reflect_generics_tree_IntSignature, LongSignature as sun_reflect_generics_tree_LongSignature, FloatSignature as sun_reflect_generics_tree_FloatSignature, DoubleSignature as sun_reflect_generics_tree_DoubleSignature, VoidDescriptor as sun_reflect_generics_tree_VoidDescriptor } from 'sun.reflect.generics.tree';
import { TypeTreeVisitor as sun_reflect_generics_visitor_TypeTreeVisitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class Visitor<T extends java_lang_Object> implements sun_reflect_generics_visitor_TypeTreeVisitor<T> {
result: T;
visitMethodTypeSignature(arg0: sun_reflect_generics_tree_MethodTypeSignature): void;
visitClassSignature(arg0: sun_reflect_generics_tree_ClassSignature): void;
getResult(): T;
visitSimpleClassTypeSignature(arg0: sun_reflect_generics_tree_SimpleClassTypeSignature): void;
visitClassTypeSignature(arg0: sun_reflect_generics_tree_ClassTypeSignature): void;
visitFormalTypeParameter(arg0: sun_reflect_generics_tree_FormalTypeParameter): void;
visitArrayTypeSignature(arg0: sun_reflect_generics_tree_ArrayTypeSignature): void;
visitTypeVariableSignature(arg0: sun_reflect_generics_tree_TypeVariableSignature): void;
visitWildcard(arg0: sun_reflect_generics_tree_Wildcard): void;
visitBottomSignature(arg0: sun_reflect_generics_tree_BottomSignature): void;
visitByteSignature(arg0: sun_reflect_generics_tree_ByteSignature): void;
visitBooleanSignature(arg0: sun_reflect_generics_tree_BooleanSignature): void;
visitShortSignature(arg0: sun_reflect_generics_tree_ShortSignature): void;
visitCharSignature(arg0: sun_reflect_generics_tree_CharSignature): void;
visitIntSignature(arg0: sun_reflect_generics_tree_IntSignature): void;
visitLongSignature(arg0: sun_reflect_generics_tree_LongSignature): void;
visitFloatSignature(arg0: sun_reflect_generics_tree_FloatSignature): void;
visitDoubleSignature(arg0: sun_reflect_generics_tree_DoubleSignature): void;
visitVoidDescriptor(arg0: sun_reflect_generics_tree_VoidDescriptor): void;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.tree' {
import { ClassTypeSignature as sun_reflect_generics_tree_ClassTypeSignature, FormalTypeParameter as sun_reflect_generics_tree_FormalTypeParameter, ClassSignature as sun_reflect_generics_tree_ClassSignature, Signature as sun_reflect_generics_tree_Signature } from 'sun.reflect.generics.tree';
import { Visitor as sun_reflect_generics_visitor_Visitor } from 'sun.reflect.generics.visitor';
import { Object as java_lang_Object } from 'java.lang';

  export class ClassSignature extends java_lang_Object implements sun_reflect_generics_tree_Signature {
formalTypeParams: sun_reflect_generics_tree_FormalTypeParameter[];
superclass: sun_reflect_generics_tree_ClassTypeSignature;
superInterfaces: sun_reflect_generics_tree_ClassTypeSignature[];
superclass: sun_reflect_generics_tree_ClassTypeSignature;
superInterfaces: sun_reflect_generics_tree_ClassTypeSignature[];
formalTypeParameters: sun_reflect_generics_tree_FormalTypeParameter[];
getSuperclass(): sun_reflect_generics_tree_ClassTypeSignature;
getSuperInterfaces(): sun_reflect_generics_tree_ClassTypeSignature[];
static make(arg0: sun_reflect_generics_tree_FormalTypeParameter[], arg1: sun_reflect_generics_tree_ClassTypeSignature, arg2: sun_reflect_generics_tree_ClassTypeSignature[]): sun_reflect_generics_tree_ClassSignature;
accept(arg0: sun_reflect_generics_visitor_Visitor<java_lang_Object>): void;
getFormalTypeParameters(): sun_reflect_generics_tree_FormalTypeParameter[];

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.repository' {
import { GenericsFactory as sun_reflect_generics_factory_GenericsFactory } from 'sun.reflect.generics.factory';
import { MethodRepository as sun_reflect_generics_repository_MethodRepository, ConstructorRepository as sun_reflect_generics_repository_ConstructorRepository } from 'sun.reflect.generics.repository';
import { Type as java_lang_reflect_Type, TypeVariable as java_lang_reflect_TypeVariable } from 'java.lang.reflect';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class MethodRepository extends sun_reflect_generics_repository_ConstructorRepository {
returnType: java_lang_reflect_Type;
returnType: java_lang_reflect_Type;
typeParameters: java_lang_reflect_TypeVariable<java_lang_Object>[];
class: java_lang_Class<java_lang_Object>;
static make(arg0: string, arg1: sun_reflect_generics_factory_GenericsFactory): sun_reflect_generics_repository_MethodRepository;
getReturnType(): java_lang_reflect_Type;
getTypeParameters(): java_lang_reflect_TypeVariable<java_lang_Object>[];
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

declare module 'sun.reflect.annotation' {
import { Map as java_util_Map } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { RetentionPolicy as java_lang_annotation_RetentionPolicy, Annotation as java_lang_annotation_Annotation } from 'java.lang.annotation';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { AnnotationType as sun_reflect_annotation_AnnotationType } from 'sun.reflect.annotation';

  export class AnnotationType extends java_lang_Object {
memberTypes: java_util_Map<string, java_lang_Class<java_lang_Object>>;
memberDefaults: java_util_Map<string, java_lang_Object>;
members: java_util_Map<string, java_lang_reflect_Method>;
retention: java_lang_annotation_RetentionPolicy;
inherited: boolean;
static $assertionsDisabled: boolean;
static instance: sun_reflect_annotation_AnnotationType;
memberTypes(): java_util_Map<string, java_lang_Class<java_lang_Object>>;
retention(): java_lang_annotation_RetentionPolicy;
memberDefaults(): java_util_Map<string, java_lang_Object>;
toString(): string;
members(): java_util_Map<string, java_lang_reflect_Method>;
static getInstance(arg0: java_lang_Class<java_lang_annotation_Annotation>): sun_reflect_annotation_AnnotationType;
isInherited(): boolean;
static invocationHandlerReturnType(arg0: java_lang_Class<java_lang_Object>): java_lang_Class<java_lang_Object>;

  }
}//@ts-nocheck

declare module 'sun.reflect.generics.repository' {
import { Type as java_lang_reflect_Type } from 'java.lang.reflect';
import { GenericsFactory as sun_reflect_generics_factory_GenericsFactory } from 'sun.reflect.generics.factory';
import { ClassRepository as sun_reflect_generics_repository_ClassRepository, GenericDeclRepository as sun_reflect_generics_repository_GenericDeclRepository } from 'sun.reflect.generics.repository';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ClassSignature as sun_reflect_generics_tree_ClassSignature } from 'sun.reflect.generics.tree';

  export class ClassRepository extends sun_reflect_generics_repository_GenericDeclRepository<sun_reflect_generics_tree_ClassSignature> {
static NONE: sun_reflect_generics_repository_ClassRepository;
superclass: java_lang_reflect_Type;
superInterfaces: java_lang_reflect_Type[];
superclass: java_lang_reflect_Type;
superInterfaces: java_lang_reflect_Type[];
class: java_lang_Class<java_lang_Object>;
getSuperclass(): java_lang_reflect_Type;
getSuperInterfaces(): java_lang_reflect_Type[];
static make(arg0: string, arg1: sun_reflect_generics_factory_GenericsFactory): sun_reflect_generics_repository_ClassRepository;
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