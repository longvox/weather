
// var create_email = false;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
    upgrade();
} else {
    start_button.style.display = 'inline-block';
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    console.log(recognition);
    console.log(recognizing);
    recognition.onstart = function () {
        recognizing = true;
        console.log("onstart");
        start_img.src = './assets/style/img/mic-animate.gif';
    };

    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            console.log("khong mic");
            start_img.src = './assets/style/img/mic.gif';
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            console.log("khong bat duoc am thanh");
            start_img.src = './assets/style/img/mic.gif';
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            console.log("khong xxx");
            if (event.timeStamp - start_timestamp < 100) {
                showInfo('info_blocked');
            } else {
                showInfo('info_denied');
            }
            ignore_onend = true;
        }
    };

    recognition.onend = function () {
        recognizing = false;
        if (ignore_onend) {
            return;
        }
        start_img.src = './assets/style/img/mic.gif';
        if (!final_transcript) {
            return;
        }
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
            var range = document.createRange();
            range.selectNode(document.getElementById('result'));
            window.getSelection().addRange(range);
        }
    };

    recognition.onresult = function (event) {
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        final_transcript = capitalize(final_transcript);
        console.log(final_transcript,' ',interim_transcript);
        results.value = linebreak(interim_transcript);
        results.value = linebreak(final_transcript);
        
        if (final_transcript || interim_transcript) {
            showButtons('inline-block');
        }
    };
}

function upgrade() {
    console.log("upgrade");
    start_button.style.visibility = 'hidden';
    showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;

function linebreak(s) {
    console.log("linebreak");
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;

function capitalize(s) {
    console.log("capitalize");
    return s.replace(first_char, function (m) {
        return m.toUpperCase();
    });
}

function startButton(event) {
    console.log("startButton");
    if (recognizing) {
        recognition.stop();
        return;
    }
    final_transcript = '';
    recognition.lang = 'vi-VN';
    recognition.start();
    ignore_onend = false;
    results.value = '';
    start_img.src = './assets/style/img/mic-slash.gif';
    showButtons('none');
    start_timestamp = event.timeStamp;
}

function showInfo(s) {
    if (s) {
        for (var child = info.firstChild; child; child = child.nextSibling) {
            if (child.style) {
                child.style.display = child.id == s ? 'inline' : 'none';
            }
        }
        info.style.visibility = 'visible';
    } else {
        info.style.visibility = 'hidden';
    }
}

var current_style;

function showButtons(style) {
    console.log("showButtons",style);
    if (style == current_style) {
        return;
    }
    current_style = style;
}