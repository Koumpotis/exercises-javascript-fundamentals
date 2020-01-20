/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
 let set = string.split(' ');
let longest = set[0];
for (a=1; a<set.length;a++){
  if (set[a].length>longest.length){
    longest =set[a]
  } } 
  return longest;
  
}


if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
console.log(longestWord('I am him')=== 'him');
console.log(longestWord('Hello my name is Christos')=== 'Christos');
console.log(longestWord('coding is fun')=== 'coding');
console.log(longestWord('Mississipi')=== 'Mississipi');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;
