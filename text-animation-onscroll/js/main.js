// All custom codes with comment

$(document).ready(function () {
    var winHeight = $(window).height();
    var itemH = $('.scroll-area h1').outerHeight();
    var itemHperc = (itemH / winHeight) * 100;
    $('.toRight').each(function () {
        var indR = $(this).index();
        console.log(indR);
        var assindR = 100 + ((indR / 2) * itemHperc);
        console.log(assindR);
        $(this).css('right', assindR + '%');
    });
});

$(window).scroll(function () {
    var winHeight = $(window).height();
    var winScroll = $(window).scrollTop();
    var areaT = $('.scroll-area h1').offset().top;

    var startAnim = areaT - winHeight;
    console.log(areaT);
    console.log(winHeight);
    console.log("diff : " + startAnim);
    console.log("scroll : " + winScroll);

    if (winScroll > startAnim) {
        var posElem = 100 - (((winScroll - startAnim) / winHeight) * 100);
        console.log("pos : " + posElem);
        $('.scroll-area .toLeft').css('left', posElem + '%');
        $('.scroll-area .toRight').css('right', posElem + '%');
    }
});
