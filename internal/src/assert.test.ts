import { test } from 'craftjs-plugin';
import { IllegalArgumentException } from 'java.lang';

// eslint-disable-next-line @typescript-eslint/no-empty-function
test('Empty test', () => {});

test('Truthy and falsy asserts', (t) => {
  t.truthy(true, 'true is truthy');
  t.falsy(false, 'false is falsy');
});

test('Equality assertations', (t) => {
  t.eq('a string', 'a string', 'strings are equal');
  t.notEq('different', 'text', 'strings are not equal');
  t.eq({ foo: { bar: 'test' } }, { foo: { bar: 'test' } }, 'objects are equal');
  t.notEq(
    { foo: { bar: 'test' } },
    { foo: { bar: 'different' } },
    'objects are not equal',
  );
});

test('Throwing assertations', (t) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  t.doesNotThrow(() => {}, 'does not throw');
  t.throws(
    () => {
      throw new Error();
    },
    Error,
    'JS error is caught',
  );
  t.throws(
    () => {
      throw new IllegalArgumentException();
    },
    IllegalArgumentException,
    'Java exception is caught',
  );
});
