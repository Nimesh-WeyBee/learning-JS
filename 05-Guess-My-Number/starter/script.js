'use strict';

// const message = document.querySelector('.message');

// message.textContent = 'Correct number 🎉';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 0;

(() => {
  let secreatNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;

  const message = document.querySelector('.message');

  const numberEle = document.querySelector('.number');
  const guessEle = document.querySelector('.guess');
  const scoreEle = document.querySelector('.score');
  const highScoreEle = document.querySelector('.highscore');
  const bodyEle = document.querySelector('body');

  const checkBtn = document.querySelector('.check');
  const againBtn = document.querySelector('.again');

  const changeScore = score => {
    if (score > 0) scoreEle.textContent = score;
    else {
      message.textContent = ' 💥 You lost the Game ';
    }
  };

  const displayMessage = msg => {
    message.textContent = msg;
  };

  checkBtn.addEventListener('click', () => {
    const guess = Number(guessEle.value);

    if (!guess) {
      displayMessage('⛔ No number');
    } else if (guess == secreatNumber) {
      displayMessage('Correct number 🎉');

      if (highscore < score) {
        highScoreEle.textContent = score;
        highscore = score;
      }

      bodyEle.style.backgroundColor = '#60b347';
      numberEle.style.width = '30rem';

      numberEle.textContent = secreatNumber;
    } else {
      displayMessage(`${guess < secreatNumber ? '📉 Too low' : '📈 Too High'}`);
      changeScore(--score);
    }
  });

  againBtn.addEventListener('click', () => {
    score = 20;
    changeScore(score);
    displayMessage('start guessing...');
    guessEle.value = '';
    bodyEle.style.backgroundColor = '#222';
    numberEle.style.width = '15rem';
    numberEle.textContent = '?';
    secreatNumber = Math.trunc(Math.random() * 20) + 1;
  });
})();
