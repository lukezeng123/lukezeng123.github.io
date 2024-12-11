document.addEventListener('DOMContentLoaded', function() {
  console.log('Website Loaded');

  const button = document.getElementById('change-text-btn');
  const mainHeading = document.getElementById('main-heading');
  const form = document.getElementById('contact-form');
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(tab => {
    tab.addEventListener('click', () => {
      tabLinks.forEach(link => link.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');

      if (tab.dataset.tab === 'secret') {
        const password = prompt('Enter the password to reveal the secret:');
        if (password ==='meowfriend123') {
          targetTab.classList.add('active');
          document.getElementById('secret').style.display = 'block';
        } else {
          alert('Incorrect Password!');
        }
      }
    })
  })
  button.addEventListener('click', function() {
      mainHeading.textContent = 'Welcome to Luke\'s Website!';
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
      form.reset();
  });
});
