<input type="text" id="mobile" onblur="return checkmobile();">

<script>
    
    function checkmobile() {
        var mobile = document.getElementById("mobile");
        if (mobile.value.length > 10) {
            mobile.value = "";
            alert("Enter 10 digit Number")
        }
    }

</script>
