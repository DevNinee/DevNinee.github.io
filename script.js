function toggleDark() {
  document.body.classList.toggle('dark');
}

// Animação das barras de skill
window.addEventListener('load', ()=>{
  document.querySelectorAll('.skill-bar-inner').forEach(bar=>{
    bar.style.width = bar.style.width; // width definido no HTML
  });
});
