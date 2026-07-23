const container = document.querySelector("div.container");
let gridSquares = [];
let sizeButton = document.querySelector("button");
let size = 16;

function getSize() {
  size = prompt("Size of one side: ");
  if (size > 100) {
    size = prompt("Size must not be bigger than 100, enter new number");
  }
  console.log(size);
  createSquares();
}

function createSquares() {

  gridSquares.forEach((square) => container.removeChild(square));
  gridSquares = [];

  container.style.width = 16*size + 'px';

  for (let i = 0; i < size**2; i++) {
    gridSquares[i] = document.createElement("div");
    gridSquares[i].classList.add("square");
  }
  
  gridSquares.forEach((square) => container.appendChild(square));

  gridSquares.forEach((square) => square.addEventListener("mouseenter", () => square.style.backgroundColor = "blue"));

}


sizeButton.addEventListener("click", getSize);

createSquares();