console.log('\n--------TASK1--------\n');

/*
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
*/

const noSpace = string => string.trim().split(' ').join('')

console.log(noSpace('   I am Baraa    '))


console.log('\n--------TASK2--------\n');

/*
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
*/

const replaceFirstLast = string => {
    let newString = string.trim();
    if (newString.length === 1) return newString
    else return newString.at(-1) + newString.slice(1, -1) + newString[0]
}

console.log(replaceFirstLast('     A     '))



console.log('\n--------TASK3--------\n');

/*
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
*/


const hasVowel = word => {
    for(const letter of word){
        if ('AEIOUaeiou'.includes(letter)) return true;
        else return false;
    }
};
console.log(hasVowel('wwww'))



console.log('\n--------TASK4--------\n');

/*
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023
*/


const checkAge = yearOfBirth => {
    let currentYear = 2023
    if (currentYear - yearOfBirth < 16) return 'AGE IS NOT ALLOWED';
    else if (currentYear - yearOfBirth > 120 || currentYear - yearOfBirth < 0) return 'AGE IS NOT VALID';
    else if (currentYear - yearOfBirth >= 16) return 'AGE IS ALLOWED';
    
}

console.log(checkAge(2050))



console.log('\n--------TASK5--------\n');

/*
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
*/

const averageOfEdges = (...numbers) => {
    let numMax = Math.max(...numbers)
    let numMin = Math.min(...numbers)
    return average = (numMax + numMin) / 2
}

console.log(averageOfEdges(0, 2, 4))



console.log('\n--------TASK6--------\n');

/*
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
*/

const noA = words =>{
    return words.map (word =>{
        if (word.toLowerCase().startsWith('a')) return '###'
        else return word
    }
    )
}

console.log(noA(["apple", "123", "ABC", "javascript"]))


console.log('\n--------TASK7--------\n');

/*
Write a function named no3and5() which takes an array of integer numbers 
as argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
*/

const no3and5 = number =>{
    let newNums = []
    for (i = 0; i < number.length; i++){
        if (number[i] % 3 === 0 && number[i]  % 5 === 0) newNums.push(101);
        else if (number[i]  % 5 === 0) newNums.push(99);
        else if (number[i]  % 3 === 0) newNums.push(100);
        else newNums.push(number[i])
    }
    return newNums
}

console.log(no3and5([3, 4, 5, 6]))




console.log('\n--------TASK8--------\n');

/*
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
*/


const countPrimes = number => {
    let primeCounter = 0;

    for (const num of number){
        if (num < 2) continue;

        if (num === 2) {
            primeCounter++;
            continue;
        }

        if (num % 2 === 0) continue;
        
        let isPrime = true;
        for (let i = 3; (i <= Math.sqrt(num)) / 2; i++){
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primeCounter++
    }
    return primeCounter;
}

console.log(countPrimes([41, 53, 19, 47, 67]))



console.log('\n--------TASK9--------\n');

/*
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed
*/


const removeDuplicates = arrayArg => {
    let newArray = [];
    for (const string of arrayArg) {
        if (newArray.includes(string)) continue;
        else newArray.push(string)
    }
    return newArray
}
console.log(removeDuplicates([0, -1, -2, -2, -1]))



console.log('\n--------TASK10--------\n');

/*
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
*/

const isDateFormatValid = date => {
    if (date.length !== 10) return false;
    else if(date.indexOf('/') !== 2 || date.lastIndexOf('/') !== 5) return false;
    else if (parseInt(date.slice(0, 2)) > 12 || parseInt(date.slice(0, 2)) < 1) return false;
    else if (parseInt(date.slice(0, 2)) > 12 || parseInt(date.slice(0, 2)) < 1) return false;
    else if (parseInt(date.slice(7)) > 9999 || parseInt(date.slice(7)) < 1111) return false;
    else return true;

}

console.log(isDateFormatValid('13/30/2020'))



console.log('\n--------TASK11--------\n');


/*
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
*/

const secondMax = number => {
    let newArray = [];
    for (const num of number) {
        if (newArray.includes(num)) continue;
        else newArray.push(num)
    }
    if (newArray.length === 1) {
        return newArray[0]
    }
    else {
        return newArray.sort((x, y) => x - y).at(-2);
    }
}

console.log(secondMax([3, 4, 5, 6]));



console.log('\n--------TASK12--------\n');

/*
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.
NOTE: Be careful when there is multiple min numbers.
*/

const secondMin = number => {
    let arrayOfNums = [];

    for (const num of number) {
        if (arrayOfNums.includes(num)) continue;
        else arrayOfNums.push(num)
    }
    if (arrayOfNums.length === 1) {
        return arrayOfNums[0]
    }
    else {
        return arrayOfNums.sort((x, y) => x - y).at(1);
    }
}

console.log(secondMin([10]))




console.log('\n--------TASK13--------\n');


/*
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others
*/

const mostRepeated = elements => {
    let newObject = {};
    let mostRepeatedElement = elements[0];
    let maxCount = 0;

    for (let element of elements) {
        newObject[element] = (newObject[element] || 0) + 1;

        if (newObject[element] > maxCount) {
            maxCount = newObject[element];
            mostRepeatedElement = element;
        }
    }

    return mostRepeatedElement;
}

console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) )