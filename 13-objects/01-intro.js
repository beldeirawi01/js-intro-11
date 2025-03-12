const obj1 = {} // Empty Object

const obj2 = new Object(); // Also an empty array

const mouse = {
    name: 'HP Smart',
    price: 10.99,
    quntity: 14,
    delivery: ['pick up', 'delivery']
}

// Outputs the object
console.log(mouse);

// Add properties with dot notation or bracket notation, with dot notation being the most common method

mouse.colors = ['Black', 'White', 'Blue', 'Brown'];

// Delete properties with dot notation or bracket notation,

delete mouse.delivery

console.log(mouse)

// Updates property value with dot notation or bracket notation

mouse.price = 15.99;

// Retrives property values with dot notation or bracket notation
console.log(mouse.price)