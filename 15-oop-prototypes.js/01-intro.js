/* 
OOP = object Orientated Programmin
OOP languages: Java, C++ C#
OOP converts real life objects 
*/


// Constructor function
function Mug(material, price, designName){
    this.material = material;
    this.price = price;
    this.designName = designName;
}

const mugJanuary = new Mug ('glass', 36.99, 'design1');
const mugFebuary = new Mug ('glass', 37.99, 'design2');
const mugMarch = new Mug ('glass', 38.99, 'design3');

console.log(mugJanuary);
console.log(mugFebuary);
console.log(mugMarch);


// Classes
class Student {
    constructor(fullName, age, program) {
        this.fullName = fullName;
        this.age = age;
        this.program = program;
    }
}

const student1 = new Student('Baraa', 21, 'SDET');
console.log(student1);