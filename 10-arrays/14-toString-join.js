const names = ['Alex', 'John', 'Jane'];

let namesStr1 = names.toString();
let namesStr2 = names.join();
let namesStr3 = names.join(' | ');

console.log(namesStr1); // Alex,John,Jane
console.log(namesStr2); // Alex,John,Jane
console.log(namesStr3); // Alex | John | Jane
