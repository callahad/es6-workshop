import test from 'ava';

test.skip('Things that can be iterated have a `Symbol.iterator` property', t => {
  // Behind the scenes, `for of` looks for a property called `Symbol.iterator`:

  // Symbols are a new top-level data type.
  t.is(typeof Symbol.iterator, 'symbol');

  // By convention, `for of` uses `Symbol.iterator` as a constant property name.

  let a = ['foo', 'bar', 'baz'];

  // It points to a function
  t.is(typeof a[Symbol.iterator], 'function');

  // That returns an object
  t.is(typeof a[Symbol.iterator](), 'object');

  // And that object has a `next` method.
  t.is(typeof a[Symbol.iterator]().next, 'function');

  // And the `next` method returns the first thing
  t.deepEqual(a[Symbol.iterator]().next(), { value: 'foo', done: false });

  // Because arrays implement Symbol.iterator, we can use them with `for of`:
  let foo = [];

  for (let x of a) {
    foo.push(x);
  }

  t.deepEqual(foo, ['foo', 'bar', 'baz']);

  // `for of` is also happy to take the generator function directly

  let bar = [];
  for (let x of __) { // <-- Fill in the blank, using `Symbol.iterator` somehow.
    bar.push(x);
  }

  t.deepEqual(bar, ['foo', 'bar', 'baz']);
});

test.skip('You can test if things are iterable', t => {
  // Write a function that returns `true` if a parameter is iterable.

  function isIterable(x) {
    // Write code here
  }

  t.true(isIterable('hello'));
  t.true(isIterable(['foo', 'bar', 'baz']));

  t.false(isIterable({ x: 'foo', y: 'bar' }));
  t.false(isIterable(42));
});

test.skip('The new `Array.from` method also consumes iterable', t => {
  // Guess what these will return...

  let x = Array.from('hello');
  t.deepEqual(x, __);

  let y = Array.from(['alice', 'bob']);
  t.deepEqual(y, __);

  let z = Array.from(Object.keys({ foo: 'bar' }));
  t.deepEqual(z, __);
});

// ============================================================================

// REVIEW:
// - `for of` uses an object's `Symbol.iterator` property behind the scenes.
// - The function that `Symbol.iterator` points to needs to be a "generator".
//   - More on generators in the next section.
// - `Array.from` iterates over an iterable and returns an array of contents.
