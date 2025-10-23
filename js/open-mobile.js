const mobileRefs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
};

mobileRefs.openModalBtn.addEventListener('click', toggleMobileMenu);
mobileRefs.closeModalBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileRefs.modal.classList.toggle('is-open');
};