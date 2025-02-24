let fname = 'Baraa';

let lname = 'Eldeirawi';

let age = 21;

let vip = true;


const person = {
    fname: "Baraa ",
    lname: "Eldeirawi",
    age: 21,
    vip: true,
};

//Option 1

console.log(person.fname);

//Option 2

console.log(person['lname']);

console.log(person.age);

// For updating object called "person"
person.age = 22;

console.log(person.age);



const student = {
    fullName: "Baraa Eldeirawi",
    address: {
        street: "Halsted ",
        city: "Chicago",
        state: "IL",
    },
    courses: ["Math", "Science", "Physics"],
};


console.log(student);

//Adds age to 'student'
student.age = 21;

console.log(student);

//For deleting property in existing object
delete student.address;

console.log(student);