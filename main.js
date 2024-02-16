const colorBtn = document.getElementsByClassName("color-btn");
const colorChage = document.getElementById('colorChange');
const colorArray = ["d8e2dc", "ffe5d9", "ffcad4", "f4acb7", "9d8189"];

let counter = 0;

function change() {
  if (counter === colorArray.length) {
    const createDiv = document.createElement("button");
    createDiv.setAttribute("class","color-btn")
    createDiv.textContent = "Button Created";
    createDiv.style.marginBottom = "20px";
    colorChage.appendChild(createDiv);
    counter = 0;
  }
  if (counter < colorArray.length) {

    for (let i = 0; i < colorArray.length; i++) {
      document.body.style.backgroundColor = "#".concat(colorArray[counter]);
    }
    counter++;
  }
}
