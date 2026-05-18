const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(e) {

  e.preventDefault();

  alert(
    'Thank you! Your luxury travel request has been received.'
  );

});