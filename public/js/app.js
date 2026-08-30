/**
 * TOURSTK GLOBAL APP SCRIPT
 * Manages Header, Footer, Navigation, Drawer, Accordion & Shared Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
  injectFloatingWhatsApp();
  setupGlobalAccordions();
});

function getActivePageName() {
  const path = window.location.pathname;
  const page = path.split('/').pop().replace('.html', '') || 'index';
  return page;
}

function injectNavbar() {
  const navContainer = document.getElementById('site-nav-container');
  if (!navContainer) return;

  const current = getActivePageName();

  navContainer.innerHTML = `
    <nav class="site-nav">
      <div class="container nav-inner">
        <a href="index.html" class="nav-brand">
          <div class="nav-logo-icon">
            <span class="material-symbols-outlined" style="font-size:24px">terrain</span>
          </div>
          <div>
            <div class="nav-brand-title">Tourstk</div>
            <div class="nav-brand-sub">EZ Trails Sitakunda</div>
          </div>
        </a>

        <ul class="nav-links">
          <li><a href="index.html" class="nav-link ${current === 'index' ? 'active' : ''}">Home</a></li>
          <li><a href="explore.html" class="nav-link ${current === 'explore' || current === 'destination-detail' ? 'active' : ''}">Explore</a></li>
          <li><a href="packages.html" class="nav-link ${current === 'packages' || current === 'package-detail' ? 'active' : ''}">Packages</a></li>
          <li><a href="planner.html" class="nav-link ${current === 'planner' ? 'active' : ''}">Planner</a></li>
          <li><a href="my-booking.html" class="nav-link ${current === 'my-booking' ? 'active' : ''}">My Booking</a></li>
        </ul>

        <div class="nav-actions">
          <a href="packages.html" class="btn btn-ghost btn-sm" aria-label="Search">
            <span class="material-symbols-outlined">search</span>
          </a>
          <a href="planner.html" class="btn btn-primary btn-sm">
            <span class="material-symbols-outlined" style="font-size:17px">route</span>
            Plan Your Trip
          </a>
        </div>
      </div>
    </nav>
  `;
}

function injectFooter() {
  const footerContainer = document.getElementById('site-footer-container');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="nav-brand" style="margin-bottom:12px;">
              <div class="nav-logo-icon" style="background:#059669;">
                <span class="material-symbols-outlined">terrain</span>
              </div>
              <div>
                <div class="nav-brand-title" style="color:#fff;">EZ Trails</div>
                <div class="nav-brand-sub" style="color:#a7f3d0;">Sitakunda</div>
              </div>
            </div>
            <p style="color:rgba(255,255,255,0.7);font-size:13px;line-height:1.6;max-width:280px;margin-bottom:10px;">
              “Explore. Experience. Enjoy. Guided tours, hotel bookings & transport in Sitakunda.”
            </p>
            <p style="color:rgba(255,255,255,0.85);font-size:12.5px;line-height:1.6;">
              📍 Sitakund Bus Station<br>
              📞 <a href="tel:01939627110" style="color:#6ee7b7;font-weight:bold;">01939627110</a> | <a href="tel:01876418411" style="color:#6ee7b7;font-weight:bold;">01876418411</a>
            </p>
          </div>

          <div>
            <div class="footer-col-title">Our Services</div>
            <ul class="footer-links">
              <li><a href="packages.html">Hotel Room Booking</a></li>
              <li><a href="packages.html">Transport & Local Jeeps</a></li>
              <li><a href="packages.html">Verified Trail Guides</a></li>
              <li><a href="planner.html">Trip Planner</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Support & Hotline</div>
            <ul class="footer-links">
              <li><a href="tel:01939627110">Hotline: 01939627110</a></li>
              <li><a href="tel:01876418411">Support: 01876418411</a></li>
              <li><a href="my-booking.html">My Booking</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Company</div>
            <ul class="footer-links">
              <li><a href="contact.html">About EZ Trails</a></li>
              <li><a href="contact.html">Partner With Us</a></li>
              <li><a href="contact.html">Office Location</a></li>
              <li><a href="explore.html">Sitakunda Spots</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>© 2026 EZ Trails Sitakunda • Sitakund Bus Station</div>
          <div>Explore. Experience. Enjoy.</div>
        </div>
      </div>
    </footer>
  `;
}

function injectFloatingWhatsApp() {
  if (document.querySelector('.wa-floating-btn')) return;
  const btn = document.createElement('a');
  btn.className = 'wa-floating-btn';
  btn.href = 'https://wa.me/8801812345678?text=Hello%20Tourstk,%20I%20want%20to%20plan%20a%20Sitakunda%20trip.';
  btn.target = '_blank';
  btn.rel = 'noopener';
  btn.innerHTML = `
    <span class="material-symbols-outlined" style="font-size:20px">chat</span>
    <span>WhatsApp Support</span>
  `;
  document.body.appendChild(btn);
}

function setupGlobalAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      }
      if (!wasOpen) item.classList.add('open');
    });
  });
}
