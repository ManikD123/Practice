const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("promise1 resolved...")
    }, 10000)
})
const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("promise2 resolved...")
    }, 5000)
})
async function handlePromise() {
    console.log("before await")
    console.log(new Date())
    const val2 = await p2;
    console.log("Create impact 2")
    console.log(val2);
    console.log(new Date())

    const val1 = await p1;
    console.log("Create impact 1")
    console.log(val1);
    console.log(new Date())
}
/**
 * 
before await
2025-02-28T03:40:56.458Z
Create impact 2
promise2 resolved...
2025-02-28T03:41:01.451Z
Create impact 1
promise1 resolved...
2025-02-28T03:41:06.443Z
 */

handlePromise();
// ...... 
// before await immediatey
// Create impact 1  // after 10s
// promise1 resolved... //after 10s
// Create impact 2 // immedialuy ince 10s are passed
// promise2 resolved... // immedialuy ince 10s are passed