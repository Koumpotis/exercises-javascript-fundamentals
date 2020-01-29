/**
 * Given two integers, returns the sum of all integers between those two integers, inclusive.
 *
 * For example:
 *
 * @example
 * sumOfRange(1, 5) // => 15 (i.e., 1 + 2 + 3 + 4 + 5)
 * sumOfRange(-3, 4) // => 4 (i.e., 3 + -2 + -1 + 0 + 1 + 2 + 3 + 4)
 *
 * @param {number} leftSummand - The left integer of the range to sum
 * @param {number} rightSummand - The right integer of the range of sum
 * @returns {boolean} The sum of every integer between the two input integers, inclusive
 */
function sumOfRange(leftSummand, rightSummand) {
  // This is your job. :)
  let sum=0;
  for (let a=leftSummand;a<=rightSummand;a++){
    sum=sum+a
  }
  return sum;
}

if (require.main === module) {
  console.log('Running sanity checks for sumOfRange:');
console.log(sumOfRange(2,6)===20);
console.log(sumOfRange(3,8)===33);
console.log(sumOfRange(4,6)===15);
console.log(sumOfRange(-2,4)=== 7);
  // Your sanity checks go here
}

module.exports = sumOfRange;
