"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const zora_1 = require("zora");
zora_1.test('require', (t) => {
    try {
        const module = require('./mock/a');
        t.ok(module, 'Require works');
        t.ok(module.local, 'Requiring local files works');
        t.ok(module.node1, 'Requiring node_modules with custom main-script works');
        t.ok(module.node2, `Requiring node_modules and defaulting to index.js works`);
        t.ok(module.java, 'Requiring java-packages works');
        try {
            require('./doesntexist');
            t.fail();
        }
        catch (e) {
            t.eq(e === null || e === void 0 ? void 0 : e.name, 'ModuleNotFoundError', 'Requiring non existant module should throw ModuleNotFoundError');
        }
        const adotb = require('./mock/a.b');
        t.ok(adotb, 'Requiring files with dot in their name works');
    }
    catch (e) {
        t.fail(e);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9yZXF1aXJlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBdUQ7QUFDdkQsK0JBQTRCO0FBRTVCLFdBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNwQixJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxFQUFFLENBQ0YsTUFBTSxDQUFDLEtBQUssRUFDWix5REFBeUQsQ0FDMUQsQ0FBQztRQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBRW5ELElBQUk7WUFDRixPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ1Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsQ0FBQyxFQUFFLENBQ0YsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLElBQUksRUFDUCxxQkFBcUIsRUFDckIsZ0VBQWdFLENBQ2pFLENBQUM7U0FDSDtRQUVELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDO0tBQzdEO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUMsQ0FBQyJ9