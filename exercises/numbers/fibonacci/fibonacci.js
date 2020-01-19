/**
 * Given a non-negative integer n, returns the n-th Fibonacci numbers.
 *
 * The Fibonacci numbers are defined thus:
 *
 * fib(n): 0  1  1  2  3  5  8  13  21  34  55  ...
 *      n: 0  1  2  3  4  5  6   7   8   9  10  ...
 *
 * That is, starting with 0 and 1, the next Fibonacci number is the sum
 * of the previous two. The "0-th" Fibonacci number is 0 and the first
 * Fibonacci number is 1.
 *
 * See https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @example
 * fibonacci(0); // => 0
 * fibonacci(1); // => 1
 * fibonacci(10); // => 55
 * fibonacci(12); // => 144
 *
 * @param {number} n - A non-negative integer
 * @returns {number} The fibonacci of num
 */

// it doesn't really work but I tried it so I uploaded it anyways. :) 
 function fibonacci(n) {
  let nums=[];

  for (let a=0; a<=n; a++){
    
    if (a=0){
      nums.push(0);
    console.log('1');
    } else if (a=1){
    nums.push(1);
    console.log('2');

  } else {
    let aMinusOne= a-1;
    let aMinusTwo = a-2;
    nums.push(`${nums[aMinusOne]}` + `${nums[aMinusTwo]}`);
  }
}
let nMinusOne= n-1;
let nMinusTwo = n-2;
  let answer = `${nums[nMinusOne]}` +  `${nums[nMinusTwo]}`;
return answer;

}

if (require.main === module) {
  console.log('Running sanity checks for fibonacci:');
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));
console.log(fibonacci(12));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = fibonacci;
