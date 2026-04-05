// =============================================
// SAATHI — script.js
// =============================================

// ---- Trust Score Slider ----
const slider = document.getElementById('trust-slider');
const bar = document.getElementById('trust-bar');
const scoreDisplay = document.getElementById('score-display');

function updateTrustBar(value) {
  bar.style.width = value + '%';
  scoreDisplay.textContent = value;

  if (value <= 30) {
    bar.style.background = 'linear-gradient(90deg, #888888, #aaaaaa)';
  } else if (value <= 60) {
    bar.style.background = 'linear-gradient(90deg, #185FA5, #378ADD)';
  } else if (value <= 85) {
    bar.style.background = 'linear-gradient(90deg, #1B7B4B, #5DCAA5)';
  } else {
    bar.style.background = 'linear-gradient(90deg, #FF6B1A, #FFB347)';
  }
}

if (slider) {
  slider.addEventListener('input', () => {
    updateTrustBar(parseInt(slider.value));
  });
}

// ---- Waitlist Form ----
function handleWaitlist() {
  const input = document.getElementById('email-input');
  const msg = document.getElementById('success-msg');
  const btn = document.querySelector('.waitlist-form .btn-primary');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (input && emailRegex.test(input.value.trim())) {
    if (input) input.style.display = 'none';
    if (btn)   btn.style.display = 'none';
    if (msg)   msg.style.display = 'block';
  } else {
    if (input) {
      input.style.borderColor = '#C0392B';
      input.focus();
      setTimeout(() => { input.style.borderColor = ''; }, 1500);
    }
  }
}

// Allow Enter key on waitlist input
const emailInput = document.getElementById('email-input');
if (emailInput) {
  emailInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleWaitlist();
  });
}

// ---- Smooth Scroll ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---- Scroll Reveal Animation ----
const revealElements = document.querySelectorAll(
  '.step-card, .safety-card, .event-card, .problem-card, .tier-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  revealObserver.observe(el);
});

// ---- Sticky Nav Shadow on Scroll ----
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.07)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }
});
