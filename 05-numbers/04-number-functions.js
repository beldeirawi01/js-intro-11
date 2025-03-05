
let num1 = 10.4551;
let num2 = 5;
let num3 = 10;

console.log(num1.toFixed(2)); // Outputs 10.46, which is 2 digits AFTER the decimal point

console.log(num1.toPrecision(2)); // Outputs 10, which is only first 2 digits



console.log(isFinite(5)); //True
console.log(isFinite(-6)); //True
console.log(isFinite(Infinity)); //False
console.log(isFinite('Hello')); //False


console.log(Number.isInteger(5)); //True 
console.log(Number.isInteger(9.99)); // False, it is a float
console.log(Number.isInteger(6.13)); // False, it is a float



