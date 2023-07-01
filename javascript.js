let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if (num === 1) {
        computerSelection = "rock";
    } else if (num === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
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

    let currentRound = true;
    let roundNum = 1;

    while (currentRound) {
        let playerSelection = prompt("Pick one: Rock, Paper, or Scissors?");

        if ((playerSelection.toLowerCase() == "rock") ||
            (playerSelection.toLowerCase() == "paper") ||
            (playerSelection.toLowerCase() == "scissors")) {
            playerSelection = playerSelection.toLowerCase();
            let computerSelection = getComputerChoice();
            alert(playRound(playerSelection, computerSelection));
        } else {
            alert("Invalid entry. Please pick Rock, Paper, or Scissors.");
            continue;
        }

        if (roundNum == 5) {
            currentRound = false;
        } else {
            roundNum++;
        }

    }

    if (playerWinCount > computerWinCount) {
        alert("The player won " + playerWinCount + " out of 5 rounds. The player wins the game!");
    } else if (playerWinCount < computerWinCount) {
        alert("The computer won " + computerWinCount + " out of 5 rounds. The computer wins the game!");
    } else if (playerWinCount === computerWinCount) {
        alert("The player and computer each won " + playerWinCount + " round(s). Tie game!");
    }
}

game();