var right = document.getElementById('right');
var left = document.getElementById('left');

var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');

var currentScreen = 1;
var animating = false; // NECESSARY! A debounce so animation does not get interrupted.
var currentTranslateX = 0;

right.onmousedown = function () { // mousedown is somehow mobile functional as well.
    console.log('right');

    var screenGoal = currentScreen + 1;

    console.log(screenGoal);

    if (screenGoal >= 2 && screenGoal !== 4) {
        if (!animating) {
            currentScreen += 1;

            animating = true;

            s1.animate(
                {
                    transform: `translate(${currentTranslateX - 100}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );
            s2.animate(
                {
                    transform: `translate(${currentTranslateX - 100}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );
            s3.animate(
                {
                    transform: `translate(${currentTranslateX - 100}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );

            currentTranslateX -= 100;

            setTimeout(function () {
                animating = false;
            }, 800);
        }
    }

    if (screenGoal === 4) {
        if (!animating) {
            currentScreen = 1;

            animating = true;

            s1.animate(
                {
                    transform: `translate(${currentTranslateX + 200}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );
            s2.animate(
                {
                    transform: `translate(${currentTranslateX + 200}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );
            s3.animate(
                {
                    transform: `translate(${currentTranslateX + 200}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );

            // Update the current translated position for the next animation
            currentTranslateX += 200;

            setTimeout(function () {
                animating = false;
            }, 800);
        }
    }
};

left.onmousedown = function () {
    var screenGoal = currentScreen - 1;

    if (screenGoal >= 1 && screenGoal !== 0) {
        if (!animating) {
            currentScreen -= 1;

            animating = true;

            s1.animate(
                {
                    transform: `translate(${currentTranslateX + 100}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );
            s2.animate(
                {
                    transform: `translate(${currentTranslateX + 100}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );
            s3.animate(
                {
                    transform: `translate(${currentTranslateX + 100}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );

            currentTranslateX += 100;

            setTimeout(function () {
                animating = false;
            }, 800);
        }
    }

    if (screenGoal === 0) {
        if (!animating) {
            currentScreen = 3;

            animating = true;

            s1.animate(
                {
                    transform: `translate(${currentTranslateX - 200}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );
            s2.animate(
                {
                    transform: `translate(${currentTranslateX - 200}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );
            s3.animate(
                {
                    transform: `translate(${currentTranslateX - 200}vw, 0)`
                },
                { duration: 800, fill: 'forwards', easing: 'ease-out' }
            );

            currentTranslateX -= 200;

            setTimeout(function () {
                animating = false;
            }, 800);
        }
    }
};