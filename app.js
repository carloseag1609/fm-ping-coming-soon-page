const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.getElementById('form');
const inputEmail = document.getElementById('email');
const errorMessage = document.getElementById('error');

function validateEmail() {
  if(!emailRegex.test(inputEmail.value)) {
    errorMessage.classList.remove('hidden');
    inputEmail.classList.add('input--error');
  } else {
    errorMessage.classList.add('hidden');
    inputEmail.classList.remove('input--error');
  }
}

function handleValidation(e) {
  e.preventDefault();
  validateEmail();
}

form.addEventListener('submit', handleValidation);

inputEmail.addEventListener('blur', handleValidation);

inputEmail.addEventListener('keyup', handleValidation);