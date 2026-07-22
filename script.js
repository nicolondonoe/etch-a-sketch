const container = document.querySelector("div.container");
let gridSquares = [];

for (let i = 0; i < 256; i++) {
  gridSquares[i] = document.createElement("div");
  gridSquares[i].classList.add("square");
}

gridSquares.forEach((square) => container.appendChild(square));