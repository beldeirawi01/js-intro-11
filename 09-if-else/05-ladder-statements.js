const { getRandomNumber } = require('./../utils/MathHelper.js');

let ran1 = getRandomNumber(-5, 5);

console.log(`The random num1 is = ${ran1}`);

if (ran1 > 0) {
    console.log('POS')
}
else if (ran1 < 0) {
    console.log('NEG');
}
else {
    console.log('NEUTRAL')
}

console.log('End of the program');