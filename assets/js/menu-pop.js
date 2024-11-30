'use strict';

import { listen, select } from './data/utility.js';

const removeMenuBtn = select('.fa-x');
const showMenuBtn = select('.fa-bars');
const menuTab = select('.menu-tab');

listen(removeMenuBtn, 'click', () => {
  menuTab.style.display = 'none';
});

listen(showMenuBtn, 'click', () => {
  menuTab.style.display = 'inline';
});
