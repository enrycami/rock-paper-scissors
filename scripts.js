// rock paper scissors against the computer
// get the computer choice
// get the player choice
// compare the two choice and determine a winner

// declare variable for score keeping

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
        return "scissor";
    }
}

// get player choice

function getHumanChoice(){
    let humanChoice = prompt("Please make your choice").toLowerCase(); // get player choice from prompt and convert it to lower case
    console.log(humanChoice);
    return humanChoice;
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") { // check that the player choice is valid
        console.log("Invalid choice. Only rock, paper or scissors are allowed.");
        return getHumanChoice();
    }
}

// logic to play a round

function playRound (humanChoice, computerChoice){
    if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore +=1;
        }
        else if (computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors.");
            humanScore += 1;
        }
        else {
            console.log("It's a tie, you both chose Rock");
        }
    } 
    else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        }
        else if (computerChoice === "paper"){
            console.log("It's a tie, you both chose Paper.");
        } 
        else{
            console.log("You lose! Scissors beats Paper.");
            computerScore += 1;
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore += 1;
        }
        else if (computerChoice === "paper"){
            console.log("You win! Scissors beats Paper.");
            humanScore += 1;
        }
        else {
            console.log("It's a tie, you both chose Scissors");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);