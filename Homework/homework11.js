console.log('\n--------TASK1--------\n');

/*
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer
*/

const countPalindrome = string => {
    let palindromeCounter = 0;
    let stringSplit = string.split(' ');

    if (string === '') return 0
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].toLowerCase() === stringSplit[i].toLowerCase().split('').reverse().join('')) palindromeCounter++;
    }

    return palindromeCounter;
}

console.log(countPalindrome(""));


console.log('\n--------TASK2--------\n');

/*
Write a function named sum() which takes an array of numbers and a boolean 
value as arguments. It will return the sum of the numbers positioned at even 
indexes if true. And, return sum of numbers positioned at odd indexes if false
*/

const sum = (arrayNums, bool) => {
    let total = 0;
    if (bool === true) {
        for (let i = 0; i < arrayNums.length; i++) {
            if (i % 2 === 0) total += arrayNums[i]
        }
    }

    else if (bool === false) {
        for (let i = 0; i < arrayNums.length; i++) {
            if (i % 2 === 1) total += arrayNums[i]
        }
    }

    return total;
}

console.log(sum([0, -1, 15, 1], false) )


console.log('\n--------TASK3--------\n');

/* 
Write a function named nthChars() which takes a string and a number as 
arguments and returns the string back with every nth characters
*/

const nthChars = (stringArg, numArg) => {
    let newString = '';
    for (let i = numArg - 1; i < stringArg.length; i += numArg) {
        newString += stringArg[i] 
    }

    return newString
}

console.log(nthChars("JavaScript", 5))



console.log('\n--------TASK4--------\n');

/*
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the 
characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
*/

const canFormString = (stringArg1, stringArg2) => {
    let dictonary = {}
    stringArg1 = stringArg1.toLowerCase();
    stringArg2 = stringArg2.toLowerCase().replace(/\s+/g, "");

    for(let i of stringArg1) {
        if (i in dictonary) dictonary[i] += 1;
        else dictonary[i] = 1;
    }

    for (let i of stringArg2) {
        if (dictonary[i] <= 0) return false;
        else if (i in dictonary) dictonary[i] -= 1;
        else return false
    }
    return true
}

console.log(canFormString("CONVERSATION", "voices rant on"))




console.log('\n--------TASK5--------\n');

/*
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
*/


const isAnagram = (string1, string2) => {
    let dictonary = {}
    string1 = string1.toLowerCase().replace(/\s+/g, "");
    string2 = string2.toLowerCase().replace(/\s+/g, "");

    if (string1.length !== string2.length) return false;

    for(let i of string1) {
        if (i in dictonary) dictonary[i] += 1;
        else dictonary[i] = 1;
    }

    for (let i of string2) {
        if (!(i in dictonary) || dictonary[i] <= 0) return false;
        else if (i in dictonary) dictonary[i] -= 1;
        else return false
    }
    return true;
}

console.log(isAnagram("listen", "silent"))

console.log('\n--------TASK6--------\n');

/*
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false
*/

const count = (arrayNums, bool) => {
    let totalCount = 0;
    if (bool === true) {
        for (let i = 0; i < arrayNums.length; i++) {
            if (arrayNums[i] % 2 === 0) totalCount++
        }
    }

    else if (bool === false) {
        for (let i = 0; i < arrayNums.length; i++) {
            if (arrayNums[i] % 2 === 1) totalCount++;
        }
    }

    return totalCount;
}

console.log(count([3, 7, 2, 5, 10], false))



console.log('\n--------TASK7--------\n');

/*
Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return -1 if the given 
string does not have any digits. Ignore negative numbers
*/


const sumDigitsDouble = string => {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        if ('0123456789'.includes(string[i])) {
            sum += parseInt(string[i]);
        }
    }

    if (sum === 0) return -1
    else return sum * 2
}

console.log(sumDigitsDouble("23abc45"));



console.log('\n--------TASK8--------\n');

/* 
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
*/

const countOccurrence = (string1, string2) => {
    const dictonary1 = {};
    const dictonary2 = {};
    let count = 0;
    string1 = string1.toLowerCase().replace(/\s+/g, "");
    string2 = string2.toLowerCase().replace(/\s+/g, "");

    for(let i of string1) {
        if (i in dictonary1) dictonary1[i] += 1;
        else if (string2.includes(i)) dictonary1[i] = 1;
    }

    for (let i of string2) {
        if (i in dictonary2) dictonary2[i] += 1;
        else if (!(string1.includes(i))) return 0;
        else dictonary2[i] = 1;
    }

    for(let i in dictonary1) {
        if (i in dictonary2) count = Math.min(dictonary1[i] / dictonary2[i])
        else return 0;
    }
    return count
}

console.log(countOccurrence("Can I can a can", "anc") )
