import test from 'ava';

test.skip('You can use `...name` to collect extra params into an array', t => {
  let sumArgs = (...nums) => nums.reduce((a, b) => a + b, 0);

  t.is(sumArgs(1, 2, 3), __); // <-- Notice that I'm *not* passing an array.
});

test.skip('You can use `...array` to explode an array into separate params', t => {
  let sumThree = (a, b, c) => a + b + c;

  t.is(sumThree(1, 2, 3), __);

  let args = [7, 8, 9];

  t.is(sumThree(...args), __);
});

test.skip('Exercise: Use `...` to both spread and collect parameters', t => {
  // Number.parseInt takes two parameters: a string, and a base. For example:

  // Decimal is the default
  t.is(Number.parseInt('99'), 99);
  t.is(Number.parseInt('99', 10), 99);

  // But other bases are supported, too.
  t.is(Number.parseInt('ff', 16), 255); // Hexadecimal 0xFF
  t.is(Number.parseInt('77', 8), 63); // Octal 0o77
  t.is(Number.parseInt('11', 2), 3); // Binary 0b11

  // Can you make a function that passes the following test cases?
  // Hint: Use `...` to both collect and spread parameters.
  // Hint: Arrays have a `.map` method that applies a function to each element.
  //   e.g. `[1, 2, 3].map(x => x * 2)` returns `[2, 4, 6]`

  function parsePairs(__) {
    return ___;
  }

  let result = parsePairs(['99'], ['99', 10], ['ff', 16], ['77', 8], ['11', 2]);
  t.deepEqual(result, [99, 99, 255, 63, 3]);
});

// ============================================================================

// REVIEW:
// - `...x` in function signatures means "collect the rest into `x`, an array".
// - `...x` in function invocations means "split iterable `x` into many args".
//     - We haven't talked about what exactly 'iterable' means. We will.
// - FYI: There is a proposal for `...` on objects, but it's not finalized yet.
