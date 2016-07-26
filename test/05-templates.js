import test from 'ava';

test.skip('template literals are strings', t => {
  // Template literals use `` marks as quotes, and turn into regular strings.

  let a = "Hello, World";
  let b = 'Hello, World';
  let c = `Hello, World`; // <-- Template literal!

  // They're all strings
  t.is(typeof a, 'string');
  t.is(typeof b, 'string');
  t.is(typeof c, 'string');

  // They're all equal to each other
  t.true(a === b && b === c);
});

test.skip('template literals have super powers', t => {
  let who = 'World';

  let a = "Hello, ${who}";
  let b = 'Hello, ${who}';
  let c = `Hello, ${who}`;

  // Single- and double-quoted strings work the same.
  t.true(a === b);

  // But template literals work differently...
  t.true(a !== c);

  // What is `a`? What did `c` turn into?
  // TODO: Fill in the blanks with normal, single-quoted strings.
  t.is(a, __);
  t.is(c, __);
});

test.skip('template literals can span multiple lines', t => {
  // Unlike normal strings, template literals can run across several lines.
  // Try filling in the blank below, without typing the `\n` escape character.
  let x = `__`;

  t.is(x, 'Hello,\n  world');
});

test.skip('template literals can compute arbitrary values', t => {
  // You can even evaluate arbitrary JavaScript inside `${ blocks }`.

  let what = 'hello, world';

  // TODO: Fill in the blank
  let x = `I like shouting "${__}!"`;
  t.is(x, 'I like shouting "HELLO, WORLD!"');

  // TODO: Fill in the blanks, using only letters, spaces, and the + sign.
  let a = 1;
  let b = 2;
  t.is(`${__} + ${__} = ${__}`, '1 + 2 = 3')
});

test.skip('Exercise: Construct a complex string', t => {
  let conf= {
    name: 'MinneWebCon',
    year: '2016',
    keynotes: ['Denise Jacobs', 'Sara Wachter-Boettcher']
  }

  // TODO: Fill in the blanks. Don't forget about the `.join` method on arrays!
  let x = `In ${__}, ${__} had ${__} keynotes.`;
  let y = `The speakers were: ${__}.`;

  t.is(x, 'In 2016, MinneWebCon had 2 keynotes.');
  t.is(y, 'The speakers were: Denise Jacobs, Sara Wachter-Boettcher.')
});

// ============================================================================

// REVIEW:
// - Template literals are written with backticks (``) as quotes.
// - They evaluate arbitrary statements inside `${ blocks }`.
// - They can even span multiple lines.
