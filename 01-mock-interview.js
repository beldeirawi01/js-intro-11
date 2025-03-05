/*


Find if a number is even or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
2   -> true 
5   -> false 
10   -> true

*/

let randNum = Math.round(Math.random() * (10 - 1)) + 1;

console.log(randNum)

if (randNum % 2 ===  0) {
    console.log('This statement is true')
} else {
    console.log('This statement is false')
}



/* Find if a number is odd or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true. 
Otherwise, print false. 
Examples: 
1  -> true 
2  
5  
10  -> false -> true 

*/

let numRandom = Math.round(Math.random() * (10 - 1)) + 1;

console.log(numRandom)

if (numRandom % 2 == 1) {
    console.log(true);
} else{
    console.log(false);
}





/*

Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true. 
Otherwise, print false. -> true -> true
*/


let randomNumber = Math.round(Math.random() * (5 - -5)) - 5;

console.log(randomNumber);

if (randomNumber >= 1) {
    console.log(true);
} else {
    console.log(false);
}



/*

Find if a number is negative or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is negative, print true. 
Otherwise, print false. 

*/

let randomNumber1 = Math.round(Math.random() * (5 - -5)) - 5;

console.log(randomNumber1);

if (randomNumber1 < 0) {
    console.log(true);
} else {
    console.log(false);
}


/*
Find if a number is divisible by 5 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true. 
Otherwise, print false. 
*/

let numberRand = Math.round(Math.random() * (50 - 1)) + 1;

console.log(numberRand);

if (numberRand % 5 == 0) {
    console.log(true);
} else {
    console.log(false);
}



/*

Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 7, print true. 
Otherwise, print false. 
*/


let numRand = Math.round(Math.random() * (50 - 1)) + 1;

console.log(numRand)

if (numRand % 7 == 0) {
    console.log(true);
} else {
    console.log(false);
}


/*

Calculate the sum of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the sum of the numbers and print it.
*/


let randNumSum1 = Math.round(Math.random() * (10 - 1)) + 1;
let randNumSum2 = Math.round(Math.random() * (10 - 1)) + 1;

console.log(`The sum of the numbers are ${randNumSum1 + randNumSum2}`);


/* 

Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it. 

*/

let numbersRandom1 = Math.round(Math.random() * (10 - 1)) + 1;
let numbersRandom2 = Math.round(Math.random() * (10 - 1)) + 1;

console.log(numbersRandom1, numbersRandom2);

console.log(`The difference between the two numbers is ${Math.abs(numbersRandom1 - numbersRandom2)}`);



/*

Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it

*/

let ranNum = Math.round(Math.random() * (10 - 1)) - 1;

console.log(ranNum);

console.log(`${(ranNum ** 3)}`);