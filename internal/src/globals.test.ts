import { test } from 'craftjs-plugin';

test('global state', (t) => {
  t.eq(currentPlugin.name, 'craftjs-internal', 'currentPlugin is correct');
});
