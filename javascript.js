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

    square.addEventListener("mouseover", (event) => {
        const targetSquare = event.target;
        targetSquare.style.backgroundColor = "black";
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

createGrid(16);


//WORK PLAN:
//add "mouseover" event listeners to all squares upon creation
//create function to change the background colour of the square to black