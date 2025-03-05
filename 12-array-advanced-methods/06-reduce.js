const numbers = [ 3, 6, 10, 4 ]

let countEven = numbers.reduce((accumulator, current) => {
    if (current % 2 === 0) return accumulator + 1;
    return accumulator;
}, 0)

console.log(countEven)


let sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(sum)


let product = numbers.reduce((acc, curr) => {
    return acc * curr;
}, 1)

console.log(product);


let max = numbers.reduce((acc, curr) => {
    if (curr > acc) return curr;
    return acc;
}, -Infinity)

console.log(max)



const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

let shortestChars = fruits.reduce((acc, curr) => {
    if (curr.length < acc.length) return curr;
    return acc
})

console.log(shortestChars)