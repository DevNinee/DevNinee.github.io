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
    const elementVisible = 100; // distancia do topo para começar animação
    
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('show'); // adiciona classe para animar
    }
  });
};

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // anima na carga da página
