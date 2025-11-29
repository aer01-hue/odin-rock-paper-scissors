let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const divAnswers = document.querySelector(".answers");
const scoreDisplay = document.createElement("div");
scoreDisplay.id = "score";
scoreDisplay.textContent = `Score: Player ${playerScore} | Computer ${computerScore}`;
divAnswers.parentNode.insertBefore(scoreDisplay, divAnswers);

// Get the Computer's Choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Play Round and Update Score
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    let resultMessage;

    if (player === computer) {
        resultMessage = "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        resultMessage = `You win! ${player} beats ${computer}`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computer} beats ${player}`;
    }

    // Update the On-Screen Score Display
    scoreDisplay.textContent = `Score: Player ${playerScore} | Computer ${computerScore}`;
    divAnswers.textContent = resultMessage;

    return resultMessage;
}

// Game Function with Win Condition Check
function game(playerChoice) {
    if (playerScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
        return;
    }

    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);

    // Check for Winner After the Round
    if (playerScore === MAX_SCORE || computerScore === MAX_SCORE) {
        let finalMessage;
        if (playerScore > computerScore) {
            finalMessage = "**GAME OVER!** You are the grand winner!";
        } else {
            finalMessage = "**GAME OVER!** The Computer wins!";
        }

        divAnswers.textContent = finalMessage; //Display final result
    }
}

// Event Listeners
function addChoiceListeners() {
    rock.addEventListener("click", () => game("rock"));
    paper.addEventListener("click", () => game("paper"));
    scissors.addEventListener("click", () => game("scissors"));
    clearBtn.addEventListener("click", resetGame);

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = "Score:"
}
}

// Clear Button
const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.id ="clear-btn";
document.body.appendChild(scoreDisplay);
document.body.appendChild(clearBtn);

// Initialize the game listeners
addChoiceListeners();

