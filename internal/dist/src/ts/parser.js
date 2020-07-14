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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RzL3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0JBQWdCOztBQUVoQixxQ0FBK0I7QUFFL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBd0Y1QyxTQUFTLGNBQWMsQ0FBQyxHQUFhO0lBQ25DLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDbEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxjQUFJLENBQUMsb0JBQW9CLFFBQVEsT0FBTyxDQUFDLENBQUM7SUFDeEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNmLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQWlCLENBQUM7SUFDL0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsS0FBVTtJQUMvQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekMsT0FBTztRQUNMLElBQUksRUFBRSxJQUFJO1FBQ1YsWUFBWSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDakQsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFB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