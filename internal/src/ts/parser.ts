// eslint-ignore

import { File } from 'java.io';

const Modifier = java.lang.reflect.Modifier;

export interface Class {
  type: 'class' | 'interface';
  docs: string;
  ref: ClassRef;
  typeParameters: TypeParameter[];
  methods: Method[];
  constructors: Constructor[];
  properties: Property[];
  extends?: Type;
  implements: Type[];
}

export interface ClassRef {
  name: string;
  package: string;
  declaredName: string;
}

export interface WildcardType {
  extends?: Type;
}

export interface Type {
  isArray: boolean;
  baseClass: ClassRef | string;
  typeArguments: (Type | WildcardType)[];
}

export interface TypeParameter {
  name: string;
  extends?: Type;
}

export interface Parameter {
  name: string;
  spread: boolean;
  nullable: boolean;
  type: Type;
}

export interface Property {
  name: string;
  isStatic: boolean;
  nullable: boolean;
  type: Type;
}

export interface Method {
  name: string;
  isStatic: boolean;
  nullable: boolean;
  typeParameters: TypeParameter[];
  parameters: Parameter[];
  docs: string;
  declaringClass: ClassRef;
  returnType: Type;
}

export interface Constructor
  extends Omit<Method, 'returnType' | 'declaringClass'> {
  name: 'constructor';
}

interface JavaDocParameter {
  def: string;
  decorators: string[];
}

interface JavaDocMethod {
  paramCount: number;
  paramDefs: JavaDocParameter[];
  methodDef: string;
  decorators: string[];
  docs: string;
  name: string;
  isDeprecated: boolean;
}

interface JavaDocClass {
  methods: JavaDocMethod[];
  docs: string;
}

function getJavaDocData(ref: ClassRef) {
  const fileName = ref.declaredName;
  const f = new File(__filename, `javadocs/json/${fileName}.json`);
  if (!f.exists()) {
    return undefined;
  }
  const json = JSON.parse(readFile(f.getPath())) as JavaDocClass;
  return json;
}

function parseClassRef(clazz: any) {
  const name = clazz.getSimpleName();
  const fullName = clazz.getCanonicalName();
  const pkg = clazz.getPackage();
  const pkgName = pkg ? pkg.getName() : '';
  return {
    name: name,
    declaredName: fullName.replace(`${pkgName}.`, ''),
    package: pkg ? fullName.replace(`.${name}`, '') : '',
  };
}

function parseType(type: any): Type | WildcardType | undefined {
  if (type instanceof Java.type('java.lang.Class')) {
    const isArray = 'getComponentType' in type && type.getComponentType();
    return {
      isArray: Boolean(isArray),
      baseClass: isArray
        ? parseClassRef(type.getComponentType())
        : parseClassRef(type),
      typeArguments: [],
    };
  }
  if (type instanceof Java.type('java.lang.reflect.ParameterizedType')) {
    const c = parseType(type.getRawType()) as Type;
    const typeArgs = [...type.getActualTypeArguments()]
      .map(parseType)
      .filter((t) => t !== null) as Type[];
    return {
      isArray: false,
      baseClass: c.baseClass,
      typeArguments: typeArgs,
    };
  }
  if (type instanceof Java.type('java.lang.reflect.TypeVariable')) {
    return {
      isArray: false,
      baseClass: type.getName(),
      typeArguments: [],
    };
  }
  if (type instanceof Java.type('java.lang.reflect.WildcardType')) {
    const [extend] = type.getUpperBounds();
    return {
      extends: parseType(extend) as Type,
    };
  }
  if (type instanceof Java.type('java.lang.reflect.GenericArrayType')) {
    const componentType = parseType(type.getGenericComponentType()) as Type;
    return {
      isArray: true,
      baseClass: componentType.baseClass,
      typeArguments: componentType.typeArguments,
    };
  }
}

function parseTypeParameter(typeParam: any): TypeParameter {
  const [extend] = typeParam.getBounds();
  if (!extend) {
    return {
      name: typeParam.getName(),
    };
  }
  return {
    name: typeParam.getName(),
    extends: parseType(extend) as Type,
  };
}

function parseParameter(parameter: any): Parameter {
  const name = parameter.getName();
  const type = parseType(parameter.getParameterizedType()) as Type;
  return {
    name,
    spread: parameter.isVarArgs(),
    nullable: false,
    type,
  };
}

