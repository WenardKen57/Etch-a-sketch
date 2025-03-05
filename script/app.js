const container = document.querySelector("#container");

const gridSquare = document.createElement("div");

gridSquare.textContent = "Hello";

gridSquare.setAttribute("id", "gridSquare");
gridSquare.setAttribute("style", "border: 1px solid black;")

const squares = [];

for (let i = 0; i <= 16; i++) {
  squares.push(gridSquare.cloneNode(true));
}

squares.forEach((square) => {
  container.appendChild(square);
})