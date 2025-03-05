const numbers = [1, 2, 3, 4, 5];
/*
let flag = true; 
for (const num of numbers){
    if (num <= 0){
        flag = false;
        break;
    }
}

console.log(flag)

*/

let allPositive = numbers.every((x) => x > 0);
console.log(allPositive); // True



const cities = ['Chicago', 'Berlin', 'Rome'];
let chars6 = cities.some((x) => x.length === 6)
console.log(chars6) // True because Berlin is 6 Characters