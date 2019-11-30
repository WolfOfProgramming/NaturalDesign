const carouselTracks = Array.from(document.querySelectorAll('.carousel__tracks'));
console.log(carouselTracks);
carouselTracks.forEach(track => {
    let firstElement = track.firstElementChild;
    const elementWidth = firstElement.offsetWidth;
    let elementCounter = 0;
    while ( firstElement.nextElementSibling ) {
        console.log(elementWidth, elementCounter)
        firstElement.nextElementSibling.style.left = `${elementCounter*elementWidth}px`;
        firstElement = firstElement.nextElementSibling;
        elementCounter++;
    }
    console.log(3)
}) 

