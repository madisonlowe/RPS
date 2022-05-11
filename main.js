/* TASK ONE - THE DOM.
x Refactor the application so that all interactions are through elements in the HTML/on the DOM rather than via confirm, alert, and prompt.
x     Create selectors for the HTML elements on the DOM.
x     Create event listeners on the buttons for rock, paper and scissors.
x     Code so that on click for each move, playerMove is assigned as each move.
x          Fix playerMove variable first. Delete old code.
x There are elements already in the [HTML file](index.html) as a starting point.
x Using the DOM allows our game to be event-driven, so you may want to remove the while loop and instead compute the winner when an event is fired.
x This will be deemed as complete when: 
x     confirm, alert and prompt are no longer used
x     user interaction is handled with elements
x     and all the information is displayed on the page. 

TO PLAY RPS:
x take player input - rock, paper, or scissors
x take computer input - rock, paper or scissors
x compare these two inputs against each other
x decide if computer or player won the game 
x update the score accordingly 

TO SHOW JAVASCRIPT ON THE PAGE 
x show player's most recent 'your move'
x show computer's most recent 'your move'
x show running total of games played, wins, losses and draws 

TASK TWO - VALIDATION.
x Create a username input field
x take in username as a variable in JS
x Use the username the player inputs in the game so that a player can see their name on the page when looking at where the scores are displayed.
- USERNAME CSS REFACTOR IDEAS
-     2. let it be a fade-in-fade-out text box which resets the game on being edited?
-     2. asks user if they want to reset the score, or if they're a new player, on changing the name?
-     2. refactor input bar so that code accounts for no text entered and doesn't send up alert.
x To make it more uniform, restrict the number of characters a username can be to 10 or fewer.
x This will be deemed as complete when the users cannot enter a username longer than 10 characters.
x BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.
x EXTRA BONUS: Make it so that the first letter of the username should be capitalised.

TASK THREE - STYLING.
- add some css.
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
