let menuButton = document.querySelector('.header__menu-button');
let headerMenu = document.querySelector('.header__menu');


menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('opened');
  headerMenu.classList.toggle('opened');
});




$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      navText: [ '', ' ' ],

      responsive:{
          0:{
              items:1
          },

          1000:{
              items:1
          }
      }
  });
});