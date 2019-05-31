const createQuery = require('./create-query');
/**
* Runs createQuery on a series of files from an "entry" and compiles them into querystrings.
*
* @param {object} config
* @param {string} config.input - File path to the directory containing the .sql files.
* @param {string} config.output - Path to the output file.  Should include the output file name in the path.
* @param {boolean} config.recursive - Look for and compile files in subdirectories or not. Default true.
*
* @return {undefined}
*/
module.exports = function buildQueries(config) {
  const { input, output, recursive } = config;

  // Recurse through the files in input
  // If sql file, then readFile, run the output through createQuery
  // If non sql file, ignore
  // If directory, call function again on directory.
}
