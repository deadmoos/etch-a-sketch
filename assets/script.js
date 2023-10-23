//defaults
let userGridSize = 16;
let gridColor = "black";

//random number generator
let randomNum = function () {
  return Math.floor(Math.random() * 255 + 1);
};

//choose color button clicked
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
  gridColor = "brush";
});

//function that returns a color depending upon color chosen
const colorChosen = function () {
  if (gridColor === "rgb") {
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  } else if (gridColor === "brush") {
    return "gray";
  } else {
    return "black";
  }
};

//function to generate div grid inside .sketch-pad
const generateGrid = function (x) {
  for (i = 0; i < x; i++) {
    let sketchRow = document.createElement("div");
    sketchRow.className = "sketch-row";
    document.querySelector(".sketch-pad").appendChild(sketchRow);

    for (j = 0; j < x; j++) {
      let sketchSquare = document.createElement("div");
      sketchSquare.className = "sketch-square";
      sketchRow.appendChild(sketchSquare);
      sketchSquare.style.backgroundColor = "white";
      sketchSquare.addEventListener("mouseenter", function () {
        sketchSquare.style.backgroundColor = colorChosen();
      });
      sketchSquare.style.height = `${500 / x - 2}px`;
    }
  }
};

//generate grid on user input
const inputButton = document.querySelector(".grid-input-btn");
inputButton.addEventListener("click", function () {
  userGridSize = Number(document.querySelector(".grid-input").value);
  document.querySelector(".sketch-pad").innerHTML = "";
  if (userGridSize > 100 || userGridSize < 5) {
    alert("Enter a Number between 5 and 100");
    generateGrid(16);
  } else generateGrid(userGridSize);
});

//generate default grid
generateGrid(userGridSize);
