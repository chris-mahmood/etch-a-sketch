const gridBox = document.getElementById("divGridBox");
//Create the grid based on user input
let makeGrid = (numSize) => {
    gridBox.innerHTML = (""); //Reset the grid
    for (i = 0; i < numSize * numSize; i++) {
        let gridSquare = document.createElement("div"); //add new square
        gridSquare.classList.add('gridSquare'); //assign css class
        gridBox.appendChild(gridSquare);
    }
    setSquareSize(numSize);
    document.getElementById("divGridBox").style.visibility = "visible";
}
//get user input for grid size
let gridSize = () => {
    let gridParam = '';
    gridParam = prompt("How many Rows and Columns would you like?");
    while (isNaN(gridParam) || gridParam <= 0) {
        alert("Please enter a valid value.")
        gridParam = prompt("How many Rows and Columns would you like?");
    }
    return gridParam;
}

//Set size for grid squares based on user input, to be called in makeGrid
let setSquareSize = (numSize) => {
    let baseSquare = document.getElementsByClassName("gridSquare");
    let i;
    for (i = 0; i < baseSquare.length; i++) {
        baseSquare[i].style.height = Math.trunc((750/ numSize)) + "px";
        baseSquare[i].style.width = Math.trunc((750 / numSize))-1 + "px";
    }
}




btnInput.addEventListener('click', function () { makeGrid(gridSize()) });
