/* 
- REFACTOR IDEAS
- let it be a fade-in-fade-out text box which resets the game on being edited?
- asks user if they want to reset the score, or if they're a new player, on changing the name?
- refactor input bar so that code accounts for no text entered and doesn't send up alert.
*/

let score = {
  gamesPlayed: 0,
  wins: 0,
  draws: 0,
  losses: 0,
};

// Selectors for the HTML DOM manipulation.
let rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", playerRock);
let paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", playerPaper);
let scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", playerScissors);
let usernameField = document.querySelector("#username-input");
usernameField.addEventListener("blur", setUsername);
let header = document.querySelector("#welcome-username");

let gamesPlayedDisplay = document.querySelector("#games");
let winsDisplay = document.querySelector("#wins");
let lossesDisplay = document.querySelector("#losses");
let drewDisplay = document.querySelector("#draws");
let welcomeUsername = document.querySelector("#welcome-username");
let yourMoveDisplay = document.querySelector("#your-move");
let computerMoveDisplay = document.querySelector("#computer-move");

// Functions for the game.
function playerRock() {
  yourMoveDisplay.textContent = "Rock!";
  let computerMove = getComputerMove();
  if (computerMove === "rock") {
    computerMoveDisplay.textContent = "Rock!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.draws++;
    drewDisplay.textContent = `Draws: ${score.draws}`;
    return 0;
  } else if (computerMove === "paper") {
    computerMoveDisplay.textContent = "Paper!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.losses++;
    lossesDisplay.textContent = `Losses: ${score.losses}`;
    return -1;
  } else if (computerMove === "scissors") {
    computerMoveDisplay.textContent = "Scissors!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.wins++;
    winsDisplay.textContent = `Wins: ${score.wins}`;
    return 1;
  }
}

function playerPaper() {
  yourMoveDisplay.textContent = "Paper!";
  let computerMove = getComputerMove();
  if (computerMove === "paper") {
    computerMoveDisplay.textContent = "Paper!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.draws++;
    drewDisplay.textContent = `Draws: ${score.draws}`;
    return 0;
  } else if (computerMove === "scissors") {
    computerMoveDisplay.textContent = "Scissors!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.losses++;
    lossesDisplay.textContent = `Losses: ${score.losses}`;
    return -1;
  } else if (computerMove === "rock") {
    computerMoveDisplay.textContent = "Rock!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.wins++;
    winsDisplay.textContent = `Wins: ${score.wins}`;
    return 1;
  }
}

function playerScissors() {
  yourMoveDisplay.textContent = "Scissors!";
  let computerMove = getComputerMove();
  if (computerMove === "scissors") {
    computerMoveDisplay.textContent = "Scissors!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.draws++;
    drewDisplay.textContent = `Draws: ${score.draws}`;
    return 0;
  } else if (computerMove === "rock") {
    computerMoveDisplay.textContent = "Rock!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.losses++;
    lossesDisplay.textContent = `Losses: ${score.losses}`;
    return -1;
  } else if (computerMove === "paper") {
    computerMoveDisplay.textContent = "Paper!";
    score.gamesPlayed++;
    gamesPlayedDisplay.textContent = `Games: ${score.gamesPlayed}`;
    score.wins++;
    winsDisplay.textContent = `Wins: ${score.wins}`;
    return 1;
  }
}

function getComputerMove() {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 0.33) {
    return "rock";
  }
  if (randomNumber >= 0.33 && randomNumber < 0.66) {
    return "paper";
  }
  if (randomNumber >= 0.66 && randomNumber < 1) {
    return "scissors";
  }
}

function setUsername() {
  let letters = /^[A-Za-z]+$/;
  if (usernameField.value.match(letters)) {
    let username = usernameField.value;
    let capUsername = username.charAt(0).toUpperCase() + username.slice(1);
    header.textContent = `Welcome ${capUsername}!`;
    return true;
  } else {
    return false;
  }
}

// DARK MODE BUTTON CODE.
let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", darkMode);

let h1 = document.querySelector("h1");

function darkMode() {
  let body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    h1.textContent = "🪨 🗞️ ✂️";
  } else {
    body.classList.toggle("dark-mode");
    h1.textContent = "✨ 🌝 💫";
  }
}
