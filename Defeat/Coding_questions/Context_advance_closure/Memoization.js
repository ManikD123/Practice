// Write a function memoize(fn) that caches results of expensive function calls.

function memoize(fn) {
    // Your code here
}

// Test
let slowSquare = n => {
    console.log("Calculating...");
    return n * n;
};
let memoSquare = memoize(slowSquare);

console.log(memoSquare(5)); // "Calculating..." then 25
console.log(memoSquare(5)); // 25 (cached, no "Calculating...")

