const carousels = document.querySelectorAll('.carousel');
const currentElement = [0, 0, 0];
const dotsNavs = document.querySelectorAll('.carousel__dots-nav')
const carouselsTracks = document.querySelectorAll('.carousel__tracks-container');

function changeSlide( currentElement, index, carouselsTracks, elementWidth) {
    carouselsTracks[index].style.transform = `translateX(-${elementWidth*currentElement[index]}px)`;
}

function updateDots( currentElement, dotsNavs ) {
    dotsNavs.forEach( (dotsNav, index) => {
        const dots = dotsNav.querySelectorAll('.carousel__dot');
        dotsNav.querySelector('.carousel__dot--active').classList.remove('carousel__dot--active');
        dots[ currentElement[index] ].classList.add('carousel__dot--active');
    });
}

carousels.forEach( ( carousel, index ) => {
    const images = carousel.querySelectorAll('.carousel__slide');

    carousel.querySelector('.carousel__btn--left').addEventListener( 'click', (e) => {
        const elementWidth = images[0].offsetWidth;
        currentElement[index] === 0 ? currentElement[index] = 2 : currentElement[index] = currentElement[index] - 1;
        // carousel.querySelector('.carousel__tracks-container').style.transform = `translateX(-${elementWidth*currentElement[index]}px)`;
        changeSlide( currentElement, index, carouselsTracks, elementWidth);
        updateDots( currentElement, dotsNavs);
    });

    carousel.querySelector('.carousel__btn--right').addEventListener( 'click', (e) => {
        const elementWidth = images[0].offsetWidth;
        currentElement[index] === 2 ? currentElement[index] = 0 : currentElement[index] = currentElement[index] + 1;
        // carousel.querySelector('.carousel__tracks-container').style.transform = `translateX(-${elementWidth*currentElement[index]}px)`;
        changeSlide( currentElement, index, carouselsTracks, elementWidth);
        updateDots( currentElement, dotsNavs);
    });
});

dotsNavs.forEach( ( dotsNav, index ) => {
    dotsNav.addEventListener('click', (e) => {
    if( e.target.tagName !== 'BUTTON' ) {
        return;
    }
    const elementWidth =  document.querySelectorAll('.carousel__slide')[0].offsetWidth;
    const dots = Array.from(dotsNav.children);
    const currentDot = dots.findIndex( dot => dot === e.target);
    currentElement[index] = currentDot; //Sets current carousel element right slide
    changeSlide( currentElement, index, carouselsTracks, elementWidth);
    updateDots( currentElement, dotsNavs);
    });
});
