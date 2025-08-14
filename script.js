// ===== Toggle Dark Mode =====
function toggleDark() {
  document.body.classList.toggle('dark');
}

// ===== Animate Skill Bars on Load =====
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-bar-inner').forEach(bar => {
    bar.style.width = bar.style.width; // ativa animação de gradiente
  });
});

// ===== Scroll Animations for Cards and Timeline =====
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.project, .timeline-item');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100; // distancia do topo para iniciar animação

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('show'); // ativa fade-in e slide
      // animação de fundo gradiente azul
      el.style.background = "linear-gradient(135deg, #1e3a8a, #3b82f6)";
      el.style.transition = "transform 0.6s, opacity 0.8s, background 0.8s";
    }
  });
};

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
