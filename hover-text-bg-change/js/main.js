// All custom codes with comment

$(document).ready(function () {
    var boxH = $("#creativity-box").outerHeight();
    var headH = $(".box-head").outerHeight();
    var diff = (boxH - headH) / 2;
    var winW = $(window).outerWidth();
    var headW = $(".box-head").outerWidth();
    var diffW = (winW - headW) / 2;
    $(".box-head").css({
        "top": diff,
        "right": diffW
    });

    $(".creativity-section").mousemove(function (evt) {
        var distleft = evt.pageX;
        var cbwW = $(".creativity-section").outerWidth();
        var distremain = cbwW - distleft;
        $("#creativity-box-white").css("width", distremain);
        $(".a1").text(distleft);
        $(".a2").text(cbwW);
        $(".a3").text(distremain);
    });
});