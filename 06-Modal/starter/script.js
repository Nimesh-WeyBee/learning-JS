'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const toggleModel = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

btnOpenModal.forEach(e => {
  e.addEventListener('click', toggleModel);
});

btnCloseModal.addEventListener('click', toggleModel);
overlay.addEventListener('click', toggleModel);

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) toggleModel();
});
