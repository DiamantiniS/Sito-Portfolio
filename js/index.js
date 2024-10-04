// Smooth Scrolling for Navigation Links
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Typing Effect for Home Section
const typingText = document.querySelector(".typing-text");
const textArray = ["Web Developer", "Designer", "Creator"];
let textIndex = 0,
  charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex++);
    setTimeout(type, 150);
  } else {
    setTimeout(deleteText, 2000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, --charIndex);
    setTimeout(deleteText, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

// Navbar Scroll Effect
window.onscroll = function () {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 100);
};

// Initialize Particle.js
document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: ["#38b6ff", "#ffffff", "#ff5733"] },
      shape: { type: "circle", stroke: { width: 0 }, polygon: { nb_sides: 5 } },
      opacity: { value: 0.6, anim: { enable: false } },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 10, size_min: 0.5 },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#38b6ff",
        opacity: 0.4,
        width: 1,
      },
      move: { enable: true, speed: 2, random: true, out_mode: "out" },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 300, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 20, duration: 2, opacity: 0.8 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
});

// Video hover effect
document.querySelectorAll('.project-video').forEach(video => {
    video.addEventListener('mouseover', function() {
        this.play();
    });
    video.addEventListener('mouseout', function() {
        this.pause();
        this.currentTime = 0;
    });
    video.addEventListener('click', function() {
        const modalId = this.closest('.card').querySelector('.btn-primary').getAttribute('data-bs-target');
        const modal = document.querySelector(modalId);
        const modalVideo = modal.querySelector('video');
        modalVideo.src = this.querySelector('source').src;
        $(modal).modal('show');
    });
});