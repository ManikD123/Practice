console.log("Manik Counter")

const decrementButton = document.querySelector("#decrement");
const incrementbutton = document.querySelector("#increment");
const resetButton = document.querySelector("#reset");
const countDisplay = document.querySelector('#count')

let count = 0;

decrementButton.addEventListener("click", function(){
    if(count > 0){
        count--;
        countDisplay.textContent = count;
    }
})

incrementbutton.addEventListener("click", function(){
    count++;
    countDisplay.textContent = count;
})

resetButton.addEventListener('click', function(){
    count = 0;
    countDisplay.textContent = count;
});