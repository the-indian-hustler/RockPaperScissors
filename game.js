// Get DOM elements
const choices = document.querySelectorAll('.choice');
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const msgElement = document.getElementById('msg');

// Initial scores
let userScore = 0;
let compScore = 0;

// Event listener for user choices
choices.forEach(choice => {
  choice.addEventListener('click', playGame);
});

// Game logic
function playGame(e) {
  const userChoice = e.currentTarget.id;
  const compChoice = getComputerChoice();

  const result = getResult(userChoice, compChoice);

  displayResult(result, userChoice, compChoice);

  updateScore(result);
}

// Get computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Determine the winner
function getResult(user, comp) {
  if (user === comp) return 'draw';
  if (
    (user === 'rock' && comp === 'scissors') ||
    (user === 'paper' && comp === 'rock') ||
    (user === 'scissors' && comp === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

// Display the result to the user
function displayResult(result, user, comp) {
  const userChoiceElement = document.getElementById(user);
  const compChoiceElement = document.getElementById(comp);

  // Highlight user and computer choices
  userChoiceElement.classList.add('chosen');
  compChoiceElement.classList.add('chosen');

  // Display result message
  msgElement.textContent = `You ${result}!`;

  // Reset choices after a delay
  setTimeout(() => {
    userChoiceElement.classList.remove('chosen');
    compChoiceElement.classList.remove('chosen');
    msgElement.textContent = 'Play your move';
  }, 1000);
}

// Update the score
function updateScore(result) {
  if (result === 'win') {
    userScore++;
  } else if (result === 'lose') {
    compScore++;
  }

  // Update the score display
  userScoreElement.textContent = userScore;
  compScoreElement.textContent = compScore;
}

