const $ = require('../../node_modules/jquery/dist/jquery');
const hammer = require('../../node_modules/hammerjs');
const materialize = require('../../node_modules/materialize-css/dist/js/materialize');
const particles = require('../../node_modules/particles.js/particles');
const particlesConfig = require('../configs/particles.json');
// import particles from '../../node_modules/particles.js/particles';

$(document).ready(function () {
  $(".nav-button").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    });
  $('.parallax').parallax();
  
  let setCopyRightYear = () => {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("copyright-year").innerHTML = year;
  }
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // setCopyRightYear();

  /* ---- particles.js config ---- */

  particlesJS("hero-content", particlesConfig);

  // Carousel config

  $('#prev-button').on('touchstart', () => {
    $('.carousel').carousel('prev');
    return false;
  });

  $('#next-button').on('touchstart', () => {
    $('.carousel').carousel('next');
    return false;
  });

  changeSlide = (index, cl) => {
    cl = (typeof cl == undefined) ? '.carousel.carousel-slide' : cl;
    $(cl).carousel('set', index);
  }

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    onCycleTo: (data) => {
      changeSlide($(data).data('cindex'), '.carousel.thumbnails');
    }
  });
  $('.carousel.thumbnails').carousel({
    dist: 0,
    padding: 3,
    onCycleTo: (data) => {
      changeSlide($(data).data('cindex'), '.carousel.carousel-slider');
    }
  });

  $(window).scroll(() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 200) {
      $('.nav-button').addClass('btn-floating');
    } else {
      $('.nav-button').removeClass('btn-floating');
    }
  });


});
