/* ──────────────────────────────────────────── */
/*  Portfolio Script — Aman Deep                */
/* ──────────────────────────────────────────── */

'use strict';

/* ── Navbar: scroll-aware ── */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveLink();
}, { passive: true });

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));

  // Animate hamburger to X
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  const scrollMid = window.scrollY + window.innerHeight * 0.4;
  sections.forEach(section => {
    const top = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;
    const id = section.id;
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollMid >= top && scrollMid < bottom) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

/* ── Intersection Observer: reveal animations ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) : 0);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Add reveal class to elements
const revealTargets = [
  '.section-label', '.section-title',
  '.about-card', '.mini-card',
  '.skill-category', '.progress-section',
  '.project-card',
  '.contact-text'
];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.dataset.delay = String(i * 80);
    revealObserver.observe(el);
  });
});

/* ── Progress bars: animate on scroll ── */
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.progress-fill');
      fills.forEach(fill => {
        const target = fill.dataset.width;
        // Small delay to let reveal animation start
        setTimeout(() => {
          fill.style.width = target + '%';
        }, 300);
      });
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const progressSection = document.querySelector('.progress-section');
if (progressSection) progressObserver.observe(progressSection);

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── Smooth cursor dot (desktop only) ── */
if (window.matchMedia('(pointer: fine)').matches) {
  const dot = document.createElement('div');
  dot.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(47, 160, 132, 0.55);
    box-shadow: 0 0 12px rgba(47, 160, 132, 0.3);
    transform: translate(-50%, -50%);
    top: -20px; left: -20px;
    transition: top 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                left 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                width 0.2s ease, height 0.2s ease, opacity 0.25s ease;
    opacity: 0;
  `;
  document.body.appendChild(dot);

  document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    dot.style.opacity = '1';
  }, { passive: true });

  /* Scale up slightly when hovering interactive elements */
  const hoverTargets = 'a, button, .skill-tag, .glass-card, input, textarea';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.width = '28px';
      dot.style.height = '28px';
      dot.style.background = 'rgba(47, 160, 132, 0.35)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width = '18px';
      dot.style.height = '18px';
      dot.style.background = 'rgba(47, 160, 132, 0.55)';
    });
  });

  /* Hide dot when cursor leaves the window */
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; });
}

/* ── Typing animation in hero tagline ── */
(function initTypewriter() {
  const tagline = document.querySelector('.title-tagline');
  if (!tagline) return;

  const phrases = ['for the web.', 'that matter.', 'with passion.'];
  let phraseIdx = 0;
  let charIdx   = 0;
  let isDeleting = false;
  let baseText   = 'I build things<br/>for the ';

  const emEl = tagline.querySelector('em');
  if (!emEl) return;

  function type() {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      charIdx--;
    } else {
      charIdx++;
    }

    emEl.textContent = current.slice(0, charIdx);

    if (!isDeleting && charIdx === current.length) {
      setTimeout(() => { isDeleting = true; type(); }, 2200);
      return;
    }

    if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx  = (phraseIdx + 1) % phrases.length;
    }

    const speed = isDeleting ? 55 : 90;
    setTimeout(type, speed);
  }

  // Start after a short delay
  setTimeout(type, 2000);
})();

/* ── Skill tag hover ripple ── */
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.setProperty('--ripple', '1');
  });
});

/* ── Init ── */
updateActiveLink();
