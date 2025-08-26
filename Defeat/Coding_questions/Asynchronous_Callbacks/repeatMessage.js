// Q5. Write a function repeatMessage(message, times, callback) that prints the message 
// every 1 second until it has been printed times times, then calls the callback.

// Q5 Template
function repeatMessage(message, times, callback) {
   // your code here
    let count = 0;
    let interval = setInterval(function(){
        console.log(message);
        count++;
        if( count === times ){
            clearInterval(interval);
            callback();
        }
    },1000)

}

repeatMessage("Hi", 3, () => console.log("Done"));
// Expected: Hi (3 times, 1 sec apart), then "Done"
