/* ==========================================
   MVP Portfolio – Main JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // NAVBAR SCROLL & HAMBURGER
  // ==========================================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  // Trigger on load
  if (window.scrollY > 20) navbar.classList.add('scrolled');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ==========================================
  // SCROLL REVEAL
  // ==========================================
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ==========================================
  // COUNTER ANIMATION (Hero stats)
  // ==========================================
  const counterEls = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        let current = 0;
        const increment = Math.ceil(target / 30);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current + (target > 2 ? '+' : '');
        }, 50);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => counterObserver.observe(el));

  // ==========================================
  // SKILL BAR ANIMATION
  // ==========================================
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const width = el.getAttribute('data-width');
        setTimeout(() => {
          el.style.width = width + '%';
        }, 200);
        skillObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(el => skillObserver.observe(el));

  // ==========================================
  // CODE RAIN (Hero background)
  // ==========================================
  const codeRain = document.getElementById('codeRain');
  if (codeRain) {
    const snippets = [
      'const dev = new Developer();',
      'function build(dreams) {',
      '  return reality;',
      '}',
      'import React from "react";',
      'const [state, setState]',
      '  = useState(null);',
      'useEffect(() => {',
      '  fetchData();',
      '}, []);',
      '.hero { display: flex; }',
      'git commit -m "feat: add"',
      'npm install && npm start',
      '<div className="app">',
      'SELECT * FROM projects;',
      'console.log("Hello");',
      'if (passion > 0) {',
      '  keepCoding();',
      '}',
      'export default App;',
      '@keyframes fadeIn {',
      '  from { opacity: 0; }',
      '}',
    ];
    let html = '';
    for (let i = 0; i < 35; i++) {
      html += snippets[Math.floor(Math.random() * snippets.length)] + '\n';
    }
    codeRain.textContent = html;
  }

  // ==========================================
  // PROJECT FILTER
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // CONTACT FORM VALIDATION
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const fields = [
        { id: 'name', errId: 'nameError', msg: 'Please enter your name.' },
        { id: 'email', errId: 'emailError', msg: 'Please enter a valid email.' },
        { id: 'subject', errId: 'subjectError', msg: 'Please enter a subject.' },
        { id: 'message', errId: 'messageError', msg: 'Please enter your message.' },
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errEl = document.getElementById(field.errId);
        const val = input.value.trim();

        input.classList.remove('error');
        errEl.textContent = '';

        if (!val) {
          input.classList.add('error');
          errEl.textContent = field.msg;
          isValid = false;
        } else if (field.id === 'email') {
          const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRe.test(val)) {
            input.classList.add('error');
            errEl.textContent = 'Please enter a valid email address.';
            isValid = false;
          }
        }
      });

      if (isValid) {
        const btn = document.getElementById('sendBtn');
        const btnText = document.getElementById('btnText');
        const btnSpinner = document.getElementById('btnSpinner');
        const successMsg = document.getElementById('formSuccess');

        btnText.style.display = 'none';
        btnSpinner.style.display = 'inline';
        btn.disabled = true;

        // Simulate sending
        setTimeout(() => {
          btnText.style.display = 'inline';
          btnSpinner.style.display = 'none';
          btn.disabled = false;
          contactForm.reset();
          successMsg.classList.add('show');
          setTimeout(() => successMsg.classList.remove('show'), 5000);
        }, 1800);
      }
    });

    // Live validation clear
    contactForm.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('input', () => {
        el.classList.remove('error');
        const errId = el.id + 'Error';
        const errEl = document.getElementById(errId);
        if (errEl) errEl.textContent = '';
      });
    });
  }

  // ==========================================
  // SMOOTH ANCHOR SCROLLING (for in-page links)
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ==========================================
  // SUBTLE CURSOR TRAIL GLOW ON HERO
  // ==========================================
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const glow = hero.querySelector('.hero-glow');
      if (glow) {
        glow.style.background = `radial-gradient(ellipse at ${x}% ${y}%, rgba(59,130,246,0.14) 0%, transparent 65%)`;
      }
    });
  }

});