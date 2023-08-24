let running = false;
let timer;
let clock = 0;
const theCounter = document.getElementById('counter');
const stopped = document.getElementById('stopped');


function startCounter() {
    if (running) return;
    timer = setInterval(countSeconds, 1000);
}

function countSeconds() {
    clock++;
    theCounter.innerHTML = clock;
}

function stopCounter() {
    clock = 0;
    stopped.innerHTML += theCounter.innerHTML + '<br>';
}

function resetCounter() {
    clock = 0;
    clearInterval(timer);
    theCounter.innerHTML = '';
    stopped.innerHTML = '';
    // location.reload();
}