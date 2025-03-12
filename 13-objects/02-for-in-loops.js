const batch = {
    number: 11,
    program: 'SDET',
    numberOfStudents: 20,
}


console.log(batch.number)
console.log(batch.program)
console.log(batch.numberOfStudents)


// For IN loops needs name of object and then key in bracket notation
for (const key in batch) {
    console.log(key, batch[key])
}


const arr = ['Rome', 'Berlin', 'Chicago'];

for (const key in arr){
    console.log(key, arr[key])
}