//Getting computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

//Getting human choice
function getHumanChoice() {
    let input = prompt("Enter your choice: Rock, Paper, or Scissors");
    return prompt('rock, paper, or scissors');
}
console.log(getHumanChoice());

//Play one round
function playRound(humanSelection, computeSelection) {
    humanSelection = humanSelection.toLowerCase();

    if (humanSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors")||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win! " + humanSelection + "beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + humanSelection;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); 

//Play 5 rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = prompt("Choose rock, paper, or scissoors");
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            humanScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
        
        if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
        } else if (humanScore < computerScore) {
        console.log(" Sorry, you lost the game.");
        } else {
        console.log("It's a tie! The game ends in a draw.");
        }
    }
}     
playGame();