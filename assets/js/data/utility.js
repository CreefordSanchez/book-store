'use strict';

export function listen(selector, event, callBack) {
  return selector.addEventListener(event, callBack);
}

export function select(selector) {
  return document.querySelector(selector);
}