
class Author{
    constructor(firstName, lastName, country, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = books
    }


    // Instance Method
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    // Instance Method
    getBooks() {
        return this.books
    }
}

module.exports = Author
