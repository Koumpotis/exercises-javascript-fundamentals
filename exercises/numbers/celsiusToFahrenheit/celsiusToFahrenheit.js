/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
// T(°C) = (T(°F) - 32) × 5/9
// T(°F) = T(°C) × 9/5 + 32
function celsiusToFahrenheit(temp) {
  let Fahrenheit = temp * 9/5 +32
  return Fahrenheit;
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');
console.log(celsiusToFahrenheit(30)===86);
console.log(celsiusToFahrenheit(40)===104);
console.log(celsiusToFahrenheit(32)===89.6);
console.log(celsiusToFahrenheit(12)===53.6);

// Your sanity checks go here.
}

module.exports = celsiusToFahrenheit;
