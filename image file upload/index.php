<html>

<body>
    <script type="text/javascript">
        function load_image(id, ext) {
            if (validateExtension(ext) == false) {
                alert("Upload only JPEG or JPG format ");
                document.getElementById("recentphoto").value = "";
                document.getElementById("imagePreview").innerHTML = "";
                //document.getElementById("file").focus();

            }
        }

        function validateExtension(v) {
            var allowedExtensions = new Array("jpg", "JPG", "jpeg", "JPEG");
            for (var ct = 0; ct < allowedExtensions.length; ct++) {
                sample = v.lastIndexOf(allowedExtensions[ct]);
                if (sample != -1) {
                    return true;
                }
            }
            return false;
        }

    </script>

    <form name="testForm">
        <div id="imagePreview"></div>
        <br><input type="file" name="file" id="recentphoto" class="custom-file-input" accept="image/jpg, image/JPG,image/JPEG, image/jpeg" required="required" onChange="load_image(this.id,this.value)" />
        <br />
        <br />
    </form>
</body>

</html>
