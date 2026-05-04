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
      nav.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-locked');
    } else {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-locked');
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

  /* ---------- count-up numbers (real quantities only — no years) ---------- */
  const countEls = document.querySelectorAll('[data-count]');
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
  /* fallback: settle counters at 2s in case IO never fires */
  setTimeout(() => {
    countEls.forEach((el) => {
      if (!el.dataset.done) {
        el.textContent = parseFloat(el.dataset.count).toLocaleString();
        el.dataset.done = '1';
      }
    });
  }, 2000);

  /* ---------- GSAP hero parallax (loaded async) ---------- */
  if (typeof gsap !== 'undefined' && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    /* hero parallax on art */
    gsap.to('.hero-art', {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    /* hero text reveal */
    gsap.from('.hero h1, .hero-sub, .hero-ctas, .hero-trust', {
      opacity: 0, y: 30, duration: 0.9, stagger: 0.12, ease: 'power3.out',
    });
    gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' });
    gsap.from('.hero-art', {
      opacity: 0, scale: 0.96, duration: 1.1, ease: 'power3.out', delay: 0.2,
    });
  }

  /* ---------- year in footer ---------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
