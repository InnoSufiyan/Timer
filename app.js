var min = prompt("How much minutes Counter??");
var sec = 60;
var msec = 100;
min -= 1;

var minheading = document.getElementById('min')
var secheading = document.getElementById('sec')
var msecheading = document.getElementById('msec')

minheading.innerHTML = min;

var interval;

function timer() {
    msec--
    msecheading.innerHTML = msec;
    if (msec <= 0) {
        sec--;
        secheading.innerHTML = sec;
        msec = 100;
    } else if (sec <= 0) {
        min--
        minheading.innerHTML = min;
        sec = 60;
    } else if (min < 0) {
        reset();
    }
    
}

function start() {
    interval = setInterval(timer,10);
    var start = document.getElementById('start').disabled = true;
    
}

function pause() {
    clearInterval(interval)
    var start = document.getElementById('start').disabled = false;
}

function reset() {
    min = 0;
    sec = 60;
    msec = 100;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    var start = document.getElementById('start').disabled = false;
    pause();
}