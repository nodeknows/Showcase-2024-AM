let isMobile = window.innerWidth <= 1024; // any changes in css, need to be applied here too.
let isTouchActive = false;
let mouseDown = false;
var startX, scrollLeft;

const slider = document.querySelector('.scrollable');

const right = document.querySelector('#right');
const left = document.querySelector('#left');

right.style.opacity = 0 // always start off transparent.

const startDragging = (e) => {
  isTouchActive = e.type.startsWith('touch');
  mouseDown = true;
  startX = isTouchActive ? e.touches[0].pageX - slider.offsetLeft : e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const stopDragging = () => {
  isTouchActive = false;
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if (mouseDown) {
    const x = isTouchActive ? e.touches[0].pageX - slider.offsetLeft : e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;

    const normalizedScrollLeft = Math.min(1, Math.max(0, slider.scrollLeft / 50));

    const normalizedScrollRight = Math.min(1, Math.max(0, (slider.scrollWidth - slider.scrollLeft - slider.clientWidth) / 50));

    left.style.opacity = 1 - normalizedScrollLeft;
    right.style.opacity = 1 -normalizedScrollRight;// mobile or desktop?
  }
}

const addEventListeners = () => {
  slider.addEventListener('touchstart', startDragging, false);
  slider.addEventListener('touchend', stopDragging, false);
  slider.addEventListener('touchmove', move, { passive: false });
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mousemove', move, false);
  slider.addEventListener('mouseleave', stopDragging, false);
}

addEventListeners(); // add now

window.addEventListener('resize', () => {
  const newIsMobile = window.innerWidth <= 1024;
  if (newIsMobile !== isMobile) {
    isMobile = newIsMobile;
    slider.removeEventListener('touchstart', startDragging, false);
    slider.removeEventListener('touchend', stopDragging, false);
    slider.removeEventListener('touchmove', move, { passive: false });
    slider.removeEventListener('mousedown', startDragging, false);
    slider.removeEventListener('mouseup', stopDragging, false);
    slider.removeEventListener('mousemove', move, false);
    slider.removeEventListener('mouseleave', stopDragging, false);
    
    addEventListeners(); // re add
  }
});
