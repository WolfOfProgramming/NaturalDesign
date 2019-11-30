const carouselsTracks = document.querySelectorAll('.carousel');
const currentElement = [0, 0, 0];

carouselsTracks.forEach( ( carousel, index ) => {
    console.log(carousel)
    const images = carousel.querySelectorAll('.carousel__slide');
    carousel.querySelector('.carousel__button--left').addEventListener( 'click', (e) => {
        const elementWidth = images[0].offsetWidth;
        currentElement[index] = currentElement[index] - 1;
        carousel.style.transform = `translateX(${elementWidth*currentElement[index]}px)`;
    });
    carousel.querySelector('.carousel__button--right').addEventListener( 'click', (e) => {

    });
});
