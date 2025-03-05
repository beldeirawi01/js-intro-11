


let num1 = 0;

while (num1 < 3) {
    console.log(num1);
    num1++;
}


let num2 = 0;

do {
    console.log(num2);
    num2++;
} while (num2 < 3);



const { getRandomNumber } = require('./../utils/MathHelper.js');

let ran;
let countAt = 0;
do {
    ran = getRandomNumber(1,15);
    countAt++;
} while (ran != 13);

console.log(`We got the number 13 after ${countAt} times`);