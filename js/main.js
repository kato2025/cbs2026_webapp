/* =============================================================
   CBS 2026 — main.js  |  Shared JavaScript — all pages
============================================================= */

// ── PAGE LOADER ───────────────────────────────────────────────
window.addEventListener('load', function() {
  setTimeout(function() {
    var loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('hidden');
  }, 1400);
});

// ── NAVBAR SCROLL SHADOW ──────────────────────────────────────
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  var btt = document.getElementById('back-to-top');
  if (btt) btt.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

// ── ACTIVE NAV LINK ───────────────────────────────────────────
var currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mob-drawer a').forEach(function(link) {
  var href = link.getAttribute('href') || '';
  var linkPage = href.split('/').pop();
  if (linkPage === currentPage) link.classList.add('active');
});

// ── MOBILE NAV ────────────────────────────────────────────────
var hamburgerBtn = document.getElementById('hamburger-btn');
var mobileNav    = document.getElementById('mobile-nav');
var mobOverlay   = document.querySelector('.mob-overlay');

function openMobileNav() {
  if (!mobileNav || !hamburgerBtn) return;
  mobileNav.classList.add('open');
  hamburgerBtn.classList.add('open');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  if (!mobileNav || !hamburgerBtn) return;
  mobileNav.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (mobileNav.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });
}

if (mobOverlay) {
  mobOverlay.addEventListener('click', closeMobileNav);
}

// Close drawer when any nav link is clicked
document.querySelectorAll('.mob-drawer a').forEach(function(link) {
  link.addEventListener('click', closeMobileNav);
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMobileNav();
});

// ── BACK TO TOP ───────────────────────────────────────────────
var bttBtn = document.getElementById('back-to-top');
if (bttBtn) {
  bttBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── ANNOUNCEMENT BAR CLOSE ────────────────────────────────────
var closeBarBtn = document.querySelector('#announcement-bar .close-bar');
if (closeBarBtn) {
  closeBarBtn.addEventListener('click', function() {
    var bar = document.getElementById('announcement-bar');
    if (bar) bar.style.display = 'none';
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(function(el) {
  revealObserver.observe(el);
});

// ── FAQ ACCORDION ─────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item   = btn.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(i) {
      i.classList.remove('open');
    });
    if (!isOpen) item.classList.add('open');
  });
});

// ── TOAST ─────────────────────────────────────────────────────
window.showToast = function(msg, type) {
  var toast   = document.getElementById('toast');
  var toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.className = (type === 'error') ? 'error' : '';
  toast.querySelector('i').className = (type === 'error')
    ? 'fa-solid fa-circle-xmark'
    : 'fa-solid fa-check-circle';
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 4500);
};

// ── FORM VALIDATION ───────────────────────────────────────────
window.validateField = function(field) {
  var group   = field.closest('.form-group');
  var isValid = field.checkValidity() && field.value.trim() !== '';
  if (group) group.classList.toggle('has-error', !isValid);
  field.classList.toggle('error', !isValid);
  return isValid;
};

window.validateForm = function(formEl) {
  var valid = true;
  formEl.querySelectorAll('[required]').forEach(function(f) {
    if (!window.validateField(f)) valid = false;
  });
  return valid;
};

// Live validation feedback
document.querySelectorAll('input[required], select[required], textarea[required]').forEach(function(f) {
  f.addEventListener('blur', function() { window.validateField(f); });
  f.addEventListener('input', function() {
    if (f.classList.contains('error')) window.validateField(f);
  });
});

// ── COUNTDOWN (homepage) ──────────────────────────────────────
window.startCountdown = function(targetDate, ids) {
  var deadline = new Date(targetDate).getTime();
  function tick() {
    var diff = deadline - Date.now();
    if (diff <= 0) {
      ids.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.textContent = '00';
      });
      return;
    }
    var vals = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000)  / 60000),
      Math.floor((diff % 60000)    / 1000),
    ];
    ids.forEach(function(id, i) {
      var el = document.getElementById(id);
      if (el) el.textContent = String(vals[i]).padStart(2, '0');
    });
  }
  tick();
  setInterval(tick, 1000);
};
