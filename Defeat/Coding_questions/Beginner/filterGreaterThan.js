// Q: Write a function filterGreaterThan(arr, n) that returns only numbers greater than n.

function filterGreaterThan(arr, n) {
    // Your code here
    let result = [];
    for( let i = 0; i < arr.length; i++ ){
        if( arr[i] > n ){
            result.push(arr[i]);
        }
    }
    return result;

}

// Test
console.log(filterGreaterThan([1, 5, 10, 15], 7)); // [10, 15]