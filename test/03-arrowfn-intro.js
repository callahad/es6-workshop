import test from 'ava';

test.skip('`=>` is shorthand for a function', t => {
  // ES2015 introduces `=>` as a shorthand for creating functions.

  let x = function(who) { return 'Hello, ' + who; }
  let y = (__) => { return ___; } // <-- Fill in the blanks

  t.is(x('world'), 'Hello, world');
  t.is(y('world'), 'Hello, world');
});

test.skip('`=>` without `{}` implicitly returns', t => {
  // If you omit the `{ }` braces, arrow functions implicitly return results.

  let y = (who) => { return 'Hello, ' + who };
  let z = (__) => ___; // <-- Fill in the blanks. Do not use `{}`.

  t.is(y('world'), 'Hello, world');
  t.is(z('world'), 'Hello, world');
});

test.skip('Exercise: Re-writing a filter chain', t => {
  // Generated with https://github.com/marak/faker.js <-- Super neat project
  let inventory = [
    { product: "Table", material: "Metal",    price: 61.64, qty: 3 },
    { product: "Table", material: "Granite",  price: 96.54, qty: 7 },
    { product: "Table", material: "Steel",    price: 49.83, qty: 4 },
    { product: "Table", material: "Plastic",  price: 90.49, qty: 5 },
    { product: "Table", material: "Concrete", price: 74.79, qty: 0 },
    { product: "Table", material: "Wood",     price: 68.96, qty: 1 },
    { product: "Chair", material: "Metal",    price: 47.20, qty: 0 },
    { product: "Chair", material: "Plastic",  price: 12.46, qty: 2 },
    { product: "Chair", material: "Concrete", price: 29.33, qty: 4 },
    { product: "Chair", material: "Steel",    price: 58.90, qty: 7 },
    { product: "Chair", material: "Granite",  price: 19.46, qty: 3 },
    { product: "Chair", material: "Wood",     price: 24.75, qty: 5 }
  ];

  let fnChairs = inventory
    .filter(function(x) {
      // Only include chairs
      return x.product === 'Chair';
    })
    .filter(function(x) {
      // With at least 4 in stock
      return x.qty >= 4;
    })
    .sort(function(a, b) {
      // Sort by price, descending
      return a.price >= b.price ? -1 : 1;
    })
    .map(function(x) {
      // Select just the material
      return x.material;
    });

  t.deepEqual(fnChairs, ['Steel', 'Concrete', 'Wood']);

  // Re-write the chain of filters above, but using `=>` instead of `function`.

  let arrowChairs = ___

  t.deepEqual(arrowChairs, ['Steel', 'Concrete', 'Wood']);
});

// ============================================================================

// REVIEW:
// - `arg => val` implies both `function(arg)` and `return val`.
// - `(a, b) => a + b` is shorthand for `function(a, b) { return a + b; }`.
// - `(a, b) => { return a + b; }` still works if you need multiple statements.
// - Notice how all of these top-level tests are written with '=>' notation.
