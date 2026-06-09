/* ================================================================
   CBS 2026 — COMPONENTS (Navbar + Footer injected on every page)
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── ANNOUNCEMENT BAR ──────────────────────────────────────── */
  const barEl = document.getElementById('announcement-bar');
  if (barEl) {
    barEl.innerHTML = `
      <i class="fa-solid fa-circle-info"></i>
      &nbsp;<strong>Abstract Submission Now Open!</strong> — Early deadline:
      <strong>30 September 2026</strong>.
      <a href="abstracts.html">Submit yours today &rarr;</a>
      <button class="close-bar" aria-label="Close announcement">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
  }

  /* ── NAVBAR ────────────────────────────────────────────────── */
  const navEl = document.getElementById('navbar');
  if (navEl) {
    navEl.innerHTML = `
      <div class="container">
        <div class="nav-inner">

          <a href="index.html" class="nav-logo" aria-label="CBS 2026 Home">
            <div class="nav-logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                         10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3
                         1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3
                         3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99
                         4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29
                         1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <div class="nav-logo-text">
              <div class="conf-name">CBS 2026</div>
              <div class="conf-sub">University of Buea &middot; Cameroon</div>
            </div>
          </a>

          <nav class="nav-links" aria-label="Primary navigation">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="themes.html">Themes</a>
            <a href="dates.html">Key Dates</a>
            <a href="speakers.html">Speakers</a>
            <a href="venue.html">Venue</a>
            <a href="abstracts.html">Abstracts</a>
            <a href="faq.html">FAQ</a>
          </nav>

          <div class="nav-actions">
            <a href="registration.html" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-user-plus"></i> Register
            </a>
            <button class="hamburger" id="hamburger-btn"
                    aria-label="Toggle navigation menu"
                    aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>

        </div>
      </div>
    `;
  }

  /* ── MOBILE NAV DRAWER ─────────────────────────────────────── */
  const mobEl = document.getElementById('mobile-nav');
  if (mobEl) {
    mobEl.innerHTML = `
      <div class="mob-overlay"></div>
      <div class="mob-drawer">
        <a href="index.html"><i class="fa-solid fa-house"></i>Home</a>
        <a href="about.html"><i class="fa-solid fa-circle-info"></i>About</a>
        <a href="themes.html"><i class="fa-solid fa-flask"></i>Themes</a>
        <a href="dates.html"><i class="fa-solid fa-calendar-days"></i>Key Dates</a>
        <a href="speakers.html"><i class="fa-solid fa-users"></i>Speakers</a>
        <a href="venue.html"><i class="fa-solid fa-location-dot"></i>Venue</a>
        <a href="abstracts.html"><i class="fa-solid fa-file-alt"></i>Abstracts</a>
        <a href="faq.html"><i class="fa-solid fa-circle-question"></i>FAQ</a>
        <div class="mob-divider"></div>
        <a href="registration.html"
           style="background:var(--green-mid);color:#fff;
                  border-radius:10px;justify-content:center;">
          <i class="fa-solid fa-user-plus"></i>Register Now
        </a>
        <a href="abstracts.html"
           style="background:var(--gold);color:var(--dark);
                  border-radius:10px;justify-content:center;">
          <i class="fa-solid fa-upload"></i>Submit Abstract
        </a>
      </div>
    `;
  }

  /* ── FOOTER ────────────────────────────────────────────────── */
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="container">
        <div class="footer-grid">

          <div class="footer-brand">
            <a href="index.html" style="display:flex;align-items:center;gap:.7rem;">
              <div class="nav-logo-icon" style="width:36px;height:36px;">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                           10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3
                           1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3
                           3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99
                           4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29
                           1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <span style="font-family:var(--font-display);font-size:1.3rem;
                           font-weight:900;color:#fff;">
                CBS <span style="color:var(--gold)">2026</span>
              </span>
            </a>
            <p>Conference on Biological Sciences 2026. Hosted by the University of Buea, Cameroon. Advancing life sciences across Africa and beyond.</p>
            <div class="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener"
                 class="social-link" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener"
                 class="social-link" aria-label="Twitter/X">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener"
                 class="social-link" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:kato.namuene@ubuea.cm"
                 class="social-link" aria-label="Email us">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="index.html"><i class="fa-solid fa-chevron-right"></i>Home</a></li>
              <li><a href="about.html"><i class="fa-solid fa-chevron-right"></i>About CBS 2026</a></li>
              <li><a href="themes.html"><i class="fa-solid fa-chevron-right"></i>Thematic Tracks</a></li>
              <li><a href="dates.html"><i class="fa-solid fa-chevron-right"></i>Key Dates</a></li>
              <li><a href="speakers.html"><i class="fa-solid fa-chevron-right"></i>Speakers</a></li>
              <li><a href="venue.html"><i class="fa-solid fa-chevron-right"></i>Venue &amp; Travel</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Participate</h4>
            <ul>
              <li><a href="registration.html"><i class="fa-solid fa-chevron-right"></i>Register Now</a></li>
              <li><a href="abstracts.html"><i class="fa-solid fa-chevron-right"></i>Submit Abstract</a></li>
              <li><a href="faq.html"><i class="fa-solid fa-chevron-right"></i>FAQs</a></li>
              <li><a href="mailto:kato.namuene@ubuea.cm?subject=CBS2026%20Sponsorship"><i class="fa-solid fa-chevron-right"></i>Become a Sponsor</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:kato.namuene@ubuea.cm">
                  <i class="fa-solid fa-envelope"></i>kato.namuene@ubuea.cm
                </a>
              </li>
              <li>
                <a href="mailto:fokam.eric@ubuea.cm">
                  <i class="fa-solid fa-envelope"></i>fokam.eric@ubuea.cm
                </a>
              </li>
              <li>
                <a href="https://www.ubuea.cm" target="_blank" rel="noopener">
                  <i class="fa-solid fa-globe"></i>www.ubuea.cm
                </a>
              </li>
              <li style="color:rgba(255,255,255,.4);font-size:.82rem;padding:.2rem 0;">
                <i class="fa-solid fa-location-dot"
                   style="color:var(--gold);margin-right:.4rem;"></i>
                Buea, SW Region, Cameroon
              </li>
            </ul>
          </div>

        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 CBS Conference &mdash; University of Buea. All rights reserved.</p>
          <p>Designed for the advancement of biological sciences in Africa.</p>
        </div>
      </div>
    `;
  }

  /* ── BACK TO TOP + TOAST placeholders ─────────────────────── */
  // These are already in each HTML page body, just wire them up
});
