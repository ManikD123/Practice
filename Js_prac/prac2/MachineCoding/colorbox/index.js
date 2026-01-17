let box = document.querySelectorAll('.card');


for( let i = 0; i < box.length; i++ ){
    box[i].addEventListener('dblclick', function(e){
        console.log("clicked")
        const color = e.target.getAttribute('data-color')

        e.currentTarget.classList.add(color)
        e.currentTarget.setAttribute('data-color', 'used')
        

    })
    }
const btn1 = document.querySelector(".btn")

btn1.addEventListener('click', function(){
    console.log("clicked")
})
btn1.addEventListener('click', function(){
    console.log("clicked")
})
const input = document.getElementById("name");
input.value = "Rahul";

console.log(input.getAttribute("value"));

const boxes = document.getElementsByClassName("box");

document.body.innerHTML += '<div class="box"></div>';

console.log(boxes.length);

//     const div = document.createElement("div");
// div.innerHTML = "<p>Hello</p>";
// document.body.appendChild(div)
// console.log(div.textContent);
// console.log(div.innerHTML);
