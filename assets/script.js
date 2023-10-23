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
  gridColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  console.log(gridColor);
});

const colorBrush = document.querySelector(".btn-brush");
colorBrush.addEventListener("click", function () {
  gridColor = "black";
});

//random color generator

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
        sketchSquare.style.backgroundColor = gridColor;
      });
      sketchSquare.style.height = `${500 / userGridSize - 2}px`;
    }
  }
  //setting the height to sketchsquare
};

//event listener for input button
const inputButton = document.querySelector(".grid-input-btn");
inputButton.addEventListener("click", function () {
  console.log("button clicked");
  userGridSize = Number(document.querySelector(".grid-input").value);
  document.querySelector(".sketch-pad").innerHTML = "";
  generateGrid(userGridSize);
});

generateGrid(userGridSize);
