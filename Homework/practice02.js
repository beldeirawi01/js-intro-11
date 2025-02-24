/*
Task01

Requirement:
Write a program that extracts expected values from a given String using JS 
String functions.

"I like apples and oranges"  -> "APPLE"
"JavaScript is not a scripting programming language"   -> "JavaScript"
"I don't like books"  -> "I like books"
*/

let str1 = "I like apples and orange";
let str2 = "JavaScript is not a scripting programming language";
let str3 = "I don't like books";

console.log(str1.slice(7, 12).toUpperCase());
console.log(str2.slice(0, 10));
console.log(str3[0] + str3.slice(7));

console.log(str3.replace(`don't `, ''))




/*
Task02

Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1: let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2: let s1 = "";
Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

let s1 = "";

console.log(`The length is = ${s1.length}`);
console.log(`The first char is = ${s1[0]}`);
console.log(`The last char is = ${s1[s1.length - 1]}`);

if (s1.includes('a' || 'e' || 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')) {
    console.log(true);
} else {
    console.log(false);
}


/*
Task03

Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1: let s2 = "x";
Expected Result 1: "x"

Test Data 2: let s2 = "abc";
Expected Result 2: "b"

Test Data 3: let s2 = "civic";
Expected Result 3: "v"
*/

let s2 = "Baraa";

console.log(s2[(s2.length - 1) / 2]); // r


/*
Task04

Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"


Toyota -> yo
*/

let s3 = 'JavaScript';

console.log(s3[(s3.length / 2) - 1] + s3[(s3.length / 2)]); // Sc




let s4 = "Tech";

console.log(`the first two characters are ${s4[0] + s4[1]}`);
console.log(`The last two characters are ${s4.at(-2) + s4.at(-1)}`);

console.log(`The other characters are ${s4.slice(2, s4.length - 2)}`);





/*
Task06

Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.

Test Data 1: let s5 = "ab";;
Expected Result 1: true

Test Data 2: let s5 = "abcd";
Expected Result 2: false

Test Data 3: let s5 = "12ab12";;
Expected Result 1: true

Test Data 4: let s5 = "JavaScript";
Expected Result 4: false
*/

let s5 = 'aabbab';

console.log(s5.slice(0,2) === s5.slice(-2));

//OR

if ((s5.slice(0, 2)) === s5.slice(-2)) {
    console.log(true);
} else {
    console.log(false)
}




/*
Task08

Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1: let s7 = "";
Expected Result 1: false

Test Data 2: let s7 = "red";
Expected Result 2: false

Test Data 3: let s7 = "green";
Expected Result 3: false

Test Data 4: let s7 = "xxbluexx";
Expected Result 4: true
*/

let s7 = 'xxBaraaxx';
if ((s7.slice(0, 2) && s7.slice(-2)) === 'xx') {
    console.log(true);
} else {
    console.log(false);
}




/*
Task09

Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1: let s8 = "";
Expected Result 1: ""

Test Data 2: let s8 = " ";
Expected Result 2: " "

Test Data 3: let s8 = "I like Apple";
Expected Result 3: "Apple like I"

Test Data 4: let s8 = "JavaScript is nice to learn";
Expected Result 4: "learn is nice to JavaScript"
*/

let s8 = 'I like apples';

let first = s8.slice(0, s8.indexOf(' '));
let last = s8.slice(s8.lastIndexOf(' ') + 1);
let middle = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1);

console.log(last + middle + first);




let s9 = 'Good Morning';

console.log(s9.trim(' ').split(' ').length)
