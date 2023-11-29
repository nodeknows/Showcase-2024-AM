const nav = document.getElementsByClassName('nav');
const left = document.getElementById('left')
const right = document.getElementById('right')

const screens = document.getElementsByClassName('screens')

const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const screen3 = document.getElementById('screen3')

left.onmousedown = function() {
    console.log('left');

    var screenGoal = $("screen" + `screens.dataset.currentScreen`);

    console.log(screenGoal)

    screen1.animate({
        transform: `translate(-100%, 0)`
    }, {duration: .5, fill: 'forwards'})
};

right.onmousedown = function() {
    console.log('right');
};