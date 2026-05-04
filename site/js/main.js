/* ======================================================================
   Comfort Techs — main interactions
   ====================================================================== */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- nav: scrolled state + mobile drawer ---------- */
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  function setScrolled() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  function setNavOpen(open) {
    if (open) {
      const scrollY = window.scrollY;
      nav.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close menu');
      /* iOS-safe scroll lock — overflow:hidden on body doesn't work on Safari iOS */
      document.body.dataset.scrollLock = String(scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.classList.add('nav-locked');
    } else {
      const stored = parseInt(document.body.dataset.scrollLock || '0', 10);
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.classList.remove('nav-locked');
      delete document.body.dataset.scrollLock;
      if (stored) window.scrollTo(0, stored);
    }
  }
  navToggle.addEventListener('click', () => {
    setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setNavOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setNavOpen(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) setNavOpen(false);
  });

  /* ---------- scroll reveal: 3-layer fallback ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));

    /* layer 2: 600ms — anything within 2x viewport */
    setTimeout(() => {
      const vh = window.innerHeight;
      revealEls.forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 2) el.classList.add('in');
      });
    }, 600);
  }
  /* layer 3: 3s force reveal everything (covers screenshots, IO failures) */
  setTimeout(() => {
    revealEls.forEach((el) => el.classList.add('in'));
  }, 3000);

  /* ---------- count-up numbers (real quantities only — no years) ----------
     i18n.js rewrites innerHTML on its parents, replacing the [data-count]
     nodes. We (re)bind after every 'i18n:applied' event. On the FIRST apply
     we animate; on subsequent lang switches we just settle the new nodes
     immediately so the user doesn't see "0" pop in. */
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function animateCount(el) {
    if (el.dataset.done) return;
    const target = parseFloat(el.dataset.count);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const elapsed = Math.min((now - start) / duration, 1);
      const v = target * easeOutCubic(elapsed);
      el.textContent = Math.round(v).toLocaleString();
      if (elapsed < 1) requestAnimationFrame(tick);
      else { el.textContent = target.toLocaleString(); el.dataset.done = '1'; }
    }
    requestAnimationFrame(tick);
  }
  function settleAll() {
    document.querySelectorAll('[data-count]').forEach((el) => {
      el.textContent = parseFloat(el.dataset.count).toLocaleString();
      el.dataset.done = '1';
    });
  }
  function bindCountUp() {
    const countEls = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window && !reduceMotion) {
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            io2.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      countEls.forEach((el) => io2.observe(el));
    }
    setTimeout(settleAll, 2000);
  }
  document.addEventListener('i18n:applied', (e) => {
    if (e.detail && e.detail.first) bindCountUp();
    else settleAll();
  });

  /* ---------- GSAP hero parallax (loaded async) ---------- */
  if (typeof gsap !== 'undefined' && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    /* hero text reveal */
    gsap.from('.hero h1, .hero-sub, .hero-ctas, .hero-trust', {
      opacity: 0, y: 30, duration: 0.9, stagger: 0.12, ease: 'power3.out',
    });
    gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' });
    gsap.from('.hero-side .chip', {
      opacity: 0, x: 24, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.2,
    });
  }

  /* ---------- year in footer ---------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
