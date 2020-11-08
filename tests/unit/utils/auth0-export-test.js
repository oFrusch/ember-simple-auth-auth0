import {
  test,
  skip,
  module
} from 'qunit';
// import auth0Lock from 'auth0-lock';
import auth0 from 'auth0-js';

module('Unit | moment exports', function() {
  test('auth0 exports', (assert) => {
    assert.ok(auth0, 'auth0 exports an object');
  });


  // ember-auto-import has a bug where you can't import
  // dynamically and statically in the same project
  // so we need to disable this test until that is fixed
  // https://github.com/ef4/ember-auto-import/issues/133
  skip('auth0-lock exports', async (/*assert */) => {
    // assert.ok(auth0Lock, 'auth0-lock exports an object');
  });
});
