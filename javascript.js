//get container width to calculate the side length of each square
const gridContainer = document.querySelector("#grid-container");
const containerWidth = gridContainer.getBoundingClientRect().width;


function createSquare(row,sideLength) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style["min-width"] = `${sideLength}px`;
    square.style["min-height"] = `${sideLength}px`;
    square.style["width"] = `${sideLength}px`;
    square.style["height"] = `${sideLength}px`;
    row.appendChild(square);
}

//Create the full grid
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

createGrid(16);
//add event listeners to each square in the grid