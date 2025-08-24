// Implement a function customMap(arr, callback) that works like the built-in map.

function customMap(arr, callback) {
    // Your code here
    let result = [];

    for( let i = 0; i < arr.length; i++ ){
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// Test
console.log(customMap([1, 2, 3], x => x * 2)); // [2, 4, 6]


