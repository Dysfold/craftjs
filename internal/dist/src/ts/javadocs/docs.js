"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
const PARAM_REGEX = /(@[A-Za-z_0-9.]+ )*[A-Za-z_0-9.]+(<(.*?)>)?(\[\])? [A-Za-z_0-9]+/g;
const DECORATOR_REGEX = /(@[A-Za-z_0-9.]+\s)/g;
const IDENTIFIER_REGEX = /[A-Za-z_0-9.]+/g;
function parseMethod(row, $) {
    var _a, _b, _c, _d, _e, _f;
    const nameCol = $('pre', row);
    const docCol = $('.block', row);
    const name = nameCol.text().split(/\s+/).join(' ');
    const methodName = name
        .split(/\(.*\)/g)[0]
        .split(/\s/)
        .slice(-1)[0];
    const methodDecorators = (_a = name.match(DECORATOR_REGEX)) !== null && _a !== void 0 ? _a : [];
    const params = (_c = (_b = name
        .split('(')[1]) === null || _b === void 0 ? void 0 : _b.split(')')[0].match(PARAM_REGEX)) === null || _c === void 0 ? void 0 : _c.map((p) => {
        var _a;
        return ({
            decorators: (_a = p.match(DECORATOR_REGEX)) !== null && _a !== void 0 ? _a : [],
            def: p.replace(DECORATOR_REGEX, '').trim(),
        });
    });
    const count = (_d = params === null || params === void 0 ? void 0 : params.length) !== null && _d !== void 0 ? _d : 0;
    return {
        paramCount: count,
        paramDefs: params !== null && params !== void 0 ? params : [],
        methodDef: name.replace(DECORATOR_REGEX, ''),
        docs: docCol.text(),
        name: (_f = (_e = methodName.match(IDENTIFIER_REGEX)) === null || _e === void 0 ? void 0 : _e.slice()[0]) !== null && _f !== void 0 ? _f : '',
        isDeprecated: Boolean(name.match(/@Deprecated/)),
        decorators: methodDecorators,
    };
}
function parseClass(className) {
    const str = fs_1.default.readFileSync(`./docs/${className}.html`);
    const $ = cheerio_1.default.load(str);
    //const methodBlock = $('.memberSummary[summary="Method Summary table, listing methods, and an explanation"]');
    const methodBlock = $('a[name="method.detail"]').parent();
    const constructorsBlock = $('a[name="constructor.detail"]').parent();
    const description = $('.description .block');
    const methods = [];
    const rows = $('ul.blockList, ul.blockListLast', methodBlock).toArray();
    const constructors = $('ul.blockList, ul.blockListLast', constructorsBlock).toArray();
    for (const row of constructors) {
        console.log($(row).text());
        methods.push(Object.assign(Object.assign({}, parseMethod(row, $)), { name: 'constructor' }));
    }
    for (const row of rows) {
        methods.push(parseMethod(row, $));
    }
    fs_1.default.writeFileSync(`./json/${className}.json`, JSON.stringify({
        docs: description.text(),
        methods,
    }, null, 2));
}
parseClass('Vector');
const files = fs_1.default
    .readdirSync('./docs')
    .filter((f) => f.split('.').slice(-1)[0] === 'html');
files.forEach((f) => parseClass(f.replace('.html', '')));
