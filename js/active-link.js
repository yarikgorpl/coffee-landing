function setActiveMenuLink() {
  const hash = window.location.hash;
  document.querySelectorAll('.menu-filter-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === hash);
  });
}

// При завантаженні сторінки
window.addEventListener('DOMContentLoaded', setActiveMenuLink);

// При зміні хешу (переході по якірному посиланню)
window.addEventListener('hashchange', setActiveMenuLink);
