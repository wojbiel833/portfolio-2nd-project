// "use strict";
import { select, classNames } from './settings.js';
// $(document).ready(function () {
//   $("#sidebarCollapse").on("click", function () {
//     $("#sidebar").toggleClass("active");
//   });
// });

// Elements

const logOutBtn = document.querySelector(select.buttons.logOutBtn);
console.log(logOutBtn);

// Sections / Components

const quitPopUp = document.querySelector(select.components.quitPopUp);
console.log(quitPopUp);

const quitPopUpOverlay = document.querySelector(
  select.components.quitPopUpOverlay
);
console.log(quitPopUpOverlay);

// Event handlers

logOutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  quitPopUp.classList.remove('hidden');
});
logOutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  quitPopUpOverlay.classList.remove('hidden');
});
