const test = require('ava');
const path = require('path');

const createQuery = require('./create-query');

test('createQuery - Should output the proper text string.', t => {
  const text = `select first_name, last_name, email from user_account where email = :email and first_name = :firstName`;
  const values = {email: 'foo@bar.com', firstName: 'Foo'};

  const actual = createQuery({text, values});
  const expected = {
    text: `select first_name, last_name, email from user_account where email = $1 and first_name = $2`,
    values: ['foo@bar.com', 'Foo']
  };

  t.deepEqual(actual, expected);

});

test('createQuery - Should work with typecasts.', t => {
  const text = `select first_name, last_name, email from user_account where email = :email::text and first_name = :firstName`;
  const values = {email: 'foo@bar.com', firstName: 'Foo'};

  const actual = createQuery({text, values});
  const expected = {
    text: `select first_name, last_name, email from user_account where email = $1::text and first_name = $2`,
    values: ['foo@bar.com', 'Foo']
  };

  t.deepEqual(actual, expected);

});

test('createQuery - Should just return the string for no params.', t => {
  const text = `select first_name, last_name, email from user_account`;

  const actual = createQuery({text});
  const expected = `select first_name, last_name, email from user_account`;

  t.deepEqual(actual, expected);
});
