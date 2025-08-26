//Write a function fetchData(callback) that simulates fetching 
// data after 2 seconds and then calls the callback with "Data received".


// Q1 Template
function fetchData(callback) {
   // your code here
   setTimeout(function(){
        callback("Data received");
   }, 2000);
}

fetchData((result) => {
   console.log(result); // Expected: "Data received"
});
