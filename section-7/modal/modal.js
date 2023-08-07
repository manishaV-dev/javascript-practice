"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModalBtn = document.querySelectorAll(".show-modal");

// for (let i = 0; i < openModalBtn.length; i++) {
//   //   console.log(openModalBtn[i].textContent);
//   openModalBtn[i].addEventListener("click", function () {
//     console.log("Button clicked");
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });
// }

// closeModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

//DRY

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", openModal);
}

closeModal.addEventListener("click", modalClose);
overlay.addEventListener("click", modalClose);

document.addEventListener("keydown", function (e) {
  //   console.log(e); // console the details of the key which we pressed, like key, code etc
  //   console.log(e.key); // console the key name that we press
  //   if (e.key == "Escape") {
  //     if (!modal.classList.contains("hidden")) {
  //       modalClose();
  //     }
  //   }

  //or

  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});
