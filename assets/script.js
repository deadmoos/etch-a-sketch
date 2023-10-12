//define grid value
let defaultGridSize = 16;

document
  .querySelector(".grid-input-btn")
  .addEventListener("click", function () {
    console.log("button clicked");
    const userGridSize = Number(document.querySelector(".grid-input").value);
    defaultGridSize = userGridSize;
    document.querySelector(".sketch-pad").innerHTML = "";
    generateGrid(defaultGridSize);
  });

//define color value
let gridColor = "black";

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
    }
  }
};

generateGrid(16);
