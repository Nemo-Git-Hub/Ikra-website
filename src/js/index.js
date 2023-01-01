import "../scss/main.scss";
import "../../index.html";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,

  // Breakpoints
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
