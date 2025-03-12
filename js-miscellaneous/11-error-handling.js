try {
    const pi = 3.14;
    pi = 10;
} catch(error) {
    console.log('Server down at the moment, please try later!')
}

function validateAgeForDL(age) {
    if (age >= 16) return 'Valid!'
    throw new Error(`${age} is not allowed for DL`)
}

try {
    const r1 = validateAgeForDL(15)
    console.log(r1)
}
catch (error) {
    console.log('Error:', error.message)
}