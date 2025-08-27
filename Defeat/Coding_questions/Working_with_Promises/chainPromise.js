// Q12. Write a function chainPromises() that first resolves with 5,
//  then adds 10, then multiplies by 2, and finally returns the result.

// Q12 Template
function chainPromises() {
   // your code here
   return Promise.resolve(5).then(num => num + 10).then(num => num * 2);
}

chainPromises().then(console.log); // Expected: 30
