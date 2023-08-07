"use strict";
// console.log(document.querySelector(".message")); //<p class="message">Start guessing...</p>

// console.log(document.querySelector(".message").textContent); //Start guessing..

//DOM Manipulation

// document.querySelector(".message").textContent = "🎊 Game Over..."; // Start guessing.. to 🎊 Game Over on web page

// document.querySelector(".number").textContent = 23;

// document.querySelector(".score").textContent = 30;

// document.querySelector(".highscore").textContent = 60;

// document.querySelector(".guess").value = 14;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//add an event and get the value from input

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector(".message").textContent = "⛔ No Number";
//   }
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start coding for game

//step 1
//set max number to 20
let secretNum = Math.trunc(Math.random() * 20) + 1;

//here we use let not const because score value is always changing as we play game, and if we use CONST here than it can not change the value
let score = 20;

//let set the highscore to 0

let highScore = 0;

//we do not use here because it show number always, so it has to move in when guess is correct
// document.querySelector(".number").textContent = secretNum;

//step 1
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //if there is no guess, no input number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number...";
  }

  //guess is correct
  else if (guess === secretNum) {
    document.querySelector(".message").textContent = "🎉 Correct Number...";
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
  }

  //When guess is to high
  else if (guess > secretNum) {
    //step2-
    if (score > 1) {
      document.querySelector(".message").textContent = "😲 Too High...";
      // score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😭 You lost the Game...";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff3838";
    }
  }

  //When guess is to low
  else if (guess < secretNum) {
    //step2-
    if (score > 1) {
      document.querySelector(".message").textContent = "😥 Too Low...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😭 You lost the Game...";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff3838";
    }
  }
});

//step3-
//Implement Again Functionality, when we click all property should restore as they are at the starting of the game, RESET

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "🙄 Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").disabled = false;
  document.querySelector(".check").style.cursor = "pointer";
});
