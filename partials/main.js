document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});
