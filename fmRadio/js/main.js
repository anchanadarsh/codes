$(document).ready(function () {

    var rotationSnap = 5;
    var getfmRadiodegreeRotateCount = 0;

    //switch radio on off
    $('#fmRadioSwitch span').on('click', function () {
        $('#fmRadioSwitch span').removeClass('active');
        $(this).addClass('active');
        var radioIsOn = $('#fmOn').hasClass('active');
        if (radioIsOn) {
            console.log('radio is on');
        } else {
            console.log('radio is off');
        }
    });

    //function to move indicator
    var moveRadioIndicator = function (value) {
        var getPerc = (value / 360) * 100;
        var getPercToFixed = getPerc.toFixed(2);
        $('.fmRadioIndicator').css('left', getPercToFixed + '%');
        playAudio(getPercToFixed);
    }

    //function to play audio
    var playAudio = function (value) {
        switch (value) {

            case '16.67':
                $('.fmAudios').trigger('pause');
                $('#fmAudio1').trigger('play');
                break;
            case '33.33':
                $('.fmAudios').trigger('pause');
                $('#fmAudio2').trigger('play');
                break;
            case '50.00':
                $('.fmAudios').trigger('pause');
                $('#fmAudio3').trigger('play');
                break;
            case '66.67':
                $('.fmAudios').trigger('pause');
                $('#fmAudio4').trigger('play');
                break;
            case '83.33':
                $('.fmAudios').trigger('pause');
                $('#fmAudio5').trigger('play');
                break;
            default:
                $('.fmAudios').trigger('pause');
        }
    }

    //function to get amount to which indicator should move
    var getvalInDegree = function (value) {
        var getQuotient = Math.floor(value / 360);
        var getDeg = value - (getQuotient * 360);
        moveRadioIndicator(getDeg);
    }

    //knob drag gsoc function
    Draggable.create("#fmRadioKnob", {
        type: "rotation",
        maxRotation: 360,
        onDrag: function () {
            var getDegreeAmt = Math.round(this.rotation);
            $('#fmRadiodegreeRotateCount').html(getDegreeAmt);
            getvalInDegree(getDegreeAmt);
        },
        snap: function (endValue) {
            return Math.round(endValue / rotationSnap) * rotationSnap;
        }
    });

});
