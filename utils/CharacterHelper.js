// ^ in REGEX means starts with
//^[^] means is not or same as !=
// % in REGEX means Ends with


function isDigit(char) {
    return /^\d$/.test(char) // REGEX
}

function isLowerCase(char) {
    return /[a_z]/.test(char);
}

function isUpperCase(char) {
    
    return /[A_Z]/.test(char);
}



function isLetter(char) {
    return /^[A-Za-z]$/.test(char)
}


console.log(isLetter('f'))



function isSpace(char) {
    return char === ' '
}

console.log(isSpace('  '))


function isDigitOrLetter(char) {
    return isDigit(char) || isLetter(char);
}

function isSpecial(char) {
    return !(isDigitOrLetter(char) || isSpace(char))
}
console.log(isSpecial('A'))



function isVowel(char) {
    return /^[aeiouAEIOU]$/.test(char);
}

console.log(isVowel(' '))


// Store all in a single object and export object

const CharacterHelper = {
    isDigit,
    isUpperCase,
    isLowerCase,
    isLetter,
    isSpace,
    isDigitOrLetter,
    isSpecial,
    isVowel,
};

module.exports.CharacterHelper = CharacterHelper;

