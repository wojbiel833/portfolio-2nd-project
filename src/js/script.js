// "use strict";
import { select, classNames } from './settings.js';
// $(document).ready(function () {
//   $("#sidebarCollapse").on("click", function () {
//     $("#sidebar").toggleClass("active");
//   });
// });

// Elements

const logOutBtn = document.querySelector(select.buttons.logOutBtn);
// console.log(logOutBtn);
const chatButtons = document.querySelector(select.buttons.chatButtons); // gdy dojdzie wiecej zmieniac na querySelectorAll + petloa lub forEach
// console.log(chatButtons);
const sidebarLinks = document.getElementById(select.sidebar.links);
// console.log(sidebarLinks);
const sidebarBanners = document.getElementById(select.sidebar.banners);
// console.log(sidebarBanners);

// Sections / Components

const popUpOverlay = document.querySelector(select.components.popUpOverlay);
// console.log(popUpOverlay);
const quitPopUp = document.querySelector(select.components.quitPopUp);
// console.log(quitPopUp);
const chatPopUp = document.querySelector(select.components.chatPopUp);
// console.log(chatPopUp);
const linksPopUp = document.querySelector(select.components.linksPopUp);
// console.log(linksPopUp);
const bannersPopUp = document.querySelector(select.components.bannersPopUp);
// console.log(bannersPopUp);

// Event handlers

logOutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  quitPopUp.classList.remove('hidden');
  popUpOverlay.classList.remove('hidden');
});

chatButtons.addEventListener('click', function (e) {
  e.preventDefault();
  chatPopUp.classList.remove('hidden');
  popUpOverlay.classList.remove('hidden');
});

sidebarLinks.addEventListener('click', function (e) {
  e.preventDefault();
  linksPopUp.classList.remove('hidden');
  popUpOverlay.classList.remove('hidden');
});

sidebarBanners.addEventListener('click', function (e) {
  e.preventDefault();
  bannersPopUp.classList.remove('hidden');
  popUpOverlay.classList.remove('hidden');
});
