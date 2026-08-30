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
    // Top hamburger menu disabled - Replaced by modern Native App Bottom Navigation Bar
    return;
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

  // Instant Touch Preload & Zero-Lag Mobile Navigation
  document.addEventListener('touchstart', (e) => {
    const link = e.target.closest('a');
    if (!link || !link.href) return;
    
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('tel') && !href.startsWith('mailto') && !href.startsWith('#') && !href.startsWith('javascript:')) {
      // Preload next page in memory immediately when finger touches
      if (!document.querySelector(`link[rel="prefetch"][href="${link.href}"]`)) {
        const prefetchTag = document.createElement('link');
        prefetchTag.rel = 'prefetch';
        prefetchTag.href = link.href;
        document.head.appendChild(prefetchTag);
      }
    }
  }, { passive: true });

  // Run on load and observe dynamic insertions
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    setTimeout(initScrollAnimations, 300);
    setTimeout(initScrollAnimations, 800);
  });

  // Expose globally for dynamic reruns
  window.TourstkAnimations = {
    refresh: () => {
      initScrollAnimations();
    }
  };
})();
