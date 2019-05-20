/*
Make this function take a string...and it does the converting.

Then, we can readfiles or whatever later.
We're going to assume all variables are prefixed with an underscore?
or, better yet, prefixed with a colon?

So, we or :foo

*/
/**
@param {string} queryString - An SQL query string.
*/
module.exports = function createQuery({ text, values }) {
  // order matters, so need to put the params in a certain order.
  const params = Object.keys(values);

  // Loop over the keys, and find them in the variables...
  // Assign each key a number.
  // That number is what will be substituted in the string.
  // Have to search the whole string?

}
