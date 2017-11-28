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
        <?php include '_partial/header.php' ?>
    </header>
    <div class="clearfix"></div>
    <div class="full-area">
        <section id="section-red" style="height:100vh" class="red-bg"></section>
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
            $(".menu-tab").click(function() {
                var getsec = $(this).attr("setsec");
                var sectop = $(getsec).offset().top;
                alert(sectop);
                $(window).scrollTop(sectop);
            });
        });

    </script>
</body>

</html>
