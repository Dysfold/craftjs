import { test } from 'zora';

test('require', (t) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const module = require('./mock/b');
    t.ok(module, 'Require works');
  } catch (e) {
    t.fail(e);
  }
});
