// Q14. Write a function promiseAllExample() that resolves 
// only when three promises are resolved.

// Q14 Template
function promiseAllExample() {
   // your code here
    const p1 = Promise.resolve("P1");
    const p2 = Promise.resolve("P2");
    const p3 = Promise.resolve("P3");

    return Promise.all([p1, p2, p3]);
}

promiseAllExample().then(console.log);
// Expected: ["P1", "P2", "P3"]
