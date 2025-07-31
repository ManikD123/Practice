// Non strict environment 
console.log("scenario 1")
console.log(this); // O/P: {}


console.log("scenario 2")
function fnGlobal(){
    console.log(this);  // shares the global Class of the object
}
fnGlobal();

console.log("scenario 3")
var obj = {
    fn: function(){
        console.log(this); // share the Object class
    }
};
obj.fn();

console.log("scenario 4")
var obj2 = {
    fn: function(){
        console.log(this); // share the Object class
        var nestedFn = function(){
            console.log(this);
        };
        nestedFn();
    }
};
obj2.fn();

