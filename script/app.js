const container = document.querySelector("#container");

const gridSquare = document.createElement("div");

gridSquare.setAttribute("class", "gridSquare");

const squares = [];

for (let i = 1; i <= 256; i++) {
  squares.push(gridSquare.cloneNode(true));
}

container.addEventListener("mouseover", (event) => {
  let target = event.target;
  console.log(target.className)
  if (target.className === "gridSquare") {
    target.style.backgroundColor = "red";
  }
});

squares.forEach((square) => {
  container.appendChild(square);
})