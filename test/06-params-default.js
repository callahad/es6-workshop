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

  // TODO: Write a function, greet, which returns the strings below:
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

  function push(x, ary = new Array()) {
    ary.push(x);
    return ary;
  }

  // TODO: Fill in the blanks. Does each invocation get its own `new Array()`?
  t.deepEqual(__, push('foo'));
  t.deepEqual(__, push('bar'));
  t.deepEqual(__, push('bar', push('foo')));

  // What if we pass in an array?
  let a = new Array();
  push('foo', a);
  push('bar', a);
  push('baz', a);
  t.deepEqual(__, a); // <-- Fill in the blank
});

// ============================================================================

// REVIEW:
// - You can provide default parameters in your function definition
// - If a function call is a default, it will be invoked each time it is needed.
