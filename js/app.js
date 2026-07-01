/* Mediterráneo Real Estate — UI (single project JS) */

function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-main');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', href);
    });
  });
}

function initReveal() {
  const els = Array.from(document.querySelectorAll('.reveal'));
  if (!els.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );
  els.forEach((el) => obs.observe(el));
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function validatePhone(value) {
  const v = String(value || '').replace(/\s+/g, '').trim();
  return /^(\+?\d{9,15})$/.test(v);
}

function setFieldError(input, message) {
  if (!input) return;
  input.classList.add('input-error');
  const wrap = input.closest('.form-group') || input.parentElement;
  if (!wrap) return;
  let err = wrap.querySelector('.field-error');
  if (!err) {
    err = document.createElement('div');
    err.className = 'field-error';
    wrap.appendChild(err);
  }
  err.textContent = message;
}

function clearFieldError(input) {
  if (!input) return;
  input.classList.remove('input-error');
  const wrap = input.closest('.form-group') || input.parentElement;
  const err = wrap ? wrap.querySelector('.field-error') : null;
  if (err) err.remove();
}

const CONTACT_FORM_ENDPOINT = 'https://formsubmit.co/ajax/mediterraneorealestate24@gmail.com';

async function sendContactForm(form, fields, alertBox) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalLabel = submitBtn ? submitBtn.textContent : '';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';
  }

  try {
    const response = await fetch(CONTACT_FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: 'Nuevo mensaje desde la web — Mediterráneo Real Estate',
        _template: 'table',
        _captcha: 'false',
        nombre: fields.nombre,
        email: fields.email,
        telefono: fields.telefono,
        mensaje: fields.mensaje,
        pagina: window.location.href,
      }),
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error('submit_failed');
    }

    if (alertBox) {
      alertBox.textContent = '¡Mensaje enviado! Te responderemos pronto.';
      alertBox.classList.add('is-visible');
    }
    form.reset();
  } catch {
    if (alertBox) {
      alertBox.textContent =
        'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos a mediterraneorealestate24@gmail.com.';
      alertBox.classList.add('is-visible');
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  }
}

function initContactForms() {
  const forms = Array.from(document.querySelectorAll('form[data-validate="contact"], #contact-form'));
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = form.querySelector('input[name="nombre"]');
      const email = form.querySelector('input[name="email"]');
      const telefono = form.querySelector('input[name="telefono"]');
      const mensaje = form.querySelector('textarea[name="mensaje"]');
      const alertBox = form.querySelector('[data-form-alert]');

      [nombre, email, telefono, mensaje].forEach(clearFieldError);
      if (alertBox) alertBox.classList.remove('is-visible');

      let ok = true;
      if (!nombre || !String(nombre.value || '').trim()) {
        ok = false;
        setFieldError(nombre, 'Indica tu nombre.');
      }
      if (!email || !validateEmail(email.value)) {
        ok = false;
        setFieldError(email, 'Introduce un email válido.');
      }
      if (!telefono || !validatePhone(telefono.value)) {
        ok = false;
        setFieldError(telefono, 'Introduce un teléfono válido (9–15 dígitos).');
      }
      if (mensaje && mensaje.hasAttribute('required') && !String(mensaje.value || '').trim()) {
        ok = false;
        setFieldError(mensaje, 'Escribe un mensaje (puede ser breve).');
      }

      if (!ok) return;

      sendContactForm(form, {
        nombre: String(nombre?.value || '').trim(),
        email: String(email?.value || '').trim(),
        telefono: String(telefono?.value || '').trim(),
        mensaje: String(mensaje?.value || '').trim() || '(sin mensaje)',
      }, alertBox);
    });
  });
}

function initGAEvents() {
  document.querySelectorAll('[data-ga-event]').forEach((el) => {
    el.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', this.getAttribute('data-ga-event'), {
          event_category: 'engagement',
          event_label: this.getAttribute('data-ga-label'),
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSmoothScroll();
  initReveal();
  initContactForms();
  initGAEvents();
});
