import test from 'ava';

test.skip('Use `.then` to receive values once the Promise settles', t => {
  let p = Promise.resolve(12);
  
  t.plan(1); // Checks that the expected test actually runs.

  // Exercise: Build a chain of 3 `.then(fn)` handlers off of `p`.
  // - First, double the incoming value and return it (12 -> 24)
  // - Second, increment it by 1 and return it (24 -> 25)
  // - Third, use `t.is(__, 25)` to check if you got the expected value.
  // Note: Arrow functions will make this significantly more concise

  return p.__
});

test.skip('Sometimes things go wrong. Use `.catch` to recover.', t => {
  t.plan(1);

  // Your task: Uncomment the rejection line, then make the test pass.
  return Promise.resolve(0b0001)
    // .then(x => { throw 'boom' }) // <-- Simulate something breaking
    .then(x => x << 3)
    .then(x => { t.is(x, 0b1000); })
    // <-- Write a `.catch(fn)` handler here to recover.
    .then(() => { t.pass() } );

  // Things to observe:
  // 1. None of the `.then` handlers between the rejection and the `.catch` run.
  // 2. If the `.catch` doesn't throw, the next `.then` downstream of it runs.
  // 3. This acts a *lot* like a `try ... catch` block.
});

test.skip('`.catch` is just syntactic sugar', t => {
  t.plan(1);

  // `.then` actually takes two arguments: `resolveHandler` and `rejectHandler`.
  // If either isn't a function, it's skipped and the next one downstream runs.
  
  // Your task: Fix the `.catch`, then replace it with an equivalent `.then`.
  
  return Promise.resolve()
    .then(x => `Hello, ${x.toUpperCase()}!`) // <-- Oops! `x` is undefined!
    .catch(() => 'Hello, world!') // Fall back to a default value.
    .then(x => t.is(x, 'Hello, WORLD!'));

  // SPOILER: This means `.catch(fn)` is identical to `.then(undefined, fn)`.
});

test.skip('Non-functions are ignored', t => {
  t.plan(1);
  // If you pass a non-function to `.then`, it's ignored data flows through.
  // More specifically, passthrough functions are subbed in instead:
  // - For resolved promises: `(value) => value`
  // - For rejected promises: `(reason) => { throw reason }`
  // Put another way, the default is `.then(x => x, r => { throw r })`...
  // ...and if you want to override it, you *must* pass a function.

  // Your task: Add at least 3 more `.then()`'s with non-function values.
  // At the very end, use `t.is(__, 42)` to verify that it flowed through.

  return Promise.resolve(42)
    .then(Date.now())
    // Your code here
});

// ============================================================================

// REVIEW:
// - Get values from a promise with `.then(resolveHandler, rejectHandler)`.
// - Any exception in the chain flows to the first downstream rejection handler.
// - `.catch(rejectHandler)` is shorthand for `.then(undefined, rejectHandler)`.
// - Non-functions are ignored when passed as handlers. Data flows through.
