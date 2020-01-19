/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
// T(°C) = (T(°F) - 32) × 5/9

function fahrenheitToCelsius(temp) {
  let Celcius = (temp -32)/1.8;

return Celcius;
} 

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');
console.log(fahrenheitToCelsius(40));
console.log(fahrenheitToCelsius(32)===0);
console.log(fahrenheitToCelsius(50)===10);
console.log(fahrenheitToCelsius(110));

  // Your sanity checks go here.
}

module.exports = fahrenheitToCelsius;
