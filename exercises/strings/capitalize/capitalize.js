/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(word) {
  let upped= word.slice(0,1).toUpperCase();
  return upped + word.slice(1);
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');
console.log(capitalize('mom'));
console.log(capitalize('christos')=== 'Christos');
console.log(capitalize('coding')==='Coding');
console.log(capitalize('Faith')==='Faith');


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
