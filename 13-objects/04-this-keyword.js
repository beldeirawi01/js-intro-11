const dog = {
    name: 'Johnny',
    age: 3,
    getInfo: function() {
        return this.name + ' ' + this.age
    }
}


console.log(dog)
console.log(dog.getInfo())