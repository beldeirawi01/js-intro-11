const batch = {
    number: 11,
    program: 'SDET',
    startDate: 'January 20, 2025',
    address: '2800 S River Road'
}

console.log(batch)

const student1 = {
    fname: 'Baraa',
    lname: 'Eldeirawi',
    address: batch.address,
    ...batch
}

console.log(student1);


const arr1 = [1, 2, 3], arr2 = [4, 5, 6]

console.log(...arr1, ...arr2) // 1 2 3 4 5 6

