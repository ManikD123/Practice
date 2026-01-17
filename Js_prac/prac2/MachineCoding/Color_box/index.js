const colorpalatte = document.querySelector('#colorPalatte');

colorpalatte.addEventListener("click", (event) => {
    const clickElement = event.target;

    if (clickElement.classList.contains("color-box")) {
        const color = getComputedStyle(clickElement).backgroundColor;
        document.body.style.backgroundColor = color;
    }
});
