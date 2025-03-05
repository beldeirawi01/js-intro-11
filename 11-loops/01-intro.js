// Prints 1 through 10 

for (let num = 1; num <= 10; num++) {
    console.log('TechGlobal');
}

// Outputs 100 till 0
for (let i = 100; i >= 0; i-- ){
    console.log(i)
}

for (i = 0; i <= 50; i++){
    console.log(i)
}




for (i = 0; i <= 50; i++) {
    if (i % 5 === 0) console.log(i)
}

// OR

for (i = 0; i <= 50; i += 5) {
    console.log(i)
}



let sum = 0;
for (i = 1; i <= 5; i++){
    sum += i;
}

console.log(sum);


let total = 0;
for (let i = 10; i <= 15; i++) {
    total += i;
}
console.log(total)




let product = 1;
for (let i = 1; i <= 6; i++) {
    product *= i;
}
console.log(product);



let str = 'TechGlobal School';
for (let i = 0; i <= str.length - 1; i++){
    console.log(str[i]);
}



let fruit = 'banana';
let counterA = 0;
for (i = 0; i <= fruit.length; i++) {
    if (fruit[i] === 'a') counterA++
}

console.log(counterA);