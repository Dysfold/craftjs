import cheerio from 'cheerio';
import fs from 'fs';

const PARAM_REGEX = /(@[A-Za-z_0-9.]+ )*[A-Za-z_0-9.]+(<(.*?)>)?(\[\])? [A-Za-z_0-9]+/g;
const DECORATOR_REGEX = /(@[A-Za-z_0-9.]+\s)/g;
const IDENTIFIER_REGEX = /[A-Za-z_0-9.]+/g;

interface Parameter {
  def: string;
  decorators: string[];
}

interface Method {
  paramCount: number;
  paramDefs: Parameter[];
  methodDef: string;
  decorators: string[];
  docs: string;
  name: string;
  isDeprecated: boolean;
}

interface Class {
  methods: Method[];
  docs: string;
}

function parseMethod(row: CheerioElement, $: CheerioStatic) {
  const nameCol = $('pre', row);
  const docCol = $('.block', row);
  const name = nameCol
    .text()
    .split(/\s+/)
    .join(' ');
  const methodName = name
    .split(/\(.*\)/g)[0]
    .split(/\s/)
    .slice(-1)[0];
  const methodDecorators = name.match(DECORATOR_REGEX) ?? [];
  const params = name
    .split('(')[1]
    ?.split(')')[0]
    .match(PARAM_REGEX)
    ?.map(p => ({
      decorators: p.match(DECORATOR_REGEX) ?? [],
      def: p.replace(DECORATOR_REGEX, '').trim(),
    }));
  const count = params?.length ?? 0;
  return {
    paramCount: count,
    paramDefs: params ?? [],
    methodDef: name.replace(DECORATOR_REGEX, ''),
    docs: docCol.text(),
    name: methodName.match(IDENTIFIER_REGEX)?.slice()[0] ?? '',
    isDeprecated: Boolean(name.match(/@Deprecated/)),
    decorators: methodDecorators,
  };
}

function parseClass(className: string) {
  const str = fs.readFileSync(`./docs/${className}.html`);
  const $ = cheerio.load(str);

  //const methodBlock = $('.memberSummary[summary="Method Summary table, listing methods, and an explanation"]');
  const methodBlock = $('a[name="method.detail"]').parent();
  const constructorsBlock = $('a[name="constructor.detail"]').parent();

  const description = $('.description .block');

  const methods: Method[] = [];

  const rows = $('ul.blockList, ul.blockListLast', methodBlock).toArray();
  const constructors = $('ul.blockList, ul.blockListLast', constructorsBlock).toArray();

  for (const row of constructors) {
    console.log($(row).text());
    methods.push({ ...parseMethod(row, $), name: 'constructor' });
  }

  for (const row of rows) {
    methods.push(parseMethod(row, $));
  }

  fs.writeFileSync(
    `./json/${className}.json`,
    JSON.stringify(
      {
        docs: description.text(),
        methods,
      },
      null,
      2,
    ),
  );
}

parseClass('Vector');

const files = fs.readdirSync('./docs').filter(f => f.split('.').slice(-1)[0] === 'html');
files.forEach(f => parseClass(f.replace('.html', '')));
