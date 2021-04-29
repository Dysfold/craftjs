import { Database, Table, test } from 'craftjs-plugin';

const db = new Database('integration_test');

test('key-value storage', (t) => {
  const table: Table<string, string> = db.getTable('kv');
  table.clear(); // Initial cleanup

  // Check that additions are visible
  table.set('foo', 'bar').set('a', 'b');
  t.truthy(table.has('foo'), 'foo exists');
  t.eq(table.get('foo'), 'bar', 'foo -> bar');
  t.truthy(table.has('a'), 'a exists');
  t.eq(table.get('a'), 'b', 'a -> b');
  t.eq(table.size, 2, 'size == 2');

  // Check that deletion works
  table.delete('foo');
  t.falsy(table.has('foo'), 'foo was deleted');
  t.eq(table.get('foo'), null, 'foo -> null');
  t.eq(table.size, 1, 'size == 1');

  // ... and deletes what was asked, not more
  t.truthy(table.has('a'), 'a exists');
  t.eq(table.get('a'), 'b', 'a -> b still true');

  table.clear();
  t.eq(table.size, 0, 'everything was cleared');
});

test('iteration works', (t) => {
  const table: Table<string, string> = db.getTable('iter1');
  table.clear();

  // Add content to table
  const content = [
    ['a', 'b'],
    ['foo', 'bar'],
    ['hello', 'world'],
    ['order', 'works'],
  ];
  // Iterate from end to start to check that table orders itself correctly
  // and doesn't e.g. use insertion order
  for (let i = content.length - 1; i >= 0; i--) {
    table.set(content[i][0], content[i][1]);
  }

  // Iterate keys
  const keys = [];
  for (const key of table.keys()) {
    keys.push(key);
  }
  t.eq(keys, ['a', 'foo', 'hello', 'order'], 'keys are iterated correctly');

  // Iterate values
  const values = [];
  for (const value of table.values()) {
    values.push(value);
  }
  t.eq(values, ['b', 'bar', 'world', 'works'], 'values are iterated correctly');

  // Iterate entries
  const entries1 = [];
  for (const entry of table) {
    entries1.push(entry);
  }
  const entries2 = [];
  for (const entry of table.entries()) {
    entries2.push(entry);
  }
  t.eq(entries1, content, 'map iteration works');
  t.eq(entries2, content, 'map entries() works');

  // Map cursor
  const cursor = [];
  for (const entry of table.cursor('hello')) {
    cursor.push(entry);
  }
  t.eq(cursor, content.slice(2), 'cursor starts at correct position');
});
