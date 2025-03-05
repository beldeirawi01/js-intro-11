// Slicing

let school = 'TechGlobal School';

let s1 = school.slice(0, 3); // Tech
let s2 = school.slice(4, 10); // Global
let s3 = school.slice(0, 10); // TechGlobal
let s4 = school.slice(11, 17); // School

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

console.log(school.slice(4)); // 'Global School'


// Substrings
let city = "Los Angeles"; 
console.log(city.substring(0, 3)); // Los
console.log(city.substring(4)); // Angeles

console.log('Apple'.slice(2, 10)) // ple
console.log('Apple'.substring(2, 10)) // ple

console.log('Orange'.slice(-10, 10)) // Orange
console.log('Orange'.substring(-10, 10)) // Orange

console.log("Banana".slice(1, -1)); // 'anan'
console.log("Banana".slice(1, -2)); // 'ana'
console.log("Banana".slice(0, -5)); // 'B'
console.log("Banana".slice(0, -6)); // '' (Empty String)
console.log("Banana".slice(0, 0)); // '' (Empty String)


console.log("Banana".substring()); // ''
console.log("Banana".substring()); // ''
console.log("Banana".substring()); // ''
console.log("Banana".substring()); // ''
console.log("Banana".substring()); // ''


console.log('')
