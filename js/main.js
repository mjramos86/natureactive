document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var moreWrap = document.querySelector('.nav-more');
  var moreToggle = document.querySelector('.nav-more-toggle');

  if (moreWrap && moreToggle) {
    moreToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = moreWrap.classList.toggle('open');
      moreToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!moreWrap.contains(e.target)) {
        moreWrap.classList.remove('open');
        moreToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
