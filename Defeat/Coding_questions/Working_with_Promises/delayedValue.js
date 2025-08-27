//Q7. Write a function delayedValue(value, delay) that returns 
// a Promise resolved with value after delay milliseconds.

// Q7 Template
function delayedValue(value, delay) {
   // your code here
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, delay);
    })
}

delayedValue("Hello", 1000).then(console.log); // Expected after 1 sec: "Hello"
