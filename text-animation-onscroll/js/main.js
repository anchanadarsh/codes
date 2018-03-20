// All custom codes with comment

$(document).ready(function () {

    //    var itemH = $('.scroll-area h1').outerHeight();
    //    var itemCount = $('.scroll-area h1').length;
    //    $('.scroll-area').height(itemH * itemCount);
});

$(window).scroll(function () {

    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var areaT = $('.scroll-area').offset().top;

    var startAnim = areaT - winHeight;
    console.log(areaT);
    console.log(winHeight);
    console.log("diff : " +startAnim);
    console.log("scroll : " +winScroll);

    if (winScroll > startAnim) {
        $('.scroll-area .toLeft').css('left', '50%');
        $('.scroll-area .toRight').css('right', '50%');
    }
});
