
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
  $('#signForm').validate(
    {
      rules: {
        // simple rule, converted to {required:true}
        name: "required",
        phone: "required",
        // compound rule
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Please specify your name",
        phone: "Please specify your phone number",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        }
      }
    }
  );
$('#signUpStructure form').validate();
$( '#signForm' ).css( "color", "white" );
$( '#signForm' ).css( "font-family", "'Raleway', sans-serif");
$( '#signForm' ).css( "font-size", ".85em");
});       

