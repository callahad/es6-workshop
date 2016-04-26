import test from 'ava';

// These are all super handy, and hopefully obvious...

test.skip('Strings now have `.startsWith`', t => {
  let s = 'Hello, world';

  t.true(s.startsWith('__'));
});

test.skip('Strings now have `.endsWith`', t => {
  let s = 'Hello, world';

  t.true(s.endsWith('__'));
});

test.skip('Strings now have `.includes`', t => {
  let s = 'Hello, world';

  t.true(s.includes('__'));
});

test.skip('Strings now have `.repeat`', t => {
  let s = 'NA'.repeat(6) + ' BATMAN!';

  t.is(s, __);
});

// ============================================================================

// REVIEW:
// - String instances now have a bunch of new methods
//   - `.startsWith`, `.endsWith`, and `.includes`
//   - `.repeat`
