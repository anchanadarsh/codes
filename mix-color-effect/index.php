 <!doctype html>
<html lang="en-US">
<head>
	<title>Webpage Title</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" >
	<meta name="viewport" content="width=device-width,initial-scale=1" >
	<?php include '_partial/head.php' ?>
</head>
<body>
	<div class="clearfix"></div>
	<section id="mix-color-sec" class="">		
		<div class="blue-text-area">i create html website</div>
		<div class="blue-bg-area"></div>
		<div class="red-text-area">i also use css & jquery</div>
		<div class="red-bg-area"></div>
		<div class="dummy-primary-bg"></div>
		<div class="dummy-secondary-bg"></div>
	</section>
	<div class="clearfix"></div>	
	<?php include '_partial/footer-scripts.php' ?>
    <script>
        $(document).ready(function(){
            $(".dummy-primary-bg").mouseover(function(){
                $(".blue-bg-area").css({"width":"100%","height":"100%"});
            });
            $(".dummy-primary-bg").mouseout(function(){
                $(".blue-bg-area").css({"width":"100px","height":"100px"});
            });
            $(".dummy-secondary-bg").mouseover(function(){
                $(".red-bg-area").css({"width":"100%","height":"100%"});
            });
            $(".dummy-secondary-bg").mouseout(function(){
                $(".red-bg-area").css({"width":"100px","height":"100px"});
            });
        });
    </script>
</body>
</html>