$('.menu-icon').bind('click', function(){
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.site-nav').addClass('js-hide');
  } else {
    $(this).addClass('active');
    $('.site-nav').removeClass('js-hide');
  }
});
