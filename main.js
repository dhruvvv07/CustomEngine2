const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");




let selectedSize = '';
let selectedColor = '';
let selectedButtonColor = '';
let selectedCollarType = '';

function selectSize(size) {
    selectedSize = size;
    console.log(`Selected Size: ${size}`);
}

function selectColor(color) {
    selectedColor = color;
    console.log(`Selected Color: ${color}`);
}

function selectButtonColor(buttonColor) {
    selectedButtonColor = buttonColor;
    console.log(`Selected Button Color: ${buttonColor}`);
}

function selectCollarType(collarType) {
    selectedCollarType = collarType;
    console.log(`Selected Collar Type: ${collarType}`);
}


// Select all thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');

// Select the main image
const mainImage = document.getElementById('originals');

// Store the original image source
const originalSrc = mainImage.src;

// Variable to track if an image has been permanently changed
let isImagePermanent = false;

// Add event listeners for hover and click
thumbnails.forEach(thumbnail => {
  
  // Temporary change on hover
  thumbnail.addEventListener('mouseover', function() {
    if (!isImagePermanent) {
      mainImage.src = this.getAttribute('data-large');
    }
  });

  // Reset to original when mouse leaves, unless an image was clicked
  thumbnail.addEventListener('mouseout', function() {
    if (!isImagePermanent) {
      mainImage.src = originalSrc;
    }
  });

  // Permanently set image on click
  thumbnail.addEventListener('click', function() {
    mainImage.src = this.getAttribute('data-large');
    isImagePermanent = true; // Lock the image until the next click
  });
});






















menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

const banner = document.querySelector(".banner__container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".arrival__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".sale__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".sale__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".sale__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".favourite__card", {
  ...scrollRevealOption,
  interval: 500,
});
