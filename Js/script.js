const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


/* Carousel Start  */

let currentIndex = 0;
  
const carousel = document.querySelector('.carousel');
const totalProducts = document.querySelectorAll('.product').length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateCarousel() {
  const offset = -currentIndex * 33.33; 
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalProducts - 3; 
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalProducts - 3) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateCarousel();
});

updateCarousel();
/* Carousel End */



