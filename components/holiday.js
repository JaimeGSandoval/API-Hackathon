const mobileClose = document.querySelector('.mobile-menu-close');
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const modalOverlay = document.querySelector('.modal-overlay');

function hiddenClass() {
  if (modalOverlay.classList.contains('hidden')) {
    modalOverlay.classList.remove('hidden');
  } else {
    modalOverlay.classList.add('hidden');
  }
}

mobileClose.addEventListener('click', hiddenClass);
mobileMenuIcon.addEventListener('click', hiddenClass);
