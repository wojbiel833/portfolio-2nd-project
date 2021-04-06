'use strict';
import { select, classNames } from './settings.js';

// ELEMENTS
// sidebar
const sidebarGeneral = document.getElementById(select.sidebar.general);
const sidebarDetails = document.getElementById(select.sidebar.details);
const sidebarLinks = document.getElementById(select.sidebar.links);
const sidebarBanners = document.getElementById(select.sidebar.banners);
const sidebarPersonalData = document.getElementById(
  select.sidebar.personalData
);
const sidebarPayouts = document.getElementById(select.sidebar.payouts);
const sidebarPostback = document.getElementById(select.sidebar.postback);

// buttons
const logInBtns = document.querySelectorAll(select.buttons.logInBtn);
const logOutBtns = document.querySelectorAll(select.buttons.logOutBtn);
const closeWindowBtns = document.querySelectorAll(
  select.buttons.closeWindowBtns
);
const chatButtons = document.querySelector(select.buttons.chatButtons); // gdy dojdzie wiecej zmieniac na querySelectorAll + petloa lub forEach

// SSECTIONS/COMPONENTS
const navbarItems = document.querySelector(select.components.navbarItems);

// subpages
const allSubpages = document.querySelectorAll(select.subpages.allSubpages);
const mainPage = document.querySelector(select.subpages.mainPage);
const detailsPage = document.querySelector(select.subpages.detailsPage);
const formPage = document.querySelector(select.subpages.formPage);
const payoutPage = document.querySelector(select.subpages.payoutPage);
const postbackPage = document.querySelector(select.subpages.postbackPage);

// popups
const popUpOverlay = document.querySelector(select.components.popUpOverlay);
const allModals = document.querySelectorAll(select.components.allModals);
const quitPopUp = document.querySelector(select.components.quitPopUp);
const chatPopUp = document.querySelector(select.components.chatPopUp);
const linksPopUp = document.querySelector(select.components.linksPopUp);
const bannersPopUp = document.querySelector(select.components.bannersPopUp);
const logInPopUp = document.querySelector(select.components.logInPopUp);

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
// CHART
const ctx = document.getElementById('myChart').getContext('2d');
console.log(ctx);

const chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [
      {
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      },
    ],
  },
});

// EVENT HANDLERS
/* SIDEBAR hamburger functionality */

const sidebar = document.querySelector(select.components.sidebar);
const hamburgerBtn = document.querySelector(select.buttons.sidebarShow);

hamburgerBtn.addEventListener('click', function () {
  sidebar.classList.toggle(classNames.sidebar.active);
  removeHidden(navbarItems);
});

// esc-closing
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

logOutBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeAllModals();
    removeHidden(quitPopUp);
    removeHidden(popUpOverlay);
  });
});

logInBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeAllModals();
    removeHidden(logInPopUp);
    removeHidden(popUpOverlay);
  });
});

chatButtons.addEventListener('click', function (e) {
  e.preventDefault();
  closeAllModals();
  removeHidden(chatPopUp);
  removeHidden(popUpOverlay);
});

popUpOverlay.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target === this) {
    closeAllModals();
  }
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
  closeAllModals();
  removeHidden(linksPopUp);
  removeHidden(popUpOverlay);
});

sidebarBanners.addEventListener('click', function (e) {
  e.preventDefault();
  closeAllModals();
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
  e.preventDefault();
  hidePages();
  removeHidden(payoutPage);
});

sidebarPostback.addEventListener('click', function (e) {
  e.preventDefault();
  hidePages();
  removeHidden(postbackPage);
});
