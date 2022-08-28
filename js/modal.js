(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        openMobileMenuBtn: document.querySelector('.mobile-menu-open'),
        closeMobileMenuBtn: document.querySelector('.mobile-menu-close'),
        modal: document.querySelector('[data-modal]'),
        mobileMenu: document.querySelector('.mobile-menu'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
    refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }

    function toggleMobileMenu() {
        refs.mobileMenu.classList.toggle('is-hidden');
    }
})();
