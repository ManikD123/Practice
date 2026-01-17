let input = [1, 2, 3]

function square(n) {
    return n * n;
}

const arr = input.map(square);

const arr2 = input.map(function (el) {
    return el * el
})

console.log(arr)
console.log(arr2)

let outputArrWithForEach = []
input.forEach(function (el) {
    outputArrWithForEach.push(el * el)
})
console.log(outputArrWithForEach)

// question:

// You are given a transaction array treat the transaction amount in rupees, and convert those amounts into dollars and conversion rate is also provided to us.

const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrToUsd = 80;

// output = []
let dollarValues = transactions.map(function (trx) {
    return trx / inrToUsd
})
console.log(dollarValues)