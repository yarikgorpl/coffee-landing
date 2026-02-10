(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuHero = document.querySelector('[data-menu-img]');

  menuBtnRef.addEventListener('click', event => {
    mobileMenuHero.classList.toggle('is-open');
  });
})();
