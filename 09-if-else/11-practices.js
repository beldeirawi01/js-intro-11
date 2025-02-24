/*
const date = new Date();

console.log(date.getFullYear()); //2025
console.log(date.getMonth());
console.log(date.getDay()); // 0 (Sunday is 0)
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());


*/

'aeiouAEIOU'.includes(word[0])



const date = new Date();
let dayOfTheWeek = date.getDay();

console.log(dayOfTheWeek)

// If-else statement
if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log('Weekend');
}
else{
    console.log('Weekday')
}

// Switch Statement
switch (dayOfTheWeek){
    case 0:
        console.log('Weekend');
        break;
    case 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
        break;
}





  
  
function posNegZero(number) {
    if (number > 0) {
        return "POS";
    }
    else if (number < 0) {
        return "NEG";
    }

    return "ZERO";
}

console.log(posNegZero(-1));