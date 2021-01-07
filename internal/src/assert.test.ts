import { test } from 'craftjs-plugin';

// eslint-disable-next-line @typescript-eslint/no-empty-function
test('Empty test', () => {});

test('Truthy and falsy asserts', (t) => {
  t.truthy(true, 'true is truthy');
  t.falsy(false, 'false is falsy');
});
