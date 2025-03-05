const { getRandomNumber } = require('./../utils/MathHelper.js');

console.log('\n--------TASK1--------\n');

let str1 = "5";
let num1 =+ parseInt(str1);

let str2 = "2";
num2 =+ parseInt(str2);


console.log(`The sum of ${str1} and ${str2} is = ${num1 + num2}`);
console.log(`The product of ${str1} and ${str2} is = ${num1 * num2}`);
console.log(`The division of ${str1} and ${str2} is = ${num1 / num2}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${num1 - num2}`);
console.log(`The remainder of ${str1} and ${str2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${num1 ** num2}`);



console.log('\n--------TASK2--------\n');

let s1 = "200";
let s2 = "-50";

let newS1 = parseInt(s1);
let newS2 = parseInt(s2);


console.log(`The greatest value is ${Math.max(newS1, newS2)}`);
console.log(`The smallest value is ${Math.min(newS1, newS2)}`);


console.log(`The average is = ${(newS1 + newS2) / 2}`);
console.log(`The absolute difference is ${Math.abs(newS1 - newS2)}`);




console.log('\n--------TASK3--------\n');

let rand1 = Math.round(Math.random() * ( 50 - 1)) + 1;
let rand2 = Math.round(Math.random() * ( 50 - 1)) + 1;

console.log(`${rand1} and ${rand2}`)

console.log(`The absolute difference between numbers is = ${Math.abs(rand1 - rand2)}`);



console.log('\n--------TASK4--------\n');


let numRand1 = Math.round(Math.random() * (50 - 1)) + 1;
let numRand2 = Math.round(Math.random() * (50 - 1)) + 1;
let numRand3 = Math.round(Math.random() * (50 - 1)) + 1;
let numRand4 = Math.round(Math.random() * (50 - 1)) + 1;
let numRand5 = Math.round(Math.random() * (50 - 1)) + 1;

console.log(numRand1, numRand2, numRand3, numRand4, numRand5);

console.log(`The max value = ${Math.max(numRand1, numRand2, numRand3, numRand4, numRand5)}`);
console.log(`The min value = ${Math.min(numRand1, numRand2, numRand3, numRand4, numRand5)}`);



console.log('\n--------TASK5--------\n');

let randomNum1 = Math.round(Math.random() * (100 - 50)) + 50;
let randomNum2 = Math.round(Math.random() * (100 - 50)) + 50; 
let randomNum3 = Math.round(Math.random() * (100 - 50)) + 50;


console.log(`The number 1 = ${randomNum1}`);
console.log(`The number 2 = ${randomNum2}`);
console.log(`The number 3 = ${randomNum3}`);
console.log(`The sum of numbers is = ${randomNum1 + randomNum2 + randomNum3}`);



console.log('\n--------TASK6--------\n');

let number1 = Math.round(Math.random() * (100 - 1)) + 1;
let number2 = Math.round(Math.random() * (100 - 1)) + 1;
let number3 = Math.round(Math.random() * (100 - 1)) + 1;

console.log(number1, number2, number3)

console.log((number1 > 25) && (number2 > 25) && (number3 > 25));

console.log((number1 <= 25) || (number2 <= 25) || (number3 <= 25));



console.log('\n--------TASK7--------\n');

let name = "David"; 

console.log(`The length of the name is ${name.length}`);
console.log(`The first character  in the name is ${name[0]}`);
console.log(`The last character  in the name is ${name[name.length - 1]}`);
console.log(`The first 3 characters in the name are = ${name.slice(0,3)}`);
console.log(`The last 3 characters in the name are ${name.slice(-3, (name.length))}`);