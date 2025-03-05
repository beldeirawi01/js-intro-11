const students = [ 'John', 'Alex', 'Jessie', 'Jane', 'Omar', 'Omar' ];

console.log(students.includes('John')); // true

students.includes('John', 1); // false because it checks what is in index 1
students.includes('Omar'); // true
students.includes('Max'); // false
students.includes('jane'); // false because Jane in the array is uppercase J


students.indexOf('Jane'); // 3, which is index of first apperence 
students.lastIndexOf('Jane'); // 3, which is index of last apperence 

students.indexOf('Omar'); // 4
students.lastIndexOf('Omar'); // 5

students.indexOf('Heidi'); // -1, because it is undefined
students.lastIndexOf('Heidi'); // -1, because it is undefined
