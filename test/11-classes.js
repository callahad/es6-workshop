import test from 'ava';

test.skip('Review: prototypes as classes', t => {
  // JavaScript has always had prototypal inheritance, which looks like classes.
  function Greeter(who) {
    this.who = who;
  }

  Greeter.prototype.hello = function() { return `Hello, ${this.who}`; };

  Greeter.prototype.bye = function() { return `Goodbye, ${this.who}`; };

  let world = new Greeter('world');
  t.is(world.hello(), 'Hello, world');
  t.is(world.bye(), 'Goodbye, world');

  let mwc = new Greeter('MinneWebCon');
  t.is(mwc.hello(), 'Hello, MinneWebCon');

  // Changing the prototype changes all of its instances
  // (They were all just referencing the value on the prototype...)
  
  Greeter.prototype.hello = function() { return `Hi, ${this.who}`; };

  t.is(world.hello(), __);
  t.is(mwc.hello(), __);

  t.true(mwc instanceof Greeter);
});

test.skip('There is a new `class` definition syntax', t => {
  // All that `prototype` stuff is verbose and error-prone.
  // Thankfully, ES6 has new syntax!

  class Superhero {
    // Your Task: Define methods here so that the tests below pass.
    // Note: Creating new instances tries to run a  method named `constructor`.
    // Note: Don't use commas between method definitions.
    // Hint: Try using the object literal function shorthand we just learned!
    // Hint: Don't forget about getters and setters, too!
  }

  let hulk = new Superhero('Bruce Banner', 'The Hulk', 'superhuman strength');
  t.is(hulk.desc(), 'Bruce Banner, A.K.A. "THE HULK", has superhuman strength');
  t.is(hulk.alias, 'The Hulk');

  let cap = new Superhero('Steve Rogers', 'Captain America', 'a neat shield');
  t.is(cap.desc(), 'Steve Rogers, A.K.A. "CAPTAIN AMERICA", has a neat shield');

  cap.alias = 'The Captain';

  t.is(cap.desc(), 'Steve Rogers, A.K.A. "THE CAPTAIN", has a neat shield');
  t.is(cap.alias, 'THE CAPTAIN');
});

test.skip('Classes can have instance and static properties', t => {
  class Num {
    constructor(x) {
      this.value = x;
    };

    isEven() { return this.value % 2 === 0; };

    static get PI() { return 3.14; };
  }

  let one = new Num(1);
  let two = new Num(2);

  t.false(one.isEven());
  t.true(two.isEven());

  t.is(Num.PI, 3.14); // <-- Static properties appear on the class itself
  t.is(one.PI, undefined); // <-- Static properties don't appear on instances

  // First task: Implement a new static method, `abs`.
  // It should return the result of `Math.abs()` of a passed parameter.

  t.is(Num.abs(7), 7);
  t.is(Num.abs(-7), 7);

  // Second task: Implement a new instance method, `fizzbuzz()`, then returns:
  // - 'Fizz' if the number is divisible by 3
  // - 'Buzz' if the number is divisible by 5
  // - 'FizzBuzz' if the number is divisible by both 3 and 5
  // - Otherwise, just the number itself.

  let three = new Num(3);
  let five = new Num(5);
  let fifteen = new Num(15);
  let sixteen = new Num(16);

  t.is(one.fizzbuzz(), 1);
  t.is(two.fizzbuzz(), 2);
  t.is(three.fizzbuzz(), 'Fizz');
  t.is(five.fizzbuzz(), 'Buzz');
  t.is(fifteen.fizzbuzz(), 'FizzBuzz');
  t.is(sixteen.fizzbuzz(), 16);
});

test.skip('Classes can extend other classes', t => {
  class Rectangle {
    constructor(length, width, height) {
      this.length = length;
      this.width = width;
      this.height = height;
    }

    volume() {
      return this.length * this.width * this.height;
    }
  }

  class Cube extends Rectangle {
    // Your Task: Define a constructor for the square.
    // Hint: use `super(...)` to access the parent class's constructor.
    //
    // Also: Define a set/get pair for 'sides`, which sets length/height/width.
    // Bonus: Guard against breakage by defining length/width/height setters
    //   Setting one should update all of them. Because it's a cube.
  }

  let rect = new Rectangle(2, 3, 4);
  t.is(rect.volume(), 24);

  let cube = new Cube(3);
  t.is(cube.sides, 3);

  t.is(cube.volume(), 27);

  cube.sides = 4;
  t.is(cube.volume(), 64);

  // Lastly, review how inheritance works with `instanceof`:

  t.true(cube instanceof Rectangle);
  t.true(cube instanceof Cube);

  t.true(rect instanceof Rectangle);
  t.false(rect instanceof Cube);
});

// ============================================================================

// REVIEW:
// - New syntax: `class Foo extends Bar { ...methods... };`
//     - Extends is optional.
// - Constructor is a method named `constructor`.
// - `static` keyword defines a method on Class itself instead of the prototype.
// - `super` references the (single-inheritance) parent class.
// - No new functionality; this is purely a nicer syntax for existing practices.
