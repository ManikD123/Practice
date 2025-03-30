const catagoriesContainer = document.querySelector("#catagories");
catagoriesContainer.addEventListener('click', (event) => {
    const clickedElement = event.target;

    // check if clicked element is a product

    if(clickedElement.classList.contains("product")){
        const parent = clickedElement.parentElement;
        const category = parent.querySelector("h2").textContent;
        const product= clickedElement.textContent;
        console.log(`Clicked on ${product} in the ${category} category.`)
    }
});