let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if (num === 1) {
        computerSelection = 'rock';
    } else if (num === 2) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection){
        return "Tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerWinCount++;
        return (playerSelection + " beats " + computerSelection + ". Player wins the round! The player has won " + playerWinCount + " round(s)!");
    } else {
        computerWinCount++;
        return (computerSelection + " beats " + playerSelection + ". Computer wins the round! The computer has won " + computerWinCount + " round(s)!");
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Pick one: Rock, Paper, or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }

    if (playerWinCount >= 3) {
        alert("The player wins the game!");
    } else if (playerWinCount === computerWinCount) {
        alert("Tie game!");
    } else {
        alert("The computer wins the game!");
    }
}

game();