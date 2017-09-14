$( document ).ready(function() {

  var dHeight = $('.card .card-image img').height();

  $(".card-hover").css({
    'height': dHeight + 'px'
  });


  setBindings();

});

$(window).resize(function() {

  var dHeight = $('.card .card-image img').height();

  $(".card-hover").css({
    'height': dHeight + 'px'
  });

});

$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.cd-intro').css({
    'transform': 'translate(0px, ' + wScroll / -100 + '%)'
  });

  $('.hero-image').css({
    'transform': 'translate(0px, ' + wScroll / -80 + '%)'
  });

});

function setBindings() {
  $("#index-nav li a, .nav-button").click(function(e) {
    e.preventDefault();

    var sectionID = e.currentTarget.id + "Section";

    $("html body").animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000);
  });
}
