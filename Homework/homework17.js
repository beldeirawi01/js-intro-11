console.log('\n--------TASK1--------\n');

/*
Requirement:
Write a function named findMedian() which takes two arrays of numbers as 
its arguments and return the median of the two sorted arrays. 
NOTE: The median is the middle number of a sorted array. So the median of 
[1,3], [2] would be 2. If the array has an even length, you are to find the average 
of the 2 middle numbers
*/

const findMedian = (array1, array2) => {
    const newArray = [...array1, ...array2].sort((a, b) => a - b)

    if (newArray.length % 2 === 1) {
        return newArray[Math.floor(newArray.length / 2)]
    }
    else {
        const middle1 = newArray[newArray.length / 2]
        const middle2 = newArray[(newArray.length / 2) - 1]

        return (middle1 + middle2) / 2
    }
}

console.log(findMedian([1, 3], [2]))


console.log('\n--------TASK2--------\n');

/*
Write a function named calculateFactorial() which takes a number as an 
argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer and an exclamation point. 
Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial 
zero is defined as equal to 1.
*/

const calculateFactorial = numArg => {
    let factorial = 1

    for (let i = numArg; i > 0 ; --i) {
        factorial *= i;
    }
    return factorial
}

console.log(calculateFactorial(6))


console.log('\n--------TASK3--------\n');

/*
Write a function named calculateGCD() which takes two numbers as 
arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers
*/

const calculateGCD = (num1, num2) => {
    let GCD = 1;
    const minNum = Math.min(num1, num2)

    for (let i = 1; i <= minNum; i++) {
        if (num1 % i === 0 && num2 % i === 0) GCD = i
    }

    return GCD
}

console.log(calculateGCD(8, 12))


console.log('\n--------TASK4--------\n');

/*
Requirement:
Write a function named calculateLCM() which takes two numbers as 
arguments and returns the least common multiple of the two numbers.
NOTE: LCM is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
*/

const calculateLCM = (num1, num2) => {
    const maxNum = Math.max(num1, num2)

    for (let i = maxNum; ; i++) {
        if (i % num1 === 0 && i % num2 === 0) return i
    }
}

console.log(calculateLCM(8, 12))