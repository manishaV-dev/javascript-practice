"use strict";

// Selecting element
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

//Staring Condition

let scores, activePlayer, currentScore, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();

//swicth player function

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

//rolling dice functionality

btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice according to number
    diceEl.classList.remove("hidden");
    //set the path of image and image name will be ex images/dice-1/2/6
    diceEl.src = `images/dice-${dice}.png`;

    // 3. Check for rolled 1: if true,
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player

      //after getting 1 current score will be 0 of current player , then switch to another player

      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0.classList.toggle("player--active");
      // player1.classList.toggle("player--active");

      //DRY CODE SO WE CREATE A SWITCH PLAYER FUNCTION

      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's Score

    scores[activePlayer] += currentScore;
    //score[player1] = score[player1] + currentscore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player score >= 100

    if (scores[activePlayer] >= 100) {
      playing = false;

      diceEl.classList.add("hidden");
      //finish the game if score is >-100
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } // 3.switch to the next player
    else {
      switchPlayer();
    }
  }
});

//reset the game

btnNew.addEventListener("click", init);
