"use strict";

// What is the DOM?
// Document Object Model: It allows us to access html elements and styles to change them.
// Whatever is in the html document is in the DOM.
// DOM !== JAVASCRIPT

// document.querySelector(".message").textContent = "🎉 Correct Number";
// document.querySelector(".number").textContent = 69;
// document.querySelector(".score").textContent = 420;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Creating an easier way to not repeat code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  // THIS IS FOR WHEN THE PLAYER IS CHECKING IF THE GUESS IS THE SAME AS SECRET NUMBER
  // ALSO IF THE NUMBER IS NOT BELOW 0 AND ABOVE 20
  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess < 0) {
    displayMessage("⛔ Number must be greater than 0");
  } else if (guess > 20) {
    displayMessage("⛔ Number must be 20 or less");
  }

  // When the player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📉 Too High!" : "📈 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You Lost The Game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// RESETTING ALL OF THE LAYOUT WHEN THE AGAIN IS PRESSED
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
