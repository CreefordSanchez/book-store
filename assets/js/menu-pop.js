'use strict';

import { listen, select } from './data/utility.js';

const menuBtn = select('.fa-x');
const menuTab = select('.menu-tab');

listen(menuBtn, 'click', () => {
  console.log('click');
});
