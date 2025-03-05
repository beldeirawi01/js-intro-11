const students = [
    ['A', 'B', 'C'],
    ['X', 'Y', 'Z'],
    ['K', 'L'],
    ['D']
];


console.log(students);
console.log(students.flat());


const numbers = [
    [1, 2, 3],
    [4, 5, [6, 7, [8, 9]]]
];

console.log(numbers);
console.log(numbers.flat());
console.log(numbers.flat(2));
console.log(numbers.flat(3));