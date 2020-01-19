/**
 * Given a non-negative integer as input, returns `true` if input is a power of `2` and `false` otherwise.
 *
 * A number is a power of `2` if it can be written as `2**k` for some positive integer `k`, where "`**`"
 * represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `81` is not a power of `2` since there's no integer `k` such that `81 === 2**k`.
 *
 * However, `81` _is_ a power of `3` since `81 === 3**4`.
 *
 * @example
 * isPowerOf(2, 2) // => true
 * isPowerOf(3, 3) // => true
 * isPowerOf(10, 2) // => false
 *
 * @param {number} n - The number
 * @param {number} b - The base
 * @returns {boolean} True if the number is a power of the base, false otherwise.
 */
function isPowerOfTwo(num){
  let answer=1;
  for (b=1; answer<num; b++) {
    answer= answer*2;
  
  }
     
  if (answer=== num){
    return true;
  } 
  
  else {
    return false;
  }
}
if (require.main === module) {
  console.log('Running sanity checks for isPowerOfTwo:');
console.log(isPowerOfTwo(8)===true);
console.log(isPowerOfTwo(10)===false);
console.log(isPowerOfTwo(4096)===true);
  // Your sanity checks here.
}

module.exports = isPowerOfTwo;
