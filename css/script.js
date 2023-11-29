const track = document.getElementById('scrollable');

window.onmousemove = e => {
    
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentage = Math.max(Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0), -100);

    
    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, 0%)`

    track.animate({
        transform: `translate(${nextPercentage}%, 0%)`
    }, {duration: 1200, fill: "forwards"});

    for(const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${nextPercentage + 100}% 0%`;
        image.animate({
            objectPosition: `${nextPercentage + 100}% center`
        }, {duration: 1200, fill: "forwards"});
    }

}

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}