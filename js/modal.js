(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  // Відкриття модального вікна
  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  // Закриття по кнопці
  refs.closeModalBtn.addEventListener("click", closeModal);

  // Закриття по кліку на оверлей
  refs.backdrop.addEventListener("click", event => {
    if (event.target === refs.backdrop) {
      closeModal();
    }
  });

  // Закриття по Escape
  window.addEventListener("keydown", event => {
    if (event.key === "Escape" && !refs.backdrop.classList.contains("is-hidden")) {
      closeModal();
    }
  });

  function openModal() {
    refs.backdrop.classList.remove("is-hidden");
  }

  function closeModal() {
    refs.backdrop.classList.add("is-hidden");
  }
})();