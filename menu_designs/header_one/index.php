<!doctype html>
<html lang="en-US">

<head>
    <title>Webpage Title</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <?php include '../assets/_partial/head.php' ?>
    <link href="../assets/css/nav.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <header>
        <?php include 'header.php' ?>
    </header>

    <?php include '../assets/_partial/footer-scripts.php' ?>
    <script>
        $(document).ready(function() {
            $('#nav-icon3').click(function() {
                $(this).toggleClass('open');
                $('.header_item_inner').toggleClass('item_full');
            });
        });

    </script>
</body>

</html>
