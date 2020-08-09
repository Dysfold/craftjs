"use strict";
// eslint-ignore
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseClass = exports.parseMethod = void 0;
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
        isPublic: Modifier.isPublic(modifiers),
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
        isPublic: Modifier.isPublic(modifiers),
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
        docs: '',
        isStatic: Modifier.isStatic(modifiers),
        isPublic: Modifier.isPublic(modifiers),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RzL3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0JBQWdCOzs7QUFFaEIscUNBQStCO0FBRS9CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQXdGNUMsU0FBUyxjQUFjLENBQUMsR0FBYTtJQUNuQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxHQUFHLElBQUksY0FBSSxDQUFDLG9CQUFvQixRQUFRLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDZixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFpQixDQUFDO0lBQy9ELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEtBQVU7SUFDL0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pDLE9BQU87UUFDTCxJQUFJLEVBQUUsSUFBSTtRQUNWLFlBQVksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ2pELE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFB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