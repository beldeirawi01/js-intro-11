const arr1 = [1, 2, 3];
const arr2 = [6, 7, 8];
const arr3 = [4, 5, 6];


// variableName.concat() -> Adds the arrays together into one big array
// This line below adds arr2 to arr1
console.log(arr1.concat(arr2));


console.log(arr1.concat(arr3, arr2));

// Another option is to use concat method with a written array and what you want to add

console.log([1, 5, 10].concat(100, 35)); // Array is [1, 5, 10] and adds 100 and 35 to the end 