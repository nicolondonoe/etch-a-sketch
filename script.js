const container = document.querySelector("div.container");
let gridSquares = [];
let borderSquares = [];
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

function randomColor() {
  let rgbArray = [];

  for (let i = 0; i < 3; i++) {
    rgbArray[i] = Math.floor(Math.random()*256);
  }

  return "rgb("+rgbArray[0]+","+rgbArray[1]+","+rgbArray[2]+")";
}

function darkenSquare(square) {
  if (Number(square.style.opacity) < 1) {
    square.style.opacity = Number(square.style.opacity)+0.1;
    // console.log("increased 1 opacity");
    // console.log(square.style.opacity);
  }
  else {
  }
}

function createSquares() {

  // remove the previous squares for resizing
  document.querySelectorAll(".square").forEach((element) => element.remove());
  borderSquares.forEach((square) => container.removeChild(square));
  gridSquares = [];
  borderSquares = [];

  for (let i = 0; i < size**2; i++) {
    gridSquares[i] = document.createElement("div");
    gridSquares[i].classList.add("square");
    borderSquares[i] = document.createElement("div");
    borderSquares[i].classList.add("borderSquare");
    borderSquares[i].appendChild(gridSquares[i]);
  }

  borderSquares.forEach((square) => {
    container.appendChild(square);
    square.style.minWidth = ((containerSize/size)) + 'px';
    square.style.minHeight = ((containerSize/size)) + 'px';
  });

  gridSquares.forEach((square) => {
    square.style.minWidth = (containerSize/size)-2 + 'px';
    square.style.minHeight = (containerSize/size)-2 + 'px';
  });

  gridSquares.forEach((square) => square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = randomColor();
    darkenSquare(square);
  }));
  
}

sizeButton.addEventListener("click", getSize);

createSquares();



