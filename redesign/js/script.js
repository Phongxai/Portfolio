$(document).ready(function () {
    setBindings();
    // openNav();
    linkNav();
});

function setBindings() {

    try {
        $(".overlay-content a").click(function (e) {
            e.preventDefault();
            //   alert("clicked");

            var sectionID = e.currentTarget.id + "Section";
            var linkHref = $(this).attr('href');
            //   console.log(sectionID);
            // console.log($(linkHref).offset().top);

            $("html, body").animate({
                scrollTop: $(linkHref).offset().top
            });
        });
    } catch (err) {
        console.log(err);
    }
}


function openNav() {
    document.getElementById('nav').style.width = "100%";
}

function closeNav() {
    document.getElementById('nav').style.width = "0%";
}

function linkNav() {
    $(".overlay-content a").click(function () {
        closeNav();
    });
}