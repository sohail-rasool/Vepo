$(window).scroll(function () {

    if($(this).scrollTop() < 100) {
        $("nav").removeClass("vepo-navbar-top");
        $("#back-to-top").fadeOut();
    } else {
        $("nav").addClass("vepo-navbar-top");
        $("#back-to-top").fadeIn();
    }
});

// function smothscroll() {

// }

// $(smothscroll());


$(function () {

    $("a.smoth-scroll").click(function(e) {

        e.preventDefault();
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 1000);
    });


});

$(function() {

    $("#customers-testimonials").owlCarousel({

        items:1,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
    });

});
