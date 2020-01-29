/**
 * Given a positive integer, return an array consisting of all its prime
 * factors sorted from smallest to largest. Each prime appears in the
 * returned array as many times as it divides the given integer.
 *
 * @example
 * primeFactors(2); // => [2]
 * primeFactors(2 * 2); // => [2, 2]
 * primeFactors(2 * 2 * 3); // => [2, 2, 3]
 * primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 * primeFactors(917329); // => [7, 7, 97, 193]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the prime factors of the given integer
 */


 function findFactors(num){
  let factors =[];
  let count=0;
  
  for (let a=2; a<=num; a++){ 
    if (num%a===0) {
      let count=0;

      for (let b=1; b<a; b++){
        //console.log('inside');
        if (a % b ===0 ){
          count = count + 1;
          } 
        
       }
       if (count<2) { 
        factors.push(a);
       }
      }
    }
return factors;
    }
console.log(findFactors(5));
console.log(findFactors(12));
console.log(findFactors(23));
 
//if (require.main === module) {
  //console.log('Running sanity checks for primeFactors:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?


//module.exports = primeFactors;
 