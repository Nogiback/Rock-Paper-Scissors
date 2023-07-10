// Declaring and initializing global variables and HTML elements
let playerWinCount = 0;
let computerWinCount = 0;
const startGameBtn = document.querySelector("#start-game-btn");
const results = document.querySelector(".results");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//Event listener for start game button, resets game once 5 rounds has been won by player or computer
startGameBtn.addEventListener("click", function() {
    playerWinCount = 0;
    computerWinCount = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    results.textContent = "Select Rock, Paper, or Scissors to start the game! The first to win 5 rounds, wins the game!"
});

//Event listeners for the RSP buttons to start each round
rockBtn.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    playRound('ROCK', computerSelection);
});


paperBtn.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    playRound('PAPER', computerSelection);
});

scissorsBtn.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    playRound('SCISSORS', computerSelection);
});

//Function for randomizing computer's selection out of rock, paper or scissors
function getComputerChoice(){
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomizeChoice = Math.floor(Math.random() * choices.length);
    const computerSelection = choices[randomizeChoice];

    return computerSelection;
}


function playRound(playerSelection, computerSelection) {

    playerSelection =playerSelection.toUpperCase();

    //Conditionals for the game based on computer and player selections, displays round results and increments round win totals
    if (playerSelection === computerSelection){
        results.textContent = `The Player and Computer both selected ${playerSelection}. Tie!`;
    } else if (
      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        playerWinCount++;
        results.textContent = (`The Player selected ${playerSelection}. The Computer selected ${computerSelection}. The Player wins the round! The Player has won ${playerWinCount} round(s)!`);
    } else {
        computerWinCount++;
        results.textContent = (`The Player selected ${playerSelection}. The Computer selected ${computerSelection}. The Computer wins the round! The Computer has won ${computerWinCount} round(s)!`);
    }

    //Display results of game and disables RSP buttons, changes start game button text
    if (playerWinCount === 5) {
        results.textContent = "The Player has won 5 rounds. The Player wins the game!";
        startGameBtn.textContent = "START NEW GAME";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerWinCount === 5) {
        results.textContent = "The Computer has won 5 rounds. The Computer wins the game!";
        startGameBtn.textContent = "START NEW GAME";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

}