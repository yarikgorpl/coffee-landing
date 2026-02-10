(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const productImageRef = document.querySelector('[data-img]');

  menuBtnRef.addEventListener('click', event => {
    productImageRef.classList.toggle('is-open');
  });
})();
