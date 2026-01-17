console.log(50)

console.log("manik Dolai")

// for(let i = 0; i < 10; i++ ){
//     console.log(i);
// }


arr = ["manik", "red", "blue"]
console.log(arr)
arr.push("pink")
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)
arr.unshift("pink")
console.log(arr)

let text = "sonali"

console.log(text.toUpperCase())

console.log(text.toLowerCase())

let numbers =  [2, 5, 8];
let square = numbers.map(num => num*num)
console.log(square)

let even = numbers.filter( num => num % 2 == 0)
console.log(even)
let odd = numbers.filter( num => num % 2 != 0 )
console.log(odd)

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  console.log(item.textContent, index);
  item.style.color = "blue";
});
