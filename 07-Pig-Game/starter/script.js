'use strict';

(() => {
  // Selecting the elements
  const player0El = document.querySelector('.player--0');
  const player1El = document.querySelector('.player--1');

  const score0El = document.getElementById('score--0');
  const score1El = document.getElementById('score--1');
  const current0El = document.getElementById('current--0');
  const current1El = document.getElementById('current--1');

  const diceEl = document.querySelector('.dice');

  const btnNew = document.querySelector('.btn--new');
  const btnRoll = document.querySelector('.btn--roll');
  const btnHold = document.querySelector('.btn--hold');

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;

  let playing = true;

  const switchPlayer = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer ? 0 : 1;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };

  btnRoll.addEventListener('click', () => {
    if (!playing) return;
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  });

  btnHold.addEventListener('click', () => {
    if (!playing) return;

    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');

      diceEl.classList.add('hidden');

      playing = false;
    } else {
      switchPlayer();
    }
  });

  btnNew.addEventListener('click', () => {
    currentScore = 0;
    activePlayer = 0;
    playing = true

    for (let i = 0; i < 2; i++) {
      scores[i] = 0;
      document.querySelector(`#current--${i}`).textContent = 0;
      document.querySelector(`#score--${i}`).textContent = 0;
      document
        .querySelector(`.player--${i}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${i}`)
        .classList.remove('player--winner');
    }
    document.querySelector(`.player--0`).classList.add('player--active');
  });
})();
