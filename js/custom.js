$(function(){
    
 $('.comm-left-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.comm-right-slider-main'  });

  $('.comm-right-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots:true,
    asNavFor: '.comm-left-slider-main'
  });
});