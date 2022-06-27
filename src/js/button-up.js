const offset = 100;
const scrollUp = document.querySelector('.button-up');
const getTop = () => window.pageYOffset 



//onScroll
window.addEventListener('scroll', () => {
  
  if(getTop() > offset){
    scrollUp.classList.add('button-up--visible')
  } else {
    scrollUp.classList.remove('button-up--visible')

  }
  
});


// click
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
