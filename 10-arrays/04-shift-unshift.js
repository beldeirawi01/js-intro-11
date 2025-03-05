const objects = ['Laptop', 'Remote', 'Pen', 'Camera'];


// Unshift adds value/string to the first index and pushes everything one index over
objects.unshift('Mouse');
objects.unshift('Monitor');


console.log(objects) // prints updated array, starting with monitor, then mouse, etc


// SHift() removes the element that is the first index of the array
objects.shift(); 
console.log(objects); // Returns updated array
