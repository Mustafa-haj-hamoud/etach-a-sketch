//get container width to calculate the side length of each square
const gridContainer = document.querySelector("#grid-container");
const containerWidth = gridContainer.getBoundingClientRect().width;
let mouseDown = false;


function createSquare(row,sideLength) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style["min-width"] = `${sideLength}px`;
    square.style["min-height"] = `${sideLength}px`;
    square.style["width"] = `${sideLength}px`;
    square.style["height"] = `${sideLength}px`;
    row.appendChild(square);
    createSquareEventListener(square);

}

//function only allows square to fill when the mouse is held down
function createSquareEventListener(square) {
    document.addEventListener("mousedown", () => {
        mouseDown = true;
    });
    document.addEventListener("mouseup", () => {
        mouseDown = false;
    });
    square.addEventListener("mouseover", (event) => {
        if (mouseDown === true) {
            const targetSquare = event.target;
            targetSquare.style.backgroundColor = "black";
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

createGrid(40);


//WORK PLAN:
//add "mouseover" event listeners to all squares upon creation
//create function to change the background colour of the square to black