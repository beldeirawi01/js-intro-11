const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;
for (const city of cities) {
    if (city.length % 2 != 0) {
        firstOddLengthCity = city;
        break
    }
}

console.log(firstOddLengthCity);



const citiesWith5PlusChars = [];
for (i = 0; i < cities.length; i++) {
    if (cities.length > 4) {
        citiesWith5PlusChars.push(cities[i]);
        i++
    }
}

console.log(citiesWith5PlusChars)