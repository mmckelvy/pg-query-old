const test = require('ava');
const path = require('path');

const createQuery = require('./create-query');

test('createQuery - Should output the proper text string', t => {
  const text = `select first_name, last_name, email from user_account where email = :email and first_name = :firstName`;
  // const text = `:email`;
  const values = {email: 'foo@bar.com', firstName: 'Foo'};

  const actual = createQuery({text, values});
  const expected = {
    text: `select first_name, last_name, email from user_account where email = $1 and first_name = $2`,
    values: ['foo@bar.com', 'Foo']
  };

  t.deepEqual(actual, expected);


  // Want to be able to pass params
  /*
  e.g.
  getUsers({
    email: 'joe@blow.com'
  })

  output should be:

  the q object with text and values keys.
  */



});
