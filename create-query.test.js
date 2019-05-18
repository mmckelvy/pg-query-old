const test = require('ava');
const path = require('path');

const createQuery = require('./create-query');

test('createQuery - Should output the proper text string', t => {
  const file = path.join(__dirname, './test-1.sql');
  const actual = createQuery(file);
  const expected = `select first_name, last_name, email from user_account where email = $1`

  // Want to be able to pass params
  /*
  e.g.
  getUsers({
    email: 'joe@blow.com'
  })
  */

});
