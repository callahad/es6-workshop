import test from 'ava';

test.skip('ES6 has an efficient `Map` data type', t => {
  let m = new Map([['foo', 'bar'], ['baz', 'qux']]);
  m.set('wibble', 'wobble');

  t.is(m.get('wibble'), 'wobble');

  t.is(m.get('foo'), __)
});

test.skip('Maps are like Objects, but can use anything as a key', t => {
  let o = {};
  o['42'] = 'Foo';
  o[42] = 'Bar';

  // What are these, and why?
  t.is(o['42'], __);
  t.is(o[42], __);

  let m = new Map();
  m.set('42', 'Foo');
  m.set(42, 'Bar');

  // What are these, and why?
  t.is(m.get('42'), __);
  t.is(m.get(42), __);

  // You can even use Objects as keys to Maps
  m.set(o, 'wow');
  t.is(m.get(o, 'wow'));

  // Keys are based on identity, rather than value, so this still works:
  o['anotherKey'] = 'something new';
  o['42'] = 'something changed';
  t.is(m.get(o, 'wow'));
});

test.skip('Maps are iterable', t => {
  let tlas = new Map();
  tlas.set('UMN', 'University of Minnesota');
  tlas.set('MWC', 'MinneWebCon');
  tlas.set('CSP', 'Content Security Policy');

  for (let __ of tlas) { // <-- Fix this. Hint: Remember destructuring!
    t.is(k.length, 3);
    t.true(v.length > 3);
  }

  // Refer to the docs at MDN to help you solve the next two...
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

  let a = Array.from(__);
  t.deepEqual(a, ['UMN', 'MWC', 'CSP']);

  let b = Array.from(__);
  t.deepEqual(a, ['University of Minnesota',
                  'MinneWebCon',
                  'Content Security Policy']);
});

test.skip('ES6 also has Sets, which work similarly to Maps', t => {
  let s = new Set([2,3,3,1,1,3,2,1,3]);

  t.deepEqual(Array.from(s), __);

  // You can test for set membership
  t.true(s.has(__));
});

// ============================================================================

// REVIEW:
// - ES6 now has `Map` and `Set` objects.
// - Compared to plain objects, Maps can have any value as a key
// - They define `Symbol.iterator`, so you can use `for of` loops.
// - Advanced Note: Both have `Weak` varieties, `WeakMap` and `WeakSet`
//     - The Weak versions don't prevent garbage collection of their members
