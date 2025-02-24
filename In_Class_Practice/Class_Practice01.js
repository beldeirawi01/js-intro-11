// let result = Math.round(Math.random(max - min)) + min

// let result = Math.round(Math.random() ) + min



// Task 1

let num1 = (Math.round(Math.random() * (50 - 0 + 0)));
console.log(`The random number * 5 is ${num1 * 5}`);



// Task 2


let rand1 = (Math.round(Math.random() * (10 - 1 + 1)));
let rand2 = (Math.round(Math.random() * (10 - 1 + 1)));


let minNum = Math.min(rand1, rand2);
let maxNum = Math.max(rand1, rand2);

console.log(`Min number = ${minNum}`)
console.log(`Max number = ${maxNum}`)

let numDiff = Math.abs(maxNum - minNum);

console.log(`Difference = ${numDiff}`);



// Task 3

let randNum1 = Math.round(Math.random() * (100 - 50)) + 50;

console.log(randNum1)

let remainderOfNum = (randNum1 % 10);

console.log(`The random number % 10 = ${remainderOfNum}`);



// Task 4

let randomNum1 = Math.round(Math.random() * (10 - 1 ) + 1);
let randomNum2 = Math.round(Math.random() * (10 - 1 ) + 1);
let randomNum3 = Math.round(Math.random() * (10 - 1 ) + 1);
let randomNum4 = Math.round(Math.random() * (10 - 1 ) + 1);
let randomNum5 = Math.round(Math.random() * (10 - 1 ) + 1);

console.log(randomNum1, randomNum2, randomNum3, randomNum4, randomNum5);

console.log((randomNum1 * 5) + (randomNum2 * 4) + (randomNum3 * 3) + (randomNum4 * 2) + (randomNum5 * 1));


/* 
    For the future, use containers, like putting score = 0 in line 52 and consistently update it 
    For example:

    let score = 0;
    let randomNum1 = Math.round(Math.random() * (10 - 1 ) + 1);

    score += randomNum1 * 5

    let randomNum2 = Math.round(Math.random() * (10 - 1 ) + 1);

    score += randomNum2 * 4

    let randomNum3 = Math.round(Math.random() * (10 - 1 ) + 1);

    score += randomNum3 * 3
    let randomNum4 = Math.round(Math.random() * (10 - 1 ) + 1);

    score += randomNum4 * 2

    let randomNum5 = Math.round(Math.random() * (10 - 1 ) + 1);

    score += randomNum5

    console.log(score)

*/






// Task 5

let numRand1 = Math.round(Math.random() * (25 - 1) + 1);
let numRand2 = Math.round(Math.random() * (50 - 26) + 26);
let numRand3 = Math.round(Math.random() * (75 - 51) + 51);
let numRand4 = Math.round(Math.random() * (100 - 76) + 76);


let numberMax = Math.max(numRand1, numRand2, numRand3, numRand4);
let numberMin = Math.min(numRand1, numRand2, numRand3, numRand4);


let totalAverage = (numRand1 + numRand2 + numRand3 + numRand4) / 4;

console.log(`Difference of Max and Min = ${Math.abs(numberMax - numberMin)}`);
console.log(`Difference of second and third = ${Math.abs(numRand3 - numRand2)}`);
console.log(`Average of all = ${totalAverage}`)


