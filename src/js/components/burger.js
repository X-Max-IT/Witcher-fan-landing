export function initBurger() {
    const mobileMenu = document.querySelector('[data-js="mobile-menu"]');
    const burgerButton = document.querySelector('[data-js="burger-button"]');
    const links = document.querySelectorAll('[data-js="menu-list-item"]');

    burgerButton.addEventListener('click', () => {
        if (mobileMenu && burgerButton) {
            const isOpen =  mobileMenu.classList.toggle('is-open');
            burgerButton.ariaExpanded = String(isOpen);
        }
    })
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-open');
            burgerButton.ariaExpanded = 'false';
        })
    })
}