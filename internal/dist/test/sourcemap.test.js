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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlbWFwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3NvdXJjZW1hcC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTRCO0FBQzVCLGlEQUFzQztBQUV0QyxXQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztJQUNqQyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FDeEIscUJBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQ3JCLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDcEIsS0FBSyxFQUNMLEtBQUssQ0FBQyxVQUFVLENBQ1YsQ0FBQztJQUNULENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUMsQ0FBQyJ9