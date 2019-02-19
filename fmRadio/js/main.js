$(document).ready(function () {

    var radioIsOn = false;

    //function to play audio on drag
    var playAudio = function (value) {
        if (radioIsOn) {
            switch (value) {
                case 16:
                    $('.fmAudios').trigger('pause');
                    $('#fmAudio1').trigger('play');
                    break;
                case 33:
                    $('.fmAudios').trigger('pause');
                    $('#fmAudio2').trigger('play');
                    break;
                case 50:
                    $('.fmAudios').trigger('pause');
                    $('#fmAudio3').trigger('play');
                    break;
                case 66:
                    $('.fmAudios').trigger('pause');
                    $('#fmAudio4').trigger('play');
                    break;
                case 83:
                    $('.fmAudios').trigger('pause');
                    $('#fmAudio5').trigger('play');
                    break;
                default:
                    $('.fmAudios').trigger('pause');
            }
        }
    }

    var getLeftValue = function (target) {
        var getLeftVal = $(target).css('left');
        return getLeftVal;
    }

    var moveIndicator = function (value) {
        $('.fmRadioIndicator').css('left', value + 'px');
        var a = value / 5;
        playAudio(Math.floor(a));
    }

    var stationNext = function () {
        var getCurrentStation = $('.fmRadioMeterScale').find('.active');
        getCurrentStation.next().trigger('click');
    }

    var stationPrev = function () {
        var getCurrentStation = $('.fmRadioMeterScale').find('.active');
        getCurrentStation.prev().trigger('click');
    }

    //switch radio on off
    $('#fmRadioSwitch span').on('click', function () {
        $('#fmRadioSwitch span').removeClass('active');
        $(this).addClass('active');
    });

    $('#fmOn').on('click', function () {
        radioIsOn = true;
        var getActiveStation = $('.fmRadioMeterScale').find('.active');
        $(getActiveStation).find('audio').trigger('play');
    });

    $('#fmOff').on('click', function () {
        radioIsOn = false;
        $('.fmAudios').trigger('pause');
    });


    $('.fmRadioFrequency').on('click', function () {
        $('.fmRadioFrequency').removeClass('active');
        $(this).addClass('active');
        var getFreqLeftVal = getLeftValue(this);
        var trimmedVal = parseFloat(getFreqLeftVal.replace('px', '')).toFixed(2);
        moveIndicator(trimmedVal);
    });

    $('#fmRadioBtnPrev').on('click', function () {
        stationPrev();
    });

    $('#fmRadioBtnNext').on('click', function () {
        stationNext();
    });

});
