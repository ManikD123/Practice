// Implement a function customReduce(arr, callback, initialValue) that works like the built-in reduce.

function customReduce(arr, callback, initialValue) {
    // Your code here
    let acc = initialValue;

    for( let i = 0; i < arr.length; i++ ){
        acc = callback(acc, arr[i], i, arr);
    }
    return acc;
}

// Test
console.log(customReduce([1, 2, 3, 4], (acc, val) => acc + val, 0)); // 10
