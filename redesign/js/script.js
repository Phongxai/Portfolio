$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.cd-intro').css({
    'transform' : 'translate(0px, ' + wScroll / -100 +'%)'
  });

});
