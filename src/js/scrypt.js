
$(document).ready(function(){
   $('.image-slider__fade').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',/* ,
    autoplay: true,
    autoplaySpeed: 2000 */
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="img/slider_photo/prevArrow.svg"></img></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="img/slider_photo/nextArrow.svg"></img></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]

  });
});       