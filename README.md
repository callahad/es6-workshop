# Workshop: What's New in ES6?

## Setup

__Prerequisites__

To run this workshop, you need [Node.js](https://node.js.org) v5 or greater.

I also strongly recommend [Firefox Developer Edition](https://firefox.com/developer/):
JavaScript engines in browsers get updated far more frequently than Node does.

Mac users might need to install the XCode Command Line Tools: Open Terminal.app
and run `xcode-select --install` to get rolling. Mac users might also be
interested in the [Homebrew](http://brew.sh) package manager for getting
everything installed and set up.

You're in good shape when `git --version`, `node --version`, and `npm --version`
all report nice looking version numbers when run from the command line.

__Getting the Workshop__

Open a terminal and run `git clone https://github.com/callahad/es6-workshop.git`
to get a local copy of the workshop.

Next, `cd` into `es6-workshop` and run `npm install` to fetch and locally
install the workshop's dependencies.

You're in good shape when `npm test` reports "x skipped", where `x > 0`;

## Using the Workshop

__Fixing the Tests__

Each file in the `tests/` folder has a bunch of tests structure like this:

```javascript
test.skip('test addition', t => {
    let x = 1 + 1;

    t.is(x, __);
})
```

Your goal is to make every "skipped" test a working, passing test:

1. First, change `test.skip(...)` to `test(...)` so the test runs.
2. Second, read through the comments and do as it instructs. Also, look for any
   `__` blanks, and fill them in.

For instance, to make the test above pass, you would change it to:

```javascript
test('test addition', t => {
    let x = 1 + 1;

    t.is(x, 2);
})
```

__Checking your Work__

Run `npm test` to run and report on every tests.

Run `npm run watch` to interactively report on tests as you work on each file.

I recommend having a terminal open with `npm run watch` going in it, so you can
see what happens as you work. It re-runs a file's tests every time you save that
file, so to trigger an update, save your work. :)

## Experimenting

If you need to experiment, there are three great places to do so:

1. Your browser's developer tools.

    Your browser offers an excellent, interactive environment for testing.
    Crucially, your browser is likely to be more up to date than Node.js,
    especially if you're using a pre-release version like
    [Firefox Developer Edition](https://firefox.com/developer) or
    [Chrome Canary](https://www.google.com/chrome/browser/canary.html)

2. The `node` REPL.

    Run `node`. Type JavaScript. Victory. Node offers tab completion, so you can
    do things like `let s = 'hello'; s.<TAB>` to see all of the available
    methods on `s` in a nicely formatted display.

    Two words of warning: Node doesn't get updated nearly as often as browsers,
    and Node's standard library includes things that aren't part of standard
    JavaScript, so take it with a grain of salt.

3. The online [Babel REPL](http://babeljs.io/repl/)

    Babel converts modern JavaScript into backwards compatible JavaScript. It's
    pedantic about getting the details right, but it also tries to generate
    legible code.

    If you find yourself asking what some new syntax actually means, plugging it
    into Babel and trying to decipher the output is a great place to start.

## Other Resources

This workshop just scratches the tip of the iceberg. Here are some other
excellent resources.

__Reference__

- The [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
  is the gold standard for JavaScript documentation. And it's a wiki, so you can
  contribute, too!

- [tc39/ecma262](https://github.com/tc39/ecma262) is the working repository for
  the standards committee behind JavaScript (officially "ECMAScript"). Every
  year, the "Stage 4" proposals get collected, frozen, and turned into the
  next version of ECMAScript. ("ES6" is really "ES2015", for instance.)

- [Kangax's ES6 Compatibility Tables](http://kangax.github.io/compat-table/es6/)
  provide a comprehensive overview of the state of ES6 support in major browers
  and server-side JavaScript runtimes.

__Books / Articles / Other__

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) is an
  exceptional series of books on modern JavaSCript. Free to read online.

- [lukehoban/es6features](https://github.com/lukehoban/es6features) has great,
  bite-sized overviews of the new features in ES6.

- [We Have a Problem With Promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
  is the best article I've seen regarding common beginner and advanced mistakes
  when using Promises.

- My [presentation on Promises](https://github.com/callahad/tccc19-async), which
    includes the PouchDB callbacks to promises example in its `demos/` folder
