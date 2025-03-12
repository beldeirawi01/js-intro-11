/*
let initialScore = 0;
function score() {
    initialScore +=1;
}

score()

console.log(initialScore) // 1

*/ 

function program() {
    let initialScore = 0;
    
    function score() {
        return initialScore += 1
    }

    return score
}

const scoreMethod = program()


console.log(scoreMethod())