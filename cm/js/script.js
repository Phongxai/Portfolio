$(document).ready(function() {
    setBindings();
    animateBanner();
    $(".main").onepage_scroll();

});

function setBindings() {
    $("#why").click(function() {
        $("html body").animate({
            scrollTop: $("#p1").offset().top
        }, 1000);
    });
}

function animateBanner() {
    $("#inner-h1").animate({
        opacity: 1,
    }, 1000, function() {
        $("#inner-h2").animate({
            opacity: 1
        }, 1000)
    });
}
