// key is always string
// Value can be null, undefined, boolean, string, number, array, objects, function


// JSON does not support null, undefined, function, Symbol()
const person = {
    fname: 'John',
    lname: 'Doe',
    age: 45,
    married: undefined,
    isMember: true,
    favMovies: ['The Batman', 'Red'],
    
    address: {
        street1: '2800 S River Road',
        street2: 'Ste 310',
        city: 'Des Plaines',
        state: 'IL',
        zipCode: 12345
    }
};



const cat = {
    name: 'Ra',
    age: 1,
    sound: function() {
        console.log('MEOW!')
    },
    getMood: function() {
        return 'HUNGRY';
    },
    getInfo: function() {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
};

console.log(cat.name)
cat.sound()
console.log(cat.getMood())
cat.getInfo()