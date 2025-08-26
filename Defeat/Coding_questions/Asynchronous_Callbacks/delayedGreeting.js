//Write a function delayedGreeting(name, callback) 
// that waits 1 second and then calls the callback with "Hello, <name>".

// Q2 Template
function delayedGreeting(name, callback) {
   // your code here
   setTimeout(function(){
        callback("hello," + name);
   }, 1000)

}

delayedGreeting("Manik", (msg) => {
   console.log(msg); // Expected: "Hello, Manik"
});
