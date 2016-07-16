import test from 'ava';

test.skip('`var` is function-scoped', t => {
  // In JavaScript, `var` bindings are scoped at the function level.
  //
  // No matter where you declare a `var`, it applies everywhere in the function.

  var x = 1;
  {
    var x = 2;
    t.is(x, 2);
  }

  t.is(x, ___); // <-- TODO: Fill in the blank
});

test.skip('`let` and `const` are block-scoped', t => {
  // ES6 introduces `let` and `const` as block-scoped alternatives to `var`.
  //
  // Declarations are only valid within the nearest block.

  let x = 1;
  {
    let x = 2;
    t.is(x, 2);
  }

  t.is(x, ___); // <-- TODO: Fill in the blank
});

// ============================================================================

// REVIEW:
// - You can use `const` or `let` instead of `var` to create bindings.
// - `var` is function-scoped, `const` and `let` are block-scoped.
