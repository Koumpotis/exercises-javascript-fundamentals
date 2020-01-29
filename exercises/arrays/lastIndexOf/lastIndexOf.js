/**
 * Given an array and a value, returns the index of the last occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @example
 * lastIndexOf([10, 20, 30, 20], 20); // => 3
 * lastIndexOf([10, 20, 30, 20], 17); // => -1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the last occurrence of the value in the
 *  array, or -1 if it's not found.
 */
function lastIndexOf(haystack, needle) {
  for (a=haystack.length-1; a>=0; a--){
    if (haystack[a]===needle){
      return a;
    }
  }
  return '-1';
  }
  
  if (require.main === module) {
    console.log('Running sanity checks for lastIndexOf:');
    console.log(lastIndexOf([10,20,30,10, 20],20));
    console.log(lastIndexOf([10,20,30,40],12));
    console.log(lastIndexOf(['you', 'me','she','me'],'me'));
}

if (require.main === module) {
  console.log('Running sanity checks for lastIndexOf:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = lastIndexOf;
