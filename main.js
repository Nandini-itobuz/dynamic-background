const colorBtn = document.getElementsByClassName("colorBtn");
const colorChage = document.getElementById('colorChange');
const colorArray = ["590d22", "800f2f", "a4133c", "c9184a", "ff4d6d"];

let counter = 0;

function change() {
  if (counter === colorArray.length) {
    const createDiv = document.createElement("button");
    createDiv.setAttribute("class","colorBtn")
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
