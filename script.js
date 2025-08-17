const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (!body.classList.contains('light') && !body.classList.contains('dark')) {
  body.classList.add('light');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('light', 'dark');
  body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
});

function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal, .fade-in');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active', 'visible');
    } else {
      el.classList.remove('active', 'visible');
    }
  });
}

window.addEventListener('scroll', () => requestAnimationFrame(revealOnScroll));
window.addEventListener('load', revealOnScroll);
