//slider
/*$('.feedback-carousel').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplayspeed: 2000,
    centerMode: true,
});
$('.feedback-carousel').slick()*/

//animation WOW
new WOW().init();

$('.feedback-carousel').slick({
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplayspeed: 2300,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.feedback-carousel').slick()