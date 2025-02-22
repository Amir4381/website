// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slider functionality
const slider = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const slideCount = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Button click handlers
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);




