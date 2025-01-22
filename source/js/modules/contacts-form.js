//Функция проверки валидации формы Блока Form

const contactsForm = document.querySelector('.contacts-form__form');

const inputPhone = contactsForm.querySelector('.contacts-form__input-phone');
const inputEmail = contactsForm.querySelector('.contacts-form__input-email');
const phoneRegex = /^\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
const emailRegex = /^[a-zA-Z0-9а-яА-Я._%+-]+@[a-zA-Z0-9а-яА-Я.-]+\.[a-zA-Zа-я]{2,}$/;

contactsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  inputPhone.style.borderColor = '';
  inputEmail.style.borderColor = '';

  const phone = inputPhone.value;
  const email = inputEmail.value;

  let isValid = true;

  if (!phoneRegex.test(phone)) {
    inputPhone.style.borderColor = '#ff121f';
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    inputEmail.style.borderColor = '#ff121f';
    isValid = false;
  }

  if(isValid) {
    contactsForm.submit();
  }
});
