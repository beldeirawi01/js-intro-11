
// startsWith() vs endsWith()


let company = 'TechGlobal';

console.log(company.startsWith('T')) // true
console.log(company.startsWith('Tech')) // true
console.log(company.startsWith('TechGlobal')) // true


console.log(company.startsWith('t')) // false
console.log(company.toLowerCase().startsWith('t')) // true

console.log(company.endsWith('l')); // true
console.log(company.endsWith('Global')); // true
console.log(company.endsWith('TechGlobal')); // true


console.log(company.startsWith('') && company.endsWith('')); // true



//includes() method

let quote = `Let's do it`;

console.log(quote.includes('')) // true
console.log(quote.includes('do')) // true
console.log(quote.includes('it')) // true
console.log(quote.includes('let')) // false
console.log(quote.includes(' ')) // true
console.log(quote.includes(' do ')) // true



// search()

let str = 'abcde';

console.log(str.search('a')) // 0

console.log(str.search('abcde')) // 0
console.log(str.search('abc')) // 0

console.log(str.search('bc')) // 1

console.log(str.search('bcde')) // 1

console.log(str.search('cde')) // 2

// If match not found, it will output -1

console.log(str.search('abb')) // -1

console.log(str.search('abcda')) //-1


// indexOf() and lastIndexOf()

let today = 'saturday';

console.log(today.indexOf('a')) // 1
console.log(today.lastIndexOf('a')) // 6

console.log(today.indexOf('t')) // 2
console.log(today.lastIndexOf('t')) // 2


