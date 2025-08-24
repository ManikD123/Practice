// Write a function findIndexCustom(arr, callback) that mimics findIndex.

function findIndexCustom(arr, callback) {
    // Your code here

    for( let i = 0; i < arr.length; i++ ){
        if( callback(arr[i], i, arr) ){
            return i;
        }
    }
    return -1;

}

// Test
console.log(findIndexCustom([10, 20, 30], x => x === 30)); // 1
console.log(findIndexCustom([10, 20, 30], x => x === 40)); // -1
