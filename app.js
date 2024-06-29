document.addEventListener('DOMContentLoaded', function() {
  console.log('Website Loaded');

  const button = document.getElementById('change-text-btn');
  const mainHeading = document.getElementById('main-heading');
  const form = document.getElementById('contact-form');

  button.addEventListener('click', function() {
      mainHeading.textContent = 'Welcome to T1S Tuition!';
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
      form.reset();
  });
});
