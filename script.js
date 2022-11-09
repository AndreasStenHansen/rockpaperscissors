function getComputerChoice() {
    var computerChoices = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

// function getPlayerChoice() {
//     const playerInput = prompt("Please provide choice")
//     return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
// }

// function SingleRound(playerSelection, computerSelection) {
//     if (playerSelection == computerSelection) {
//         console.log("Draw!")
//         return
//     } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
//         console.log("You Win! Rock beats Scissors")
//         return "Player win"
//     } else if (playerSelection == "Rock" && computerSelection == "Paper") {
//         console.log("You Lose! Paper beats Rock")
//         return "Player lose"
//     } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
//         console.log("You Lose! Scissors beats Paper")
//         return "Player lose"
//     } else if (playerSelection == "Paper" && computerSelection == "Rock") {
//         console.log("You Win! Paper Beats Rock")
//         return "Player win"
//     } else if (playerSelection == "Scissors" && computerSelection == "Rocks") {
//         console.log("You Lose! Rocks Beats Scissors")
//         return "Player lose"
//     } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
//         console.log("You Win! Scissors Beats Paper")
//         return "Player win"
//     }   
// }

// function game() {
//     playRound();
// }

// function playRound() {
//     player = 0;
//     computer = 0;
//     for (let i = 0; i < 5; i++) {
//         const computerChoice = getComputerChoice();
//         const playerChoice = getPlayerChoice();
//         const winner = SingleRound(playerChoice, computerChoice);
//         if (winner == "Player win") {
//             player++;
//         } else if (winner == "Player lose") {
//             computer++;
//         } else {

//         }
//     }
//     if (player > computer) {
//         console.log("The player wins in total")
//     } else if (computer > player) {
//         console.log("The computer wins in total")
//     } else if (computer == player) {
//         console.log("Draw between player and computer in total")
//     }

// }


// Drop shadow to the first three icons that the user can pick between

var humanRock = document.getElementById('rock');

humanRock.addEventListener('mouseover', function(){
    this.style.filter = "drop-shadow(19px 2px 10px #B88A30)";
})

humanRock.addEventListener('mouseout', function(){
    this.style.filter = "";
})

var humanPaper = document.getElementById('paper');

humanPaper.addEventListener('mouseover', function(){
    this.style.filter = "drop-shadow(19px 2px 10px #B88A30)";
})

humanPaper.addEventListener('mouseout', function(){
    this.style.filter = "";
})

var humanScissors = document.getElementById('scissors');

humanScissors.addEventListener('mouseover', function(){
    this.style.filter = "drop-shadow(19px 2px 10px #B88A30)";
})

humanScissors.addEventListener('mouseout', function(){
    this.style.filter = "";
})

// Function for updating the computers pick

function showComputerChoice() {
    var computerChoice = getComputerChoice();
    //console.log(computerChoice);
    var computer = document.getElementById('computerPicture');
    //console.log(computer);
    if  (computerChoice == "Rock") {
        computer.src = "./png/rock.png"
    }
    else if  (computerChoice == "Paper") {
        computer.src = "./png/paper-stack.png"
    }
    else if  (computerChoice == "Scissors") {
        computer.src = "./png/scissor.png"
    }
}

// Event listener for clicks on the icons
humanPaper.addEventListener('click', function(){
    showComputerChoice();
})

humanRock.addEventListener('click', function(){
    showComputerChoice();
})

humanScissors.addEventListener('click', function(){
    showComputerChoice();
})