//Q8. Write a function rejectPromise() that always 
// returns a Promise rejected with "Error occurred". 

// Q8 Template
function rejectPromise() {
   // your code here
   return Promise.reject("Error Occured")
   return 
}

rejectPromise().catch(console.error); // Expected: Error occurred
