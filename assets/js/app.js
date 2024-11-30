"use strict";

import { listen, select } from '../js/data/utility.js'; 

let currentIndex = 1; 
const slides = select(".slides");
const totalSlides = document.querySelectorAll(".slide").length; 
const dots = document.querySelectorAll(".dot");
let autoSlideTimer; 
let lastClickTime = 0; 


function showSlide(index) {
  console.log("Showing slide:", index);
  const slideWidth = 100; 
  slides.style.transition = "transform 0.5s ease-in-out";
  // Move the slides to the left by a percentage based on the current slide index
  slides.style.transform = `translateX(-${index * slideWidth}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  const actualIndex = (index === 0) ? 3 : (index === totalSlides - 1) ? 1 : index;
  dots[actualIndex - 1].classList.add("active");
}

listen(slides, "transitionend", () => {
  if (currentIndex === 0) {
    slides.style.transition = "none";
    currentIndex = totalSlides - 2; 
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else if (currentIndex === totalSlides - 1) {
    slides.style.transition = "none";
    currentIndex = 1; 
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

function preventFastClick() {
  const currentTime = new Date().getTime();
  if (currentTime - lastClickTime < 500) {
    return true; 
  }
  lastClickTime = currentTime;
  return false;
}

function moveSlide(step) {
  if (preventFastClick()) return;
  
  currentIndex += step;
  currentIndex = (currentIndex + totalSlides) % totalSlides; 
  showSlide(currentIndex);
  resetAutoSlide(); 
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
  resetAutoSlide(); 
}

function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    moveSlide(1); 
  }, 10000); 
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer); 
  startAutoSlide(); 
}

showSlide(currentIndex);
startAutoSlide(); 

dots.forEach((dot, index) => {
  listen(dot, "click", () => currentSlide(index + 1));
});

listen(select(".prev"), "click", () => moveSlide(-1));
listen(select(".next"), "click", () => moveSlide(1));
