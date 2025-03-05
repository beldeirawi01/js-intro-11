const arr = ['Mouse', 'Laptop', 'Keyboard', 'Camera'];

console.log(arr[0]); // Mouse
console.log(arr[arr.length - 1]); // Camera


console.log(arr.at(-2)); // Keyboard



console.log([1, 2, 3].at(1)); // 2
console.log([1, 2, 3][1]); // 2

console.log([1, 2, 3].at(-1)); // 3
console.log([1, 2, 3][-1]); // undefined

console.log([1, 2, 3].at(5)); // undefined
console.log([1, 2, 3].at(-5)); // undefined
console.log([1, 2, 3][5]); // undefined