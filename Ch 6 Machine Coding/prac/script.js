const grandParent = document.querySelector('#grandParent')
const parent = document.querySelector('#parent')
const child = document.querySelector('#child')

grandParent.addEventListener('click', () => {
    console.log("Grand parent Click")
})
parent.addEventListener('click', () => {
    console.log("parent Click")
})
child.addEventListener('click', () => {
    console.log(" child Click")
})