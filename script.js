const container = document.querySelector("div.container");
let gridSquares = [];
let sizeButton = document.querySelector("button");
let size = 16;
const containerSize = container.offsetWidth;

function getSize() {
  size = prompt("Size of one side: ");
  if (size > 100) {
    size = prompt("Size must not be bigger than 100, enter new number");
  }
  console.log(size);
  createSquares();
}

function createSquares() {

  // remove the previous squares for resizing
  gridSquares.forEach((square) => container.removeChild(square));
  gridSquares = [];


  for (let i = 0; i < size**2; i++) {
    gridSquares[i] = document.createElement("div");
    gridSquares[i].classList.add("square");
  }

  gridSquares.forEach((square) => {
    container.appendChild(square);
    square.style.minWidth = (containerSize/size) + 'px';
    square.style.minHeight = (containerSize/size) + 'px';
  });

  gridSquares.forEach((square) => square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "blue"
  }));

}


sizeButton.addEventListener("click", getSize);

createSquares();