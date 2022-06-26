const scrollBtn = document.querySelector('.button-up');
console.log(scrollBtn);
const refreshButtonVisibility = () => {
  if (document.documentElement.scrollTop <= 150) {
    scrollBtn.style.display = 'none';
  } else {
    scrollBtn.style.display = 'block';
  }
};
scrollBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', e => {
  refreshButtonVisibility();
});
