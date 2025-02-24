
// If value1 is undefiend or null, the result is always value2 

// if value2 is NOT undefined or null, then the result is always value1

let nameInServer = null;

nameInServer = nameInServer ?? 'Customer';

console.log(nameInServer);


