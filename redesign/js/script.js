$( document ).ready(function() {
    
      // setBindings();
      // openNav();
      linkNav();
});

function setBindings() {
    $(".main-nav ul li a").click(function(e) {
      e.preventDefault();
  
      var sectionID = e.currentTarget.id + "Section";

      // console.log(sectionID);
  
      $("html body").animate({
        scrollTop: $("#" + sectionID).offset().top
      }, 1000);
    });
  }


  function openNav() {
    document.getElementById('nav').style.width = "100%";
  }

  function closeNav() {
    document.getElementById('nav').style.width = "0%";
}

  function linkNav() {
    $(".overlay-content a").click(function(){
      closeNav();
    });
  }