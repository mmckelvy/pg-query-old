/**
*
*/
module.exports = function createQuery({ text, values }) {
  if (!values) {
    return text;
  }

  const params = Object.keys(values);

  if (!params.length) {
    return text;
  }

  const regEx = /(^|\s)(:\w+)/;

  return params.reduce((acc, param, index) => {
    acc.text = acc.text.replace(regEx, (match, p1, p2) => {
      return `${p1}$${index + 1}`;
    });

    acc.values.push(values[param]);

    return acc;

  }, {text, values: []});
}
