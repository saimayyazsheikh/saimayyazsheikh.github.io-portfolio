'use strict';

// ==================
// Mobile Navigation
// ==================

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// Toggle mobile menu visibility
const navToggleFunc = function () {
  nav.classList.toggle('active');
};

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// ==================
// Back to Home Button
// ==================
const backToHomeBtns = document.querySelectorAll('.back-home-btn');

// Add event listener for back-to-home button
backToHomeBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    window.location.href = 'index.html'; // Navigate back to the homepage
  });
});

// ==================
// Contact Form Handling
// ==================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }

    // Form submission handling (replace with actual submission logic)
    console.log('Form submitted:', { name, email, subject, message });
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// ==================
// Set Active Navigation Link Based on the Current Page
// ==================
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
