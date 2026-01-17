console.log("start")
Promise.resolve().then(function b() {
    console.log("promise executed")
});
setTimeout(function a() {
    console.log("settimeout executed")
}, 0);

console.log("end")

// start
// end
// promise executed
// settiemout executed

console.log("start")

setTimeout(function a() {
    console.log("settimeout executed")
}, 0);

Promise.resolve().then(function b() {
    console.log("promise executed")
});
console.log("end")
// start
// end
// promise executed
// settiemout executed