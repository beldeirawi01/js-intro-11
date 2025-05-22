console.log('\n--------TASK1--------\n');

/*
Write a function named repeatingX() which takes a string argument and 
returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
*/

const repeatingX = stringArg => {
    for (let i = 0; i < stringArg.length; i++) {
        if (stringArg[i].toLowerCase() && stringArg[i + 1].toLowerCase() === "x") return true
        else return false
    }
    
}

console.log(repeatingX("xxTechxGlobalx"))



console.log('\n--------TASK2--------\n');

/*
Write a function named isPerfectSquare() which takes a number as an 
argument and checks if it is a perfect square. It returns true if the number is a 
perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an 
integer by itself or as the second exponent of an integer. For example, 25 is a 
perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. 
However, 21 is not a perfect square number because it cannot be expressed as 
the product of two same integers
*/

const isPerfectSquare = numArg => {
    
    return (Math.sqrt(numArg) % 1 === 0)
}

console.log(isPerfectSquare(144))


console.log('\n--------TASK3--------\n');

/*
Write a function named convertTemperature() which takes a number and a 
string arguments to be considered as a temperature value and a unit (either 
Celsius or Fahrenheit) as arguments and converts the temperature to the other 
unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
*/

const convertTemperature = (numArg, stringArg) => {
    if (stringArg === "Celsius") {
        return (numArg * 9/5 + 32)
    }
    else if(stringArg === "Fahrenheit") {
        return (numArg - 32) * 5/9
    }
}

console.log(convertTemperature(212, 'Fahrenheit'))



console.log('\n--------TASK4--------\n');

/*
Write a function named sumOfEvenNumbers() which takes an array as an 
argument and returns the sum of all the even numbers in an array
*/

const sumOfEvenNumbers = arrayArg => {
    let total = 0;

    for (let i = 0; i < arrayArg.length; i++) {
        if (arrayArg[i] % 2 === 0) total += arrayArg[i]
    }

    return total
}

console.log(sumOfEvenNumbers([]))



console.log('\n--------TASK5--------\n');

/*
Write a function named capsOdds() which takes an array argument and returns the array with 
all the odd index elements capitalized (converted to uppercase).
*/

const capsOdds = arrayArg => {
    let newArray = []
    for (let i = 0; i < arrayArg.length; i++) {
        if (i % 2 === 1) newArray.push(arrayArg[i].toUpperCase())
        else newArray.push(arrayArg[i])
    }

    return newArray
}

console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))