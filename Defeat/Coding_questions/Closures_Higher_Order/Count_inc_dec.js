// Q Write a function counter() that returns an object with two methods: increment() and decrement(). The counter starts at 0.

function counter() {
    // Your code here
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count
    };
}

// Test
let c = counter();
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.decrement()); // 1