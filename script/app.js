const container = document.querySelector("#container");

const gridSquare = document.createElement("div");

gridSquare.setAttribute("class", "gridSquare");

const squares = [];

for (let i = 1; i <= 16; i++) {
  squares.push(gridSquare.cloneNode(true));
}

squares.forEach((square) => {
  container.appendChild(square);
})