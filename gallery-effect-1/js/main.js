$(document).ready(function () {
    $(".gallery-box").click(function () {
        $(".gallery-box").hide();
        $(this).show();
        $(".backtoalbum").show();
        $(".gallery-box-out").addClass("fullwidth");
        if ($(".gallery-box div").hasClass("alb-pics")) {
        
        }else{
           $(this).find("img").wrap("<div class='col-xs-12 col-sm-6 col-md-3 alb-pics m-b-xl'></div>"); 
        }
    });
    $(".backtoalbum").click(function () {
        $(this).hide();
        $(".gallery-box").show();
        $(".gallery-box-out").removeClass("fullwidth");
        if ($(".gallery-box div").hasClass("alb-pics")) {
            $(".alb-pics img").unwrap();
        }
    });
});
