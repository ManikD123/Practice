console.log(10)

setTimeout(function(){
    console.log(20)
}, 2000)

console.log(30)

setTimeout(function(){
    console.log(200);
    fn();
}, 5000)

function fn(){
    console.log("callback function")
}

