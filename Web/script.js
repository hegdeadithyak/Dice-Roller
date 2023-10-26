var randomnumber1= Math.floor(Math.random()*6)+1;

var randomDiceImage1= "dice"+randomnumber1+".png";

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+randomnumber2+".png";

var ImageSource1 =  "images/"+randomDiceImage1
var ImageSource2 =  "images/"+randomDiceImage2

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",ImageSource1)

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",ImageSource2)

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }