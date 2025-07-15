const body = document.querySelector('body');
const popup = body.querySelector('.popup');
const form = popup.querySelector('.popup__form')
const openPopup = body.querySelector('.call-master--feedback');
const closePopup = form.querySelector('.popup__button--close');
const sendBtn = form.querySelector('.popup__button--send');

openPopup.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  // popup.classList.remove('popup--close');
  popup.classList.add('popup--open');
});

closePopup.addEventListener('click', () => {
  body.removeAttribute('style');
  // popup.classList.add('popup--close');
  popup.classList.remove('popup--open');
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});
