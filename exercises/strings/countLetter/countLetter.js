/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  let count=0
  for (let a=0; a <= string.length;a++ ){
    if (string.charAt(a) ===letter){
      count+=1;
    }
  }
  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');
  

  console.log(countLetter('hello','l') === 2 );
  console.log(countLetter('aa','a') === 2 );
  console.log(countLetter('aAa','a') === 2 );
  console.log(countLetter('q','b') === 0 );
  console.log(countLetter('Christos','s')===2);
  console.log(countLetter('antarctica', 'a')===3);
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countLetter;
