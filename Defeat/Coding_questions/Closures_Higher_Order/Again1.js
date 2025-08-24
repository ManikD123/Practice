/*
Write a function createAdder(x) that returns a function which adds x to its argument.
Example: add5 = createAdder(5); add5(10) → 15

Write a function createPower(p) that returns a function which raises a number to the power p.

Write a function counter() that returns an object with two methods: increment() and decrement(). The counter starts at 0.

Write a function once(fn) that takes a function and returns a new function that can only be called once.

Write a function createGreeting(greeting) that returns a function which greets a person’s name.
Example: sayHello = createGreeting("Hello"); sayHello("John") → "Hello, John"



function createAdder(x) {
    // Your code here
    return function(e){
        return e + x;
    }
}

// Test
let add5 = createAdder(5);
console.log(add5(10)); // 15
console.log(add5(20)); // 25



function createPower(p) {
    // Your code here
    return function(e){
        return Math.pow(e,p);
    }
}

// Test
let square = createPower(2);
console.log(square(5)); // 25
let cube = createPower(3);
console.log(cube(2)); // 8


function counter() {
    // Your code here
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count
    }

}

// Test
let c = counter();
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.decrement()); // 1

function once(fn) {
    // Your code here
    let result;
    let flag = false;

    return function(...args){
        if( !flag ){
            flag = true;
            result=fn(...args);
            return result;
        }

    }

}

// Test
let sayHi = once(() => "Hi!");
console.log(sayHi()); // "Hi!"
console.log(sayHi()); // undefined (or ignored second call)
*/

function createGreeting(greeting) {
    // Your code here
    return function(e){
        return `${greeting}, ${e}`;
    }
}

// Test
let hello = createGreeting("Hello");
console.log(hello("Alice")); // "Hello, Alice"
