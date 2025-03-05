// Function decleration
function printHi() {
    console.log('Hi');
}

printHi();


function routineDaily() {
    console.log('Shower');
    console.log('Pray');
    console.log('Eat');
    console.log('Go to School');
}

routineDaily();

// Function decleration with an argument

function hiName(name) {
    console.log(`Hi ${name}!`);
}

hiName('Baraa'); // Baraa
hiName('Adam'); // Adam




function greetName(greet, name) {
    console.log(`${greet}, ${name}!`);
}

greetName('Hello', 'John');
greetName('Good morning', 'Jane');



function average(num1, num2) {
    return ((num1 + num2)/2);
}

console.log(average(20, 10));