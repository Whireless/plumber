// Мобильное меню

if (window.matchMedia('(max-width: 767px)').matches) {
  const page = document.querySelector('html');
  const body = page.querySelector('body');
  const menu = body.querySelector('.main-nav');
  const menuLinks = menu.querySelectorAll('.main-nav__link');

  body.querySelector('.main-nav__button').addEventListener('click', () => {
    menu.classList.toggle('main-nav--open');
    page.getAttribute('style') ? page.removeAttribute('style') : page.style.overflow = 'hidden';
  });

  for (const link of menuLinks) {
    link.addEventListener('click', () => {
      menu.classList.remove('main-nav--open');
      page.removeAttribute('style');
    });
  };
}
