<input type="text" onkeypress="return keycheckval(event);">

<input type="text" onkeypress="return isNumber(event);">


<script>
    function isNumber(evt) {
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
        //alert(iKeyCode);
        if (iKeyCode > 31 && (iKeyCode < 39 || iKeyCode > 57 || iKeyCode == 42 || iKeyCode == 43 || iKeyCode == 45 || iKeyCode == 47 || iKeyCode == 46) && iKeyCode != 32 && iKeyCode !== 39 && iKeyCode !== 37 && iKeyCode !== 46) {
            return false;
        }
        return true;
    }

    function keycheckval(evt) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
            ((evt.which) ? evt.which : 0));
        if (charCode > 31 && (charCode < 65 || charCode > 90) &&
            (charCode < 97 || charCode > 122) && charCode != 32) {
            alert("Enter letters only.");
            return false;
        }
        return true;
    }

</script>
