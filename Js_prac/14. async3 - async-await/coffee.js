function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee') {
            resolve("Order for coffee placed.")
        } else {
            reject("Order cannot be placed.")
        }
    })
}

function processOrder(orderPlaced) {
    return new Promise(function (resolve, reject) {
        resolve(`${orderPlaced} and served to customer!`)
    })
}

function generateBill(processedOrder) {
    return new Promise(function (res, rej) {
        res(`${processedOrder} and bill generated for 100 rupees.`)
    })
}


// placeOrder("coffee")
//     .then(function (orderStatus) {
//         console.log(orderStatus);
//         return orderStatus
//     })
//     .then(function (orderStatus) {
//         let isOrderProcessed = processOrder(orderStatus)
//         console.log(isOrderProcessed);
//         return isOrderProcessed
//     })
//     .then(function (orderIsProcessed) {
//         console.log(orderIsProcessed)
//         return orderIsProcessed
//     })
//     .then(function (orderIsProcessed) {
//         let isBillgenerated = generateBill(orderIsProcessed);
//         console.log(isBillgenerated)
//         return isBillgenerated
//     })
//     .then(function (billGenerated) {
//         console.log(billGenerated)
//     })

//     .catch(function (err) {
//         console.log(err)
//     })

// using async await.
// wrap async await in try catch block.

async function serveOrder() {
    try {
        // BLOCKED until placeorder() returns some value...
        let orderStatus = await placeOrder('coffee')
        let processedOrder = await processOrder(orderStatus)
        let generatedBill = await generateBill(processedOrder)
        console.log('thrid await', generatedBill)

    } catch (err) {
        console.log(err)
    }
}
serveOrder()

