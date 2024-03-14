//get container width to calculate the side length of each square
const gridContainer = document.querySelector("#grid-container");
const containerWidth = gridContainer.getBoundingClientRect().width;
const resetButton = document.querySelector(".rst-btn");
const slider = document.querySelector("#slider");
const sliderText = document.querySelector("#slider-text");
let squareCount = slider.value;

resetButton.addEventListener("click", resetGrid);
slider.addEventListener("input",() => {
    sliderText.textContent = slider.value;
    squareCount = slider.value;
});

createGrid(squareCount);

let mouseDown = false;
document.addEventListener("mousedown", () => {
    mouseDown = true;
});
document.addEventListener("mouseup", () => {
    mouseDown = false;
});


function createSquare(row,sideLength) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style["width"] = `${sideLength}px`;
    square.style["height"] = `${sideLength}px`;
    row.appendChild(square);
    createSquareEventListener(square);

}

//function only allows square to fill when the mouse is held down
function createSquareEventListener(square) {
    square.addEventListener("mouseover", (event) => {
        if (mouseDown === true) {
            const targetSquare = event.target;
            colorBackgroundRandomly(targetSquare);
        }
    });
}

function createRow(squareCount){
    let squareSideLength = Number(containerWidth) / squareCount;
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < squareCount; i++){
        createSquare(row,squareSideLength);
    }
    gridContainer.appendChild(row);
}

function createGrid(rowCount) {
    for (let i = 0; i < rowCount; i++){
        createRow(rowCount);
    }
}

function colorBackgroundRandomly(element){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    element.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function resetGrid(){
    let squares = document.querySelectorAll(".row div");
    squares.forEach((square) => {
        square.remove();
    });
    createGrid(squareCount);
}
