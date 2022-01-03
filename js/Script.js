var nav = document.querySelector('nav');
document.addEventListener('scroll', function () {
  // console.log(Hello);
  if (window.scrollY > 80) {
    nav.style.backgroundColor = '#050417';
  } else {
    nav.style.backgroundColor = 'transparent';
  }
});
