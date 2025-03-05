const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv


let letters4 = cities.find((city) => city.length === 4)
let lastWordWith6Chars = cities.findLast((city) => city.length === 6)


console.log(letters4)
console.log(lastWordWith6Chars)
console.log(cities.findIndex((city) => city === 'LA'))
console.log(cities.find((city) => city.toLowerCase().includes('i')))
console.log(cities.findLast((city) => city.length === 4))