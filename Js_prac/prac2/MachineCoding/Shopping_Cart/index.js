const catagoriesContainer = document.querySelector("#catagories");

catagoriesContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if(clickedElement.classList.contains("product")){
        const catagory = clickedElement.closest(".catagory").querySelector("h2").textContent;
        const product = clickedElement.textContent;

        console.log(`Clicked on ${product} in the ${catagory} Catagory`)
    }

})