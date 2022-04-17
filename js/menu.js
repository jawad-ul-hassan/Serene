// Hamburger
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.serene-header-nav');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
