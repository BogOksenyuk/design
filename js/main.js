$(function(){

  $('input, select').styler();

});

var swiper = new Swiper('.design-swiper', {
  loop: false,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 50,
  // freeMode: true,
});

var swiper = new Swiper('.stages-swiper', {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 50,
  centeredSlides: true,
  // freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + 0 + (index + 1) + "</div>";
    },
  },
});

var swiper = new Swiper('.projects-swiper', {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  // freeMode: true,
});