// slideshow
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`
});

let cur = 0;
let max = slides.length - 1;
const next = document.querySelector(".next");

next.addEventListener("click", function() {
    if (cur == max) {
        cur = 0;
    } else {
        cur++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - cur)}%)`;
    });
});

const prev = document.querySelector(".prev");

prev.addEventListener("click", function() {
    if (cur == 0) {
        cur = max;
    } else {
        cur--;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - cur)}%)`;
    });
});

// hover effect
const areas = document.querySelectorAll(".hover-area");
const glows = document.querySelectorAll(".glow");
areas.forEach(area => {
    area.addEventListener("mouseenter", function() {
        glows.forEach(glow => {
            glow.style.opacity = 1;
        });
    });
    area.addEventListener("mouseleave", function() {
        glows.forEach(glow => {
            glow.style.opacity = 0;
        });
    });
});
