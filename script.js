function getComputerChoice() {
    var computerChoices = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function getPlayerChoice() {
    const playerInput = prompt("Please provide choice")
    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
}

function SingleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw!")
        return
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You Win! Rock beats Scissors")
        return "Player win"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You Lose! Paper beats Rock")
        return "Player lose"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You Lose! Scissors beats Paper")
        return "Player lose"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You Win! Paper Beats Rock")
        return "Player win"
    } else if (playerSelection == "Scissors" && computerSelection == "Rocks") {
        console.log("You Lose! Rocks Beats Scissors")
        return "Player lose"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You Win! Scissors Beats Paper")
        return "Player win"
    }   
}

function game() {
    playRound();
}

function playRound() {
    player = 0;
    computer = 0;
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        const winner = SingleRound(playerChoice, computerChoice);
        if (winner == "Player win") {
            player++;
        } else if (winner == "Player lose") {
            computer++;
        } else {

        }
    }
    if (player > computer) {
        console.log("The player wins in total")
    } else if (computer > player) {
        console.log("The computer wins in total")
    } else if (computer == player) {
        console.log("Draw between player and computer in total")
    }

}