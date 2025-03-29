const grandParent = document.querySelector('#grandParent')
const parent = document.querySelector('#parent')
const child = document.querySelector('#child')

// Event Bubble

// grandParent.addEventListener('click', () => {
//     console.log("Grand parent Click")
// })
// parent.addEventListener('click', () => {
//     console.log("parent Click")
// })
// child.addEventListener('click', () => {
//     console.log(" child Click")
// })

// Event Capturing
// grandParent.addEventListener('click', () => {
//     console.log("Grand parent Click (Capturing)")
// }, true)
// parent.addEventListener('click', () => {
//     console.log("parent Click (Capturing)")
// }, true)
// child.addEventListener('click', () => {
//     console.log(" child Click (Capturing)")
// }, true)

// Stop Propogation
grandParent.addEventListener('click', () => {
    console.log("Grand parent Click")
})
parent.addEventListener('click', (e) => {
    console.log("parent Click")
    e.stopPropagation();
})
child.addEventListener('click', (e) => {
    console.log(" child Click")
    e.stopPropagation();
})