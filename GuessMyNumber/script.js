'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 200;
document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
//Displays message to reduce redundency.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const btn = document.querySelector('.check');
btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When no number is inputed
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');

    //When player WINS(When guess is equal to number)
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is not equal to number
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈Too High!' : '📉Too low!';
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent = '🤡You lost the game!';
      displayMessage('🤡You lost the game!');
    }
  }

  //This is REPEATED CODE so above one is the refactored code.
  //   //When number is too high
  // else if (guess > secretNumber) {
  //   //If score is still above 0
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     //When player LOSES(score becomes 0)
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '🤡You lost the game!';
  //   }
  //   //When number is too low
  // } else if (guess < secretNumber) {
  //   //If score is still above 0
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low! ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     //When player LOSES(score becomes 0)
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '🤡You lost the game!';
  //   }
  // }
});

///////////////AGAIN BUTTON FUNCTIONLAITY////////////////////////////////
const agn = document.querySelector('.again');
agn.addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('🤔Start Guessing...');
  document.querySelector('.guess').value = '';
});
