import test from 'ava';

test.skip('Functions can have default arguments', t => {
  // We used to have to explicitly check for undefined:

  function foo(arr, sep) {
    if (sep === undefined) {
      sep = ', ';
    }

    return arr.join(sep);
  }

  t.is(foo(['a', 'b', 'c']), "a, b, c");
  t.is(foo(['a', 'b', 'c'], "|"), "a|b|c");

  // But now we can set defaults right in the function definition:

  function bar(arr, sep = ', ') {
    return arr.join(sep);
  }

  t.is(bar(['a', 'b', 'c']), "a, b, c");
  t.is(bar(['a', 'b', 'c'], "|"), "a|b|c");

  // Write a function, greet, which returns the strings below:

  function greet(___) {
    return `__`;
  }

  // Passing specific parameters works
  t.is(greet('you'), 'Hello, you!');
  t.is(greet('world'), 'Hello, world!');

  // Omitting a parameter or passing `undefined` uses the default value
  t.is(greet(), 'Hello, world!');
  t.is(greet(undefined), 'Hello, world!');
});

test.skip('Default parameters get evaluated every time they are needed', t => {
  // Every time a default value is used, it is freshly evaluated.
  function getTime(when = Date.now()) {
    return when;
  }

  let t0 = getTime();
  while (Date.now() - t0 < 20) { /* Busy wait for 20ms... */ }
  let t1 = getTime();

  t.true(t1 > t0); // <-- `Date.now()` re-ran for the second call to `getTime`.

  // What would you expect this function to return? Fill in the blanks below.

  function append(x, ary = new Array()) {
    ary.push(x);
    return ary;
  }

  // Does each invocation get its own `new Array()`?

  t.deepEqual(append('foo'), __);
  t.deepEqual(append('bar'), __);
  t.deepEqual(append('bar', append('foo')), __);

  // What if we pass our own array? Note that this ignores the return value...
  let a = new Array();
  append('foo', a);
  append('bar', a);
  append('baz', a);
  t.deepEqual(a, __); // <-- Fill in the blank
});

// ============================================================================

// REVIEW:
// - You can provide default parameters in your function definition
// - If a function call is a default, it will be invoked each time it is needed.
