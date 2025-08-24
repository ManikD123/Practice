// Q. Write a function createPower(p) that returns a function which raises a number to the power p.

function createPower(p) {
    // Your code here
    return function(num){
        return Math.pow(num, p);
    };
}

// Test
let square = createPower(2);
console.log(square(5)); // 25
let cube = createPower(3);
console.log(cube(2)); // 8