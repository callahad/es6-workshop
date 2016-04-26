import test from 'ava';

test.skip('Review: JavaScript has `for in` loops', t => {
  // ES5 defined `for in` loops to iterate through property names

  // It works on arrays...

  let array_result = [];
  for (let i in ['foo', 'bar', 'baz']) {
    array_result.push(i);
  }

  t.deepEqual(array_result, __); // <-- What is the result?

  // Strings can be accessed like Arrays, so maybe you can use them, too?

  let s = 'hello';
  t.is(s[1], 'e');

  let str_result = [];
  for (let x in s) {
    str_result.push(x);
  }

  t.deepEqual(str_result, __); // <-- What is the result?

  // It works on objects, too.
  
  let obj_result = [];
  for (let p in {x: 'Foo', y: 'Bar', z: 'Baz' }) {
    obj_result.push(p);
  }

  t.deepEqual(obj_result, __); // <-- What is the result?
});

test.skip('ES6 adds new `for of` loops, which are similar.', t => {
  // The syntax is almost exactly the same

  // It works on arrays...

  let array_result = [];
  for (let x of ['foo', 'bar', 'baz']) {
    array_result.push(x);
  }

  t.deepEqual(array_result, __); // <-- What is the result?

  // And also strings...

  let str_result = [];
  for (let x of 'hello') {
    str_result.push(x);
  }

  t.deepEqual(str_result, __); // <-- What is the result?

  // But what about Objects?

  let obj = {x: 'Foo', y: 'Bar', z: 'Baz' };
  
  try {
    let obj_result = [];
    for (let x of obj) {
      obj_result.push(x);
    }

   // Will this get called, and if so, what is the result?
    t.deepEqual(obj_result, __);
  } catch (e) {
    // Or will this get called? Why?
    t.regex(e.message, /is not iterable/);
  }
});

test.skip('Objects can be iterated using helpers', t => {
  // Okay, so objects can't be naively iterated.
  // Maybe there is a helper that would give us something iterable?
  // Hint: Review the docs at:
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

  let obj = {x: 'Foo', y: 'Bar', z: 'Baz' };

  let ks = [];
  for (k of __) { // <-- Fill in the blank
    ks.push(k);
  }

  t.deepEqual(ks, ['x', 'y', 'z']);
});

// ============================================================================

// REVIEW:
// - `for in` loops through property names or indexes.
// - `for of` loops through values of other iterable things.
// - Note: The definition of an 'iterable' will be covered next.
