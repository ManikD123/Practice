// Write a function sumArray that takes an array of numbers and returns the sum of all elements.

function sumArray(arr) {
    // Your code here
    return arr.reduce(function(acc, curr){
        acc = acc + curr;
        return acc;
    },0)
}


console.log(sumArray([1, 2, 3, 4, 5]));