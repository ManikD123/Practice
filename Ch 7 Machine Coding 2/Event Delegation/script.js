const categoryContainer = document.getElementById("catagories");
categoryContainer.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if(clickedElement.classList.contains("product")){
        const parent = clickedElement.parentElement;
        const category = parent.querySelector("h2").textContent;
        const product = clickedElement.textContent;

        console.log(`clicked on ${product} in the ${category} catagory.`);
    }
})