const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menuIcon');
const crossIcon = document.querySelector('#crossIcon');

burger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  crossIcon.classList.toggle('hidden');
});

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#menu') && !e.target.closest('#burger')) {
    menu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    crossIcon.classList.add('hidden');
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const modal = document.querySelector('.modal');
const showModalButtons = document.querySelectorAll('.show-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');

// Add a click event listener to each "show-modal" button
showModalButtons.forEach(showButton => {
  showButton.addEventListener('click', function() {
    modal.classList.remove('hidden');
  });
});

// Add a click event listener to each "close-modal" button
closeModalButtons.forEach(closeButton => {
  closeButton.addEventListener('click', function() {
    modal.classList.add('hidden');
  });
});

const labels = document.querySelectorAll('.accordion-label');

labels.forEach((label, index) => {
  const input = label.previousElementSibling;

  label.addEventListener('click', function () {
    if (input.checked) {
      label.classList.remove('bg-brownOrange'); // Remove red color when collapsing
    } else {
      label.classList.add('bg-brownOrange'); // Add red color when expanding
    }
  });
});





