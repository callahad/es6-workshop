import test from 'ava';

test.skip('Objects now have shorthand for property getters and setters', t => {
  // Getters/setters were in ES5, but the syntax was cumbersome. This is nice.

  let party = {
    n: 0,
    get size() { return `${this.n} People`; },
    set size(x) { this.n = x; }
  }

  t.is(party.size, '0 People');
  party.size = 3;
  t.is(party.size, '3 People');

  // Use this strategy to create a person object that exaggerates their height,
  // unless they're already 6' (72") tall, then tell the truth.
  // If someone tries to set / modify their height, `throw "No cheating"`.

  function create_person(inches) {
    return {
      actual: inches,

      // TODO: Your methods go in here...
    }
  }

  let dan = create_person(71);
  t.is(dan.height, 72);

  let ryan_gosling = create_person(72);
  t.is(ryan_gosling.height, 72);

  let andre_roussimoff = create_person(88);
  t.is(andre_roussimoff.height, 88);

  t.throws(() => { dan.height = 72; }, /No cheating/);
});

// ============================================================================

// REVIEW:
// - The keywords `get` and `set` modify shorthand object literal functions.
// - Getters and setters are invoked by normal property access syntax.
// - Note: These will be *very* useful with classes, covered next!
