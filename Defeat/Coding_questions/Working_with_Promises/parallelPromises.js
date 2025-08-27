// Q10. Write a function parallelPromises() that runs two promises
//  in parallel and returns a Promise resolved with their results in an array.

// Q10 Template
function parallelPromises() {
   // your code here
   const p1 = Promise.resolve("First Done");
   const p2 = Promise.resolve("Second Done");

   return Promise.all([p1, p2]);
}

parallelPromises().then(console.log);
// Expected: ["First Done", "Second Done"]
