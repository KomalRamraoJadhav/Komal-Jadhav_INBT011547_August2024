let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(n) {
    currentSlide += n;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;


    
}


