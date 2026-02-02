(() => {
  const refs = {
    slogan: document.querySelector('[data-slogan]'),
    closeSloganBtn: document.querySelector('[data-slogan-close]'),
  };

  // Закриття по кнопці
  refs.closeSloganBtn.addEventListener('click', event => {
    if (event.currentTarget === refs.closeSloganBtn) {
      closeSlogan();
    }
  });

  function closeSlogan() {
    refs.slogan.classList.add('is-hidden');
  }
})();
