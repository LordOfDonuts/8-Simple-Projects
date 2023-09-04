const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const playerWinsCount = document.getElementById('player-wins-count');
const computerWinsCount = document.getElementById('computer-wins-count');

const playerTurnsList = document.getElementById('player-turns-list');
const computerTurnsList = document.getElementById('computer-turns-list');

let playerWins = 0;
let computerWins = 0;

// Functions

function drawEmoji(element, className, emoji) {
  const item = document.createElement('li');
  item.innerHTML = emoji;
  item.classList.add(className);

  element.appendChild(item);
}

function compareOptions(playerOption) {
  const computerOption = getRandomOption();

  if (playerOption == computerOption) {
    drawEmoji(playerTurnsList, 'draw', playerOption);
    drawEmoji(computerTurnsList, 'draw', computerOption);
  } else if (playerOption == '✊' && computerOption == '✋') {
    computerWin();
    drawEmoji(playerTurnsList, 'loss', playerOption);
    drawEmoji(computerTurnsList, 'win', computerOption);
  } else if (playerOption == '✊' && computerOption == '✌️') {
    playerWin();
    drawEmoji(playerTurnsList, 'win', playerOption);
    drawEmoji(computerTurnsList, 'loss', computerOption);
  } else if (playerOption == '✋' && computerOption == '✊') {
    playerWin();
    drawEmoji(playerTurnsList, 'win', playerOption);
    drawEmoji(computerTurnsList, 'loss', computerOption);
  } else if (playerOption == '✋' && computerOption == '✌️') {
    computerWin();
    drawEmoji(playerTurnsList, 'loss', playerOption);
    drawEmoji(computerTurnsList, 'win', computerOption);
  } else if (playerOption == '✌️' && computerOption == '✊') {
    computerWin();
    drawEmoji(playerTurnsList, 'loss', playerOption);
    drawEmoji(computerTurnsList, 'win', computerOption);
  } else if (playerOption == '✌️' && computerOption == '✋') {
    playerWin();
    drawEmoji(playerTurnsList, 'win', playerOption);
    drawEmoji(computerTurnsList, 'loss', computerOption);
  }

  console.log('player: ' + playerOption);
  console.log('cpu: ' + computerOption);
}

function playerWin() {
  playerWinsCount.innerHTML = ++playerWins;
}

function computerWin() {
  computerWinsCount.innerHTML = ++computerWins;
}

function getRandomOption() {
  let randomOption = Math.floor(Math.random() * 3) + 1;

  if (randomOption == 1) {
    return '✊';
  } else if (randomOption == 2) {
    return '✋';
  } else {
    return '✌️';
  }
}


// Events

rockBtn.addEventListener('click', () => {
  compareOptions('✊');
});

paperBtn.addEventListener('click', () => {
  compareOptions('✋');
});

scissorsBtn.addEventListener('click', () => {
  compareOptions('✌️');
});
