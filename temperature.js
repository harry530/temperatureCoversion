const kelvin = 279;
// kelvin equal to 293
const celsius = kelvin - 273;
// convert kelvin to celsius
let fahrenheit = celsius * (9 / 5) + 32;
// convert celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit);
// round down the fahrenheit temperature
console.log(`The temperature is ${kelvin} Kelvin .`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33 / 100);
// convert newton to celsius
newton = Math.floor(newton);
console.log(`The temperature is ${newton} Newton`);