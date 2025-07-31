console.log("Scenario 1") // gives the window function
console.log(this)

console.log("Scenario 2") // gives the window function
function fnGlobal(){
    console.log(this);
}
fnGlobal();


console.log("Scenario 3") // gives the window function
var obj = {
                prop: 'I am property',
                method: function(){
                    console.log(this.prop);
                }
};
obj.method();


console.log("Scenario 4") // gives the window function
var obj1 = {
                prop: 'I am property',
                method: function(){
                    console.log(this.prop);
                    var nestedFunction= function(){
                        console.log(this);
                    };
                    nestedFunction();
                }
};
obj1.method();


