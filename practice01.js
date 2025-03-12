/*

Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked
*/


const firstPos = over0 => over0.find(num => num >= 0);
console.log(firstPos([-1, 2, 3, 6,]));




/*

Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked

*/


const lastNeg = negativeNumber => negativeNumber.reverse().find((x => x < 0))

console.log(lastNeg([0, 3, -1, -3]))



/*
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked
*/

const firstLongest = longestWord => {
    longWord = longestWord[0];
    if (longestWord.length > longWord.length) {
        longWord = longestWord;
    }
    return longWord
}

console.log(firstLongest(['red', 'brown', 'Eldeirawi']))




/* 
Write a function named as max() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements
*/


const max = numbers => numbers.reduce((maxNumber, element) => {
    if (element > maxNumber) return element;
    else return maxNumber;
})

console.log(max([1, 2, 6, 3, 8]));



/* 
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked
*/ 

const min = minNum => minNum((finalMin, number) =>{
    if (number > finalMin) return number;
    else return finalMin
})

console.log(min([1, 4, 6, 8, 7]))