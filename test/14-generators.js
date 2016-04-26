import test from 'ava';

test.skip('Generator functions use special `function*` / `yield` syntax', t => {
  // Functions can only `return` once. Generators can `yield` many times.
  function* forever(x) {
    while (true) { // <-- Infinite loop! OK since generators are "lazy"
      yield x;
    }
  }

  t.is(typeof forever, 'function'); // Generators are still functions

  // Invoking the function creates a new iterable with a `.next` method.
  // The function then runs until it hits its first `yield` statement.

  let ones = forever(1);
  t.is(typeof ones, 'object');
  t.is(typeof ones.next, 'function');

  // Calling `next` returns the next value, as with any iterable.

  t.deepEqual(ones.next(), { value: 1, done: false });

  // Because we created an infinite loop, using `Array.from` would hang.
  // However, we can still pull a specific number of items from the generator.

  let rvals = [];
  for (let i = 0; i < 5; i++) {
    // Your Code Here
  }

  t.deepEqual(rvals, [1, 1, 1, 1, 1]);
});

test.skip('Exercise: Create a generator that yields fixed values', t => {
  // Write a generator that yields 'a', then 'b', then 'c', and then stops.

  function* abcs() {
    // Your Code Here.
    // Hint: Try the simplest thing that might work...
  }

  t.deepEqual(Array.from(abcs()), ['a', 'b', 'c']);
});

test.skip('Exercise: Create a generator counts to Infinity', t => {
  // Write a generator that yield 1, then 2, then 3, and never stops.

  function* count() {
    // Your Code Here.
    // Hint: Remember, generators are stateful. It's pausing and resuming.
  }

  let rvals = [];

  function take5(gen) {
    let result = [];

    for (let i = 0; i < 5; i++) {
      let cur = gen.next();
      if (cur.done) {
        break;
      } else {
        result.push(cur.value);
      }
    }

    return result;
  }

  t.deepEqual(take5(count()), [1, 2, 3, 4, 5]);

  // What if we call it again?
  t.deepEqual(take5(count()), [1, 2, 3, 4, 5]); // <-- Same as above! Why?

  // Let's try something different...
  
  let a = count();
  let b = count();
  t.deepEqual(take5(a), [1, 2, 3, 4, 5]); // <-- Not surprising.
  t.deepEqual(take5(a), [6, 7, 8, 9, 10]); // <-- Different! Why?

  // We've used `a`... what do we get when we look at `b`?
  t.deepEqual(take5(b), [1, 2, 3, 4, 5]); // <-- Is that what you expected? Why?
});

// ============================================================================

// REVIEW:
// - A special syntax, `function* foo() { ... }` creates generator functions.
//     - Inside a `function*` you `yield` instead of `return`.
//     - Calling `yield` produces the next value and pauses the function.
//     - You can `yield` many times.
// - Invoking a generator function returns an object with a `.next` method.
//     - Calling the `.next` method returns `{ value: x, done: true/false }`
//     - Repeated calls to `.next` produce subsequent values on-demand
//     - This means they're iterable: `Array.from` and `for of` can use them.
// - Each invocation of the generator function itself creates a new one.
// - Advanced: `.next` can take an argument, which it sends into the generator.
//     - You can also use `.return` or `.throw` to impact the resumed function.
//  - Advanced: Inside a generator, you can `yield* another_gen`
//      - This yields everything from another generator in order.