function parseMethodJavadoc(
  method: Method,
  javaDocData?: JavaDocMethod[],
): Method;
function parseMethodJavadoc(
  method: Constructor,
  javaDocData?: JavaDocMethod[],
): Constructor;
function parseMethodJavadoc(
  method: Method | Constructor,
  javaDocData?: JavaDocMethod[],
): typeof method {
  if (!javaDocData) {
    return method;
  }
  const { parameters, name } = method;
  const matching = javaDocData.filter((m) => m.name.trim() === name.trim());
  const matchParams = (params: JavaDocParameter[]) =>
    params.every((p, i) => {
      const baseType = parameters[i]?.type.baseClass;
      if (!baseType) {
        return false;
      }
      if (typeof baseType === 'string') {
        return p.def.match(baseType);
      }
      return p.def.match(baseType.name);
    });
  const exactMatches = matching.filter(
    (m) => matchParams(m.paramDefs) && m.paramCount === parameters.length,
  );
  const dataToUse = matching.length === 1 ? matching[0] : exactMatches[0];
  if (!dataToUse) {
    return method;
  }
  const nullableParams = dataToUse.paramDefs.map((p) =>
    p.decorators.some((d) => d.match('Nullable')),
  );
  const methodNullable = dataToUse.decorators.some((d) => d.match('Nullable'));

  dataToUse.paramDefs.forEach(
    (p, i) =>
      (parameters[i].name = p.def.split(/\s/).slice(-1)[0]) ??
      parameters[i].name,
  );
  nullableParams.forEach((nullable, i) => (parameters[i].nullable = nullable));
  return {
    ...method,
    nullable: methodNullable,
    docs: dataToUse.docs,
  };
}

function parseClassJavadoc(methods: Method[], ref: ClassRef) {
  const ownData = getJavaDocData(ref);
  const methodDeps: Record<string, ClassRef> = methods.reduce(
    (obj, cur) => ({
      ...obj,
      [cur.declaringClass.name]: cur.declaringClass,
    }),
    {},
  );
  let allData = ownData?.methods ?? [];
  for (const name in methodDeps) {
    allData = allData.concat(getJavaDocData(methodDeps[name])?.methods ?? []);
  }
  return allData;
}

export function parseMethod(
  method: any,
  javaDocData?: JavaDocMethod[],
): Method {
  const typeParams = [...method.getTypeParameters()].map(parseTypeParameter);
  const returnType = parseType(method.getGenericReturnType())! as Type;
  const parameters = [...method.getParameters()].map(parseParameter);
  const modifiers = method.getModifiers();

  return {
    name: method.getName(),
    docs: '',
    isStatic: Modifier.isStatic(modifiers),
    typeParameters: typeParams,
    parameters,
    nullable: false,
    declaringClass: parseClassRef(method.getDeclaringClass()),
    returnType,
  };
}

function parseConstructor(constr: any): Constructor {
  const typeParams = [...constr.getTypeParameters()].map(parseTypeParameter);
  const parameters = [...constr.getParameters()].map(parseParameter);

  const modifiers = constr.getModifiers();
  return {
    name: 'constructor',
    docs: '',
    isStatic: Modifier.isStatic(modifiers),
    typeParameters: typeParams,
    nullable: false,
    parameters,
  };
}

function parseProperty(field: any): Property {
  const type = parseType(field.getGenericType()) as Type;
  const modifiers = field.getModifiers();
  return {
    name: field.getName(),
    isStatic: Modifier.isStatic(modifiers),
    nullable: false,
    type,
  };
}

export function parseClass(clazz: any): Class {
  const methods = [...clazz.getMethods()]
    .filter((m: any) => m.getDeclaringClass() !== clazz.getSuperclass())
    .map((m) => parseMethod(m));
  const constructors = [...clazz.getConstructors()].map(parseConstructor);
  const properties = [...clazz.getDeclaredFields()].map(parseProperty);
  const typeParams = [...clazz.getTypeParameters()].map(parseTypeParameter);
  const implement = [...clazz.getGenericInterfaces()].map(parseType) as Type[];
  const extend = clazz.getGenericSuperclass();

  const jdocData = parseClassJavadoc(methods, parseClassRef(clazz));
  const ownData = getJavaDocData(parseClassRef(clazz));
  const docs = ownData?.docs ?? '';

  return {
    type: clazz.isInterface() ? 'interface' : 'class',
    docs,
    ref: parseClassRef(clazz),
    methods: methods.map((m) => parseMethodJavadoc(m, jdocData)),
    properties,
    typeParameters: typeParams,
    extends: parseType(extend) as Type | undefined,
    implements: implement,
    constructors: constructors.map((c) =>
      parseMethodJavadoc(c, ownData?.methods ?? []),
    ),
  };
}
