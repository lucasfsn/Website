'use strict';

// Answer section
const answerCircle = document.querySelectorAll('.circle');
const answer = document.querySelectorAll('.answer');

answerCircle.forEach((btn, i) =>
  btn.addEventListener('click', () => {
    answer[i].classList.toggle('show');
    btn.classList.toggle('rotate');
  })
);

// Footer
$(window).on('scroll', function () {
  if ($(window).scrollTop() > $('header').offset().top) {
    $('footer').addClass('active');
  } else {
    $('footer').removeClass('active');
  }
});

// Modal - "Read more button"
const readMoreBtn = document.querySelector('a.button');
const activeReadMore = document.querySelector('.modal-wrap');
const overlay = document.querySelector('.wrapper-modal');
const closeMoreBtn = document.querySelector('.close-modal');

const closeModal = function () {
  activeReadMore.classList.remove('active');
  overlay.classList.remove('blur');
};

const openModal = function () {
  activeReadMore.classList.add('active');
  overlay.classList.add('blur');
};

readMoreBtn.addEventListener('click', openModal);
closeMoreBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && overlay.classList.contains('blur')) {
    closeModal();
  }
});
