console.log('\n--------TASK1--------\n');

/*
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
*/

const calculateTotalPrice1 = items => {
    let total = 0;

    for (let item in items) {
        if (item === 'apple') total += items[item] * 2;
        else if (item === 'orange') total += items[item] * 3.29;
        else if (item === 'mango') total += items[item] * 4.99;
        else if (item === 'pineapple') total += items[item] * 5.25;
    }

    return total;
}

console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));


console.log('\n--------TASK2--------\n');

/*
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free
*/

const calculateTotalPrice2 = items => {
    let total = 0;

    for (let item in items) {
        if (item === 'Orange') total += items[item] * 3.29;
        else if (item === 'Pineapple') total += items[item] * 5.25;
        else if (item === 'Apple') {
            total += Math.floor((items[item]) / 2) * 3 + (items[item] % 2) * 2;
        }
        else if (item === 'Mango') {
            total += (items[item] - Math.floor(items[item] / 4)) * 4.99
        }
    }

    return total
}

console.log(calculateTotalPrice2(({ Apple: 4, Mango: 8, Orange: 3 })))


console.log('\n--------TASK3--------\n');

/*
Write a function named nthWord() which takes a string and a number 
arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater 
than the count of the words in the given string
*/

const nthWord = (string, num) => {
    let stringSplit = string.split(' ');
    if (num > stringSplit.length) return ''
    else return stringSplit[num - 1]
}

console.log(nthWord("Hello World", 3));




console.log('\n--------TASK4--------\n');

/*
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 
Note: An armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits. In other words, an n-digit 
number is an Armstrong number if the sum of its digits, each raised to the nth 
power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number
*/

const isArmstrong = numArg => {
    let numArgNew = numArg.toString().split('')
    let total = 0;
    for (i = 0; i < numArgNew.length; i++) {
        total += parseInt(numArgNew[i]) ** numArgNew.length
    }
    if (total === numArg) return true
    else return false
}

console.log(isArmstrong(1634))


console.log('\n--------TASK5--------\n');

/*
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task
*/

const reverseNumber = numArg => {
    return parseInt(numArg.toString().split('').reverse().join(''))
}

console.log(reverseNumber(123))


console.log('\n--------TASK6--------\n');

/*
Write a function named doubleOrTriple() which takes an array of numbers as 
argument and a boolean value. It will return the array elements doubled if true 
or tripled if the boolean value is false
*/


const doubleOrTriple = (arrayNums, bool) => {
    if (bool === true) {
        return arrayNums.map((num) => (num * 2));
    }
    else if (bool === false) {
        return arrayNums.map((num) => (num * 3));
    }
}

console.log(doubleOrTriple([-1, -2], true));



console.log('\n--------TASK7--------\n');

/*
Write a function named splitString() which takes a string and a number 
arguments and returns the string back split by the given number. 
Note: Return empty string if the string shorter than splitting number or the 
string length is not divisible by the given number
*/

const splitString = (string, num) => {
    if (string.length < num || (string.length % num !== 0)) return '';
    else return string.slice(0, num) + ' ' + string.slice(num)
}

console.log(splitString("12", 1))