import {
  Method,
  Type,
  ClassRef,
  Class,
  TypeParameter,
  parseClass,
  Property,
  Constructor,
} from './parser';
import { File } from 'java.io';

function getClassRef(ref: ClassRef): string {
  if (ref.package === '') {
    return ref.name;
  }
  const path = [ref.package, ref.name].join('.').split('.').join('_');
  return path;
}

function parseName(name: string) {
  if (name === 'function') return 'func';
  if (name === 'in') return 'inp';
  if (name === 'with') return 'wit';
  return name;
}

function generateTypeDefinition(type: Type, deps: ClassRef[]): string {
  const suffix = type.isArray ? '[]' : '';

  if (typeof type.baseClass !== 'string') {
    if (
      ['int', 'long', 'double', 'float', 'byte', 'short'].indexOf(
        type.baseClass.name,
      ) !== -1
    ) {
      return `number${suffix}`;
    }
    if (type.baseClass.name === 'char') {
      return `string${suffix}`;
    }
    if (
      type.baseClass.name === 'String' &&
      type.baseClass.package === 'java.lang'
    ) {
      return `string${suffix}`;
    }
    if (['boolean', 'void'].indexOf(type.baseClass.name) !== -1) {
      return type.baseClass.name;
    }
    deps.push(type.baseClass);
  }

  const baseType =
    typeof type.baseClass === 'string'
      ? type.baseClass
      : getClassRef(type.baseClass);
  const typeArgs = type.typeArguments.map((t) =>
    'baseClass' in t
      ? generateTypeDefinition(t, deps)
      : t.extends
      ? generateTypeDefinition(t.extends, deps)
      : 'any',
  );
  return `${baseType}${
    typeArgs.length > 0 ? `<${typeArgs.join(', ')}>` : ''
  }${suffix}`;
}

function generateTypeParamDefinition(
  { name, extends: ex }: TypeParameter,
  deps: ClassRef[],
) {
  return `${name}${ex ? ` extends ${generateTypeDefinition(ex, deps)}` : ''}`;
}

export function generateMethodDefinition(
  method: Method | Constructor,
  deps: ClassRef[],
) {
  const paramDefs = method.parameters.map(
    (p) =>
      `${p.spread ? '...' : ''}${parseName(p.name)}: ${generateTypeDefinition(
        p.type,
        deps,
      )}${p.nullable ? ' | null' : ''}`,
  );
  const returnDef =
    'returnType' in method
      ? generateTypeDefinition(method.returnType, deps)
      : '';
  const nullableDef = method.nullable ? ' | null' : '';
  const typeParams = method.typeParameters.map((t) =>
    generateTypeParamDefinition(t, deps),
  );
  return `${method.docs ? `/** ${method.docs} */\n` : ''}${
    method.isStatic ? 'static ' : ''
  }${parseName(method.name)}${
    typeParams.length > 0 ? `<${typeParams.join(', ')}>` : ''
  }(${paramDefs.join(', ')})${
    returnDef ? `: ${returnDef}${nullableDef}` : ''
  };`;
}

function generatePropertyDefinition(property: Property, deps: ClassRef[]) {
  if (property.name === 'constructor') {
    return '';
  }

  const nullableDef = property.nullable ? ' | null' : '';
  const typeDef = generateTypeDefinition(property.type, deps);
  return `${property.docs ? `/** ${property.docs} */\n` : ''}${
    property.isStatic ? 'static ' : ''
  }${property.name}: ${typeDef}${nullableDef};`;
}

function generateImportDefinitions(deps: ClassRef[]) {
  const set: Record<string, Record<string, ClassRef>> = {};
  deps.forEach(
    (d) =>
      (set[d.package] = set[d.package]
        ? { ...set[d.package], [d.name]: d }
        : { [d.name]: d }),
  );
  const imports = Object.keys(set)
    .map((k) => {
      const subImports = Object.keys(set[k]);
      return (
        k &&
        `import { ${subImports
          .map((s) => `${s} as ${getClassRef(set[k][s])}`)
          .join(', ')} } from '${k}';`
      );
    })
    .filter((i) => i);
  return imports;
}

