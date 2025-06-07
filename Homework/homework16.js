console.log('\n--------TASK1--------\n');

/*
Write a function named toInitials() which takes a string argument considered 
to be full name and returns initials of the given full name.
NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only.
*/

const toInitials = stringArg => {
    let name = stringArg.split(" ")
    return `${name[0][0]}. ${name[1][0]}.`
}

console.log(toInitials("John Doe"))


console.log('\n--------TASK2--------\n');

/*
Write a function named hasNumbers() which takes a string argument and 
returns true if there is a number and false if there isn’t. 
*/

const hasNumbers = stringArg => {
    return (/[0-9]/.test(stringArg))
}

console.log(hasNumbers("Hey"))


console.log('\n--------TASK3--------\n');

/*
Write a function named elementLength() which takes an array argument and 
returns the length of each element as a separate array.
*/

const elementLength = arrayArg => {
    let newArray = []

    for (let i = 0; i < arrayArg.length; i++) {
        newArray.push(arrayArg[i].length)
    }

    return newArray
}

console.log(elementLength([]))

console.log('\n--------TASK4--------\n');

/*
Write a function named isArraySumEvenOrOdd() which takes an array of 
numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
Examples:
isArraySumEvenOrOdd( [ ] )  -> "even"
isArraySumEvenOrOdd( [ 0,-1,-5 ] )      -> "even"
isArraySumEvenOrOdd( [ 7,1, 8,1 ] )     ->  "odd”
isArraySumEvenOrOdd( [ 0,0 ] )  ->  "even"
isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )   ->  "odd”
*/


const isArraySumEvenOrOdd = arrayNums => {
    let sum = 0;

    for (let num of arrayNums) {
        sum += num;
    }
    if (sum % 2 === 0 || sum === 0) return "even"
    else return "false"
}
console.log(isArraySumEvenOrOdd([1, 2]))

console.log('\n--------TASK5--------\n');

/*
Write a function named reverse() which takes a string argument and returns the given string 
reversed
*/

const reverse = stringArg => {
    return stringArg.split("").reverse().join("")
}

console.log(reverse("Hello world"))




console.log('\n--------TASK6--------\n');

/* 
Write a function named reverseWords() which takes a string argument and returns a string 
with each word within that string reversed but still in the same order as the initial string
*/

const reverseWords = stringArg => {
    let splitString = stringArg.trim().split(" ")
    let newString = ""

    for (let i = 0; i < splitString.length; i++) {
        newString += splitString[i].split("").reverse().join("") + " "
    }

    return newString.trim()
}

console.log(reverseWords("Hello"))