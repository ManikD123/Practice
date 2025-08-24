// Write a function createGreeting(greeting) that returns a function which greets a person’s name.
// Example: sayHello = createGreeting("Hello"); sayHello("John") → "Hello, John"

function createGreeting(greeting) {
    // Your code here
    return function(name){
        return `${greeting}, ${name}`
    }

}

// Test
let hello = createGreeting("Hello");
console.log(hello("Alice")); // "Hello, Alice"

