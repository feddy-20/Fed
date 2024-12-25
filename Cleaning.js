// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form Submission Alert
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission behavior
  alert('Thank you for your message! We will get back to you soon.');
  this.reset(); // Clear the form after submission
});
