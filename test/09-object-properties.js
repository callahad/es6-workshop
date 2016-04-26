import test from 'ava';

test.skip('Review: Property access on objects', t => {
  // Object properties can be any string

  let person = {
    'full name': 'Dan Callahan',
    'twitter': '@callahad',
  }

  // You can access properties with either `obj.prop` or `obj['prop']`.
  // You *must* use the `[string]` notation for keys with spaces, dashed, etc.

  t.is(person.twitter, '@callahad');
  t.is(person['full name'], 'Dan Callahan');

  // You can also use variables with the `[string]` notation.

  let key = __;
  t.is(person[key], '@callahad');

  // Or even evaluate expressions.
  t.is(person['full' + ' ' + __], 'Dan Callahan');
});

test.skip('Objects gained `[]` syntax for generating key names', t => {
  // Just like the example above, you can now use `[]` when defining keys.

  let key = __; // <-- What does this need to be for the test to pass?

  let obj = {
    [key]: 'This Is Cool',
    [key.__]: 'this is cool', // <-- You can still compute things inside `[]`...
    [key.__]: 'THIS IS COOL',
  };

  t.is(obj.Wow, 'This Is Cool');
  t.is(obj.wow, 'this is cool');
  t.is(obj.WOW, 'THIS IS COOL');
});

test.skip('Object property / values pairs have a new shorthand', t => {
  // Ever caught yourself doing something like this?

  let name = 'Dan';
  let browser = 'Firefox';

  let user = {
    'name': name,
    'browser': browser
  };

  t.is(user.name, 'Dan');
  t.is(user.browser, 'Firefox');

  // The `'name': name` stuff is redundant. ES2015 provides a shorthand:

  let snack = 'apple slices';
  let drink = 'apple juice';

  let appletown = { snack, drink }; // <-- Implies, e.g., `{ "snack": snack }`.

  t.is(appletown.snack, __);
  t.is(appletown["__"], 'apple juice');
});

test.skip('Objects now have shorthand for declaring methods', t => {
  // Named functions can be declared directly on objects, avoiding boilerplate.

  let utils = {
    increment: function increment(x) { return x + 1 }, // <-- Normal declaration
    double(x) { return x * 2 }, // <-- New object literal shorthand
  }

  t.is(utils.increment(1), 2);
  t.is(utils.double(2), 4);

  // The object below is throwing an exception. Can you figure out why?
  // Does converting `sign` to object literal shorthand function fix it?
  // What does this tell you about the difference between arrow functions and
  // function shorthand inside object literals?

  let guestbook = {
    guests: [],
    sign: (name) => { this.guests.push(name) },
  }

  try {
    guestbook.sign('Alice');
    guestbook.sign('Bob');
    t.deepEqual(guestbook.guests, ['Alice', 'Bob']);
  } catch (e) {
    t.fail(e);
  }
});

// ============================================================================

// REVIEW:
// - You can now use `[]` notation for both accessing *and* defining properties.
// - The value inside the `[]`'s can be an expression to evaluate.
// - These are called "computed properties".
// - Objects can also infer property names and values from named variables.
//     - e.g., `{ foo }` is equivalent to `{ 'foo': foo }`.
// - Objects also have shorthand for methods.
//     - e.g., `{ x() { ... } }` is equivalent to `{ x: function x() { ... } }`.
