const { generateRandomNumber, getRandomNumber } = require('./../utils/MathHelper.js');

let username = 'TechGlobal'; // TechGlobal
let password = 'Test1234'; // Test1234

if (username === 'TechGlobal') {
    if (password === 'Test1234') {
        console.log('You are logged in');
    }
    else {
        console.log('Invalid Password entered!');
    }
}
else {
    console.log('Invalid Username entered!');
}


/*
Get a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

let month = getRandomNumber(1, 12);

console.log(month)

if (month <= 2) {
    console.log('Winter');
}
else if (month <= 5) {
    console.log('Spring');
}
else if (month <= 8) {
    console.log('Summer');
}
else if (month <= 11) {
    console.log('Fall');
}
else {
    console.log('Winter')
}