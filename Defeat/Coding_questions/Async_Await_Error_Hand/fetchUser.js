// Q16. Write an async function fetchUser() that 
// waits 2 seconds and then returns "User Data".

// Q16 Template
async function fetchUser() {
   // your code here
   return new Promise((resolve) => {
    setTimeout(() => resolve("User Data"), 2000);
   })
}

fetchUser().then(console.log); // Expected: User Data
