'use strict';
let currentscore = 0;
let currentplayer = 0;
let activeplayer = 0;
let updatescore = [0, 0];
const dice = document.querySelector('.dice');
const btnnewgame = document.querySelector('.btn.btn--new');
const Rolldice = document.querySelector('.btn.btn--roll');
const hold = document.querySelector('.btn--hold');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let currents0 = document.querySelector('#current--0');
let currents1 = document.querySelector('#current--1');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
console.log(score0);
// function for rolldice
function number(num) {
  if (num == 1) {
    dice.src = 'dice-1.png';
  } else if (num == 2) {
    dice.src = 'dice-2.png';
  } else if (num == 3) {
    dice.src = 'dice-3.png';
  } else if (num == 4) {
    dice.src = 'dice-4.png';
  } else if (num == 5) {
    dice.src = 'dice-5.png';
  } else if (num == 6) {
    dice.src = 'dice-6.png';
  }
}
// function for new game
function newgame(ID) {
  document.querySelector(ID).textContent = 0;
  updatescore[activeplayer] = 0;
}

btnnewgame.addEventListener('click', function () {
  hold.hidden = false;
  Rolldice.hidden=false;
  newgame('#score--0');
  newgame('#score--1');
  dice.hidden = true;
  newgame('#current--0');
  newgame('#current--1');
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});
Rolldice.addEventListener('click', function () {
  dice.hidden = false;
  hold.hidden = false;

  const random = Math.trunc(Math.random() * 6) + 1;
  number(random);

  if (random == 1) {
    if (activeplayer == 0) {
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      activeplayer = 1;
      currentscore = 0;
      player1.classList.add('player--active');
      player0.classList.remove('player--active');
    } else {
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      activeplayer = 0;
      currentscore = 0;
      player0.classList.add('player--active');
      player1.classList.remove('player--active');
    }
  } else {
    currentscore = 0;
    currentscore = currentscore + random;
    document.querySelector(`#current--${activeplayer}`).textContent =
      currentscore;
  }
});
hold.addEventListener('click', function () {
  updatescore[activeplayer] += currentscore;
  console.log(updatescore[activeplayer]);
  document.getElementById(`score--${activeplayer}`).textContent =
    updatescore[activeplayer];
  if (updatescore[activeplayer] >= 100) {
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--active');
      Rolldice.hidden=true;
  }
  hold.hidden = true;
});
