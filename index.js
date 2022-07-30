const choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function playRound (playerSelection, computerSelection) {
  if (
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++
    return `You win ! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === computerSelection) {
    return "it's a tie"
  } else {
    computerScore++
    return `You Lose ! ${computerSelection} beats ${playerSelection}`
  }
}

function game () {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Choose an option',
      'Rock,Paper or scissors'
    ).toLocaleLowerCase()
    const computerSelection = getComputerChoice(choices)
    console.log(i, playRound(playerSelection, computerSelection))
  }
  if (playerScore > computerScore) {
    return 'You won !'
  } else if (computerScore > playerScore) {
    return 'You lost'
  } else {
    return 'You tied'
  }
}
console.log(game())
