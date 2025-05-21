console.log('\n--------TASK1--------\n');
/*
Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants
*/


const countVC = stringArg => {
    let vowelCounter = 0;
    let consonantsCounter = 0;
    const vowels = "aeiouAEIOU"
    
    for (let char of stringArg) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) vowelCounter++
            else consonantsCounter++
        }
    }

    return {vowels: vowelCounter, consonants: consonantsCounter}
}

console.log(countVC("123!@#xyz"))



console.log('\n--------TASK2--------\n');

/*
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also 
spaces do not count towards any category
*/


const countChars = stringArg => {
    let letterCounter = 0;
    let numberCounter = 0;
    let specialsCounter = 0;

    if (stringArg.trim() === "") return {}

    for (let char of stringArg) {
        if(char === " " ) continue
        else if(/[a-zA-Z]/.test(char)) letterCounter++;
        else if(/[0-9]/.test(char)) numberCounter++;
        else specialsCounter++;
    }

    return {letters: letterCounter, numbers: numberCounter, specials: specialsCounter}
}

console.log(countChars("Programming 123"))




console.log('\n--------TASK3--------\n');

/*
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
*/

const maxOccurrences = stringArg => {
    if (stringArg.trim() === "") return "";

    const counts = {};

    for (let char of stringArg) {
        if (char !== " ") {
            if (!counts[char]) counts[char] = 1;
            else counts[char]++;
        }
    }
    let maxChar = "";
    let maxCount = 0;

    for (let char of stringArg) {
        if (char !== " " && counts[char] > maxCount) {
            maxCount = counts[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxOccurrences("Occurrences"))



console.log('\n--------TASK4--------\n');

/*
Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad"
*/

const starOut = stringArg => {
    let newString = "";

    for (let i = 0; i < stringArg.length; i++) {
        if (stringArg[i] === '*' || stringArg[i + 1] === '*'|| stringArg[i - 1] === '*') continue

        else newString += stringArg[i]

    }

    return newString
}

console.log(starOut("xm*sm*sy"))



console.log('\n--------TASK5--------\n');

/*
Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
*/

const romanToInt = stringRomanNumeral => {
    const numerals =  {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };

    let total = 0;

    for (let i = 0; i < stringRomanNumeral.length; i++) {
        const current = numerals[stringRomanNumeral[i]]
        const next = numerals[stringRomanNumeral[i + 1]]

        if (next > current) {
            total += next - current
            i++
        }
        else total += current
    }

    return total
}

console.log(romanToInt("IV"))