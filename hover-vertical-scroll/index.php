<!doctype html>
<html lang="en-US">

<head>
    <title>one page scroll</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <?php include '_partial/head.php' ?>
</head>

<body>
    <header>
    </header>
    <div class="clearfix"></div>
    <div class="full-area">
        <section id="section-red" style="height:100vh" class="red-bg">
            <p>top : <span id="gettop"></span></p>
            <p>window percent : <span id="getwinpercent"></span></p>
            <p>full body height : <span id="getbodyheight"></span></p>
            <p>scroll height : <span id="getscrollheight"></span></p>
        </section>
        <section id="section-blue" style="height:100vh" class="blue-bg"></section>
        <section id="section-yellow" style="height:100vh" class="yellow-bg"></section>
        <section id="section-green" style="height:100vh" class="green-bg"></section>
    </div>
    <div class="clearfix"></div>
    <footer>

    </footer>
    <?php include '_partial/footer-scripts.php' ?>

    <script>
        $(document).ready(function() {
            var winheight = $(window).outerHeight();
            var cord = $(window).mousemove(function(evt) {
                var disttop = evt.pageY;
                var getwinpercent = (disttop * 100) / winheight;
                $("#gettop").text(disttop);
                $("#getwinpercent").text(getwinpercent);
                var bodyheight = $(".full-area").outerHeight();
                $("#getbodyheight").text(bodyheight);
                var getscrollheight = (bodyheight * getwinpercent) / 100;
                $("#getscrollheight").text(getscrollheight);
                //                $(window).scrollTop(100);
                $(".full-area").css("margin-top", -getscrollheight);
            });

        });

    </script>
</body>

</html>
