"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zora_1 = require("zora");
zora_1.test('require', (t) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const module = require('./mock/b');
        t.ok(module, 'Require works');
    }
    catch (e) {
        t.fail(e);
    }
});
