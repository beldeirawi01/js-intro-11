
/*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str1;

let res1 = str1.slice(-5);




/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/


let str2; 

let firstChars = str2.slice(0, 3);
let lastChars = str2.slice(-3);

console.log(firstChars + lastChars);
