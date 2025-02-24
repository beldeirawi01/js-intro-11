//Properties

let pi = Math.PI;
console.log(pi);

//Methods

// Math.abs() is absolute value

console.log(Math.abs(5)) // 5
console.log(Math.abs(-5)) // 5


let userAge1 = 15;
let userAge2 = 20;

console.log(`The age difference is ${Math.abs(userAge1 - userAge2)} years`);


// ceil(), floor(), trunc(), round()

//trunc() gets the number as a wholenumber, regardless if it has decimal points or not
console.log(Math.trunc(10.99)) // 10
console.log(Math.trunc(10.01)) // 10

//round() rounds the number up or down based on the decimal points
console.log(Math.round(10.49)) // 10
console.log(Math.round(7.4999999)) // 7

//ceil() pushes number to one number up

console.log(Math.ceil(10.01)) // 11
console.log(Math.ceil(15.33)) // 16


//floor() pushes number to one number down
console.log(Math.floor(10.99)) // 10
console.log(Math.floor(10.01)) // 10

//pow() is number to the power of another number
console.log(Math.pow(2, 2)) // 4
console.log(Math.pow(3, 3)) // 27

console.log(Math.pow(5)) // NaN


//sqrt() takes square root of the number

console.log(Math.sqrt(64)) // 8
console.log(Math.sqrt(25)) // 5

//This is not a whole number so use toFixed
console.log(Math.sqrt(10).toFixed(1)) // 3.2


// max() and min()

console.log(Math.max(10, 7, 3)); // 10
console.log(Math.max(10, 7, 21)); // 21

console.log(Math.min(17, 5, 7, 11, 2)); // 2
console.log(Math.min(17, 10, 7)); // 7

