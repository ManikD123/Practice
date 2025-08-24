// Write a function createAdder(x) that returns a function which adds x to its argument.
// Example: add5 = createAdder(5); add5(10) → 15


function createAdder(x) {
    // Your code here
    return function(num){
        return num+x;
    };

}

// Test
let add5 = createAdder(5);
console.log(add5(10)); // 15
console.log(add5(20)); // 25
console.log(add5(40)); // 45