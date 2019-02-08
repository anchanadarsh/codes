<!doctype html>
<html lang="en-US">

<head>
    <title>Webpage Title</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <?php include '_partial/head.php' ?>
</head>

<body>
    <div class="clearfix"></div>
    <section id="outbox" class="container-fluid p-lr-none">

        <div class="contact-form-box">
            <div style="color:red" class="error-msg"></div>
            <form id="enquiryform" action="email-enquiry.php" method="post">
                <div class="sb-form-input">
                    <p>Name</p>
                    <input class="contact-field onlyletter" type="text" placeholder="" name="en-name">
                </div>
                <div class="sb-form-input">
                    <p>E-mail</p>
                    <input class="contact-field" type="email" placeholder="" name="en-email">
                </div>
                <div class="sb-form-input">
                    <p>Phone</p>
                    <input class="onlynumber contact-field" type="text" placeholder="" name="en-phone">
                </div>
                <div class="sb-form-input">
                    <p>Query</p>
                    <textarea rows="3" class="contact-field" type="text" placeholder="" name="en-message"></textarea>
                </div>
                <button type="submit" class="btn btn-custom">Send</button>
            </form>
        </div>

    </section>
    <div class="clearfix"></div>
    <?php include '_partial/footer-scripts.php' ?>
</body>

</html>