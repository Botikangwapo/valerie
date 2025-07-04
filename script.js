const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
  menuToggle.classList.toggle('open'); // add class to trigger animation
});

