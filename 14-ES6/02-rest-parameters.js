
function product() {
    if (arguments.length === 0) return 0
    let result = 1;
    for (const value of arguments) {
        result *= value
    }
    return result
}

console.log(product())
console.log(product(5))
console.log(product(5, 2))
