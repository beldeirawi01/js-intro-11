console.log('\n--------TASK1--------\n');

/*
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise

*/

const hasUpperCase = sentence => {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) return true;
        else return false
    }
}
console.log(hasUpperCase('!125'))



console.log('\n--------TASK2--------\n');

/*
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string 
*/

const noDigit = letter => {
    let result = '';
    for (i = 0; i < letter.length; i++) {
        if ('0123456789'.includes(letter[i])) {
            continue;
        }
        else result += letter[i]
    }
    return result;
}

console.log(noDigit('Java123Script'))




console.log('\n--------TASK3--------\n');

/*
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string 
*/

const noVowel = letter => {
    let newWord = '';
    for (let i = 0; i < letter.length; i++) {
        if ('AEIOUaeiou'.includes(letter[i])){
            continue;
        }
        else newWord += letter[i]
    }
    return newWord
}

console.log(noVowel('AEOxyz'));



console.log('\n--------TASK4--------\n');

/*
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.
*/

const no13 = num => {
    let newArray = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 13) newArray.push(0);
        else newArray.push(num[i])
    }
    return newArray
}

console.log(no13([13, 13, 13 , 13, 13]));


console.log('\n--------TASK5--------\n');

/*
Write a function named middleInt() which takes three number arguments and 
return the middle number.
*/

const middleInt = (num1, num2, num3) => {
    let newArray = [num1, num2, num3];

    newArray.sort((x, y) => x - y)
    return newArray[1]
}

console.log(middleInt(1, 11, 3))




console.log('\n--------TASK6--------\n');

/*
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string. 
*/


const sumOfDigits = sentence => {
    let total = 0
    for (i = 0; i < sentence.length; i++) {
        let number = parseInt(sentence[i])
        if (isNaN(number)) continue;
        else total += number
    }
    return total
}

console.log(sumOfDigits("John's age is 33") )


console.log('\n--------TASK7--------\n');

/*
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
*/

const arrFactorial = num => {
    for (i = 0; i < num.length; i++) {
        let factorialTotal = 1;
        for (j = 1; j <= num[i]; j++){
            factorialTotal *= j
        }
        num[i] = factorialTotal
    }
    return num
}

console.log(arrFactorial([1, 2, 3 ,4]) )

console.log('\n--------TASK8--------\n');
/*
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2.
*/


const categorizeCharacters = characthers => {
    let newArray = ['', '', '']
    
    
    for (let i = 0; i < characthers.length; i++) {
        if (characthers.charCodeAt(i) >= 48 && characthers.charCodeAt(i) <= 57) newArray[0] += characthers[i];
        else if (characthers.toLowerCase().charCodeAt(i) >= 97 && characthers.toLowerCase().charCodeAt(i) <= 122) newArray[1] += characthers[i];
        else newArray[2] += characthers[i];
    }
    return newArray
}

console.log(categorizeCharacters('Ja123va!!!'))