console.log('\n--------TASK1--------\n');

/*
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked
*/


const countPos = positives => positives.filter(num => num >= 0);
console.log(countPos([-3, -2, -1,0, 3, 5, 7]));



console.log('\n--------TASK2--------\n');

/*
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
*/


const countA = numberOfA => {
    let elements = numberOfA[0];
    let counterA = 0;
    for (const element of numberOfA) {
        if (element.toLowerCase().includes('a')) {
            counterA++;
        }
    }
    return counterA
    
}

console.log(countA('HaHaaaaaaaaa'))



console.log('\n--------TASK3--------\n');

/*
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked
*/

const countVowels = numberofVowels => {
    let letter = numberofVowels[0];
    let vowelCounter = 0;
    for (const vowels of numberofVowels){
        if ('AEIOUaeiou'.includes(vowels)){
            vowelCounter++;
        }
    } 
    return vowelCounter;
}

console.log(countVowels("Hello World"));




console.log('\n--------TASK4--------\n');

/*
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked
*/

const countConsonants = normalLetters => {
    let nonVowelCounter = 0
    for (const letter of normalLetters) {
        if (!'AEIOUaeiou '.includes(letter))
            nonVowelCounter++
    } 
    return nonVowelCounter
}

console.log(countConsonants('Baraa Eldeirawi'))




console.log('\n--------TASK5--------\n');

/*
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
*/

const countWords = numberWords => numberWords.trim('').split(' ').length

console.log(countWords('Hello World I am Baraa'));



console.log('\n--------TASK6--------\n');

/*
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked
*/

const factorial = number => {
    let total = 1;
    for (let i = number; i >= 1; --i) {
        total *= i;
    }
    return total;
}

console.log(factorial(5));



console.log('\n--------TASK7--------\n');

/*
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
*/

const isPalindrome = word => {
    return (word.toLowerCase() === word.toLowerCase().split('').reverse().join(''))
} 

console.log(isPalindrome('Baraa'));


console.log('\n--------TASK8--------\n');

/*
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
*/

const countMultipleWords = wordsMultiple => {
    let multipleWordCounter = 0;
    for (const word of wordsMultiple) {
        if (word.trim().includes(' ')){
            multipleWordCounter++
        }
    }
    return multipleWordCounter;
}

console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]))




console.log('\n--------TASK9--------\n');

/*
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
*/


const count3OrLess = words => {
    let wordsSplit = words.split(' ');
    let lessThan3  = 0;
    wordsSplit.forEach( word => {
        if (word.length <= 3){
            lessThan3++
        }
    })
    return lessThan3;
}

console.log(count3OrLess('Hi Joe I am Baraa'));



console.log('\n--------TASK10--------\n');

/* 
Write a function named as isPrime() which takes a 
number as an argument and returns true if the 
number is prime or returns false otherwise when 
invoked
*/

const isPrime = number=>{
    if (number < 2) return false;
    else if (number === 2) return true;
    else if (number % 2 === 0) return false;
    
    for (i = 3; i <= number / 2; i++){
        if (number % i ===0) return false
    }
    return true
}

console.log(isPrime(8))




console.log('\n--------TASK11--------\n');

/*
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements
*/


const add = (arr1, arr2) => {
    const arr3 = []
    for (i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        arr3.push(arr1[i] + arr2[i])
    }
    return console.log(arr3) 

}

add([1, 2, 3, 4, 5], [4, 5, 6, 7]);




console.log('\n--------TASK12--------\n');

/*
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked
*/

const removeExtraSpaces = spaces => {
    let endResult = spaces.trim().split(/\s+/).join(' ')
    return endResult
    
}

console.log(removeExtraSpaces('   Baraa      Eldeirawi   '))





console.log('\n--------TASK13--------\n');

/*
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number
*/

const findClosestTo10 = number => {
    let closest;
    for (let i = 0; i < number.length; i++){
        if (number[i] === 10) continue;


        if (closest === undefined) closest = number[i]
        else{
            const numbersDiff = Math.abs(number[i] - 10);
            const closestDiff = Math.abs(closest - 10);
            if (numbersDiff < closestDiff) closest = number[i];
            else if (numbersDiff === closestDiff && number[i] < closest) closest = number[i];

        } 
    }
    return closest;
}
console.log(findClosestTo10([7, 6, 9, 10]))

console.log('\n--------TASK14--------\n');

/*
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character
*/
const isEmailValid = email => {
    if (email.includes(' ')) {
        return false;
    }
    else if(email.indexOf('@') !== email.lastIndexOf('@')) {
        return false;
    }
    else if(email.slice(0, email.indexOf('@')).length >= 2 && email.slice(email.indexOf('@'), email.indexOf('.')).length >=2 && email.slice(email.indexOf('.')).length >= 2){
        return true;
    }
}

console.log(isEmailValid('email@gmail.com'));





console.log('\n--------TASK15--------\n');

/*
Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space
*/

const isPasswordValid = password => {
    if (password.includes(' ') || password.length < 8 || password.length > 16) return false;

    let number = false;
    let lowercaseLetter = false;
    let uppercaseLetter = false;
    let special = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) uppercaseLetter = true;

        else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) lowercaseLetter = true;

        else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) number = true;

        else if ((password.charCodeAt(i) >= 32 && password.charCodeAt(i) <= 47) || (password.charCodeAt(i) >= 58 && password.charCodeAt(i) <= 64) || (password.charCodeAt(i) >= 91 && password.charCodeAt(i) <= 96) || (password.charCodeAt(i) >= 123 && password.charCodeAt(i) <= 126)) special = true;
    }
    return number && lowercaseLetter && uppercaseLetter && special
}

console.log(isPasswordValid('abcd1234'))