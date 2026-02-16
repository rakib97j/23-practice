console.log("check");
// option 2 add event handle
function makeWhite() {
  document.body.style.backgroundColor = "white";
}
function makeBlack() {
  document.body.style.backgroundColor = "black";
}
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

function font() {
  document.body.style.backgroundColor = "green";
}
// 3rd option
const blueBtn = document.getElementById("blue-btn");
blueBtn.onclick = function clickOn() {
  document.body.style.backgroundColor = "purple";
};
// 3rd option
const makeGray = document.getElementById("gray");

makeGray.onclick =clickGray;

function clickGray(){
    document.body.style.backgroundColor =('gray')
}
