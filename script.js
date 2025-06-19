const container = document.querySelector(".container");
const containerWidth = container.offsetWidth - 2;
const divWidth = containerWidth / 16;
const divHeigth = containerWidth / 16;
let boxes = [];
// Default GRID when page opened
for (i = 1; i <= 16 * 16; i++) {
    let element = document.createElement("div");
    element.style.width = `${divWidth}px`;
    element.style.height = `${divHeigth}px`;
    container.appendChild(element);
    boxes.push(element);
}
changeColor();

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `${red}, ${green}, ${blue}`
    
}
function changeColor() {
    boxes.forEach((item) => {
        const boxColor = randomColor();
        let opacity = 0.1;
        item.addEventListener('mouseenter', function () {
            item.style.backgroundColor = `rgb(${boxColor}, ${opacity}`; 
            opacity += 0.1;
        })
    })
}

function getNewGrid () {
    let input = prompt("How many boxes do you want on each side(between 16 and 100)?"); 
    while ( input < 16 || input > 100 ) {
        if (input === null) {
            break;
        } else {
            input = prompt("The number must be between 16 and 100");
        }
    } 
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    newGrid(input);
}

const btn = document.querySelector("button");
btn.addEventListener("click", getNewGrid);
// New Grid based on user input
function newGrid(input) {
    const newContainerWidth = container.offsetWidth - 2;
    const newDivWidth = newContainerWidth / input;
    const newDivHeigth = newContainerWidth / input;
    for (i = 1; i <= input * input; i++) {
        let element = document.createElement("div")
        element.style.width = `${newDivWidth}px`;
        element.style.height = `${newDivHeigth}px`;
        container.appendChild(element);
        boxes.push(element);
    } 
    changeColor();
}