export function generateClassDefinition(clazz: Class) {
  const dependencies: ClassRef[] = [];

  if (clazz.ref.name === 'Object' && clazz.ref.package === 'java.lang') {
    return {
      definition: `
declare module '${clazz.ref.package}' {  
  export type ${clazz.ref.name} = {}
}`,
      dependencies: [],
    };
  }

  const methodDefs = clazz.methods
    .map((m) => generateMethodDefinition(m, dependencies))
    .sort();

  const getters = clazz.methods.filter((m) => m.name.match(/^get[A-Z]/g));
  const getterFields = getters.map((g) => {
    const replaced = g.name.replace(/^get/, '');
    return {
      ...g,
      type: g.returnType,
      name: replaced[0].toLocaleLowerCase() + replaced.slice(1),
    } as Property;
  });

  const constructorDefs = clazz.constructors
    .map((c) => generateMethodDefinition(c, dependencies))
    .sort();
  const propDefs = clazz.properties
    .concat(getterFields)
    .filter((p) => p.isPublic)
    .map((p) => generatePropertyDefinition(p, dependencies))
    .sort();
  const extend = clazz.extends
    ? generateTypeDefinition(clazz.extends, dependencies)
    : undefined;
  const impls = clazz.implements.map((i) =>
    generateTypeDefinition(i, dependencies),
  );
  const typeParams = clazz.typeParameters.map((t) =>
    generateTypeParamDefinition(t, dependencies),
  );
  const imports = generateImportDefinitions(dependencies);
  return {
    definition: `
declare module '${clazz.ref.package}' {
${imports.join('\n')}
${clazz.docs ? `/** ${clazz.docs} */\n` : ''}
  export class ${clazz.ref.name}${
      typeParams.length > 0 ? `<${typeParams.join(', ')}>` : ''
    }${extend ? ` extends ${extend}` : ''}${
      impls.length > 0 ? ` implements ${impls.join(', ')}` : ''
    } {
${propDefs.join('\n')}
${methodDefs.join('\n')}
${constructorDefs.join('\n')}
  }
}`,
    dependencies,
  };
}

function getClass(ref: ClassRef): Class | null {
  try {
    const jClass = Java.type(`${ref.package}.${ref.name}`);
    return parseClass(jClass.class);
  } catch {
    console.error(`Error parsing ${ref.package}.${ref.name}`);
    return null;
  }
}

function recursiveDefs(
  clazz: Class,
  defs: { ref: ClassRef; def: string }[],
  visited: string[],
) {
  const root = generateClassDefinition(clazz);
  defs.push({
    ref: clazz.ref,
    def: root.definition,
  });
  for (const dep of root.dependencies) {
    const current = getClassRef(dep);
    if (visited.indexOf(current) !== -1) {
      continue;
    }
    visited.push(current);
    const c = getClass(dep);
    if (!c) {
      continue;
    }
    recursiveDefs(c, defs, visited);
  }
}

export function generateRecursiveDef(root: Class) {
  const defs: { ref: ClassRef; def: string }[] = [];
  const visited: string[] = [getClassRef(root.ref)];
  recursiveDefs(root, defs, visited);
  return defs;
}

export function runTheThing() {
  const cFile = new File('js/internal/src/ts/classes.txt');
  const spigotClasses = readFile(cFile.getPath()).split('\n');
  const defs: { ref: ClassRef; def: string }[] = [];
  const visited: string[] = [];
  for (const c of spigotClasses) {
    console.log(c);
    try {
      const jClass = Java.type(c).class;
      const parsed = parseClass(jClass);
      visited.push(getClassRef(parsed.ref));
      recursiveDefs(parsed, defs, visited);
    } catch (e) {
      console.error(e);
      continue;
    }
  }

  const contents: Record<string, string> = {};

  for (const d of defs) {
    const path = [d.ref.package, d.ref.name].join('.').split('.');
    const filePath = path.slice(0, 2).join('_');
    const f = `./js/types/generated/${filePath}.d.ts`;
    contents[f] = contents[f]
      ? `${contents[f]}\n//@ts-nocheck\n${d.def}`
      : `//@ts-nocheck\n${d.def}`;
  }

  for (const file in contents) {
    writeFile(file, contents[file]);
  }
}
