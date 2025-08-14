/*console.log(a)
var a = 10

test();

function test(){
    console.log('This is a test function')
}

function parent() {
    const a = 10;
    console.log(" parent")
    function child(){
        console.log(a)
    }
    child();
}
parent();



function parent() {
    const a = 10;
    console.log(" parent")
    console.log(b)
    function child(){
        console.log(" Child")
       // console.log(a)
        function child1(){
            console.log(" Child1")
            console.log(a)
            var b = 30;
        }
        child1();
    }
    child();
}
parent();
*/
/*
function parent(){
    var a = 10;
    function child(){
        console.log(a)
      }
    return child
   
}

let functionReceived = parent()
console.log(functionReceived)

functionReceived()


*/
/*
function parent(){
    var a = 10;
    function child(){
        var b = 20;
        //console.log(a)

        function child2(){
            console.log(a+b)
        }
        return child2
    }
    return child
}
let functionReceived = parent()
console.log(functionReceived)
functionReceived()

let child2Recieved = functionReceived()
console.log(child2Recieved)
child2Recieved()




let globalVar = "I am global";

function outer() {
    let outerVar = "I am outer";

    function inner() {
        let innerVar = "I am inner";
        
        console.log(innerVar);   // Found in inner scope
        console.log(outerVar);   // Found in outer scope
        console.log(globalVar);  // Found in global scope
    }

    inner();
}

outer();
*/

function parent(){
    var a = 10;
    function child1(){
        var b = 20;

        function child2(){
            b = 120;
            console.log(a+b)
        }
        
        return child2
    }

    return child1
}

let child1Recieved = parent()

let child2Recieved = child1Recieved()
child1Recieved()
child2Recieved()