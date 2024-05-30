var started = false;
var level = 0;

var buttonColors = [ "red", "blue", "green", "yellow" ];
var gamePattern = [];
var userPattern = [];

$(document).keydown(function(){
  if (!started) {
    $("#level-title").text("Level "+level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChoice = $(this).attr("id");
  userPattern.push(userChoice);
  playSound(userChoice);
  animatePress(userChoice);
  checkAnswer(userPattern.length-1);
});

function nextSequence() {
  userPattern = [];
  level++;
  $("#level-title").text("Level "+level);

  var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)]
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(color) {
  var audio = new Audio("./sounds/"+color+".mp3");
  audio.play();
}

function animatePress(color) {
  $("#"+color).addClass("pressed");
  setTimeout(function(){$("#"+color).removeClass("pressed");}, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(function() {nextSequence();}, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {$("body").removeClass("game-over");}, 200);
    startOver();
  }
}
