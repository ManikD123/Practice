/*const person = {
    name: 'manik'
};
const a = 10;
console.log(a);

let arr = [1, 2,3,4,5];
console.log(arr)
console.log(arr.hasOwnProperty(1)) // trur
console.log(arr.hasOwnProperty(6)) // false


// Traditional Way
function car(modal, year) {
    this.modal = modal;
    this.year = year;

    this.displayInfo = function() {
        return `this is ${this.year} and ${this.modal}.`;
    } ;
}

let car1 = new car("toyota", 2025);
console.log(car1); // Object
console.log(car1.displayInfo); // function



// using display info inside the Prototype called as a Prototype chain

function car(modal, year) {
    this.modal = modal;
    this.year = year;
}

car.prototype.displayInfo = function(){
    return `this is ${this.modal} and ${this.year}.`;
}

const car1 = new car("toypta", 2024);
console.log(car1); 
console.log(car1.displayInfo()); // prototype is inharited to all the funcitons
console.log(car2.displayInfo()); // ot defined



// using __Prot0__

function car(modal, year) {
    this.modal = modal;
    this.year = year;
}

car.prototype.displayInfo = function(){  // not recomended
    return `this is ${this.modal} and ${this.year}.`;
}

const car1 = new car("toypta", 2024);
console.log(car1); 
console.log(car1.displayInfo()); // prototype is inharited to all the funcitons


function Animal() {}
let dog = new Animal();

console.log(Animal.prototype); // Prototype object with shared methods
console.log(dog.__proto__);    // Points to Animal.prototype

console.log(dog.__proto__ === Animal.prototype); // true
*/

let carPrototype = {
    displayinfo: function(){
        return `this is ${this.year} and ${this.model}.`;
    }
}

let car1 = Object.create(carPrototype);
car1.model = "toyota";
car1.year = 2025;

console.log(car1.displayinfo())