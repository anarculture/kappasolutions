// Kappa Solutions — nav toggle, scrolled state, mailto form.
(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');

  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  });

  // ponytail: no backend; the form composes a mailto. Swap for Formspree/Netlify Forms when a real inbox flow is decided.
  var form = document.getElementById('quote-form');
  var status = form.querySelector('.form__status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.classList.add('was-submitted');
    status.classList.remove('is-error');
    if (!form.checkValidity()) {
      status.textContent = 'Please fill in your name, a valid email, and what you need.';
      status.classList.add('is-error');
      var bad = form.querySelector(':invalid');
      if (bad) bad.focus();
      return;
    }
    var f = form.elements;
    var name = (f.first.value + ' ' + f.last.value).trim();
    var subject = 'Quote request from ' + name + (f.company.value ? ' — ' + f.company.value : '');
    var body = 'Name: ' + name + '\nEmail: ' + f.email.value +
      (f.company.value ? '\nCompany: ' + f.company.value : '') +
      '\n\n' + f.message.value;
    status.textContent = 'Opening your email app…';
    window.location.href = 'mailto:info.kappasolutions26@gmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
