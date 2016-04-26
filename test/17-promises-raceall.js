import test from 'ava';

function delay(n, x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(x), n);
  });
}

test.skip('Use `Promise.all` to wait for many promises to resolve', t => {
  // Promise.all accepts an array of values. Here's what it does:
  // All of the promises in the array are started concurrently.
  // It returns an array of all resolved values.
  // If any one promise rejects, the entire Promise.all rejects.
  // Non-promise values are passed through.
  
  let start = Date.now();

  return Promise.all([delay(20).then(() => 'foo'),
                      delay(50).then(() => 'bar'),
                      delay(30).then(() => 'baz'),
                      'qux']) // <-- Regular value... what happens to it?
    .then(values => {
      let duration = Date.now() - start;

      t.deepEqual(values, __); // <-- What is `values`?

      // Let's prove that the promises executed in parallel:

      t.true(duration >= 50); // <-- Took at least as long as the longest delay.
      t.true(duration < 100); // <-- But took less than the sum of all delays.
    })
});

test.skip('`Promise.race` only waits for one promise to resolve', t => {
  t.plan(2);
  // Like `Promise.all`, `Promise.race` takes an array of many promises.
  // However, it just waits for the fastest to resolve or reject.
  
  let r1 = Promise.race([delay(50, 'foo'), delay(10, 'bar')])
    .then(winner => t.is(winner, __)); // <-- Fill in the blank

  let r2 = Promise.race(['foo', delay(10, 'bar')])
    .then(winner => t.is(winner, __)); // <-- Fill in the blank

  // Our test framework actually waits for promises to resolve. Neat!
  return Promise.all([r1, r2]);
});

test.skip('Exercise: Use `delay` and `Promise.race`to implement timeouts', t => {
  // Implement a function that takes a promise and a timeout
  // If the promise doesn't resolve in time, reject with "Timed out";
  // Otherwise, resolve with what the promise resolved to.

  function getWithTimeout(p, ms) {
    // Your code here...
  }

  let p1 = getWithTimeout(delay(100, 'Data'), 50)
    .then(() => t.fail())  // <-- This must never execute
    .catch(reason => t.is(reason, 'Timed out'));

  let p2 = getWithTimeout(delay(100, 'More data'), 100)
    .then(value => t.is(value, 'More data'));

  return Promise.all([p1, p2]);
});

// ============================================================================

// REVIEW:
// - Promise.all lets you start and wait on many promises at once.
// - Promise.race lets you start many promises and go with the first to resolve.
