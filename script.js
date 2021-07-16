document.querySelector("h1").innerHTML = "Refresh me";
let num1 = Math.floor(Math.random() * 6) + 1;
var imageDiceNum1 = "dice" + num1 + ".png";
var imageDiceSource = "images/" + imageDiceNum1;
var image1 = document.querySelector(".img1");
image1.setAttribute("src", imageDiceSource);

let num2 = Math.floor(Math.random() * 6) + 1;
var imageDiceNum2 = "dice" + num2 + ".png";
var imageDiceSource2 = "images/" + imageDiceNum2;
document.querySelector(".img2").setAttribute("src", imageDiceSource2);

if (num1 === num2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (num1 < num2) {
  document.querySelector("h1").innerHTML = "Player 2 is the winner.";
} else document.querySelector("h1").innerHTML = "Player 1 is the winner.";
