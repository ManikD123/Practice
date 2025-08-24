// Write a function applyToEach(arr, fn) that applies a given function fn to each element in arr.

function applyToEach(arr, fn) {
    // Your code here

   

    for( let i = 0; i < arr.length; i++ ){
        fn(arr[i], i, arr);
    }
   // return result;
}

// Test
applyToEach([1, 2, 3], x => console.log(x * 2)); // prints 2, 4, 6
