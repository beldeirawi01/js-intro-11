class Person {
    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    eat(str = 'food'){
        console.log(`Person eats ${str}`);
    }
    sleep(num = 8) {
        console.log(`Person sleeps ${num} hours`);
    }
    walk() {
        return true;
    }
}

const person = new Person('John Doe', 25)
person.eat()
person.sleep()
console.log(person.walk())


module.exports = Person