let playerScore = 0;
let computerScore = 0;

function updateScore(result) {
  if (result === 'You Win') {
    playerScore++;
  } else if (result === 'You Lose') {
    computerScore++;
  }

  // Update the score display
  document.querySelector('#playerScore').textContent = playerScore;
  document.querySelector('#computerScore').textContent = computerScore;
}

function rock() {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  let randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  let result = '';

  if (computerMove === rock) {
    result = 'Tie';
  } else if (computerMove === paper) {
    result = 'You Lose';
  } else if (computerMove === scissors) {
    result = 'You Win';
  }

  updateScore(result);

  let printResult = document.querySelector('#printResult');
  printResult.textContent = `You Picked Rock, Computer picked ${computerMove}. ${result}`;
}

function paper() {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  let randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  let result = '';

  if (computerMove === rock) {
    result = 'You Win';
  } else if (computerMove === paper) {
    result = 'Tie';
  } else if (computerMove === scissors) {
    result = 'You Lose';
  }

  updateScore(result);

  let printResult = document.querySelector('#printResult');
  printResult.textContent = `You Picked Paper, Computer picked ${computerMove}. ${result}`;
}

function scissors() {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  let randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  let result = '';

  if (computerMove === rock) {
    result = 'You Lose';
  } else if (computerMove === paper) {
    result = 'You Win';
  } else if (computerMove === scissors) {
    result = 'Tie';
  }

  updateScore(result);

  let printResult = document.querySelector('#printResult');
  printResult.textContent = `You Picked Scissors, Computer picked ${computerMove}. ${result}`;
}