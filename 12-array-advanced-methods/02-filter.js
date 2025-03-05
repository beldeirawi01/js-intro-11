const names = ['Alex', 'John', 'Jane', 'Victoria', 'Mariia'];


//const namesWith4Chars = names.filter((name) => name.length === 4)

//console.log(namesWith4Chars);






const namesWithA = names.filter(function (name) {
    return name.toLowerCase().includes('a');
});
console.log(namesWithA);
console.log(namesWithA.length);



const numbers = [10, 5, 100, 77, 50, 65, 0];

const numbersMoreThan50 = numbers.filter(function (num) {
    return num >= 50;
})

console.log(numbersMoreThan50);




const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2


console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('apple')))

console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('a')).length)

console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('i')).length)