const { getRandomNumber } = require('./../utils/MathHelper.js');

for (let i = 1; i <= getRandomNumber(10, 20); i++) {
    if (i % 2 != 0) console.log(i)
}


let r2 = getRandomNumber(1, 10);

let product = 1; 

console.log(`The random number is ${r2}.`);
for (let i = 1; i <= r2; i++) {
    product *= i;
}
console.log(product);





let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);


