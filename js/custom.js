$(function(){
    
 $('.comm-left-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay:true,
    asNavFor: '.comm-right-slider-main'  });

  $('.comm-right-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots:true,
    autoplay:true,
    asNavFor: '.comm-left-slider-main'
  });

   $(window).scroll(function(){
     var s = $(this).scrollTop();
    if(s>150){
      $('.mynav').addClass('sticky-menu');
    }
    else{
      $('.mynav').removeClass('sticky-menu');
    }
   });
});