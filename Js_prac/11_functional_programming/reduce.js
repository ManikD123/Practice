let arr = [1, 2, 3, 4];
// sum of elements.

let totalSum = arr.reduce(function (accumulator, currentValue) {
    console.log("accumulator", accumulator)
    console.log("currentValue", currentValue)
    accumulator = accumulator + currentValue;
    return accumulator;
}, 0)

console.log("total", totalSum)