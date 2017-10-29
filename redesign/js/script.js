jQuery(window).load(function() {
    
});


$(document).ready(function() {
    $('.openNav').click(function () {
        openNav();        
    });
});

function openNav() {
    $('.openNav').css({
        "width" : "100%"
    });
    console.log("hello");
}