/* =============================================================
   CBS 2026 — main.js
   Shared JavaScript across all pages
============================================================= */

// ── PAGE LOADER ──────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('hidden');
  }, 1400);
});

// ── NAVBAR SCROLL ────────────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    const btn = document.getElementById('back-to-top');
    if (btn) btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
}

// ── ACTIVE NAV LINK (highlight current page) ─────────────────
document.querySelectorAll('.nav-links a, .mob-drawer a[href]').forEach(link => {
  const href = link.getAttribute('href');
  const page = location.pathname.split('/').pop() || 'index.html';
  if (href === page || (page === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── MOBILE NAV ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger-btn');
const mobileNav  = document.getElementById('mobile-nav');
const overlay    = document.querySelector('.mob-overlay');

function openMob()  { mobileNav.classList.add('open'); hamburger.classList.add('open'); hamburger.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
function closeMob() { mobileNav.classList.remove('open'); hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }

if (hamburger) hamburger.addEventListener('click', () => mobileNav.classList.contains('open') ? closeMob() : openMob());
if (overlay)   overlay.addEventListener('click', closeMob);
document.querySelectorAll('.mob-drawer a').forEach(l => l.addEventListener('click', closeMob));

// ── BACK TO TOP ───────────────────────────────────────────────
const btt = document.getElementById('back-to-top');
if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── ANNOUNCEMENT BAR ─────────────────────────────────────────
const closeBar = document.querySelector('#announcement-bar .close-bar');
if (closeBar) closeBar.addEventListener('click', () => document.getElementById('announcement-bar').style.display = 'none');

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── FAQ ACCORDION ─────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── TOAST NOTIFICATION ────────────────────────────────────────
window.showToast = function(msg, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  document.getElementById('toast-msg').textContent = msg;
  toast.className = type === 'error' ? 'error' : '';
  toast.querySelector('i').className = type === 'error'
    ? 'fa-solid fa-circle-xmark'
    : 'fa-solid fa-check-circle';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
};

// ── FORM VALIDATION ───────────────────────────────────────────
window.validateField = function(field) {
  const group = field.closest('.form-group');
  if (!group) return true;
  const isValid = field.checkValidity() && field.value.trim() !== '';
  group.classList.toggle('has-error', !isValid);
  field.classList.toggle('error', !isValid);
  return isValid;
};

window.validateForm = function(formEl) {
  let valid = true;
  formEl.querySelectorAll('[required]').forEach(f => { if (!validateField(f)) valid = false; });
  return valid;
};

// Live field feedback
document.querySelectorAll('input[required],select[required],textarea[required]').forEach(f => {
  f.addEventListener('blur',  () => validateField(f));
  f.addEventListener('input', () => { if (f.classList.contains('error')) validateField(f); });
});

// ── MAILTO BUILDER ────────────────────────────────────────────
window.buildMailto = function(subject, bodyText) {
  return `mailto:kato.namuene@ubuea.cm,efokam@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
};

// ── COUNTDOWN (used on home + dates pages) ───────────────────
window.startCountdown = function(targetDate, ids) {
  const deadline = new Date(targetDate).getTime();
  function tick() {
    const diff = deadline - Date.now();
    if (diff <= 0) { ids.forEach(id => { const el = document.getElementById(id); if(el) el.textContent = '00'; }); return; }
    const vals = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000) / 60000),
      Math.floor((diff % 60000) / 1000),
    ];
    ids.forEach((id, i) => { const el = document.getElementById(id); if(el) el.textContent = String(vals[i]).padStart(2,'0'); });
  }
  tick();
  setInterval(tick, 1000);
};
