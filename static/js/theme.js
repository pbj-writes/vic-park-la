(function () {
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Wire up theme toggle
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // Hide TOC if it has no entries
    var toc = document.querySelector('.page-toc');
    if (toc && !toc.querySelector('li')) {
      toc.style.display = 'none';
    }

    // Wire up mobile hamburger
    var hamburger = document.getElementById('nav-hamburger');
    var navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  });
})();
