// Q Write a function once(fn) that takes a function and returns a new function that can only be called once.

function once(fn) {
    // Your code here
    let flag = false;
    let result;

    return function (...args) {
        if (!flag) {
            flag = true;
            result = fn(...args);
            return result;
           
        }

    };

}

// Test
let sayHi = once(() => "Hi!");
console.log(sayHi()); // "Hi!"
console.log(sayHi()); // undefined (or ignored second call)