console.log('\n--------TASK1--------\n');

/*
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t.
*/

const hasLowerCase = word => {
    for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) return true
    }
    return false
}

console.log(hasLowerCase('BARAAa'))


console.log('\n--------TASK2--------\n');

/*
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed
*/

const noZero = numbers => {
    let nonZeroNums = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) continue;
        else nonZeroNums.push(numbers[i])
    }
    return nonZeroNums;
}

console.log(noZero([1, 3, 0, 0, 0, 10]))



console.log('\n--------TASK3--------\n');

/*
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared.
*/


const numberAndSquare = num => {
    for (let i = 0; i  < num.length; i++) {
        num[i] = [num[i], num[i] ** 2]
    }
    return num
}

console.log(numberAndSquare([1, -2, 3, 4, 5]))


console.log('\n--------TASK4--------\n');

/*
Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.
*/

const containsValue = (arrayOfValues, string) => {
    for (let i = 0; i < arrayOfValues.length; i++) {
        if (arrayOfValues[i] === string) return true
    }
    return false
}

console.log(containsValue(["abc", "def", "123"], "Abc"))



console.log('\n--------TASK5--------\n');

/*
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!"
*/

const reverseSentence = sentence => {
    if (sentence.split(' ').length <= 1) return 'Not enough'
    else return sentence.split(' ').reverse().join(' ')

}
console.log(reverseSentence('This is a sentence'))



console.log('\n--------TASK6--------\n');

/*
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
*/

const removeStringSpecialsDigits = string => {
    let stringArray = string.split('');
    let newString = [];
    let addedWord = '';
    for (let i = 0; i < stringArray.length; i++) {
        if (/[A-Za-z]/.test(stringArray[i])) {
            addedWord += stringArray[i];
        } else {
            if (addedWord.length > 0) {
                newString.push(addedWord);
                addedWord = '';
            }
        }
    }
    if (addedWord.length > 0) {
        newString.push(addedWord);
    }
    return newString.join(' ');
}

console.log(removeStringSpecialsDigits('123Javascript #$%is fun'));

/*

const removeStringSpecialsDigits = string => {
    let stringArray = string.split('');
    let newString = []
    for (let i = 0; i < stringArray.length; i++) {
        if (/[A-Za-z]/.test(stringArray[i])) newString.push(stringArray[i])
        else continue;
    }
    return newString.join('')
}

console.log(removeStringSpecialsDigits('123Javascript #$%is fun'))

*/

console.log('\n--------TASK7--------\n');

/*
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits
*/

const removeArraySpecialsDigits = array => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newString = '';

        for (let j = 0; j < array[i].length; j++){
            if (/[A-Za-z0-9]/.test(array[i][j])) newString += array[i][j];
            else continue;
        }
        newArray.push(newString)
    }
    return newArray
}

console.log(removeArraySpecialsDigits((["123Javascript", "#$%is", "fun"])))



console.log('\n--------TASK8--------\n');

/*
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words
*/

const getCommons =( arr1, arr2 )=> {
    let arr3 = []
    for (let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])) arr3.push(arr1[i])
    }

    return arr3
}

console.log(getCommons( ["abc", "is", "fun"], ["abc", "xyz", "123"]))


console.log('\n--------TASK9--------\n');

/*
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
*/
const noXInVariables = element => {
    let updated = []
    for (let i = 0; i < element.length; i++) {
        
        let str = element[i].toString();
        let newString = '';

        for (let j = 0; j < str.length; j++){
            if (str[j] == 'x' || str[j] == 'X') continue;
            else newString += str[j]
        }

        if (newString === '') continue
        else updated.push(newString)
    }
    return updated
}

console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))