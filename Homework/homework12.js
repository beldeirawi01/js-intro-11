console.log('\n--------TASK1--------\n');

/*
Write a function named makeNegative() that takes a number and returns its 
negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no 
mathematical sense. So, zero will stay as zero.
*/

const makeNegative = (num) => {
    if (num === 0) return 0
    else return num - (num * 2)
}

console.log(makeNegative(100))



console.log('\n--------TASK2--------\n');

/*
Write a function isSumEvenOrOdd() which takes three numbers as 
arguments and determines if the sum of these numbers is odd or even
*/

const isSumEvenOrOdd = (num1, num2, num3) => {
    let sum = num1 + num2 + num3;
    
    if (sum % 2 === 0) return 'even'
    else return 'false'
}

console.log(isSumEvenOrOdd(0, -1, -5))



console.log('\n--------TASK3--------\n');

/*
Write a function named decimal2() which takes an array of numbers as an 
argument and returns the array with the same numbers rounded up or down and 
represented with only two decimals.
*/

const decimal2 = arrayNum => {
    let newArray = [];
    for (let i = 0; i < arrayNum.length; i++) {
        newArray.push(Math.round(arrayNum[i] * 100) / 100)
    }
    return newArray;
}

console.log(decimal2([94.356, 8.9752] ))



console.log('\n--------TASK4--------\n');

/*
Write a function named myPow() which takes two numbers, x and n, as its 
arguments and returns x to the power of n without using Math.pow(). 3 to the 
power of 3 is 3*3*3 = 27. 
NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 
equals the number itself.
*/

const myPow = (num1, num2) => {
    if (num2 === 0) return 1
    else return num1 ** num2
}

console.log(myPow(0, 1))



console.log('\n--------TASK5--------\n');

/*
Write a function named findLongestWord() which takes a string as input and 
returns the longest word in the string.
NOTE: If the string is empty or consists of spaces only, then return empty string.
NOTE: If the string consists of multiple words having the longest word, then 
return the first occurrence.
*/

const findLongestWord = string => {
    let stringSplit = string.split(' ')
    let longestWord = ''
    if (string.trim() === '') return ""
    
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].length > longestWord.length) longestWord = stringSplit[i]

    }
    return longestWord
    
}

console.log(findLongestWord("This is a sample string for testing"))