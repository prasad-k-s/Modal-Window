'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modal.style.transform = 'scale(1) translate(-50%, -50%)';
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  modal.style.transform = 'scale(.3) translate(-50%, -50%)';
};

btnsOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

overlay.addEventListener('click', closeModal);
