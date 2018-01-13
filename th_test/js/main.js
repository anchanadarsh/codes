$(document).ready(function () {
    //contact section height comparing
    var contL = $(".cont-left").outerHeight();
    var contR = $(".cont-right").outerHeight();
    if (contL > contR) {
        var diffL = (contL - contR) / 2;
        $(".cont-right").css("padding-top", diffL);
    } else {
        $(".cont-left").outerHeight(contR);
    }

    //about section height comparing
    var abtR = $(".about-sec-right").outerHeight();
    $(".about-sec-left").outerHeight(abtR);

    //calculating blog-box size
    var blgimgH = $(".blog-img").outerHeight();
    var getboxH = (blgimgH / 2) * 3;
    $(".blog-box").outerHeight(getboxH);
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var topheaderH = $(".top-blue-nav").outerHeight();
    if (scrollTop > topheaderH) {
        $(".bottom-navbar").addClass("navbar-fixed-top");
    } else {
        $(".bottom-navbar").removeClass("navbar-fixed-top");
    }
})