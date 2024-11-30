"use strict";

import { listen, select, selectAll } from './data/utility.js';

//login form
const form = selectAll('form');
const removeLoginBtn = select('.remove-login-btn');
const login = select('.login');
const userBtn = select('.login-btn');
const submitBtn = select('.submit-login');
const name = select('.name');
const pass = select('.password');

//contact form
const email = select('.email');
const subscribeBtn = select('.subscribe-btn');
const error = select('.print-error');

listen(removeLoginBtn, 'click', () => {
  login.style.display = 'none';
});

listen(userBtn, 'click', () => {
  login.style.display = 'flex';
});

listen(submitBtn, 'click', () => {
  if (validateLogin()) {
    login.style.display = 'none';
    name.value = '';
    pass.value = '';
  }
});

listen(subscribeBtn, 'click', () => {
  let emailValue = email.value;
  if (validateEmail(emailValue)) {
    email.value = '';
  }
});

form.forEach(form => {
  listen(form, 'submit', (event) => {
    event.preventDefault();
  });
})

function validateEmail(userEmail) {
  const emailTest = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(co|com)$/;
  if (userEmail == '') {
    error.innerText = 'Enter an email';
    return false;
  }

  if (!emailTest.test(userEmail)) {
    error.innerText = 'Example@gmail.com';
    return false;
  }

  return true;
}
function validateLogin() {
  let passValue = pass.value;
  let nameValue = name.value;

  if (passValue != '' && nameValue != '') return true;
  return false;
}
