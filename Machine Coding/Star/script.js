const star_cont = document.querySelector(".star_container");
const counter = document.querySelector("#Count");

star_cont.addEventListener("click", (event) => {
    const currentStar = event.target;
    //console.log(currentStar);
    
    const rating = parseInt(currentStar.getAttribute("idx"));
    
    counter.innerText = rating;
    console.log(rating);
    changestar(rating);

});

function changestar(rating){
    const starattr = document.querySelectorAll(".star")
    for( let i = 0; i < starattr.length; i++ ){
        starattr[i].classList.remove("yellow");
    }
    for( let i = 0; i < rating; i++){
        starattr[i].classList.add("yellow");
    }
};

star_cont.addEventListener("mouseover", (event => {
    const currentStar = event.target;
    const rating = parseInt(currentStar.getAttribute("idx"));
    changestar(rating);
}))

star_cont.addEventListener("mouseleave", (event => {
    changestar(parseInt(counter.innerText));
}))
