
// task 1

function tripleWord(stringWord) {
    return stringWord + stringWord + stringWord;
}

console.log(tripleWord('Tech'));
console.log(tripleWord('Baraa'));



// task 02

function has4(string4Chars) {
    return (has4().length >= 4);
}


console.log(has4('Baraa'))



//task 3

function celciusToFahrenheit(tempCelcius) {
    return tempCelcius * 9 / 5 + 32;
}

console.log(celciusToFahrenheit(25))



// task 4

function kgToPounds(poundsConversion) {
    return poundsConversion * 2.2;
}

console.log(kgToPounds(2));



// task 5

function rectangleArea(x, y) {
    return x * y;
}

console.log(rectangleArea(2, 2))
console.log(rectangleArea(5, 3))

function rectanglePerimeter(x, y) {
    return 2 * (x + y);
}

console.log(rectanglePerimeter(2, 2));
console.log(rectanglePerimeter(5, 3));


// task 6

function squareArea(x) {
    return x * x;
}

console.log(squareArea(6)); // 36

function squarePerimeter(x) {
    return 4 * x;
} 

console.log(squarePerimeter(6)); // 24



// task 7

function countWords(string) {
    return string.trim('').split(' ').length
}

console.log(countWords('My name is Baraa Eldeirawi    '))