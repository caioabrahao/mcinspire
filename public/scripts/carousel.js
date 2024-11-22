document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    const slideWidth = 100; // percentage

    function updateSlidePosition() {
        container.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    // Event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
}); 