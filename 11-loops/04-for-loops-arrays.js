const names = ['John', 'Jane', 'Alex', 'Maria'];




const numbers = [2, 6, 3, -1, 10, 8];
let total = 0;
for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0){
        total++;
    }
}
console.log(total);