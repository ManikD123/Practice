/*Beginner (1–5)

Write a function sumArray that takes an array of numbers and returns the sum of all elements.

Write a function findMax that returns the largest number in an array.

Write a function reverseString that takes a string and returns the reversed string.

Write a function isPalindrome that checks if a given string is a palindrome.

Write a function filterGreaterThan(arr, n) that returns only numbers greater than n.


// Q1 
function sumArray(arr) {
    // Your code here
    return arr.reduce(function (acc, curr){
        return acc = acc + curr;
    },0) 
}

// Test
console.log(sumArray([1, 2, 3, 4, 5])); // 15


function findMax(arr) {
    // Your code here
    return Math.max(...arr);
}

// Test
console.log(findMax([1, 9, 3, 7, 5])); // 9


function reverseString(str) {
    // Your code here
    return str.split("").reverse().join("");
}

// Test
console.log(reverseString("hello")); // "olleh"


function isPalindrome(str) {
    // Your code here
    let rev = str.split("").reverse().join("");
    if( str === rev ){
        return true;
    }else {
     return false;
    }
   
}

// Test
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

Write a function filterGreaterThan(arr, n) that returns only numbers greater than n.

*/

function filterGreaterThan(arr, n) {
    // Your code here
    let result = [];
    for( let i = 0; i < arr.length; i++ ){
        if( arr[i] > n ){
            result.push(arr[i])
        }
    }
    return result;
}

// Test
console.log(filterGreaterThan([1, 5, 10, 15], 7)); // [10, 15]
