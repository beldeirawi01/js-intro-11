class Citizen {

    // Public Property
    country = 'USA'
    batch = 'Batch 11';

    // Private property
    #SSN;

    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }

    // Getters and Setters for private fields, providing indirect access
    getSSN() {
        return this.#SSN
    }

    setSSN(num) {
        this.#SSN = num;
    }
}
const c1 = new Citizen('John Doe', 25);
const c2 = new Citizen('Jane Doe', 25);

console.log(c1);
console.log(c2);

c1.setSSN('123-12-1234')

console.log(c1.getSSN())