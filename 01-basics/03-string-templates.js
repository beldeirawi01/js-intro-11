
const person = {
    fname: "Baraa",
    lname: "Eldeirawi",
    age: 21,
};

let years = 10

//Option 1
console.log(person.fname + " " + person.lname + " will be " + (person.age + years) + " after " + years + " years.");

//Option 2
///Uses backticks (``) and ${} for variables
console.log(`${person.fname} ${person.lname} will be ${person.age + years} after ${years} years!`);



let price = 5;
let quantity = 10;

console.log(`The total price is $${price * quantity}`);