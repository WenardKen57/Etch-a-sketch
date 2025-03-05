const wrapper = document.querySelector("#wrapper");
const container = document.querySelector("#container");

//let gridX = parseInt(prompt("Enter number of grid on the X axis"));
//let gridY = parseInt(prompt("Enter number of grid on the Y axis"));

const gridSquare = document.createElement("div");
const newGridButton = document.createElement("button");

newGridButton.textContent = "Clear and enter a new grid";

newGridButton.setAttribute("id", "newGridButton");
gridSquare.setAttribute("class", "gridSquare");

const squares = [];

newGridButton.addEventListener("click", (event) => {
  const numberOfSquare = parseInt(prompt("Enter the number of squares"));

  if (!isNaN(numberOfSquare) && numberOfSquare > 0 && numberOfSquare <= 100) {
    squares.length = 0;
    container.innerHTML = "";

    for (let i = 1; i <= (numberOfSquare * numberOfSquare); i++) {
      squares.push(gridSquare.cloneNode(true));
    }

    squares.forEach((square) => {
      container.appendChild(square);
    })

  } else {
    return;
  }
});

function randomInteger(max) {
  return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r,g,b];
}

container.addEventListener("mouseover", (event) => {
  let target = event.target;

  if (target.className === "gridSquare") {
    let randomRGB = randomRgbColor();
    target.style.backgroundColor = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`;
  }
});

wrapper.appendChild(newGridButton);
