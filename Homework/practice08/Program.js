const Book = require('./Book')
const Author = require('./Author')


const book1 = new Book ('A Game of Thrones', 'Epic Fantasy', 694)
const book2 = new Book ('A Clash of Kings', 'Epic Fantasy', 768)
const book3 = new Book ('A Storm of Swords', 'Epic Fantasy', 973)

const books = [book1, book2, book3]

const author = new Author('George R. R.', 'Martin', 'United States', [ book1, book2, book3 ])


console.log(author.getFullName())

for (let i = 0; i < author.books.length; i++) {
     console.log(author.books[i])
}



let maxPages = author.getBooks()[0];

for (const book of author.getBooks()) {
    if (book.page > maxPages.page) {
        maxPages = book;
    }
}
console.log(maxPages.title)


