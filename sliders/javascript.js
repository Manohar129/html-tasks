
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;
const slideWidth = 800;

function updateSlider() {
    slider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth"
    });
}

function moveRight() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
}

function moveLeft() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
}

// Event Listeners
nextBtn.addEventListener("click", () => {
    moveRight();
    resetTimer();
});

prevBtn.addEventListener("click", () => {
    moveLeft();
    resetTimer();
});

// Auto Slide Logic
let autoSlide = setInterval(moveRight, 4000); // 4 seconds for reading time

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(moveRight, 4000);
}
