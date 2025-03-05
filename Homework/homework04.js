console.log('\n--------TASK1--------\n');

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
}



console.log('\n--------TASK2--------\n');

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
}




console.log('\n--------TASK3--------\n');

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i);
}



console.log('\n--------TASK4--------\n');

for (let i = 0; i <= 7; i++) {
    console.log(`The square root of ${i} is = ${i * i}`);
}



console.log('\n--------TASK5--------\n');

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);



console.log('\n--------TASK6--------\n');

let randomNum = Math.round(Math.random() * (10 - 1)) + 1;
let product = 1;

console.log(randomNum)
for (let i = randomNum; i >= 1; --i ) {
    product *= i
}
console.log(product)


console.log('\n--------TASK7--------\n');

let r1;
let attempts = 0;

while (r1 % 5 !== 0) {
    r1 = Math.round(Math.random() * (100 - 1)) + 1;
    attempts++;
}
console.log(`The random number is ${r1} and it took ${attempts} attempts to generate`);



console.log('\n--------TASK8--------\n');

const arr = ['Germany', 'Argentina', 'Ukraine', 'Romainia'];

console.log(arr);
console.log(arr.sort());



console.log('\n--------TASK9--------\n');

const arr1 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(arr1);

console.log(arr1.includes('Pluto'));


console.log('\n--------TASK10--------\n');

const cats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cats.sort());

console.log(cats.includes('Garfield') && cats.includes('Felix'))



console.log('\n--------TASK11--------\n');

const nums = [10.5, 20.75, 70, 80, 15.75];

console.log(nums);

for (let i = 0; i <= nums.length - 1; i++) {
    console.log(nums[i]);
}



console.log('\n--------TASK12--------\n');


const supplies = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

let counterBP = 0;

for (let i = 0; i < supplies.length; i++){
    if (supplies[i].toLowerCase().startsWith('b') || supplies[i].toLowerCase().startsWith('p')){
        counterBP++;
    }
}

let counterPhrases = 0;

for (let i = 0; i < supplies.length; i++){
    if (supplies[i].toLowerCase().includes('book') || supplies[i].toLowerCase().includes('pen')) {
        counterPhrases++;
    }
}
console.log(supplies);
console.log(`Elements with B or P is ${counterBP}`);
console.log(`Elements having 'Book' or 'Pen' is ${counterPhrases}`);



console.log('\n--------TASK13--------\n');

const numbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

let higher10 = 0;
let lower10 = 0;
let equal10 = 0;

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        higher10++;
    }
    else if (numbers[i] < 10) {
        lower10++;
    }
    else equal10++;
}

console.log(`Elements that are ${higher10}`);
console.log(`Elements that are less than 10 = ${lower10}`);
console.log(`Elements that are 10 = ${equal10}`);




console.log('\n--------TASK14--------\n');

const numbers1 = [5, 8, 13, 1, 2];
const numbers2 = [9, 3, 67, 1, 0];
let numbers3 = [];

for (let i = 0; i < numbers1.length; i++) {
    numbers3.push(Math.max(numbers1[i], numbers2[i]))
}
console.log(numbers3);



console.log('\n--------TASK15--------\n');

function firstDuplicate(seenTwice){
    for (let i = 0; i < seenTwice.length; i++){
        for (let j = i + 1; j < seenTwice.length; j++) {
            if (seenTwice[i] === seenTwice[j]) {
                return seenTwice[i];
            }
            
        } 
    }
    return -1;
}
console.log((firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])))



console.log('\n--------TASK16-------\n');
/*
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked

*/


function getDuplicates(repeatingNumbers){
    const repeats = [];
    for (let i = 0; i < repeatingNumbers.length; i++) {
        for (let j = i + 1; j < repeatingNumbers.length; j++) {
            if (repeatingNumbers[i] === repeatingNumbers[j]){
                if (repeats.includes(repeatingNumbers[i])){
                    break;
                }
                else{
                    repeats.push(repeatingNumbers[i]);
                }
            }
        }
    } return repeats;
}

console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))


console.log('\n--------TASK17--------\n');

function reverseStringWords(sentence) {
    const wordSplit = sentence.trim().split(' ');
    const wordReverse = wordSplit.map(x => {
      
      return x.split('').reverse().join('');
    });
  
    return wordReverse.join(' ');
  }

console.log(reverseStringWords('Hello World'));




console.log('\n--------TASK18--------\n');

function getEvens(num1, num2){
    let maxNum = Math.max(num1, num2);
    let minNum = Math.min(num1, num2);
    for (let i = minNum; i <= maxNum; i++){
        if (i % 2 === 0) {
            console.log(i);
            minNum++
        }
    }
}

getEvens(3,8);



console.log('\n--------TASK19--------\n');


function getMultipleOf5(firstNum, secondNum) {
    if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++){
            if (i % 5 === 0) {
                console.log(i);
                firstNum++;
            }
        }
    }
    else if (firstNum > secondNum) {
        for (let i = firstNum; i >= secondNum; i--) {
            if (i % 5 === 0) {
                console.log(i);
                secondNum--;
            }
        }
    }
}
getMultipleOf5(15, 5)



console.log('\n--------TASK20--------\n');


function fizzBuzz(firstNumber, secondNumber) {
    let maxNumber = Math.max(firstNumber, secondNumber);
    let minNumber = Math.min(firstNumber, secondNumber);
    let final = [];

    for (let i = minNumber; i <= maxNumber; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            final.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            final.push('Fizz');
        }
        else if (i % 5 === 0){
            final.push('Buzz');
        }
    }
    return final.join(' | ')
}

console.log(fizzBuzz(25, 30))