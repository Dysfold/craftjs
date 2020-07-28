/* eslint-disable @typescript-eslint/no-var-requires */
import { test } from 'zora';

test('require', (t) => {
  try {
    const module = require('./mock/a');
    t.ok(module, 'Require works');
    t.ok(module.local, 'Requiring local files works');
    t.ok(module.node1, 'Requiring node_modules with custom main-script works');
    t.ok(
      module.node2,
      `Requiring node_modules and defaulting to index.js works`,
    );
    t.ok(module.java, 'Requiring java-packages works');

    try {
      require('./doesntexist');
      t.fail();
    } catch (e) {
      t.eq(
        e?.name,
        'ModuleNotFoundError',
        'Requiring non existant module should throw ModuleNotFoundError',
      );
    }

    const adotb = require('./mock/a.b');
    t.ok(adotb, 'Requiring files with dot in their name works');
  } catch (e) {
    t.fail(e);
  }
});
