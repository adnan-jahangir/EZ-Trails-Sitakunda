/**
 * TOURSTK AUTOMATIC SCROLL ANIMATION ENGINE
 * Automatically discovers all cards, grids, headings & features and reveals them smoothly on scroll
 */

(function () {
  'use strict';

  let sharedScrollObserver = null;

  function getScrollObserver() {
    if (sharedScrollObserver) return sharedScrollObserver;
    if (!('IntersectionObserver' in window)) return null;

    sharedScrollObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
            // After bottom-to-top reveal finishes, clear inline transitionDelay so hover is instant
            setTimeout(() => {
              if (entry.target) {
                entry.target.style.transitionDelay = '';
              }
            }, 800);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );
    return sharedScrollObserver;
  }

  function initScrollAnimations() {
    // Select all cards across all pages of EZ Trail STK
    const targets = document.querySelectorAll(`
      .card,
      .package-card,
      .destination-card,
      .spot-card,
      .review-card,
      .benefit-card,
      .feature-box,
      .feature-card,
      .glass-card,
      .planner-card,
      .stat-card,
      #destinations-grid > div,
      #featured-packages-grid > div,
      #featured-destinations-grid > div,
      #packages-cards-container > div,
      #reviews-track > div,
      #reviews-grid > div,
      #related-spots-grid > div,
      #related-packages-grid > div,
      main .grid > div,
      section .grid > div
    `);

    const observer = getScrollObserver();

    targets.forEach((el) => {
      // Avoid animating elements in fixed docks, navbars, or modals
      if (el.closest('nav') || el.closest('header') || el.closest('.fixed') || el.closest('#media-lightbox-modal') || el.closest('.modal-backdrop')) return;

      // Avoid double-animating nested child items if an ancestor card is already animated
      if (el.parentElement && el.parentElement.closest('.reveal-on-scroll')) return;

      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
      }

      if (!el.classList.contains('card-hover-effect')) {
        el.classList.add('card-hover-effect');
      }

      // Apply natural staggered delays for grid siblings (0s, 0.1s, 0.2s, 0.3s)
      const parent = el.parentElement;
      if (parent && (parent.classList.contains('grid') || (parent.id && parent.id.includes('grid')) || (parent.id && parent.id.includes('cards')) || (parent.id && parent.id.includes('track')))) {
        const siblingIndex = Array.from(parent.children).indexOf(el);
        const delay = Math.min((siblingIndex % 4) * 0.1, 0.3);
        el.style.transitionDelay = `${delay}s`;
      }

      if (observer) {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      } else {
        el.classList.add('is-revealed');
      }
    });
  }

  // =========================================================================
  // UNIVERSAL MOBILE NAVIGATION DRAWER
  // =========================================================================
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

  // =========================================================================
  // LIVE SECTION HASH ROUTER & SCROLLSPY
  // Automatically updates the URL bar with #packages, #explore, #reviews as the user scrolls
  // =========================================================================
  function initSectionScrollSpy() {
    const sections = Array.from(document.querySelectorAll('header[id], section[id], footer[id]'));
    if (!sections.length) return;

    let isUserClickScroll = false;
    let currentActiveHash = window.location.hash || '';

    // Scroll listener with requestAnimationFrame throttling
    let ticking = false;
    function onScroll() {
      if (ticking || isUserClickScroll) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        
        // If at top of page (hero area), revert to clean root URL
        if (window.scrollY < 180) {
          if (window.location.hash && window.location.hash !== '') {
            history.replaceState(null, null, window.location.pathname + window.location.search);
            currentActiveHash = '';
            updateActiveNavLinks('');
          }
          return;
        }

        const scrollMid = window.scrollY + window.innerHeight * 0.38;
        let activeSection = null;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sec = sections[i];
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          if (scrollMid >= top && scrollMid < top + height) {
            activeSection = sec;
            break;
          }
        }

        if (activeSection && activeSection.id) {
          const newHash = '#' + activeSection.id;
          if (newHash !== currentActiveHash && activeSection.id !== 'hero') {
            currentActiveHash = newHash;
            history.replaceState(null, null, newHash);
            updateActiveNavLinks(activeSection.id);
          }
        }
      });
    }

    function updateActiveNavLinks(activeId) {
      document.querySelectorAll('nav a[href^="#"], .mobile-bottom-nav a[href^="#"]').forEach(a => {
        const href = a.getAttribute('href').replace('#', '');
        if (href === activeId) {
          a.classList.add('is-active', 'text-primary');
        } else {
          a.classList.remove('is-active');
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Handle smooth clicks for hash anchors with sticky navbar offset
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href').replace('#', '');
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        isUserClickScroll = true;
        currentActiveHash = '#' + targetId;
        history.pushState(null, null, '#' + targetId);
        updateActiveNavLinks(targetId);
        
        const headerOffset = 72;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });

        setTimeout(() => {
          isUserClickScroll = false;
        }, 900);
      }
    });

    // Check if loaded with existing hash
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const initialTarget = document.getElementById(hashId);
      if (initialTarget) {
        setTimeout(() => {
          const headerOffset = 72;
          const elementPosition = initialTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth',
          });
        }, 500);
      }
    }
  }

  // Automatic observer for dynamically rendered cards (MongoDB API sync, filters, categories)
  let domDebounce = null;
  function setupDynamicCardObserver() {
    if (!('MutationObserver' in window) || !document.body) return;
    const mutObserver = new MutationObserver((mutations) => {
      let shouldScan = false;
      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.addedNodes && m.addedNodes.length > 0) {
          for (let j = 0; j < m.addedNodes.length; j++) {
            const node = m.addedNodes[j];
            if (node.nodeType === 1) {
              if (
                node.classList?.contains('grid') || 
                (node.id && (node.id.includes('grid') || node.id.includes('cards') || node.id.includes('track'))) || 
                node.querySelector?.('.grid, [id*="grid"], [id*="cards"], [id*="track"], .card')
              ) {
                shouldScan = true;
                break;
              }
            }
          }
        }
        if (shouldScan) break;
      }

      if (shouldScan) {
        clearTimeout(domDebounce);
        domDebounce = setTimeout(() => {
          initScrollAnimations();
        }, 40);
      }
    });

    mutObserver.observe(document.body, { childList: true, subtree: true });
  }

  // =========================================================================
  // LIVE COUNTING NUMBER ANIMATION ENGINE (Fluid easing from 0 to target)
  // =========================================================================
  function initLiveCounters() {
    const counterElements = document.querySelectorAll('.live-counter-val');
    if (!counterElements.length) return;

    if (!('IntersectionObserver' in window)) {
      counterElements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startLiveCounting(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -20px 0px'
    });

    counterElements.forEach(el => observer.observe(el));
  }

  function startLiveCounting(el) {
    const target = parseFloat(el.getAttribute('data-target') || '0');
    const duration = parseInt(el.getAttribute('data-duration') || '1800', 10);
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';

    let startTime = null;

    function update(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = Math.max(0, currentTime - startTime);
      const progress = Math.min(Math.max(0, elapsed / duration), 1);
      // Silky cubic-out deceleration curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.max(0, target * ease).toFixed(decimals);

      el.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  // Run on load and observe dynamic insertions
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    setupDynamicCardObserver();
    initSectionScrollSpy();
    initLiveCounters();
    setTimeout(initScrollAnimations, 200);
    setTimeout(initScrollAnimations, 600);
    setTimeout(initScrollAnimations, 1200);
    setTimeout(initLiveCounters, 300);
  });

  // Expose globally for dynamic reruns
  window.TourstkAnimations = {
    refresh: () => {
      initScrollAnimations();
      initSectionScrollSpy();
      initLiveCounters();
    }
  };
})();
