// Mobile/tablet nav-menu

const mobileNavs = document.querySelector('.main-nav');
const buttonToggle = document.querySelector('.header-button-toggle');
const navLinks = mobileNavs.querySelectorAll('.main-nav__link');
const main = document.querySelector('.main__overlay');
const body = document.querySelector('.page-body');


buttonToggle.addEventListener('click', () => {
  if (mobileNavs.classList.contains('main-nav--closed')) {
    mobileNavs.classList.remove('main-nav--closed');
    mobileNavs.classList.add('main-nav--opened');
    main.classList.add('main__overlay--active');
    body.style.overflow = 'hidden';
  } else {
    mobileNavs.classList.add('main-nav--closed');
    mobileNavs.classList.remove('main-nav--opened');
    main.classList.remove('main__overlay--active');
    body.style.overflow = '';
  }
});

buttonToggle.addEventListener('click', () => {
  if (buttonToggle.classList.contains('header-button-toggle--closed')) {
    buttonToggle.classList.remove('header-button-toggle--closed');
    buttonToggle.classList.add('header-button-toggle--opened');
  } else {
    buttonToggle.classList.add('header-button-toggle--closed');
    buttonToggle.classList.remove('header-button-toggle--opened');
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNavs.classList.add('main-nav--closed');
    mobileNavs.classList.remove('main-nav--opened');
    main.classList.remove('main__overlay--active');
    body.style.overflow = '';
    buttonToggle.classList.add('header-button-toggle--closed');
    buttonToggle.classList.remove('header-button-toggle--opened');
  });
});
