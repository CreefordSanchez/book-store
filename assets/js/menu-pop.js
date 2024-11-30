'use strict';

import { listen, select } from './data/utility.js';

const removeMenuBtn = select('.fa-x');
const showMenuBtn = select('.fa-bars');
const menuTab = select('.menu-tab');

listen(removeMenuBtn, 'click', () => {
  menuTab.classList.remove('menu-tab-show');
});

listen(showMenuBtn, 'click', () => {
  menuTab.classList.add('menu-tab-show');
});
