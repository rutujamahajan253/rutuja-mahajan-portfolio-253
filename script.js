document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    navLinks.forEach(n => n.classList.remove('active'));
    link.classList.add('active');

    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.remove('section-pulse');
    void target.offsetWidth;
    target.classList.add('section-pulse');
  });
});