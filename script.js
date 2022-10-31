function getComputerChoice() {
    var computerChoices = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function getPlayerChoice() {
    prompt("Please provide choice")
}