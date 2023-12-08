const left = document.getElementById('left');
const right = document.getElementById('right');

const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');

var currentScreen = 1;
var animating = false;

right.onmousedown = function () {
    console.log('right');

    var screenGoal = currentScreen + 1;

    console.log(screenGoal)

    if (screenGoal >= 2 && screenGoal != 4) {
        if (!(animating == true)) {
            currentScreen += 1

            animating = true;
            
            s1.animate({
                transform: `translate(-100vw, 0)`
            }, { duration: 800, fill: 'forwards', easing: "ease-out" })
            s2.animate({
                transform: `translate(-100vw, 0)`
            }, { duration: 800, fill: 'forwards', easing: "ease-out" })
            s3.animate({
                transform: `translate(-100vw, 0)`
            }, { duration: 800, fill: 'forwards', easing: "ease-out" })
            setTimeout(function(){
                animating = false;
            }, 800);
        }
    }

    if (screenGoal == 4) {
        if (!(animating == true)) {
            currentScreen = 1

            animating = true;

            s1.animate({
                transform: `translate(300vw, 0)`
            }, { duration: 800, fill: 'forwards', easing: "ease-out" })
            s2.animate({
                transform: `translate(300vw, 0)`
            }, { duration: 800, fill: 'forwards', easing: "ease-out" })
            s3.animate({
                transform: `translate(300vw, 0)`
            }, { duration: 800, fill: 'forwards', easing: "ease-out" })
            setTimeout(function(){
                animating = false;
            }, 800);
        }
    }
};

left.onmousedown = function () {
    console.log('left');
};