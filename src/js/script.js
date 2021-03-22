// "use strict";
import { select, classNames } from './settings.js';

// Elements

const logOutBtns = document.querySelectorAll(select.buttons.logOutBtn);
// console.log(logOutBtn);
const closeWindowBtns = document.querySelectorAll(
  select.buttons.closeWindowBtns
);
console.log(closeWindowBtns);
const chatButtons = document.querySelector(select.buttons.chatButtons); // gdy dojdzie wiecej zmieniac na querySelectorAll + petloa lub forEach
// console.log(chatButtons);

const sidebarLinks = document.getElementById(select.sidebar.links);
// console.log(sidebarLinks);
const sidebarBanners = document.getElementById(select.sidebar.banners);
// console.log(sidebarBanners);

// Sections / Components

const popUpOverlay = document.querySelector(select.components.popUpOverlay);
// console.log(popUpOverlay);
const allModals = document.querySelectorAll(select.components.allModals);
// console.log(allModals);
const quitPopUp = document.querySelector(select.components.quitPopUp);
// console.log(quitPopUp);
const chatPopUp = document.querySelector(select.components.chatPopUp);
// console.log(chatPopUp);
const linksPopUp = document.querySelector(select.components.linksPopUp);
// console.log(linksPopUp);
const bannersPopUp = document.querySelector(select.components.bannersPopUp);
// console.log(bannersPopUp);
const navbarItems = document.querySelector(select.components.navbarItems);
// console.log(navbarItems);
// console.log(sidebar);

// Functions

const closeModal = modal => modal.classList.add(classNames.popUps.hidden);

function openModal(modal) {
  allModals.forEach(function (modal) {
    modal.classList.remove(classNames.popUps.hidden);
  });
  popUpOverlay.remove(classNames.popUps.hidden);
  modal.classList.add('show');
}

const addHidden = element => element.classList.add(classNames.popUps.hidden);

const removeHidden = element =>
  element.classList.remove(classNames.popUps.hidden);

const closeAllModals = function () {
  addHidden(popUpOverlay);
  addHidden(chatPopUp);
  addHidden(quitPopUp);
  addHidden(linksPopUp);
  addHidden(bannersPopUp);
  // addHidden(loginPopUp);
};
// Event handlers

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape') {
    closeAllModals();
  }
});

popUpOverlay.addEventListener('click', function (e) {
  e.preventDefault();
  closeAllModals();
});

closeWindowBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeAllModals();
  });
});

logOutBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    removeHidden(quitPopUp);
    removeHidden(popUpOverlay);
  });
});

chatButtons.addEventListener('click', function (e) {
  e.preventDefault();
  removeHidden(chatPopUp);
  removeHidden(popUpOverlay);
});

sidebarLinks.addEventListener('click', function (e) {
  e.preventDefault();
  removeHidden(linksPopUp);
  removeHidden(popUpOverlay);
});

sidebarBanners.addEventListener('click', function (e) {
  e.preventDefault();
  removeHidden(bannersPopUp);
  removeHidden(popUpOverlay);
});

/* SIDEBAR hamburger functionality */

const sidebar = document.querySelector(select.components.sidebar);
const hamburgerBtn = document.querySelector(select.buttons.sidebarShow);

hamburgerBtn.addEventListener('click', function () {
  sidebar.classList.toggle(classNames.sidebar.active);
  removeHidden(navbarItems);
});
