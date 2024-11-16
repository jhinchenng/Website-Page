let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.game');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const slider = document.querySelector('.slider-container');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
