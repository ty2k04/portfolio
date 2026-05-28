// mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});


// typing animation
const typingText = document.getElementById("typing-text");

const words = [
  "Frontend Developer",
  "Mobile App Developer",
  "IT Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  let currentWord = words[wordIndex];

  if (deleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!deleting && charIndex === currentWord.length + 1) {
    deleting = true;

    setTimeout(typeEffect, 1000);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// reveal animation
const revealElements = document.querySelectorAll(".reveal");

function showElements() {

  revealElements.forEach(function(element) {

    let elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {
      element.classList.add("visible");
    }

  });

}

window.addEventListener("scroll", showElements);

showElements();


// footer year
document.getElementById("year").textContent = new Date().getFullYear();