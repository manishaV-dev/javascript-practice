"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const message = document.createElement("div");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const allSection = document.querySelectorAll(".section");

// Modal window -------------------------------------------------------------------------------------------------------------------

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Add Cookies div at bottom ----------------------------------------------------------------------------------------------------

message.classList.add("cookie-message");
message.innerHTML =
  "These cookies collect information about how you use our website - for instance, which pages you go to most. This data may be used to help improved funcationality & analytics. <button class='btn btn-close-cookies'>Got it!</button>";

header.prepend(message);
header.append(message);

// Delete Elements
document
  .querySelector(".btn-close-cookies")
  .addEventListener("click", function () {
    message.remove();
  });

// set style
message.style.backgroundColor = "#37383d";

// Smooth Scrolling -------------------------------------------------------------------------------------------------------------

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page Navigation -------------------------------------------------------------------------------------------------------------

// 1. Add eventListner to common parent element
// 2. Determine what element originated the event

// 1. select ul (.nav__links) which is commons parent for a tag in Nav
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const getHrefId = e.target.getAttribute("href");
    console.log(getHrefId);
    document.querySelector(getHrefId).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed Components -------------------------------------------------------------------------------------------------------------

tabsContainer.addEventListener("click", function (e) {
  // either click on span or button, always have to select Button Element
  const clickedBtn = e.target.closest(".operations__tab");

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
});

// Passing Argument to Event Handler -------------------------------------------------------------------------------------------------------------

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

// Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight); // 90
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

// Lazy load -------------------------------------------------------------------------------------------------------------

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// Slider -------------------------------------------------------------------------------------------------------------

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
