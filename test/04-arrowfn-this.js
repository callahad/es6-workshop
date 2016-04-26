import test from 'ava';

test.skip('`this` is resolved based on calling context', t => {
  let x = {
    value: 789,
    getValue: function() { return this.value; }
  };

  let y = {
    value: 123
  };

  t.is(x.getValue(), __); // <-- Context is the `x` object

  t.is(x.getValue.call(y), __); // <-- Rebinds context to the `y` object

  let yGetter = x.getValue.bind(y); // <-- Returns a function pre-bound to `y`

  t.is(yGetter(), __);
});

test.skip('`=>` functions do not have their own `this` value', t => {
  let x = {
    value: 789,
    getValue: () => this.value // <-- Only this line changed
  };

  let y = {
    value: 123
  };

  // Arrow functions don't define `this`, so `getValue` checks its scope chain.
  // Everything above it is also an arrow function! No `this` defined anywhere.

  t.throws(x.getValue, /Cannot read property 'value' of undefined/);

  // `bind`, `call`, and `apply` all change a function's own `this` binding.
  // ...but arrow functions don't even create a `this` to be modified.

  let yGetter = x.getValue.bind(y);
  t.throws(yGetter, __);
});

test.skip('`this` can still exist higher in the scope chain', t => {
  function Container(x) {
    this.value = x;
    this.getValueInternal = () => this.value;
  };

  let y = {
    value: 123
  };

  Container.prototype.getValueExternal = () => this.value;

  let x = new Container(789);

  // Both functions exist
  t.is(typeof x.getValueInternal, 'function');
  t.is(typeof x.getValueExternal, 'function');

  t.is(x.getValueInternal(), 789); // <-- Uses `this` from the `Container`
  t.throws(x.getValueExternal); // <-- Doesn't have a `this` in its scope chain.

  let yGetter = x.getValueInternal.bind(y);
  t.is(yGetter(), ___); // <-- Which context will this use? Why?
});

test.skip('Exercise: Use arrow functions instead of `var that = this`', t => {
  // Developers sometimes use `var that = this` as a hack to access the `this`
  // value of an enclosing scope. Arrow functions avoid the problem altogether.
  //
  // Try calculating bSum *without* using `that` or a similar hack.

  function Container(xs) {
    this.values = xs;
    this.aSum = 0;
    this.bSum = 0;

    let that = this;
    this.values.forEach(function(value) {
      // We're inside another `function` so `this` is no longer the `Container`.
      that.aSum += value;
    });

    this.values.forEach(__); // <-- Fill in the blank.
  }

  let x = new Container([1, 2, 3]);

  t.is(x.aSum, 6);
  t.is(x.bSum, 6);
});

// ============================================================================

// REVIEW:
// - Normal functions create context variables, like `this` and `arguments`.
// - Using `Function.prototype.bind(context)` can alter the value of `this`.
// - Arrow functions don't create contextual variables at all.
// - Because arrow functions don't have those variables:
//     - `this` is resolved lexically, up the scope chain.
//     - `.bind` has no effect.
// - A common practice is to set `var that = this`. Try arrow functions instead.
