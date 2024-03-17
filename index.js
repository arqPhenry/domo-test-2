document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('mascara');

  function handleScroll() {
      if (window.scrollY > 10) {
          nav.classList.add('mascara');
      } else if (window.screen.width <= 425) {
          nav.classList.add('mascara');
      } else {
          nav.classList.remove('mascara');
      }
  }

  window.addEventListener('scroll', handleScroll);
});