const objects = ['Remote', 'Watch', 'Pen', 'PC', 'Mouse'];

console.log(objects.slice(0, 2)); // Output is ['Remote' , 'Watch']
console.log(objects.slice(2, 4)); // Output is ['Pen' , 'PC']
console.log(objects.slice(2)); // Output is ['Pen' , 'PC', Mouse]


console.log(objects.slice(-2)); // ['PC', 'Mouse']

console.log(objects.slice(-4, -5)); // [] is output becaue when converted to positive indices, the start index is greater than the end index
console.log(objects.slice(1, 0)); // []



// Splice() Method

const names = ['John', 'Jane', 'Alex', 'Max', 'Mariia'];

