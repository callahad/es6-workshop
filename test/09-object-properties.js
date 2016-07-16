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

  // TODO: Read the rest of this test, then fill in the blank
  let key = __;

  // TODO: Fill in the two blanks
  // Remember: Strings have .toLowerCase() and .toUppercase() methods...
  let obj = {
    [key]: 'Foo',
    [key.__]: 'Bar',
    [key.__]: 'Baz',
  };

  t.deepEqual(obj, {
    'Test': 'Foo',
    'test': 'Bar',
    'TEST': 'Baz'
  });
});

test.skip('Object property / values pairs have a new shorthand', t => {
  // Do you ever end up repeating yourself when constructing objects?

  let name = 'Dan';
  let browser = 'Firefox';

  let foo = { name: name, browser: browser }; // <-- Much repetition!

  t.is(foo.name, 'Dan');
  t.is(foo.browser, 'Firefox');

  // ES2015 has a shorthand!

  let bar = { name, browser };

  // TODO: Fill in the blanks
  t.is(bar.__, 'Dan');
  t.is(bar.__, 'Firefox');

  // The results are the same:
  t.deepEqual(foo, bar);
});

test.skip('Objects now have shorthand for declaring methods', t => {
  // Named functions can be declared directly on objects, avoiding boilerplate.

  let utils = {
    increment: function increment(x) { return x + 1 }, // <-- Normal declaration
    double(x) { return x * 2 }, // <-- New object literal shorthand
  }

  t.is(utils.increment(1), 2);
  t.is(utils.double(2), 4);

  // TODO: The object below is throwing an exception. Can you figure out why?
  // Does converting `sign` to object literal shorthand function fix it?
  //
  // Do object literal functions act like normal functions or arrow functions?
  // (Meaning: do they have a `this` binding or not?)

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
