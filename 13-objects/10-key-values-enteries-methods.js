const phone = {
    brand: 'iPhone',
    storage: 64,
    color: 'Yellow',
};


console.log(Object.keys(phone)); // [ 'brand', 'storage', 'color' ]
console.log(Object.values(phone)); // [ 'iPhone', 64, 'Yellow' ]
console.log(Object.entries(phone)); // [ [ 'brand', 'iPhone' ], [ 'storage', 64 ], [ 'color', 'Yellow' ] ]


for (const key of Object.keys(phone)) {
    console.log(key)
}

for (const value of Object.values(phone)) {
    console.log(value)
}

for (const entry of Object.entries(phone)) {
    console.log(`The entry key is ${entry[0]} and the entry value is ${entry[1]}`)
}