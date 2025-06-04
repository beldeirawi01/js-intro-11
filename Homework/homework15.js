console.log('\n--------TASK1--------\n');

/*
Requirement:
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
*/


const toCamelCase = stringArg => {
    let newString = stringArg.toLowerCase().trim(/\s+/).split(" ");
    
    for ( let i = 1; i < newString.length; i++) {
        newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1).toLowerCase()
    }

    return newString.join("") 
}

console.log(toCamelCase("first name")) 





console.log('\n--------TASK2--------\n');

/*
Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase
*/

const toSnakeCase = stringArg => {
    let newString = stringArg.toLowerCase().trim(/\s+/).split(" ");

    return newString.join("_") 
}

console.log(toSnakeCase("first name")) 



console.log('\n--------TASK3--------\n');

/*
Requirement:
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored
*/


const alternatingCases = stringArg => {
    let newWord = "";
    for (let i = 0; i < stringArg.length; i++) {
        if (/[a-zA-Z]/.test(stringArg[i]) && i % 2 === 0) newWord += stringArg[i].toUpperCase();
        else if (/[a-zA-Z]/.test(stringArg[i]) && i % 2 === 1) newWord += stringArg[i].toLowerCase();
        else newWord += stringArg[i]
    }

    return newWord
}

console.log(alternatingCases("Hello"))


console.log('\n--------TASK4--------\n');

/*
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length
*/

const isNeutral = (str1, str2) => {
    let newString = "";

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === "-" && str2[i] === "-") newString += "-"
        else if (str1[i] === "+"&& str2[i] === "+") newString += "+"
        else newString += "0"
    }

    return newString
}

console.log(isNeutral("-+-", "+--"))


console.log('\n--------TASK5--------\n');

/*
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters
*/

const isTrueOrFalse = stringArg => {
    let updated = stringArg.trim().split(" ");
    let firstHalf = 0;
    let secondHalf = 0;

    for (let i = 0; i < updated.length; i++) {
        if (/[a-mA-M]/.test(updated[i][0])) firstHalf++
        else if(/[n-zN-Z]/.test(updated[i][0])) secondHalf++
        else continue
    }

    return firstHalf >= secondHalf
}

console.log(isTrueOrFalse("Got stuck in the Traffic"))