
Math.random(); // returns a number between 0(inclusive) and 1(exclusive)

console.log(Math.random())

//if both numbers are inclusive, bigger number - smaller number + 1 
// Generate a number between 3 and 5 (inclusive)

/* 1. See the range between the two numbers, but pay attention if inclusive or exclusive
    if both numbers are inclusive, bigger number - smaller number + 1
   
   2. Multiply count you found with Math.random()

   3. Floor result using Math.floor() method

   4. Add smaller number to new result
    

    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
    let result = Math.round(Math.random() * (max - min)) + min;

   OR


    USE THIS ONE
   let result = Math.round(Math.random() * (max - min)) + min 

*/

Math.random();


let num1 = (Math.round(Math.random() * (10 - 1 + 1)));
let num2 = (Math.round(Math.random() * (10 - 1 + 1)));
let num3 = (Math.round(Math.random() * (10 - 1 + 1)));

let numHighest = Math.max(num1, num2, num3);

let numLowest = Math.min(num1, num2, num3);

console.log(num1, num2, num3)

let totalDifference = Math.abs(numHighest - numLowest);

console.log(totalDifference);