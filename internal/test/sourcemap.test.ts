import { test } from 'zora';
import { Paths } from 'java.nio.file';

test('Source maps', (t) => {
  const error = new Error() as any;
  const lineNumber = error.lineNumber;
  const patched = patchError(
    Paths.get(__filename),
    readFile(__filename),
    error,
    error.lineNumber,
  ) as any;
  t.notEq(patched.lineNumber, lineNumber, 'Error patching works');
});
