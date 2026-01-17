// let myFirstPromise = new Promise(function(resolve, reject){

//     if(1===1){
//         // success case
//         resolve()
//     } else {
//         // failed case
//         reject();
//     }

// })

// let promiseFunc = function (res, rej) {
//     // simulate coin toss delay,
//     setTimeout(function () {
//         const isHeads = Math.random() <= 0.5;
//         if (isHeads) {
//             res("Heads Win!")
//             rej("Tails - (considered fail for this example.)")
//         } else {
//         }
//     }, 1000)
// }

// // CREATION OF A PROMISE
// let coinTossPromise = new Promise(promiseFunc)


// // CONSUME A PROMISE
// coinTossPromise
//     .then(function (result) {
//         console.log("In then block")
//         console.log(result)
//     })
//     .catch(function (err) {
//         console.log("In Catch block")
//         console.log(err)
//     })
//     .finally(function () {
//         console.log("Everything is done...")
//     })


// chaining of promises.

let cleanRoomPromise = function () {
    return new Promise(function (resolve, reject) {
        if (Math.random() < 0.5) {
            resolve('Cleaned The Room');
        } else {
            reject('Failed to clean the room');
        }
    })
}

let makeUpTheCupboardPromise = function (message) {
    return new Promise(function (resolve, reject) {
        if (Math.random() < 0.5) {

            resolve(message + " made up the cupboard..")
        } else {
            reject(message + ' I did not made up my cupboard');
        }
    })
}

let winIceCream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + " then won icecream")
    })
}

cleanRoomPromise()
    .then(function (result) {
        // result = Cleaned the room...
        return makeUpTheCupboardPromise(result)
    })
    .then(function (result) {
        return winIceCream(result)
    })
    .then(function (result) {
        console.log(result)
    })
    .catch(function (err) {
        console.log("CATCH BLOCK")
        console.log(err)
    })
