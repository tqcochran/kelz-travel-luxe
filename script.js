const bookingForm = document.getElementById('bookingForm');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Booking form submission
bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  
  // Show success message
  const button = this.querySelector('button');
  const originalText = button.textContent;
  button.textContent = '✓ Request Sent!';
  button.style.background = 'var(--gold)';
  
  // Reset form
  this.reset();
  
  // Reset button after 2 seconds
  setTimeout(() => {
    button.textContent = originalText;
  }, 2000);

  // Show alert
  alert('Thank you! Your luxury travel request has been received. We\'ll be in touch shortly.');
});