let company = 'TechGlobal';

console.log(company[0]); // T

console.log(company[8]); // a


//Get first and last chars

let greeting = "Hello"

let firstChar = greeting[0];

let lastChar = greeting[greeting.length - 1];

console.log(` The first char is ${firstChar} and the last char is ${lastChar}`);


// charAt()

let city = "Chicago";

console.log(city.charAt(2)) // "i"

console.log(city.charAt(-2)) // This will ouput an empty string ''

console.log(city.charAt(city.length - 1)) // "o"

// at()

let color = 'Purple';

console.log(color.at(1)) // u

console.log(color.at(-2)) // l
console.log(color.at(6)) // undefined


/*
    NOTE

since it is using the variable for city.at(), color.length to work, 
it is considered to be an instance method

*/



// .charCodeAt() is used to retrive representation number from the ASCII table

let alphabet = "abcde"
console.log(alphabet.charCodeAt(0)) // 97
console.log(alphabet.charCodeAt(1)) // 98
console.log(alphabet.charCodeAt(2)) // 99

console.log(alphabet.charCodeAt(10)) // NaN