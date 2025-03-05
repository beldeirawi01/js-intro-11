const numbers = [5, 7, 1, 3, 10];

//for loop

/*for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}


//for .. of loop

for (const number of numbers){
    console.log(number)
}

*/


// forEach()
numbers.forEach(function(x) {
    console.log(x * 2);
});



const names = ['Alex', 'John', 'Jane', 'Victoria', 'Mariia'];
names.forEach(function (name){
    if (name.length === 4){
        console.log(name);
    }
});



const nums = [5, 3, 2, 1];
let sum = 0;
let product = 1
const arr5 = [];
/*
for (const num of nums) {
    sum += num;
    product *= num
}
console.log(sum)
console.log(product)


*/
//OR 

nums.forEach(function (num){
    sum += num;
    product *= num
    arr5.push(num * 5)
});

console.log(sum)
console.log(product)
console.log(arr5);