document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  // Nav scroll effect
  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    },
    { passive: true }
  );

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
  });

  // Close menu on nav link click
  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');

      // Smooth scroll with nav offset
      const href = item.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const navHeight = navbar.offsetHeight;
          const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }
    });
  });
});
