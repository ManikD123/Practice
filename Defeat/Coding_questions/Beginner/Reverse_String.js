// Q: Write a function reverseString that takes a string and returns the reversed string.

function reverseString(str) {
    // Your code here
    return str.split("").reverse().join("");
}

// Test
console.log(reverseString("hello")); // "olleh"