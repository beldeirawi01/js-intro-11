const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];

for (const name of names) {
    console.log(name)
}

let counterJ = 0;
for (i = 0; i < names.length; i++){
    if(names[i].startsWith('J') || names[i].startsWith('j')){
        counterJ++;
    }
}
console.log(counterJ)