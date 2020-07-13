"use strict";
// eslint-ignore
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
const Modifier = java.lang.reflect.Modifier;
function getJavaDocData(ref) {
    const fileName = ref.declaredName;
    const f = new java_io_1.File(`js/javadocs/json/${fileName}.json`);
    if (!f.exists()) {
        return undefined;
    }
    const json = JSON.parse(readFile(f.getPath()));
    return json;
}
function parseClassRef(clazz) {
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
function parseType(type) {
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
        const c = parseType(type.getRawType());
        const typeArgs = [...type.getActualTypeArguments()]
            .map(parseType)
            .filter((t) => t !== null);
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
            extends: parseType(extend),
        };
    }
    if (type instanceof Java.type('java.lang.reflect.GenericArrayType')) {
        const componentType = parseType(type.getGenericComponentType());
        return {
            isArray: true,
            baseClass: componentType.baseClass,
            typeArguments: componentType.typeArguments,
        };
    }
}
function parseTypeParameter(typeParam) {
    const [extend] = typeParam.getBounds();
    if (!extend) {
        return {
            name: typeParam.getName(),
        };
    }
    return {
        name: typeParam.getName(),
        extends: parseType(extend),
    };
}
function parseParameter(parameter) {
    const name = parameter.getName();
    const type = parseType(parameter.getParameterizedType());
    return {
        name,
        spread: parameter.isVarArgs(),
        nullable: false,
        type,
    };
}
function parseMethodJavadoc(method, javaDocData) {
    if (!javaDocData) {
        return method;
    }
    const { parameters, name } = method;
    const matching = javaDocData.filter((m) => m.name.trim() === name.trim());
    const matchParams = (params) => params.every((p, i) => {
        var _a;
        const baseType = (_a = parameters[i]) === null || _a === void 0 ? void 0 : _a.type.baseClass;
        if (!baseType) {
            return false;
        }
        if (typeof baseType === 'string') {
            return p.def.match(baseType);
        }
        return p.def.match(baseType.name);
    });
    const exactMatches = matching.filter((m) => matchParams(m.paramDefs) && m.paramCount === parameters.length);
    const dataToUse = matching.length === 1 ? matching[0] : exactMatches[0];
    if (!dataToUse) {
        return method;
    }
    const nullableParams = dataToUse.paramDefs.map((p) => p.decorators.some((d) => d.match('Nullable')));
    const methodNullable = dataToUse.decorators.some((d) => d.match('Nullable'));
    dataToUse.paramDefs.forEach((p, i) => { var _a; return (_a = (parameters[i].name = p.def.split(/\s/).slice(-1)[0])) !== null && _a !== void 0 ? _a : parameters[i].name; });
    nullableParams.forEach((nullable, i) => (parameters[i].nullable = nullable));
    return Object.assign(Object.assign({}, method), { nullable: methodNullable, docs: dataToUse.docs });
}
function parseClassJavadoc(methods, ref) {
    var _a, _b, _c;
    const ownData = getJavaDocData(ref);
    const methodDeps = methods.reduce((obj, cur) => (Object.assign(Object.assign({}, obj), { [cur.declaringClass.name]: cur.declaringClass })), {});
    let allData = (_a = ownData === null || ownData === void 0 ? void 0 : ownData.methods) !== null && _a !== void 0 ? _a : [];
    for (const name in methodDeps) {
        allData = allData.concat((_c = (_b = getJavaDocData(methodDeps[name])) === null || _b === void 0 ? void 0 : _b.methods) !== null && _c !== void 0 ? _c : []);
    }
    return allData;
}
function parseMethod(method, javaDocData) {
    const typeParams = [...method.getTypeParameters()].map(parseTypeParameter);
    const returnType = parseType(method.getGenericReturnType());
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
exports.parseMethod = parseMethod;
function parseConstructor(constr) {
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
function parseProperty(field) {
    const type = parseType(field.getGenericType());
    const modifiers = field.getModifiers();
    return {
        name: field.getName(),
        isStatic: Modifier.isStatic(modifiers),
        nullable: false,
        type,
    };
}
function parseClass(clazz) {
    var _a;
    const methods = [...clazz.getMethods()]
        .filter((m) => m.getDeclaringClass() !== clazz.getSuperclass())
        .map((m) => parseMethod(m));
    const constructors = [...clazz.getConstructors()].map(parseConstructor);
    const properties = [...clazz.getDeclaredFields()].map(parseProperty);
    const typeParams = [...clazz.getTypeParameters()].map(parseTypeParameter);
    const implement = [...clazz.getGenericInterfaces()].map(parseType);
    const extend = clazz.getGenericSuperclass();
    const jdocData = parseClassJavadoc(methods, parseClassRef(clazz));
    const ownData = getJavaDocData(parseClassRef(clazz));
    const docs = (_a = ownData === null || ownData === void 0 ? void 0 : ownData.docs) !== null && _a !== void 0 ? _a : '';
    return {
        type: clazz.isInterface() ? 'interface' : 'class',
        docs,
        ref: parseClassRef(clazz),
        methods: methods.map((m) => parseMethodJavadoc(m, jdocData)),
        properties,
        typeParameters: typeParams,
        extends: parseType(extend),
        implements: implement,
        constructors: constructors.map((c) => { var _a; return parseMethodJavadoc(c, (_a = ownData === null || ownData === void 0 ? void 0 : ownData.methods) !== null && _a !== void 0 ? _a : []); }),
    };
}
exports.parseClass = parseClass;
