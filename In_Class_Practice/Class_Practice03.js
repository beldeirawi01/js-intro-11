let num = Math.round(Math.random() * (100 - 1)) + 1

if (num <= 50) {
    console.log(`${num} is in the first half`);

    if (num <= 25) {
        console.log(`${num} is in the first quarter`)
    }
    else {
        console.log(`${num} is in the second quarter`)
    }
}
else {
    console.log(`${num} is in the second half`);

    if (num <= 75) {
        console.log(`${num} is in the third quarter`);
    }
    else {
        console.log(`${num} is in the fourth quarter`)
    }
}



/// Task 2

let num1 = Math.round(Math.random() * (100 - 1)) + 1;
let num2 = Math.round(Math.random() * (100 - 1)) + 1;
let num3 = Math.round(Math.random() * (100 - 1)) + 1;

console.log(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0);
    