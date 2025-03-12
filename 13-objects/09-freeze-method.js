const book = {
    author: {
        fname: 'Stefan',
        lname: 'Zwieg'
    },
    title: 'Amok',
    pages: 62
};

console.log(book)

Object.freeze(book)

console.log(Object.isFrozen(book)) // true because it is frozen