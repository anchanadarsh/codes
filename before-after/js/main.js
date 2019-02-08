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
    $('.move_button').mousedown(function () {
        $(".creativity-section").on('mousemove', function (evt) {
            var distleft = evt.pageX;
            var cbwW = $(".creativity-section").outerWidth();
            var distremain = cbwW - distleft;
            $("#creativity-box-1").css("width", distremain);
            $(".a1").text(distleft);
            $(".a2").text(cbwW);
            $(".a3").text(distremain);
        });
    });
    $('.move_button').mouseup(function () {
        $(".creativity-section").off('mousemove');
    });
});
