$(document).ready(function () {
    //contact section height comparing
    if ($(window).width() > 767) {
        var contL = $(".cont-left").outerHeight();
        var contR = $(".cont-right").outerHeight();
        if (contL > contR) {
            var diffL = (contL - contR) / 2;
            $(".cont-right").css("padding-top", diffL);
        } else {
            $(".cont-left").outerHeight(contR);
        }
    }

    //about section height comparing
    var abtR = $(".about-sec-right").outerHeight();
    $(".about-sec-left").outerHeight(abtR);

    //calculating blog-box size
    var blgimgH = $(".blog-img").outerHeight();
    var getboxH = (blgimgH / 2) * 3;
    $(".blog-box").outerHeight(getboxH);

    //set blog-seperator height
    var blogW = $("#section-blogs").outerWidth();
    var seprH = blogW / 10;
    $(".curve-seperator").css({
        "height": seprH,
        "top": -seprH
    });

    //backtotop
    $('.backtotop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var topheaderH = $(".top-blue-nav").outerHeight();
    if (scrollTop > topheaderH) {
        $(".bottom-navbar").addClass("navbar-fixed-top");
    } else {
        $(".bottom-navbar").removeClass("navbar-fixed-top");
    }

    //call gototop
    goToTop('.backtotop');
})


/* Start of GOTOTOP function */
var goToTop = function (target) {
        if (($(window).scrollTop() > 100)) {
            $(target).addClass('active');
        } else {
            $(target).removeClass('active');
        }
    }
/* End of GOTOTOP function */