var canvas = document.getElementById('super-fantastic-canvas');
var startButton = document.getElementById("start-button");
var turnLeftButton = document.getElementById("turn-left");
var turnRightButton = document.getElementById("turn-right");
var context;
var intervalTimer;

var currentDir = 1;
var x = 250;
var y = 250;
var running = false;

window.addEventListener('load',
    function() {
        console.log("Loaded!");
        setupListeners();
        context = canvas.getContext("2d");
        context.strokeStyle = '#ff0000';
        context.lineWidth = 5;
        context.moveTo(x, y);
    }, false);

function run() {
    intervalTimer = setInterval(function () {
        drawLine();
    }, 33);
}

function drawLine() {
    x = x + xDelta(1);
    y = y + yDelta(1);
    context.lineTo(x, y);
    context.stroke();
}

function setupListeners() {
    startButton.addEventListener("click", toggleRunning);
    turnLeftButton.addEventListener("click", turnLeft);
    turnRightButton.addEventListener("click", turnRight);
}

function toggleRunning() {
    if (running) {
        running = false;
        clearInterval(intervalTimer);
    } else {
        running = true;
        run();
    }
}

function xDelta(scale) {
    return (currentDir % 2 == 0) ? 0 : (-currentDir + 2) * scale;
}

function yDelta(scale) {
    return (currentDir % 2 != 0) ? 0 : (-currentDir + 1) * scale;
}

function turnRight() {
    currentDir = (currentDir == 0) ? 3 : currentDir - 1;
}

function turnLeft() {
    currentDir = (currentDir == 3) ? 0 : currentDir + 1;
}