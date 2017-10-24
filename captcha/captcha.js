function removeSpaces(string) {
    return string.split(' ').join('');
}

function DrawCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;

    document.getElementById("mainCaptcha").value = removeSpaces(code);
}

// Validate the Entered input aganist the generated security code function   
function ValidCaptcha() {
    var str1 = document.getElementById('mainCaptcha').value;
    var str2 = document.getElementById('enterCaptcha').value;
    if (str1 != str2) {
        document.getElementById('enterCaptcha').value = "";
        alert("Captcha did not match");
    }

}

// Remove the spaces from the entered and generated code
//function removeSpaces(string) {
//    return string.split(' ').join('');
//}
