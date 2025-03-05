

console.log('\n--------TASK1--------\n');

let randomNum1 = Math.round(Math.random() * (100 - 1)) + 1;
let randomNum2 = Math.round(Math.random() * (100 - 1)) + 1;
let randomNum3 = Math.round(Math.random() * (100 - 1)) + 1;

console.log(randomNum1, randomNum2, randomNum3)

console.log((randomNum1 + randomNum2 + randomNum3) / 3 >= 50)



console.log('\n--------TASK2--------\n');

/*
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”

*/

let randomNumber1 = Math.round(Math.random() * (3 - 1)) + 1;
let randomNumber2 = Math.round(Math.random() * (3 - 1)) + 1;
let randomNumber3 = Math.round(Math.random() * (3 - 1)) + 1;

console.log(randomNumber1, randomNumber2,  randomNumber3)

if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3 && randomNumber3) {
    console.log('Triple Match')
}
else if (randomNumber1 === randomNumber2 || randomNumber2 === randomNumber3 || randomNumber3 === randomNumber1) {
    console.log('Double Match')
}
else {
    console.log('No Match')
}



console.log('\n--------TASK3--------\n');

/*
Write a function named as hasA() which takes a string word as an argument and returns true if 
given string has a character "a" or "A", and false otherwise when invoked.
*/

function hasA(stringWithA) {
    if (stringWithA.includes('A') || stringWithA.includes('a')){
        return true;
    }
    else {
        return false;
    }
}

console.log(hasA('Baraa')) // True
console.log(hasA('')) // false
console.log(hasA('Apple')) // True



console.log('\n--------TASK4--------\n');


/*
Write a function named as doubleOrTripleWord() which takes a string word 
as an argument  and returns the given word back tripled if the string length
is even or doubled if the string length is odd when invoked.

*/

function doubleOrTripleWord(stringEvenOrOdd) {
    if (stringEvenOrOdd.length % 2 === 0){
        console.log(`${stringEvenOrOdd}${stringEvenOrOdd}${stringEvenOrOdd}`) 
    }
    else{
        console.log(`${stringEvenOrOdd}${stringEvenOrOdd}`)
    }
}

doubleOrTripleWord('B')



console.log('\n--------TASK5--------\n');

/*
Write a function named as firstWord() which takes a string word
as an argument and returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word

*/

function firstWord(wordFirst) {
    wordFirst.split(' ');
    return wordFirst.split(' ')[0]

}

console.log(firstWord('   ')) // ''
console.log(firstWord('Baraa Eldeirawi')) // 'Baraa'




console.log('\n--------TASK6--------\n');

/*
Write a function named as lastWord() which takes a string word
as an argument and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

*/

function lastWord(wordLast) {
    return wordLast.split(' ').at(-1)
}

console.log(lastWord('Good morning America'))
console.log(lastWord('My name is Baraa Eldeirawi'))





console.log('\n--------TASK7--------\n');

/*
Write a function named as firstlastWord() which takes a string word as an argument
 and returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word

*/ 

function firstlastWord(wordsFirstLast) {
    return (wordsFirstLast.split(' ')[0] + wordsFirstLast.split(' ').at(-1))
}
console.log(firstlastWord('I am from Palestine in the Middle East'))



console.log('\n--------TASK8--------\n');


/* 
Write a function named as startVowel() which takes a string word as an argument
 and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

*/

function startVowel(vowelWord) {
   return vowelWord.toLowerCase().startsWith('a') || vowelWord.toLowerCase().startsWith('e') || vowelWord.toLowerCase().startsWith('i') || vowelWord.toLowerCase().startsWith('o') || vowelWord.toLowerCase().startsWith('u')
}

console.log(startVowel('Kiwiw'))





console.log('\n--------TASK9--------\n');


/*
Write a function named as swap4() which takes a string word as an argument
and returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.
*/


function swap4(firstLast4) {
    if (firstLast4.length >= 8) {
        return firstLast4.slice(-4) + firstLast4.slice(4, -4) + firstLast4.slice(0,4)
    }
    else{
        return ''
    }
}

console.log(swap4("OmarTechGlobal"))




5 == '5'
5 === '5'




console.log('\n--------TASK10--------\n');

/*
Write a function named as swapFirstLastWord() which takes a string word as an argument
 and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words
*/



function swapFirstLastWord(lastString) {
    if (lastString.split(' ').length < 2) {
        return ''
    }
    else {
       return `${lastString.split(' ').at(-1) + lastString.slice(lastString.indexOf(' '), lastString.lastIndexOf(' ')) + ' ' + lastString.split(' ').at(0)}`
    }
}

console.log(swapFirstLastWord('I like JavaScript'));