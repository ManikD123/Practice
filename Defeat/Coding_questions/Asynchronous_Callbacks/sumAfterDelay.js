// Q3. Write a function sumAfterDelay(a, b, callback) 
// that waits 2 seconds, then calls the callback with the sum of a + b.

// Q3 Template
function sumAfterDelay(a, b, callback) {
   // your code here
    setTimeout(function(){
        callback(a+b)
    }, 2000);

}

sumAfterDelay(5, 10, (result) => {
   console.log(result); // Expected: 15
});
