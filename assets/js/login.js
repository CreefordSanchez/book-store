"use strict";

import { listen, select } from './data/utility.js';

const removeLoginBtn = select('.remove-login-btn');
const login = select('.login');
const userBtn = select('.login-btn');
const submitBtn = select('.submit-login');
const name = select('.name');
const pass = select('.password');
const email = select('.email');
const subscribeBtn = select('.subscribe-btn');

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

function validateLogin() {
  let passValue = pass.value;
  let nameValue = name.value;

  if (passValue != '' && nameValue != '') return true;
  return false;
}