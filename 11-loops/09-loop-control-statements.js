// break: completley terminates loop

//continue: skips current iteration


for (let i = 1; i <= 15; i++) {
    if (i === 6) continue; // skips when i is 6
    else console.log(i);
}



for (let i = 1; i <= 15; i++) {
    if(i === 10) break;
   else console.log(i);
}




const arr = [1, 2, 10, 20, 25, 30, 3 , 1];

const result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result.push(arr[i]);
    }
    if (result.length === 2) {
        break;
    }

}




