class Customer {
    // # means it is a private property
    // No # means it is a public property
    #secretInfo = 'Hello';
    notSecret = 'Yessir'
}

const cust1 = new Customer();
const cust2 = new Customer();


console.log(cust1.secretInfo);
console.log(cust1.notSecret);