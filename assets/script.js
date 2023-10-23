let userGridSize = 16;
//define color value
let gridColor = "black";
//random number generator
let randomNum = function () {
  return Math.floor(Math.random() * 255 + 1);
};

//choose color
const colorBlack = document.querySelector(".btn-black");
colorBlack.addEventListener("click", function () {
  gridColor = "black";
});

const colorRGB = document.querySelector(".btn-rgb");
colorRGB.addEventListener("click", function () {
  gridColor = "rgb";
});

const colorBrush = document.querySelector(".btn-brush");
colorBrush.addEventListener("click", function () {
  gridColor = "progressive";
});

let colorChosen = function () {
  if (gridColor === "rgb") {
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  } else if (gridColor === "progressive") {
    console.log(gridColor);
  } else {
    return "black";
  }
};

//color that progressively gets lighter

//generate container and div inside .sketch-pad
const generateGrid = function (x) {
  for (i = 0; i < x; i++) {
    let sketchRow = document.createElement("div");
    sketchRow.className = "sketch-row";
    document.querySelector(".sketch-pad").appendChild(sketchRow);

    for (j = 0; j < x; j++) {
      let sketchSquare = document.createElement("div");
      sketchSquare.className = "sketch-square";
      sketchRow.appendChild(sketchSquare);

      sketchSquare.addEventListener("mouseenter", function () {
        sketchSquare.style.backgroundColor = colorChosen();
      });
      sketchSquare.style.height = `${500 / x - 2}px`;
    }
  }
  //setting the height to sketchsquare
};

//event listener for input button
const inputButton = document.querySelector(".grid-input-btn");
inputButton.addEventListener("click", function () {
  userGridSize = Number(document.querySelector(".grid-input").value);
  document.querySelector(".sketch-pad").innerHTML = "";
  if (userGridSize > 100) {
    alert("Enter a Number less than 100");
    generateGrid(16);
  } else generateGrid(userGridSize);
});

generateGrid(userGridSize);
