// declare variables for score keeping

let humanScore = 0
let computerScore = 0

// get computer choice

function getComputerChoice(){
    let random = Math.random();
    if (random <= 0.333) {
        return "rock";
    } else if (random <= 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

// get player choice

const btnContainer = document.querySelector(".buttons-container")
const results = document.querySelector(".results");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const playerOptions = [rockBtn, paperBtn, scissorsBtn];
playerOptions.forEach(option => {
    option.addEventListener('click', function(e) {
        if (e.target === rockBtn){
            playRound("rock", getComputerChoice());
        } else if (e.target === paperBtn) {
            playRound("paper", getComputerChoice());
        } else {
            playRound("scissors", getComputerChoice());
        }
    })
})

// logic to play a round

function playRound (humanChoice, computerChoice){
    if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            results.innerText = ("You lose! Paper beats Rock.");
            computerScore +=1;
            
        }
        else if (computerChoice === "scissors"){
            results.innerText = ("You win! Rock beats Scissors.");
            humanScore += 1;
        }
        else {
            results.innerText = ("It's a tie, you both chose Rock");
        }
    } 
    else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            results.innerText = ("You win! Paper beats Rock.");
            humanScore += 1;
        }
        else if (computerChoice === "paper"){
            results.innerText = ("It's a tie, you both chose Paper.");
        } 
        else{
            results.innerText = ("You lose! Scissors beats Paper.");
            computerScore += 1;
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            results.innerText = ("You lose! Rock beats Scissors.");
            computerScore += 1;
        }
        else if (computerChoice === "paper"){
            results.innerText = ("You win! Scissors beats Paper.");
            humanScore += 1;
        }
        else {
            results.innerText = ("It's a tie, you both chose Scissors");
        }
    }
    let scores = document.createElement('div');
    scores.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`;
    results.appendChild(scores);
    if (humanScore === 5){
        endGame('human');
    } else if (computerScore === 5) {
        endGame('computer');
    }
}

function endGame(winner){
    for (let i = 0; i < playerOptions.length; i++){
        playerOptions[i].disabled = true;
    }
    let retryBtn = document.createElement('button')
    retryBtn.textContent = "Retry"
    retryBtn.addEventListener('click', () =>{
        humanScore = 0;
        computerScore = 0;
        results.removeChild(retryBtn);
        results.innerText = ("First to 5 points wins!")
        for (let i = 0; i < playerOptions.length; i++){
            playerOptions[i].disabled = false;
        }
    })
    if (winner === 'human'){
        results.innerText = (`You won the game! ${humanScore} points to ${computerScore}. Well done!`);
    } else {
        results.innerText = (`You lost the game! ${humanScore} points to ${computerScore}. Better luck next time!`);
    }
    results.appendChild(retryBtn);
}