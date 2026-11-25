
// Smooth reveal animation
const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.15});

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(25px)';
  card.style.transition = '0.7s ease';
  observer.observe(card);
});
