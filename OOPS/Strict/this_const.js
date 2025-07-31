"use strict";
console.log("Scenraio 1");
console.log(this);  // {}

console.log("Scenraio 2");
function myFunction(){
    console.log(this);  // undefined
}
myFunction();

console.log("Scenraio 3");
var obj = {
    prop: "I'm Property",
    method: function() {
        console.log(this.prop)
    }
};
obj.method();

console.log("Scenraio 4");
var outerObj = {
    innerObj: {
        method: function(){
            console.log(this);
        }
    }
}
outerObj.innerObj.method();