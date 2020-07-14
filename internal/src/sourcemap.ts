import * as vlq from 'vlq';

declare global {
  /**
   * Maps a line from a javascript file to the corresponding line in the original source file
   * @param param0 The source map
   * @param jsLine Line number to transform
   */
  function mapLineToSource(sourceMap: SourceMap, jsLine: number): void;
}

const testJson = `{"version":3,"file":"scheduling.js","sourceRoot":"","sources":["../../src/scheduling.ts"],"names":[],"mappings":";;AAAA,yCAA+D;AAE/D,yDAA2C;AAE3C,SAAS,eAAe,CAAC,IAAqC;IAC5D,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,MAAM,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;IAC7D,MAAM,CAAC,GAAI,MAAM,CAAC,YAAY,EAAU,CAAC,KAExC,CAAC;IACF,MAAM,MAAM,GAAG,CAAE,0BAAc,CAAC,KAAK,EAAG,oBAAgB,CAAC,KAAK,EAAE,IAAI,CAAC,CAAC,MAAM,CAC1E,IAAI,KAAK,cAAc,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,EAAE,CACtC,CAAC;IACF,MAAM,MAAM,GAAG,CAAC,CAAC,SAAS,CAAC,IAAI,EAAE,GAAG,MAAM,CAAQ,CAAC;IACnD,OAAO,CAAC,GAAG,IAAW,EAAE,EAAE,CAAC,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,YAAY,EAAE,EAAE,GAAG,IAAI,CAAC,CAAC;AAC3E,CAAC;AAED,SAAS,WAAW,CAAC,QAAoB;IACvC,MAAM,IAAI,GAAG,IAAI,CAAC,MAAM,CAAC,oBAAQ,EAAE;QACjC,GAAG;YACD,QAAQ,EAAE,CAAC;QACb,CAAC;KACF,CAAC,CAAC;IACH,OAAO,IAAI,IAAI,EAAE,CAAC;AACpB,CAAC;AAED,SAAS,WAAW,CAAC,OAAmB,EAAE,KAAa;IACrD,MAAM,QAAQ,GAAG,WAAW,CAAC,OAAO,CAAC,CAAC;IACtC,MAAM,YAAY,GAAG,eAAe,CAAC,cAAc,CAAC,CAAC;IACrD,MAAM,IAAI,GAAG,YAAY,CACvB,QAAQ,EACR,QAAQ,EACR,KAAK,GAAG,EAAE,EACV,KAAK,GAAG,EAAE,CACG,CAAC;IAChB,OAAO,IAAI,CAAC,SAAS,EAAE,CAAC;AAC1B,CAAC;AAED,SAAS,aAAa,CAAC,GAAY;IACjC,IAAI,CAAC,GAAG,EAAE;QACR,OAAO;KACR;IACD,MAAM,CAAC,SAAS,CAAC,UAAU,CAAC,GAAG,CAAC,CAAC;AACnC,CAAC;AAED,SAAS,UAAU,CAAC,OAAmB,EAAE,KAAa;IACpD,MAAM,QAAQ,GAAG,WAAW,CAAC,OAAO,CAAC,CAAC;IACtC,MAAM,YAAY,GAAG,eAAe,CAAC,cAAc,CAAC,CAAC;IACrD,MAAM,IAAI,GAAG,YAAY,CAAC,QAAQ,EAAE,QAAQ,EAAE,KAAK,GAAG,EAAE,CAAe,CAAC;IACxE,OAAO,IAAI,CAAC,SAAS,EAAE,CAAC;AAC1B,CAAC;AAED,MAAM,CAAC,WAAW,GAAG,WAAkB,CAAC;AACxC,MAAM,CAAC,UAAU,GAAG,UAAiB,CAAC;AACtC,MAAM,CAAC,aAAa,GAAG,aAAa,CAAC;AACrC,MAAM,CAAC,YAAY,GAAG,aAAa,CAAC"}`;

interface SourceMap {
  sources: string[];
  mappings: string;
}

function mapLineToSource({ mappings }: SourceMap, jsLine: number) {
  const lines = mappings.split(';').map((line) => line.split(','));
  const decoded = lines.map((line) => line.map((col) => vlq.decode(col)));
  let sourceLine = 0;
  let result = 0;
  decoded.forEach((line, i) => {
    line.forEach((segment) => {
      sourceLine += segment[2] ?? 0;
    });
    if (i + 1 === jsLine) {
      result = sourceLine + 1;
    }
  });
  console.log(result);
  return result;
}

global.mapLineToSource = mapLineToSource;

mapLineToSource(JSON.parse(testJson), 41);
