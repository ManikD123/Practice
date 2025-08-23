// Write a function isPalindrome that checks if a given string is a palindrome.

function isPalindrome(str) {
    // Your code here
    let rev = str.split("").reverse().join("");
    //console.log(rev);

    if( str ===  rev){
        return true;
    }
     else {
        return false;
     }
}

// Test
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false