var nav = document.querySelector('nav');
document.addEventListener('scroll', function () {
  // console.log(Hello);
  if (window.scrollY > 100) {
    nav.style.backgroundColor = '#050417';
    nav.style.transition = '2s';
  } else {
    nav.style.backgroundColor = 'transparent';
  }
});
