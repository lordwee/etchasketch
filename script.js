const container = document.querySelector(".container");
const containerWidth = container.offsetWidth - 32;
const divWidth = containerWidth / 16;
const divHeigth = containerWidth / 16;
console.log(divWidth, divHeigth);

for (i = 1; i <= 16 * 16; i++) {
    let i = document.createElement("div")
    i.style.border = "1px solid black";
    i.style.width = `${divWidth}px`;
    i.style.height = `${divHeigth}px`;
    
    container.appendChild(i);
}
