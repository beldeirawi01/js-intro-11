
let str = '123 Street 123';

let strReplaced = str.replace('123', '###'); // Replaces only first occurence
let strReplacedAll = str.replaceAll('123', '###'); // Replaces every occurence in the string

console.log(str);
console.log(strReplaced);
console.log(strReplacedAll);
