<!doctype html>
<html lang="en-US">

<head>
    <title>one page scroll</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <?php include '_partial/head.php' ?>
    <style>
        .scroll-outer {
            overflow: hidden
        }
        
        .scroll-outer ul {
            position: relative;
            display: table;
            padding: 0;
        }
        
        .scroll-outer ul li {
            display: table-cell;
            min-width: 200px;
            padding: 10px;
            table-layout: auto;
            list-style-type: none;
        }

    </style>
</head>

<body>
    <header>
    </header>
    <div class="clearfix"></div>
    <div class="full-area">
        <section id="section-red" style="height:100vh" class="red-bg">
            <p>left : <span id="getleft"></span></p>
            <p>window percent : <span id="getwinpercent"></span></p>
            <p>full body width : <span id="getbodywidth"></span></p>
            <p>scroll width : <span id="getscrollwidth"></span></p>

            <div class="container-fluid m-t-xxl scroll-outer">
                <ul>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                    <li><img src="img/sa.jpg" class="img-responsive"></li>
                </ul>
            </div>
        </section>
    </div>
    <div class="clearfix"></div>
    <footer>

    </footer>
    <?php include '_partial/footer-scripts.php' ?>

    <script>
        $(document).ready(function() {
            var winwidth = $(window).outerWidth();
            $(window).mousemove(function(evt) {
                var distleft = evt.pageX;
                var getwinpercent = (distleft * 100) / winwidth;
                $("#getleft").text(distleft);
                $("#getwinpercent").text(getwinpercent);
                var bodywidth = $(".scroll-outer ul").outerWidth();
                $("#getbodywidth").text(bodywidth);
                var getscrollwidth = (bodywidth * getwinpercent) / 100;
                $("#getscrollwidth").text(getscrollwidth);
                //                $(window).scrollTop(100);
                $(".scroll-outer ul").css("left", -getscrollwidth);
            });

        });

    </script>
</body>

</html>
