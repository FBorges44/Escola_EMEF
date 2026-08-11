// Inicializar Biblioteca de Animações AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic'
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
  alert('Obrigado pelo interesse! Nossa equipe de captação enviará a apresentação detalhada para o e-mail cadastrado.');
  e.target.reset();
}

function handleModalSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('modalEmail').value;
  alert(`O link do Pitch Deck da EMEF Maria Regina foi enviado com sucesso para: ${email}!`);
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
    const speed = target / 40;

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
  }, { threshold: 0.4 });

  observer.observe(metricsSection);
}

// 5. Troca Interativa de Tabs no Plano de Expansão
function switchTab(tabKey) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.add('hidden'));

  // Reset tab buttons style
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('border-brandYellow', 'bg-slate-800', 'text-white');
    btn.classList.add('border-slate-800', 'bg-slate-900/50', 'text-slate-400');
  });

  // Show selected content
  const selectedContent = document.getElementById(`content-${tabKey}`);
  if (selectedContent) selectedContent.classList.remove('hidden');

  // Highlight selected tab button
  const selectedBtn = document.getElementById(`tab-${tabKey}`);
  if (selectedBtn) {
    selectedBtn.classList.remove('border-slate-800', 'bg-slate-900/50', 'text-slate-400');
    selectedBtn.classList.add('border-brandYellow', 'bg-slate-800', 'text-white');
  }
}

// 6. Simulação da Calculadora de Aporte
const rangeSelect = document.getElementById('rangeSelect');
const impactText = document.getElementById('impactText');

if (rangeSelect && impactText) {
  rangeSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === '50') {
      impactText.innerText = '+60 Alunos Beneficiados';
    } else if (val === '150') {
      impactText.innerText = '+150 Alunos Beneficiados';
    } else {
      impactText.innerText = '+300+ Alunos & Novo Bloco Completo';
    }
  });
}