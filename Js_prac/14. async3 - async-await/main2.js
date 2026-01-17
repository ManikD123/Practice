const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("promise resolved...")
    }, 5000)
})

async function handlePromise() {
    console.log("before await")
    const val1 = await p1;
    console.log("Create impact 1")
    console.log(val1);

    const val2 = await p1;
    console.log("Create impact 2")
    console.log(val2);
}

handlePromise();
// immediate
// before await
// 5s wait
// Create impact 1
// promise resolved...
// Create impact 2
// promise resolved...