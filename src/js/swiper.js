const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,

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

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
