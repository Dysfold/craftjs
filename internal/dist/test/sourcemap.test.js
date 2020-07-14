"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zora_1 = require("zora");
const java_nio_file_1 = require("java.nio.file");
zora_1.test('Source maps', (t) => {
    const error = new Error();
    const lineNumber = error.lineNumber;
    const patched = patchError(java_nio_file_1.Paths.get(__filename), readFile(__filename), error, error.lineNumber);
    t.notEq(patched.lineNumber, lineNumber, 'Error patching works');
});
//# sourceMappingURL=sourcemap.test.js.map