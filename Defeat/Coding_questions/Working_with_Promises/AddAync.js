// Q9. Write a function addAsync(a, b) that returns a Promise resolved with a + b after 1 second.

// Q9 Template
function addAsync(a, b) {
   // your code here
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 1000);
    })
}

addAsync(5, 7).then(console.log); // Expected: 12
