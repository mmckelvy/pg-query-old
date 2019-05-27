/*
Make this function take a string...and it does the converting.

Then, we can readfiles or whatever later.
We're going to assume all variables are prefixed with an underscore?
or, better yet, prefixed with a colon?

So, we or :foo

We'll have params that look like this:

text: `select * from foo where email = :email`,
values: {email: 'foo@bar.com'}

- Set up a way to get feedback.
- Solve the simplest version of the problem possible.
- Break the problem into simpler, smaller pieces.
- Find something like the hard parts of the problem but is easy.

*/
/**
@param {string} queryString - An SQL query string.
*/
module.exports = function createQuery({ text, values }) {
  const regEx = /(^|\s)(:\w+)/;
  const params = Object.keys(values);

  return params.reduce((acc, param, index) => {
    acc.text = acc.text.replace(regEx, (match, p1, p2) => {
      return `${p1}$${index + 1}`;
    });

    acc.values.push(values[param]);

    return acc;

  }, {text, values: []});
}
