import test from 'ava';

// Low fidelity polyfill for Array.includes, which isn't in Node 5.x.
// Ignore the man behind the curtain...
if (!('includes' in Array.prototype)) {
  Array.prototype.includes = function(x) { return this.indexOf(x) > -1 };
}

test.skip('ES7 defines an exponentiation operator', t => {
  t.is(3 ** 2, __);
});

test.skip('ES7 defines an exponentiation operator', t => {
  t.true(['foo', 'bar', 'baz'].includes(__));
});

// ============================================================================

// REVIEW:
// - The entirety of ES7 / ES2016 fits in a tweet: `x ** y` and `[].includes`.
