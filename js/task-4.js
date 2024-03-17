const formEL = document.querySelector('.login-form');
const emailEl = document.querySelector('.login-form input[type="email"]');
const pwdEl = document.querySelector('.login-form input[type="password"]');

formEL.addEventListener('submit', handlerForm);

function handlerForm(event) {
  event.preventDefault();
  
  const email = formEL.elements.email;
  const password = formEL.elements.password;

  if (email.value === '' || password.value === '') {
    alert('All form fields must be filled in');
  }
  console.log({
    [email.type]: email.value.trim(),
    [password.type]: password.value.trim(),
  });

    formEL.reset();
}
