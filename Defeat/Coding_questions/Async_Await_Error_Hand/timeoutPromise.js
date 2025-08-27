// Q20. Write an async function timeoutPromise(ms) that rejects if time exceeds ms milliseconds.

// Q20 Template
async function timeoutPromise(ms) {
   // your code here
   return new Promise((resolve, reject) => {
    setTimeout(() => reject("timeout after " + ms + "ms"), ms)
   })
}

timeoutPromise(1000).catch(console.error); // Expected: "Timeout after 1000 ms"
