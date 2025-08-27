// Q11. Write a function racePromises() that returns whichever of two promises resolves first.

// Q11 Template
function racePromises() {
   // your code here
   const fast = new Promise((resolve) => setTimeout(() => resolve("Fast Done"), 500));
   const slow = new Promise((resolve) => setTimeout(() => resolve("slow Done"), 1500));
   return Promise.race([fast, slow])
}

racePromises().then(console.log);
// Expected: "Fast Done"
