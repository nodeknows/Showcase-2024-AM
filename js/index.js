const nav = document.getElementsByClassName('nav');
const left = document.getElementById('left');
const right = document.getElementById('right');

const screens = document.getElementsByClassName('screens');

const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');

var currentScreen = 1;

right.onmousedown = function() {
    console.log('right');

    var screenGoal = currentScreen+1;

    console.log(screenGoal)
    
    if (screenGoal >= 2 && screenGoal != 4) {
        currentScreen += 1
        s1.animate({
            transform: `translate(-100vw, 0)`
        }, {duration: 800, fill: 'forwards', easing: "ease-out"})
        s2.animate({
            transform: `translate(-100vw, 0)`
        }, {duration: 800, fill: 'forwards', easing: "ease-out"})
        s3.animate({
            transform: `translate(-100vw, 0)`
        }, {duration: 800, fill: 'forwards', easing: "ease-out"})
    }

    if (screenGoal == 4) {
        currentScreen = 1
        s1.animate({
            transform: `translate(-100vw, 0)`
        }, {duration: 800, fill: 'forwards', easing: "ease-in"})
    }
};

left.onmousedown = function() {
    console.log('left');
};