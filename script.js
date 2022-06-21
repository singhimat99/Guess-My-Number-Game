'use strict';

// console.log(`old ` + displayMessage);
// displayMessage = 'Correct Number!';
// console.log(`new ` + displayMessage);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// const guess = document.querySelector('.guess').value;

// console.log(guess);

// selecting the element for the button
// adding eventlistener that listens for click
// upon click it performs given function

let random = Math.round(Math.random() * 20);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when no input
  if (!guess) {
    displayMessage('No Number!');
  }
  // when player wins
  else if (guess === random) {
    displayMessage('Correct Number!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = random;
    if (highScore <= score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when number is wrrong
  else if (guess !== random) {
    if (score > 1) {
      displayMessage(guess > random ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#aa0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  random = Math.round(Math.random() * 20);
  document.querySelector('.guess').value = undefined;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
});
