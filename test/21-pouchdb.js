import test from 'ava';
import PouchDB from 'pouchdb';
import memdown from 'memdown';

test.beforeEach(t => {
  t.context.db = new PouchDB('mydb', { db: memdown });
});

test.cb.skip('Example: PouchDB works with callbacks', t => {
  // Boilerplate for the test framework...
  t.plan(1);
  let fail = (err) => { t.fail(err); t.end(); };
  let pass = (ok) => { t.true(ok); t.end(); }

  // With callbacks, we have to check for failure every time,
  // leading to deeply nested, unmaintainable mess.
  //
  // This is a basic test that the database is actually working:
  // 1. Insert a document with `db.post`, which returns an `id`
  // 2. Retrieve that same document, using the generated `id`
  // 3. Delete the document from the database
  // 4. Check that deletion actually worked

  let db = t.context.db;

  db.post({'hello': 'world'}, function(err, result) {
    if (err) {
      fail(err);
    } else {
      // The `result` is an object with an `id` property that points to the doc.
      db.get(result.id, function(err, doc) {
        if (err) {
          fail(err);
        } else {
          db.remove(doc, function(err, deleted) {
            if (err) {
              fail(err);
            } else {
              pass(deleted.ok);
            }
          });
        }
      });
    }
  });

  // Because if the way our test is set up, if it passes, we know that:
  // 1. Execution reached all the way to the innermost function, and
  // 2. That `deleted.ok` was true, meaning that it worked!
  // Any failure along the line would have caused the test to blow up.
});

test('...and it also works with Promises!', t => {
  // Boilerplate for the test framework...
  t.plan(1);
  let fail = (err) => { t.fail(err); };
  let pass = (ok) => { t.true(ok); }

  // PouchDB also works with promises!
  // If you don't supply a callback, database operations return promises that
  // you can call `.then` or `.catch` on.
  //
  // For example:
  //
  //   db.post({'foo': 'bar'})
  //     .then(result => console.log(`The new document's ID is ${result.id}`);
  //     .catch(err => console.error(`Document creation failed with ${err}`);
  //
  // Instead of:
  //
  //    db.post({'foo': 'bar'}, function(err, result) {
  //      if (err) {
  //       console.error(`Document creation failed with ${err}`);
  //      } else {
  //       console.log(`The new document's ID is ${result.id}`);
  //      }
  //    });
  //

  // Your assignment: Try to re-write the above using promises
  // Remember: you can centralize all error handling with a downstream `.catch`
  // You should be able to do it in 4 lines, short lines.
  // I've included an example answer at the bottom of this file.

  let db = t.context.db;
  return db.post({'hello': 'world'})
    // <-- Start writing here...
    .then(result => db.get(result.id))
    .then(doc => db.remove(doc))
    .then(deleted => pass(deleted.ok))
    .catch(err => fail(err))
});

// ============================================================================

// REVIEW:
// - Promises are awesome. PouchDB is awesome.

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/* Example solution:

  return db.post({'hello': 'world'})
    .then(result => db.get(result.id))
    .then(doc => db.remove(doc))
    .then(deleted => pass(deleted.ok))
    .catch(err => fail(err))

*/
