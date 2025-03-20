// Task 1

const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];


let ageOver30 = 0;

for(let user of users) {
    if (user.age > 30) ageOver30++;
}
console.log(ageOver30);

// Outputs ppl in Chicago
let pplInChicago = 0
for (let user of users) {
    if (user.address.city === "Chicago") pplInChicago++;
}
console.log(pplInChicago)


// Outputs ppl in IL

let pplInIL = 0
for (let user of users) {
    if (user.address.state === "IL") pplInIL++;
}
console.log(pplInIL)

// Outputs ppl wit gmail

let pplWithGmail= 0
for (let user of users) {
    if (user.email.includes('gmail')) pplWithGmail++;
}

console.log(pplWithGmail)

// Outputs names of ppl under 35

let usersOver35 = []
for (let user of users) {
    if (user.age < 35)  usersOver35.push(user.firstName)
}
console.log(usersOver35)



const averageOfAges = users.reduce((count, user) => count + user.age, 0) / users.length
console.log(averageOfAges);


// Task 2

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];


const mostExpensive = appleStore.reduce((result, product) => product.price > result.price ? product : result)
console.log(mostExpensive.productName)


const mostQuantity = appleStore.reduce((result, product) => product.quantity > result.quantity ? product : result)
console.log(mostQuantity.productName)



// Task 4

const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

// Replace price with Item because it makes more sense while reading
const cartTotal = shoppingCart.items.reduce((total, price) => total + (price.quantity * price.price), 0) 

console.log(cartTotal)