// Write a function forEachCustom(arr, callback) that mimics forEach.

function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// Test
forEachCustom([1, 2, 3], (x, i) => console.log(`Index ${i}: ${x}`));
