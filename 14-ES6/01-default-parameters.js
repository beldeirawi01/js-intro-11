function sum(num1, num2 = 0) { // Default value for num 2 went from undefined to 0 
    console.log(`First argument is ${num1}`)
    console.log(`Second argument is ${num2}`);
    console.log(`Their sum is ${num1 + num2}`)
}

sum(3) // 3
sum(2, 4) // 6


function greet(name, time = 'morning'){
    if (time === 'evening') console.log('Good evening', name);
    else console.log('Good morning', name);
}

greet('John', 'evening'); // Good evening, John
greet('Alex'); // Good morning, Alex
greet(); // Good morning undefined