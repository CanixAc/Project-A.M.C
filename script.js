document.addEventListener('DOMContentLoaded', function(){
      const navToggle = document.getElementById('navToggle');
      const navMenu = document.getElementById('navMenu');
      const navToggleLines = document.querySelectorAll('nav__toggle-line');

      navToggle.addEventListener('click', function(){
      navMenu.classList.toggle('nav__menu--action');

      navToggleLines[0].classList.toggle('nav__toggle-line--top-active');
      navToggleLines[1].classList.toggle('nav__toggle-line--middle-active');
      navToggleLines[2].classList.toggle('nav__toggle-line--botton-active');

      })
})
