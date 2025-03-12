//Task 1

const firstPos = arr => {
    for (const num of arr){
        if (num > 0) return num
    }
}

console.log(firstPos([0, 1, 2]));



//Task 2

const lastNeg = numbers => {
    numbers.reverse();
    for (const num of numbers) {
        if (num < 0) {
            return num;
        }
    }
    
}

console.log(lastNeg([0 , 1, -2, -1, -3]))



// Task 3
const firstLongest = longString => {
    let longest = longString[0];

    for (const element of longString) {
        if (element.length > longest.length) {
            longest = element;
        }
    }
    return longest
}




// Task

const min = shortestNum => {
    let shortest = shortestNum[0];

    for (const num of shortestNum) {
        if (num < shortest){
            num = shortest
        }
    }
    return shortest;
}

console.log(min([1, 3, 5]))




// Task 7

// Option 1

/*
const commonElements = (arr1, arr2) => {
    let result = [];
    for (let i  = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                break;
            }
        }
    }
    return result
}
*/

const commonElements = (arr1, arr2) => arr1.filter(num => arr2.includes(num));

console.log(commonElements([1, 2, 3], [1, 5, 6]))