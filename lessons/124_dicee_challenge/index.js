function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function rollTheDie() {
  var die = random(1,6);
  var img = "./images/dice" + num + ".png"
  return [ die, img ]
}

var player1 = ""
var playerImage1 = ""
var image1 = document.querySelectorAll("img")[0];

var player2 = ""
var playerImage2 = ""
var image2 = document.querySelectorAll("img")[1];

[player1, playerImage1] = rollTheDie();
image1.setAttribute("src", playerImage1);

[player2, playerImage2] = rollTheDie();
image2.setAttribute("src", playerImage2);

//If player 1 wins
if (player1 > player2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (player2 > player1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
