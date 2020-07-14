"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zora_1 = require("zora");
zora_1.test('require', (t) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
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
    }
    catch (e) {
        t.fail(e);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9yZXF1aXJlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFFNUIsV0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3BCLElBQUk7UUFDRiw4REFBOEQ7UUFDOUQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxFQUFFLENBQ0YsTUFBTSxDQUFDLEtBQUssRUFDWix5REFBeUQsQ0FDMUQsQ0FBQztRQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBRW5ELElBQUk7WUFDRixPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ1Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsQ0FBQyxFQUFFLENBQ0YsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLElBQUksRUFDUCxxQkFBcUIsRUFDckIsZ0VBQWdFLENBQ2pFLENBQUM7U0FDSDtLQUNGO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUMsQ0FBQyJ9