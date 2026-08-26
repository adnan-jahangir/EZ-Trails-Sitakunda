/**
 * TOURSTK AUTOMATIC SCROLL ANIMATION ENGINE
 * Automatically discovers all cards, grids, headings & features and reveals them smoothly on scroll
 */

(function () {
  'use strict';

  function initScrollAnimations() {
    // Select all potential cards, grids, items across all pages
    const targets = document.querySelectorAll(`
      .card,
      .package-card,
      .destination-card,
      #featured-packages-grid > div,
      #featured-destinations-grid > div,
      #reviews-grid > div,
      .grid > div,
      .benefit-card,
      .feature-box,
      .section-header,
      section > .container > div,
      .glass-card,
      .planner-card
    `);

    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      targets.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach((el, index) => {
      // Avoid re-initializing already animated elements or elements in fixed docks/navbars
      if (el.closest('nav') || el.closest('header') || el.closest('.fixed')) return;

      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
        el.classList.add('card-hover-effect');

        // Apply natural staggered delays for grid siblings
        const parent = el.parentElement;
        if (parent && (parent.classList.contains('grid') || parent.id.includes('grid'))) {
          const siblingIndex = Array.from(parent.children).indexOf(el);
          const delay = (siblingIndex % 4) * 0.12;
          el.style.transitionDelay = `${delay}s`;
        }

        observer.observe(el);
      }
    });
  }

  // =========================================================================
  // UNIVERSAL MOBILE NAVIGATION DRAWER
  // =========================================================================
  function initMobileNav() {
    if (document.getElementById('universal-mobile-drawer')) return;

    const currentPath = window.location.pathname.toLowerCase();
    const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
    const isPackages = currentPath.includes('package');
    const isExplore = currentPath.includes('explore') || currentPath.includes('destination');
    const isPlanner = currentPath.includes('planner');
    const isMyBooking = currentPath.includes('my-booking');
    const isContact = currentPath.includes('contact');

    // Create Backdrop & Drawer
    const backdrop = document.createElement('div');
    backdrop.id = 'universal-mobile-backdrop';
    backdrop.className = 'mobile-nav-backdrop';
    backdrop.onclick = closeMobileNav;

    const drawer = document.createElement('aside');
    drawer.id = 'universal-mobile-drawer';
    drawer.className = 'mobile-nav-drawer';
    drawer.innerHTML = `
      <div class="p-6 border-b border-slate-100 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-2 text-primary font-bold text-lg tracking-tight">
          <svg class="w-6 h-6 text-emerald-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
          </svg>
          <span class="text-slate-900">EZ Trails</span>
        </a>
        <button onclick="window.closeMobileNav()" class="w-9 h-9 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-colors" aria-label="Close menu">
          <span class="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      <div class="p-6 flex-grow overflow-y-auto space-y-1.5 text-sm font-semibold">
        <a href="index.html" class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isHome ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'}">
          <span class="material-symbols-outlined text-lg ${isHome ? 'text-emerald-700' : 'text-slate-400'}">home</span>
          <span>Home</span>
        </a>
        <a href="packages.html" class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isPackages ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'}">
          <span class="material-symbols-outlined text-lg ${isPackages ? 'text-emerald-700' : 'text-slate-400'}">backpack</span>
          <span>Tour Packages</span>
        </a>
        <a href="explore.html" class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isExplore ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'}">
          <span class="material-symbols-outlined text-lg ${isExplore ? 'text-emerald-700' : 'text-slate-400'}">explore</span>
          <span>Explore 12 Spots</span>
        </a>
        <a href="planner.html" class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isPlanner ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'}">
          <span class="material-symbols-outlined text-lg ${isPlanner ? 'text-emerald-700' : 'text-slate-400'}">route</span>
          <span>Custom Trip Planner</span>
        </a>
        <a href="my-booking.html" class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isMyBooking ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'}">
          <span class="material-symbols-outlined text-lg ${isMyBooking ? 'text-emerald-700' : 'text-slate-400'}">receipt_long</span>
          <span>Track My Booking</span>
        </a>
        <a href="contact.html" class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isContact ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'}">
          <span class="material-symbols-outlined text-lg ${isContact ? 'text-emerald-700' : 'text-slate-400'}">support_agent</span>
          <span>Support & Help</span>
        </a>
      </div>

      <div class="p-5 border-t border-slate-100 space-y-2.5 bg-slate-50/70">
        <a href="planner.html" class="w-full bg-[#0e4d34] hover:bg-[#073824] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-all">
          <span class="material-symbols-outlined text-base">explore</span>
          <span>Plan Custom Tour</span>
        </a>
        <a href="https://wa.me/8801812345678?text=Hello%20Tourstk,%20I%20need%20help%20with%20booking" target="_blank" class="w-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-all">
          <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span>WhatsApp Chat</span>
        </a>
      </div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    // Discover nav and append hamburger button if missing
    const navbars = document.querySelectorAll('nav');
    navbars.forEach(nav => {
      if (nav.querySelector('#btn-mobile-nav-toggle')) return;
      const rightArea = nav.querySelector('.flex.items-center.gap-3') || nav.querySelector('.nav-actions') || nav.firstElementChild;
      if (rightArea) {
        const btn = document.createElement('button');
        btn.id = 'btn-mobile-nav-toggle';
        btn.className = 'md:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors ml-1';
        btn.setAttribute('aria-label', 'Open navigation menu');
        btn.innerHTML = `<span class="material-symbols-outlined text-2xl">menu</span>`;
        btn.onclick = openMobileNav;
        rightArea.appendChild(btn);
      }
    });
  }

  function openMobileNav() {
    const backdrop = document.getElementById('universal-mobile-backdrop');
    const drawer = document.getElementById('universal-mobile-drawer');
    if (backdrop && drawer) {
      backdrop.classList.add('is-open');
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    const backdrop = document.getElementById('universal-mobile-backdrop');
    const drawer = document.getElementById('universal-mobile-drawer');
    if (backdrop && drawer) {
      backdrop.classList.remove('is-open');
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  window.openMobileNav = openMobileNav;
  window.closeMobileNav = closeMobileNav;

  // Run on load and observe dynamic insertions
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initMobileNav();
    setTimeout(() => {
      initScrollAnimations();
      initMobileNav();
    }, 300);
    setTimeout(initScrollAnimations, 800);
  });

  // Expose globally for dynamic reruns
  window.TourstkAnimations = {
    refresh: () => {
      initScrollAnimations();
      initMobileNav();
    },
    openMobileNav,
    closeMobileNav,
  };
})();
