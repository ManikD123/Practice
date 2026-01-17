// let input = [1,2,3]

// Map Function 
// Out side function method
/*function square(n){
    return n * n;
}

const arr = input.map(square);

console.log(arr)


const arr2 = input.map(function(e1){
    return e1 * e1
})


console.log(arr2)


let output = []
input.map(function(e1){
    output.push(e1 * e1);
})
console.log(output)
*/

// Filter Function 
/*
let arr = [ 1, 2,3,4,5,6,7,8,9]

function even(n){
    return n % 2 === 0
}

const ans = arr.filter(even)
console.log(ans)

*/
/*
let evennumbers = arr.filter(function(e1){
    return e1 % 2 === 0
})
console.log(evennumbers)

*/

// reduce Filter 

let arr = [1,2,3,4];

//sum of elements

let totalsum = arr.reduce(function(accumulator, currentValue){
    accumulator = accumulator + currentValue;
    return accumulator;
}, 0)

console.log("total", totalsum)