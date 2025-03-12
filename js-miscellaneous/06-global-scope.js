
let name = 'John'

const cities = ['Rome', 'Berlin'];

const person = {
    fullName: 'John Doe',
    age: 42
}

const sayHi = () => console.log('Hi')

// Globally accessing these variables
console.log(cities);
console.log(name);
console.log(person);
sayHi()


// Variables declared in a function become local to the function (Function Scope)