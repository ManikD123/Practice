// async function getData() {
//     return 'hello'
// }

// const dataPromise = getData();

// dataPromise.then(function (result) {
//     console.log(result)
// })

// example 2

// const p = new Promise((function (res, rej) {
//     res("promise resolved")
// }))

// async function fetchData() {
//     return p;
// }

// const dataPromise2 = fetchData();
// console.log(dataPromise2); // Promise { <pending> }

// dataPromise2.then(function (result) {
//     console.log(result)
// })

// const pr = new Promise(function (res, rej) {
//     res("pr Promises resolved...")
// })

// async function handlePromise() {
//     const val = await pr;
//     console.log(val)
// }

// handlePromise()

// function fetchData() {
//     pr.then(function (res) {
//         console.log(res)
//     })
// }
//fetchData()


// example 4:

const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("promise resolved...")
    }, 3000)
})

// function fetchData() {
//     p1.then(function (result) {
//         console.log(result)
//     })
//     console.log("Create impact")
// }
// fetchData();
async function handlePromise() {
    console.log("before await")
    const val = await p1; // execution "pause" here.
    console.log(val);
    console.log("Create impact")
}
handlePromise()
console.log("outside")
// before await // immediate
// outside // immediate
// promise resolved... after 7s
// Create impact after 7s