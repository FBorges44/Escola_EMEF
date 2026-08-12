// Inicializar Biblioteca de Animações AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out'
  });
});

// 1. Menu Mobile Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
      menuIcon.classList.replace('ph-x', 'ph-list');
    } else {
      menuIcon.classList.replace('ph-list', 'ph-x');
    }
  });
}

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.replace('ph-x', 'ph-list');
  });
});

// 2. Modal Controls
const modal = document.getElementById('modal');

function openModal() {
  if (modal) modal.classList.remove('hidden');
}

function closeModal() {
  if (modal) modal.classList.add('hidden');
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

// 3. Formulários Interativos
function handleFormSubmit(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! A equipe da EMEF Maria Regina de Sousa responderá em breve.');
  e.target.reset();
}

function handleModalSubmit(e) {
  e.preventDefault();
  const contact = document.getElementById('modalEmail').value;
  alert(`Obrigado pelo interesse! Enviamos o PDF para: ${contact}`);
  closeModal();
  e.target.reset();
}

// 4. Animação de Contadores Numéricos (Intersection Observer)
let countersStarted = false;

function startCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 35;

    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

const metricsSection = document.getElementById('metricsSection');
if (metricsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        startCounters();
        countersStarted = true;
      }
    });
  }, { threshold: 0.3 });

  observer.observe(metricsSection);
}