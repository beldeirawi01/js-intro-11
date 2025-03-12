const student = {
    fname: 'Alex',
    lname: 'Smith',
    hobbies: ['Soccer', 'Watching movies'],
    examScores: {
        midterm: 60,
        final: 90
    }
}

console.log(student.hobbies)
console.log(student.examScores)
console.log(student.hobbies[0])

const allExamValues = Object.values(student.examScores)
let average = allExamValues.reduce((acc, cur) => acc + cur, 0) / allExamValues.length

console.log(average)


