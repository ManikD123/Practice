// callback function
function printName(fn1, fn2) {
    console.log("John Doe")
    console.log(fn1)
    console.log(fn2)
}

function printAge() {
    console.log(20)
}

function printProfession() {
    console.log("Student")
}

printName(printAge, printProfession)
/*
// impure function

var c = 0;
function sum(a, b) {
    c = c + 1;
    return a + b + c;
}
console.log(sum(2, 3))
console.log(sum(2, 3))
*/