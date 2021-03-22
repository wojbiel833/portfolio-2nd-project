// "use strict";
import { select, classNames } from './settings.js';

// Elements

const logOutBtn = document.querySelector(select.buttons.logOutBtn);
// console.log(logOutBtn);
const closeWindowBtns = document.querySelectorAll(
  select.buttons.closeWindowBtns
);
console.log(closeWindowBtns);
const chatButtons = document.querySelector(select.buttons.chatButtons); // gdy dojdzie wiecej zmieniac na querySelectorAll + petloa lub forEach
// console.log(chatButtons);
const sidebarShow = document.getElementById(select.buttons.sidebarShow);
console.log(sidebarShow);
const sidebarHide = document.querySelector(select.buttons.sidebarHide);
console.log(sidebarHide);
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
const sidebar = document.querySelector(select.components.sidebar);
// console.log(sidebar);

// Sidebar show effect
const click = document.querySelectorAll('div button');
const menu = document.querySelector('#st-container');
const pusher = document.querySelector('.st-pusher');
// to store the corresponding effect
let effect;

// adding a click event to all the buttons
for (let i = 0; i < click.length; i++) {
  click[i].addEventListener('click', addClass);
}

pusher.addEventListener('click', closeMenu);

function addClass(e) {
  // to get the correct effect
  effect = e.target.getAttribute('data-effect');
  // adding the effects
  menu.classList.toggle(effect);
  menu.classList.toggle('st-menu-open');

  // console.log(e.target.getAttribute('data-effect'));
}

function closeMenu(el) {
  // if the click target has this class then we close the menu by removing all the classes
  if (el.target.classList.contains('st-pusher')) {
    menu.classList.toggle(effect);
    menu.classList.toggle('st-menu-open');
    // console.log(el.target);
  }
}
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

sidebarShow.addEventListener('click', function (e) {
  e.preventDefault();
  removeHidden(sidebar);
  removeHidden(navbarItems);
  removeHidden(sidebarHide);
});

sidebarHide.addEventListener('click', function (e) {
  e.preventDefault();
  addHidden(sidebar);
  addHidden(navbarItems);
  addHidden(sidebarHide);
});

logOutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  removeHidden(quitPopUp);
  removeHidden(popUpOverlay);
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
