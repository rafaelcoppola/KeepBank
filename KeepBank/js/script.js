//slider
$('.carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplayspeed: 2000,
    centerMode: true,
});
$('.carousel').slick()

//animation WOW
new WOW().init();