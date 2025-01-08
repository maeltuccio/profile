console.log("connected baby");

// Gestion du clic pour zoomer les images
document.querySelectorAll('.clickable-image').forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('zoomed');
  });
});

// Gestion de l'effet 3D sur les images
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    if (!card.querySelector('.clickable-image').classList.contains('zoomed')) {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // Amplitude X augmentée
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30; // Amplitude Y augmentée
      card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    if (!card.querySelector('.clickable-image').classList.contains('zoomed')) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Reset position initiale
    }
  });
});
