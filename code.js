const containerEl = document.querySelector(".container");

for (let index = 0; index < 40; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container"),
    containerEl.appendChild(colorContainer);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();
function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColor = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColor;
        colorContainerEl.innerHTML = "#" + newColor;
    })
}
function randomColor() {
    const char = "0123456789abcdef";
    const colorCodeLenght = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * char.length);
        colorCode += char.substring(randomNum, randomNum + 1);
    }
    return colorCode;
    
}