(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.getElementById('header');
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('js-no-transparency');
  } else {
    header.classList.remove('js-no-transparency');
  }
}

(() => {
  const aboutBtnRef = document.querySelector('[data-about-modal-open]');
  const aboutModalRef = document.querySelector('[data-about-modal]');
  const aboutBtnClose = document.querySelector('[data-about-modal-close]');

  aboutBtnRef.addEventListener('click', () => {
    aboutModalRef.classList.toggle('is-hidden');
  });

  aboutBtnClose.addEventListener('click', () => {
    aboutModalRef.classList.toggle('is-hidden');
  });
})();
