import { renderNavigation } from './components/Navigation.js';
import { renderFooter } from './components/Footer.js';

// Insert components into placeholders
document.addEventListener('DOMContentLoaded', () => {
    // Insert navigation
    const navPlaceholder = document.querySelector('#nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = renderNavigation();
    }

    // Insert footer
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = renderFooter();
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
}); 