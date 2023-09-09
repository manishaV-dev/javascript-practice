"use strict";

// Selecting, creating and Deleting Element

// 1. Selecting Elements

// Select Entire web page
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector(".tagName");
document.querySelectorAll(".selectEntrire");

document.getElementById("section--1");
document.getElementsByTagName("button"); // show all button
document.getElementsByClassName("className");

// 2. Creating and Inserting Elements

const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn-close-cookies'>Got It!</button>";

header.prepend(message);
header.append(message);

// header.before(message);
// header.after(message);

// 2. Delete Elements

document
  .querySelector(".btn-close-cookies")
  .addEventListener("click", function () {
    message.remove();
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

//or easy way
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// set style
message.style.backgroundColor = "#37383d";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// show property
console.log(message.style.color); // Nothing to show
console.log(getComputedStyle(message).color); // rgb(238, 238, 238)
console.log(getComputedStyle(message).height); // 78.4px

// set height
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px"; // 108.4px

// change color in css
// document.documentElement.style.setProperty("--color-primary", "red");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Attribute
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); // Bankist logo

console.log(logo.className); // nav__logo

// Non-Standard
console.log(logo.designer); // undefined

// Standard way
console.log(logo.getAttribute("designer")); // Manisha

// set alt to image
logo.alt = "Beautiful Bankist logo";

// set an attribute
logo.setAttribute("Company", "Bankist Service");

// to get absolute URL Value
console.log(logo.src); // http://127.0.0.1:5500/Bankist-website/img/logo.png

// to get relative URL Value
console.log(logo.getAttribute("src")); // img/logo.png

const link = document.querySelector(".nav__link--btn");
console.log(link.href); // http://127.0.0.1:5500/Bankist-website/index.html#
console.log(link.getAttribute("href")); // #

// Data Attribute
console.log(logo.dataset.versionNumber); // 3.0

// classes
logo.classList.add("c", "add-multiple-class");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.console("c");

// don't use this because it overwrite all the exiting classes
// logo.className = "Do-not-use";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Smooth Scrolling -------------------------------------------------------------------------------------------------------------

// old-school way
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); //DOMRect {x: 0, y: 715.2000122070312, width: 965.6000366210938, height: 1481.5, top: 715.2000122070312, …}

  console.log(e.target.getBoundingClientRect());

  // Find Current Scroll frol x-y

  console.log("Current Scroll (X/y)", window.pageXOffset, window.pageYOffset); // Current Scroll (X/y) 0 0 (0 0 because scroll is top of the page)

  // measure the h-w of current viewport
  console.log(
    "Height/Width of Viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //Height/Width of Viewport 715 966

  // scrolling
  // window.scrollTo(s1coords.left, s1coords.top); // only better work when scroll is at the top from that viewport

  // set top to top of page not from viewport
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // old-school way
  // for set smooth behaviour
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });

  // Modern way
  // section1.scrollIntoView({ behavior: "smooth" });
});

// Types of events and event listener

const h1 = document.querySelector("h1");
// modern way
// h1.addEventListener("mouseenter", function (e) {
//   alert("addeventlistener: Great! You are reading the heading :D");
// });

// // old school
// h1.onmouseenter = function (e) {
//   alert("onmouseenter: Great! You are reading the heading :D");
// };

const alertH1 = function (e) {
  alert("addeventlistener: Great! You are reading the heading :D");
  // h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 5000);

// Random color Generator
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// it change all 3 bg color
document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Links", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // Stop propagation (only work this event)
  e.stopPropagation();
});
// it change all 2 bg color itself and nav
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Container", e.target, e.currentTarget);
});
// it change itself color
document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Nav", e.target, e.currentTarget);
});

// Page Navigation -------------------------------------------------------------------------------------------------------------

// this is useful for small project where 4-5 event happens beacause when we click it make copies of all element where event is happens
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const getHrefId = this.getAttribute("href");
    console.log(getHrefId);
    document.querySelector(getHrefId).scrollIntoView({ behavior: "smooth" });
  });
});

// But for big project or for better coding expereince use this example where u use event delegation

document.querySelector();

// DOM Traversing------------------------------------------------------------------------------------

const hBig = document.querySelector("h1");

// Goind Downward : child-selector
console.log(hBig.querySelectorAll(".highlight")); // NodeList(2) [span.highlight, span.highlight.highlight2]
console.log(hBig.childNodes);
console.log(hBig.children); // HTMLCollection(3) [span.highlight, br, span.highlight.highlight2]

hBig.firstElementChild.style.color = "white";
hBig.lastElementChild.style.color = "red";

// Goind Upward : parent-selector
console.log(hBig.parentNode); // <div class="header__title">...</div>
console.log(hBig.parentElement); // <div class="header__title">...</div>

hBig.closest(".header").style.background = "blue";
hBig.closest("h1").style.background = "green";

// Goind Sideways : sibling-selector
console.log(hBig.previousElementSibling); // null
console.log(hBig.nextElementSibling); // <h4 style="transform: scale(0.5);">A simpler banking experience for a simpler life.</h4>

console.log(hBig.previousSibling); // #text
console.log(hBig.nextSibling); // #text

console.log(hBig.parentElement.children);

[...hBig.parentElement.children].forEach(function (el) {
  if (el !== hBig) el.style.transform = "scale(0.5)";
});

// Tabbed Components -------------------------------------------------------------------------------------------------------------

const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  // either click on span or button, always have to select Button Element
  const clickedBtn = e.target.closest(".operations__tab");
  // console.log(clickedBtn);

  // Guard Clause
  // if we click outside on button in tabsContainer we get NULL to fix this use guard clause

  if (!clickedBtn) return;

  // Remove Active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activated tab
  clickedBtn.classList.add("operations__tab--active");

  // Activated Content Area
  document
    .querySelector(`.operations__content--${clickedBtn.dataset.tab}`)
    .classList.add("operations__content--active");
  // console.log(clickedBtn.dataset.tab);
});

// Passing Argument to Event Handler -------------------------------------------------------------------------------------------------------------
const nav = document.querySelector(".nav");
// Menu Fade Animation
const handleHover = function (e) {
  // console.log(this); // 0.5 1
  if (e.target.classList.contains("nav__link")) {
    const clickedLink = e.target;
    const siblings = clickedLink.closest(".nav").querySelectorAll(".nav__link");
    const logo = clickedLink.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== clickedLink) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing argument into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky Navigation -------------------------------------------------------------------------------------------------------------

const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

window.addEventListener("scroll", function () {
  // console.log(this.window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});

// Logic behind intersecting API
// 2. Callback Function
const objCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

// 3. Object of option
const objOptions = {
  root: null, // this is the root element where target is intersecting
  threshold: 0.1, // this is basically the % of intersection at which the observer callback will be called
};

// 1. Create new interscetion
const Observer = new IntersectionObserver(objCallback, objOptions);
Observer.observe(section1);

// Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight); // 90
const stickyNav = function (entries) {
  const [entry] = entries; // === entries[0]
  // console.log(entry);
  // if entry.isIntersecting is false then add sticky class to nav
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // to apply for entire viewport
  threshold: 0,
  // add sticky as the dis b/w first section is = h of nav that is 9rem
  // rootMargin: "-90px", // nav height is here 9rem thats why we use here -90px (here % or rem is not working)

  // it is not good practice to use hard coded height margin

  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal Section -------------------------------------------------------------------------------------------------------------

//3
const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};
//1
const sectionObserve = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//2
allSection.forEach(function (section) {
  sectionObserve.observe(section);
  section.classList.add("section--hidden");
});
