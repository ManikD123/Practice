let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// get even nos.

let evenNumbers = arr.filter(function (el) {
    return el % 2 === 0
})

console.log(evenNumbers)

// You are given a transaction array, 
// and use a filter to find the positive transaction amounts

const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];

let positives = transactions.filter(function (elem) {
    return elem > 0
})

console.log(positives)

