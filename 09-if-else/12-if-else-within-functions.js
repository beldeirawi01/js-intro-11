
function startE(firstLetter) {
    if (firstLetter.charAt(0) === 'E' || firstLetter.charAt(0) === 'e') {
        return true;
    }
    return false;
}

console.log(startE('alex'))





/*
function divisible5(number) {
    if (number % 5 === 0){
        return true;
    }

    return false;
}

console.log(divisible5(5))
console.log(divisible5(6))


*/ 


function fooBar(number) {
    if (number % 5 === 0 && number % 7 === 0) {
        return 'foobar';
    }
    else if(number % 5 === 0) {
        return 'foo';
    }
    else if (number % 7 === 0){
        return 'bar';
    }
    else {
        return number;
    }

}

console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(35));
console.log(fooBar(70));