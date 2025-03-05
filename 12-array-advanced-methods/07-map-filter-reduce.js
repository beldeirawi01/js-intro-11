const numbers = [-2, -5, 3, 0, 5, 8, 10];

let positiveAndEven = numbers.filter(function(x) {
    if (x > 0 && x % 2 === 0)
        return true;
}).length

console.log(positiveAndEven)




const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
];


const result = nums.map((x => {
    return x.reduce((acc, curr) => {
        return acc + curr;
    }, 0)
}))
console.log(result);



const words = ['hello', 'Tuesday', 'HEYY', 'Apple'];

