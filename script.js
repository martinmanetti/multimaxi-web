const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.site-menu');

if (menuToggle && siteMenu) {
  const closeMenu = () => {
    siteMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = siteMenu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  siteMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

const tabButtons = document.querySelectorAll('.catalogue-tabs button');
const productCards = document.querySelectorAll('.product-card');

if (tabButtons.length && productCards.length) {
  const setActiveTab = (tabName) => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tab === tabName;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    productCards.forEach((card) => {
      const isVisible = card.dataset.tab === tabName;
      card.classList.toggle('is-hidden', !isVisible);
      card.hidden = !isVisible;
      card.setAttribute('aria-hidden', String(!isVisible));
    });
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab));
  });

  setActiveTab('principal');
}

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

const productImages = document.querySelectorAll('.product-visual');

productImages.forEach((image) => {
  image.addEventListener('click', () => {
    if (!modal || !modalImage) return;
    modalImage.src = image.src;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

if (modalClose && modal) {
  modalClose.addEventListener('click', () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  });
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}
