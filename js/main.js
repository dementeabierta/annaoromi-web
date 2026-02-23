// =============================================================================
// Anna Oromi — JavaScript principal (mínimo y sin dependencias)
// =============================================================================

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Scroll effect en la navegación
  // ---------------------------------------------------------------------------
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // 2. Menú móvil
  // ---------------------------------------------------------------------------
  const toggle   = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 3. Resaltar enlace activo en la navegación
  // ---------------------------------------------------------------------------
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---------------------------------------------------------------------------
  // 4. Feedback visual al enviar formulario (Formspree AJAX)
  // ---------------------------------------------------------------------------
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data    = new FormData(form);
      var btn     = form.querySelector('[type="submit"]');
      var msgOk   = document.getElementById('form-success');
      var msgErr  = document.getElementById('form-error');

      btn.textContent = 'Enviando…';
      btn.disabled    = true;

      fetch(form.action, {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          if (msgOk) msgOk.hidden = false;
          if (msgErr) msgErr.hidden = true;
          btn.textContent = 'Enviado ✓';
        } else {
          throw new Error('Server error');
        }
      })
      .catch(function () {
        if (msgErr) msgErr.hidden = false;
        btn.textContent = 'Enviar mensaje';
        btn.disabled    = false;
      });
    });
  }

})();
