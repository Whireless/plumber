// Кнопка "В начало сайта"

const btnUp = document.querySelector('.main-footer__button-up');

window.addEventListener('scroll', () => {
  window.pageYOffset > 400 ? btnUp.classList.add('main-footer__button-up--active') : btnUp.classList.remove('main-footer__button-up--active')
});
