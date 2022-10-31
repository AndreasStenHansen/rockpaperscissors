function getComputerChoice() {
    var computerChoices = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function getPlayerChoice() {
    let playerInput = prompt("Please provide choice")
    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
}

function SingleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw!"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper Beats Rock"
    } else if (playerSelection == "Scissors" && computerSelection == "Rocks") {
        return "You Lose! Rocks Beats Scissors"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors Beats Paper"
    }
    
}