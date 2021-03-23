'use strict';
import { select, classNames } from './settings.js';

// Elements
const sidebarGeneral = document.getElementById(select.sidebar.general);
// console.log(sidebarGeneral);
const sidebarDetails = document.getElementById(select.sidebar.details);
// console.log(sidebarDetails);
const sidebarLinks = document.getElementById(select.sidebar.links);
// console.log(sidebarLinks);
const sidebarBanners = document.getElementById(select.sidebar.banners);
// console.log(sidebarBanners);
const sidebarPersonalData = document.getElementById(
  select.sidebar.personalData
);
// console.log(sidebarPersonalData);
const sidebarPayouts = document.getElementById(select.sidebar.payouts);
// console.log(sidebarPayouts);
const sidebarPostback = document.getElementById(select.sidebar.postback);
// console.log(sidebarPostback);

const logInBtn = document.querySelector(select.buttons.logInBtn);
console.log(logInBtn);
const logOutBtns = document.querySelectorAll(select.buttons.logOutBtn);
// console.log(logOutBtn);
const closeWindowBtns = document.querySelectorAll(
  select.buttons.closeWindowBtns
);
// console.log(closeWindowBtns);
const chatButtons = document.querySelector(select.buttons.chatButtons); // gdy dojdzie wiecej zmieniac na querySelectorAll + petloa lub forEach
// console.log(chatButtons);

// Sections / Components

const navbarItems = document.querySelector(select.components.navbarItems);
// console.log(navbarItems);
// console.log(sidebar);
// SUBPAGES
const allSubpages = document.querySelectorAll(select.subpages.allSubpages);
// console.log(allSubpages);

const mainPage = document.querySelector(select.subpages.mainPage);
// console.log(mainPage);
const detailsPage = document.querySelector(select.subpages.detailsPage);
const formPage = document.querySelector(select.subpages.formPage);
// console.log(formPage);
// console.log(detailsPage);
const payoutPage = document.querySelector(select.subpages.payoutPage);
// console.log(payoutPage);
const postbackPage = document.querySelector(select.subpages.postbackPage);
// console.log(postbackPage);
// POPUPS
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
const logInPopUp = document.querySelector(select.components.logInPopUp);
console.log(logInPopUp);

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
  addHidden(logInPopUp);
};
const hidePages = function () {
  allSubpages.forEach(function (subpage) {
    addHidden(subpage);
  });
};

// EVENT HANDLERS

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape') {
    closeAllModals();
  }
});

closeWindowBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeAllModals();
  });
});

popUpOverlay.addEventListener('click', function (e) {
  e.preventDefault();
  closeAllModals();
});

logOutBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    removeHidden(quitPopUp);
    removeHidden(popUpOverlay);
  });
});

sidebarGeneral.addEventListener('click', function (e) {
  e.preventDefault();
  hidePages();
  removeHidden(mainPage);
});

sidebarDetails.addEventListener('click', function (e) {
  e.preventDefault();
  hidePages();
  removeHidden(detailsPage);
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

sidebarPersonalData.addEventListener('click', function (e) {
  console.log('click');
  e.preventDefault();
  hidePages();
  removeHidden(formPage);
});

sidebarPayouts.addEventListener('click', function (e) {
  console.log('click');
  e.preventDefault();
  hidePages();
  removeHidden(payoutPage);
});

sidebarPostback.addEventListener('click', function (e) {
  console.log('click');
  e.preventDefault();
  hidePages();
  removeHidden(postbackPage);
});

chatButtons.addEventListener('click', function (e) {
  e.preventDefault();
  removeHidden(chatPopUp);
  removeHidden(popUpOverlay);
});

logInBtn.addEventListener('click', function (e) {
  e.preventDefault();
  removeHidden(logInPopUp);
  removeHidden(popUpOverlay);
});

/* SIDEBAR hamburger functionality */

const sidebar = document.querySelector(select.components.sidebar);
const hamburgerBtn = document.querySelector(select.buttons.sidebarShow);

hamburgerBtn.addEventListener('click', function () {
  sidebar.classList.toggle(classNames.sidebar.active);
  removeHidden(navbarItems);
});
