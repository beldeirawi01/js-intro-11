function Teacher(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field
}

Teacher.prototype.teaches() = function() {
    console.log (`${this.fname} teaches ${this.field}`)
}

Teacher.prototype.homework() = function() {
    console.log (`${this.fname} gives homework`)
}

// Create 4 Teacher Objects/Instances
const teacher1 = new Teacher('John', 'Doe', 25, 'Math')
const teacher2 = new Teacher('Alex', 'Smith', 32, 'English')
const teacher3 = new Teacher('James', 'Bart', 22, 'Physics')
const teacher4 = new Teacher('Baraa', 'Eldeirawi', 21, 'Anatomy')