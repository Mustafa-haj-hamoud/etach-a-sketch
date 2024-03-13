//get container width to calculate the side length of each square
const containerWidth = document.querySelector("#container").getBoundingClientRect().width;
const gridContainer = document.querySelector("#grid-container");

function createSquare(row,sideLength) {
    const square = document.createElement("div");
    square.textContent = "12";
    square.classList.add("square");
    square.style.minHeight=`${sideLength}px`;
    square.style["width"] = `${sideLength}px`;
    square.style["height"] = `${sideLength}px`;
    row.appendChild(square);
}

//Create the full grid
function createRow(squareCount){
    let squareSideLength = Number(containerWidth) / squareCount;
    const row = document.createElement("div");
    row.classList.add("row");
    //implement function to create a square with specified dimension
    //temp code below this line
    for (let i = 0; i < squareCount; i++){
        createSquare(row,squareSideLength);
    }
    //temp code ends here
    
    gridContainer.appendChild(row);
}

createRow(16);
//add event listeners to each square in the grid