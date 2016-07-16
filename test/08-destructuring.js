import test from 'ava';

test.skip('Destructuring lets you reach inside objects', t => {
  // Destructuring objects lets you pluck values out of them.

  let { x } = { x: 24, y: 25, z: 26 };
  t.is(x, 24);

  // Destructuring is just shorthand for `let prop = obj['prop']`.

  let y = { x: 24, y: 25, z: 26 }['y'];
  t.is(y, 25);

  // Use destructuring to pick variables from the object so that the tests pass.

  let colors = { red: '#ff0000', green: '#00ff00', blue: '#0000ff' };

  // TODO: Fill in the blank, selecting only red and blue from of the object.
  let { __ } = colors;

  t.is(red, '#ff0000');
  t.is(blue, '#0000ff');
  t.throws(() => green); // <-- `green` should remain undefined
});

test.skip('Destructuring lets you reach inside arrays', t => {
  // Destructuring arrays is similar, but uses parameter order instead of names.

  let [ first ] = ['gold', 'silver', 'broze'];
  t.is(first, 'gold');

  // Use destructuring to pick variables from the array so that the tests pass.
  // Hint: Don't forget about rest / spread arguments! They work here, too.

  let ary = [ 'foo', 'bar', 'baz', 'qux' ];

  let [ __ ] = ary;

  t.is(a, 'foo');
  t.is(b, 'bar');
  t.deepEqual(c, ['baz', 'qux']);
});

// ============================================================================

// REVIEW:
// - Objects and Arrays can both be destructured.
// - `let { x } = obj` is equivalent to `let x = obj.x`.
// - `let [ y ] = ary` is equivalent to `let y = ary[0]`.
