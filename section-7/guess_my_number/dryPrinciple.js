"use strict";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let secretNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number...";
    displayMessage("⛔ No Number...");
  } else if (guess === secretNum) {
    // document.querySelector(".message").textContent = "🎉 Correct Number...";
    displayMessage("🎉 Correct Number...");

    //we want to if guess is current the secret number is show
    document.querySelector(".number").textContent = secretNum;
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").disabled = true;
    document.querySelector(".check").style.cursor = "not-allowed";

    //step last- if current score is greater than the highscore, then that number will be the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? "😲 Too High..." : "😥 Too Low...");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😭 You lost the Game...");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff3838";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage("🙄 Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").disabled = false;
  document.querySelector(".check").style.cursor = "pointer";
});
