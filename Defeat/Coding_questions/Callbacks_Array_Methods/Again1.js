/* Implement a function customMap(arr, callback) that works like the built-in map.

Implement a function customReduce(arr, callback, initialValue) that works like the built-in reduce.

Write a function applyToEach(arr, fn) that applies a given function fn to each element in arr.

Write a function findIndexCustom(arr, callback) that mimics findIndex.

Write a function forEachCustom(arr, callback) that mimics forEach.



function customMap(arr, callback) {
    // Your code here
    let result = [];
    for( let i = 0; i < arr.length; i++ ){
        result.push(callback(arr[i],i, arr));
    }
    return result
}

// Test
console.log(customMap([1, 2, 3], x => x * 2)); // [2, 4, 6]


function applyToEach(arr, fn) {
    // Your code here
    for( let i = 0; i < arr.length; i++ ){
        fn(arr[i], i, arr);
    }
}

// Test
applyToEach([1, 2, 3], x => console.log(x * 2)); // prints 2, 4, 6


function customReduce(arr, callback, initialValue) {
    // Your code here
    let acc = initialValue;

    for( let i = 0; i < arr.length; i++ ){
        acc = callback(acc, arr[i], i, arr)
    }
    return acc;
}
// Test
console.log(customReduce([1, 2, 3, 4], (acc, val) => acc + val, 0)); // 10



function findIndexCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

// Test
console.log(findIndexCustom([10, 20, 30], x => x === 20)); // 1
console.log(findIndexCustom([10, 20, 30], x => x === 40)); // -1
*/

function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// Test
forEachCustom([1, 2, 3], (x, i) => console.log(`Index ${i}: ${x}`));
