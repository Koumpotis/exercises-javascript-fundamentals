/**
 * Given an array of integers, returns the count of odd integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Odd_number
 *
 * @example
 * countOdds([1, 2, 3, 4, 5, 19]); // => 4
 * countOdds([10, 10, 10]); // => 0
 * countOdds([1, 1, 1, 2]); // => 3
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */

function countOdds(array) {
  let count=0;
    for (a=0; a<array.length; a++){
    if (array[a]%2!==0){
      count+=1
    }
  } return count;
  }
  
  if (require.main === module) {
    console.log('Running sanity checks for countOdds:');
  console.log(countOdds([1,2,3,4,5,6,7,8]));
  console.log(countOdds([1,2,2,2,3,5]));
  console.log(countOdds([2,4,6]));
}

module.exports = countOdds;