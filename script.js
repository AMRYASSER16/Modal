'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModel.length; i++) {
    btnsOpenModel[i].addEventListener('click', openModal);
    btnCloseModel.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (!modal.classList.contains('hidden')) {
                closeModal()
            }
        }
    })
};