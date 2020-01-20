/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
 let set = string.split(' ');
let shortest = set[0];
for (a=1; a<set.length;a++){
  if (set[a].length<shortest.length){
    shortest =set[a]
  } 
} 
  return shortest;
  
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');
console.log(shortestWord('I am him')==='I');
console.log(shortestWord('You are so cute')==='so');
console.log(shortestWord('coding is fun')==='is');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortestWord;
