document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('mascara');

  function handleScroll() {
      if (window.scrollY > 5) {
            nav.classList.add('mascara');
      } else if(window.innerWidth > 768 && window.scrollY < 5) {
          nav.classList.remove('mascara');
      }
  }

  function handleWidth(){
    if(window.innerWidth < 768){
        nav.classList.add('mascara');
    }
  }

  handleWidth()
  window.addEventListener('scroll', handleScroll);
});